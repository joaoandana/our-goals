(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const f=document.querySelector("#inputID"),c=document.querySelector("#inputSenha"),s=document.querySelector(".status"),h=document.querySelector(".button-validate"),m=document.querySelector(".playerMusic"),r=document.querySelector(".showMusic"),l=document.querySelector(".showMusic img"),y=["cuzinho1","cuzinho2","cuzinho3","cuzinho4","cuzinho5","cuzinho6","cuzinho7","cuzinho8"],p=["senha1","senha2","senha3","senha4","senha5","senha6","senha7","senha8"];r.addEventListener("click",()=>{m.classList.toggle("d-none"),r.classList.toggle("hidden"),r.classList.contains("hidden")?l.setAttribute("src","./images/show.png"):l.setAttribute("src","./images/hidden.png")});setTimeout(()=>{document.querySelector('[title="Play"]').click()},5e3);function g(){const n=f.value,o=c.value;return n==null||o==!1?(s.classList.add("wrong"),s.textContent="Digite os valores",[]):(s.classList.remove("wrong","correct"),p[n]==o?[!0,n]:[!1])}function a(){const[n,o]=g();n==!0?(s.classList.add("correct"),s.textContent=y[o]):n==!1&&(s.classList.add("wrong"),s.textContent="Senha errada"),c.value=""}h.addEventListener("click",a);c.onkeydown=n=>{n.key==="Enter"&&a()};