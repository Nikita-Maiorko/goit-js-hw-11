import{a as m,S as p,i as n}from"./assets/vendor-Z6SuAarM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="54466300-85ed7471cb23a14c1c7224587",g="https://pixabay.com/api/";async function h(a){try{return(await m.get(g,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw console.error("Помилка при запиті до Pixabay API:",r),r}}const c=document.querySelector(".gallery"),L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function w(a){const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:d,downloads:f})=>`<li class="gallery__item">
        <a href="${o}">
          <img src="${s}" alt="${e}" loading="lazy"/>
        </a>
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${i}</p>
          <p>Comments: ${d}</p>
          <p>Downloads: ${f}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function b(){c.innerHTML=""}const l=document.querySelector(".loader");function v(){l.classList.add("is-active")}function S(){l.classList.remove("is-active")}const u=document.querySelector(".form"),P=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async a=>{a.preventDefault();const r=P.value.trim();if(!r){n.error({title:"Error",message:"Please enter a search term!"});return}b(),v();try{const o=(await h(r)).hits;o.length===0?n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):w(o)}catch{n.error({title:"Error",message:"Something went wrong while fetching images."})}finally{S()}});
//# sourceMappingURL=index.js.map
