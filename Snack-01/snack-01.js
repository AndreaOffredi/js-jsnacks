/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// Denominazione delle variabili
let num1
let num2

// richiesta del input utente
num1 = parseInt (prompt('inserisci il primo numero')) // Number
num2 = parseInt (prompt('inserisci il secondo numero')) // Number

// SE il primo numero è maggiore del secondo
if (num1 > num2) {
    // -- stampa il primo numero
    console.log('il numero più grande è ' + num1)
} else {
    // ALTRIMENTI stampa il secondo
    console.log('il numero più grande è ' + num2)
}


