
import React, { useState } from 'react';
import './App.css';

function App() {
  const [numer, setNumer] = useState('');
  const [wynik, setWynik] = useState(null)

  const algoNewtonRap = (n)=>{
    if (n<0) return NaN
    let x=n
    for (let i=0;i<10;i++) {
      x = 0.5* (x+n/x)
    }
    return x
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Wysyłanie:', { location, startDate, endDate, people });
    const num = parseInt(numer)
    if (!isNaN(num) && num >=0){
      setWynik(algoNewtonRap(num))
    }else{
      setWynik('ma byc liczba calkowita >= 0')
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={numer}
          onChange={e => setNumer(e.target.value)}
        />
        
        <button type="submit">Oblicz</button>
      </form>

      {wynik !== null &&(
        <div className='wynik'>
            <p>wynik: </p>
            <p>{wynik}</p>
        </div>
      )}
    </div>
  )
}

export default App;
