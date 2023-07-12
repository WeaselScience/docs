"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(3117),r=n(7294),i=n(6010),o=n(2466),l=n(6775),s=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=k({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var f=n(2389);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",b,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},1353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(3117),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const l={title:"Network Options",weight:25},s=void 0,u={unversionedId:"installation/network-options",id:"installation/network-options",title:"Network Options",description:"This page describes K3s network configuration options, including configuration or replacement of Flannel, and configuring IPv6.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/installation/network-options.md",sourceDirName:"installation",slug:"/installation/network-options",permalink:"/kr/installation/network-options",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/network-options.md",tags:[],version:"current",lastUpdatedAt:1689191560,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"Network Options",weight:25},sidebar:"mySidebar",previous:{title:"Configuration Options",permalink:"/kr/installation/configuration"},next:{title:"Private Registry Configuration",permalink:"/kr/installation/private-registry"}},d={},c=[{value:"Flannel Options",id:"flannel-options",level:2},{value:"Migrating from <code>wireguard</code> or <code>ipsec</code> to <code>wireguard-native</code>",id:"migrating-from-wireguard-or-ipsec-to-wireguard-native",level:3},{value:"Custom CNI",id:"custom-cni",level:2},{value:"Control-Plane Egress Selector configuration",id:"control-plane-egress-selector-configuration",level:2},{value:"Dual-stack (IPv4 + IPv6) Networking",id:"dual-stack-ipv4--ipv6-networking",level:2},{value:"Single-stack IPv6 Networking",id:"single-stack-ipv6-networking",level:2},{value:"Distributed hybrid or multicloud cluster",id:"distributed-hybrid-or-multicloud-cluster",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page describes K3s network configuration options, including configuration or replacement of Flannel, and configuring IPv6."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Please reference the ",(0,r.kt)("a",{parentName:"p",href:"/kr/networking/"},"Networking")," page for information about CoreDNS, Traefik, and the Service LB.")),(0,r.kt)("h2",{id:"flannel-options"},"Flannel Options"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel/blob/master/README.md"},"Flannel")," is a lightweight provider of layer 3 network fabric that implements the Kubernetes Container Network Interface (CNI). It is what is commonly referred to as a CNI Plugin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flannel options can only be set on server nodes, and must be identical on all servers in the cluster."),(0,r.kt)("li",{parentName:"ul"},"The default backend for Flannel is ",(0,r.kt)("inlineCode",{parentName:"li"},"vxlan"),". To enable encryption, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"wireguard-native")," backend."),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"vxlan")," on Rasperry Pi with recent versions of Ubuntu requires ",(0,r.kt)("a",{parentName:"li",href:"/kr/advanced/#raspberry-pi"},"additional preparation"),"."),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"wireguard-native")," as the Flannel backend may require additional modules on some Linux distributions. Please see the ",(0,r.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/"},"WireGuard Install Guide")," for details.\nThe WireGuard install steps will ensure the appropriate kernel modules are installed for your operating system.\nYou must ensure that WireGuard kernel modules are available on every node, both servers and agents, before attempting to use the WireGuard Flannel backend.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CLI Flag and Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-ipv6-masq")),(0,r.kt)("td",{parentName:"tr",align:null},"Apply masquerading rules to IPv6 traffic (default for IPv4). Only applies on dual-stack or IPv6-only clusters. Compatible with any Flannel backend other than ",(0,r.kt)("inlineCode",{parentName:"td"},"none"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-external-ip")),(0,r.kt)("td",{parentName:"tr",align:null},"Use node external IP addresses as the destination for Flannel traffic, instead of internal IPs. Only applies when --node-external-ip is set on a node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=vxlan")),(0,r.kt)("td",{parentName:"tr",align:null},"Use VXLAN to encapsulate the packets. May require additional kernel modules on Raspberry Pi.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=host-gw")),(0,r.kt)("td",{parentName:"tr",align:null},"Use IP routes to pod subnets via node IPs. Requires direct layer 2 connectivity between all nodes in the cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard-native")),(0,r.kt)("td",{parentName:"tr",align:null},"Use WireGuard to encapsulate and encrypt network traffic. May require additional kernel modules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=ipsec")),(0,r.kt)("td",{parentName:"tr",align:null},"Use strongSwan IPSec via the ",(0,r.kt)("inlineCode",{parentName:"td"},"swanctl")," binary to encrypt network traffic. (Deprecated; will be removed in v1.27.0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard")),(0,r.kt)("td",{parentName:"tr",align:null},"Use WireGuard via the ",(0,r.kt)("inlineCode",{parentName:"td"},"wg")," binary to encrypt network traffic. May require additional kernel modules and configuration. (Deprecated; will be removed in v1.26.0)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--flannel-backend=none")),(0,r.kt)("td",{parentName:"tr",align:null},"Disable Flannel entirely.")))),(0,r.kt)("admonition",{title:"Version Gate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"K3s no longer includes strongSwan ",(0,r.kt)("inlineCode",{parentName:"p"},"swanctl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"charon")," binaries starting with the 2022-12 releases (v1.26.0+k3s1, v1.25.5+k3s1, v1.24.9+k3s1, v1.23.15+k3s1). Please install the correct packages on your node before upgrading to or installing these releases if you want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ipsec")," backend.")),(0,r.kt)("h3",{id:"migrating-from-wireguard-or-ipsec-to-wireguard-native"},"Migrating from ",(0,r.kt)("inlineCode",{parentName:"h3"},"wireguard")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"ipsec")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"wireguard-native")),(0,r.kt)("p",null,"The legacy ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard")," backend requires installation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"wg")," tool on the host. This backend will be removed in K3s v1.26, in favor of ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard-native")," backend, which directly interfaces with the kernel."),(0,r.kt)("p",null,"The legacy ",(0,r.kt)("inlineCode",{parentName:"p"},"ipsec")," backend requires installation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"swanctl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"charon")," binaries on the host. This backend will be removed in K3s v1.27, in favor of the ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard-native")," backend."),(0,r.kt)("p",null,"We recommend that users migrate to the new backend as soon as possible. The migration requires a short period of downtime while nodes come up with the new configuration. You should follow these two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update the K3s config on all server nodes. If using config files, the ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/config.yaml")," should include ",(0,r.kt)("inlineCode",{parentName:"li"},"flannel-backend: wireguard-native")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"flannel-backend: wireguard")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"flannel-backend: ipsec"),". If you are configuring K3s via CLI flags in the systemd unit, the equivalent flags should be changed."),(0,r.kt)("li",{parentName:"ol"},"Reboot all nodes, starting with the servers.")),(0,r.kt)("h2",{id:"custom-cni"},"Custom CNI"),(0,r.kt)("p",null,"Start K3s with ",(0,r.kt)("inlineCode",{parentName:"p"},"--flannel-backend=none")," and install your CNI of choice. Most CNI plugins come with their own network policy engine, so it is recommended to set ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-network-policy")," as well to avoid conflicts. IP Forwarding should be enabled for Canal and Calico; please reference the steps below."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Canal",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigera.io/calico/"},"Project Calico Docs")," website. Follow the steps to install Canal. Modify the Canal YAML so that IP forwarding is allowed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"container_settings")," section, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n  "allow_ip_forwarding": true\n}\n')),(0,r.kt)("p",null,"Apply the Canal YAML."),(0,r.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-canal.conflist\n")),(0,r.kt)("p",null,"You should see that IP forwarding is set to true.")),(0,r.kt)(o.Z,{value:"Calico",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigera.io/calico/latest/reference/configure-cni-plugins"},"Calico CNI Plugins Guide"),". Modify the Calico YAML so that IP forwarding is allowed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"container_settings")," section, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n  "allow_ip_forwarding": true\n}\n')),(0,r.kt)("p",null,"Apply the Calico YAML."),(0,r.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-calico.conflist\n")),(0,r.kt)("p",null,"You should see that IP forwarding is set to true."))),(0,r.kt)("h2",{id:"control-plane-egress-selector-configuration"},"Control-Plane Egress Selector configuration"),(0,r.kt)("p",null,"K3s agents and servers maintain websocket tunnels between nodes that are used to encapsulate bidirectional communication between the control-plane (apiserver) and agent (kubelet and containerd) components.\nThis allows agents to operate without exposing the kubelet and container runtime streaming ports to incoming connections, and for the control-plane to connect to cluster services when operating with the agent disabled.\nThis functionality is equivalent to the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/"},"Konnectivity")," service commonly used on other Kubernetes distributions, and is managed via the apiserver's egress selector configuration."),(0,r.kt)("p",null,"The egress selector mode may be configured on servers via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--egress-selector-mode")," flag, and offers four modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disabled"),": The apiserver does not use agent tunnels to communicate with kubelets or cluster endpoints.\nThis mode requires that servers run the kubelet, CNI, and kube-proxy, and have direct connectivity to agents, or the apiserver will not be able to access service endpoints or perform ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl exec")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl logs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"agent")," (default): The apiserver uses agent tunnels to communicate with kubelets.\nThis is mode requires that servers also run the kubelet, CNI, and kube-proxy, or the apiserver will not be able to access service endpoints."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pod"),": The apiserver uses agent tunnels to communicate with kubelets and service endpoints, routing endpoint connections to the correct agent by watching Nodes.\n",(0,r.kt)("strong",{parentName:"li"},"NOTE"),": This will not work when using a CNI that uses its own IPAM and does not respect the node's PodCIDR allocation. ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"agent")," should be used with these CNIs instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster"),": The apiserver uses agent tunnels to communicate with kubelets and service endpoints, routing endpoint connections to the correct agent by watching Endpoints.")),(0,r.kt)("h2",{id:"dual-stack-ipv4--ipv6-networking"},"Dual-stack (IPv4 + IPv6) Networking"),(0,r.kt)("admonition",{title:"Version Gate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Experimental support is available as of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.0%2Bk3s1"},"v1.21.0+k3s1"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Stable support is available as of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.23.7%2Bk3s1"},"v1.23.7+k3s1"),". ")),(0,r.kt)("admonition",{title:"Known Issue ",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Kubernetes v1.24 and v1.25 include ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/111695"},"an issue")," that ignores the node IPv6 addresses if you have a dual-stack environment and you are not using the primary network interface for cluster traffic. To avoid this bug, add the following flag to both K3s servers and agents:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'--kubelet-arg="node-ip=0.0.0.0" # To proritize IPv4 traffic\n#OR\n--kubelet-arg="node-ip=::" # To proritize IPv6 traffic\n'))),(0,r.kt)("p",null,"Dual-stack networking must be configured when the cluster is first created. It cannot be enabled on an existing cluster once it has been started as IPv4-only."),(0,r.kt)("p",null,"To enable dual-stack in K3s, you must provide valid dual-stack ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"service-cidr")," on all server nodes. This is an example of a valid configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--cluster-cidr=10.42.0.0/16,2001:cafe:42:0::/56 --service-cidr=10.43.0.0/16,2001:cafe:42:1::/112\n")),(0,r.kt)("p",null,"Note that you may configure any valid ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"service-cidr")," values, but the above masks are recommended. If you change the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," mask, you should also change the ",(0,r.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size-ipv4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size-ipv6")," values to match the planned pods per node and total node count. The largest supported ",(0,r.kt)("inlineCode",{parentName:"p"},"service-cidr")," mask is /12 for IPv4, and /112 for IPv6. Remember to allow ipv6 traffic if you are deploying in a public cloud."),(0,r.kt)("p",null,"If you are using a custom CNI plugin, i.e. a CNI plugin other than Flannel, the additional configuration may be required. Please consult your plugin's dual-stack documentation and verify if network policies can be enabled."),(0,r.kt)("h2",{id:"single-stack-ipv6-networking"},"Single-stack IPv6 Networking"),(0,r.kt)("admonition",{title:"Version Gate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Available as of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.22.9%2Bk3s1"},"v1.22.9+k3s1"))),(0,r.kt)("admonition",{title:"Known Issue",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If your IPv6 default route is set by a router advertisement (RA), you will need to set the sysctl ",(0,r.kt)("inlineCode",{parentName:"p"},"net.ipv6.conf.all.accept_ra=2"),"; otherwise, the node will drop the default route once it expires. Be aware that accepting RAs could increase the risk of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/91507"},"man-in-the-middle attacks"),".")),(0,r.kt)("p",null,"Single-stack IPv6 clusters (clusters without IPv4) are supported on K3s using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--service-cidr")," flags. This is an example of a valid configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--cluster-cidr=2001:cafe:42:0::/56 --service-cidr=2001:cafe:42:1::/112\n")),(0,r.kt)("h2",{id:"distributed-hybrid-or-multicloud-cluster"},"Distributed hybrid or multicloud cluster"),(0,r.kt)("p",null,"A K3s cluster can still be deployed on nodes which use different private networks and are not directly connected (e.g. nodes in different public clouds). To achieve this, K3s sets a mesh of tunnels that become a VPN mesh. These nodes must have have an assigned IP through which they can be reached (e.g. a public IP). The server traffic will use a websocket tunnel and the data-plane traffic will use a wireguard tunnel."),(0,r.kt)("p",null,"To enable this type of deployment, you must add the following parameters on servers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip=<SERVER_EXTERNAL_IP> --flannel-backend=wireguard-native --flannel-external-ip\n")),(0,r.kt)("p",null,"and on agents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip=<AGENT_EXTERNAL_IP>\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," is the IP through which we can reach the server node and ",(0,r.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," is the IP through which we can reach the agent/worker node. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"K3S_URL")," config parameter in the agent/worker should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," to be able to connect to it. Remember to check the ",(0,r.kt)("a",{parentName:"p",href:"/kr/installation/requirements#networking"},"Networking Requirements")," and allow access to the listed ports on both internal and external addresses."),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," must have connectivity between them and are normally public IPs."),(0,r.kt)("admonition",{title:"Dynamic IPs",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If nodes are assigned dynamic IPs and the IP changes (e.g. in AWS), you must modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"--node-external-ip")," parameter to reflect the new IP. If running k3s as a service, you must modify ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/k3s.service")," then run:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl restart k3s\n"))),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The latency between nodes will increase as external connectivity requires more hops. This will reduce the network performance and could also impact the health of the cluster if latency is too high.")),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Embedded etcd will not use external IPs for communication. If using embedded etcd; all server nodes must be reachable to each other via their private IPs.")))}m.isMDXComponent=!0}}]);