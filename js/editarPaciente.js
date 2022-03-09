const botaoEditar = document.querySelector("#edit");
botaoEditar.addEventListener("click", function(event) {
    event.preventDefault();    
    
    const modal = document.querySelector('.modal-container');
    modal.classList.add('mostrar-modal');
    
    var formulario = document.querySelector('#form-adiciona');

    const tituloBloco = document.querySelector('.bloco-adicionarBuscar__container___titulo').textContent;
    
    trocaTituloFormulario(tituloBloco);
    trocaBotao();
    
})

function trocaBotao() {
    var formulario = document.querySelector('#form-adiciona');

    //remover id do botao de adicionar
    formulario.querySelector('#botao-add').removeAttribute('id');
    var novoBotao = formulario.querySelector('.js-editar-form');
    novoBotao.textContent = 'Salvar'
    return trocaBotao;
}

//analisa dinamicamente o formulario e adequa o titulo ao contexto do formulario:
function trocaTituloFormulario(tituloFormulario) {
    console.log(tituloFormulario);
    //pego o formulario que esta sendo analisado
    var formulario = document.querySelector('#form-adiciona');
    //verifico se ele nao esta vazio
    if(tituloFormulario != "") {
        switch(tituloFormulario) {
            case "Coordenadores":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Coordenador';
                break;
            case "Supervisores":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Supervisor';
                break;
            case "Estagiários":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Estagiário';
                break;
            case "Analisantes":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Analisante';
                break;
            case "Atendimentos":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Atendimento';
                break;
            case "Turmas":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Turma';
                break;
            case "Cursos":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Curso';
                break;
            default:
                console.log("Houve um problema na troca de titulo do formulario.");
        }
    }
}