import"./vue-BoLrSUi8.js";import{C as P,r as d,U as b,w as E,a as Q}from"./@vue-CoJfA1qg.js";var O;const C=typeof window<"u",N=()=>{};C&&((O=window?.navigator)!=null&&O.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function T(e){return e}function H(e,a,n){let r;P(n)?r={evaluating:n}:r=n||{};const{lazy:l=!1,evaluating:t=void 0,shallow:y=!1,onError:g=N}=r,i=d(!l),u=y?b(a):d(a);let s=0;return E(async h=>{if(!i.value)return;s++;const f=s;let c=!1;t&&Promise.resolve().then(()=>{t.value=!0});try{const o=await e(m=>{h(()=>{t&&(t.value=!1),c||m()})});f===s&&(u.value=o)}catch(o){g(o)}finally{t&&f===s&&(t.value=!1),c=!0}}),l?Q(()=>(i.value=!0,u.value)):u}const v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p="__vueuse_ssr_handlers__";v[p]=v[p]||{};var _;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(_||(_={}));var x=Object.defineProperty,I=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,w=(e,a,n)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,F=(e,a)=>{for(var n in a||(a={}))A.call(a,n)&&w(e,n,a[n]);if(I)for(var n of I(a))B.call(a,n)&&w(e,n,a[n]);return e};const U={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};F({linear:T},U);export{H as c};