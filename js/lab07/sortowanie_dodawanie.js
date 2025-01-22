
function countingSort(tablica) {
    const max = Math.max(...tablica);
    const licznik = new Array(max + 1).fill(0);
    const wynik = new Array(tablica.length);

    //wystapienia
    for (let i = 0; i < tablica.length; i++) {
        licznik[tablica[i]]++;
    }
    //sumowanie
    for (let i = 1; i < licznik.length; i++) {
        licznik[i] += licznik[i - 1];
    }

    for (let i = tablica.length - 1; i >= 0; i--) {
        wynik[licznik[tablica[i]] - 1] = tablica[i];
        licznik[tablica[i]]--;
    }

    return wynik;
}

// Przykładowa tablica do posortowania
const tablica = [4, 2, 2, 8, 3, 3, 1];
console.log("Tablica wejściowa:", tablica);
const sortedArr = countingSort(tablica);
console.log("Posortowana tablica:", sortedArr);
