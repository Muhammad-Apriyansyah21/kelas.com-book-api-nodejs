import dbpool from "../helper/db.js";

class Book {
  static getAll() {
    return dbpool.query("SELECT * FROM booksapi");
  }

  static getById() {
    return dbpool.query("SELECT * FROM booksapi WHERE id = ?", [id]);
  }

  static create({ kategori_id, penulis, judul }) {
    return dbpool.query(
      "INSERT INTO booksapi (kategori_id, penulis, judul) VALUE (?, ?, ?)",
      [kategori_id, penulis, judul]
    );
  }

  static update(id, { kategori_id, judul, penulis }) {
    return dbpool.query(
      "UPDATE booksapi SET kategori_id = ?, judul = ?, penulis = ?",
      [kategori_id, judul, penulis]
    );
  }

  static delete(id) {
    return dbpool.query("DELETE FROM booksapi WHERE id = ?", [id]);
  }
}

export default Book;
