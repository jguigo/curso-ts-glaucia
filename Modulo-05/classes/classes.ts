export {};


// ==> exemplo 01
class Pessoa {
   nome: string;
   sobrenome: string;
   
   constructor(nome:string, sobrenome:string){
      this.nome = nome;
      this.sobrenome = sobrenome;
   }
   
   nomeCompleto(): string {
      return `${this.nome} ${this.sobrenome}`; 
   }
}

const pessoa = new Pessoa('Guilherme', 'Melo');
console.log(pessoa.nomeCompleto());

// ==> exemplo 02 (sem o constructor)

class Estudante {
   codigoEstudante: number;
   nomeEstudante: string; 
}

const estudante = new Estudante();

estudante


// ==> exemplo 03 (com o constructor)