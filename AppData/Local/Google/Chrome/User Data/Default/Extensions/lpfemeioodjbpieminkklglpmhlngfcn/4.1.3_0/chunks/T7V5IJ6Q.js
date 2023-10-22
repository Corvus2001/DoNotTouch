import{f as P,n as m,s as x,t as k}from"./E3X6NR6K.js";import{b as q}from"./FVT6UZZV.js";import{n as v,na as _,za as S}from"./I77YJK47.js";import{c as w}from"./OIXXMIO2.js";import{b}from"./76EEXRQE.js";import{a as C}from"./MM6H3LLZ.js";import{a as U}from"./HEEDNTAU.js";import{f as h}from"./UTGLRY7A.js";var u=h(U());var f=`You are a knowledgeable and helpful person that can answer any questions. Your task is to answer questions.

It's possible that the question, or just a portion of it, requires relevant information from the internet to give a satisfactory answer. The relevant search results provided below, delimited by <search_results></search_results>, are the necessary information already obtained from the internet. The search results set the context for addressing the question, so you don't need to access the internet to answer the question.

Write a comprehensive answer to the question in the best way you can. If necessary, use the provided search results.

Search results:
<search_results>
{web_results}
</search_results>

Each search result item provides the following information in this format:
Number: [Index number of the search result]
URL: [URL of the search result]
Title: [Page title of the search result]
Content: [Page content of the search result]

If you can't find enough information in the search results and you're not sure about the answer, try your best to give a helpful response by using all the information you have from the search results.

For your reference, today's date is {current_date}.

---

You should always respond using the following Markdown format delimited by <response></response>:

<response>
# {query}

## \u{1F5D2}\uFE0F Answer
<answer to the question>

## \u{1F310} Sources
<numbered list of all the provided search results>
</response>

---

Here are more requirements for the response Markdown format described above:

For <answer to the question> part in the above Markdown format:
If you use any of the search results in <answer to the question>, always cite the sources at the end of the corresponding line, similar to how Wikipedia.org cites information. Use the citation format [[NUMBER](URL)], where both the NUMBER and URL correspond to the provided search results in <numbered list of all the provided search results>.

Present the answer in a clear format.
Use a numbered list if it clarifies things
Make the answer as short as possible, ideally no more than 200 words.

For <numbered list of all the provided search results> part in the above Markdown format:
Always list all the search results provided above, delimited by <search_results></search_results>.
Do not miss any search result items, regardless if there are duplicated ones in the provided search results.
Use the following format for each search result item:
[the domain of the URL - TITLE](URL)
Ensure the bullet point's number matches the 'NUMBER' of the corresponding search result item.`,R=`You are a knowledgeable and helpful person that can answer any questions. Your task is to answer questions.

It's possible that the question, or just a portion of it, requires relevant information from the internet to give a satisfactory answer. The relevant search results provided below, delimited by <search_results></search_results>, are the necessary information already obtained from the internet. The search results set the context for addressing the question, so you don't need to access the internet to answer the question.

Write a comprehensive answer to the question in the best way you can. If necessary, use the provided search results.

Search results:
<search_results>
{web_results}
</search_results>

Each search result item provides the following information in this format:
Number: [Index number of the search result]
URL: [URL of the search result]
Title: [Page title of the search result]
Content: [Page content of the search result]

If you can't find enough information in the search results and you're not sure about the answer, try your best to give a helpful response by using all the information you have from the search results.

For your reference, today's date is {current_date}.

---

You should always respond using the following Markdown format:

# {query}

## \u{1F5D2}\uFE0F Answer
<answer to the question>

## \u{1F310} Sources
<numbered list of all the provided search results>

---

Here are more requirements for the response Markdown format described above:

For <answer to the question> part in the above Markdown format:
If you use any of the search results in <answer to the question>, always cite the sources at the end of the corresponding line, similar to how Wikipedia.org cites information. Use the citation format [[NUMBER](URL)], where both the NUMBER and URL correspond to the provided search results in <numbered list of all the provided search results>.

Present the answer in a clear format.
Use a numbered list if it clarifies things
Make the answer as short as possible, ideally no more than 200 words.

For <numbered list of all the provided search results> part in the above Markdown format:
Always list all the search results provided above, delimited by <search_results></search_results>.
Do not miss any search result items, regardless if there are duplicated ones in the provided search results.
Use the following format for each search result item:
[the domain of the URL - TITLE](URL)
Ensure the bullet point's number matches the 'NUMBER' of the corresponding search result item.`;var E=h(C()),A=`You are a research expert who is good at coming up with the perfect search query to help find answers to any question. Your task is to think of the most effective search query for the following question delimited by <question></question>:

<question>
{{current_question}}
</question>

The question is the final one in a series of previous questions and answers. Here are the earlier questions listed in the order they were asked, from the very first to the one before the final question, delimited by <previous_questions></previous_questions>:
<previous_questions>
{{previous_questions}}
</previous_questions>

For your reference, today's date is {{CURRENT_DATE}}.

Output the search query without additional context, explanation, or extra wording, just the search query itself. Don't use any punctuation, especially no quotes or backticks, around the search query.Output the search query without additional context, explanation, or extra wording, just the search query itself. Don't use any punctuation, especially no quotes or backticks, around the search query.`;var Y=t=>{let e=A;e=e.replaceAll("{{CURRENT_DATE}}",(0,E.default)().format("YYYY-MM-DD HH:mm:ss"));let o=t[t.length-1],r=t.slice(0,-1);e=e.replaceAll("{{current_question}}",o);let s="";return r.forEach((n,a)=>{s+=`${a+1}) ${n}${a<r.length-1?`
`:""}`}),e=e.replaceAll("{{previous_questions}}",s),e};var L=[{value:"sogou",label:"Sogou Search"},{value:"brave",label:"Brave Search"},{value:"yandex",label:"Yandex Search"},{value:"naver",label:"Naver Search"},{value:"bing",label:"Bing Search"},{value:"yahoo",label:"Yahoo Search"},{value:"baidu",label:"Baidu Search"},{value:"google",label:"Google Search"}],T=Array.from({length:10},(t,e)=>e+1).map(t=>({value:t,label:`${t} result${t===1?"":"s"}`}));T.push({value:100,label:"Max results"});var W=T,F=[{value:"MAP_REDUCE",label:"Copilot"},{value:"NO_SUMMARIZE",label:"Quick search"}],H=[{value:"m",label:"Past month"},{value:"w",label:"Past week"},{value:"d",label:"Past day"},{value:"any",label:"Any time"}];var i="saved_prompts",y="saved_prompts_moved_to_local";var Z=async()=>(await I()).text.includes("{web_results}");var M=()=>{try{return b().includes("gpt-4")?{uuid:"default",name:"Default prompt",text:R}:{uuid:"default",name:"Default prompt",text:f}}catch{return{uuid:"default",name:"Default prompt",text:f}}},I=async()=>{let e=(await w()).promptUUID;return(await g()).find(r=>r.uuid===e)||M()},g=async(t=!0)=>{let{[i]:e,[y]:o}=await u.default.storage.local.get({[i]:[],[y]:!1}),r=e;if(!o){let n=(await u.default.storage.sync.get({[i]:[]}))?.[i]??[];r=e.reduce((a,c)=>(a.some(({uuid:d})=>d===c.uuid)||a.push(c),a),n),await u.default.storage.local.set({[i]:r,[y]:!0}),await u.default.storage.sync.set({[i]:[]})}return t?D(r):r};function D(t){return e(t,M()),t;function e(o,r){let s=o.findIndex(n=>n.uuid===r.uuid);s>=0?o[s]=r:o.unshift(r)}}var z=async t=>{let e=await g(!1),o=e.findIndex(r=>r.uuid===t.uuid);o>=0?e[o]=t:e.push(t),await u.default.storage.local.set({[i]:e})},J=async t=>{let e=await g();e=e.filter(o=>o.uuid!==t.uuid),await u.default.storage.local.set({[i]:e})};var l=h(v()),N=({open:t,confirmText:e,confirmButtonText:o,cancelButtonText:r,onClose:s,onConfirm:n,children:a})=>{let{t:c}=q(["settings","common"]),d=()=>{n&&n()};return(0,l.jsx)(x,{open:t,onClose:s,children:(0,l.jsxs)(P,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:360,bgcolor:"background.paper",boxShadow:" 0px 4px 16px rgba(0, 0, 0, 0.08);",p:2},children:[a||(0,l.jsx)(_,{children:e}),(0,l.jsxs)(S,{direction:"row-reverse",gap:1,mt:2,children:[(0,l.jsx)(m,{variant:"contained",onClick:s,children:r??c("common:cancel")}),(0,l.jsx)(m,{variant:"contained",sx:{bgcolor:p=>p.palette.mode==="dark"?"#4f4f4f":"#f5f5f5",color:p=>p.palette.mode==="dark"?"#f5f5f5":"#626262",":hover":{bgcolor:"#666",color:"#fff"}},onClick:d,children:o??c("common:confirm")})]})]})})},ne=N;export{Y as a,L as b,W as c,F as d,H as e,Z as f,I as g,g as h,z as i,J as j,ne as k};
