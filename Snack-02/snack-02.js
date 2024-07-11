/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

// Denominazione delle variabili
let parola1
let parola2

// Chiediamo l'input al cliente
parola1 = prompt('inserisci prima parola')
parola2 = prompt('inserisci seconda parola')

// SE parola1 è più lunga della parola 2
if (parola1.length > parola2.length) {
    // - sampa parola1
    console.log('la parola più lunga è ' + parola1)
    console.log('la parola più corta è ' + parola2)
} else {
    // ALTRIMEMTI stampa parola 2
    console.log('la parola più lunga è ' + parola2)
    console.log('la parola più corta è ' + parola1)
}