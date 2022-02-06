class Pessoa {
    nome;
    constructor(nome){
        this.nome = nome;
    }
    saudar(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

class Professor{
    constructor(pessoa, disciplina){
        this.pessoa = pessoa;
        this.nome = pessoa.nome;
        this.disciplina = disciplina;
    }

    saudar(){
        console.log(`Olá, meu nome é ${this.nome}. Sou professor de ${this.disciplina}`);
    }
}

const pessoa = new Pessoa("Manuel");
pessoa.saudar();

const professor = new Professor(pessoa, "Programação");
professor.saudar();