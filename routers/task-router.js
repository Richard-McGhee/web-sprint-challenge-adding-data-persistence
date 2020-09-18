const express = require('express')
const db = require('../models/task-model')
const router = express.Router()

router.get("/", (req, res) => {
    db.getTasks()
    .then(tasks => {
        res.status(200).json({ data: tasks})
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.post("/", (req, res) => {
    db.addTask(req.body)
    .then(newTask => {
        res.status(201).json({ data: newTask})
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

module.exports = router