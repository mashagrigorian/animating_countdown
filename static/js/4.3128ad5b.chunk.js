(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(t,e,n){t.exports={formControl:"FormsControls_formControl__3m6uD",error:"FormsControls_error__3tgm9",formSummaryError:"FormsControls_formSummaryError__3Bw93"}},228:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return a});var r=function(t){if(!t)return"Field is required"},a=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},229:function(t,e,n){"use strict";n.d(e,"b",function(){return p}),n.d(e,"a",function(){return f}),n.d(e,"c",function(){return d});var r=n(231),a=n(0),o=n.n(a),s=n(227),u=n.n(s),i=n(105),c=["input","meta","child"],l=["input","meta","child"],m=function(t){t.input;var e=t.meta,n=e.touched,r=e.error,a=t.children,s=n&&r;return o.a.createElement("div",{className:u.a.formControl+" "+(s?u.a.error:"")},o.a.createElement("div",null,a),s&&o.a.createElement("span",null,r))},p=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,c));return o.a.createElement(m,t,o.a.createElement("textarea",Object.assign({},e,n)))},f=function(t){var e=t.input,n=(t.meta,t.child,Object(r.a)(t,l));return o.a.createElement(m,t,o.a.createElement("input",Object.assign({},e,n)))},d=function(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:t,name:e,validate:n,component:r},a)),s)}},238:function(t,e,n){"use strict";var r=n(54);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",function(){return a})},251:function(t,e,n){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2i4Kb",item:"ProfileInfo_item__1wmK_"}},295:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__1slTd",posts:"MyPosts_posts__29eQY"}},296:function(t,e,n){t.exports={item:"Post_item__2s7Ob"}},303:function(t,e,n){"use strict";n.r(e);var r=n(29),a=n(30),o=n(32),s=n(31),u=n(0),i=n.n(u),c=n(35),l=n(251),m=n.n(l),p=n(238),f=function(t){var e=Object(u.useState)(!1),n=Object(p.a)(e,2),r=n[0],a=n[1],o=Object(u.useState)(t.status),s=Object(p.a)(o,2),c=s[0],l=s[1];Object(u.useEffect)(function(){l(t.status)},[t.status]);return i.a.createElement("div",null,!r&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){a(!0)}},t.status||"----")),r&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(c)},value:c})))},d=function(t){var e=t.profile,n=t.status,r=t.updateStatus;return e?i.a.createElement("div",null,i.a.createElement("div",{className:m.a.descriptionBlock},i.a.createElement("img",{src:e.photos.large}),i.a.createElement(f,{status:n,updateStatus:r}))):i.a.createElement(c.a,null)},b=n(24),h=n(55),v=n(22),E=n(295),g=n.n(E),_=n(296),j=n.n(_),O=function(t){return i.a.createElement("div",{className:j.a.item},i.a.createElement("img",{src:"https://i.dlpng.com/static/png/6489276_preview.png"}),t.message,i.a.createElement("div",null,i.a.createElement("span",null,"like")," ",t.likesCount))},y=n(105),P=n(106),S=n(228),w=n(229),k=Object(S.a)(10),C=Object(P.a)({form:"ProfileAddNewPostForm"})(function(t){return i.a.createElement("form",{onSubmit:t.handleSubmit},i.a.createElement("div",null,i.a.createElement(y.a,{name:"newPostText",component:w.b,placeholder:"Post message",validate:[S.b,k]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add Post")))}),x=i.a.memo(function(t){var e=Object(v.a)(t.posts).reverse().map(function(t){return i.a.createElement(O,{message:t.message,likesCount:t.likesCount})});i.a.createRef();return i.a.createElement("div",{className:g.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(C,{onSubmit:function(e){t.addPost(e.newPostText)}}),i.a.createElement("div",{className:g.a.posts},e))}),B=Object(b.b)(function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}},function(t){return{addPost:function(e){t(Object(h.a)(e))}}})(x),I=function(t){return i.a.createElement("div",null,i.a.createElement(d,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),i.a.createElement(B,null))},T=n(5),A=n(18),F=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return i.a.createElement(I,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(i.a.Component);e.default=Object(A.d)(Object(b.b)(function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}},{getUserProfile:h.d,getStatus:h.c,updateStatus:h.e}),T.f)(F)}}]);
//# sourceMappingURL=4.3128ad5b.chunk.js.map