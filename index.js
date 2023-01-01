/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let disp = [];
let displayEl = document.getElementById("display");
let convertEl = document.getElementById("converter");
let lenEl = document.getElementById("length");
let volEl = document.getElementById("volume");
let massEl = document.getElementById("mass");

const feet = 3.281;
const meter = 0.304;
const gallon = 0.264;
const liter = 3.785;
const pound = 2.204;
const kilo = 0.453;





convertEl.addEventListener("click", function(){
    len();
    vol();
    mas();
});

function len(){
    disp.push(displayEl.value);

    let a = parseInt(disp) * feet;
    let b = parseInt(disp) * meter;

    let mF = `
        <p>
           ${disp} meters = ${a.toFixed(2)} feets | ${disp} feets = ${b} meters
        <p>`;
    
    lenEl.innerHTML += mF;
};

function len(){
    disp.push(displayEl.value);

    let c = parseInt(disp) * gallon;
    let d = parseInt(disp) * liter;

    let lG = `
        <p>
           ${disp} liters = ${c.toFixed(2)} gallons | ${disp} gallons = ${d} liters
        <p>`;
    
    volEl.innerHTML += lG;
};


function mas(){
    disp.push(displayEl.value);

    let e = parseInt(disp) * pound;
    let f = parseInt(disp) * kilo;

    let kP = `
        <p>
           ${disp} kilos = ${e.toFixed(2)} pounds | ${disp} pounds = ${f} kilos
        <p>`;
    
    massEl.innerHTML += kP;
};