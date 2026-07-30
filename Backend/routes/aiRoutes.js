import express from "express";
import protect from "../middleware/authMiddleware.js";
import { generateFlashcards } from "../controllers/aiController.js";

const router = express.Router();

router.post("/flashcards", protect, generateFlashcards);

export default router;
