// Skrypt 3.  Napisz funkcję pobierająca numer elementu ciągu Fibonacciego, obliczający ten element i wypisujący  w przeglądarce


// Skrypt 4. Pobierz 2 liczby całkowite w polach tekstowych formularza i obliczający NWD tych liczb.


const form = document.getElementById("form")
const fibNum = document.getElementById("fibNum")
const wynikFib = document.getElementById('wynikFib')

const nwd = document.getElementById("nwd")
const wynikNwd = document.getElementById('wynikNwd')

form.addEventListener('submit', e=>{
    e.preventDefault()

    const twojFib = obliczFib(+fibNum.value)
    const twojNwd = obliczNwd()

    if (twojFib !== null ){
        wynikFib.innerHTML = 'Twoj wynik dla ciagu fib: '+twojFib
    }else{
        wynikFib.innerHTML = 'niepoprawne dane'
    }

    if (twojNwd !== null){
        wynikNwd.innerHTML = 'nwd twoich liczb: '+twojNwd
    }else{
        wynikNwd.innerHTML = 'niepoprawne dane'
    }

})
// unsigned int fib(int n)
// {
//     if(n == 0) return 0;
//     if(n == 1) return 1;
//     return fib(n-1)+fib(n-2);
// }
const obliczFib= (num ) => {
    if (num === 0) return 0
    else if (num=== 1) return 1
    return obliczFib(num-1)+obliczFib(num-2)

}

// def nwd_i(a, b):
//     while b:
//         a, b = b, a%b
//     return a
const obliczNwd= () => {
    const listaNwd = nwd.value.split(',').map(e=> +e)
    if (listaNwd.length !== 2 || listaNwd.some(isNaN)) return null; 

    let a = listaNwd[0]
    let b = listaNwd[1]

    while (b){
        let temp = b
        b= a%b
        a= temp
    }
    return a
}
