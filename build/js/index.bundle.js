!function(){"use strict";!function(){const e=document.querySelector(".nav-btn"),i=document.querySelector(".side-bar"),t=document.querySelector(".user"),n=document.querySelector(".navigation"),s=document.querySelector(".nav-btn__icon");s.classList.add("nav-icon--active"),e.onclick=function(){i.classList.toggle("side-bar--hide"),n.classList.toggle("navigation--hide"),t.classList.toggle("user--hide"),s.classList.toggle("nav-icon--active")},window.addEventListener("resize",(function(){window.innerWidth>1439&&(i.classList.remove("side-bar--hide"),n.classList.remove("navigation--hide"),t.classList.remove("user--hide"),s.classList.add("nav-icon--active"))}))}()}();