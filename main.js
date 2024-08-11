let showDate = document.getElementById("date");
let showClock = document.getElementById("clock");

let date = new Date();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

showDate.innerHTML = `${week[date.getDay()]}, ${date.getDate()} of ${months[date.getMonth()]} of ${date.getFullYear()}`;

setInterval( () =>{
    let hour = new Date();
    showClock.innerHTML = `${hour.toLocaleTimeString()}`;
}, 1000);