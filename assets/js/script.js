let moreSections = document.querySelectorAll('.more');

moreSections.forEach((section) => {
    let learnMore = section.querySelector('.learnMore');
    let underlineZero = section.querySelector('.zero');
    let underlineOne = section.querySelector('.one');
    
    learnMore.addEventListener('mouseover', () => {
        if (underlineZero) {
            underlineZero.style.backgroundColor = 'rgb(253, 255, 105)'; // Altera a cor do underline
        }
        if (underlineOne) {
            underlineOne.style.backgroundColor = 'rgb(255, 105, 105)'; // Altera a cor do underline
        }
    });

    learnMore.addEventListener('mouseout', () => {
        if (underlineZero) {
            underlineZero.style.backgroundColor = ''; // Reseta para a cor original
        }
        if (underlineOne) {
            underlineOne.style.backgroundColor = ''; // Reseta para a cor original
        }
    });
});

const menuIcon = document.querySelector('.menuIcon');
const mobileMenu = document.querySelector('nav');

// Função para alternar a visibilidade do menu somente em telas menores que 655px
menuIcon.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 655px)").matches) {
        if (mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'flex';
        }
    }
});

// Listener para o redimensionamento da janela
window.addEventListener('resize', () => {
    // Verifica se o tamanho da tela é maior que 655px
    if (window.innerWidth > 655) {
        // Remove o estilo inline de display para que o CSS controle o menu
        mobileMenu.style.display = '';
    }
});
