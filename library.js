// Task 1:
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2:
Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
};

// Task 3:
let library = [];

function addBook(book) {
    library.push(book);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase() === title.toLowerCase());
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase() === author.toLowerCase());
}

// Example usage:
let book1 = new Book("1984", "George Orwell", 328);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

addBook(book1);
addBook(book2);

console.log(searchByTitle("1984"));
console.log(searchByAuthor("Harper Lee"));

// Task 4:
let booksOver100Pages = library.filter(book => book.pages > 100);

let formattedBooks = library.map(book => ({
    title: "Title: " + book.title,
    author: "Author: " + book.author
}));

console.log(booksOver100Pages);
console.log(formattedBooks);
