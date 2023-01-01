/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let disp = [];
let displayEl = document.getElementById("display");
let convertEl = document.getElementById("converter");
let massEl = document.getElementById("mass");


let pounds = 2.204;
let kilos = 0.453;





convertEl.addEventListener("click", function(){
    mas();
});


function mas(){
    disp.push(displayEl.value);

    let s = parseInt(disp) * pounds;
    let l = parseInt(disp) * kilos;

    let hi = `
        <p>
           ${disp} kilos = ${s.toFixed(2)} gallons | ${disp} pounds = ${l} kilos
        <p>`;
    
    massEl.innerHTML += hi;
};