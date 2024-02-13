const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // יש לשנות בסוף הכתובת לשם המסד נתונים שאנחנו עובדים מולו בקלאסטר
  await mongoose.connect('mongodb://127.0.0.1:27017/ariel23_ev');
  console.log("connect mongo ariel23_ev local");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}