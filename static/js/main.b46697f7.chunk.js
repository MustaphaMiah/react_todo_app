(this.webpackJsonpreact_todo_app=this.webpackJsonpreact_todo_app||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(5),i=n.n(a),d=(n(14),n(4)),r=n(6),l=n(7),h=n(2),s=n(9),u=n(8),p=(n(15),n(0));var m=function(e){return Object(p.jsxs)("div",{className:"todo-item",children:[Object(p.jsx)("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),Object(p.jsx)("p",{style:e.item.completed?{fontStyle:"italic",backgroundColor:"#3be13b",textDecoration:"line-through"}:null,children:e.item.text})]})},b=[{id:1,text:"Make a coffee",completed:!0},{id:2,text:"Code, code & code!",completed:!0},{id:3,text:"Train Muay Thai",completed:!1},{id:4,text:"Order chicken & prawn pad thai",completed:!0},{id:5,text:"Watch anime",completed:!1}],j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={todos:b},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return Object(p.jsx)(m,{item:t,handleChange:e.handleChange},t.id)}));return Object(p.jsx)("div",{className:"todo-list",children:t})}}]),n}(o.a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.b46697f7.chunk.js.map