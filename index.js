import{A as c}from"./assets/vendor-CTqzIL4Y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector(".container-faq"),o=document.querySelectorAll(".faq-item");i&&o.length>0?(new c(i,{elementClass:"faq-item",triggerClass:"h3",contentClass:"p",openOnInit:[]}),o.forEach(t=>{const r=t.querySelector(".faq-toggle"),e=t.querySelector("p"),n=t.querySelector(".faq-icon");e.style.display==="none"||e.style.display===""?n.innerHTML='<use xlink:href="./img/icons.svg#icon-arrow-bot"></use>':n.innerHTML='<use xlink:href="./img/icons.svg#icon-arrow-top"></use>',r.addEventListener("click",function(){e.style.display==="none"||e.style.display===""?(e.style.display="block",n.innerHTML='<use xlink:href="./img/icons.svg#icon-arrow-top"></use>'):(e.style.display="none",n.innerHTML='<use xlink:href="./img/icons.svg#icon-arrow-bot"></use>')}),t.querySelector("h3").addEventListener("click",function(){e.style.display==="none"||e.style.display===""?(e.style.display="block",n.innerHTML='<use xlink:href="./img/icons.svg#icon-arrow-top"></use>'):(e.style.display="none",n.innerHTML='<use xlink:href="./img/icons.svg#icon-arrow-bot"></use>')})})):console.error("FAQ container or items not found in the DOM")});
//# sourceMappingURL=index.js.map
