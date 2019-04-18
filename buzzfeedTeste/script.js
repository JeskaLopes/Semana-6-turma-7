window.addEventListener('DOMContentLoaded', function() {
    //const questoes=[document.getElementById('checkbox1', 'chechbox2','checkbox3')]
const gifs=['img/bolo-chocolate.gif','./img/bolo-fuba.gif','./img/bolo-banana.gif']
const opcaoC=document.getElementById('questaoc')
const opcaoF=document.getElementById('questaof')
const opcaoB=document.getElementById('questaob')
const opcoes=[opcaoC,opcaoF,opcaoB]

const resultado= document.getElementById('resultado');
const btn_resultado=document.getElementById('btn_resultado')
btn_resultado.addEventListener('click', function(){
    let caixasMarcadasA = document.querySelectorAll('input[name=questaoA]:checked').length;
    let caixasMarcadasB = document.querySelectorAll('input[name=questaoB]:checked').length;
    let caixasMarcadasC = document.querySelectorAll('input[name=questaoC]:checked').length;
    console.log(caixasMarcadasA, caixasMarcadasB, caixasMarcadasC)



    if(caixasMarcadasA >= 2){
        resultado.innerHTML=("Você é o bolo de CHOCOLATE "+ "<img src='./img/bolo-chocolate.gif'>");
    }

    else if(caixasMarcadasB >= 2){
        resultado.innerHTML=("Você é o bolo de FUBÁ " + "<img src='./img/bolo-fuba.gif'>");
    }

    else if(caixasMarcadasC >= 2){
        resultado.innerHTML=("Você é o bolo de BANANA" + "<img src='./img/bolo-banana.gif'>")
    }
    else{

    }
    /*if(caixinhasMarcadas == 'opcaoC' > 2 ){
        resultado.innerHTML=("Você é o bolo de CHOCOLATE "+ "<img src=./img/bolo-cocolate.gif/>")
    }
    
    else if(caixasMarcadas =='questao[1]','questao[4]', 'questao[7]'){
        resultado.innerHTML=("Você é o bolo de FUBÁ " + gifs[1])
    }
    else if(caixasMarcadas =='questao[2]','questao[5]','questao[8]'){
        resultado.innerHTML=("Você é o bolo de BANANA " + gifs[2])
    }
    
    else{
        
    }
    */
});
});