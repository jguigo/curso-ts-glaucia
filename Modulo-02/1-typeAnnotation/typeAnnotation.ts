// => Variáveis [Type Annotation]
let nome: string = "Guilherme";
console.log(nome);

// => Arrays [Type Annotation]
let animais: string[] = ["Elefante", "Cachorro", "Gato", "Panda", "Girafa"];
console.log(animais);

// => Objeto [Type Annotation]
let carro: {
   nome: string;
   marca: string;
   valor: number;
};

carro = { nome: "Yaris Sedan XS", marca: "Toyota", valor: 100000 };
console.log(carro);

// => Function [Type Annotation]
function multiplicarNumberos(num1: number, num2: number): number {
   return num1 * num2;
}
console.log(multiplicarNumberos(10, 10));
