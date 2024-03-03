import{S as d,i as h,a as m}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector(".search-form");const v=document.querySelector(".search-input"),u=document.querySelector(".form-button");v.value;const L=function(r){r.value.trim()==""?u.setAttribute("disabled","disabled"):u.removeAttribute("disabled","disabled")};function f(o){return o.hits.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:n,downloads:b})=>`<li>
                    <a href="${r}"><img class="large-image" src="${s}" alt="${a}" width="360px" height="152px" title="${a}"></a>
                    <div class="image-statistics">

                    <span>
                    <h3>Likes</h3>
                    <p>${e}</p>                 
                    </span>

                    <span>
                    <h3>Views</h3>
                    <p>${t}</p>
                    </span>

                    <span>
                    <h3>Comments</h3>
                    <p>${n}</p>
                    </span>

                    <span>
                    <h3>Downloads</h3>
                    <p>${b}</p>
                    </span>
                    </div>
                </li>`).join("")}const p=document.querySelector(".search-form"),y=document.querySelector(".search-input"),i=document.querySelector(".load-button"),l=document.querySelector(".gallery"),c=document.querySelector(".loader"),w="42543604-e9bb6c6b12fe7ca69b0735960",S="https://pixabay.com/api/",$=new URLSearchParams({orientation:"horizontal",safesearch:!0,image_type:"photo",per_page:5});let q=1;function g(){return`${S}?key=${w}&q=${y.value}&${$}&page=${q++}`}p.addEventListener("input",o=>{L(y)});p.addEventListener("submit",async o=>{o.preventDefault(),c.classList.remove("visually-hidden"),l.innerHTML="";async function r(){try{return await m.get(g())}catch{throw new Error("Promblems with the fetch!")}}r().then(s=>{if(s.data.hits.length==0)throw new Error("No such images!");l.insertAdjacentHTML("beforeend",f(s.data)),new d(".gallery  a").refresh()}).catch(s=>{h.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{c.classList.add("visually-hidden"),i.classList.remove("visually-hidden")})});i.addEventListener("click",o=>{c.classList.remove("visually-hidden"),i.classList.add("visually-hidden");async function r(){try{return await m.get(g())}catch{throw new Error("We're sorry, but you've reached the end of search results.")}}r().then(s=>{if(s.data.hits.length==0)throw new Error("No such images!");l.insertAdjacentHTML("beforeend",f(s.data)),new d(".gallery  a").refresh(),i.classList.remove("visually-hidden")}).catch(s=>{h.error({message:"We're sorry, but you've reached the end of search results."})}).finally(()=>{c.classList.add("visually-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
