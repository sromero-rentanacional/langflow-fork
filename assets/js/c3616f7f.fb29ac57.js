"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1917],{5542:(e,o,t)=>{t.r(o),t.d(o,{CH:()=>h,assets:()=>p,chCodeConfig:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var n=t(4848),s=t(8453),r=t(4754),i=t(3554),a=t.n(i);const c={title:"Playground",sidebar_position:1,slug:"/workspace-playground"},l=void 0,d={id:"Workspace/workspace-playground",title:"Playground",description:"The\xa0Playground\xa0is a dynamic interface designed for real-time interaction with AIs, allowing users to chat, access memories and monitor inputs and outputs. Here, users can directly prototype and their models, making adjustments and observing different outcomes.",source:"@site/docs/Workspace/workspace-playground.md",sourceDirName:"Workspace",slug:"/workspace-playground",permalink:"/workspace-playground",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Playground",sidebar_position:1,slug:"/workspace-playground"},sidebar:"defaultSidebar",previous:{title:"Workspace Overview",permalink:"/workspace"},next:{title:"API",permalink:"/workspace-api"}},p={},h={annotations:r.hk,Code:r.Cy},u={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},g=[{value:"Memory Management",id:"821a5ee2a8a44d35b49943cba630511c",level:2},{value:"Use custom Session IDs for multiple user interactions",id:"use-custom-session-ids-for-multiple-user-interactions",level:2}];function m(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return h||y("CH",!1),h.Code||y("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n",(0,n.jsxs)(o.p,{children:["The\xa0",(0,n.jsx)(o.strong,{children:"Playground"}),"\xa0is a dynamic interface designed for real-time interaction with AIs, allowing users to chat, access memories and monitor inputs and outputs. Here, users can directly prototype and their models, making adjustments and observing different outcomes."]}),"\n",(0,n.jsxs)(o.p,{children:["As long as you have an ",(0,n.jsx)(o.a,{href:"/components-io",children:"Input or Output"})," component working, you can open it up by clicking the\xa0",(0,n.jsx)(o.strong,{children:"Playground"}),"\xa0button."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:t(4032).A+"",width:"3072",height:"1728"})}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["Notice how the ",(0,n.jsx)(o.strong,{children:"Playground's"})," window arrangement changes depending on what components are being used. Langflow can be used for applications that go beyond chat-based interfaces."]})}),"\n",(0,n.jsxs)(o.p,{children:["You can also open a flow's ",(0,n.jsx)(o.strong,{children:"Playground"})," without entering its workspace. From ",(0,n.jsx)(o.strong,{children:"My\xa0Collections"})," or ",(0,n.jsx)(o.strong,{children:"Langflow Store"}),", click the\xa0",(0,n.jsx)(o.strong,{children:"Playground"}),"\xa0in one of the projects card."]}),"\n",(0,n.jsx)(a(),{controls:!0,url:"https://youtu.be/guaN0DOTxfo"}),"\n",(0,n.jsx)(o.h2,{id:"821a5ee2a8a44d35b49943cba630511c",children:"Memory Management"}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.p,{children:"Click the Memories tab to open a table of previous interactions for a specific flow."}),"\n",(0,n.jsxs)(o.p,{children:["Whenever you send a message from the ",(0,n.jsx)(o.strong,{children:"Playground"})," interface, under the\xa0",(0,n.jsx)(o.strong,{children:"Memories"})," tab you'll see a table of previous interactions for that session."]}),"\n",(0,n.jsx)(o.p,{children:"Langflow allows every chat message to be stored, and a single flow can have multiple memory sessions."}),"\n",(0,n.jsx)(o.p,{children:"Chat conversations store messages categorized by a Session ID. A single flow can host multiple Session IDs, and different flows can share the same Session ID."}),"\n",(0,n.jsx)(o.p,{children:"Individual messages in chat memory can be edited or deleted. Modifying these memories will influence the behavior of the chatbot responses."}),"\n",(0,n.jsxs)(o.p,{children:["To learn more about memories in Langflow, see\xa0",(0,n.jsx)(o.a,{href:"/guides-chat-memory",children:"Chat Memory"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"use-custom-session-ids-for-multiple-user-interactions",children:"Use custom Session IDs for multiple user interactions"}),"\n",(0,n.jsx)(o.p,{children:"Session ID values are used to track user interactions in a flow. They can be configured in the Advanced Settings of the Chat Input and Chat Output components."}),"\n",(0,n.jsx)(o.p,{children:"By default, if the Session ID value is empty, it is set to the same value as the Flow ID. This means every API call will use the same Session ID, and you\u2019ll effectively have one session."}),"\n",(0,n.jsxs)(o.p,{children:["To have more than one session in a single flow, pass a specific Session ID to a flow with the ",(0,n.jsx)(o.code,{children:"session_id"})," parameter in the URL. All the components in the flow will automatically use this ",(0,n.jsx)(o.code,{children:"session_id"})," value."]}),"\n",(0,n.jsx)(o.p,{children:"Post a message to a flow with a specific Session ID with curl:"}),"\n",(0,n.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-X ",props:{style:{color:"#79C0FF"}}},{content:"POST ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:'    "http://127.0.0.1:7860/api/v1/run/4017e9f2-1fec-4643-bb05-165a8b50c4b3?stream=false" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -H ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json' ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -d ",props:{style:{color:"#79C0FF"}}},{content:'\'{"input_value": "message",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "output_type": "chat",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "input_type": "chat",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "session_id": "YOUR_SESSION_ID"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"}'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,n.jsx)(o.p,{children:"Check your flow\u2019s Memories tab. In addition to the messages stored for the Default Session, a new chat session is started with your new Session ID."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Chat Input"})," and ",(0,n.jsx)(o.strong,{children:"Chat Output"})," components can also store a ",(0,n.jsx)(o.code,{children:"session_id"})," parameter as a ",(0,n.jsx)(o.strong,{children:"Tweak"})," for specific sessions. The Playground will still display all available sessions, but the flow will use the value stored in the ",(0,n.jsx)(o.code,{children:"session_id"})," tweak."]}),"\n",(0,n.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-X ",props:{style:{color:"#79C0FF"}}},{content:"POST ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:'    "http://127.0.0.1:7860/api/v1/run/4017e9f2-1fec-4643-bb05-165a8b50c4b3?stream=false" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -H ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json' ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -d ",props:{style:{color:"#79C0FF"}}},{content:'\'{"input_value": "message",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "output_type": "chat",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "input_type": "chat",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "tweaks": {',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'        "session_id": "YOUR_SESSION_ID"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"    }",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"}'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]})]})}function f(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}function y(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4032:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/1109547993-fa416d851502013d5a711168c269bd3b.png"}}]);