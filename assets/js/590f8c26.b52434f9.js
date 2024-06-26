"use strict";(self.webpackChunkluban_docs=self.webpackChunkluban_docs||[]).push([[4876],{9792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(4848),i=t(8453);const s={sidebar_position:3},r="UI",l={id:"ui/index",title:"UI",description:"In this section, we provide a brief introduction to the Fourier Builder UI.",source:"@site/docs/3-ui/index.mdx",sourceDirName:"3-ui",slug:"/ui/",permalink:"/docs/ui/",draft:!1,unlisted:!1,editUrl:"https://github.com/tiwater/luban-docs/edit/main/docs/3-ui/index.mdx",tags:[],version:"current",lastUpdatedBy:"Hugh Lyu",lastUpdatedAt:1719401201e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Basic Concepts",permalink:"/docs/concepts/"},next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},a={},c=[{value:"Layout",id:"layout",level:2},{value:"Workflow Canvas",id:"workflow-canvas",level:2},{value:"Node Pane",id:"node-pane",level:2},{value:"Property Pane",id:"property-pane",level:2},{value:"Simulation Pane",id:"simulation-pane",level:2},{value:"Toolbar",id:"toolbar",level:2},{value:"Editing functions",id:"editing-functions",level:3},{value:"Running functions",id:"running-functions",level:3},{value:"View functions",id:"view-functions",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ui",children:"UI"}),"\n",(0,o.jsx)(n.p,{children:"In this section, we provide a brief introduction to the Fourier Builder UI."}),"\n",(0,o.jsx)(n.h2,{id:"layout",children:"Layout"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"ui-layout",src:t(1846).A+"",width:"3244",height:"2462"})}),"\n",(0,o.jsx)(n.p,{children:"The Fourier Builder UI is organized into several key sections:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Project Tabs"}),": Multiple projects can be opened and edited simultaneously. You can also click the ",(0,o.jsx)(n.strong,{children:"Back"})," button on the left to return to the project list page or click the ",(0,o.jsx)(n.strong,{children:"New Project"})," button on the right to create a new project."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Workflow Canvas"}),": This is where you build and edit your workflows."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Node Pane"}),": Contains all the nodes available for constructing your workflow."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Properties Pane"}),": Displays properties of the currently selected node."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Simulation Pane"}),": Allows you to view robot simulations."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Toolbar"}),": Located at the bottom, it contains buttons for common actions such as saving, deploying, and running workflows."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Let's delve into these important sections: Node Pane, Properties Pane,"}),"\n",(0,o.jsx)(n.h2,{id:"workflow-canvas",children:"Workflow Canvas"}),"\n",(0,o.jsx)(n.p,{children:"The workflow canvas is the main area where you create and edit workflows. You can drag and drop nodes from the node palette onto the canvas to construct a workflow. Connect nodes by dragging an edge from the output of one node to the input of another."}),"\n",(0,o.jsx)(n.p,{children:"You can pan the canvas by clicking and dragging, and zoom in or out using the mouse wheel. The canvas also includes a minimap in the bottom right corner for easy navigation."}),"\n",(0,o.jsx)(n.p,{children:"Pressing down the left mouse button and dragging will select nodes. Pressing down the right mouse button and dragging will pan the canvas. Scrolling the mouse wheel will zoom in or out. You can also use the zoom buttons in the toolbar."}),"\n",(0,o.jsx)(n.h2,{id:"node-pane",children:"Node Pane"}),"\n",(0,o.jsx)(n.p,{children:"The node palette contains all the nodes you can use to build your workflow. By default, the palette is collapsed; you can expand it to select nodes for your workflow. Use the Pin button to keep it always visible for convenience, although this will reduce the editing space."}),"\n",(0,o.jsx)(n.p,{children:"Nodes are organized into categories. Click on a category to view its nodes, or use the search bar to find specific nodes."}),"\n",(0,o.jsxs)(n.p,{children:["If necessary you can extend the nodes list with your custom node definitions. This feature is publicly available yet, you can ",(0,o.jsx)(n.a,{href:"https://github.com/tiwater/luban-docs/issues/new",children:"Submit a Request"})," if necessary."]}),"\n",(0,o.jsx)(n.h2,{id:"property-pane",children:"Property Pane"}),"\n",(0,o.jsx)(n.p,{children:"When you select a node on the canvas, the properties panel displays its properties. If the node has extended properties, a Configure the node button will appear. Clicking this button opens the Node Configuration dialog for further customization."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(9310).A+"",width:"1856",height:"928"})}),"\n",(0,o.jsx)(n.h2,{id:"simulation-pane",children:"Simulation Pane"}),"\n",(0,o.jsx)(n.p,{children:"The Simulation panel is part of the Properties Panel. By selecting the Simulation tab, you can enable the simulation feature and run the workflow on a simulated robot. We currently integrate Webots as the simulation engine, allowing you to see the robot moving and interacting with its environment in real-time."}),"\n",(0,o.jsx)(n.h2,{id:"toolbar",children:"Toolbar"}),"\n",(0,o.jsx)(n.p,{children:"The toolbar contains buttons for common actions like saving, deploying, and running workflows. From left to right, the toolbar includes:"}),"\n",(0,o.jsx)(n.h3,{id:"editing-functions",children:"Editing functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Copy"}),": Copy the currently selected nodes to the clipboard."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Paste"}),": Paste nodes from the clipboard onto the canvas (if applicable)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Undo"}),": Undo the last action."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Redo"}),": Redo the last action."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"More Actions"}),": Access additional editing options such as project settings."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"running-functions",children:"Running functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Run"}),": Execute the workflow from the builder, useful for testing."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Deploy"}),": Deploy the workflow to the robot, enabling it to run on the physical device."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"view-functions",children:"View functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Zoom In"}),": Increase the canvas zoom level."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Zoom Out"}),": Decrease the canvas zoom level."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Fit"}),": Adjust the canvas to fit the window."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Minimap"}),": Toggle the minimap on the canvas, useful for navigating large workflows."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The Fourier Builder UI provides a comprehensive and intuitive platform for constructing and managing robotic workflows. With its organized layout and versatile tools, users can efficiently create, simulate, and deploy complex workflows. Each section of the UI, from the Workflow Canvas to the Simulation Panel, is designed to streamline the development process and enhance productivity."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9310:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/config-node-f84ec6f6f21a5264f7d1492241db31cf.png"},1846:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/ui-layout-f73e2faef807fe0d1a05b440b3e71c60.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);