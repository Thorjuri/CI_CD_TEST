const express = require('express');
const app = express();
const PORT = 4000;


app.get('/', (req, res)=> {
    res.send('CI/CD 연습용 서버')
})


app.listen(PORT, ()=>{
    console.log(`${PORT}번 서버 실행`)
})