"use strict";

const elem = document.querySelectorAll('.boxes__box');
const audio = new Audio('audio/Mountain Audio - Menu Click.mp3');
for (const check of elem){
  check.addEventListener('click', () => {
  check.classList.add('newStyle')
  audio.play();
  for (const checkActive of elem){
    checkActive.addEventListener('click' , () =>{
      if (checkActive.classList.toggle('newStyle')){
        return;
      } 
    });
  }
})
}

