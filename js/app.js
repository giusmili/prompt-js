(() => {

    const btn = document.querySelector("section .button");
    const printout = document.querySelector("section h2");
    let firstName, lastName, age;

    btn.addEventListener("click", e => {
        e.stopPropagation();
        //alert(e.target.tagName)
        callUser.dialog();
    });

    const callUser = {

        dialog() {

            firstName = String(window.prompt("Votre nom s'il vous plait?", ""));
            lastName = String(prompt("Votre prénom s'il vous plait?", ""));
            age = Number(parseInt(prompt("Votre age s'il vous plait?", "")));

            if (firstName && lastName && age) {
                /*   Swal.fire({
                      title: "Bon travail", 
                      text: "You clicked the button!",
                      icon: "success"
                    }); */
                printout.classList.remove("warning");
                printout.innerHTML = `${firstName} ${lastName} ${age}`;
            } else {
                /* Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  }); */
                printout.classList.add("warning");
                printout.innerText = "Tous les champs sont obligatores!!!";
            }

            tabUser = [];
            tabUser.push(firstName, lastName, age);

            const User = {
                stock: tabUser
            };
            Object.seal(User);
            console.table(tabUser);

            /* localStorage */
            localStorage.setItem("user", JSON.stringify(User.stock));
            let unstock = localStorage.getItem("user");
            let userIndex = JSON.parse(unstock);
        }
    };
})();