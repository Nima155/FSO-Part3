(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(15),r=n.n(a),o=(n(6),n(3)),u=n(0),i=function(e){var t=e.formSubmit,n=e.newName,c=e.setNewName,a=e.newNumber,r=e.setNewNumber;return Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:n,onChange:c})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:a,onChange:r})," "]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},s=function(e){var t=e.ele,n=e.callback;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("p",{children:[t.name," ",t.number," ",Object(u.jsx)("button",{onClick:function(){return n(t.id,t.name)},children:"delete"})]})})},l=function(e){var t=e.persons,n=e.searchPara,c=e.callBack;return Object(u.jsx)(u.Fragment,{children:t.filter((function(e){return-1!==e.name.indexOf(n)})).map((function(e){return Object(u.jsx)(s,{ele:e,callback:c},e.name)}))})},d=function(e){var t=e.onSearchParaChange,n=e.searchPara;return Object(u.jsxs)(u.Fragment,{children:["filter shown with",Object(u.jsx)("input",{onChange:t,value:n})]})},b=n(4),j=n.n(b),h="http://localhost:3001/api/persons",f={create:function(e){return j.a.post(h,e).then((function(e){return console.log(e),e.data}))},deleteData:function(e,t){return window.confirm("Delete ".concat(t,"?"))?j.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data})):j.a.delete("/nothere").then()},update:function(e,t){return j.a.put("".concat(h,"/").concat(t),e).then((function(e){return e.data}))},getAll:function(){return j.a.get(h).then((function(e){return e.data}))}},m=function(e){var t=e.message,n=e.theme;return t?Object(u.jsx)("div",{style:{padding:"10px",border:"5px solid ".concat(n),color:"".concat(n),backgroundColor:"lightgray",margin:"5px 0px",borderRadius:"5px"},children:Object(u.jsx)("p",{children:t})}):null},O=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){f.getAll().then((function(e){console.log(e),a(e)}))}),[]);var r=Object(c.useState)(""),s=Object(o.a)(r,2),b=s[0],j=s[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),x=O[0],p=O[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),w=v[0],N=v[1],k=Object(c.useState)(""),S=Object(o.a)(k,2),C=S[0],P=S[1],y=Object(c.useState)(""),D=Object(o.a)(y,2),F=D[0],A=D[1],B=function(e,t){A(t),P(e),setTimeout((function(){return P("")}),5e3)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(m,{message:C,theme:F}),Object(u.jsx)(d,{onSearchParaChange:function(e){return N(e.target.value)},searchPara:w}),Object(u.jsx)("h2",{children:"add a new"}),Object(u.jsx)(i,{formSubmit:function(e){if(e.preventDefault(),-1===n.findIndex((function(e){return e.name===b}))){var t={name:b,number:x};f.create(t).then((function(e){B("Added ".concat(t.name),"green"),a(n.concat(e)),j(""),p("")})).catch((function(){B("Failed to add ".concat(t.name),"red")}))}},newNumber:x,newName:b,setNewNumber:function(e){return p(e.target.value)},setNewName:function(e){return j(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(l,{searchPara:w,persons:n,callBack:function(e,t){f.deleteData(e,t).then((function(){B("Deleted ".concat(t," from the database"),"green")})).catch((function(){B("Failed to delete ".concat(t,", the user might already be deleted"),"red")})),a(n.filter((function(t){return t.id!==e})))}})]})};r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))},6:function(e,t,n){}},[[39,1,2]]]);
//# sourceMappingURL=main.acd9c3e9.chunk.js.map