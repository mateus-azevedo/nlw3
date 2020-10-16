module.exports = {

  index(req, res) {
    return res.render('index')
  },

  orphanage(req, res) {
    return res.render('orphanage')
  },

  orphanages(req, res) {
    return res.render('orphanges')
  },

  createOrphanage(req, res) {
    return res.render('create-orphanage')
  }
  
}