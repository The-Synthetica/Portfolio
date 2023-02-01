
//root
const html= document.documentElement;
const rootStyles= html.style;

// Frame
const frame=document.getElementById('wrap-frame-1')
const frameRes=rootStyles.getPropertyValue('--origin-width');

// Burger
const burgerMenuLinks= document.getElementsByClassName('nav-link');
const burgerCheckbox= document.getElementById('burger-checkbox');

//Scroll Fade
const scrollNotVisible= document.getElementsByClassName('scrollFade-notVisible');
// scrollNotVisible.forEach( (elemento) => {
//     observer.observe(elemento);
// })

initialize();



// Eventos
onresize = (event) => {
    // Autoresize - responsive Iframe
            let frameWidth= frame.offsetWidth;
            let scalarX= frameWidth / 1200;
            let frameHeight= 900 * scalarX;
            rootStyles.setProperty('--scalar-x', scalarX);
            rootStyles.setProperty('--frame-height', frameHeight+"px");
};

onload = (event) => {

};

//Observador 
const observer = new IntersectionObserver( cargarElemento , {
    root: null,
    rootMargin: '-40px 0px 0px 0px',
    threshold: 0.5,
});

//Funciones
function uncheckBurger() {
    burgerCheckbox.checked= false;
};
function initialize(){
    // Autoresize - responsive Iframe
            let frameWidth= frame.offsetWidth;
            let scalarX= frameWidth / 1200;
            let frameHeight= 900 * scalarX;
            rootStyles.setProperty('--scalar-x', scalarX);
            rootStyles.setProperty('--frame-height', frameHeight+"px");
}
function cargarElemento (entradas, observer){

    entradas.forEach( (entrada) => {
        if(entrada.isIntersecting){
            console.log("A");
            entrada.target.classList.add('scrollFade-Visible');
        }
        else{
            entrada.target.classList.remove('scrollFade-Visible');
        }
    });

}

// Burger menu uncheck
for (var i = 0; i < burgerMenuLinks.length; i++) {
    burgerMenuLinks[i].addEventListener('click', uncheckBurger, false);
}

//Scroll fade elements
for(var i=0; i < scrollNotVisible.length; i++) {
    observer.observe(scrollNotVisible[i]);
}

//Card Follows cursor
window.addEventListener("mousemove", (e) => {

    rootStyles.setProperty("--mouse-x",
    (e.clientX / window.innerWidth));

    rootStyles.setProperty("--mouse-y",
    (e.clientY / window.innerHeight));

}, false);

//mobile gyroscope version
window.addEventListener("deviceorientation", (e) => {
    alpha = (e.alpha / 360);
    beta = (e.beta / 45);
    gamma = (e.gamma / 45);

    rootStyles.setProperty("--orientation-x", beta);
    rootStyles.setProperty("--orientation-y", gamma);

    console.log(alpha, beta, gamma)
}, true);