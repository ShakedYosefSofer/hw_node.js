const express = require("express");
const {ShowModel, validateShow} = require("../models/showModel")
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
  try{
    // לשלוף את כל הרשומות מהקולקשן/טבלה
    // color:1 ישלוף רק את המאפיין של קולור
    // const data = await CarModel.find({},{color:1});
    const data = await ShowModel.find({});
    res.json(data);
  }
  catch(err){
    console.log(err);
    return res.status(502).json({msg:"there problem, try again later",err})
  }
})

// בקשת פוסט להוספת רשומה חדשה
router.post("/",async(req,res) => {
  // req.params, req.query , req.body
  // req.body - מכיל את הבאדי שנשלח מהצד לקוח/פוסטמן
  
  // בדיקה תקינות לבאדי
  const validBody = validateShow(req.body);
  // בודק אם יש שגיאה
  if(validBody.error){
    // מחזיר את השגיאה המודייקת שיש בבאדי לפי הסכמה
    return res.status(400).json(validBody.error.details);
  }


  try{
    // מכין את הרשומה שנרצה להוסיף בזכרון
    const show = new ShowModel(req.body);
    // שומר את הרשומה
    await show.save();
    // אם זה הצליח נקבל בחזרה את כל הבאדים ובנוסף
    // את האיי די החדש של הרשומה במסד
    res.json(show);
    // return res.json({msg:"show post 4444",body:req.body})
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

// עריכת רשומה
router.put("/:id",async(req,res) => { 
  // בדיקה תקינות לבאדי
  const validBody = validateShow(req.body);
  // בודק אם יש שגיאה
  if(validBody.error){
    // מחזיר את השגיאה המודייקת שיש בבאדי לפי הסכמה
    return res.status(400).json(validBody.error.details);
  }
  try{
    const id = req.params.id;
    // בקשת עדכון לפי מאפיין האיי די
    const data = await ShowModel.updateOne({_id:id},req.body)
    // modfiedCount:1 אם הצליח למחוק
    res.json(data)
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

// מחיקת רשומה
router.delete("/:id",async(req,res) => {
  try{
    const id = req.params.id;
    // בקשת מחיקה לפי מאפיין האיי די
    const data = await ShowModel.deleteOne({_id:id})
    // deletedCount:1 אם הצליח למחוק
    res.json(data)
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

// export default
module.exports = router;