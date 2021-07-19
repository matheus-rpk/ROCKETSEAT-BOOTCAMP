import Modal from "./modal.js"


const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')




// Pegar todos os botões que existe com a classe check 
const checkButtons = document.querySelectorAll(".actions a.check")


checkButtons.forEach(button => {
    // Adicionar a escuta
    button.addEventListener("click", event => {


        modalTitle.innerHTML = "Marcar como lida"


        // Abril modal
        modal.open()
    })

})

// Quando o botão delete for clicado ele abre a modal

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event => {

        modalTitle.innerHTML = "Excluir essa pergunta"


        modal.open()
    })
})

