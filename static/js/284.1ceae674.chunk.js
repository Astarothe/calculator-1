"use strict";(self.webpackChunkcalculator=self.webpackChunkcalculator||[]).push([[284],{2590:function(n,e,t){t.d(e,{C:function(){return o}});var r,i=t(168),o=t(6444).ZP.main(r||(r=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 85% 1fr;\n  grid-auto-rows: 1fr 7fr;\n  gap: ","px;\n\n  .history {\n    grid-column: ",";\n    grid-row: ",";\n    border-left: 2px solid ",";\n    padding: ","px;\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    row-gap: ","px;\n    .title {\n      text-align: center;\n    }\n    .expressions {\n      overflow-y: scroll;\n      height: 75vh;\n      display: flex;\n      flex-direction: column;\n      row-gap: ","px;\n\n      ::-webkit-scrollbar {\n        width: ","px;\n        background-color: ",";\n      }\n      ::-webkit-scrollbar-thumb {\n        background-color: ",";\n        border-radius: 9em;\n      }\n    }\n    .expression {\n      font-size: x-large;\n    }\n  }\n\n  .none {\n    display: none;\n  }\n\n  .display {\n    grid-column: ",";\n    border: none;\n    border-bottom: 2px solid ",";\n    padding-right: ","px;\n    font-size: xx-large;\n    outline: none;\n    text-align: right;\n    &::placeholder {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.spaces[3]}),(function(n){return n.isVisible?"2 / 4":""}),(function(n){return n.isVisible?"1 / 3":""}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.title}),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.spaces[1]}),(function(n){return n.theme.spaces[1]}),(function(n){return n.theme.body}),(function(n){return n.theme.colors.grey}),(function(n){return n.isVisible?"":"1 / 4"}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.spaces[4]}),(function(n){return n.theme.colors.black}))},538:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(5671),i=t(3144),o=t(9340),u=t(5716),c=t(2791),s=t(184),l=function(n){(0,o.Z)(t,n);var e=(0,u.Z)(t);function t(n){var i;return(0,r.Z)(this,t),(i=e.call(this,n)).state={error:null,errorInfo:null},i}return(0,i.Z)(t,[{key:"componentDidCatch",value:function(n,e){this.setState({error:n,errorInfo:e})}},{key:"render",value:function(){return this.state.errorInfo?(0,s.jsxs)(c.Fragment,{children:[(0,s.jsx)("h2",{children:"Something went wrong."}),(0,s.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),(0,s.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),t}(c.Component)},2664:function(n,e,t){var r=t(5671),i=t(3144),o=t(9340),u=t(5716),c=t(2791),s=t(3452),l=t(184),a=function(n){(0,o.Z)(t,n);var e=(0,u.Z)(t);function t(){return(0,r.Z)(this,t),e.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var n;return(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)("h2",{className:"title",children:"History"}),(0,l.jsx)("ul",{className:"expressions",children:null===(n=this.props)||void 0===n?void 0:n.expressions.map((function(n,e){return(0,l.jsx)("li",{className:"expression",children:n},e)}))})]})}}]),t}(c.PureComponent);e.Z=(0,s.$j)((function(n){return n.calculate}))(a)},2672:function(n,e,t){t.d(e,{i:function(){return s},z:function(){return c}});var r,i,o=t(168),u=t(6444),c=u.ZP.button(r||(r=(0,o.Z)(["\n  width: ","px;\n  height: ","px;\n  font-size: x-large;\n  border-radius: 0.5em;\n  &:hover,\n  &:focus {\n    background-color: ","\n  }\n  &:active {\n    background-color: ","\n  }\n"])),(function(n){return n.theme.spaces[5]}),(function(n){return n.theme.spaces[5]}),(function(n){return n.theme.colors.notActive}),(function(n){return n.theme.colors.white})),s=u.ZP.div(i||(i=(0,o.Z)(["\n  grid-column: ",";\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-auto-rows: 1fr;\n  justify-items: center;\n  align-items: center;\n  .equal {\n    grid-column: 2 / 5;\n    width: calc(100% - 3 * ","px);\n  }\n"])),(function(n){return n.isVisible?"":"1 / 4"}),(function(n){return n.theme.spaces[5]}))},5912:function(n,e,t){t.d(e,{X:function(){return o}});var r,i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: ","px;\n  margin: 0 auto;\n"])),(function(n){return n.theme.spaces[4]}))},4284:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(2791),i=t(5912),o=t(885),u=t(2007),c=t.n(u),s=t(3452),l=t(7899),a=t(2672),f=t(5233),p=t(184);a.i.propTypes={children:c().array},a.z.propTypes={onClick:c().func.isRequired,children:c().oneOfType([c().string,c().number]).isRequired};var d=function(n){var e=n.inputValue,t=n.inputChange,r=n.isVisible,i=n.toggleVisible,o=(0,s.I0)(),u=function(n){return">"!==n||r?n:"<"};return(0,p.jsx)(a.i,{isVisible:r,children:l.CF.flat().map((function(n,r){return(0,p.jsx)(a.z,{onClick:function(r){return function(n,r){var u=r.target;Number(n)||0===n||"."===n?t(e+=n):("C"===n&&""===e&&(0,f.Ih)("CE",o,e),">"===n&&i(u),(0,f.Ih)(n,o,e),t(""))}(n,r)},className:"="===n?"equal":"",children:u(n)},r)}))})},h=t(2590),y=function(n){var e=n.inputValue,t=n.inputPlaceholder,i=n.inputChange,o=(0,r.useRef)(null);(0,r.useEffect)((function(){o.current&&o.current.focus()}),[]);return(0,p.jsx)("input",{id:"display",ref:o,className:"display",type:"text",value:e,placeholder:t,onChange:function(n){var e=n.target;/[-+/*]/.test(e.value)&&(e.value=""),e.value.includes("=")&&(e.value=""),i(e.value)}})},m=t(2664),b=function(n){var e=n.isVisible;return(0,p.jsx)("div",{className:e?"history":"none",children:e&&(0,p.jsx)(m.Z,{})})};h.C.propTypes={onKeyDown:c().func,children:c().array},y.propTypes={inputValue:c().string.isRequired,inputChange:c().func.isRequired},d.propTypes={inputValue:c().string.isRequired,inputChange:c().func.isRequired};var g=function(){var n=(0,s.I0)(),e=(0,s.v9)((function(n){return n.calculate})),t=(0,r.useState)(!0),i=(0,o.Z)(t,2),u=i[0],c=i[1],l=e.num,a=e.result,m=(0,r.useState)(l),g=(0,o.Z)(m,2),x=g[0],v=g[1],j=function(n){v(n.replace(/^-|[a-z\u0430-\u044f\u0451]|[!@#$^&?|\\,<>{}"'`~:;[\]_()%]|[.]{2}/gi,""))};return(0,p.jsxs)(h.C,{onKeyDown:function(e){var t=e.key;switch(t){case"c":t="C",v("");break;case"C":t="CE",v("");break;case"_":t="\xb1",v("");break;case"Enter":t="=",v("")}(0,f.Ih)(t,n,x)},isVisible:u,children:[(0,p.jsx)(y,{inputValue:x,inputPlaceholder:a,inputChange:j}),(0,p.jsx)(d,{inputValue:x,inputChange:j,isVisible:u,toggleVisible:function(){c((function(n){return!n}))}}),(0,p.jsx)(b,{isVisible:u})]})},x=t(538),v=function(){return(0,p.jsx)(i.X,{children:(0,p.jsx)(x.Z,{children:(0,p.jsx)(g,{})})})}},5716:function(n,e,t){function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}function o(n,e){if(e&&("object"===i(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function u(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,i=r(n);if(e){var u=r(this).constructor;t=Reflect.construct(i,arguments,u)}else t=i.apply(this,arguments);return o(this,t)}}t.d(e,{Z:function(){return u}})},9340:function(n,e,t){function r(n,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},r(n,e)}function i(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&r(n,e)}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=284.1ceae674.chunk.js.map