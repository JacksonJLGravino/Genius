const play = document.querySelector('.play')
const contador = document.querySelector('.contador')
const vermelho = document.querySelector('.vermelho')
const verde = document.querySelector('.verde')
const azul = document.querySelector('.azul')
const amarelo = document.querySelector('.amarelo')

let jogar = false
let ordem = []
let ordemClicada = []
let score = 0

function start() {
  play.innerHTML = 'Restart'
  score = 0
  adicionarUm()
}

function apertar(cor) {
  if (jogar) {
    ordemClicada.push(cor)
    let elementColor = createColorElement(cor)
    elementColor.style.opacity = 1
    setTimeout(() => {
      elementColor.style.opacity = 0.5
    }, 500)
    checarOrdem()
  }
}

function checarOrdem() {
  for (let i in ordemClicada) {
    if (ordemClicada[i] != ordem[i]) {
      alert('você errou 😭 ' + ` sua pontuação foi de ${score}`)
      jogar = false
      play.innerHTML = 'Play'
      score = 0
      contador.innerHTML = score
      return
    }
  }
  if (ordemClicada.length === ordem.length) {
    score++
    contador.innerHTML = score
    adicionarUm()
  }
}

function adicionarUm() {
  let colorOrder = Math.floor(Math.random() * 4)
  ordem.push(colorOrder)
  let i = 0
  jogar = false
  ordemClicada = []

  const shuffleOrder = setInterval(() => {
    corOriginal()
    if (i === ordem.length) {
      clearInterval(shuffleOrder)
      jogar = true
      return
    } else {
      let elementColor = createColorElement(ordem[i])
      elementColor.style.opacity = 1
      i++
    }
  }, 1000)

  corOriginal()
}

function createColorElement(color) {
  if (color == 0) {
    return vermelho
  } else if (color == 1) {
    return verde
  } else if (color == 2) {
    return azul
  } else if (color == 3) {
    return amarelo
  }
}

function corOriginal() {
  vermelho.style.opacity = 0.4
  verde.style.opacity = 0.4
  azul.style.opacity = 0.4
  amarelo.style.opacity = 0.4
}
