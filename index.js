import{a as u,i as n,S as g}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){const r="https://pixabay.com",o="/api/",s=new URLSearchParams({key:"56897880-ce564d0c5f2c9a99203aeddd2",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${s}`;return u.get(e).then(t=>t.data.hits).catch(t=>(console.log("Error images:",t),[]))}const c={listEl:document.querySelector(".gallery")};function f(i){const{webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:a,downloads:m}=i;return`<li class="gallery-item">
  <a class="gallery-link" href='${o}'>
    <img
      class="gallery-image"
      src='${r}'
      data-source='${o}'
      alt='${s}'
      width='360'
      height='200'
    />
    <div>
    <p>Likes${e}</p>
    <p>Views${t}</p>
    <p>Comments${a}</p>
    <p>Downloads${m}</p>
    </div>
  </a>
</li>
`}function d(i){if(h(),i.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:1e4});return}const r=i.map(f).join(`
`);c.listEl.innerHTML=r,new g(".gallery a",{captionsData:"alt",captionPosition:"botton",captionDelay:250,overlayOpacity:.7}).refresh()}function h(){c.listEl.innerHTML=""}const l={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery")};l.formElem.addEventListener("submit",i=>{i.preventDefault();const r=i.currentTarget.elements.search.value;if(!r){n.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}p(r).then(o=>{d(o)}).catch(o=>{n.error({title:"Error",message:"Something went wrong! Please try again later.",position:"topRight",timeout:1e4}),console.error("Error fetching images:",o)}),l.formElem.reset()});
//# sourceMappingURL=index.js.map
