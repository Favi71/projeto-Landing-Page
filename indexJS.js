var Leonardo = window.document.getElementById('Leonardo')
var Samantha = window.document.getElementById('Samantha')
var Bruna = window.document.getElementById('Bruna')
var setaEsquerda = window.document.getElementById('Seta-esquerda')
var setaDireita = window.document.getElementById('Seta-direita')

function rolarParaDireita(){
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex"
}
function rolarParaEsquerda(){
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"
}
