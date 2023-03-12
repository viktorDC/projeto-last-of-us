const botoesCarrossel = document.querySelectorAll('.botao');
const imagensCarrossel = document.querySelectorAll('.imagem');
const menuLateral = document.querySelectorAll('icon');

botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click', ()=>{
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        imagensCarrossel[indice].classList.add('ativa');
    })
})