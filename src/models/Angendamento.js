const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({

    atendente: {
        type: String,
        required: true,
    },
    formaPagamento: {
        type: String,
        required: true,
    },
    tipoAtendimento: {
        type: String,
        required: true,
    },
    dataAgendamento: {
        type: Date,
        required: true,
    },
    diaSemana: {
        type: [String],
        required: true,
    }
});

mongoose.model('Agendamento', AgendamentoSchema);