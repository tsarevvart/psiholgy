const submitBtn = document.getElementById("modal1");
const formModal = document.getElementsByClassName("form-modal")[0];
const closeBtn = document.getElementsByClassName("cross")[0];

// При клике на кнопку отображаем модальное окно
submitBtn.addEventListener("click", function() {
    formModal.style.display = "block";
});

// При клике на крестик или вне модального окна скрываем его
window.addEventListener("click", function(event) {
    if (event.target == formModal || event.target == closeBtn) {
        formModal.style.display = "none";
    }
});