function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var n=r("kEUo3");const l=document.querySelector("form"),i=document.querySelector('input[type="email"]'),s=document.querySelector('textarea[name="message"]'),u={email:"",message:""};l.addEventListener("input",(function(e){return e.target==i?u.email=e.target.value:u.message=e.target.value,d(),u}));const d=e(n).throttle((function(){localStorage.setItem("feedback-form-state",JSON.stringify(u))}),500);l.addEventListener("submit",(function(e){e.preventDefault(),console.log(u),localStorage.clear(),l.reset()}));const c=JSON.parse(localStorage.getItem("feedback-form-state"));var f;window.onload=(f=c,void(null!==c&&(s.value=f.message,i.value=f.email,u.message=c.message,u.email=c.email)));
//# sourceMappingURL=03-feedback.4834ff8f.js.map
