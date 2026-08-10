//backend/models/MediaData.js
import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    siteId:    { type: String, required: true, index: true },
    project: {
      type: String,
      default: "bandra",
    },
    section: String,   // hero, district, lifestyle
    key: String,       // main, water, city
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Media", mediaSchema, "bbmain_mediaData"); //CHECK THIS 

// Note: May needed to be modified based on other group sites