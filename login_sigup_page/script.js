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
    }).catch((error)=>{
         console.log(error)
    })
})


//signup foprm input values
const signUpForm = document.querySelector('.sign-up-form')
const firstName = document.querySelector('#first-name').value
const lastName = document.querySelector('#last-name').value
const enterPassword = document.querySelector('#enter-password').value
const confirmPassword = document.querySelector('#confirm-password').value
const emailId = document.querySelector('#email-ID').value
const phoneNumber = document.querySelector('#phone-number').value
const skypeId = document.querySelector('#skype-ID').value
const organisationName = document.querySelector('#organisation-name').value
const organisationWebsite = document.querySelector('#orgainsation-website').value
const signUpSubmit = document.querySelector('#sign-up-submit')



signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch('',{
        method:'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(
            {
                f_name:firstName,
                l_name:lastName,
                email:emailId,
                company_name:organisationName,
                company_website:organisationWebsite,
                password:enterPassword
            }
        )
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
})