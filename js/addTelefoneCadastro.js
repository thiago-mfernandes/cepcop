//peguei o botao
const botaoAdicionaTelefone = document.querySelector(".botao-addTelefone");
//peguei a referência do pai
const blocoTelefone = document.querySelector(".bloco__label.telefones");
//adicionei a escuta
botaoAdicionaTelefone.addEventListener("click", addNovoTelefone);//callback


function addNovoTelefone() {      
    
    //selecionei o input
    const inputTelefone = document.querySelector('.bloco__input.telefone');
    //selecionei o valor de dentro do input
    const valorInputTelefone = inputTelefone.value;
    
    //criar uma label telefone, classe e atributos;
    const exibeNum = document.createElement("p");
    exibeNum.classList.add("numero-telefone-adicionado");
    exibeNum.textContent = valorInputTelefone;
    //coloquei um nó filho
    blocoTelefone.appendChild(exibeNum);
    //limpo o input
    inputTelefone.value = " ";
    
    //devolvi a resposta
    return addNovoTelefone;  
    
}