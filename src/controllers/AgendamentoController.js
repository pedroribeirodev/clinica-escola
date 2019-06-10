const mongoose = require('mongoose');

const Agendamento = mongoose.model('Agendamento');

module.exports = {
    async index(req, res) {
        const agendamento = await Agendamento.find();

        return res.json(agendamento);
    },
    async show(req, res) {
        const agendamento = await Agendamento.findById(req.params.id);

        return res.json(agendamento);
    },
    async store(req, res) {
        const agendamento = await Agendamento.create(req.body);

        return res.json(agendamento);
    }
};