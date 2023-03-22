const html= document.querySelector('html')

const header= document.querySelector('header');
const links= document.getElementsByClassName('link');

const formElements= document.getElementsByClassName('form-element');
const form= document.getElementById('form');

initialize();


// Eventos
window.addEventListener('scroll', e => {
    if(html.scrollTop != 0){
        html.style.setProperty('--headerBG', 'white')
        html.style.setProperty('--headerColor', 'black')
        html.style.setProperty('--navHeight', '55px')
    }

    else{
        html.style.setProperty('--headerBG', 'transparent')
        html.style.setProperty('--headerColor', 'white')
        html.style.setProperty('--navHeight', '75px')
    }
});

// Funciones
function initialize(){

    // Header
    
    if(html.scrollTop != 0){
        html.style.setProperty('--headerBG', 'rgba(20, 20, 25, 1)')
        html.style.setProperty('--headerColor', 'white')
        html.style.setProperty('--navHeight', '55px')
    }

    else{
        html.style.setProperty('--headerBG', 'transparent')
        html.style.setProperty('--headerColor', 'white')
        html.style.setProperty('--navHeight', '75px')
    }

}

for(let i=0; i<formElements.length; i++){
    formElements[i].addEventListener('focus', () => {
        formElements[i].classList.add('focused-form-element');
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.submit();
    window.alert('Formulario Subido con Exito!')
    for(let i=0; i<formElements.length; i++){
            formElements[i].classList.remove('focused-form-element');
    }    
    form.reset();
});