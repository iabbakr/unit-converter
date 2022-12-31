/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let disp = [];
let displayEl = document.getElementById("display");
let convertEl = document.getElementById("converter");
let massEl = document.getElementById("mass");

let hi = `
        <h3>
            Length (Meter/Feet)
        </h3>
        <p>
            ${displayEl} "kilos = " ${mas}
        </p>
    `;

convertEl.addEventListener("click", function(){
    
    massEl.innerHTML += hi;
});


//

//function mass(){
    
//    disp.push(displayEl.value);
    
//    let mas = displayEl * msV;
    

//};