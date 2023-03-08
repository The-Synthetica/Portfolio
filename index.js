
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
let cont= 0, previousCont=-1; let flag=" ";
let pointBar=((cont + 1) * (100 / fullscreenScrolls.length));

// NavPointer
// const pointer= document.getElementById('pointer');
let prop= (100 - pointBar)  + '%';

// Progress Bar nav
const bar= document.getElementById('nav-progress-bar');
const barLinks= document.getElementsByClassName('bar-link');

//Animation Calculator
const elementCalculator= document.getElementById('elementCalculator');

// Animation Connect4
const elementConnect4= document.getElementById('elementConnect4');

// Animation Liquid
const elementLiquid= document.getElementById('elementLiquidRelax');

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
function isInViewport(elem) {
    // var distance = elem.getBoundingClientRect();
    // return (
    //     distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > window.innerHeight/2
    // );

    let offsetTop= elem.offsetTop;
    let offsetScroll= Math.round(docmain.scrollTop);

    if(offsetTop == offsetScroll)
        return true;

    return false;
}
function barChange(cont){
    pointBar=((cont + 1) * (100 / fullscreenScrolls.length));
    prop= (100 - pointBar)  + '%';
    // pointer.style.right= prop;

    if(cont > previousCont){
        flag="abajo";
    }

    if(cont < previousCont){
        flag="arriba";
    }

    if (cont > 0){
        bar.style.top= "var(--navbarHeight)";

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
function randomInterval(min, max) {
    return (Math.random() * (max - min + 1) + min)
}
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

    newDiv1.style.transform= 'rotate(' + rotation + 'deg' + ')';
    newDiv2.style.transform= 'rotate(' + rotation2 + 'deg' + ')';
    newDiv3.style.transform= 'rotate(' + rotation3 + 'deg' + ')';
    newDiv4.style.transform= 'rotate(' + rotation4 + 'deg' + ')';

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

let itcont= 0;
setInterval(() => {
    itcont++;
        if((Math.round(docmain.scrollTop) == fullscreenScrolls[4].offsetTop))
            createCalculator()
        if((Math.round(docmain.scrollTop) == fullscreenScrolls[5].offsetTop))
            createConnect4()

    if(itcont>=3){
        if((Math.round(docmain.scrollTop) == fullscreenScrolls[6].offsetTop))
            createLiquid()
        if((Math.round(docmain.scrollTop) == fullscreenScrolls[7].offsetTop))
            createLiquidAboutMe()

        itcont= 0;
    }

}, 500);


//Card Follows cursor
window.addEventListener("mousemove", (e) => {

    rootStyles.setProperty("--mouse-x",
    (e.clientX / window.innerWidth));

    rootStyles.setProperty("--mouse-y",
    (e.clientY / window.innerHeight));

}, false);

linkWelcomeSection.addEventListener('click', e => {
});


// Burger menu uncheck
for (var i = 0; i < burgerMenuLinks.length; i++) {
    burgerMenuLinks[i].addEventListener('click', uncheckBurger, false);
}

//Scroll fade elements
for(var i=0; i < scrollNotVisible.length; i++) {
    observer.observe(scrollNotVisible[i]);
}

const docmain= document.querySelector('main');
docmain.addEventListener('scroll', () => {scrollHandler()});

function scrollHandler(){
    for(let i=0; i<fullscreenScrolls.length; i++){
        // console.log(fullscreenScrolls[i].offsetTop, Math.round(docmain.scrollTop));
        // if(isInViewport(fullscreenScrolls[i])){
        if((Math.round(docmain.scrollTop) == fullscreenScrolls[i].offsetTop)){
            
            if(i != previousCont){
                cont=i;
                console.log('element', i);
                barChange(cont);
                
                previousCont= cont;
            }

            break;
        }
    }
}

const buttonAboutMe= document.getElementById('buttonAboutMe');

buttonAboutMe.addEventListener('click', () => {
    burgerCheckbox.click();
})