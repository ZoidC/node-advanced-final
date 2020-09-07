const router = require("./app.router");
const engine = require("express-hbs");
const express = require("express");
const app = express();

// • Config Engine
app.engine('hbs', engine.express4({
    partialsDir: `${process.cwd()}/views/partials`,
    defaultLayout: `${process.cwd()}/views/layouts/default.hbs`
}));

// • Use Engine
app.set('view engine', 'hbs');
app.set('views', `${process.cwd()}/views`);

// • Middleware
app.use((req, res, next) => {
    console.log(`• ${req.url}`);
    next();
});

// • Static Files (contains next())
app.use(express.static(`${process.cwd()}/public`));

// • Route
app.use(router);

module.exports = app;