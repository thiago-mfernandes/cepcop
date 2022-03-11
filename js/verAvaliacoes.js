//selecionar o modal
const modalAvaliacoes = document.querySelector('.modal-avaliacoes-container');

//selecionar o botão 
const botaoAvaliacoes = document.querySelector('.botao-ver-avaliacoes');

//adicionar escuta e executa a proxima funçao
botaoAvaliacoes.addEventListener("click", () => {
    //adicionar a classe
    modalAvaliacoes.classList.add('mostrar-modal');    
});

//se a classe for selecionada sem erro, executa..
if(modalAvaliacoes) {
    //adicionar escuta e se o alvo do evento for o botao, exclui a classe que exibe o modal
    modalAvaliacoes.addEventListener('click', (event) => {
        if(event.target.classList == 'botao-ok-modal-detalhes') {
            modalAvaliacoes.classList.remove('mostrar-modal');
        }
    })
}