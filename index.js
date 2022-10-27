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

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === id) || {};
    res.send(course)
})

app.get('/courses/free', (req, res) => {
    const courseList = courses.filter(course => !(course.price))
    res.send(courseList)
})

app.get('/courses/paid', (req, res) => {
    const courseList = courses.filter(course => !!(course.price))
    res.send(courseList)
})

app.listen(port, () => {
    console.log(`Coaching Ghor Server Is Running on ${port}`)
})