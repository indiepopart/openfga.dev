"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[3416],{95135:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var t=r(85893),s=r(11151),o=r(5270),a=r(74866),i=r(85162);const l={title:"Docker Setup Guide",description:"Setting up an OpenFGA server with Docker",sidebar_position:2,slug:"/getting-started/setup-openfga/docker"},c="\ud83d\udc33 Setup OpenFGA with Docker",d={id:"content/getting-started/setup-openfga/docker-setup",title:"Docker Setup Guide",description:"Setting up an OpenFGA server with Docker",source:"@site/docs/content/getting-started/setup-openfga/docker-setup.mdx",sourceDirName:"content/getting-started/setup-openfga",slug:"/getting-started/setup-openfga/docker",permalink:"/pr-preview/pr-653/docs/getting-started/setup-openfga/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/setup-openfga/docker-setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Docker Setup Guide",description:"Setting up an OpenFGA server with Docker",sidebar_position:2,slug:"/getting-started/setup-openfga/docker"},sidebar:"docs",previous:{title:"Configuring OpenFGA",permalink:"/pr-preview/pr-653/docs/getting-started/setup-openfga/configure-openfga"},next:{title:"Kubernetes Setup Guide",permalink:"/pr-preview/pr-653/docs/getting-started/setup-openfga/kubernetes"}},p={},g=[{value:"Step By Step",id:"step-by-step",level:2},{value:"Using Postgres",id:"using-postgres",level:2},{value:"Using MySQL",id:"using-mysql",level:2},{value:"Pre-shared Key Authentication",id:"pre-shared-key-authentication",level:2},{value:"OIDC Authentication",id:"oidc-authentication",level:2},{value:"Enabling Profiling",id:"enabling-profiling",level:2},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-setup-openfga-with-docker",children:"\ud83d\udc33 Setup OpenFGA with Docker"}),"\n",(0,t.jsx)(o.AH,{}),"\n",(0,t.jsxs)(n.p,{children:["This article explains how to run your own OpenFGA server using Docker. To learn the different ways to configure OpenFGA check ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-653/docs/getting-started/setup-openfga/configure-openfga",children:"Configuring OpenFGA"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,t.jsx)(n.p,{children:"If you want to run OpenFGA locally as a Docker container, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Install Docker"})," (if not already installed)."]}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"docker pull openfga/openfga"})," to get the latest docker image."]}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 openfga/openfga run"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This will start an HTTP server and gRPC server with the default configuration options. Port 8080 is used to serve the HTTP API, 8081 is used to serve the gRPC API, and 3000 is used for the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-653/docs/getting-started/setup-openfga/playground",children:"Playground"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"using-postgres",children:"Using Postgres"}),"\n",(0,t.jsxs)(a.Z,{groupId:"installation",children:[(0,t.jsxs)(i.Z,{value:"docker",label:"Docker",children:[(0,t.jsx)(n.p,{children:"To run OpenFGA and Postgres in containers, you can create a new network to make communication between containers simpler:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker network create openfga\n"})}),(0,t.jsx)(n.p,{children:"You can then start Postgres in the network you created above:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run -d --name postgres --network=openfga -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password postgres:14\n"})}),(0,t.jsxs)(n.p,{children:["You should now have Postgres running in a container in the ",(0,t.jsx)(n.code,{children:"openfga"})," network. However, it will not have the tables required for running OpenFGA. You can use the ",(0,t.jsx)(n.code,{children:"migrate"})," command to create the tables. Using the OpenFGA container, this will look like:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'docker run --rm --network=openfga openfga/openfga migrate \\\n    --datastore-engine postgres \\\n    --datastore-uri "postgres://postgres:password@postgres:5432/postgres?sslmode=disable"\n'})}),(0,t.jsx)(n.p,{children:"Finally, start OpenFGA:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run --name openfga --network=openfga -p 3000:3000 -p 8080:8080 -p 8081:8081 openfga/openfga run \\\n    --datastore-engine postgres \\\n    --datastore-uri 'postgres://postgres:password@postgres:5432/postgres?sslmode=disable'\n"})})]}),(0,t.jsxs)(i.Z,{value:"docker-compose",label:"Docker Compose",children:[(0,t.jsxs)(n.p,{children:["Copy the below code block into a local file named: ",(0,t.jsx)(n.code,{children:"docker-compose.yaml"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'version: \'3.8\'\n\nnetworks:\n  openfga:\n\nservices:\n  postgres:\n    image: postgres:14\n    container_name: postgres\n    networks:\n      - openfga\n    ports:\n      - "5432:5432"\n    environment:\n      - POSTGRES_USER=postgres\n      - POSTGRES_PASSWORD=password\n    healthcheck:\n      test: [ "CMD-SHELL", "pg_isready -U postgres" ]\n      interval: 5s\n      timeout: 5s\n      retries: 5\n\n  migrate:\n    depends_on:\n      postgres:\n        condition: service_healthy\n    image: openfga/openfga:latest\n    container_name: migrate\n    command: migrate\n    environment:\n      - OPENFGA_DATASTORE_ENGINE=postgres\n      - OPENFGA_DATASTORE_URI=postgres://postgres:password@postgres:5432/postgres?sslmode=disable\n    networks:\n      - openfga\n\n  openfga:\n    depends_on:\n      migrate:\n        condition: service_completed_successfully\n    image: openfga/openfga:latest\n    container_name: openfga\n    environment:\n      - OPENFGA_DATASTORE_ENGINE=postgres\n      - OPENFGA_DATASTORE_URI=postgres://postgres:password@postgres:5432/postgres?sslmode=disable\n      - OPENFGA_LOG_FORMAT=json\n    command: run\n    networks:\n      - openfga\n    ports:\n      # Needed for the http server\n      - "8080:8080"\n      # Needed for the grpc server (if used)\n      - "8081:8081"\n      # Needed for the playground (Do not enable in prod!)\n      - "3000:3000"\n'})}),(0,t.jsx)(n.p,{children:"In a terminal, navigate to that directory and run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker-compose up\n"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["This will start the Postgres database, run ",(0,t.jsx)(n.code,{children:"openfga migrate"})," to configure the database and finally start the OpenFGA server."]}),"\n",(0,t.jsx)(n.h2,{id:"using-mysql",children:"Using MySQL"}),"\n",(0,t.jsxs)(a.Z,{groupId:"installation_mysql",children:[(0,t.jsxs)(i.Z,{value:"docker-mysql",label:"Docker",children:[(0,t.jsx)(n.p,{children:"We first make a network:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker network create openfga\n"})}),(0,t.jsx)(n.p,{children:"Then, start MySQL in the network you created above:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run -d --name mysql --network=openfga -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=openfga mysql:8\n"})}),(0,t.jsxs)(n.p,{children:["You should now have MySQL running in a container in the ",(0,t.jsx)(n.code,{children:"openfga"})," network. But we still have to migrate all the tables to be able to run OpenFGA. You can use the ",(0,t.jsx)(n.code,{children:"migrate"})," command to create the tables. Using the OpenFGA container, this will look like:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run --rm --network=openfga openfga/openfga migrate \\\n    --datastore-engine mysql \\\n    --datastore-uri 'root:secret@tcp(mysql:3306)/openfga?parseTime=true'\n"})}),(0,t.jsx)(n.p,{children:"Finally, start OpenFGA:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run --name openfga --network=openfga -p 3000:3000 -p 8080:8080 -p 8081:8081 openfga/openfga run \\\n    --datastore-engine mysql \\\n    --datastore-uri 'root:secret@tcp(mysql:3306)/openfga?parseTime=true'\n"})})]}),(0,t.jsxs)(i.Z,{value:"docker-compose-mysql",label:"Docker Compose",children:[(0,t.jsxs)(n.p,{children:["Copy the below code block into a local file named: ",(0,t.jsx)(n.code,{children:"docker-compose.yaml"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"version: '3.8'\n\nnetworks:\n  openfga:\n\nservices:\n  mysql:\n    image: mysql:8\n    container_name: mysql\n    networks:\n      - openfga\n    ports:\n      - \"3306:3306\"\n    environment:\n      - MYSQL_ROOT_PASSWORD=secret\n      - MYSQL_DATABASE=openfga\n    healthcheck:\n      test: [\"CMD\", 'mysqladmin', 'ping', '-h', 'localhost', '-u', 'root', '-p$$MYSQL_ROOT_PASSWORD' ]\n      timeout: 20s\n      retries: 5\n\n  migrate:\n    depends_on:\n        mysql:\n            condition: service_healthy\n    image: openfga/openfga:latest\n    container_name: migrate\n    command: migrate\n    environment:\n      - OPENFGA_DATASTORE_ENGINE=mysql\n      - OPENFGA_DATASTORE_URI=root:secret@tcp(mysql:3306)/openfga?parseTime=true\n    networks:\n      - openfga\n\n  openfga:\n    depends_on:\n      migrate:\n        condition: service_completed_successfully\n    image: openfga/openfga:latest\n    container_name: openfga\n    environment:\n      - OPENFGA_DATASTORE_ENGINE=mysql\n      - OPENFGA_DATASTORE_URI=root:secret@tcp(mysql:3306)/openfga?parseTime=true\n      - OPENFGA_LOG_FORMAT=json\n    command: run\n    networks:\n      - openfga\n    ports:\n      # Needed for the http server\n      - \"8080:8080\"\n      # Needed for the grpc server (if used)\n      - \"8081:8081\"\n      # Needed for the playground (Do not enable in prod!)\n      - \"3000:3000\"\n"})}),(0,t.jsx)(n.p,{children:"In a terminal, navigate to that directory and run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker-compose up\n"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["This will start the MySQL database, run ",(0,t.jsx)(n.code,{children:"openfga migrate"})," to configure the database and finally start the OpenFGA server."]}),"\n",(0,t.jsx)(n.h2,{id:"pre-shared-key-authentication",children:"Pre-shared Key Authentication"}),"\n",(0,t.jsx)(n.p,{children:"To configure with pre-shared authentication and enabling TLS in http server with Docker."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Copy the certificate and key files to your Docker container."}),"\n",(0,t.jsx)(n.li,{children:"Run with the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'docker run --name openfga --network=openfga -p 3000:3000 -p 8080:8080 -p 8081:8081 openfga/openfga run \\\n    --authn-method=preshared \\\n    --authn-preshared-keys="key1,key2" \\\n    --http-tls-enabled=true \\\n    --http-tls-cert="/Users/myuser/key/server.crt" \\\n    --http-tls-key="/Users/myuser/key/server.key"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"oidc-authentication",children:"OIDC Authentication"}),"\n",(0,t.jsx)(n.p,{children:"To configure with pre-shared authentication and enabling TLS in http server with Docker."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Copy the certificate and key files to your docker container."}),"\n",(0,t.jsx)(n.li,{children:"Run the following command"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'docker run --name openfga --network=openfga -p 3000:3000 -p 8080:8080 -p 8081:8081 openfga/openfga run \\\n    --authn-method=oidc \\\n    --authn-oidc-issuer="oidc-issuer" \\\n    --authn-oidc-audience="oidc-audience" \\\n    --http-tls-enabled=true \\\n    --http-tls-cert="/Users/myuser/key/server.crt" \\\n    --http-tls-key="/Users/myuser/key/server.key"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"enabling-profiling",children:"Enabling Profiling"}),"\n",(0,t.jsxs)(n.p,{children:["If you are enabling profiling, make sure you enable the corresponding port in docker. The default port is ",(0,t.jsx)(n.code,{children:"3001"}),", but if you need to serve the profiler on a different port, you can do so by specifying the ",(0,t.jsx)(n.code,{children:"--profiler-addr"})," flag. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 -p 3002:3002 openfga/openfga run --profiler-enabled --profiler-addr :3002\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,t.jsx)(o.$q,{description:"Check the following sections for more on how to use OpenFGA.",relatedLinks:[{title:"Production Best Practices",description:"Learn the best practices of running OpenFGA in a production environment",link:"../running-in-production",id:"./running-in-production"}]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);