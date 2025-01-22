var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    Book.prototype.opis = function () {
        return "ID: ".concat(this.id, " tytul: ").concat(this.title, " autor: ").concat(this.author);
    };
    Book.prototype.tytul = function (title) {
        return this.title.toLowerCase() === title.toLowerCase();
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.dodaj = function (book) {
        this.books.push(book);
    };
    Library.prototype.poTytule = function (title) {
        return this.books.filter(function (book) { return book.tytul(title); });
    };
    Library.prototype.wszytskieKsiazki = function () {
        if (this.books.length === 0) {
            console.log("nie ma ksiazek");
        }
        else {
            this.books.forEach(function (book) {
                console.log(book.opis());
            });
        }
    };
    return Library;
}());
var library = new Library();
library.dodaj(new Book(1, "Wojna i pokój", "Lew Tołstoj"));
library.dodaj(new Book(2, "Zbrodnia i kara", "Fiodor Dostojewski"));
library.dodaj(new Book(3, "Mistrz i Małgorzata", "Michaił Bułhakow"));
library.dodaj(new Book(4, "Lalka", "Bolesław Prus"));
library.dodaj(new Book(5, "Przedwiośnie", "Stefan Żeromski"));
library.dodaj(new Book(6, "Pani Bovary", "Gustave Flaubert"));
library.dodaj(new Book(7, "Duma i uprzedzenie", "Jane Austen"));
library.dodaj(new Book(8, "Czarnoksiężnik z Archipelagu", "Ursula K. Le Guin"));
library.dodaj(new Book(9, "Pociąg do Polski", "Marek Krajewski"));
library.dodaj(new Book(10, "Śmierć w Wenecji", "Thomas Mann"));
library.wszytskieKsiazki();
var szukaj = library.poTytule('Mistrz i Małgorzata');
szukaj.forEach(function (ksiazka) { return console.log(ksiazka.opis()); });
