//ottenre numero km
//ottenere età
//moltiplicare costo per km = prezzo pieno
//se età >= 18 e < 65, prezzo finale = prezzo pieno
//se età < 18, prezzo finale = prezzo pieno *0,8
// set età >65, prezzo finale = prezzo pieno *0,6

var km = prompt("Quanti km vuoi fare?");
var age = prompt("Inserisci la tua età.");

var costoKm = 0.21;
var prezzoPieno = 0.21 * km;
var prezzoFinale;

if (age > 65){
    prezzoFinale = (prezzoPieno * 0.6).toFixed(2);
    document.getElementById("sconto-over").setAttribute("class","visible");
} else if (age < 18){
    prezzoFinale = (prezzoPieno * 0.8).toFixed(2);
    document.getElementById("sconto-giovani").setAttribute("class","visible");
} else {
    prezzoFinale = prezzoPieno.toFixed(2);
}

document.getElementById("eta").innerHTML = age;
document.getElementById('percorso').innerHTML = km;
document.getElementById('spesa').innerHTML = prezzoFinale;
document.getElementById("container").setAttribute("class","visible");
