/*1 - names.js
1. Crea una funzione che accetta due parametri: firstName, lastName.
La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.*/

let namec

function namecomplete(firstName, lastName) {
    namec = {
        nome: firstName,
        cognome : lastName
    }
    return namec    
}

export{
    namecomplete,
    namec,
}