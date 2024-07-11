/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

// Lista invitati e variabili
let listaInvitati = ['Andrea','Francy','Giamma','Miki','Fabio']

// Chiediamo all'utente il proprio nome
let nomeUtente = prompt('inserisci il tuo nome')
console.log('il mio nome è: ' + nomeUtente)

// Creiamo la variabile del risultato 
let risultato = 0
let esito

// Per controllare il valore di ogni invitato facciamo un for
for (let a = 0; a < 5; a++) {
   
    let confronto = listaInvitati[a]
    // console.log(confronto)

    // SE il valore utente inserito NomeUtente è uguale ad confronto
    if (nomeUtente === confronto) {
        esito = 1
        // console.log(esito)
    } else {
        esito = 0
        // console.log(esito)

    }

    risultato = risultato + esito
    

}

// Stampiamo risultato
// SE risultato = 1
if (risultato === 1) {
    // - Stampa SI
    console.log('Posso entrare alla festa: SI')
} else {
    // ALTRIMENTI stampa NO
    console.log('Posso entrare alla festa: NO')
}