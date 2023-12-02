import perguntas from '/assets/dados/perguntas.json' assert {type: 'json'}

let idxPergunta = 0;
let nivel = 'A';
let qtdePontos = 0;
let qtdePulos = 0;
let qtdeErros = 0;

// Placar
let spanNivel = document.getElementById('spanNivel');
let spanPontos = document.getElementById('spanPontos');
let spanPulos = document.getElementById('spanPulos');
let spanErros = document.getElementById('spanErros');

// Botoes
let btnConfirmar = document.getElementById('btnConfirmar');
btnConfirmar.addEventListener('click', () => confirmar());

let btnPular = document.getElementById('btnPular');
btnPular.addEventListener('click', () => pular());

let btnParar = document.getElementById('btnParar');
btnParar.addEventListener('click', () => parar());

//Pergunta e Respostas
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

function confirmar(){
    let valorResposta = document.querySelector('input[name="resposta"]:checked');
    console.log(valorResposta);
    
    if (valorResposta == null) {
        alert("Selecione uma resposta antes de confirmar !");
        return;
    }

    if (valorResposta.value == perguntas[idxPergunta].CERTA) {
        alert('Resposta... Exata !!');
        qtdePontos++;
    } else {
        alert('Resposta... Errada !!');
        qtdeErros++;
    }

    valorResposta.checked = false;
    sortear();
    atualizarPlacar();
}

function atualizarPlacar(){
    spanNivel.innerText = `Nivel: ${nivel}`;
    spanPontos.innerText = `Pontos: ${qtdePontos}`;
    spanPulos.innerText = `Pulos: ${qtdePulos}`;
    spanErros.innerText = `Erros: ${qtdeErros}`;
}