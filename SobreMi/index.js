const html= document.querySelector('html')

const header= document.querySelector('header');
const links= document.getElementsByClassName('link');


let txt1= "Soy un 🔌 tecnico electronico ⚡ que empezo a programar en C , Arduino y C++. <br/>Ya habia usado algunas lineas de codigo para solucionar problemas de la pc, o para proyectos, pero nunca me habia propuesto entender de forma integra su funcionamiento.";

let txt2= "En 2020 intente competir en las olimpiadas de C++ de la OIAJ, tenia tiempo libre por la pandemia, y esto me dio muchisimo conocimiento 🧐, la logica de la programacion, nodos, grafos, algoritmos de busqueda, algoritmos de rastreo... <br/><br/>Tambien desperte cierto interes por Python y el MachineLearning 🤖, pero por cuestiones academicas y familiares tuve que dejarlo (sin poder llegar a competir, y dejando de lado la idea de aprender Python)";

let txt3= "En 2021 lo volvi a intentar, pero la tecnica exigia demasiado tiempo y tuve que avocarme a terminar los proyectos de robotica ⚙️, que eran obligatorios y fundamentales. <br/><br/>En este tiempo me avoce a hacer bots 🦾 con  Node.js  para discord y para whatsapp, era un pasatiempo, y usar arduino para terminar el proyecto (Alli surgio MathParser, que pese a estar a medio hacer funciona bastante bien 🥴)."

let txt4= "A principios del 2022 ya estaba decidido con la carrera a estudiar, mientras cursaba el CBC, empece nuevamente con el desarrollo web 💻, esta vez iba a estudiarlo fuertemente para crear entornos interactivos para los Bots, y para trabajar de eso. <br/><br/>Empece con tutoriales de YouTube, freecodeCamp,  y sobretodo paginas de documentacion tecnica 📝. La idea de que sea autodidacta me favorecia, ya que el CBC tambien lo estaba haciendo por UBA XXI (La version a distancia del CBC, que basicamente permite estudiarlo de la misma forma). <br/><br/>Para finales de 2022, ya tenia una idea bastante integra sobre la curva de aprendizaje 📈 de lo que quiero lograr, los conocimientos solidos y basicos para empezar y sobretodo muchisimas ganas de ponerme a aplicar estos conocimientos ⚡."

let txt5= "El comienzo de 2023 fue para aprender Javascript Vanilla , mejorar las paginas que ya tenia hechas, empezar nuevos proyectos 💡 y empezar a buscar algun puesto como desarrollador trainee, la idea solida de este año es poder absorber la mayor cantidad de conocimientos e irlos puliendo a medida que avanzo con la carrera 📚... <br/><br/>Nadie dijo que seria facil, pero donde hay conocimientos y desafios ¡Ahi estoy! 😅";

let txts=[txt1, txt2, txt3, txt4, txt5], pos=0;
let reactions= []
let cont=0;
let flagInterrupt= true;

const text= document.getElementById('text');
const artText= document.getElementById('art-text');
const op1= document.getElementById('option1');
const op2= document.getElementById('option2');

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


artText.addEventListener('click', () => {
    if(flagInterrupt == false)
        flagInterrupt= true;
    
})

op1.addEventListener('click', () => {
    
    if(pos == txts.length){
        flagInterrupt= false;
        pos=0;
        cont=0;
        text.innerHTML='';
        tiping('Te lo vuelvo a contar?? Creo que no es tan importante... <br/>Es decir... Quien llega hasta aca?? 💀 <br/>Solo una persona interesada, deberias probar en ir a la seccion "Contacto" 😅');

        op1.innerHTML='[repetir mensaje]'
        return 0;
    }

    if(pos >= 0 && flagInterrupt==true){
        flagInterrupt= true;
        text.innerHTML='';


        if(pos<txts.length){
            flagInterrupt= false;
            cont=0;
            console.log(txts[pos]);
            tiping(txts[pos]);
            pos++;
        }
    
        else{
            flagInterrupt= false;
            pos++;
            cont=0;
            text.innerHTML= 'Te lo vuelvo a contar?? Creo que no es tan importante... <br/>Es decir... Quien llega hasta aca?? 💀 <br/>Solo una persona interesada, deberias probar en ir a la seccion "Contacto" 😅'
        }
            op2.style.display= 'none'
            op1.innerHTML= '🙎🏽'
            return 0;
    }

})
op2.addEventListener('click', () => {

    if(pos==0){
        text.innerHTML=":´(";
        pos--
            
        op1.style.display= 'none';
        op2.innerHTML= '💔';
        return 0;
    }

    if(pos==-1){
        text.innerHTML="💬";
        pos--
            
        op2.innerHTML= '💬';
        return 0;
    }

    if(pos== -2){
        text.innerHTML="[ desconectado ]";
        op2.innerHTML= '😰';
        return 0;
    }

})


function tiping(txt){
    if((cont < txt.length) && (flagInterrupt == false)){
        setTimeout(() => {

            if(txt[cont]=='<'){
                for(let i=cont; i<txt.length; i++){
                    if(txt[i]=='>'){
                        text.innerHTML+= txt.slice(cont, i+1);
                        console.log(txt.slice(cont, i+1))
                        cont= i+1;
                        tiping(txt);
                        break;
                    }
                }
            }

            else{
                console.log(txt[cont])
                text.innerHTML+=txt[cont];
                cont++;

                tiping(txt);
        }
        }, 25);
    }

    else{
        text.innerHTML=txt;
        flagInterrupt= true;

        return true;
    }

    return true;
}

