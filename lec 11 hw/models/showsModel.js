const mongoose = require("mongoose");

// מייצרים סכמה של איזה מאפיינים קיימים בקולקשן/טבלה
const showsSchema = new mongoose.Schema({
  name:String,
  genere:String,
  kind:String,
  views:Number,
  image:String,
  description:String,
  seson:Number
})

// מייצר ומייצא מודל שמורכב משם הקולקשן והסכמה 
exports.ShowsModel = mongoose.model("shows",showsSchema)