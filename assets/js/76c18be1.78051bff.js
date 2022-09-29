"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[6055],{12278:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(5270);const s={title:"Search With Permissions",description:"The recommended ways to integrate FGA into your search",sidebar_position:1,slug:"/interacting/search-with-permissions"},i="Search With Permissions",l={unversionedId:"content/interacting/search-with-permissions",id:"content/interacting/search-with-permissions",title:"Search With Permissions",description:"The recommended ways to integrate FGA into your search",source:"@site/docs/content/interacting/search-with-permissions.mdx",sourceDirName:"content/interacting",slug:"/interacting/search-with-permissions",permalink:"/docs/interacting/search-with-permissions",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/search-with-permissions.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Search With Permissions",description:"The recommended ways to integrate FGA into your search",sidebar_position:1,slug:"/interacting/search-with-permissions"},sidebar:"docs",previous:{title:"How to get tuple changes",permalink:"/docs/interacting/read-tuple-changes"}},h={},c=[{value:"Possible Options",id:"possible-options",level:2},{value:"Option 1: Search, Then Check",id:"option-1-search-then-check",level:3},{value:"Option 2: Build A Local Index From Changes Endpoint, Search, Then Check",id:"option-2-build-a-local-index-from-changes-endpoint-search-then-check",level:3},{value:"Option 3: Build A List Of IDs, Then Search",id:"option-3-build-a-list-of-ids-then-search",level:3},{value:"Choosing The Best Option",id:"choosing-the-best-option",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"search-with-permissions"},"Search With Permissions"),(0,r.kt)(o.AH,{mdxType:"DocumentationNotice"}),(0,r.kt)("p",null,"Once you implement fine-grained authorization to protect your resources, search becomes a more complex problem, because the user's access to each resource now has to be validated before the resource can be shown."),(0,r.kt)("p",null,"The search problem can then be summarized as:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Given a particular search filter and a sort order, what objects can the user access"?')),(0,r.kt)("p",null,"The ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," service does not store object metadata (names of files, creation dates, time of last update, etc), which means completing any search request by filtering and sorting according to certain criteria will require data from your database."),(0,r.kt)("p",null,"The services responsible for performing these actions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filter: Your database"),(0,r.kt)("li",{parentName:"ul"},"Sort: Your database"),(0,r.kt)("li",{parentName:"ul"},"Authorize: ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"}))),(0,r.kt)("p",null,"To return the set of results that match the user's search query, you will need to get the intersection of the results from the services above."),(0,r.kt)("h2",{id:"possible-options"},"Possible Options"),(0,r.kt)("p",null,"There are three possible ways to do this:"),(0,r.kt)("h3",{id:"option-1-search-then-check"},"Option 1: Search, Then Check"),(0,r.kt)("p",null,"Pre-filter, then call ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," Check endpoint."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Filter and sort on your database."),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("a",{parentName:"li",href:"/docs/interacting/relationship-queries#check"},(0,r.kt)("inlineCode",{parentName:"a"},"/check"))," in parallel on each object returned from your database."),(0,r.kt)("li",{parentName:"ol"},"Filter out objects the user does not have access to."),(0,r.kt)("li",{parentName:"ol"},"Return the filtered result to the user.")),(0,r.kt)("h3",{id:"option-2-build-a-local-index-from-changes-endpoint-search-then-check"},"Option 2: Build A Local Index From Changes Endpoint, Search, Then Check"),(0,r.kt)("p",null,"Consume the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /changes")," endpoint to create a local index you can use to do an intersection on the two sets of results."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Call the ",(0,r.kt)(o.DC,{link:"/api/service#Relationship%20Tuples/ReadChanges",name:"{ProductName} changes API",mdxType:"UpdateProductNameInLinks"}),"."),(0,r.kt)("li",{parentName:"ol"},"For the particular authorization model version(s) you are using in production, flatten/expand the changes (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"user:anne, writer, doc:planning")," becomes two tuples: ",(0,r.kt)("inlineCode",{parentName:"li"},"user:anne, writer, doc:planning")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"user:anne, reader, doc:planning"),")."),(0,r.kt)("li",{parentName:"ol"},"Build the intersection between the objects in your database and the flattened/expanded state you created."),(0,r.kt)("li",{parentName:"ol"},"You can then call ",(0,r.kt)("inlineCode",{parentName:"li"},"/check")," on each resource in the resulting set before returning the response to filter out any resource with permissions revoked but whose authorization data has not made it into your index yet.")),(0,r.kt)("h3",{id:"option-3-build-a-list-of-ids-then-search"},"Option 3: Build A List Of IDs, Then Search"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Support for this option has not been added to ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," yet, but we will keep it here for the sake of completion.")),(0,r.kt)("p",null,"Call the ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," API to get a list of object IDs the user has access to, then run the filter restricting by the object IDs returned."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"}),"'s API to get the list of all resources a user can access."),(0,r.kt)("li",{parentName:"ol"},"Pass in the set of object IDs to the database query to limit the search."),(0,r.kt)("li",{parentName:"ol"},"Return the filtered result to the user.")),(0,r.kt)("h2",{id:"choosing-the-best-option"},"Choosing The Best Option"),(0,r.kt)("p",null,"Which option to choose among the three listed above depends on the following criteria:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Number of objects that your database can return from a search query"),(0,r.kt)("li",{parentName:"ol"},"Number of objects of a certain type the user could have access to"),(0,r.kt)("li",{parentName:"ol"},"Percentage of objects in a type the user could have access to")),(0,r.kt)("p",null,"Consider the following scenarios:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A.")," The ",(0,r.kt)("em",{parentName:"p"},"number of objects a search query could return from the database")," is ",(0,r.kt)("em",{parentName:"p"},"low"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#option-1-search-then-check"},"Search then Check"))," is the recommended solution."),(0,r.kt)("p",null,"Use-case: Situations where the search query can be optimized to return a small number of results."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"B.")," The ",(0,r.kt)("em",{parentName:"p"},"number of objects of a certain type the user could have access to")," is ",(0,r.kt)("em",{parentName:"p"},"low"),", and the ",(0,r.kt)("em",{parentName:"p"},"percentage of objects in a namespace a user could have access to")," is ",(0,r.kt)("em",{parentName:"p"},"high"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#option-1-search-then-check"},"Search then Check"))," is recommended to get the final list of results."),(0,r.kt)("p",null,"Note that this use case, because the user has access to a low number of objects which are still a high percentage of the total objects in the system, that means that the total number of objects in the system is low."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"C.")," The ",(0,r.kt)("em",{parentName:"p"},"number of objects of a certain type the user could have access to")," is ",(0,r.kt)("em",{parentName:"p"},"low")," (~ 100), and the ",(0,r.kt)("em",{parentName:"p"},"percentage of the total objects that the user can have access to")," is also ",(0,r.kt)("em",{parentName:"p"},"low"),"."),(0,r.kt)("p",null,"In this case, an API to return the list of all objects a user can access would make sense. You can query this API to get a list of object IDs and then pass these IDs to your filter function to limit the search to them."),(0,r.kt)("p",null,"As this number increases, this solution becomes impractical, because you would need to paginate over multiple pages to get the entire list before being able to search and sort. A partial list from the API is not enough, because you won't be able to sort using it."),(0,r.kt)("p",null,"So while ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#option-3-build-a-list-of-ids-then-search"},"List of IDs then Search"))," would be useful for this in some situations, we would recommend ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check"},"Local Index from Changes Endpoint, Search then Check"))," for the cases when the number of objects is high enough. Until ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"})," implements an endpoint to return a list of object IDs, local index is recommended for all situations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D.")," The ",(0,r.kt)("em",{parentName:"p"},"number of objects of a certain type the user could have access to")," is ",(0,r.kt)("em",{parentName:"p"},"high"),", and the ",(0,r.kt)("em",{parentName:"p"},"percentage of the total objects that the user can have access to")," is ",(0,r.kt)("em",{parentName:"p"},"low"),"."),(0,r.kt)("p",null,"The recommended option for this case is to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check"},"Local Index from Changes Endpoint, Search then Check")),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"List of IDs then Search")," would not work because you would have to get and paginate across thousands or tens of thousands (or in some cases more) of results from ",(0,r.kt)(o.rZ,{format:o.v7.ShortForm,mdxType:"ProductName"}),", only after you have retrieved the entire set can you start searching within your database for matching results. This would mean that your user could be waiting for a long time before they can start seeing results.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Search then Check")," would also not be ideal, as you will be retrieving and checking against a lot of items and discarding most of them."))),(0,r.kt)("p",null,"Use case: Searching in Google Drive, where the list of documents and folders that a user has access to can be very high, but it still is a small percentage of the entire set of documents in Google Drive."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"E.")," The ",(0,r.kt)("em",{parentName:"p"},"number of objects of a certain type the user could have access to")," is ",(0,r.kt)("em",{parentName:"p"},"high"),", and the ",(0,r.kt)("em",{parentName:"p"},"percentage of the total objects that the user can have access to")," is also ",(0,r.kt)("em",{parentName:"p"},"high"),"."),(0,r.kt)("p",null,"In this case a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check"},"Local Index from Changes Endpoint, Search then Check"))," would be useful. If you do not want to maintain a local index, and if the user can access a high percentage of the total, meaning that the user is more likely than not to have access to the results returned by the search query, then ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#option-1-search-then-check"},"Search then Check"))," would work just as well."),(0,r.kt)("p",null,"Use-case: Searching on Twitter. Most Twitter users have their profiles set to public, so the user is more likely to have access to the tweets when performing a search. So searching first then running checks against the set of returned results would be appropriate."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,r.kt)("th",{parentName:"tr",align:null},"# of objects returned from database query"),(0,r.kt)("th",{parentName:"tr",align:null},"# of objects user can access in a type"),(0,r.kt)("th",{parentName:"tr",align:null},"% of objects user can access in a type"),(0,r.kt)("th",{parentName:"tr",align:null},"Preferred Option"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"Search criteria enough to narrow down results"),(0,r.kt)("td",{parentName:"tr",align:null},"Low"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#option-1-search-then-check"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"Few objects the user has access to, but still a high % of total objects"),(0,r.kt)("td",{parentName:"tr",align:null},"Low"),(0,r.kt)("td",{parentName:"tr",align:null},"Low"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#option-1-search-then-check"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot narrow down search results, very high probability search returns objects user cannot access, total number of objects user can access is low enough to fit in a response"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},"Low"),(0,r.kt)("td",{parentName:"tr",align:null},"Low"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#option-3-build-a-list-of-ids-then-search"},"3")," or ",(0,r.kt)("a",{parentName:"td",href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check"},"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"Google Drive: User has access to a lot of documents, but low percentage from total"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},"Low"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check"},"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E"),(0,r.kt)("td",{parentName:"tr",align:null},"Twitter Search: Most profiles are public, and the user can access them"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#option-1-search-then-check"},"1")," or ",(0,r.kt)("a",{parentName:"td",href:"#option-2-build-a-local-index-from-changes-endpoint-search-then-check"},"2"))))))}u.isMDXComponent=!0}}]);