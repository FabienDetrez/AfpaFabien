//Les tableaux

/*let names = [];//Déclaration d'un tableau vide
console.log(names);
console.log(typeof (names));//objet

names = ["Jean", "Jacques", "Bryan"];
console.log(names);

//accès aux éléments d'un tableau par l'index

let name1 = names[0];
let name2 = names[1];
let name3 = names[2];
let name4 = names[3];//Undefined

console.log(name1, name2, name3, name4);

//nb d'éléments dans le tableau

let longueur = names.length;
console.log(longueur);
console.log(names[longueur]);//Index maxi = longueur -1

//ajout d'un élément avec l'index

names[3] = "Denise";
console.log(names);
console.log(names.length);

//remplacement d'un élément avec l'index

names[2] = "Christine";
console.log(names);

//Parcours des éléments d'un tableau

for(let i=0; i<names.length; i++);
let name = names[i];
console.log(name);*/

/*Fonctions sur les tableaux : map, slice, sort, etc...
https://www.w3schools.com/js/js_array_methods.asp
Fonctions sur les string : split
https://www.w3schools.com/js/js_string_methods.asp
 */

/*Exercice

Créer 5 tableaux [nom, prénom, birth] ex: let tab1 = [Laurent, Bedu, YYYY-MM-DD]
Créer un tableau contenant ces 5 tableaux
Créer une fonction permettant d'afficher dans la console le nom, le prénom et l'age de chaque personne sur une ligne différente
Voir date : https://www.w3schools.com/js/js_dates.asp
https://www.w3schools.com/jsref/jsref_obj_date.aps
 */
/*function _calculateAge(birthday) { // birthday is a date
    let birth = new Date(birthday);
    var ageDifMs = Date.now() - birth.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
_calculateAge("2017-01-01")

let tab1 = ['Detrez', 'Fabien', '1988-11-20'];
let tab2 = ['Detrez', 'Remy', '1993-05-18'];
let tab3 = ['Detrez', 'Liana', '2018-01-05'];
let tab4 = ['Huddlestone', 'Virginie', '1987-09-09'];
let tab5 = ['Detrez', 'Alexis', '2001-11-21'];

let tabGeneral = [];

tabGeneral.push(tab1, tab2, tab3, tab4, tab5);

function age() {
    for (var i = 0; i < tabGeneral.length; i++) {
        let msg = tabGeneral[i][0] + " " + tabGeneral[i][1] + " " + _calculateAge(tabGeneral[i][2]);
        console.log(msg)
    }
};
age();

let bp;*/

/*Exercice : écrire une fonction qui à partir d'une phrase passée en paramètre
renvoi le tableau des mots qui la composent sans utiliser la fonction split
indices:
Une chaine de caractère est un tableau de caractères
Utiliser une boucle for pour parcourir la chaine
utiliser la méthode push pour ajouter un élément dans un tableau
 */

/*let phrase = "Oui, j'aime a faire apprendre un nombre utile aux sages.";
let mots = phrase.split(" ");
console.log(mots);


let reg=new RegExp("[ ,,,.]+");
let tableau2 = Array.from(reg);
tableau2.forEach(mot => {
    console.log(mot);
});


let tableau=phrase.split(reg);
console.table(tableau);*/

class Vehicule{
    constructor(longueur, poids, distance){
        this.longueur = longueur;
        this.poids = poids;
        this.distance = ((distance) ? distance : 0);
    }
}

let monVehicule1 = new Vehicule(4.5, 1569,0);
let monVehicule2 = new Vehicule(4.2, 1359);

class Car extends Vehicule {
    constructor(longueur, poids, distance, marque, couleur) {
        super(longueur, poids, distance);
        this.marque = marque;
        this.couleur = couleur;
    }
    rouler(vitesse, temps) {

        this.distance += vitesse / 60 * temps;
    }
}


let Car1 = new Car (4.5, 1569, 0, "truc", "bluege");
Car1.rouler (50, 200);


class Plane extends Vehicule {
    constructor(longueur, poids, distance, maxPassager) {
        super(longueur, poids, distance);
        this.maxPassager = maxPassager;
    }
    voler(vitesse, temps){

        this.distance += (vitesse/1.852)/60*temps;
    }
}

let Plane1 = new Plane(10, 10000,0, 100)
Plane1.voler (10,120);


let bp;
