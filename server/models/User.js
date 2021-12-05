const mongoose = require('mongoose');
const { Schema, model} = mongoose;
// importing bcrypt for password security
const bcrypt = require('bcrypt');
// importing other model
const Order = require('./Order');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    orders: [Order.schema]
})

// This sets up a pre-save middleware to create the password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 69;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
})

// This checks and compares the incoming password with the currently hashed password
userSchema.methods.isCorrectpassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

// exports the model for use
module.exports = User;