(function(){var n={33948:function(n,t,e){var r=e(17854),o=e(48324),i=e(98509),u=e(66992),c=e(68880),f=e(5112),a=f("iterator"),s=f("toStringTag"),p=u.values,l=function(n,t){if(n){if(n[a]!==p)try{c(n,a,p)}catch(r){n[a]=p}if(n[s]||c(n,s,t),o[t])for(var e in u)if(n[e]!==u[e])try{c(n,e,u[e])}catch(r){n[e]=u[e]}}};for(var d in o)l(r[d]&&r[d].prototype,d);l(i,"DOMTokenList")},15988:function(n,t,e){async function r(){const n=await e.e(103).then(e.bind(e,69103));self.onmessage=function(t){const e=t.data.input,r=t.data.artifacts,o=n.TeamOptimizationWasm.optimize_team2(e,r);self.postMessage({type:"result",data:{result:o}})},self.postMessage({type:"ready"})}e(33948),r()}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return n[r](i,i.exports,e),i.loaded=!0,i.exports}e.m=n,e.x=function(){var n=e.O(void 0,[48],(function(){return e(15988)}));return n=e.O(n),n},function(){var n="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=function(n){n&&!n.d&&(n.d=1,n.forEach((function(n){n.r--})),n.forEach((function(n){n.r--?n.r++:n()})))},i=function(e){return e.map((function(e){if(null!==e&&"object"===typeof e){if(e[n])return e;if(e.then){var i=[];i.d=0,e.then((function(n){u[t]=n,o(i)}),(function(n){u[r]=n,o(i)}));var u={};return u[n]=function(n){n(i)},u}}var c={};return c[n]=function(){},c[t]=e,c}))};e.a=function(e,u,c){var f;c&&((f=[]).d=1),f&&(f.moduleId=e.id);var a,s,p,l=new Set,d=e.exports,b=new Promise((function(n,t){p=t,s=n}));b[t]=d,b[n]=function(n){f&&n(f),l.forEach(n),b["catch"]((function(){}))},b.moduleId=e.id,e.exports=b,u((function(e){var o;a=i(e);var u=function(){return a.map((function(n){if(n[r])throw n[r];return n[t]}))},c=new Promise((function(t){o=function(){t(u)},o.r=0;var e=function(n){n!==f&&!l.has(n)&&(l.add(n),n&&!n.d&&(o.r++,n.push(o)))};a.map((function(t){t[n](e)}))}));return o.r?c:u()}),(function(n){n?p(b[r]=n):s(d),o(f)})),f&&(f.d=0)}}(),function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var c=!0,f=0;f<r.length;f++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[f])}))?r.splice(f--,1):(c=!1,i<u&&(u=i));if(c){n.splice(s--,1);var a=o();void 0!==a&&(t=a)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+"."+{48:"fd1cfc7e",103:"cdfcc379"}[n]+".js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.v=function(n,t,r,o){var i=fetch(e.p+""+r+".module.wasm");return"function"===typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(i,o).then((function(t){return Object.assign(n,t.instance.exports)})):i.then((function(n){return n.arrayBuffer()})).then((function(n){return WebAssembly.instantiate(n,o)})).then((function(t){return Object.assign(n,t.instance.exports)}))}}(),function(){e.p="/"}(),function(){var n={988:1},t=function(t){var r=t[0],i=t[1],u=t[2];for(var c in i)e.o(i,c)&&(e.m[c]=i[c]);u&&u(e);while(r.length)n[r.pop()]=1;o(t)};e.f.i=function(t,r){n[t]||importScripts(e.p+e.u(t))};var r=self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[],o=r.push.bind(r);r.push=t}(),function(){var n=e.x;e.x=function(){return e.e(48).then(n)}}();e.x()})();