// NODE
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!');
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

/////////////////////////
// EXPRESS
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome to Express!');
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });




////////////
// const os = require('os'); 
// console.log(`System operacyjny: ${os.platform()}`);
// >> System operacyjny: win32

const math = require('./math'); 
console.log(math.add(2, 3)); // 5
