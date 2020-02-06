let alunos = ["Edson Menezes", 
"Guilherme Rafael", "Bruno Rafael", " Gustavo Nogueira"];

let alunoNomePequeno = alunos.filter(aluno => {
    return aluno.length <= 12;
});

let idades = [25, 19, 24, 27];

let totalIdade = idades.reduce((acumulador,idade) => {
    return acumulador + idade;
});

let alunosComSobrenome = alunos.map(aluno => {
    return aluno + "Souza";
});

console.log(alunos);
console.log(idades);
console.log(totalIdade);