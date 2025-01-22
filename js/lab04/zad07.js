// Skrypt 7. Określanie wieku w latach
// Problem: Kolejny problem, jaki musimy rozwiązać, to sprawdzenie, ile skończonych lat ma osoba o wskazanej dacie urodzenia w formularzu. Wbrew pozorom problem wcale nie jest taki trywialny. Czy możemy po prostu obliczyć różnicę między rokiem obecnym a wskazanym rokiem urodzenia? Otóż nie, ponieważ w takim przypadku narażamy się na błąd w sytuacji, gdy osoba w dniu sprawdzenia nie miała jeszcze urodzin. Załóżmy, że mamy dzisiaj 22 czerwca 2019 roku. Osoba urodzona w roku 1986 przed 22 czerwca będzie miała jeszcze 32 skończone lata, a jej 33 urodziny będą dopiero 22 czerwca. Jest to bardzo ważne, np. gdy chcemy analizować, czy użytkownik jest osobą pełnoletnią, co pozwoli mu na wykonanie jakiejś czynności w naszej aplikacji. 

// Zadanie. Należy zaimplementować algorytm w oddzielnej funkcji, która na podstawie podanego roku, miesiąca i dnia urodzenia w formularzu sprawdzi, ile skończonych lat ma użytkownik. Wynikmwypisze pod formularzem. Wykorzystaj funkcję Date() w JavaSript.


const form = document.getElementById('form')
const birth = document.getElementById('birth')
const wynik = document.getElementById('wynik')

form.addEventListener('submit', e=>{
    e.preventDefault()
    const czyPelnoletni = ileLat(birth.value)
    if (czyPelnoletni) { 
        wynik.innerHTML = 'uzytkownik jest pelnoletni'}
    else {
        wynik.innerHTML = 'uzytkownik NIE jest pelnoletni'}
})

const ileLat = (birth)=>{
    const curDate = new Date()
    const birthDate = new Date(birth)

    let age = curDate.getFullYear() - birthDate.getFullYear()
    const miesRoznica = curDate.getMonth() - birthDate.getMonth()

    if (miesRoznica < 0 || (miesRoznica === 0 && curDate.getDate() < birthDate.getDate())) age --

    if (age >= 18) return true
    else return false
    
    
}
