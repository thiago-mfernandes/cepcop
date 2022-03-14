//selecionar o modal
const modalMaisInfo = document.querySelector('.modal-mais-info-container');

//selecionar o botão 
const botaoMaisInfo = document.querySelector('#ver-mais');

//adicionar escuta e executa a proxima funçao
botaoMaisInfo.addEventListener("click", () => {
    //adicionar a classe
    modalMaisInfo.classList.add('mostrar-modal');    
});

//se a classe for selecionada sem erro, executa..
if(modalMaisInfo) {
    //adicionar escuta e se o alvo do evento for o botao, exclui a classe que exibe o modal
    modalMaisInfo.addEventListener('click', (event) => {
        if(event.target.classList == 'botao-ok-modal-detalhes' || event.target.classList == 'modal-mais-info-container mostrar-modal') {
            modalMaisInfo.classList.remove('mostrar-modal');
        }
    })
}