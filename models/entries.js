const db = require("../config/database");

module.exports = {
  findAll() {
    return db.any(`
      SELECT *
      FROM life_entries
      ORDER BY date_created DESC;
      `)
  },
  findById(id) {
    return db.one(`
      SELECT *
      FROM life_entries
      WHERE id = $1`, id)
  },
  save(entry) {
  return db.one(`
    INSERT INTO life_entries (
      title,
      entry,
      image,
      age
    ) VALUES (
      $/title/,
      $/text/,
      $/image/,
      $/age/
    )
    RETURNING *
  `, entry);
},
  update(entry) {
    return db.one(`
      UPDATE life_entries
      SET title = $/title/,
          entry =  $/text/,
          image = $/image/,
          age =   $/age/
      WHERE id =  $/id/
      RETURNING *
      `, entry);
  },
  destroy(id) {
    return db.none(`
      DELETE FROM life_entries
      WHERE id = $1`, [id]);
  }
}
