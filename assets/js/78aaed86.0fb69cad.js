"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[569],{58721:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),s=n(80966),l=["components"],r={sidebar_position:3,slug:"/modeling/public-access"},c="Public Access",d={unversionedId:"content/modeling/public-access",id:"content/modeling/public-access",title:"Public Access",description:"In this guide you will learn how to grant public access to an , such as a certain document, using .",source:"@site/docs/content/modeling/public-access.mdx",sourceDirName:"content/modeling",slug:"/modeling/public-access",permalink:"/docs/modeling/public-access",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/public-access.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/modeling/public-access"},sidebar:"docs",previous:{title:"Blocklists",permalink:"/docs/modeling/blocklists"},next:{title:"Multiple Restrictions",permalink:"/docs/modeling/multiple-restrictions"}},p={},u=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Create A Relationship Tuple",id:"01-create-a-relationship-tuple",level:3},{value:"02. Check That The Relationship Exists",id:"02-check-that-the-relationship-exists",level:3},{value:"Related Sections",id:"related-sections",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"public-access"},"Public Access"),(0,o.kt)(s.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"In this guide you will learn how to grant public access to an ",(0,o.kt)(s.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"}),", such as a certain document, using ",(0,o.kt)(s.rZ,{format:s.v7.ProductLink,mdxType:"ProductName"}),"."),(0,o.kt)(s.S1,{title:"When to use",appearance:"filled",description:(0,o.kt)("div",null,(0,o.kt)("p",null,"Public access allows your application to grant every user in the system access to an object. You would add a relationship tuple with a user as ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sharing a ",(0,o.kt)("inlineCode",{parentName:"li"},"document")," publicly to indicate that everyone can ",(0,o.kt)("inlineCode",{parentName:"li"},"view")," it"),(0,o.kt)("li",{parentName:"ul"},"a public ",(0,o.kt)("inlineCode",{parentName:"li"},"poll")," is created to indicate that anyone can ",(0,o.kt)("inlineCode",{parentName:"li"},"vote")," on it"),(0,o.kt)("li",{parentName:"ul"},"a blog ",(0,o.kt)("inlineCode",{parentName:"li"},"post")," is published and anyone should be able to ",(0,o.kt)("inlineCode",{parentName:"li"},"read")," it"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"video")," is made public for anyone to ",(0,o.kt)("inlineCode",{parentName:"li"},"watch")))),mdxType:"CardBox"}),(0,o.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,o.kt)(s.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"Assume that you have the following ",(0,o.kt)(s.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,o.kt)("br",null),"\nYou have a ",(0,o.kt)(s.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," called ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," that can have a ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," relation.")),(0,o.kt)(s.lG,{configuration:{type_definitions:[{type:"document",relations:{view:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In addition, you will need to know the following:"),(0,o.kt)("h3",{id:"direct-access"},"Direct Access"),(0,o.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,o.kt)("a",{parentName:"p",href:"/docs/modeling/direct-access"},"Learn more \u2192")),(0,o.kt)("h3",{id:"-concepts"},(0,o.kt)(s.rZ,{format:s.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(s.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(s.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(s.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)(s.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(s.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,o.kt)(s.rZ,{format:s.v7.ShortForm,mdxType:"ProductName"})),(0,o.kt)("li",{parentName:"ul"},"With ",(0,o.kt)(s.uH,{section:"how-do-i-represent-everyone",linkName:"Everyone",mdxType:"ProductConcept"}),": a ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," can be used in relationship tuples to represent every user"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to use unique ids for each object and user within your application domain when creating relationship tuples for ",(0,o.kt)(s.rZ,{format:s.v7.LongForm,mdxType:"ProductName"}),". We are using first names and simple ids to just illustrate an easy-to-follow example."))),(0,o.kt)(s.XQ,{mdxType:"Playground"}),(0,o.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,o.kt)("p",null,"In previous guides, we have shown how to indicate that objects are related to users or objects. In some cases, you might want to indicate that everyone is related to an object (for example when sharing a document publicly)."),(0,o.kt)("h3",{id:"01-create-a-relationship-tuple"},"01. Create A Relationship Tuple"),(0,o.kt)("p",null,"To do this we need to create a relationship tuple using the ",(0,o.kt)(s.uH,{section:"how-do-i-represent-everyone",linkName:"`*`",mdxType:"ProductConcept"})," syntax. The ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," syntax is used to indicate that all users and objects have a relation) to a specific object."),(0,o.kt)("p",null,"Let us create a relationship tuple that states: ",(0,o.kt)("strong",{parentName:"p"},"anyone can view document:company-psa.doc")),(0,o.kt)(s.Gb,{relationshipTuples:[{_description:"* denotes that the user is every user and object",user:"*",relation:"view",object:"document:company-psa.doc"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("h3",{id:"02-check-that-the-relationship-exists"},"02. Check That The Relationship Exists"),(0,o.kt)("p",null,"Once the above ",(0,o.kt)("em",{parentName:"p"},"relationship tuple")," is added, we can ",(0,o.kt)(s.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"})," if ",(0,o.kt)("strong",{parentName:"p"},"bob")," cab ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," ",(0,o.kt)("inlineCode",{parentName:"p"},"document"),":",(0,o.kt)("strong",{parentName:"p"},"company-psa.doc"),". ",(0,o.kt)(s.rZ,{format:s.v7.ShortForm,mdxType:"ProductName"})," will return ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "allowed": true }')," even though no relationship tuple linking ",(0,o.kt)("strong",{parentName:"p"},"bob")," to the document was added. That is because the relationship tuple with ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," as the user made it so everyone can ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," the document, making it public."),(0,o.kt)(s.uT,{user:"bob",relation:"view",object:"document:company-psa.doc",allowed:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Wildcard syntax usage")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," is a special ",(0,o.kt)(s.rZ,{format:s.v7.ShortForm,mdxType:"ProductName"})," syntax meaning ",(0,o.kt)("strong",{parentName:"p"},"everyone")," when used as a ",(0,o.kt)("em",{parentName:"p"},"user")," within a ",(0,o.kt)("em",{parentName:"p"},"relationship tuple"),". It is not a wildcard or regex expression."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"You cannot use it with a type to mean all objects in that type.")," ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:*")," does not mean all types; it means a single object with the type ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"object_id")," the string ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),"."))),(0,o.kt)("h2",{id:"related-sections"},"Related Sections"),(0,o.kt)(s.$q,{description:"Check the following sections for more on how to model with {ProductName}.",relatedLinks:[{title:"Modeling: Getting Started",description:"Learn about how to get started with modeling.",link:"./getting-started",id:"./getting-started"},{title:"Configuration Language",description:"Learn about {ProductName} Configuration Language.",link:"../configuration-language",id:"../configuration-language"},{title:"Modeling Blocklists",description:"Learn about model block lists.",link:"./blocklists",id:"./blocklists"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);