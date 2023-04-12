let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let audio = document.querySelector('#audio');




function btnClickAction(){
    body.classList.toggle('on')
    btn.classList.toggle('on')
    audio.play();
    

}

btn.addEventListener('click',btnClickAction)