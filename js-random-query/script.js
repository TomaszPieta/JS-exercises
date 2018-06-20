﻿$(document).ready(function() {
    colorNum = 1;
    let quotes = [{
        author: "Dr. Seuss",
        quote: "Don't cry because it's over, smile because it happened."
      }, {
        author: "Oscar Wilde", 
        quote: "Be yourself; everyone else is already taken."
      }, {
        author: "Friedrich Nietzche", 
        quote: "He who has a why to live can bear any how." 
      }, {
        author: "André Gide", 
        quote: "It is better to be hated for what you are than to be loved for what you are not."
      }, { 
        author: "Albert Einstein", 
        quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."
      }, {
        author: "Dr. Seuss", 
        quote: "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living."
      }, {
        author: "Mark Twain", 
        quote: "Never put off till tomorrow what may be done day after tomorrow just as well."
      }, {
        author: "Douglas Adams", 
        quote: "I love deadlines. I love the whooshing noise they make as they go by."
      }, {
        author: "Theodore Roosevelt", 
        quote: "Do what you can, with what you have, where you are."
      }, {
        author: "Rumi", 
        quote: "Let the beauty of what you love be what you do."
      }, {
        author: "Khalil Gibran", 
        quote: "Your pain is the breaking of the shell that encloses your understanding."
      }, {
        author: "Søren Kierkegaard", 
        quote: "Life is not a problem to be solved, but a reality to be experienced."
      }, {
        author: "Immanuel Kant", 
        quote: "Immaturity is the incapacity to use one's intelligence without the guidance of another."
      }];
    function getRandomInt(min,max) {
      min = Math.ceil(min);
      max = Math.ceil(max);
      return Math.floor(Math.random()*(max-min))+min;
    }
    function changeColor() {
      let colors = ['red', 'blue', 'orange', 'green', 'purple'];
      if(colorNum == colors.length)
        colorNum = 0;
      let css = 
      $(".quote").css("transition","color 3s ease" ).css("color", colors[colorNum]);
      $("button").css("transition", "background-color 3s ease").css("background-color", colors[colorNum]);
      $("body").css("transition", "background-color 3s ease").css("background-color", colors[colorNum]);
    }
    function obtainQuote() {
      let number = getRandomInt(0,quotes.length);
      $('#quote').html(quotes[number].quote);
      $('#author').html(quotes[number].author);
    }
    obtainQuote();
    $('#gen').on('click', function() {
      obtainQuote();
      changeColor();
      colorNum++
    })
  })