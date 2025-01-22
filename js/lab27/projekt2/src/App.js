import React, { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [people, setPeople] = useState('');
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Wysyłanie:', { location, startDate, endDate, people });
    // Tutaj możesz dodać logikę wysyłania danych formularza
    const formData = { location, startDate, endDate, people }
    setSubmittedData(formData)
    console.log('Wysyłanie:', formData)
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Miejscowość"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ilość osób"
          value={people}
          onChange={e => setPeople(e.target.value)}
        />
        <button type="submit">Szukaj</button>
      </form>
      {submittedData && (
        <div className="wynik">
          <h3>Wprowadzone dane:</h3>
          <p>mijesowosc: {submittedData.location}</p>
          <p>Data rozp: {submittedData.startDate}</p> 
          <p>Data zak: {submittedData.endDate}</p>
          <p>Ilosc osob: {submittedData.people}</p> 
        </div> 
      )}
    </div>
  );
}


export default App;
