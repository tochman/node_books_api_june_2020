const models = require('../models')

const booksController = {
  async index(request, response, next) {
    const booksIndex = await models.Book.findAll({
      include: [
        {
          model: models.Author,
          as: 'author',
        }
      ]
    })
    response.send({ books: booksIndex })
  },

  async show(request, response, next) {
    const { id } = request.params
    const book = await models.Book.findByPk(id, {
      include: [
        {
          model: models.Author,
          as: 'author',
          attributes: ['firstName']
        }
      ],
      attributes: ['title']
    })
    response.send({ book: book })
  }
}

module.exports = booksController