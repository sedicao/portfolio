class Modal {
    static toggleModal() {
        modal.style.display = modal.style.display == 'flex' ? 'none' : 'flex'
    }
}

window.onload = () => {
    Modal.toggleModal();
}