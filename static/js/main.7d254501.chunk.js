(this["webpackJsonpyayis-app"]=this["webpackJsonpyayis-app"]||[]).push([[0],{311:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(31),r=n.n(i),o=n(58),s=n(14),l=n(35),d=n(36),j=n(3),u=n(53),b=n.n(u),h=n(82),O=n(252);n.n(O).a.create({baseURL:"apiUrl",headers:{"Content-Type":"application/json"}}).interceptors.response.use((function(e){return e.data}),(function(e){var t,n={errorMessage:e.toJSON().message},a=(null===(t=e.response)||void 0===t?void 0:t.data)||n;return console.log("# on axios error CB"),a}));var g,p={get:function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{id:"333ll",name:"Test",description:"Test description",todos:[]},{id:"444",name:"Cena",description:"Test description",todos:[]},{id:"555",name:"Comida",description:"Test description",todos:[]},{id:"666",name:"Desayuno",description:"Test description",todos:[]},{id:"777",name:"Postre",description:"Test description",todos:[]}]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=p,x={getLists:function(e){return f.get("/lists",{params:e})},postList:function(e){return f.post("/lists",e)}},m=Object(d.b)("lists/get",x.getLists),v=Object(d.c)({name:"lists",initialState:{loading:!0},extraReducers:Object(j.a)({},m.fulfilled,(function(e,t){e.items=t.payload,e.loading=!1}))}).reducer,y=Object(d.b)("configuration/set",function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(d.b)("configuration/fetchOptions",function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{themes:{docs:[{id:"123",name:"Dark green",type:"dark"},{id:"456",name:"Light blue",type:"light"}]},languages:{docs:[{id:"1",name:"English"},{id:"2",name:"Spanish"}]}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k={setConfiguration:y,fetchConfigOptions:C},T=n(24),S={id:"defaultId",name:"Amber and pink ;)",palette:{type:"light",primary:{main:T.a.amber[800]},secondary:{main:T.a.pink.A700}}},D={id:"defaultId",name:"English"},E={theme:S,language:D,themes:{items:[S,{id:"secondaryId",name:"Secondary theme",palette:{type:"light",primary:{main:T.a.lightBlue[400]},secondary:{main:T.a.grey.A700}}}],loading:!1},languages:{items:[D],loading:!1}},I=Object(d.c)({name:"configuration",initialState:E,reducers:{setLoading:function(e,t){e.loading=t.payload},setTheme:function(e,t){e.theme=t.payload}},extraReducers:(g={},Object(j.a)(g,k.setConfiguration.fulfilled,(function(e,t){t.payload.theme&&(e.theme=t.payload.theme),t.payload.language&&(e.language=t.payload.language),e.loading=!1,console.log("## reducer updating app state"),console.log(t.payload)})),Object(j.a)(g,k.fetchConfigOptions.fulfilled,(function(e,t){e.themes=t.payload.themes,e.languages=t.payload.languages,e.loading=!1})),g)}),L=(I.actions.setTheme,{configuration:I.reducer,lists:v}),w=Object(d.a)({reducer:L,devTools:!0}),A=n(267),N=n(363),_=n(1),F=function(e){var t=e.children,n=Object(l.c)((function(e){return e.configuration.theme})),a=Object(A.a)(n||{});return Object(_.jsx)(N.a,{theme:a,children:t})},M=n(350),R=n(13),z=n(364),B=n(366),P=n(315),H=n(358),U=n(367),W=n(268),J=n(355),K=n(344),$=n(351),G=n(100),V=n.n(G),Y=n(260),q=n.n(Y),Q=n(259),X=n.n(Q),Z=n.p+"static/media/logo.6ce24c58.svg",ee=Object($.a)((function(){return{link:{textDecoration:"none",color:"inherit"}}})),te=function(){var e,t=ee(),n=Object(a.useState)(null),c=Object(R.a)(n,2),i=c[0],r=c[1],l=Object(s.g)(),d=Object(s.f)(),j=function(){return r(null)};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(z.a,{position:"fixed",children:Object(_.jsxs)(B.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(_.jsx)(P.a,{variant:"h6",component:"label",className:t.title,children:Object(_.jsx)(o.b,{className:t.link,to:"/",children:Object(_.jsx)(H.a,{src:Z,alt:"Todo App"})})}),Object(_.jsx)(P.a,{variant:"h6",component:"label",children:(null===(e=d.state)||void 0===e?void 0:e.pageName)||"Lists"}),Object(_.jsxs)("div",{children:[Object(_.jsx)(U.a,{onClick:function(e){return r(e.currentTarget)},color:"inherit",children:Object(_.jsx)(V.a,{})}),Object(_.jsxs)(W.a,{anchorEl:i,open:Boolean(i),onClose:j,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(_.jsxs)(J.a,{onClick:function(){j(),l("/configuration",{state:{pageName:"Configuration"}})},children:[Object(_.jsx)(K.a,{children:Object(_.jsx)(X.a,{color:"inherit"})}),"Configuration"]}),Object(_.jsxs)(J.a,{onClick:function(){j(),l("/about",{state:{pageName:"About"}})},children:[Object(_.jsx)(K.a,{children:Object(_.jsx)(q.a,{color:"inherit"})}),"About"]})]})]})]})}),Object(_.jsx)(B.a,{})]})},ne=n(261),ae=n.n(ne),ce=n(262),ie=n.n(ce),re=n(263),oe=n.n(re),se=function(){var e=Object(s.h)(),t=Object(s.g)(),n=Object(s.f)().state,c=Object(a.useState)(null),i=Object(R.a)(c,2),r=i[0],o=i[1],l=function(){return o(null)};return console.log("@@ Todos nav render"),console.log(n),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(z.a,{position:"fixed",children:Object(_.jsxs)(B.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(_.jsx)(U.a,{onClick:function(){t(-1)},color:"inherit",children:Object(_.jsx)(ae.a,{})}),Object(_.jsx)(P.a,{variant:"h6",component:"label",children:(null===n||void 0===n?void 0:n.name)||"Task"}),Object(_.jsxs)("div",{children:[Object(_.jsx)(U.a,{onClick:function(e){o(e.currentTarget)},color:"inherit",children:Object(_.jsx)(V.a,{})}),Object(_.jsxs)(W.a,{anchorEl:r,open:Boolean(r),onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(_.jsxs)(J.a,{onClick:function(){l(),alert("Edit List ".concat(e.listId))},children:[Object(_.jsx)(K.a,{children:Object(_.jsx)(ie.a,{})}),"Edit"]}),Object(_.jsxs)(J.a,{onClick:function(){l(),alert("Delete List ".concat(e.listId))},children:[Object(_.jsx)(K.a,{children:Object(_.jsx)(oe.a,{})}),"Delete"]})]})]})]})}),Object(_.jsx)(B.a,{})]})},le=function(){var e=Object(s.f)().pathname.includes("/list/");return console.log("@@ App render"),Object(_.jsxs)(_.Fragment,{children:[e?Object(_.jsx)(se,{}):Object(_.jsx)(te,{}),Object(_.jsx)(s.a,{})]})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,382)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},je=n(360),ue=n(371),be=n(373),he=n(266),Oe=n.n(he),ge=n(372),pe=n(264),fe=n.n(pe),xe=n(265),me=n.n(xe),ve=function(e){var t=e.id,n=e.name,c=e.todos,i=Object(s.g)(),r=Object(a.useMemo)((function(){var e=c.filter((function(e){return e.isDone})).length;return{length:e,percentage:100*e/c.length}}),[c]);return Object(_.jsxs)(ue.a,{onClick:function(){i("/list/".concat(t),{state:{id:t,name:n,todos:c}})},bgcolor:"lightskyblue",minWidth:110,minHeight:140,maxWidth:180,maxHeight:220,borderRadius:3,padding:1,display:"flex",flexDirection:"column",justifyContent:"space-between",children:[Object(_.jsx)(ue.a,{alignSelf:"flex-end",children:r.length===c.length&&c.length>0?Object(_.jsx)(fe.a,{color:"success"}):Object(_.jsx)(me.a,{color:"disabled"})}),Object(_.jsx)(P.a,{fontSize:12,children:null===n||void 0===n?void 0:n.toUpperCase()}),Object(_.jsxs)(ue.a,{children:[Object(_.jsxs)(P.a,{fontSize:12,marginBottom:1,children:["Finished ",r.length," of ",c.length]}),Object(_.jsx)(ge.a,{variant:"determinate",value:r.percentage||0})]})]})},ye=Object($.a)((function(e){return{fab:{position:"fixed",top:e.spacing(6),right:e.spacing(1)}}})),Ce=function(){var e=ye(),t=Object(l.b)(),n=Object(l.c)((function(e){return e.lists}));Object(a.useEffect)((function(){t(m({page:1,pageSize:20}))}),[t]);return console.log("@@ Lists page render"),Object(_.jsxs)(ue.a,{children:[n.loading&&"LOADING...",Object(_.jsx)(je.a,{container:!0,spacing:1,padding:1,children:function(){var e;return null===(e=n.items)||void 0===e?void 0:e.map((function(e){return Object(_.jsx)(je.a,{container:!0,item:!0,xs:6,sm:4,md:3,lg:2,justifyContent:"center",children:Object(_.jsx)(ve,{name:e.name,id:e.id,todos:e.todos})},e.id)}))}()}),Object(_.jsx)(ue.a,{display:"flex",justifyContent:"flex-end",children:Object(_.jsx)(be.a,{onClick:function(){console.log("Handle modal open")},color:"primary",className:e.fab,children:Object(_.jsx)(Oe.a,{})})})]})},ke=function(){var e=Object(s.h)();return console.log("@@ Todos page render"),Object(_.jsx)(je.a,{children:Object(_.jsxs)(P.a,{variant:"h4",component:"h2",children:["Todos from list ",e.listId]})})},Te=function(){return Object(_.jsxs)("article",{children:[Object(_.jsx)("h2",{children:"Section not found 404"}),Object(_.jsx)("p",{children:"This page does not exist"})]})},Se=function(){return Object(_.jsx)(ue.a,{children:"Made with \u2764\ufe0f"})},De=n(54),Ee=n(361),Ie=n(374),Le=n(346),we=n(375),Ae=n(376),Ne=n(377),_e=n(354),Fe=n(380),Me=n(356),Re=n(381),ze=n(345),Be=n(349),Pe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.configuration})),n=t.themes,c=t.languages,i=t.theme,r=t.language,o=Object(a.useState)(!1),s=Object(R.a)(o,2),d=s[0],u=s[1],b=Object(a.useState)({theme:i,language:r,isDarkMode:"dark"===i.palette.type}),h=Object(R.a)(b,2),O=h[0],g=h[1];Object(a.useEffect)((function(){}),[]),Object(a.useEffect)((function(){console.log("$$ effect by changing inputs"),e(y(O))}),[e,O]);var p=function(){return u(!1)},f=function(e,t){var n=e.target,a=t.items.find((function(e){return e.id===n.value}));g(Object(De.a)(Object(De.a)({},O),{},Object(j.a)({},n.name,a)))};return console.log("@@ Config page render"),Object(_.jsxs)(ue.a,{p:1,children:[Object(_.jsx)(ue.a,{display:"flex",justifyContent:"flex-end",children:Object(_.jsx)(Ee.a,{size:"small",variant:"contained",startIcon:Object(_.jsx)(ze.a,{}),onClick:function(){return u(!0)},children:"Change"})}),Object(_.jsxs)(ue.a,{display:"flex",flexDirection:"column",children:[Object(_.jsx)(P.a,{component:"h2",variant:"h6",children:"You can change the theme and app language here"}),Object(_.jsxs)(P.a,{component:"label",variant:"label",children:["Theme: ",O.theme.name]}),Object(_.jsxs)(P.a,{component:"label",variant:"label",children:["Language: ",O.language.name]})]}),Object(_.jsxs)(Ie.a,{open:d,maxWidth:"xs",children:[Object(_.jsx)(Le.a,{children:"Update Settings"}),Object(_.jsx)(we.a,{dividers:!0,children:Object(_.jsxs)(ue.a,{display:"flex",flexDirection:"column",children:[Object(_.jsxs)(Ae.a,{margin:"dense",children:[Object(_.jsx)(Ne.a,{id:"languageId",children:"Language"}),Object(_.jsx)(_e.a,{labelId:"languageId",label:"Language",name:"language",value:O.language.id,onChange:function(e){return f(e,c)},children:c.items.map((function(e){return Object(_.jsx)(J.a,{value:e.id,children:e.name},e.id)}))})]}),Object(_.jsxs)(Ae.a,{margin:"dense",children:[Object(_.jsx)(Ne.a,{id:"themeId",children:"Theme"}),Object(_.jsx)(_e.a,{labelId:"themeId",label:"Theme",name:"theme",value:O.theme.id,onChange:function(e){return f(e,n)},children:n.items.map((function(e){return Object(_.jsx)(J.a,{value:e.id,children:e.name},e.id)}))})]}),Object(_.jsxs)(ue.a,{display:"flex",alignItems:"center",children:[Object(_.jsx)(Fe.a,{label:"Dark mode",control:Object(_.jsx)(Me.a,{checked:O.isDarkMode,onChange:function(e){var t=e.target;return g(Object(De.a)(Object(De.a)({},O),{},{isDarkMode:t.checked}))}})}),O.isDarkMode&&Object(_.jsx)(Be.a,{color:"primary"})||Object(_.jsx)(Be.a,{color:"disabled"})]})]})}),Object(_.jsxs)(Re.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(_.jsx)(Ee.a,{color:"secondary",variant:"text",onClick:p,children:"Cancel"}),Object(_.jsx)(Ee.a,{color:"primary",variant:"contained",onClick:function(){return p()},children:"Ok"})]})]})]})};console.log("# env variables"),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/yayis-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NAME:"yayis-app"})),r.a.render(Object(_.jsx)(l.a,{store:w,children:Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsxs)(F,{children:[Object(_.jsx)(M.a,{}),Object(_.jsx)(o.a,{basename:"yayis-app",children:Object(_.jsxs)(s.d,{children:[Object(_.jsxs)(s.b,{path:"/",element:Object(_.jsx)(le,{}),children:[Object(_.jsx)(s.b,{index:!0,element:Object(_.jsx)(Ce,{})}),Object(_.jsx)(s.b,{path:"list/:listId",element:Object(_.jsx)(ke,{})}),Object(_.jsx)(s.b,{path:"about",element:Object(_.jsx)(Se,{})}),Object(_.jsx)(s.b,{path:"configuration",element:Object(_.jsx)(Pe,{})})]}),Object(_.jsx)(s.b,{path:"*",element:Object(_.jsx)(Te,{})})]})})]})})}),document.getElementById("root")),de()}},[[311,1,2]]]);
//# sourceMappingURL=main.7d254501.chunk.js.map