!function(e){function t(t){for(var r,a,o=t[0],i=t[1],c=t[2],s=0,l=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(P,a)&&P[a]&&l.push(P[a][0]),P[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(W&&W(t);l.length;)l.shift()();return U.push.apply(U,c||[]),n()}function n(){for(var e,t=0;t<U.length;t++){for(var n=U[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==P[o]&&(r=!1)}r&&(U.splice(t--,1),e=K(K.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!b[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--_&&0===g&&E()}(e,t),r&&r(e,t)};var a,o=!0,i="218e347aa79c3618f502",c={},s=[],l=[];function d(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,f){case"idle":(v={})[t]=e[t],p("ready");break;case"ready":N(t);break;case"prepare":case"check":case"dispose":case"apply":(y=y||[]).push(t)}},check:M,apply:j,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:c[t]};return a=void 0,n}var u=[],f="idle";function p(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,v,m,y,_=0,g=0,w={},x={},b={};function R(e){return+e+""===e?+e:e}function M(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=K.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p(H()?"ready":"idle"),null;x={},w={},b=e.c,m=e.h,p("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in v={},P)O(n);return"prepare"===f&&0===g&&0===_&&E(),t}));var t}function O(e){b[e]?(x[e]=!0,_++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=K.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function E(){p("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then((function(){return j(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(R(n));e.resolve(t)}}function j(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");return function t(n){var r,o,l,d,u;function f(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),o=a.id,i=a.chain;if((d=Y[o])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var c=0;c<d.parents.length;c++){var s=d.parents[c],l=Y[s];if(l){if(l.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([s]),moduleId:o,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[o]?(n[s]||(n[s]=[]),h(n[s],[o])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}H();var _={},g=[],w={},x=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var M in v)if(Object.prototype.hasOwnProperty.call(v,M)){var O;u=R(M),O=v[M]?f(u):{type:"disposed",moduleId:M};var E=!1,j=!1,N=!1,U="";switch(O.chain&&(U="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+O.moduleId+U));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+U));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(E=new Error("Aborted because "+u+" is not accepted"+U));break;case"accepted":n.onAccepted&&n.onAccepted(O),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),N=!0;break;default:throw new Error("Unexception type "+O.type)}if(E)return p("abort"),Promise.reject(E);if(j)for(u in w[u]=v[u],h(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,u)&&(_[u]||(_[u]=[]),h(_[u],O.outdatedDependencies[u]));N&&(h(g,[O.moduleId]),w[u]=x)}var X,k=[];for(o=0;o<g.length;o++)u=g[o],Y[u]&&Y[u].hot._selfAccepted&&w[u]!==x&&!Y[u].hot._selfInvalidated&&k.push({module:u,parents:Y[u].parents.slice(),errorHandler:Y[u].hot._selfAccepted});p("dispose"),Object.keys(b).forEach((function(e){!1===b[e]&&function(e){delete P[e]}(e)}));var C,W,T=g.slice();for(;T.length>0;)if(u=T.pop(),d=Y[u]){var L={},D=d.hot._disposeHandlers;for(l=0;l<D.length;l++)(r=D[l])(L);for(c[u]=L,d.hot.active=!1,delete Y[u],delete _[u],l=0;l<d.children.length;l++){var F=Y[d.children[l]];F&&((X=F.parents.indexOf(u))>=0&&F.parents.splice(X,1))}}for(u in _)if(Object.prototype.hasOwnProperty.call(_,u)&&(d=Y[u]))for(W=_[u],l=0;l<W.length;l++)C=W[l],(X=d.children.indexOf(C))>=0&&d.children.splice(X,1);p("apply"),void 0!==m&&(i=m,m=void 0);for(u in v=void 0,w)Object.prototype.hasOwnProperty.call(w,u)&&(e[u]=w[u]);var Z=null;for(u in _)if(Object.prototype.hasOwnProperty.call(_,u)&&(d=Y[u])){W=_[u];var q=[];for(o=0;o<W.length;o++)if(C=W[o],r=d.hot._acceptedDependencies[C]){if(-1!==q.indexOf(r))continue;q.push(r)}for(o=0;o<q.length;o++){r=q[o];try{r(W)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:W[o],error:e}),n.ignoreErrored||Z||(Z=e)}}}for(o=0;o<k.length;o++){var I=k[o];u=I.module,s=I.parents,a=u;try{K(u)}catch(e){if("function"==typeof I.errorHandler)try{I.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,originalError:e}),n.ignoreErrored||Z||(Z=t),Z||(Z=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||Z||(Z=e)}}if(Z)return p("fail"),Promise.reject(Z);if(y)return t(n).then((function(e){return g.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(g)}))}(t=t||{})}function H(){if(y)return v||(v={}),y.forEach(N),y=void 0,!0}function N(t){Object.prototype.hasOwnProperty.call(v,t)||(v[t]=e[t])}var Y={},P={0:0},U=[];function K(t){if(Y[t])return Y[t].exports;var n=Y[t]={i:t,l:!1,exports:{},hot:d(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=Y[e];if(!t)return K;var n=function(n){return t.hot.active?(Y[n]?-1===Y[n].parents.indexOf(e)&&Y[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),K(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return K[e]},set:function(t){K[e]=t}}};for(var o in K)Object.prototype.hasOwnProperty.call(K,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&p("prepare"),g++,K.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===f&&(w[e]||O(e),0===g&&0===_&&E())}},n.t=function(e,t){return 1&t&&(e=n(e)),K.t(e,-2&t)},n}(t)),n.l=!0,n.exports}K.m=e,K.c=Y,K.d=function(e,t,n){K.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},K.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},K.t=function(e,t){if(1&t&&(e=K(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(K.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)K.d(n,r,function(t){return e[t]}.bind(null,r));return n},K.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return K.d(t,"a",t),t},K.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},K.p="/",K.h=function(){return i};var X=window.webpackJsonp=window.webpackJsonp||[],k=X.push.bind(X);X.push=t,X=X.slice();for(var C=0;C<X.length;C++)t(X[C]);var W=k;U.push([41,1]),n()}([,,,,,,,function(e,t,n){var r=n(9),a=n(15);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(15,(function(){"string"==typeof(a=(a=n(15)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,a.locals)?(c=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},,,,function(e,t,n){var r=n(9),a=n(17);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(17,(function(){"string"==typeof(a=(a=n(17)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,a.locals)?(c=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){var r=n(9),a=n(14);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(14,(function(){"string"==typeof(a=(a=n(14)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,a.locals)?(c=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},,function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r)()(!1);a.push([e.i,"._1yRKRdLAwumiFgFfTqNyJz{height:60px;margin-left:auto;margin-right:auto;width:60px}._1yRKRdLAwumiFgFfTqNyJz ._3s4_vWrTuaklCiqMxcj6u8{animation:_3s4_vWrTuaklCiqMxcj6u8 2s linear infinite both}._1yRKRdLAwumiFgFfTqNyJz ._3s4_vWrTuaklCiqMxcj6u8 ._3e-oPhm0ZH5GnMXhuPpQbw{animation:_3e-oPhm0ZH5GnMXhuPpQbw 1.4s ease-in-out infinite both;fill:transparent;stroke:#2f3d4c;stroke-dasharray:285;stroke-linecap:round;stroke-width:8px;transform-origin:50% 50%}@keyframes _3s4_vWrTuaklCiqMxcj6u8{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes _3e-oPhm0ZH5GnMXhuPpQbw{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}\n",""]),a.locals={wrapper:"_1yRKRdLAwumiFgFfTqNyJz",container:"_3s4_vWrTuaklCiqMxcj6u8",spinner:"_3e-oPhm0ZH5GnMXhuPpQbw"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r)()(!1);a.push([e.i,"._1rdRvYy8at7KR53-rUo-Yl{display:flex;align-items:center;position:fixed;width:100vw;z-index:99}._1rdRvYy8at7KR53-rUo-Yl ._ayrPxi0TlW4oIXCz3Oho{background:rgba(0,0,0,0.7)}._1rdRvYy8at7KR53-rUo-Yl ._3w0NusqdyXXGumm0crkaeO>span{color:#e3f6ff}._1rdRvYy8at7KR53-rUo-Yl ._3w0NusqdyXXGumm0crkaeO>span:hover{color:#5fcbff}._1rdRvYy8at7KR53-rUo-Yl .Mi55KA_PKYfxDA1X9dBkN>span{color:#00adff}._1rdRvYy8at7KR53-rUo-Yl .Mi55KA_PKYfxDA1X9dBkN>span:hover{color:#e3f6ff}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ{transition:0.7s ease-in-out;padding:15px 20px;width:100%;display:flex;justify-content:space-between;align-items:center}@media (min-width: 1024px){._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ{padding:15px 100px}}@media (min-width: 744px) and (max-width: 1023px){._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ{padding:15px 60px}}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._1tRsmb-_gJ9uZP9sTCwV9l{text-transform:uppercase;font-weight:600;font-size:20px;cursor:pointer;transition:0.25s ease-in-out;padding-right:15px;color:#e3f6ff}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._1tRsmb-_gJ9uZP9sTCwV9l:hover{color:#5fcbff}@media (min-width: 1024px){._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._25e6cYWFxEtnl_muHt9SoZ{min-width:595px}}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._25e6cYWFxEtnl_muHt9SoZ>span{font-weight:600;text-transform:uppercase;transition:0.25s ease-in-out;font-size:15px;cursor:pointer}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._25e6cYWFxEtnl_muHt9SoZ>span:not(:last-child){margin-right:15px}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._2_KWjZ1h1vmrt5ttPde03g{align-items:center;display:flex;justify-content:center;cursor:pointer}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._2_KWjZ1h1vmrt5ttPde03g:hover>div>span{background:#5fcbff}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._2_KWjZ1h1vmrt5ttPde03g:hover>span{color:#5fcbff}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._2_KWjZ1h1vmrt5ttPde03g .LN1dwP8htZwuOOeXjgcag{color:#e3f6ff;font-weight:600;text-transform:uppercase;font-size:18px;padding-right:20px;transition:0.25s ease-in-out}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._2_KWjZ1h1vmrt5ttPde03g ._17OMimpzwsssmuMORRBLVc{margin-right:10px}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._2_KWjZ1h1vmrt5ttPde03g ._17OMimpzwsssmuMORRBLVc>span{background:#e3f6ff;border-radius:3px;display:block;height:5px;margin-bottom:2px;transition:0.25s ease-in-out;width:30px}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._2_KWjZ1h1vmrt5ttPde03g ._3MqZSvcvg21zwshLtqUMWK>:first-child{transform:rotate(-45deg) translate(-5px, 5px)}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._2_KWjZ1h1vmrt5ttPde03g ._3MqZSvcvg21zwshLtqUMWK>:nth-child(2){opacity:0}._1rdRvYy8at7KR53-rUo-Yl ._3UCgWyXpCHyH1x5Xa9FTNQ ._2_KWjZ1h1vmrt5ttPde03g ._3MqZSvcvg21zwshLtqUMWK>:last-child{transform:rotate(45deg) translate(-4px, -5px)}\n",""]),a.locals={wrapper:"_1rdRvYy8at7KR53-rUo-Yl",scrolled:"_ayrPxi0TlW4oIXCz3Oho",defaultMenuList:"_3w0NusqdyXXGumm0crkaeO",scrolledMenuList:"Mi55KA_PKYfxDA1X9dBkN",container:"_3UCgWyXpCHyH1x5Xa9FTNQ",myName:"_1tRsmb-_gJ9uZP9sTCwV9l",menuList:"_25e6cYWFxEtnl_muHt9SoZ",menuContainer:"_2_KWjZ1h1vmrt5ttPde03g",menuName:"LN1dwP8htZwuOOeXjgcag",burgerMenu:"_17OMimpzwsssmuMORRBLVc",burgerMenuToggle:"_3MqZSvcvg21zwshLtqUMWK"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r)()(!1);a.push([e.i,"._1o_v4lvZDOKq-xkLy4hq4O{height:200vh;width:100vw}\n",""]),a.locals={wrapper:"_1o_v4lvZDOKq-xkLy4hq4O"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r)()(!1);a.push([e.i,".n_BNPRLpmMGuGgxnYJfU5 ._25-7NpDRUmiJwupkKVgB{align-items:center;display:flex;justify-content:center;height:100vh;position:relative;width:100vw}.n_BNPRLpmMGuGgxnYJfU5 ._1VjIfsoiM0Bx2ZiR-dKgBL{height:100%;position:absolute;width:100%;will-change:opacity}.n_BNPRLpmMGuGgxnYJfU5 .iVLMKGKN0fFnlD5jN90fX{align-items:center;display:flex;justify-content:center;height:100%;width:100%;position:absolute;background:rgba(0,0,0,0.4)}\n",""]),a.locals={wrapper:"n_BNPRLpmMGuGgxnYJfU5",container:"_25-7NpDRUmiJwupkKVgB",bannerImg:"_1VjIfsoiM0Bx2ZiR-dKgBL",bannerText:"iVLMKGKN0fFnlD5jN90fX"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r)()(!1);a.push([e.i,"",""]),t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(29),i=n.n(o),c=n(30),s=a()(!1),l=i()(c.a);s.push([e.i,'html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body{margin:0;padding:0;font-family:"Poppins";background:url('+l+");background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover}\n",""]),t.default=s},,,,,,function(e,t,n){var r=n(9),a=n(16);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(16,(function(){"string"==typeof(a=(a=n(16)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,a.locals)?(c=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){var r=n(9),a=n(18);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(18,(function(){"string"==typeof(a=(a=n(18)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,a.locals)?(c=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},,,,function(e,t,n){"use strict";t.a="assets/homeBG.603affca893202b8400eef8546e24dd3.jpeg"},,,,,,,,,,function(e,t,n){var r=n(9),a=n(19);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var c=a.locals;e.hot.accept(19,(function(){"string"==typeof(a=(a=n(19)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,a.locals)?(c=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),i=n.n(o),c=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.join(" ")},s=n(12),l=n.n(s),d=function(e){var t=e.className,n=void 0===t?"":t;return a.a.createElement("div",{className:c(l.a.wrapper,n)},a.a.createElement("svg",{className:l.a.container,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{className:l.a.spinner,cx:"50",cy:"50",r:"45"})))},u=n(27),f=n(1);var p,h=function(){var e=Object(r.useState)("sp"),t=e[0],n=e[1];return Object(r.useEffect)((function(){if(window.matchMedia){var e=window.matchMedia("(max-width: 1024px)"),t=window.matchMedia("(max-width: 743px)");return r(),e.addListener(r),t.addListener(r),function(){e.removeListener(r),t.removeListener(r)}}function r(){t.matches?n("sp"):e.matches?n("tl"):n("pc")}}),[]),t},v=n(7),m=n.n(v),y=function(){var e=h(),t=Object(r.useState)(!1),n=t[0],o=t[1],i=Object(r.useState)(!1),s=i[0],l=i[1];Object(r.useEffect)((function(){var e=function(){return l(window&&window.scrollY>200)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);return a.a.createElement("div",{className:m.a.wrapper},a.a.createElement("div",{className:c(m.a.container,s&&m.a.scrolled)},a.a.createElement("div",{className:m.a.myName},"John Christopher Gonzaga"),"pc"!==e?a.a.createElement("div",{className:m.a.menuContainer,onClick:function(){return o(!n)}},a.a.createElement("span",{className:m.a.menuName},"Menu"),a.a.createElement("div",{className:c(m.a.burgerMenu,n&&m.a.burgerMenuToggle)},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))):a.a.createElement("div",{className:c(m.a.menuList,s?m.a.scrolledMenuList:m.a.defaultMenuList)},a.a.createElement("span",null,"About Me"),a.a.createElement("span",null,"Skills"),a.a.createElement("span",null,"Projects"),a.a.createElement("span",null,"Work Experience"),a.a.createElement("span",null,"Fun Stuffs"),a.a.createElement("span",null,"Contact"))))},_=n(25),g=n.n(_),w=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),x=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return w(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:g.a.wrapper},a.a.createElement("div",null,a.a.createElement(y,null),a.a.createElement("div",null,this.props.children)))},t}(a.a.Component),b=n(11),R=n.n(b),M=function(){var e=h();return a.a.createElement("div",{className:R.a.wrapper},a.a.createElement("div",{className:R.a.container},a.a.createElement("div",{className:R.a.bannerImg,style:{background:"url(assets/banner.4688c047fec5f2bb9428cd1e9f80b110.jpg) center center / cover no-repeat",backgroundAttachment:"pc"===e?"fixed":"initial"}}),a.a.createElement("div",{className:R.a.bannerText},"John Christopher Gonzaga")))},O=n(26),E=n.n(O),j=function(){return a.a.createElement("div",{className:E.a.wrapper},a.a.createElement(M,null))},H=a.a.createElement(u.a,null,a.a.createElement(x,null,a.a.createElement(f.a,{exact:!0,path:"/",component:j}))),N=(n(40),a.a.createElement(r.Suspense,{fallback:a.a.createElement(d,null)},H));i.a.render(N,document.getElementById("root"))}]);