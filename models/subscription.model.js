import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {},
    price: {},
    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP"],
      default: "USD",
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
        type: String,
        enum: ['']
    }
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subsciption", subscriptionSchema);

export default Subscription;
