(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t(47)},47:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(17),u=t.n(c),o=t(1),i=t(9),l=t(5),m=t(8),f=t(2),d=t(14),s=(t(33),t(6)),b=(t(36),t(4));t.n(b).a;function p(){var e=Object(o.a)(["\n    margin-bottom: 1rem;\n"]);return p=function(){return e},e}var v=f.b.div(p()),g=(t(39),t(3)),E=t(26),O=t(20),y=t(21),j=t(23),h=t(22),w=t(27),C=(t(43),t(45),function(e){var n=e.context;return function(e){var t=a.a.createFactory(e);return function(e){function r(){return Object(O.a)(this,r),Object(j.a)(this,Object(h.a)(r).apply(this,arguments))}return Object(w.a)(r,e),Object(y.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement(n.Consumer,null,function(n){return t(Object(i.a)({},n,e.props))})}}]),r}(a.a.Component)}});function k(){var e=Object(o.a)(["\n    display: table-cell;\n    padding-bottom: ",";\n\n    // No padding for the last row.\n    ",":last-child > & {\n        padding-bottom: 0;\n    }\n\n    & + & {\n        padding-left: ",";\n    }\n"]);return k=function(){return e},e}function F(){var e=Object(o.a)(["\n    display: table-row;\n"]);return F=function(){return e},e}function R(){var e=Object(o.a)(["\n    display: table;\n"]);return R=function(){return e},e}var S=a.a.createContext(),x=f.b.div(R()),q=f.b.div(F()),A=C({context:S})(Object(f.b)(function(e){e.spacing;var n=Object(E.a)(e,["spacing"]);return a.a.createElement("div",n)})(k(),function(e){return Array.isArray(e.spacing)?e.spacing[1]:0},q,function(e){return Array.isArray(e.spacing)?e.spacing[0]:0})),B=function(e){var n=e.spacing,t=e.children;return n=function(e){var n=e="string"===typeof e?e.split(" ").reduce(function(e,n){return n&&(e=e.concat(n.trim())),e},[]):Object(m.a)(e),t=Object(l.a)(n,2),r=t[0],a=t[1];return e=[r=r||0,a=void 0!==a&&null!==a?a||0:r].map(function(e){return Number(e)>0?"".concat(e,"px"):e})}(n),a.a.createElement(S.Provider,{value:{spacing:n}},"function"===typeof t?t({FormContainer:x,FormRow:q,FormCol:A}):t)};function J(){var e=Object(o.a)(["\n    display: inline-block;\n    margin-bottom: .5rem;\n\n    ","\n"]);return J=function(){return e},e}function N(){var e=Object(o.a)(["\n    &::after {\n        content: '*';\n        color: #db3d44;\n    }\n"]);return N=function(){return e},e}var z=Object(f.a)(N()),H=f.b.label(J(),function(e){return e.required&&z});function I(){var e=Object(o.a)(["\n    background-color: #f7f8f9;\n    padding: .75rem 1rem;\n"]);return I=function(){return e},e}function M(){var e=Object(o.a)(["\n    color: #db3d44;\n"]);return M=function(){return e},e}var P=function(e){var n=e.fieldCount,t=void 0===n?0:n,c=e.onSubmit,u=Object(r.useRef)(0),o=a.a.useRef({}),f=a.a.useRef(null),p=Object(m.a)(Array(t).keys()).map(function(e){return e+1}),E=a.a.useCallback(function(){c(o.current)});return a.a.createElement(g.Container,{fluid:!0,style:{padding:"1rem 1.5rem"}},a.a.createElement(d.b,{onSubmit:E,render:function(e){var n=e.form;return a.a.createElement(g.Row,null,a.a.createElement(g.Col,{style:{paddingRight:"1rem"}},a.a.createElement("h2",null,"React Final Form Performance Optimization"),a.a.createElement("p",null,"Click ",a.a.createElement("strong",null,"Reset")," and input something for the first 10 text fields (marked as required). Your goal is to minimze the form render count without exceeding 2 renders for a successful form submission. So each time you make change to a text field, it will not rerender the whole form on every change."),a.a.createElement(v,null,a.a.createElement("strong",null,"Form fields:")," ",t),a.a.createElement(v,null,a.a.createElement("strong",null,"Form render count:")," ",++u.current),a.a.createElement(v,null,a.a.createElement(s.Button,{btnStyle:"primary",onClick:E},"Submit"),a.a.createElement(s.Button,{btnStyle:"default",onClick:function(){n.reset(),u.current=0}},"Reset")),a.a.createElement(L,null,a.a.createElement("span",{ref:f}))),a.a.createElement(g.Col,{style:{maxHeight:"calc(100vh - 2rem)",overflowY:"auto"}},a.a.createElement(B,{spacing:[".75rem",".5rem"]},function(e){var n=e.FormContainer,t=e.FormRow,c=e.FormCol;return a.a.createElement(n,{style:{width:"100%"}},p.map(function(e,n){var u=n<10,m=u?"Required field":"Optional field";return a.a.createElement(d.a,{name:"field".concat(e),key:e},function(n){var d=n.input,s=n.meta,p=Object(r.useState)(d.value),v=Object(l.a)(p,2),g=v[0],E=v[1],O=Object(r.useState)(s.touched),y=Object(l.a)(O,2),j=y[0],h=y[1],w=Object(r.useMemo)(function(){return u?function(e){return e?void 0:"Required field."}(g):null},[g,j]);return Object(r.useEffect)(function(){var e=Object(i.a)({},o.current);for(var n in e[d.name]=g,e)""===e[n]&&delete e[n];o.current=e,f.current.innerHTML=JSON.stringify(e,0,2)},[g]),a.a.createElement(t,null,a.a.createElement(c,{style:{width:"1%",whiteSpace:"nowrap"}},a.a.createElement(H,{required:u},"Field ",e)),a.a.createElement(c,null,a.a.createElement(b.Input,{type:"text",name:d.name,onBlur:function(){return h(!0)},onChange:function(e){return E(e.target.value)},value:g,placeholder:m}),w&&j&&a.a.createElement(Y,null,w)))})}))})))}}))},Y=f.b.div(M()),L=f.b.pre(I()),T=function(e){window.alert(JSON.stringify(e,0,2))};u.a.render(a.a.createElement(function(){return a.a.createElement(P,{fieldCount:1e3,onSubmit:T})},null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e8455846.chunk.js.map