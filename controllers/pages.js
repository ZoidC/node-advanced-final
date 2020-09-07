const mongoose = require('mongoose');
const store = mongoose.model('store');

// Index
exports.index = async (req, res) => {
    // .lean() convert to native object
    const stores = await store.find({}).lean();
    res.render("pages/index", {
        title: "Welcome to Shops",
        stores: stores,
        showNav: true,
        showFooter: false
    });
};

exports.store = async (req, res) => {
    const store_uniq = await store.findOne({slug: req.params.slug}).lean();
    res.render("pages/store_details", {
        title: store_uniq.name + "'s details",
        store: store_uniq,
        showNav: true,
        showFooter: false
    });
};


// Add Store
exports.addStore = (req, res) => {
    res.render("pages/add_store", {
        title: "Add Store",
        showNav: true,
        showFooter: false
    });
};


// About
exports.about = (req, res) => {
    res.render("pages/about", {
        title: "About",
        showNav: true,
        showFooter: false
    });
};


// Contact
exports.contact = (req, res) => {
    res.render("pages/contact", {
        title: "Contact",
        showNav: true,
        showFooter: false
    });
};


// Login
exports.login = (req, res) => {
    res.render("pages/login", {
        title: "Login",
        showNav: true,
        showFooter: false
    });
};


// Register
exports.register = (req, res) => {
    res.render("pages/register", {
        title: "Register",
        showNav: true,
        showFooter: false
    });
};