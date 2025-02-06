/*2 - hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
2. Esporta la funzione dal file.*/

let arrayhobbies = []

function hobbies(hobbie1, hobbie2, hobbie3) {
    arrayhobbies.push (hobbie1 ,hobbie2 ,hobbie3)
    return arrayhobbies    
}

export{
    hobbies,
    arrayhobbies,
}