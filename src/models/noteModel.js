const mongoose = require('mongoose');
const {Schema} = mongoose;
// (id étudiant, id module, note, message)

let noteSchema = new Schema({
    note: {
        type: Number,
        required: "la note est requise"
    },
    message: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: String    
    },
    module_id: {
        type: String    
    }
})

module.exports = mongoose.model('Note', moduleSchema);