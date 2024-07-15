/* Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. 
Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso. */

// creiamo una variabile e facciamo generare un numero dal PC con il Math Random
let numComputer = Math.floor (Math.random () * 11)
// utilizziamo il Math Floor perché in questo caso i numeri arrivano fino a 0-10,999 e così arrotondiamo in difetto 0-10
console.log(numComputer)

// Chiediamo con un prompt all'utente il numero
let numUtente = parseInt (prompt('inserisci un numero:')) // number
console.log(numUtente)

// Condizione per verificare se è uguale o no
if (numUtente === numComputer) {
    console.log('Il numero è uguale')
} else {
    console.log('il numero è diverso!')
}