/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l’array alla fine. */

// Creiamo un array vuoto + variabili
let numUtente
let listaNumeri = []
// console.log(listaNumeri)

// Chiediamo all'utente di inserire 6 volte un numero
for (let a = 0; a < 6; a++) {

    // Creiamo l'input
    numUtente = parseInt(prompt('Inserisci un numero:')) // number
    console.log(numUtente)

    // SE il numero è dispari
    if (numUtente % 2 !== 0) {
        // -- pushiamo nel array
        listaNumeri.push(numUtente)
    } 
}

// stampa finale di controllo
console.log(listaNumeri)