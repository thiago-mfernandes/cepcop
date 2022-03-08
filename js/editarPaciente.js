const botaoEditar = document.querySelector("#edit");
botaoEditar.addEventListener("click", function(event) {
    event.preventDefault();    
    
    const modal = document.querySelector('.modal-container');
    modal.classList.add('mostrar-modal');
    
    var formulario = document.querySelector('#form-adiciona');

    const tituloForm = formulario.querySelector('.modalAddNovo__title-box___titulo').textContent;
    trocaTituloFormulario(tituloForm);
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
    //pego o formulario que esta sendo analisado
    var formulario = document.querySelector('#form-adiciona');
    //verifico se ele nao esta vazio
    if(tituloFormulario != "") {
        switch(tituloFormulario) {
            case "Novo Coordenador":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Coordenador';
                break;
            case "Novo Supervisor":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Supervisor';
                break;
            case "Novo Supervisor":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Supervisor';
                break;
            case "Novo Estagiário":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Estagiário';
                break;
            case "Novo Analisante":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Analisante';
                break;
            case "Novo Atendimento":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Atendimento';
                break;
            case "Nova Turma":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Turma';
                break;
            case "Novo Curso":
                formulario.querySelector(".modalAddNovo__title-box___titulo").textContent = 'Editar Supervisor';
                break;
            default:
                console.log("Houve um problema na troca de titulo do formulario.");
        }
    }
}