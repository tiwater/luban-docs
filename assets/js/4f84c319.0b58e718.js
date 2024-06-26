"use strict";(self.webpackChunkluban_docs=self.webpackChunkluban_docs||[]).push([[1513],{1605:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=i(4848),s=i(8453);const o={},a="Extend Knowledge",r={id:"ai/kb/index",title:"Extend Knowledge",description:"Introduction",source:"@site/docs/6-ai/kb/index.mdx",sourceDirName:"6-ai/kb",slug:"/ai/kb/",permalink:"/docs/ai/kb/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Chat with AI",permalink:"/docs/ai/chat/"},next:{title:"Guides",permalink:"/docs/category/guides"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Preparing a Knowledge Base",id:"preparing-a-knowledge-base",level:2},{value:"Building Knowledge Bases",id:"building-knowledge-bases",level:2},{value:"Supported Document Formats",id:"supported-document-formats",level:3},{value:"Using the Knowledge Base",id:"using-the-knowledge-base",level:2},{value:"Configuration",id:"configuration",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"extend-knowledge",children:"Extend Knowledge"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"While Large Language Models (LLMs) are exceptionally powerful at answering general questions, they lack the specific knowledge required for certain domains that involve proprietary or private information. To enable robots to answer domain-specific questions, it is crucial to augment the LLM with a knowledge base."}),"\n",(0,t.jsx)(n.p,{children:"For this purpose, Fourier Builder provides a simple method to integrate with a knowledge base using the Knowledge Base node."}),"\n",(0,t.jsx)(n.h2,{id:"preparing-a-knowledge-base",children:"Preparing a Knowledge Base"}),"\n",(0,t.jsx)(n.p,{children:"Before utilizing the Knowledge Base node, you must first prepare your knowledge base. A knowledge base is a repository of facts, rules, and concepts designed to answer specific questions. You can create this repository by adding relevant facts and rules."}),"\n",(0,t.jsx)(n.p,{children:"In Fourier Builder, you can create a knowledge base by adding these facts and rules. The steps are straightforward:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.a,{href:"https://builder.fftai.dev/knowledgebases",children:"Fourier Builder Knowledge Bases"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Create a new knowledge base and populate it with pertinent facts and rules."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Knowledge Base",src:i(5223).A+"",width:"3502",height:"1100"})}),"\n",(0,t.jsx)(n.p,{children:"On the knowledge base's detail page, you can configure various elements to optimize its functionality."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Knowledge Base Configuration",src:i(426).A+"",width:"1384",height:"1276"})}),"\n",(0,t.jsx)(n.h2,{id:"building-knowledge-bases",children:"Building Knowledge Bases"}),"\n",(0,t.jsx)(n.p,{children:"Once a new knowledge base is created and configured, you can enrich it by uploading relevant documents. The system will automatically extract pertinent information from these documents and integrate it into the knowledge base."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Uploading Documents",src:i(555).A+"",width:"1380",height:"782"})}),"\n",(0,t.jsx)(n.h3,{id:"supported-document-formats",children:"Supported Document Formats"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PDF"}),"\n",(0,t.jsx)(n.li,{children:"DOCX"}),"\n",(0,t.jsx)(n.li,{children:"TXT"}),"\n",(0,t.jsx)(n.li,{children:"HTML"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-knowledge-base",children:"Using the Knowledge Base"}),"\n",(0,t.jsx)(n.p,{children:"After building your knowledge base, you can leverage the Knowledge Base node within your workflows to perform queries. The Knowledge Base node processes the query and fetches the appropriate answers from the knowledge base."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Knowledge Base Node",src:i(1384).A+"",width:"1278",height:"1694"})}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"In the Properties Pane of the Knowledge Base node, you can select the specific knowledge base you want to query."}),"\n",(0,t.jsx)(n.p,{children:"Using the Knowledge Base node in workflows is similar to using the LLM node, albeit slightly more complex. Simply input your question into the Knowledge Base node, and it will return the relevant answer based on the information stored in the knowledge base."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},426:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/config-558ff39722eb9556d7b54f03c4a22212.png"},5223:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/kb-fe5591f8b7781dcc9975b57d18f1993b.png"},1384:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/node-f5256899e827a8c583bcfc727540960a.png"},555:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/upload-b2b800f399d1bd7cd4945996f986ab5a.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);