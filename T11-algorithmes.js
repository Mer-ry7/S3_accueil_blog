let nombres = [23, 15, 42, 9, 31, 18, 42, 5];
let Maximum = nombres[0];
let positonMax = 0;
let Minimum = nombres[0];
let positionMin = 0;

for (let i = 1; i < nombres.length; i++) {
    if(nombres[i] > Maximum){
        Maximum = nombres[i];
        positionMax = i;
    }

    if(nombres[i] < Minimum){
        Minimum = nombres[i];
        positionMin = i;
    }
}
console.log("Maximum :",Maximum, "(Index :",positionMax, ")" );
console.log("Minimum :",Minimum, "(index :",positionMin, ")");

let recherche = 31;
let position = -1;

for(let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
        position = nombres[i];
        break;
    }
}

if(position !== -1) {
    console.log("La valeur", position,"est présente dans le tableau.");
} else {
    console.log("valeur introuvable");
}

// On utilise souvent une variable initialisée à -1 pour stocker la position 
// car l’index -1 n’existe pas dans un tableau, cela signifie donc "non trouvé"

