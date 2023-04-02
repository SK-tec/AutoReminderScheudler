const express = require("express");
const router = express.Router();
const { createEnquiry, remainderMail } = require("../controllers/mailer");

router.post("/", createEnquiry);

module.exports = router;
