const html= document.querySelector('html')

const header= document.querySelector('header');
const links= document.getElementsByClassName('link');

window.addEventListener('scroll', e => {
    if(html.scrollTop != 0){
        html.style.setProperty('--headerBG', 'rgba(255, 255, 255, 1)')
        html.style.setProperty('--headerColor', 'black')
        html.style.setProperty('--navHeight', '55px')
    }

    else{
        html.style.setProperty('--headerBG', 'transparent')
        html.style.setProperty('--headerColor', 'white')
        html.style.setProperty('--navHeight', '75px')
    }
});

let today = new Date();
let hour= parseInt(today.toLocaleTimeString().slice(0, 2));
console.log(hour)

const welcomeTitle= document.getElementById('welcome-title')

if((hour < 12) && (hour > 5)){
    welcomeTitle.innerHTML='Buenos Dias!'
}
else if((hour < 20)  && (hour >= 12)){
    welcomeTitle.innerHTML='Buenas Tardes!'
}
else{
    welcomeTitle.innerHTML='Buenas Noches!'
}
