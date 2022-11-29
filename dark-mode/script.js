const themeSwitch = document.querySelector('.theme-switch .form-check-input');
const html = document.querySelector('html')

themeSwitch.addEventListener('click', () => {
    html.classList.toggle('dark')
})