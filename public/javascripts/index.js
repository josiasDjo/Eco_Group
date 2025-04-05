// Sélectionner tous les éléments du document
const allElements = document.querySelectorAll('*');

// Parcourir et ajouter la classe 'animable'
allElements.forEach(el => {
    el.classList.add('animable');
    // el.classList.add('opacity-95');
});



function navbarShowH (param) {
    const fa_xmark_menu = document.getElementById('fa_xmark_menu');
    const fa_bars_menu = document.getElementById('fa_bars_menu');
    const navbar_part2 = document.getElementById('navbar_part2');
    const navbarContainer = document.getElementById('navbarContainer');
    const heroHeader = document.getElementById('heroHeader');

    if(param === "open" && fa_xmark_menu && fa_bars_menu && navbar_part2 && heroHeader) {

        navbarContainer.classList.remove("h-16", "justify-between");
        navbarContainer.classList.add("w-full", "flex-col", "absolute", "top-0", "z-40");
        heroHeader.classList.add('mt-16');
        navbar_part2.classList.remove('hidden');
        navbar_part2.classList.add('flex');
        fa_bars_menu.classList.remove('flex');
        fa_bars_menu.classList.add('hidden');
        fa_xmark_menu.classList.remove('hidden');
        fa_xmark_menu.classList.add("flex", "absolute", "top-3", "right-3");


    } else if (param === "close" && fa_xmark_menu && fa_bars_menu && navbar_part2 && heroHeader) {

        navbarContainer.classList.add("h-16", "justify-between");
        navbarContainer.classList.remove("w-full", "flex-col","absolute", "top-0", "z-40");
        heroHeader.classList.remove('mt-16');
        navbar_part2.classList.add('hidden');
        navbar_part2.classList.remove('flex');
        fa_bars_menu.classList.add('flex');
        fa_bars_menu.classList.remove('hidden');
        fa_xmark_menu.classList.add('hidden');
        fa_xmark_menu.classList.remove('flex');
    } else {
        console.log('Valeur inconnue');
    }
}

function goBack() {
    if (window.referrer) {
        window.location.href = document.referrer;
    } else {
        window.history.back();
    }
}

// open modal add product
function openAddProject(param) {
    // alert('Add project');

    const modals_addFields = document.getElementById('modals_addProject');
    const addProjectId = document.getElementById('addProjectId');

    if (param === "close") {
        if (addProjectId && modals_addFields) {
            modals_addFields.classList.add('hidden');
            modals_addFields.classList.remove('flex');
            addProjectId.classList.add('hidden');
            addProjectId.classList.remove.remove('flex'); 
        }
    } else {
        if (addProjectId && modals_addFields) {
            modals_addFields.classList.remove('hidden');
            modals_addFields.classList.add('flex');
            addProjectId.classList.remove('hidden');
            addProjectId.classList.add('flex');
        }
    }

}
// open modal modify project
const modifyProject = document.querySelectorAll('.modifyProject');
if(modifyProject) {
    modifyProject.forEach((modify) => {
        modify.addEventListener('click', (event) => {
            event.preventDefault();

            const modals_addFields = document.getElementById('modals_addProject');
            const addProjectId = document.getElementById('ModifyServiceIDservice');

            const parentUl = modify.closest("ul");
            const project_id = parentUl.querySelector(".project_id").textContent.trim();
            const project_title = parentUl.querySelector(".project_title").textContent.trim();
            const project_description = parentUl.querySelector(".project_description").textContent.trim();
            const project_image = parentUl.querySelector(".project_image").textContent.trim();

            const modifyId = document.getElementById('modifyIdProject');
            const modifynom = document.getElementById('modifynom_project');
            const modifydescription_service = document.getElementById('modifydescription_project');
            const modifyimage_perso = document.getElementById('imageDefault');

            if(addProjectId && modals_addFields) {

                modifyId.textContent = project_id;
                modifynom.value = project_title;
                modifydescription_service.value = project_description;
                modifyimage_perso.textContent = project_image;

                modals_addFields.classList.remove('hidden');
                modals_addFields.classList.add('flex');
                addProjectId.classList.remove('hidden');
                addProjectId.classList.add('flex');
            }
        })
    })
}
function closeModifyProjects() {
    const modals_addFields = document.getElementById('modals_addProject');
    const addProjectId = document.getElementById('addProjectId');
    if (addProjectId && modals_addFields) {
        modals_addFields.classList.add('hidden');
        modals_addFields.classList.remove('flex');
        addProjectId.classList.add('hidden');
        addProjectId.classList.remove.remove('flex'); 
    }
}
function openAddToTeam(param) {
    // alert('Modal add person');
    const modals_addFields = document.getElementById('modals_addMember');
    const addTeamId = document.getElementById('addTeamId');

    if(param === 'close') {
        if(modals_addFields && addTeamId) {
            modals_addFields.classList.add('hidden');
            modals_addFields.classList.remove('flex');
            addTeamId.classList.add('hidden');
            addTeamId.classList.remove('flex');
        }
    } else {
        if(modals_addFields && addTeamId) {
            modals_addFields.classList.remove('hidden');
            modals_addFields.classList.add('flex');
            addTeamId.classList.remove('hidden');
            addTeamId.classList.add('flex');
        }
    }
}

// open modal modify team
const modifyTeam = document.querySelectorAll('.modifyTeam');
if(modifyTeam) {
    modifyTeam.forEach((modify) => {
        modify.addEventListener('click', (event) => {
            event.preventDefault();

            const modals_addFields = document.getElementById('modals_addMember');
            const ModifyServiceShow = document.getElementById('ModifyTeamId');

            const parentUl = modify.closest("ul");
            const Team_id = parentUl.querySelector(".Team_id").textContent.trim();
            const Team_last_name = parentUl.querySelector(".Team_last_name").textContent.trim();
            const Team_first_name = parentUl.querySelector(".Team_first_name").textContent.trim();
            const Team_image = parentUl.querySelector(".Team_image").textContent.trim();

            const modifyId = document.getElementById('modifyIdTeam');
            const modifynom = document.getElementById('nom_modify');
            const prenom_modify = document.getElementById('prenom_modify');
            const modifyimage_perso = document.getElementById('imageDefaultTeam');

            if(ModifyServiceShow && modals_addFields) {

                modifyId.textContent = Team_id;
                modifynom.value = Team_last_name;
                prenom_modify.value = Team_first_name;
                modifyimage_perso.textContent = Team_image;

                modals_addFields.classList.remove('hidden');
                modals_addFields.classList.add('flex');
                ModifyServiceShow.classList.remove('hidden');
                ModifyServiceShow.classList.add('flex');
            }
        })
    })
}
// Close modal modify member
function openModifyMember(param) {
    if(param === 'close') {
        const modals_addFields = document.getElementById('modals_addMember');
        const ModifyTeamId = document.getElementById('ModifyTeamId');
        if(modals_addFields && ModifyTeamId) {
            modals_addFields.classList.remove('hidden');
            modals_addFields.classList.add('flex');
            ModifyTeamId.classList.remove('hidden');
            ModifyTeamId.classList.add('flex');
        }
    }
}
// ajouter un service
function openAddService(param) {
    const modals_addFields = document.getElementById('modals_addService');
    const addService = document.getElementById('addServiceIDservice');

    if(param === 'close') {
        if(modals_addFields && addService) {
            modals_addFields.classList.add('hidden');
            modals_addFields.classList.remove('flex');
            addService.classList.add('hidden');
            addService.classList.remove('flex');
        } else {
            console.log('modals_addFields && addService ', modals_addFields, addService);
        }
    } else if (param === 'open') {
        if(modals_addFields && addService) {
            addService.classList.remove('hidden');
            addService.classList.add('flex');
            modals_addFields.classList.remove('hidden');
            modals_addFields.classList.add('flex');
        } else {
            console.log('modals_addFields && addService ', modals_addFields, addService)
        }
    } else {
        console.log('Valeur inattendu');
    }
}
// open modal modify project
const modifyService = document.querySelectorAll('.modifyService');
if(modifyService) {
    modifyService.forEach((modify) => {
        modify.addEventListener('click', (event) => {
            event.preventDefault();

            const modals_addFields = document.getElementById('modals_addService');
            const ModifyServiceShow = document.getElementById('ModifyServiceShow');

            const parentUl = modify.closest("ul");
            const service_id = parentUl.querySelector(".service_id").textContent.trim();
            const service_title = parentUl.querySelector(".service_title").textContent.trim();
            const service_description = parentUl.querySelector(".service_description").textContent.trim();
            const service_image = parentUl.querySelector(".service_image").textContent.trim();

            const modifyId = document.getElementById('modifyId_service');
            const modifynom = document.getElementById('modifynom_service');
            const modifydescription_service = document.getElementById('modifydescription_service');
            const modifyimage_perso = document.getElementById('imageDefaultService');

            if(ModifyServiceShow && modals_addFields) {

                modifyId.textContent = service_id;
                modifynom.value = service_title;
                modifydescription_service.value = service_description;
                modifyimage_perso.textContent = service_image;

                modals_addFields.classList.remove('hidden');
                modals_addFields.classList.add('flex');
                ModifyServiceShow.classList.remove('hidden');
                ModifyServiceShow.classList.add('flex');
            }
        })
    })
}
function closeModifyService() {
    const modals_addFields = document.getElementById('modals_addService');
    const addProjectId = document.getElementById('ModifyServiceShow');
    if (addProjectId && modals_addFields) {
        modals_addFields.classList.add('hidden');
        modals_addFields.classList.remove('flex');
        addProjectId.classList.add('hidden');
        addProjectId.classList.remove.remove('flex'); 
    }
}
const showParameters = document.getElementById('showParameters');
if(showParameters) {
    showParameters.addEventListener('click', (event) => {
        event.preventDefault();

        const parameter = document.getElementById('parameter');
        if(parameter) {
            if(parameter.classList.contains('hidden')) {
                parameter.classList.remove('hidden');
                parameter.classList.add('flex');
            } else {
                parameter.classList.add('hidden');
                parameter.classList.remove('flex');
            }
        } else {
            console.log('Element not found');
        }
    });
}

const signout = document.getElementById('signout');
if(signout) {
    signout.addEventListener('click', (event) => {
        event.preventDefault();

        window.location.href = "/signout";
    })
} else {
    console.log('Element not found');
}