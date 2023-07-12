"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,k=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const l={title:"Resource Profiling",weight:1},i=void 0,o={unversionedId:"reference/resource-profiling",id:"reference/resource-profiling",title:"Resource Profiling",description:"This section captures the results of tests to determine minimum resource requirements for K3s.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/reference/resource-profiling.md",sourceDirName:"reference",slug:"/reference/resource-profiling",permalink:"/kr/reference/resource-profiling",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/resource-profiling.md",tags:[],version:"current",lastUpdatedAt:1689191560,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"Resource Profiling",weight:1},sidebar:"mySidebar",previous:{title:"Environment Variables",permalink:"/kr/reference/env-variables"},next:{title:"\uc54c\ub824\uc9c4 \uc774\uc288",permalink:"/kr/known-issues/"}},s={},u=[{value:"Scope of Resource Testing",id:"scope-of-resource-testing",level:2},{value:"Components Included for Baseline Measurements",id:"components-included-for-baseline-measurements",level:2},{value:"Methodology",id:"methodology",level:2},{value:"Environment",id:"environment",level:2},{value:"Baseline Resource Requirements",id:"baseline-resource-requirements",level:2},{value:"K3s Server with a Workload",id:"k3s-server-with-a-workload",level:3},{value:"K3s Cluster with a Single Agent",id:"k3s-cluster-with-a-single-agent",level:3},{value:"K3s Agent",id:"k3s-agent",level:3},{value:"Analysis",id:"analysis",level:2},{value:"Primary Resource Utilization Drivers",id:"primary-resource-utilization-drivers",level:3},{value:"Preventing Agents and Workloads from Interfering with the Cluster Datastore",id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",level:3}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section captures the results of tests to determine minimum resource requirements for K3s."),(0,a.kt)("p",null,"The results are summarized as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Components"),(0,a.kt)("th",{parentName:"tr",align:null},"Processor"),(0,a.kt)("th",{parentName:"tr",align:null},"Min CPU"),(0,a.kt)("th",{parentName:"tr",align:null},"Min RAM with Kine/SQLite"),(0,a.kt)("th",{parentName:"tr",align:null},"Min RAM with Embedded etcd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K3s server with a workload"),(0,a.kt)("td",{parentName:"tr",align:null},"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz"),(0,a.kt)("td",{parentName:"tr",align:null},"10% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"768 M"),(0,a.kt)("td",{parentName:"tr",align:null},"896 M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K3s cluster with a single agent"),(0,a.kt)("td",{parentName:"tr",align:null},"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz"),(0,a.kt)("td",{parentName:"tr",align:null},"10% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"512 M"),(0,a.kt)("td",{parentName:"tr",align:null},"768 M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K3s agent"),(0,a.kt)("td",{parentName:"tr",align:null},"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz"),(0,a.kt)("td",{parentName:"tr",align:null},"5% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"256 M"),(0,a.kt)("td",{parentName:"tr",align:null},"256 M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K3s server with a workload"),(0,a.kt)("td",{parentName:"tr",align:null},"Pi4B BCM2711, 1.50 GHz"),(0,a.kt)("td",{parentName:"tr",align:null},"20% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"768 M"),(0,a.kt)("td",{parentName:"tr",align:null},"896 M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K3s cluster with a single agent"),(0,a.kt)("td",{parentName:"tr",align:null},"Pi4B BCM2711, 1.50 GHz"),(0,a.kt)("td",{parentName:"tr",align:null},"20% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"512 M"),(0,a.kt)("td",{parentName:"tr",align:null},"768 M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K3s agent"),(0,a.kt)("td",{parentName:"tr",align:null},"Pi4B BCM2711, 1.50 GHz"),(0,a.kt)("td",{parentName:"tr",align:null},"10% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"256 M"),(0,a.kt)("td",{parentName:"tr",align:null},"256 M")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#scope-of-resource-testing"},"Scope of Resource Testing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#components-included-for-baseline-measurements"},"Components Included for Baseline Measurements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#methodology"},"Methodology")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#environment"},"Environment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#baseline-resource-requirements"},"Baseline Resource Requirements"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#k3s-server-with-a-workload"},"K3s Server with a Workload")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#k3s-cluster-with-a-single-agent"},"K3s Cluster with a Single Agent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#k3s-agent"},"K3s Agent")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#analysis"},"Analysis"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#primary-resource-utilization-drivers"},"Primary Resource Utilization Drivers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore"},"Preventing Agents and Workloads from Interfering with the Cluster Datastore"))))),(0,a.kt)("h2",{id:"scope-of-resource-testing"},"Scope of Resource Testing"),(0,a.kt)("p",null,"The resource tests were intended to address the following problem statements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On a single-node cluster, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside to run the entire K3s stack server stack, assuming that a real workload will be deployed on the cluster."),(0,a.kt)("li",{parentName:"ul"},"On an agent (worker) node, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside for the Kubernetes and K3s control plane components (the kubelet and k3s agent).")),(0,a.kt)("h2",{id:"components-included-for-baseline-measurements"},"Components Included for Baseline Measurements"),(0,a.kt)("p",null,"The tested components are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"K3s 1.19.2 with all packaged components enabled"),(0,a.kt)("li",{parentName:"ul"},"Prometheus + Grafana monitoring stack"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes Example PHP Guestbook app")),(0,a.kt)("p",null,"These are baseline figures for a stable system using only K3s packaged components (Traefik Ingress, Klipper lb, local-path storage) running a standard monitoring stack (Prometheus and Grafana) and the Guestbook example app."),(0,a.kt)("p",null,"Resource figures including IOPS are for the Kubernetes datastore and control plane only, and do not include overhead for system-level management agents or logging, container image management, or any workload-specific requirements. "),(0,a.kt)("h2",{id:"methodology"},"Methodology"),(0,a.kt)("p",null,"A standalone instance of Prometheus v2.21.0 was used to collect host CPU, memory, and disk IO statistics using ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus-node-exporter")," installed via apt."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"systemd-cgtop")," was used to spot-check systemd cgroup-level CPU and memory utilization. ",(0,a.kt)("inlineCode",{parentName:"p"},"system.slice/k3s.service")," tracks resource utilization for both K3s and containerd, while individual pods are under the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubepods")," hierarchy."),(0,a.kt)("p",null,"Additional detailed K3s memory utilization data was collected from the ",(0,a.kt)("inlineCode",{parentName:"p"},"process_resident_memory_bytes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"go_memstats_alloc_bytes")," metrics using the kubelet exporter integrated into the server and agent processes."),(0,a.kt)("p",null,"Utilization figures were based on 95th percentile readings from steady state operation on nodes running the described workloads."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"OS: Ubuntu 20.04 x86_64, aarch64"),(0,a.kt)("p",null,"Hardware:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AWS c5d.xlarge - 4 core, 8 GB RAM, NVME SSD"),(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi 4 Model B - 4 core, 8 GB RAM, Class 10 SDHC")),(0,a.kt)("h2",{id:"baseline-resource-requirements"},"Baseline Resource Requirements"),(0,a.kt)("p",null,"This section captures the results of tests to determine minimum resource requirements for the K3s agent, the K3s server with a workload, and the K3s server with one agent."),(0,a.kt)("h3",{id:"k3s-server-with-a-workload"},"K3s Server with a Workload"),(0,a.kt)("p",null,"These are the requirements for a single-node cluster in which the K3s server shares resources with a workload."),(0,a.kt)("p",null,"The CPU requirements are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Tested Processor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"20% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"Low-power processor such as Pi4B BCM2711, 1.50 GHz")))),(0,a.kt)("p",null,"The IOPS and memory requirements are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Tested Datastore"),(0,a.kt)("th",{parentName:"tr",align:null},"IOPS"),(0,a.kt)("th",{parentName:"tr",align:null},"KiB/sec"),(0,a.kt)("th",{parentName:"tr",align:null},"Latency"),(0,a.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kine/SQLite"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"< 10 ms"),(0,a.kt)("td",{parentName:"tr",align:null},"768 M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Embedded etcd"),(0,a.kt)("td",{parentName:"tr",align:null},"50"),(0,a.kt)("td",{parentName:"tr",align:null},"250"),(0,a.kt)("td",{parentName:"tr",align:null},"< 5 ms"),(0,a.kt)("td",{parentName:"tr",align:null},"896 M")))),(0,a.kt)("h3",{id:"k3s-cluster-with-a-single-agent"},"K3s Cluster with a Single Agent"),(0,a.kt)("p",null,"These are the baseline requirements for a K3s cluster with a K3s server node and a K3s agent, but no workload."),(0,a.kt)("p",null,"The CPU requirements are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Tested Processor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"20% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"Pi4B BCM2711, 1.50 GHz")))),(0,a.kt)("p",null,"The IOPS and memory requirements are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Datastore"),(0,a.kt)("th",{parentName:"tr",align:null},"IOPS"),(0,a.kt)("th",{parentName:"tr",align:null},"KiB/sec"),(0,a.kt)("th",{parentName:"tr",align:null},"Latency"),(0,a.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kine/SQLite"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"< 10 ms"),(0,a.kt)("td",{parentName:"tr",align:null},"512 M")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Embedded etcd"),(0,a.kt)("td",{parentName:"tr",align:null},"50"),(0,a.kt)("td",{parentName:"tr",align:null},"250"),(0,a.kt)("td",{parentName:"tr",align:null},"< 5 ms"),(0,a.kt)("td",{parentName:"tr",align:null},"768 M")))),(0,a.kt)("h3",{id:"k3s-agent"},"K3s Agent"),(0,a.kt)("p",null,"The CPU requirements are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Tested Processor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10% of a core"),(0,a.kt)("td",{parentName:"tr",align:null},"Pi4B BCM2711, 1.50 GHz")))),(0,a.kt)("p",null,"256 M of RAM is required."),(0,a.kt)("h2",{id:"analysis"},"Analysis"),(0,a.kt)("p",null,"This section captures what has the biggest impact on K3s server and agent utilization, and how the cluster datastore can be protected from interference from agents and workloads."),(0,a.kt)("h3",{id:"primary-resource-utilization-drivers"},"Primary Resource Utilization Drivers"),(0,a.kt)("p",null,"K3s server utilization figures are primarily driven by support of the Kubernetes datastore (kine or etcd), API Server, Controller-Manager, and Scheduler control loops, as well as any management tasks necessary to effect changes to the state of the system. Operations that place additional load on the Kubernetes control plane, such as creating/modifying/deleting resources, will cause temporary spikes in utilization. Using operators or apps that make extensive use of the Kubernetes datastore (such as Rancher or other Operator-type applications) will increase the server's resource requirements. Scaling up the cluster by adding additional nodes or creating many cluster resources will increase the server's resource requirements."),(0,a.kt)("p",null,"K3s agent utilization figures are primarily driven by support of container lifecycle management control loops. Operations that involve managing images, provisioning storage, or creating/destroying containers will cause temporary spikes in utilization. Image pulls in particular are typically highly CPU and IO bound, as they involve decompressing image content to disk. If possible, workload storage (pod ephemeral storage and volumes) should be isolated from the agent components (/var/lib/rancher/k3s/agent) to ensure that there are no resource conflicts."),(0,a.kt)("h3",{id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore"},"Preventing Agents and Workloads from Interfering with the Cluster Datastore"),(0,a.kt)("p",null,"When running in an environment where the server is also hosting workload pods, care should be taken to ensure that agent and workload IOPS do not interfere with the datastore."),(0,a.kt)("p",null,"This can be best accomplished by placing the server components (/var/lib/rancher/k3s/server) on a different storage medium than the agent components (/var/lib/rancher/k3s/agent), which include the containerd image store."),(0,a.kt)("p",null,"Workload storage (pod ephemeral storage and volumes) should also be isolated from the datastore."),(0,a.kt)("p",null,"Failure to meet datastore throughput and latency requirements may result in delayed response from the control plane and/or failure of the control plane to maintain system state."))}d.isMDXComponent=!0}}]);