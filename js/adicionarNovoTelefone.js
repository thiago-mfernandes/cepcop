const botaoAddNovoTel = document.querySelector("#botaoAdd-tel");
botaoAddNovoTel.addEventListener("click", () => {
    
    const inputTelefone = document.querySelector('.js-input-telefone').value;
    
    const telefoneAdicionado = document.createElement("p");
    telefoneAdicionado.textContent = inputTelefone;

    const cartao = inputTelefone.parentElement;
    cartao.appendChild(telefoneAdicionado);  
})    
