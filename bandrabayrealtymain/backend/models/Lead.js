//backend/models/Lead.js
// import mongoose from "mongoose";

// const leadSchema = new mongoose.Schema(
//   {
//     siteId:    { type: String, required: true, index: true },
//     project: {
//       type: String,
//       default: "bandra", // future ready for media linking throughout page
//     },
//     firstName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     lastName: String,
//     email: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     buyerType: String,
//     budget: String,
//     developer: String,
//     purpose: String,
//   },
//   { timestamps: true }
// );

// leadSchema.index({ siteId: 1, email: 1, phone: 1 }, { unique: true });
// export default mongoose.model("leads", leadSchema);