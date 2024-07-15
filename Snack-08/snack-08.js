/* Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. 
Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
A questo punto fate giocare l’utente, fintanto che non vince la partita contro il PC */

// 1) facciamo generare un numero random al computer
let numComputer = Math.floor(Math.random() * 11) // ci genera un numero intero da 0 a 10
// 10 --> 0 a 9,9999 quindi se noi mettiamo 11 --> 0 a 10,9999 + floor ---> difetto a 10
console.log(numComputer)

// 2) chiediamo all'utente l'input
let numUtente = parseInt (prompt('inserisci un numero da 0 a 10:')) //numero senza virgola | NaN
console.log(numUtente)

// 3) Creiamo la condizione di vincita 

// SE numero utente = numero computer 
// if (numUtente === numComputer) {
//     // -- l'utente ha vinto
//     console.log('HAI VINTO')
// } else {
//     // ALTRIMENTI l'utente ha perso
//     console.log('HAI PERSO, RITENTA!')
// }

// 4) Facciamo ripetere al sistema l'operazione finché l'utente non indovina
// FINCHE numero Utente è diverso dal numero computer chiedere prompt all'utente
while (numUtente !== numComputer) {
    numUtente = parseInt (prompt('inserisci un numero da 0 a 10:'))
    console.log('RITENTA SARAI PIU FORTUNATO')
}

//ALTRIMENTI, se la il valore esce dalla condizione perché i due numeri sono uguali
console.log('HAI VINTO!')

