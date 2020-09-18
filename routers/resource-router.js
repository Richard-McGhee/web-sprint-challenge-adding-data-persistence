const express = require('express')
const db = require('../models/resource-model')
const router = express.Router()

router.get("/", (req, res) => {
    db.getResources()
    .then(resources => {
        res.status(200).json({ data: resources})
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.post("/", (req, res) => {
    db.addResource(req.body)
    .then(newResource => {
        res.status(201).json({ data: newResource})
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

module.exports = router