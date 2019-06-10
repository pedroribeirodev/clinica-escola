const mongoose = require('mongoose');

const DentistaSchema = new mongoose.Schema({

    nomeDentista: {
        type: String,
        required: true,
    },
    croDentista: {
        type: String,
        required: true,
    },
    diasAtendimento: {
        type: [String],
        required: true,
    }
});

mongoose.model('Dentista', DentistaSchema);