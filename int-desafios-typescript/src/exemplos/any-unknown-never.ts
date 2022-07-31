let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste'
anyEstaDeVolta = 8;

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 7;
unknownValor = 'ola';
unknownValor = true;
unknownValor = 'mundo';

let stringTest2: string = 'agora vai';

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 200)