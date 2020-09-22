var campoIdade = document.getElementById('campoIdade');
var paragrafoIdade = document.getElementById('paragrafoIdade');
var botaoOk = document.getElementById('botaoOk');
var botaoLimpar = document.getElementById('botaoLimpar');

botaoOk.onclick = mostrarIdade;
botaoLimpar.addEventListener('click', limpar);

function mostrarIdade() {
    console.log('entrou');
    var ano = new Date().getFullYear();
    var idade = ano - campoIdade.value.trim();  
    var mensagemIdade = 'A sua idade é: '+ idade + '.';     
    console.log(mensagemIdade);       
    paragrafoIdade.innerText = mensagemIdade;
}

function limpar() {
    campoIdade.value = '';
    paragrafoIdade.innerText = '';
}