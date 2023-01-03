const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
      title: String,
      username: String,
      searchDate: { type: Date, default: Date.now },
    },
    { timestamps: true });
  
    module.exports =  mongoose.model("users", userSchema);


  