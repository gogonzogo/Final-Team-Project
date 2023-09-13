"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[390],{9357:function(e,a,l){l.d(a,{Z:function(){return V}});var t=l(4942),n=l(1413),i=l(9439),o=l(2791),r="CaloriesCalc_section__WB2nl",s="CaloriesCalc_calcWrapper__AcODC",c="CaloriesCalc_heading__fAzfD",d="CaloriesCalc_formdiv__+a6k+",h="CaloriesCalc_calcform__iDf5l",x="CaloriesCalc_positionWrapper__+O-50",p=l(4479),m=l(765),u=l(5523),g=l(7133),_=l(2700),j=l(6151),f=l(9095),C=l(2739),b=l(627),N=l(4554),v=l(1087),k="modal_modalBox__UnNX8",Z="modal_closeButton__hYa4+",S="modal_backButtonMobbile__r5QHQ",B="modal_back__V8JNM",y="modal_modalTitle__3zeL5",F="modal_totalCaloriesNumber__bUxLg",W="modal_totalCalories__U80Ut",w="modal_notEat__P-szP",E="modal_hr__CzLPQ",T="modal_text2__9c6ek",A="modal_notEatItem__hXM4C",D="modal_buttonWrapper__NZCpm",z="modal_button__GRC0s",H=l(184),M=function(e){var a=e.handleClose,l=e.modalState;return(0,H.jsx)(f.Z,{open:l.open,onClose:a,closeAfterTransition:!0,slots:{backdrop:C.Z},slotProps:{backdrop:{timeout:500,sx:{backgroundColor:"#2121211f"}}},children:(0,H.jsx)(b.Z,{in:l.open,children:(0,H.jsxs)(N.Z,{children:[(0,H.jsx)("div",{className:S,children:(0,H.jsx)("span",{className:B,onClick:a,children:"\u23ce"})}),(0,H.jsxs)("div",{className:k,children:[(0,H.jsx)("span",{className:Z,onClick:a,children:"\u2715"}),(0,H.jsxs)("p",{className:y,children:["Your recommended daily",(0,H.jsx)("br",{})," calorie intake is"]}),(0,H.jsxs)("b",{className:W,children:[(0,H.jsxs)("span",{className:F,children:[Math.round(l.totalCalories)," "]}),"kcal"]}),(0,H.jsxs)("div",{className:w,children:[(0,H.jsx)("hr",{className:E}),(0,H.jsx)("b",{className:T,children:"Foods you should not eat"}),(0,H.jsx)("ol",{children:l.foodNotToEat.map((function(e){return(0,H.jsx)("li",{className:A,children:e},e)}))}),(0,H.jsx)(v.rU,{to:"Login",className:D,children:(0,H.jsx)(j.Z,{className:z,variant:"contained",children:"Start losing weight"})})]})]})]})})})},V=function(){var e=(0,o.useState)({open:!1,totalCalories:null,foodNotToEat:[]}),a=(0,i.Z)(e,2),l=a[0],f=a[1],C=(0,o.useState)({height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:""}),b=(0,i.Z)(C,2),N=b[0],v=b[1],k=N.height,Z=N.age,S=N.currentWeight,B=N.desiredWeight,y=N.bloodType,F=function(e){v((0,n.Z)((0,n.Z)({},N),{},(0,t.Z)({},e.target.name,[e.target.value])))};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{className:x,children:(0,H.jsx)("div",{className:r,children:(0,H.jsxs)("div",{className:s,children:[(0,H.jsx)("h1",{className:c,children:"Calculate your daily calorie"}),(0,H.jsx)("h1",{className:c,children:"intake right now"}),(0,H.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault();var a=10*S+6.25*k-5*Z-161-10*(S-S);console.log(k),console.log(Z),console.log(S),console.log(B),console.log(y),console.log(a),function(e){f({open:!0,totalCalories:e,foodNotToEat:["give","me","food"]})}(a)},children:[(0,H.jsxs)("div",{className:d,children:[(0,H.jsx)(_.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"240px",paddingRight:"32px"},type:"tel",inputprops:{inputprops:{min:122,max:214}},label:"Height",variant:"standard",onChange:F,value:k,name:"height",required:!0,error:""!==k&&(k<122||k>214),helperText:""!==k&&(k<122||k>214)?"Height must be between 122cm and 214cm.":" "}),(0,H.jsx)(_.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"240px",paddingRight:"32px"},type:"tel",inputprops:{inputprops:{min:18,max:80}},label:"Age",variant:"standard",onChange:F,value:Z,name:"age",required:!0,error:""!==Z&&(Z<18||Z>80),helperText:""!==Z&&(Z<18||Z>80)?"Age must be between 18 and 80.":" "}),(0,H.jsx)(_.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"240px",paddingRight:"32px"},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Current Weight",variant:"standard",onChange:F,value:S,name:"currentWeight",error:""!==S&&(S<34||S>181),helperText:""!==S&&(S<34||S>181)?"Current Weight must be between 34kg and 181kg.":" ",required:!0})]}),(0,H.jsxs)("div",{className:d,children:[(0,H.jsx)(_.Z,{sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",width:"240px",paddingRight:"32px"},type:"tel",inputprops:{inputprops:{min:34,max:181}},label:"Desired Weight",variant:"standard",onChange:F,value:B,name:"desiredWeight",required:!0,error:""!==B&&(B<34||B>181||B>S),helperText:""!==B&&(B<34||B>181||B>S)?"Desired Weight must be between 34kg and 181kg. & less then current weight":" "}),(0,H.jsx)(g.Z,{id:"demo-radio-buttons-group-label",children:"Blood Type"}),(0,H.jsxs)(m.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",value:y,name:"bloodType",sx:{"&, &.Mui-checked":{color:"#FC842D"},flexDirection:"row"},onChange:F,required:!0,children:[(0,H.jsx)(u.Z,{value:"A",control:(0,H.jsx)(p.Z,{}),label:"A",sx:{color:"#E0E0E0","&.Mui-checked":{color:"#FC842D"}}}),(0,H.jsx)(u.Z,{value:"B",control:(0,H.jsx)(p.Z,{}),label:"B",sx:{color:"#E0E0E0","&.Mui-checked":{color:"#FC842D"}}}),(0,H.jsx)(u.Z,{value:"AB",control:(0,H.jsx)(p.Z,{}),label:"AB",sx:{color:"#E0E0E0","&.Mui-checked":{color:"#FC842D"}}}),(0,H.jsx)(u.Z,{value:"O",control:(0,H.jsx)(p.Z,{}),label:"O",sx:{color:"#E0E0E0","&.Mui-checked":{color:"rgba(252, 132, 45, 1)"}}})]})]}),(0,H.jsx)(j.Z,{sx:{margin:"40px 0",backgroundColor:"#FC842D",width:"210px",height:"43px",dropShadow:"50% #FC842D80",borderRadius:"30px",fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"center",color:"#FFFFFF"},type:"submit",variant:"contained",children:"Start losing weight"})]})]})})}),(0,H.jsx)(M,{handleClose:function(){f((function(e){return(0,n.Z)((0,n.Z)({},e),{},{open:!1})})),setTimeout((function(){f({open:!1,totalCalories:null,foodNotToEat:[]})}),250)},modalState:l})]})}},6912:function(e,a,l){l.d(a,{Z:function(){return c}});var t="rightSideBar_sideBarContainer__rWrUX",n="rightSideBar_sideBarTitle__1pky6",i="rightSideBar_statsBox__0Xanq",o="rightSideBar_statsBoxItem__Vk8lb",r="rightSideBar_sideBarContent__TIFBc",s=l(184),c=function(){return(0,s.jsx)("div",{className:t,children:(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)("p",{className:n,children:"Your stats:"}),(0,s.jsxs)("ul",{className:i,children:[(0,s.jsxs)("li",{className:o,children:[(0,s.jsx)("p",{children:"Height, cm"}),(0,s.jsx)("p",{children:"12"})]}),(0,s.jsxs)("li",{className:o,children:[(0,s.jsx)("p",{children:"Age"}),(0,s.jsx)("p",{children:"12"})]}),(0,s.jsxs)("li",{className:o,children:[(0,s.jsx)("p",{children:"Current weight, kg"}),(0,s.jsx)("p",{children:"12"})]}),(0,s.jsxs)("li",{className:o,children:[(0,s.jsx)("p",{children:"Desired weight, kg"}),(0,s.jsx)("p",{children:"12"})]}),(0,s.jsxs)("li",{className:o,children:[(0,s.jsx)("p",{children:"Blood type"}),(0,s.jsx)("p",{children:"A"})]})]})]})})}},5390:function(e,a,l){l.r(a);l(2791);var t=l(6912),n=l(9357),i=l(184);a.default=function(){return(0,i.jsxs)("div",{className:"background mainBackground",children:[(0,i.jsx)(n.Z,{}),(0,i.jsx)(t.Z,{})]})}}}]);
//# sourceMappingURL=390.3cc843bd.chunk.js.map