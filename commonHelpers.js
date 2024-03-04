import{S as w,i as u,a as h}from"./assets/vendor-b42c18af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector(".search-form");const S=document.querySelector(".search-input"),d=document.querySelector(".form-button");S.value;const $=function(s){s.value.trim()==""?d.setAttribute("disabled","disabled"):d.removeAttribute("disabled","disabled")};function m(o){return o.hits.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:b})=>`<li>
                    <a href="${s}"><img class="large-image" src="${r}" alt="${n}" width="360px" height="152px" title="${n}"></a>
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
                    <p>${i}</p>
                    </span>

                    <span>
                    <h3>Downloads</h3>
                    <p>${b}</p>
                    </span>
                    </div>
                </li>`).join("")}const f=document.querySelector(".search-form"),p=document.querySelector(".search-input"),a=document.querySelector(".load-button"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),q="42543604-e9bb6c6b12fe7ca69b0735960",E="https://pixabay.com/api/",y=new URLSearchParams({orientation:"horizontal",safesearch:!0,image_type:"photo",per_page:15});let g=1;const v=new w(".gallery  a");function L(){return`${E}?key=${q}&q=${p.value}&${y}&page=${g++}`}f.addEventListener("input",o=>{$(p)});f.addEventListener("submit",async o=>{o.preventDefault(),l.classList.remove("visually-hidden"),g=1,c.innerHTML="";async function s(){try{return await h.get(L())}catch{throw new Error("Promblems with the fetch!")}}s().then(r=>{if(r.data.hits.length==0)throw new Error("No such images!");c.insertAdjacentHTML("beforeend",m(r.data)),v.refresh()}).catch(r=>{u.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{l.classList.add("visually-hidden"),a.classList.remove("visually-hidden")})});a.addEventListener("click",o=>{l.classList.remove("visually-hidden"),a.classList.add("visually-hidden");async function s(){try{return await h.get(L())}catch{throw new Error("We're sorry, but you've reached the end of search results.")}}s().then(r=>{if(r.data.hits.length===0)throw new Error("No such images!");c.insertAdjacentHTML("beforeend",m(r.data));const n=c.firstChild.getBoundingClientRect();window.scrollBy(0,n.height*2),r.data.hits.length<y.get("per_page")&&a.classList.add("visually-hidden"),a.classList.remove("visually-hidden"),v.refresh()}).catch(r=>{u.error({message:"We're sorry, but you've reached the end of search results."}),a.classList.add("visually-hidden")}).finally(()=>{l.classList.add("visually-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
