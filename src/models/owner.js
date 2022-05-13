import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
}
);

module.exports = mongoose.model("Owner", ownerSchema);