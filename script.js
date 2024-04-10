//strings são textos que ficam entre aspas duplas

var nome = "Mariana"
var sobrenome = " Ferrari"

console.log("Bem-vinda " + nome +  sobrenome + "! 🤩🤩")

// int = inteiros 
// float = numeros quebrados

var idade = 25 // number
var idadeString = "25"

var numero = 7


var soma1 = idade = numero;
var soma2 = idadeString + numero;

console.log("Teste 1: " + soma1); // soma
console.log("Teste 2: " + soma2); //concatena

// function 

function soma(a, b){
    return a + b;
}

console.log("a soma de A + B é: " + soma(12, 25));

// array são varios elementos de uma vez só

var cestaDeFrutas = [ 'pêra', 'maçã', 'abacaxi', 'laranja', 'morango', 'uva', 'banana', 'manga', 'melão' ]

var comprimento = cestaDeFrutas.length //length é comprimento

console.log("quantas frutas tenho? " +  comprimento);
console.log("a fruta preferida da Mariana é: " + cestaDeFrutas[2]); //pega a posição do elemento do meu array "cesta de frutas[2]"

var frutas = cestaDeFrutas.push('melancia')
console.log(frutas); //push acrescenta


var corte = cestaDeFrutas.splice(3)
console.log(corte); // splice corta

// loop = for

for(let i = 1; i<=5; i = i + 1){
    console.log(i);
}

for(let i = 10; i>= 5; i--){
    console.log(i);
}

function Mensagem(string){
    return string;
}
console.log(Mensagem("oie 😁"));

//booleanos
var booleanoVerdadeiro = true;
var booleanoFalso

// () parenteses é parametros
// [] colchetes é para array
// {} chaves é para objeto
//objeto

var carro = {
    // key : value
    // chave : valor
    marca: 'BMW',
    ano: 2009,
    valor: 500000,
    cor: 'vermelho'
}

var marca = carro.marca

console.log(carro);
console.log("a marca do carro é: " + marca);
console.log("a cor do carro é: " + carro.cor);

function calcularIdade(nascimento){
    return 2024 - nascimento;
}

console.log("idade da pessoa é: " + calcularIdade(2007));



//map 

var array = [1 ,2 ,3 ]

var triplo = array.map((x) => x * 3)

// o parametro "number" serve para dar o nome para uma 'coisa' que passa em todas as vezes no meu array

console.log("o triplo do meu array é: " + triplo);


// maiuscula

var arrayString = [" mariana", " lorrainy", " bruno"]

var maiuscula = arrayString.map((maiuscula) => maiuscula.toUpperCase());

console.log("letras maiuscula" + maiuscula);


// minuscula
var arrayString = [" mariana", " lorrainy", " bruno"]

var minuscula = arrayString.map((minuscula) => minuscula.toLowerCase());

console.log("letras minuscula" + minuscula);



var arrayQuadrado = [1, 2, 3, 4, 5]

var quadrado = arrayQuadrado.map((x) => x ** 2)

console.log("o quadrado dos meus numeros é: " + quadrado);


// formatar array de obj
var arrayObj = [
    {nome: "Bea", idade: 18},
    {nome: "Ana", idade: 24},
    {nome: "Juju", idade: 37},
];

const formatar = arrayObj.map(
    pessoa => `${pessoa.nome} tem ${pessoa.idade} anos!`)

console.log(formatar);



var semIdade = arrayObj.map(pessoa => `${pessoa.nome}`)
console.log(semIdade);



var palavras = ["mari", "lolo"]
var caracteres = palavras.map(letras => `${letras.length}`)
console.log(caracteres)