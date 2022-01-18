let listaDePecas = ["Filtro de Ar", "Bomba de Combustível", "Amortecedor"]

if(listaDePecas.length < 10){
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não há mais espaço na lista")
}


let pesoDaPeca = 50;

if(pesoDaPeca < 100){
    console.log("A peça deve pesar no mínimo 100g");
}else{
    console.log("A peça possui peso adequado");
}


let nomeDaPeca = "Disco de Freio";

if(nomeDaPeca.length > 3){
    console.log("Nome de peça está adequado");
}else if(nomeDaPeca.length == 0){
    console.log("A peça precisa ter um nome");
}else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado");
}

switch(nomeDaPeca.length){
    case 0:
        console.log("A peça precisa ter um nome");
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado");
        break;
    default:
        console.log("O nome da peça está adequado");
        break;
}