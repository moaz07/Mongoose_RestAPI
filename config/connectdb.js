const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://moazkm07:pKvhqCfwf11MCeLd@test.2wfxqgb.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DataBase connected successfully");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectdb;
