import mongoose from "mongoose";

const { Schema } = mongoose;

const donationSchema = new Schema(
  {
    item: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    mobileNo: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);



export default mongoose.model("Need", donationSchema);
