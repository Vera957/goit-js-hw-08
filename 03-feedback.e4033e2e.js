!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);var o=n("1WSnx"),l="feedback-form-state",i=document.querySelector("form"),u=document.querySelector('input[type="email"]'),s=document.querySelector('textarea[name="message"]'),d={email:"",message:""};i.addEventListener("input",(function(e){return e.target==u?d.email=e.target.value:d.message=e.target.value,f(),d}));var f=e(o).throttle((function(){localStorage.setItem(l,JSON.stringify(d))}),500);i.addEventListener("submit",(function(e){e.preventDefault(),console.log(d),localStorage.clear(),i.reset()}));var c,m=JSON.parse(localStorage.getItem(l));window.onload=(c=m,void(null!==m&&(s.value=c.message,u.value=c.email,d.message=m.message,d.email=m.email)))}();
//# sourceMappingURL=03-feedback.e4033e2e.js.map