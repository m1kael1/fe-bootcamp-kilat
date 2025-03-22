import { apiResolver } from "../../utils/api";
import axios from "../axios";
import { Note, NoteDTO, Response } from "./types";

const getNotes = () => {};

const getNoteById = () => {};

const deleteNote = async () => {};

const createNote = (payload: NoteDTO) => {
  return apiResolver<Response<Note>>(() => axios.post("/notes", payload));
};

const editNote = () => {};

export { getNotes, deleteNote, createNote, editNote, getNoteById };
