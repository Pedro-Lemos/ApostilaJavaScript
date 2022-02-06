class Pessoa {
    nome;
    sobrenome;
    idade;
    #cpf;
    constructor(nome, sobrenome, idade, cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.#cpf = cpf;
    }

    saudacao(){
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCPF){
        this.#cpf = novoCPF;
    }
}

class Aluno extends Pessoa{
    constructor(nome, sobrenome, idade, cpf, serie, turma){
        super(nome, sobrenome, idade, cpf);
        this.serie = serie;
        this.turma = turma;
    }

    saudacao(){
        console.log(`Olá, meu nome é ${this.nome}, e faço a ${this.serie}°.`)
    }
}

class Professor extends Pessoa{
    disciplina;
    horas;
    constructor(nome, sobrenome, idade, cpf, disciplina, horas){
        super(nome, sobrenome, idade, cpf);
        this.disciplina = disciplina;
        this.horas = horas;
    }

    saudacao(){
        console.log(`Olá, meu nome é ${this.nome}, e sou professor de ${this.disciplina}.`)
    }
}

const pedro = new Professor("Pedro", "Lemos", 18,4564564645, "Programação", 60);
const renan = new Aluno("Renan", "Almeida", 17, 8989898989, 3, "A");

console.log(pedro);
console.log(renan);
pedro.saudacao();
renan.saudacao();
