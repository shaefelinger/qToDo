(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"311b":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("q-list",{staticClass:"q-mb-md",attrs:{bordered:"",padding:""}},[i("q-item-label",{attrs:{header:""}},[e._v("Settings")]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",[i("q-item-label",[e._v("Show 12 hour time format")])],1),i("q-item-section",{attrs:{side:""}},[i("q-toggle",{attrs:{color:"blue"},model:{value:e.show12HourTimeFormat,callback:function(t){e.show12HourTimeFormat=t},expression:"show12HourTimeFormat"}})],1)],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[i("q-item-section",[i("q-item-label",[e._v("Show tasks in one list")])],1),i("q-item-section",{attrs:{side:""}},[i("q-toggle",{attrs:{color:"blue"},model:{value:e.showTasksInOneList,callback:function(t){e.showTasksInOneList=t},expression:"showTasksInOneList"}})],1)],1)],1),i("q-list",{attrs:{bordered:"",padding:""}},[i("q-item-label",{attrs:{header:""}},[e._v("More")]),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label",to:"/settings/help"}},[i("q-item-section",[i("q-item-label",[e._v("Help")])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"chevron_right"}})],1)],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"},on:{click:e.visitOurWebsite}},[i("q-item-section",[i("q-item-label",[e._v("Visit our website")])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"chevron_right"}})],1)],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"},on:{click:e.emailUs}},[i("q-item-section",[i("q-item-label",[e._v("Email us")])],1),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"chevron_right"}})],1)],1)],1)],1)},a=[],o=i("ded3"),r=i.n(o),n=i("2f62"),l=i("b06b"),m={computed:r()(r()({},Object(n["c"])("settings",["settings"])),{},{show12HourTimeFormat:{get(){return this.settings.show12HourTimeFormat},set(e){this.setShow12HourTimeFormat(e)}},showTasksInOneList:{get(){return this.settings.showTasksInOneList},set(e){this.setShowTasksInOneList(e)}}}),methods:r()(r()({},Object(n["b"])("settings",["setShow12HourTimeFormat","setShowTasksInOneList"])),{},{visitOurWebsite(){this.$q.platform.is.android&&this.$q.platform.is.cordova?cordova.InAppBrowser.open("https://www.codepedia.de/","_blank","location=yes"):Object(l["a"])("https://www.codepedia.de/")},emailUs(){window.location.href="mailto:s.haefelinger@gmx.de?subject=qTodoFeedback"}})},c=m,d=i("2877"),p=i("9989"),h=i("1c1c"),b=i("0170"),w=i("66e5"),q=i("4074"),u=i("9564"),g=i("0016"),v=i("714f"),k=i("eebe"),T=i.n(k),f=Object(d["a"])(c,s,a,!1,null,null,null);t["default"]=f.exports;T()(f,"components",{QPage:p["a"],QList:h["a"],QItemLabel:b["a"],QItem:w["a"],QItemSection:q["a"],QToggle:u["a"],QIcon:g["a"]}),T()(f,"directives",{Ripple:v["a"]})}}]);