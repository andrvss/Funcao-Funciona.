// Exercício 1
function calcularIdadePet() {
    var escolha = prompt("Olá usuário! Bem vindo ao cáculo de idade do seu pet, por favor, digite uma das três opções: 'cachorro'; 'gato'; 'macaco'");
    var idade = parseInt(prompt("Aí sim! Agora, quantos anos tem seu pet?"));
    var cachorro = idade * 7;
    var gato = idade * 12;
    var cavalo = idade * 6.5;

    if (escolha == 'cachorro') {
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número.");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0.");
            calcularIdadePet();
        } else {
            alert("Seu cachorro tem " + cachorro + " anos em anos humanos!");
        }

    } else if (escolha == 'gato'){
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert("Seu gato tem " + gato + " anos em anos humanos!");
        }

    } else if (escolha == 'cavalo'){
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert("Seu macaco tem " + cavalo + " anos em anos humanos!");
        }

    } else{
        alert("Por favor, digite uma das três opções...");
        calcularIdadePet();
    }
    calcularIdadePet();
}

calcularIdadePet(); //

// Exercício 2 
function calcularIdadePet() {
    var escolha = prompt("Olá usuário! Bem vindo ao cáculo de idade do seu pet, por favor, digite uma das três opções: 'cachorro'; 'gato'; 'cavalo'");
    var idade = parseInt(prompt("Muito bem! Agora, quantos anos tem seu pet?"));
    var especie = prompt("Informe também a especie do seu pet:")
    var nomePet = prompt("Informe o nome do seu pet: ");
    var cachorro = idade * 7;
    var gato = idade * 12;
    var cavalo = idade * 6.5;

    if (escolha == 'cachorro') {
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert(nomePet +  " tem " + idade + " anos em anos de verdade! Um(a) " + especie + " com " + idade + " anos, tem " + cachorro + " anos em anos humanos!");
        }

    } else if (escolha == 'gato'){
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert(nomePet + " tem " + idade + " anos em anos de verdade! Um(a) " + especie + " com " + idade + " anos, tem " + gato + " anos em anos humanos!");
        }

    } else if (escolha == 'cavalo'){
        if (isNaN(idade) || idade == '') {
            alert("Valor inválido, por favor, digite um número...");
            calcularIdadePet();
        } else if (idade <= 0) {
            alert("Por favor, digite um número maior que 0...");
            calcularIdadePet();
        } else {
            alert(nomePet + " tem " + idade + " anos em anos de verdade! Um(a) " + especie + " com " + idade + " anos, tem " + cavalo + " anos em anos humanos!");
        }

    } else{
        alert("Por favor, digite uma das três opções...");
        calcularIdadePet();
    }
    calcularIdadePet();
}

calcularIdadePet(); //

//Exercício 3
function calcularMeuLanche() {
    var idade = parseInt(prompt("Ola usuario! Digite a sua idade?"));
    var lanches = parseInt(prompt("Digite quantos lanches você come por dia:"));
    var velhice = 100;
    var soma = (lanches * 365) * (velhice - idade);
    alert("Você precisará de " + soma + " para durar até a idade " + velhice);
}

calcularMeuLanche(); //

// Exercício 4
function escolha() {
    var escolha = prompt("Ola usuario, digite '1' para calcular circunferencia e '2' para calcular area do circulo.")
    if (escolha == '1') {
        calcularCircunferencia();
    } else if (escolha == '2') {
        calcularArea();
    } else {
        erro();
    }
}

function calcularCircunferencia() {
    var raio = parseFloat(prompt('Qual o valor do raio do circulo?'));
    var circunferencia = 2 * 3.14 * raio;
    alert("A circunferência é: " + circunferencia.toFixed(2));
    escolha();
}

function calcularArea() {
    var raio = parseFloat(prompt('Qual o valor do raio do circulo?'));
    var area = 3.14 * raio ** 2;
    alert("A área do círculo é de: " + area.toFixed(2));
    escolha();
}

function erro() {
    alert("Por favor, digite '1' ou '2'");
    escolha();
}

escolha(); //

// Exercício 5
function escolha() {
    var escolha = prompt("Olá usuario, digite '1' para converter Celsius para Fahrenheit e '2' para converter Fahrenheit para Celsius.")
    if (escolha == '1') {
        converterCelsiusFahrenheit();
    } else if (escolha == '2') {
        converterFahrenheitCelsius();
    } else {
        erro();
    }
}

function converterCelsiusFahrenheit(){
    var celsius = parseInt(prompt("Qual é a temperatura em Celsius?"));
    var fahrenheit = celsius * 1.8 + 32; 
    alert(celsius + "°C é igual a " + fahrenheit + "°F");
    escolha();
}

function converterFahrenheitCelsius(){
    var fahrenheit = parseInt(prompt("Qual é a temperatura em Fahrenheit?"));
    var celsius = (fahrenheit - 32) / 1.8;
    alert(fahrenheit + "°F é igual a " + celsius + "°C");
    escolha();
}

function erro() {
    alert("Por favor, digite '1' ou '2'");
    escolha();
}

escolha(); //