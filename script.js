const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "A fome do mundo acaba, mas todas as pessoas com que você se importa/ama vão esquecer que você existe",
                afirmacao: "Parabéns, a fome do mundo acabou, mas ninguém mais lembra de você",
            },
            {
                texto: "Realizar seus maiores sonho, mas a humanidade é atingida por um vírus zumbi onde apenas você é imune",
                afirmacao: "Parabéns, você é o ultimo sobrevivente da Terra ",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Acabar com o aquecimento global, mas aleatoriamente 50% da população mundial morre ",
                afirmacao: "Parabens, o aquecimento global não existe mais, assim como 50% da população mundial",
            },
            {
                texto: "Ter uma lâmpada dos desejos, mas a cada desejo realizado 1 espécie vegetal e uma espécie animal é extinta",
                afirmacao: "Parabens, depois de alguns desejos você extinguiu espécies importantes da fauna e da flora",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Ter todo o conhecimento sobre todas as coisas existentes, mas a tecnologia regride até 1700",
                afirmacao: "Parabens, você possui todo o conhecimento e ninguém acredita em você",
            },
            {
                texto: "Ser a pessoa mais poderosa do mundo, mas as máquinas e tecnologias dominam o planeta e escravizam a raça humana",
                afirmacao: "Parabens, mas você não tem força o suficiente para acabar com o controle das máquinas",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if(atual >= perguntas.length){
   mostraResultado();
   return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta.texto;
       botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(pergunta));
       caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada (pergunta){
    const afirmacoes = pergunta.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
 }

 function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo, você escolheu ... ";
    caixaResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
 }

mostraPergunta();