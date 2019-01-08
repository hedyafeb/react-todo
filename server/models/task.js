const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({ 
    title: {
        type: String,
        required: [true, 'title must be filled']
    },
    status: {
        type: String,
        default: 'pending'
    },
    due_date: Date,
    userID: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)


module.exports = Task;

