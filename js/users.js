const express = require("express")
const router = express.Router()

let users = [
    {id: 1, nama: "Hotlytia", email: "hotly@gmail.com"},
    {id: 2, nama: "Hotly", email: "tia@gmail.com"}
]

router.route('/users')
 .get((req, res) => {
    res.json(users)
})
 .post((req, res) => {
    users.push(req.body)
    res.send(users)
})

router.put('/users/:id', (req, res) => {
    const id = req.params
    res.send(id)
})

router.delete('/users/:userId', (req, res) => {
    res.send(req.params.userId)
})

module.exports = router