
let dataArray = [];
const profile = "TBE";
const amt = "50";
const desc = "party";
dataArray.push({ profile, amt, desc });
console.log(JSON.stringify(dataArray));
var obj = JSON.parse(JSON.stringify(dataArray));
console.log(obj);