let bill = 900;
let totalPerson=4;
let tipPercent = 10;

let tip = bill*(tipPercent/100);
let totalBill = bill+tip;
let perPersonBill= totalBill/totalPerson;

console.log("Per Person Bill -" + perPersonBill);
