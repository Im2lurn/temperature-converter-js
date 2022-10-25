const inputDisplay=document.getElementById('input');
const tempInputDisplay=document.getElementById('tempinput');

const bub=document.querySelectorAll('button');

let choice;
bub.forEach(button => button.addEventListener('click',(e)=> {
    choice=e.target.id;
    inputDisplay.innerHTML=choice;
}));

let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener('click',(e)=> {
    switch(e.target.innerText){
        case 'C':
            display.innerText='';
            tempInputDisplay.innerHTML='';
            break;
        case '←':
           if(display.innerText){
            display.innerText=display.innerText.slice(0,-1);
           }
            break;
        case 'fahr':
            tempInputDisplay.innerHTML=" " +display.innerText +" "+choice;
            if(choice==='fahrenheit'){
                display.innerText="=" +display.innerText + " fahrenheit";
            }
            else if(choice==='celsius'){
                display.innerText="=" +((display.innerText * 9)/5 +32) + " fahrenheit";
            }
            else if(choice==='kelvin'){
                display.innerText="=" +(((display.innerText -273.15)*1.8) +32) + " fahrenheit";
            }
            break;
        case 'kelv':
            tempInputDisplay.innerHTML=" " +display.innerText +" "+choice;
            if(choice==='kelvin'){
                display.innerText="=" +display.innerText + " kelvin";
            }
            else if(choice==='celsius'){
                display.innerText="=" + ((display.innerText)/1 +273.15) + " kelvin";
            }
            else if(choice==='fahrenheit'){
                display.innerText="=" +(((display.innerText -32)/1.8) +273.15) + " kelvin";
            }
            break;
        case 'cels':
            tempInputDisplay.innerHTML=" " +display.innerText +" "+choice;
            if(choice==='celsius'){
                display.innerText="=" +display.innerText + " celsius";
            }
            else if(choice==='kelvin'){
                display.innerText="=" +(display.innerText - 273.15) + " celsius";
            }
            else if(choice==='fahrenheit'){
                display.innerText="=" +(((display.innerText -32)*5)/9) + " celsius";
            }
            break;
        default:
            display.innerText+=e.target.innerText;
       }
    });
});