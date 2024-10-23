const mongoose = require("mongoose");

function connectionDB() {
  try {
    console.log("connection to DB");
    return mongoose.connect("mongodb+srv://yashaavakar:Yash0821@cluster0.fu57j.mongodb.net/");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "DB error",
      success: false,
    });
  }
}

module.exports = connectionDB;
