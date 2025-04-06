(()=>{"use strict";var e={386:(e,t,n)=>{n.r(t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(386);var e=document.querySelector(".password-display__display"),t=document.querySelector(".password-display__copy-btn"),r=document.querySelector(".length__length-slider"),o=document.querySelector(".length__label_value"),a=document.querySelector(".checkbox-uppercase"),c=document.querySelector(".checkbox-lowercase"),l=document.querySelector(".checkbox-numbers"),u=document.querySelector(".checkbox-symbols"),s=document.querySelector(".settings__generate-btn"),d=document.querySelector(".strength__bars-label"),i=document.querySelectorAll(".bar");function v(){var e=parseInt(r.value),t=parseInt(r.min),n=(e-t)/(parseInt(r.max)-t)*100;o.textContent=e.toString(),r.style.setProperty("--slider-percent","".concat(n,"%"))}function y(){var t=parseInt(r.value),n=a.checked,o=c.checked,s=l.checked,v=u.checked;if(n||o||s||v){var y="";n&&(y+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),o&&(y+="abcdefghijklmnopqrstuvwxyz"),s&&(y+="0123456789"),v&&(y+="!@#$%^&*()_+-=[]{}|;:,.<>?");for(var p="",h=0;h<t;h++)p+=y[Math.floor(Math.random()*y.length)];e.textContent=p,function(e){var t=0;e.length>=12?t+=2:e.length>=8&&(t+=1);var n,r=[/[A-Z]/.test(e),/[a-z]/.test(e),/[0-9]/.test(e),/[^A-Za-z0-9]/.test(e)].filter(Boolean).length;n=(t+=r)<=3?0:t<=5?1:t<=7?2:3;var o=["var(--red)","var(--orange)","var(--yellow)","var(--neon-green)"];d.textContent=["TOO WEAK","WEAK","MEDIUM","STRONG"][n],i.forEach((function(e,t){e.style.background=t<=n?o[n]:"transparent",e.style.borderColor=t<=n?o[n]:"var(--almost-white)"}))}(p)}else alert("Please select at least one character type")}r.addEventListener("input",(function(){o.textContent=r.value})),s.addEventListener("click",y),t.addEventListener("click",(function(){var t=e.textContent;t&&navigator.clipboard.writeText(t).then((function(){e.textContent="Copied!",setTimeout((function(){e.textContent=t}),1e3)}))})),r.addEventListener("input",(function(){v()})),window.addEventListener("load",(function(){v()})),y()})()})();