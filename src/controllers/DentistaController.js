const mongoose = require('mongoose');

const Dentista = mongoose.model('Dentista');

module.exports = {
    async index(req, res) {
        const dentistas = await Dentista.find();

        return res.json(dentistas);
    },

    async show(req, res) {
        const dentistas = await Dentista.findById(req.params.id);

        return res.json(dentistas);
    },

    async store(req, res) {
        const dentistas = await Dentista.create(req.body);

        return res.json(dentistas);
    },

    async update(req, res) {
        const dentistas = await Dentista.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(dentistas);
    },

    async destroy(req, res) {
        await Dentista.findByIdAndRemove(req.params.id);

        return res.send()
    }
};