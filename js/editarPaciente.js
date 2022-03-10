const botaoEditar = document.querySelector("#edit");
botaoEditar.addEventListener("click", function(event) {
    event.preventDefault();    
    
    const modal = document.querySelector('.modal-container');
    modal.classList.add('mostrar-modal');
    
    var formulario = document.querySelector('#form-adiciona');

    const tituloBloco = document.querySelector('.modalAddNovo__title-box___titulo').textContent;

    trocaTitulo(tituloBloco);
    trocaBotao();
    
})

function trocaTitulo(titulo) {
    if( titulo == "Novo") {
        titulo = "Editar";
        
        let tituloDoForm = document.querySelector(".modalAddNovo__title-box___titulo");

        tituloDoForm.textContent = titulo;
        return;
        
    } else {
        return;
    }
}

function trocaBotao() {
    var formulario = document.querySelector('#form-adiciona');

    //remover id do botao de adicionar
    formulario.querySelector('#botao-add').removeAttribute('id');
    var novoBotao = formulario.querySelector('.js-editar-form');
    novoBotao.textContent = 'Salvar'
    return trocaBotao;
}
