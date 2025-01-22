import './style.css';

// Pobranie elementów z DOM
const counterSpan = document.getElementById('counter') as HTMLSpanElement;
const incrementButton = document.getElementById('increment') as HTMLButtonElement;
const decrementButton = document.getElementById('decrement') as HTMLButtonElement;

// Inicjalizacja licznika
let counterValue = 0;

// Funkcja do aktualizacji wartości licznika w interfejsie
const updateCounter = () => {
  counterSpan.textContent = counterValue.toString();
};

// Obsługa kliknięcia przycisku "Inkrementacja"
incrementButton.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

// Obsługa kliknięcia przycisku "Dekrementacja"
decrementButton.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

// Ustawienie początkowej wartości licznika
updateCounter();
