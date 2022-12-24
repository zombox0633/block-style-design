/* date now*/
const date = new Date();

let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
console.log(currentDate);


/* LocaleDateString() */
let Date1 = new Date().toLocaleDateString();
console.log(Date1);

/* h3 */
document.getElementById('Date_now').innerHTML = currentDate;