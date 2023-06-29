const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  nombres: /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, // letras mayúsculas, minúsculas, espacios y tildes
  apellidos: /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, // letras mayúsculas, minúsculas, espacios y tildes
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^9\d{8}$/, // solo números con un máximo de 9 dígitos y que empiece con el número 9.
  dni: /^\d{8}$/, // solo números con un máximo de 8 dígitos.
  edad: /^\d{2}$/, // solo números con un máximo de 2 dígitos.
  sexo: /^(masculino|femenino)$/i, // solo letras mayúsculas y minúsculas
  departamento: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/, // letras mayúsculas, minúsculas, espacios y tildes
  provincia: /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, // letras mayúsculas, minúsculas, espacios y tildes
  distrito: /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/, // letras mayúsculas, minúsculas, espacios y tildes
  direccion: /^[A-Za-záéíóúÁÉÍÓÚ0-9\s._-]+$/, // letras, números, espacios, puntos, guion bajo, guion y tildes
  ticket: /^[A-Z0-9]{24}$/ // solo números y letras mayúsculas con un máximo de 24 caracteres
};

const campos = {
  nombres: false,
  apellidos: false,
  correo: false,
  telefono: false,
  dni: false,
  edad: false,
  sexo: false,
  departamento: false,
  provincia: false,
  distrito: false,
  direccion: false,
  ticket: false
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombres":
      validarCampo(expresiones.nombres, e.target, 'nombres');
      break;
    case "apellidos":
      validarCampo(expresiones.apellidos, e.target, 'apellidos');
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, 'telefono');
      break;
    case "dni":
      validarCampo(expresiones.dni, e.target, 'dni');
      break;
    case "edad":
      validarCampo(expresiones.edad, e.target, 'edad');
      break;
    case "sexo":
      validarCampo(expresiones.sexo, e.target, 'sexo');
      break;
    case "departamento":
      validarCampo(expresiones.departamento, e.target, 'departamento');
      break;
    case "provincia":
      validarCampo(expresiones.provincia, e.target, 'provincia');
      break;
    case "distrito":
      validarCampo(expresiones.distrito, e.target, 'distrito');
      break;
    case "direccion":
      validarCampo(expresiones.direccion, e.target, 'direccion');
      break;
    case "ticket":
      validarCampo(expresiones.ticket, e.target, 'ticket');
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const terminos = document.getElementById('terminos');
  if (
    campos.nombres &&
    campos.apellidos &&
    campos.correo &&
    campos.telefono &&
    campos.dni &&
    campos.edad &&
    campos.sexo &&
    campos.departamento &&
    campos.provincia &&
    campos.distrito &&
    campos.direccion &&
    campos.ticket &&
    terminos.checked
  ) {
    formulario.reset();

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }, 5000);

    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');
    });
  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
  }
});


