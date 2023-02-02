
//root
const html= document.documentElement;
const rootStyles= html.style;
const page= document.getElementById('html');
const main= document.getElementById('main');

//body
const body= document.getElementById('body');

// Section
const section1= document.getElementById('projects');
const fullscreenScrolls= document.getElementsByClassName('fullscreenScroll');

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
            entrada.target.classList.add('scrollFade-Visible');
        }
        else{
            entrada.target.classList.remove('scrollFade-Visible');
        }
    });

}
function limitar( a, max, min){
    if (a > max)
        return max;

    else if(a < min)
        return min;

    return a;
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
    beta = (e.beta);
    gamma = (e.gamma);

    let x= beta;
    let y= gamma;

    // Limitaciones
    y= limitar(y, 20, -20);
    x= limitar(x, 20, -20);

    rootStyles.setProperty("--orientation-x", x);
    rootStyles.setProperty("--orientation-y", y);

    console.log(alpha, beta, gamma)
}, true);


// FullScreen Scrolled Sections

let lastScrollTop= 0; let offsetHeight=0;
let cont= 0; let flag=" ";

window.addEventListener('scroll', e => {
    let actualScrollTop = html.scrollTop;

        if ((actualScrollTop > (lastScrollTop + offsetHeight)) && (flag===" ") && (cont < 3)){
            fullscreenScrolls[cont].style.top= "100vh";
            fullscreenScrolls[cont].style.opacity= "0";

            cont++;
                page.style.overflow="hidden";

            setTimeout(() => { 
                flag = " ";
                page.style.overflow="auto";
        }, 2000);

            flag="abajo";
            // console.log(flag);
            fullscreenScrolls[cont].style.top= "0";
            fullscreenScrolls[cont].style.opacity= "1";
            
            window.scrollTo(0, main.offsetHeight / 4);
            console.log(main.offsetHeight / 4)
        } 

        else if((actualScrollTop < (lastScrollTop - offsetHeight)) && (flag===" ") && (cont > 0)){
            fullscreenScrolls[cont].style.top= "100vh";
            fullscreenScrolls[cont].style.opacity= "0";
            cont--;
                page.style.overflow="hidden";


            setTimeout(() => { 
                flag = " ";
                page.style.overflow="auto";
            }, 2000);
            
            flag="arriba";
            // console.log(flag);
            fullscreenScrolls[cont].style.top= "0";
            fullscreenScrolls[cont].style.opacity= "1";

            window.scrollTo(0, main.offsetHeight / 4);
            console.log(main.offsetHeight / 4)
        }

    lastScrollTop = actualScrollTop;
    // console.log(cont);
});

burgerCheckbox.addEventListener('click', grayscaleStyle, false);