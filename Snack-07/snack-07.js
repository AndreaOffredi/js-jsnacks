/* Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.

Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito, 
e stampare tutta la tabellina del 2 fino al numero inserito. */

// Dichiariamo le due variabili
let numMassimo
let tabellina

// Diamo un valore alle vriabili + chiediamo al'utente l'input
numMassimo = parseInt(prompt('inserisci il numero massimo:'))
// dobbiamo aggiungere il math.floor per impedire numeri con la virgola e approssimare tutto per difetto
tabellina = Math.floor(numMassimo / 2)

// creiamo un ciclo, +1 per vedere il numero massimo
for (num = 0; num < tabellina + 1; num++) {

    console.log ('2 * '+num+ '= ', 2 * num)
}


//possiamo farlo anche con il ciclo While

// let numero = 0
// let a = 0

// while (numero < numMassimo) {
//     numero = a * 2
//     console.log ('2 * '+num+ '= ', 2 * num)
//     a++
// }