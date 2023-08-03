// var modal = document.getElementById("modal");
// var btn = document.getElementById("submitBtn");
// var closeBtn = document.getElementsByClassName("close")[0];

// btn.addEventListener("click", function(event) {
//     event.preventDefault();


//     var nameInput = document.getElementsByName("name")[0];
//     var emailInput = document.getElementsByName("email")[0];
//     var messageInput = document.getElementsByName("message")[0];

//     var isValid = true;

//     if (nameInput.value === "") {
//         nameInput.style.borderColor = "red";
//         isValid = false;
//     } else {
//         nameInput.style.borderColor = "";
//     }

//     if (emailInput.value === "") {
//         emailInput.style.borderColor = "red";
//         isValid = false;
//     } else {
//         emailInput.style.borderColor = "";
//     }

//     if (messageInput.value === "") {
//         messageInput.style.borderColor = "red";
//         isValid = false;
//     } else {
//         messageInput.style.borderColor = "";
//     }

//     if (!isValid) {
//         return;
//     }


//     modal.style.display = "block";
// });

// closeBtn.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// 





document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const submitBtn = document.getElementById("submitBtn");
    const closeBtn = document.querySelector(".close");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();

        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const messageInput = document.querySelector('textarea[name="message"]');

        let isValid = true;

        if (nameInput.value === "") {
            nameInput.style.borderColor = "red";
            isValid = false;
        } else {
            nameInput.style.borderColor = "";
        }

        if (emailInput.value === "") {
            emailInput.style.borderColor = "red";
            isValid = false;
        } else {
            emailInput.style.borderColor = "";
        }

        if (messageInput.value === "") {
            messageInput.style.borderColor = "red";
            isValid = false;
        } else {
            messageInput.style.borderColor = "";
        }

        if (!isValid) {
            return;
        }

        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});