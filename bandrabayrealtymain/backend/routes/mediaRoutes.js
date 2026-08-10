//backend/routes/mediaRoutes.js

import express from "express";
import { getMedia } from "../controllers/mediaController.js";

const router = express.Router();

router.get("/", getMedia);

export default router;