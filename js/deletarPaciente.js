
const botaoDeletar = document.querySelector('#delete');
//a funcao esta como referencia pois esta sendo usada no eventeListener na criação da td em adicionarNovoPaciente
botaoDeletar.addEventListener("click", deletarLinha);


function deletarLinha(event){
    
    
    //capturando o alvo do clique, o icone deltar
    const botaoDelete = event.target;
    
    //pego o modal para..
    const modalExcluir = document.querySelector('.modal-excluir-container');
    //..adicionar um evento para o caso de clique em cancelar ou fora do modal
    modalExcluir.addEventListener('click', (event) => {
        if(event.target.classList == 'modal-excluir-container mostrar-modal' || event.target.classList == 'botao-cancelar nao') {
            modalExcluir.classList.remove('mostrar-modal');
        }
    })

    modalExcluir.classList.add('mostrar-modal');

    
    //depois de verificado o botao não
    //o sim é capturado e é executada a função
    const botaoSim = document.querySelector('.botao-adicionar-novo.sim');
    botaoSim.addEventListener('click', function() {
        //atraves do botao pego a referencia da linha deletada
        const linhaDeletada = botaoDelete.parentNode.parentNode;
        //removo a linha
        linhaDeletada.remove();
        //fecho o modal
        modalExcluir.classList.remove('mostrar-modal');
    })

    
}
