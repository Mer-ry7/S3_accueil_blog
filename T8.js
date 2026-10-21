// Lecture et utilisation
let nbs = [10, 20, 30, 40];
let somme = nbs[0] + nbs[3];
console.log(somme);

// Modification classique et dynamique
let temperatures = [18, 20, 23, 19];
console.log("avant :", temperatures)
temperatures[1] = 21;
let derniertemperature = temperatures.length - 1;
temperatures[derniertemperature] = 25
console.log("apres :", temperatures)