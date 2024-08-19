"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[2005],{3112:(e,n,o)=>{o.r(n),o.d(n,{CH:()=>p,assets:()=>h,chCodeConfig:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>d,toc:()=>g});var t=o(4848),l=o(8453),r=o(4754),s=o(3554),i=o.n(s);const a={title:"Global Variables",sidebar_position:0,slug:"/settings-global-variables"},c=void 0,d={id:"Settings/settings-global-variables",title:"Global Variables",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/Settings/settings-global-variables.md",sourceDirName:"Settings",slug:"/settings-global-variables",permalink:"/settings-global-variables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Global Variables",sidebar_position:0,slug:"/settings-global-variables"},sidebar:"defaultSidebar",previous:{title:"Railway",permalink:"/deployment-railway"},next:{title:"Project & General Settings",permalink:"/settings-project-general-settings"}},h={},p={annotations:r.hk,InlineCode:r.R0,Code:r.Cy},u={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},g=[{value:"Create and Add a Global Variable",id:"3543d5ef00eb453aa459b97ba85501e5",level:3},{value:"Configure Environment Variables in your .env file",id:"76844a93dbbc4d1ba551ea1a4a89ccdd",level:3},{value:"Precautions",id:"precautions",level:3}];function b(e){const n={admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return p||F("CH",!1),p.Code||F("CH.Code",!0),p.InlineCode||F("CH.InlineCode",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,t.jsx)(n.p,{children:"Global Variables are a useful feature of Langflow, allowing you to define reusable variables accessed from any Text field in your project."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"TL;DR"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Global Variables are reusable variables accessible from any Text field in your project."}),"\n",(0,t.jsxs)(n.li,{children:["To create one, click the \ud83c\udf10 button in a Text field and then ",(0,t.jsx)(n.strong,{children:"+ Add New Variable"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Define the ",(0,t.jsx)(n.strong,{children:"Name"}),", ",(0,t.jsx)(n.strong,{children:"Type"}),", and ",(0,t.jsx)(n.strong,{children:"Value"})," of the variable."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Variable"})," to create it."]}),"\n",(0,t.jsx)(n.li,{children:"All Credential Global Variables are encrypted and accessible only by you."}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(p.InlineCode,{codeConfig:u,code:{lines:[{tokens:[{content:"LANGFLOW_STORE_ENVIRONMENT_VARIABLES",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_STORE_ENVIRONMENT_VARIABLES"})," to ",(0,t.jsx)(p.InlineCode,{codeConfig:u,code:{lines:[{tokens:[{content:"true",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"true"})," in your ",(0,t.jsx)(n.code,{children:".env"})," file to add all variables in ",(0,t.jsx)(p.InlineCode,{codeConfig:u,code:{lines:[{tokens:[{content:"LANGFLOW_VARIABLES_TO_GET_FROM_ENVIRONMENT",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_VARIABLES_TO_GET_FROM_ENVIRONMENT"})," to your user's Global Variables."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3543d5ef00eb453aa459b97ba85501e5",children:"Create and Add a Global Variable"}),"\n",(0,t.jsxs)(n.p,{children:["To create and add a global variable, click the \ud83c\udf10 button in a Text field, and then click ",(0,t.jsx)(n.strong,{children:"+ Add New Variable"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Text fields are where you write text without opening a Text area, and are identified with the \ud83c\udf10 icon."}),"\n",(0,t.jsxs)(n.p,{children:["For example, to create an environment variable for the ",(0,t.jsx)(n.strong,{children:"OpenAI"})," component:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.strong,{children:"OpenAI API Key"})," text field, click the \ud83c\udf10 button, then ",(0,t.jsx)(n.strong,{children:"Add New Variable"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Enter ",(0,t.jsx)(n.code,{children:"openai_api_key"})," in the ",(0,t.jsx)(n.strong,{children:"Variable Name"})," field."]}),"\n",(0,t.jsxs)(n.li,{children:["Paste your OpenAI API Key (",(0,t.jsx)(n.code,{children:"sk-..."}),") in the ",(0,t.jsx)(n.strong,{children:"Value"})," field."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Credential"})," for the ",(0,t.jsx)(n.strong,{children:"Type"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.strong,{children:"OpenAI API Key"})," in the ",(0,t.jsx)(n.strong,{children:"Apply to Fields"})," field to apply this variable to all fields named ",(0,t.jsx)(n.strong,{children:"OpenAI API Key"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Variable"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You now have a ",(0,t.jsx)(n.code,{children:"openai_api_key"})," global environment variable for your Langflow project.\nSubsequently, clicking the \ud83c\udf10 button in a Text field will display the new variable in the dropdown."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You can also create global variables in Settings > Variables and Secrets."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(1848).A+"",width:"1236",height:"1240"})}),"\n",(0,t.jsxs)(n.p,{children:["To view and manage your project's global environment variables, visit ",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"Variables and Secrets"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"76844a93dbbc4d1ba551ea1a4a89ccdd",children:"Configure Environment Variables in your .env file"}),"\n",(0,t.jsxs)(n.p,{children:["Setting ",(0,t.jsx)(n.code,{children:"LANGFLOW_STORE_ENVIRONMENT_VARIABLES"})," to ",(0,t.jsx)(n.code,{children:"true"})," in your ",(0,t.jsx)(n.code,{children:".env"})," file (default) adds all variables in ",(0,t.jsx)(n.code,{children:"LANGFLOW_VARIABLES_TO_GET_FROM_ENVIRONMENT"})," to your user's Global Variables."]}),"\n",(0,t.jsx)(n.p,{children:"These variables are accessible like any other Global Variable."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["To prevent this behavior, set ",(0,t.jsx)(n.code,{children:"LANGFLOW_STORE_ENVIRONMENT_VARIABLES"})," to ",(0,t.jsx)(n.code,{children:"false"})," in your ",(0,t.jsx)(n.code,{children:".env"})," file."]})}),"\n",(0,t.jsxs)(n.p,{children:["You can specify variables to get from the environment by listing them in ",(0,t.jsx)(n.code,{children:"LANGFLOW_VARIABLES_TO_GET_FROM_ENVIRONMENT"}),", as a comma-separated list (e.g., ",(0,t.jsx)(p.InlineCode,{codeConfig:u,code:{lines:[{tokens:[{content:"VARIABLE1",props:{style:{color:"#79C0FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:"VARIABLE2",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"VARIABLE1, VARIABLE2"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"The default list of variables includes the ones below and more:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ANTHROPIC_API_KEY"}),"\n",(0,t.jsx)(n.li,{children:"ASTRA_DB_API_ENDPOINT"}),"\n",(0,t.jsx)(n.li,{children:"ASTRA_DB_APPLICATION_TOKEN"}),"\n",(0,t.jsx)(n.li,{children:"AZURE_OPENAI_API_KEY"}),"\n",(0,t.jsx)(n.li,{children:"AZURE_OPENAI_API_DEPLOYMENT_NAME"}),"\n",(0,t.jsx)(n.li,{children:"AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME"}),"\n",(0,t.jsx)(n.li,{children:"AZURE_OPENAI_API_INSTANCE_NAME"}),"\n",(0,t.jsx)(n.li,{children:"AZURE_OPENAI_API_VERSION"}),"\n",(0,t.jsx)(n.li,{children:"COHERE_API_KEY"}),"\n",(0,t.jsx)(n.li,{children:"GOOGLE_API_KEY"}),"\n",(0,t.jsx)(n.li,{children:"GROQ_API_KEY"}),"\n",(0,t.jsx)(n.li,{children:"HUGGINGFACEHUB_API_TOKEN"}),"\n",(0,t.jsx)(n.li,{children:"OPENAI_API_KEY"}),"\n",(0,t.jsx)(n.li,{children:"PINECONE_API_KEY"}),"\n",(0,t.jsx)(n.li,{children:"SEARCHAPI_API_KEY"}),"\n",(0,t.jsx)(n.li,{children:"SERPAPI_API_KEY"}),"\n",(0,t.jsx)(n.li,{children:"UPSTASH_VECTOR_REST_URL"}),"\n",(0,t.jsx)(n.li,{children:"UPSTASH_VECTOR_REST_TOKEN"}),"\n",(0,t.jsx)(n.li,{children:"VECTARA_CUSTOMER_ID"}),"\n",(0,t.jsx)(n.li,{children:"VECTARA_CORPUS_ID"}),"\n",(0,t.jsx)(n.li,{children:"VECTARA_API_KEY"}),"\n"]}),"\n",(0,t.jsx)(i(),{controls:!0,url:"https://youtu.be/RedPOCsYNAM"}),"\n",(0,t.jsx)(n.h3,{id:"precautions",children:"Precautions"}),"\n",(0,t.jsx)(n.p,{children:"Global variables are stored in the database, and their values are protected by encryption using a secret\nkey. To preserve access to your global variables and avoid losing them, you should take a few precautions:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Keep your secret key safe: Even if your database is secure, it won\u2019t be of much use if you can't decrypt\nthe values. Ideally, you can set your own secret key using the ",(0,t.jsx)(n.code,{children:"LANGFLOW_SECRET_KEY"})," environment variable. If\nyou don't provide a custom value for the secret key, one will be generated randomly and saved in the Langflow\ninstallation directory."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["We use SQLite as the default database, and Langflow saves the database file in the installation directory.\nTo ensure the security of your data, it\u2019s a good practice to regularly back up this file. If needed, you can\nalso change the database location by setting the ",(0,t.jsx)(n.code,{children:"LANGFLOW_SAVE_DB_IN_CONFIG_DIR"})," environment variable to true\nand configuring ",(0,t.jsx)(n.code,{children:"LANGFLOW_CONFIG_DIR"})," to point to a directory of your choice. Alternatively, you can opt to use\nan external database such as PostgreSQL, in which case these configurations are no longer necessary."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For your convenience, if you\u2019re running Langflow directly on your system or in a virtual environment\nvia a pip installation, you can set these values by providing Langflow with a .env file containing these\nenvironment variables, using the following command:"}),"\n",(0,t.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"--env-file ",props:{style:{color:"#79C0FF"}}},{content:".env",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsx)(n.p,{children:"If you\u2019re running Langflow in a Docker container, you can set these values by providing Langflow with:"}),"\n",(0,t.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"        --privileged \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"        --user ",props:{style:{color:"#79C0FF"}}},{content:"1000:",props:{style:{color:"#A5D6FF"}}},{content:"0 \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"        -p ",props:{style:{color:"#79C0FF"}}},{content:"7860:",props:{style:{color:"#A5D6FF"}}},{content:"7860 \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"        -e ",props:{style:{color:"#79C0FF"}}},{content:"LANGFLOW_SECRET_KEY=",props:{style:{color:"#A5D6FF"}}},{content:"<",props:{style:{color:"#FF7B72"}}},{content:"YOUR_SECRET_KEY_VALU",props:{style:{color:"#A5D6FF"}}},{content:"E",props:{style:{color:"#C9D1D9"}}},{content:"> ",props:{style:{color:"#FF7B72"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"        -e ",props:{style:{color:"#79C0FF"}}},{content:"LANGFLOW_SAVE_DB_IN_CONFIG_DIR=",props:{style:{color:"#A5D6FF"}}},{content:"true \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"        -e ",props:{style:{color:"#79C0FF"}}},{content:"LANGFLOW_CONFIG_DIR=/app/container_path ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"        -v ",props:{style:{color:"#79C0FF"}}},{content:"$(",props:{style:{color:"#A5D6FF"}}},{content:"PWD",props:{style:{color:"#FFA657"}}},{content:")/your_path:/app/container_path ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"        langflowai/langflow:latest",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(p.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"\t--privileged \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"\t--user ",props:{style:{color:"#79C0FF"}}},{content:"1000:",props:{style:{color:"#A5D6FF"}}},{content:"0 \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"\t-p ",props:{style:{color:"#79C0FF"}}},{content:"7860:",props:{style:{color:"#A5D6FF"}}},{content:"7860 \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"\t--env-file ",props:{style:{color:"#79C0FF"}}},{content:".env ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"\t-v ",props:{style:{color:"#79C0FF"}}},{content:"$(",props:{style:{color:"#A5D6FF"}}},{content:"PWD",props:{style:{color:"#FFA657"}}},{content:")/your_path:/app/container_path ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    langflowai/langflow:latest",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]})]})}function y(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}function F(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1848:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/418277339-098b93e44d60be390c71469029fb4910.png"}}]);