function abrirEnOtraPestana() {
    window.open('https://www.google.com.ar', '_blank');
}
//valido los inputs del formulario desde js
const inputs = document.querySelectorAll(".form_input_textarea");

inputs.forEach(input => {
    input.required = true;
});


