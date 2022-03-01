
const botaoAdd = document.querySelector('#botao-add');
botaoAdd.addEventListener("click", function(event) {
    event.preventDefault();
    
    //pego o form preenchido pelo usuario
    var formulario = document.querySelector('#form-adiciona');
    //coloco as informações em uma var paciente
    var paciente = obtemPacienteDoFormulario(formulario);
    //add o paciente na tabela
    adicionaPacienteNaTabela(paciente);
    
    //fecha o modal
    fechaModal();
    formulario.reset();
    
})



//----------FUNÇÔES----------//
function obtemPacienteDoFormulario(formulario) {

    //passo um formulario como parametro para a função;
    //extraio cada info em uma variavel
    var nomeValue = document.querySelector(".js-input-nome").value;
    var cursoValue = document.querySelector(".js-input-curso").value;
    var cpfValue = document.querySelector(".js-input-cpf").value;
    var emailValue = document.querySelector(".js-input-email").value;
    var telefoneValue = document.querySelector(".js-input-telefone").value;
    
    var permissoaoSupervisorValue = document.querySelector('input[name="supervisor"]:checked').value;
    var permissoaoEstagiarioValue = document.querySelector('input[name="estagiario"]:checked').value;
    var permissoaoAnalisantesValue = document.querySelector('input[name="analisantes"]:checked').value;
    var permissoaoAtendimentosValue = document.querySelector('input[name="atendimentos"]:checked').value;

    var permissoesValue = 
    `Gerenciar Supervisores: ${permissoaoSupervisorValue}\n` +
     `Gerenciar Estagiários: ${permissoaoEstagiarioValue}\n` +
      `Gerenciar Analisantes: ${permissoaoAnalisantesValue}\n` +
       `Gerenciar Atendimentos: ${permissoaoAtendimentosValue}`;

    
    //crio um objeto formValue preenchido com as informações do formulário
    var formValue = {
        nome: nomeValue,
        curso: cursoValue,
        cpf: cpfValue,
        email: emailValue,
        telefone: telefoneValue,
        permissao: permissoesValue,
        data: obterDataHora()
    };
    //disponibilizo o objeto
    return formValue;
}

//crio uma função de montagem de dado na tabela
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

//função para montagem de um paciente
//recebe como parametro o formValue que contem os valores dos input preenchidos pelo usuario
function montaTr(formValue){
    var pacienteLinha = document.createElement("tr");
    //adiciona a classe ao elemento tr
    pacienteLinha.classList.add("tabela__body___tr");    
    
    //paciente linha insere dentro dele cada novo valor do paciente
    pacienteLinha.appendChild(montaTd(formValue.nome, "tabela__body___td"));
    pacienteLinha.appendChild(montaTd(formValue.email, "tabela__body___td"));
    pacienteLinha.appendChild(montaTd(formValue.cpf, "tabela__body___td"));
    pacienteLinha.appendChild(montaTd(formValue.telefone, "tabela__body___td"));
    pacienteLinha.appendChild(montaTd(formValue.curso, "tabela__body___td"));
    pacienteLinha.appendChild(montaTd(formValue.permissao, "tabela__body___td"));
    pacienteLinha.appendChild(montaTd(formValue.data, "tabela__body___td"));
    //disponibilizo o pacienteLinha
    return pacienteLinha;
}

function adicionaPacienteNaTabela(paciente) {
    
    var pacienteLinha = montaTr(paciente);
    //adiciona o paciente na tabela
    var tabela = document.querySelector(".tabela__body");
    tabela.appendChild(pacienteLinha);
}

function fechaModal() {
    //selecionar o modal
    const modal = document.querySelector('.modal-container');

    //se a classe for selecionada sem erro, executa..
    if(modal) {
        //adicionar escuta e executa a proxima funçao
        modal.addEventListener('click', (event) => {
            if(event.target.id == 'botao-add') {
                modal.classList.remove('mostrar-modal');
            }
        })
    }
}

function obterDataHora() {
    var data = new Date();

    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();    
    var stringData = `${dia}-${mes}-${ano}`;

    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var stringHora = `${hora}-${minutos}-${segundos}`;

    var dataHora = `${stringData} - ${stringHora}`;
    return dataHora;
}

//function botoesDeAcao() {
    //criar uma tr e colocar a classe

    //criar uma td i 
    //aplicar nessa td i a classe

//}

   
    
