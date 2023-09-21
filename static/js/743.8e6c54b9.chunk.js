"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[743],{9357:function(e,t,n){n.d(t,{Z:function(){return U}});var i=n(5861),a=n(4942),l=n(1413),o=n(9439),r=n(4687),s=n.n(r),c=n(2791),d={section:"CaloriesCalc_section__WB2nl",heading:"CaloriesCalc_heading__fAzfD",formdiv:"CaloriesCalc_formdiv__+a6k+",calcform:"CaloriesCalc_calcform__iDf5l",positionWrapper:"CaloriesCalc_positionWrapper__+O-50"},u=n(3855),h=n(5228),p=n(3896),g=n(4479),x=n(765),f=n(5523),m=n(7133),b=n(2700),v=n(6151),j=n(9095),Z=n(2739),F=n(627),C=n(4554),W=n(1087),_="modal_modalBox__UnNX8",y="modal_closeButton__hYa4+",A="modal_backButtonMobbile__r5QHQ",S="modal_back__V8JNM",N="modal_modalTitle__3zeL5",k="modal_totalCaloriesNumber__bUxLg",L="modal_totalCalories__U80Ut",B="modal_notEat__P-szP",V="modal_hr__CzLPQ",w="modal_text2__9c6ek",D="modal_notEatItem__hXM4C",T="modal_buttonWrapper__NZCpm",I="modal_button__GRC0s",H=n(184),P=function(e){var t=e.handleClose,n=e.modalState;return(0,H.jsx)(j.Z,{open:n.open,onClose:t,closeAfterTransition:!0,slots:{backdrop:Z.Z},slotProps:{backdrop:{timeout:500,sx:{backgroundColor:"#2121211f"}}},children:(0,H.jsx)(F.Z,{in:n.open,children:(0,H.jsxs)(C.Z,{children:[(0,H.jsx)("div",{className:A,children:(0,H.jsx)("span",{className:S,onClick:t,children:"\u23ce"})}),(0,H.jsxs)("div",{className:_,children:[(0,H.jsx)("span",{className:y,onClick:t,children:"\u2715"}),(0,H.jsxs)("p",{className:N,children:["Your recommended daily",(0,H.jsx)("br",{})," calorie intake is"]}),(0,H.jsxs)("b",{className:L,children:[(0,H.jsxs)("span",{className:k,children:[Math.round(n.totalCalories)," "]}),"kcal"]}),(0,H.jsxs)("div",{className:B,children:[(0,H.jsx)("hr",{className:V}),(0,H.jsx)("b",{className:w,children:"Foods you should not eat"}),(0,H.jsx)("ol",{children:n.foodNotToEat.map((function(e){return(0,H.jsx)("li",{className:D,children:e},e)}))}),(0,H.jsx)(W.rU,{to:"Login",className:T,children:(0,H.jsx)(v.Z,{className:I,variant:"contained",children:"Start losing weight"})})]})]})]})})})},z=n(8441),R=n(1887),M=n(5128),U=function(){var e=(0,u.I0)(),t=(0,u.v9)((function(e){return e.calculate.isHeightValid})),n=(0,u.v9)((function(e){return e.calculate.isAgeValid})),r=(0,u.v9)((function(e){return e.calculate.isCurrentValid})),j=(0,u.v9)((function(e){return e.calculate.isDesiredValid})),Z=(0,u.v9)((function(e){return e.calculate.isBloodValid})),F=!!(t&&n&&r&&j&&Z),C=(0,u.v9)((function(e){return e.calculate.isHeightFeetValid})),W=(0,u.v9)((function(e){return e.calculate.isHeightInchValid})),_=(0,u.v9)((function(e){return e.calculate.isCurrentLbsValid})),y=(0,u.v9)((function(e){return e.calculate.isDesiredLbsValid})),A=!!(C&&W&&n&&_&&y&&Z),S=(0,u.v9)((function(e){return e.calCalories.value})),N=(0,c.useState)({weight:!1,age:!1,currentWeight:!1,desiredWeight:!1,bloodType:!1}),k=(0,o.Z)(N,2),L=k[0],B=k[1],V=(0,c.useState)(0),w=(0,o.Z)(V,2),D=w[0],T=w[1],I=(0,c.useState)(null),U=(0,o.Z)(I,2),E=U[0],O=U[1],Q=(0,u.v9)((function(e){return e.calculate.validationReqs})),q=(0,c.useState)({open:!1,totalCalories:null,foodNotToEat:[]}),G=(0,o.Z)(q,2),K=G[0],X=G[1],Y=function(e){X({open:!0,totalCalories:e,foodNotToEat:["give","me","food"]})},J=(0,c.useState)({height:S.height,age:S.age,currentWeight:S.currentWeight,desiredWeight:S.desiredWeight,bloodType:S.bloodType,heightFeet:S.heightFeet,heightInch:S.heightInch,currentWeightLbs:S.currentWeightLbs,desiredWeightLbs:S.desiredWeightLbs}),$=(0,o.Z)(J,2),ee=$[0],te=$[1],ne=function(t){var n,i,o=t.target,r=o.name,s=o.value;switch(te((0,l.Z)((0,l.Z)({},ee),{},(0,a.Z)({},r,s))),r){case"height":e((0,R.Sg)({fieldValue:s}));break;case"heightFeet":e((0,R.p_)({fieldValue:s}));break;case"heightInch":e((0,R.V)({fieldValue:s}));break;case"age":e((0,R._f)({fieldValue:s}));break;case"currentWeight":e((0,R.$1)({fieldValue:s}));break;case"currentWeightLbs":e((0,R.z8)({fieldValue:s}));break;case"desiredWeight":e((0,R.mA)({fieldValue:s}));break;case"desiredWeightLbs":e((0,R.Kv)({fieldValue:s}));break;case"bloodType":e((0,R.r4)({fieldValue:s}))}if(1===D){var c=ee.heightFeet,d=ee.heightInch,u=ee.currentWeightLbs,h=ee.desiredWeightLbs;te((function(e){return(0,l.Z)((0,l.Z)({},e),{},{height:2.54*(12*c+1*d),currentWeight:.454*u,desiredWeight:.454*h})}))}O(r),n=r,i=!0,B((0,l.Z)((0,l.Z)({},L),{},(0,a.Z)({},n,i)))},ie=function(){var t=(0,i.Z)(s().mark((function t(n){var i,a,o,r,c,d,u,h,p,g;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),1!==D){t.next=5;break}return i=ee.heightFeet,a=ee.heightInch,o=ee.currentWeightLbs,r=ee.desiredWeightLbs,t.next=5,te((function(e){return(0,l.Z)((0,l.Z)({},e),{},{height:2.54*(12*i+1*a),currentWeight:.454*o,desiredWeight:.454*r})}));case 5:c=ee.height,d=ee.age,u=ee.currentWeight,h=ee.desiredWeight,p=ee.bloodType,g=10*u+6.25*c-5*d-161-10*(u-h),e((0,M.KU)({height:c,age:d,currentWeight:u,desiredWeight:h,bloodType:p})),Y(g);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{className:d.positionWrapper,children:(0,H.jsx)("div",{className:d.section,children:(0,H.jsxs)("div",{className:d.calcWrapper,children:[(0,H.jsx)("h1",{className:d.heading,children:"Calculate your daily calorie"}),(0,H.jsx)("h1",{className:d.heading,children:"intake right now"}),(0,H.jsxs)(h.Z,{value:D,onChange:function(e,t){T(t)},sx:{"& button":{color:"white",borderRadius:2,backgroundColor:"#FC842D",marginTop:"15px",marginRight:"10px"},"& button:focus":{color:"white",textShadow:"2px 2px",fontWeight:900}},children:[(0,H.jsx)(p.Z,{label:"Metric"}),(0,H.jsx)(p.Z,{label:"Standard US"})]}),0===D&&(0,H.jsxs)("form",{className:d.calcform,onSubmit:ie,children:[(0,H.jsxs)("div",{className:d.formdiv,children:[(0,H.jsx)(b.Z,{sx:{"& .MuiOutlinedInput-root.Mui-focused":{"& > fieldset":{borderColor:"orange"}},fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:122,max:214}},label:"Height *",variant:"standard",onChange:ne,value:ee.height,name:"height",onFocus:function(){return O("height")},onBlur:function(){return O(null)}}),"height"===E&&(0,H.jsx)(z.Z,{validationData:Q[E],visible:E}),(0,H.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:18,max:80}},label:"Age",variant:"standard",onChange:ne,value:ee.age,name:"age",onFocus:function(){return O("age")},onBlur:function(){return O(null)}}),"age"===E&&(0,H.jsx)(z.Z,{validationData:Q[E],visible:E}),(0,H.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Current Weight",variant:"standard",onChange:ne,value:ee.currentWeight,name:"currentWeight",onFocus:function(){return O("currentWeight")},onBlur:function(){return O(null)}}),"currentWeight"===E&&(0,H.jsx)(z.Z,{validationData:Q[E],visible:E})]}),(0,H.jsxs)("div",{className:d.formdiv,children:[(0,H.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Desired Weight",variant:"standard",onChange:ne,value:ee.desiredWeight,name:"desiredWeight",onFocus:function(){return O("desiredWeight")},onBlur:function(){return O(null)}}),"desiredWeight"===E&&(0,H.jsx)(z.Z,{validationData:Q[E],visible:E}),(0,H.jsx)(m.Z,{id:"demo-radio-buttons-group-label",children:"Blood Type"}),(0,H.jsxs)(x.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:ee.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:ne,onFocus:function(){return O("bloodType")},onBlur:function(){return O(null)},children:[(0,H.jsx)(f.Z,{value:"A",control:(0,H.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"1"}),(0,H.jsx)(f.Z,{value:"B",control:(0,H.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"2"}),(0,H.jsx)(f.Z,{value:"AB",control:(0,H.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"3"}),(0,H.jsx)(f.Z,{value:"O",control:(0,H.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"4"})]}),"bloodType"===E&&(0,H.jsx)(z.Z,{validationData:Q[E],visible:E})]}),(0,H.jsx)(v.Z,{sx:{margin:"40px 0",backgroundColor:"#FC842D",width:"210px",height:"43px",dropShadow:"50% #FC842D80",borderRadius:"30px",fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"center",color:"#FFFFFF"},type:"submit",variant:"contained",disabled:!F,children:"Start losing weight"})]}),1===D&&(0,H.jsxs)("form",{className:d.calcform,onSubmit:ie,children:[(0,H.jsxs)("div",{className:d.formdiv,children:[(0,H.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",label:"Height Feet *",variant:"standard",onChange:ne,value:ee.heightFeet,name:"heightFeet",onFocus:function(){return O("heightFeet")},onBlur:function(){return O(null)}}),(0,H.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",label:"Height Inch *",variant:"standard",onChange:ne,value:ee.heightInch,name:"heightInch",onFocus:function(){return O("heightInch")},onBlur:function(){return O(null)}}),(0,H.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:18,max:80}},label:"Age",variant:"standard",onChange:ne,value:ee.age,name:"age",onFocus:function(){return O("age")},onBlur:function(){return O(null)}})]}),(0,H.jsxs)("div",{className:d.formdiv,children:[(0,H.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Current Weight Lbs",variant:"standard",onChange:ne,value:ee.currentWeightLbs,name:"currentWeightLbs",onFocus:function(){return O("currentWeightLbs")},onBlur:function(){return O(null)}}),(0,H.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},InputLabelProps:{style:{color:"#9B9FAA"}},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Desired Weight Lbs",variant:"standard",onChange:ne,value:ee.desiredWeightLbs,name:"desiredWeightLbs",onFocus:function(){return O("desiredWeightLbs")},onBlur:function(){return O(null)}}),(0,H.jsx)(m.Z,{id:"demo-radio-buttons-group-label",children:"Blood Type"}),(0,H.jsxs)(x.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:ee.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:ne,onFocus:function(){return O("bloodType")},onBlur:function(){return O(null)},children:[(0,H.jsx)(f.Z,{value:"A",control:(0,H.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"A"}),(0,H.jsx)(f.Z,{value:"B",control:(0,H.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"B"}),(0,H.jsx)(f.Z,{value:"AB",control:(0,H.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"AB"}),(0,H.jsx)(f.Z,{value:"O",control:(0,H.jsx)(g.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"O"})]})]}),(0,H.jsx)(z.Z,{validationData:Q[E],visible:E}),(0,H.jsx)(v.Z,{sx:{margin:"40px 0",backgroundColor:"#FC842D",width:"210px",height:"43px",dropShadow:"50% #FC842D80",borderRadius:"30px",fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"center",color:"#FFFFFF"},type:"submit",variant:"contained",disabled:!A,children:"Start losing weight"})]})]})})}),(0,H.jsx)(P,{handleClose:function(){X((function(e){return(0,l.Z)((0,l.Z)({},e),{},{open:!1})})),setTimeout((function(){X({open:!1,totalCalories:null,foodNotToEat:[]})}),250)},modalState:K})]})}},9198:function(e,t,n){var i=n(2007),a=n(184),l=function(e){var t=e.children,n=e.className;return(0,a.jsx)("div",{className:n,children:t})};l.propTopes={children:i.node.isRequired,className:i.string},t.Z=l},8441:function(e,t,n){n.d(t,{Z:function(){return u}});n(2791);var i=n(5527),a=n(493),l=n(4852),o=n(6259),r=n(8946),s=n(5146),c={},d=n(184),u=function(e){var t=e.validationData,n=e.visible;return(0,d.jsx)(i.Z,{elevation:8,className:c.validationPopup,children:(0,d.jsx)(a.Z,{className:c.validationPopupList,sx:{width:"100%",maxWidth:360},children:n&&t?t.map((function(e,t){var n=e[Object.keys(e)[0]],i=n.id,a=n.message,u=n.met,h=u?r.Z:s.Z,p=u?"green":"red";return(0,d.jsxs)(l.ZP,{className:c.validationPopupItem,disableGutters:!0,children:[(0,d.jsx)(h,{className:c.validationPopupIcon,style:{color:p}}),(0,d.jsx)(o.Z,{disableTypography:!0,primary:a,sx:{fontSize:"12px"}})]},i)})):null})})}}}]);
//# sourceMappingURL=743.8e6c54b9.chunk.js.map