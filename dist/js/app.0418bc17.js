(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},i=[],o={name:"App",components:{},data:function(){return{}}},s=o,l=a("2877"),c=Object(l["a"])(s,r,i,!1,null,null,null),d=c.exports,u=a("f309");n["a"].use(u["a"]);var m=new u["a"]({}),v=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("Navbar"),a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-sheet",{staticClass:"pa-4",attrs:{color:"grey lighten-4"}},[a("v-avatar",{staticClass:"mb-4",attrs:{color:"grey darken-1",size:"64"}}),a("div",[e._v("otto_281@hotmail.com")])],1),a("v-divider"),a("v-list",[e._l(e.links,(function(t){var n=t[0],r=t[1],i=t[2];return a("v-list-item",{key:n,attrs:{link:""},on:{click:function(t){return e.goTo(i)}}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(n))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(r))])],1)],1)})),a("v-list-item",{attrs:{link:""},on:{click:function(t){return e.signOff()}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-arrow-top-left-thin-circle-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Sign Out")])],1)],1),a("v-btn",{on:{click:function(t){return e.test()}}})],2)],1),a("v-main",[a("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[a("router-view")],1)],1)],1)},p=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Latest Release")]),a("v-icon",[e._v("mdi-open-in-new")])],1)],1)},h=[],g={name:"Navbar",data:function(){return{}}},x=g,k=a("6544"),y=a.n(k),_=a("40dc"),I=a("8336"),V=a("132d"),w=a("adda"),O=a("2fa4"),C=Object(l["a"])(x,b,h,!1,null,null,null),j=C.exports;y()(C,{VAppBar:_["a"],VBtn:I["a"],VIcon:V["a"],VImg:w["a"],VSpacer:O["a"]});var T={name:"Container",components:{Navbar:j},data:function(){return{cards:["Today","Yesterday"],drawer:null,links:[["mdi-inbox-arrow-down","List","/dashboard"],["mdi-send","Calendar","/calendar"],["mdi-delete","BooksAPI","/books"],["mdi-alert-octagon","Unknown","/"]]}},methods:{goTo:function(e){this.$router.push(e)},test:function(){console.log(localStorage.getItem("msal.bf5b6be8-ef0d-42ee-9efc-c655a2f3e05e.idtoken"))},signOff:function(){localStorage.clear(),this.$msal.signOut(),console.log("Signed Off!")}}},D=T,S=a("7496"),$=a("8212"),A=a("a523"),E=a("ce7e"),q=a("8860"),L=a("da13"),B=a("5d23"),P=a("34c3"),M=a("f6c4"),F=a("f774"),N=a("8dd9"),z=Object(l["a"])(D,f,p,!1,null,null,null),R=z.exports;y()(z,{VApp:S["a"],VAvatar:$["a"],VBtn:I["a"],VContainer:A["a"],VDivider:E["a"],VIcon:V["a"],VList:q["a"],VListItem:L["a"],VListItemContent:B["a"],VListItemIcon:P["a"],VListItemTitle:B["b"],VMain:M["a"],VNavigationDrawer:F["a"],VSheet:N["a"]});var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("BooksForm"),a("BooksList")],1)},H=[],J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[a("form",[a("validation-provider",{attrs:{name:"Title",rules:"required|max:50"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{attrs:{counter:50,"error-messages":n,label:"Title",required:""},model:{value:e.Title,callback:function(t){e.Title=t},expression:"Title"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"Author",rules:"required|max:50"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{attrs:{counter:30,"error-messages":n,label:"Author",required:""},model:{value:e.Author,callback:function(t){e.Author=t},expression:"Author"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"Description",rules:"required|max:100"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{attrs:{counter:100,"error-messages":n,label:"Description",required:""},model:{value:e.Description,callback:function(t){e.Description=t},expression:"Description"}})]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required",name:"checkbox"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-checkbox",{attrs:{"error-messages":n,value:"1",label:"Option",type:"checkbox",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})]}}],null,!0)}),a("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:n},on:{click:function(t){return e.submit()}}},[e._v(" submit ")]),a("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1)]}}])})},K=[],W=a("5530"),Y=a("4c93"),G=a("7bb1"),Q=a("bc3a"),X=a.n(Q);Object(G["d"])("eager"),Object(G["c"])("digits",Object(W["a"])(Object(W["a"])({},Y["a"]),{},{message:"{_field_} needs to be {length} digits. ({_value_})"})),Object(G["c"])("required",Object(W["a"])(Object(W["a"])({},Y["e"]),{},{message:"{_field_} can not be empty"})),Object(G["c"])("max",Object(W["a"])(Object(W["a"])({},Y["c"]),{},{message:"{_field_} may not be greater than {length} characters"})),Object(G["c"])("regex",Object(W["a"])(Object(W["a"])({},Y["d"]),{},{message:"{_field_} {_value_} does not match {regex}"})),Object(G["c"])("email",Object(W["a"])(Object(W["a"])({},Y["b"]),{},{message:"Email must be valid"}));var Z={name:"BooksForm",components:{ValidationProvider:G["b"],ValidationObserver:G["a"]},data:function(){return{Title:"",Author:"",Description:"",checkbox:null}},methods:{submit:function(){console.log("submit hit!"),this.$refs.observer.validate(),X()({method:"post",url:"https://azure-af-booksapi.azurewebsites.net/api/books",data:{title:this.Title,author:this.Author,description:this.Description}}).then((function(e){console.log(e)}),(function(e){console.log(e)}))},clear:function(){this.Title="",this.Author="",this.Description="",this.checkbox=null,this.$refs.observer.reset()}}},ee=Z,te=a("ac7c"),ae=a("8654"),ne=Object(l["a"])(ee,J,K,!1,null,null,null),re=ne.exports;y()(ne,{VBtn:I["a"],VCheckbox:te["a"],VTextField:ae["a"]});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panels",e._l(5,(function(t,n){return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",[e._v(" Item ")]),a("v-expansion-panel-content",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)})),1)},oe=[],se={name:"BooksList"},le=se,ce=a("cd55"),de=a("49e2"),ue=a("c865"),me=a("0393"),ve=Object(l["a"])(le,ie,oe,!1,null,null,null),fe=ve.exports;y()(ve,{VExpansionPanel:ce["a"],VExpansionPanelContent:de["a"],VExpansionPanelHeader:ue["a"],VExpansionPanels:me["a"]});var pe={name:"Books",components:{BooksForm:re,BooksList:fe}},be=pe,he=Object(l["a"])(be,U,H,!1,null,null,null),ge=he.exports;y()(he,{VContainer:A["a"]});var xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"4"}}),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",{staticClass:"d-flex justify-center pa-6",attrs:{elevation:"2"}},[a("div",{attrs:{align:"center"}},[a("v-card-title",{attrs:{"primary-title":""}},[e._v(" Welcome ")]),a("v-btn",{attrs:{align:"center",color:"primary"},on:{click:function(t){return e.checkauth()}}},[e._v(" Login")])],1)])],1),a("v-col",{attrs:{cols:"12",sm:"4"}})],1)],1)},ke=[],ye={name:"Login",data:function(){return{}},methods:{checkauth:function(){var e=localStorage.getItem("msal.bf5b6be8-ef0d-42ee-9efc-c655a2f3e05e.idtoken");console.log(this.$msal.isAuthenticated()),""!=e&&null!=e||this.$msal.signIn()}}},_e=ye,Ie=a("b0af"),Ve=a("99d9"),we=a("62ad"),Oe=a("0fd9"),Ce=Object(l["a"])(_e,xe,ke,!1,null,null,null),je=Ce.exports;y()(Ce,{VApp:S["a"],VBtn:I["a"],VCard:Ie["a"],VCardTitle:Ve["c"],VCol:we["a"],VRow:Oe["a"]});var Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Table")},De=[],Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.clients,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Clients")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),n),[e._v(" New Item ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}])})},$e=[],Ae=(a("a434"),{name:"Table",data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Client #",align:"start",sortable:!1,value:"name"},{text:"Occupation",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"actions",sortable:!1}],clients:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){this.clients=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}]},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}}),Ee=Ae,qe=a("8fea"),Le=a("169a"),Be=a("71d9"),Pe=a("2a7f"),Me=Object(l["a"])(Ee,Se,$e,!1,null,null,null),Fe=Me.exports;y()(Me,{VBtn:I["a"],VCard:Ie["a"],VCardActions:Ve["a"],VCardText:Ve["b"],VCardTitle:Ve["c"],VCol:we["a"],VContainer:A["a"],VDataTable:qe["a"],VDialog:Le["a"],VDivider:E["a"],VIcon:V["a"],VRow:Oe["a"],VSpacer:O["a"],VTextField:ae["a"],VToolbar:Be["a"],VToolbarTitle:Pe["a"]});var Ne={name:"Dashboard",components:{Table:Fe}},ze=Ne,Re=Object(l["a"])(ze,Te,De,!1,null,null,null),Ue=Re.exports,He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-sheet",{staticClass:"d-flex",attrs:{tile:"",height:"54"}},[a("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.prev()}}},[a("v-icon",[e._v("mdi-chevron-left")])],1),a("v-select",{staticClass:"ma-2",attrs:{items:e.types,dense:"",outlined:"","hide-details":"",label:"type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),a("v-select",{staticClass:"ma-2",attrs:{items:e.modes,dense:"",outlined:"","hide-details":"",label:"event-overlap-mode"},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}}),a("v-select",{staticClass:"ma-2",attrs:{items:e.weekdays,dense:"",outlined:"","hide-details":"",label:"weekdays"},model:{value:e.weekday,callback:function(t){e.weekday=t},expression:"weekday"}}),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.next()}}},[a("v-icon",[e._v("mdi-chevron-right")])],1)],1),a("v-sheet",{attrs:{height:"600"}},[a("v-calendar",{ref:"calendar",attrs:{weekdays:e.weekday,type:e.type,events:e.events,"event-overlap-mode":e.mode,"event-overlap-threshold":30,"event-color":e.getEventColor},on:{change:e.getEvents},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)},Je=[],Ke={name:"Calendar",data:function(){return{type:"month",types:["month","week","day","4day"],mode:"stack",modes:["stack","column"],weekday:[0,1,2,3,4,5,6],weekdays:[{text:"Sun - Sat",value:[0,1,2,3,4,5,6]},{text:"Mon - Sun",value:[1,2,3,4,5,6,0]},{text:"Mon - Fri",value:[1,2,3,4,5]},{text:"Mon, Wed, Fri",value:[1,3,5]}],value:"",events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},methods:{getEvents:function(e){for(var t=e.start,a=e.end,n=[],r=new Date("".concat(t.date,"T00:00:00")),i=new Date("".concat(a.date,"T23:59:59")),o=(i.getTime()-r.getTime())/864e5,s=this.rnd(o,o+20),l=0;l<s;l++){var c=0===this.rnd(0,3),d=this.rnd(r.getTime(),i.getTime()),u=new Date(d-d%9e5),m=9e5*this.rnd(2,c?288:8),v=new Date(u.getTime()+m);n.push({name:this.names[this.rnd(0,this.names.length-1)],start:u,end:v,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!c})}this.events=n},getEventColor:function(e){return e.color},rnd:function(e,t){return Math.floor((t-e+1)*Math.random())+e}}},We=Ke,Ye=a("a4f6"),Ge=a("b974"),Qe=Object(l["a"])(We,He,Je,!1,null,null,null),Xe=Qe.exports;y()(Qe,{VBtn:I["a"],VCalendar:Ye["a"],VIcon:V["a"],VSelect:Ge["a"],VSheet:N["a"],VSpacer:O["a"]});var Ze=new v["a"]({routes:[{component:R,name:"approot",path:"/",redirect:"/default"},{component:R,name:"Home",path:"/default",meta:{requiresAuth:!0},children:[{component:ge,name:"Books",path:"/books",meta:{requiresAuth:!0}},{component:Ue,name:"Dashboard",path:"/dashboard",meta:{requiresAuth:!0}},{component:Xe,name:"Calendar",path:"/calendar",meta:{requiresAuth:!0}}]},{component:je,name:"Login",path:"/login",meta:{requiresAuth:!1}},{component:je,name:"404",path:"*",redirect:"/login"}]});Ze.beforeEach((function(e,t,a){var n=localStorage.getItem("msal.bf5b6be8-ef0d-42ee-9efc-c655a2f3e05e.idtoken");console.log(n),e.matched.some((function(e){return e.meta.requiresAuth}))?""!==n&&null!==n?a():(console.log("Not authenticated"),a("/login")):a()}));var et=Ze,tt=a("c0e2"),at=a.n(tt),nt=a("5a75"),rt=a.n(nt);n["a"].use(rt.a,{auth:{clientId:"bf5b6be8-ef0d-42ee-9efc-c655a2f3e05e",authority:"https://login.microsoftonline.com/0346c3b8-bdbe-414d-b295-9027af7ef797",redirectUri:"http://localhost:8080/#/default",postLogoutRedirectUri:"http://localhost:8080/#/login",globalMixin:!0,navigateToLoginRequestUrl:!1}}),n["a"].config.productionTip=!1,n["a"].prototype.$msalInstance={},n["a"].prototype.$emitter=new at.a,n["a"].use(v["a"]),new n["a"]({mixins:[nt["msalMixin"]],vuetify:m,router:et,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.0418bc17.js.map