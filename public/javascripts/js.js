const newusersignup = document.getElementById('newusersignup');
if (newusersignup) {
    newusersignup.addEventListener('submit', async (event) => {
        event.preventDefault();
        alert('Submited');

        const first_name = document.getElementById('firstName');
        const last_name = document.getElementById('lastName');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
    })
}