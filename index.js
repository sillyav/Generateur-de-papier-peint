
// Obtenir les éléments d'image
// const backgroundImage = document.getElementById('background-image');
// const motifImage = document.getElementById('motif-image');
// const motifImage2 = document.getElementById('motif-image2');
// const motifImage3 = document.getElementById('motif-image3');
// const motifImage4 = document.getElementById('motif-image4');
// const motifImage5 = document.getElementById('motif-image5');
// const motifImage6 = document.getElementById('motif-image6');
// const motifImage7 = document.getElementById('motif-image7');
// const motifImage8 = document.getElementById('motif-image8');
// const motifImage9 = document.getElementById('motif-image9');

// Obtenir le bouton de génération
const generateButton = document.getElementById('generate-button');


let background = [
  "./background/cerise.svg",
  "./background/fleurs.svg",
  "./background/vase.svg",
  "./background/voiture.svg",

  
];

let middle = [
  "./motif/Papier_peint_boudin.svg",
  "./motif/Papier_peint_coquillage.svg" ,
  "./motif/Papier_peint_goutte.svg",
  "./motif/Papier_peint_h.svg",
  "./motif/Papier_peint_étoile.svg",
  "./motif/Papier_peint_tâche.svg",
  "./motif/Papier_peint_lambi.svg",
 "./motif/Papier_peint_méduses.svg",
 "./motif/Papier_peint_pi.svg"
];

let front = [

"./dessin/tourbillon.svg",
"./dessin/triangle.svg",
"./dessin/vague.svg",
];


function Brice() {
  const indiceMiddle = Math.floor(Math.random() * middle.length);
  document.querySelector(".motifx") .src = middle[indiceMiddle];

  const indiceBackground = Math.floor(Math.random() * background.length);
  document.querySelector(".background").src = background[indiceBackground]

  const indiceFront = Math.floor(Math.random() * front.length);
  document.querySelector(".dessin") .src = front[indiceFront];
}

document.querySelector("#generate-button").addEventListener("click", Brice);


















