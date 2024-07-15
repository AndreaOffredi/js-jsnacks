/* Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare. */

// 1) creiamo le variabili
let numPrecedente //undefined
let numCorrente = parseInt (prompt('inserisci un numero:')) //number
console.log(numPrecedente, numCorrente)

// 2) creiamo la condizione per continuare a chiedere al'utente un input

// FINCHE numcorrente è diverso da precedente chiedere il numero
while (numCorrente !== numPrecedente) {
    //prima assegniamo in numero inserito dall'utente alla variabie numero precendente, se no nel ripetersi della condizioni non sappiamo se quel numero lo ha già inserito prima.
    numPrecedente = numCorrente
    // richiediamo il numero all'utente
    numCorrente = parseInt (prompt('inserisci un numero:')) //number
    console.log(numPrecedente, numCorrente)
}

// // 3) se la condizione diventa vera diciamo all'utente che ha già inserito il numero
// console.log('HAI GIA INSERITO QUESTO NUMERO')