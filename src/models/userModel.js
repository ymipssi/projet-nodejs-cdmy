const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;

let userSchema = new Schema ({
    role: {
        type: String,
        required: true
        //// les valeurs seront rempli via DDL mis en place au niveau du front
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true
    },
    hash_password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: String    
    }
})

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('User', userSchema);