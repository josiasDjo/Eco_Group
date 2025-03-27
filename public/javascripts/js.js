const newusersignup = document.getElementById('newusersignup');
if (newusersignup) {
    newusersignup.addEventListener('submit', async (event) => {
        event.preventDefault();
        // alert('Submited');

        const fist_name = document.getElementById('firstName').value;
        const last_name = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password_user = document.getElementById('password').value;
        let msg_result = document.getElementById('msg_result');

        if (fist_name && last_name && email && password_user && msg_result) {
            const response = await fetch("/users/new-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fist_name,last_name,email,password_user })
            });

            const data = response.json();
            if(data.success) {
                msg_result.innerText = data.message;
                msg_result.style.color = 'green';
            } else {
                msg_result.innerText = data.message;
                msg_result.style.color = 'red';
            }
        } else {
            msg_result.innerText = 'Tous les champs sont réquis';
            msg_result.style.color = 'red';
        }
    })
}

const userSignin = document.getElementById('userSignin');
if (userSignin) {
    userSignin.addEventListener('submit', async (event) => {
        event.preventDefault();
        alert('submit connexion');
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let msg_result = document.getElementById('msg_result');

        if (email && email != "" && password && password != "" && msg_result) {
            const response = await fetch("/users/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email,password })
            });

            const data = response.json();
            console.log('Data : ', data.success);
            if(data.success) {
                console.log('Message : ',data.message)
                msg_result.innerText = data.message;
                msg_result.style.color = "green";
                alert('Connexion réussie');
            } else {
                console.log('Message : ', data.message)
                msg_result.innerText = 'Email ou mot de passe incorrect';
                msg_result.style.color = "red";
                alert('Email ou mot de passe incorrect');
            }
        } else {
            msg_result.innerText = "Tous les champs sont réquis";
            msg_result.style.color = "red";
        }
    });
}
