document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation
    let valid = true;

    // Username validation
    if (username !== 'emilys') {
        document.getElementById('usernameError').innerText = 'Invalid username.';
        valid = false;
    } else {
        document.getElementById('usernameError').innerText = '';
    }

    // Email validation
    if (email && !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        valid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters.';
        valid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    if (valid) {
        // API request
        const data = {
            username: username,
            password: password,
            email: email // optional
        };

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                window.location.href = '/home'; // Redirect to main page
            } else {
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch(error => console.error('Error:', error));
    }
});

// Auto-login if token exists
if (localStorage.getItem('token')) {
    window.location.href = '/home';
}

// Logout functionality on main page (to be implemented in home.js)
function logout() {
   localStorage.removeItem('token');
   window.location.href = '/auth/login';
}
