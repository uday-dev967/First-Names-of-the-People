const arr = require("../country/state/city/index.js");
const utility = require("../utilities/utils/index.js");
const getPeopleInCity = (arr) => utility(arr);
console.log(getPeopleInCity(arr));
module.exports = getPeopleInCity;
