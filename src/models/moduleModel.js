const mongoose = require('mongoose');
const {Schema} = mongoose;
// nom du module, id intervenant, id session, date de début, date de fin

let moduleSchema = new Schema({
    nom_module: {
        type: String,
        required: "le nom est requis"
    },
    date_debut: {
        type: Date,
        required: "la date debut est requise"
    },
    date_fin: {
        type: Date,
        required: "la date fin est requise"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: String
    },
    session_id: {
        type: String
    }
})

module.exports = mongoose.model('Module', moduleSchema);
