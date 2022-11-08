'use strict';

// DOM VARIABLES
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");


//SHOW MODAL EVENT HANDLER
const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//CLOSE MODAL EVENT HANDLER
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//SHOW MODAL EVENT LISTENERS
for(let i = 0; i < btnShowModal.length; i++){
    btnShowModal[i].addEventListener('click', showModal);
}

//CLOSE MODAL EVENT LISTENERS
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
    if(event.key === "Escape" && !modal.classList.contains('hidden')){
        closeModal();
    }
})
