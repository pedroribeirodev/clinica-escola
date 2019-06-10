const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('User', UserSchema);