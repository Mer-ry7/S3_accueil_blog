// L’art du compteur
let mots = ["chat", "ordinateur", "table", "programmation", "js"];
let motsLongs = 0;
for(let i = 0; i < mots.length; i++) {
    if (mots[i].length >5) {
        motsLongs++
    }
}

console.log(motsLongs);

// L’art de l’accumulateur conditionnel
let nombres = [4, 7, 2, 9, 5, 8];
let sommePairs = 0;
for(let i = 0; i < nombres.length; i++) {
    if(nombres[i] % 2 === 0){
        sommePairs += nombres[i]
    }

}
console.log(sommePairs);