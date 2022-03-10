//import { deletarLinha } from './deletarPaciente.js'

//execução do preenchimento do modal
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
    pacienteLinha.appendChild(montaTd(formValue.nome, "tabela-body-td"));
    pacienteLinha.appendChild(montaTd(formValue.email, "tabela-body-td"));
    pacienteLinha.appendChild(montaTd(formValue.cpf, "tabela-body-td"));
    pacienteLinha.appendChild(montaTd(formValue.telefone, "tabela-body-td"));
    pacienteLinha.appendChild(montaTd(formValue.curso, "tabela-body-td"));
    pacienteLinha.appendChild(montaTd(formValue.permissao, "tabela-body-td"));
    pacienteLinha.appendChild(montaTd(formValue.data, "tabela-body-td"));
    pacienteLinha.appendChild(botoesDeAcao());
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
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear(); 
    
    dia = formataTempo(dia);
    mes = formataTempo(mes);

    var stringData = `${dia}/${mes}/${ano}`;

    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    hora = formataTempo(hora);
    minutos = formataTempo(minutos);
    segundos = formataTempo(segundos);
    
    var stringHora = `${hora}:${minutos}:${segundos}`;

    var dataHora = `${stringData}\n${stringHora}`;
    return dataHora;
}

//função verifica se o tempo é menor que 10:
//se for, será colocado um 0 string para exibir a informação formatada
function formataTempo(tempo) {
    //early return
    if(tempo > 10) {
        return tempo;
    } else {
        tempo = '0' + String(tempo);
        return tempo;
    }
}

function botoesDeAcao() {
    //criar uma td botoesAcao e colocar a classe
    const botoesAcao = document.createElement("td");
    botoesAcao.classList.add("tabela-body-td");

    //criar botoes e classes
    const botaoEditar = document.createElement("i");
    botaoEditar.id = "edit"
    botaoEditar.classList.add("material-icons", "edit");
    botaoEditar.textContent = "edit";
    //botaoEditar.addEventListener('click', editarLinha);
    

    const botaoDeletar = document.createElement("i");
    botaoDeletar.id = "delete";
    botaoDeletar.classList.add("material-icons", "delete");
    botaoDeletar.textContent = "delete";
    botaoDeletar.addEventListener('click', deletarLinha);
    
    //inserir na tr
    botoesAcao.appendChild(botaoEditar);
    botoesAcao.appendChild(botaoDeletar);

    return botoesAcao;
}   
    
