const router = require("express").Router();
const validator = require("../middlewares/validation");
const { getCurrentUser, updateUserInfo } = require("../controllers/users");

router.get("/me", getCurrentUser);
router.patch("/me", validator.updateUserJoi, updateUserInfo);

module.exports = router;
