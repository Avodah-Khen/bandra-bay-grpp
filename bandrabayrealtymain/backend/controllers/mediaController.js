//backend/controllers/mediaController.js
import Media from "../models/MediaData.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getMedia = asyncHandler(async (req, res) => {
  const { project = "bandra" } = req.query;

  const media = await Media.find({ project });

  res.json(media);
});