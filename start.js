// npm init -y
// npm install express
// npm install express-hbs
// npm install dotenv
// npm install mongoose

// • Check
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major <= 10 && minor <= 2) {
    console.log("Node version to low.");
    throw("Node version to low.");
}

require('dotenv').config({path: '.config.env'});


const initServer = async () => {
    // • Connect Mongo DB
    const mongoose = require("mongoose");
    mongoose.Promise = global.Promise;
    try {
        await mongoose.connect(process.env.DB_HOST, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Mongo is connected.");
    } catch (err) {
        if (err) throw err;
    }

    require(`${process.cwd()}/models/store`);

    // • Start App
    const app = require(`${process.cwd()}/app`);
    app.set('port', process.env.PORT || 8001);
    const server = app.listen(app.get('port'), () => {
        console.log(`Express running - PORT ${server.address().port}`);
    });
}

initServer();