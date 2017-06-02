const Entry = require("../../models/entries");

module.exports = {
  index: (req, res) => {
    Entry.findAll()
    .then((entry) => {
      res.render('entries/index', {
        entry: entry
      })
    })
  },
  id: (req, res) => {
    Entry.findById(req.params.id)
    .then((id) => {
      res.render('entries/id', {
        entry: id
      })
    })
  },
  new: (req, res) => {
    res.render("entries/new")
  },
  save: (req, res) => {
    Entry.save(req.body.entry)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res.send(err);
    });
  },
  update: (req, res) => {
    Entry.findById(req.params.id)
    .then((entry) => {
      console.log('entry', entry)
      res.render("entries/edit", {
        entry: entry
      })
    })
  },
  destroy: (req, res) => {
    Entry.destroy(req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },
  showUpdate: (req, res) => {
    Entry.update(req.body.entry)
    .then(() => {
      res.redirect('/');
    }).catch((error) =>{
      console.log('update error', error)
    })
  }
}
