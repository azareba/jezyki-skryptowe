class Book { 
    private id: number; // Prywatny identyfikator książki
    private title: string; 
    private author: string;

    constructor(id: number,title: string,author: string){
        this.id=id
        this.title= title
        this.author = author
    }

    public opis(){
        return `Id ksiażki ${this.id}, tytuł i autor: ${this.title,this.author}`
    }

    public tytul(){
        return this.title
    }
}    

class Library { 
    private books: Book[] = []; // Tablica przechowująca książki 
    
    // Dodawanie książki do biblioteki (tablicy) – Metod (metodą push() dodawć book-a do Library
    public dodajBook(new_book:Book){
        this.books.push(new_book)
    }

    // Wyszukiwanie książki po tytule – Metoda
    public znajdz_tytul(title_book: string) {
        let znalez = false; 

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].tytul() === title_book) {
                console.log(`znaleziono ksiazke: ${this.books[i].opis()}`);
                znalez = true;
                break;
            }
        }

        if (!znalez) {
            console.log(`Nie znaleziono książki o tytule "${title_book}".`);
        }
    }
    // Wyświetlenie wszystkich książek – Metoda
    public wyswietlAll(){
        this.books.forEach(book=> console.log(book.opis()))
    }
    //Przetestować dla 10 książek (10 obiektów book dodać do obiektu Library
    // sprawdzić działanie metod.
}


const b1 = new Book(1,'t1','a1')
const b2 = new Book(2,'t2','a2')
const b3 = new Book(3,'t3','a3')

const biblioteka = new Library
biblioteka.dodajBook(b1)
biblioteka.dodajBook(b2)
biblioteka.dodajBook(b3)

biblioteka.znajdz_tytul('t2')

biblioteka.wyswietlAll()