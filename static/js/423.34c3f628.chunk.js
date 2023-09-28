"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[423],{9198:function(e,t,a){var n=a(2007),r=a(184),i=function(e){var t=e.children,a=e.className;return(0,r.jsx)("div",{className:a,children:t})};i.propTopes={children:n.node.isRequired,className:n.string},t.Z=i},2260:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(1413),r=a(4942),i=a(5987),s={Button:"CustomButton_Button__wxqQ9",orange:"CustomButton_orange__JhdH3",white:"CustomButton_white__PAugr",disabled:"CustomButton_disabled__zn-Hl",wide:"CustomButton_wide__0zS2P"},l=a(6151),o=a(3733),d=a(184),c=["color","size","margin","children","disabled","className","style"],u=function(e){var t=e.color,a=e.size,u=(e.margin,e.children),m=e.disabled,_=e.className,x=e.style,h=(0,i.Z)(e,c);return(0,d.jsx)(l.Z,(0,n.Z)((0,n.Z)({className:(0,o.Z)(s.Button,s[t],s[a],(0,r.Z)({},s.disabled,m),_),style:x,type:"submit",disabled:m},h),{},{children:u}))}},6292:function(e,t,a){var n=a(3063),r=a(184);t.Z=function(e){return(0,r.jsx)("ol",{style:e.style,children:e.array.map((function(e){return(0,r.jsx)("li",{className:n.Z.notEatItem,children:e.title},e._id)}))})}},1680:function(e,t,a){var n=a(8496),r=a(184);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:n.Z.sideBarContainer,children:t})}},423:function(e,t,a){a.r(t),a.d(t,{default:function(){return fe}});var n=a(2791),r=a(1413),i=a(9439),s=a(1582),l=a(5904),o=a(8502),d="DiaryAddProductForm_section__OMkqD",c="DiaryAddProductForm_diaryform__I65-r",u="DiaryAddProductForm_formdiv__wXEO1",m="DiaryAddProductForm_diaryFormBtn__knET2",_=a(3855),x=a(7120),h=a(2260),p=a(1301),f=a(763),j=a(3550),v=a(2791),Z=v.useState,y=v.useEffect,g=function(){var e=Z(window.innerWidth),t=(0,i.Z)(e,2),a=t[0],n=t[1];return y((function(){var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:a}},B="DiaryAddButton_CirclePlus__r4ozu",C=a(3400),b=a(2419),N=a(184);function D(e){var t=e.onClick,a=e.disabled;return(0,N.jsx)(C.Z,{variant:"outlined",className:B,type:"button",onClick:t,disabled:a,children:(0,N.jsx)(b.Z,{})})}function w(e){var t=e.diaryBackBtn,a=(0,n.useState)(""),v=(0,i.Z)(a,2),Z=v[0],y=v[1],B=(0,n.useState)(""),C=(0,i.Z)(B,2),b=C[0],w=C[1],k=(0,p.Y)(),I=k.calDate,Y=k.foodsList,S=(0,_.I0)(),P=Array.from(new Set(Y.map((function(e){return e.title})))),M=g().width,E=function(e){e.preventDefault();var a=Y.find((function(e){return e.title===Z})),n=Math.ceil(a.calories/100*b)||0;S((0,x.NA)({calDate:I,productName:Z,grams:b,calories:n})),S((0,j.Hz)([])),y(""),w(""),S((0,j.bQ)(!t))},z=(0,f.debounce)((function(e){S((0,x.VU)(e))}),400);return(0,N.jsx)("div",{className:d,children:(0,N.jsxs)("form",{className:c,onSubmit:E,children:[(0,N.jsx)("div",{className:u,children:(0,N.jsx)(s.Z,{spacing:2,children:(0,N.jsx)(l.Z,{id:"size-small-standard",sx:{"@media (min-width: 768px)":{width:"240px"}},freeSolo:!0,size:"small",options:P,value:Z,onChange:function(e,t){null!==t&&y(t)},inputValue:Z,onInputChange:function(e){var t=e.target.value||"";e&&(y(t),z(t))},renderInput:function(e){return(0,N.jsx)(o.Z,(0,r.Z)((0,r.Z)({required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",marginBottom:"8px","@media (min-width: 768px)":{width:"240px",marginBottom:"0"}}},e),{},{variant:"standard",label:"Enter product name"}))}})})}),(0,N.jsx)("div",{className:u,children:(0,N.jsx)(o.Z,{required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left","@media (min-width: 768px)":{width:"106px",paddingBottom:"0",marginRight:"100px",marginLeft:"22px",textAlign:"right"}},id:"standard-basic",label:"Grams",variant:"standard",type:"number",value:b,onChange:function(e){w(e.target.value)}})}),M>768?(0,N.jsx)(D,{onClick:E,disabled:""===Z||""===b}):(0,N.jsx)(h.Z,{className:m,color:"orange",disabled:""===Z||""===b,children:"Add"})]})})}var k=a(7892),I=a.n(k),Y=a(3634),S=a(1652),P=a(4979),M=a(4659),E=a(1098),z=a(6886),A=a(5570),F=a(627),T=a(5527),L={btnPopperContainer:"DiaryCalendar_btnPopperContainer__UUGlP",dateText:"DiaryCalendar_dateText__ujwTY",paper:"DiaryCalendar_paper__ek8Ei"};function W(){var e=(0,n.useState)(I()()),t=(0,i.Z)(e,2),a=t[0],s=t[1],l=(0,n.useState)(I()().format("MM/DD/YYYY")),o=(0,i.Z)(l,2),d=o[0],c=o[1],u=(0,n.useState)(I()().format("MM-DD-YYYY")),m=(0,i.Z)(u,1)[0],h=(0,_.I0)();(0,n.useEffect)((function(){h((0,j.XK)(m))}),[h,m]);return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(S._,{dateAdapter:Y.y,children:(0,N.jsx)("div",{className:L.calendarContainer,children:(0,N.jsx)(z.ZP,{variant:"popper",popupId:"demo-popup-popper",children:function(e){return(0,N.jsxs)("div",{className:L.btnPopperContainer,children:[(0,N.jsx)("h2",{className:L.dateText,children:d}),(0,N.jsx)(C.Z,(0,r.Z)((0,r.Z)({"aria-label":"delete"},(0,A.LI)(e)),{},{children:(0,N.jsx)(P.Z,{})})),(0,N.jsx)(E.Z,(0,r.Z)((0,r.Z)({},(0,A.Rg)(e)),{},{transition:!0,children:function(t){var n=t.TransitionProps;return(0,N.jsx)(F.Z,(0,r.Z)((0,r.Z)({},n),{},{timeout:100,children:(0,N.jsx)(T.Z,{className:L.paper,sx:{backgroundColor:"white"},children:(0,N.jsx)(M.W,{value:a,onChange:function(t){s(t),function(e){var t=I()("".concat(e)).format("MM/DD/YYYY"),a=I()("".concat(e)).format("MM-DD-YYYY");c(t),h((0,x.ve)(a))}(t),e.close()},showDaysOutsideCurrentMonth:!0,fixedWeekNumber:6,referenceDate:I()(),views:["year","month","day"]})})}))}}))]})}})})})})}var R=a(1680),U="style_productListItem__51ZJu",X="style_productDeleteButton__dWPC9",q="style_title__mYDl8",V="style_titlePrimary__L77IB",H="style_weight__oqhza",Q="style_calories__fB7Dk",G="style_caloriesPrimary__Evuxy",J="style_caloriesSecondary__rImu7",O=a(4852),K=a(6259),$=a(7247),ee=a(890);var te=function(e){var t=e.product,a=e.handleDelete;return(0,N.jsxs)(O.ZP,{className:U,children:[(0,N.jsx)(K.Z,{className:q,primary:(0,N.jsx)(ee.Z,{className:V,children:t.title})}),(0,N.jsx)(K.Z,{className:H,primary:(0,N.jsxs)(ee.Z,{className:V,children:[t.weight," g"]})}),(0,N.jsx)(K.Z,{className:Q,primary:(0,N.jsx)(ee.Z,{className:G,children:t.calories}),secondary:(0,N.jsx)(ee.Z,{className:J,children:"kcal"})}),(0,N.jsx)(C.Z,{className:X,"aria-label":"delete",onClick:function(){return a(t._id)},children:(0,N.jsx)($.Z,{})})]})},ae="style_productList__83D9D",ne=a(493);var re=function(){var e=(0,_.I0)(),t=(0,p.Y)(),a=t.calDate,n=t.diaryList;function r(t){e((0,x.jx)({calDate:a,entryId:t}))}return(0,N.jsx)(ne.Z,{className:ae,children:n.map((function(e,t){return(0,N.jsx)(te,{product:e,handleDelete:r},"".concat(e._id,"-").concat(t))}))})},ie=a(9198),se=a(5168),le=a(1178),oe=a(3027),de=a(5193),ce=a(4110),ue=a(6292),me=a(8496),_e=function(e){var t=e.date,a=e.summary,n=e.searchInputChange,r=e.searchResults,i=(0,de.Z)("(min-width: 769px)");return(0,N.jsxs)("div",{className:me.Z.sideBarContentWrapper,children:[(0,N.jsxs)("div",{className:me.Z.sideBarContent,children:[(0,N.jsxs)("p",{className:me.Z.sideBarTitle,children:["Summary for ",t.replaceAll("-","/")]}),(0,N.jsxs)("ul",{className:me.Z.statsBox,children:[(0,N.jsxs)("li",{className:me.Z.statsBoxItem,children:[(0,N.jsx)("p",{children:"Left"}),(0,N.jsx)("p",{children:a.left.toFixed(1)})]}),(0,N.jsxs)("li",{className:me.Z.statsBoxItem,children:[(0,N.jsx)("p",{children:"Consumed"}),(0,N.jsx)("p",{children:a.totalConsumed.toFixed(1)})]}),(0,N.jsxs)("li",{className:me.Z.statsBoxItem,children:[(0,N.jsx)("p",{children:"Daily rate"}),(0,N.jsx)("p",{children:a.dailyRate.toFixed(1)})]}),(0,N.jsxs)("li",{className:me.Z.statsBoxItem,children:[(0,N.jsx)("p",{children:"n% of normal"}),(0,N.jsxs)("p",{children:[a.percentage,"%"]})]})]})]}),(0,N.jsxs)("div",{className:me.Z.sideBarContent,children:[(0,N.jsx)("p",{className:me.Z.sideBarTitle,children:"Food not recommended"}),(0,N.jsxs)("div",{children:[(0,N.jsx)(ce.Z,{placeholder:"type here..",onChange:n}),(0,N.jsx)(ue.Z,{array:r,style:{height:i?400:150}})]})]})]})};_e.defaultProps={date:"DATE",summary:{left:0,totalConsumed:0,dailyRate:0,percentage:0}};var xe=_e,he=function(){var e=(0,_.I0)(),t=(0,_.v9)(oe.nj),a=(0,_.v9)(oe.Xw),n=a?a.reduce((function(e,t){return e+t.calories}),0):0,r=(0,_.v9)(oe.vO),i={left:0!==n?r-n:0,totalConsumed:n,dailyRate:r,percentage:0!==r?Math.round(n/r*100):0},s=(0,_.v9)(le.k4),l=(0,f.debounce)((function(t){var a=t.target.value;a.length>0&&e((0,se.Xj)({title:a,bloodType:"A"}))}),400);return(0,N.jsx)(xe,{date:t,summary:i,searchInputChange:l,searchResults:s})},pe={};var fe=function(){var e=(0,_.I0)(),t=(0,p.Y)().diaryBackBtn,a=g().width;return(0,n.useEffect)((function(){var t=I()().format("MM-DD-YYYY");e((0,x.ve)(t))}),[e]),(0,N.jsxs)("div",{className:"background Calc-DairyBackground",style:{display:"flex",flexDirection:"column"},children:[(0,N.jsx)("section",{className:"top-bottom",style:{flexGrow:"1"},children:(0,N.jsx)(ie.Z,{className:"left-right",children:a>768?(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:pe.tabletDeskContainer,children:[(0,N.jsx)(W,{}),(0,N.jsx)(w,{}),(0,N.jsx)(re,{})]})}):t?(0,N.jsx)(w,{diaryBackBtn:t}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(W,{}),(0,N.jsx)(re,{}),(0,N.jsx)(D,{onClick:function(){e((0,j.bQ)(!t))}})]})})}),(0,N.jsx)("section",{className:"no-bottom",children:(0,N.jsx)(ie.Z,{className:"no-left-right",children:(0,N.jsx)(R.Z,{children:(0,N.jsx)(he,{})})})})]})}},1178:function(e,t,a){a.d(t,{Sp:function(){return n},k4:function(){return i},sv:function(){return r}});var n=function(e){return e.calCalories.value},r=function(e){return e.calCalories.stats},i=function(e){return e.calCalories.badFoodSearcList}},3063:function(e,t){t.Z={modalBox:"modal_modalBox__UnNX8",closeButton:"modal_closeButton__hYa4+",backButtonMobbile:"modal_backButtonMobbile__r5QHQ",back:"modal_back__V8JNM",modalTitle:"modal_modalTitle__3zeL5",totalCaloriesNumber:"modal_totalCaloriesNumber__bUxLg",totalCalories:"modal_totalCalories__U80Ut",notEat:"modal_notEat__P-szP",hr:"modal_hr__CzLPQ",text2:"modal_text2__9c6ek",notEatItem:"modal_notEatItem__hXM4C",buttonWrapper:"modal_buttonWrapper__NZCpm",button:"modal_button__GRC0s"}},8496:function(e,t){t.Z={sideBarContainer:"rightSideBar_sideBarContainer__rWrUX",sideBarContentWrapper:"rightSideBar_sideBarContentWrapper__EDhJV",sideBarContent:"rightSideBar_sideBarContent__TIFBc",sideBarTitle:"rightSideBar_sideBarTitle__1pky6",statsBox:"rightSideBar_statsBox__0Xanq",statsBoxItem:"rightSideBar_statsBoxItem__Vk8lb"}}}]);
//# sourceMappingURL=423.34c3f628.chunk.js.map