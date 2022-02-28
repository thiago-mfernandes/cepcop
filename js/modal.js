//selecionar o botão 
const botaoAdicionar = document.querySelector('.botao-adicionar-novo');

//adicionar escuta e executa a proxima funçao
botaoAdicionar.addEventListener("click", () => {
    //adicionar a classe
    modal.classList.add('mostrar-modal');
});

//-------------------------------------------------------------//
//selecionar o modal
const modal = document.querySelector('.modal-container');

//se a classe for selecionada sem erro, executa..
if(modal) {
    //adicionar escuta e executa a proxima funçao
    modal.addEventListener('click', (event) => {
        if(event.target.id == 'modal-container' || event.target.classList == 'botao-fechar-modal' || event.target.classList == 'botao-cancelar') {
            modal.classList.remove('mostrar-modal');
        }
    })
}




