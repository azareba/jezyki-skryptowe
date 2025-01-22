var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    Book.prototype.opis = function () {
        return "Id ksia\u017Cki ".concat(this.id, ", tytu\u0142 i autor: ").concat((this.title, this.author));
    };
    Book.prototype.tytul = function () {
        return this.title;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = []; // Tablica przechowująca książki 
        //Przetestować dla 10 książek (10 obiektów book dodać do obiektu Library
        // sprawdzić działanie metod.
    }
    // Dodawanie książki do biblioteki (tablicy) – Metod (metodą push() dodawć book-a do Library
    Library.prototype.dodajBook = function (new_book) {
        this.books.push(new_book);
    };
    // Wyszukiwanie książki po tytule – Metoda
    Library.prototype.znajdz_tytul = function (title_book) {
        var found = false; // Flaga do śledzenia, czy książka została znaleziona
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].tytul() === title_book) {
                console.log("Znaleziono ksi\u0105\u017Ck\u0119: ".concat(this.books[i].opis()));
                found = true;
                break; // Przerwanie pętli po znalezieniu książki
            }
        }
        if (!found) {
            console.log("Nie znaleziono ksi\u0105\u017Cki o tytule \"".concat(title_book, "\"."));
        }
    };
    // Wyświetlenie wszystkich książek – Metoda
    Library.prototype.wyswietlAll = function () {
        this.books.forEach(function (book) { return console.log(book.opis()); });
    };
    return Library;
}());
var b1 = new Book(1, 't1', 'a1');
var b2 = new Book(2, 't2', 'a2');
var b3 = new Book(3, 't3', 'a3');
var biblioteka = new Library;
biblioteka.dodajBook(b1);
biblioteka.dodajBook(b2);
biblioteka.dodajBook(b3);
biblioteka.znajdz_tytul('t2');
biblioteka.wyswietlAll();
