import { getNotes } from "../models/notes";

export const getAllNotes = (req, res) => {
  getNotes();
  return res.send("Return all notes");
};
