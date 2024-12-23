const password = document.querySelector('#password')
const toggle = document.querySelector('#toggle')

toggle.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text'
        toggle.src = 'show.png'
    } else {
        password.type = 'password'
        toggle.src = 'hide.png'
    }
})