const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { DB_URI } = require("./constants");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
  } catch (error) {
    process.exit(1);
  }
};
module.exports = connectDB;