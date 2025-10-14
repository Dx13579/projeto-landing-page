
var Leonardo= window.document.getElementById("leonardo")
var Bruna= window.document.getElementById("bruna")
var Samanta= window.document.getElementById("card-samanta")
var Esquerda= window.document.getElementById("seta_esquerda")
var Direita= window.document.getElementById("seta_direita")

function RolarParaDireita(){
    Leonardo.style="display:none"
    Samanta.style="display:flex"
    Direita.style= "display:none"
    Esquerda.style="display:flex"
}

function RolarParaEsquerda(){
    Leonardo.style="display: flex"
    Samanta.style="display:none"
    Esquerda.style="display:none"
    Direita.style="display:flex"

}