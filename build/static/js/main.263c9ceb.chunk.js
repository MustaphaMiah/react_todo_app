(this.webpackJsonpreact_todo_app=this.webpackJsonpreact_todo_app||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(5),i=n.n(a),d=(n(14),n(4)),r=n(6),s=n(7),h=n(2),l=n(9),u=n(8),p=(n(15),n(0));var j=function(e){return Object(p.jsxs)("div",{className:"todo-item",children:[Object(p.jsx)("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),Object(p.jsx)("p",{children:e.item.text})]})},m=[{id:1,text:"Make a coffee",completed:!0},{id:2,text:"Code, code & code!",completed:!0},{id:3,text:"Train Muay Thai",completed:!1},{id:4,text:"Order chicken & prawn pad thai",completed:!0},{id:5,text:"Watch anime",completed:!1}],b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={todos:m},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){var n=t.todos.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t}));return console.log(t.todos),console.log(n),{todos:n}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return Object(p.jsx)(j,{item:t,handleChange:e.handleChange},t.id)}));return Object(p.jsx)("div",{className:"todo-list",children:t})}}]),n}(o.a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.263c9ceb.chunk.js.map