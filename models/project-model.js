const db = require('../data/connection')

module.exports = {
    getProjects,
    getProjectById,
    addProject
}

function getProjects(){
    return db('project')
}

function getProjectById(id){
    return db('project').where({id}).first()
}

function addProject(project){
    return db('project')
    .insert(project, "id")
    .then(([id]) => { return getProjectById(id)})
}