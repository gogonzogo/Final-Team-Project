"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[344],{9198:function(e,a,n){var r=n(2007),t=n(184),i=function(e){var a=e.children,n=e.className;return(0,t.jsx)("div",{className:n,children:a})};i.propTopes={children:r.node.isRequired,className:r.string},a.Z=i},8441:function(e,a,n){n.d(a,{Z:function(){return d}});n(2791);var r=n(5527),t=n(493),i=n(4852),s=n(9900),o=n(8946),l=n(5146),u={},c=n(184),d=function(e){var a=e.validationData,n=e.visible;return(0,c.jsx)(r.Z,{elevation:8,className:u.validationPopup,children:(0,c.jsx)(t.Z,{className:u.validationPopupList,sx:{width:"100%",maxWidth:360},children:n&&a?a.map((function(e,a){var n=e[Object.keys(e)[0]],r=n.id,t=n.message,d=n.met,m=d?o.Z:l.Z,f=d?"green":"red";return(0,c.jsxs)(i.ZP,{className:u.validationPopupItem,disableGutters:!0,children:[(0,c.jsx)(m,{className:u.validationPopupIcon,style:{color:f}}),(0,c.jsx)(s.Z,{disableTypography:!0,primary:t,sx:{fontSize:"12px"}})]},r)})):null})})}},1344:function(e,a,n){n.r(a),n.d(a,{default:function(){return V}});var r=n(2791),t=n(5861),i=n(4942),s=n(1413),o=n(9439),l=n(4687),u=n.n(l),c=n(4554),d=n(1889),m=n(8096),f=n(1618),p="RegistrationForm_password_input__YljM2",v="RegistrationForm_email_input__0+Pum",h="RegistrationForm_name_input__n3sjp",Z="RegistrationForm_form_container__sZfTu",x="RegistrationForm_form_title__W3JXl",j="RegistrationForm_form_grid__jv6mY",_="RegistrationForm_button_container__0kjAW",w=n(3855),g=n(3511),b=n(8441),P=n(4758),N=n(5822),y=n(7689),R=n(2260),k=n(1980),C=n(184),F=function(){var e=(0,r.useRef)(null),a=(0,r.useRef)(null),n=(0,k.a)().loggedIn,l=(0,w.v9)(P.aN),F=(0,w.v9)(P.Wi),I=(0,w.v9)(P.KI),V=(0,w.v9)(P.q8),z=(0,w.v9)((function(e){return e.registration.validationReqs})),E=(0,y.s0)(),S=(0,w.I0)(),W=(0,r.useState)({name:!1,email:!1,password:!1}),q=(0,o.Z)(W,2),A=q[0],B=q[1],L=(0,r.useState)(null),D=(0,o.Z)(L,2),M=D[0],O=D[1],K=(0,r.useState)({name:"",email:"",password:""}),T=(0,o.Z)(K,2),G=T[0],H=T[1],Y=function(e){var a,n,r=e.target,t=r.name,o=r.value;switch(H((0,s.Z)((0,s.Z)({},G),{},(0,i.Z)({},t,o))),t){case"name":S((0,g.Ol)({fieldValue:o}));break;case"email":S((0,g.oH)({fieldValue:o.toLowerCase()}));break;case"password":S((0,g.uo)({fieldValue:o}))}O(t),a=t,n=!0,B((0,s.Z)((0,s.Z)({},A),{},(0,i.Z)({},a,n)))},J=function(){var e=(0,t.Z)(u().mark((function e(a){var r,t,i,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),e.prev=1,r=G.name,t=G.email,i=G.password,s={name:r,email:t.toLowerCase(),password:i},S((0,N.z2)(s)),n&&(H({name:"",email:"",password:""}),S((0,g.Ol)({fieldValue:""})),S((0,g.oH)({fieldValue:""})),S((0,g.uo)({fieldValue:""})),E("/calculator")),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return(0,C.jsxs)(c.Z,{sx:{width:"100%"},className:Z,children:[(0,C.jsx)("h2",{className:x,children:"REGISTER"}),(0,C.jsx)(d.ZP,{className:j,children:(0,C.jsx)(m.Z,{variant:"standard",children:(0,C.jsxs)("form",{onSubmit:J,noValidate:!0,children:[(0,C.jsx)(f.Z,{className:h,autoComplete:"name",InputLabelProps:"name"!==M||I?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputProps:{onKeyPress:function(a){"Enter"===a.key&&e.current.focus()}},variant:"standard",label:"Name *",type:"text",name:"name",fullWidth:!0,margin:"normal",value:G.name,onChange:Y,onFocus:function(){return O("name")},onBlur:function(){return O(null)},error:"name"===M&&!I}),"name"===M&&(0,C.jsx)(b.Z,{validationData:z[M],visible:M}),(0,C.jsx)(f.Z,{className:v,autoComplete:"email",InputLabelProps:"email"!==M||l?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:e,inputProps:{onKeyPress:function(e){"Enter"===e.key&&a.current.focus()}},variant:"standard",label:"Email *",type:"email",name:"email",fullWidth:!0,margin:"normal",value:G.email,onChange:Y,onFocus:function(){return O("email")},onBlur:function(){return O(null)},error:"email"===M&&!l}),"email"===M&&(0,C.jsx)(b.Z,{validationData:z[M],visible:M}),(0,C.jsx)(f.Z,{className:p,autoComplete:"current-password",InputLabelProps:"password"!==M||F?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:a,variant:"standard",label:"Password *",type:"password",name:"password",fullWidth:!0,margin:"normal",value:G.password,onChange:Y,onFocus:function(){return O("password")},onBlur:function(){return O(null)},error:"password"===M&&!F}),"password"===M&&(0,C.jsx)(b.Z,{validationData:z[M],visible:M}),(0,C.jsx)(c.Z,{className:_,children:(0,C.jsx)(R.Z,{color:"orange",disabled:!V,children:"Register"})})]})})})]})},I=n(9198);var V=function(){return(0,C.jsx)("div",{className:" background mainBackground",children:(0,C.jsx)("section",{className:"top-bottom",children:(0,C.jsx)(I.Z,{className:"left-right",children:(0,C.jsx)(F,{})})})})}},4758:function(e,a,n){n.d(a,{KI:function(){return i},Wi:function(){return o},aN:function(){return s},q8:function(){return l}});var r=n(6916),t=function(e){return e.registration},i=((0,r.P1)([t],(function(e){return e.validationReqs.name})),(0,r.P1)([t],(function(e){return e.validationReqs.email})),(0,r.P1)([t],(function(e){return e.validationReqs.password})),(0,r.P1)([t],(function(e){return e.isNameValid}))),s=(0,r.P1)([t],(function(e){return e.isEmailValid})),o=(0,r.P1)([t],(function(e){return e.isPasswordValid})),l=(0,r.P1)([i,s,o],(function(e,a,n){return e&&a&&n}))},8946:function(e,a,n){var r=n(4836);a.Z=void 0;var t=r(n(5649)),i=n(184),s=(0,t.default)((0,i.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");a.Z=s},5146:function(e,a,n){var r=n(4836);a.Z=void 0;var t=r(n(5649)),i=n(184),s=(0,t.default)((0,i.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");a.Z=s}}]);
//# sourceMappingURL=344.34073044.chunk.js.map