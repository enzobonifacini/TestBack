import mongoose from "mongoose";
import * as fs from 'fs'

const itemSchema = new mongoose.Schema({
  iid: {
    type: String,
    required: true,
    trim: true,
  },
  sku: {
    type: String,
    trim: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trip: true,
    unique: true
  },
  description: {
    type: String,
  },
  img_front: {
    type: String,
},
  img_back: {
    type: String,
},
  category: {
    type: String,
  },
  licence: {
    type: String,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  discout: {
    type: Number,
  },
  dues: {
    type: String,
  }
}, {
  timestamps: true
});

export default mongoose.model("Item", itemSchema);
