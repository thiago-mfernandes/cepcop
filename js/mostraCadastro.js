const flechas = document.querySelectorAll('#arrow-expand');

flechas.forEach(flecha => {
    flecha.addEventListener("click", () => {

        const blocoAvôFlecha = flecha.parentNode.parentNode; 
        const classeAtiva = blocoAvôFlecha.lastElementChild;
        classeAtiva.classList.toggle("classe-ativa");

        flecha.classList.toggle("arrow-rotate");
    })
})