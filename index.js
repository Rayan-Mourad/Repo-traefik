const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('Hello World!');
});

app.get('/rayan',(req, res) => {
    res.send('Hello Rayan!');
});


app.listen(port, () => {
    console.log(`Server running at https://localhost:$(port)`);
});

