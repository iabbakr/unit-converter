/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let disp = [];
let displayEl = document.getElementById("display");
let convertEl = document.getElementById("converter");
let massEl = document.getElementById("row");



convertEl.addEventListener("click", function(){
    let hi = `
        <h4>
            Length (Meter/Feet)
        </h4>
        
    `;
    
    massEl.innerHTML += hi;
});


//

//function mass(){
    
//    disp.push(displayEl.value);
    
//    let mas = displayEl * msV;
    

//};