"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(3117),a=(r(7294),r(3905));const i={title:"High Availability Embedded etcd",weight:40},o=void 0,s={unversionedId:"datastore/ha-embedded",id:"datastore/ha-embedded",title:"High Availability Embedded etcd",description:"Full support as of v1.19.5+k3s1",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/datastore/ha-embedded.md",sourceDirName:"datastore",slug:"/datastore/ha-embedded",permalink:"/kr/datastore/ha-embedded",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/ha-embedded.md",tags:[],version:"current",lastUpdatedAt:1689191560,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"High Availability Embedded etcd",weight:40},sidebar:"mySidebar",previous:{title:"Backup and Restore",permalink:"/kr/datastore/backup-restore"},next:{title:"High Availability External DB",permalink:"/kr/datastore/ha"}},l={},d=[{value:"New cluster",id:"new-cluster",level:2},{value:"Existing clusters",id:"existing-clusters",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Version Gate",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Full support as of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.5%2Bk3s1"},"v1.19.5+k3s1"),(0,a.kt)("br",{parentName:"p"}),"\n","Experimental support as of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1"))),(0,a.kt)("admonition",{title:"Notice: Deprecated Dqlite",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Embedded etcd replaced experimental Dqlite in the K3s v1.19.1 release. This is a breaking change. Please note that upgrades from experimental Dqlite to embedded etcd are not supported. If you attempt an upgrade it will not succeed and data will be lost.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Embedded etcd (HA) may have performance issues on slower disks such as Raspberry Pis running with SD cards.")),(0,a.kt)("h2",{id:"new-cluster"},"New cluster"),(0,a.kt)("p",null,"To run K3s in this mode, you must have an odd number of server nodes. We recommend starting with three nodes."),(0,a.kt)("p",null,"To get started, first launch a server node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-init")," flag to enable clustering and a token that will be used as a shared secret to join additional servers to the cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - server --cluster-init\n")),(0,a.kt)("p",null,"After launching the first server, join the second and third servers to the cluster using the shared secret:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - server --server https://<ip or hostname of server1>:6443\n")),(0,a.kt)("p",null,"Check to see that the second and third servers are now part of the cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME        STATUS   ROLES                       AGE   VERSION\nserver1     Ready    control-plane,etcd,master   28m   vX.Y.Z\nserver2     Ready    control-plane,etcd,master   13m   vX.Y.Z\n")),(0,a.kt)("p",null,"Now you have a highly available control plane. Any successfully clustered servers can be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"--server")," argument to join additional server and worker nodes. Joining additional worker nodes to the cluster follows the same procedure as a single server cluster."),(0,a.kt)("p",null,"There are a few config flags that must be the same in all server nodes:         "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Network related flags: ",(0,a.kt)("inlineCode",{parentName:"li"},"--cluster-dns"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--cluster-domain"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--cluster-cidr"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--service-cidr")),(0,a.kt)("li",{parentName:"ul"},"Flags controlling the deployment of certain components: ",(0,a.kt)("inlineCode",{parentName:"li"},"--disable-helm-controller"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--disable-kube-proxy"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--disable-network-policy")," and any component passed to ",(0,a.kt)("inlineCode",{parentName:"li"},"--disable")),(0,a.kt)("li",{parentName:"ul"},"Feature related flags: ",(0,a.kt)("inlineCode",{parentName:"li"},"--secrets-encryption"))),(0,a.kt)("h2",{id:"existing-clusters"},"Existing clusters"),(0,a.kt)("p",null,"If you have an existing cluster using the default embedded SQLite database, you can convert it to etcd by simply restarting your K3s server with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-init")," flag. Once you've done that, you'll be able to add additional instances as described above."),(0,a.kt)("p",null,"If an etcd datastore is found on disk either because that node has either initialized or joined a cluster already, the datastore arguments (",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-init"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--server"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"--datastore-endpoint"),", etc) are ignored."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important:")," K3s v1.22.2 and newer support migration from SQLite to etcd. Older versions will create a new empty datastore if you add ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-init")," to an existing server.")))}p.isMDXComponent=!0}}]);