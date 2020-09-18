const express = require('express')
const helmet = require('helmet')
const projectRouter = require('./routers/project-router')
const resourceRouter = require('./routers/resource-router')
const taskRouter = require('./routers/task-router')
const server = express()

server.use(express.json())
server.use(helmet())
server.use("/api/project", projectRouter)
server.use("/api/resource", resourceRouter)
server.use("/api/task", taskRouter)

server.get("/", (req, res) => {
    if(req){
        res.status(200).send("<h1>Howdy Pardner</h1>")
    } else{
        res.status(500).json({ errorMessage: "I have no idea why we got this" })
    }
})

const port = process.env.PORT || 666
server.listen(port, () => {
    console.log(`Server up and listening on Satan's port: ${port}.`)
})