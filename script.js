O
//Seleciona os itens clicados
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnexp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnexp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})



function Mamiferos() {
    var elementos = document.getElementsByClassName('elemento');
  
    // Percorre todos os elementos e alterna entre visível e invisível
    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].style.display === 'none') {
        elementos[i].style.display = 'block'; // ou 'inline' se for um elemento inline
      } else {
        elementos[i].style.display = 'none';
      }
    }
  }



  function Repteis() {
    var elementos = document.getElementsByClassName('Repteis');
  
    // Percorre todos os elementos e alterna entre visível e invisível
    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].style.display === 'none') {
        elementos[i].style.display = 'block'; // ou 'inline' se for um elemento inline
      } else {
        elementos[i].style.display = 'none';
      }
    }
  }


  function exibirTabelaUm() {
    var tabelaUm = document.querySelector('.tabela-um');
    var tabelaDois = document.querySelector('.tabela-dois');

    tabelaUm.style.display = 'table';
    tabelaDois.style.display = 'none';
  }

  function exibirTabelaDois() {
    var tabelaUm = document.querySelector('.tabela-um');
    var tabelaDois = document.querySelector('.tabela-dois');

    tabelaUm.style.display = 'none';
    tabelaDois.style.display = 'table';
  }


  function anfibios() {
    var elementos = document.getElementsByClassName('anfibios');
  
    // Percorre todos os elementos e alterna entre visível e invisível
    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].style.display === 'none') {
        elementos[i].style.display = 'block'; // ou 'inline' se for um elemento inline
      } else {
        elementos[i].style.display = 'none';
      }
    }
  }

  function aves() {
    var elementos = document.getElementsByClassName('aves');
  
    // Percorre todos os elementos e alterna entre visível e invisível
    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].style.display === 'none') {
        elementos[i].style.display = 'block'; // ou 'inline' se for um elemento inline
      } else {
        elementos[i].style.display = 'none';
      }
    }
  }


  function peixes() {
    var elementos = document.getElementsByClassName('peixes');
  
    // Percorre todos os elementos e alterna entre visível e invisível
    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].style.display === 'none') {
        elementos[i].style.display = 'block'; // ou 'inline' se for um elemento inline
      } else {
        elementos[i].style.display = 'none';
      }
    }
  }