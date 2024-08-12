const Book = require("./Book");
const EBook = require("./EBook");

const book1 = new Book("Война и мир", "Лев Толстой", 1869);
const book2 = new Book("Преступление и наказание", "Федор Достоевский", 1866);
const ebook1 = new EBook("1984", "Джордж Оруэлл", 1949, "epub");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

const oldestBook = Book.findOldestBook([book1, book2, ebook1]);
console.log("Самая старая книга:", oldestBook.title);

const newEBook = EBook.createFromBook(book1, "pdf");
newEBook.printInfo();
