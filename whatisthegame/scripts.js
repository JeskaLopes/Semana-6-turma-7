window.addEventListener('DOMContentLoaded', function() {
 const jogos=['./gifs/legend.gif','gifs/caixinha.gif', 'gifs/dance.gif']
 const nomesDosJogos=['The legend of Zelda','Mario','Kirby']
 const displayNomeDosJogos=document.querySelector('#nomeDosJogos')
 const displayGifs=document.querySelector('#displayGifs')
 const inicio=document.querySelector('#inicio')


 inicio.addEventListener("click", function(){
    //displayGifs.innerHTML=jogos;

    // displayGifs1();
    // displayGifs2();
    //displayGifs3();
    setTimeout(displayGifs1, 1000);
    setTimeout(displayGifs2, 18000)//3000);
    setTimeout(displayGifs3, 28000)//6000);
    setTimeout(mostrarLista, 38000)//9000);
    
});

function displayGifs1() {
    displayGifs.innerHTML = jogos[0] };

  function displayGifs2() {
    displayGifs.innerHTML = `<img width="300" src=${jogos[1]} />`;
  }

  function displayGifs3() {
    displayGifs.innerHTML = `<img width="300" src=${jogos[2]} />`;
  }
 
  function mostrarLista(){
    displayGifs.innerHTML = "";
      nomesDosJogos.forEach(function(item){
        displayGifs.innerHTML +=  item +"</br>";
    })
}

});