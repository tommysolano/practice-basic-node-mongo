const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: boolean,
        default: false
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)