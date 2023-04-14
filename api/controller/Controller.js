const database = require('../models')

class Controller {
    static async all(req, res) {
        try {
            const allDados = await database.pedidos.findAll()
            return res.json(allDados)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = Controller