import{M as m,I as p,d as c,a9 as i,r as u,N as e,k as l}from"./entry.f597f24e.js";import{u as d}from"./asyncData.daee9f7d.js";import f from"./Ellipsis.f895101f.js";import _ from"./ComponentPlaygroundData.820a9a08.js";import"./TabsHeader.b7119e3f.js";import"./ComponentPlaygroundProps.258578b3.js";import"./ProseH4.73b3b819.js";import"./ProseCodeInline.1532bb77.js";import"./Badge.f4e5ff42.js";import"./MDCSlot.457b25a2.js";import"./slot.081d3140.js";import"./ProseP.706f1b64.js";import"./index.90d0476f.js";import"./ComponentPlaygroundSlots.vue.673c3f6e.js";import"./ComponentPlaygroundTokens.vue.26c61f6e.js";async function y(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=l(g,[["__scopeId","data-v-3653a881"]]);export{V as default};
