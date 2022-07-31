let valorAny: any;
valorAny = 1;
valorAny + 'ola';
valorAny = true;

let valString: string = 'teste';
valString = valorAny;
let valorString2: string = 'teste';
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valString, valorString2);
somarString('ola', ', como vai?');