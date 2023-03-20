const html= document.querySelector('html')

const header= document.querySelector('header');
const progressBar= document.getElementById('progress-bar')
const links= document.getElementsByClassName('link');


const horizontalSlider= document.getElementById('horizontal-scroll');
const projects= document.getElementsByClassName('project-frame')

const leftControl= document.getElementById('left-control');
const rightControl= document.getElementById('right-control');
const barLinks= document.getElementsByClassName('bar-link');
let cont= 0;

// iFrame
const rootStyles= html.style;
const frame=document.getElementById('wrap-frame-1')
const frameRes=rootStyles.getPropertyValue('--origin-width');


initialize();


// Eventos
window.addEventListener('scroll', e => {
    if(html.scrollTop != 0){
        html.style.setProperty('--headerBG', 'rgba(20, 20, 25, 1)')
        html.style.setProperty('--headerColor', 'white')
        html.style.setProperty('--navHeight', '55px')
        progressBar.style.opacity='1';
        html.style.setProperty('--progessBarBG', 'rgba(225, 225, 240, 1)')
    }

    else{
        html.style.setProperty('--headerBG', 'transparent')
        html.style.setProperty('--headerColor', 'white')
        html.style.setProperty('--navHeight', '75px')
        progressBar.style.opacity='0';
        html.style.setProperty('--progessBarBG', 'transparent')
    }
});

onresize = (event) => {
    // Autoresize - responsive Iframe
            let frameWidth= frame.offsetWidth;
            let scalarX= frameWidth / 1200;
            let frameHeight= 900 * scalarX;
            rootStyles.setProperty('--scalar-x', scalarX);
            rootStyles.setProperty('--frame-height', frameHeight+"px");
};

leftControl.addEventListener('click', () => {
    if(cont > 0){
        cont--;
        projects[cont].scrollIntoView();
    }

    for(let i=0; i<barLinks.length; i++)
        barLinks[i].classList.remove('bar-link-active');

    barLinks[cont].classList.add('bar-link-active')

});

rightControl.addEventListener('click', () => {
    if(cont < projects.length-1){
        cont++;
        projects[cont].scrollIntoView();
    }
    
    for(let i=0; i<barLinks.length; i++)
        barLinks[i].classList.remove('bar-link-active');

    barLinks[cont].classList.add('bar-link-active')
});

for(let i=0; i<barLinks.length; i++){
    barLinks[i].addEventListener('click', () => {
        cont= i;
        projects[cont].scrollIntoView();
            
        for(let i=0; i<barLinks.length; i++)
        barLinks[i].classList.remove('bar-link-active');

        barLinks[cont].classList.add('bar-link-active')
    })
}

// Funciones
function initialize(){
    // Autoresize - responsive Iframe
            let frameWidth= frame.offsetWidth;
            let scalarX= frameWidth / 1200;
            let frameHeight= 900 * scalarX;
            rootStyles.setProperty('--scalar-x', scalarX);
            rootStyles.setProperty('--frame-height', frameHeight+"px");

    // Header
    
    if(html.scrollTop != 0){
        html.style.setProperty('--headerBG', 'rgba(20, 20, 25, 1)')
        html.style.setProperty('--headerColor', 'white')
        html.style.setProperty('--navHeight', '55px')
        progressBar.style.opacity='1';
        html.style.setProperty('--progessBarBG', 'rgba(225, 225, 240, 1)')
    }

    else{
        html.style.setProperty('--headerBG', 'transparent')
        html.style.setProperty('--headerColor', 'white')
        html.style.setProperty('--navHeight', '75px')
        progressBar.style.opacity='0';
        html.style.setProperty('--progessBarBG', 'transparent')
    }

    // Horizontal Slides
    horizontalSlider.scroll(0, 0); //Nos aseguramos de que no empieze en otro punto
}
