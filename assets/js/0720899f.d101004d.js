"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[2198],{84086:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n(6737),s=["components"],l={sidebar_position:3,slug:"/writing-data/managing-user-access"},d="Managing User Access",c={unversionedId:"content/writing-data/managing-user-access",id:"content/writing-data/managing-user-access",title:"Managing User Access",description:"In this guide you will learn how to give a  access to a particular .",source:"@site/docs/content/writing-data/managing-user-access.mdx",sourceDirName:"content/writing-data",slug:"/writing-data/managing-user-access",permalink:"/writing-data/managing-user-access",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/writing-data/managing-user-access.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/writing-data/managing-user-access"},sidebar:"docs",previous:{title:"Interacting with the API",permalink:"/writing-data"},next:{title:"Managing Group Access",permalink:"/writing-data/managing-group-access"}},p={},u=[{value:"Before you start",id:"before-you-start",level:2},{value:"Modeling Basics",id:"modeling-basics",level:3},{value:"<ProductName format={ProductNameFormat.ShortForm}/> Concepts",id:"-concepts",level:3},{value:"Step by Step",id:"step-by-step",level:2},{value:"01. Adding direct relationship",id:"01-adding-direct-relationship",level:3},{value:"02. Removing direct relationship",id:"02-removing-direct-relationship",level:3},{value:"Related Sections",id:"related-sections",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"managing-user-access"},"Managing User Access"),(0,o.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"In this guide you will learn how to give a ",(0,o.kt)(r.uH,{section:"what-is-a-user",linkName:"user",mdxType:"ProductConcept"})," access to a particular ",(0,o.kt)(r.uH,{section:"what-is-an-object",linkName:"object",mdxType:"ProductConcept"}),"."),(0,o.kt)(r.S1,{title:"When to use",appearance:"filled",description:(0,o.kt)("div",null,(0,o.kt)("p",null,"Granting access with a ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple",mdxType:"ProductConcept"}))," is a core part of ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"}),". Without any relationship tuples, any ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)(r.uH,{section:"what-is-a-check-request",linkName:"check",mdxType:"ProductConcept"}))," will fail. You should use:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"authorization model")," to represent what ",(0,o.kt)("strong",{parentName:"li"},"relation"),"s are possible between the users and objects in your system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"relationship tuples")," to represent the facts about the relationships between users and objects in your system."))),mdxType:"CardBox"}),(0,o.kt)("h2",{id:"before-you-start"},"Before you start"),(0,o.kt)("p",null,"In order to understand this guide correctly you must be familiar with some ",(0,o.kt)(r.uH,{mdxType:"ProductConcept"})," and know how to develop the things that we will list below."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("p",null,"Assume that you have the following ",(0,o.kt)(r.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),".",(0,o.kt)("br",null),"\nYou have a ",(0,o.kt)(r.uH,{section:"what-is-a-type",linkName:"type",mdxType:"ProductConcept"})," called ",(0,o.kt)("inlineCode",{parentName:"p"},"tweet")," that can have a ",(0,o.kt)("inlineCode",{parentName:"p"},"reader"),".")),(0,o.kt)(r.lG,{configuration:{type_definitions:[{type:"tweet",relations:{reader:{this:{}}}}]},mdxType:"AuthzModelSnippetViewer"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In addition, you will need to know the following:"),(0,o.kt)("h3",{id:"modeling-basics"},"Modeling Basics"),(0,o.kt)("p",null,"You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,o.kt)("a",{parentName:"p",href:"/modeling/basics/modeling-basics"},"Learn more \u2192")),(0,o.kt)("h3",{id:"-concepts"},(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between objects of this type and other users in the system"),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)(r.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)(r.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})))),(0,o.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,o.kt)("h3",{id:"01-adding-direct-relationship"},"01. Adding direct relationship"),(0,o.kt)("p",null,"For our application, we will give user Anne the ",(0,o.kt)("inlineCode",{parentName:"p"},"reader")," relationship to a particular ",(0,o.kt)("inlineCode",{parentName:"p"},"tweet"),". To do so we add a tuple as follows:"),(0,o.kt)(r.Wz,{relationshipTuples:[{_description:"Anne can read tweet:1",user:"anne",relation:"reader",object:"tweet:1"}],mdxType:"RelationshipTuplesViewer"}),(0,o.kt)("p",null,"With the above, we have added a ",(0,o.kt)("a",{parentName:"p",href:"/modeling/concepts/direct-relationships"},(0,o.kt)("strong",{parentName:"a"},"direct")," relationship")," between Anne and ",(0,o.kt)("inlineCode",{parentName:"p"},"tweet:1"),". When we call the Check API to see if Anne has a ",(0,o.kt)("inlineCode",{parentName:"p"},"reader")," relationship, ",(0,o.kt)(r.rZ,{format:r.v7.ShortForm,mdxType:"ProductName"})," will say yes."),(0,o.kt)(r.uT,{user:"anne",relation:"reader",object:"tweet:1",allowed:!0,mdxType:"CheckRequestViewer"}),(0,o.kt)("h3",{id:"02-removing-direct-relationship"},"02. Removing direct relationship"),(0,o.kt)("p",null,"Now let's change this so that Anne no longer has a ",(0,o.kt)("inlineCode",{parentName:"p"},"reader")," relationship to ",(0,o.kt)("inlineCode",{parentName:"p"},"tweet:1")," by deleting the tuple:"),(0,o.kt)(r.Gb,{deleteRelationshipTuples:[{user:"anne",relation:"reader",object:"tweet:1"}],mdxType:"WriteRequestViewer"}),(0,o.kt)("p",null,"With this, we have removed the ",(0,o.kt)("a",{parentName:"p",href:"/modeling/concepts/direct-relationships"},"direct relationship")," between Anne and ",(0,o.kt)("inlineCode",{parentName:"p"},"tweet:1"),". And because our type definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"reader")," does not include any other relations, a call to the Check API will now return a negative response."),(0,o.kt)(r.uT,{user:"anne",relation:"reader",object:"tweet:1",allowed:!1,mdxType:"CheckRequestViewer"}),(0,o.kt)("h2",{id:"related-sections"},"Related Sections"),(0,o.kt)(r.$q,{description:"Check the following sections for more on how to manage user access.",relatedLinks:[{title:"Modeling Basics",description:"Learn about how to model granting user access to an object.",link:"/modeling/basics/modeling-basics",id:"../modeling/basics/modeling-basics.mdx"},{title:"Modeling Public Access",description:"Learn about how to model granting public access.",link:"/modeling/basics/public-access",id:"../modeling/basics/public-access"},{title:"How to update relationship tuples",description:"Learn about how to update relationship tuples in SDK.",link:"/integration/update-tuples",id:"../integration/update-tuples"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);