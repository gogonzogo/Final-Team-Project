"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[264],{5860:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(5861),i=n(4942),a=n(1413),l=n(9439),o=n(4687),s=n.n(o),c=n(2791),u={section:"CaloriesCalc_section__WB2nl",positionWrapper:"CaloriesCalc_positionWrapper__+O-50",heading:"CaloriesCalc_heading__fAzfD",formdiv:"CaloriesCalc_formdiv__+a6k+",calcform:"CaloriesCalc_calcform__iDf5l",tabs:"CaloriesCalc_tabs__MkAfR"},d=n(3855),h=n(5228),g=n(3896),p=n(4479),f=n(765),x=n(5523),m=n(7133),b=n(1618),y=n(5193),v=n(9095),Z=n(2739),j=n(627),W=n(4554),F=n(6151),C=n(1087),k=n(6292),A=n(3063),S=n(184),V=function(e){var t=e.handleClose,n=e.modalState,r=(0,y.Z)("(max-width: 480px)");return(0,S.jsx)(v.Z,{style:{top:r&&83},open:n.open,onClose:t,closeAfterTransition:!0,slots:{backdrop:Z.Z},slotProps:{backdrop:{timeout:500,sx:{top:r&&83,backgroundColor:"#2121211f"}}},disableScrollLock:!!r,children:(0,S.jsx)(j.Z,{in:n.open,children:(0,S.jsxs)(W.Z,{children:[(0,S.jsx)("div",{className:A.Z.backButtonMobbile,children:(0,S.jsx)("span",{className:A.Z.back,onClick:t,children:"\u23ce"})}),(0,S.jsxs)("div",{className:A.Z.modalBox,children:[(0,S.jsx)("span",{className:A.Z.closeButton,onClick:t,children:"\u2715"}),(0,S.jsxs)("p",{className:A.Z.modalTitle,children:["Your recommended daily",(0,S.jsx)("br",{})," calorie intake is"]}),(0,S.jsxs)("b",{className:A.Z.dailyRate,children:[(0,S.jsxs)("span",{className:A.Z.totalCaloriesNumber,children:[Math.round(n.dailyRate)," "]}),"kcal"]}),(0,S.jsxs)("div",{className:A.Z.notEat,children:[(0,S.jsx)("hr",{className:A.Z.hr}),(0,S.jsx)("b",{className:A.Z.text2,children:"Foods you should not eat"}),(0,S.jsx)(k.Z,{array:n.foodNotToEat.slice(0)}),(0,S.jsx)(C.rU,{to:"register",className:A.Z.buttonWrapper,children:(0,S.jsx)(F.Z,{className:A.Z.button,variant:"contained",children:"Start losing weight"})})]})]})]})})})},N=n(8441),L=n(1887),R=n(5821),B=n(2260),w=n(4142),T=n(1980),P=n(7892),I=n.n(P),M=n(5336),_=function(){var e=(0,c.useRef)(null),t=(0,c.useRef)(null),n=(0,c.useRef)(null),o=(0,c.useRef)(null),y=(0,c.useRef)(null),v=(0,c.useRef)(null),Z=(0,c.useRef)(null),j=(0,c.useState)("Submit"),W=(0,l.Z)(j,2),F=W[0],C=W[1],k=(0,M.a)().calculator,A=(0,T.a)().loggedIn,P=I()().format("MM-DD-YYYY"),_=(0,d.I0)(),D=(0,d.v9)((function(e){return e.calculate.isHeightValid})),z=(0,d.v9)((function(e){return e.calculate.isAgeValid})),E=(0,d.v9)((function(e){return e.calculate.isCurrentValid})),H=(0,d.v9)((function(e){return e.calculate.isDesiredValid})),O=(0,d.v9)((function(e){return e.calculate.isBloodValid})),K=!!(D&&z&&E&&H&&O);(0,c.useEffect)((function(){C(A?"Update Calculator":"Start losing weight")}),[A]);var Y=(0,d.v9)((function(e){return e.calculate.isHeightFeetValid})),U=(0,d.v9)((function(e){return e.calculate.isHeightInchValid})),q=(0,d.v9)((function(e){return e.calculate.isCurrentLbsValid})),$=(0,d.v9)((function(e){return e.calculate.isDesiredLbsValid})),G=!!(Y&&U&&z&&q&&$&&O),J=(0,c.useState)({weight:!1,age:!1,currentWeight:!1,desiredWeight:!1,bloodType:!1}),Q=(0,l.Z)(J,2),X=Q[0],ee=Q[1],te=(0,c.useState)(null),ne=(0,l.Z)(te,2),re=ne[0],ie=ne[1],ae=(0,c.useState)({open:!1,dailyRate:null,foodNotToEat:[]}),le=(0,l.Z)(ae,2),oe=le[0],se=le[1],ce=function(e){se({open:!0,dailyRate:e.dailyRate,foodNotToEat:e.notAllowedFood})},ue=(0,c.useState)({height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:"",heightFeet:"",heightInch:"",currentWeightLbs:"",desiredWeightLbs:"",unitOfMeasure:"M"}),de=(0,l.Z)(ue,2),he=de[0],ge=de[1],pe=(0,c.useState)(0),fe=(0,l.Z)(pe,2),xe=fe[0],me=fe[1],be=function(){var e=(0,r.Z)(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(n),e.next=3,ge((function(e){return(0,a.Z)((0,a.Z)({},e),{},{unitOfMeasure:0===n?"M":"S"})}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ye=function(e){var t,n,r=e.target,l=r.name,o=r.value;switch(ge((0,a.Z)((0,a.Z)({},he),{},(0,i.Z)({},l,o))),l){case"height":_((0,L.Sg)({fieldValue:o}));break;case"heightFeet":_((0,L.p_)({fieldValue:o}));break;case"heightInch":_((0,L.V)({fieldValue:o}));break;case"age":_((0,L._f)({fieldValue:o}));break;case"currentWeight":_((0,L.$1)({fieldValue:o}));break;case"currentWeightLbs":_((0,L.z8)({fieldValue:o}));break;case"desiredWeight":_((0,L.mA)({fieldValue:o}));break;case"desiredWeightLbs":_((0,L.Kv)({fieldValue:o}));break;case"bloodType":_((0,L.r4)({fieldValue:o}))}ie(l),t=l,n=!0,ee((0,a.Z)((0,a.Z)({},X),{},(0,i.Z)({},t,n)))},ve=(0,d.v9)((function(e){return e.calculate.validationReqs})),Ze=function(){return(0,S.jsx)("div",{children:(0,S.jsx)(N.Z,{validationData:ve[re],visible:re})})},je=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,i,a,l,o,c,u,d,h,g,p,f,x;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=he.height,r=he.age,i=he.currentWeight,a=he.desiredWeight,l=he.bloodType,o=he.heightFeet,c=he.heightInch,u=he.currentWeightLbs,d=he.desiredWeightLbs,h=he.unitOfMeasure,g={currentWeight:"M"===h?i:.454*u,height:"M"===h?n:2.54*(12*o+1*c),age:r,desiredWeight:"M"===h?a:.454*d,bloodType:l},e.next=6,_((0,w.vO)(g));case 6:p=e.sent,f=p.payload.data,x={height:n,age:r,bloodType:l,currentWeight:i,desiredWeight:a,heightFeet:o,heightInch:c,currentWeightLbs:u,desiredWeightLbs:d,dailyRate:f.dailyRate,unitOfMeasure:h,date:P,startDate:k.startDate||P,originalWeight:k.originalWeight||i||u},A?_((0,w.gU)(x)):(_((0,R.storeCalulator)(x)),ce(f)),ge({height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:"",heightFeet:"",heightInch:"",currentWeightLbs:"",desiredWeightLbs:"",unitOfMeasure:"M"}),_((0,L.Sg)({fieldValue:""})),_((0,L.p_)({fieldValue:""})),_((0,L.V)({fieldValue:""})),_((0,L._f)({fieldValue:""})),_((0,L.$1)({fieldValue:""})),_((0,L.z8)({fieldValue:""})),_((0,L.mA)({fieldValue:""})),_((0,L.Kv)({fieldValue:""})),_((0,L.r4)({fieldValue:""})),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(1),new Error("Error submitting calculator: "+e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("div",{className:u.positionWrapper,children:(0,S.jsx)("div",{className:u.section,children:(0,S.jsxs)("div",{className:u.calcWrapper,children:[(0,S.jsx)("h1",{className:u.heading,children:"Calculate your daily calorie"}),(0,S.jsx)("h1",{className:u.heading,children:"intake right now"}),(0,S.jsx)("div",{className:u.tabs,children:(0,S.jsxs)(h.Z,{orientation:"horizontal",value:xe,onChange:be,indicatorColor:"transparent",sx:{"& button":{marginTop:"25px",paddingTop:"5px",width:"100px",padding:"1rem",margin:"2px",borderRadius:"30px",fontFamily:"Verdana",fontSize:"9px",fontWeight:700,textTransform:"capitalize",border:"solid #fc842d"},"& button:focus":{border:"solid #fc842d",boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"},"& button:hover":{border:"solid #fc842d",boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"}},children:[(0,S.jsx)(g.Z,{label:"Metric"}),(0,S.jsx)(g.Z,{label:"Standard US"})]})}),0===xe&&(0,S.jsxs)("form",{className:u.calcform,onSubmit:je,children:[(0,S.jsxs)("div",{className:u.formdiv,children:[(0,S.jsx)(b.Z,{sx:{"& .MuiOutlinedInput-root.Mui-focused":{"& > fieldset":{borderColor:"orange"}},fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"height"!==re||D?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputProps:{onKeyPress:function(t){"Enter"===t.key&&e.current.focus()}},label:"Height *",variant:"standard",onChange:ye,value:he.height,name:"height",onFocus:function(){return ie("height")},onBlur:function(){return ie(null)}}),"height"===re&&Ze(),(0,S.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"age"!==re||z?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputRef:e,inputProps:{onKeyPress:function(e){"Enter"===e.key&&t.current.focus()}},label:"Age *",variant:"standard",onChange:ye,value:he.age,name:"age",onFocus:function(){return ie("age")},onBlur:function(){return ie(null)}}),"age"===re&&Ze(),(0,S.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"currentWeight"!==re||E?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputRef:t,inputProps:{onKeyPress:function(e){"Enter"===e.key&&n.current.focus()}},label:"Current Weight *",variant:"standard",onChange:ye,value:he.currentWeight,name:"currentWeight",onFocus:function(){return ie("currentWeight")},onBlur:function(){return ie(null)}}),"currentWeight"===re&&Ze()]}),(0,S.jsxs)("div",{className:u.formdiv,children:[(0,S.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"desiredWeight"!==re||H?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},type:"tel",inputRef:n,label:"Desired Weight *",variant:"standard",onChange:ye,value:he.desiredWeight,name:"desiredWeight",onFocus:function(){return ie("desiredWeight")},onBlur:function(){return ie(null)}}),"desiredWeight"===re&&Ze(),(0,S.jsx)(m.Z,{id:"demo-radio-buttons-group-label",sx:{marginTop:"20px"},children:"Blood Type"}),(0,S.jsxs)(f.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:he.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:ye,onFocus:function(){return ie("bloodType")},onBlur:function(){return ie(null)},children:[(0,S.jsx)(x.Z,{value:"A",control:(0,S.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"1"}),(0,S.jsx)(x.Z,{value:"B",control:(0,S.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"2"}),(0,S.jsx)(x.Z,{value:"AB",control:(0,S.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"3"}),(0,S.jsx)(x.Z,{value:"O",control:(0,S.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"4"})]}),"bloodType"===re&&Ze()]}),(0,S.jsx)(B.Z,{color:"orange",size:"wide",disabled:!K,children:F})]}),1===xe&&(0,S.jsxs)("form",{className:u.calcform,onSubmit:je,children:[(0,S.jsxs)("div",{className:u.formdiv,children:[(0,S.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"heightFeet"!==re||Y?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputProps:{onKeyPress:function(e){"Enter"===e.key&&o.current.focus()}},type:"tel",label:"Height Feet *",variant:"standard",onChange:ye,value:he.heightFeet,name:"heightFeet",onFocus:function(){return ie("heightFeet")},onBlur:function(){return ie(null)}}),"heightFeet"===re&&Ze(),(0,S.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"heightInch"!==re||U?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:o,inputProps:{onKeyPress:function(e){"Enter"===e.key&&y.current.focus()}},type:"tel",label:"Height Inch *",variant:"standard",onChange:ye,value:he.heightInch,name:"heightInch",onFocus:function(){return ie("heightInch")},onBlur:function(){return ie(null)}}),"heightInch"===re&&Ze(),(0,S.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"age"!==re||z?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:y,inputProps:{onKeyPress:function(e){"Enter"===e.key&&v.current.focus()}},type:"tel",label:"Age *",variant:"standard",onChange:ye,value:he.age,name:"age",onFocus:function(){return ie("age")},onBlur:function(){return ie(null)}}),"age"===re&&Ze()]}),(0,S.jsxs)("div",{className:u.formdiv,children:[(0,S.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"currentWeightLbs"!==re||q?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:v,inputProps:{onKeyPress:function(e){"Enter"===e.key&&Z.current.focus()}},type:"tel",label:"Current Weight Lbs *",variant:"standard",onChange:ye,value:he.currentWeightLbs,name:"currentWeightLbs",onFocus:function(){return ie("currentWeightLbs")},onBlur:function(){return ie(null)}}),"currentWeightLbs"===re&&Ze(),(0,S.jsx)(b.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"272px",paddingRight:"32px"},margin:"normal",InputLabelProps:"desiredWeightLbs"!==re||$?{style:{color:"#9B9FAA"}}:{style:{color:"red"}},inputRef:Z,type:"tel",label:"Desired Weight Lbs *",variant:"standard",onChange:ye,value:he.desiredWeightLbs,name:"desiredWeightLbs",onFocus:function(){return ie("desiredWeightLbs")},onBlur:function(){return ie(null)}}),"desiredWeightLbs"===re&&Ze(),(0,S.jsx)(m.Z,{id:"demo-radio-buttons-group-label",sx:{marginTop:"20px"},children:"Blood Type"}),(0,S.jsxs)(f.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:he.bloodType,name:"bloodType",sx:{flexDirection:"row"},onChange:ye,onFocus:function(){return ie("bloodType")},onBlur:function(){return ie(null)},children:[(0,S.jsx)(x.Z,{value:"A",control:(0,S.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"A"}),(0,S.jsx)(x.Z,{value:"B",control:(0,S.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"B"}),(0,S.jsx)(x.Z,{value:"AB",control:(0,S.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"AB"}),(0,S.jsx)(x.Z,{value:"O",control:(0,S.jsx)(p.Z,{sx:{"&.Mui-checked":{color:"#FC842D"}}}),label:"O"})]})]}),(0,S.jsx)(B.Z,{color:"orange",size:"wide",disabled:!G,children:F})]})]})})}),(0,S.jsx)(V,{handleClose:function(){se((function(e){return(0,a.Z)((0,a.Z)({},e),{},{open:!1})})),setTimeout((function(){se({open:!1,dailyRate:null,foodNotToEat:[]})}),250)},modalState:oe})]})}},9198:function(e,t,n){var r=n(2007),i=n(184),a=function(e){var t=e.children,n=e.className;return(0,i.jsx)("div",{className:n,children:t})};a.propTopes={children:r.node.isRequired,className:r.string},t.Z=a},6292:function(e,t,n){var r=n(3063),i=n(184);t.Z=function(e){return(0,i.jsx)("ol",{style:e.style,children:e.array.map((function(e){return(0,i.jsx)("li",{className:r.Z.notEatItem,children:e.title},e._id)}))})}},8441:function(e,t,n){n.d(t,{Z:function(){return d}});n(2791);var r=n(5527),i=n(493),a=n(4852),l=n(9900),o=n(8946),s=n(5146),c={},u=n(184),d=function(e){var t=e.validationData,n=e.visible;return(0,u.jsx)(r.Z,{elevation:8,className:c.validationPopup,children:(0,u.jsx)(i.Z,{className:c.validationPopupList,sx:{width:"100%",maxWidth:360},children:n&&t?t.map((function(e,t){var n=e[Object.keys(e)[0]],r=n.id,i=n.message,d=n.met,h=d?o.Z:s.Z,g=d?"green":"red";return(0,u.jsxs)(a.ZP,{className:c.validationPopupItem,disableGutters:!0,children:[(0,u.jsx)(h,{className:c.validationPopupIcon,style:{color:g}}),(0,u.jsx)(l.Z,{disableTypography:!0,primary:i,sx:{fontSize:"12px"}})]},r)})):null})})}}}]);
//# sourceMappingURL=264.cd709b88.chunk.js.map