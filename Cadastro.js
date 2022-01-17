var dataAtual = new Date(18,02,2022)
var dataDoEvento = new Date(20,08,2023)

if (dataDoEvento > dataAtual){
    console.log("Parabens, seu evento foi cadastrado!")
} else {
    console.log("Desculpe, nao foi possivel cadastrar o evento, data anterior à atual")
}

var idade = 18

if (idade >= 18){
    console.log("Seu cadastro foi permitido")
} else{
    console.log("Desculpe, idade insuficiente para cadastro")
}

var participantes = ["Rogerio","pombo","ciclano","fulano","beltrano","julinho","maurilio","renan"]

if (participantes.length <= 100){
    console.log("Cadastro concluido")
} else {
    console.log("Limite de participantes excedido")
}