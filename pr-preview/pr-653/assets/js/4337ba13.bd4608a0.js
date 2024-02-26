"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7647],{50604:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=i(85893),o=i(11151),t=i(5270);const a={sidebar_position:3,slug:"/interacting/managing-group-access",description:"Granting a group of users access to a particular object"},r="Managing Group Access",c={id:"content/interacting/managing-group-access",title:"Managing Group Access",description:"Granting a group of users access to a particular object",source:"@site/docs/content/interacting/managing-group-access.mdx",sourceDirName:"content/interacting",slug:"/interacting/managing-group-access",permalink:"/pr-preview/pr-653/docs/interacting/managing-group-access",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/managing-group-access.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/interacting/managing-group-access",description:"Granting a group of users access to a particular object"},sidebar:"docs",previous:{title:"Managing User Access",permalink:"/pr-preview/pr-653/docs/interacting/managing-user-access"},next:{title:"Managing Group Membership",permalink:"/pr-preview/pr-653/docs/interacting/managing-group-membership"}},l={},d=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Modeling User Groups",id:"modeling-user-groups",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Adding Company To The Document",id:"01-adding-company-to-the-document",level:3},{value:"02. Adding Employee To The Company",id:"02-adding-employee-to-the-company",level:3},{value:"03. Checking An Individual Member&#39;s Access To An Object",id:"03-checking-an-individual-members-access-to-an-object",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"managing-group-access",children:"Managing Group Access"}),"\n",(0,s.jsx)(t.AH,{}),"\n",(0,s.jsx)(n.p,{children:"In this guide you will learn how to grant a group of users access to a particular object."}),"\n",(0,s.jsxs)(t.S1,{title:"When to use",appearance:"filled",children:[(0,s.jsx)(n.p,{children:"Adding a relationship tuple specifying that a group has a relation to an object is helpful in cases where you want to encompass a set of users with the same relation to an object. For example:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Grant a group of ",(0,s.jsx)(n.code,{children:"engineers"})," ",(0,s.jsx)(n.code,{children:"viewer"})," access to ",(0,s.jsx)(n.code,{children:"roadmap.doc"})]}),"\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"block_list"})," of ",(0,s.jsx)(n.code,{children:"members"})," who can't access a ",(0,s.jsx)(n.code,{children:"document"})]}),"\n",(0,s.jsxs)(n.li,{children:["Sharing a ",(0,s.jsx)(n.code,{children:"document"})," with a ",(0,s.jsx)(n.code,{children:"team"})]}),"\n",(0,s.jsxs)(n.li,{children:["Granting ",(0,s.jsx)(n.code,{children:"viewer"})," access to a ",(0,s.jsx)(n.code,{children:"photo"})," to ",(0,s.jsx)(n.code,{children:"followers"})," only"]}),"\n",(0,s.jsxs)(n.li,{children:["Making a ",(0,s.jsx)(n.code,{children:"file"})," viewable for all ",(0,s.jsx)(n.code,{children:"users"})," within an ",(0,s.jsx)(n.code,{children:"organization"})]}),"\n",(0,s.jsxs)(n.li,{children:["Restricting access from or to ",(0,s.jsx)(n.code,{children:"users"})," in a certain ",(0,s.jsx)(n.code,{children:"locale"})]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,s.jsxs)(n.p,{children:["In order to understand this guide correctly you must be familiar with some ",(0,s.jsx)(t.uH,{})," and know how to develop the things that we will list below."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsxs)("summary",{children:[(0,s.jsxs)(n.p,{children:["Assume that you have the following ",(0,s.jsx)(t.uH,{section:"what-is-an-authorization-model",linkName:"authorization model"}),".",(0,s.jsx)("br",{}),"\nYou have two ",(0,s.jsx)(t.uH,{section:"what-is-a-type",linkName:"types"}),":"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"company"})," that can have a ",(0,s.jsx)(n.code,{children:"employee"})," relation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"document"})," that can have a ",(0,s.jsx)(n.code,{children:"reader"})," relation."]}),"\n"]})]}),(0,s.jsx)(t.lG,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"company",relations:{employee:{this:{}}},metadata:{relations:{employee:{directly_related_user_types:[{type:"user"}]}}}},{type:"document",relations:{reader:{this:{}}},metadata:{relations:{reader:{directly_related_user_types:[{type:"company",relation:"employee"}]}}}}]}}),(0,s.jsx)("hr",{}),(0,s.jsx)(n.p,{children:"In addition, you will need to know the following:"}),(0,s.jsx)(n.h3,{id:"modeling-user-groups",children:"Modeling User Groups"}),(0,s.jsxs)(n.p,{children:["You need to know how to add users to groups and grant groups access to an object. ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-653/docs/modeling/user-groups",children:"Learn more \u2192"})]}),(0,s.jsxs)(n.h3,{id:"-concepts",children:[(0,s.jsx)(t.rZ,{format:t.v7.ShortForm})," Concepts"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(t.uH,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(t.uH,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(t.uH,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(t.uH,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(t.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,s.jsx)(t.rZ,{format:t.v7.ShortForm})]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,s.jsx)(n.h3,{id:"01-adding-company-to-the-document",children:"01. Adding Company To The Document"}),"\n",(0,s.jsxs)(n.p,{children:["If we want to have every ",(0,s.jsx)(n.code,{children:"employee"})," of a type ",(0,s.jsx)(n.code,{children:"company"})," have a ",(0,s.jsx)(n.code,{children:"reader"})," relationship with a particular object of type ",(0,s.jsx)(n.code,{children:"document"})," (in this case ",(0,s.jsx)(n.code,{children:"document:planning"}),"), we need to add a tuple like so:"]}),"\n",(0,s.jsx)(t.Wz,{relationshipTuples:[{_description:"Every employee in the company can read document:planning",user:"company:xyz#employee",relation:"reader",object:"document:planning"}]}),"\n",(0,s.jsx)(n.h3,{id:"02-adding-employee-to-the-company",children:"02. Adding Employee To The Company"}),"\n",(0,s.jsxs)(n.p,{children:["If we also write a tuple that says that Anne is a ",(0,s.jsx)(n.code,{children:"employee"})," of ",(0,s.jsx)(n.code,{children:"company:xyz"}),", like so:"]}),"\n",(0,s.jsx)(t.Gb,{relationshipTuples:[{user:"user:anne",relation:"employee",object:"company:xyz"}]}),"\n",(0,s.jsx)(n.h3,{id:"03-checking-an-individual-members-access-to-an-object",children:"03. Checking An Individual Member's Access To An Object"}),"\n",(0,s.jsxs)(n.p,{children:["Then a call to the Check API to see whether Anne can read ",(0,s.jsx)(n.code,{children:"document:planning"})," will return true:"]}),"\n",(0,s.jsx)(t.uT,{user:"user:anne",relation:"reader",object:"document:planning",allowed:!0}),"\n",(0,s.jsxs)(n.p,{children:["The same check for a different user Becky, however, will return false, because Becky does not have an ",(0,s.jsx)(n.code,{children:"employee"})," relationship with ",(0,s.jsx)(n.code,{children:"company:xyz"}),":"]}),"\n",(0,s.jsx)(t.uT,{user:"user:becky",relation:"reader",object:"document:planning",allowed:!1}),"\n",(0,s.jsx)(n.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,s.jsx)(t.$q,{description:"Check the following sections for more on how to model group.",relatedLinks:[{title:"Modeling User Groups",description:"Learn about how to model users and groups.",link:"../modeling/user-groups",id:"../modeling/user-groups.mdx"},{title:"Managing Group Membership",description:"Learn about managing group membership.",link:"./managing-group-membership",id:"./managing-group-membership.mdx"}]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);