(this.webpackJsonpionClient=this.webpackJsonpionClient||[]).push([[42],{145:function(n,t,e){"use strict";e.r(t),e.d(t,"startFocusVisible",(function(){return i}));var o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],i=function(){var n=[],t=!0,e=document,i=function(t){n.forEach((function(n){return n.classList.remove("ion-focused")})),t.forEach((function(n){return n.classList.add("ion-focused")})),n=t},s=function(){t=!1,i([])};e.addEventListener("keydown",(function(n){(t=o.includes(n.key))||i([])})),e.addEventListener("focusin",(function(n){if(t&&n.composedPath){var e=n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains("ion-focusable")}));i(e)}})),e.addEventListener("focusout",(function(){e.activeElement===e.body&&i([])})),e.addEventListener("touchstart",s),e.addEventListener("mousedown",s)}}}]);
//# sourceMappingURL=42.ee81626c.chunk.js.map