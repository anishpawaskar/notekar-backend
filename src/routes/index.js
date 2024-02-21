import { Router } from "express";
import notes from "./notes";

const app = Router();

app.use("/notes", notes);

export default app;
