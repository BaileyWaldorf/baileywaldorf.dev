(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/portrait-dramatic.56e11504.jpg"},function(e,t,a){e.exports=a.p+"static/media/portrait-vivid.ae2b7e9c.jpg"},,function(e,t,a){e.exports=a.p+"static/media/Hide-N-Seek-Animated-Mockup.552f738a.gif"},function(e,t,a){e.exports=a.p+"static/media/language-leap.37fc8e89.jpg"},function(e,t,a){e.exports=a.p+"static/media/got-events.f27e07d1.jpg"},function(e,t,a){e.exports=a.p+"static/media/rising.4d5c3b5e.jpg"},function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),i=(a(23),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),d=(a(6),a(26),a(9)),p=a.n(d),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(){var e=a.state.prevScrollpos,t=window.pageYOffset,n=e>t;a.setState({prevScrollpos:t,visible:n},function(){if(!a.state.visible){var e=document.getElementById("js-menu");e.classList.contains("active")&&e.classList.toggle("active")}})},a.onButtonClick=function(e){switch(e){case"projects":a.setState({projects:!0,work:!1,about:!1,contact:!1});break;case"work":a.setState({projects:!1,work:!0,about:!1,contact:!1});break;case"contact":a.setState({projects:!1,work:!1,about:!1,contact:!0})}},a.state={projects:!1,work:!1,resume:!1,contact:!1,prevScrollpos:window.pageYOffset,visible:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll);var e=document.getElementById("js-menu"),t=document.getElementById("js-navbar-toggle"),a=document.getElementsByClassName("nav-links");t.addEventListener("click",function(){e.classList.toggle("active")});for(var n=0;n<a.length;n++)a[n].addEventListener("click",function(){e.classList.toggle("active")})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return o.a.createElement("nav",{className:p()("header-container",{"header-container-hidden":!this.state.visible})},o.a.createElement("span",{className:"header-logo"},o.a.createElement("a",{href:"index.html"},"BaileyWaldorf",o.a.createElement("span",{className:"dot-dev"},".dev"))),o.a.createElement("span",{className:"navbar-toggle",id:"js-navbar-toggle"},o.a.createElement("i",{className:"fa fa-bars"})),o.a.createElement("ul",{className:"main-nav",id:"js-menu"},o.a.createElement("li",null,o.a.createElement("a",{href:"#projects",className:"nav-links"},"Projects")),o.a.createElement("li",null,o.a.createElement("a",{href:"resume.pdf",className:"nav-links"},"Resume"))),o.a.createElement("span",{className:"nav-buttons-container"},o.a.createElement("span",{className:this.state.projects?"nav-buttons-selected":"nav-buttons"},o.a.createElement("a",{href:"#projects",onClick:function(){e.onButtonClick("projects")}},"Projects")),o.a.createElement("span",{className:this.state.resume?"nav-buttons-selected":"nav-buttons"},o.a.createElement("a",{href:"resume.pdf",target:"_blank"},"Resume"))))}}]),t}(n.Component),g=a(10),b=a.n(g),v=a(11),f=a.n(v),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={hovered:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"home-page",id:"home-page"},o.a.createElement("div",{className:"about-container"},o.a.createElement("span",{className:"about-txt-container"},o.a.createElement("div",{className:"txt-hello"},"Hello, I'm"),o.a.createElement("div",{className:"txt-name"},"Bailey Waldorf"),o.a.createElement("br",null),o.a.createElement("h2",null,"CS Student at University of Central Florida"),o.a.createElement("h4",null,"Previously at\xa0",o.a.createElement("form",{action:"https://www.americanexpress.com/",method:"get",target:"_blank"},o.a.createElement("button",{className:"txt-company"},"American Express")),",\xa0",o.a.createElement("form",{action:"https://www.homedepot.com/",method:"get",target:"_blank"},o.a.createElement("button",{className:"txt-company"},"Home Depot")),",\xa0and\xa0",o.a.createElement("form",{action:"https://www.journeylabs.io/",method:"get",target:"_blank"},o.a.createElement("button",{className:"txt-company"},"JourneyLabs"))),o.a.createElement("br",null),o.a.createElement("div",null,"I'm a software engineer based in Orlando, FL with experience in web development and design. Lately I've been working on an AI for NASA's Jet Propulsion Laboratory and using Spotify's API to experiment on human communication through music. Check out my work below and don't be afraid to reach out!")),o.a.createElement("span",{className:"about-pic-container"},o.a.createElement("a",{href:"https://www.linkedin.com/in/baileywaldorf/"},o.a.createElement("img",{className:"self-portrait",src:this.state.hovered?f.a:b.a,alt:"Self Portrait",onMouseEnter:function(){e.setState({hovered:!0})},onMouseLeave:function(){e.setState({hovered:!1})}})))),o.a.createElement("a",{href:"#projects",className:"ca3-scroll-down-link ca3-scroll-down-arrow","data-ca3_iconfont":"ETmodules","data-ca3_icon":""}))}}]),t}(n.Component),w=a(12),j=a.n(w),y=(a(28),function(e){return j.a.init(),o.a.createElement("a",{href:e.URL,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",{className:"project-card","data-aos":"zoom-in"},o.a.createElement("img",{className:"project-picture",src:e.picture,alt:"not found",align:"middle",height:"270px",width:"100%",style:{opacity:"0.9"}}),o.a.createElement("h3",{className:"project-title"},e.title),o.a.createElement("div",{className:"project-subtitle"},e.technologies),o.a.createElement("div",{className:"project-body"},e.body)))}),k=a(13),N=a.n(k),L=a(14),x=a.n(L),S=a(15),O=a.n(S),R=a(16),C=a.n(R),B=[{title:"Hide-N-Seek",subTitle:"Project Lead & Developer",technologies:"React Native, Firestore, Node, Express",body:"Real time hide-n-seek mobile game where friends can relive their childhood.",picture:N.a,URL:"https://github.com/BaileyWaldorf/Hide-N-Seek-IRL"},{title:"Language Leap",subTitle:"Developer & Designer",technologies:"Dart, Flutter, Android Studio, Hackathon",body:"Using Google Vision and Google Translate to teach new languages.",picture:x.a,URL:"https://github.com/BaileyWaldorf/LanguageLeap"},{title:"UCF Events Page Recreation",subTitle:"Project Lead, Developer, & Designer",technologies:"React, mySQL, Node, Express",body:"A CRUD app to view and manage events going on around school.",picture:O.a,URL:"https://github.com/BaileyWaldorf/Got-Events"},{title:"Rising",subTitle:"Scripter & Graphic Designer",technologies:"Unity, C#, GameJam, React, Grafana",body:"A shared controller experience where you must use teamwork to complete puzzles.",picture:C.a,URL:"https://risinggame.itch.io/rising"}],U=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"projects-container"},o.a.createElement("a",{href:"\\",id:"projects",style:{marginTop:"0px"}}),o.a.createElement("div",{className:"projects-section-header"},">_ Some things I've built"),o.a.createElement("div",{className:"projects-tile-container"},B.map(function(e,t){return o.a.createElement(y,{title:e.title,subTitle:e.subTitle,technologies:e.technologies,body:e.body,picture:e.picture,key:t,URL:e.URL})})))}}]),t}(n.Component),A={backgroundColor:"rgb(10, 25, 47)",overflow:"hidden",textAlign:"center",color:"#333"},I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App",style:A},o.a.createElement(h,null),o.a.createElement(E,null),o.a.createElement(U,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,2,1]]]);
//# sourceMappingURL=main.d599984a.chunk.js.map