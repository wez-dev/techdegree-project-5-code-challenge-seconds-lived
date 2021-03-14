// Declare units of time
const secsPerMin = 60;
const minsPerHours = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
//const weeksPerYear = 52;
const daysPerYear = 365;
const secondsPerDay = secsPerMin * minsPerHours * hoursPerDay;

// Access html element
const main = document.querySelector('main');

// Ask user age in years
const yearsAlive = prompt("What is your age?");

// Calculate seconds alive
const secondsAlive = secondsPerDay * daysPerYear * yearsAlive;

// Display result in html element
main.innerHTML = `
<h1>Seconds Lived</h1>
<p>You've been alive for <strong>${daysPerYear * yearsAlive} days</strong>, meaning you've been living for more than <strong>${secondsAlive} seconds!</strong></p>`;

