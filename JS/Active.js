// Seleciona todos os links com a classe 'containerTopico'
const menuLinks = document.querySelectorAll('.containerTopico');

// Obtém o caminho atual da URL
const currentPath = window.location.pathname;

// Adiciona a classe 'ativo' ao link correspondente
menuLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (currentPath.includes(linkPath)) {
        link.classList.add('ativo');
    }
});

