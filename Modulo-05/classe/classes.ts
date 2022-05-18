export {};

// ==> exemplo 01
class Pessoa {
   nome: string;
   sobrenome: string;

   constructor(nome: string, sobrenome: string) {
      this.nome = nome;
      this.sobrenome = sobrenome;
   }

   nomeCompleto(): string {
      return `${this.nome} ${this.sobrenome}`;
   }
}

const pessoa = new Pessoa("Guilherme", "Melo");
console.log(pessoa.nomeCompleto());

// ==> exemplo 02 (sem o constructor)

class Estudante {
   codigoEstudante: number;
   nomeEstudante: string;
}
//criar uma instância
const estudante = new Estudante();
//inicializar o objeto!
estudante.codigoEstudante = 982173;
estudante.nomeEstudante = "Guilherme";

// Acessar os campos:
console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);

// ==> exemplo 03 (com o constructor)
class Estudante_1 {
   codigoEstudante: number;
   nomeEstudante: string;
   constructor(codigoEstudante:number, nomeEstudante:string) {
      this.codigoEstudante = codigoEstudante;
      this.nomeEstudante = nomeEstudante;
   }

   //criar o método!

   listarEstudande(): void {
      console.log('Código do estudante.....' + this.codigoEstudante);
      console.log('Nome do estudante.....' + this.nomeEstudante);
   }
}

const estudante_1 = new Estudante_1(123123, 'Guilhermem ememem');

estudante_1.listarEstudande()