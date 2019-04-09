"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Christopher Kim
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
  setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.
*/

window.onload = setStyles;


function setStyles() {
      var styleNum = randInt(5);
      var linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('id', 'fancySheet');
      linkElem.setAttribute('href', 'na_style_' + styleNum + '.css');
      document.head.appendChild(linkElem);
      var figBox = document.createElement('figure');
      figBox.setAttribute('id', 'styleThumbs');
      var divBox = document.getElementById('box');
      divBox.appendChild(figBox);

      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement('img');
            sheetImg.setAttribute('src', 'na_small_' + i + '.png');
            sheetImg.setAttribute('alt', 'na_style_' + i + '.css');
            sheetImg.addEventListener('click', function (e) {
                  document.getElementById('fancySheet').setAttribute('href', e.target.alt);
            })

            figBox.appendChild(sheetImg);

      }

      var fancySheet = document.createElement('style');
      document.head.appendChild(fancySheet);
      fancySheet.setAttribute('id', 'fancySheet');

      var thumbStyles = document.createElement('style');
      document.head.appendChild(thumbStyles);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                   position: absolute; \
                   left: 0 px; \
                   bottom: 0 px; \
                  }", 0);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
            outline: 1 px solid black; \
            cursor: pointer; \
            opacity: 0.75; \
            }", 1);
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                    outline: 1 px solid red; \
                   opacity: 1.0; \
            }", 2);
}

function randInt(size) {
      return Math.floor(size * Math.random());
