import{a as l}from"./SZ3C6HJE.js";import{d as h}from"./QSYVGUJZ.js";import{a as y,d as u,h as g}from"./HEEDNTAU.js";import{f as p}from"./UTGLRY7A.js";var f=p(l()),n=p(y()),P=e=>{let t=(s,o)=>{let{data:{_RUNTIME_:r,...i},event:c,id:m}=s;if(m===u)return new Promise(a=>{e(r,c,i,o).then(d=>{d&&Object.prototype.hasOwnProperty.call(d,"success")&&a(d)})})};return n.default.runtime.onMessage.addListener(t),()=>{n.default.runtime.onMessage.removeListener(t)}};var v=e=>{let t=(s,o)=>{let{data:r,event:i,id:c}=s;if(c===u)return new Promise(m=>{e(i,r,o).then(a=>{a&&Object.prototype.hasOwnProperty.call(a,"success")&&m(a)})})};return n.default.runtime.onMessage.addListener(t),()=>{n.default.runtime.onMessage.removeListener(t)}},b=async()=>{try{let e=await n.default.tabs.query({active:!0,currentWindow:!0});await n.default.runtime.reload(),e.forEach(t=>{t.id&&n.default.tabs.reload(t.id)})}catch{}};var x=async(e="",t=!0)=>{let s=n.default.runtime.id,o=await n.default.tabs.query({url:`chrome-extension://${s}/options/options.html`});await Promise.all(o.map(async r=>{r.id&&await n.default.tabs.remove(r.id)})),await n.default.tabs.create({url:`chrome-extension://${s}/options/options.html${e}`,active:t})},M=async(e,t)=>{try{let s=await h();return s?await(await fetch(`${g}${e}`,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}})).json():new Error("No access token")}catch{}},L=async e=>{if(e)try{return await n.default.tabs.get(e)}catch{return null}else return null};export{P as a,v as b,b as c,x as d,M as e,L as f};
