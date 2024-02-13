const mongoose = require("mongoose");

// מייצרים סכמה של איזה מאפיינים קיימים בקולקשן/טבלה
const vipSchema = new mongoose.Schema({
  name:String,
  worth:String,
  birth_year:String,
  source:String,
  cuntry:String,
  image:String,
})

// מייצר ומייצא מודל שמורכב משם הקולקשן והסכמה 
exports.VipModel = mongoose.model("vips",vipSchema)