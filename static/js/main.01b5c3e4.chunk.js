(this.webpackJsonppingpong=this.webpackJsonppingpong||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/retro.fa31ab20.png"},18:function(e,a,t){e.exports=t.p+"static/media/map.33455653.png"},19:function(e,a,t){e.exports=t.p+"static/media/defaultProfil.5a021ab9.png"},20:function(e,a,t){e.exports=t(32)},25:function(e,a,t){},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),m=(t(25),t(26),t(3)),o=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(m.c,{className:"navbar-brand",to:"/"},"TTSauveniere"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.c,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.c,{className:"nav-link",to:"/training"},"Entrainements")),r.a.createElement("li",{className:"nav-item dropdown active"},r.a.createElement(m.c,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Membres"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement(m.c,{className:"dropdown-item",to:"/member"},"Liste de force"),r.a.createElement(m.c,{className:"dropdown-item",to:"/member"},"Devenir membre"))),r.a.createElement("li",{className:"nav-item dropdown active"},r.a.createElement(m.c,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Contact"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement(m.c,{className:"dropdown-item",to:"/numeroResponsables"},"Responsables"),r.a.createElement(m.c,{className:"dropdown-item",to:"/mapClub"},"Nous situer")))))))},s=t(1),i=function(e){var a=e.urlLink,t=e.imageAlt,n=e.imageSource;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"pubImages",src:n,alt:t})))},u=t(9),d=t.n(u);var g={changeText:function(e){document.getElementsByClassName("h1Jumbotron")[0].innerHTML=e},changeImage:function(e){for(var a=document.getElementsByClassName("imgJumbotron"),t=0;t<2;t++)a[t].setAttribute("src",e)}},p=function(e){return Object(n.useEffect)((function(){g.changeText("<h1 class='h1Jumbotron'>Petit club mais avec des grands joueurs</h1>"),g.changeImage(d.a)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.c,{to:"member"},r.a.createElement("button",{className:"btn btn-success ml-5 mr-5"},r.a.createElement("h2",null,"Devenir Membre"))),r.a.createElement(i,{urlLink:"https://resultats.aftt.be/",imageAlt:"aftt.be",imageSource:"https://static.wixstatic.com/media/858c57_9f9b98abf5d1400b8e2a79d6d0cebe27~mv2.png/v1/crop/x_7,y_0,w_94,h_80/fill/w_54,h_45,al_c,q_85,usm_0.66_1.00_0.01/aile%20francophone%20tennis%20de%20table.webp"}),r.a.createElement(i,{urlLink:"https://www.facebook.com/groups/1647014715544179",imageAlt:"groupe facebook sauveniere",imageSource:"https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp"}))},b=t(17),E=t.n(b),h=function(e){return Object(n.useEffect)((function(){g.changeText("<h1 class='h1Jumbotron'>Les entrainements du club</h1>"),g.changeImage(E.a)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ml-3"},r.a.createElement("p",null,"Les entra\xeenements sont donn\xe9s par : ",r.a.createElement("strong",null,"Benoit de Mahieu")),r.a.createElement("p",null,"Entrainements dirig\xe9s des jeunes : ",r.a.createElement("strong",null,"Mardi 18h30-20h")),r.a.createElement("p",null,"Entrainements libres : ",r.a.createElement("strong",null,"Mardi 20h-"))))},v=function(e){var a=e.src,t=e.width,n=e.height;return r.a.createElement(r.a.Fragment,null,r.a.createElement("embed",{src:a,width:t,height:n,type:"application/pdf"}))},f=function(e){return Object(n.useEffect)((function(){g.changeText("<h1 class='h1Jumbotron'>Liste de force du TT Sauveni\xe8re</h1>")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{src:"https://drive.google.com/file/d/1Ulbk5DjZgmQ_stbusrZolzDGmF2BmArD/preview",width:"800",height:"500"}))},w=t(18),N=t.n(w),x=function(e){return Object(n.useEffect)((function(){g.changeText("<h1 class='h1Jumbotron'>Situer le club</h1>"),g.changeImage(N.a)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mapouter"},r.a.createElement("div",{className:"gmap_canvas"},r.a.createElement("iframe",{title:"clubMap",allowtransparency:"true",width:"400",height:"300",id:"gmap_canvas",src:"https://maps.google.com/maps?q=place%20du%20sablon%205030%20gembloux&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}))))},_=t(19),y=t.n(_),k=function(e){var a=e.img,t=e.alt,n=e.name,l=e.num,c=e.status;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a||y.a,className:"card-img-top",alt:t||"Avatar par d\xe9faut"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},n),r.a.createElement("div",{className:"card-text"},r.a.createElement("p",null,"Num : ",r.a.createElement("strong",null,l)),r.a.createElement("p",null,"Status : ",r.a.createElement("strong",null,c))))))},F=function(e){return Object(n.useEffect)((function(){g.changeText("<h1 class='h1Jumbotron'>Liste des repsonsables du club</h1>")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"800px"},className:"row flex pl-5"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(k,{name:"Benoit de Mahieu",num:"0491430548",status:"Entraineur"})),r.a.createElement("div",{className:"col-sm"},r.a.createElement(k,{name:"L\xe9a Litwinski",num:"04********",status:"....."})),r.a.createElement("div",{className:"col-sm"},r.a.createElement(k,{name:"Stani Litwinski",num:"04********",status:"....."}))))},T=function(e){var a=e.width,t=void 0===a?"540px":a,n=e.src,l=e.height,c=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:t,border:"solid black 1px"}},r.a.createElement("h2",{className:"mb-0",style:{textAlign:"center"}},c),r.a.createElement("iframe",{title:"contactForm",src:n,allowtransparency:"true",frameBorder:"0",width:"100%",height:l,name:"auto_size_iframe_Fc0tbw65v16jfa",id:"auto_size_iframe_Fc0tbw65v16jfa",scrolling:"no"})))},j=function(e){var a=e.text,t=void 0===a?"Petit club mais avec des grands joueurs":a,n=e.img,l=e.imgAlt,c=void 0===l?"":l,m=e.height,o=void 0===m?"45px":m;return r.a.createElement("div",{className:"jumbotron"},n&&r.a.createElement("img",{className:"imgJumbotron",src:n,alt:c,style:{height:o,width:"auto"}}),r.a.createElement("h1",{className:"h1Jumbotron"},t),n&&r.a.createElement("img",{className:"imgJumbotron",src:n,alt:c,style:{height:o,width:"auto"}}))};var A=function(){return r.a.createElement(m.a,null,r.a.createElement(o,null),r.a.createElement("main",null,r.a.createElement(j,{text:"Petit club mais avec des grands joueurs",img:d.a,imgAlt:"Raquette ping pong"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{display:"block"}},r.a.createElement(T,{width:"250",height:"450",title:"Nous contactez",src:"https://www.emailmeform.com/builder/form/yp130CamsP4TeMYAx1N"})),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/numeroResponsables",component:F}),r.a.createElement(s.a,{path:"/mapClub",component:x}),r.a.createElement(s.a,{path:"/member",component:f}),r.a.createElement(s.a,{path:"/training",component:h}),r.a.createElement(s.a,{path:"/",component:p})))),r.a.createElement("footer",null,r.a.createElement("div",{className:"page-footer align-middle",style:{textAlign:"center"}},r.a.createElement(m.b,{to:"/mapClub"},"Adresse du club : Place du sablon 5030 Sauveni\xe8re"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t.p+"static/media/ping.c83809c6.png"}},[[20,1,2]]]);
//# sourceMappingURL=main.01b5c3e4.chunk.js.map