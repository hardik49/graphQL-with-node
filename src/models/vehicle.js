import mongoose from "mongoose";

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
}
);

module.exports = mongoose.model("Vehicle", vehicleSchema);