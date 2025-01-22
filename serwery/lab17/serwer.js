const express = require('express'); 
const bodyParser = require('body-parser'); 
const mysql = require('mysql2');

const db = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'haslo',
    database: 'my_database',
});

db.connect((err) => {
    if (err) {
        console.error('nie da sie polaczyc  z baza danych', err); 
        process.exit(1); 
    } 
    console.log('polaczono z sql')
});

const app = express()
app.use(bodyParser.json())

app.post('/submit', (req, res) => {
    const { imie, nazwisko, email, kierunek, grupa } = req.body

    const query = 'INSERT INTO students (name, surname, email, kierunek, grupa) VALUES (?, ?, ?, ?, ?)'
    db.query(query, [imie, nazwisko, email, kierunek, grupa], (err, result) => {
        if (err) {
            console.error('nie zapisano danych', err)
            res.status(500).send('nie zapisano danyc')
            return;
        }
        res.send('zapisano dane')
    });
});

app.get('/data', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) {
            console.error('nie zapisano danych', err)
            res.status(500).send('nie zapisano danyc')
            return;
        }
        res.json(results)
    });
});

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`)
})















///////////////
// const express = require('express'); 
// const mysql = require('mysql2');

// const db = mysql.createConnection({ 
//     host: 'localhost', // Adres serwera bazy danych 
//     user: 'root', // Użytkownik MySQL 
//     password: haslo , // Hasło MySQL 
//     database: 'my_database' // Nazwa bazy danych });
// })

// const app = express();


// app.get('/name', (req, res) => {
//     db.query('SELECT imie FROM osoba LIMIT 1', (err, results) => {
//         if (err) {
//             res.status(500).send('Błąd serwera');
//             return;
//         }
//         res.send(`Imię: ${results[0].imie}`);
//     });
// });



//////////////////////
// const express = require('express'); 
// const bodyParser = require('body-parser'); 
// const mysql = require('mysql2');

// const db = mysql.createConnection({ 
//     host: 'localhost', // Adres serwera bazy danych 
//     user: 'root', // Użytkownik MySQL 
//     password: 'haslo' , // Hasło MySQL 
//     database: 'my_database' // Nazwa bazy danych });
// })

// db.connect((err) => {
//     if (err) {
//         console.error('Nie udało się połączyć z bazą danych:', err); 
//         process.exit(1); 
//     } 
//     console.log('Połączono z bazą danych MySQL.');
//     });
// const app = express();
// app.use(bodyParser.json()); 
// app.use((req, res, next) => { 
//     res.setHeader('Access-Control-Allow-Origin', '*'); 
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
//     next(); 
// });