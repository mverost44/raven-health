(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(67),s=a.n(c),l=(a(79),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),d=a(7),h=a(9),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).openNav=function(){document.getElementById("sidenav").style.width="300px"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"top-nav-title"},"Raven ",r.a.createElement("span",{className:"top-nav-span"},"Health"))),a=r.a.createElement("p",{className:"top-nav-title"},this.props.pageTitle);return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"top-nav"},r.a.createElement("i",{className:"fa-inverse fas fa-bars fa-lg",onClick:function(){return e.openNav()}}),this.props.pageTitle?a:t))}}]),t}(n.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"bottom-nav"},r.a.createElement(h.b,{to:"/news"},r.a.createElement("i",{className:"fas fa-users fa-lg"})),r.a.createElement(h.b,{to:"/charts"},r.a.createElement("i",{className:"fas fa-chart-area fa-lg"})),r.a.createElement(h.b,{to:"/posts"},r.a.createElement("i",{className:"fas fa-plus fa-lg"})),r.a.createElement(h.b,{to:"/research-studies"},r.a.createElement("i",{className:"fas fa-pen fa-lg"})),r.a.createElement(h.b,{to:"/notifications"},r.a.createElement("i",{className:"fas fa-bell fa-lg"}))))}}]),t}(n.Component),v=a(28),b=a.n(v),E=(a(88),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home-container"},r.a.createElement("h1",{className:"home-greeting"},"Hello, Max!"),r.a.createElement("img",{className:"home-avatar",src:b.a,alt:"avatar"}),r.a.createElement("h3",{className:"home-feature-heading"},"New Feature Alert!"),r.a.createElement("p",{className:"home-feature-text"},"We\u2019ve teamed up with various Market Research Groups to bring paid research studies right to your phone.",r.a.createElement("br",null),r.a.createElement("br",null)," Click the button below to see how you can get involved and get paid, all from the comfort of your home."),r.a.createElement(h.b,{to:"/research-studies"},r.a.createElement("button",{className:"home-cta-button"},"Get Involved")),r.a.createElement("p",{className:"home-ps"},"(And get paid!)")))}}]),t}(n.Component)),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={limited:!0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.limited,a=r.a.createElement("p",{className:"post-body"},this.props.body),n=r.a.createElement("img",{className:"post-image",src:String(this.props.image).replace("amp;s","s"),alt:"reddit"});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post-author"},"Anonymous User"),r.a.createElement("div",{className:t?"post-container post-limiter":"post-container"},r.a.createElement("h1",{className:"post-title"},this.props.title),this.props.image?n:a),r.a.createElement("div",{className:"post-menu"},r.a.createElement("span",{onClick:function(){return e.setState({limited:!t})}},t?"See More":"See Less")))}}]),t}(n.Component),N=(a(89),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={newsFeed:null},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.reddit.com/r/health/search.json?q=vaping&limit=10").then(function(e){return e.json()}).then(function(e){return e}).then(function(t){return e.setState({newsFeed:t.data.children})})}},{key:"render",value:function(){var e=this.state.newsFeed;return e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"news-container"},e.map(function(e){return r.a.createElement(g,{key:Math.random(),title:e.data.title,body:e.data.selftext,image:!!e.data.preview&&e.data.preview.images[0].source.url})}))):r.a.createElement("div",{className:"news-container"},r.a.createElement("h1",{className:"loading-screen"},"Loading..."))}}]),t}(n.Component)),O=(a(90),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"study-title"},"Study Title"),r.a.createElement("div",{className:"study-container"},r.a.createElement("p",{className:"study-body"},"Lorem ipsum dolor sit amet, an facer velit fierent eam. Aperiri labores percipitur eu eos, diceret feugait eloquentiam qui cu, sit diceret pericula eu. Vocent assueverit deterruisset ei vel, ad cum quem iudico. Vix iuvaret phaedrum an, erant intellegat temporibus an per."),r.a.createElement("button",{className:"study-button"},"Take Survey")));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"research-container"},e,e,e,e,e,e))}}]),t}(n.Component)),k=a(42),j=a(71),y=a.n(j),w=(a(182),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).lineData={title:"Nicotine Intake",labels:["January","February","March","April","May"],datasets:[{backgroundColor:"rgba(0, 0, 0, 0)",borderColor:"#007AFF",data:[25,20,24,19,19,16,15]}]},e.lineOptions={legend:{display:!1},maintainAspectRatio:!1},e.doughnutData={labels:["Green","Yellow"],datasets:[{data:[300,50],backgroundColor:["#FF6384","#36A2EB"],hoverBackgroundColor:["#FF6384","#36A2EB"]}]},e.doughnutOptions={legend:{display:!1},maintainAspectRatio:!0},e.state={},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"charts-container"},r.a.createElement("h4",{className:"line-chart-title"},"Weekly Nicotine Intake"),r.a.createElement("div",{className:"doughnut-chart"},r.a.createElement(k.a,{data:this.doughnutData,options:this.doughnutOptions})),r.a.createElement("img",{className:"charts-picture",src:y.a,alt:"graphs"}),r.a.createElement("h4",{className:"line-chart-title"},"Nicotine Intake YTD"),r.a.createElement("div",{className:"line-chart"},r.a.createElement(k.b,{data:this.lineData,options:this.lineOptions,style:{width:"85%",height:"auto"}}))))}}]),t}(n.Component)),C=a(29),F=a.n(C),x=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message-container"},r.a.createElement("h1",{className:"message-title"},this.props.name),r.a.createElement("p",{className:"message-body"},this.props.feedback)))}}]),t}(n.Component),S=(a(201),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={messages:null},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;return F()({method:"GET",url:"https://lit-scrubland-16118.herokuapp.com/posts"}).then(function(t){return e.setState({messages:t.data.posts})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.messages;return e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"messages-container"},e.map(function(e){return r.a.createElement(x,{key:e.id,name:e.name,feedback:e.feedback})}))):r.a.createElement("div",{className:"messages-container"},r.a.createElement("h1",{className:"loading-screen"},"Loading..."))}}]),t}(n.Component)),A=a(72),T=(a(202),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=Object(A.a)({},t.target.name,t.target.value);e.setState(a)},e.handleSubmit=function(t,a){return F()({method:"POST",url:"https://lit-scrubland-16118.herokuapp.com/posts",data:{post:{name:t,feedback:a}}}).then(function(){return e.setState({name:"",feedback:""})})},e.state={name:"",feedback:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.feedback;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"feedback-container"},r.a.createElement("div",{className:"form-container"},r.a.createElement("h1",{className:"form-title"},"Feedback"),r.a.createElement("p",{className:"form-text"},"Thank you for taking the time to look through Raven Health!"),r.a.createElement("form",{className:"pure-form"},r.a.createElement("input",{type:"text",className:"pure-input",placeholder:"Name (Optional)",name:"name",onChange:function(t){return e.handleChange(t)},value:a}),r.a.createElement("textarea",{className:"pure-input",placeholder:"Feedback",name:"feedback",onChange:function(t){return e.handleChange(t)},value:n})),r.a.createElement("button",{className:"form-button",onClick:function(){return e.handleSubmit(a,n)}},"Submit"))))}}]),t}(n.Component)),M=(a(203),a(73)),R=a.n(M),W=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"notification-container"},r.a.createElement("img",{className:"notification-avatar",src:R.a,alt:"avatar"}),r.a.createElement("div",{className:"notification-text"},r.a.createElement("h3",{className:"notification-title"},"Hey There!"),r.a.createElement("p",{className:"notification-body"},"Have anything you want to say? We love feedback! The + sign in the bottom menu will take you to our feedback page. Just write your comment and click post!"))));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"notifications-banner"},"Recent"),r.a.createElement("div",{className:"notifications-container"},e))}}]),t}(n.Component),B=(a(204),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).closeNav=function(){document.getElementById("sidenav").style.width="0"},e.state={pageTitle:null},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement("i",{className:"fas fa-circle fa-2x"},r.a.createElement("span",{className:"fa-layers-text"},"1"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(f,{pageTitle:e.state.pageTitle})}}),r.a.createElement(d.a,{path:"/",render:function(){return r.a.createElement(p,null)}}),r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(d.a,{exact:!0,path:"/news",render:function(){return r.a.createElement(N,null)}}),r.a.createElement(d.a,{exact:!0,path:"/research-studies",render:function(){return r.a.createElement(O,null)}}),r.a.createElement(d.a,{exact:!0,path:"/charts",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(d.a,{exact:!0,path:"/posts",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(d.a,{exact:!0,path:"/messages",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(d.a,{exact:!0,path:"/notifications",render:function(){return r.a.createElement(W,null)}}),r.a.createElement("div",{id:"sidenav",className:"sidenav"},r.a.createElement("div",{className:"sidenav-header"},r.a.createElement("img",{className:"sidenav-avatar",src:b.a,alt:"avatar"}),r.a.createElement("h3",{className:"sidenav-username"},"Max VeRost",r.a.createElement("br",null),r.a.createElement("span",{className:"sidenav-user-location"},"Boston, MA")),r.a.createElement("span",{className:"closebtn",onClick:function(){return e.closeNav()}},"\xd7")),r.a.createElement("div",{className:"sidenav-link-container"},r.a.createElement(h.b,{to:"/messages",className:"sidenav-link",onClick:function(){return e.closeNav()}},r.a.createElement("i",{className:"fa-inverse fas fa-envelope fa-lg"}),"Messages"),r.a.createElement(h.b,{to:"/notifications",className:"sidenav-link",onClick:function(){return e.closeNav()}},r.a.createElement("i",{className:"fas fa-bell fa-lg"}),"Notifications",t),r.a.createElement("span",{className:"sidenav-link"},r.a.createElement("i",{className:"fa-inverse fas fa-cog fa-lg"}),"Settings"))))}}]),t}(n.Component)),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var G=r.a.createElement(h.a,null,r.a.createElement(B,null));s.a.render(G,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/raven-health",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/raven-health","/service-worker.js");D?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):I(t,e)})}}()},28:function(e,t,a){e.exports=a.p+"static/media/avatar1.253d96e1.JPG"},71:function(e,t,a){e.exports=a.p+"static/media/graphs.758fde0e.png"},73:function(e,t,a){e.exports=a.p+"static/media/avatar2.8560ba46.JPG"},74:function(e,t,a){e.exports=a(205)},79:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.a9b20c6e.chunk.js.map