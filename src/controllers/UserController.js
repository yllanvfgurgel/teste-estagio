const knex = require('../database')

module.exports = {
    async index(req, res) {
        const results = await knex('users')

        return res.render('index', { users: results })
    },
    create(req, res) {
        return res.render('create')
    },
    async post(req, res) {
        
        const keys = Object.keys(req.body)
        for(key of keys) {
            if(req.body[key] == '') {
                return res.render('error')
            }
        }
        
        const { name, email, password } = req.body
        

        await knex('users').insert({
            name, email, password
        })

        return res.redirect('/users')
    },
    async edit(req, res) {

        const idUser = req.params.id

        const foundUser = await knex('users').where({id: idUser})

        return res.render('edit', { user: foundUser[0] })
    },
    async put(req, res) {

        const keys = Object.keys(req.body)
        for(key of keys) {
            if(req.body[key] == '') {
                return res.render('error')
            }
        }
        
        const { id, name, email, password } = req.body

        await knex('users').where({ id: id }).update({ name: name, email: email, password: password })

        return res.redirect('/users')

    },
    async delete(req, res) {
        
        const { id } = req.body

        await knex('users').where({ id: id }).del()

        return res.redirect('/users')
    }
}