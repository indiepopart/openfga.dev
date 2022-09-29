"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[265],{51376:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),s=a(5270),l=a(65488),i=a(85162);const r={title:"Install SDK Client",sidebar_position:2,slug:"/getting-started/install-sdk"},p="Install SDK Client",d={unversionedId:"content/getting-started/install-sdk",id:"content/getting-started/install-sdk",title:"Install SDK Client",description:"To get started, install the  SDK packages.",source:"@site/docs/content/getting-started/install-sdk.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/install-sdk",permalink:"/docs/getting-started/install-sdk",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/install-sdk.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Install SDK Client",sidebar_position:2,slug:"/getting-started/install-sdk"},sidebar:"docs",previous:{title:"Setup OpenFGA Server",permalink:"/docs/getting-started/setup-openfga"},next:{title:"Create a Store",permalink:"/docs/getting-started/create-store"}},c={},u=[{value:"Related Sections",id:"related-sections",level:2}],g=(k="ProductConcept",function(e){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var k;const m={toc:u};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-sdk-client"},"Install SDK Client"),(0,o.kt)(s.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"To get started, install the ",(0,o.kt)(s.rZ,{format:s.v7.ShortForm,mdxType:"ProductName"})," SDK packages."),(0,o.kt)(l.Z,{groupId:"languages",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:s.eU.JS_SDK,label:s.UB.get(s.eU.JS_SDK),mdxType:"TabItem"},(0,o.kt)("p",null,"You can find the Node.js package on npm at: ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openfga/sdk"},"@openfga/sdk"),"."),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @openfga/sdk\n")),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @openfga/sdk\n"))),(0,o.kt)(i.Z,{value:s.eU.GO_SDK,label:s.UB.get(s.eU.GO_SDK),mdxType:"TabItem"},(0,o.kt)("p",null,"You can find the Go package on GitHub at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openfga/go-sdk"},"@openfga/go-sdk"),"."),(0,o.kt)("p",null,"To install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go get -u github.com/openfga/go-sdk\n")),(0,o.kt)("p",null,"In your code, import the module and use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    openfga "github.com/openfga/go-sdk"\n)\n\nfunc main() {\n    configuration, err := openfga.NewConfiguration(openfga.Configuration{\n        ApiScheme:      os.Getenv("FGA_API_SCHEME"), // optional, defaults to "https"\n        ApiHost:        os.Getenv("FGA_API_HOST"), // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n    })\n\n    if err != nil {\n        // .. Handle error\n    }\n}\n')),(0,o.kt)("p",null,"You can then run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go mod tidy\n")),(0,o.kt)("p",null,"to update ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"go.sum")," if you are using them.")),(0,o.kt)(i.Z,{value:s.eU.DOTNET_SDK,label:s.UB.get(s.eU.DOTNET_SDK),mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)(s.rZ,{format:s.v7.ShortForm,mdxType:"ProductName"})," .NET SDK is available on ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/OpenFga.Sdk"},"NuGet"),"."),(0,o.kt)("p",null,"You can install it using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-dotnet-cli"},"dotnet CLI"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet add package OpenFGA.Sdk\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-powershell"},"Package Manager Console")," inside Visual Studio:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Package OpenFGA.Sdk\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio"},"Visual Studio"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/visualstudio/mac/nuget-walkthrough"},"Visual Studio for Mac")," and ",(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/rider/Using_NuGet.html"},"IntelliJ Rider"),": Search for and install ",(0,o.kt)("inlineCode",{parentName:"li"},"OpenFGA.Sdk")," in each of their respective package manager UIs.")))),(0,o.kt)(g,{section:"what-is-a-check-request",linkName:"check API",mdxType:"ProductConcept"}),(0,o.kt)("h2",{id:"related-sections"},"Related Sections"),(0,o.kt)(s.$q,{description:"Get {ProductName}'s SDKs to add authorization to your API.",relatedLinks:[{title:"{ProductName} Node.js SDK",description:"Install our Node.js & JavaScript SDK to get started.",link:"https://www.npmjs.com/package/@openfga/sdk"},{title:"{ProductName} Go SDK",description:"Use our Go SDK to easily connect your Go application to the {ProductName} API",link:"https://github.com/openfga/go-sdk"},{title:"{ProductName} .NET SDK",description:"Connect your .NET service with {ProductName} using our .NET SDK",link:"https://github.com/openfga/dotnet-sdk"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);