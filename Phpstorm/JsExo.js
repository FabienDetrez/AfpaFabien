/*function writeInConsole(message){
    console.log(message);
}

writeInConsole('bonjour');*/

/*--------------------------------------------------------------------*/

/*function isNumber(expr){
let valeur = parseFloat(expr);
 return !isNaN(valeur);
};

let test = isNumber("text");
test = isNumber(true);
test = isNumber(10);
test = isNumber(10.2);*/

/*--------------------------------------------------------------------*/

/*function countChar(text){
    let count = text.length;
    return count;
}



function main(){
    let texteSaisi = prompt("Bonjour, veuillez saisir votre texte");
    let result = countChar(texteSaisi);
    alert ("Votre texte contient " + result + " caractères");
}

main()*/

/*--------------------------------------------------------------------*/

/*function profil(){
    let nom = prompt ("Veuillez saisir votre nom");
    let prenom = prompt ("Veuillez saisir votre prénom");
    alert ("Vous vous appelez " + nom +' '+ prenom);
}

profil();*/

/*--------------------------------------------------------------------*/

function main (){
    let nombre = parseFloat(prompt("Veuillez saisir un nombre"));
    console.log((!isNaN(nombre)));
     while (isNaN(nombre) ){
       nombre = parseFloat(prompt("Veuillez saisir un nombre"));
     }
     if (nombre >= 0) {
         return alert(nombre + " est un nombre positif");
     }else{
             return alert(nombre + " n'est pas un nombre positif")

     }
}

main();



let bp;