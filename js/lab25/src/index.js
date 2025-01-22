// import './style.css';

const form = document.getElementById('form')
const n = document.getElementById('n')

function sitoErasto(liczba){
    //tworzenie listy od 2 do n
    // const liczbyPierwsze = new Array(liczba).fill().map((e,i)=>i+1)
    const liczbyPierwsze = new Array(liczba+1).fill() //[1,...,n]
    liczbyPierwsze[0] = liczbyPierwsze[1] = false;
    for (let i=2;i*i<=liczba;i++){
        if (liczbyPierwsze[i]){
            for (let j = i * i; j <= liczba; j += i) {
                liczbyPierwsze[j] = false;
            }
        }
    }
    return liczbyPierwsze
        .map((isPrime, index) => (isPrime ? index : null))
        .filter((num) => num !== null);
}

console.log(sitoErasto(5))
form.addEventListener('submit', e=>{
    e.preventDefault()
    const liczba = parseFloat(n.value)

    if (isNaN(liczba) || liczba < 2) {
        alert('Proszę podać liczbę całkowitą większą lub równą 2.');
        return;
    }

    const liczbyPierwszeDoN = sitoErasto(liczba);

    const wynikElement = document.getElementById('wynik');
    wynikElement.textContent = `Liczby pierwsze do ${liczba}: ${liczbyPierwszeDoN}`;

    })

// const component = () => {
//   const element = document.createElement('div');
//   element.innerHTML = sitoErasto(n.value);
//   element.classList.add('hello');
//   return element;
// };

// document.body.appendChild(component());
