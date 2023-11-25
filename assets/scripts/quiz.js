import perguntas from '/assets/dados/perguntas.json' assert {type: 'json'}

let idxPergunta = 0;
let nivel = 'A';
let qtdePontos = 0;
let qtdePulos = 0;
let qtdeErros = 0;

// Placar
let spanPulos = document.getElementById('spanPulos');


// Botoes
let btnConfirmar = document.getElementById('bntConfirmar');
let btnPular = document.getElementById('btnPular');
btnPular.addEventListener('click', () => pular());
let btnParar = document.getElementById('bntParar');
btnParar.addEventListener('click', () => parar());


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

function pular(){
    qtdePulos++;

    if (qtdePulos == 3){
        btnPular.disabled = true;
    }

    spanPulos.innerText = `Pulos: ${qtdePulos}`;
    
    sortear();

}


function parar(){
    alert('Que Pena, você desistiu!!');
    history.back();
}