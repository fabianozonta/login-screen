document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const loginFormElement = document.getElementById('loginFormElement');
    const registerFormElement = document.getElementById('registerFormElement');

    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    registerFormElement.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(registerFormElement);
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            alert('Erro ao cadastrar');
        }
    });

    loginFormElement.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(loginFormElement);
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = '/success';
        } else {
            alert('Erro ao fazer login');
        }
    });
});