//JSnack 5: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente


//chiedere all'utente un numero
var arrayNumber = [] ;
var primiN = 0

var number = parseInt(prompt('Digitare un numero'));
console.log('Numero scelto dall\'utente: ' + number);


//fare un ciclo per ottenere i primi N numeri
for (var i = 0; i < number; i++) {
    //elencare i primi N numeri
    primiN = arrayNumber.push(number);
    //stampo i primi N numeri: console.log(primiN);
    //Devo fare il cubo di OGNI numero
    console.log(Math.pow(primiN, 3));
}
