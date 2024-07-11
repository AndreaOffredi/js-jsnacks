/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

// Denominiamo la variabile somma
let somma = 0
let numUtente

// Chiediamo all'utente 10 numeri
for (let num = 0; num < 10; num++) {

    numUtente = parseInt(prompt('inserisci un numero')) //number
    console.log(numUtente)

    //calcoliamo la somma
    somma = somma + numUtente
}

console.log('la somma dei numeri è: ' + somma) 