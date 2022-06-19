const express = require("express");

const router = express.Router();

const { UserController } = require("../controllers");

router.post("/users/login", UserController.login);
router.post("/users/register", UserController.register);

router.post("/members", UserController.add)
router.get("/users", UserController.browse);
router.put("/users/:id", UserController.edit);
router.get("/users/:id", UserController.read);


module.exports = router;