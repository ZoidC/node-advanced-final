const mongoose = require('mongoose');
const store = mongoose.model('store');

exports.index = async (req, res) => {
    const stores = await store.find({});
    res.render("pages/index", {
        title: "Welcome to Shops",
        stores: stores,
        showNav: true,
        showFooter: false
    });
};

exports.addStore = (req, res) => {
    res.render("pages/add_store", {
        title: "Add Store",
        showNav: true,
        showFooter: false
    });
};

exports.about = (req, res) => {
    res.render("pages/about", {
        title: "About",
        showNav: true,
        showFooter: false
    });
};

exports.contact = (req, res) => {
    res.render("pages/contact", {
        title: "Contact",
        showNav: true,
        showFooter: false
    });
};

exports.login = (req, res) => {
    res.render("pages/login", {
        title: "Login",
        showNav: true,
        showFooter: false
    });
};

exports.register = (req, res) => {
    res.render("pages/register", {
        title: "Register",
        showNav: true,
        showFooter: false
    });
};