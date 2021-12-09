/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// 1- Stampa in console, con un ciclo for, il valore di 'i' che si incrementa ad ogni ciclo.
// 2- No.
// 3- Si, 'i' viene dichiarata 0 ma al ciclo diciamo di ripetersi finchè la variabile è maggiore di 5, creando un crash.


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

// 1- Aggiunge 5 ad un numero pari, se è dispari tornerà cosi com'è
// 2- Nell'if abbiamo bisogno del doppio ==
// 3- No


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// 1- Stampa in console, con un ciclo for, il valore di 'i' che va da 0 a 5
// 2- Si, dobbiamo sostituire ',' con ';'
// 3- No


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1- Dato un array di numeri da 1a8, controlla e restituisce i numeri pari in un altro array
// 2- Si (modifico e commento sotto)
// 3- Si (modifico e commento sotto)

// function displayEvenNumbers(){
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i=0; i < numbers.length; i++) {
//       if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);
//       }
//     }
//     return evenNumbers;
// }
// console.log(displayEvenNumbers())