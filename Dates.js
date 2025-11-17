const todaydate = new Date();
console.log(todaydate);

//Date using string
let stringdate = new Date("2005-04-20");
console.log(stringdate);
console.log("");

//Creating Date Objects
// Date(year, month, day, hours, minutes, seconds, milliseconds)
let custom = new Date(1111, 11, 30, 22, 59, 59, 1);

console.log(custom);
console.log("");

// Date Get
console.log(todaydate.getFullYear()); // Get Year
console.log(todaydate.getMonth()); // Get Month
console.log(todaydate.getDate()); // Get Date
console.log(todaydate.getHours()); // Get Hours
console.log(todaydate.getMinutes()); // Get Minutes
console.log(todaydate.getSeconds()); // Get Seconds
console.log(todaydate.getMilliseconds()); // Get Milliseconds
console.log(todaydate.getTime());
console.log("");
