// ספריית אקספרס

const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/",async(req,res) => {
  const url = "http://fs1.co.il/bus/tv.php";
  const resp = await axios.get(url);
    res.json(resp.data);
})


//seach?s= נחזיר מוצרים שבשם או בקטגוריה

// מופיע חלק מהביטוי קווארי אס

router.get("/search",async(req,res) => {

    const searchQ = req.query.s.toLowerCase();
  
    const url = "http://fs1.co.il/bus/tv.php";
  
    // {data} - דיסטרקשן למאפיין דאטא
  
    const {data} = await axios.get(url);
  
    const filter_ar = data.filter((item) => {
  
      return item.name.toLowerCase().includes(searchQ) || item.genere.toLowerCase().includes(searchQ)
  
    })
  
    res.json(filter_ar);
  
    // res.json(data);
  
  })


  //שולחים ב URL את הכתובת עם האינדקס 
  //ומחזירים את הסרט המתאים לפי האינקדס באתר

  router.get("/single/:index",async(req,res) => {

    const index = req.params.index
  
    const url = "http://fs1.co.il/bus/tv.php";
  
    // {data} - דיסטרקשן למאפיין דאטא
  
    const {data} = await axios.get(url);
  
    res.json(data[index])
  
  })
module.exports = router;
// Path: routes/users.js
// ספריית אקספרס



