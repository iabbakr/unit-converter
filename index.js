/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const disp = [];
const displayEl = document.getElementById("display");
const convertEl = document.getElementById("converter");
const lenEl = document.getElementById("length");
const volEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

const feet = 3.281;
const meter = 0.304;
const gallon = 0.264;
const liter = 3.785;
const pound = 2.204;
const kilo = 0.453;





convertEl.addEventListener("click", function(){
    disp.push(displayEl.value);
    len();
    vol();
    mas();
});
function len(){
    const a = parseInt(disp) * feet;
    const b = parseInt(disp) * meter;
    const mF = `
        <p>
           ${disp} meters = ${a.toFixed(2)} feets | ${disp} feets = ${b.toFixed(2)} meters
        <p>`;
    lenEl.innerHTML += mF;
};
function vol(){
    const c = parseInt(disp) * gallon;
    const d = parseInt(disp) * liter;
    const lG = `
        <p>
           ${disp} liters = ${c.toFixed(2)} gallons | ${disp} gallons = ${d.toFixed(2)} liters
        <p>`;
    volEl.innerHTML += lG;
};
function mas(){
    const e = parseInt(disp) * pound;
    const f = parseInt(disp) * kilo;
    const kP = `
        <p>
           ${disp} kilos = ${e.toFixed(2)} pounds | ${disp} pounds = ${f.toFixed(2)} kilos
        <p>`;
    massEl.innerHTML += kP;
};