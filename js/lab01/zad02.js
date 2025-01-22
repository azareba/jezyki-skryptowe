// Pobierz 7 liczb jednocyfrowych z pola tekstowego, zapisz do tablicy 7-elementowej JavaScript, znajdź element 
// największy i wypisz  go na stronie HTML pod polem tekstowym. Użyj Funkcji.

const form = document.getElementById('form')
const cyfry = document.getElementById('cyfry')
const wynik = document.getElementById('wynik')

form.addEventListener('submit', e =>{
    e.preventDefault()

    const maxCyfra = najw()

    if (maxCyfra !== null && !isNaN(maxCyfra)){
        wynik.innerHTML = "twoja najwieksza cyfra to: "+maxCyfra;
    }else{
        wynik.innerHTML = "twoje cyfry nie sa podane poprawnie"
        }
    }
)

// 1,2,3,4,5,6,7

const najw = ()=>{
    const lista = cyfry.value.trim().split(',').map(e=> +e)
    listaCyfr= lista.filter(e=> e >= -9 && e <= 9)
    
    if (listaCyfr.length === 7){
        return  Math.max(...listaCyfr)
    }else{
        return null
    }
}