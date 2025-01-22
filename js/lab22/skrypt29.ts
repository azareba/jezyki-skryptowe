class Book {
    private id: number;  // Prywatny identyfikator książki
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id
        this.title = title
        this.author = author
    }
    public opis(): string {
        return `ID: ${this.id} tytul: ${this.title} autor: ${this.author}`
    }
    public tytul(title: string): boolean {
        return this.title.toLowerCase() === title.toLowerCase()
    }
}

class Library {
    private books: Book[] = []

    public dodaj(book: Book): void {
        this.books.push(book);
    }
    public poTytule(title: string): Book[] {
        return this.books.filter(book => book.tytul(title));
    }
    public wszytskieKsiazki(): void {
        if (this.books.length === 0) {
            console.log("nie ma ksiazek");
        } else {
            this.books.forEach(book => {
                console.log(book.opis());
            });
        }
    }
}

const library = new Library();
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

library.wszytskieKsiazki()
const szukaj = library.poTytule('Mistrz i Małgorzata')

szukaj.forEach(ksiazka => console.log(ksiazka.opis()))