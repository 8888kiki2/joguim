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
                texto: "A fome do mundo acaba",
                afirmacao: "mas todas as pessoas com que você se importa/ama vão esquecer que
você existe",
            },
            {
                texto: "Realizar seus maiores sonhos",
                afirmacao: " mas a humanidade é atingida por um víru zumbi onde apenas
você é imune",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Acabar com o aquecimento global ",
                afirmacao: "mas aleatoriamente 50% da população mundial morre",
            },
            {
                texto: "Ter uma lâmpada dos desejos",
                afirmacao: "mas a cada desejo realizado 1 espécie vegetal e uma espécie
animal é extinta",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Ter todo o conhecimento sobre todas as coisas existentes",
                afirmacao: "mas a tecnologia regride até 1700",
            },
            {
                texto: "Ser a pessoa mais poderosa do mundo",
                afirmacao: "mas as máquinas e tecnologias dominam o planeta e
escravizam a raça humana",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta;
       caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();