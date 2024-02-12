import{_ as l,K as i,o,c as n,b as s,w as a,a5 as c,k as e,a as t,X as d,O as h}from"./chunks/framework.0a46897a.js";const C=JSON.parse('{"title":"Rollkit stack","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Rollkit stack | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"learn/stack.md","filePath":"learn/stack.md","lastUpdated":1707757135000}'),p={name:"learn/stack.md"},u=e("h1",{id:"rollkit-stack",tabindex:"-1"},[t("Rollkit stack "),e("a",{class:"header-anchor",href:"#rollkit-stack","aria-label":'Permalink to "Rollkit stack"'},"​")],-1),f=e("p",null,"This page will cover the main components of Rollkit.",-1),m=e("p",null,"Rollup sequencer nodes collect transactions from users, aggregate them into blocks, and post the blocks onto a data availability (DA) layer (such as Celestia) to be ordered and finalized. Full nodes execute and verify rollup blocks, and in the case of an optimistic rollup, propagate fraud proofs when needed. Light clients will receive headers, verify proofs (fraud, zk, etc), and authenticate trust-minimized queries about the state.",-1),g=e("h2",{id:"application-structure",tabindex:"-1"},[t("Application structure "),e("a",{class:"header-anchor",href:"#application-structure","aria-label":'Permalink to "Application structure"'},"​")],-1),b=d("",54);function k(y,v,w,x,q,R){const r=i("Mermaid");return o(),n("div",null,[u,f,m,g,(o(),s(c,null,{default:a(()=>[h(r,{id:"mermaid-12",graph:"graph%20TD%0A%20%20%20%20A%5BRollkit%20Rollup%5D%0A%20%20%20%20B%5BRollkit%5D%0A%20%20%20%20C%5BData%20Availability%20Chain%5D%0A%20%20%20%20%0A%20%20%20%20A%20%3C--%3E%7CABCI%7C%20B%0A%20%20%20%20B%20%3C--%3E%7CDA%20API%7C%20C%0A"})]),fallback:a(()=>[t(" Loading... ")]),_:1})),b])}const _=l(p,[["render",k]]);export{C as __pageData,_ as default};
