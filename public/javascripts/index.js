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
    window.history.back;
}