function navbarShowH (param) {
    const fa_xmark_menu = document.getElementById('fa_xmark_menu');
    const fa_bars_menu = document.getElementById('fa_bars_menu');
    const navbar_part2 = document.getElementById('navbar_part2');

    if(param === "open" && fa_xmark_menu && fa_bars_menu && navbar_part2) {
        alert('open')
        navbar_part2.classList.remove('hidden');
        navbar_part2.classList.add('flex');
    } else if (param === "close" && fa_xmark_menu && fa_bars_menu && navbar_part2) {
        alert('close')
    } else {
        console.log('Valeur inconnue');
    }
}