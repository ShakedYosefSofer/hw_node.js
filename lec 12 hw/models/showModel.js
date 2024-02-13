const mongoose = require("mongoose");
const Joi = require("joi");
// joi

// יצירת סכמה של הקולקשן
// ישמש בשביל בקשות POST AND PUT/EDIT
const showSchema = new mongoose.Schema({
  name: String,
  genere: String,
  kind: String,
  views: Number,
  image: String,
  descrption: String
})

exports.ShowModel = mongoose.model("shows", showSchema);

// פונקציה שתבדוק תקינות הבאדי שנשלח בהתאם לסכמה
exports.validateShow = (_reqBody) => {
  const joiSchema = Joi.object({
    // requires - מחייב שהמאפיין יהיה קיים בבאדי
    name:Joi.string().min(2).max(100).required(),
    genere:Joi.string().min(2).max(100).required(),
    kind:Joi.string().min(2).max(100).required(),
    views:Joi.number().min(1).max(999999).required(),
    image:Joi.string().min(2).max(300).required(),
    descrption:Joi.string().min(2).max(500).required()
  })
  return joiSchema.validate(_reqBody)
}