const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    isAdmin: { type: Number, default: 0 }, // isAdmin field as Number with default 0
    email: { type: String }
});

// Create and export the User model using mongoose.model()
const User = mongoose.model('User', UserSchema); // Notice the lowercase 'user' for mongoose.model()

module.exports = User;
