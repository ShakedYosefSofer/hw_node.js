const express = require("express");
const {PlayerModel} = require("../models/playerModel")
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
  try{
    const data = await PlayerModel.find({});
    res.json(data);

  }
  catch(err){
    console.log(err);
    // 502 - שגיאה בשרת
    res.status(502).json({err:"there problem , try again later"})
  }
  // res.json({msg:"players work 2222"})
})

// export default
module.exports = router;