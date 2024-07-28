const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {e.preventDefault();
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    localStorage.setItem('userEmail', emailInput)
    console.log('Login successfull')
    window.location.href = 'index.html';
});
console.log(localStorage.getItem('userEmail'))