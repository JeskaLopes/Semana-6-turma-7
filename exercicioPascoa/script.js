window.addEventListener('DOMContentLoaded', function() {
    // aqui vai todo o código a ser executado na página
    

    const paises = document.querySelector('#pais');
    const cidade = document.querySelector('#cidade');
    const resultado=document.getElementById('resultado');
    const escondido=document.querySelector('.escondido');
    
    paises.addEventListener("click", function(){
        resultado.innerHTML="";
        escondido.style.display ="none";
        
       
        if(paises.value =="br"){
            escondido.style.display = "block"; 

            cidade.addEventListener("click", function(){
            if(cidade.value=="sp"){
                resultado.innerHTML="🍬 Minha amiga vai ganhar duas caixas de bombons 🍫";
            }
            else if(cidade.value=="cs"){
                resultado.innerHTML="🍫 Minha amiga vai ganhar um ovo de chocolate ao leite e um ovo de chocolate branco 🍬";
            }

            else if(cidade.value=="pa"){
                resultado.innerHTML="🍬 Minha amiga vai ganhar um ovo de chocolate amargo e um ovo de chocolate ao leite 🍫";
            }
            else{
                resultado.innerHTML="";
            }
            });
        }

        else if(paises.value =="au"){
            resultado.innerHTML="🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬";
            
        }

        else if(paises.value =="us"){
            resultado.innerHTML="🍬 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍫";
            
            }

        else if(paises.value=="uk"){
            resultado.innerHTML="🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬";
            }
        
        else{

            }

        
    });

});