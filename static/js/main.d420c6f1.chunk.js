(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/portrait-dramatic.56e11504.jpg"},function(e,t,a){e.exports=a.p+"static/media/portrait-vivid.ae2b7e9c.jpg"},,function(e,t,a){e.exports=a.p+"static/media/Hide-N-Seek-Animated-Mockup.552f738a.gif"},function(e,t,a){e.exports=a.p+"static/media/language-leap.37fc8e89.jpg"},function(e,t,a){e.exports=a.p+"static/media/got-events.f27e07d1.jpg"},function(e,t,a){e.exports=a.p+"static/media/rising.4d5c3b5e.jpg"},function(e,t,a){e.exports=a.p+"static/media/bg.ad11bb37.jpg"},function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),i=(a(24),a(1)),s=a(2),l=a(4),u=a(3),m=a(5),d=(a(6),a(9)),p=a.n(d),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(){var e=a.state.prevScrollpos,t=window.pageYOffset,n=e>t;a.setState({prevScrollpos:t,visible:n})},a.onButtonClick=function(e){switch(e){case"projects":a.setState({projects:!0,work:!1,about:!1,contact:!1});break;case"work":a.setState({projects:!1,work:!0,about:!1,contact:!1});break;case"about":a.setState({projects:!1,work:!1,about:!0,contact:!1});break;case"contact":a.setState({projects:!1,work:!1,about:!1,contact:!0})}},a.state={projects:!1,work:!1,about:!1,contact:!1,prevScrollpos:window.pageYOffset,visible:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:p()("header-container",{"header-container-hidden":!this.state.visible})},o.a.createElement("span",{className:"header-logo"},o.a.createElement("a",{href:"index.html"},"Bailey Waldorf")),o.a.createElement("span",{className:"nav-buttons-container"},o.a.createElement("span",{className:this.state.projects?"nav-buttons-selected":"nav-buttons"},o.a.createElement("a",{href:"#projects",onClick:function(){e.onButtonClick("projects")}},"Projects")),o.a.createElement("span",{className:this.state.work?"nav-buttons-selected":"nav-buttons"},o.a.createElement("a",{href:"#experience",onClick:function(){e.onButtonClick("work")}},"Work")),o.a.createElement("span",{className:this.state.about?"nav-buttons-selected":"nav-buttons"},o.a.createElement("a",{href:"#about",onClick:function(){e.onButtonClick("about")}},"About")),o.a.createElement("span",{className:this.state.contact?"nav-buttons-selected":"nav-buttons"},o.a.createElement("a",{href:"index.html",onClick:function(){e.onButtonClick("contact")}},"Contact"))))}}]),t}(n.Component),b=a(10),g=a.n(b),f=a(11),v=a.n(f),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hovered:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"home-page"},o.a.createElement("div",{className:"about-container"},o.a.createElement("span",{className:"about-txt-container"},o.a.createElement("div",{className:"txt-hello"},"Hello, I'm"),o.a.createElement("div",{className:"txt-name"},"Bailey Waldorf"),o.a.createElement("br",null),o.a.createElement("h2",null,"CS Student at University of Central Florida"),o.a.createElement("h4",null,"Previously at\xa0",o.a.createElement("form",{action:"https://www.americanexpress.com/",method:"get",target:"_blank"},o.a.createElement("button",{className:"txt-company"},"American Express")),",\xa0",o.a.createElement("form",{action:"https://www.homedepot.com/",method:"get",target:"_blank"},o.a.createElement("button",{className:"txt-company"},"Home Depot")),",\xa0and\xa0",o.a.createElement("form",{action:"https://www.journeylabs.io/",method:"get",target:"_blank"},o.a.createElement("button",{className:"txt-company"},"JourneyLabs"))),o.a.createElement("br",null),o.a.createElement("div",null,"I'm a software engineer based in Orlando, FL with experience in web development and design. Lately I've been working on an AI for NASA's Jet Propulsion Laboratory and using Spotify's API to experiment on human communication through music. Check out my work below and don't be afraid to reach out!")),o.a.createElement("span",{className:"about-pic-container"},o.a.createElement("a",{href:"https://www.linkedin.com/in/baileywaldorf/"},o.a.createElement("img",{className:"self-portrait",src:this.state.hovered?v.a:g.a,alt:"Self Portrait",onMouseEnter:function(){e.setState({hovered:!0})},onMouseLeave:function(){e.setState({hovered:!1})},height:"300px",width:"300px"})))),o.a.createElement("a",{href:"#projects",class:"ca3-scroll-down-link ca3-scroll-down-arrow","data-ca3_iconfont":"ETmodules","data-ca3_icon":""}))}}]),t}(n.Component),E=a(12),j=a.n(E),k=(a(27),function(e){return j.a.init(),o.a.createElement("a",{href:e.URL,target:"_blank"},o.a.createElement("div",{class:"project-card","data-aos":"zoom-in"},o.a.createElement("img",{src:e.picture,alt:"not found",align:"middle",height:"270px",width:"100%",style:{opacity:"0.9"}}),o.a.createElement("h2",{className:"project-title"},e.title),o.a.createElement("div",{className:"project-subtitle"},e.technologies),o.a.createElement("div",{className:"project-body"},e.body)))}),y=a(13),x=a.n(y),N=a(14),S=a.n(N),O=a(15),L=a.n(O),C=a(16),R=a.n(C),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).projects={projects:[{title:"Hide-N-Seek",subTitle:"Project Lead & Developer",technologies:"React Native, Firestore, Node, Express",body:"Real time hide-n-seek mobile game where friends can relive their childhood.",picture:x.a,URL:"https://github.com/BaileyWaldorf/Hide-N-Seek-IRL"},{title:"Language Leap",subTitle:"Developer & Designer",technologies:"Dart, Flutter, Android Studio, Hackathon",body:"Using Google Vision and Google Translate to teach new languages.",picture:S.a,URL:"https://github.com/BaileyWaldorf/LanguageLeap"},{title:"UCF Events Page Recreation",subTitle:"Project Lead, Developer, & Designer",technologies:"React, mySQL, Node, Express",body:"A CRUD app to view and manage events going on around school.",picture:L.a,URL:"https://github.com/BaileyWaldorf/Got-Events"},{title:"Rising",subTitle:"Scripter & Graphic Designer",technologies:"Unity, C#, GameJam, React, Grafana",body:"A shared controller experience where you must use teamwork and wit to complete puzzles.",picture:R.a,URL:"https://risinggame.itch.io/rising"}]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"projects-container"},o.a.createElement("a",{id:"projects",style:{marginTop:"0px"}}),o.a.createElement("div",{className:"projects-section-header"},"Some things I've built"),o.a.createElement("div",{class:"projects-tile-container"},this.projects.projects.map(function(e,t){return o.a.createElement(k,{title:e.title,subTitle:e.subTitle,technologies:e.technologies,body:e.body,picture:e.picture,index:t,URL:e.URL})})))}}]),t}(n.Component),U=a(17),B={backgroundImage:"url(".concat(a.n(U).a,")"),backgroundSize:"cover",overflow:"hidden",textAlign:"center",height:"200vh",color:"#333"},D=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App",style:B},o.a.createElement(h,null),o.a.createElement(w,null),o.a.createElement(A,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,2,1]]]);
//# sourceMappingURL=main.d420c6f1.chunk.js.map