const express = require("express");

const {vips_ar} = require("../data/vipsJson")

const router = express.Router();

 

// הגדרת ראוטר של הרואט שנגדיר באפ

router.get("/",async(req,res) => {

  res.json(vips_ar)

  // res.json({msg:"vips work 2222"})

})

 
router.get("/single/:index",async(req,res) => {
const index = req.params.index;
res.json(vips_ar[index]);

})
// /vips/search?s= ראוטר שמאפשר לשלוח קווארי סטרינג

// בשם אס שמאפשר לעשות חיפוש במערך של שמות אנשים

router.get("/search", async(req,res) => {

  // איסוף קווארי סטרינג

  const searchQ = req.query.s.toLocaleLowerCase();

  const filter_ar = vips_ar.filter((item) => {

    return item.name.toLocaleLowerCase().includes(searchQ)

  })

  res.json(filter_ar)

  // res.json({msg:"s query is: "+searchQ});

})


// export default

module.exports = router;

