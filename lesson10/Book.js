class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string") {
      throw new Error("Title must be a string");
    }
    this._title = value;
  }

  printInfo() {
    console.log(
      `Книга: ${this.title}, Автор: ${this.author}, Год: ${this.year}`
    );
  }

  static findOldestBook(books) {
    return books.reduce((oldest, book) =>
      oldest.year < book.year ? oldest : book
    );
  }
}

module.exports = Book;
