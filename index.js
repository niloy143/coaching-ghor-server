const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Coaching Ghor Server Is Running...')
})

app.listen(port, () => {
    console.log(`Coaching Ghor Server Is Running on ${port}`)
})