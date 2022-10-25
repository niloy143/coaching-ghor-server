const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(cors())

const courses = require('./courses.json')

app.get('/', (req, res) => {
    res.send('Coaching Ghor Server Is Running...')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`Coaching Ghor Server Is Running on ${port}`)
})