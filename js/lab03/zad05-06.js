
// zad 5 Tablica unikalnych elementów 
// Problem: 
// Praktycznie w każdej aplikacji spotkamy się z tablicami przechowującymi różne dane. Czasami dane te mogą być zduplikowane, co nie zawsze jest dobrym rozwiązaniem, gdyż skutkuje przechowywaniem w pamięci dużych tablic, w których wielokrotnie występują te same wartości. Ponadto wszelkie operacje filtrowania i wyszukiwania w takich tablicach będą mało efektywne, jeśli muszą kilkakrotnie sprawdzać takie same dane. Rozwiązaniem tego problemu może być funkcja unique, która przyjmuje tablicę i zwraca również tablicę, lecz zawierającą wyłącznie unikalne elementy, czyli każdy element będzie w niej zapisany tylko raz. Obecnie w Array. prototype nie dysponujemy natywną metodą do tego zadania, dlatego musimy ją zaimplementować samodzielnie.



const tabOne = [1,2,3,3,1]


function unique(arr){
    const unikaty = []    
    for (let ele=0; ele<arr.length; ele++){
        if (!unikaty.includes(arr[ele])){
            unikaty.push(arr[ele])}

    }

    return unikaty
}

console.log(unique(tabOne));


// zad6
// Wyznaczenie przecięcia dwóch tablic Problem:
//  Naszym zadaniem jest stworzenie funkcji, która przyjmuje dwa parametry będące tablicami i zwraca nową tablicę, zawierającą tylko te elementy, które znajdują się w obu tablicach. Jest to tzw. przecięcie tablic, czyli wyszukanie ich części wspólnej. Obecnie nie mamy do dyspozycji natywnej metody wykonującej taką operację, musimy więc ją zaimplementować samodzielnie. Stworzymy więc samodzielną funkcję, analogicznie jak w przypadku wcześniejszej funkcji unique.


const tabTwo = [5,6,4,3,3,3,1,2]

function compare(one,two){
    const bothEle = []

    for ( let i =0;i<one.length;i++){
        if (two.includes(one[i]) && !bothEle.includes(one[i])){
            bothEle.push(one[i])
        }
    }
    return bothEle
}

console.log(compare(tabOne,tabTwo))