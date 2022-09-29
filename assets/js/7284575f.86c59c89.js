"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[6743],{31492:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var s=o(87462),i=(o(67294),o(3905)),a=o(5270);const n={sidebar_position:8,slug:"/modeling/custom-roles",description:"Model custom & dynamically changing roles in your system"},l="Custom Roles",r={unversionedId:"content/modeling/custom-roles",id:"content/modeling/custom-roles",title:"Custom Roles",description:"Model custom & dynamically changing roles in your system",source:"@site/docs/content/modeling/custom-roles.mdx",sourceDirName:"content/modeling",slug:"/modeling/custom-roles",permalink:"/docs/modeling/custom-roles",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/custom-roles.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/modeling/custom-roles",description:"Model custom & dynamically changing roles in your system"},sidebar:"docs",previous:{title:"Multiple Restrictions",permalink:"/docs/modeling/multiple-restrictions"},next:{title:"Contextual and Time-Based Authorization",permalink:"/docs/modeling/contextual-time-based-authorization"}},d={},u=[{value:"Before you start",id:"before-you-start",level:2},{value:"Initial Model",id:"initial-model",level:3},{value:"Modeling Roles and Permissions",id:"modeling-roles-and-permissions",level:3},{value:"Modeling Object-to-Object Relationships",id:"modeling-object-to-object-relationships",level:3},{value:"Concepts &amp; Configuration Language",id:"concepts--configuration-language",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Update The Authorization Model To Add A Role Type",id:"01-update-the-authorization-model-to-add-a-role-type",level:3},{value:"02.Use Relationship Tuples To Tie The Users To The Roles",id:"02use-relationship-tuples-to-tie-the-users-to-the-roles",level:3},{value:"03. Use Relationship Tuples To Associate Permissions With The Roles",id:"03-use-relationship-tuples-to-associate-permissions-with-the-roles",level:3},{value:"04. Verify That The Authorization Model Works",id:"04-verify-that-the-authorization-model-works",level:3},{value:"Related Sections",id:"related-sections",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-roles"},"Custom Roles"),(0,i.kt)(a.AH,{mdxType:"DocumentationNotice"}),(0,i.kt)("p",null,"In this guide you'll learn how to model custom roles in your system using ",(0,i.kt)(a.rZ,{format:a.v7.ProductLink,mdxType:"ProductName"}),"."),(0,i.kt)("p",null,"For example, a Business-to-Business (B2B) application could allow customers to create their own custom roles on the application to grant their users."),(0,i.kt)(a.S1,{title:"When to use",appearance:"filled",description:(0,i.kt)("div",null,(0,i.kt)("p",null,"In many cases, roles would fit in well as relations on an object type, as seen in ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/roles-and-permissions"},"Modeling Roles and Permissions"),". In some cases, however, they may not be enough."),(0,i.kt)("p",null,"Custom roles are useful when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users of the application are able to create arbitrary sets of roles with different permissions that govern the users' access to objects."),(0,i.kt)("li",{parentName:"ul"},"It is not known beforehand (at the time of Authorization Model creation) what the application roles are."),(0,i.kt)("li",{parentName:"ul"},"The team responsible for building the authorization model is different from the teams responsible for defining roles and access to the application."))),mdxType:"CardBox"}),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"Before you start this guide, make sure you're familiar with some ",(0,i.kt)(a.uH,{mdxType:"ProductConcept"})," and know how to develop the things listed below."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",{id:"initial-model"},"Initial Model"),(0,i.kt)("p",null,"To start, let's say there is an application with a ",(0,i.kt)(a.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," called ",(0,i.kt)("inlineCode",{parentName:"p"},"asset-category"),". Users can have view and/or edit access to assets in that category. Any user who can edit can also view.")),(0,i.kt)("p",null,"We'll start with the following authorization model showing a system with an ",(0,i.kt)("inlineCode",{parentName:"p"},"asset-category")," type. This type allows users to have view and edit access to it."),(0,i.kt)(a.lG,{configuration:{type_definitions:[{type:"asset-category",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"In addition, you'll need to know the following:"),(0,i.kt)("h3",{id:"modeling-roles-and-permissions"},"Modeling Roles and Permissions"),(0,i.kt)("p",null,"You need to know how to add users to groups and grant groups access to resources. ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/user-groups"},"Learn more \u2192")),(0,i.kt)("h3",{id:"modeling-object-to-object-relationships"},"Modeling Object-to-Object Relationships"),(0,i.kt)("p",null,"You need to know how to create relationships between objects and how that might affect a user's relationships to those objects. ",(0,i.kt)("a",{parentName:"p",href:"/docs/modeling/building-blocks/object-to-object-relationships"},"Learn more \u2192")),(0,i.kt)("h3",{id:"concepts--configuration-language"},"Concepts & Configuration Language"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(a.uH,{mdxType:"ProductConcept"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/configuration-language"},"Configuration Language")))),(0,i.kt)(a.XQ,{store:"custom-roles",mdxType:"Playground"}),(0,i.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,i.kt)("p",null,"Starting with the authorization model mentioned above, we want to enable users to create their own custom roles, and tie permissions to those roles to our two users and to the permissions on the logo asset category."),(0,i.kt)("p",null,"For this guide, we'll model a scenario where a certain organization using our app has created an ",(0,i.kt)("inlineCode",{parentName:"p"},"asset-category"),' called "logos", and another called "text content".'),(0,i.kt)("p",null,"The company administrator would like to create:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"media-manager")," role that allows users to ",(0,i.kt)("strong",{parentName:"li"},"edit")," assets in the ",(0,i.kt)("strong",{parentName:"li"},"logos asset category")),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"media-viewer")," role that allows users to ",(0,i.kt)("strong",{parentName:"li"},"view")," all assets in the ",(0,i.kt)("strong",{parentName:"li"},"logos asset category")),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"blog-editor")," role that allows users to ",(0,i.kt)("strong",{parentName:"li"},"edit")," all assets in the ",(0,i.kt)("strong",{parentName:"li"},"text content asset category")),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"blog-viewer")," role that allows users to ",(0,i.kt)("strong",{parentName:"li"},"view")," all assets in the ",(0,i.kt)("strong",{parentName:"li"},"text content asset category"))),(0,i.kt)("p",null,"Imagine these are what the permissions the roles in one organization using our service are like:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image showing custom roles and permissions",src:o(72702).Z,width:"1213",height:"253"})),(0,i.kt)("p",null,"Finally, the administrator wants to assign ",(0,i.kt)("strong",{parentName:"p"},"Anne")," the ",(0,i.kt)("strong",{parentName:"p"},"media-manager")," role and ",(0,i.kt)("strong",{parentName:"p"},"Beth")," the ",(0,i.kt)("strong",{parentName:"p"},"media-viewer")," role."),(0,i.kt)("p",null,"At the end, we'll verify our model by ensuring the following access ",(0,i.kt)(a.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"})," requests return the expected result."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image showing expected results",src:o(21570).Z,width:"1213",height:"448"})),(0,i.kt)("p",null,"In order to do this, we need to:"),(0,i.kt)("ol",{className:"list-numbered-leading-zeros"},(0,i.kt)("li",null,"Update the Authorization Model to add a Role Type"),(0,i.kt)("li",null,"Use Relationship Tuples to tie the Users to the Roles"),(0,i.kt)("li",null,"Use Relationship Tuples to associate Permissions with the Roles"),(0,i.kt)("li",null,"Verify that the Authorization Model works")),(0,i.kt)("h3",{id:"01-update-the-authorization-model-to-add-a-role-type"},"01. Update The Authorization Model To Add A Role Type"),(0,i.kt)("p",null,"Because our roles are going to be dynamic and might change frequently, we represent them in a new type instead of as relations on that same type. We'll create new type called ",(0,i.kt)("inlineCode",{parentName:"p"},"role"),", where users can be related as assignee to it."),(0,i.kt)("p",null,"The authorization model becomes this:"),(0,i.kt)(a.lG,{configuration:{type_definitions:[{type:"asset-category",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}}},{type:"role",relations:{assignee:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,i.kt)("p",null,"With this change we can add relationship tuples indicating that a certain user is ",(0,i.kt)("inlineCode",{parentName:"p"},"assigned")," a certain ",(0,i.kt)("inlineCode",{parentName:"p"},"role"),"."),(0,i.kt)("h3",{id:"02use-relationship-tuples-to-tie-the-users-to-the-roles"},"02.Use Relationship Tuples To Tie The Users To The Roles"),(0,i.kt)("p",null,"Once we've added the ",(0,i.kt)("inlineCode",{parentName:"p"},"role"),' type, we can assign roles to Anne and Beth. Anne is assigned the "media-manager" role and Beth is assigned the "media-viewer" role. We can do that by adding relationship tuples as follows:'),(0,i.kt)(a.Gb,{relationshipTuples:[{_description:"Anne is assigned the media-manager role",user:"anne",relation:"assignee",object:"role:media-manager"},{_description:"Beth is assigned the media-viewer role",user:"beth",relation:"assignee",object:"role:media-viewer"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("p",null,"We can verify they are members of said roles by issuing the following check requests:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image showing expected membership checks",src:o(88956).Z,width:"1213",height:"253"})),(0,i.kt)(a.uT,{user:"anne",relation:"assignee",object:"role:media-manager",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("h3",{id:"03-use-relationship-tuples-to-associate-permissions-with-the-roles"},"03. Use Relationship Tuples To Associate Permissions With The Roles"),(0,i.kt)("p",null,"With our users and roles set up, we still need to tie members of a certain role to it's corresponding permission(s)."),(0,i.kt)(a.Gb,{relationshipTuples:[{_description:"Users assigned the media-manager role can edit in the Logos assets category",user:"role:media-manager#assignee",relation:"editor",object:"asset-category:logos"},{_description:"Users assigned the media-viewer role can view from the Logos assets category",user:"role:media-viewer#assignee",relation:"viewer",object:"asset-category:logos"}],mdxType:"WriteRequestViewer"}),(0,i.kt)("h3",{id:"04-verify-that-the-authorization-model-works"},"04. Verify That The Authorization Model Works"),(0,i.kt)("p",null,"To ensure our model works, it needs to match our expectations:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image showing expected results",src:o(21570).Z,width:"1213",height:"448"})),(0,i.kt)(a.uT,{user:"anne",relation:"editor",object:"asset-category:logos",allowed:!0,mdxType:"CheckRequestViewer"}),(0,i.kt)("p",null,"The checks come back as we expect, so our model is working correctly."),(0,i.kt)("h2",{id:"related-sections"},"Related Sections"),(0,i.kt)(a.$q,{description:"Check the following sections for more on how to model with {ProductName}.",relatedLinks:[{title:"Modeling Roles and Permissions",description:"Learn how to remove the direct relationship to indicate nonassignable permissions.",link:"./roles-and-permissions",id:"./roles-and-permissions.mdx"},{title:"Modeling Concepts: Object to Object Relationships",description:"Learn about how to model object to object relationships in {ProductName}.",link:"./building-blocks/object-to-object-relationships",id:"../building-blocks/object-to-object-relationships"}],mdxType:"RelatedSection"}))}c.isMDXComponent=!0},21570:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/custom-roles-expectations-f015ffb4203247a03815859fb0844f95.svg"},88956:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/custom-roles-membership-checks-057e971c8b2def87ea3c405352a0f100.svg"},72702:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/custom-roles-roles-and-permissions-ca8254c87a37e52fea450bdeb634b39c.svg"}}]);