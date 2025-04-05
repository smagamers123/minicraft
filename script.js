window.onload = function() {
    const intro = document.getElementById('intro');
    const menu = document.getElementById('menu');
    const botonJugar = document.getElementById('jugar');
    const botonJugarImg = document.getElementById('boton-jugar-img');
    let botonNormal = 'assets/menu/boton_play.png';
    let botonPresionado = 'assets/menu/boton_play_presionado.png';
    let esperando = false;

    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
            menu.style.display = 'flex';
        }, 2000);
    }, 3000);

    botonJugar.addEventListener('mousedown', () => {
        if (!esperando) {
            botonJugarImg.src = botonPresionado;
            esperando = true;
            setTimeout(() => {
                botonJugarImg.src = botonNormal;
                esperando = false;
            }, 2000);
        }
    });

    botonJugar.addEventListener('click', (event) => {
        if (!esperando) {
            setTimeout(() => {
                alert('¡A jugar!');
                // Aquí iría la lógica para iniciar el juego
            }, 2000);
            event.target.blur();
        }
    });

    document.getElementById('opciones').addEventListener('click', () => {
        alert('Opciones del juego');
        document.getElementById('opciones').blur();
    });

    document.getElementById('salir').addEventListener('click', () => {
        alert('Salir del juego');
        document.getElementById('salir').blur();
    });
};
