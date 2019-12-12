//Les opérateurs

//numériques et d'affectation : + - * / ++ -- += -= *= /=

let age = 10;
age += 5;//15
let resultat = 5/0;
console.log(resultat);//infinity
console.log(typeof (resultat));//number

//de comparaison : < > <= >= != == !== ===
let test = "10" ==10;
console.log(test); //égalité de valeur
test = "10" === 10;
console.log(test);//égalité de valeur et de type

//Logiques : && || !
let vrai = true, faux = false;
console.log(vrai && faux);//false
console.log(vrai || faux);//true
console.log(!vrai);//false

let expr = (vrai || vrai) && faux;//Attention aux priorités

//Les fonctions

function writeHelloInConsole(){//Définition de la fonction writeHelloInConsole
    console.log("Hello")
}

writeHelloInConsole();//Appel de la fonction writeHelloInConsole (exécution)

type = typeof (writeHelloInConsole);
console.log(type);//function

let retour = writeHelloInConsole();//Appel de la fonction writeHelloInConsole (exécution)
type = typeof (retour);
console.log(type);//undifined la fonction n'a pas de valeur de retour


