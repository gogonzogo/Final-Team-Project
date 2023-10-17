"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[344],{9198:function(e,a,n){var r=n(2007),t=n(184),i=function(e){var a=e.children,n=e.className;return(0,t.jsx)("div",{className:n,children:a})};i.propTopes={children:r.node.isRequired,className:r.string},a.Z=i},8441:function(e,a,n){n.d(a,{Z:function(){return d}});n(2791);var r=n(5527),t=n(493),i=n(4852),s=n(9900),o=n(8946),l=n(5146),u={},c=n(184),d=function(e){var a=e.validationData,n=e.visible;return(0,c.jsx)(r.Z,{elevation:8,className:u.validationPopup,children:(0,c.jsx)(t.Z,{className:u.validationPopupList,sx:{width:"100%",maxWidth:360},children:n&&a?a.map((function(e,a){var n=e[Object.keys(e)[0]],r=n.id,t=n.message,d=n.met,m=d?o.Z:l.Z,f=d?"green":"red";return(0,c.jsxs)(i.ZP,{className:u.validationPopupItem,disableGutters:!0,children:[(0,c.jsx)(m,{className:u.validationPopupIcon,style:{color:f}}),(0,c.jsx)(s.Z,{disableTypography:!0,primary:t,sx:{fontSize:"12px"}})]},r)})):null})})}},1344:function(e,a,n){n.r(a),n.d(a,{default:function(){return z}});var r=n(2791),t=n(5861),i=n(4942),s=n(1413),o=n(9439),l=n(4687),u=n.n(l),c=n(4554),d=n(1889),m=n(8096),f=n(1618),p="RegistrationForm_form__c8X43",h="RegistrationForm_password_input__YljM2",v="RegistrationForm_email_input__0+Pum",g="RegistrationForm_name_input__n3sjp",x="RegistrationForm_form_container__sZfTu",Z="RegistrationForm_form_title__W3JXl",_="RegistrationForm_form_grid__jv6mY",j="RegistrationForm_button_container__0kjAW",b=n(3855),w=n(3511),y=n(8441),P=n(4758),N=n(5822),R=n(7689),W=n(2260),k=n(4142),F=n(5336),C=n(184),I=function(){var e=(0,r.useRef)(null),a=(0,r.useRef)(null),n=(0,b.v9)(P.aN),l=(0,b.v9)(P.Wi),I=(0,b.v9)(P.KI),L=(0,b.v9)(P.q8),z=(0,F.a)().calculator,V=(0,b.v9)((function(e){return e.registration.validationReqs})),E=(0,R.s0)(),D=(0,b.I0)(),S=(0,r.useState)({name:!1,email:!1,password:!1}),q=(0,o.Z)(S,2),A=q[0],B=q[1],M=(0,r.useState)(null),O=(0,o.Z)(M,2),T=O[0],K=O[1],G=(0,r.useState)({name:"",email:"",password:""}),H=(0,o.Z)(G,2),U=H[0],X=H[1],Y=function(e){var a,n,r=e.target,t=r.name,o=r.value;switch(X((0,s.Z)((0,s.Z)({},U),{},(0,i.Z)({},t,o))),t){case"name":D((0,w.Ol)({fieldValue:o}));break;case"email":D((0,w.oH)({fieldValue:o.toLowerCase()}));break;case"password":D((0,w.uo)({fieldValue:o}))}K(t),a=t,n=!0,B((0,s.Z)((0,s.Z)({},A),{},(0,i.Z)({},a,n)))},J={height:z.height,age:z.age,bloodType:z.bloodType,currentWeight:z.currentWeight,desiredWeight:z.desiredWeight,heightFeet:z.heightFeet,heightInch:z.heightInch,currentWeightLbs:z.currentWeightLbs,desiredWeightLbs:z.desiredWeightLbs,dailyRate:z.calculatorDailyRate,unitOfMeasure:z.unitOfMeasure,date:z.date,startDate:z.startDate,originalWeight:z.originalWeight},Q=function(){var e=(0,t.Z)(u().mark((function e(a){var n,r,t,i,s,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n=U.name,r=U.email,t=U.password,i={name:n,email:r.toLowerCase(),password:t},e.next=6,D((0,N.z2)(i));case 6:if(s=e.sent,!N.z2.fulfilled.match(s)){e.next=13;break}return e.next=10,D((0,k.gU)(J));case 10:o=e.sent,k.gU.rejected.match(o)?E("/calculator"):E("/diary"),X({name:"",email:"",password:""}),D((0,w.Ol)({fieldValue:""})),D((0,w.oH)({fieldValue:""})),D((0,w.uo)({fieldValue:""}));case 13:e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(1),new Error("Error registering user: "+e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(a){return e.apply(this,arguments)}}();return(0,C.jsxs)(c.Z,{sx:{width:"100%"},className:x,children:[(0,C.jsx)("h2",{className:Z,children:"REGISTER"}),(0,C.jsx)(d.ZP,{className:_,children:(0,C.jsx)(m.Z,{variant:"standard",children:(0,C.jsxs)("form",{onSubmit:Q,noValidate:!0,className:p,children:[(0,C.jsx)(f.Z,{className:g,autoComplete:"name",InputLabelProps:"name"!==T||I?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputProps:{onKeyPress:function(a){"Enter"===a.key&&e.current.focus()}},variant:"standard",label:"Name *",type:"text",name:"name",fullWidth:!0,margin:"normal",value:U.name,onChange:Y,onFocus:function(){return K("name")},onBlur:function(){return K(null)},error:"name"===T&&!I}),"name"===T&&(0,C.jsx)(y.Z,{validationData:V[T],visible:T}),(0,C.jsx)(f.Z,{className:v,autoComplete:"email",InputLabelProps:"email"!==T||n?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:e,inputProps:{onKeyPress:function(e){"Enter"===e.key&&a.current.focus()}},variant:"standard",label:"Email *",type:"email",name:"email",fullWidth:!0,margin:"normal",value:U.email,onChange:Y,onFocus:function(){return K("email")},onBlur:function(){return K(null)},error:"email"===T&&!n}),"email"===T&&(0,C.jsx)(y.Z,{validationData:V[T],visible:T}),(0,C.jsx)(f.Z,{className:h,autoComplete:"current-password",InputLabelProps:"password"!==T||l?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:a,variant:"standard",label:"Password *",type:"password",name:"password",fullWidth:!0,margin:"normal",value:U.password,onChange:Y,onFocus:function(){return K("password")},onBlur:function(){return K(null)},error:"password"===T&&!l}),"password"===T&&(0,C.jsx)(y.Z,{validationData:V[T],visible:T}),(0,C.jsx)(c.Z,{className:j,children:(0,C.jsx)(W.Z,{color:"orange",disabled:!L,children:"Register"})})]})})})]})},L=n(9198);var z=function(){return(0,C.jsx)("div",{className:" background mainBackground",children:(0,C.jsx)("section",{className:"top-bottom",children:(0,C.jsx)(L.Z,{className:"left-right",children:(0,C.jsx)(I,{})})})})}},4758:function(e,a,n){n.d(a,{KI:function(){return i},Wi:function(){return o},aN:function(){return s},q8:function(){return l}});var r=n(6916),t=function(e){return e.registration},i=((0,r.P1)([t],(function(e){return e.validationReqs.name})),(0,r.P1)([t],(function(e){return e.validationReqs.email})),(0,r.P1)([t],(function(e){return e.validationReqs.password})),(0,r.P1)([t],(function(e){return e.isNameValid}))),s=(0,r.P1)([t],(function(e){return e.isEmailValid})),o=(0,r.P1)([t],(function(e){return e.isPasswordValid})),l=(0,r.P1)([i,s,o],(function(e,a,n){return e&&a&&n}))},8946:function(e,a,n){var r=n(4836);a.Z=void 0;var t=r(n(5649)),i=n(184),s=(0,t.default)((0,i.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");a.Z=s},5146:function(e,a,n){var r=n(4836);a.Z=void 0;var t=r(n(5649)),i=n(184),s=(0,t.default)((0,i.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");a.Z=s}}]);
//# sourceMappingURL=344.dfeb5bf1.chunk.js.map