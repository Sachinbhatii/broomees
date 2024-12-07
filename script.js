const signInButton = document.getElementById('signInButton');

signInButton.addEventListener('click', async function (event) {

    event.preventDefault();

    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirmPassword').value,
    };


    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {

        const response = await fetch('http://localhost:3000/api/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(formData), 
        });


        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            alert(result.message || 'Form submitted successfully!');
        } else {
            const error = await response.json();
            console.error('Error:', error);
            alert(error.error || 'Failed to submit form!');
        }
    } catch (err) {
        console.error('Network Error:', err);
        alert('An error occurred. Please try again.');
    }
});
