

document.addEventListener('DOMContentLoaded', function () {
    const encriptarButton = document.querySelector('.boton__encriptar');
    const desencriptarButton = document.querySelector('.boton__desencriptar');
    const copiarButton = document.querySelector('.boton__copiar');
    const ingresoTexto = document.querySelector('.ingreso__texto');
    const mensajeFinal = document.querySelector('.mensaje__final');
    const exclamacion = document.querySelector('.left__informacion');
    const muneco = document.querySelector('.muneco');
    const rightInformacion = document.querySelector('.right__informacion');
    
    //Encriptar
    const encriptar = (texto) => {
        let encriptado = texto.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
        return encriptado;
    };

    //Desencriptar
    const desencriptar = (texto) => {
        let desencriptado = texto.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
        return desencriptado;
    };

    //Validador
    const validarTexto = (texto) => {
        const regex = /^[a-z\s]+$/;
        return regex.test(texto);
    };

    //Mensaje Alerta
    const mostrarAlerta = (mensaje) => {
        alert(mensaje);
    };

    //Ocultar y mostrar en el right
    const mostrarMuneco = () => {
        mensajeFinal.textContent = '';
        copiarButton.classList.add('oculto');
        copiarButton.classList.remove('visible');
        muneco.classList.remove('oculto');
        rightInformacion.classList.remove('oculto');
    };

    //Mensaje alerta
    encriptarButton.addEventListener('click', () => {
        const texto = ingresoTexto.value.trim();
        if (!validarTexto(texto)) {
            mostrarAlerta('Solo se permiten letras minúsculas y sin acentos.');
            return;
        }
        
        mensajeFinal.textContent = encriptar(texto);
        copiarButton.classList.remove('oculto');
        copiarButton.classList.add('visible');
        muneco.classList.add('oculto');
        rightInformacion.classList.add('oculto');
    });

    desencriptarButton.addEventListener('click', () => {
        const texto = ingresoTexto.value.trim();
        if (!validarTexto(texto)) {
            mostrarAlerta('Solo se permiten letras minúsculas y sin acentos.');
            return;
        }
        mensajeFinal.textContent = desencriptar(texto);
        copiarButton.classList.remove('oculto');
        copiarButton.classList.add('visible');
        muneco.classList.add('oculto');
        rightInformacion.classList.add('oculto');
    });

    copiarButton.addEventListener('click', () => {
        const texto = mensajeFinal.textContent;
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
        mostrarMuneco();
    });

    ingresoTexto.addEventListener('input', () => {
        if (ingresoTexto.value.trim() === '') {
            mostrarMuneco();
        }
    });
});
