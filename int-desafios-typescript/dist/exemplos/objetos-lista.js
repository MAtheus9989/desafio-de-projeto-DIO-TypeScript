"use strict";
const pessoa = {
    nome: 'Matheus',
    idade: 27,
    profissao: 'vendedor'
};
pessoa.idade = 24;
const valdir = {
    nome: 'Valdir',
    idade: 21,
    profissao: 'contador'
};
const paulino = {
    nome: 'Paulino',
    idade: 19,
    profissao: 'logista'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvovedora"] = 2] = "Desenvovedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const laura = {
    nome: 'Laura',
    idade: 20,
    profissao: Profissao.Desenvovedora
};
const dani = {
    nome: 'Laura',
    idade: 20,
    profissao: Profissao.Desenvovedora
};
const wesker = {
    nome: 'Laura',
    idade: 20,
    profissao: Profissao.Desenvovedora,
    materias: ['Matematica discreta', 'programação']
};
const david = {
    nome: 'Laura',
    idade: 20,
    profissao: Profissao.Desenvovedora,
    materias: ['Matematica discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(david.materias);
