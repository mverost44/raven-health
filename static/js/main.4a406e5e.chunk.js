(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(56),o=a.n(c),i=(a(67),a(3)),s=a(4),l=a(6),u=a(5),m=a(7),h=a(8),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"top-nav-title"},"Raven ",r.a.createElement("span",{className:"top-nav-span"},"Health"))),t=r.a.createElement("p",{className:"top-nav-title"},this.props.pageTitle);return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"top-nav"},r.a.createElement("i",{className:"fa-inverse fas fa-bars fa-lg"}),this.props.pageTitle?t:e))}}]),t}(n.Component),p=a(20),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"bottom-nav"},r.a.createElement(p.b,{to:"/"},r.a.createElement("i",{className:"fa-inverse fas fa-home fa-lg"})),r.a.createElement("i",{className:"fa-inverse fas fa-heartbeat fa-lg"}),r.a.createElement("i",{className:"fa-inverse fas fa-plus fa-lg"}),r.a.createElement(p.b,{to:"/news"},r.a.createElement("i",{className:"fa-inverse fas fa-users fa-lg"})),r.a.createElement("i",{className:"fa-inverse fas fa-bell fa-lg"})))}}]),t}(n.Component),v=a(59),b=a.n(v),g=a(60),E=(a(168),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).data={title:"Nicotine Intake",labels:["January","February","March","April","May"],datasets:[{backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"#007AFF",data:[25,20,24,19,19,16,15]}]},e.options={legend:{display:!1},maintainAspectRatio:!0},e.state={},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-container"},r.a.createElement("h1",{className:"home-greeting"},"Hello Max!"),r.a.createElement("img",{className:"home-avatar",src:b.a,alt:"avatar"}),r.a.createElement("h4",{className:"home-chart-title"},"Nicotine Intake YTD"),r.a.createElement(g.a,{className:"home-chart",data:this.data,options:this.options}),r.a.createElement("button",{className:"home-cta-button"},"Get Involved")))}}]),t}(n.Component)),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={limited:!0},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.limited,a=r.a.createElement("p",{className:"post-body"},this.props.body),n=r.a.createElement("img",{className:"post-image",src:String(this.props.image).replace("amp;s","s"),alt:"reddit"});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t?"post-container post-limiter":"post-container"},r.a.createElement("div",{className:"post-author"},this.props.author),r.a.createElement("h1",{className:"post-title"},this.props.title),this.props.image?n:a),r.a.createElement("div",{className:"post-menu"},r.a.createElement("span",{onClick:function(){return e.setState({limited:!t})}},t?"See More":"See Less")))}}]),t}(n.Component),j=(a(169),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={newsFeed:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.reddit.com/r/health/search.json?q=vaping&limit=10").then(function(e){return e.json()}).then(function(e){return e}).then(function(t){return e.setState({newsFeed:t.data.children})})}},{key:"render",value:function(){var e=this.state.newsFeed;return e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"news-container"},e.map(function(e){return r.a.createElement(w,{key:Math.random(),title:e.data.title,body:e.data.selftext,author:e.data.author,image:!!e.data.preview&&e.data.preview.images[0].source.url})}))):"spinner"}}]),t}(n.Component)),O=(a(170),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={pageTitle:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{path:"/",render:function(){return r.a.createElement(f,{pageTitle:e.state.pageTitle})}}),r.a.createElement(h.a,{path:"/",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(h.a,{exact:!0,path:"/news",render:function(){return r.a.createElement(j,null)}}))}}]),t}(n.Component)),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k=r.a.createElement(p.a,null,r.a.createElement(O,null));o.a.render(k,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/raven-health",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/raven-health","/service-worker.js");N?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(t,e)})}}()},59:function(e,t,a){e.exports=a.p+"static/media/avatar1.253d96e1.JPG"},62:function(e,t,a){e.exports=a(171)},67:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.4a406e5e.chunk.js.map