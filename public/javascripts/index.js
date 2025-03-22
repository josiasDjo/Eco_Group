function navbarShowH (param) {
    const fa_xmark_menu = document.getElementById('fa_xmark_menu');
    const fa_bars_menu = document.getElementById('fa_bars_menu');
    const navbar_part2 = document.getElementById('navbar_part2');
    const navbarContainer = document.getElementById('navbarContainer');

    if(param === "open" && fa_xmark_menu && fa_bars_menu && navbar_part2) {
        alert('open')

        navbarContainer.classList.remove("h-16", "justify-between");
        navbarContainer.classList.add("h-full", "flex-col");
        navbar_part2.classList.remove('hidden');
        navbar_part2.classList.add('flex');
        fa_bars_menu.classList.remove('flex');
        fa_bars_menu.classList.add('hidden');
        fa_xmark_menu.classList.remove('hidden');
        fa_xmark_menu.classList.add("flex", "absolute", "top-3", "right-3");


    } else if (param === "close" && fa_xmark_menu && fa_bars_menu && navbar_part2) {
        alert('close')

        navbarContainer.classList.add("h-16", "justify-between");
        navbarContainer.classList.remove("h-full", "flex-col");
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