(()=>{"use strict";var n={n:e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},d:(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(n,e)=>Object.prototype.hasOwnProperty.call(n,e)};const e=require("react/jsx-runtime"),t=require("express");var r=n.n(t);const o=require("fs");var s=n.n(o);const i=require("react-dom/server"),c=require("react");var a=["clock","nanoseconds","milliseconds","microseconds","seconds","hours","minutes","days"],u=["1x","2x","4x","10x","100x"],l=function(n,e){return"seconds"===n?e+"s":"milliseconds"===n?1e3*e+"ms":"microseconds"===n?1e6*e+"μs":"nanoseconds"===n?(1e9*e).toLocaleString()+"ns":"minutes"===n?Math.round(e/60)+"mins":"hours"===n?Math.round(e/3600)+"hrs":"days"===n?Math.round(e/86400)+"days":d(e)},d=function(n){var e=Math.floor(+n/3600),t=Math.floor((+n-3600*e)/60),r=Math.floor(+n-3600*e-60*t);return e<10&&(e="0"+e),t<10&&(t="0"+t),r<10&&(r="0"+r),(e+":"+t+":"+r).split(".")[0]},f=function(){return(f=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},p=function(n){var t=n.format,r=n.seconds,o=n.onClick;return(0,e.jsx)("div",f({className:"Time"},{children:(0,e.jsx)("div",f({className:"Time__text-container"},{children:(0,e.jsx)("h3",f({className:"Time__text",onClick:o},{children:l(t,r)}),void 0)}),void 0)}),void 0)},v=function(){return(v=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},m=function(n){var t=n.currentFormat,r=n.seconds,o=n.className,s=n.onClick;return(0,e.jsx)("div",v({className:"Formats "+(o?""+o:""),onClick:s},{children:a.map((function(n){return n===t?"":(0,e.jsxs)("div",v({id:n,className:"Formats__item"},{children:["Show ",n,(0,e.jsxs)("span",v({className:"Formats__example"},{children:["(",l(n,r),")"]}),void 0)]}),n)}))}),void 0)},h=function(){return(h=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},g=function(n){var t=n.currentSpeed,r=n.className,o=n.onClick;return(0,e.jsxs)("div",h({className:"Speeds "+(r?""+r:""),onClick:o},{children:[(0,e.jsx)("div",h({className:"Speeds__header"},{children:"Speed"}),void 0),u.map((function(n){return(0,e.jsxs)("div",h({id:n,className:"Speeds__item"},{children:[n,n===t?(0,e.jsx)("span",h({className:"Speeds__item-checkmark"},{children:"✓"}),void 0):""]}),n)}))]}),void 0)},y=function(){return(y=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},x=function(){var n=(0,c.useState)(y({},j()||{isRunning:!1,seconds:0,format:"seconds",displayFormats:!1,speed:"1x",displaySpeeds:!1})),t=n[0],r=t.isRunning,o=t.seconds,s=t.format,i=t.displayFormats,a=t.speed,u=t.displaySpeeds,l=n[1],d=w(),f=(0,c.useRef)(null),v=(0,c.useMemo)((function(){return b({clockIsRunning:r,onClick:function(n){var e=n.target.id;return l((function(n){return y(y({},n),"start-button"===e?{isRunning:!0}:"stop-button"===e?{isRunning:!1}:{seconds:0})}))}})}),[r]);return(0,c.useEffect)((function(){return f.current&&clearInterval(f.current),r&&(f.current=setInterval((function(){return l((function(n){return y(y({},n),{seconds:n.seconds+1})}))}),function(n){return"1x"===n?1e3:"2x"===n?500:"4x"===n?250:"10x"===n?100:10}(a))),function(){return clearInterval(f.current)}}),[r,a]),(0,c.useEffect)((function(){return k({isRunning:r,seconds:o,format:s,displayFormats:i,speed:a,displaySpeeds:u})}),[r,o,s,i,a,u]),(0,e.jsx)("div",y({className:"clock-wrapper",onClick:function(n){return"image"!==n.target.id||u?!(!i&&!u)&&l((function(n){return y(y({},n),{displayFormats:!1,displaySpeeds:!1})})):l((function(n){return y(y({},n),{displaySpeeds:!0})}))}},{children:(0,e.jsxs)("div",y({className:"Clock"},{children:[u&&(0,e.jsx)(g,{className:"Clock__speeds-popover",currentSpeed:a,onClick:function(n){var e=n.target.id;return e!==a&&l((function(n){return y(y({},n),{speed:e})}))}},void 0),(0,e.jsx)("img",{id:"image",className:"Clock__image Clock__image--"+a+(o?" Clock__image--animation":"")+(o?r?" Clock__image--play":" Clock__image--pause":""),src:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 841.9 595.3'%3e%3cg fill='%2361DAFB'%3e%3cpath d='M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z'/%3e%3ccircle cx='420.9' cy='296.5' r='45.7'/%3e%3cpath d='M520.5 78.1z'/%3e%3c/g%3e%3c/svg%3e",alt:"React logo"},void 0),i&&(0,e.jsx)(m,{className:"Clock__formats-popover",currentFormat:s,seconds:o,onClick:function(n){var e=n.target.id;return l((function(n){return y(y({},n),{displayFormats:!1,format:e})}))}},void 0),(0,e.jsx)("div",y({className:"Clock__time"},{children:(0,e.jsx)(p,{format:s,seconds:o,onClick:function(n){return l((function(n){return y(y({},n),{displayFormats:!0})}))}},void 0)}),void 0),d&&v]}),void 0)}),void 0)},b=function(n){var t=n.onClick,r=n.clockIsRunning;return(0,e.jsxs)("div",y({className:"Buttons",onClick:function(n){return t(n)}},{children:[(0,e.jsx)("button",y({disabled:r,id:"start-button",className:"Buttons__start-button"+(r?" Buttons__button--disabled":"")},{children:"Start"}),void 0),(0,e.jsx)("button",y({disabled:!r,id:"stop-button",className:"Buttons__stop-button"+(r?"":" Buttons__button--disabled")},{children:"Stop"}),void 0),(0,e.jsx)("button",y({id:"reset-button",className:"Buttons__reset-button"},{children:"Reset"}),void 0)]}),void 0)},_="ReactClockLocalState111220",j=function(){return"undefined"!=typeof window&&localStorage?JSON.parse(localStorage.getItem(_)):{}},k=function(n){return localStorage.setItem(_,JSON.stringify(n))},w=function(){var n=(0,c.useState)(!1),e=n[0],t=n[1];return(0,c.useEffect)((function(){t(!0)}),[]),e},S=function(){return(S=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},N=function(){return(0,e.jsx)("div",S({className:"App"},{children:(0,e.jsx)(x,{},void 0)}),void 0)},C=function(n,e,t,r){return new(t||(t=Promise))((function(o,s){function i(n){try{a(r.next(n))}catch(n){s(n)}}function c(n){try{a(r.throw(n))}catch(n){s(n)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,c)}a((r=r.apply(n,e||[])).next())}))},O=function(n,e){var t,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(n,i)}catch(n){s=[6,n],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},z=process.env.PORT||8080;r()().use(r().static("./")).get("**",(function(n,t){return C(void 0,void 0,void 0,(function(){var n,r,o;return O(this,(function(c){switch(c.label){case 0:return n=function(n){return new Promise((function(e,t){return C(void 0,void 0,void 0,(function(){return O(this,(function(r){return[2,s().readFile(n,"utf8",(function(n,r){return n?t(n):e(r)}))]}))}))}))},o=(r=t).send,[4,n("index.html")];case 1:return o.apply(r,[c.sent().replace('<div id="root"></div>','<div id="root">'+(0,i.renderToString)((0,e.jsx)(N,{},void 0))+"</div>")]),[2]}}))}))})).listen(z,(function(){return console.log("App listening on http://localhost:"+z)}))})();