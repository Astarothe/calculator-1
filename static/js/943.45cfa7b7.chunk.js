"use strict";(self.webpackChunkcalculator=self.webpackChunkcalculator||[]).push([[943],{912:function(n,e,t){t.d(e,{X:function(){return i}});var r,o=t(168),i=t(444).ZP.div(r||(r=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: ","px;\n  margin: 0 auto;\n"])),(function(n){return n.theme.spaces[4]}))},943:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r=t(671),o=t(144),i=t(340),c=t(716),u=t(791),s=t(7),l=t.n(s),a=t(452),f=t(912);var p=t.p+"static/media/ArrowDown.951b00330c634b8f4e7f7eb18ab3d550.svg";var d,h,m,b,y,g,v=t.p+"static/media/ArrowUp.bc055e2aaff7a6ebc7179bc1e566c250.svg",w=t(899),x=t(168),Z=t(444),k=Z.ZP.div(d||(d=(0,x.Z)(["\n  position: relative;\n  width: 25%;\n  user-select: none;\n"]))),j=Z.ZP.button(h||(h=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: .6em 1.4em .5em .8em;\n  justify-content: space-between;\n  position: relative;\n  border: 1px solid ",";\n  border-radius: ","px;\n  background-color: ",";\n  line-height: 1.3;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ","\n  }\n  &:active {\n    background-color: ","\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.spaces[1]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.notActive}),(function(n){return n.theme.colors.white})),O=Z.ZP.div(m||(m=(0,x.Z)(["\n  margin-right: ","px;\n  font-weight: 300;\n"])),(function(n){return n.theme.spaces[4]})),P=Z.ZP.div(b||(b=(0,x.Z)(["\n  position: absolute;\n  width: 100%;\n  border: 1px solid ",";\n  border-top: none;\n  border-bottom-left-radius: ","px;\n  border-bottom-right-radius: ","px;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spaces[1]}),(function(n){return n.theme.spaces[1]})),C=Z.ZP.button(y||(y=(0,x.Z)(["\n  overflow: hidden;\n  width: 100%;\n  cursor: pointer;\n  padding: .6em 1.4em .5em .8em;\n  text-align: left;\n  &:hover {\n    background-color: ",";\n    color: ",";\n    & > span > svg > path {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white})),T=Z.ZP.label(g||(g=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: ",";\n  padding-top: ","px;\n"])),(function(n){return n.theme.title}),(function(n){return n.theme.spaces[1]})),R=t(184),S=function(n){(0,i.Z)(t,n);var e=(0,c.Z)(t);function t(n){var o;return(0,r.Z)(this,t),(o=e.call(this,n)).handleToggleList=function(){o.setState((function(n){return{isListOpen:!n.isListOpen}}))},o.handleClick=function(n){var e=n.content,t=n.id,r=n.action;o.props.dispatch(r()),o.setState({isListOpen:!1,title:e,themes:w.VO.filter((function(n){return n.id!==t}))})},o.state={isListOpen:!1,title:w.VO[0].content,themes:w.VO},o}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){this.setState((function(n){return{themes:n.themes.filter((function(n){return 0!==n.id}))}}))}},{key:"render",value:function(){var n=this,e=this.state,t=e.isListOpen,r=e.title,o=e.themes;return(0,R.jsxs)(k,{children:[(0,R.jsx)(T,{children:"Switch Theme"}),(0,R.jsxs)(j,{onClick:this.handleToggleList,children:[(0,R.jsx)(O,{children:r}),t?(0,R.jsx)("img",{src:v,alt:"ArrowUp"}):(0,R.jsx)("img",{src:p,alt:"ArrowDown"})]}),t&&(0,R.jsx)(P,{role:"list",children:o.map((function(e){return(0,R.jsx)(C,{onClick:function(){return n.handleClick(e)},children:e.content},e.id)}))})]})}}]),t}(u.PureComponent);k.propTypes={children:l().array.isRequired},T.propTypes={children:l().string},j.propTypes={onClick:l().func.isRequired,children:l().array.isRequired},O.propTypes={children:l().string},P.propTypes={role:l().oneOf(["list"]),children:l().array},C.propTypes={onClick:l().func.isRequired,children:l().string};var A,_,L=(0,a.$j)()(S),q=Z.ZP.button(A||(A=(0,x.Z)(["\n  display: block;\n  line-height: 1.3;\n  padding: .6em 1.4em .5em .8em;\n  width: 25%;\n  max-width: 25%;\n  margin: ","px 0 0;\n  border: 1px solid ",";\n  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);\n  border-radius: .25em;\n  text-align: left;\n  &:hover,\n  &:focus {\n    background-color: ","\n  }\n  &:active {\n    background-color: ","\n  }\n"])),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.toggleBorder}),(function(n){return n.theme.colors.notActive}),(function(n){return n.theme.colors.white})),D=Z.ZP.h1(_||(_=(0,x.Z)(["\n  font-weight: normal;\n  font-size: 3em;\n  color: ","\n"])),(function(n){return n.theme.title})),B=t(453),E=function(n){(0,i.Z)(t,n);var e=(0,c.Z)(t);function t(){var n;(0,r.Z)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=e.call.apply(e,[this].concat(i))).handleClick=function(){n.props.dispatch((0,B.qF)())},n}return(0,o.Z)(t,[{key:"render",value:function(){return(0,R.jsxs)(f.X,{children:[(0,R.jsx)(D,{id:"title",children:"Settings"}),(0,R.jsx)(L,{}),(0,R.jsx)(q,{onClick:this.handleClick,children:"Clear All History"})]})}}]),t}(u.PureComponent);D.propTypes={id:l().string},q.propTypes={onClick:l().func.isRequired};var V=(0,a.$j)()(E)},716:function(n,e,t){function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}function o(n){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function i(n,e){if(e&&("object"===o(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function c(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=r(n);if(e){var c=r(this).constructor;t=Reflect.construct(o,arguments,c)}else t=o.apply(this,arguments);return i(this,t)}}t.d(e,{Z:function(){return c}})},340:function(n,e,t){function r(n,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},r(n,e)}function o(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&r(n,e)}t.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=943.45cfa7b7.chunk.js.map