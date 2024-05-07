const formSubmitButton = document.getElementById('formSubmit')
const formName = document.getElementById('formName')
const formLastname = document.getElementById('formLastname')
const formMail = document.getElementById('formMail')
const formAge = document.getElementById('formAge')

let formNameBoo = false
let formLastnameBoo = false
let formMailBoo = false
let formAgeBoo = false


formName.addEventListener('keydown', (event) => {
    
    if (event.key === 'Backspace') {
        if (formName.value.length -1 >= 2) {
            formName.classList.add('formValid')
            formName.classList.remove('formInvalid')
            formNameBoo = true
        } else {
            formName.classList.add('formInvalid')
            formName.classList.remove('formValid')
            formNameBoo = false
        }
    } else {
        if (formName.value.length +1 >= 2) {
            formName.classList.add('formValid')
            formName.classList.remove('formInvalid')
            formNameBoo = true
        } else {
            formName.classList.add('formInvalid')
            formName.classList.remove('formValid')
            formNameBoo = false
        }
    }

})

formLastname.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        if (formLastname.value.length-1 >= 2) {
            formLastname.classList.add('formValid')
            formLastname.classList.remove('formInvalid')
            formLastnameBoo = true
        } else {
            formLastname.classList.add('formInvalid')
            formLastname.classList.remove('formValid')
            formLastnameBoo = false
        }
    } else {
        if (formLastname.value.length +1 >= 2) {
            formLastname.classList.add('formValid')
            formLastname.classList.remove('formInvalid')
            formLastnameBoo = true
        } else {
            formLastname.classList.add('formInvalid')
            formLastname.classList.remove('formValid')
            formLastnameBoo = false
        }
    }

})

formMail.addEventListener('keydown', (event) => {
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

formAge.addEventListener('keydown', (event) => {
    let formAgeCurrent = parseInt(formAge.value + event.key)
    if(event.key === 'Backspace') {
        formAgeCurrent = Math.floor(formAgeCurrent / 10)
    }
    if(formAgeCurrent < 0 || formAgeCurrent > 99) {
        formAge.classList.add('formInvalid')
        formAge.classList.remove('formValid')
        formAgeBoo = false
    } else {
        formAge.classList.add('formValid')
        formAge.classList.remove('formInvalid')
        formAgeBoo = true
    }
})


formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault
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

    if (formNameBoo === true && formLastname === true && formMail === true && formAgeBoo === true) {
        console.log('sjå')
    } else {
        console.log('asd')
    }
})