
const botaoDeletar = document.querySelector('#delete');
//a funcao esta como referencia pois esta sendo usada no eventeListener na criação da td em adicionarNovoPaciente
botaoDeletar.addEventListener("click", deletarLinha);


function deletarLinha(evento){
    const alvo = evento.target;
    
    const linhaDeletada = alvo.parentNode.parentNode;
    linhaDeletada.remove();
}
