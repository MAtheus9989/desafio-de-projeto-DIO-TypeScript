const pessoa = {
    nome:'Matheus',
    idade: 27,
    profissao:'vendedor'
}

pessoa.idade = 24;

const valdir: {nome: string, idade: number, profissao: string} = {
    nome: 'Valdir',
    idade: 21,
    profissao: 'contador'
}

const paulino: {nome: string, idade: number, profissao: string} = {
    nome: 'Paulino',
    idade: 19,
    profissao: 'logista'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvovedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const laura: Pessoa = {
    nome:'Laura',
    idade: 20,
    profissao: Profissao.Desenvovedora
}

const dani: Pessoa = {
    nome:'Laura',
    idade: 20,
    profissao: Profissao.Desenvovedora
}

const wesker: Estudante = {
    nome:'Laura',
    idade: 20,
    profissao: Profissao.Desenvovedora,
    materias: ['Matematica discreta', 'programação']
}

const david: Estudante = {
    nome:'Laura',
    idade: 20,
    profissao: Profissao.Desenvovedora,
    materias: ['Matematica discreta', 'programação']
}

function listar(lista:string[]) {
    for (const item of lista) {
        console.log('-', item);
    }
}

listar(david.materias);
