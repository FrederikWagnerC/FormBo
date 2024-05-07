const formSubmitButton = document.getElementById('formSubmit')
const formName = document.getElementById('formName')
const formLastname = document.getElementById('formLastname')
const formMail = document.getElementById('formMail')
const formAge = document.getElementById('formAge')
const formSelect = document.getElementById('formSelect')

let formNameBoo = false
let formLastnameBoo = false
let formMailBoo = false
let formAgeBoo = false


formName.addEventListener('keyup', (event) => {
    
    const userNameRegex = /^[a-zæøå]+$/gi;

        if (userNameRegex.test(formName.value) && formName.value.length >= 2) {
            formName.classList.add('formValid')
            formName.classList.remove('formInvalid')
            formNameBoo = true
        } else {
            formName.classList.add('formInvalid')
            formName.classList.remove('formValid')
            formNameBoo = false
        }
    
})

formLastname.addEventListener('keyup', (event) => {
    const userNameRegex = /^[a-zæøå]+$/gi;

        if (userNameRegex.test(formLastname.value) && formLastname.value.length >= 2) {
            formLastname.classList.add('formValid')
            formLastname.classList.remove('formInvalid')
            formLastnameBoo = true
        } else {
            formLastname.classList.add('formInvalid')
            formLastname.classList.remove('formValid')
            formNameBoo = false
        }

})

formMail.addEventListener('keyup', (event) => {
    let formMailValue = formMail.value.toLowerCase()+event.key;
    const mailRegex = 
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(formMailValue.toLowerCase().match(mailRegex)) {
        formMail.classList.add('formValid')
        formMail.classList.remove('formInvalid')
        formMailBoo = true
    } else {
        formMail.classList.add('formInvalid')
        formMail.classList.remove('formValid')
        formMailBoo = false
    }
})

formAge.addEventListener('keyup', (event) => {
    
    if(formAge.value) {
    if(formAge.value < 0 || formAge.value > 99) {
        formAge.classList.add('formInvalid')
        formAge.classList.remove('formValid')
        formAgeBoo = false
    } else {
        formAge.classList.add('formValid')
        formAge.classList.remove('formInvalid')
        formAgeBoo = true
    }} else {
        formAge.classList.add('formInvalid')
        formAge.classList.remove('formValid')
        formAgeBoo = false
    }
})


formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const userName = document.getElementById('formName').value
    const userLastname = document.getElementById('formLastname').value
    const userMail = document.getElementById('formMail').value
    const userAge = document.getElementById('formAge').value
    const userInterest = document.getElementById('formSelect').value

    let userInfo = [userName, userLastname, userMail, userAge, userInterest]
    const user = {
        name: userName,
        lastname: userLastname,
        mail: userMail,
        age: userAge,
        interest: userInterest
    };


    if (formNameBoo === true && formLastnameBoo === true && formMailBoo === true && formAgeBoo === true && user.interest) {
        console.log('sjå')
    } else {
        console.log('asd')
    }
})