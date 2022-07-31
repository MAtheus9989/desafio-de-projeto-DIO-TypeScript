console.log("desafio 2");

enum Profissao {
    juiz = "juiz",
    gamer = "gamer"
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const pessoa1: Pessoa = {
    nome: "jose",
    idade: 20,
    profissao: Profissao.juiz
}

const pessoa2: Pessoa = {
    nome: "alice",
    idade: 19,
    profissao: Profissao.gamer
}

const pessoa3: Pessoa = {
    nome: "julia",
    idade: 18,
    profissao: Profissao.juiz
}

const pessoa4: Pessoa = {
    nome: "xande",
    idade: 20,
    profissao: Profissao.juiz
}

console.log(pessoa1, pessoa2, pessoa3, pessoa4);
console.log("**********");