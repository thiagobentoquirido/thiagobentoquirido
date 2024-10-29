
const baseUrl = "https://cataas";


async function getData() {
    let response = await fetch(`https://cataas.com/cat`);
    response = await response.blob();
    console.log(response);
    return URL.createObjectURL(response);
    
    
}
async function plotData() {
  // some com imagem
  let div = document.getElementById('SEC1')

  // coloca loading com animação

  div.innerHTML = `<div class="loading">
        <span class="points"></span>
        <span class="points"></span>
        <span class="points"></span>
        
        <p id="thiagolindo">carregando aguarde...</p>
    </div>`
    

  // Pega da api
  const quots = await getData();

  // Coloca na img
  div.innerHTML = `<img class='imagem' src="${quots}" />`;

  // tira o loading e bota na tela


}

/*
function fbt(){
    let imagemslv = localStorage.getItem('imagemslv');
    let img = document.getElementById("catimg");
  //  const response = await fetch('https://cataas.com/cat');

    
    
    
    
}

//
const btn = document.getElementById("BT");
btn.addEventListener("click", fbt());*/