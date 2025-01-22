// SKRYPT 9
// Stwórz klasę `Car`, która będzie reprezentować samochód z określonymi atrybutami i metodą wyświetlania informacji o pojeździe.
// Szczegóły zadania:
// 1. Klasa `Car`:
//    - Powinna mieć trzy pola: `brand` (marka samochodu), `model` (model samochodu) oraz `year` (rok produkcji samochodu).
//    - Konstruktor klasy powinien przyjmować trzy argumenty i przypisywać je odpowiednio do pól `brand`, `model` i `year`.
// 2. Metoda `displayInfo()`:
//    - Powinna wyświetlać w konsoli informacje o samochodzie w formacie: `"Car: {brand} {model}, Year: {year}"`.
// Scenariusz testowy:
// 1. Utwórz obiekt klasy `Car`, reprezentujący samochód marki Toyota, model Corolla, z rokiem produkcji 2020.
// 2. Wywołaj metodę `displayInfo()`, aby wyświetlić informacje o samochodzie w konsoli.
// Oczekiwany wynik:
// Program powinien wyświetlić w konsoli następujący tekst: Car: Toyota Corolla, Year: 2020


class Car {
    constructor(brand,model,year) {
        this.brand=brand
        this.model =model
        this.year =year
    }

    displayInfo(){
        console.log(`Car: ${this.brand, this.brand}, Year: ${this.year}`);
        
    }
}

const myCar = new Car('Toyota','corolla', 2020)
myCar.displayInfo()