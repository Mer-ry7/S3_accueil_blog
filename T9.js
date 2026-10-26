// Parcours basique
let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
for (let i = 0; i < jours.length; i++) {
     
    console.log("Index :", i, "| Jour de la semaine :", jours[i]);
}

// Gymnastique d’index
let couleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Orange", "Violet"];
for (let i = couleurs.length - 1; i >= 0; i--) {
    console.log(couleurs[i]);
}
for (let i = 0; i < couleurs.length; i = i + 2) {
    console.log(couleurs[i]); 
}
