//ottenre numero km
//ottenere età
//moltiplicare costo per km = prezzo pieno
//se età >= 18 e < 65, prezzo finale = prezzo pieno
//se età < 18, prezzo finale = prezzo pieno *0,8
// set età >65, prezzo finale = prezzo pieno *0,6

var km = prompt("Quanti km vuoi fare?");
var age = prompt("Inserisci la tua età.");

var  costoKm = 0.21;
var prezzoPieno = 0.21 * km;
var prezzoFinale;

if (age > 65){
    prezzoFinale = prezzoPieno * 0.6;
} else if (age < 18){
    prezzoFinale = prezzoPieno * 0.8;
} else {
    prezzoFinale = prezzoPieno;
}

console.log(prezzoFinale);
