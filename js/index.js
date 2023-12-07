const express = require('express')
const userRouter = require('./router/users')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    const kelas = {
        id: 1,
        nama: "JavaScript"
    }
    // console.log("Hello World")
    res.json(kelas)
})

app.get('/about', (req, res) => {
    res.redirect('http://expressjs.com/en/guide/routing.html')
})

app.use(userRouter)

app.listen(port, () => {
    console.log('Server runs well')
})
