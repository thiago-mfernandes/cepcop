//selecionar o modal
const modalAdd = document.querySelector('.modalAddNovo');
//seleção de todos os campos
const campoCoordenador = document.querySelector('#addnovo-coordenador');
const campoNome = document.querySelector('#addNovo-nome');
const campoEmail = document.querySelector('#addNovo-email');
const campoCpf = document.querySelector('#addNovo-cpf');
const campoTelefone = document.querySelector('#addNovo-telefone');
const campoSenha = document.querySelector('#addNovo-senha');

/*
const campoSupervisorSIM = document.querySelector('#addNovo-permissaSupervisores-Sim');
const campoSupervisorNAO = document.querySelector('#addNovo-permissaSupervisores-Nao');
const campoEstagiarioSIM = document.querySelector('#addNovo-permissaEstagiarios-Sim').;
const campoEstagiarioNAO = document.querySelector('#addNovo-permissaEstagiarios-Nao').value;
const campoAnalisantesSIM = document.querySelector('#addNovo-permissaAnalisanteses-Sim').value;
const campoAnalisantesNAO = document.querySelector('#addNovo-permissaAnalisanteses-Nao').value;
const campoAtendimentosSIM = document.querySelector('#addNovo-permissaAtendimentoses-Sim').value;
const campoAtendimentosNAO = document.querySelector('#addNovo-permissaAtendimentoses-Nao').value;
*/

function adicionarPaciente() {
    
    function montaDado(classe, campo) {
        var nomeTd = document.createElement("td");
        nomeTd.classList.add(classe);
        nomeTd.textContent = campo;
        return montaDado;
    }
    
    function montaPaciente() {
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add('tabela__body___tr');
        pacienteTr.appendChild(montaDado("tabela__body___td", campoNome));
        //montaDado("tabela__body___td", campoCurso);
        pacienteTr.appendChild(montaDado("tabela__body___td", campoEmail));
        pacienteTr.appendChild(montaDado("tabela__body___td", campoCpf));
        pacienteTr.appendChild(montaDado("tabela__body___td", campoNome));
        pacienteTr.appendChild(montaDado("tabela__body___td", campoTelefone));
        return pacienteTr;
    }    
    const tabelaBody = document.querySelector('tabela.body');
    tabelaBody.appendChild(pacienteTr);
    return;
}


const botaoAdd = document.querySelector('#botao-add');
botaoAdd.addEventListener("click", () => {
    adicionarPaciente();
});
