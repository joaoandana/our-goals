(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function g(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerpolicy&&(e.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?e.credentials="include":a.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(a){if(a.ep)return;a.ep=!0;const e=g(a);fetch(a.href,e)}})();const r=document.querySelector("#inputID"),c=document.querySelector("#inputSenha"),l=document.querySelector(".status"),h=document.querySelector(".button-validate"),v=document.querySelector(".playerMusic"),t=document.querySelector(".showMusic"),d=document.querySelector(".showMusic img"),m=[`<div class="goal">
    <h2 class="goal-title">Cozinhar v\xE1rios pratos</h2>
    <img src="./images/goal-0.jpg"/>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Aprender a cozinhar doces e salgados</h2>
    <ul class="goal-list">
      <li>Batata frita do Outback</li>
      <li>Batata recheada</li>
      <li>Pizza</li>
      <li>Massa caseira</li>
      <li>Palha Italiana</li>
      <li>Petit gateau</li>
      <li>Lasanha</li>
      <li>Fricass\xEA de frango</li>
      <li>Hamb\xFArguer caseiro</li>
      <li>Mil folhas</li>
      <li>Tarte tain</li>
      <li>Panqueca</li>
    </ul>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Viajar pro Canad\xE1</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Programar juntos</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Viajar pra v\xE1rios pa\xEDses</h2>
    <ul class="goal-list">
      <li>Reino Unido</li>
      <li>Portugal</li>
      <li>Fran\xE7a</li>
      <li>It\xE1lia</li>
      <li>Holanda</li>
    </ul>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Ter nosso carro pr\xF3prio</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Mora fora do Brasil</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Conhecer v\xE1rios restaurantes</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Ter v\xE1rios gatinhos</h2>
    <ul class="goal-list">
    <li>Harry</li>
    <li>Ahri</li>
    <li>Lucian</li>
  </ul>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Ter um filho</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Ter nossa pr\xF3pria casa</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Passar o final de semana no clube</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Comemorar anivers\xE1rio de namoro num chal\xE9</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Casar</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Ter um Instagram pra postarmos nossos momentos</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Ter um \xE1lbum de fotos</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Conhecer a Europa</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Fazer exerc\xEDcios juntos</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Colecionar lembrancinhas de v\xE1rios pa\xEDses</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Ter um escrit\xF3rio compartilhado pra n\xF3s dois</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Viajar de carro ouvindo m\xFAsica</h2>
  </div>`,`<div class="goal">
    <h2 class="goal-title">Quer namorar comigo?</h2>
  </div>`],f=["vamoscomer","horadecozinhar","umbomlugar","developertime","borapassear","vrumvrum","oquantoantes","foodtime","miaumiau","daquiunsanos","semproblemascomospais","horadedescansar","ondevamosir?","queromuito","ourmemories","picturesforever","anycountry","boraficarsaudavel","talvezsejabrega","issotemqueacontecer","boracantarpracaralho","mediz"];t.addEventListener("click",()=>{v.classList.toggle("d-none"),t.classList.toggle("hidden"),t.classList.contains("hidden")?d.setAttribute("src","./images/show.png"):d.setAttribute("src","./images/hidden.png")});function p(){const s=r.value,i=c.value;return s==null||i==!1?(l.classList.add("wrong"),l.textContent="Digite os valores",[]):(l.classList.remove("wrong","correct"),f[s]==i?[!0,s]:[!1])}function u(){const[s,i]=p();s==!0?(l.classList.add("correct"),l.innerHTML=m[i],r.value="",window.screen.width>768&&r.focus()):s==!1&&(l.classList.add("wrong"),l.textContent="Senha errada"),c.value=""}h.addEventListener("click",u);c.onkeydown=s=>{s.key==="Enter"&&u()};
