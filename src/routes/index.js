import { Router } from "express";
import notes from "./notes.js";

const app = Router();

app.use("/notes", notes);

export default app;
