const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
    name: {
        type: String,
        default: 'username',
    },
    age: {
        type: Number,
        default: 18,
    },
});

module.exports = mongoose.model('user', userModel);
