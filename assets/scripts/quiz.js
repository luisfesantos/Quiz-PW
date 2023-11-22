import perguntas from '/assets/dados/perguntas.json' assert {type: 'json'}

let idxPergunta = 0;
let nivel = 'A';
let qtdePontos = 0;
let qtdePulos = 0;
let qtdeErros = 0;


let pergunta = document.getElementById('pergunta');
let resposta01 = document.getElementById('resposta01');
let resposta02 = document.getElementById('resposta02');
let resposta03 = document.getElementById('resposta03');
let resposta04 = document.getElementById('resposta04'); 
sortear();


function sortear() {
    idxPergunta = Math.floor(Math.random() * perguntas.length)

    pergunta.innerHTML = perguntas[idxPergunta].PERGUNTA;
    resposta01.innerHTML = perguntas[idxPergunta].RESP1;
    resposta02.innerHTML = perguntas[idxPergunta].RESP2;
    resposta03.innerHTML = perguntas[idxPergunta].RESP3;
    resposta04.innerHTML = perguntas[idxPergunta].RESP4;
}