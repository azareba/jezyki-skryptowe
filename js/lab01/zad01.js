// Skrypt 1. Utwórz formularz zawierający pola: imię nazwisko, email -  sprawdzający, czy imię i nazwisko zawiera dozwolone 
// polskie znaki, duże pierwsze litery, adres email jest odpowiednio sformatowany i w przypadku poprawnego wpisania wyświetla
//  poprawne dane na stronie np alert. (może reagować na wciśnięcie przycisku) 

const form = document.getElementById("form")
const imie = document.getElementById("imie")
const nazw = document.getElementById("nazw")
const email = document.getElementById("email")

form.addEventListener('submit', e =>{
    e.preventDefault()
    
    if (poprawneInputy()){
        alert('Dane są poprawne: \nImię: ' + imie.value + '\nNazwisko: ' + nazw.value + '\nEmail: ' + email.value);
    }else{
        alert('dane są nie ok')
        }
    }

)


const sprawdzTekst = tekst =>{
    const reg = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$/
    return reg.test(tekst)
}

const sprawdzEmail = email =>{
    const reg = /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]+@[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]\.[A-Za-z]+$/
    return reg.test(email)
}



const poprawneInputy = ()=>
    sprawdzTekst(imie.value.trim()) &&
    sprawdzTekst(nazw.value.trim()) &&
    sprawdzEmail(email.value.trim())

