const express = require('express')
const db = require('../models/project-model')
const router = express.Router()

router.get("/", (req, res) => {
    db.getProjects()
    .then(projects => {
        res.status(200).json({ data: projects})
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.post("/", (req, res) => {
    db.addProject(req.body)
    .then(newProject => {
        res.status(201).json({ data: newProject})
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

module.exports = router