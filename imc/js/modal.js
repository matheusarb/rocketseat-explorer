// Object literal
// Modal
export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    btnClose: document.querySelector(".modal button.close"),
    msgImc: document.querySelector(".modal .title span"),
    error: document.querySelector(".alert-error"),
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }    
}

window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
    if(Modal.wrapper.classList.contains("open")) {
        if(event.key == 'Escape') {
            Modal.close();
        }
    }
}
