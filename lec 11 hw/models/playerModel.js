const mongoose = require("mongoose");

// מייצרים סכמה של איזה מאפיינים קיימים בקולקשן/טבלה
const playerSchema = new mongoose.Schema({
  name:String,
  age:Number
})

// מייצר ומייצא מודל שמורכב משם הקולקשן והסכמה 
exports.PlayerModel = mongoose.model("players",playerSchema)