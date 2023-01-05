/*
// Seção de Declarações das variáveis 
  nome: caracter
  numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  escreval("Digite o nome: ")
  leia(nome)
  escreval("Digite o numero: ")
  leia(numero)
  
  escreval (nome, " : ", numero)
*/
var nome, idade

nome = prompt("Digite o seu nome: ")
idade = prompt("Digite a sua idade: ")

document.getElementById("paragrafo").innerText = nome + " : " + idade  