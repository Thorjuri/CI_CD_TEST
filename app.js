const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res)=> {
    res.send('workflow 첫 번째 테스트 : 수정 1')
})


app.listen(PORT, ()=>{
    console.log(`${PORT}번 서버 실행`)
})
