let panier = [15, 42, 5, 89, 12, 50, 8];
let somme = 0;
let nbrChers = 0;
let sommeChers = 0;

for(let i = 0; i < panier.length; i++) {
    somme += panier[i];

    if(panier[i] >= 20 ) {
        nbrChers++ ;
        sommeChers += panier[i] ;
    }
}

console.log("Total du panier :", somme);
console.log("Nombre d'articles chers :", nbrChers);
console.log("Montant des articles chers :", sommeChers);

//  la variable somme doit obligatoirement être déclarée à l’extérieur de la boucle for 
// car si elles etait declaree à l'interieur, elle serait recréée et remise à 0
