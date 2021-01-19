(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(0),r=a.n(s),n=a(22),l=a.n(n),o=(a(49),a(50),a(20)),i=a(3),u=a(17),d=a(14),x="AUTH_REGISTER",j="AUTH_REGISTER_FAIL",b="AUTH_LOGIN",m="AUTH_LOGIN_FAIL",p="AUTH_LOGOUT",f={success:!1,user:{}},h=null;localStorage.getItem("auth")&&(h=JSON.parse(localStorage.getItem("auth")||"{}"),f.success=!0,f.user=h);var O,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{success:!0,user:t.payload};case j:return{success:!1,errors:t.payload};case b:return{success:!0,user:t.payload};case m:return{success:!1,errors:t.payload};case p:return{success:!1,user:{}};default:return e}},w=a(43),y="AUTO_CREATE",g="AUTO_GET",N=[];localStorage.getItem("autos")&&(O=JSON.parse(localStorage.getItem("autos")||"{}"),N=O);var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return[].concat(Object(w.a)(e),[t.payload]);case g:return t.payload;default:return e}},k=function(e){return Object(d.combineReducers)({router:Object(u.b)(e),auth:v,auto:S})},_=a(41),A=a(42),M=a(31),H=a(9),T=Object(H.a)(),D=Object(d.createStore)(k(T),Object(_.composeWithDevTools)(Object(d.applyMiddleware)(Object(M.a)(T),A.a))),E=a(4),C=a(13),V=a.n(C),G=a(15),I=a(16),L=a.n(I),B="https://dev-test-mcbackend.herokuapp.com/",P=function(e){var t=e.children,a=Object(E.e)((function(e){return e.auth})),s=Object(E.d)();return Object(c.jsxs)("div",{className:"layout flex flex-col min-h-screen bg-gray-700 text-gray-100",children:[Object(c.jsx)("nav",{className:"bg-gray-900 py-2 px-4",children:Object(c.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/",children:"DevTest"})})}),a.success?Object(c.jsx)("ul",{className:"flex space-x-4",children:Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){s(function(){var e=Object(G.a)(V.a.mark((function e(t){var a,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=D.getState().auth).success){e.next=9;break}return e.next=5,L.a.post(B+"api/logout",a.user);case 5:c=e.sent,localStorage.removeItem("auth"),T.replace("/"),c.data.success&&t({type:p,payload:{}});case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})})}):Object(c.jsx)("ul",{className:"flex space-x-4",children:Object(c.jsx)("li",{children:Object(c.jsx)(o.b,{to:"/login",children:"Login"})})})]})}),Object(c.jsx)("main",{className:"flex-1 flex flex-col",children:t}),Object(c.jsx)("footer",{className:"bg-gray-900 py-2 text-center",children:Object(c.jsx)("p",{children:"Mike Curtis"})})]})},q=a(6),R="https://dev-test-mcbackend.herokuapp.com/",U=function(e){return function(){var t=Object(G.a)(V.a.mark((function t(a){var c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.post(R+"api/auto/get",e);case 3:c=t.sent.data,localStorage.setItem("autos",JSON.stringify(c.data)),c.success&&a({type:g,payload:c.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},W=function(e){var t=e.imgSrc,a=e.children;return Object(c.jsxs)("div",{className:"card rounded overflow-hidden shadow w-full",children:[Object(c.jsx)("div",{className:"card__header",style:{background:"url(".concat(t,")"),backgroundSize:"auto 100%",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),Object(c.jsx)("div",{className:"card__body p-10 flex flex-col justify-between",children:a})]})},J="form-group flex flex-col space-y-2 flex-1",Y="",F="rounded shadow py-1 px-2 text-gray-800 bg-gray-100 text-sm",X=a(21),$=function(e){var t=e.label,a=e.name,s=e.password,r=e.email,n=e.inputValue,l=e.setState,o=e.shouldDisable;return Object(c.jsxs)("div",{className:J,children:[Object(c.jsx)("label",{htmlFor:a,className:Y,children:t}),Object(c.jsx)("input",{type:s?"password":r?"email":"text",name:a,value:n,className:o?F+" bg-gray-400 cursor-not-allowed":F+"",disabled:o,onChange:function(e){return l(e.target.value)}})]})},z=function(e){var t=e.label,a=e.name,s=e.setState,r=e.inputValue;return Object(c.jsxs)("div",{className:J,children:[Object(c.jsx)("label",{htmlFor:a,className:Y,children:t}),Object(c.jsx)(X.a,{thousandSeparator:!0,prefix:"$",name:a,value:r,className:"w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2",onChange:function(e){return s(e.target.value)}})]})},K=function(e){var t=e.label,a=e.name,s=e.setState,r=e.minNum,n=e.maxNum,l=e.inputValue;return Object(c.jsxs)("div",{className:J,children:[Object(c.jsx)("label",{htmlFor:a,className:Y,children:t}),Object(c.jsx)(X.a,{name:a,min:r,max:n,value:l,format:function(e){return void 0!==r&&void 0!==n&&(+e>n||+e<r)?"":e},className:"w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2",onChange:function(e){return s(e.target.value)}})]})},Q="w-full border border-white text-white py-1 px-4 rounded-sm",Z="w-full border border-white text-white py-1 px-4 rounded-sm opacity-25 cursor-not-allowed",ee=function(){var e,t,a,r,n,l,o,i,u=Object(E.d)(),d=Object(E.e)((function(e){return e.auto})),x=Object(s.useState)(1),j=Object(q.a)(x,2),b=j[0],m=j[1],p=Object(s.useState)(""),f=Object(q.a)(p,2),h=f[0],O=f[1],v=Object(s.useState)(""),w=Object(q.a)(v,2),g=w[0],N=w[1],S=Object(s.useState)(""),k=Object(q.a)(S,2),_=k[0],A=k[1],M=Object(s.useState)(null!==(e=null===(t=d[0])||void 0===t?void 0:t.yearly_income)&&void 0!==e?e:""),H=Object(q.a)(M,2),C=H[0],I=H[1],B=Object(s.useState)(null!==(a=null===(r=d[0])||void 0===r?void 0:r.credit_score)&&void 0!==a?a:null),P=Object(q.a)(B,2),U=P[0],J=P[1],Y=Object(s.useState)(null!==(n=null===(l=d[0])||void 0===l?void 0:l.name)&&void 0!==n?n:""),F=Object(q.a)(Y,2),X=F[0],ee=F[1],te=Object(s.useState)(null!==(o=null===(i=d[0])||void 0===i?void 0:i.email)&&void 0!==o?o:""),ae=Object(q.a)(te,2),ce=ae[0],se=ae[1],re=Object(s.useState)(""),ne=Object(q.a)(re,2),le=ne[0],oe=ne[1],ie=""!==h&&""!==g&&""!==_&&""!==C&&0!==U&&U>=300,ue=""!==X&&""!==ce,de=function(e){var t=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);if(2===e&&m(2),"complete"===e){var a={email:ce,name:X,purchase_price:h,auto_make:g,auto_model:_,yearly_income:C,credit_score:U};t.test(a.email)?(oe(""),u(function(e){return function(){var t=Object(G.a)(V.a.mark((function t(a){var c,s;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=D.getState().auth,t.prev=1,t.next=4,L.a.post(R+"api/auto",e);case 4:(s=t.sent.data).success?(a({type:y,payload:s.data}),c.success?T.replace("/dashboard"):T.replace("/register")):T.replace("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(a))):oe("Must be valid email.")}};return Object(c.jsxs)("div",{className:"container mx-auto flex justify-center py-20",children:[1===b&&Object(c.jsxs)(W,{imgSrc:"https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",children:[Object(c.jsxs)("div",{className:"flex flex-wrap",children:[Object(c.jsx)("h1",{className:"text-white font-bold flex-auto text-xl font-semibold",children:"Welcome To Auto Purchaser"}),Object(c.jsx)("div",{className:"w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl",children:"Over 10,000 Vehicle Types"})]}),Object(c.jsx)("p",{className:"mt-4 text-sm text-gray-200",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam architecto aspernatur eveniet in mollitia nisi nulla rerum vel. Expedita?"}),Object(c.jsxs)("div",{className:"flex flex-col space-y-2 mt-4",children:[Object(c.jsx)(z,{name:"purchase_price",label:"Auto Purchase Price",setState:O}),Object(c.jsxs)("div",{className:"flex space-x-2",children:[Object(c.jsx)($,{name:"auto_make",label:"Auto Make",setState:N}),Object(c.jsx)($,{name:"auto_model",label:"Auto Model",setState:A})]}),Object(c.jsx)(z,{name:"yearly_income",label:"Estimated Yearly Income",inputValue:C,setState:I}),Object(c.jsx)(K,{name:"credit_score",label:"Estimated Credit Score ( 300 - 850 )",minNum:0,maxNum:850,setState:J,inputValue:U}),Object(c.jsx)("div",{className:"pt-4",children:Object(c.jsx)("button",{id:"btnStepOne",className:ie?Q:Z,onClick:function(){return ie?de(2):null},children:"Next"})})]})]}),2===b&&Object(c.jsxs)(W,{imgSrc:"https://images.unsplash.com/photo-1550355291-bbee04a92027?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",children:[Object(c.jsxs)("div",{className:"flex flex-wrap",children:[Object(c.jsx)("h1",{className:"text-white font-bold flex-auto text-xl font-semibold",children:"Welcome To Auto Purchaser"}),Object(c.jsx)("div",{className:"w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl",children:"Over 10,000 Vehicle Types"})]}),Object(c.jsx)("p",{className:"mt-4 text-sm text-gray-200",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam architecto aspernatur eveniet in mollitia nisi nulla rerum vel. Expedita?"}),Object(c.jsxs)("div",{className:"flex flex-col space-y-2 mt-4",children:[Object(c.jsx)($,{name:"name",label:"Name",inputValue:X,setState:ee}),Object(c.jsx)($,{name:"email",label:"Email",inputValue:ce,setState:se}),Object(c.jsx)("small",{className:"text-red-600",children:le}),Object(c.jsx)("div",{className:"pt-4",children:Object(c.jsx)("button",{id:"btnStepTwo",className:ue?Q:Z,onClick:function(){return ue?de("complete"):null},children:"Submit"})})]})]})]})},te=function(){var e=Object(E.e)((function(e){return e.auth})),t=Object(E.e)((function(e){return e.auto}));return Object(s.useEffect)((function(){console.log(e),e.success||T.replace("/login")})),Object(c.jsx)("div",{className:"container mx-auto flex justify-center py-20",children:Object(c.jsxs)(W,{imgSrc:"https://images.unsplash.com/photo-1430080369629-afa4c2ae5121?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",children:[Object(c.jsx)("h1",{className:"text-white font-bold flex-auto text-xl font-semibold",children:"Dashboard"}),Object(c.jsx)("div",{className:"w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl",children:"Current Auto Purchases"}),Object(c.jsx)("div",{className:"flex flex-col space-y-4 mt-4",children:t.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"text-sm",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Make: "})," ",e.auto_make," ",e.auto_model]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Price: "})," ",Object(c.jsx)(X.a,{value:e.purchase_price,displayType:"text",thousandSeparator:!0,prefix:"$"})]})]})},e.id)}))})]})})},ae=function(){var e,t,a,r,n,l=Object(E.d)(),o=Object(E.e)((function(e){return e.auto})),i=Object(E.e)((function(e){return e.auth})).errors,u=Object(s.useState)(null!==(e=null===(t=o[0])||void 0===t?void 0:t.name)&&void 0!==e?e:""),d=Object(q.a)(u,2),b=d[0],m=d[1],p=Object(s.useState)(null!==(a=null===(r=o[0])||void 0===r?void 0:r.email)&&void 0!==a?a:""),f=Object(q.a)(p,2),h=f[0],O=f[1],v=Object(s.useState)(""),w=Object(q.a)(v,2),y=w[0],g=w[1],N=Object(s.useState)(""),S=Object(q.a)(N,2),k=S[0],_=S[1];return Object(c.jsx)("div",{className:"container mx-auto flex justify-center py-20",children:Object(c.jsxs)(W,{imgSrc:"https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",children:[Object(c.jsx)("h1",{className:"text-white font-bold flex-auto text-xl font-semibold",children:"Create New Account"}),Object(c.jsx)("div",{className:"w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl",children:null===(n=o[0])||void 0===n?void 0:n.message}),Object(c.jsxs)("div",{className:"flex flex-col space-y-2 mt-4",children:[Object(c.jsx)($,{inputValue:b,name:"name",label:"Name",setState:m}),Object(c.jsx)("small",{className:"text-red-600 text-xs",children:null===i||void 0===i?void 0:i.name}),Object(c.jsx)($,{inputValue:h,name:"email",label:"Email",setState:O}),Object(c.jsx)("small",{className:"text-red-600 text-xs",children:null===i||void 0===i?void 0:i.email}),Object(c.jsx)($,{name:"password",label:"Password",password:!0,setState:g}),Object(c.jsx)("small",{className:"text-red-600 text-xs",children:null===i||void 0===i?void 0:i.password}),Object(c.jsx)($,{name:"password_confirm",label:"Confirm Password",password:!0,setState:_}),Object(c.jsx)("small",{className:"text-red-600 text-xs",children:null===i||void 0===i?void 0:i.passwordConfirm}),Object(c.jsx)("div",{className:"py-4",children:Object(c.jsx)("button",{className:Q,onClick:function(){var e={name:b,email:h,password:y,passwordConfirm:k};l(function(e){return function(){var t=Object(G.a)(V.a.mark((function t(a){var c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.post(B+"api/register",e);case 3:(c=t.sent.data).success?(a({type:x,payload:c.data}),T.replace("/dashboard")):a({type:j,payload:c.errors}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e)),l(U(e))},children:"Create"})})]})]})})},ce=function(){var e=Object(E.d)(),t=Object(E.e)((function(e){return e.auth})).errors,a=Object(s.useState)(""),r=Object(q.a)(a,2),n=r[0],l=r[1],o=Object(s.useState)(""),i=Object(q.a)(o,2),u=i[0],d=i[1];return Object(c.jsx)("div",{className:"container mx-auto flex justify-center py-20",children:Object(c.jsxs)(W,{imgSrc:"https://images.unsplash.com/photo-1557116544-1fb2be0d8e00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",children:[Object(c.jsx)("h1",{className:"text-white font-bold flex-auto text-xl font-semibold",children:"Login"}),Object(c.jsx)("p",{className:"text-pink-600",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque possimus totam et voluptate nesciunt, quae ab quisquam esse maiores pariatur?"}),Object(c.jsxs)("div",{className:"flex flex-col space-y-2 mt-4",children:[Object(c.jsx)($,{inputValue:n,name:"email",label:"Email",setState:l}),Object(c.jsx)("small",{className:"text-red-600 text-xs",children:null===t||void 0===t?void 0:t.email}),Object(c.jsx)($,{name:"password",label:"Password",password:!0,setState:d}),Object(c.jsx)("small",{className:"text-red-600 text-xs",children:null===t||void 0===t?void 0:t.error}),Object(c.jsx)("div",{className:"py-4",children:Object(c.jsx)("button",{className:Q,onClick:function(){var t={email:n,password:u};e(function(e){return function(){var t=Object(G.a)(V.a.mark((function t(a){var c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.post(B+"api/login",e);case 3:c=t.sent.data,localStorage.setItem("auth",JSON.stringify(c.data)),c.success?(a({type:b,payload:c.data}),T.replace("/dashboard")):a({type:m,payload:c.errors}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e(U(t))},children:"Login"})})]})]})})},se=function(){return Object(c.jsx)(o.a,{children:Object(c.jsx)(u.a,{history:T,children:Object(c.jsx)(P,{children:Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{path:"/",exact:!0,component:ee}),Object(c.jsx)(i.a,{path:"/dashboard",component:te}),Object(c.jsx)(i.a,{path:"/register",component:ae}),Object(c.jsx)(i.a,{path:"/login",component:ce})]})})})})};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(E.a,{store:D,children:Object(c.jsx)(se,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.877b2b58.chunk.js.map