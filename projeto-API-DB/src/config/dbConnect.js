const mongoose = require("mongoose");

const connect = async () => {
    try {
      mongoose.connect(process.env.ADMIN_ID, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connection successful.");
    } catch (error) {
      console.error(error);
    }
  };
  module.exports = {
    connect,
  };
