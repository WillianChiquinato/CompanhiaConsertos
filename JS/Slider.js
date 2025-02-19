var radio = document.querySelector('.manual-btn');
var contador = 1;

document.getElementById('radio1').checked = true;

// para a navegação automatica
setInterval(() => {
    proximaImg();
}, 2000);

function proximaImg() {
    contador++;

    if (contador > 4) {
        contador = 1;
    }

    document.getElementById('radio' + contador).checked = true;
}