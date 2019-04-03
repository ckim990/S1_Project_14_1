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
window.addEventListener("load", setStyles)

function setStyles() {
      var styleNum = randInt(5);
      var link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("id", "fancySheet");
      link.setAttribute("href", "na_style_" + styleNum + ".css");
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(link);

      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);


function randInt(size) {
   return Math.floor(size*Math.random());
}