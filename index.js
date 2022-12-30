/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let disp = document.getElementById("#display");
let conv = document.getElementById("#converter");

let convEl = 0;


conv.addEventListener("click", function(){
    let hi = convEl + 1;
    disp.textContent += hi;
});



