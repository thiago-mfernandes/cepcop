
const btnAlterarOrdem = document.querySelector('.btn.botao--alterar-ordem');
const modalAlterarOrdem = document.querySelector('.alterar-ordem-container');

btnAlterarOrdem.addEventListener("click", () => {
    modalAlterarOrdem.classList.add('mostrar-modal');

    modalAlterarOrdem.addEventListener("click", (event) => {
        if(event.target.classList == 'alterar-ordem-container mostrar-modal' || event.target.classList == 'botao-cancelar nao') {
            modalAlterarOrdem.classList.remove('mostrar-modal');
        }
    })
})

