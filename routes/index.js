const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// send 404 to requests for routes that don't exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;