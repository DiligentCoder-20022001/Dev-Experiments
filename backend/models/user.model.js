//defining the user model 
const mongoose = require('mongoose');
const schema = mongoose.Schema;

//we will be adding validations here  -> type of username should be string, it must be unique, at least of 3 characters long and whitespaces must be trimmed of from the end
const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true, 
        trim: true,
        minLength: 3
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;