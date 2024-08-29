(this["webpackJsonparcherswap-frontend"]=this["webpackJsonparcherswap-frontend"]||[]).push([[1],{1274:function(n,e,t){"use strict";t.d(e,"b",(function(){return d})),t.d(e,"a",(function(){return l}));var r,o,i,c=t(14),u=t(6),a=u.default.div(r||(r=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),d=Object(u.default)(a)(o||(o=Object(c.a)(["\n  width: 100%;\n  align-items: center;\n"]))),l=u.default.div(i||(i=Object(c.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",";\n  justify-items: ",";\n"])),(function(n){var e=n.gap;return("sm"===e?"8px":"md"===e&&"12px")||"lg"===e&&"24px"||e}),(function(n){var e=n.justify;return e&&e}));e.c=a},1275:function(n,e,t){"use strict";t.d(e,"b",(function(){return f})),t.d(e,"d",(function(){return b})),t.d(e,"a",(function(){return j})),t.d(e,"c",(function(){return v}));var r,o,i,c,u,a=t(14),d=t(6),l=t(1701),s=Object(d.default)(l.Box)(r||(r=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ",";\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n"])),(function(n){return n.align||"center"}),(function(n){return n.padding}),(function(n){return n.border}),(function(n){return n.borderRadius})),f=Object(d.default)(s)(o||(o=Object(a.a)(["\n  justify-content: space-between;\n"]))),b=d.default.div(i||(i=Object(a.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),j=Object(d.default)(s)(c||(c=Object(a.a)(["\n  flex-wrap: wrap;\n  margin: ",";\n  justify-content: ",";\n\n  & > * {\n    margin: "," !important;\n  }\n"])),(function(n){var e=n.gap;return e&&"-".concat(e)}),(function(n){var e=n.justify;return e&&e}),(function(n){return n.gap})),v=Object(d.default)(s)(u||(u=Object(a.a)(["\n  width: fit-content;\n  margin: ",";\n"])),(function(n){var e=n.gap;return e&&"-".concat(e)}));e.e=s},1278:function(n,e,t){"use strict";var r=t(0),o=t(147),i={translations:[],setTranslations:function(){}},c=Object(r.createContext)(i);e.a=function(){var n=Object(r.useContext)(c).translations;return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===n.length)return t;var i=n.find((function(n){return n.data.stringId===e}));if(i){var c=i.data.text,u=c.includes("%");if(u){var a=c;return Object(o.isEmpty)(r)?t:(Object.keys(r).forEach((function(n){var e=new RegExp("%".concat(n,"%"),"g");a=a.replace(e,r[n])})),a)}return c}return t}}},1280:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"d",(function(){return O})),t.d(e,"b",(function(){return p})),t.d(e,"c",(function(){return m}));var r=t(0),o=t(25),i=t(76),c=t(256),u=t(97);function a(n){return-1!==["string","number"].indexOf(typeof n)}function d(n){return void 0===n||Array.isArray(n)&&n.every((function(n){return a(n)||Array.isArray(n)&&n.every(a)}))}var l={valid:!1,blockNumber:void 0,data:void 0},s={blocksPerFetch:1/0};function f(n,e){var t=Object(i.a)().chainId,c=Object(o.d)((function(n){return n.multicall.callResults})),a=Object(o.c)(),d=Object(r.useMemo)((function(){var e,t,r;return JSON.stringify(null!==(e=null===n||void 0===n||null===(t=n.filter((function(n){return Boolean(n)})))||void 0===t||null===(r=t.map(u.f))||void 0===r?void 0:r.sort())&&void 0!==e?e:[])}),[n]);return Object(r.useEffect)((function(){var n=JSON.parse(d);if(t&&0!==n.length){var r=n.map((function(n){return Object(u.d)(n)}));return a(Object(u.a)({chainId:t,calls:r,options:e})),function(){a(Object(u.e)({chainId:t,calls:r,options:e}))}}}),[t,a,e,d]),Object(r.useMemo)((function(){return n.map((function(n){var e;if(!t||!n)return l;var r=null===(e=c[t])||void 0===e?void 0:e[Object(u.f)(n)];return{valid:!0,data:(null===r||void 0===r?void 0:r.data)&&"0x"!==(null===r||void 0===r?void 0:r.data)?r.data:null,blockNumber:null===r||void 0===r?void 0:r.blockNumber}}))}),[c,n,t])}var b={valid:!1,result:void 0,loading:!1,syncing:!1,error:!1},j={valid:!0,result:void 0,loading:!0,syncing:!0,error:!1};function v(n,e,t,r){if(!n)return b;var o=n.valid,i=n.data,c=n.blockNumber;if(!o)return b;if(o&&!c)return j;if(!e||!t||!r)return j;var u,a=i&&i.length>2,d=(null!==c&&void 0!==c?c:0)<r;if(a&&i)try{u=e.decodeFunctionResult(t,i)}catch(l){return console.error("Result data parsing failed",t,i),{valid:!0,loading:!1,error:!0,syncing:d,result:u}}return{valid:!0,loading:!1,syncing:d,result:u,error:!a}}function O(n,e,t,o){var i=Object(r.useMemo)((function(){var t;return null===n||void 0===n||null===(t=n.interface)||void 0===t?void 0:t.getFunction(e)}),[n,e]),u=f(Object(r.useMemo)((function(){return n&&i&&t&&t.length>0?t.map((function(e){return{address:n.address,callData:n.interface.encodeFunctionData(i,e)}})):[]}),[t,n,i]),o),a=Object(c.b)();return Object(r.useMemo)((function(){return u.map((function(e){return v(e,null===n||void 0===n?void 0:n.interface,i,a)}))}),[i,n,u,a])}function p(n,e,t,o,i){var u=Object(r.useMemo)((function(){return e.getFunction(t)}),[e,t]),a=Object(r.useMemo)((function(){return u&&d(o)?e.encodeFunctionData(u,o):void 0}),[o,e,u]),l=f(Object(r.useMemo)((function(){return u&&n&&n.length>0&&a?n.map((function(n){return n&&a?{address:n,callData:a}:void 0})):[]}),[n,a,u]),i),s=Object(c.b)();return Object(r.useMemo)((function(){return l.map((function(n){return v(n,e,u,s)}))}),[u,l,e,s])}function m(n,e,t,o){var i=Object(r.useMemo)((function(){var t;return null===n||void 0===n||null===(t=n.interface)||void 0===t?void 0:t.getFunction(e)}),[n,e]),u=f(Object(r.useMemo)((function(){return n&&i&&d(t)?[{address:n.address,callData:n.interface.encodeFunctionData(i,t)}]:[]}),[n,i,t]),o)[0],a=Object(c.b)();return Object(r.useMemo)((function(){return v(u,null===n||void 0===n?void 0:n.interface,i,a)}),[u,n,i,a])}},1283:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"c",(function(){return j})),t.d(e,"d",(function(){return p})),t.d(e,"b",(function(){return m}));var r=t(15),o=t(385),i=t(26),c=t(0),u=t(1286),a=t(1280),d=t(1288),l=t(421),s=t(76),f=t(37);function b(){var n=Object(s.a)().chainId,e=Object(d.h)(),t=Object(u.d)();return Object(c.useMemo)((function(){return n?e.reduce((function(n,e){return n[e.address]=e,n}),Object(r.a)({},t[n])):{}}),[n,e,t])}function j(n){return!!Object(d.h)().find((function(e){return Object(i.currencyEquals)(n,e)}))}var v=/^0x[a-fA-F0-9]{64}$/;function O(n,e,t){return n&&n.length>0?n:e&&v.test(e)?Object(o.b)(e):t}function p(n){var e=Object(s.a)().chainId,t=b(),r=Object(l.h)(n),o=Object(f.B)(r||void 0,!1),u=Object(f.g)(r||void 0,!1),d=r?t[r]:void 0,j=Object(a.c)(d?void 0:o,"name",void 0,a.a),v=Object(a.c)(d?void 0:u,"name",void 0,a.a),p=Object(a.c)(d?void 0:o,"symbol",void 0,a.a),m=Object(a.c)(d?void 0:u,"symbol",void 0,a.a),h=Object(a.c)(d?void 0:o,"decimals",void 0,a.a);return Object(c.useMemo)((function(){if(d)return d;if(e&&r){if(h.loading||p.loading||j.loading)return null;var n,t,o,c;if(h.result)return new i.Token(e,r,h.result[0],O(null===(n=p.result)||void 0===n?void 0:n[0],null===(t=m.result)||void 0===t?void 0:t[0],"UNKNOWN"),O(null===(o=j.result)||void 0===o?void 0:o[0],null===(c=v.result)||void 0===c?void 0:c[0],"Unknown Token"))}}),[r,e,h.loading,h.result,p.loading,p.result,m.result,d,j.loading,j.result,v.result])}function m(n){var e="CORE"===(null===n||void 0===n?void 0:n.toUpperCase()),t=p(e?void 0:n);return e?i.ETHER:t}},1285:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var r,o=t(18),i=t(14),c=t(0),u=t(6),a=t(1372),d=t(1),l=u.default.div(r||(r=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  // background-color: ",";\n  color: ",";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"])),(function(n){return n.theme.colors.invertedContrast}),(function(n){return n.theme.colors.textSubtle}));function s(n){var e=n.text,t=Object(c.useState)(!1),r=Object(o.a)(t,2),i=r[0],u=r[1],s=Object(c.useCallback)((function(){return u(!0)}),[u]),f=Object(c.useCallback)((function(){return u(!1)}),[u]);return Object(d.jsx)("span",{style:{marginLeft:4},children:Object(d.jsx)(a.b,{text:e,show:i,children:Object(d.jsx)(l,{onClick:s,onMouseEnter:s,onMouseLeave:f,children:Object(d.jsx)("img",{src:"/images/question.svg",alt:"help"})})})})}},1286:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"c",(function(){return p})),t.d(e,"d",(function(){return m})),t.d(e,"b",(function(){return h}));var r,o=t(15),i=t(21),c=t(8),u=t(10),a=t(12),d=t(13),l=t(26),s=t(0),f=t(25),b=function(n){Object(a.a)(t,n);var e=Object(d.a)(t);function t(n,r){var o;return Object(c.a)(this,t),(o=e.call(this,n.chainId,n.address,n.decimals,n.symbol,n.name)).tokenInfo=void 0,o.tags=void 0,o.tokenInfo=n,o.tags=r,o}return Object(u.a)(t,[{key:"logoURI",get:function(){return this.tokenInfo.logoURI}}]),t}(l.Token),j=(r={},Object(i.a)(r,l.ChainId.MAINNET,{}),Object(i.a)(r,l.ChainId.BSCTESTNET,{}),r),v="undefined"!==typeof WeakMap?new WeakMap:null;function O(n){var e=Object(f.d)((function(n){return n.lists.byUrl}));return Object(s.useMemo)((function(){var t;if(!n)return j;var r=null===(t=e[n])||void 0===t?void 0:t.current;if(!r)return j;try{return function(n){var e=null===v||void 0===v?void 0:v.get(n);if(e)return e;var t=n.tokens.reduce((function(e,t){var r,c,u,a=null!==(r=null===(c=t.tags)||void 0===c||null===(u=c.map((function(e){var t;if(null===(t=n.tags)||void 0===t?void 0:t[e])return Object(o.a)(Object(o.a)({},n.tags[e]),{},{id:e})})))||void 0===u?void 0:u.filter((function(n){return Boolean(n)})))&&void 0!==r?r:[],d=new b(t,a);if(void 0!==e[d.chainId][d.address])throw Error("Duplicate tokens.");return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},d.chainId,Object(o.a)(Object(o.a)({},e[d.chainId]),{},Object(i.a)({},d.address,d))))}),Object(o.a)({},j));return null===v||void 0===v||v.set(n,t),t}(r)}catch(c){return console.error("Could not show token list due to error",c),j}}),[e,n])}function p(){return Object(f.d)((function(n){return n.lists.selectedListUrl}))}function m(){return O(p())}function h(){var n,e,t=p(),r=Object(f.d)((function(n){return n.lists.byUrl})),o=t?r[t]:void 0;return{current:null!==(n=null===o||void 0===o?void 0:o.current)&&void 0!==n?n:null,pending:null!==(e=null===o||void 0===o?void 0:o.pendingUpdate)&&void 0!==e?e:null,loading:null!==(null===o||void 0===o?void 0:o.loadingRequestId)}}},1288:function(n,e,t){"use strict";t.d(e,"d",(function(){return v})),t.d(e,"c",(function(){return O})),t.d(e,"j",(function(){return p})),t.d(e,"i",(function(){return m})),t.d(e,"b",(function(){return h})),t.d(e,"f",(function(){return g})),t.d(e,"h",(function(){return x})),t.d(e,"e",(function(){return y})),t.d(e,"a",(function(){return w})),t.d(e,"g",(function(){return M}));var r=t(18),o=t(26),i=t(1385),c=t.n(i),u=t(0),a=t(25),d=t(103),l=t(76),s=t(1283),f=t(119);t(614);function b(n){return{chainId:n.chainId,address:n.address,decimals:n.decimals,symbol:n.symbol,name:n.name}}function j(n){return new o.Token(n.chainId,n.address,n.decimals,n.symbol,n.name)}function v(){return Object(a.d)((function(n){return n.user.userExpertMode}))}function O(){var n=Object(a.c)(),e=v(),t=Object(u.useCallback)((function(){n(Object(f.j)({userExpertMode:!e}))}),[e,n]);return[e,t]}function p(){var n=Object(a.c)();return[Object(a.d)((function(n){return n.user.userSlippageTolerance})),Object(u.useCallback)((function(e){n(Object(f.k)({userSlippageTolerance:e}))}),[n])]}function m(){var n=Object(a.c)();return[Object(a.d)((function(n){return n.user.userDeadline})),Object(u.useCallback)((function(e){n(Object(f.i)({userDeadline:e}))}),[n])]}function h(){var n=Object(a.c)();return Object(u.useCallback)((function(e){n(Object(f.b)({serializedToken:b(e)}))}),[n])}function g(){var n=Object(a.c)();return Object(u.useCallback)((function(e,t){n(Object(f.e)({chainId:e,address:t}))}),[n])}function x(){var n=Object(l.a)().chainId,e=Object(a.d)((function(n){return n.user.tokens}));return Object(u.useMemo)((function(){var t;return n?Object.values(null!==(t=e[n])&&void 0!==t?t:{}).map(j):[]}),[e,n])}function k(n){return{token0:b(n.token0),token1:b(n.token1)}}function y(){var n=Object(a.c)();return Object(u.useCallback)((function(e){n(Object(f.a)({serializedPair:k(e)}))}),[n])}function w(n){var e=Object(r.a)(n,2),t=e[0],i=e[1];return new o.Token(t.chainId,o.Pair.getAddress(t,i),18,"Archerswap LPs","Archer-LP")}function M(){var n=Object(l.a)().chainId,e=Object(s.a)(),t=Object(u.useMemo)((function(){var e;return n&&null!==(e=d.n[n])&&void 0!==e?e:[]}),[n]),o=Object(u.useMemo)((function(){return n?c()(Object.keys(e),(function(t){var r,o=e[t];return(null!==(r=d.e[n])&&void 0!==r?r:[]).map((function(n){return n.address===o.address?null:[n,o]})).filter((function(n){return null!==n}))})):[]}),[e,n]),i=Object(a.d)((function(n){return n.user.pairs})),f=Object(u.useMemo)((function(){if(!n||!i)return[];var e=i[n];return e?Object.keys(e).map((function(n){return[j(e[n].token0),j(e[n].token1)]})):[]}),[i,n]),b=Object(u.useMemo)((function(){return f.concat(o).concat(t)}),[o,t,f]);return Object(u.useMemo)((function(){var n=b.reduce((function(n,e){var t=Object(r.a)(e,2),o=t[0],i=t[1],c=o.sortsBefore(i),u=c?"".concat(o.address,":").concat(i.address):"".concat(i.address,":").concat(o.address);return n[u]||(n[u]=c?[o,i]:[i,o]),n}),{});return Object.keys(n).map((function(e){return n[e]}))}),[b])}},1307:function(n,e,t){"use strict";t.d(e,"i",(function(){return x})),t.d(e,"a",(function(){return k})),t.d(e,"e",(function(){return y})),t.d(e,"b",(function(){return w})),t.d(e,"d",(function(){return M})),t.d(e,"f",(function(){return C})),t.d(e,"c",(function(){return I})),t.d(e,"g",(function(){return S})),t.d(e,"h",(function(){return T}));var r,o,i,c,u,a,d,l,s,f,b,j=t(14),v=t(1295),O=(t(0),t(1951)),p=t(7),m=t(6),h=t(1274),g=t(1),x=m.default.div(r||(r=Object(j.a)(["\n  position: relative;\n"]))),k=m.default.div(o||(o=Object(j.a)(["\n  padding: 2px;\n\n  ","\n"])),(function(n){return n.clickable?Object(m.css)(i||(i=Object(j.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))):null})),y=m.default.div(c||(c=Object(j.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.tertiary})),w=m.default.div(u||(u=Object(j.a)(["\n  margin-top: 1rem;\n"]))),M=Object(m.default)(p.ib)(a||(a=Object(j.a)(["\n  color: ",";\n"])),(function(n){var e=n.theme,t=n.severity;return 3===t||4===t?e.colors.failure:2===t?e.colors.binance:1===t?e.colors.text:e.colors.success})),C=m.default.button(d||(d=Object(j.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ",";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",";\n  }\n  :focus {\n    background-color: ",";\n    outline: none;\n  }\n"])),(function(n){return n.theme.colors.invertedContrast}),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.colors.tertiary}),(function(n){return n.theme.colors.tertiary})),I=m.default.span(l||(l=Object(j.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]))),E=m.default.div(s||(s=Object(j.a)(["\n  background-color: ",";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])),(function(n){var e=n.theme;return Object(v.b)(.9,e.colors.failure)}),(function(n){return n.theme.colors.failure})),z=m.default.div(f||(f=Object(j.a)(["\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"])),(function(n){var e=n.theme;return Object(v.b)(.9,e.colors.failure)}));function S(n){var e=n.error;return Object(g.jsxs)(E,{children:[Object(g.jsx)(z,{children:Object(g.jsx)(O.a,{size:24})}),Object(g.jsx)("p",{children:e})]})}var T=Object(m.default)(h.a)(b||(b=Object(j.a)(["\n  background-color: ",";\n  color: ",";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"])),(function(n){var e=n.theme;return Object(v.b)(.9,e.colors.primary)}),(function(n){return n.theme.colors.primary}))},1325:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var r,o,i=t(15),c=t(1276),u=t(14),a=(t(0),t(6)),d=t(1),l=Object(a.keyframes)(r||(r=Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),s=a.default.svg(o||(o=Object(u.a)(["\n  animation: 2s "," linear infinite;\n  height: ",";\n  width: ",";\n  path {\n    stroke: ",";\n  }\n"])),l,(function(n){return n.size}),(function(n){return n.size}),(function(n){var e=n.stroke,t=n.theme;return null!==e&&void 0!==e?e:t.colors.primary}));function f(n){var e=n.size,t=void 0===e?"16px":e,r=n.stroke,o=Object(c.a)(n,["size","stroke"]);return Object(d.jsx)(s,Object(i.a)(Object(i.a)({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:t,stroke:r},o),{},{children:Object(d.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}))}},1344:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var r,o=t(14),i=(t(0),t(6)),c=t(7),u=t(1),a=Object(i.default)(c.p)(r||(r=Object(o.a)(["\n  position: relative;\n  max-width: 436px;\n  width: 100%;\n  z-index: 5;\n"])));function d(n){var e=n.children;return Object(u.jsx)(a,{children:e})}},1372:function(n,e,t){"use strict";t.d(e,"b",(function(){return y})),t.d(e,"a",(function(){return w}));var r,o,i,c,u=t(18),a=t(15),d=t(1276),l=t(14),s=t(0),f=t(6),b=t(1295),j=t(1980),v=t(1547),O=t(613),p=t(1),m=f.default.div(r||(r=Object(l.a)(["\n  z-index: 9999;\n\n  visibility: ",";\n  opacity: ",";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ",";\n  border: 1px solid ",";\n  box-shadow: 0 4px 8px 0 ",";\n  color: ",";\n  border-radius: 8px;\n"])),(function(n){return n.show?"visible":"hidden"}),(function(n){return n.show?1:0}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.tertiary}),Object(b.b)(.9,"#2F80ED"),(function(n){return n.theme.colors.textSubtle})),h=f.default.div(o||(o=Object(l.a)(["\n  display: inline-block;\n"]))),g=f.default.div(i||(i=Object(l.a)(["\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ",";\n    transform: rotate(45deg);\n    background: ",";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n"])),(function(n){return n.theme.colors.tertiary}),(function(n){return n.theme.colors.background}));function x(n){var e,t,r=n.content,o=n.show,i=n.children,c=n.placement,d=void 0===c?"auto":c,l=Object(s.useState)(null),f=Object(u.a)(l,2),b=f[0],x=f[1],k=Object(s.useState)(null),y=Object(u.a)(k,2),w=y[0],M=y[1],C=Object(s.useState)(null),I=Object(u.a)(C,2),E=I[0],z=I[1],S=Object(j.a)(b,w,{placement:d,strategy:"fixed",modifiers:[{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{element:E}}]}),T=S.styles,N=S.update,F=S.attributes,D=Object(s.useCallback)((function(){N&&N()}),[N]);return Object(O.a)(D,o?100:null),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{ref:x,children:i}),Object(p.jsx)(v.a,{children:Object(p.jsxs)(m,Object(a.a)(Object(a.a)({show:o,ref:M,style:T.popper},F.popper),{},{children:[r,Object(p.jsx)(g,Object(a.a)({className:"arrow-".concat(null!==(e=null===(t=F.popper)||void 0===t?void 0:t["data-popper-placement"])&&void 0!==e?e:""),ref:z,style:T.arrow},F.arrow))]}))})]})}var k=f.default.div(c||(c=Object(l.a)(["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"])));function y(n){var e=n.text,t=Object(d.a)(n,["text"]);return Object(p.jsx)(x,Object(a.a)({content:Object(p.jsx)(k,{children:e})},t))}function w(n){var e=n.children,t=Object(d.a)(n,["children"]),r=Object(s.useState)(!1),o=Object(u.a)(r,2),i=o[0],c=o[1],l=Object(s.useCallback)((function(){return c(!0)}),[c]),f=Object(s.useCallback)((function(){return c(!1)}),[c]);return Object(p.jsx)(y,Object(a.a)(Object(a.a)({},t),{},{show:i,children:Object(p.jsx)("div",{onMouseEnter:l,onMouseLeave:f,children:e})}))}}}]);
//# sourceMappingURL=1.8edb7f17.chunk.js.map