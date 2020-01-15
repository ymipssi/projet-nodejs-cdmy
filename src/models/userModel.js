const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;

let userSchema = new Schema ({
    role: {
        type: String,
        required: true
<<<<<<< HEAD
        //// les valeurs seront rempli via DropDownList mis en place au niveau du front
=======
        //// les valeurs seront rempli via DDL mis en place au niveau du front
>>>>>>> 066bb63cb24c4af571a9491b130581c8279c1229
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

<<<<<<< HEAD
module.exports = mongoose.model('User', userSchema);

=======
module.exports = mongoose.model('User', userSchema);
>>>>>>> 066bb63cb24c4af571a9491b130581c8279c1229
