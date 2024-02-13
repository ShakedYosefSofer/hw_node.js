const express = require("express");
const {VipModel} = require("../models/vipModel")
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
  try{
    const data = await VipModel.find({});
    res.json(data);

  }
  catch(err){
    console.log(err);
    // 502 - שגיאה בשרת
    res.status(502).json({err:"there problem , try again later"})
  }
})

// export default
module.exports = router;