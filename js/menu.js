const toggle = document.querySelector('.menu__toggle');
const lista = document.querySelector('.menu__lista');

toggle.addEventListener('click', () => {
    const abierto = lista.classList.toggle('menu__lista--abierto');
    toggle.setAttribute('aria-expanded', abierto);
});
