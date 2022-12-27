const botao = document.querySelector('.botao')
const dado1 = document.querySelector('.img1')
const dado2 = document.querySelector('.img2')
const h1 = document.querySelector('h1')
console.log(h1)


botao.addEventListener("click", (() => { 
    let randomNumero = Math.random()
    let randomNumero2 = Math.random()
    randomNumero = randomNumero * 6
    randomNumero2 = randomNumero2 * 6
    randomNumero = Math.floor(randomNumero) + 1
    randomNumero2 = Math.floor(randomNumero2) + 1
    dado1.src = `images/dice${randomNumero}.png`
    dado2.src = `images/dice${randomNumero2}.png`

    if(randomNumero > randomNumero2){
        h1.textContent = '🚩 Jogador 1 ganhou'
    }
    else if(randomNumero2 > randomNumero){
        h1.textContent = 'Jogador 2 ganhou 🚩'
    }
    else{
        h1.textContent = 'Empate'
    }

    botao.textContent = "Rolar Novamente"


    }))



