const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {e.preventDefault();
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    //VALIDAR QUE SOLO SE PUEDAN REGISTRAR CON CORREOS VALIDOS
    const emailPattern = /^[a-zA-Z0-9._-]+@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com|icloud\.com)$/;
    if (!emailPattern.test(emailInput)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    localStorage.setItem('userEmail', emailInput)
    console.log('Login successfull')
    window.location.href = 'index.html';
});
console.log(localStorage.getItem('userEmail'))