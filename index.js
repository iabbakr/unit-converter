/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let disp = [];
let displayEl = document.getElementById("display");
let convertEl = document.getElementById("converter");
let massEl = document.getElementById("mass");





convertEl.addEventListener("click", function(){
    
    
    let pounds = 2.204;
    let kilos = 0.453;
    
    
    disp.push(displayEl.value);

    let s = parseInt(disp) * pounds;
    let l = parseInt(disp) * kilos;

    let hi = `
        <p>
           ${disp} kilos = ${s} gallons | ${disp} pounds = ${l} kilos
        <p>`;
    
    massEl.innerHTML += hi;
});


//

//function mass(){
    
//    disp.push(displayEl.value);
    
//    let mas = displayEl * msV;
    

//};