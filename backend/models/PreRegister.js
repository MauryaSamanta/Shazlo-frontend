import mongoose from "mongoose";

const preRegisterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (email) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: "Please enter a valid email address",
      },
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    phone: {
      type: String,
      trim: true,
      validate: {
        validator: function (phone) {
          return !phone || /^[\+]?[1-9][\d]{0,15}$/.test(phone);
        },
        message: "Please enter a valid phone number",
      },
    },
    interests: [
      {
        type: String,
        enum: [
          "fashion",
          "clothing",
          "shopping",
          "style",
          "trends",
          "wardrobe",
          "accessories",
        ],
      },
    ],
    referralSource: {
      type: String,
      enum: [
        "social_media",
        "friend_referral",
        "search_engine",
        "advertisement",
        "blog",
        "other",
      ],
      default: "other",
    },
    isNotified: {
      type: Boolean,
      default: false,
    },
    notificationPreferences: {
      email: {
        type: Boolean,
        default: true,
      },
      sms: {
        type: Boolean,
        default: false,
      },
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "notified"],
      default: "pending",
    },
    confirmationToken: {
      type: String,
      default: null,
    },
    ipAddress: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Index for faster queries
preRegisterSchema.index({ email: 1 });
preRegisterSchema.index({ createdAt: -1 });
preRegisterSchema.index({ status: 1 });

// Pre-save middleware to generate confirmation token
preRegisterSchema.pre("save", function (next) {
  if (this.isNew && !this.confirmationToken) {
    this.confirmationToken =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  }
  next();
});

// Instance method to mark as confirmed
preRegisterSchema.methods.confirm = function () {
  this.status = "confirmed";
  this.confirmationToken = null;
  return this.save();
};

// Static method to get registration stats
preRegisterSchema.statics.getStats = function () {
  return this.aggregate([
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: null,
        total: { $sum: "$count" },
        breakdown: {
          $push: {
            status: "$_id",
            count: "$count",
          },
        },
      },
    },
  ]);
};

const PreRegister = mongoose.model("PreRegister", preRegisterSchema);

export default PreRegister;
