const mongoose = require("mongoose");
const Joi = require("joi");
// joi

// יצירת סכמה של הקולקשן
// ישמש בשביל בקשות POST AND PUT/EDIT
const carSchema = new mongoose.Schema({
  name: String,
  color: String,
  year: Number
})

exports.CarModel = mongoose.model("cars", carSchema);

// פונקציה שתבדוק תקינות הבאדי שנשלח בהתאם לסכמה
exports.validateCar = (_reqBody) => {
  const joiSchema = Joi.object({
    // requires - מחייב שהמאפיין יהיה קיים בבאדי
    name:Joi.string().min(2).max(100).required(),
    color:Joi.string().min(2).max(100).required(),
    year:Joi.number().min(1900).max(2050).required(),
  })
  return joiSchema.validate(_reqBody)
}