/*2 - hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
2. Esporta la funzione dal file.*/

function hobbies(hobbie1, hobbie2, hobbie3) {
    let arrayhobbies = []
    arrayhobbies.push (hobbie1.tostring() ,hobbie2.tostring() ,hobbie3.tostring())
    return arrayhobbies    
}

export {
    hobbies
}