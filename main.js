const submitBtn = document.getElementById('submit')
const form = document.getElementById('contactForm')
const thanks = document.getElementById('thanks')
const inputs = document.querySelectorAll('#contactForm input')
const textarea = document.querySelector('#contactForm textarea')
const errorMessages = document.querySelectorAll('.error-message')

const validForm = (e) => {
    
    
    
    switch(e.target.name){

        
        case 'name1':
            if(e.target.value.trim() === ''){
                inputs[0].classList.add('error')
                errorMessages[0].classList.add('active')
                inputs[0].classList.remove('valid')
            }else{
                inputs[0].classList.remove('error')
                errorMessages[0].classList.remove('active')
                inputs[0].classList.add('valid')
            }
        break
        case 'name2':
            if(e.target.value.trim() === ''){
                inputs[1].classList.add('error')
                errorMessages[1].classList.add('active')
                inputs[1].classList.remove('valid')
            }else{
                inputs[1].classList.remove('error')
                errorMessages[1].classList.remove('active')
                inputs[1].classList.add('valid')
            }
        break
        break
        case 'email':
            if(e.target.value.trim() === '' || !e.target.value.includes('@') ||  !e.target.value.includes('.')){
                inputs[2].classList.add('error')
                errorMessages[2].classList.add('active')
                inputs[2].classList.remove('valid')
            }else{
                inputs[2].classList.remove('error')
                errorMessages[2].classList.remove('active')
                inputs[2].classList.add('valid')
            }
        break
        case 'queryType1': 
        case 'queryType2':

            if((inputs[3].checked === false && inputs[4].checked === false)){
                document.querySelector('#contactForm .error-query-type').classList.add('active')
                document.querySelector('#contactForm .queryType1').classList.add('error')
                document.querySelector('#contactForm .queryType2').classList.add('error')
            }else{
                document.querySelector('#contactForm .error-query-type').classList.remove('active')
                document.querySelector('#contactForm .queryType1').classList.remove('error')
                document.querySelector('#contactForm .queryType2').classList.remove('error')
            }
        break
        case 'consent':

                if(inputs[5].checked === false){
                    document.querySelector('#contactForm .error-consent').classList.add('active')
                }else{
                    document.querySelector('#contactForm .error-consent').classList.remove('active')
                }
        break
        default:
            console.log('No case found for this input')
        break
        
    }
}

const validMessageForm = (e) => {
    switch(e.target.name){
        case 'message':
            if(e.target.value.trim() === ''){
                textarea.classList.add('error')
                textarea.classList.remove('valid')
                document.querySelector('.error-textarea').classList.add('active')
            }else{
                textarea.classList.remove('error')
                document.querySelector('.error-textarea').classList.remove('active')
                textarea.classList.add('valid')
            }
        break
        default:
            console.log('No case found for this input')
        break
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        validForm(e)
    })

input.addEventListener('blur', (e) => {
        validForm(e)
    })
})

textarea.addEventListener('keyup', validMessageForm)
textarea.addEventListener('blur', validMessageForm)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
    form.reset()

    thanks.classList.add('active')
})