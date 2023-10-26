const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  // public 디렉토리 내의 static 파일을 제공

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    console.log(req.body.inputData);  // 여기서 inputData는 index.html의 input의 name attribute와 같아야 합니다.
    res.send('Data received!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
