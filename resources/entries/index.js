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


router.delete('/:id', controller.destroy);

router.get('/:id',controller.id);

router.route("/:id/edit")
  .get(controller.update)
  .put(controller.showUpdate);

// //put route here for PUT/hotels/:id
// router.puts("/:id", (req, res) => {
//   res.json({
//     page: `This is the PUT for ${req.params.id}`,
//   })
// });
//
// //put route here for DELETE /hotels/:id
// router.delete("/:id", (req, res) => {
//   res.json({
//     page: `This is the DELETE for ${req.params.id}`,
//   })
// });
//
// router.route("/")
//   .get(controller.index)
//   .post(controller.create);
//
// //put route here for GET /hotels]
// // router.get("/", (req, res) => {
// //   res.json({
// //     page: "This is the hotel listings page",
// //   })
// // });
//
// //put route here for POST /hotels
// // router.post("/", (req, res) => {
// //   res.json({
// //     page: "This is the incoming data from a post",
// //   })
// });

module.exports = router;
