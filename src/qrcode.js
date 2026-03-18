const QRCode = require('qrcode');

const url = 'https://github.com/';

QRCode.toFile('qrcode.png', url, {
    color: {
        dark: '#000000',
        light: '#ffffff'
    }
}, (err) => {
    if (err) {
        console.error('Ошибка:', err);
    } else {
        console.log('QR-код сохранён в файл qrcode.png');
    }
});