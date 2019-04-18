window.addEventListener('DOMContentLoaded', function() {
    // aqui vai todo o código a ser executado na página
    const nome=document.getElementById('nomeJogador')
    //const papel=document.getElementById('papel');
   // const tesoura=document.getElementById('tesoura');
   // const lagarto=document.getElementById('lagarto');
   // const spock=document.getElementById('spock');
    let vencedor=document.getElementById('vencedor');
    const computador=['pedra', 'papel','tesoura','lagarto','spock'];
    const opcao= document.getElementById('opcao');

    opcao.addEventListener('change', function(){
        const computadorEscolha = computador[Math.floor(Math.random()*computador.length)];
        console.log(computadorEscolha);
        vencedor.innerHTML=" "
     

       if(opcao.value =='pedra'){
            if(computadorEscolha =='pedra'){
                vencedor.innerHTML="Empate";
            }
            else if(computadorEscolha =='tesoura'){
                vencedor.innerHTML="Computador escolheu tesoura, você ganhou"; 
            }
            else if(computadorEscolha =='papel'){
                vencedor.innerHTML="Computador escolheu papel, você ganhou"; 
            }
            else if(computadorEscolha =='lagarto'){
                vencedor.innerHTML="Computador escolheu lagarto, você perdeu"; 
            }
            else if(computadorEscolha =='spock'){
                vencedor.innerHTML="Computador escolheu spock, você perdeu"; 
            }
        };
        if(opcao.value=='papel'){
            if(computadorEscolha=='papel'){
                vencedor.innerHTML="Empate"
            }
            else if(computadorEscolha=='tesoura'){
                vencedor.innerHTML="Computador escolheu tesoura, você perdeu";
            }
            else if(computadorEscolha=='pedra'){
                vencedor.innerHTML="Computador escolheu pedra, você ganhou";
            }
            else if(computadorEscolha =='lagarto'){
                vencedor.innerHTML="Computador escolheu largarto, você perdeu";
            }
            else if(computadorEscolha=="spock"){
                vencedor.innerHTML="Computador escolheu spock, você perdeu";
            }
        }
         if(opcao.value =='tesoura' ){
             if(computadorEscolha=='tesoura'){
                vencedor.innerHTML="Empate"
            }
            else if(computadorEscolha =='papel'){
                vencedor.innerHTML="Computador escolheu papel, você ganhou";
            }
            else if(computadorEscolha=='pedra'){
                vencedor.innerHTML="Computador escolheu pedra, você perdeu";
            }

            else if(computadorEscolha=='lagarto'){
                vencedor.innerHTML="Computador escolheu lagarto, você ganhou";
            }
            else if(computadorEscolha=='spock'){
                vencedor.innerHTML="Computador escolheu spock, você perdeu";
            }
        }
        if(opcao.value=='lagarto'){
            if(computadorEscolha=='lagarto'){
                vencedor.innerHTML="Empate"
            }
            else if(computadorEscolha=='pedra'){
                vencedor.innerHTML="Computador escolheu pedra, você perdeu";
            }
            else if(computadorEscolha=='papel'){
                vencedor.innerHTML="Computador escolheu papel, você ganhou";
            }
            else if(computadorEscolha=='tesoura'){
                vencedor.innerHTML="Computador escolheu tesoura, você perdeu";
            }
            else if(computadorEscolha=='spock'){
                vencedor.innerHTML="Computador escolheu spock, você ganhou";
            }
        }
        if(opcao.value=='spock'){
            if(computadorEscolha=='spock'){
                vencedor.innerHTML="Empate"
            }
            else if(computadorEscolha=='pedra'){
                vencedor.innerHTML="Computador escolheu pedra, você ganhou";
            }
            else if(computadorEscolha=='papel'){
                vencedor.innerHTML="Computador escolheu papel, você ganhou";
            }
            else if(computadorEscolha=='tesoura'){
                vencedor.innerHTML="Computador escolheu tesoura, você perdeu";
            }
            else if(computadorEscolha=='lagarto'){
                vencedor.innerHTML="Computador escolheu lagarto, você perdeu";
            }
        }
        else{

        }
    });
/*
    switch(expressão) {
        case pedra:
          // se a condição for verdadeira, o código aqui dentro será executado
          if (computadorEscolha[0] == pedra ) {
            document.getElementById('vencedor').innerHTML = 'Empate, jogue novamente';
          } else if (computador[1] == papel ) {
            vencedor.innerHTML = nome.value + ' escolheu ' + pedra + ' e perdeu! O computador escolheu ' + computadorEscolha
          } else {
            winnerText.innerHTML = 'O computador escolheu ' + computerChoice + ' e ganhou! ' + playerName.value + ' escolheu ' + playerChoice
          }
        break;  
        case papel:
          // se a condição anterior não for verdadeira, o código aqui dentro será executado
          break;
        case tesoura:
          // se a condição anterior não for verdadeira, o código aqui dentro será executado
          break;  
        case lagarto:
          // se a condição anterior não for verdadeira, o código aqui dentro será executado
          break;
        case spock:
          // se a condição anterior não for verdadeira, o código aqui dentro será executado
          break;
        default:
          // se a condição anterior não for verdadeira, o código aqui dentro será executado
      }
    */
  });