(this.webpackJsonpsuper_app=this.webpackJsonpsuper_app||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),s=c(9),i=c.n(s),o=(c(16),c(4)),u=c(3),j=c(1);c(17),c(18);var l=function(e){var t=e.setZone;return Object(n.jsxs)("header",{children:[Object(n.jsx)("button",{onClick:function(){return t(1)},children:"Ir a Administrar Productos"}),Object(n.jsx)("button",{onClick:function(){return t(2)},children:"Ir a Facturar"}),Object(n.jsx)("button",{onClick:function(){return t(3)},children:"Ir a Administrar Facturas"}),Object(n.jsx)("button",{onClick:function(){return t(0)},children:"Salir"})]})},b=c(8),d=c.n(b),O=c(10),p=(c(20),c(2)),f=p.useLayoutEffect,h=p.useRef,x=p.useState;function m(e){var t=x([]),c=Object(j.a)(t,2),a=c[0],r=c[1],s=h(null),i=e.onChange,o=e.onKeyDown,l=Object(u.a)({},e);delete l.onChange,delete l.onKeyDown;var b={};return f((function(){s.current&&s.current()}),[a]),i?b.onChange=function(e){if(i&&!i(e)){var t=e.target,c=t.selectionStart;s.current=function(){return t.setSelectionRange(c,c-1)},r([])}}:o&&(b.onKeyDown=function(e){if(o&&!o(e)){var t=e.target,c=t.selectionStart;s.current=function(){return t.setSelectionRange(c,c-1)},r([])}}),Object(n.jsx)("input",Object(u.a)(Object(u.a)({type:"text"},b),l))}function v(e){var t=e.product,c=e.setProducts,r=e.products,s=e.code,i=Object(a.useState)(Object(u.a)(Object(u.a)({},t),{},{code:s})),l=Object(j.a)(i,2),b=l[0],d=l[1],O=Object(a.useState)(!0),p=Object(j.a)(O,2),f=p[0],h=p[1],x=Object(a.useState)(!1),v=Object(j.a)(x,2),N=v[0],g=v[1],C=Object(a.useState)(t),S=Object(j.a)(C,2),w=S[0],y=S[1],M=function(){return h((function(e){return!e}))};Object(a.useEffect)((function(){t.name||h(!1)}),[]);var k=function(e){var t=e.codeI,n=e.code,a=e.name,r=e.price,s=e.count;M(),c((function(e){var c=new Map(Object(o.a)(e));return c.delete(t),c})),c((function(e){return new Map([[n,{name:a,price:r,count:s}]].concat(Object(o.a)(e)))})),d((function(e){return Object(u.a)(Object(u.a)({},e),{},{price:(+e.price).toFixed(2)})}))},F=function(){for(var e in b)if(!b[e])return;var c=Object.values(Object(u.a)(Object(u.a)({},t),{},{code:s}));if(b.code!==s&&r.has(b.code))return console.log(b),void alert("C\xf3digo del Producto YA Registrado");b.name&&b.name!==t.name&&Object(o.a)(r.values()).find((function(e){var t=e.name;return new RegExp(b.name,"i").test(t)}))?alert("Nombre del Producto Ya Registrado"):Object.values(b).every((function(e,t){return e===c[t]}))?M():(y(Object(u.a)({code:s},t)),k(Object(u.a)({codeI:s},b)))},E=function(){M(),console.log(t),d(Object(u.a)(Object(u.a)({code:s},t),{},{price:(+t.price).toFixed(2)}))};function I(e){e?(c((function(e){return e.delete(s),new Map(e)})),g(!1)):g(!1)}return Object(n.jsxs)("div",{className:"product-item",onKeyDown:function(e){if(f)return!1;"Enter"===e.key?F():"Escape"===e.key&&E()},tabIndex:1,children:[Object(n.jsxs)("div",{className:"modal",style:{display:N?"flex":"none"},children:[Object(n.jsx)("button",{onClick:function(){return I(!0)},children:"S\xed, quiero eliminar"}),Object(n.jsx)("button",{onClick:function(){return I(!1)},children:"No quiero eliminar"})]}),Object(n.jsx)(m,{disabled:f,value:b.code,onChange:function(e){var t=e.target.value;if(!/\D/.test(t)&&!(t>Number.MAX_SAFE_INTEGER))return d(Object(u.a)(Object(u.a)({},b),{},{code:t})),!0},className:"code"}),Object(n.jsx)(m,{disabled:f,value:b.name,onChange:function(e){var t=e.target.value;return d(Object(u.a)(Object(u.a)({},b),{},{name:t})),!0}}),Object(n.jsx)(m,{disabled:f,value:(+b.price).toFixed(2)+(f?" Bs.":""),onChange:function(e){var t=e.target.value;if(!isNaN(t)&&("0"!==t[0]||"0"!==t[1])&&"+"!==t[0]&&!(t<0)&&!(t>Number.MAX_SAFE_INTEGER))return d(Object(u.a)(Object(u.a)({},b),{},{price:t})),!0}}),Object(n.jsx)(m,{disabled:f,value:b.count,onChange:function(e){var t=e.target.value;if(!/\D/.test(t)&&("0"!==t[0]||"0"!==t[1]))return d(Object(u.a)(Object(u.a)({},b),{},{count:t})),!0}}),Object(n.jsx)("button",{className:"edit",onClick:M,hidden:!f,children:"Editar"}),Object(n.jsxs)("div",{className:"edit-data",style:{display:f?"none":"grid"},children:[Object(n.jsx)("button",{onClick:F,children:"Aplicar"}),Object(n.jsx)("button",{onClick:function(){d(Object(u.a)({code:s},w)),k(Object(u.a)({code:s},w))},children:"Revertir"}),Object(n.jsx)("button",{onClick:E,className:"cancel",children:"Cancelar"})]}),Object(n.jsxs)("button",{className:"delete",onClick:function(){g(!0)},children:[Object(n.jsx)("div",{className:"trash"}),"Eliminar"]})]})}var N=function(e){var t=e.zone,c=e.products,r=e.setProducts,s=Object(a.useState)(c),i=Object(j.a)(s,2),u=i[0],l=i[1];function b(){return Math.floor(1e3*Math.random())+""}function p(){return(p=Object(O.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){var e=t.target.value,n=!isNaN(e);if(!e)return l((function(){return c}));l((function(){return new Map(Object(o.a)(c).map((function(t){var c,a=Object(j.a)(t,2),r=a[0],s=a[1];return(c=n?r.match(new RegExp(e,"i")):s.name.match(new RegExp(e,"i")))?c.data=t:Object.values(s).every((function(e){return e}))||((c=[""]).data=t),c})).filter((function(e){return e})).sort((function(e,t){var c=Object(j.a)(e,1)[0];return Object(j.a)(t,1)[0].length-c.length})).sort((function(e,t){return e.index-t.index})).sort((function(e,t){var c=e.data,n=t.data,a=+!Object.values(c[1]).every((function(e){return e}));return a===+!Object.values(n[1]).every((function(e){return e}))?0:1===a?-1:1})).map((function(e){return e.data})))}))}),0);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){r(e),l(e)}var h=Object(a.useState)(!0),x=Object(j.a)(h,2),m=x[0],N=x[1],g=Object(a.useState)(!0),C=Object(j.a)(g,2),S=C[0],w=C[1],y=Object(a.useState)(!0),M=Object(j.a)(y,2),k=M[0],F=M[1];return 1===t&&Object(n.jsxs)("div",{className:"product-manager-container",children:[Object(n.jsxs)("div",{className:"main-control",children:[Object(n.jsxs)("div",{className:"input-container",children:[Object(n.jsx)("div",{className:"lupa"}),Object(n.jsx)("input",{type:"text",placeholder:"Buscar por Nombre o C\xf3digo...",onKeyDown:function(e){return p.apply(this,arguments)},onClick:function(){console.log(c)}})]}),Object(n.jsxs)("button",{onClick:function(){for(var e=b();c.has(e);)e=b();r((function(t){return new Map([[e,{name:"",price:"",count:""}]].concat(Object(o.a)(t)))})),l((function(t){return new Map([[e,{name:"",price:"",count:""}]].concat(Object(o.a)(t)))}))},children:[Object(n.jsx)("div",{className:"plus"}),"Agregar un Producto"]})]}),Object(n.jsxs)("main",{children:[Object(n.jsxs)("div",{className:"order-bar",children:[Object(n.jsx)("p",{children:"C\xf3digo"}),Object(n.jsxs)("p",{onClick:function(){N((function(e){return!e})),l((function(e){return new Map(Object(o.a)(e).sort((function(e,t){var c=Object(j.a)(e,2)[1],n=Object(j.a)(t,2)[1];return m?c.name.localeCompare(n.name):n.name.localeCompare(c.name)})))}))},children:["Nombre ",m?"\u25bc":"\u25b2"," "]}),Object(n.jsxs)("p",{onClick:function(){w((function(e){return!e})),l((function(e){return new Map(Object(o.a)(e).sort((function(e,t){var c=Object(j.a)(e,2)[1],n=Object(j.a)(t,2)[1];return S?c.price>n.price?-1:1:c.price<n.price?-1:1})))}))},children:["Precio ",S?"\u25bc":"\u25b2"," "]}),Object(n.jsxs)("p",{onClick:function(){F((function(e){return!e})),l((function(e){return new Map(Object(o.a)(e).sort((function(e,t){var c=Object(j.a)(e,2)[1],n=Object(j.a)(t,2)[1];return k?c.count>n.count?-1:1:c.count<n.count?-1:1})))}))},children:["Cantidad ",k?"\u25bc":"\u25b2"," "]})]}),Object(n.jsx)("div",{className:"list-items",children:Object(o.a)(u).map((function(e){var t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.jsx)(v,{product:a,setProducts:f,products:u,code:c},c)}))})]})]})};c(21),c(22);function g(e){var t=e.list,c=0;return Object(o.a)(t.values()).map((function(e){var t=e.props,a=t.product,r=t.count,s=a.code,i=a.name,o=a.price;c++;var u=r*o;return Object(n.jsxs)("div",{className:"item",children:[Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("i",{children:s})," - ",i," (",r,")"]}),Object(n.jsx)("p",{children:Object(n.jsxs)("strong",{children:[(u+16*u/100).toFixed(2)," Bs."]})})]},c)}))}var C=function(e){var t=e.userName,c=e.userCard,a=e.list,r=e.total,s=e.print,i=e.billHistoryCount,o=e.time,u=e.setPrint,j=e.facture;return Object(n.jsxs)("div",{className:"bill-print",style:{display:s?"flex":"none"},children:[Object(n.jsx)("div",{className:"cross",onClick:function(){return u(!1)}}),j&&Object(n.jsx)("div",{className:"check-mark",onClick:function(){u(!1),j()}}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"data-company",children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h3",{children:"Variedades Nelly Shop C.A"}),Object(n.jsx)("p",{children:"Mercado Municipal Anaco-PASILLO 4"}),Object(n.jsx)("p",{children:"J-20501114S"})]})]}),Object(n.jsxs)("div",{className:"data-client",children:[Object(n.jsx)("h3",{children:"Informaci\xf3n del Cliente"}),Object(n.jsxs)("p",{children:["Cliente: ",t]}),Object(n.jsxs)("p",{children:["RIF/C.I.: ",c]})]}),Object(n.jsxs)("div",{className:"data-bill",children:[Object(n.jsx)("h4",{children:"FACTURA"}),Object(n.jsxs)("div",{className:"keys",children:[Object(n.jsx)("p",{children:"Factura:"}),Object(n.jsx)("p",{children:"Fecha:"})]}),Object(n.jsxs)("div",{className:"values",children:[Object(n.jsx)("p",{children:i}),Object(n.jsx)("p",{children:o})]})]}),Object(n.jsx)("div",{className:"products",children:Object(n.jsx)(g,{list:a})}),Object(n.jsxs)("div",{className:"result",children:[Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("p",{children:"Total"})," ",Object(n.jsx)("p",{children:Object(n.jsxs)("strong",{children:[(r+16*r/100).toFixed(2)," Bs."]})})]}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("p",{children:"Tarj. D\xe9bito"})," ",Object(n.jsx)("p",{children:Object(n.jsxs)("strong",{children:[(r+16*r/100).toFixed(2)," Bs."]})})]})]})]})]})};function S(e){var t=e.revertHandler,c=e.product,a=e.setList,r=e.count,s=e.setTotal;var i=r*c.price,o=(i+16*i/100).toFixed(2);return Object(n.jsxs)("div",{className:"bill-history-Item",children:[Object(n.jsxs)("p",{children:[r," ",c.name," a ",c.price," Bs. Total: ",o," Bs."]}),Object(n.jsx)("button",{onClick:function(){a((function(e){return e.delete(c.name),new Map(e)})),t(r,c.code),s((function(e){return e-c.price*r}))},children:"Eliminar"})]},c.name)}var w=function(e){var t=e.zone,c=e.products,r=e.setProducts,s=e.setBills,i=e.setBillsHistoryCount,l=e.billHistoryCount,b=Object(a.useState)(""),d=Object(j.a)(b,2),O=d[0],p=d[1],f=Object(a.useState)(1),h=Object(j.a)(f,2),x=h[0],v=h[1],N=Object(a.useState)(0),g=Object(j.a)(N,2),w=g[0],y=g[1],M=Object(a.useState)(new Map),k=Object(j.a)(M,2),F=k[0],E=k[1],I=Object(a.useState)(""),A=Object(j.a)(I,2),P=A[0],B=A[1],R=Object(a.useState)(""),D=Object(j.a)(R,2),T=D[0],H=D[1],z=Object(a.useState)(!1),_=Object(j.a)(z,2),J=_[0],L=_[1],K=Object(a.useState)(!1),G=Object(j.a)(K,2),X=G[0],Z=G[1],U=Object(a.useState)({code:"",name:"",price:""}),Y=Object(j.a)(U,2),q=Y[0],V=Y[1],Q=Object(a.useState)(void 0),W=Object(j.a)(Q,2),$=W[0],ee=W[1],te=Object(a.useRef)(void 0),ce=q.price*x,ne=(ce+16*ce/100).toFixed(2);function ae(e,t){L(!1),V((function(t){return Object(u.a)(Object(u.a)({},t),{},{count:t.count+ +e})})),r((function(c){var n=c.get(t);return new Map(c.set(O,Object(u.a)(Object(u.a)({},n),{},{count:n.count+ +e})))}))}function re(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];L(!1),e&&Object(o.a)(F).forEach((function(e){var t=Object(j.a)(e,2),c=(t[0],t[1].props);ae(c.count,c.product.code)})),E(new Map),p(""),v(""),B(""),H(""),y(0),ee(void 0),V({code:"",name:"",price:""})}return Object(a.useLayoutEffect)((function(){te.current&&(te.current(),te.current=void 0)})),2===t&&Object(n.jsxs)("div",{className:"facture-manager-container",children:[Object(n.jsx)("div",{className:"reset",onClick:re}),Object(n.jsx)(C,{userName:T,userCard:P,list:F,total:w,print:X,billHistoryCount:l,time:$,setPrint:Z,facture:function(){i((function(e){return++e})),s((function(e){return new Map([[l,{list:F,total:w,userName:T,userCard:P,time:$}]].concat(Object(o.a)(e)))})),re(!1)}}),Object(n.jsxs)("section",{className:"calculator",children:[Object(n.jsxs)("div",{className:"main-input",children:[Object(n.jsx)(m,{placeholder:"C\xf3digo",value:O,onChange:function(e){var t=e.target.value;return!/\D/.test(t)&&(p(t),c.has(t)?V(Object(u.a)({code:t},c.get(t))):V({code:"",name:"",price:""}),!0)}}),Object(n.jsx)(m,{placeholder:"Cantidad: 1",value:1===x?"":x,onChange:function(e){var t=e.target.value;return!/\D/.test(t)&&("0"!==t[0]&&("0"!==t[0]||"0"!==t[1])&&(!(t>Number.MAX_SAFE_INTEGER)&&(!(t*q.price>Number.MAX_SAFE_INTEGER)&&(v(t||1),!0))))}}),Object(n.jsxs)("div",{className:"result",children:[Object(n.jsxs)("div",{className:"modal",style:{display:J?"flex":"none"},onClick:function(){return L(!1)},children:[Object(n.jsx)("div",{className:"cross"}),Object(n.jsx)("p",{hidden:0!==q.count,children:"PRODUCTO AGOTADO"}),Object(n.jsx)("p",{hidden:0===q.count,children:"Solo hay en existencia:"}),Object(n.jsx)("p",{hidden:0===q.count,children:q.count})]}),Object(n.jsx)("p",{children:"Resultado:"}),Object(n.jsxs)("p",{children:[ne," Bs."]})]}),Object(n.jsx)("button",{onClick:function(){if(!x||!q.price)return!1;if(+x>+q.count)return console.log(typeof x,typeof q.count),L(!0),!1;var e,t=q.count-x,c=function(e){return Object(n.jsx)(S,{product:q,setList:E,list:F,count:e,revertHandler:ae,setTotal:y},q.name)};e=t,r((function(t){return new Map(t.set(O,Object(u.a)(Object(u.a)({},q),{},{count:e})))})),V(Object(u.a)(Object(u.a)({},q),{},{count:e}));var a=F.get(q.name);if(a){var s=a.props.count;E((function(e){return new Map(e.set(q.name,c(+s+ +x)))}))}else E((function(e){return new Map([[q.name,c(x)]].concat(Object(o.a)(e)))}));y((function(e){return e+q.price*x}))},children:"A\xf1adir"})]}),Object(n.jsxs)("div",{className:"product",children:[Object(n.jsx)("h2",{children:"Producto/s"}),Object(n.jsxs)("div",{className:"container",children:[" Nombre ",Object(n.jsx)("br",{})," ",Object(n.jsx)("p",{className:"value",children:q.name})]}),Object(n.jsxs)("div",{className:"container",children:[" Precio ",Object(n.jsx)("br",{})," ",Object(n.jsx)("p",{className:"value",children:q.price+(q.price?" Bs.":"")})]})]}),Object(n.jsxs)("div",{className:"history",children:[Object(n.jsx)("h2",{children:"Historial"}),Object(n.jsx)("div",{className:"view",children:Object(o.a)(F.values())})]})]}),Object(n.jsxs)("section",{className:"pay",children:[Object(n.jsx)(m,{placeholder:"Cedula",className:"card",value:P,onChange:function(e){var t=e.target.value;return!/\D/.test(t)&&(B(t),!0)}}),Object(n.jsx)(m,{placeholder:"Nombre",className:"name",value:T,onChange:function(e){var t=e.target.value;return H(t),!0}}),Object(n.jsx)("button",{className:"facture",onClick:function(){if(!P||!T)return!1;if(!Object(o.a)(F)[0])return!1;Z(!0);var e=new Date,t="".concat(e.getFullYear())+"/".concat(e.getMonth())+"/".concat(e.getDate())+" ".concat("Hora: "+e.getHours())+"".concat(":"+e.getMinutes())+"".concat(":"+e.getSeconds());te.current=ee(t)},children:"Facturar"}),Object(n.jsxs)("div",{className:"total",children:[Object(n.jsxs)("h2",{className:"title",children:["Sub Total",Object(n.jsx)("br",{}),w.toFixed(2)," Bs."]}),Object(n.jsxs)("h2",{className:"title",children:["Total (+IVA 16%)",Object(n.jsx)("br",{}),(w+16*w/100).toFixed(2)," Bs."]})]})]})]})};c(23);function y(e){var t=Object(j.a)(e.bill,2),c=t[0],a=t[1],r=e.printHandler,s=a.list,i=a.total,l=a.userName,b=a.userCard,d=a.time,O=Object(o.a)(s).map((function(e){var t=Object(j.a)(e,2),c=t[0],a=t[1].props,r=a.product,s=a.count,i=r.price*s,o=(i+16*i/100).toFixed(2);return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("p",{children:[r.code," - ",c," ",r.price," (",s,")"]}),Object(n.jsx)("p",{children:Object(n.jsxs)("strong",{children:[o," Bs."]})})]},r.name)}));return Object(n.jsxs)("div",{className:"bill",children:[Object(n.jsx)("div",{className:"print",onClick:function(){return r(Object(u.a)(Object(u.a)({},a),{},{billHistoryCount:c}))}}),Object(n.jsxs)("div",{className:"top",children:[Object(n.jsxs)("p",{className:"date",children:["Fecha ",d]}),Object(n.jsxs)("p",{children:["Nombre: ",l," ----- Cedula: ",b]})]}),Object(n.jsxs)("div",{className:"middle",children:[Object(n.jsxs)("h3",{children:["Factura: ",c]}),O]}),Object(n.jsxs)("div",{className:"bottom",children:[Object(n.jsx)("p",{children:"Total:"}),Object(n.jsx)("p",{children:Object(n.jsx)("strong",{children:(i+16*i/100).toFixed(2)})})]})]},c)}var M=function(e){var t=e.zone,c=e.bills,r=Object(a.useState)({}),s=Object(j.a)(r,2),i=s[0],l=s[1],b=Object(a.useState)(!1),d=Object(j.a)(b,2),O=d[0],p=d[1],f=Object(a.useState)(""),h=Object(j.a)(f,2),x=h[0],v=h[1],N=Object(a.useState)(c),g=Object(j.a)(N,2),S=g[0],w=g[1];function M(e){l(e),p(!0)}return Object(a.useEffect)((function(){w(c)}),[c]),3===t&&Object(n.jsxs)("div",{className:"bills-manager",children:[Object(n.jsx)(m,{placeholder:"Buscar Por C\xf3digo...",value:x,onChange:function(e){var t=e.target.value;if(!/\D/.test(t)){if(""===t)w(c);else{var n=Object(o.a)(c).filter((function(e){var c=Object(j.a)(e,1)[0];return new RegExp(t).test(c)})).map((function(e){var c=Object(j.a)(e,2),n=c[0],a=c[1];return[(n+"").match(t),[n,a]]})).sort((function(e,t){var c=Object(j.a)(e,1)[0];return Object(j.a)(t,1)[0][0].length-c[0].length})).sort((function(e,t){return Object(j.a)(e,1)[0].indexA-Object(j.a)(t,1)[0].indexB})).map((function(e){return Object(j.a)(e,2)[1]}));w(new Map(n))}return v(t),!0}},className:"search"}),Object(n.jsxs)("div",{className:"bills-manager-container",children:[O&&Object(n.jsx)(C,Object(u.a)({print:O,setPrint:p},i)),Object(o.a)(S).map((function(e){return Object(n.jsx)(y,{bill:e,printHandler:M},e[0])}))]})]})},k=(c(24),new Map([["admin","admin"]]));var F=function(e){var t=e.zone,c=e.setZone,r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)(""),l=Object(j.a)(u,2),b=l[0],d=l[1];function O(){var e=k.get(i);console.log(b),e&&e===b.trim()&&(o(""),d(""),c(1))}return 0===t&&Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"login",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:"Iniciar Sesi\xf3n"}),Object(n.jsxs)("div",{className:"input",onKeyDown:function(e){"Enter"===e.key&&O()},children:[Object(n.jsx)("input",{type:"text",placeholder:"Nombre de Usuario",value:i,onChange:function(e){var t=e.target.value;o(t)}}),Object(n.jsx)("input",{className:"password",type:"password",placeholder:"Contrase\xf1a",value:b,onChange:function(e){var t=e.target.value;d(t)}}),Object(n.jsx)("button",{onClick:O,children:"Ingresar"})]})]})})})},E=new Map([["10",{name:"Cafe",price:100,count:12}],["11",{name:"Arroz",price:300,count:2}],["13",{name:"Manzana",price:50,count:3}]].map((function(e){var t=Object(j.a)(e,2),c=t[0],n=t[1];return[c,Object(u.a)(Object(u.a)({},n),{},{price:(+n.price).toFixed(2)})]}))),I=function(){var e=JSON.parse(window.localStorage.getItem("products")),t=JSON.parse(window.localStorage.getItem("bills")),c=JSON.parse(window.localStorage.getItem("billHistoryCount")),r=Object(a.useState)(0),s=Object(j.a)(r,2),i=s[0],u=s[1],b=Object(a.useState)(new Map(e)||E),d=Object(j.a)(b,2),O=d[0],p=d[1],f=Object(a.useState)(new Map(t)||new Map),h=Object(j.a)(f,2),x=h[0],m=h[1],v=Object(a.useState)(c||1),g=Object(j.a)(v,2),C=g[0],S=g[1];return Object(a.useEffect)((function(){window.localStorage.setItem("bills",JSON.stringify(Object(o.a)(x)))}),[x]),Object(a.useEffect)((function(){window.localStorage.setItem("products",JSON.stringify(Object(o.a)(O)))}),[O]),Object(a.useEffect)((function(){window.localStorage.setItem("billHistoryCount",JSON.stringify(C))}),[C]),Object(n.jsxs)(n.Fragment,{children:[0!==i&&Object(n.jsx)(l,{setZone:u}),Object(n.jsx)(F,{zone:i,setZone:u}),Object(n.jsx)(N,{products:O,setProducts:p,zone:i}),Object(n.jsx)(w,{zone:i,products:O,setProducts:p,setBills:m,setBillsHistoryCount:S,billHistoryCount:C}),Object(n.jsx)(M,{zone:i,bills:x})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),A()}],[[25,1,2]]]);
//# sourceMappingURL=main.a73d9457.chunk.js.map