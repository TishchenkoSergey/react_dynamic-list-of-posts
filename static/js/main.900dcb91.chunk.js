(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),u=n(1),o=n.n(u),i=n(2),l=n(3),m=(n(12),n(13),function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))}),p=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/posts");case 2:return n=e.sent,e.abrupt("return",t?n.filter((function(e){return e.userId===t})):n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(14),function(e){var t=e.selectedUserId,n=e.choosePost,c=e.selectedPostId,s=Object(a.useState)([]),u=Object(l.a)(s,2),m=u[0],f=u[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n=e.sent,f(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",null,m.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(e.userId,"]:")),e.title),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(e.id)}},c===e.id?"Close":"Open"))}))))}),b=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/comments");case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return e.postId===t&&e.body})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(o.a.mark((function e(t,n,a,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(c={postId:t,name:n,email:a,body:r},m("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)})));case 1:case"end":return e.stop()}var c}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),h=function(e){return t="/comments/".concat(e),m(t,{method:"DELETE"});var t},E=(n(15),function(e){var t=e.postId,n=e.updateComments,c=Object(a.useState)(""),s=Object(l.a)(c,2),u=s[0],o=s[1],i=Object(a.useState)(""),m=Object(l.a)(i,2),p=m[0],f=m[1],d=Object(a.useState)(""),b=Object(l.a)(d,2),h=b[0],E=b[1];return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),u&&p.includes("@")&&h&&(v(t,u,p,h).then((function(){return n()})),E(""))}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:u,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:p,onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:h,onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),O=(n(16),function(e){var t=e.comments,n=e.updateComments;return r.a.createElement("ul",{className:"PostDetails__list"},t.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item",key:e.id},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return t=e.id,void h(t).then((function(){return n()}));var t}},"X"),r.a.createElement("p",null,e.body))})))}),j=function(e){var t=e.postId,n=Object(a.useState)({}),c=Object(l.a)(n,2),s=c[0],u=c[1],m=Object(a.useState)([]),p=Object(l.a)(m,2),d=p[0],v=p[1],h=Object(a.useState)(!1),j=Object(l.a)(h,2),_=j[0],y=j[1];Object(a.useEffect)((function(){w(),N()}),[t]);var w=function(){var e=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,u(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.body)),r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement("button",{type:"button",className:"button",onClick:function(){return y(!_)}},"".concat(_?"Hide":"Show"," ").concat(d.length," comments")),_&&r.a.createElement(O,{comments:d,updateComments:N})),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(E,{postId:t,updateComments:N}))))},_=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/users");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),u=Object(l.a)(s,2),m=u[0],p=u[1],f=Object(a.useState)(0),b=Object(l.a)(f,2),v=b[0],h=b[1];Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,c(t.slice(0,10));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",value:m,onChange:function(e){p(+e.target.value)}},r.a.createElement("option",{value:"0"},"All users"),n.map((function(e,t){return r.a.createElement("option",{value:t+1,key:e.id},e.name)}))))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(d,{selectedUserId:m,choosePost:function(e){h(e!==v?e:0)},selectedPostId:v})),r.a.createElement("div",{className:"App__content"},0===v?r.a.createElement("h4",null,"Choose post first to see details"):r.a.createElement(j,{postId:v}))))};s.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.900dcb91.chunk.js.map