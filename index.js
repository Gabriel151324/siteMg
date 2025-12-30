const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const closeMenuBtn = document.getElementById('close-menu');
const links = document.querySelectorAll('.links a');

function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('hidden');
}

function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('hidden');
}

menuToggle.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

links.forEach(link => {
    link.addEventListener('click', closeMenu);
});

