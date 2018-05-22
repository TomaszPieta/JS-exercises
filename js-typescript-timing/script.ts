﻿class Greeter {
  element: HTMLElement;
  span: HTMLElement;
  timerToken: number;
  
  constructor(element: HTMLElement) {
    this.element = element;
    this.element.innerText += "The time is: ";
    this.span = document.createElement('span');
    this.span.innerText = new Date().toUTCString();
  }
  start(){
    this.timerToken = setInterval( () => {
      this.span.innerText = new Date().toUTCString();
    }, 500 );
  }
  stop(){
    clearInterval(this.timerToken);
  }
}
window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};