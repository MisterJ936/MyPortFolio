(function(t){function e(e){for(var o,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},i={app:0},r=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-22f75cfe":"11a092a4","chunk-3fc51843":"236810b2","chunk-f5b1863e":"744d87cf"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-22f75cfe":1,"chunk-3fc51843":1,"chunk-f5b1863e":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-22f75cfe":"b47e9cd4","chunk-3fc51843":"bd4a5247","chunk-f5b1863e":"66d26b79"}[t]+".css",i=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05e5":function(t,e,n){},"11be":function(t,e,n){"use strict";var o=n("05e5"),a=n.n(o);a.a},"333f":function(t,e,n){},"3a19":function(t,e,n){t.exports=n.p+"img/profile.030cc9c0.jpg"},"47e2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=(n("73ec"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"vs-theme":t.$vuetify.theme.dark?"dark":"light"}},[n("v-app",[n("div",{staticClass:"show-myprofile"},[n("profileBoxToggleShow")],1),n("ThemeChanger"),n("vue-page-transition",{attrs:{name:"fade-in-left"}},[n("router-view")],1)],1)],1)}),i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting-changer"},[n("v-btn",{staticClass:"button",class:t.showButton?"night":"day",attrs:{icon:"","x-large":!(t.windowWidth<=425)},on:{click:function(e){return t.clickButton()}}},[t.showButton?n("v-icon",{attrs:{"x-large":!(t.windowWidth<=425)}},[t._v(t._s(t.mdiWeatherSunny))]):n("v-icon",{attrs:{"x-large":!(t.windowWidth<=425)}},[t._v(t._s(t.mdiWeatherNight))])],1)],1)},s=[],c=n("94ed"),l={data:function(){return{showButton:this.$vuetify.theme.dark,mdiWeatherSunny:c["I"],mdiWeatherNight:c["H"],windowWidth:window.innerWidth}},methods:{clickButton:function(){this.showButton=!this.showButton,this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("theme-select",this.$vuetify.theme.dark)},onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},u=l,d=(n("d9a1"),n("2877")),f=n("6544"),h=n.n(f),v=n("8336"),p=n("132d"),m=Object(d["a"])(u,r,s,!1,null,null,null),b=m.exports;h()(m,{VBtn:v["a"],VIcon:p["a"]});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"button-show-overlay",class:t.$vuetify.theme.dark?"night":"day",attrs:{icon:"","x-large":!(t.windowWidth<=425)},on:{click:function(e){t.overlay=!t.overlay}}},[n("v-icon",{attrs:{"x-large":!(t.windowWidth<=425)}},[t._v(t._s(t.showIcon))])],1),n("div",{class:t.overlay?"show-overlay":"",on:{click:function(e){t.overlay=!t.overlay}}}),n("div",{staticClass:"profile-box-show",style:t.overlay?"margin-left: 0px;":"margin-left: -500px;"},[n("ProfileBox",{attrs:{"full-height":!1},scopedSlots:t._u([{key:"closeButton",fn:function(){return[n("v-btn",{staticStyle:{float:"right"},attrs:{icon:""}},[n("v-icon",{on:{click:function(e){t.overlay=!t.overlay}}},[t._v(t._s(t.closeIcon))])],1)]},proxy:!0}])})],1)],1)},g=[],_="Jenuel Ganawed",y="Full Stack Web Developer",x="Hi! I live in La Trinidad, Benguet, Luzon, Philippines. I am a Web Developer. I eat rice and pay bills 👌😁👍😎",k=[{icon:c["z"],text:"La Trinidad, Benguet, Luzon, Philippines",link:"https://goo.gl/maps/t8KxqHTGDw7dfFvr8",icon_color:""},{icon:c["o"],text:"jenuelganawed936@gmail.com",link:"http://jenuelganawed936@gmail.com",icon_color:"#c71610"},{icon:c["x"],text:"jenuelganawed.ml",link:"http://jenuelganawed.ml",icon_color:""},{icon:c["F"],text:"BroJenuel",link:"https://twitter.com/BroJenuel",icon_color:"#1DA1F2"},{icon:c["y"],text:"jenuelganawed",link:"https://www.linkedin.com/in/jenuelganawed/",icon_color:"#0e76a8"},{icon:c["n"],text:"MisterJ936",link:"https://github.com/MisterJ936",icon_color:""},{icon:c["m"],text:"Download My Resume",link:"https://github.com/MisterJ936/MyPortFolio/raw/master/jenuelganawed_home/src/assets/pdf/Jenuel-Ganawed.pdf",icon_color:"#01579B"}],C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"profile-box"},[o("v-card",{staticClass:"mx-auto profile-card",style:t.fullHeight?"height: 100vh;":""},[t._t("closeButton"),o("div",[o("v-card-text",{staticStyle:{"text-align":"center"}},[o("div",{staticClass:"profile-image"},[o("img",{attrs:{src:n("3a19")}})]),o("h3",{staticClass:"headline mb-1 profile-name"},[t._v(t._s(t.name))]),o("h2",[t._v(t._s(t.username))]),o("p",{staticClass:"profile-details"},[t._v(t._s(t.about))])]),o("div",{staticClass:"profile-links"},t._l(t.links,(function(e,n){return o("span",{key:n},[o("v-icon",{staticClass:"icons",staticStyle:{display:"inline"},attrs:{small:"",color:e.icon_color}},[t._v(t._s(e.icon))]),o("a",{style:t.$vuetify.theme.dark?"color: white":"color: #2b2b2b",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))])],1)})),0)],1)],2)],1)},B=[],S={name:"Home",props:{show:{type:Boolean,default:!1},fullHeight:{type:Boolean,default:!1}},data:function(){return{name:_,username:y,about:x,links:k,overlay:!1,showIcon:c["a"],closeIcon:c["i"]}},methods:{onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},j=S,O=(n("5b7d"),n("b0af")),T=n("99d9"),E=Object(d["a"])(j,C,B,!1,null,null,null),$=E.exports;h()(E,{VCard:O["a"],VCardText:T["a"],VIcon:p["a"]});var W={name:"Home",components:{ProfileBox:$},data:function(){return{name:_,username:y,about:x,links:k,overlay:!1,showIcon:c["a"],closeIcon:c["i"],windowWidth:window.innerWidth}},methods:{onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},P=W,I=(n("11be"),Object(d["a"])(P,w,g,!1,null,null,null)),V=I.exports;h()(I,{VBtn:v["a"],VIcon:p["a"]});var z={name:"App",components:{ThemeChanger:b,profileBoxToggleShow:V},beforeCreate:function(){var t=localStorage.getItem("theme-select");t&&(this.$vuetify.theme.dark="true"==t)},data:function(){return{}}},L=z,A=n("7496"),D=Object(d["a"])(L,a,i,!1,null,null,null),H=D.exports;h()(D,{VApp:A["a"]});n("d3b7");var N=n("8c4f"),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"profile-container"},[n("div",{staticClass:"profile-box-here",staticStyle:{"margin-top":"10px"}},[n("ProfileBox",{staticClass:"float-right"})],1),n("div",{staticClass:"info-box"},[n("v-tabs",{staticClass:"tab-wide"},t._l(t.tabs,(function(e){return n("v-tab",{key:e.text,attrs:{to:e.path}},[n("v-icon",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.text)+" ")],1)})),1),n("ShowTabsOnScroll"),n("div",{staticClass:"info-box-page-view"},[n("v-card",{staticClass:"page",attrs:{loading:!1,disabled:!1}},[n("vue-page-transition",{attrs:{name:"fade-in-up"}},[n("router-view")],1)],1)],1)],1)]),n("div",{staticClass:"bottom-navigations"},[n("BottomNav")],1)])},J=[],M=[{path:"/",icon:c["B"],text:"Overview"},{path:"portfolio",icon:c["A"],text:"Portfolio"},{path:"/blog",icon:c["d"],text:"Blog"}],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{attrs:{fixed:!0,color:"primary"}},t._l(t.navs,(function(e){return n("v-btn",{key:e.text,attrs:{value:e.text,to:e.path}},[n("span",[t._v(t._s(e.text))]),n("v-icon",[t._v(t._s(e.icon))])],1)})),1)},G=[],q={data:function(){return{navs:M}}},K=q,U=n("b81c"),Y=Object(d["a"])(K,F,G,!1,null,null,null),Q=Y.exports;h()(Y,{VBottomNavigation:U["a"],VBtn:v["a"],VIcon:p["a"]});var X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"showOnScroll",class:t.active?"showOnScroll-show":"showOnScroll-hide"},[n("v-tabs",{staticClass:"tab-wide",attrs:{"background-color":t.$vuetify.theme.dark?"#121212":"grey lighten-5",centered:""}},t._l(t.tabs,(function(e){return n("v-tab",{key:e.text,attrs:{to:e.path}},[n("v-icon",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.text)+" ")],1)})),1)],1)},Z=[],tt={data:function(){return{active:!1,tabs:M}},methods:{},mounted:function(){var t=this;window.document.onscroll=function(){t.active=window.scrollY>40}}},et=tt,nt=(n("f974"),n("71a3")),ot=n("fe57"),at=Object(d["a"])(et,X,Z,!1,null,null,null),it=at.exports;h()(at,{VIcon:p["a"],VTab:nt["a"],VTabs:ot["a"]});var rt={name:"Home",components:{BottomNav:Q,ShowTabsOnScroll:it,ProfileBox:$},data:function(){return{name:_,username:y,about:x,links:k,tabs:M}},methods:{changeTheme:function(){console.log("button clickd"),this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},st=rt,ct=(n("d40d"),Object(d["a"])(st,R,J,!1,null,null,null)),lt=ct.exports;h()(ct,{VCard:O["a"],VIcon:p["a"],VTab:nt["a"],VTabs:ot["a"]});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not-found-body"},[n("div",{staticClass:"not-found-body"},[t._m(0),n("div",{staticClass:"desc"},[n("h2",[t._v("Ooops page not found!")]),n("v-btn",{attrs:{to:"/",color:"primary"}},[t._v("Go Back To Home Page")])],1)])])},dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scene"},[n("div",{staticClass:"box"},[n("div",{staticClass:"box__face front"},[t._v("4")]),n("div",{staticClass:"box__face back"},[t._v("0")]),n("div",{staticClass:"box__face right"},[t._v("4")]),n("div",{staticClass:"box__face left"},[t._v("0")]),n("div",{staticClass:"box__face top"},[t._v("0")]),n("div",{staticClass:"box__face bottom"},[t._v("0")])]),n("div",{staticClass:"shadow"})])}],ft=(n("acc0"),{}),ht=Object(d["a"])(ft,ut,dt,!1,null,null,null),vt=ht.exports;h()(ht,{VBtn:v["a"]}),o["a"].use(N["a"]);var pt=[{path:"/",component:lt,children:[{path:"",name:"overview",component:function(){return n.e("chunk-3fc51843").then(n.bind(null,"7fa2"))}},{path:"portfolio",name:"Portfolio",component:function(){return n.e("chunk-f5b1863e").then(n.bind(null,"9a81"))}}]},{path:"/blog",name:"Blog",component:function(){return n.e("chunk-22f75cfe").then(n.bind(null,"66ba"))}},{path:"*",component:vt}],mt=new N["a"]({routes:pt}),bt=mt,wt=n("f309");o["a"].use(wt["a"]);var gt={icons:{iconfont:"mdi"},theme:{dark:!0}},_t=new wt["a"](gt),yt=n("f0eb");o["a"].use(yt["default"]),o["a"].config.productionTip=!1,new o["a"]({router:bt,vuetify:_t,render:function(t){return t(H)}}).$mount("#app")},"5b7d":function(t,e,n){"use strict";var o=n("333f"),a=n.n(o);a.a},"73ec":function(t,e,n){},acc0:function(t,e,n){"use strict";var o=n("f9f2"),a=n.n(o);a.a},b35b:function(t,e,n){},d40d:function(t,e,n){"use strict";var o=n("47e2"),a=n.n(o);a.a},d9a1:function(t,e,n){"use strict";var o=n("e7c6"),a=n.n(o);a.a},e7c6:function(t,e,n){},f974:function(t,e,n){"use strict";var o=n("b35b"),a=n.n(o);a.a},f9f2:function(t,e,n){}});
//# sourceMappingURL=app.e3ade544.js.map