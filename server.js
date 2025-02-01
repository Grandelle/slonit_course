// команда запуска (из-за скрипта): npm run dev 

//Модули
const http = require('http'); // Для создания HTTP-сервера
const fs = require('fs'); // Для работы с файловой системой (чтение файлов)
const path = require('path'); // Для работы с путями файлов (определение расширений файлов)

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
    console.log(`Запрос: ${req.url}`);

    // Определяем путь к файлу
    let filePath = '.' + req.url;

    if (filePath == './') { // если запрашивайся коренвой путь
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase(); //смотрим расширение запрашиваемого файла

    // пишем mimi type под расширения
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'application/image/svg+xml',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Обработка стутаса ответа
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', (error, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            }
            else {
                res.writeHead(500);
                res.end(`Извините, произошла ошибка: ${error.code} ..\n`);
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });

}).listen(port, hostname, () => {
    console.log(`Сервер запущен на http://${hostname}:${port}/`);
});
