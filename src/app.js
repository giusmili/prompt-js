(()=>{
    let firstName, 
        lastName, 
        age,
        tabUser
    
    firstName = String(window.prompt("Votre nom s'il plait?",""))
    lastName = String(prompt("Votre prénom s'il plait?",""))
    age = Number(parseInt(prompt("Votre age s'il plait?","")))

    tabUser = []
    tabUser.push(firstName, lastName, age)

    const User = {
        stock: tabUser
    }
    Object.seal(User)
    console.table(tabUser)

})()