var carta1 = {
  name: 'Dark Wizard',
  img: 'https://cdnb.artstation.com/p/assets/images/images/030/187/117/large/luan-denno-mago-4.jpg?1599850230',
  stats: {
    Attack: 6,
    Agility: 6,
    Defense: 5,
  },
}
// console.log(carta1.atributos.ataque)
var carta2 = {
  name: 'Black Dragon',
  img: 'https://www.socialdub.com/groupspictures/7888/7888808021751257996.jpg?x2',
  stats: {
    Attack: 8,
    Agility: 7,
    Defense: 7,
  },
}
var carta3 = {
  name: 'White Dragon',
  img: 'https://i0.wp.com/www.solosagrado.com.br/blog/site/wp-content/uploads/2015/11/voce-conhece-a-lenda-do-dragao-branco-de-olhos-azuis-795-e1447693166475.jpg?fit=640%2C499&ssl=1',
  stats: {
    Attack: 9,
    Agility: 8,
    Defense: 7,
  },
}
var carta4 = {
  name: 'Slayfer',
  img: 'http://pm1.narvii.com/6819/47706d024c69a61659e4bf06c52bc57f4ed07898v2_00.jpg',
  stats: {
    Attack: 8,
    Agility: 7,
    Defense: 8,
  },
}
var carta5 = {
  name: 'Swordsman',
  img: 'https://i.pinimg.com/564x/9f/f9/b8/9ff9b8bf7a108ed212d7a155b0465367.jpg',
  stats: {
    Attack: 7,
    Agility: 9,
    Defense: 5,
  },
}
var carta6 = {
  name: 'Shark',
  img: 'https://storage.googleapis.com/ygoprodeck.com/pics_artgame/70156946.jpg',
  stats: {
    Attack: 9,
    Agility: 7,
    Defense: 7,
  },
}
var carta7 = {
  name: 'Singer',
  img: 'https://static.wikia.nocookie.net/ycm/images/b/bc/Priest_Singer.jpg',
  stats: {
    Attack: 8,
    Agility: 8,
    Defense: 7,
  },
}
var carta8 = {
  name: 'Blue Eyes White Dragon',
  img: 'https://images.uncyc.org/commons/8/81/Blue_eyes_ultimate_dragon.gif',
  stats: {
    Attack: 10,
    Agility: 9,
    Defense: 9,
  },
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]
var cartaDaMaquina
var cartaDoJogador

function sortearCarta() {
  var indiceCartaDaMaquina = parseInt(Math.random() * 8)
  cartaDaMaquina = cartas[indiceCartaDaMaquina]

  var indiceCartaDoJogador = parseInt(Math.random() * 8)
  while (indiceCartaDoJogador == indiceCartaDaMaquina) {
    indiceCartaDoJogador = parseInt(Math.random() * 8)
  }
  cartaDoJogador = cartas[indiceCartaDoJogador]
  console.log(cartaDoJogador)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirCartaJogador()
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('stats')
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogarCarta() {
  var statsSelecionado = obtemAtributoSelecionado()
  var elementoResultado = document.getElementById('resultado')

  if (cartaDoJogador.stats[statsSelecionado] > cartaDaMaquina.stats[statsSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Parabéns! Você venceu</p>"
  } else if (cartaDoJogador.stats[statsSelecionado] < cartaDaMaquina.stats[statsSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Poxa, não foi dessa vez.</p>"
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>"
  }
  elementoResultado.innerHTML = htmlResultado

  document.getElementById('btnJogar').disabled = true
  exibirCartaMaquina()
}
console.log(cartaDaMaquina)

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador')
  divCartaJogador.style.backgroundImage = `url(${cartaDoJogador.img})`

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTextos = ''

  for (var stats in cartaDoJogador.stats) {
    opcoesTextos +=
      "<input type='radio' name='stats' value='" + stats + "'>" + stats + ' ' + cartaDoJogador.stats[stats] + '<br>'
  }
  var nome = `<p class="carta-subtitle">${cartaDoJogador.name}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTextos + '</div>'
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaDaMaquina.img})`

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTextos = ''

  for (var stats in cartaDaMaquina.stats) {
    opcoesTextos += "<p name='stats' value='" + stats + "'>" + stats + ' ' + cartaDaMaquina.stats[stats] + '</p>'
  }
  var nome = `<p class="carta-subtitle">${cartaDaMaquina.name}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTextos + '</div>'
}
