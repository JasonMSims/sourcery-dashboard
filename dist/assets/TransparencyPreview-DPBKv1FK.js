function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./TransparencyLabel-DiJgpMQk.js","./index-BlG4kX7N.js","./vue-BoLrSUi8.js","./@vue-CoJfA1qg.js","./pinia-CqAf_HDh.js","./vue3-google-signin-CqEKSxfA.js","./vue-router-BJR6PFrN.js","./jose-Deqv1zAq.js","./jwt-decode-Bpt2EmM4.js","./axios-COvgDtyF.js","./@headlessui-BE6jzHzZ.js","./@heroicons-Doi4At8W.js","./v-calendar-CD4qQxjj.js","./@popperjs-DXqTHVUr.js","./v-calendar-nE1-CoF3.css","./index-BqoG8U8_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i,a as p}from"./index-BlG4kX7N.js";import"./vue-BoLrSUi8.js";import{a8 as l,f as t,g as a,F as d,s as m,D as u,v as f,j as _,M as o,A as y,E as b}from"./@vue-CoJfA1qg.js";import"./pinia-CqAf_HDh.js";import"./vue3-google-signin-CqEKSxfA.js";import"./vue-router-BJR6PFrN.js";import"./jose-Deqv1zAq.js";import"./jwt-decode-Bpt2EmM4.js";import"./axios-COvgDtyF.js";import"./@headlessui-BE6jzHzZ.js";import"./@heroicons-Doi4At8W.js";import"./v-calendar-CD4qQxjj.js";import"./@popperjs-DXqTHVUr.js";const v={class:"flex flex-auto flex-wrap place-content-start items-start justify-center gap-2 overflow-auto rounded-lg bg-slate-100 px-2 py-6 lg:h-0",id:"print"},g={__name:"TransparencyPreview",props:{codes:Array,product:Object,label:Object},setup(e){const s=l(()=>p(()=>import("./TransparencyLabel-DiJgpMQk.js").then(r=>r.T),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url));return(r,x)=>(t(),a("div",v,[e.product?(t(!0),a(d,{key:0},m(e.codes,(n,c)=>(t(),u(y(s),{code:n,product:e.product,label:e.label},{identifier:f(()=>[_("span",null,o(`${c+1}`.padStart(2,"0"))+"-"+o(`${e.codes.length}`.padStart(2,"0")),1)]),_:2},1032,["code","product","label"]))),256)):b("",!0)]))}},S=i(g,[["__file","/Users/jason/Documents/Code/sourcery-dashboard/src/components/Transparency/TransparencyPreview.vue"]]);export{S as default};