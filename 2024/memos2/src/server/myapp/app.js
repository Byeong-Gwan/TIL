const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// CORS 미들웨어 추가
app.use(cors());

// Body-parser 미들웨어 추가
app.use(bodyParser.json());


const port = 3000;

// 정적 파일 제공 설정
const clientPath = path.join(__dirname, '../../client');
app.use(express.static(clientPath));

// SQLite 데이터베이스 연결
const db = new sqlite3.Database('../../db/memos.sqlite', (err) => {
    if (err) {
        return console.error('SQLite 연결 실패:', err.message);
    }
    console.log('SQLite 연결 성공!');
});

// GET: 메모 목록 조회
app.get('/memoList', (req, res) => {
    db.all('SELECT * FROM memoList', (err, rows) => {
        if (err) {
            res.status(500).send({ error: '데이터베이스 조회 오류' });
        } else {
            console.log('rows:', rows);
            console.log('rows1111111111',rows);
            res.send(rows);
        }
    });
});

// POST: 새로운 메모 추가
app.post('/memoList', (req, res) => {
    const { text } = req.body;
    db.run('INSERT INTO memoList (text) VALUES (?)', [text], function(err) {
        if (err) {
            res.status(500).send({ error: '메모 추가 실패' });
        } else {
            res.send({ message: '메모가 추가되었습니다.', memoId: this.lastID });
        }
    });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Express 앱이 포트 ${port}에서 실행 중`);
});
