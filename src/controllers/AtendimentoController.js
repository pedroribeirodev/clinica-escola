const mongoose = require('mongoose');

const Atendimento = mongoose.model('Atendimento');

module.exports = {
    async index(req, res) {
        const atendimentos = await Atendimento.find();

        return res.json(atendimentos);
    },

    async show(req, res) {
        const atendimentos = await Atendimento.findById(req.params.id);

        return res.json(atendimentos);
    },

    async store(req, res) {
        const atendimentos = await Atendimento.create(req.body);

        return res.json(atendimentos);
    }    
};