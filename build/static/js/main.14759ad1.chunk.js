(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(16),c=n.n(a),o=(n(7),n(6)),u=n(3),i=n(0),s=function(e){var t=e.formSubmit,n=e.newName,r=e.setNewName,a=e.newNumber,c=e.setNewNumber;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:r})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:a,onChange:c})," "]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var t=e.ele,n=e.callback;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{children:[t.name," ",t.number," ",Object(i.jsx)("button",{onClick:function(){return n(t.id,t.name)},children:"delete"})]})})},b=function(e){var t=e.persons,n=e.searchPara,r=e.callBack;return Object(i.jsx)(i.Fragment,{children:t.filter((function(e){return-1!==e.name.indexOf(n)})).map((function(e){return Object(i.jsx)(d,{ele:e,callback:r},e.name)}))})},j=function(e){var t=e.onSearchParaChange,n=e.searchPara;return Object(i.jsxs)(i.Fragment,{children:["filter shown with",Object(i.jsx)("input",{onChange:t,value:n})]})},l=n(4),h=n.n(l),f="/api/persons",m={create:function(e){return h.a.post(f,e).then((function(e){return e.data}))},deleteData:function(e,t){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},update:function(e,t){return h.a.put("".concat(f,"/").concat(t),e).then((function(e){return e.data}))},getAll:function(){return h.a.get(f).then((function(e){return e.data}))}},O=function(e){var t=e.message,n=e.theme;return t?Object(i.jsx)("div",{style:{padding:"10px",border:"5px solid ".concat(n),color:"".concat(n),backgroundColor:"lightgray",margin:"5px 0px",borderRadius:"5px"},children:Object(i.jsx)("p",{children:t})}):null},p=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){m.getAll().then((function(e){a(e)}))}),[]);var c=Object(r.useState)(""),d=Object(u.a)(c,2),l=d[0],h=d[1],f=Object(r.useState)(""),p=Object(u.a)(f,2),x=p[0],g=p[1],v=Object(r.useState)(""),w=Object(u.a)(v,2),N=w[0],k=w[1],S=Object(r.useState)(""),C=Object(u.a)(S,2),y=C[0],P=C[1],D=Object(r.useState)(""),F=Object(u.a)(D,2),A=F[0],B=F[1],I=function(e,t){B(t),P(e),setTimeout((function(){return P("")}),5e3)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(O,{message:y,theme:A}),Object(i.jsx)(j,{onSearchParaChange:function(e){return k(e.target.value)},searchPara:N}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(s,{formSubmit:function(e){e.preventDefault();var t=n.findIndex((function(e){return e.name===l}));if(-1===t){var r={name:l,number:x};m.create(r).then((function(e){I("Added ".concat(r.name),"green"),a(n.concat(e)),h(""),g("")})).catch((function(e){I(e.response.data.error,"red")}))}else window.confirm("".concat(l," is already in the phonebook, replace the old number with a new one?"))&&m.update(Object(o.a)(Object(o.a)({},n[t]),{},{number:x}),n[t].id).then((function(e){a(n.map((function(r){return r.id===n[t].id?e:r}))),I("Changed ".concat(n[t].name,"s number"),"green")})).catch((function(e){e.response.data.message?I(e.response.data.message,"red"):(I("Information of ".concat(l," has already been removed from server"),"red"),a(n.filter((function(e){return e.id!==n[t].id}))))}))},newNumber:x,newName:l,setNewNumber:function(e){return g(e.target.value)},setNewName:function(e){return h(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(b,{searchPara:N,persons:n,callBack:function(e,t){window.confirm("Delete ".concat(t,"?"))&&(m.deleteData(e,t).then((function(){I("Deleted ".concat(t," from the database"),"green")})).catch((function(){I("Failed to delete ".concat(t,", the user might already be deleted"),"red")})),a(n.filter((function(t){return t.id!==e}))))}})]})};c.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))},7:function(e,t,n){}},[[40,1,2]]]);
//# sourceMappingURL=main.14759ad1.chunk.js.map