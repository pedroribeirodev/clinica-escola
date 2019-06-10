const mongoose = require('mongoose');

const AtendimentoSchema = new mongoose.Schema({

    nomePaciente: {
        type: String,
        required: true,
    },
    dataAtendimento: {
        type: Date,
        required: true,
    },
    materiaisUtilizados: {
        type: [String],
        required: true,
    },
    servicoFeito: {
        type: String,
        required: true
    } 
});

mongoose.model('Atendimento', AtendimentoSchema);