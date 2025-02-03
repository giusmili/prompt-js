(() => {

    const btn = document.querySelector("section .button");
    const printout = document.querySelector("section h2");

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
            printout.innerHTML = `Bonjour ${userIndex.join(' / ')}`;
        }
    };
})();