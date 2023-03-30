

let formElm = document.querySelector('#newsletter')

    formElm.addEventListener('submit', (event) => {
        
        let emailInput = document.querySelector('#email')
        let email = emailInput.value    
        
        event.preventDefault()

        formElm.textContent = `Děkujeme za Váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese: ${email}.`

    }) 

    let emailInput = document.querySelector('#email')
   
let check = (event) => {

    let email = emailInput.value    


    if (email === "" || !email.includes("@")){
    
        emailInput.classList.add("email")

    } else {

        emailInput.classList.remove("email")
    }
}

emailInput.addEventListener("input", check)


