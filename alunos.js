let nomeDeAluno = ["Marcel","Franklin","Rita","Jorge","Cleitin",]

for (let nome of nomeDeAluno) {
    console.log(`Esta pessoa se chama ${nome}`)
}

let numeroDeAlunos = 10

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    //console.log(contador)

 if(contador == 0) {
        console.log("O numero atual é zero")
 }else if(contador % 2 == 0){
        console.log("O numero " + contador + " é par")
 }else{
        console.log(`O numero ${contador} é impar`)
    }
}

let contador = 0;

while (contador <= numeroDeAlunos) {
    //console.log(contador)

 if(contador == 0) {
        console.log("O numero atual é zero")
 }else if(contador % 2 == 0){
        console.log("O numero " + contador + " é par")
 }else{
        console.log(`O numero ${contador} é impar`)
    }
    contador++;
}