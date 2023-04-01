const router = require("express").Router();

const authRoute = require("./home");

router.use("/", authRoute);

module.exports = router;
