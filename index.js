
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

//Welcome Section
const linkWelcomeSection= document.getElementById('link-welcome-section');
const welcomeSection= document.getElementById('welcome-section');

// Frame
const frame=document.getElementById('wrap-frame-1')
const frameRes=rootStyles.getPropertyValue('--origin-width');

// Burger
const burgerMenuLinks= document.getElementsByClassName('nav-link');
const burgerCheckbox= document.getElementById('burger-checkbox');

//Scroll Fade
const scrollNotVisible= document.getElementsByClassName('scrollFade-notVisible');

// Loader
const loader= document.getElementById('wrap-loader');
const circle1= document.getElementById('circle-1');
const circle2= document.getElementById('circle-2');


// FullScreen Scrolled Sections
let lastScrollTop= 0; let offsetHeight=10;
let cont= 0; let flag=" ";
let pointBar=((cont + 1) * (100 / fullscreenScrolls.length));

// NavPointer
// const pointer= document.getElementById('pointer');
let prop= (100 - pointBar)  + '%';

// Progress Bar nav
const bar= document.getElementById('nav-progress-bar');
const barLinks= document.getElementsByClassName('bar-link');

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
    
    setTimeout(() => { 
        loader.classList.toggle('loaded');
        
        // circle1.classList.toggle('circle1-loaded');
        // circle2.classList.toggle('circle2-loaded');
    },  500);

    setTimeout(() => { 
        loader.style.display= 'none';
    }, 2000);
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

    // Pointer
    // pointer.style.right= prop;
    // rootStyles.setProperty('--const', 0.5);

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
function barChange(cont, flag){
    pointBar=((cont + 1) * (100 / fullscreenScrolls.length));
    prop= (100 - pointBar)  + '%';
    // pointer.style.right= prop;

    if (cont > 0){
        bar.style.top= "var(--navbarHeight)";

        // barLinks[cont-1].style.color="blue";
        for(let i=0; i<barLinks.length; i++)
        barLinks[i].classList.remove('bar-link-focused');

        barLinks[cont-1].classList.toggle('bar-link-focused');

        if(flag == "abajo" && cont-2>=0){
            // barLinks[cont-2].style.color="black";
            // barLinks[cont-2].classList.toggle('bar-link-focused');
            bar.scrollTo(bar.scrollLeft + barLinks[cont-2].offsetWidth, 0)
            console.log("abajo")
        }
        else if(flag == "arriba"){
            // barLinks[cont].style.color="black";
            // barLinks[cont].classList.toggle('bar-link-focused');
            bar.scrollTo(bar.scrollLeft - barLinks[cont-1].offsetWidth, 0)
            console.log("arriba")
        }
    }
    else{
        bar.style.top= "0";
        barLinks[0].classList.remove('bar-link-focused');
    }


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



barLinks[0].addEventListener('click', e => {
    fullscreenScrolls[cont].style.top= "100vh";
    fullscreenScrolls[cont].style.opacity= "0";

    cont=1;
    barChange(cont, "");
    
    fullscreenScrolls[cont].style.top= "0";
    fullscreenScrolls[cont].style.opacity= "1";

    // console.log(bar.scrollWidth + 'px' barLinks.length * 2 + 2 + 'rem')
    // bar.scrollTo(bar.scrollLeft + barLinks[cont-2].offsetWidth, 0);
    // bar.scrollTo((cont-1)*200, 0);
    bar.scrollTo(0,0);

    let dist=0;
    for(let i=0; i<cont-1; i++){
        dist+=barLinks[i].offsetWidth + 30;
    }

    bar.scrollTo(dist, 0);

    page.style.overflow="hidden";
    
    setTimeout(() => { 
        flag = " ";
        page.style.overflow="auto";
    }, 1000);

    flag="stop";
    
    window.scrollTo(0, main.offsetHeight / 4);
}, false);

barLinks[1].addEventListener('click', e => {
    fullscreenScrolls[cont].style.top= "100vh";
    fullscreenScrolls[cont].style.opacity= "0";

    cont=2;
    barChange(cont, "");
    
    fullscreenScrolls[cont].style.top= "0";
    fullscreenScrolls[cont].style.opacity= "1";

    // console.log(bar.scrollWidth + 'px' barLinks.length * 2 + 2 + 'rem')
    // bar.scrollTo(bar.scrollLeft + barLinks[cont-2].offsetWidth, 0);
    bar.scrollTo(0, 0);

    let dist=0;
    for(let i=0; i<cont-1; i++){
        dist+=barLinks[i].offsetWidth + 30;
    }

    bar.scrollTo(dist, 0);

    page.style.overflow="hidden";
    
    setTimeout(() => { 
        flag = " ";
        page.style.overflow="auto";
    }, 1000);

    flag="stop";
    
    window.scrollTo(0, main.offsetHeight / 4);
}, false);

barLinks[2].addEventListener('click', e => {
    fullscreenScrolls[cont].style.top= "100vh";
    fullscreenScrolls[cont].style.opacity= "0";

    cont=3;
    barChange(cont, "");
    
    fullscreenScrolls[cont].style.top= "0";
    fullscreenScrolls[cont].style.opacity= "1";

    // console.log(bar.scrollWidth + 'px' barLinks.length * 2 + 2 + 'rem')
    // bar.scrollTo(bar.scrollLeft + barLinks[cont-2].offsetWidth, 0);
    bar.scrollTo(0, 0);

    let dist=0;
    for(let i=0; i<cont-1; i++){
        dist+=barLinks[i].offsetWidth + 30;
    }

    bar.scrollTo(dist, 0);

    page.style.overflow="hidden";
    
    setTimeout(() => { 
        flag = " ";
        page.style.overflow="auto";
    }, 1000);

    flag="stop";
    
    window.scrollTo(0, main.offsetHeight / 4);
}, false);

barLinks[3].addEventListener('click', e => {
    fullscreenScrolls[cont].style.top= "100vh";
    fullscreenScrolls[cont].style.opacity= "0";

    cont=4;
    barChange(cont, "");
    
    fullscreenScrolls[cont].style.top= "0";
    fullscreenScrolls[cont].style.opacity= "1";

    // console.log(bar.scrollWidth + 'px' barLinks.length * 2 + 2 + 'rem')
    // bar.scrollTo(bar.scrollLeft + barLinks[cont-2].offsetWidth, 0);
    bar.scrollTo(0, 0);

    let dist=0;
    for(let i=0; i<cont-1; i++){
        dist+=barLinks[i].offsetWidth + 30;
    }

    bar.scrollTo(dist, 0);

    page.style.overflow="hidden";
    
    setTimeout(() => { 
        flag = " ";
        page.style.overflow="auto";
    }, 1000);

    flag="stop";    
    
    window.scrollTo(0, main.offsetHeight / 4);
}, false);

linkWelcomeSection.addEventListener('click', e => {
    fullscreenScrolls[cont].style.top= "100vh";
    fullscreenScrolls[cont].style.opacity= "0";

    cont=0;
    barChange(cont, "");
    
    fullscreenScrolls[cont].style.top= "0";
    fullscreenScrolls[cont].style.opacity= "1";

    // console.log(bar.scrollWidth + 'px' barLinks.length * 2 + 2 + 'rem')
    // bar.scrollTo(bar.scrollLeft + barLinks[cont-2].offsetWidth, 0);
    bar.scrollTo(0, 0);

    let dist=0;
    for(let i=0; i<cont-1; i++){
        dist+=barLinks[i].offsetWidth + 30;
    }

    bar.scrollTo(dist, 0);

    page.style.overflow="hidden";
    
    setTimeout(() => { 
        flag = " ";
        page.style.overflow="auto";
    }, 1000);

    flag="stop";
    
    window.scrollTo(0, main.offsetHeight / 4);
}, false);

// FullScreen Scrolled Sections
window.addEventListener('scroll', e => {
    let actualScrollTop = html.scrollTop;

        if ((actualScrollTop > (lastScrollTop + offsetHeight)) && (flag===" ") && (cont < (fullscreenScrolls.length - 1))){
            fullscreenScrolls[cont].style.top= "100vh";
            fullscreenScrolls[cont].style.opacity= "0";


            cont++;
                page.style.overflow="hidden";
                

            setTimeout(() => { 
                flag = " ";
                page.style.overflow="auto";
            }, 1000);

            flag="abajo";

                barChange(cont, flag);

            fullscreenScrolls[cont].style.top= "0";
            fullscreenScrolls[cont].style.opacity= "1";
            
            window.scrollTo(0, main.offsetHeight / 4);
        } 

        else if((actualScrollTop < (lastScrollTop - offsetHeight)) && (flag===" ") && (cont > 0)){
            fullscreenScrolls[cont].style.top= "100vh";
            fullscreenScrolls[cont].style.opacity= "0";
            cont--;
                page.style.overflow="hidden";
                
                barChange(cont, flag);

            setTimeout(() => { 
                flag = " ";
                page.style.overflow="auto";
            }, 1000);
            
            flag="arriba";
            
                barChange(cont, flag);

            fullscreenScrolls[cont].style.top= "0";
            fullscreenScrolls[cont].style.opacity= "1";

            window.scrollTo(0, main.offsetHeight / 4);
        }

    lastScrollTop = actualScrollTop;
});
