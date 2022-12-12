document.getElementById('hamburger-menu').addEventListener('click', () => {
    if (document.getElementById('menu').classList.contains('menu-horizontal')){
        document.getElementById('menu').classList.remove('menu-horizontal');
        document.getElementById('menu').classList.add('menu-vertical');
    }
    else {
        document.getElementById('menu').classList.remove('menu-vertical');
        document.getElementById('menu').classList.add('menu-horizontal');
    }
})