let notes = [12, 8, 15, 9, 17];
notes[1] = 10;
notes[3] = 11;
console.log("la première note :", notes[0]);
console.log("la dernière note :", notes[notes.length-1]);
console.log("le tableau final :", notes);
console.log("Nombre de notes :", notes.length)

// lire notes[2] permet d'afficher la troisieme note du tab sans la modifier
// modifier notes[2] = 10 permet de remplacer la troisieme note par 10 