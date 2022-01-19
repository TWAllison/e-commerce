require("dotenv").config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
//https://drive.google.com/file/d/1QauE9LGQGhlXqq7L_YMj9jSVrsfCFvXe/view
//https://drive.google.com/file/d/1w_eU743drg1xlEg8-CLbQyQybPDkEf8z/view