import{m as e,r as t,p as n,R as r,a as l}from"./vendor.b229d159.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();e.use({breaks:!0,gfm:!0,langPrefix:"lang-"});function o(){const[l,o]=t.exports.useState('# Header text!\n## A sub-heading!\nHere is a list:\n1. One Item\n2. Two Items!\n3. [A link!](https://www.google.com)\n\nSome code: `<p>Doing some markdown</p>`, with **emphasis**.\n\n```\nlet js = () => {\n  console.log("hello!")\n}\n```\n\n> And finally, an image:\n\n![alt text](https://placekitten.com/408/287 "Adorable cat from Placekitten")');let a=n.sanitize(e(l));return console.log(a),r.createElement("div",{className:"App"},r.createElement("header",{className:"App-header"},r.createElement("h1",null,"Markdown Previewer")),r.createElement("main",null,r.createElement("section",null,r.createElement("label",{htmlFor:"editor"},r.createElement("h3",null,"Enter text here:")),r.createElement("textarea",{id:"editor",name:"editor",value:l,onChange:e=>o(e.target.value),rows:"30"})),r.createElement("section",null,r.createElement("h3",null,"Output:"),r.createElement("output",{id:"preview",dangerouslySetInnerHTML:{__html:e(l)}}))))}l.render(r.createElement(r.StrictMode,null,r.createElement(o,null)),document.getElementById("root"));
