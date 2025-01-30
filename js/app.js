(() => {
    let firstName, lastName, age, tabUser;

    firstName = String(prompt("Votre s'il plait?", ""));

    tabUser = [];
    tabUser.push(firstName);

    console.table(tabUser);
})();