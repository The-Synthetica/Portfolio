
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
let prepos=0;
let pointBar=((cont + 1) * (100 / fullscreenScrolls.length));

// NavPointer
// const pointer= document.getElementById('pointer');
let prop= (100 - pointBar)  + '%';

// Progress Bar nav
const bar= document.getElementById('nav-progress-bar');
const barLinks= document.getElementsByClassName('bar-link');


// Animation LiquidAboutMe
const elementAboutMe= document.getElementById('elementAboutMe');


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

page.style.overflow="hidden";
onload = (event) => {
    console.log('loaded');
    page.style.overflow="auto";
    
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

//Animation Calculator
const elementCalculator= document.getElementById('elementCalculator');
setInterval(() => { createCalculator(); createConnect4() }, 250);

function createCalculator(){
    const newDiv1= document.createElement('div');
    const newDiv2= document.createElement('div');
    const newDiv3= document.createElement('div');
    const newDiv4= document.createElement('div');

    newDiv1.classList.add('Plus');
    newDiv2.classList.add('Minus');
    newDiv3.classList.add('Multiply');
    newDiv4.classList.add('Divide');

    const offsetLeft1= randomInterval(-10, 100);
    const offsetLeft2= randomInterval(-10, 100);
    const offsetLeft3= randomInterval(-10, 100);
    const offsetLeft4= randomInterval(-10, 100);

    const animationTime= randomInterval(2, 5);
    const animationTime2= randomInterval(2, 5);
    const animationTime3= randomInterval(2, 5);
    const animationTime4= randomInterval(2, 5);

    const rotation= randomInterval(-45, 45);
    const rotation2= randomInterval(-45, 45);
    const rotation3= randomInterval(-45, 45);
    const rotation4= randomInterval(-45, 45);

    newDiv1.style.left= offsetLeft1 + '%';
    newDiv2.style.left= offsetLeft2 + '%';
    newDiv3.style.left= offsetLeft3 + '%';
    newDiv4.style.left= offsetLeft4 + '%';

    newDiv1.style.transform= 'rotate(' + rotation + 'deg)';
    newDiv2.style.transform= 'rotate(' + rotation2 + 'deg)';
    newDiv3.style.transform= 'rotate(' + rotation3 + 'deg)';
    newDiv4.style.transform= 'rotate(' + rotation4 + 'deg)';

    newDiv1.style.animation= 'translate ' + animationTime + 's' + ' linear';
    newDiv2.style.animation= 'translate ' + animationTime2 + 's' + ' linear';
    newDiv3.style.animation= 'translate ' + animationTime3 + 's' + ' linear';
    newDiv4.style.animation= 'translate ' + animationTime4 + 's' + ' linear';
    
    elementCalculator.appendChild(newDiv1);
    elementCalculator.appendChild(newDiv2);
    elementCalculator.appendChild(newDiv3);
    elementCalculator.appendChild(newDiv4);

    setTimeout(() => {
        elementCalculator.removeChild(newDiv1)
    }, animationTime * 1000);

    setTimeout(() => {
        elementCalculator.removeChild(newDiv2)
    }, animationTime2 * 1000);

    setTimeout(() => {
        elementCalculator.removeChild(newDiv3)
    }, animationTime3 * 1000);

    setTimeout(() => {
        elementCalculator.removeChild(newDiv4)
    }, animationTime4 * 1000);
}

// Animation Connect4
const elementConnect4= document.getElementById('elementConnect4');

function createConnect4(){
    const newDiv1= document.createElement('div');
    const newDiv2= document.createElement('div');

    newDiv1.classList.add('token1');
    newDiv2.classList.add('token2');

    const offsetLeft1= randomInterval(-50, 50);
    const offsetLeft2= randomInterval(-50, 50);
    
    const offsetBottom1= randomInterval(25, 100);
    const offsetBottom2= randomInterval(25, 100);

    const animationTime= randomInterval(2, 5);
    const animationTime2= randomInterval(2, 5);

    newDiv1.style.left= offsetLeft1 + '%';
    newDiv2.style.left= offsetLeft2 + '%';

    newDiv1.style.bottom= ' -' + offsetBottom1 + '%';
    newDiv2.style.bottom= ' -' + offsetBottom2 + '%';

    newDiv1.style.animation= 'move ' + animationTime + 's' + ' linear';
    newDiv2.style.animation= 'move ' + animationTime2 + 's' + ' linear';
    
    elementConnect4.appendChild(newDiv1);
    elementConnect4.appendChild(newDiv2);

    setTimeout(() => {
        elementConnect4.removeChild(newDiv1)
    }, animationTime * 1000);

    setTimeout(() => {
        elementConnect4.removeChild(newDiv2)
    }, animationTime2 * 1000);
}
function randomInterval(min, max) {
    return (Math.random() * (max - min + 1) + min)
}
// Animation Liquid
const elementLiquid= document.getElementById('elementLiquidRelax');
setInterval(() => { createLiquid(); createLiquidAboutMe();}, 700);

function createLiquid(){
    const newDiv1= document.createElement('div');
    const newDiv2= document.createElement('div');
    const newDiv3= document.createElement('div');
    const newDiv4= document.createElement('div');

    newDiv1.classList.add('liquidCircle1');
    newDiv2.classList.add('liquidCircle2');
    newDiv3.classList.add('liquidCircle1');
    newDiv4.classList.add('liquidCircle2');

    const offsetLeft1= randomInterval(-10, 10);
    const offsetLeft2= randomInterval(-10, 10);

    const animationTime= randomInterval(5, 7);
    const animationTime2= randomInterval(5, 7);

    newDiv1.style.left= offsetLeft1 + '%';
    newDiv3.style.left= offsetLeft1 + '%';
    newDiv2.style.right= offsetLeft2 + '%';
    newDiv4.style.right= offsetLeft2 + '%';

    newDiv1.style.animation= 'liquidMove ' + animationTime + 's' + ' linear forwards';
    newDiv3.style.animation= 'liquidMove ' + animationTime2 + 's' + ' linear forwards';
    newDiv2.style.animation= 'liquidMove ' + animationTime2 + 's' + ' linear forwards';
    newDiv4.style.animation= 'liquidMove ' + animationTime + 's' + ' linear forwards';
    
    elementLiquid.appendChild(newDiv1);
    elementLiquid.appendChild(newDiv2);
    elementLiquid.appendChild(newDiv3);
    elementLiquid.appendChild(newDiv4);

    setTimeout(() => {
        elementLiquid.removeChild(newDiv1)
        elementLiquid.removeChild(newDiv4)
    }, animationTime * 1000);

    setTimeout(() => {
        elementLiquid.removeChild(newDiv2)
        elementLiquid.removeChild(newDiv3)
    }, animationTime2 * 1000);
}

function createLiquidAboutMe(){
    const newDiv1= document.createElement('div');
    const newDiv2= document.createElement('div');
    const newDiv3= document.createElement('div');
    const newDiv4= document.createElement('div');

    newDiv2.classList.add('liquidAboutMeCircle2');
    newDiv3.classList.add('liquidAboutMeCircle1');
    newDiv4.classList.add('liquidAboutMeCircle2');
    newDiv1.classList.add('liquidAboutMeCircle1');

    const offsetLeft1= randomInterval(-10, 40);
    const offsetLeft2= randomInterval(-10, 40);

    const animationTime= randomInterval(5, 7);
    const animationTime2= randomInterval(5, 7);

    newDiv1.style.left= offsetLeft1 + '%';
    newDiv3.style.left= offsetLeft1 + '%';
    newDiv2.style.right= offsetLeft2 + '%';
    newDiv4.style.right= offsetLeft2 + '%';

    newDiv1.style.animation= 'liquidMove ' + animationTime + 's' + ' linear forwards';
    newDiv3.style.animation= 'liquidMove ' + animationTime2 + 's' + ' linear forwards';
    newDiv2.style.animation= 'liquidMove ' + animationTime2 + 's' + ' linear forwards';
    newDiv4.style.animation= 'liquidMove ' + animationTime + 's' + ' linear forwards';
    
    elementAboutMe.appendChild(newDiv1);
    elementAboutMe.appendChild(newDiv2);
    elementAboutMe.appendChild(newDiv3);
    elementAboutMe.appendChild(newDiv4);

    setTimeout(() => {
        elementAboutMe.removeChild(newDiv1)
        elementAboutMe.removeChild(newDiv4)
    }, animationTime * 1000);

    setTimeout(() => {
        elementAboutMe.removeChild(newDiv2)
        elementAboutMe.removeChild(newDiv3)
    }, animationTime2 * 1000);
}


//Card Follows cursor
window.addEventListener("mousemove", (e) => {

    rootStyles.setProperty("--mouse-x",
    (e.clientX / window.innerWidth));

    rootStyles.setProperty("--mouse-y",
    (e.clientY / window.innerHeight));

}, false);

//mobile gyroscope version
let betaAnt=0;
let gammaAnt=0;

let initFlag="",
    initBeta=0,
    initGamma=0;

let offsetDeg= 5;

let minY=-5, maxY=2;
let minX=-20, maxX=20;

window.addEventListener("deviceorientation", (e) => {
    if(initFlag==""){
        initBeta= Math.round(e.beta);
        initGamma= Math.round(e.gamma);
        initFlag="iniciado"
    }
    
    let alpha = Math.round(e.alpha);
    let beta = Math.round(e.beta);
    let gamma = Math.round(e.gamma);

    if( ((beta-initBeta) > (maxX + offsetDeg)) || ((beta-initBeta) < (minX - offsetDeg)) ){
        setTimeout(() => {
            if( ((beta-initBeta) > (maxX + offsetDeg)) || ((beta-initBeta) < (minX - offsetDeg)) ){
                initBeta=beta;}
        }, 500);
    }

    if( ((gamma-initGamma) > (maxY + offsetDeg))  || ((gamma-initGamma) < (minY - offsetDeg)) ){
        setTimeout(() => {
            if( ((gamma-initGamma) > (maxY + offsetDeg))  || ((gamma-initGamma) < (minY - offsetDeg)) ){
                initGamma=gamma;}
        }, 500);
    }

    beta= beta-initGamma;
    gamma= gamma-initGamma;

    let y= gamma;
    let x= beta;

    // Limitaciones
    y= limitar(y, maxY, minY);
    x= limitar(x, maxX, minX);

    rootStyles.setProperty("--orientation-x", x);
    rootStyles.setProperty("--orientation-y", y);

    console.log(initFlag,alpha, beta, gamma)
}, true);

for(let i=0; i<barLinks.length; i++){
    barLinks[i].addEventListener('click', () =>{
        console.log(i)
    fullscreenScrolls[cont].style.top= "100vh";
    fullscreenScrolls[cont].style.opacity= "0";

    prepos= cont;
    setTimeout(() => {
        fullscreenScrolls[prepos].style.visibility= 'hidden';
    }, 2000);

    cont=i+1;
    barChange(cont, "");
    
    fullscreenScrolls[cont].style.top= "0";
    fullscreenScrolls[cont].style.opacity= "1";
    fullscreenScrolls[cont].style.visibility= 'visible';
    setTimeout(() => {
        fullscreenScrolls[cont].style.visibility= 'visible';
    }, 2000);

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
    })
}



linkWelcomeSection.addEventListener('click', e => {
    fullscreenScrolls[cont].style.top= "100vh";
    fullscreenScrolls[cont].style.opacity= "0";

    cont=0;
    barChange(cont, flag)
    for(let i=0; i<barLinks.length; i++)
    barLinks[i].classList.remove('bar-link-focused');
    
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
            prepos= cont;

            setTimeout(() => {
                fullscreenScrolls[prepos].style.visibility= 'hidden';
            }, 2000);


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
            fullscreenScrolls[cont].style.visibility= 'visible';
            
            window.scrollTo(0, main.offsetHeight / 4);
        } 

        else if((actualScrollTop < (lastScrollTop - offsetHeight)) && (flag===" ") && (cont > 0)){
            fullscreenScrolls[cont].style.top= "100vh";
            fullscreenScrolls[cont].style.opacity= "0";

            prepos= cont;

            setTimeout(() => {
                fullscreenScrolls[prepos].style.visibility= 'hidden';
            }, 2000);


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
            fullscreenScrolls[cont].style.visibility= 'visible';

            window.scrollTo(0, main.offsetHeight / 4);
        }

    lastScrollTop = actualScrollTop;
});


// Burger menu uncheck
for (var i = 0; i < burgerMenuLinks.length; i++) {
    burgerMenuLinks[i].addEventListener('click', uncheckBurger, false);
}

//Scroll fade elements
for(var i=0; i < scrollNotVisible.length; i++) {
    observer.observe(scrollNotVisible[i]);
}


const buttonAboutMe= document.getElementById('buttonAboutMe');

buttonAboutMe.addEventListener('click', () => {
    burgerCheckbox.click();
})