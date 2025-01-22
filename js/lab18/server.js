const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

console.log('Serwer WebSocket działa na ws://localhost:3000');

// Obsługa połączeń WebSocket
server.on('connection', (socket) => {
    console.log('Nowy klient połączony');

    // Obsługa odebranych wiadomości od klienta
    socket.on('message', (message) => {
        console.log(`Odebrano: ${message}`);

        // Wysyłanie wiadomości do wszystkich klientów
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
    socket.on('close', () => {
        console.log('klient jest rozlaczony');
    });
});