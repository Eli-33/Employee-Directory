(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a.n(n),c=a(13),i=a.n(c),l=(a(21),a(3)),o=a(15),d=(a(22),s.a.createContext({})),j=function(){var e=Object(n.useContext)(d);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(r.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,n=e.name,s=e.picture,c=e.phone,i=e.email,l=e.dob;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(r.jsx)("img",{src:s.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(r.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(r.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(r.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(r.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(r.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(l.date)})]},a.uuid)})):Object(r.jsx)(r.Fragment,{})})},h=(a(23),function(){var e=Object(n.useContext)(d);return Object(r.jsx)("div",{className:"datatable mt-5",children:Object(r.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,n=t.width;return Object(r.jsxs)("th",{className:"col",style:{width:n},onClick:function(){e.handleSort(a.toLowerCase())},children:[a,Object(r.jsx)("span",{className:"pointer"})]},a)}))})}),Object(r.jsx)(j,{})]})})}),u=(a(24),function(){var e=Object(n.useContext)(d);return Object(r.jsx)("div",{className:"searchbox",children:Object(r.jsxs)("form",{className:"form-inline",children:[Object(r.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}}),Object(r.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search"})]})})});a(25);var m=function(){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(r.jsx)("div",{className:"search-area col-4",children:Object(r.jsx)(u,{})})})},b=a(14),f=a.n(b),O=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")},v=(a(44),function(){var e=Object(n.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){O().then((function(e){s(Object(l.a)(Object(l.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(r.jsxs)(d.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,r=a.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));s(Object(l.a)(Object(l.a)({},a),{},{filteredUsers:r}))},handleSort:function(e){"descend"===a.order?s({order:"ascend"}):s({order:"descend"});var t=a.filteredUsers.sort((function(t,r){return"ascend"===a.order?void 0===t[e]?1:void 0===r[e]?-1:"name"===e?t[e].first.localeCompare(r[e].first):r[e]-t[e]:void 0===t[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(t[e].first):r[e]-t[e]}));s(Object(l.a)(Object(l.a)({},a),{},{filteredUsers:t}))}},children:[Object(r.jsx)(m,{}),Object(r.jsx)("div",{className:"data-area",children:a.filteredUsers.length>0?Object(r.jsx)(h,{}):Object(r.jsx)("div",{})})]})});a(45);var x=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(v,{})})};a(46);var p=function(e){var t=e.children;return Object(r.jsx)("div",{className:"wrapper",children:t})};a(47);var g=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"Click on each heading to filter or use the search box to narrow your results"})]})};a(48);var N=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(p,{children:[Object(r.jsx)(g,{}),Object(r.jsx)(x,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(N,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.719884fb.chunk.js.map