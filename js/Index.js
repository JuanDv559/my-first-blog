class Usuario {
    constructor(nombre, telefono, correo) {
        (this.nombre = nombre),
            (this.telefono = telefono),
            (this.correo = correo);
    }
}

const usuarios = [];



const crearUsuario = () => {
    const nombre = document.querySelector("[data-name]").value;
    const telefono = document.querySelector("[data-phone]").value;
    const correo = document.querySelector("[data-email]").value;

    const usuario = new Usuario(nombre, telefono, correo);

    console.log(usuario);
};

btnEnviar = document
    .querySelector("[data-enviar]")
    .addEventListener("click", crearUsuario);