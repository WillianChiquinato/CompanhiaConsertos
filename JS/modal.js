const fade = document.getElementById("fade");
const modal = document.getElementById("modal");

const openModal = () => {
    modal.classList.add("show");
    fade.classList.add("show");
    modal.classList.remove("hide");
    fade.classList.remove("hide");
};

const closeModal = () => {
    modal.classList.remove("show");
    fade.classList.remove("show");
    modal.classList.add("hide");
    fade.classList.add("hide");
};

document.getElementById("fechar-modal").addEventListener("click", closeModal);
fade.addEventListener("click", closeModal);

document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", openModal);
});
