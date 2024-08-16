const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAltenativas = document.querySelector('.caixa-altenativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [

    {
        enunciado: "No âmbito social , você prefere:",
        alternativas: [
            {
                texto: "A fome do mundo acaba",
                afirmação: "mas todas as pessoas com que você se importa/ama vão esquecer que você existe",
            },
            {
                texto: "Realizar seus maiores sonhos",
                afirmação: "mas a humanidade é atingida por um víru zumbi onde apenas você é imune",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental , você prefere:",
        alternativas: [
            {
                texto: "Acabar com o aquecimento global",
                afirmação: "mas aleatoriamente 50% da população mundial morre",
            },
            {
                texto: "Ter uma lâmpada dos desejos",
                afirmação: "mas a cada desejo realizado 1 espécie vegetal e uma espécie animal é extinta",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico , você prefere:",
        alternativas: [
            {
                texto: "Ter todo o conhecimento sobre todas as coisas existentes",
                afirmação: "mas a tecnologia regride até 1700",
            },
            {
                texto: "Ser a pessoa mais poderosa do mundo,Ser a pessoa mais poderosa do mundo",
                afirmação: "mas as máquinas e tecnologias dominam o planeta e escravizam a raça humana",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
}

mostraPergunta();