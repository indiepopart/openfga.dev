"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[3151],{31765:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(85893),s=n(11151),t=n(5270),l=n(74866),d=n(85162);const a={title:"Perform a Check",sidebar_position:4,slug:"/getting-started/perform-check",description:"Checking if a user is authorized to perform an action on a resource"},c="Perform a Check",o={id:"content/getting-started/perform-check",title:"Perform a Check",description:"Checking if a user is authorized to perform an action on a resource",source:"@site/docs/content/getting-started/perform-check.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/perform-check",permalink:"/pr-preview/pr-669/docs/getting-started/perform-check",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/perform-check.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Perform a Check",sidebar_position:4,slug:"/getting-started/perform-check",description:"Checking if a user is authorized to perform an action on a resource"},sidebar:"docs",previous:{title:"Update Relationship Tuples",permalink:"/pr-preview/pr-669/docs/getting-started/update-tuples"},next:{title:"Perform a List Objects call",permalink:"/pr-preview/pr-669/docs/getting-started/perform-list-objects"}},h={},p=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Configure the <ProductName></ProductName> API Client",id:"01-configure-the--api-client",level:3},{value:"02. Calling Check API",id:"02-calling-check-api",level:3},{value:"Related Sections",id:"related-sections",level:2}];function u(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"perform-a-check",children:"Perform a Check"}),"\n",(0,i.jsx)(t.AH,{}),"\n",(0,i.jsxs)(r.p,{children:["This section will illustrate how to perform a ",(0,i.jsx)(t.uH,{section:"what-is-a-check-request",linkName:"check"})," request to determine whether a ",(0,i.jsx)(t.uH,{section:"what-is-a-user",linkName:"user"})," has a certain ",(0,i.jsx)(t.uH,{section:"what-is-a-relationship",linkName:"relationship"})," with an ",(0,i.jsx)(t.uH,{section:"what-is-an-object",linkName:"object"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,i.jsxs)(l.Z,{groupId:"languages",children:[(0,i.jsx)(d.Z,{value:t.eU.JS_SDK,label:t.UB.get(t.eU.JS_SDK),children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(t.YY,{}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsx)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(r.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(r.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have loaded ",(0,i.jsx)(r.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(r.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(d.Z,{value:t.eU.GO_SDK,label:t.UB.get(t.eU.GO_SDK),children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(t.YY,{}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsx)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(r.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(r.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have loaded ",(0,i.jsx)(r.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(r.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(d.Z,{value:t.eU.DOTNET_SDK,label:t.UB.get(t.eU.DOTNET_SDK),children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(t.YY,{}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsx)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(r.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(r.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have loaded ",(0,i.jsx)(r.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(r.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(d.Z,{value:t.eU.PYTHON_SDK,label:t.UB.get(t.eU.PYTHON_SDK),children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(t.YY,{}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsx)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(r.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(r.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have loaded ",(0,i.jsx)(r.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(r.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(d.Z,{value:t.eU.JAVA_SDK,label:t.UB.get(t.eU.JAVA_SDK),children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(t.YY,{}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsx)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/install-sdk",children:"installed the SDK"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(r.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(r.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have loaded ",(0,i.jsx)(r.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(r.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(d.Z,{value:t.eU.CLI,label:t.UB.get(t.eU.CLI),children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(t.YY,{}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(r.em,{children:"authorization model"})]}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have loaded ",(0,i.jsx)(r.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(r.code,{children:"FGA_SERVER_URL"})," as environment variables."]}),"\n"]})}),(0,i.jsx)(d.Z,{value:t.eU.CURL,label:t.UB.get(t.eU.CURL),children:(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(t.YY,{}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["You have ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/configure-model",children:["configured the ",(0,i.jsx)(r.em,{children:"authorization model"})]})," and ",(0,i.jsxs)(r.a,{href:"/pr-preview/pr-669/docs/getting-started/update-tuples",children:["updated the ",(0,i.jsx)(r.em,{children:"relationship tuples"})]}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["You have loaded ",(0,i.jsx)(r.code,{children:"FGA_STORE_ID"})," and ",(0,i.jsx)(r.code,{children:"FGA_API_HOST"})," as environment variables."]}),"\n"]})})]}),"\n",(0,i.jsx)(r.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,i.jsxs)(r.p,{children:["Assume that you want to check whether user ",(0,i.jsx)(r.code,{children:"anne"})," has relationship ",(0,i.jsx)(r.code,{children:"reader"})," with object ",(0,i.jsx)(r.code,{children:"document:Z"})]}),"\n",(0,i.jsxs)(r.h3,{id:"01-configure-the--api-client",children:["01. Configure the ",(0,i.jsx)(t.rZ,{format:t.v7.ShortForm})," API Client"]}),"\n",(0,i.jsx)(r.p,{children:"Before calling the check API, you will need to configure the API client."}),"\n",(0,i.jsxs)(l.Z,{groupId:"languages",children:[(0,i.jsx)(d.Z,{value:t.eU.JS_SDK,label:t.UB.get(t.eU.JS_SDK),children:(0,i.jsx)(t.j3,{lang:t.eU.JS_SDK})}),(0,i.jsx)(d.Z,{value:t.eU.GO_SDK,label:t.UB.get(t.eU.GO_SDK),children:(0,i.jsx)(t.j3,{lang:t.eU.GO_SDK})}),(0,i.jsx)(d.Z,{value:t.eU.DOTNET_SDK,label:t.UB.get(t.eU.DOTNET_SDK),children:(0,i.jsx)(t.j3,{lang:t.eU.DOTNET_SDK})}),(0,i.jsx)(d.Z,{value:t.eU.PYTHON_SDK,label:t.UB.get(t.eU.PYTHON_SDK),children:(0,i.jsx)(t.j3,{lang:t.eU.PYTHON_SDK})}),(0,i.jsx)(d.Z,{value:t.eU.JAVA_SDK,label:t.UB.get(t.eU.JAVA_SDK),children:(0,i.jsx)(t.j3,{lang:t.eU.JAVA_SDK})}),(0,i.jsx)(d.Z,{value:t.eU.CLI,label:t.UB.get(t.eU.CLI),children:(0,i.jsx)(t.j3,{lang:t.eU.CLI})}),(0,i.jsxs)(d.Z,{value:t.eU.CURL,label:t.UB.get(t.eU.CURL),children:[(0,i.jsxs)(r.p,{children:["To obtain the ",(0,i.jsx)(r.a,{href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-client-credentials-flow",children:"access token"}),":"]}),(0,i.jsx)(t.j3,{lang:t.eU.CURL})]})]}),"\n",(0,i.jsx)(r.h3,{id:"02-calling-check-api",children:"02. Calling Check API"}),"\n",(0,i.jsxs)(r.p,{children:["To check whether user ",(0,i.jsx)(r.code,{children:"user:anne"})," has relationship ",(0,i.jsx)(r.code,{children:"reader"})," with object ",(0,i.jsx)(r.code,{children:"document:Z"})]}),"\n",(0,i.jsx)(t.uT,{user:"user:anne",relation:"reader",object:"document:Z",allowed:!0,skipSetup:!0,allowedLanguages:[t.eU.JS_SDK,t.eU.GO_SDK,t.eU.DOTNET_SDK,t.eU.PYTHON_SDK,t.eU.JAVA_SDK,t.eU.CLI,t.eU.CURL]}),"\n",(0,i.jsxs)(r.p,{children:["The result's ",(0,i.jsx)(r.code,{children:"allowed"})," field will return ",(0,i.jsx)(r.code,{children:"true"})," if the relationship exists and ",(0,i.jsx)(r.code,{children:"false"})," if the relationship does not exist."]}),"\n",(0,i.jsx)(r.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,i.jsx)(t.$q,{description:"Take a look at the following section for more on how to perform authorization checks in your system",relatedLinks:[{title:"{ProductName} Check API",description:"Read the Check API documentation and see how it works.",link:"/api/service#Relationship%20Queries/Check"}]})]})}function j(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);