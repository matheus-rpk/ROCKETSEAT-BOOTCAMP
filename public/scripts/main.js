import Modal from "./modal.js"


const modal = Modal()


// Pegar todos os botões que existe com a classe check 
const checkButtons = document.querySelectorAll(".actions a.check")


checkButtons.forEach(button => {
    // Adicionar a escuta
    button.addEventListener("click", event => {
        // Abril modal
        modal.open()
    })

})




// Pegar quando o marcar como lido for clicado

