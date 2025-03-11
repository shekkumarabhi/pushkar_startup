/*below are the selector of login form*/
const heroImage = document.querySelector('.hero-image')
const logInFormContainer = document.querySelector('.log-in-form-container')
const signUpFormContainer = document.querySelector('.sign-up-form-container')
const register = document.querySelector('.register')
const logIn = document.querySelector('.login')
const underline = document.querySelector('.underline')

//log in button
const loginForm = document.querySelector('.login-form')
const emailInput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')

//for moving to the register part
register.addEventListener('click', () => {
    logInFormContainer.classList.remove('display-flex')
    logIn.classList.remove('underline')
    logInFormContainer.classList.add('display-none')
    signUpFormContainer.classList.remove('display-none')
    signUpFormContainer.classList.add('display-flex')
    register.classList.add('underline')
})


//for moving to the log in part
logIn.addEventListener('click', () => {
    register.classList.remove('underline')
    logIn.classList.add('underline')
    signUpFormContainer.classList.remove('display-flex')
    signUpFormContainer.classList.add('display-none')
    logInFormContainer.classList.remove('display-none')
    logInFormContainer.classList.add('display-flex')
})


//sending the data to the backend
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = emailInput.value
    let password = passwordInput.value  
    fetch('http://127.0.0.1:8000/api/user/login/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(
            {
                email: email,
                password: password
            }
        )
    }).then((data)=>{
         console.log(data)
    })
})


async function makeRequest(){
    
}