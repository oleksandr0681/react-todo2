(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,function(t,e,n){t.exports={filterPanel:"filter-panel_filterPanel__3orgE",filterPanel__button:"filter-panel_filterPanel__button__CbTnz",filterPanel__button_clicked:"filter-panel_filterPanel__button_clicked__1nwF5"}},function(t,e,n){t.exports={todoItem:"todo-item_todoItem__1ekUF",todoItemDone:"todo-item_todoItemDone__3dkaf",todoItemImportant:"todo-item_todoItemImportant__2yaSu",todoItemDelete:"todo-item_todoItemDelete__2bJzm",todoItem__content:"todo-item_todoItem__content__291PR",todoItem__buttonGreen:"todo-item_todoItem__buttonGreen__2VXZ2",todoItem__buttonRed:"todo-item_todoItem__buttonRed__3veS8"}},,,,function(t,e,n){t.exports=n.p+"static/media/react.df70b005.png"},function(t,e,n){t.exports=n(23)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),l=n(7),i=n(1),s=n(2),m=n(4),d=n(3),u=(n(16),function(){return o.a.createElement("h1",{className:"appTitle"},"ToDo App")}),_=(n(17),function(){return o.a.createElement("div",{className:"search-panel"},o.a.createElement("p",{className:"search-panel__title"},"To do:"),o.a.createElement("input",{type:"text",placeholder:"search...",className:"search-panel__input"}),o.a.createElement("button",{className:"search-panel__button"},"\u041f\u041e\u0418\u0421\u041a"))}),p=n(5),f=n.n(p),b=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={all:!0,todo:!1,important:!1},t.setAll=function(){t.setState((function(){return{all:!0,todo:!1,important:!1}}))},t.setTodo=function(){t.setState((function(){return{all:!1,todo:!0,important:!1}}))},t.setImportant=function(){t.setState((function(){return{all:!1,todo:!1,important:!0}}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=f.a.filterPanel__button,e=f.a.filterPanel__button,n=f.a.filterPanel__button;return this.state.all&&(t+=" ".concat(f.a.filterPanel__button_clicked)),this.state.todo&&(e+=" ".concat(f.a.filterPanel__button_clicked)),this.state.important&&(n+=" ".concat(f.a.filterPanel__button_clicked)),o.a.createElement("div",{className:f.a.filterPanel},o.a.createElement("button",{onClick:this.setAll,className:t},"all"),o.a.createElement("button",{onClick:this.setTodo,className:e},"todo"),o.a.createElement("button",{onClick:this.setImportant,className:n},"important"))}}]),n}(a.Component),h=n(6),I=n.n(h),E=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={done:!1,important:!1,delete:!1},t.itemDone=function(){t.setState((function(t){return{done:!t.done}}))},t.setImportant=function(){t.setState((function(t){return{important:!t.important}}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.text,n=t.onDelItem,a=I.a.todoItem;this.state.done&&(a+=" ".concat(I.a.todoItemDone)),this.state.important&&(a+=" ".concat(I.a.todoItemImportant)),this.state.delete&&(a+=" ".concat(I.a.todoItemDelete));var c=I.a.todoItem__buttonGreen,r=I.a.todoItem__buttonRed;return o.a.createElement("li",{className:a},o.a.createElement("div",{className:I.a.todoItem__content},o.a.createElement("span",{onClick:this.itemDone},e),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.setImportant,className:c},"i"),o.a.createElement("button",{onClick:n,className:r},"del"))))}}]),n}(a.Component),v=(n(18),function(t){var e=t.todos,n=t.onDelItem;console.log(n);var a=e.map((function(t){return o.a.createElement(E,{key:t.id,text:t.text,checked:t.checked,onDelItem:function(){n(t.id)}})}));return o.a.createElement("ul",{className:"todo-list"},a)}),k=(n(19),function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{action:"#",className:"addItem"},o.a.createElement("input",{type:"text",placeholder:"AddItem text",className:"addItem__input"}),o.a.createElement("button",{onClick:this.props.onAddItem,className:"addItem__button"},"Add"))}}]),n}(a.Component)),N=(n(20),function(){return o.a.createElement("div",{className:"task"},o.a.createElement("div",{className:"task__title"},"Task"),o.a.createElement("input",{type:"text",placeholder:"What do you need to do?",className:"task__input"}))}),j=(n(21),function(){return o.a.createElement("div",{className:"save"},o.a.createElement("button",{className:"save__button"},"Save Item"))}),y=(n(22),n(10)),O=n.n(y),x=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={todoList:[{id:1,text:"Wake up",checked:!0},{id:2,text:"Eat breakfast",checked:!1},{id:3,text:"Go to work",checked:!1}]},t.delItem=function(e){t.setState((function(t){var n=t.todoList,a=n.findIndex((function(t){return e===t.id}));return{todoList:[].concat(Object(l.a)(n.slice(0,a)),Object(l.a)(n.slice(a+1)))}}))},t.addItem=function(){t.setState((function(t){var e,n=t.todoList.slice(),a=-1;n.length>0&&(a=n[0].id);for(var o=0;o<n.length;o++)n[o].id>a&&(a=n[o].id);return e=-1===a?1:a+1,n.push({id:e,text:"Added item",checked:!0}),{todoList:n}}))},t}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",null,o.a.createElement("img",{src:"img/react.png",alt:"react",className:"picture"}),o.a.createElement(u,null),o.a.createElement(_,null),o.a.createElement(b,null),o.a.createElement(v,{todos:this.state.todoList,onDelItem:this.delItem}),o.a.createElement(k,{onAddItem:this.addItem}),o.a.createElement(N,null),o.a.createElement(j,null),o.a.createElement("img",{src:O.a,alt:"react",className:"picture"})))}}]),n}(a.Component);r.a.render(o.a.createElement(x,null),document.querySelector("#root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.546757fc.chunk.js.map