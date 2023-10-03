"use strict";(self.webpackChunkfinal_team_project=self.webpackChunkfinal_team_project||[]).push([[732],{9198:function(e,t,a){var r=a(2007),n=a(184),s=function(e){var t=e.children,a=e.className;return(0,n.jsx)("div",{className:a,children:t})};s.propTopes={children:r.node.isRequired,className:r.string},t.Z=s},2260:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(1413),n=a(4942),s=a(5987),i={Button:"CustomButton_Button__wxqQ9",orange:"CustomButton_orange__JhdH3",white:"CustomButton_white__PAugr",disabled:"CustomButton_disabled__zn-Hl",wide:"CustomButton_wide__0zS2P"},l=a(6151),o=a(3733),d=a(184),c=["color","size","margin","children","disabled","className","style"],u=function(e){var t=e.color,a=e.size,u=(e.margin,e.children),m=e.disabled,x=e.className,_=e.style,h=(0,s.Z)(e,c);return(0,d.jsx)(l.Z,(0,r.Z)((0,r.Z)({className:(0,o.Z)(i.Button,i[t],i[a],(0,n.Z)({},i.disabled,m),x),style:_,type:"submit",disabled:m},h),{},{children:u}))}},6292:function(e,t,a){var r=a(3063),n=a(184);t.Z=function(e){return(0,n.jsx)("ol",{style:e.style,children:e.array.map((function(e){return(0,n.jsx)("li",{className:r.Z.notEatItem,children:e.title},e._id)}))})}},1680:function(e,t,a){var r=a(8496),n=a(2791),s=a(3855),i=a(1178),l=a(184);t.Z=function(e){var t=(0,s.v9)(i.sv);return(0,l.jsx)("div",{className:r.Z.sideBarContainer,stats:t,children:n.cloneElement(e.children,t)})}},5732:function(e,t,a){a.r(t),a.d(t,{default:function(){return he}});var r=a(9439),n=a(2791),s=a(1413),i=a(1582),l=a(5904),o=a(8502),d="DiaryAddProductForm_section__OMkqD",c="DiaryAddProductForm_diaryform__I65-r",u="DiaryAddProductForm_formdiv__wXEO1",m="DiaryAddProductForm_diaryFormBtn__knET2",x=a(3855),_=a(7120),h=a(2260),p=a(1301),f=a(763),j=a(3550),Z=a(1300),v="DiaryAddButton_CirclePlus__r4ozu",y=a(3400),B=a(2419),g=a(184);function b(e){var t=e.onClick,a=e.disabled;return(0,g.jsx)(y.Z,{variant:"outlined",className:v,type:"button",onClick:t,disabled:a,children:(0,g.jsx)(B.Z,{})})}var C=a(7892),N=a.n(C);function D(e){var t=e.diaryBackBtn,a=(0,n.useState)(""),v=(0,r.Z)(a,2),y=v[0],B=v[1],C=(0,n.useState)(""),D=(0,r.Z)(C,2),k=D[0],I=D[1],w=(0,p.Y)(),S=w.calDate,Y=w.foodsList,P=w.diaryList,F=(0,x.I0)(),T=Array.from(new Set(Y.map((function(e){return e.title})))),A=(0,Z.Z)().width,E=function(e){e.preventDefault();var a=Y.find((function(e){return e.title===y})),r=Math.ceil(a.calories/100*k)||0;if(F((0,_.NA)({calDate:S,productName:y,grams:k,calories:r})),0===P.length){var n=N()().format("MM-DD-YYYY");F((0,_.ve)(n))}F((0,j.setFoodsList)([])),B(""),I(""),F((0,j.setDiaryBackBtn)(!t))},M=(0,f.debounce)((function(e){F((0,_.VU)(e))}),400);return(0,g.jsx)("div",{className:d,children:(0,g.jsxs)("form",{className:c,onSubmit:E,children:[(0,g.jsx)("div",{className:u,children:(0,g.jsx)(i.Z,{spacing:2,children:(0,g.jsx)(l.Z,{id:"size-small-standard",sx:{"@media (min-width: 768px)":{width:"240px"}},freeSolo:!0,size:"small",options:T,value:y,onChange:function(e,t){null!==t&&B(t)},inputValue:y,onInputChange:function(e){var t=e.target.value||"";e&&(B(t),M(t))},renderInput:function(e){return(0,g.jsx)(o.Z,(0,s.Z)((0,s.Z)({required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left",marginBottom:"8px","@media (min-width: 768px)":{width:"240px",marginBottom:"0"}}},e),{},{variant:"standard",label:"Enter product name"}))}})})}),(0,g.jsx)("div",{className:u,children:(0,g.jsx)(o.Z,{required:!0,sx:{fontFamily:"Verdana",fontSize:"14px",fontWeight:"700",lineHeight:"17px",letterSpacing:"0.04em",textAlign:"left","@media (min-width: 768px)":{width:"106px",paddingBottom:"0",marginRight:"100px",marginLeft:"22px",textAlign:"right"}},id:"standard-basic",label:"Grams",variant:"standard",type:"number",value:k,onChange:function(e){I(e.target.value)}})}),A>768?(0,g.jsx)(b,{onClick:E,disabled:""===y||""===k}):(0,g.jsx)(h.Z,{className:m,color:"orange",disabled:""===y||""===k,children:"Add"})]})})}var k=a(3634),I=a(1652),w=a(4979),S=a(4659),Y=a(1098),P=a(6886),F=a(5570),T=a(627),A=a(5527),E={btnPopperContainer:"DiaryCalendar_btnPopperContainer__UUGlP",dateText:"DiaryCalendar_dateText__ujwTY",paper:"DiaryCalendar_paper__ek8Ei"};function M(){var e=(0,n.useState)(N()()),t=(0,r.Z)(e,2),a=t[0],i=t[1],l=(0,n.useState)(N()().format("MM/DD/YYYY")),o=(0,r.Z)(l,2),d=o[0],c=o[1],u=(0,x.I0)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(I._,{dateAdapter:k.y,children:(0,g.jsx)("div",{className:E.calendarContainer,children:(0,g.jsx)(P.ZP,{variant:"popper",popupId:"demo-popup-popper",children:function(e){return(0,g.jsxs)("div",{className:E.btnPopperContainer,children:[(0,g.jsx)("h2",{className:E.dateText,children:d}),(0,g.jsx)(y.Z,(0,s.Z)((0,s.Z)({"aria-label":"delete"},(0,F.LI)(e)),{},{children:(0,g.jsx)(w.Z,{})})),(0,g.jsx)(Y.Z,(0,s.Z)((0,s.Z)({},(0,F.Rg)(e)),{},{transition:!0,children:function(t){var r=t.TransitionProps;return(0,g.jsx)(T.Z,(0,s.Z)((0,s.Z)({},r),{},{timeout:100,children:(0,g.jsx)(A.Z,{className:E.paper,sx:{backgroundColor:"white"},children:(0,g.jsx)(S.W,{value:a,onChange:function(t){i(t),function(e){var t=N()("".concat(e)).format("MM/DD/YYYY");c(t),u((0,j.setCalDate)(t)),u((0,_.ve)(t))}(t),e.close()},showDaysOutsideCurrentMonth:!0,fixedWeekNumber:6,referenceDate:N()(),views:["year","month","day"]})})}))}}))]})}})})})})}var L=a(1680),z="style_productListItem__51ZJu",W="style_productDeleteButton__dWPC9",R="style_title__mYDl8",U="style_titlePrimary__L77IB",q="style_weight__oqhza",V="style_calories__fB7Dk",X="style_caloriesPrimary__Evuxy",H="style_caloriesSecondary__rImu7",J=a(4852),O=a(6259),Q=a(7247),G=a(890);var K=function(e){var t=e.product,a=e.handleDelete;return(0,g.jsxs)(J.ZP,{className:z,children:[(0,g.jsx)(O.Z,{className:R,primary:(0,g.jsx)(G.Z,{className:U,children:t.title})}),(0,g.jsx)(O.Z,{className:q,primary:(0,g.jsxs)(G.Z,{className:U,children:[t.weight," g"]})}),(0,g.jsx)(O.Z,{className:V,primary:(0,g.jsx)(G.Z,{className:X,children:t.calories}),secondary:(0,g.jsx)(G.Z,{className:H,children:"kcal"})}),(0,g.jsx)(y.Z,{className:W,"aria-label":"delete",onClick:function(){return a(t._id)},children:(0,g.jsx)(Q.Z,{})})]})},$="style_productList__83D9D",ee=a(493);var te=function(){var e=(0,x.I0)(),t=(0,p.Y)(),a=t.calDate,r=t.diaryList;function n(t){var r=a.replaceAll("/","-");e((0,_.jx)({formatDate:r,entryId:t}))}return(0,g.jsx)(ee.Z,{className:$,children:r.map((function(e,t){return(0,g.jsx)(K,{product:e,handleDelete:n},"".concat(e._id,"-").concat(t))}))})},ae=a(9198),re=a(5168),ne=a(1178),se=a(3027),ie=a(5193),le=a(4110),oe=a(6292),de=a(8496),ce=function(e){var t=e.date,a=e.summary,r=e.searchInputChange,n=e.searchResults,s=(0,ie.Z)("(min-width: 769px)");return(0,g.jsxs)("div",{className:de.Z.sideBarContentWrapper,children:[(0,g.jsxs)("div",{className:de.Z.sideBarContent,children:[(0,g.jsxs)("p",{className:de.Z.sideBarTitle,children:["Summary for ",t.replaceAll("-","/")]}),(0,g.jsxs)("ul",{className:de.Z.statsBox,children:[(0,g.jsxs)("li",{className:de.Z.statsBoxItem,children:[(0,g.jsx)("p",{children:"Left"}),(0,g.jsx)("p",{children:a.left.toFixed(1)})]}),(0,g.jsxs)("li",{className:de.Z.statsBoxItem,children:[(0,g.jsx)("p",{children:"Consumed"}),(0,g.jsx)("p",{children:a.totalConsumed.toFixed(1)})]}),(0,g.jsxs)("li",{className:de.Z.statsBoxItem,children:[(0,g.jsx)("p",{children:"Daily rate"}),(0,g.jsx)("p",{children:a.dailyRate.toFixed(1)})]}),(0,g.jsxs)("li",{className:de.Z.statsBoxItem,children:[(0,g.jsx)("p",{children:"n% of normal"}),(0,g.jsxs)("p",{children:[a.percentage,"%"]})]})]})]}),(0,g.jsxs)("div",{className:de.Z.sideBarContent,children:[(0,g.jsx)("p",{className:de.Z.sideBarTitle,children:"Food not recommended"}),(0,g.jsxs)("div",{children:[(0,g.jsx)(le.Z,{placeholder:"type here..",onChange:r}),(0,g.jsx)(oe.Z,{array:n,style:{height:s?400:150}})]})]})]})};ce.defaultProps={date:"DATE",summary:{left:0,totalConsumed:0,dailyRate:0,percentage:0}};var ue=ce,me=function(e){var t=e,a=(0,x.I0)(),r=(0,x.v9)(se.nj),n=(0,x.v9)(se.Xw),s=n?n.reduce((function(e,t){return e+t.calories}),0):0,i=(0,x.v9)(se.vO),l={left:0!==s?i-s:0,totalConsumed:s,dailyRate:i,percentage:0!==i?Math.round(s/i*100):0},o=(0,x.v9)(ne.k4),d=t.bloodType,c=(0,f.debounce)((function(e){var t=e.target.value;t.length>0&&a((0,re.Xj)({title:t,bloodType:d}))}),400);return(0,g.jsx)(ue,{date:r,summary:l,searchInputChange:c,searchResults:o})},xe={},_e=a(9251);var he=function(){var e=(0,x.I0)(),t=(0,p.Y)().diaryBackBtn,a=(0,Z.Z)().width,s=(0,n.useState)(""),i=(0,r.Z)(s,2),l=i[0],o=i[1],d=(0,n.useState)(""),c=(0,r.Z)(d,2),u=c[0],m=c[1],h=(0,n.useState)(!0),f=(0,r.Z)(h,2),v=f[0],y=f[1];return(0,n.useEffect)((function(){var t=N()().format("MM-DD-YYYY");e((0,_.ve)(t)),y(!1)}),[e]),(0,n.useEffect)((function(){!1===t?(o("block"),m("none")):(o("none"),m("block"))}),[t]),(0,g.jsxs)("div",{className:"background Calc-DairyBackground",style:{display:"flex",flexDirection:"column"},children:[(0,g.jsx)("section",{className:"top-bottom",children:(0,g.jsx)(ae.Z,{className:"left-right",children:v?(0,g.jsx)(_e.Z,{}):a>768?(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:xe.tabletDeskContainer,children:[(0,g.jsx)(M,{}),(0,g.jsx)(D,{}),(0,g.jsx)(te,{})]})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{style:{display:"".concat(u)},children:(0,g.jsx)(D,{diaryBackBtn:t})}),(0,g.jsxs)("div",{style:{display:"".concat(l)},children:[(0,g.jsx)(M,{}),(0,g.jsx)(te,{}),(0,g.jsx)(b,{onClick:function(){e((0,j.setDiaryBackBtn)(!t))}})]})]})})}),(0,g.jsx)("section",{className:"no-bottom",children:(0,g.jsxs)(ae.Z,{className:"no-left-right",children:[(0,g.jsx)("div",{className:de.Z.sidebarbox}),(0,g.jsx)(L.Z,{children:(0,g.jsx)(me,{})})]})})]})}},1178:function(e,t,a){a.d(t,{k4:function(){return n},sv:function(){return r}});var r=function(e){return e.calCalories.stats},n=function(e){return e.calCalories.badFoodSearcList}},3063:function(e,t){t.Z={modalBox:"modal_modalBox__UnNX8",closeButton:"modal_closeButton__hYa4+",backButtonMobbile:"modal_backButtonMobbile__r5QHQ",back:"modal_back__V8JNM",modalTitle:"modal_modalTitle__3zeL5",totalCaloriesNumber:"modal_totalCaloriesNumber__bUxLg",totalCalories:"modal_totalCalories__U80Ut",notEat:"modal_notEat__P-szP",hr:"modal_hr__CzLPQ",text2:"modal_text2__9c6ek",notEatItem:"modal_notEatItem__hXM4C",buttonWrapper:"modal_buttonWrapper__NZCpm",button:"modal_button__GRC0s"}},8496:function(e,t){t.Z={sideBarContainer:"rightSideBar_sideBarContainer__rWrUX",sidebarbox:"rightSideBar_sidebarbox__Evf2s",sideBarContentWrapper:"rightSideBar_sideBarContentWrapper__EDhJV",sideBarContent:"rightSideBar_sideBarContent__TIFBc",sideBarTitle:"rightSideBar_sideBarTitle__1pky6",statsBox:"rightSideBar_statsBox__0Xanq",statsBoxItem:"rightSideBar_statsBoxItem__Vk8lb"}}}]);
//# sourceMappingURL=732.0705aabe.chunk.js.map