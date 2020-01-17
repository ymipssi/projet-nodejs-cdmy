const mongoose = require('mongoose');
const {Schema} = mongoose;
// OU   const Schema = mongoose.Schema ;

let sessionSchema = new Schema({
    nom_promo: {
        type: String,
        required: "le nom est requis"
    },
    annee: {
        type: Number,
        required: "l année est requise"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Session', sessionSchema);

