const express = require("express");

// const { sequelize } = require("./models/Product");
const sequelize = require("./config/connection");
const routes = require("./routes");
// require("dotenv").config();
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

const init = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

init();
