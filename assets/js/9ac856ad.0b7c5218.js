"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4046],{197:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>h,assets:()=>d,chCodeConfig:()=>a,contentTitle:()=>l,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var o=t(4848),s=t(8453),i=t(4754);const r={title:"Command Line Interface (CLI)",sidebar_position:2,slug:"/configuration-cli"},l=void 0,c={id:"Configuration/configuration-cli",title:"Command Line Interface (CLI)",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/Configuration/configuration-cli.md",sourceDirName:"Configuration",slug:"/configuration-cli",permalink:"/configuration-cli",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Command Line Interface (CLI)",sidebar_position:2,slug:"/configuration-cli"},sidebar:"defaultSidebar",previous:{title:"API Keys",permalink:"/configuration-api-keys"},next:{title:"My Collection",permalink:"/365085a8-a90a-43f9-a779-f8769ec7eca1"}},d={},h={annotations:i.hk,Code:i.Cy},a={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},x=[{value:"Overview",id:"c50e5530289349cf8ed7bee22ba2211a",level:2},{value:"Options",id:"8a3b5b7ed55b4774ad6d533bb337ef47",level:3},{value:"langflow api-key",id:"dbfc8c4c83474b83a38bdc7471bccf41",level:2},{value:"Options",id:"ec2ef993dc984811b25838c8d8230b31",level:3},{value:"langflow copy-db",id:"729a13f4847545e5973d8f9c20f8833d",level:2},{value:"Options",id:"7b7e6bd02b3243218e1d666711854673",level:3},{value:"langflow migration",id:"7027c1925a444119a7a8ea2bff4bd16d",level:2},{value:"Options",id:"0b38fbe97bb34edeb7740a7db58433e9",level:3},{value:"langflow run",id:"fe050aa659cb4d33a560b859d54c94ea",level:2},{value:"Options",id:"4e811481ec9142f1b60309bb1ce5a2ce",level:3},{value:"CLI environment variables",id:"5868aaccfcc74e26968538ef4d07e756",level:3},{value:"langflow superuser",id:"5944233ce0c942878e928e1f2945d717",level:2},{value:"Options",id:"f333c5635ead4c3d95985467bb08cc8f",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return h||f("CH",!1),h.Code||f("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,o.jsx)(n.p,{children:"Langflow's Command Line Interface (CLI) is a powerful tool that allows you to interact with the Langflow server from the command line. The CLI provides a wide range of commands to help you shape Langflow to your needs."}),"\n",(0,o.jsx)(n.p,{children:"The available commands are below. Navigate to their individual sections of this page to see the parameters."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/configuration-cli",children:"langflow"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/configuration-cli",children:"langflow api-key"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/configuration-cli",children:"langflow copy-db"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/configuration-cli",children:"langflow migration"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/configuration-cli",children:"langflow run"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/configuration-cli",children:"langflow superuser"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"c50e5530289349cf8ed7bee22ba2211a",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"Running the CLI without any arguments displays a list of available options and commands."}),"\n",(0,o.jsx)(h.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow",props:{style:{color:"#FFA657"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"--help",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Command"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"api-key"})}),(0,o.jsx)(n.td,{children:"Creates an API key for the default superuser if AUTO_LOGIN is enabled."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"copy-db"})}),(0,o.jsxs)(n.td,{children:["Copy the database files to the current directory (",(0,o.jsx)(n.code,{children:"which langflow"}),")."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"migration"})}),(0,o.jsx)(n.td,{children:"Run or test migrations."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"run"})}),(0,o.jsx)(n.td,{children:"Run the Langflow."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"superuser"})}),(0,o.jsx)(n.td,{children:"Create a superuser."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"8a3b5b7ed55b4774ad6d533bb337ef47",children:"Options"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--install-completion"})}),(0,o.jsx)(n.td,{children:"Install completion for the current shell."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--show-completion"})}),(0,o.jsx)(n.td,{children:"Show completion for the current shell, to copy it or customize the installation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--help"})}),(0,o.jsx)(n.td,{children:"Show this message and exit."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"dbfc8c4c83474b83a38bdc7471bccf41",children:"langflow api-key"}),"\n",(0,o.jsxs)(n.p,{children:["Run the ",(0,o.jsx)(n.code,{children:"api-key"})," command to create an API key for the default superuser if ",(0,o.jsx)(n.code,{children:"LANGFLOW_AUTO_LOGIN"})," is set to ",(0,o.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,o.jsx)(h.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"api-key",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow api-key",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e",props:{style:{color:"#FFA657"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"API Key Created Successfully:                                       \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502                                                                     ",props:{style:{color:"#FFA657"}}},{content:"\u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"sk-O0elzoWID1izAH8RUKrnnvyyMwIzHi2Wk-uXWoNJ2Ro                      \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502                                                                     ",props:{style:{color:"#FFA657"}}},{content:"\u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"This is the only time the API key will be displayed.                \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"Make sure to store it in a secure location.                         \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502                                                                     ",props:{style:{color:"#FFA657"}}},{content:"\u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"The API key has been copied to your clipboard. Cmd + V to paste it. \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",props:{style:{color:"#FFA657"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,o.jsx)(n.h3,{id:"ec2ef993dc984811b25838c8d8230b31",children:"Options"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--log-level"}),(0,o.jsx)(n.td,{children:"TEXT"}),(0,o.jsx)(n.td,{children:"Logging level. [env var: LANGFLOW_LOG_LEVEL] [default: error]"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"--help"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"Show this message and exit."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"729a13f4847545e5973d8f9c20f8833d",children:"langflow copy-db"}),"\n",(0,o.jsxs)(n.p,{children:["Run the ",(0,o.jsx)(n.code,{children:"copy-db"})," command to copy the cached ",(0,o.jsx)(n.code,{children:"langflow.db"})," and ",(0,o.jsx)(n.code,{children:"langflow-pre.db"})," database files to the current directory."]}),"\n",(0,o.jsxs)(n.p,{children:["If the files exist in the cache directory, they will be copied to the same directory as ",(0,o.jsx)(n.code,{children:"__main__.py"}),", which can be found with ",(0,o.jsx)(n.code,{children:"which langflow"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"7b7e6bd02b3243218e1d666711854673",children:"Options"}),"\n",(0,o.jsx)(n.p,{children:"None."}),"\n",(0,o.jsx)(n.h2,{id:"7027c1925a444119a7a8ea2bff4bd16d",children:"langflow migration"}),"\n",(0,o.jsx)(n.p,{children:"Run or test migrations with the Alembic database tool."}),"\n",(0,o.jsx)(h.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"migration",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow migration",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,o.jsx)(n.h3,{id:"0b38fbe97bb34edeb7740a7db58433e9",children:"Options"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--test, --no-test"})}),(0,o.jsx)(n.td,{children:"Run migrations in test mode. [default: test]"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--fix, --no-fix"})}),(0,o.jsx)(n.td,{children:"Fix migrations. This is a destructive operation, and should only be used if you know what you are doing. [default: no-fix]"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--help"})}),(0,o.jsx)(n.td,{children:"Show this message and exit."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"fe050aa659cb4d33a560b859d54c94ea",children:"langflow run"}),"\n",(0,o.jsx)(n.p,{children:"Run Langflow."}),"\n",(0,o.jsx)(h.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"run",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow run",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,o.jsx)(n.h3,{id:"4e811481ec9142f1b60309bb1ce5a2ce",children:"Options"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--help"})}),(0,o.jsx)(n.td,{children:"Displays all available options."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--host"})}),(0,o.jsxs)(n.td,{children:["Defines the host to bind the server to. Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_HOST"})," environment variable. The default is ",(0,o.jsx)(n.code,{children:"127.0.0.1"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--workers"})}),(0,o.jsxs)(n.td,{children:["Sets the number of worker processes. Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_WORKERS"})," environment variable. The default is ",(0,o.jsx)(n.code,{children:"1"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--timeout"})}),(0,o.jsxs)(n.td,{children:["Sets the worker timeout in seconds. The default is ",(0,o.jsx)(n.code,{children:"60"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--port"})}),(0,o.jsxs)(n.td,{children:["Sets the port to listen on. Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_PORT"})," environment variable. The default is ",(0,o.jsx)(n.code,{children:"7860"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--env-file"})}),(0,o.jsxs)(n.td,{children:["Specifies the path to the .env file containing environment variables. The default is ",(0,o.jsx)(n.code,{children:".env"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--log-level"})}),(0,o.jsxs)(n.td,{children:["Defines the logging level. Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_LOG_LEVEL"})," environment variable. The default is ",(0,o.jsx)(n.code,{children:"critical"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--components-path"})}),(0,o.jsxs)(n.td,{children:["Specifies the path to the directory containing custom components. Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_COMPONENTS_PATH"})," environment variable. The default is ",(0,o.jsx)(n.code,{children:"langflow/components"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--log-file"})}),(0,o.jsxs)(n.td,{children:["Specifies the path to the log file. Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_LOG_FILE"})," environment variable. The default is ",(0,o.jsx)(n.code,{children:"logs/langflow.log"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--cache"})}),(0,o.jsxs)(n.td,{children:["Select the type of cache to use. Options are ",(0,o.jsx)(n.code,{children:"InMemoryCache"})," and ",(0,o.jsx)(n.code,{children:"SQLiteCache"}),". Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_LANGCHAIN_CACHE"})," environment variable. The default is ",(0,o.jsx)(n.code,{children:"SQLiteCache"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"--dev"}),"/",(0,o.jsx)(n.code,{children:"--no-dev"})]}),(0,o.jsxs)(n.td,{children:["Toggles the development mode. The default is ",(0,o.jsx)(n.code,{children:"no-dev"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--path"})}),(0,o.jsxs)(n.td,{children:["Specifies the path to the frontend directory containing build files. This option is for development purposes only. Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_FRONTEND_PATH"})," environment variable."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"--open-browser"}),"/",(0,o.jsx)(n.code,{children:"--no-open-browser"})]}),(0,o.jsxs)(n.td,{children:["Toggles the option to open the browser after starting the server. Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_OPEN_BROWSER"})," environment variable. The default is ",(0,o.jsx)(n.code,{children:"open-browser"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"--remove-api-keys"}),"/",(0,o.jsx)(n.code,{children:"--no-remove-api-keys"})]}),(0,o.jsxs)(n.td,{children:["Toggles the option to remove API keys from the projects saved in the database. Can be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_REMOVE_API_KEYS"})," environment variable. The default is ",(0,o.jsx)(n.code,{children:"no-remove-api-keys"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--install-completion [bash|zsh|fish|powershell|pwsh]"})}),(0,o.jsx)(n.td,{children:"Installs completion for the specified shell."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--show-completion [bash|zsh|fish|powershell|pwsh]"})}),(0,o.jsx)(n.td,{children:"Shows completion for the specified shell, allowing you to copy it or customize the installation."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--backend-only"})}),(0,o.jsxs)(n.td,{children:["This parameter, with a default value of ",(0,o.jsx)(n.code,{children:"False"}),", allows running only the backend server without the frontend. It can also be set using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_BACKEND_ONLY"})," environment variable."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--store"})}),(0,o.jsxs)(n.td,{children:["This parameter, with a default value of ",(0,o.jsx)(n.code,{children:"True"}),", enables the store features, use ",(0,o.jsx)(n.code,{children:"--no-store"})," to deactivate it. It can be configured using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_STORE"})," environment variable."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--auto-saving"})}),(0,o.jsxs)(n.td,{children:["This parameter, with a default value of ",(0,o.jsx)(n.code,{children:"True"}),", enables the auto-saving functionality, use ",(0,o.jsx)(n.code,{children:"--no-auto-saving"})," to deactivate it. It can be configured using the ",(0,o.jsx)(n.code,{children:"LANGFLOW_AUTO_SAVING"})," environment variable."]})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"5868aaccfcc74e26968538ef4d07e756",children:"CLI environment variables"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure many of the CLI options using environment variables. These can be exported in your operating system or added to a ",(0,o.jsx)(n.code,{children:".env"})," file and loaded using the ",(0,o.jsx)(n.code,{children:"--env-file"})," option."]}),"\n",(0,o.jsxs)(n.p,{children:["A sample ",(0,o.jsx)(n.code,{children:".env"})," file named ",(0,o.jsx)(n.code,{children:".env.example"})," is included with the project. Copy this file to a new file named ",(0,o.jsx)(n.code,{children:".env"})," and replace the example values with your actual settings. If you're setting values in both your OS and the ",(0,o.jsx)(n.code,{children:".env"})," file, the ",(0,o.jsx)(n.code,{children:".env"})," settings will take precedence."]}),"\n",(0,o.jsx)(n.h2,{id:"5944233ce0c942878e928e1f2945d717",children:"langflow superuser"}),"\n",(0,o.jsx)(n.p,{children:"Create a superuser for Langflow."}),"\n",(0,o.jsx)(h.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"superuser",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow superuser",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,o.jsx)(n.h3,{id:"f333c5635ead4c3d95985467bb08cc8f",children:"Options"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--username"})}),(0,o.jsx)(n.td,{children:"TEXT"}),(0,o.jsx)(n.td,{children:"Username for the superuser. [default: None] [required]"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--password"})}),(0,o.jsx)(n.td,{children:"TEXT"}),(0,o.jsx)(n.td,{children:"Password for the superuser. [default: None] [required]"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--log-level"})}),(0,o.jsx)(n.td,{children:"TEXT"}),(0,o.jsx)(n.td,{children:"Logging level. [env var: LANGFLOW_LOG_LEVEL] [default: error]"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"--help"})}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"Show this message and exit."})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);