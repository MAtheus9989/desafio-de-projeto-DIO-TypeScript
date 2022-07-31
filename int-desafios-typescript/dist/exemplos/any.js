"use strict";
let valorAny;
valorAny = 1;
valorAny + 'ola';
valorAny = true;
let valString = 'teste';
valString = valorAny;
let valorString2 = 'teste';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valString, valorString2);
somarString('ola', ', como vai?');
