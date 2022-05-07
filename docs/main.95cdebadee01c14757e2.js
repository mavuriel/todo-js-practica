(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{L:()=>v});var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var o,r,n;return o=e,n=[{key:"fromJson",value:function(t){var o=t.id,r=t.tarea,n=t.completado,a=t.creado,i=new e(r);return i.id=o,i.completado=n,i.creado=a,i}}],(r=[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}])&&t(o.prototype,r),n&&t(o,n),Object.defineProperty(o,"prototype",{writable:!1}),e}();function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,n,a;return t=e,(n=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){var t=Number(e);this.todos=this.todos.filter((function(e){return e.id!==t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t=Number(e),o=this.todos.find((function(e){return e.id===t}));o.completado=!o.completado,this.guardarLocalStorage()}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){window.localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){var e=window.localStorage.getItem("todo");this.todos=e?JSON.parse(window.localStorage.getItem("todo")):[],this.todos=this.todos.map(o.fromJson)}}])&&r(t.prototype,n),a&&r(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==o.return||o.return()}finally{if(l)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var c=document.querySelector(".todo-list"),l=document.querySelector(".new-todo"),s=document.querySelector("#form"),d=document.querySelector(".clear-completed"),u=document.querySelector(".filters"),f=document.querySelectorAll(".filtro"),m=function(e){var t=e.completado,o='\n  <li class="'.concat(t?"completed":"",'" data-id="').concat(e.id,'">\n    <div class="view">\n      <input class="toggle" type="checkbox" ').concat(t?"checked":"",">\n      <label>").concat(e.tarea,'</label>\n      <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n  </li>\n  ');c.insertAdjacentHTML("beforeend",o)};s.addEventListener("submit",(function(e){if(e.preventDefault(),l.value.length){var t=new o(l.value);v.nuevoTodo(t),m(t),l.value=""}})),c.addEventListener("click",(function(e){var t=e.target.localName,o=e.target.parentElement.parentElement,r=o.getAttribute("data-id");t.includes("input")&&(v.marcarCompletado(r),o.classList.toggle("completed")),t.includes("button")&&(v.eliminarTodo(r),c.removeChild(o)),console.log(v)})),d.addEventListener("click",(function(){v.eliminarCompletados();for(var e=c.children.length-1;e>=0;e--){var t=c.children[e];t.classList.contains("completed")&&c.removeChild(t)}})),u.addEventListener("click",(function(e){var t=e.target.text;if(t){f.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var o,r=a(c.children);try{for(r.s();!(o=r.n()).done;){var n=o.value;n.classList.remove("hidden");var i=n.classList.contains("completed");switch(t){case"Pendientes":i&&n.classList.add("hidden");break;case"Completados":i||n.classList.add("hidden")}}}catch(e){r.e(e)}finally{r.f()}}}));var v=new n;v.todos.forEach(m),console.log("todos",v.todos)})();