/*Lavoriamo con i moduli commonjs esportando e importando valori e funzioni.
Segui questi tre step creando i rispettivi files:
1 - names.js
1. Crea una funzione che accetta due parametri: firstName, lastName.
La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.
2 - hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
2. Esporta la funzione dal file.
3 - people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri.
La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.*/

import { namecomplete, namec } from "./names.js"

import { hobbies, arrayhobbies } from "./hobbies.js"

const nome = "Giulio"

const cognome = "Pippo"

const hobby1 = "Pesca"

const hobby2 = "Caccia"

const hobby3 = "Giardinaggio"

function ci() {
    namecomplete(nome, cognome)

    hobbies(hobby1, hobby2, hobby3)

    const end ={
        fullName: `${namec.nome} ${namec.cognome}`,
        hobbies : arrayhobbies
    }

    console.log (end)
    
}

ci()