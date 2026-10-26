// Recherche de valeur
let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];
let recherche = "Nadia";
let position = -1;

for(let i = 0; i < prenoms.length; i++) {
    if (prenoms[i] === recherche) {
        position = i;
        break;
    }
}

if(position !== -1) {
    console.log("Nadia se trouve à l'index 3");
} else {
    console.log("Prénom introuvable");
}

// Les Extrêmes (Max et Min)
let notes = [12, 17, 9, 14, 18, 11];
let maximum = notes[0]; 
let minimum = notes[0];

for (let i = 1; i < notes.length; i++) {
    if (notes[i] > maximum) {
        maximum = notes[i]; 
    }

    if (notes[i] < minimum) {
        minimum = notes[i];
    }
}

console.log("la meilleure note est ", maximum); 
console.log("la pire note est ", minimum);
