"use strict";

//1.6

// let a = 2;
// let b = 5;
// let c = '';
// c = a;
// a = b;
// b = c;
// console.log(a, b)

// //1.8

// let a1 = "423";
// let b1 = "12";
// let c1 = a1 + b1;
// console.log(c1)
// // // l'algorithme produit la valeur "42312"

// // //1.9

// let a2 = "423";
// let b2 = "12";
// let c1 = a2 & b2;
// console.log(c1);

// // la valeur est de 4

// // //2.3



// function calcPrix (prixHT, nombreArticle) {
//     let articlePrixHT = prixHT * nombreArticle;
//     let articleTVA = 1.2;
//     let articleTTC = articlePrixHT * articleTVA;
//     console.log(articleTTC);
// }

// function calcPrix();

//3.2
// function test() {
//     let window1 = window.prompt("saisir un nombre");
//     let window2 = window.prompt("saisir un nombre")
//     if (window1 > 0 && window2 > 0) {
//         console.log("le produit est positif");
//     } else if (window1 < 0 && window2 > 0) {
//     console.log("le produit est negatif")
//     } else if (window1 > 0 && window2 < 0) {
//         console.log("le produit est négatif");
//     } else if (window1 < 0 && window2 < 0) {
//         console.log("le produit est positif")
//     }
// }

// function test() {
//     let window1 = window.prompt("saisir un nombre");
//     let window2 = window.prompt("saisir un nombre")
//     if ((window1 > 0 && window2 > 0) || (window1 < 0 && window2 < 0)) {
//         console.log("le produit est positif")
//     } else {
//         console.log("le produit est négatif")
//     }
// }

//3.3

// function test1() {
//     let window1 = prompt("saisir un nom");  
//     let window2 = prompt("saisir un nom");
//     let window3 = prompt("saisir un nom");
//     if (window1 < window2 && window2 < window3){
//         console.log("les noms sont rangés dans l'ordre alphabétique");
//     } else {
//     console.log("les noms ne sont pas rangés dans l'ordre alphabétique");}
// }

// //3.6

// function test2() {
//     let age = window.prompt("saisir age d'un enfant");
//     if (age > 5 && age < 8) {
//         console.log("Poussin");
//     } else if (age > 7 && age < 10) {
//         console.log("Pupille");
//     } else if (age > 9 && age < 12) {
//         console.log("Minime");
//     } else if (age > 12) {
//         console.log("Cadet");
//     } else {
//         console.log("Bébé");
//     }
// }

4.3

function test3() {
    let heure = window.prompt("saisir heure");
    let minutes = window.prompt("saisir minute");
    let secondes = window.prompt("saisir seconde")
    let mySecondes = Number(secondes);
    console.log(`Dans une seconde, il sera ${heure} heure(s), ${minutes} minute(s) et ${mySecondes + 1} seconde(s)`);
}

// 4.5

// function test4() {
//     let age = window.prompt("saisir age");
//     let sexe = window.prompt("saisir sexe");

//     if (age > 20 && (sexe === "masculin" || sexe === "homme")) {
//         console.log("vous êtes imposable");
//     } else if ((sexe === "féminin" || sexe === "femme") && age > 17 && age < 35) {
//         console.log("vous êtes imposable");
//     } else {
//     console.log("vous ne payez pas d'impots");
//     };
// }






//6.1

// let arr1 = [];
// for (let i = 0; i < 8; i++) {
//     arr1.push(0);
//     console.log();
// }

//6.2

// let arr2 = ["a", "e", "u", "i", "o", "y"];
// console.log(arr2)

