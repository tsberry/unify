const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const db = require("./models");
const bodyParser = require("body-parser");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

db.sequelize.sync({force: true})
    .then(function () {
        app.listen(PORT, function () {
            console.log(`🌎 ==> Server now on port ${PORT}!`);
        });
    });
