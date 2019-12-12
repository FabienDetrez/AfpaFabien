//Les types js

let age, isMajor = false, nom, prenom = "Laurent";

let type = typeof (age);//undifined
console.log(type);

type = typeof (prenom);//string
console.log(type);

type = typeof (isMajor);//booléen
console.log(type);

prenom = 20;//typage dynamique
type = typeof (prenom);//number (20.5 = number)
console.log(type);

age = "20";
type = typeof (age);//string
console.log(type);

let integer = parseInt (age);//Convertion d'une chaine en entier
console.log(typeof (integer));//Number

let real = parseFloat(age);//Convertion d'une chaine en réel
console.log(real);//Number

integer = parseInt ("Hello");
console.log(integer); //NAN (not a number)
console.log(typeof (integer)); //NaN est de type number

let isNotNumber = isNaN(integer); //La fonction isNaN permet de vérifier si une variable est NaN
console.log(isNotNumber);//true

isNotNumber = isNaN(10.2);
console.log(isNotNumber);//false car 10.2 est un nombre

isNotNumber = isNaN(true);
console.log(isNotNumber);// false pourtant true n'est pas un nombre


let bp;//breackpoint


