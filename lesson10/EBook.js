const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  printInfo() {
    super.printInfo();
    console.log(`Формат: ${this.format}`);
  }

  static createFromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}

module.exports = EBook;
