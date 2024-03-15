const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const path = require('path');

// CORS 미들웨어 추가
app.use(cors());

// Body 파싱 미들웨어 추가
app.use(express.json());

const port = 3000;

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));

// SQLite 데이터베이스 연결
const db = new sqlite3.Database('../../db/memos.sqlite', (err) => {
    if (err) {
        return console.error('SQLite 연결 실패:', err.message);
    }
    console.log('SQLite 연결 성공!');
});

// GET: 메모 목록 조회
app.get('/memos', (req, res) => {
    db.all('SELECT * FROM memoList', (err, rows) => {
        if (err) {
            res.status(500).send({ error: '데이터베이스 조회 오류' });
        } else {
            console.log('rows1111111111', rows);
            res.send(rows);
        }
    });
});

// POST: 새로운 메모 추가
app.post('/memos', (req, res) => {
    const { text } = req.body;
    db.run('INSERT INTO memoList (text) VALUES (?)', [text], function(err) {
        if (err) {
            res.status(500).send({ error: '메모 추가 실패' });
        } else {
            res.send({ message: '메모가 추가되었습니다.', memoId: this.lastID });
        }
    });
});

// PUT: 메모 수정
app.put('/memos/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    db.run('UPDATE memoList SET text = ? WHERE id = ?', [text, id], function(err) {
        if (err) {
            res.status(500).send({ error: '메모 수정 실패' });
        } else {
            res.send({ message: '메모가 수정되었습니다.' });
        }
    });
});

// DELETE: 메모 삭제
app.delete('/memos/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM memoList WHERE id = ?', [id], function(err) {
        if (err) {
            res.status(500).send({ error: '메모 삭제 실패' });
        } else {
            res.send({ message: '메모가 삭제되었습니다.' });
        }
    });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Express 앱이 포트 ${port}에서 실행 중`);
});
