"use strict";(self.webpackChunkdocusaurus_deploy_ghpages_guide=self.webpackChunkdocusaurus_deploy_ghpages_guide||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},278:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,tags:["github","github-action","repositorio","workflow"]},u="Workflow",l={unversionedId:"workflow",id:"workflow",title:"Workflow",description:"Partiremos del punto en el que nuestro sitio ya est\xe1 listo para ser desplegado, y ya forma parte de un repositorio p\xfablico de una cuenta gratuita de GitHub.",source:"@site/docs/workflow.md",sourceDirName:".",slug:"/workflow",permalink:"/docusaurus-deploy-ghpages-guide/workflow",tags:[{label:"github",permalink:"/docusaurus-deploy-ghpages-guide/tags/github"},{label:"github-action",permalink:"/docusaurus-deploy-ghpages-guide/tags/github-action"},{label:"repositorio",permalink:"/docusaurus-deploy-ghpages-guide/tags/repositorio"},{label:"workflow",permalink:"/docusaurus-deploy-ghpages-guide/tags/workflow"}],version:"current",lastUpdatedBy:"eduardoviscencio",lastUpdatedAt:1644983834,formattedLastUpdatedAt:"2/16/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["github","github-action","repositorio","workflow"]},sidebar:"tutorialSidebar",previous:{title:"Despliegue de Docusaurus a GitHub Pages",permalink:"/docusaurus-deploy-ghpages-guide/"},next:{title:"Despliegue",permalink:"/docusaurus-deploy-ghpages-guide/despliegue"}},p=[{value:"Creaci\xf3n del workflow en nuestro repositorio",id:"creaci\xf3n-del-workflow-en-nuestro-repositorio",children:[],level:2}],c={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"Partiremos del punto en el que nuestro sitio ya est\xe1 listo para ser desplegado, y ya forma parte de un repositorio ",(0,a.kt)("strong",{parentName:"p"},"p\xfablico")," de una cuenta gratuita de GitHub."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Plan de GitHub")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Hoy en d\xeda, la \xfanica manera de desplegar respositorios privados a GitHub Pages es teniendo una cuenta de pago."))),(0,a.kt)("h2",{id:"creaci\xf3n-del-workflow-en-nuestro-repositorio"},"Creaci\xf3n del workflow en nuestro repositorio"),(0,a.kt)("p",null,"Un ",(0,a.kt)("strong",{parentName:"p"},"workflow")," es un proceso automatizado configurable que ejecutar\xe1 uno o m\xe1s ",(0,a.kt)("inlineCode",{parentName:"p"},"jobs"),", y se define mediante un archivo YAML que se verifica en nuestro repositorio y se ejecutar\xe1 cuando lo active un evento dentro del mismo, o bien, puede activarse manualmente o en una programaci\xf3n definida."),(0,a.kt)("p",null,"Dentro de nuestro repositorio iremos a la pesta\xf1a ",(0,a.kt)("em",{parentName:"p"},"Actions"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Actions",src:n(9731).Z,width:"639",height:"378"})),(0,a.kt)("p",null,"Daremos click en ",(0,a.kt)("strong",{parentName:"p"},"set up a workflow yourself"),"."),(0,a.kt)("p",null,"A continuaci\xf3n se nos mostrar\xe1 un editor para crear nuestro workflow. En este caso le pondremos por nombre ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy-docusaurus.yml"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create workflow",src:n(1089).Z,width:"741",height:"176"})),(0,a.kt)("p",null,"Y el contenido del mismo ser\xe1 el siguiente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: deploy-docusaurus\n\non:\n  push:\n    branches: [main]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  publish:\n    runs-on: ubuntu-latest\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - name: Check out repo\n        uses: actions/checkout@v2\n      # Node is required for npm\n      - name: Set up Node\n        uses: actions/setup-node@v2\n        with:\n          node-version: \"14.x\"\n      # Install and build Docusaurus website\n      - name: Build Docusaurus website\n        run: |\n          yarn install \n          yarn clear\n          yarn build\n      - name: Deploy to GitHub Pages\n        if: success()\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./build\n        env:\n          ACTIONS_ALLOW_UNSECURE_COMMANDS: 'true'\n")),(0,a.kt)("p",null,"Una vez tengamos nuestro workflow listo, solamente realizaremos el commit de nuestro nuevo archivo en la rama ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," dando click en ",(0,a.kt)("strong",{parentName:"p"},"Start commit"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"El archivo ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy-docusaurus.yml")," ahora forma parte de nuestro repositorio, por lo que, en caso de querer modificarlo directamente en cualquier editor de texto de manera local, es necesario realizar un ",(0,a.kt)("inlineCode",{parentName:"p"},"pull")," en nuestro repositorio."))))}d.isMDXComponent=!0},9731:function(e,t,n){t.Z=n.p+"assets/images/actions-ee8ae51505155871f11669d94c5c6343.PNG"},1089:function(e,t,n){t.Z=n.p+"assets/images/create-workflow-480abf7b8eeafa893ddb1f388cbcdbab.PNG"}}]);