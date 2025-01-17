/*below are the selector of login form*/
const heroImage = document.querySelector('.hero-image')
const logInFormContainer = document.querySelector('.log-in-form-container')
const signUpFormContainer = document.querySelector('.sign-up-form-container')
const register = document.querySelector('.register')
const logIn = document.querySelector('.login')
const underline =document.querySelector('.underline')



register.addEventListener('click',()=>{
    logInFormContainer.classList.remove('display-flex')
    logIn.classList.remove('underline')
    logInFormContainer.classList.add('display-none')
    signUpFormContainer.classList.remove('display-none')
    signUpFormContainer.classList.add('display-flex')
    register.classList.add('underline')
})

logIn.addEventListener('click', ()=>{
    register.classList.remove('underline')
    logIn.classList.add('underline')
    signUpFormContainer.classList.remove('display-flex')
    signUpFormContainer.classList.add('display-none')
    logInFormContainer.classList.remove('display-none')
    logInFormContainer.classList.add('display-flex')
})