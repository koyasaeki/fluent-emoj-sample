import{d as v,c as f,r as m,o as r,a as l,b as c,n as _,u,t as d,e as h,F as p,f as g,g as y,h as k,i as x,j as w}from"./vendor.fb1d2454.js";const j=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}};j();var b=(t,n)=>{const a=t.__vccOpts||t;for(const[o,e]of n)a[o]=e;return a};const $={style:{display:"flex","align-items":"center"}},C=["src"],B=v({props:{id:null,keywords:null,unicode:null,animation:null},setup(t){const n=t,a=f(()=>`https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v2/assets/emoticons/${n.id}/default/100_anim_f.png`),o=m((n.animation.firstFrame-1)*-100);setInterval(()=>{o.value-=100,o.value<=-(n.animation.framesCount-1)*100&&(o.value=0)},1e3/n.animation.fps);const e=f(()=>`object-position: 0px ${o.value}px`);return(s,i)=>(r(),l("div",$,[c("img",{class:"animation",style:_(u(e)),src:u(a)},null,12,C),c("span",null,d(t.unicode),1),c("span",null,d(t.keywords.join(",")),1)]))}});var E=b(B,[["__scopeId","data-v-69f01628"]]);const F=["src"],L=v({props:{id:null,keywords:null,unicode:null,animation:null},setup(t){const n=t,a=m(!1),o=()=>{a.value=!a.value},e=f(()=>`https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v2/assets/emoticons/${n.id}/default/100_f.png`);return(s,i)=>(r(),l("button",{style:{display:"flex","align-items":"center"},onClick:o},[a.value?(r(),h(E,{key:0,id:t.id,keywords:t.keywords,unicode:t.unicode,animation:t.animation},null,8,["id","keywords","unicode","animation"])):(r(),l(p,{key:1},[c("img",{src:u(e)},null,8,F),c("span",null,d(t.unicode),1),c("span",null,d(t.keywords.join(",")),1)],64))]))}}),N={class:"h-screen px-2 py-1"},A={class:"flex gap-1 px-1"},O=["onClick"],I={key:0},P=v({setup(t){const n=m([]),a=m("\u30B9\u30DE\u30A4\u30EB"),o=f(()=>n.value.find(e=>e.title===a.value));return g(async()=>{const s=await(await fetch("https://statics.teams.cdn.office.net/evergreen-assets/personal-expressions/v1/metadata/fa6ddff9337d4d55bf685c5241ed3710/ja-jp.json")).json();n.value=s.categories}),(e,s)=>(r(),l("div",N,[c("div",A,[(r(!0),l(p,null,y(n.value,i=>(r(),l("button",{key:i.id,class:"hover:shadow",onClick:S=>a.value=i.title},d(i.title),9,O))),128))]),u(o)&&u(o).emoticons.length>0?(r(),l("div",I,[(r(!0),l(p,null,y(u(o).emoticons,i=>(r(),l("div",{key:i.id},[x(L,{id:i.id,keywords:i.keywords,unicode:i.unicode,animation:i.animation},null,8,["id","keywords","unicode","animation"])]))),128))])):k("",!0)]))}});w(P).mount("#app");
