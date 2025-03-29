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
                // localStorage.setItem('token', data.token);
                // window.location.href = "/s/admin";
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

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let msg_result = document.getElementById('msg_result');

        if (email && email != "" && password && password != "" && msg_result) {
            const response = await fetch("/users/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email,password })
            });

            const data = await response.json();
            if(data.success) {
                msg_result.innerText = data.message;
                msg_result.style.color = "green";
                localStorage.setItem('token', data.token);
                window.location.href = "/s/admin";
            } else {
                msg_result.innerText = data.message;
                msg_result.style.color = "red";
            }
        } else {
            msg_result.innerText = "Tous les champs sont réquis";
            msg_result.style.color = "red";
        }
    });
}

const addaProject = document.getElementById('addaProject');
if(addaProject) {
    addaProject.addEventListener('submit', async (event) => {
        event.preventDefault();
        // alert('Submit');

        const title = document.getElementById('title_project').value;
        const description = document.getElementById('description_project').value;
        const image = document.getElementById('image');
        const msg_result = document.getElementById('msg_result');

        if (title && title != "" && description && description != "" && image && image.files.length != 0) {
            const formData = new FormData();
            formData.append('image', image.files[0]);

            try {
                const response1 = await fetch("/upload/image", {
                    method: "POST", 
                    body: { formData }
                });
                const newName = response1.json();
                if(newName.success) {
                    const image = newName.newname;
                    console.log('New name : ', image);

                    const response = await fetch("", {
                        method: "POST", 
                        headers: { "Content-Type": "application/json" },
                        body: { title,description,image }
                    });
                    const data = response.json();
                    if (data.success) {
                        msg_result.innerText = data.message;
                        msg_result.style.color = "red";
                    } else {
                        msg_result.innerText = data.message;
                        msg_result.style.color = "red";
                    }
                } else {
                    msg_result.innerText = "Une erreur s'est produite !! ";
                    msg_result.style.color = "red";
                }
            } catch(err) {
                msg_result.innerText = "Une erreur s'est produite !! ";
                msg_result.style.color = "red";
            }
        } else {
            msg_result.innerText = "Tous les champs sont réquis !! ";
            msg_result.style.color = "red";
        }
    })
}
