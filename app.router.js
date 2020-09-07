const express = require("express");
const router = express.Router();
const pageController = require("./controllers/pages");

// • Routes
router.get('/', pageController.index);
router.get('/add_store', pageController.addStore);
router.get('/about', pageController.about);
router.get('/contact', pageController.contact);
router.get('/login', pageController.login);
router.get('/register', pageController.register);

module.exports = router;