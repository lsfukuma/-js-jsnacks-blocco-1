//JSnack 6: Stampa le potenze di 2 fino a 1000

//fare un ciclo che va da 1 a 1000;
for (var i = 1; i <= 1000; i++) {
    //console.log(i);
    var potDue = Math.log2(i) % 1 === 0;
        console.log(potDue == true);
}
