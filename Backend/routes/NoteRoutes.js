import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  createNote,
  getNotes,
  getById,
  updateNote,
  deleteNote,
  toggleFavorite,
} from "../controllers/NoteController.js";

const router = express.Router();

router.post("/", protect, createNote);
router.get("/", protect, getNotes);
router.get("/:id", protect, getById);
router.put("/:id", protect, updateNote);

router.patch("/:id/favorite", protect, toggleFavorite);

router.delete("/:id", protect, deleteNote);

export default router;
