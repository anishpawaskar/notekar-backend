import { Router } from "express";
import { getAllNotes } from "../controllers/notes";

const router = Router();

router.get("/", getAllNotes);

export default router;
