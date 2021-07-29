const express = require('express');

const app = express();

app.use(() => {
    console.log('test');
    console.log('testis');
});

app.listen(3000);