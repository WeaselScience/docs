"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const l={title:"\u7ba1\u7406 Server \u89d2\u8272",weight:60},o=void 0,i={unversionedId:"installation/server-roles",id:"installation/server-roles",title:"\u7ba1\u7406 Server \u89d2\u8272",description:"\u4f7f\u7528 --cluster-init \u542f\u52a8 K3s Server \u5c06\u8fd0\u884c\u6240\u6709 control-plane \u7ec4\u4ef6\uff0c\u5305\u62ec apiserver\u3001controller-manager\u3001scheduler \u548c etcd\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7981\u7528\u7279\u5b9a\u7ec4\u4ef6\u6765\u5c06 control-plane \u548c etcd \u89d2\u8272\u62c6\u5206\u5230\u5355\u72ec\u7684\u8282\u70b9\u4e0a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/server-roles.md",sourceDirName:"installation",slug:"/installation/server-roles",permalink:"/zh/installation/server-roles",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/server-roles.md",tags:[],version:"current",lastUpdatedAt:1689191560,formattedLastUpdatedAt:"2023\u5e747\u670812\u65e5",frontMatter:{title:"\u7ba1\u7406 Server \u89d2\u8272",weight:60},sidebar:"mySidebar",previous:{title:"\u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/installation/airgap"},next:{title:"\u7ba1\u7406\u5c01\u88c5\u7684\u7ec4\u4ef6",permalink:"/zh/installation/packaged-components"}},p={},c=[{value:"\u4e13\u7528 <code>etcd</code> \u8282\u70b9",id:"\u4e13\u7528-etcd-\u8282\u70b9",level:2},{value:"\u4e13\u7528 <code>control-plane</code> \u8282\u70b9",id:"\u4e13\u7528-control-plane-\u8282\u70b9",level:2},{value:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709 server",id:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709-server",level:2},{value:"\u914d\u7f6e\u6587\u4ef6\u8bed\u6cd5",id:"\u914d\u7f6e\u6587\u4ef6\u8bed\u6cd5",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-init")," \u542f\u52a8 K3s Server \u5c06\u8fd0\u884c\u6240\u6709 control-plane \u7ec4\u4ef6\uff0c\u5305\u62ec apiserver\u3001controller-manager\u3001scheduler \u548c etcd\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u7981\u7528\u7279\u5b9a\u7ec4\u4ef6\u6765\u5c06 control-plane \u548c etcd \u89d2\u8272\u62c6\u5206\u5230\u5355\u72ec\u7684\u8282\u70b9\u4e0a\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u4ec5\u9002\u7528\u4e8e\u4f7f\u7528\u5d4c\u5165\u5f0f etcd \u7684\u60c5\u51b5\u3002\u5982\u679c\u6ca1\u6709\u4f7f\u7528\u5d4c\u5165\u5f0f etcd\uff0c\u6240\u6709 Server \u90fd\u5c06\u5177\u6709 control-plane \u89d2\u8272\u5e76\u8fd0\u884c control-plane \u7ec4\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u4e13\u7528-etcd-\u8282\u70b9"},"\u4e13\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"etcd")," \u8282\u70b9"),(0,a.kt)("p",null,"\u8981\u521b\u5efa\u4ec5\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u89d2\u8272\u7684 server\uff0c\u8bf7\u5728\u7981\u7528\u6240\u6709 control plane \u7ec4\u4ef6\u7684\u60c5\u51b5\u4e0b\u542f\u52a8 K3s\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -fL https://get.k3s.io | sh -s - server --cluster-init --disable-apiserver --disable-controller-manager --disable-scheduler\n")),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u8282\u70b9\u5c06\u542f\u52a8 etcd\uff0c\u7136\u540e\u7b49\u5f85\u5176\u4ed6 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u548c/\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," \u8282\u70b9\u52a0\u5165\u3002\u5728\u52a0\u5165\u542f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," \u7ec4\u4ef6\u7684\u5176\u4ed6 server \u4e4b\u524d\uff0c\u96c6\u7fa4\u5c06\u65e0\u6cd5\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u4e13\u7528-control-plane-\u8282\u70b9"},"\u4e13\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"control-plane")," \u8282\u70b9"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e13\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," \u8282\u70b9\u4e0d\u80fd\u662f\u96c6\u7fa4\u4e2d\u7684\u7b2c\u4e00\u4e2a server\u3002\u5728\u52a0\u5165\u4e13\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," \u8282\u70b9\u4e4b\u524d\uff0c\u5fc5\u987b\u6709\u4e00\u4e2a\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u89d2\u8272\u7684\u73b0\u6709\u8282\u70b9\u3002")),(0,a.kt)("p",null,"\u8981\u521b\u5efa\u4ec5\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," \u89d2\u8272\u7684 server\uff0c\u8bf7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-etcd")," \u7684\u60c5\u51b5\u4e0b\u542f\u52a8 K3s\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://get.k3s.io | sh -s - server --token <token> --disable-etcd --server https://<etcd-only-node>:6443\n")),(0,a.kt)("p",null,"\u521b\u5efa\u4e13\u7528 Server \u8282\u70b9\u540e\uff0c\u6240\u9009\u89d2\u8272\u5c06\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get node")," \u4e2d\u53ef\u89c1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME           STATUS   ROLES                       AGE     VERSION\nk3s-server-1   Ready    etcd                        5h39m   v1.20.4+k3s1\nk3s-server-2   Ready    control-plane,master        5h39m   v1.20.4+k3s1\n")),(0,a.kt)("h2",{id:"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709-server"},"\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709 server"),(0,a.kt)("p",null,"\u5982\u679c\u5728\u5220\u9664\u4e86 disable \u6807\u5fd7\u7684\u60c5\u51b5\u4e0b\u91cd\u542f K3s\uff0c\u4f60\u53ef\u4ee5\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u73b0\u6709\u7684\u4e13\u7528\u8282\u70b9\u3002\u4f8b\u5982\uff0c\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," \u89d2\u8272\u6dfb\u52a0\u5230\u4e13\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u8282\u70b9\uff0c\u4f60\u53ef\u4ee5\u4ece systemd \u5355\u5143\u6216\u914d\u7f6e\u6587\u4ef6\u4e2d\u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-apiserver --disable-controller -manager --disable-scheduler")," \u6807\u8bb0\uff0c\u5e76\u91cd\u542f\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u8bed\u6cd5"},"\u914d\u7f6e\u6587\u4ef6\u8bed\u6cd5"),(0,a.kt)("p",null,"\u4e0e\u6240\u6709\u5176\u4ed6 CLI \u6807\u5fd7\u4e00\u6837\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/zh/installation/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},"\u914d\u7f6e\u6587\u4ef6"),"\u6765\u7981\u7528\u7ec4\u4ef6\uff0c\u800c\u4e0d\u662f\u5c06\u9009\u9879\u4f5c\u4e3a CLI \u6807\u5fd7\u4f20\u9012\u3002\u4f8b\u5982\uff0c\u8981\u521b\u5efa\u4e13\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u8282\u70b9\uff0c\u4f60\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u503c\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," \u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"cluster-init: true\ndisable-apiserver: true\ndisable-controller-manager: true\ndisable-scheduler: true\n")))}d.isMDXComponent=!0}}]);