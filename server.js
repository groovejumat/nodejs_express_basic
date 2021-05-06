const express = require('express'); // express모듈 불러오기

// Constants
const PORT = 5000; // express 서버포트
const HOST = '0.0.0.0'; // 호스트 지정

// App
const app = express(); //새로운 express어플을 생성
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');  
});


app.listen(PORT, HOST); //해당 포트와 호스트에서 HTTP 서버를 시작
console.log(`Running on http://${HOST}:${PORT}`);
