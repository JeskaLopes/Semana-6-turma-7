window.addEventListener('DOMContentLoaded', function() {
    // aqui vai todo o código a ser executado na página
    let nomes=['Arizona', 'Dakota','Gloria','Rex','Bolinha','Kiba']
    let titulo=document.getElementById('titulo');

   //titulo concatenado + fora do click aparecendo como default
    titulo.innerHTML=("O Array  " + nomes.length + " nomes");

    titulo.addEventListener("click", function(){
        
        nomes.forEach(function(item, index){
            //resultado vai ser ele mesmo + mostrando todos os itens + </br
            resultado.innerHTML=resultado.innerHTML + item +"</br>";
        });
    });
});