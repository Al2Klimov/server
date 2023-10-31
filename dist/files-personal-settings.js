/*! For license information please see files-personal-settings.js.LICENSE.txt */
!function(){"use strict";var e,r,n,o={75518:function(e,r,n){var o=n(20144),i=n(77958),a=n(93664),s=n(20296),c=n.n(s),u=n(79753),l=n(64024),f=n(61537),d=n(57274),h=(0,n(17499).IY)().setApp("files").detectUser().build();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),s=new I(o||[]);return n(a,"_invoke",{value:C(t,r,s)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function d(){}function h(){}function v(){}var m={};c(m,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(E([])));b&&b!==e&&r.call(b,i)&&(m=b);var w=v.prototype=d.prototype=Object.create(m);function A(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,s){var c=l(t[n],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==p(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function C(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},A(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(w),c(w,s,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function v(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var m=(0,l.fn)(t("files","Choose a file or folder to transfer")).setMultiSelect(!1).setType(1).allowDirectories().build(),y={name:"TransferOwnershipDialogue",components:{NcSelect:f.Z,NcButton:d.Z},data:function(){return{directory:void 0,directoryPickerError:void 0,submitError:void 0,loadingUsers:!1,selectedUser:null,userSuggestions:{},config:{minSearchStringLength:parseInt(OC.config["sharing.minSearchStringLength"],10)||0}}},computed:{canSubmit:function(){return!!this.directory&&!!this.selectedUser},formatedUserSuggestions:function(){var t=this;return Object.keys(this.userSuggestions).map((function(e){var r=t.userSuggestions[e];return{user:r.uid,displayName:r.displayName,icon:"icon-user"}}))},submitButtonText:function(){if(!this.canSubmit)return t("files","Transfer");var e=this.readableDirectory.split("/");return t("files","Transfer {path} to {userid}",{path:e[e.length-1],userid:this.selectedUser.displayName})},readableDirectory:function(){return this.directory?this.directory.substring(1):""}},created:function(){this.findUserDebounced=c()(this.findUser,300),this.findUser("")},methods:{start:function(){var e=this;this.directoryPickerError=void 0,m.pick().then((function(t){return""===t?"/":t})).then((function(r){if(h.debug("path ".concat(r," selected for transferring ownership")),!r.startsWith("/"))throw new Error(t("files","Invalid path selected"));e.directory=r})).catch((function(r){h.error("Selecting object for transfer aborted: ".concat(r.message||"Unknown error"),{error:r}),e.directoryPickerError=r.message||t("files","Unknown error")}))},findUser:function(t){var e,r=this;return(e=g().mark((function e(){var n;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.query=t.trim(),!(t.length<r.config.minSearchStringLength)){e.next=3;break}return e.abrupt("return");case 3:return r.loadingUsers=!0,e.prev=4,e.next=7,a.Z.get((0,u.generateOcsUrl)("apps/files_sharing/api/v1/sharees"),{params:{format:"json",itemType:"file",search:t,perPage:20,lookup:!1}});case 7:n=e.sent,r.userSuggestions={},n.data.ocs.data.exact.users.concat(n.data.ocs.data.users).forEach((function(t){o.default.set(r.userSuggestions,t.value.shareWith,{uid:t.value.shareWith,displayName:t.label})})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),h.error("could not fetch users",{error:e.t0});case 15:return e.prev=15,r.loadingUsers=!1,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[4,12,15,18]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(t){v(i,n,o,a,s,"next",t)}function s(t){v(i,n,o,a,s,"throw",t)}a(void 0)}))})()},submit:function(){var e=this;this.canSubmit||h.warn("ignoring form submit"),this.submitError=void 0;var r={path:this.directory,recipient:this.selectedUser.user};h.debug("submit transfer ownership form",r);var n=(0,u.generateOcsUrl)("apps/files/api/v1/transferownership");a.Z.post(n,r).then((function(t){return t.data})).then((function(r){h.info("Transfer ownership request sent",{data:r}),e.directory=void 0,e.selectedUser=null,(0,l.s$)(t("files","Ownership transfer request sent"))})).catch((function(r){var n;h.error("Could not send ownership transfer request",{error:r}),403===(null==r||null===(n=r.response)||void 0===n?void 0:n.status)?e.submitError=t("files","Cannot transfer ownership of a file or folder you do not own"):e.submitError=r.message||t("files","Unknown error")}))}}},b=y,w=n(93379),A=n.n(w),x=n(7795),C=n.n(x),L=n(90569),S=n.n(L),j=n(3565),I=n.n(j),E=n(19216),N=n.n(E),T=n(44589),_=n.n(T),M=n(27866),O={};O.styleTagTransform=_(),O.setAttributes=I(),O.insert=S().bind(null,"head"),O.domAPI=C(),O.insertStyleElement=N(),A()(M.Z,O),M.Z&&M.Z.locals&&M.Z.locals;var Z=n(51900),D=(0,Z.Z)(b,(function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v(t._s(t.t("files","Transfer ownership of a file or folder"))+" ")]),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("p",{staticClass:"transfer-select-row"},[e("span",[t._v(t._s(t.readableDirectory))]),t._v(" "),void 0===t.directory?e("NcButton",{staticClass:"transfer-select-row__choose_button",on:{click:function(e){return e.preventDefault(),t.start.apply(null,arguments)}}},[t._v("\n\t\t\t\t"+t._s(t.t("files","Choose file or folder to transfer"))+"\n\t\t\t")]):e("NcButton",{on:{click:function(e){return e.preventDefault(),t.start.apply(null,arguments)}}},[t._v("\n\t\t\t\t"+t._s(t.t("files","Change"))+"\n\t\t\t")]),t._v(" "),e("span",{staticClass:"error"},[t._v(t._s(t.directoryPickerError))])],1),t._v(" "),e("p",{staticClass:"new-owner-row"},[e("label",{attrs:{for:"targetUser"}},[e("span",[t._v(t._s(t.t("files","New owner")))])]),t._v(" "),e("NcSelect",{staticClass:"middle-align",attrs:{"input-id":"targetUser",options:t.formatedUserSuggestions,multiple:!1,loading:t.loadingUsers,label:"displayName","user-select":!0},on:{search:t.findUserDebounced},model:{value:t.selectedUser,callback:function(e){t.selectedUser=e},expression:"selectedUser"}})],1),t._v(" "),e("p",[e("input",{staticClass:"primary",attrs:{type:"submit",disabled:!t.canSubmit},domProps:{value:t.submitButtonText}}),t._v(" "),e("span",{staticClass:"error"},[t._v(t._s(t.submitError))])])])])}),[],!1,null,"67866491",null),k={name:"PersonalSettings",components:{TransferOwnershipDialogue:D.exports}},B=(0,Z.Z)(k,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section",attrs:{id:"files-personal-settings"}},[e("h2",[t._v(t._s(t.t("files","Files")))]),t._v(" "),e("TransferOwnershipDialogue")],1)}),[],!1,null,null,null).exports;n.nc=btoa((0,i.IH)()),o.default.prototype.t=t,window.TESTING||(new(o.default.extend(B))).$mount("#files-personal-settings")},27866:function(t,e,r){var n=r(87537),o=r.n(n),i=r(23645),a=r.n(i)()(o());a.push([t.id,".middle-align[data-v-67866491]{vertical-align:middle}p[data-v-67866491]{margin-top:12px;margin-bottom:12px}.new-owner-row[data-v-67866491]{display:flex;flex-wrap:wrap}.new-owner-row label[data-v-67866491]{display:flex;align-items:center;margin-bottom:calc(var(--default-grid-baseline)*2)}.new-owner-row label span[data-v-67866491]{margin-right:8px}.new-owner-row .multiselect[data-v-67866491]{flex-grow:1;max-width:280px}.transfer-select-row span[data-v-67866491]{margin-right:8px}.transfer-select-row__choose_button[data-v-67866491]{width:min(100%,400px) !important}","",{version:3,sources:["webpack://./apps/files/src/components/TransferOwnershipDialogue.vue"],names:[],mappings:"AACA,+BACC,qBAAA,CAED,mBACC,eAAA,CACA,kBAAA,CAED,gCACC,YAAA,CACA,cAAA,CAEA,sCACC,YAAA,CACA,kBAAA,CACA,kDAAA,CAEA,2CACC,gBAAA,CAIF,6CACC,WAAA,CACA,eAAA,CAID,2CACC,gBAAA,CAGD,qDACC,gCAAA",sourcesContent:["\n.middle-align {\n\tvertical-align: middle;\n}\np {\n\tmargin-top: 12px;\n\tmargin-bottom: 12px;\n}\n.new-owner-row {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\n\tlabel {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin-bottom: calc(var(--default-grid-baseline) * 2);\n\n\t\tspan {\n\t\t\tmargin-right: 8px;\n\t\t}\n\t}\n\n\t.multiselect {\n\t\tflex-grow: 1;\n\t\tmax-width: 280px;\n\t}\n}\n.transfer-select-row {\n\tspan {\n\t\tmargin-right: 8px;\n\t}\n\n\t&__choose_button {\n\t\twidth: min(100%, 400px) !important;\n\t}\n}\n"],sourceRoot:""}]),e.Z=a},42761:function(t){t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTS00LTRoMjR2MjRILTRWLTR6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTggMEMzLjYgMCAwIDMuNiAwIDhzMy42IDggOCA4IDgtMy42IDgtOC0zLjYtOC04LTh6IiBmaWxsPSIjZWQ0ODRjIi8+PHBhdGggZD0iTTUgNi41aDZjLjggMCAxLjUuNyAxLjUgMS41cy0uNyAxLjUtMS41IDEuNUg1Yy0uOCAwLTEuNS0uNy0xLjUtMS41UzQuMiA2LjUgNSA2LjV6IiBmaWxsPSIjZmRmZmZmIi8+PC9zdmc+Cg=="},87210:function(t){t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTQuOCAxMS4yaDYuNFY0LjhINC44djYuNHpNOCAwQzMuNiAwIDAgMy42IDAgOHMzLjYgOCA4IDggOC0zLjYgOC04LTMuNi04LTgtOHoiIGZpbGw9IiM0OWIzODIiLz48L3N2Zz4K"},94659:function(t){t.exports="data:image/svg+xml;base64,PCEtLSBUaGlzIGljb24gaXMgcGFydCBvZiBNYXRlcmlhbCBVSSBJY29ucy4gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4sIEFwYWNoZS0yLjAgTGljZW5zZSAtLT4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS00LTRoMjR2MjRILTR6Ii8+PHBhdGggZD0iTTYuOS4xQzMgLjYtLjEgNC0uMSA4YzAgNC40IDMuNiA4IDggOCA0IDAgNy40LTMgOC02LjktMS4yIDEuMy0yLjkgMi4xLTQuNyAyLjEtMy41IDAtNi40LTIuOS02LjQtNi40IDAtMS45LjgtMy42IDIuMS00Ljd6IiBmaWxsPSIjZjRhMzMxIi8+PC9zdmc+Cg=="}},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,e=[],a.O=function(t,r,n,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))},a.u=function(t){return t+"-"+t+".js?v="+{2250:"34f75a254de23027f023",7608:"e10b56a26e98ac647fb2"}[t]},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r={},n="nextcloud:",a.l=function(t,e,o,i){if(r[t])r[t].push(e);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==n+o){s=f;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",n+o),s.src=t),r[t]=[e];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(h);var o=r[t];if(delete r[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},a.j=1623,function(){var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!t;)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t}(),function(){a.b=document.baseURI||self.location.href;var t={1623:0};a.f.j=function(e,r){var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=t[e]=[r,o]}));r.push(n[2]=o);var i=a.p+a.u(e),s=new Error;a.l(i,(function(r){if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}}),"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,o,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(c)var l=c(a)}for(e&&e(r);u<i.length;u++)o=i[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(l)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),a.nc=void 0;var s=a.O(void 0,[7874],(function(){return a(75518)}));s=a.O(s)}();
//# sourceMappingURL=files-personal-settings.js.map?v=271ab5ca310a03cc8d87