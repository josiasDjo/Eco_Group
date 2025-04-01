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
            const loader = document.getElementById("loader");
            loader.style.display = "block";

            try {
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
            } catch (err) {
                console.log('Erreur : ', err);
            } finally {
                loader.style.display = "none";
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

            const loader = document.getElementById("loader");
            loader.style.display = "block";

            try {
                const response1 = await fetch("/upload/image", {
                    method: "POST", 
                    body: formData
                });
                const newName = await response1.json();
                console.log('Value : ', newName);
                if(newName.success) {
                    const image = newName.newname;
                    console.log('New name : ', image);

                    const response = await fetch("/project/addProject", {
                        method: "POST", 
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ title,description,image })
                    });
                    const data = await response.json();
                    if (data.success) {
                        msg_result.innerText = data.message;
                        msg_result.style.color = "green";
                        window.location.reload();
                    } else {
                        msg_result.innerText = data.message;
                        msg_result.style.color = "red";
                    }
                } else {
                    msg_result.innerText = "Une erreur s'est produite !! upload image ";
                    msg_result.style.color = "red";
                }
            } catch(err) {
                msg_result.innerText = "Une erreur s'est produite !! catch exc ";
                msg_result.style.color = "red";
            } finally {
                loader.style.display = "none";
            }
        } else {
            msg_result.innerText = "Tous les champs sont réquis !! ";
            msg_result.style.color = "red";
        }
    })
}

const addToTeam = document.getElementById('addToTeam');
if(addToTeam) {
    addToTeam.addEventListener('submit', async (event) => {
        event.preventDefault();

        const first_name = document.getElementById('prenom').value;	
        const last_name = document.getElementById('nom').value;	
        const image = document.getElementById('image_perso');
        const msg_result = document.getElementById('msg_result_team');

        if(first_name && first_name != "" && last_name && last_name != "" && image.files.length != 0) {
            const formData = new FormData();
            formData.append('image', image.files[0]);

            const loader = document.getElementById("loader");
            loader.style.display = "block";
            
            try {
                const response1 = await fetch("/upload/image", {
                    method: "POST", 
                    body: formData
                });
                const newName = await response1.json();
                // console.log('Value : ', newName);
                const image = newName.newname;
                const response = await fetch("/equipe/add_member", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ first_name,last_name,image })
                });

                const data = await response.jon();

                if(data.success) {
                    msg_result.innerText = data.message;
                    msg_result.style.color = 'green';
                    window.location.reload();
                }
            } catch (err) {
                msg_result.innerText = 'Une erreur est survenue';
                msg_result.style.color = 'red';
            } finally {
                loader.style.display = "none";
            }
        }
    })
}