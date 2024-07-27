document.addEventListener('DOMContentLoaded', () => {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);


    function enviarEmail(e) {
        e.preventDefault();

        console.log('Enviando email...');
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            
            resetFormulario();

            // Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'mt-10', 'text-center', 'rounded-lg', 'uppercase', 'font-bold', 'text-sm');
            alertaExito.textContent = 'Email enviado correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);


        }, 3000);
    }


    btnReset.addEventListener('click', function(e) {
        e.preventDefault();

        resetFormulario();
    });

    function validar(e) {
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();
            return;
        }

        
        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            return
        };


        limpiarAlerta(e.target.parentElement);

        // Asignar los valores al objeto
        email[e.target.id] = e.target.value.trim().toLowerCase();
        
        // Comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;

        error.classList.add('bg-red-600', 'text-white', 'p-3', 'mt-5', 'text-center', 'error');

        // Inyecatar el error en el fomrulario HTML
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.error');
        if(alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
        const resultado = regex.test(email)
        return resultado;
    }

    function comprobarEmail() {
            if(Object.values(email).includes('')) {
                btnSubmit.classList.add('opacity-50');
                btnSubmit.disabled = true;
                return
            }
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;        
    }

    function resetFormulario() {
        // reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }


});