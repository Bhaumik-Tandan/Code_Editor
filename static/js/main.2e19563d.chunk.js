(this.webpackJsonpcode_editor=this.webpackJsonpcode_editor||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"python":{"api_lang":"py","boiler_code":"print(\'Hello world\')","mode":"python","api_url":"http://localhost:8080"},"node":{"api_lang":"js","boiler_code":"console.log(\'Hello World\')","mode":"javascript","api_url":"http://localhost:8080"},"ruby":{"api_lang":"rb","boiler_code":"puts(\'Hello World\')","mode":"ruby","api_url":"http://localhost:8080"},"c":{"api_lang":"c","boiler_code":"#include<stdio.h>\\nint main()\\n{\\n  printf(\\"Hello World\\");\\n}","mode":"c_cpp","api_url":"http://localhost:8080"},"c++":{"api_lang":"cpp","boiler_code":"#include<iostream>\\nusing namespace std;\\nmain()\\n{\\n  cout<<\\"Hello World\\";\\n}","mode":"c_cpp","api_url":"http://localhost:8080"},"java":{"api_lang":"java","boiler_code":"public class test\\n{\\n  public static void main(String args[])\\n  {\\n    System.out.println(\\"Hello World\\");\\n  }\\n}","mode":"java","api_url":"http://localhost:8080"}}')},35:function(e){e.exports=JSON.parse('{"html":{"style":{"position":"absolute","left":"2.5vw","top":"6vh","border":"0.25vh solid #73AD21","width":"30vw","height":"50vh"},"placeholder":"ASSUME YOU ARE WRITING IN BODY DIRECTLY","mode":"html","theme":"monokai","fontSize":"1.2vw","tabSize":"2"},"css":{"style":{"position":"absolute","top":"6vh","left":"34.5vw","border":"0.25vh solid #73AD21","width":"30vw","height":"50vh"},"placeholder":"ASSUME YOU ARE WRITING IN STYLE DIRECTLY","mode":"css","theme":"solarized_dark","fontSize":"1.2vw","tabSize":"2"},"js":{"style":{"position":"absolute","left":"66.5vw","top":"6vh","border":"0.25vh solid #73AD21","width":"30vw","height":"50vh"},"placeholder":"ASSUME YOU ARE WRITING IN SCRIPT DIRECTLY","mode":"javascript","theme":"terminal","fontSize":"1.2vw","tabSize":"2"},"shareCodePostLink":"https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/onlinecompiler-qnuay/service/CodeShare/incoming_webhook/PostApi"}')},47:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(12),a=n.n(r),i=n(3),s=n(1),l=o.a.createContext();function j(){return Object(c.useContext)(l)}var u=o.a.createContext();var d=function(e){var t=e.children,n=Object(c.useState)(localStorage.language?localStorage.language:"web"),o=Object(i.a)(n,2),r=o[0],a=o[1];return Object(s.jsx)(u.Provider,{value:function(e){a(e),localStorage.language=e},children:Object(s.jsx)(l.Provider,{value:r,children:t})})},h=(n(47),o.a.createContext());var b=o.a.createContext();function p(){return Object(c.useContext)(b)}var O=function(e){var t=e.children,n=j(),o=Object(c.useState)(),r=Object(i.a)(o,2),a=r[0],l=r[1];return Object(s.jsx)(b.Provider,{value:function(e){l(e),localStorage[n]=e},children:Object(s.jsx)(h.Provider,{value:a,children:t})})};var v=function(){var e=n(27),t=Object(c.useContext)(u),o=j();return p(),Object(s.jsxs)("select",{className:"language",onClick:function(e){t(e.target.value)},children:[Object(s.jsx)("option",{value:"web",children:"Web Design"}),Object.keys(e).map((function(t){var n;return localStorage[t]=(n=t,localStorage[n]?localStorage[n]:e[n].boiler_code),o==t?Object(s.jsx)("option",{selected:!0,value:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t):Object(s.jsx)("option",{value:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t)}))]})},f=n(2),x=n(21),g=n.n(x);n(55),n(56),n(57),n(58),n(59),n(60),n(61),n(62),n(34),n(63),n(64),n(65);var m=function(e){return Object(s.jsx)(g.a,{style:e.settings.style,value:localStorage[e.localStorageName],placeholder:e.settings.placeholder,mode:e.settings.mode,theme:e.settings.theme,onChange:function(t){localStorage[e.localStorageName]=t,e.setFun(t)},fontSize:e.settings.fontSize,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:e.settings.tabSize}})},S=n(16),w=n.n(S),y=n(22),C=n(41),_=n(37),N=n(24),k=n(35).shareCodePostLink;var A=function(e){var t=Object(N.a)(k),n=t.post,o=t.loading,r=(t.error,Object(c.useState)()),a=Object(i.a)(r,2),l=a[0],j=a[1];return Object(c.useEffect)((function(){function t(){return(t=Object(y.a)(w.a.mark((function t(){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(e.code);case 2:c=t.sent,j(window.location.href+c.$oid);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(s.jsx)(C.a,{show:e.show,onHide:e.handleClose,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:o?Object(s.jsx)(s.Fragment,{children:"Posting code"}):Object(s.jsxs)(s.Fragment,{children:[" Go to the following link to see your website on full page",Object(s.jsx)("a",{target:"_blank",href:l,children:l}),Object(s.jsx)(_.a,{onClick:e.handleClose,children:"Close"})]})})};var E=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),o=n[0],r=n[1],a=function(){r((function(e){return!e}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("center",{children:Object(s.jsx)("button",{onClick:a,children:"Share"})}),o?Object(s.jsx)(A,{show:o,code:e.code,handleClose:a}):null]})},z=n(35),I=function(e,t,n){return"<html><body>".concat(e,"</body><style>").concat(t,"</style><script>").concat(n,"<\/script></html>")},P=function(e){return e||""};var R=function(){var e=Object(c.useState)(P(localStorage.html)),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(P(localStorage.css)),a=Object(i.a)(r,2),l=a[0],j=a[1],u=Object(c.useState)(P(localStorage.js)),d=Object(i.a)(u,2),h=d[0],b=d[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(E,{code:{html:n,css:l,js:h}}),Object(s.jsx)(m,{settings:Object(f.a)({},z.html),localStorageName:"html",setFun:o}),Object(s.jsx)(m,{settings:Object(f.a)({},z.css),localStorageName:"css",setFun:j}),Object(s.jsx)(m,{settings:Object(f.a)({},z.js),localStorageName:"js",setFun:b}),Object(s.jsxs)("div",{style:{position:"absolute",top:"62vh",left:"1vw",right:"1vw"},children:[Object(s.jsx)("center",{children:Object(s.jsx)("h3",{children:"PREVIEW"})}),Object(s.jsx)("iframe",{srcdoc:I(n,l,h),width:"100%"})]})]})},U={position:"absolute",left:"2.5vw",top:"6vh",border:"0.25vh solid #73AD21",width:"95vw",height:"60vh"};var L=function(e){var t=p(),o=n(27);return Object(c.useEffect)((function(){t(localStorage[e.lang])}),[e.lang]),Object(s.jsx)(m,{settings:{style:U,theme:"twilight",mode:o[e.lang].mode,fontSize:"1.5vw",tabSize:"2"},localStorageName:e.lang,setFun:t})},T=o.a.createContext();function W(){return Object(c.useContext)(T)}var D=o.a.createContext();function F(){return Object(c.useContext)(D)}var Y=function(e){var t=e.children,n=Object(c.useState)(0),o=Object(i.a)(n,2),r=o[0],a=o[1];return Object(s.jsx)(D.Provider,{value:function(){a((function(e){return!e}))},children:Object(s.jsx)(T.Provider,{value:r,children:t})})};var G=function(){var e=W(),t=F();return Object(s.jsx)("center",{children:e?Object(s.jsx)("button",{disabled:!0,onClick:t,children:"RUN"}):Object(s.jsx)("button",{onClick:t,children:"RUN"})})},H=n(23),J=n.n(H);n(67);var B=function(){return Object(s.jsxs)("div",{className:"loadingOutputConsole",children:[Object(s.jsx)(J.a,{type:"spokes",color:"red"}),Object(s.jsx)("div",{children:"Executing"})]})};function M(e,t,n){return e=JSON.stringify(e),fetch(n,{method:t,body:e,headers:{"content-type":"application/json"}})}var q=n(27);var V=function(e){var t=j(),n=Object(c.useState)("Run code to see output here...."),o=Object(i.a)(n,2),r=o[0],a=o[1],l=W(),u=F(),d=q[t].api_lang,b=q[t].api_url,p=Object(c.useContext)(h);return Object(c.useEffect)((function(){a("Run code to see output here....")}),[t]),Object(c.useEffect)((function(){function e(){return e=Object(y.a)(w.a.mark((function e(){var t,n,c,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,M({code:p,lang:d},"POST",b);case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,c=n.error,o=n.output,a(o||c),u(0);case 12:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]),Object(s.jsx)("div",{className:"outputConsole",children:l?Object(s.jsx)(B,{}):Object(s.jsx)(g.a,{value:r,theme:"terminal",fontSize:"1.2vw",tabSize:"2",style:{position:"absolute",width:"95vw",height:"20vh"},showGutter:!1,highlightActiveLine:!1,readOnly:!0})})};var $=function(){return Object(s.jsxs)("div",{className:"output",style:{position:"absolute",top:"66%",left:"2.5%",width:"95%"},children:[Object(s.jsx)("center",{children:Object(s.jsx)("h1",{children:"OUTPUT"})}),Object(s.jsx)(V,{})]})};var K=function(){return Object(s.jsxs)(Y,{children:[Object(s.jsx)(G,{}),Object(s.jsx)($,{})]})};var Q=function(e){return Object(s.jsxs)(O,{children:[Object(s.jsx)(L,{lang:e.lang}),Object(s.jsx)(K,{})]})};var X=function(){var e=j();return"web"==e?Object(s.jsx)(R,{}):Object(s.jsx)(Q,{lang:e})};var Z=function(){return Object(s.jsxs)(d,{className:"App",children:[Object(s.jsx)(v,{}),Object(s.jsx)(X,{})]})},ee=n(4),te=n(38),ne=n.n(te);var ce=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"404"}),Object(s.jsx)("a",{href:window.location.href,children:window.location.href}),Object(s.jsx)("p",{children:"Page not found"})]})};n(68);var oe=function(){return Object(s.jsxs)("div",{className:"loading",children:[Object(s.jsx)(J.a,{type:"spokes",color:"red"}),Object(s.jsx)("div",{children:"Loading"})]})};n(69);var re=function(e){var t,n,c,o=Object(N.a)("https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/onlinecompiler-qnuay/service/CodeShare/incoming_webhook/GetCode?id="+e.id,{},[]),r=o.data,a=o.loading,i=o.error;return Object(s.jsx)(s.Fragment,{children:i?Object(s.jsx)(ce,{}):a?Object(s.jsx)(oe,{}):Object(s.jsx)("iframe",{id:"view",frameBorder:"0",srcdoc:(t=ne.a.sanitize(r[0].html),n=r[0].css,c=r[0].js,"<html><body>".concat(t,"</body><style>").concat(n,"</style><script>").concat(c,"<\/script></html>"))})})};var ae=function(){var e=Object(ee.f)().id;return Object(s.jsx)(re,{id:e})},ie=n(28);var se=function(){return Object(s.jsx)(ie.a,{children:Object(s.jsxs)(ee.c,{children:[Object(s.jsx)(ee.a,{path:"/:id",children:Object(s.jsx)(ae,{})}),Object(s.jsx)(ee.a,{path:"/",children:Object(s.jsx)(Z,{})})]})})};a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(se,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.2e19563d.chunk.js.map