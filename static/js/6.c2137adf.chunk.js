(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{227:function(e,t,a){e.exports={formControl:"FormsControls_formControl__3m6uD",error:"FormsControls_error__3tgm9",formSummaryError:"FormsControls_formSummaryError__3Bw93"}},228:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},229:function(e,t,a){"use strict";a.d(t,"b",function(){return d}),a.d(t,"a",function(){return g}),a.d(t,"c",function(){return f});var n=a(231),r=a(0),i=a.n(r),o=a(227),s=a.n(o),c=a(105),l=["input","meta","child"],u=["input","meta","child"],m=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=e.children,o=a&&n;return i.a.createElement("div",{className:s.a.formControl+" "+(o?s.a.error:"")},i.a.createElement("div",null,r),o&&i.a.createElement("span",null,n))},d=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,l));return i.a.createElement(m,e,i.a.createElement("textarea",Object.assign({},t,a)))},g=function(e){var t=e.input,a=(e.meta,e.child,Object(n.a)(e,u));return i.a.createElement(m,e,i.a.createElement("input",Object.assign({},t,a)))},f=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:a,component:n},r)),o)}},233:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2vjKb",dialogsItems:"Dialogs_dialogsItems__2iIWO",active:"Dialogs_active__7rQGL",messages:"Dialogs_messages__1JzrS",message:"Dialogs_message__f40E1",descriptionBlock:"Dialogs_descriptionBlock__pGkAr",item:"Dialogs_item__7ho_a"}},305:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),o=a(71),s=a(233),c=a.n(s),l=function(e){return r.a.createElement("div",{className:c.a.dialog},e.message)},u=a(14),m=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:c.a.dialog+" "+c.a.active},r.a.createElement(u.b,{to:t},e.name))},d=a(5),g=a(105),f=a(106),v=a(228),E=a(229),b=Object(v.a)(50),_=Object(f.a)({form:"dialog-add-message-form"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(g.a,{component:E.b,validate:[v.b,b],name:"newMessageBody",placeholder:"Enter your message"})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))}),p=function(e){var t=e.dialogsPage,a=t.dialogs.map(function(e){return r.a.createElement(m,{name:e.name,key:e.id,id:e.id})}),n=t.messages.map(function(e){return r.a.createElement(l,{message:e.message,key:e.id})});t.newMessageBody;return e.isAuth?r.a.createElement("div",null,r.a.createElement("div",{className:c.a.dialogs},r.a.createElement("div",{className:c.a.dialogsItems},a),r.a.createElement("div",{className:c.a.messages},r.a.createElement("div",null,n))),r.a.createElement(_,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})):r.a.createElement(d.a,{to:"/login"})},h=a(29),j=a(30),O=a(32),y=a(31),w=function(e){return{isAuth:e.auth.isAuth}},k=a(18);t.default=Object(k.d)(Object(i.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(t){e(Object(o.b)(t))}}}),function(e){var t=function(t){Object(O.a)(n,t);var a=Object(y.a)(n);function n(){return Object(h.a)(this,n),a.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(d.a,{to:"/login"})}}]),n}(r.a.Component);return Object(i.b)(w)(t)})(p)}}]);
//# sourceMappingURL=6.c2137adf.chunk.js.map