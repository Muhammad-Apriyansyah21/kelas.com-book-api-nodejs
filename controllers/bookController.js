import Book from "../models/book.js";
import { success, error } from "../helper/responses.js";
import { bookSchema } from "../validator/bookValidator.js";

export const getBook = async (req, res, next) => {
  try {
    const [result] = await Book.getAll();
    console.log(result);

    success(res, "OK", result);
  } catch (err) {
    console.log("terjadi error:" + err.message);
    next(err);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const [result] = await Book.geyByID();
    success(res, "OK", result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const value = await bookSchema.validateAsync(req.body);
    const [result] = await bookSchema.create(value);
    success(res, "Berhasil Tambah");
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
