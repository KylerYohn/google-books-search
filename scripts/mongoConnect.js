import mongoose from "mongoose";

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  function(err) {
    if (err) throw err;
    else {
      console.log("you are connected");
    }
  }
);
