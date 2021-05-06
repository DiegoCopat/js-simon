/* 
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/ 

var numeriAutomatici = [];
var startTimer = 30;

// ciclo per la scelta dei 5 numeri casuali 
for (var i = 0; i < 5; i++) {
    var numeri = generatoreNumeri (1, 100);
    numeriAutomatici.push(numeri);
}
alert(numeriAutomatici); // /ciclo per la scelta dei 5 numeri casuali



// impostazione dell'oscillazione del tempo del cronomentro
var timer = setInterval(function () {

    if (startTimer == 1) {
        clearInterval(timer);
    }
    startTimer--
console.log(startTimer);
    
}, 1000); // /impostazione dell'oscillazione del tempo del cronomentro

// gioco
var numeriUtente = [];
var numeriInseriti = setTimeout(function () {

    for (var i = 0; i < numeriAutomatici.length; i++) {
        var numeri = parseInt(prompt("inserisci qui i numeri visualizzati precedentemente"));
        var controllo = presente (numeri, numeriAutomatici)
        if (controllo == true) {
            numeriUtente.push(numeri);
            
        }
    }

    if (numeriUtente.length == 1) {
        console.log("Hai indovinato solo il numero " + numeriUtente);
    }else if (numeriUtente.length > 1 && numeriUtente.length <          numeriAutomatici.length) {
        console.log("Complimenti, hai indovinato " + numeriUtente.length + " numeri: \n" + numeriUtente);
    } else {
        console.log("Fantastico, hai indovinato tutti i numeri della lista! \nLa lista era composta da " + numeriUtente.length + " numeri: \n" + numeriUtente);
}

}, (startTimer + 1) * 1000); // /gioco

// SEZIONE DEDICATA ALLE FUNZIONI -------------------------------------------------------------------------------

// FUNZIONE PER GENERARE I NUMERI CASUALI
function generatoreNumeri (min, max) {
    var numeri = parseInt(Math.floor(Math.random() * max - min +1)) + min;
    return numeri;
}

// FUNZIONE PER VERIFICARE SE UN NUMERO E' GIA PRESENTE NELL'ARRAY
function presente (number, array) {

    for( var i = 0; i < array.length; i++) {

        if(number == array[i]) {
            return true;
        }
    }
    return false;
}
