/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let displayEl = document.getElementById("display");
let convertEl = document.getElementById("converter");

let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById"mass");


convertEl.addEventListener("click", function(){

    length();
    volume();
    mass();

});


function length(){
    let len = 3.281;
    if(displayEl){
        return displayEl * len;
    };
    let hh = `
    <p>
        ${displayEl} "meters = " ${} 
    </p>
    `;

};

function volume(){
    let vol = 0.264;
    if(displayEl){
        return displayEl * vol;
    };

};

function mass(){
    let mas = displayEl * 2.204;
    hi = `
    <h3>
        Length (Meter/Feet)
    </h3>
    <p>
        ${displayEl} "kilos = " ${mas}
    </p>
    `;

    massEl.innerHTML = hi;

};