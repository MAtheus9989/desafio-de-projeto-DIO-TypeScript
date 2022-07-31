console.log("desafio 1");

// Exemplo1
const employee = {
    code: 2020,
    name: "jonas"
}
console.log(employee);

// Exemplo 2
const employee2: { code: number, name: string } = {
    code: 2022,
    name: "matheus"
}
console.log(employee2);


// Exemplo 3

interface Employee {
    code: number,
    name: string
}


const employee3: Employee = {
    code: 2001,
    name: "barros"
}
console.log(employee3);

const employee4 = {} as Employee;
employee4.code = 2006;
employee4.name = "fernanda";

console.log(employee4);
console.log("**********");
