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

    const modals_addFields = document.getElementById('modals_addFields');
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