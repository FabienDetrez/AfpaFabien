let lastName;

//compatibilité nav: https://caniuse.com

let firstName = "Bill"
lastName = "Gates"
console.log(firstName, lastName)


//const fullName = `${firstName} ${lastName}`;
//ou
const fullName = firstName + " " + lastName;
console.log(fullName)

//Une constante prend une valeur au moment ou elle est initialisée puis ne change plus si les variables à l'interieur change

try{
    fullName = "Steve Jobs";
    //const constante;
}
catch(error){
    console.log(error)
}
finally{
    //Bloc éxécuté quoi qu'il arrive
}

let bp;
