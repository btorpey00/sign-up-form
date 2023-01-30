const password = document.getElementById('password')
const confPass = document.getElementById('conf-pass')

confPass.addEventListener('input', () => {
    if(confPass.value === password.value) {
        confPass.setCustomValidity("")
    }

    else {
        confPass.setCustomValidity("Passwords must match")
    }
    
})