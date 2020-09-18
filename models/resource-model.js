const db = require('../data/connection')

module.exports = {
    getResources,
    getResourceById,
    addResource
}

function getResources(){
    return db('resource')
}

function getResourceById(id){
    return db('resource').where({id}).first()
}

function addResource(resource){
    return db('resource')
    .insert(resource, "id")
    .then(([id]) => { return getResourceById(id)})
}