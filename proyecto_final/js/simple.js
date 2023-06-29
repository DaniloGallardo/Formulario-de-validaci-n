// Validación del formulario antes de enviarlo
document.getElementById('formulario').addEventListener('submit', function (event) {
    var nombres = document.getElementById('nombres');
    var apellidos = document.getElementById('apellidos');
    var correo = document.getElementById('correo');
    var telefono = document.getElementById('telefono');
    var dni = document.getElementById('dni');
    var edad = document.getElementById('edad');
    var sexo = document.getElementById('sexo');
    var departamento = document.getElementById('departamento');
    var provincia = document.getElementById('provincia');
    var distrito = document.getElementById('distrito');
    var direccion = document.getElementById('direccion');
    var ticket = document.getElementById('ticket');
    var terminos = document.getElementById('terminos');

    // Validar que los campos estén completos
    if (
        nombres.value === '' ||
        apellidos.value === '' ||
        correo.value === '' ||
        telefono.value === '' ||
        dni.value === '' ||
        edad.value === '' ||
        sexo.value === '' ||
        departamento.value === '' ||
        provincia.value === '' ||
        distrito.value === '' ||
        direccion.value === '' ||
        ticket.value === '' ||
        !terminos.checked
    ) {
        event.preventDefault(); // Evitar que el formulario se envíe
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});