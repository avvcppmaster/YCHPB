const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const QRCode = require('qrcode');

const app = express();
const PORT = process.PORT || 3000;

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'YCHPB'
});

// Middleware для обработки JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

console.log('fdgdf');

app.get('/home', (req, res) => {
    console.log("g");
    res.sendFile(__dirname, '/public/home.html');
});

app.post('/api/users', async (req, res) => {
    const { name } = req.body;
    console.log("!!!!");
    try {
        const result = await pool.query('SELECT fio FROM Users WHERE userID=\$1', [name]);
        console.log(result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Ошибка сервера');
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});