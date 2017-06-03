const router = require("express").Router();
const controller = require("./controller")
// const views = require("./viewController");

//special routes (HTML ONLY)
// router.get("/new", (req, res) => {
//   res.json({
//     page: "This is the new form",
//   })
// });
//
// router.get("/:id(\\d+)/edit", (req, res) => {
//   res.json({
//     page: "This is the edit form",
//   })
// });

router.route("/")
  .get(controller.index);

router.route("/new")
  .get(controller.new)
  .post(controller.save);

  router.route("/:id/edit")
  .get(controller.update)
  .put(controller.showUpdate);

router.delete('/:id', controller.destroy);

router.get('/:id',controller.id);


module.exports = router; //end of index
