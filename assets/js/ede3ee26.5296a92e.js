"use strict";(self.webpackChunkluban_docs=self.webpackChunkluban_docs||[]).push([[954],{7646:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(4848),r=t(8453);const s={sidebar_position:3},i="Robot Control",l={id:"workflow/robot-control/index",title:"Robot Control",description:"We offer a comprehensive suite of nodes to control robots at various levels of abstraction. These nodes are divided into high-level control (Robot Control) for general commands and low-level control (Motor Control) for detailed, precise operations. By understanding and utilizing these nodes, you can achieve robust and precise control over your robotic systems.",source:"@site/docs/5-workflow/3-robot-control/index.mdx",sourceDirName:"5-workflow/3-robot-control",slug:"/workflow/robot-control/",permalink:"/docs/workflow/robot-control/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Logic Control",permalink:"/docs/workflow/logic-control/"},next:{title:"Data Processing",permalink:"/docs/workflow/data-processing/"}},c={},d=[{value:"Motor Control",id:"motor-control",level:2},{value:"Supported Motor Control Nodes",id:"supported-motor-control-nodes",level:3},{value:"Robot Control",id:"robot-control-1",level:2},{value:"Supported Robot Control Nodes",id:"supported-robot-control-nodes",level:3}];function a(o){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"robot-control",children:"Robot Control"}),"\n",(0,n.jsx)(e.p,{children:"We offer a comprehensive suite of nodes to control robots at various levels of abstraction. These nodes are divided into high-level control (Robot Control) for general commands and low-level control (Motor Control) for detailed, precise operations. By understanding and utilizing these nodes, you can achieve robust and precise control over your robotic systems."}),"\n",(0,n.jsx)(e.h2,{id:"motor-control",children:"Motor Control"}),"\n",(0,n.jsx)(e.p,{children:"Motor Control encompasses low-level commands aligned with the functions provided by the Robot SDK. Given that robot actions typically involve multiple motors, it is crucial to handle these controls accurately to avoid damage to the robot or its environment. Users must be familiar with motor IDs and their respective value ranges to ensure correct and conflict-free commands."}),"\n",(0,n.jsx)(e.h3,{id:"supported-motor-control-nodes",children:"Supported Motor Control Nodes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Disable All Motors"}),": Resets the upper limb motors to the zero position and then disables them."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Disable Hand"}),": Disables the robot's hand for individual control."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Disable Motor"}),": Disables a specified motor."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Enable All Motors"}),": Enables all upper limb motors."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Enable Hand"}),": Enables the robot's hand for individual control."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Enable Motor"}),": Enables a specified motor."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Get Hand Position"}),": Retrieves the current position of the robot's hand."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Get Motor Limit List"}),": Fetches the motor limits."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Get Motor PVC"}),": Retrieves the position, velocity, and current for a specified motor."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Motor"}),": Directly controls a specified motor."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Move Joints"}),": Moves joints to specified positions, taking motor limits into account."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Move Joints By Interpolation"}),": Smoothly performs joint movements using interpolation."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Move Joints Smoothly By Time"}),": Performs joint movements smoothly within a specified time frame using interpolation."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Set Motor PD Flag"}),": Sets the PD (Proportional-Derivative) mode for a specific motor."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Set Motor PD Parameters"}),": Configures the parameters for PD control mode for a specific motor."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"robot-control-1",children:"Robot Control"}),"\n",(0,n.jsx)(e.p,{children:"Robot Control nodes offer high-level commands for managing robotic systems. These nodes abstract complex actions into simple commands, making it easier to focus on overall behavior rather than intricate motor details."}),"\n",(0,n.jsx)(e.h3,{id:"supported-robot-control-nodes",children:"Supported Robot Control Nodes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Body"}),": Commands for controlling the robot's body movements."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Head"}),": Commands for controlling the robot's head movements."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Humanoid Robot"}),": Initializes a humanoid robot control scheme."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Lower Body Action"}),": Controls movements of the humanoid robot's lower body."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Stand"}),": Commands the robot to stand up from a resting or other positions."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Start"}),": Initiates the process to reset, zero, or calibrate the robot, setting it to its initial state."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Stop"}),": Safely powers down the robot."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Upper Body Action"}),": Controls movements of the humanoid robot's upper body."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Walk"}),": Commands for controlling the robot's walking behavior."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"By combining these nodes effectively, you can precisely control the robot at both high and low levels, ensuring robust performance and adaptability in various applications."})]})}function h(o={}){const{wrapper:e}={...(0,r.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(a,{...o})}):a(o)}},8453:(o,e,t)=>{t.d(e,{R:()=>i,x:()=>l});var n=t(6540);const r={},s=n.createContext(r);function i(o){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function l(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(r):o.components||r:i(o.components),n.createElement(s.Provider,{value:e},o.children)}}}]);