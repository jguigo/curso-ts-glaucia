// => Exemplo number
let num1: number = 23.0;
let num2: number = 0x74CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);


// => Exemplo bigint -> para usar tem que ser a versão target do es2020 ou ESNEXT
let bit1: bigint = 90000004758456445665465456n;
let bit2: bigint = 0b00000000000000000000000000000000000000000000000000000000000001n;
let bit3: bigint = 0x200000000003n;
let bit4: bigint = 0o400000000000000000000003n;