import { fetchNotes } from "../models/notes.js";

export const getAllNotes = (req, res) => {
  fetchNotes();
  return res.send("Return all notes");
};
