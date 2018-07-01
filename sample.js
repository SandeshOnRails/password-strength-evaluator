/*


This is a sample to test out.

Test Algorithm scoring rubric (Total possible : 8)

password length > 8     - 2 points

contanis number        - 1 point

upper case letter    - 1 point


lower case letter     - 1 point


special character     -  2 point

contains > 1 number    - 1 point





                       */



const pass = require("./pass.js");

const data = pass("HelloWorld1!");

console.log(data.score);
console.log(data.strength());