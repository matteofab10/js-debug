/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// 1- Verifica l'età e genera due tipi di messaggi in base ad essa
// 2- Si, a riga16 sostituire const con let in quanto variabile
// 3- Si in quanto potrebbe verificarsi un età uguale a 18 ed un messaggio non corretto.

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// 1- Questa funzione ci stampa in console gli elementi dell'array 'colors'
// 2- Sostituire length con lenght a riga33
// 3- No


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1- Chiediamo di inserire un numero all'utente e di sommarlo a 12
// 2- No 
// 3- Aggiungiamo la funzione parseInt a riga 44 prima del prompt


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// 1- Dato un array di 4 email, chiediamo all'utente di inserire la propria, se è presente nell'array stampiamo in console l'accesso che sarà consentito, altrimenti negato
// 2- Si, rimuovere gli apici da false e true riga61 e 64 che non sono stringhe ma valori booleani
// 3- No


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];
        
        if (userEmail.length > 5) {
            
            if (email === userEmail) {
            grantAccess = true;            
            
            }      
        }
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
  
checkAccessImproved();

// 1- Dato un array di 4 email, chiediamo all'utente di inserire la propria, se è presente nell'array e se la lunghezza dell'email è maggiore di 6 caratteri stampiamo in console l'accesso che sarà consentito o negato
// 2- Si, rimuovere gli apici da true riga94 in quanto non è una stringa ma un valore booleano; manca una graffa che chiuda la funzione a riga98; indentare bene
// 3- No
