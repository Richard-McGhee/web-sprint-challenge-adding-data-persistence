const db = require('../data/connection')

module.exports = {
    getTasks,
    getTaskById,
    addTask
}

function getTasks(){
    return db('task')
    .join('project', 'task.projectID', 'project.id')
    .select('task.*', 'project.name as ProjectName', 'project.description as ProjectDescription')
}

function getTaskById(id){
    return db('task').where({id}).first()
}

function addTask(task){
    return db('task')
    .insert(task, "id")
    .then(([id]) => { return getTaskById(id)})
}