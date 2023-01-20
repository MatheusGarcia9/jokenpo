let pontosDoUsuario = 0
let pontosDoComputador = 0

const USUARIO = 'Usuário';
const COMPUTADOR = 'Computador';
const PAPEL = "papel";
const PEDRA = "pedra";
const TESOURA = "tesoura";
const jogadasPossiveis = [PAPEL, PEDRA, TESOURA];

/*
const imgPapel: Elemento img que mostra a imagem do papel 
const imgPedra: Elemento img que mostra a imagem da pedra
const imgTesoura: Elemento img que mostra a imagem da tesoura
const divJogadaDoComputador: Elemento div que mostra a interrogaçãodo e vai mostrar a jogada do computador;
const spanPlacarUsuario: Elemento span que mostra a pontuação do usuário;
const spanPlacarComputador: Elemento span que mostra a pontuação do computador;
const pPlacar: Elemento p que contem as duas spans que mostram os pontos;
const audioDaVitoria: Elemento que contém o áudio da vitória;
const audioDaDerrota: Elemento que contém audio da derrota;
*/

const imgPapel = document.getElementById("imgPapel");
const imgPedra = document.getElementById("imgPedra");
const imgTesoura = document.getElementById("imgTesoura");
const divJogadaDoComputador = document.getElementById("compChoice");

const spanPlacarUsuario = document.getElementById("userScore");
const spanPlacarComputador = document.getElementById("compScore");

const pPlacar = document.getElementById("scores");
const audioDaVitoria = document.getElementById("audioDaVitoria");

const audioDaDerrota = document.getElementById("audioDaDerrota");

/**
 * 
 * A função deve atualizar o placar na tela
 * 
 * @param {number} pontosDoUsuario 
 * @param {number} pontosDoComputador 
 */

function atualizarPlacar(pontosDoUsuario, pontosDoComputador){
    pontosDoComputador = spanPlacarComputador.innerText;
    pontosDoUsuario = spanPlacarUsuario.innerText;
}

atualizarPlacar(3,2);

