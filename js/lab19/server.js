const express = require('express');
const cors = require('cors');
const os = require('os');
const app = express();
const PORT = 3000;
const fs = require('fs')
const path = require('path')


app.use(cors()); // Włącz obsługę CORS

// Endpoint: Informacje o systemie
app.get('/api/system-info', (req, res) => {
    const systemInfo = {
        osType: os.type(),
        platform: os.platform(),
        kernelVersion: os.version(),
        architecture: os.arch(),
        hostname: os.hostname(),
        totalMemory: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
        freeMemory: (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
        uptime: formatUptime(os.uptime()),
        cpus: os.cpus().map((cpu, index) => ({
            core: index + 1,
            model: cpu.model,
            speed: `${cpu.speed} MHz`,
        })),
    };
    res.send(`
        <html>
            <head>
                <title>Informacje o systemie</title>
            </head>
            <body>
                <h1>Informacje o systemie</h1>
                <pre>${JSON.stringify(systemInfo, null, 2)}</pre>
            </body>
        </html>
    `);
});
// Endpoint: Informacje o interfejsach sieciowych
app.get('/api/network-stats', (req, res) => {
    const networkInterfaces = os.networkInterfaces();
    const stats = Object.entries(networkInterfaces).map(([name, interfaces]) => ({
        interface: name,
        addresses: interfaces.map(i => ({
            family: i.family,
            address: i.address,
            mac: i.mac,
        })),
    }));
    res.send(`
        <html>
            <head>
                <title>Informacje o interfejsach sieciowych</title>
            </head>
            <body>
                <h1>Interfejsy sieciowe</h1>
                <pre>${JSON.stringify(stats, null, 2)}</pre>
            </body>
        </html>
    `);
});


////Endpoint podglądu katalogu//////////////
// Endpoint: Podgląd katalogu
app.get('/api/files', (req, res) => {
    const directoryPath = process.cwd(); // Możesz zmienić na ścieżkę, którą chcesz wyświetlić

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send(`
                <html>
                    <head>
                        <title>Błąd</title>
                    </head>
                    <body>
                        <h1>Nie udało się pobrać plików</h1>
                        <p>${err.message}</p>
                    </body>
                </html>
            `);
        }

        const fileDetails = files.map(file => {
            const filePath = path.join(directoryPath, file);
            const stat = fs.statSync(filePath);

            return {
                name: file,
                isDirectory: stat.isDirectory(),
                size: stat.size,
                createdAt: stat.birthtime,
                modifiedAt: stat.mtime
            };
        });

        res.send(`
            <html>
                <head>
                    <title>Informacje o bieżącym w katalogu</title>
                </head>
                <body>
                    <h1>Informacje o bieżącym w katalogu</h1>
                    <pre>${JSON.stringify(fileDetails, null, 2)}</pre>
                </body>
            </html>
        `);
    });
});


// Formatowanie czasu działania systemu
function formatUptime(seconds) {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

// Start serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
    
});
