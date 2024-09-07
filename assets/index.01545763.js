var Zg=Object.defineProperty;var Kg=(n,e,t)=>e in n?Zg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var we=(n,e,t)=>(Kg(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var ap={exports:{}},en={},fn={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o=Symbol.for("react.element"),Qg=Symbol.for("react.portal"),Jg=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),t0=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),r0=Symbol.for("react.forward_ref"),s0=Symbol.for("react.suspense"),o0=Symbol.for("react.memo"),a0=Symbol.for("react.lazy"),Rf=Symbol.iterator;function l0(n){return n===null||typeof n!="object"?null:(n=Rf&&n[Rf]||n["@@iterator"],typeof n=="function"?n:null)}var lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},up=Object.assign,cp={};function xs(n,e,t){this.props=n,this.context=e,this.refs=cp,this.updater=t||lp}xs.prototype.isReactComponent={};xs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function fp(){}fp.prototype=xs.prototype;function Lc(n,e,t){this.props=n,this.context=e,this.refs=cp,this.updater=t||lp}var Pc=Lc.prototype=new fp;Pc.constructor=Lc;up(Pc,xs.prototype);Pc.isPureReactComponent=!0;var If=Array.isArray,dp=Object.prototype.hasOwnProperty,Dc={current:null},hp={key:!0,ref:!0,__self:!0,__source:!0};function pp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dp.call(e,i)&&!hp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_o,type:n,key:s,ref:o,props:r,_owner:Dc.current}}function u0(n,e){return{$$typeof:_o,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Rc(n){return typeof n=="object"&&n!==null&&n.$$typeof===_o}function c0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Nf=/\/+/g;function Ml(n,e){return typeof n=="object"&&n!==null&&n.key!=null?c0(""+n.key):e.toString(36)}function da(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case _o:case Qg:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ml(o,0):i,If(r)?(t="",n!=null&&(t=n.replace(Nf,"$&/")+"/"),da(r,e,t,"",function(u){return u})):r!=null&&(Rc(r)&&(r=u0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Nf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",If(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ml(s,a);o+=da(s,e,t,l,r)}else if(l=l0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ml(s,a++),o+=da(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bo(n,e,t){if(n==null)return n;var i=[],r=0;return da(n,i,"","",function(s){return e.call(t,s,r++)}),i}function f0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Nt={current:null},ha={transition:null},d0={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:ha,ReactCurrentOwner:Dc};Ae.Children={map:bo,forEach:function(n,e,t){bo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return bo(n,function(){e++}),e},toArray:function(n){return bo(n,function(e){return e})||[]},only:function(n){if(!Rc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ae.Component=xs;Ae.Fragment=Jg;Ae.Profiler=t0;Ae.PureComponent=Lc;Ae.StrictMode=e0;Ae.Suspense=s0;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d0;Ae.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=up({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)dp.call(e,l)&&!hp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:_o,type:n.type,key:r,ref:s,props:i,_owner:o}};Ae.createContext=function(n){return n={$$typeof:i0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:n0,_context:n},n.Consumer=n};Ae.createElement=pp;Ae.createFactory=function(n){var e=pp.bind(null,n);return e.type=n,e};Ae.createRef=function(){return{current:null}};Ae.forwardRef=function(n){return{$$typeof:r0,render:n}};Ae.isValidElement=Rc;Ae.lazy=function(n){return{$$typeof:a0,_payload:{_status:-1,_result:n},_init:f0}};Ae.memo=function(n,e){return{$$typeof:o0,type:n,compare:e===void 0?null:e}};Ae.startTransition=function(n){var e=ha.transition;ha.transition={};try{n()}finally{ha.transition=e}};Ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ae.useCallback=function(n,e){return Nt.current.useCallback(n,e)};Ae.useContext=function(n){return Nt.current.useContext(n)};Ae.useDebugValue=function(){};Ae.useDeferredValue=function(n){return Nt.current.useDeferredValue(n)};Ae.useEffect=function(n,e){return Nt.current.useEffect(n,e)};Ae.useId=function(){return Nt.current.useId()};Ae.useImperativeHandle=function(n,e,t){return Nt.current.useImperativeHandle(n,e,t)};Ae.useInsertionEffect=function(n,e){return Nt.current.useInsertionEffect(n,e)};Ae.useLayoutEffect=function(n,e){return Nt.current.useLayoutEffect(n,e)};Ae.useMemo=function(n,e){return Nt.current.useMemo(n,e)};Ae.useReducer=function(n,e,t){return Nt.current.useReducer(n,e,t)};Ae.useRef=function(n){return Nt.current.useRef(n)};Ae.useState=function(n){return Nt.current.useState(n)};Ae.useSyncExternalStore=function(n,e,t){return Nt.current.useSyncExternalStore(n,e,t)};Ae.useTransition=function(){return Nt.current.useTransition()};Ae.version="18.2.0";(function(n){n.exports=Ae})(fn);var mp={exports:{}},gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,D){var N=I.length;I.push(D);e:for(;0<N;){var Y=N-1>>>1,q=I[Y];if(0<r(q,D))I[Y]=D,I[N]=q,N=Y;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var D=I[0],N=I.pop();if(N!==D){I[0]=N;e:for(var Y=0,q=I.length,K=q>>>1;Y<K;){var ue=2*(Y+1)-1,ge=I[ue],H=ue+1,Le=I[H];if(0>r(ge,N))H<q&&0>r(Le,ge)?(I[Y]=Le,I[H]=N,Y=H):(I[Y]=ge,I[ue]=N,Y=ue);else if(H<q&&0>r(Le,N))I[Y]=Le,I[H]=N,Y=H;else break e}}return D}function r(I,D){var N=I.sortIndex-D.sortIndex;return N!==0?N:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,c=3,v=!1,x=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var D=t(u);D!==null;){if(D.callback===null)i(u);else if(D.startTime<=I)i(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=t(u)}}function S(I){if(p=!1,_(I),!x)if(t(l)!==null)x=!0,Z(M);else{var D=t(u);D!==null&&Q(S,D.startTime-I)}}function M(I,D){x=!1,p&&(p=!1,g(y),y=-1),v=!0;var N=c;try{for(_(D),d=t(l);d!==null&&(!(d.expirationTime>D)||I&&!j());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,c=d.priorityLevel;var q=Y(d.expirationTime<=D);D=n.unstable_now(),typeof q=="function"?d.callback=q:d===t(l)&&i(l),_(D)}else i(l);d=t(l)}if(d!==null)var K=!0;else{var ue=t(u);ue!==null&&Q(S,ue.startTime-D),K=!1}return K}finally{d=null,c=N,v=!1}}var b=!1,L=null,y=-1,C=5,P=-1;function j(){return!(n.unstable_now()-P<C)}function te(){if(L!==null){var I=n.unstable_now();P=I;var D=!0;try{D=L(!0,I)}finally{D?U():(b=!1,L=null)}}else b=!1}var U;if(typeof m=="function")U=function(){m(te)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,X=k.port2;k.port1.onmessage=te,U=function(){X.postMessage(null)}}else U=function(){h(te,0)};function Z(I){L=I,b||(b=!0,U())}function Q(I,D){y=h(function(){I(n.unstable_now())},D)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){x||v||(x=!0,Z(M))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return c},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(c){case 1:case 2:case 3:var D=3;break;default:D=c}var N=c;c=D;try{return I()}finally{c=N}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=c;c=I;try{return D()}finally{c=N}},n.unstable_scheduleCallback=function(I,D,N){var Y=n.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?Y+N:Y):N=Y,I){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=N+q,I={id:f++,callback:D,priorityLevel:I,startTime:N,expirationTime:q,sortIndex:-1},N>Y?(I.sortIndex=N,e(u,I),t(l)===null&&I===t(u)&&(p?(g(y),y=-1):p=!0,Q(S,N-Y))):(I.sortIndex=q,e(l,I),x||v||(x=!0,Z(M))),I},n.unstable_shouldYield=j,n.unstable_wrapCallback=function(I){var D=c;return function(){var N=c;c=D;try{return I.apply(this,arguments)}finally{c=N}}}})(gp);(function(n){n.exports=gp})(mp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=fn.exports,Jt=mp.exports;function J(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _p=new Set,Js={};function gr(n,e){as(n,e),as(n+"Capture",e)}function as(n,e){for(Js[n]=e,n=0;n<e.length;n++)_p.add(e[n])}var ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,h0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},zf={};function p0(n){return Lu.call(zf,n)?!0:Lu.call(Ff,n)?!1:h0.test(n)?zf[n]=!0:(Ff[n]=!0,!1)}function m0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function g0(n,e,t,i){if(e===null||typeof e>"u"||m0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yt[n]=new Ft(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yt[e]=new Ft(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yt[n]=new Ft(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yt[n]=new Ft(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yt[n]=new Ft(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yt[n]=new Ft(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yt[n]=new Ft(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yt[n]=new Ft(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yt[n]=new Ft(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ic=/[\-:]([a-z])/g;function Nc(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ic,Nc);yt[e]=new Ft(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ic,Nc);yt[e]=new Ft(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ic,Nc);yt[e]=new Ft(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yt[n]=new Ft(n,1,!1,n.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yt[n]=new Ft(n,1,!1,n.toLowerCase(),null,!0,!0)});function Fc(n,e,t,i){var r=yt.hasOwnProperty(e)?yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g0(e,t,r,i)&&(t=null),i||r===null?p0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var oi=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),zc=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),yp=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Ru=Symbol.for("react.suspense_list"),Oc=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),Sp=Symbol.for("react.offscreen"),kf=Symbol.iterator;function bs(n){return n===null||typeof n!="object"?null:(n=kf&&n[kf]||n["@@iterator"],typeof n=="function"?n:null)}var Ye=Object.assign,wl;function ks(n){if(wl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);wl=e&&e[1]||""}return`
`+wl+n}var El=!1;function Tl(n,e){if(!n||El)return"";El=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ks(n):""}function v0(n){switch(n.tag){case 5:return ks(n.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return n=Tl(n.type,!1),n;case 11:return n=Tl(n.type.render,!1),n;case 1:return n=Tl(n.type,!0),n;default:return""}}function Iu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Gr:return"Fragment";case Br:return"Portal";case Pu:return"Profiler";case zc:return"StrictMode";case Du:return"Suspense";case Ru:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case yp:return(n.displayName||"Context")+".Consumer";case xp:return(n._context.displayName||"Context")+".Provider";case kc:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Oc:return e=n.displayName||null,e!==null?e:Iu(n.type)||"Memo";case vi:e=n._payload,n=n._init;try{return Iu(n(e))}catch{}}return null}function _0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Mp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x0(n){var e=Mp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ao(n){n._valueTracker||(n._valueTracker=x0(n))}function wp(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Mp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ba(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Nu(n,e){var t=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Of(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ii(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ep(n,e){e=e.checked,e!=null&&Fc(n,"checked",e,!1)}function Fu(n,e){Ep(n,e);var t=Ii(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?zu(n,e.type,t):e.hasOwnProperty("defaultValue")&&zu(n,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Uf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function zu(n,e,t){(e!=="number"||ba(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Os=Array.isArray;function Jr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ii(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ku(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Bf(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(J(92));if(Os(t)){if(1<t.length)throw Error(J(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ii(t)}}function Tp(n,e){var t=Ii(e.value),i=Ii(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Gf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function bp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?bp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Lo,Cp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function eo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y0=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(n){y0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ws[e]=Ws[n]})});function Ap(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ws.hasOwnProperty(n)&&Ws[n]?(""+e).trim():e+"px"}function Lp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ap(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var S0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uu(n,e){if(e){if(S0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Bu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function Uc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vu=null,es=null,ts=null;function Vf(n){if(n=So(n)){if(typeof Vu!="function")throw Error(J(280));var e=n.stateNode;e&&(e=tl(e),Vu(n.stateNode,n.type,e))}}function Pp(n){es?ts?ts.push(n):ts=[n]:es=n}function Dp(){if(es){var n=es,e=ts;if(ts=es=null,Vf(n),e)for(n=0;n<e.length;n++)Vf(e[n])}}function Rp(n,e){return n(e)}function Ip(){}var bl=!1;function Np(n,e,t){if(bl)return n(e,t);bl=!0;try{return Rp(n,e,t)}finally{bl=!1,(es!==null||ts!==null)&&(Ip(),Dp())}}function to(n,e){var t=n.stateNode;if(t===null)return null;var i=tl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(J(231,e,typeof t));return t}var Hu=!1;if(ni)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Hu=!1}function M0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(f){this.onError(f)}}var js=!1,Ca=null,Aa=!1,Wu=null,w0={onError:function(n){js=!0,Ca=n}};function E0(n,e,t,i,r,s,o,a,l){js=!1,Ca=null,M0.apply(w0,arguments)}function T0(n,e,t,i,r,s,o,a,l){if(E0.apply(this,arguments),js){if(js){var u=Ca;js=!1,Ca=null}else throw Error(J(198));Aa||(Aa=!0,Wu=u)}}function vr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Fp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Hf(n){if(vr(n)!==n)throw Error(J(188))}function b0(n){var e=n.alternate;if(!e){if(e=vr(n),e===null)throw Error(J(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Hf(r),n;if(s===i)return Hf(r),e;s=s.sibling}throw Error(J(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(t.alternate!==i)throw Error(J(190))}if(t.tag!==3)throw Error(J(188));return t.stateNode.current===t?n:e}function zp(n){return n=b0(n),n!==null?kp(n):null}function kp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=kp(n);if(e!==null)return e;n=n.sibling}return null}var Op=Jt.unstable_scheduleCallback,Wf=Jt.unstable_cancelCallback,C0=Jt.unstable_shouldYield,A0=Jt.unstable_requestPaint,tt=Jt.unstable_now,L0=Jt.unstable_getCurrentPriorityLevel,Bc=Jt.unstable_ImmediatePriority,Up=Jt.unstable_UserBlockingPriority,La=Jt.unstable_NormalPriority,P0=Jt.unstable_LowPriority,Bp=Jt.unstable_IdlePriority,Ka=null,Un=null;function D0(n){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Ka,n,void 0,(n.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:N0,R0=Math.log,I0=Math.LN2;function N0(n){return n>>>=0,n===0?32:31-(R0(n)/I0|0)|0}var Po=64,Do=4194304;function Us(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pa(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Us(a):(s&=o,s!==0&&(i=Us(s)))}else o=t&~r,o!==0?i=Us(o):s!==0&&(i=Us(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-An(e),r=1<<t,i|=n[t],e&=~r;return i}function F0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-An(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=F0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ju(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gp(){var n=Po;return Po<<=1,(Po&4194240)===0&&(Po=64),n}function Cl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function xo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-An(e),n[e]=t}function k0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-An(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Gc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-An(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Be=0;function Vp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Hp,Vc,Wp,jp,Xp,Xu=!1,Ro=[],Ei=null,Ti=null,bi=null,no=new Map,io=new Map,xi=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(n,e){switch(n){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":bi=null;break;case"pointerover":case"pointerout":no.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function As(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=So(e),e!==null&&Vc(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function U0(n,e,t,i,r){switch(e){case"focusin":return Ei=As(Ei,n,e,t,i,r),!0;case"dragenter":return Ti=As(Ti,n,e,t,i,r),!0;case"mouseover":return bi=As(bi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return no.set(s,As(no.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,io.set(s,As(io.get(s)||null,n,e,t,i,r)),!0}return!1}function qp(n){var e=Yi(n.target);if(e!==null){var t=vr(e);if(t!==null){if(e=t.tag,e===13){if(e=Fp(t),e!==null){n.blockedOn=e,Xp(n.priority,function(){Wp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=qu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Gu=i,t.target.dispatchEvent(i),Gu=null}else return e=So(t),e!==null&&Vc(e),n.blockedOn=t,!1;e.shift()}return!0}function Xf(n,e,t){pa(n)&&t.delete(e)}function B0(){Xu=!1,Ei!==null&&pa(Ei)&&(Ei=null),Ti!==null&&pa(Ti)&&(Ti=null),bi!==null&&pa(bi)&&(bi=null),no.forEach(Xf),io.forEach(Xf)}function Ls(n,e){n.blockedOn===e&&(n.blockedOn=null,Xu||(Xu=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,B0)))}function ro(n){function e(r){return Ls(r,n)}if(0<Ro.length){Ls(Ro[0],n);for(var t=1;t<Ro.length;t++){var i=Ro[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ei!==null&&Ls(Ei,n),Ti!==null&&Ls(Ti,n),bi!==null&&Ls(bi,n),no.forEach(e),io.forEach(e),t=0;t<xi.length;t++)i=xi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<xi.length&&(t=xi[0],t.blockedOn===null);)qp(t),t.blockedOn===null&&xi.shift()}var ns=oi.ReactCurrentBatchConfig,Da=!0;function G0(n,e,t,i){var r=Be,s=ns.transition;ns.transition=null;try{Be=1,Hc(n,e,t,i)}finally{Be=r,ns.transition=s}}function V0(n,e,t,i){var r=Be,s=ns.transition;ns.transition=null;try{Be=4,Hc(n,e,t,i)}finally{Be=r,ns.transition=s}}function Hc(n,e,t,i){if(Da){var r=qu(n,e,t,i);if(r===null)kl(n,e,i,Ra,t),jf(n,i);else if(U0(r,n,e,t,i))i.stopPropagation();else if(jf(n,i),e&4&&-1<O0.indexOf(n)){for(;r!==null;){var s=So(r);if(s!==null&&Hp(s),s=qu(n,e,t,i),s===null&&kl(n,e,i,Ra,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else kl(n,e,i,null,t)}}var Ra=null;function qu(n,e,t,i){if(Ra=null,n=Uc(i),n=Yi(n),n!==null)if(e=vr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Fp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ra=n,null}function Yp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L0()){case Bc:return 1;case Up:return 4;case La:case P0:return 16;case Bp:return 536870912;default:return 16}default:return 16}}var Si=null,Wc=null,ma=null;function $p(){if(ma)return ma;var n,e=Wc,t=e.length,i,r="value"in Si?Si.value:Si.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ma=r.slice(n,1<i?1-i:void 0)}function ga(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Io(){return!0}function qf(){return!1}function tn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Io:qf,this.isPropagationStopped=qf,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=tn(ys),yo=Ye({},ys,{view:0,detail:0}),H0=tn(yo),Al,Ll,Ps,Qa=Ye({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ps&&(Ps&&n.type==="mousemove"?(Al=n.screenX-Ps.screenX,Ll=n.screenY-Ps.screenY):Ll=Al=0,Ps=n),Al)},movementY:function(n){return"movementY"in n?n.movementY:Ll}}),Yf=tn(Qa),W0=Ye({},Qa,{dataTransfer:0}),j0=tn(W0),X0=Ye({},yo,{relatedTarget:0}),Pl=tn(X0),q0=Ye({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=tn(q0),$0=Ye({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Z0=tn($0),K0=Ye({},ys,{data:0}),$f=tn(K0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ev[n])?!!e[n]:!1}function Xc(){return tv}var nv=Ye({},yo,{key:function(n){if(n.key){var e=Q0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ga(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?J0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(n){return n.type==="keypress"?ga(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ga(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),iv=tn(nv),rv=Ye({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=tn(rv),sv=Ye({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),ov=tn(sv),av=Ye({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=tn(av),uv=Ye({},Qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=tn(uv),fv=[9,13,27,32],qc=ni&&"CompositionEvent"in window,Xs=null;ni&&"documentMode"in document&&(Xs=document.documentMode);var dv=ni&&"TextEvent"in window&&!Xs,Zp=ni&&(!qc||Xs&&8<Xs&&11>=Xs),Kf=String.fromCharCode(32),Qf=!1;function Kp(n,e){switch(n){case"keyup":return fv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vr=!1;function hv(n,e){switch(n){case"compositionend":return Qp(e);case"keypress":return e.which!==32?null:(Qf=!0,Kf);case"textInput":return n=e.data,n===Kf&&Qf?null:n;default:return null}}function pv(n,e){if(Vr)return n==="compositionend"||!qc&&Kp(n,e)?(n=$p(),ma=Wc=Si=null,Vr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zp&&e.locale!=="ko"?null:e.data;default:return null}}var mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!mv[n.type]:e==="textarea"}function Jp(n,e,t,i){Pp(i),e=Ia(e,"onChange"),0<e.length&&(t=new jc("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var qs=null,so=null;function gv(n){cm(n,0)}function Ja(n){var e=jr(n);if(wp(e))return n}function vv(n,e){if(n==="change")return e}var em=!1;if(ni){var Dl;if(ni){var Rl="oninput"in document;if(!Rl){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Rl=typeof ed.oninput=="function"}Dl=Rl}else Dl=!1;em=Dl&&(!document.documentMode||9<document.documentMode)}function td(){qs&&(qs.detachEvent("onpropertychange",tm),so=qs=null)}function tm(n){if(n.propertyName==="value"&&Ja(so)){var e=[];Jp(e,so,n,Uc(n)),Np(gv,e)}}function _v(n,e,t){n==="focusin"?(td(),qs=e,so=t,qs.attachEvent("onpropertychange",tm)):n==="focusout"&&td()}function xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ja(so)}function yv(n,e){if(n==="click")return Ja(e)}function Sv(n,e){if(n==="input"||n==="change")return Ja(e)}function Mv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Pn=typeof Object.is=="function"?Object.is:Mv;function oo(n,e){if(Pn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Lu.call(e,r)||!Pn(n[r],e[r]))return!1}return!0}function nd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function id(n,e){var t=nd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nd(t)}}function nm(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?nm(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function im(){for(var n=window,e=ba();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ba(n.document)}return e}function Yc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function wv(n){var e=im(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&nm(t.ownerDocument.documentElement,t)){if(i!==null&&Yc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=id(t,s);var o=id(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ev=ni&&"documentMode"in document&&11>=document.documentMode,Hr=null,Yu=null,Ys=null,$u=!1;function rd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$u||Hr==null||Hr!==ba(i)||(i=Hr,"selectionStart"in i&&Yc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ys&&oo(Ys,i)||(Ys=i,i=Ia(Yu,"onSelect"),0<i.length&&(e=new jc("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Hr)))}function No(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Wr={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Il={},rm={};ni&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function el(n){if(Il[n])return Il[n];if(!Wr[n])return n;var e=Wr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in rm)return Il[n]=e[t];return n}var sm=el("animationend"),om=el("animationiteration"),am=el("animationstart"),lm=el("transitionend"),um=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(n,e){um.set(n,e),gr(e,[n])}for(var Nl=0;Nl<sd.length;Nl++){var Fl=sd[Nl],Tv=Fl.toLowerCase(),bv=Fl[0].toUpperCase()+Fl.slice(1);Fi(Tv,"on"+bv)}Fi(sm,"onAnimationEnd");Fi(om,"onAnimationIteration");Fi(am,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(lm,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function od(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,T0(i,e,void 0,n),n.currentTarget=null}function cm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;od(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;od(r,a,u),s=l}}}if(Aa)throw n=Wu,Aa=!1,Wu=null,n}function Ve(n,e){var t=e[ec];t===void 0&&(t=e[ec]=new Set);var i=n+"__bubble";t.has(i)||(fm(e,n,2,!1),t.add(i))}function zl(n,e,t){var i=0;e&&(i|=4),fm(t,n,i,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function ao(n){if(!n[Fo]){n[Fo]=!0,_p.forEach(function(t){t!=="selectionchange"&&(Cv.has(t)||zl(t,!1,n),zl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,zl("selectionchange",!1,e))}}function fm(n,e,t,i){switch(Yp(e)){case 1:var r=G0;break;case 4:r=V0;break;default:r=Hc}t=r.bind(null,e,t,n),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function kl(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Np(function(){var u=s,f=Uc(t),d=[];e:{var c=um.get(n);if(c!==void 0){var v=jc,x=n;switch(n){case"keypress":if(ga(t)===0)break e;case"keydown":case"keyup":v=iv;break;case"focusin":x="focus",v=Pl;break;case"focusout":x="blur",v=Pl;break;case"beforeblur":case"afterblur":v=Pl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ov;break;case sm:case om:case am:v=Y0;break;case lm:v=lv;break;case"scroll":v=H0;break;case"wheel":v=cv;break;case"copy":case"cut":case"paste":v=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Zf}var p=(e&4)!==0,h=!p&&n==="scroll",g=p?c!==null?c+"Capture":null:c;p=[];for(var m=u,_;m!==null;){_=m;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,g!==null&&(S=to(m,g),S!=null&&p.push(lo(m,S,_)))),h)break;m=m.return}0<p.length&&(c=new v(c,x,null,t,f),d.push({event:c,listeners:p}))}}if((e&7)===0){e:{if(c=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",c&&t!==Gu&&(x=t.relatedTarget||t.fromElement)&&(Yi(x)||x[ii]))break e;if((v||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,v?(x=t.relatedTarget||t.toElement,v=u,x=x?Yi(x):null,x!==null&&(h=vr(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(p=Yf,S="onMouseLeave",g="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(p=Zf,S="onPointerLeave",g="onPointerEnter",m="pointer"),h=v==null?c:jr(v),_=x==null?c:jr(x),c=new p(S,m+"leave",v,t,f),c.target=h,c.relatedTarget=_,S=null,Yi(f)===u&&(p=new p(g,m+"enter",x,t,f),p.target=_,p.relatedTarget=h,S=p),h=S,v&&x)t:{for(p=v,g=x,m=0,_=p;_;_=Mr(_))m++;for(_=0,S=g;S;S=Mr(S))_++;for(;0<m-_;)p=Mr(p),m--;for(;0<_-m;)g=Mr(g),_--;for(;m--;){if(p===g||g!==null&&p===g.alternate)break t;p=Mr(p),g=Mr(g)}p=null}else p=null;v!==null&&ad(d,c,v,p,!1),x!==null&&h!==null&&ad(d,h,x,p,!0)}}e:{if(c=u?jr(u):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var M=vv;else if(Jf(c))if(em)M=Sv;else{M=xv;var b=_v}else(v=c.nodeName)&&v.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(M=yv);if(M&&(M=M(n,u))){Jp(d,M,t,f);break e}b&&b(n,c,u),n==="focusout"&&(b=c._wrapperState)&&b.controlled&&c.type==="number"&&zu(c,"number",c.value)}switch(b=u?jr(u):window,n){case"focusin":(Jf(b)||b.contentEditable==="true")&&(Hr=b,Yu=u,Ys=null);break;case"focusout":Ys=Yu=Hr=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,rd(d,t,f);break;case"selectionchange":if(Ev)break;case"keydown":case"keyup":rd(d,t,f)}var L;if(qc)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Vr?Kp(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Zp&&t.locale!=="ko"&&(Vr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Vr&&(L=$p()):(Si=f,Wc="value"in Si?Si.value:Si.textContent,Vr=!0)),b=Ia(u,y),0<b.length&&(y=new $f(y,n,null,t,f),d.push({event:y,listeners:b}),L?y.data=L:(L=Qp(t),L!==null&&(y.data=L)))),(L=dv?hv(n,t):pv(n,t))&&(u=Ia(u,"onBeforeInput"),0<u.length&&(f=new $f("onBeforeInput","beforeinput",null,t,f),d.push({event:f,listeners:u}),f.data=L))}cm(d,e)})}function lo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ia(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=to(n,t),s!=null&&i.unshift(lo(n,s,r)),s=to(n,e),s!=null&&i.push(lo(n,s,r))),n=n.return}return i}function Mr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ad(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=to(t,s),l!=null&&o.unshift(lo(t,l,a))):r||(l=to(t,s),l!=null&&o.push(lo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Av=/\r\n?/g,Lv=/\u0000|\uFFFD/g;function ld(n){return(typeof n=="string"?n:""+n).replace(Av,`
`).replace(Lv,"")}function zo(n,e,t){if(e=ld(e),ld(n)!==e&&t)throw Error(J(425))}function Na(){}var Zu=null,Ku=null;function Qu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,Pv=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(n){return ud.resolve(null).then(n).catch(Rv)}:Ju;function Rv(n){setTimeout(function(){throw n})}function Ol(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ro(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ro(e)}function Ci(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function cd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),kn="__reactFiber$"+Ss,uo="__reactProps$"+Ss,ii="__reactContainer$"+Ss,ec="__reactEvents$"+Ss,Iv="__reactListeners$"+Ss,Nv="__reactHandles$"+Ss;function Yi(n){var e=n[kn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ii]||t[kn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=cd(n);n!==null;){if(t=n[kn])return t;n=cd(n)}return e}n=t,t=n.parentNode}return null}function So(n){return n=n[kn]||n[ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function jr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(J(33))}function tl(n){return n[uo]||null}var tc=[],Xr=-1;function zi(n){return{current:n}}function He(n){0>Xr||(n.current=tc[Xr],tc[Xr]=null,Xr--)}function Ge(n,e){Xr++,tc[Xr]=n.current,n.current=e}var Ni={},At=zi(Ni),Gt=zi(!1),sr=Ni;function ls(n,e){var t=n.type.contextTypes;if(!t)return Ni;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Vt(n){return n=n.childContextTypes,n!=null}function Fa(){He(Gt),He(At)}function fd(n,e,t){if(At.current!==Ni)throw Error(J(168));Ge(At,e),Ge(Gt,t)}function dm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,_0(n)||"Unknown",r));return Ye({},t,i)}function za(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ni,sr=At.current,Ge(At,n),Ge(Gt,Gt.current),!0}function dd(n,e,t){var i=n.stateNode;if(!i)throw Error(J(169));t?(n=dm(n,e,sr),i.__reactInternalMemoizedMergedChildContext=n,He(Gt),He(At),Ge(At,n)):He(Gt),Ge(Gt,t)}var Zn=null,nl=!1,Ul=!1;function hm(n){Zn===null?Zn=[n]:Zn.push(n)}function Fv(n){nl=!0,hm(n)}function ki(){if(!Ul&&Zn!==null){Ul=!0;var n=0,e=Be;try{var t=Zn;for(Be=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Zn=null,nl=!1}catch(r){throw Zn!==null&&(Zn=Zn.slice(n+1)),Op(Bc,ki),r}finally{Be=e,Ul=!1}}return null}var qr=[],Yr=0,ka=null,Oa=0,an=[],ln=0,or=null,Qn=1,Jn="";function Hi(n,e){qr[Yr++]=Oa,qr[Yr++]=ka,ka=n,Oa=e}function pm(n,e,t){an[ln++]=Qn,an[ln++]=Jn,an[ln++]=or,or=n;var i=Qn;n=Jn;var r=32-An(i)-1;i&=~(1<<r),t+=1;var s=32-An(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Qn=1<<32-An(e)+r|t<<r|i,Jn=s+n}else Qn=1<<s|t<<r|i,Jn=n}function $c(n){n.return!==null&&(Hi(n,1),pm(n,1,0))}function Zc(n){for(;n===ka;)ka=qr[--Yr],qr[Yr]=null,Oa=qr[--Yr],qr[Yr]=null;for(;n===or;)or=an[--ln],an[ln]=null,Jn=an[--ln],an[ln]=null,Qn=an[--ln],an[ln]=null}var Qt=null,Kt=null,je=!1,Tn=null;function mm(n,e){var t=dn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function hd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Qt=n,Kt=Ci(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Qt=n,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=or!==null?{id:Qn,overflow:Jn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=dn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Qt=n,Kt=null,!0):!1;default:return!1}}function nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ic(n){if(je){var e=Kt;if(e){var t=e;if(!hd(n,e)){if(nc(n))throw Error(J(418));e=Ci(t.nextSibling);var i=Qt;e&&hd(n,e)?mm(i,t):(n.flags=n.flags&-4097|2,je=!1,Qt=n)}}else{if(nc(n))throw Error(J(418));n.flags=n.flags&-4097|2,je=!1,Qt=n}}}function pd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qt=n}function ko(n){if(n!==Qt)return!1;if(!je)return pd(n),je=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Qu(n.type,n.memoizedProps)),e&&(e=Kt)){if(nc(n))throw gm(),Error(J(418));for(;e;)mm(n,e),e=Ci(e.nextSibling)}if(pd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Kt=Ci(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Kt=null}}else Kt=Qt?Ci(n.stateNode.nextSibling):null;return!0}function gm(){for(var n=Kt;n;)n=Ci(n.nextSibling)}function us(){Kt=Qt=null,je=!1}function Kc(n){Tn===null?Tn=[n]:Tn.push(n)}var zv=oi.ReactCurrentBatchConfig;function wn(n,e){if(n&&n.defaultProps){e=Ye({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Ua=zi(null),Ba=null,$r=null,Qc=null;function Jc(){Qc=$r=Ba=null}function ef(n){var e=Ua.current;He(Ua),n._currentValue=e}function rc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function is(n,e){Ba=n,Qc=$r=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Bt=!0),n.firstContext=null)}function gn(n){var e=n._currentValue;if(Qc!==n)if(n={context:n,memoizedValue:e,next:null},$r===null){if(Ba===null)throw Error(J(308));$r=n,Ba.dependencies={lanes:0,firstContext:n}}else $r=$r.next=n;return e}var $i=null;function tf(n){$i===null?$i=[n]:$i.push(n)}function vm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,tf(e)):(t.next=r.next,r.next=t),e.interleaved=t,ri(n,i)}function ri(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var _i=!1;function nf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _m(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ei(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ai(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Ie&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ri(n,t)}return r=i.interleaved,r===null?(e.next=e,tf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ri(n,t)}function va(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Gc(n,t)}}function md(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ga(n,e,t,i){var r=n.updateQueue;_i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=n.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var c=a.lane,v=a.eventTime;if((i&c)===c){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,p=a;switch(c=e,v=t,p.tag){case 1:if(x=p.payload,typeof x=="function"){d=x.call(v,d,c);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,c=typeof x=="function"?x.call(v,d,c):x,c==null)break e;d=Ye({},d,c);break e;case 2:_i=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,c=r.effects,c===null?r.effects=[a]:c.push(a))}else v={eventTime:v,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,l=d):f=f.next=v,o|=c;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;c=a,a=c.next,c.next=null,r.lastBaseUpdate=c,r.shared.pending=null}}while(1);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);lr|=o,n.lanes=o,n.memoizedState=d}}function gd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var xm=new vp.Component().refs;function sc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ye({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var il={isMounted:function(n){return(n=n._reactInternals)?vr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Dt(),r=Pi(n),s=ei(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(Ln(e,n,r,i),va(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Dt(),r=Pi(n),s=ei(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ai(n,s,r),e!==null&&(Ln(e,n,r,i),va(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Dt(),i=Pi(n),r=ei(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ai(n,r,i),e!==null&&(Ln(e,n,i,t),va(e,n,i))}};function vd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!oo(t,i)||!oo(r,s):!0}function ym(n,e,t){var i=!1,r=Ni,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(r=Vt(e)?sr:At.current,i=e.contextTypes,s=(i=i!=null)?ls(n,r):Ni),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=il,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function _d(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&il.enqueueReplaceState(e,e.state,null)}function oc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=xm,nf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=gn(s):(s=Vt(e)?sr:At.current,r.context=ls(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&il.enqueueReplaceState(r,r.state,null),Ga(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ds(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(J(309));var i=t.stateNode}if(!i)throw Error(J(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===xm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(J(284));if(!t._owner)throw Error(J(290,n))}return n}function Oo(n,e){throw n=Object.prototype.toString.call(e),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function xd(n){var e=n._init;return e(n._payload)}function Sm(n){function e(g,m){if(n){var _=g.deletions;_===null?(g.deletions=[m],g.flags|=16):_.push(m)}}function t(g,m){if(!n)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function i(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function r(g,m){return g=Di(g,m),g.index=0,g.sibling=null,g}function s(g,m,_){return g.index=_,n?(_=g.alternate,_!==null?(_=_.index,_<m?(g.flags|=2,m):_):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,m,_,S){return m===null||m.tag!==6?(m=Xl(_,g.mode,S),m.return=g,m):(m=r(m,_),m.return=g,m)}function l(g,m,_,S){var M=_.type;return M===Gr?f(g,m,_.props.children,S,_.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===vi&&xd(M)===m.type)?(S=r(m,_.props),S.ref=Ds(g,m,_),S.return=g,S):(S=wa(_.type,_.key,_.props,null,g.mode,S),S.ref=Ds(g,m,_),S.return=g,S)}function u(g,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=ql(_,g.mode,S),m.return=g,m):(m=r(m,_.children||[]),m.return=g,m)}function f(g,m,_,S,M){return m===null||m.tag!==7?(m=nr(_,g.mode,S,M),m.return=g,m):(m=r(m,_),m.return=g,m)}function d(g,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Xl(""+m,g.mode,_),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Co:return _=wa(m.type,m.key,m.props,null,g.mode,_),_.ref=Ds(g,null,m),_.return=g,_;case Br:return m=ql(m,g.mode,_),m.return=g,m;case vi:var S=m._init;return d(g,S(m._payload),_)}if(Os(m)||bs(m))return m=nr(m,g.mode,_,null),m.return=g,m;Oo(g,m)}return null}function c(g,m,_,S){var M=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:a(g,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Co:return _.key===M?l(g,m,_,S):null;case Br:return _.key===M?u(g,m,_,S):null;case vi:return M=_._init,c(g,m,M(_._payload),S)}if(Os(_)||bs(_))return M!==null?null:f(g,m,_,S,null);Oo(g,_)}return null}function v(g,m,_,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(_)||null,a(m,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Co:return g=g.get(S.key===null?_:S.key)||null,l(m,g,S,M);case Br:return g=g.get(S.key===null?_:S.key)||null,u(m,g,S,M);case vi:var b=S._init;return v(g,m,_,b(S._payload),M)}if(Os(S)||bs(S))return g=g.get(_)||null,f(m,g,S,M,null);Oo(m,S)}return null}function x(g,m,_,S){for(var M=null,b=null,L=m,y=m=0,C=null;L!==null&&y<_.length;y++){L.index>y?(C=L,L=null):C=L.sibling;var P=c(g,L,_[y],S);if(P===null){L===null&&(L=C);break}n&&L&&P.alternate===null&&e(g,L),m=s(P,m,y),b===null?M=P:b.sibling=P,b=P,L=C}if(y===_.length)return t(g,L),je&&Hi(g,y),M;if(L===null){for(;y<_.length;y++)L=d(g,_[y],S),L!==null&&(m=s(L,m,y),b===null?M=L:b.sibling=L,b=L);return je&&Hi(g,y),M}for(L=i(g,L);y<_.length;y++)C=v(L,g,y,_[y],S),C!==null&&(n&&C.alternate!==null&&L.delete(C.key===null?y:C.key),m=s(C,m,y),b===null?M=C:b.sibling=C,b=C);return n&&L.forEach(function(j){return e(g,j)}),je&&Hi(g,y),M}function p(g,m,_,S){var M=bs(_);if(typeof M!="function")throw Error(J(150));if(_=M.call(_),_==null)throw Error(J(151));for(var b=M=null,L=m,y=m=0,C=null,P=_.next();L!==null&&!P.done;y++,P=_.next()){L.index>y?(C=L,L=null):C=L.sibling;var j=c(g,L,P.value,S);if(j===null){L===null&&(L=C);break}n&&L&&j.alternate===null&&e(g,L),m=s(j,m,y),b===null?M=j:b.sibling=j,b=j,L=C}if(P.done)return t(g,L),je&&Hi(g,y),M;if(L===null){for(;!P.done;y++,P=_.next())P=d(g,P.value,S),P!==null&&(m=s(P,m,y),b===null?M=P:b.sibling=P,b=P);return je&&Hi(g,y),M}for(L=i(g,L);!P.done;y++,P=_.next())P=v(L,g,y,P.value,S),P!==null&&(n&&P.alternate!==null&&L.delete(P.key===null?y:P.key),m=s(P,m,y),b===null?M=P:b.sibling=P,b=P);return n&&L.forEach(function(te){return e(g,te)}),je&&Hi(g,y),M}function h(g,m,_,S){if(typeof _=="object"&&_!==null&&_.type===Gr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Co:e:{for(var M=_.key,b=m;b!==null;){if(b.key===M){if(M=_.type,M===Gr){if(b.tag===7){t(g,b.sibling),m=r(b,_.props.children),m.return=g,g=m;break e}}else if(b.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===vi&&xd(M)===b.type){t(g,b.sibling),m=r(b,_.props),m.ref=Ds(g,b,_),m.return=g,g=m;break e}t(g,b);break}else e(g,b);b=b.sibling}_.type===Gr?(m=nr(_.props.children,g.mode,S,_.key),m.return=g,g=m):(S=wa(_.type,_.key,_.props,null,g.mode,S),S.ref=Ds(g,m,_),S.return=g,g=S)}return o(g);case Br:e:{for(b=_.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){t(g,m.sibling),m=r(m,_.children||[]),m.return=g,g=m;break e}else{t(g,m);break}else e(g,m);m=m.sibling}m=ql(_,g.mode,S),m.return=g,g=m}return o(g);case vi:return b=_._init,h(g,m,b(_._payload),S)}if(Os(_))return x(g,m,_,S);if(bs(_))return p(g,m,_,S);Oo(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(t(g,m.sibling),m=r(m,_),m.return=g,g=m):(t(g,m),m=Xl(_,g.mode,S),m.return=g,g=m),o(g)):t(g,m)}return h}var cs=Sm(!0),Mm=Sm(!1),Mo={},Bn=zi(Mo),co=zi(Mo),fo=zi(Mo);function Zi(n){if(n===Mo)throw Error(J(174));return n}function rf(n,e){switch(Ge(fo,e),Ge(co,n),Ge(Bn,Mo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ou(e,n)}He(Bn),Ge(Bn,e)}function fs(){He(Bn),He(co),He(fo)}function wm(n){Zi(fo.current);var e=Zi(Bn.current),t=Ou(e,n.type);e!==t&&(Ge(co,n),Ge(Bn,t))}function sf(n){co.current===n&&(He(Bn),He(co))}var Xe=zi(0);function Va(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bl=[];function of(){for(var n=0;n<Bl.length;n++)Bl[n]._workInProgressVersionPrimary=null;Bl.length=0}var _a=oi.ReactCurrentDispatcher,Gl=oi.ReactCurrentBatchConfig,ar=0,qe=null,ut=null,ht=null,Ha=!1,$s=!1,ho=0,kv=0;function St(){throw Error(J(321))}function af(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Pn(n[t],e[t]))return!1;return!0}function lf(n,e,t,i,r,s){if(ar=s,qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_a.current=n===null||n.memoizedState===null?Gv:Vv,n=t(i,r),$s){s=0;do{if($s=!1,ho=0,25<=s)throw Error(J(301));s+=1,ht=ut=null,e.updateQueue=null,_a.current=Hv,n=t(i,r)}while($s)}if(_a.current=Wa,e=ut!==null&&ut.next!==null,ar=0,ht=ut=qe=null,Ha=!1,e)throw Error(J(300));return n}function uf(){var n=ho!==0;return ho=0,n}function Fn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?qe.memoizedState=ht=n:ht=ht.next=n,ht}function vn(){if(ut===null){var n=qe.alternate;n=n!==null?n.memoizedState:null}else n=ut.next;var e=ht===null?qe.memoizedState:ht.next;if(e!==null)ht=e,ut=n;else{if(n===null)throw Error(J(310));ut=n,n={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},ht===null?qe.memoizedState=ht=n:ht=ht.next=n}return ht}function po(n,e){return typeof e=="function"?e(n):e}function Vl(n){var e=vn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=ut,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((ar&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,qe.lanes|=f,lr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Pn(i,e.memoizedState)||(Bt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,qe.lanes|=s,lr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Hl(n){var e=vn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Pn(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Em(){}function Tm(n,e){var t=qe,i=vn(),r=e(),s=!Pn(i.memoizedState,r);if(s&&(i.memoizedState=r,Bt=!0),i=i.queue,cf(Am.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ht!==null&&ht.memoizedState.tag&1){if(t.flags|=2048,mo(9,Cm.bind(null,t,i,r,e),void 0,null),pt===null)throw Error(J(349));(ar&30)!==0||bm(t,e,r)}return r}function bm(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Cm(n,e,t,i){e.value=t,e.getSnapshot=i,Lm(e)&&Pm(n)}function Am(n,e,t){return t(function(){Lm(e)&&Pm(n)})}function Lm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Pn(n,t)}catch{return!0}}function Pm(n){var e=ri(n,1);e!==null&&Ln(e,n,1,-1)}function yd(n){var e=Fn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:n},e.queue=n,n=n.dispatch=Bv.bind(null,qe,n),[e.memoizedState,n]}function mo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Dm(){return vn().memoizedState}function xa(n,e,t,i){var r=Fn();qe.flags|=n,r.memoizedState=mo(1|e,t,void 0,i===void 0?null:i)}function rl(n,e,t,i){var r=vn();i=i===void 0?null:i;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,i!==null&&af(i,o.deps)){r.memoizedState=mo(e,t,s,i);return}}qe.flags|=n,r.memoizedState=mo(1|e,t,s,i)}function Sd(n,e){return xa(8390656,8,n,e)}function cf(n,e){return rl(2048,8,n,e)}function Rm(n,e){return rl(4,2,n,e)}function Im(n,e){return rl(4,4,n,e)}function Nm(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Fm(n,e,t){return t=t!=null?t.concat([n]):null,rl(4,4,Nm.bind(null,e,n),t)}function ff(){}function zm(n,e){var t=vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function km(n,e){var t=vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Om(n,e,t){return(ar&21)===0?(n.baseState&&(n.baseState=!1,Bt=!0),n.memoizedState=t):(Pn(t,e)||(t=Gp(),qe.lanes|=t,lr|=t,n.baseState=!0),e)}function Ov(n,e){var t=Be;Be=t!==0&&4>t?t:4,n(!0);var i=Gl.transition;Gl.transition={};try{n(!1),e()}finally{Be=t,Gl.transition=i}}function Um(){return vn().memoizedState}function Uv(n,e,t){var i=Pi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Bm(n))Gm(e,t);else if(t=vm(n,e,t,i),t!==null){var r=Dt();Ln(t,n,i,r),Vm(t,e,i)}}function Bv(n,e,t){var i=Pi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bm(n))Gm(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Pn(a,o)){var l=e.interleaved;l===null?(r.next=r,tf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=vm(n,e,r,i),t!==null&&(r=Dt(),Ln(t,n,i,r),Vm(t,e,i))}}function Bm(n){var e=n.alternate;return n===qe||e!==null&&e===qe}function Gm(n,e){$s=Ha=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Vm(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Gc(n,t)}}var Wa={readContext:gn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},Gv={readContext:gn,useCallback:function(n,e){return Fn().memoizedState=[n,e===void 0?null:e],n},useContext:gn,useEffect:Sd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,xa(4194308,4,Nm.bind(null,e,n),t)},useLayoutEffect:function(n,e){return xa(4194308,4,n,e)},useInsertionEffect:function(n,e){return xa(4,2,n,e)},useMemo:function(n,e){var t=Fn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Fn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Uv.bind(null,qe,n),[i.memoizedState,n]},useRef:function(n){var e=Fn();return n={current:n},e.memoizedState=n},useState:yd,useDebugValue:ff,useDeferredValue:function(n){return Fn().memoizedState=n},useTransition:function(){var n=yd(!1),e=n[0];return n=Ov.bind(null,n[1]),Fn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=qe,r=Fn();if(je){if(t===void 0)throw Error(J(407));t=t()}else{if(t=e(),pt===null)throw Error(J(349));(ar&30)!==0||bm(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Sd(Am.bind(null,i,s,n),[n]),i.flags|=2048,mo(9,Cm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Fn(),e=pt.identifierPrefix;if(je){var t=Jn,i=Qn;t=(i&~(1<<32-An(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ho++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=kv++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Vv={readContext:gn,useCallback:zm,useContext:gn,useEffect:cf,useImperativeHandle:Fm,useInsertionEffect:Rm,useLayoutEffect:Im,useMemo:km,useReducer:Vl,useRef:Dm,useState:function(){return Vl(po)},useDebugValue:ff,useDeferredValue:function(n){var e=vn();return Om(e,ut.memoizedState,n)},useTransition:function(){var n=Vl(po)[0],e=vn().memoizedState;return[n,e]},useMutableSource:Em,useSyncExternalStore:Tm,useId:Um,unstable_isNewReconciler:!1},Hv={readContext:gn,useCallback:zm,useContext:gn,useEffect:cf,useImperativeHandle:Fm,useInsertionEffect:Rm,useLayoutEffect:Im,useMemo:km,useReducer:Hl,useRef:Dm,useState:function(){return Hl(po)},useDebugValue:ff,useDeferredValue:function(n){var e=vn();return ut===null?e.memoizedState=n:Om(e,ut.memoizedState,n)},useTransition:function(){var n=Hl(po)[0],e=vn().memoizedState;return[n,e]},useMutableSource:Em,useSyncExternalStore:Tm,useId:Um,unstable_isNewReconciler:!1};function ds(n,e){try{var t="",i=e;do t+=v0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Wl(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function ac(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Wv=typeof WeakMap=="function"?WeakMap:Map;function Hm(n,e,t){t=ei(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Xa||(Xa=!0,vc=i),ac(n,e)},t}function Wm(n,e,t){t=ei(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ac(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ac(n,e),typeof i!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Md(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Wv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=r_.bind(null,n,e,t),e.then(n,n))}function wd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Ed(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ei(-1,1),e.tag=2,Ai(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var jv=oi.ReactCurrentOwner,Bt=!1;function Pt(n,e,t,i){e.child=n===null?Mm(e,null,t,i):cs(e,n.child,t,i)}function Td(n,e,t,i,r){t=t.render;var s=e.ref;return is(e,r),i=lf(n,e,t,i,s,r),t=uf(),n!==null&&!Bt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,si(n,e,r)):(je&&t&&$c(e),e.flags|=1,Pt(n,e,i,r),e.child)}function bd(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,jm(n,e,s,i,r)):(n=wa(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:oo,t(o,i)&&n.ref===e.ref)return si(n,e,r)}return e.flags|=1,n=Di(s,i),n.ref=e.ref,n.return=e,e.child=n}function jm(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(oo(s,i)&&n.ref===e.ref)if(Bt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Bt=!0);else return e.lanes=n.lanes,si(n,e,r)}return lc(n,e,t,i,r)}function Xm(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Kr,Zt),Zt|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ge(Kr,Zt),Zt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ge(Kr,Zt),Zt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ge(Kr,Zt),Zt|=i;return Pt(n,e,r,t),e.child}function qm(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function lc(n,e,t,i,r){var s=Vt(t)?sr:At.current;return s=ls(e,s),is(e,r),t=lf(n,e,t,i,s,r),i=uf(),n!==null&&!Bt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,si(n,e,r)):(je&&i&&$c(e),e.flags|=1,Pt(n,e,t,r),e.child)}function Cd(n,e,t,i,r){if(Vt(t)){var s=!0;za(e)}else s=!1;if(is(e,r),e.stateNode===null)ya(n,e),ym(e,t,i),oc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Vt(t)?sr:At.current,u=ls(e,u));var f=t.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&_d(e,o,i,u),_i=!1;var c=e.memoizedState;o.state=c,Ga(e,i,o,r),l=e.memoizedState,a!==i||c!==l||Gt.current||_i?(typeof f=="function"&&(sc(e,t,f,i),l=e.memoizedState),(a=_i||vd(e,t,a,i,c,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,_m(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:wn(e.type,a),o.props=u,d=e.pendingProps,c=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Vt(t)?sr:At.current,l=ls(e,l));var v=t.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||c!==l)&&_d(e,o,i,l),_i=!1,c=e.memoizedState,o.state=c,Ga(e,i,o,r);var x=e.memoizedState;a!==d||c!==x||Gt.current||_i?(typeof v=="function"&&(sc(e,t,v,i),x=e.memoizedState),(u=_i||vd(e,t,u,i,c,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&c===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&c===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&c===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&c===n.memoizedState||(e.flags|=1024),i=!1)}return uc(n,e,t,i,s,r)}function uc(n,e,t,i,r,s){qm(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&dd(e,t,!1),si(n,e,s);i=e.stateNode,jv.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=cs(e,n.child,null,s),e.child=cs(e,null,a,s)):Pt(n,e,a,s),e.memoizedState=i.state,r&&dd(e,t,!0),e.child}function Ym(n){var e=n.stateNode;e.pendingContext?fd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&fd(n,e.context,!1),rf(n,e.containerInfo)}function Ad(n,e,t,i,r){return us(),Kc(r),e.flags|=256,Pt(n,e,t,i),e.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function fc(n){return{baseLanes:n,cachePool:null,transitions:null}}function $m(n,e,t){var i=e.pendingProps,r=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ge(Xe,r&1),n===null)return ic(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=al(o,i,0,null),n=nr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=fc(t),e.memoizedState=cc,n):df(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Xv(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Di(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Di(a,s):(s=nr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?fc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=cc,i}return s=n.child,n=s.sibling,i=Di(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function df(n,e){return e=al({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Uo(n,e,t,i){return i!==null&&Kc(i),cs(e,n.child,null,t),n=df(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Xv(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Wl(Error(J(422))),Uo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=al({mode:"visible",children:i.children},r,0,null),s=nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&cs(e,n.child,null,o),e.child.memoizedState=fc(o),e.memoizedState=cc,s);if((e.mode&1)===0)return Uo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=Wl(s,i,void 0),Uo(n,e,o,i)}if(a=(o&n.childLanes)!==0,Bt||a){if(i=pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ri(n,r),Ln(i,n,r,-1))}return _f(),i=Wl(Error(J(421))),Uo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=s_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Kt=Ci(r.nextSibling),Qt=e,je=!0,Tn=null,n!==null&&(an[ln++]=Qn,an[ln++]=Jn,an[ln++]=or,Qn=n.id,Jn=n.overflow,or=e),e=df(e,i.children),e.flags|=4096,e)}function Ld(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),rc(n.return,e,t)}function jl(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Zm(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Pt(n,e,i.children,t),i=Xe.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ld(n,t,e);else if(n.tag===19)Ld(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ge(Xe,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Va(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),jl(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Va(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}jl(e,!0,t,null,s);break;case"together":jl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ya(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function si(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),lr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(J(153));if(e.child!==null){for(n=e.child,t=Di(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Di(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function qv(n,e,t){switch(e.tag){case 3:Ym(e),us();break;case 5:wm(e);break;case 1:Vt(e.type)&&za(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ge(Ua,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ge(Xe,Xe.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?$m(n,e,t):(Ge(Xe,Xe.current&1),n=si(n,e,t),n!==null?n.sibling:null);Ge(Xe,Xe.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Zm(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ge(Xe,Xe.current),i)break;return null;case 22:case 23:return e.lanes=0,Xm(n,e,t)}return si(n,e,t)}var Km,dc,Qm,Jm;Km=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};dc=function(){};Qm=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Zi(Bn.current);var s=null;switch(t){case"input":r=Nu(n,r),i=Nu(n,i),s=[];break;case"select":r=Ye({},r,{value:void 0}),i=Ye({},i,{value:void 0}),s=[];break;case"textarea":r=ku(n,r),i=ku(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Na)}Uu(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Js.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Js.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ve("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Jm=function(n,e,t,i){t!==i&&(e.flags|=4)};function Rs(n,e){if(!je)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Yv(n,e,t){var i=e.pendingProps;switch(Zc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Vt(e.type)&&Fa(),Mt(e),null;case 3:return i=e.stateNode,fs(),He(Gt),He(At),of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ko(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Tn!==null&&(yc(Tn),Tn=null))),dc(n,e),Mt(e),null;case 5:sf(e);var r=Zi(fo.current);if(t=e.type,n!==null&&e.stateNode!=null)Qm(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Mt(e),null}if(n=Zi(Bn.current),ko(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[kn]=e,i[uo]=s,n=(e.mode&1)!==0,t){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(r=0;r<Bs.length;r++)Ve(Bs[r],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Of(i,s),Ve("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",i);break;case"textarea":Bf(i,s),Ve("invalid",i)}Uu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,n),r=["children",""+a]):Js.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",i)}switch(t){case"input":Ao(i),Uf(i,s,!0);break;case"textarea":Ao(i),Gf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Na)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=bp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[kn]=e,n[uo]=i,Km(n,e,!1,!1),e.stateNode=n;e:{switch(o=Bu(t,i),t){case"dialog":Ve("cancel",n),Ve("close",n),r=i;break;case"iframe":case"object":case"embed":Ve("load",n),r=i;break;case"video":case"audio":for(r=0;r<Bs.length;r++)Ve(Bs[r],n);r=i;break;case"source":Ve("error",n),r=i;break;case"img":case"image":case"link":Ve("error",n),Ve("load",n),r=i;break;case"details":Ve("toggle",n),r=i;break;case"input":Of(n,i),r=Nu(n,i),Ve("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ye({},i,{value:void 0}),Ve("invalid",n);break;case"textarea":Bf(n,i),r=ku(n,i),Ve("invalid",n);break;default:r=i}Uu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Lp(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&eo(n,l):typeof l=="number"&&eo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Js.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ve("scroll",n):l!=null&&Fc(n,s,l,o))}switch(t){case"input":Ao(n),Uf(n,i,!1);break;case"textarea":Ao(n),Gf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ii(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Jr(n,!!i.multiple,s,!1):i.defaultValue!=null&&Jr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Na)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mt(e),null;case 6:if(n&&e.stateNode!=null)Jm(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=Zi(fo.current),Zi(Bn.current),ko(e)){if(i=e.stateNode,t=e.memoizedProps,i[kn]=e,(s=i.nodeValue!==t)&&(n=Qt,n!==null))switch(n.tag){case 3:zo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[kn]=e,e.stateNode=i}return Mt(e),null;case 13:if(He(Xe),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(je&&Kt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)gm(),us(),e.flags|=98560,s=!1;else if(s=ko(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[kn]=e}else us(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mt(e),s=!1}else Tn!==null&&(yc(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Xe.current&1)!==0?ct===0&&(ct=3):_f())),e.updateQueue!==null&&(e.flags|=4),Mt(e),null);case 4:return fs(),dc(n,e),n===null&&ao(e.stateNode.containerInfo),Mt(e),null;case 10:return ef(e.type._context),Mt(e),null;case 17:return Vt(e.type)&&Fa(),Mt(e),null;case 19:if(He(Xe),s=e.memoizedState,s===null)return Mt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Rs(s,!1);else{if(ct!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Va(n),o!==null){for(e.flags|=128,Rs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ge(Xe,Xe.current&1|2),e.child}n=n.sibling}s.tail!==null&&tt()>hs&&(e.flags|=128,i=!0,Rs(s,!1),e.lanes=4194304)}else{if(!i)if(n=Va(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Rs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return Mt(e),null}else 2*tt()-s.renderingStartTime>hs&&t!==1073741824&&(e.flags|=128,i=!0,Rs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tt(),e.sibling=null,t=Xe.current,Ge(Xe,i?t&1|2:t&1),e):(Mt(e),null);case 22:case 23:return vf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Zt&1073741824)!==0&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function $v(n,e){switch(Zc(e),e.tag){case 1:return Vt(e.type)&&Fa(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return fs(),He(Gt),He(At),of(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return sf(e),null;case 13:if(He(Xe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(J(340));us()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return He(Xe),null;case 4:return fs(),null;case 10:return ef(e.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var Bo=!1,Tt=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,de=null;function Zr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Je(n,e,i)}else t.current=null}function hc(n,e,t){try{t()}catch(i){Je(n,e,i)}}var Pd=!1;function Kv(n,e){if(Zu=Da,n=im(),Yc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=n,c=null;t:for(;;){for(var v;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)c=d,d=v;for(;;){if(d===n)break t;if(c===t&&++u===r&&(a=o),c===s&&++f===i&&(l=o),(v=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=v}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ku={focusedElem:n,selectionRange:t},Da=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,h=x.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?p:wn(e.type,p),h);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(S){Je(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return x=Pd,Pd=!1,x}function Zs(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&hc(e,t,s)}r=r.next}while(r!==i)}}function sl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function pc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function eg(n){var e=n.alternate;e!==null&&(n.alternate=null,eg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[kn],delete e[uo],delete e[ec],delete e[Iv],delete e[Nv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tg(n){return n.tag===5||n.tag===3||n.tag===4}function Dd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Na));else if(i!==4&&(n=n.child,n!==null))for(mc(n,e,t),n=n.sibling;n!==null;)mc(n,e,t),n=n.sibling}function gc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(gc(n,e,t),n=n.sibling;n!==null;)gc(n,e,t),n=n.sibling}var vt=null,En=!1;function ui(n,e,t){for(t=t.child;t!==null;)ng(n,e,t),t=t.sibling}function ng(n,e,t){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Ka,t)}catch{}switch(t.tag){case 5:Tt||Zr(t,e);case 6:var i=vt,r=En;vt=null,ui(n,e,t),vt=i,En=r,vt!==null&&(En?(n=vt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):vt.removeChild(t.stateNode));break;case 18:vt!==null&&(En?(n=vt,t=t.stateNode,n.nodeType===8?Ol(n.parentNode,t):n.nodeType===1&&Ol(n,t),ro(n)):Ol(vt,t.stateNode));break;case 4:i=vt,r=En,vt=t.stateNode.containerInfo,En=!0,ui(n,e,t),vt=i,En=r;break;case 0:case 11:case 14:case 15:if(!Tt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&hc(t,e,o),r=r.next}while(r!==i)}ui(n,e,t);break;case 1:if(!Tt&&(Zr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Je(t,e,a)}ui(n,e,t);break;case 21:ui(n,e,t);break;case 22:t.mode&1?(Tt=(i=Tt)||t.memoizedState!==null,ui(n,e,t),Tt=i):ui(n,e,t);break;default:ui(n,e,t)}}function Rd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Zv),e.forEach(function(i){var r=o_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function _n(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,En=!1;break e;case 3:vt=a.stateNode.containerInfo,En=!0;break e;case 4:vt=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(vt===null)throw Error(J(160));ng(s,o,r),vt=null,En=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Je(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ig(e,n),e=e.sibling}function ig(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_n(e,n),Nn(n),i&4){try{Zs(3,n,n.return),sl(3,n)}catch(p){Je(n,n.return,p)}try{Zs(5,n,n.return)}catch(p){Je(n,n.return,p)}}break;case 1:_n(e,n),Nn(n),i&512&&t!==null&&Zr(t,t.return);break;case 5:if(_n(e,n),Nn(n),i&512&&t!==null&&Zr(t,t.return),n.flags&32){var r=n.stateNode;try{eo(r,"")}catch(p){Je(n,n.return,p)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ep(r,s),Bu(a,o);var u=Bu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Lp(r,d):f==="dangerouslySetInnerHTML"?Cp(r,d):f==="children"?eo(r,d):Fc(r,f,d,u)}switch(a){case"input":Fu(r,s);break;case"textarea":Tp(r,s);break;case"select":var c=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Jr(r,!!s.multiple,v,!1):c!==!!s.multiple&&(s.defaultValue!=null?Jr(r,!!s.multiple,s.defaultValue,!0):Jr(r,!!s.multiple,s.multiple?[]:"",!1))}r[uo]=s}catch(p){Je(n,n.return,p)}}break;case 6:if(_n(e,n),Nn(n),i&4){if(n.stateNode===null)throw Error(J(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(p){Je(n,n.return,p)}}break;case 3:if(_n(e,n),Nn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(p){Je(n,n.return,p)}break;case 4:_n(e,n),Nn(n);break;case 13:_n(e,n),Nn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mf=tt())),i&4&&Rd(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(Tt=(u=Tt)||f,_n(e,n),Tt=u):_n(e,n),Nn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!f&&(n.mode&1)!==0)for(de=n,f=n.child;f!==null;){for(d=de=f;de!==null;){switch(c=de,v=c.child,c.tag){case 0:case 11:case 14:case 15:Zs(4,c,c.return);break;case 1:Zr(c,c.return);var x=c.stateNode;if(typeof x.componentWillUnmount=="function"){i=c,t=c.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(p){Je(i,t,p)}}break;case 5:Zr(c,c.return);break;case 22:if(c.memoizedState!==null){Nd(d);continue}}v!==null?(v.return=c,de=v):Nd(d)}f=f.sibling}e:for(f=null,d=n;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ap("display",o))}catch(p){Je(n,n.return,p)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(p){Je(n,n.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:_n(e,n),Nn(n),i&4&&Rd(n);break;case 21:break;default:_n(e,n),Nn(n)}}function Nn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(tg(t)){var i=t;break e}t=t.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(eo(r,""),i.flags&=-33);var s=Dd(n);gc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dd(n);mc(n,a,o);break;default:throw Error(J(161))}}catch(l){Je(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Qv(n,e,t){de=n,rg(n)}function rg(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Bo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Tt;a=Bo;var u=Tt;if(Bo=o,(Tt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Fd(r):l!==null?(l.return=o,de=l):Fd(r);for(;s!==null;)de=s,rg(s),s=s.sibling;de=r,Bo=a,Tt=u}Id(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,de=s):Id(n)}}function Id(n){for(;de!==null;){var e=de;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Tt||sl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Tt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:wn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}gd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ro(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Tt||e.flags&512&&pc(e)}catch(c){Je(e,e.return,c)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Nd(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function Fd(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{sl(4,e)}catch(l){Je(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Je(e,r,l)}}var s=e.return;try{pc(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{pc(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var Jv=Math.ceil,ja=oi.ReactCurrentDispatcher,hf=oi.ReactCurrentOwner,pn=oi.ReactCurrentBatchConfig,Ie=0,pt=null,st=null,xt=0,Zt=0,Kr=zi(0),ct=0,go=null,lr=0,ol=0,pf=0,Ks=null,kt=null,mf=0,hs=1/0,Yn=null,Xa=!1,vc=null,Li=null,Go=!1,Mi=null,qa=0,Qs=0,_c=null,Sa=-1,Ma=0;function Dt(){return(Ie&6)!==0?tt():Sa!==-1?Sa:Sa=tt()}function Pi(n){return(n.mode&1)===0?1:(Ie&2)!==0&&xt!==0?xt&-xt:zv.transition!==null?(Ma===0&&(Ma=Gp()),Ma):(n=Be,n!==0||(n=window.event,n=n===void 0?16:Yp(n.type)),n)}function Ln(n,e,t,i){if(50<Qs)throw Qs=0,_c=null,Error(J(185));xo(n,t,i),((Ie&2)===0||n!==pt)&&(n===pt&&((Ie&2)===0&&(ol|=t),ct===4&&yi(n,xt)),Ht(n,i),t===1&&Ie===0&&(e.mode&1)===0&&(hs=tt()+500,nl&&ki()))}function Ht(n,e){var t=n.callbackNode;z0(n,e);var i=Pa(n,n===pt?xt:0);if(i===0)t!==null&&Wf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Wf(t),e===1)n.tag===0?Fv(zd.bind(null,n)):hm(zd.bind(null,n)),Dv(function(){(Ie&6)===0&&ki()}),t=null;else{switch(Vp(i)){case 1:t=Bc;break;case 4:t=Up;break;case 16:t=La;break;case 536870912:t=Bp;break;default:t=La}t=dg(t,sg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function sg(n,e){if(Sa=-1,Ma=0,(Ie&6)!==0)throw Error(J(327));var t=n.callbackNode;if(rs()&&n.callbackNode!==t)return null;var i=Pa(n,n===pt?xt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Ya(n,i);else{e=i;var r=Ie;Ie|=2;var s=ag();(pt!==n||xt!==e)&&(Yn=null,hs=tt()+500,tr(n,e));do try{n_();break}catch(a){og(n,a)}while(1);Jc(),ja.current=s,Ie=r,st!==null?e=0:(pt=null,xt=0,e=ct)}if(e!==0){if(e===2&&(r=ju(n),r!==0&&(i=r,e=xc(n,r))),e===1)throw t=go,tr(n,0),yi(n,i),Ht(n,tt()),t;if(e===6)yi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!e_(r)&&(e=Ya(n,i),e===2&&(s=ju(n),s!==0&&(i=s,e=xc(n,s))),e===1))throw t=go,tr(n,0),yi(n,i),Ht(n,tt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Wi(n,kt,Yn);break;case 3:if(yi(n,i),(i&130023424)===i&&(e=mf+500-tt(),10<e)){if(Pa(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Dt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ju(Wi.bind(null,n,kt,Yn),e);break}Wi(n,kt,Yn);break;case 4:if(yi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-An(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jv(i/1960))-i,10<i){n.timeoutHandle=Ju(Wi.bind(null,n,kt,Yn),i);break}Wi(n,kt,Yn);break;case 5:Wi(n,kt,Yn);break;default:throw Error(J(329))}}}return Ht(n,tt()),n.callbackNode===t?sg.bind(null,n):null}function xc(n,e){var t=Ks;return n.current.memoizedState.isDehydrated&&(tr(n,e).flags|=256),n=Ya(n,e),n!==2&&(e=kt,kt=t,e!==null&&yc(e)),n}function yc(n){kt===null?kt=n:kt.push.apply(kt,n)}function e_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Pn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yi(n,e){for(e&=~pf,e&=~ol,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-An(e),i=1<<t;n[t]=-1,e&=~i}}function zd(n){if((Ie&6)!==0)throw Error(J(327));rs();var e=Pa(n,0);if((e&1)===0)return Ht(n,tt()),null;var t=Ya(n,e);if(n.tag!==0&&t===2){var i=ju(n);i!==0&&(e=i,t=xc(n,i))}if(t===1)throw t=go,tr(n,0),yi(n,e),Ht(n,tt()),t;if(t===6)throw Error(J(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Wi(n,kt,Yn),Ht(n,tt()),null}function gf(n,e){var t=Ie;Ie|=1;try{return n(e)}finally{Ie=t,Ie===0&&(hs=tt()+500,nl&&ki())}}function ur(n){Mi!==null&&Mi.tag===0&&(Ie&6)===0&&rs();var e=Ie;Ie|=1;var t=pn.transition,i=Be;try{if(pn.transition=null,Be=1,n)return n()}finally{Be=i,pn.transition=t,Ie=e,(Ie&6)===0&&ki()}}function vf(){Zt=Kr.current,He(Kr)}function tr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Pv(t)),st!==null)for(t=st.return;t!==null;){var i=t;switch(Zc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fa();break;case 3:fs(),He(Gt),He(At),of();break;case 5:sf(i);break;case 4:fs();break;case 13:He(Xe);break;case 19:He(Xe);break;case 10:ef(i.type._context);break;case 22:case 23:vf()}t=t.return}if(pt=n,st=n=Di(n.current,null),xt=Zt=e,ct=0,go=null,pf=ol=lr=0,kt=Ks=null,$i!==null){for(e=0;e<$i.length;e++)if(t=$i[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}$i=null}return n}function og(n,e){do{var t=st;try{if(Jc(),_a.current=Wa,Ha){for(var i=qe.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ha=!1}if(ar=0,ht=ut=qe=null,$s=!1,ho=0,hf.current=null,t===null||t.return===null){ct=1,go=e,st=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if((f.mode&1)===0&&(d===0||d===11||d===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=wd(o);if(v!==null){v.flags&=-257,Ed(v,o,a,s,e),v.mode&1&&Md(s,u,e),e=v,l=u;var x=e.updateQueue;if(x===null){var p=new Set;p.add(l),e.updateQueue=p}else x.add(l);break e}else{if((e&1)===0){Md(s,u,e),_f();break e}l=Error(J(426))}}else if(je&&a.mode&1){var h=wd(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),Ed(h,o,a,s,e),Kc(ds(l,a));break e}}s=l=ds(l,a),ct!==4&&(ct=2),Ks===null?Ks=[s]:Ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Hm(s,l,e);md(s,g);break e;case 1:a=l;var m=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Li===null||!Li.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Wm(s,a,e);md(s,S);break e}}s=s.return}while(s!==null)}ug(t)}catch(M){e=M,st===t&&t!==null&&(st=t=t.return);continue}break}while(1)}function ag(){var n=ja.current;return ja.current=Wa,n===null?Wa:n}function _f(){(ct===0||ct===3||ct===2)&&(ct=4),pt===null||(lr&268435455)===0&&(ol&268435455)===0||yi(pt,xt)}function Ya(n,e){var t=Ie;Ie|=2;var i=ag();(pt!==n||xt!==e)&&(Yn=null,tr(n,e));do try{t_();break}catch(r){og(n,r)}while(1);if(Jc(),Ie=t,ja.current=i,st!==null)throw Error(J(261));return pt=null,xt=0,ct}function t_(){for(;st!==null;)lg(st)}function n_(){for(;st!==null&&!C0();)lg(st)}function lg(n){var e=fg(n.alternate,n,Zt);n.memoizedProps=n.pendingProps,e===null?ug(n):st=e,hf.current=null}function ug(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=Yv(t,e,Zt),t!==null){st=t;return}}else{if(t=$v(t,e),t!==null){t.flags&=32767,st=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ct=6,st=null;return}}if(e=e.sibling,e!==null){st=e;return}st=e=n}while(e!==null);ct===0&&(ct=5)}function Wi(n,e,t){var i=Be,r=pn.transition;try{pn.transition=null,Be=1,i_(n,e,t,i)}finally{pn.transition=r,Be=i}return null}function i_(n,e,t,i){do rs();while(Mi!==null);if((Ie&6)!==0)throw Error(J(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(k0(n,s),n===pt&&(st=pt=null,xt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Go||(Go=!0,dg(La,function(){return rs(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=pn.transition,pn.transition=null;var o=Be;Be=1;var a=Ie;Ie|=4,hf.current=null,Kv(n,t),ig(t,n),wv(Ku),Da=!!Zu,Ku=Zu=null,n.current=t,Qv(t),A0(),Ie=a,Be=o,pn.transition=s}else n.current=t;if(Go&&(Go=!1,Mi=n,qa=r),s=n.pendingLanes,s===0&&(Li=null),D0(t.stateNode),Ht(n,tt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xa)throw Xa=!1,n=vc,vc=null,n;return(qa&1)!==0&&n.tag!==0&&rs(),s=n.pendingLanes,(s&1)!==0?n===_c?Qs++:(Qs=0,_c=n):Qs=0,ki(),null}function rs(){if(Mi!==null){var n=Vp(qa),e=pn.transition,t=Be;try{if(pn.transition=null,Be=16>n?16:n,Mi===null)var i=!1;else{if(n=Mi,Mi=null,qa=0,(Ie&6)!==0)throw Error(J(331));var r=Ie;for(Ie|=4,de=n.current;de!==null;){var s=de,o=s.child;if((de.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var f=de;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var d=f.child;if(d!==null)d.return=f,de=d;else for(;de!==null;){f=de;var c=f.sibling,v=f.return;if(eg(f),f===u){de=null;break}if(c!==null){c.return=v,de=c;break}de=v}}}var x=s.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}de=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,de=g;break e}de=s.return}}var m=n.current;for(de=m;de!==null;){o=de;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,de=_;else e:for(o=m;de!==null;){if(a=de,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(M){Je(a,a.return,M)}if(a===o){de=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,de=S;break e}de=a.return}}if(Ie=r,ki(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Ka,n)}catch{}i=!0}return i}finally{Be=t,pn.transition=e}}return!1}function kd(n,e,t){e=ds(t,e),e=Hm(n,e,1),n=Ai(n,e,1),e=Dt(),n!==null&&(xo(n,1,e),Ht(n,e))}function Je(n,e,t){if(n.tag===3)kd(n,n,t);else for(;e!==null;){if(e.tag===3){kd(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Li===null||!Li.has(i))){n=ds(t,n),n=Wm(e,n,1),e=Ai(e,n,1),n=Dt(),e!==null&&(xo(e,1,n),Ht(e,n));break}}e=e.return}}function r_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Dt(),n.pingedLanes|=n.suspendedLanes&t,pt===n&&(xt&t)===t&&(ct===4||ct===3&&(xt&130023424)===xt&&500>tt()-mf?tr(n,0):pf|=t),Ht(n,e)}function cg(n,e){e===0&&((n.mode&1)===0?e=1:(e=Do,Do<<=1,(Do&130023424)===0&&(Do=4194304)));var t=Dt();n=ri(n,e),n!==null&&(xo(n,e,t),Ht(n,t))}function s_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),cg(n,t)}function o_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),cg(n,t)}var fg;fg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Gt.current)Bt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Bt=!1,qv(n,e,t);Bt=(n.flags&131072)!==0}else Bt=!1,je&&(e.flags&1048576)!==0&&pm(e,Oa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ya(n,e),n=e.pendingProps;var r=ls(e,At.current);is(e,t),r=lf(null,e,i,n,r,t);var s=uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(i)?(s=!0,za(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nf(e),r.updater=il,e.stateNode=r,r._reactInternals=e,oc(e,i,n,t),e=uc(null,e,i,!0,s,t)):(e.tag=0,je&&s&&$c(e),Pt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ya(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=l_(i),n=wn(i,n),r){case 0:e=lc(null,e,i,n,t);break e;case 1:e=Cd(null,e,i,n,t);break e;case 11:e=Td(null,e,i,n,t);break e;case 14:e=bd(null,e,i,wn(i.type,n),t);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),lc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Cd(n,e,i,r,t);case 3:e:{if(Ym(e),n===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_m(n,e),Ga(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ds(Error(J(423)),e),e=Ad(n,e,i,t,r);break e}else if(i!==r){r=ds(Error(J(424)),e),e=Ad(n,e,i,t,r);break e}else for(Kt=Ci(e.stateNode.containerInfo.firstChild),Qt=e,je=!0,Tn=null,t=Mm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(us(),i===r){e=si(n,e,t);break e}Pt(n,e,i,t)}e=e.child}return e;case 5:return wm(e),n===null&&ic(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Qu(i,r)?o=null:s!==null&&Qu(i,s)&&(e.flags|=32),qm(n,e),Pt(n,e,o,t),e.child;case 6:return n===null&&ic(e),null;case 13:return $m(n,e,t);case 4:return rf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=cs(e,null,i,t):Pt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Td(n,e,i,r,t);case 7:return Pt(n,e,e.pendingProps,t),e.child;case 8:return Pt(n,e,e.pendingProps.children,t),e.child;case 12:return Pt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ge(Ua,i._currentValue),i._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===r.children&&!Gt.current){e=si(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ei(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),rc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),rc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,is(e,t),r=gn(r),i=i(r),e.flags|=1,Pt(n,e,i,t),e.child;case 14:return i=e.type,r=wn(i,e.pendingProps),r=wn(i.type,r),bd(n,e,i,r,t);case 15:return jm(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),ya(n,e),e.tag=1,Vt(i)?(n=!0,za(e)):n=!1,is(e,t),ym(e,i,r),oc(e,i,r,t),uc(null,e,i,!0,n,t);case 19:return Zm(n,e,t);case 22:return Xm(n,e,t)}throw Error(J(156,e.tag))};function dg(n,e){return Op(n,e)}function a_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(n,e,t,i){return new a_(n,e,t,i)}function xf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function l_(n){if(typeof n=="function")return xf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===kc)return 11;if(n===Oc)return 14}return 2}function Di(n,e){var t=n.alternate;return t===null?(t=dn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function wa(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")xf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Gr:return nr(t.children,r,s,e);case zc:o=8,r|=8;break;case Pu:return n=dn(12,t,e,r|2),n.elementType=Pu,n.lanes=s,n;case Du:return n=dn(13,t,e,r),n.elementType=Du,n.lanes=s,n;case Ru:return n=dn(19,t,e,r),n.elementType=Ru,n.lanes=s,n;case Sp:return al(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case xp:o=10;break e;case yp:o=9;break e;case kc:o=11;break e;case Oc:o=14;break e;case vi:o=16,i=null;break e}throw Error(J(130,n==null?n:typeof n,""))}return e=dn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function nr(n,e,t,i){return n=dn(7,n,i,e),n.lanes=t,n}function al(n,e,t,i){return n=dn(22,n,i,e),n.elementType=Sp,n.lanes=t,n.stateNode={isHidden:!1},n}function Xl(n,e,t){return n=dn(6,n,null,e),n.lanes=t,n}function ql(n,e,t){return e=dn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function u_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yf(n,e,t,i,r,s,o,a,l){return n=new u_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),n}function c_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function hg(n){if(!n)return Ni;n=n._reactInternals;e:{if(vr(n)!==n||n.tag!==1)throw Error(J(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(n.tag===1){var t=n.type;if(Vt(t))return dm(n,t,e)}return e}function pg(n,e,t,i,r,s,o,a,l){return n=yf(t,i,!0,n,r,s,o,a,l),n.context=hg(null),t=n.current,i=Dt(),r=Pi(t),s=ei(i,r),s.callback=e!=null?e:null,Ai(t,s,r),n.current.lanes=r,xo(n,r,i),Ht(n,i),n}function ll(n,e,t,i){var r=e.current,s=Dt(),o=Pi(r);return t=hg(t),e.context===null?e.context=t:e.pendingContext=t,e=ei(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ai(r,e,o),n!==null&&(Ln(n,r,o,s),va(n,r,o)),o}function $a(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Od(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Sf(n,e){Od(n,e),(n=n.alternate)&&Od(n,e)}function f_(){return null}var mg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Mf(n){this._internalRoot=n}ul.prototype.render=Mf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(J(409));ll(n,e,null,null)};ul.prototype.unmount=Mf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ur(function(){ll(null,n,null,null)}),e[ii]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var e=jp();n={blockedOn:null,target:n,priority:e};for(var t=0;t<xi.length&&e!==0&&e<xi[t].priority;t++);xi.splice(t,0,n),t===0&&qp(n)}};function wf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ud(){}function d_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=$a(o);s.call(u)}}var o=pg(e,i,n,0,null,!1,!1,"",Ud);return n._reactRootContainer=o,n[ii]=o.current,ao(n.nodeType===8?n.parentNode:n),ur(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=$a(l);a.call(u)}}var l=yf(n,0,!1,null,null,!1,!1,"",Ud);return n._reactRootContainer=l,n[ii]=l.current,ao(n.nodeType===8?n.parentNode:n),ur(function(){ll(e,l,t,i)}),l}function fl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$a(o);a.call(l)}}ll(e,o,n,r)}else o=d_(t,e,n,r,i);return $a(o)}Hp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Us(e.pendingLanes);t!==0&&(Gc(e,t|1),Ht(e,tt()),(Ie&6)===0&&(hs=tt()+500,ki()))}break;case 13:ur(function(){var i=ri(n,1);if(i!==null){var r=Dt();Ln(i,n,1,r)}}),Sf(n,1)}};Vc=function(n){if(n.tag===13){var e=ri(n,134217728);if(e!==null){var t=Dt();Ln(e,n,134217728,t)}Sf(n,134217728)}};Wp=function(n){if(n.tag===13){var e=Pi(n),t=ri(n,e);if(t!==null){var i=Dt();Ln(t,n,e,i)}Sf(n,e)}};jp=function(){return Be};Xp=function(n,e){var t=Be;try{return Be=n,e()}finally{Be=t}};Vu=function(n,e,t){switch(e){case"input":if(Fu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=tl(i);if(!r)throw Error(J(90));wp(i),Fu(i,r)}}}break;case"textarea":Tp(n,t);break;case"select":e=t.value,e!=null&&Jr(n,!!t.multiple,e,!1)}};Rp=gf;Ip=ur;var h_={usingClientEntryPoint:!1,Events:[So,jr,tl,Pp,Dp,gf]},Is={findFiberByHostInstance:Yi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},p_={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zp(n),n===null?null:n.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||f_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{Ka=Vo.inject(p_),Un=Vo}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;en.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wf(e))throw Error(J(200));return c_(n,e,null,t)};en.createRoot=function(n,e){if(!wf(n))throw Error(J(299));var t=!1,i="",r=mg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yf(n,1,!1,null,null,t,!1,i,r),n[ii]=e.current,ao(n.nodeType===8?n.parentNode:n),new Mf(e)};en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=zp(e),n=n===null?null:n.stateNode,n};en.flushSync=function(n){return ur(n)};en.hydrate=function(n,e,t){if(!cl(e))throw Error(J(200));return fl(null,n,e,!0,t)};en.hydrateRoot=function(n,e,t){if(!wf(n))throw Error(J(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=mg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=pg(e,null,n,1,t!=null?t:null,r,!1,s,o),n[ii]=e.current,ao(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new ul(e)};en.render=function(n,e,t){if(!cl(e))throw Error(J(200));return fl(null,n,e,!1,t)};en.unmountComponentAtNode=function(n){if(!cl(n))throw Error(J(40));return n._reactRootContainer?(ur(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[ii]=null})}),!0):!1};en.unstable_batchedUpdates=gf;en.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!cl(t))throw Error(J(200));if(n==null||n._reactInternals===void 0)throw Error(J(38));return fl(n,e,t,!1,i)};en.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=en})(ap);var gg,Bd=ap.exports;gg=Bd.createRoot,Bd.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="144",wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},m_=0,Gd=1,g_=2,vg=1,v_=2,Gs=3,ps=0,mn=1,wi=2,Ri=0,ss=1,Vd=2,Hd=3,Wd=4,__=5,Ur=100,x_=101,y_=102,jd=103,Xd=104,S_=200,M_=201,w_=202,E_=203,_g=204,xg=205,T_=206,b_=207,C_=208,A_=209,L_=210,P_=0,D_=1,R_=2,Sc=3,I_=4,N_=5,F_=6,z_=7,Tf=0,k_=1,O_=2,ti=0,U_=1,B_=2,G_=3,V_=4,H_=5,yg=300,ms=301,gs=302,Mc=303,wc=304,dl=306,Ec=1e3,bn=1001,Tc=1002,Ot=1003,qd=1004,Yd=1005,un=1006,W_=1007,hl=1008,cr=1009,j_=1010,X_=1011,Sg=1012,q_=1013,Ki=1014,Qi=1015,vo=1016,Y_=1017,$_=1018,os=1020,Z_=1021,K_=1022,On=1023,Q_=1024,J_=1025,ir=1026,vs=1027,ex=1028,tx=1029,nx=1030,ix=1031,rx=1033,Yl=33776,$l=33777,Zl=33778,Kl=33779,$d=35840,Zd=35841,Kd=35842,Qd=35843,sx=36196,Jd=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,lh=37815,uh=37816,ch=37817,fh=37818,dh=37819,hh=37820,ph=37821,mh=36492,fr=3e3,Qe=3001,ox=3200,ax=3201,Mg=0,lx=1,$n="srgb",Ji="srgb-linear",Ql=7680,ux=519,gh=35044,vh="300 es",bc=1035;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jl=Math.PI/180,_h=180/Math.PI;function wo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function cx(n,e){return(n%e+e)%e}function eu(n,e,t){return(1-t)*n+t*e}function xh(n){return(n&n-1)===0&&n!==0}function Cc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ho(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(){hn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],c=i[2],v=i[5],x=i[8],p=r[0],h=r[3],g=r[6],m=r[1],_=r[4],S=r[7],M=r[2],b=r[5],L=r[8];return s[0]=o*p+a*m+l*M,s[3]=o*h+a*_+l*b,s[6]=o*g+a*S+l*L,s[1]=u*p+f*m+d*M,s[4]=u*h+f*_+d*b,s[7]=u*g+f*S+d*L,s[2]=c*p+v*m+x*M,s[5]=c*h+v*_+x*b,s[8]=c*g+v*S+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,c=a*l-f*s,v=u*s-o*l,x=t*d+i*c+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=d*p,e[1]=(r*u-f*i)*p,e[2]=(a*i-r*o)*p,e[3]=c*p,e[4]=(f*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=v*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],f=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*f,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*f,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function wg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const tu={[$n]:{[Ji]:rr},[Ji]:{[$n]:Ea}},xn={legacyMode:!0,get workingColorSpace(){return Ji},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(tu[e]&&tu[e][t]!==void 0){const i=tu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},yn={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function nu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function jo(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ji){return this.r=e,this.g=t,this.b=i,xn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ji){if(e=cx(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=nu(o,s,e+1/3),this.g=nu(o,s,e),this.b=nu(o,s,e-1/3)}return xn.toWorkingColorSpace(this,r),this}setStyle(e,t=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,f,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=$n){const i=Eg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return xn.fromWorkingColorSpace(jo(this,lt),e),Ut(lt.r*255,0,255)<<16^Ut(lt.g*255,0,255)<<8^Ut(lt.b*255,0,255)<<0}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ji){xn.fromWorkingColorSpace(jo(this,lt),t);const i=lt.r,r=lt.g,s=lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=Ji){return xn.fromWorkingColorSpace(jo(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=$n){return xn.fromWorkingColorSpace(jo(this,lt),e),e!==$n?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(yn),yn.h+=e,yn.s+=t,yn.l+=i,this.setHSL(yn.h,yn.s,yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Wo);const i=eu(yn.h,Wo.h,t),r=eu(yn.s,Wo.s,t),s=eu(yn.l,Wo.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=Eg;let Tr;class Tg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=Za("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Za("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class bg{constructor(e=null){this.isSource=!0,this.uuid=wo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function iu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fx=0;class Dn extends _r{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,i=bn,r=bn,s=un,o=hl,a=On,l=cr,u=1,f=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=wo(),this.name="",this.source=new bg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=yg;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],c=l[1],v=l[5],x=l[9],p=l[2],h=l[6],g=l[10];if(Math.abs(f-c)<.01&&Math.abs(d-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(f+c)<.1&&Math.abs(d+p)<.1&&Math.abs(x+h)<.1&&Math.abs(u+v+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,S=(v+1)/2,M=(g+1)/2,b=(f+c)/4,L=(d+p)/4,y=(x+h)/4;return _>S&&_>M?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=L/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=L/s,r=y/s),this.set(i,r,s,t),this}let m=Math.sqrt((h-x)*(h-x)+(d-p)*(d-p)+(c-f)*(c-f));return Math.abs(m)<.001&&(m=1),this.x=(h-x)/m,this.y=(d-p)/m,this.z=(c-f)/m,this.w=Math.acos((u+v+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dr extends _r{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:un,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cg extends Dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dx extends Dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const c=s[o+0],v=s[o+1],x=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(a===1){e[t+0]=c,e[t+1]=v,e[t+2]=x,e[t+3]=p;return}if(d!==p||l!==c||u!==v||f!==x){let h=1-a;const g=l*c+u*v+f*x+d*p,m=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const M=Math.sqrt(_),b=Math.atan2(M,g*m);h=Math.sin(h*b)/M,a=Math.sin(a*b)/M}const S=a*m;if(l=l*h+c*S,u=u*h+v*S,f=f*h+x*S,d=d*h+p*S,h===1-a){const M=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=M,u*=M,f*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],c=s[o+1],v=s[o+2],x=s[o+3];return e[t]=a*x+f*d+l*v-u*c,e[t+1]=l*x+f*c+u*d-a*v,e[t+2]=u*x+f*v+a*c-l*d,e[t+3]=f*x-a*d-l*c-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),c=l(i/2),v=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=c*f*d+u*v*x,this._y=u*v*d-c*f*x,this._z=u*f*x+c*v*d,this._w=u*f*d-c*v*x;break;case"YXZ":this._x=c*f*d+u*v*x,this._y=u*v*d-c*f*x,this._z=u*f*x-c*v*d,this._w=u*f*d+c*v*x;break;case"ZXY":this._x=c*f*d-u*v*x,this._y=u*v*d+c*f*x,this._z=u*f*x+c*v*d,this._w=u*f*d-c*v*x;break;case"ZYX":this._x=c*f*d-u*v*x,this._y=u*v*d+c*f*x,this._z=u*f*x-c*v*d,this._w=u*f*d+c*v*x;break;case"YZX":this._x=c*f*d+u*v*x,this._y=u*v*d+c*f*x,this._z=u*f*x-c*v*d,this._w=u*f*d-c*v*x;break;case"XZY":this._x=c*f*d-u*v*x,this._y=u*v*d-c*f*x,this._z=u*f*x+c*v*d,this._w=u*f*d+c*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],f=t[6],d=t[10],c=i+a+d;if(c>0){const v=.5/Math.sqrt(c+1);this._w=.25/v,this._x=(f-l)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(i>a&&i>d){const v=2*Math.sqrt(1+i-a-d);this._w=(f-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(a>d){const v=2*Math.sqrt(1+a-i-d);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+f)/v}else{const v=2*Math.sqrt(1+d-i-a);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(l+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-t)*f)/u,c=Math.sin(t*f)/u;return this._w=o*d+this._w*c,this._x=i*d+this._x*c,this._y=r*d+this._y*c,this._z=s*d+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,f=l*i+a*t-s*r,d=l*r+s*i-o*t,c=-s*t-o*i-a*r;return this.x=u*l+c*-s+f*-a-d*-o,this.y=f*l+c*-o+d*-s-u*-a,this.z=d*l+c*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new F,yh=new hr;class Eo{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const f=e[l],d=e[l+1],c=e[l+2];f<t&&(t=f),d<i&&(i=d),c<r&&(r=c),f>s&&(s=f),d>o&&(o=d),c>a&&(a=c)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const f=e.getX(l),d=e.getY(l),c=e.getZ(l);f<t&&(t=f),d<i&&(i=d),c<r&&(r=c),f>s&&(s=f),d>o&&(o=d),c>a&&(a=c)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Bi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Bi)}else i.boundingBox===null&&i.computeBoundingBox(),su.copy(i.boundingBox),su.applyMatrix4(e.matrixWorld),this.union(su);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Xo.subVectors(this.max,Ns),br.subVectors(e.a,Ns),Cr.subVectors(e.b,Ns),Ar.subVectors(e.c,Ns),ci.subVectors(Cr,br),fi.subVectors(Ar,Cr),Gi.subVectors(br,Ar);let t=[0,-ci.z,ci.y,0,-fi.z,fi.y,0,-Gi.z,Gi.y,ci.z,0,-ci.x,fi.z,0,-fi.x,Gi.z,0,-Gi.x,-ci.y,ci.x,0,-fi.y,fi.x,0,-Gi.y,Gi.x,0];return!ou(t,br,Cr,Ar,Xo)||(t=[1,0,0,0,1,0,0,0,1],!ou(t,br,Cr,Ar,Xo))?!1:(qo.crossVectors(ci,fi),t=[qo.x,qo.y,qo.z],ou(t,br,Cr,Ar,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new F,new F,new F,new F,new F,new F,new F,new F],Bi=new F,su=new Eo,br=new F,Cr=new F,Ar=new F,ci=new F,fi=new F,Gi=new F,Ns=new F,Xo=new F,qo=new F,Vi=new F;function ou(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Vi.fromArray(n,s);const a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),u=t.dot(Vi),f=i.dot(Vi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const hx=new Eo,Sh=new F,Yo=new F,au=new F;class pl{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){au.subVectors(e,this.center);const t=au.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(au.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Yo.set(0,0,1).multiplyScalar(e.radius):Yo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Sh.copy(e.center).add(Yo)),this.expandByPoint(Sh.copy(e.center).sub(Yo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new F,lu=new F,$o=new F,di=new F,uu=new F,Zo=new F,cu=new F;class Ag{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.direction).multiplyScalar(t).add(this.origin),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lu.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),di.copy(this.origin).sub(lu);const s=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=di.dot(this.direction),l=-di.dot($o),u=di.lengthSq(),f=Math.abs(1-o*o);let d,c,v,x;if(f>0)if(d=o*l-a,c=o*a-l,x=s*f,d>=0)if(c>=-x)if(c<=x){const p=1/f;d*=p,c*=p,v=d*(d+o*c+2*a)+c*(o*d+c+2*l)+u}else c=s,d=Math.max(0,-(o*c+a)),v=-d*d+c*(c+2*l)+u;else c=-s,d=Math.max(0,-(o*c+a)),v=-d*d+c*(c+2*l)+u;else c<=-x?(d=Math.max(0,-(-o*s+a)),c=d>0?-s:Math.min(Math.max(-s,-l),s),v=-d*d+c*(c+2*l)+u):c<=x?(d=0,c=Math.min(Math.max(-s,-l),s),v=c*(c+2*l)+u):(d=Math.max(0,-(o*s+a)),c=d>0?s:Math.min(Math.max(-s,-l),s),v=-d*d+c*(c+2*l)+u);else c=o>0?-s:s,d=Math.max(0,-(o*c+a)),v=-d*d+c*(c+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy($o).multiplyScalar(c).add(lu),v}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),r=Wn.dot(Wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,c=this.origin;return u>=0?(i=(e.min.x-c.x)*u,r=(e.max.x-c.x)*u):(i=(e.max.x-c.x)*u,r=(e.min.x-c.x)*u),f>=0?(s=(e.min.y-c.y)*f,o=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,o=(e.min.y-c.y)*f),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),d>=0?(a=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(a=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,r,s){uu.subVectors(t,e),Zo.subVectors(i,e),cu.crossVectors(uu,Zo);let o=this.direction.dot(cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(Zo.crossVectors(di,Zo));if(l<0)return null;const u=a*this.direction.dot(uu.cross(di));if(u<0||l+u>o)return null;const f=-a*di.dot(cu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,f,d,c,v,x,p,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=f,g[10]=d,g[14]=c,g[3]=v,g[7]=x,g[11]=p,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=o*f,v=o*d,x=a*f,p=a*d;t[0]=l*f,t[4]=-l*d,t[8]=u,t[1]=v+x*u,t[5]=c-p*u,t[9]=-a*l,t[2]=p-c*u,t[6]=x+v*u,t[10]=o*l}else if(e.order==="YXZ"){const c=l*f,v=l*d,x=u*f,p=u*d;t[0]=c+p*a,t[4]=x*a-v,t[8]=o*u,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=v*a-x,t[6]=p+c*a,t[10]=o*l}else if(e.order==="ZXY"){const c=l*f,v=l*d,x=u*f,p=u*d;t[0]=c-p*a,t[4]=-o*d,t[8]=x+v*a,t[1]=v+x*a,t[5]=o*f,t[9]=p-c*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const c=o*f,v=o*d,x=a*f,p=a*d;t[0]=l*f,t[4]=x*u-v,t[8]=c*u+p,t[1]=l*d,t[5]=p*u+c,t[9]=v*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const c=o*l,v=o*u,x=a*l,p=a*u;t[0]=l*f,t[4]=p-c*d,t[8]=x*d+v,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=v*d+x,t[10]=c-p*d}else if(e.order==="XZY"){const c=o*l,v=o*u,x=a*l,p=a*u;t[0]=l*f,t[4]=-d,t[8]=u*f,t[1]=c*d+p,t[5]=o*f,t[9]=v*d-x,t[2]=x*d-v,t[6]=a*f,t[10]=p*d+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),hi.crossVectors(i,Yt),hi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),hi.crossVectors(i,Yt)),hi.normalize(),Ko.crossVectors(Yt,hi),r[0]=hi.x,r[4]=Ko.x,r[8]=Yt.x,r[1]=hi.y,r[5]=Ko.y,r[9]=Yt.y,r[2]=hi.z,r[6]=Ko.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],c=i[9],v=i[13],x=i[2],p=i[6],h=i[10],g=i[14],m=i[3],_=i[7],S=i[11],M=i[15],b=r[0],L=r[4],y=r[8],C=r[12],P=r[1],j=r[5],te=r[9],U=r[13],k=r[2],X=r[6],Z=r[10],Q=r[14],I=r[3],D=r[7],N=r[11],Y=r[15];return s[0]=o*b+a*P+l*k+u*I,s[4]=o*L+a*j+l*X+u*D,s[8]=o*y+a*te+l*Z+u*N,s[12]=o*C+a*U+l*Q+u*Y,s[1]=f*b+d*P+c*k+v*I,s[5]=f*L+d*j+c*X+v*D,s[9]=f*y+d*te+c*Z+v*N,s[13]=f*C+d*U+c*Q+v*Y,s[2]=x*b+p*P+h*k+g*I,s[6]=x*L+p*j+h*X+g*D,s[10]=x*y+p*te+h*Z+g*N,s[14]=x*C+p*U+h*Q+g*Y,s[3]=m*b+_*P+S*k+M*I,s[7]=m*L+_*j+S*X+M*D,s[11]=m*y+_*te+S*Z+M*N,s[15]=m*C+_*U+S*Q+M*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],c=e[10],v=e[14],x=e[3],p=e[7],h=e[11],g=e[15];return x*(+s*l*d-r*u*d-s*a*c+i*u*c+r*a*v-i*l*v)+p*(+t*l*v-t*u*c+s*o*c-r*o*v+r*u*f-s*l*f)+h*(+t*u*d-t*a*v-s*o*d+i*o*v+s*a*f-i*u*f)+g*(-r*a*f-t*l*d+t*a*c+r*o*d-i*o*c+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],c=e[10],v=e[11],x=e[12],p=e[13],h=e[14],g=e[15],m=d*h*u-p*c*u+p*l*v-a*h*v-d*l*g+a*c*g,_=x*c*u-f*h*u-x*l*v+o*h*v+f*l*g-o*c*g,S=f*p*u-x*d*u+x*a*v-o*p*v-f*a*g+o*d*g,M=x*d*l-f*p*l-x*a*c+o*p*c+f*a*h-o*d*h,b=t*m+i*_+r*S+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/b;return e[0]=m*L,e[1]=(p*c*s-d*h*s-p*r*v+i*h*v+d*r*g-i*c*g)*L,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*g+i*l*g)*L,e[3]=(d*l*s-a*c*s-d*r*u+i*c*u+a*r*v-i*l*v)*L,e[4]=_*L,e[5]=(f*h*s-x*c*s+x*r*v-t*h*v-f*r*g+t*c*g)*L,e[6]=(x*l*s-o*h*s-x*r*u+t*h*u+o*r*g-t*l*g)*L,e[7]=(o*c*s-f*l*s+f*r*u-t*c*u-o*r*v+t*l*v)*L,e[8]=S*L,e[9]=(x*d*s-f*p*s-x*i*v+t*p*v+f*i*g-t*d*g)*L,e[10]=(o*p*s-x*a*s+x*i*u-t*p*u-o*i*g+t*a*g)*L,e[11]=(f*a*s-o*d*s-f*i*u+t*d*u+o*i*v-t*a*v)*L,e[12]=M*L,e[13]=(f*p*r-x*d*r+x*i*c-t*p*c-f*i*h+t*d*h)*L,e[14]=(x*a*r-o*p*r-x*i*l+t*p*l+o*i*h-t*a*h)*L,e[15]=(o*d*r-f*a*r+f*i*l-t*d*l-o*i*c+t*a*c)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,f=o+o,d=a+a,c=s*u,v=s*f,x=s*d,p=o*f,h=o*d,g=a*d,m=l*u,_=l*f,S=l*d,M=i.x,b=i.y,L=i.z;return r[0]=(1-(p+g))*M,r[1]=(v+S)*M,r[2]=(x-_)*M,r[3]=0,r[4]=(v-S)*b,r[5]=(1-(c+g))*b,r[6]=(h+m)*b,r[7]=0,r[8]=(x+_)*L,r[9]=(h-m)*L,r[10]=(1-(c+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Lr.set(r[0],r[1],r[2]).length();const o=Lr.set(r[4],r[5],r[6]).length(),a=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const u=1/s,f=1/o,d=1/a;return Sn.elements[0]*=u,Sn.elements[1]*=u,Sn.elements[2]*=u,Sn.elements[4]*=f,Sn.elements[5]*=f,Sn.elements[6]*=f,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r),c=-(o+s)/(o-s),v=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=c,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*l,c=(i+r)*u,v=(o+s)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-c,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Lr=new F,Sn=new mt,px=new F(0,0,0),mx=new F(1,1,1),hi=new F,Ko=new F,Yt=new F,Mh=new mt,wh=new hr;class pr{constructor(e=0,t=0,i=0,r=pr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],c=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}pr.DefaultOrder="XYZ";pr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const Eh=new F,Pr=new hr,jn=new mt,Qo=new F,Fs=new F,vx=new F,_x=new hr,Th=new F(1,0,0),bh=new F(0,1,0),Ch=new F(0,0,1),xx={type:"added"},Ah={type:"removed"};class bt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DefaultUp.clone();const e=new F,t=new pr,i=new hr,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new hn}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DefaultMatrixWorldAutoUpdate,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qo.copy(e):Qo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Fs,Qo,this.up):jn.lookAt(Qo,Fs,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(jn),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ah)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ah)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,_x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),c=o(e.skeletons),v=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),c.length>0&&(i.skeletons=c),v.length>0&&(i.animations=v),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DefaultUp=new F(0,1,0);bt.DefaultMatrixAutoUpdate=!0;bt.DefaultMatrixWorldAutoUpdate=!0;const Mn=new F,Xn=new F,fu=new F,qn=new F,Dr=new F,Rr=new F,Lh=new F,du=new F,hu=new F,pu=new F;class Kn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mn.subVectors(r,t),Xn.subVectors(i,t),fu.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Xn),l=Mn.dot(fu),u=Xn.dot(Xn),f=Xn.dot(fu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const c=1/d,v=(u*l-a*f)*c,x=(o*f-a*l)*c;return s.set(1-v-x,x,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,qn),l.set(0,0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l}static isFrontFacing(e,t,i,r){return Mn.subVectors(i,t),Xn.subVectors(e,t),Mn.cross(Xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Mn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Kn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Dr.subVectors(r,i),Rr.subVectors(s,i),du.subVectors(e,i);const l=Dr.dot(du),u=Rr.dot(du);if(l<=0&&u<=0)return t.copy(i);hu.subVectors(e,r);const f=Dr.dot(hu),d=Rr.dot(hu);if(f>=0&&d<=f)return t.copy(r);const c=l*d-f*u;if(c<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(Dr,o);pu.subVectors(e,s);const v=Dr.dot(pu),x=Rr.dot(pu);if(x>=0&&v<=x)return t.copy(s);const p=v*u-l*x;if(p<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Rr,a);const h=f*x-v*d;if(h<=0&&d-f>=0&&v-x>=0)return Lh.subVectors(s,r),a=(d-f)/(d-f+(v-x)),t.copy(r).addScaledVector(Lh,a);const g=1/(h+p+c);return o=p*g,a=c*g,t.copy(i).addScaledVector(Dr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yx=0;class Ms extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=ss,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_g,this.blendDst=xg,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ql,this.stencilZFail=Ql,this.stencilZPass=Ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ps&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pg extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new F,Jo=new Ee;class Gn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=gh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Dg extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rg extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Sx=0;const on=new mt,mu=new bt,Ir=new F,$t=new Eo,zs=new Eo,dt=new F;class Rn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?Rg:Dg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new hn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors($t.min,zs.min),$t.expandByPoint(dt),dt.addVectors($t.max,zs.max),$t.expandByPoint(dt)):($t.expandByPoint(zs.min),$t.expandByPoint(zs.max))}$t.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)dt.fromBufferAttribute(a,u),l&&(Ir.fromBufferAttribute(e,u),dt.add(Ir)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let P=0;P<a;P++)u[P]=new F,f[P]=new F;const d=new F,c=new F,v=new F,x=new Ee,p=new Ee,h=new Ee,g=new F,m=new F;function _(P,j,te){d.fromArray(r,P*3),c.fromArray(r,j*3),v.fromArray(r,te*3),x.fromArray(o,P*2),p.fromArray(o,j*2),h.fromArray(o,te*2),c.sub(d),v.sub(d),p.sub(x),h.sub(x);const U=1/(p.x*h.y-h.x*p.y);!isFinite(U)||(g.copy(c).multiplyScalar(h.y).addScaledVector(v,-p.y).multiplyScalar(U),m.copy(v).multiplyScalar(p.x).addScaledVector(c,-h.x).multiplyScalar(U),u[P].add(g),u[j].add(g),u[te].add(g),f[P].add(m),f[j].add(m),f[te].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let P=0,j=S.length;P<j;++P){const te=S[P],U=te.start,k=te.count;for(let X=U,Z=U+k;X<Z;X+=3)_(i[X+0],i[X+1],i[X+2])}const M=new F,b=new F,L=new F,y=new F;function C(P){L.fromArray(s,P*3),y.copy(L);const j=u[P];M.copy(j),M.sub(L.multiplyScalar(L.dot(j))).normalize(),b.crossVectors(y,j);const U=b.dot(f[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=U}for(let P=0,j=S.length;P<j;++P){const te=S[P],U=te.start,k=te.count;for(let X=U,Z=U+k;X<Z;X+=3)C(i[X+0]),C(i[X+1]),C(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let c=0,v=i.count;c<v;c++)i.setXYZ(c,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,f=new F,d=new F;if(e)for(let c=0,v=e.count;c<v;c+=3){const x=e.getX(c+0),p=e.getX(c+1),h=e.getX(c+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let c=0,v=t.count;c<v;c+=3)r.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(c+0,f.x,f.y,f.z),i.setXYZ(c+1,f.x,f.y,f.z),i.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,c=new u.constructor(l.length*f);let v=0,x=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?v=l[p]*a.data.stride+a.offset:v=l[p]*f;for(let g=0;g<f;g++)c[x++]=u[v++]}return new Gn(c,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const c=u[f],v=e(c,i);l.push(v)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,c=u.length;d<c;d++){const v=u[d];f.push(v.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let c=0,v=d.length;c<v;c++)f.push(d[c].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new mt,Nr=new Ag,gu=new pl,pi=new F,mi=new F,gi=new F,vu=new F,_u=new F,xu=new F,ea=new F,ta=new F,na=new F,ia=new Ee,ra=new Ee,sa=new Ee,yu=new F,oa=new F;class Cn extends bt{constructor(e=new Rn,t=new Pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),gu.copy(i.boundingSphere),gu.applyMatrix4(s),e.ray.intersectsSphere(gu)===!1)||(Ph.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Ph),i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,f=i.morphTargetsRelative,d=i.attributes.uv,c=i.attributes.uv2,v=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=v.length;p<h;p++){const g=v[p],m=r[g.materialIndex],_=Math.max(g.start,x.start),S=Math.min(a.count,Math.min(g.start+g.count,x.start+x.count));for(let M=_,b=S;M<b;M+=3){const L=a.getX(M),y=a.getX(M+1),C=a.getX(M+2);o=aa(this,m,e,Nr,l,u,f,d,c,L,y,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(a.count,x.start+x.count);for(let g=p,m=h;g<m;g+=3){const _=a.getX(g),S=a.getX(g+1),M=a.getX(g+2);o=aa(this,r,e,Nr,l,u,f,d,c,_,S,M),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=v.length;p<h;p++){const g=v[p],m=r[g.materialIndex],_=Math.max(g.start,x.start),S=Math.min(l.count,Math.min(g.start+g.count,x.start+x.count));for(let M=_,b=S;M<b;M+=3){const L=M,y=M+1,C=M+2;o=aa(this,m,e,Nr,l,u,f,d,c,L,y,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(l.count,x.start+x.count);for(let g=p,m=h;g<m;g+=3){const _=g,S=g+1,M=g+2;o=aa(this,r,e,Nr,l,u,f,d,c,_,S,M),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Mx(n,e,t,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==wi,a),l===null)return null;oa.copy(a),oa.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(oa);return u<t.near||u>t.far?null:{distance:u,point:oa.clone(),object:n}}function aa(n,e,t,i,r,s,o,a,l,u,f,d){pi.fromBufferAttribute(r,u),mi.fromBufferAttribute(r,f),gi.fromBufferAttribute(r,d);const c=n.morphTargetInfluences;if(s&&c){ea.set(0,0,0),ta.set(0,0,0),na.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const h=c[x],g=s[x];h!==0&&(vu.fromBufferAttribute(g,u),_u.fromBufferAttribute(g,f),xu.fromBufferAttribute(g,d),o?(ea.addScaledVector(vu,h),ta.addScaledVector(_u,h),na.addScaledVector(xu,h)):(ea.addScaledVector(vu.sub(pi),h),ta.addScaledVector(_u.sub(mi),h),na.addScaledVector(xu.sub(gi),h)))}pi.add(ea),mi.add(ta),gi.add(na)}n.isSkinnedMesh&&(n.boneTransform(u,pi),n.boneTransform(f,mi),n.boneTransform(d,gi));const v=Mx(n,e,t,i,pi,mi,gi,yu);if(v){a&&(ia.fromBufferAttribute(a,u),ra.fromBufferAttribute(a,f),sa.fromBufferAttribute(a,d),v.uv=Kn.getUV(yu,pi,mi,gi,ia,ra,sa,new Ee)),l&&(ia.fromBufferAttribute(l,u),ra.fromBufferAttribute(l,f),sa.fromBufferAttribute(l,d),v.uv2=Kn.getUV(yu,pi,mi,gi,ia,ra,sa,new Ee));const x={a:u,b:f,c:d,normal:new F,materialIndex:0};Kn.getNormal(pi,mi,gi,x.normal),v.face=x}return v}class ws extends Rn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let c=0,v=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2));function x(p,h,g,m,_,S,M,b,L,y,C){const P=S/L,j=M/y,te=S/2,U=M/2,k=b/2,X=L+1,Z=y+1;let Q=0,I=0;const D=new F;for(let N=0;N<Z;N++){const Y=N*j-U;for(let q=0;q<X;q++){const K=q*P-te;D[p]=K*m,D[h]=Y*_,D[g]=k,u.push(D.x,D.y,D.z),D[p]=0,D[h]=0,D[g]=b>0?1:-1,f.push(D.x,D.y,D.z),d.push(q/L),d.push(1-N/y),Q+=1}}for(let N=0;N<y;N++)for(let Y=0;Y<L;Y++){const q=c+Y+X*N,K=c+Y+X*(N+1),ue=c+(Y+1)+X*(N+1),ge=c+(Y+1)+X*N;l.push(q,K,ge),l.push(K,ue,ge),I+=6}a.addGroup(v,I,C),v+=I,c+=Q}}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const r in i)e[r]=i[r]}return e}function wx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const Ex={clone:_s,merge:Et};var Tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tx,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=wx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ig extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends Ig{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(Jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=90,zr=1;class Cx extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new cn(Fr,zr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(1,0,0)),this.add(r);const s=new cn(Fr,zr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new F(-1,0,0)),this.add(s);const o=new cn(Fr,zr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new F(0,1,0)),this.add(o);const a=new cn(Fr,zr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new F(0,-1,0)),this.add(a);const l=new cn(Fr,zr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,1)),this.add(l);const u=new cn(Fr,zr,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new F(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,f=e.getRenderTarget(),d=e.toneMapping,c=e.xr.enabled;e.toneMapping=ti,e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=c,i.texture.needsPMREMUpdate=!0}}class Ng extends Dn{constructor(e,t,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ax extends dr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ng(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ws(5,5,5),s=new mr({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ri});s.uniforms.tEquirect.value=t;const o=new Cn(r,s),a=t.minFilter;return t.minFilter===hl&&(t.minFilter=un),new Cx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Su=new F,Lx=new F,Px=new hn;class ji{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Su.subVectors(i,t).cross(Lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Px.getNormalMatrix(e),r=this.coplanarPoint(Su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new pl,la=new F;class Fg{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],f=i[6],d=i[7],c=i[8],v=i[9],x=i[10],p=i[11],h=i[12],g=i[13],m=i[14],_=i[15];return t[0].setComponents(a-r,d-l,p-c,_-h).normalize(),t[1].setComponents(a+r,d+l,p+c,_+h).normalize(),t[2].setComponents(a+s,d+u,p+v,_+g).normalize(),t[3].setComponents(a-s,d-u,p-v,_-g).normalize(),t[4].setComponents(a-o,d-f,p-x,_-m).normalize(),t[5].setComponents(a+o,d+f,p+x,_+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(la.x=r.normal.x>0?e.max.x:e.min.x,la.y=r.normal.y>0?e.max.y:e.min.y,la.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Dx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,c=u.usage,v=n.createBuffer();n.bindBuffer(f,v),n.bufferData(f,d,c),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,d){const c=f.array,v=f.updateRange;n.bindBuffer(d,u),v.count===-1?n.bufferSubData(d,0,c):(t?n.bufferSubData(d,v.offset*c.BYTES_PER_ELEMENT,c,v.offset,v.count):n.bufferSubData(d,v.offset*c.BYTES_PER_ELEMENT,c.subarray(v.offset,v.offset+v.count)),v.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(n.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const c=i.get(u);(!c||c.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,f)):d.version<u.version&&(s(d.buffer,u,f),d.version=u.version)}return{get:o,remove:a,update:l}}class ml extends Rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,c=t/l,v=[],x=[],p=[],h=[];for(let g=0;g<f;g++){const m=g*c-o;for(let _=0;_<u;_++){const S=_*d-s;x.push(S,-m,0),p.push(0,0,1),h.push(_/a),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let m=0;m<a;m++){const _=m+u*g,S=m+u*(g+1),M=m+1+u*(g+1),b=m+1+u*g;v.push(_,S,b),v.push(S,M,b)}this.setIndex(v),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(p,3)),this.setAttribute("uv",new Ct(h,2))}static fromJSON(e){return new ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox="vec3 transformed = vec3( position );",Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Gx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",sy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,my=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,My=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,by=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Cy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ay=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Xy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,eS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,iS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fS=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,dS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,mS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,MS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,wS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ES=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,TS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,bS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,CS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,AS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,LS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,NS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,US=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,BS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,o1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:Rx,alphamap_pars_fragment:Ix,alphatest_fragment:Nx,alphatest_pars_fragment:Fx,aomap_fragment:zx,aomap_pars_fragment:kx,begin_vertex:Ox,beginnormal_vertex:Ux,bsdfs:Bx,iridescence_fragment:Gx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:Hx,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:jx,clipping_planes_vertex:Xx,color_fragment:qx,color_pars_fragment:Yx,color_pars_vertex:$x,color_vertex:Zx,common:Kx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:ey,displacementmap_vertex:ty,emissivemap_fragment:ny,emissivemap_pars_fragment:iy,encodings_fragment:ry,encodings_pars_fragment:sy,envmap_fragment:oy,envmap_common_pars_fragment:ay,envmap_pars_fragment:ly,envmap_pars_vertex:uy,envmap_physical_pars_fragment:Sy,envmap_vertex:cy,fog_vertex:fy,fog_pars_vertex:dy,fog_fragment:hy,fog_pars_fragment:py,gradientmap_pars_fragment:my,lightmap_fragment:gy,lightmap_pars_fragment:vy,lights_lambert_fragment:_y,lights_lambert_pars_fragment:xy,lights_pars_begin:yy,lights_toon_fragment:My,lights_toon_pars_fragment:wy,lights_phong_fragment:Ey,lights_phong_pars_fragment:Ty,lights_physical_fragment:by,lights_physical_pars_fragment:Cy,lights_fragment_begin:Ay,lights_fragment_maps:Ly,lights_fragment_end:Py,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Iy,logdepthbuf_vertex:Ny,map_fragment:Fy,map_pars_fragment:zy,map_particle_fragment:ky,map_particle_pars_fragment:Oy,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:By,morphcolor_vertex:Gy,morphnormal_vertex:Vy,morphtarget_pars_vertex:Hy,morphtarget_vertex:Wy,normal_fragment_begin:jy,normal_fragment_maps:Xy,normal_pars_fragment:qy,normal_pars_vertex:Yy,normal_vertex:$y,normalmap_pars_fragment:Zy,clearcoat_normal_fragment_begin:Ky,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:Jy,iridescence_pars_fragment:eS,output_fragment:tS,packing:nS,premultiplied_alpha_fragment:iS,project_vertex:rS,dithering_fragment:sS,dithering_pars_fragment:oS,roughnessmap_fragment:aS,roughnessmap_pars_fragment:lS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:cS,shadowmap_vertex:fS,shadowmask_pars_fragment:dS,skinbase_vertex:hS,skinning_pars_vertex:pS,skinning_vertex:mS,skinnormal_vertex:gS,specularmap_fragment:vS,specularmap_pars_fragment:_S,tonemapping_fragment:xS,tonemapping_pars_fragment:yS,transmission_fragment:SS,transmission_pars_fragment:MS,uv_pars_fragment:wS,uv_pars_vertex:ES,uv_vertex:TS,uv2_pars_fragment:bS,uv2_pars_vertex:CS,uv2_vertex:AS,worldpos_vertex:LS,background_vert:PS,background_frag:DS,cube_vert:RS,cube_frag:IS,depth_vert:NS,depth_frag:FS,distanceRGBA_vert:zS,distanceRGBA_frag:kS,equirect_vert:OS,equirect_frag:US,linedashed_vert:BS,linedashed_frag:GS,meshbasic_vert:VS,meshbasic_frag:HS,meshlambert_vert:WS,meshlambert_frag:jS,meshmatcap_vert:XS,meshmatcap_frag:qS,meshnormal_vert:YS,meshnormal_frag:$S,meshphong_vert:ZS,meshphong_frag:KS,meshphysical_vert:QS,meshphysical_frag:JS,meshtoon_vert:e1,meshtoon_frag:t1,points_vert:n1,points_frag:i1,shadow_vert:r1,shadow_frag:s1,sprite_vert:o1,sprite_frag:a1},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},zn={basic:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Et([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Et([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Et([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Et([re.points,re.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Et([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Et([re.common,re.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Et([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Et([re.sprite,re.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:Et([re.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Et([re.common,re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Et([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};zn.physical={uniforms:Et([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function l1(n,e,t,i,r,s){const o=new Fe(0);let a=r===!0?0:1,l,u,f=null,d=0,c=null;function v(p,h){let g=!1,m=h.isScene===!0?h.background:null;m&&m.isTexture&&(m=e.get(m));const _=n.xr,S=_.getSession&&_.getSession();S&&S.environmentBlendMode==="additive"&&(m=null),m===null?x(o,a):m&&m.isColor&&(x(m,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===dl)?(u===void 0&&(u=new Cn(new ws(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:_s(zn.cube.uniforms),vertexShader:zn.cube.vertexShader,fragmentShader:zn.cube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(f!==m||d!==m.version||c!==n.toneMapping)&&(u.material.needsUpdate=!0,f=m,d=m.version,c=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new Cn(new ml(2,2),new mr({name:"BackgroundMaterial",uniforms:_s(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||d!==m.version||c!==n.toneMapping)&&(l.material.needsUpdate=!0,f=m,d=m.version,c=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,x(o,a)},render:v}}function u1(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,f=!1;function d(k,X,Z,Q,I){let D=!1;if(o){const N=p(Q,Z,X);u!==N&&(u=N,v(u.object)),D=g(k,Q,Z,I),D&&m(k,Q,Z,I)}else{const N=X.wireframe===!0;(u.geometry!==Q.id||u.program!==Z.id||u.wireframe!==N)&&(u.geometry=Q.id,u.program=Z.id,u.wireframe=N,D=!0)}I!==null&&t.update(I,34963),(D||f)&&(f=!1,y(k,X,Z,Q),I!==null&&n.bindBuffer(34963,t.get(I).buffer))}function c(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function v(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function x(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function p(k,X,Z){const Q=Z.wireframe===!0;let I=a[k.id];I===void 0&&(I={},a[k.id]=I);let D=I[X.id];D===void 0&&(D={},I[X.id]=D);let N=D[Q];return N===void 0&&(N=h(c()),D[Q]=N),N}function h(k){const X=[],Z=[],Q=[];for(let I=0;I<r;I++)X[I]=0,Z[I]=0,Q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:Q,object:k,attributes:{},index:null}}function g(k,X,Z,Q){const I=u.attributes,D=X.attributes;let N=0;const Y=Z.getAttributes();for(const q in Y)if(Y[q].location>=0){const ue=I[q];let ge=D[q];if(ge===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(ge=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(ge=k.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;N++}return u.attributesNum!==N||u.index!==Q}function m(k,X,Z,Q){const I={},D=X.attributes;let N=0;const Y=Z.getAttributes();for(const q in Y)if(Y[q].location>=0){let ue=D[q];ue===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),I[q]=ge,N++}u.attributes=I,u.attributesNum=N,u.index=Q}function _(){const k=u.newAttributes;for(let X=0,Z=k.length;X<Z;X++)k[X]=0}function S(k){M(k,0)}function M(k,X){const Z=u.newAttributes,Q=u.enabledAttributes,I=u.attributeDivisors;Z[k]=1,Q[k]===0&&(n.enableVertexAttribArray(k),Q[k]=1),I[k]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),I[k]=X)}function b(){const k=u.newAttributes,X=u.enabledAttributes;for(let Z=0,Q=X.length;Z<Q;Z++)X[Z]!==k[Z]&&(n.disableVertexAttribArray(Z),X[Z]=0)}function L(k,X,Z,Q,I,D){i.isWebGL2===!0&&(Z===5124||Z===5125)?n.vertexAttribIPointer(k,X,Z,I,D):n.vertexAttribPointer(k,X,Z,Q,I,D)}function y(k,X,Z,Q){if(i.isWebGL2===!1&&(k.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=Q.attributes,D=Z.getAttributes(),N=X.defaultAttributeValues;for(const Y in D){const q=D[Y];if(q.location>=0){let K=I[Y];if(K===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),K!==void 0){const ue=K.normalized,ge=K.itemSize,H=t.get(K);if(H===void 0)continue;const Le=H.buffer,ve=H.type,ye=H.bytesPerElement;if(K.isInterleavedBufferAttribute){const he=K.data,ke=he.stride,Te=K.offset;if(he.isInstancedInterleavedBuffer){for(let me=0;me<q.locationSize;me++)M(q.location+me,he.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<q.locationSize;me++)S(q.location+me);n.bindBuffer(34962,Le);for(let me=0;me<q.locationSize;me++)L(q.location+me,ge/q.locationSize,ve,ue,ke*ye,(Te+ge/q.locationSize*me)*ye)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<q.locationSize;he++)M(q.location+he,K.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<q.locationSize;he++)S(q.location+he);n.bindBuffer(34962,Le);for(let he=0;he<q.locationSize;he++)L(q.location+he,ge/q.locationSize,ve,ue,ge*ye,ge/q.locationSize*he*ye)}}else if(N!==void 0){const ue=N[Y];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(q.location,ue);break;case 3:n.vertexAttrib3fv(q.location,ue);break;case 4:n.vertexAttrib4fv(q.location,ue);break;default:n.vertexAttrib1fv(q.location,ue)}}}}b()}function C(){te();for(const k in a){const X=a[k];for(const Z in X){const Q=X[Z];for(const I in Q)x(Q[I].object),delete Q[I];delete X[Z]}delete a[k]}}function P(k){if(a[k.id]===void 0)return;const X=a[k.id];for(const Z in X){const Q=X[Z];for(const I in Q)x(Q[I].object),delete Q[I];delete X[Z]}delete a[k.id]}function j(k){for(const X in a){const Z=a[X];if(Z[k.id]===void 0)continue;const Q=Z[k.id];for(const I in Q)x(Q[I].object),delete Q[I];delete Z[k.id]}}function te(){U(),f=!0,u!==l&&(u=l,v(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:j,initAttributes:_,enableAttribute:S,disableUnusedAttributes:b}}function c1(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let c,v;if(r)c=n,v="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[v](s,u,f,d),t.update(f,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function f1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),c=n.getParameter(35660),v=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),g=n.getParameter(36348),m=n.getParameter(36349),_=c>0,S=o||e.has("OES_texture_float"),M=_&&S,b=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:c,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:b}}function d1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ji,a=new hn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c,v){const x=d.length!==0||c||i!==0||r;return r=c,t=f(d,v,0),i=d.length,x},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,c,v){const x=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,g=n.get(d);if(!r||x===null||x.length===0||s&&!h)s?f(null):u();else{const m=s?0:i,_=m*4;let S=g.clippingState||null;l.value=S,S=f(x,c,_,v);for(let M=0;M!==_;++M)S[M]=t[M];g.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,c,v,x){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,x!==!0||h===null){const g=v+p*4,m=c.matrixWorldInverse;a.getNormalMatrix(m),(h===null||h.length<g)&&(h=new Float32Array(g));for(let _=0,S=v;_!==p;++_,S+=4)o.copy(d[_]).applyMatrix4(m,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function h1(n){let e=new WeakMap;function t(o,a){return a===Mc?o.mapping=ms:a===wc&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Mc||a===wc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Ax(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class p1 extends Ig{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qr=4,Dh=[.125,.215,.35,.446,.526,.582],qi=20,Mu=new p1,Rh=new Fe;let wu=null;const Xi=(1+Math.sqrt(5))/2,Or=1/Xi,Ih=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Xi,Or),new F(0,Xi,-Or),new F(Or,0,Xi),new F(-Or,0,Xi),new F(Xi,Or,0),new F(-Xi,Or,0)];class Nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wu),e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:vo,format:On,encoding:fr,depthBuffer:!1},r=Fh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m1(s)),this._blurMaterial=g1(s,e,t)}return r}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,Mu)}_sceneToCubeUV(e,t,i,r){const a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,c=f.toneMapping;f.getClearColor(Rh),f.toneMapping=ti,f.autoClear=!1;const v=new Pg({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),x=new Cn(new ws,v);let p=!1;const h=e.background;h?h.isColor&&(v.color.copy(h),e.background=null,p=!0):(v.color.copy(Rh),p=!0);for(let g=0;g<6;g++){const m=g%3;m===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):m===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const _=this._cubeSize;ua(r,m*_,g>2?_:0,_,_),f.setRenderTarget(r),p&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=c,f.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ua(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Mu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ih[(r-1)%Ih.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Cn(this._lodPlanes[r],u),c=u.uniforms,v=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*qi-1),p=s/x,h=isFinite(s)?1+Math.floor(f*p):qi;h>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${qi}`);const g=[];let m=0;for(let L=0;L<qi;++L){const y=L/p,C=Math.exp(-y*y/2);g.push(C),L===0?m+=C:L<h&&(m+=2*C)}for(let L=0;L<g.length;L++)g[L]=g[L]/m;c.envMap.value=e.texture,c.samples.value=h,c.weights.value=g,c.latitudinal.value=o==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:_}=this;c.dTheta.value=x,c.mipInt.value=_-i;const S=this._sizeLods[r],M=3*S*(r>_-Qr?r-_+Qr:0),b=4*(this._cubeSize-S);ua(t,M,b,3*S,2*S),l.setRenderTarget(t),l.render(d,Mu)}}function m1(n){const e=[],t=[],i=[];let r=n;const s=n-Qr+1+Dh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Qr?l=Dh[o-n+Qr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,c=[f,f,d,f,d,d,f,f,d,d,f,d],v=6,x=6,p=3,h=2,g=1,m=new Float32Array(p*x*v),_=new Float32Array(h*x*v),S=new Float32Array(g*x*v);for(let b=0;b<v;b++){const L=b%3*2/3-1,y=b>2?0:-1,C=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];m.set(C,p*x*b),_.set(c,h*x*b);const P=[b,b,b,b,b,b];S.set(P,g*x*b)}const M=new Rn;M.setAttribute("position",new Gn(m,p)),M.setAttribute("uv",new Gn(_,h)),M.setAttribute("faceIndex",new Gn(S,g)),e.push(M),r>Qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fh(n,e,t){const i=new dr(n,e,t);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function g1(n,e,t){const i=new Float32Array(qi),r=new F(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function zh(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function kh(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Mc||l===wc,f=l===ms||l===gs;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Nh(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){t===null&&(t=new Nh(n));const c=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,c),a.addEventListener("dispose",s),c.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function x1(n,e,t,i){const r={},s=new WeakMap;function o(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const x in c.attributes)e.remove(c.attributes[x]);c.removeEventListener("dispose",o),delete r[c.id];const v=s.get(c);v&&(e.remove(v),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function a(d,c){return r[c.id]===!0||(c.addEventListener("dispose",o),r[c.id]=!0,t.memory.geometries++),c}function l(d){const c=d.attributes;for(const x in c)e.update(c[x],34962);const v=d.morphAttributes;for(const x in v){const p=v[x];for(let h=0,g=p.length;h<g;h++)e.update(p[h],34962)}}function u(d){const c=[],v=d.index,x=d.attributes.position;let p=0;if(v!==null){const m=v.array;p=v.version;for(let _=0,S=m.length;_<S;_+=3){const M=m[_+0],b=m[_+1],L=m[_+2];c.push(M,b,b,L,L,M)}}else{const m=x.array;p=x.version;for(let _=0,S=m.length/3-1;_<S;_+=3){const M=_+0,b=_+1,L=_+2;c.push(M,b,b,L,L,M)}}const h=new(wg(c)?Rg:Dg)(c,1);h.version=p;const g=s.get(d);g&&e.remove(g),s.set(d,h)}function f(d){const c=s.get(d);if(c){const v=d.index;v!==null&&c.version<v.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function y1(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}let a,l;function u(c){a=c.type,l=c.bytesPerElement}function f(c,v){n.drawElements(s,v,a,c*l),t.update(v,s,1)}function d(c,v,x){if(x===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,v,a,c*l,x),t.update(v,s,x)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d}function S1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function M1(n,e){return n[0]-e[0]}function w1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function E1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d,c){const v=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,h=p!==void 0?p.length:0;let g=s.get(f);if(g===void 0||g.count!==h){let Z=function(){k.dispose(),s.delete(f),f.removeEventListener("dispose",Z)};var x=Z;g!==void 0&&g.texture.dispose();const S=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,L=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),M===!0&&(P=2),b===!0&&(P=3);let j=f.attributes.position.count*P,te=1;j>e.maxTextureSize&&(te=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const U=new Float32Array(j*te*4*h),k=new Cg(U,j,te,h);k.type=Qi,k.needsUpdate=!0;const X=P*4;for(let Q=0;Q<h;Q++){const I=L[Q],D=y[Q],N=C[Q],Y=j*te*4*Q;for(let q=0;q<I.count;q++){const K=q*X;S===!0&&(o.fromBufferAttribute(I,q),U[Y+K+0]=o.x,U[Y+K+1]=o.y,U[Y+K+2]=o.z,U[Y+K+3]=0),M===!0&&(o.fromBufferAttribute(D,q),U[Y+K+4]=o.x,U[Y+K+5]=o.y,U[Y+K+6]=o.z,U[Y+K+7]=0),b===!0&&(o.fromBufferAttribute(N,q),U[Y+K+8]=o.x,U[Y+K+9]=o.y,U[Y+K+10]=o.z,U[Y+K+11]=N.itemSize===4?o.w:1)}}g={count:h,texture:k,size:new Ee(j,te)},s.set(f,g),f.addEventListener("dispose",Z)}let m=0;for(let S=0;S<v.length;S++)m+=v[S];const _=f.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",v),c.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const p=v===void 0?0:v.length;let h=i[f.id];if(h===void 0||h.length!==p){h=[];for(let M=0;M<p;M++)h[M]=[M,0];i[f.id]=h}for(let M=0;M<p;M++){const b=h[M];b[0]=M,b[1]=v[M]}h.sort(w1);for(let M=0;M<8;M++)M<p&&h[M][1]?(a[M][0]=h[M][0],a[M][1]=h[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(M1);const g=f.morphAttributes.position,m=f.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const b=a[M],L=b[0],y=b[1];L!==Number.MAX_SAFE_INTEGER&&y?(g&&f.getAttribute("morphTarget"+M)!==g[L]&&f.setAttribute("morphTarget"+M,g[L]),m&&f.getAttribute("morphNormal"+M)!==m[L]&&f.setAttribute("morphNormal"+M,m[L]),r[M]=y,_+=y):(g&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),m&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const S=f.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function T1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const kg=new Dn,Og=new Cg,Ug=new dx,Bg=new Ng,Oh=[],Uh=[],Bh=new Float32Array(16),Gh=new Float32Array(9),Vh=new Float32Array(4);function Es(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Oh[r];if(s===void 0&&(s=new Float32Array(r),Oh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gl(n,e){let t=Uh[e];t===void 0&&(t=new Int32Array(e),Uh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function L1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function P1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;Vh.set(i),n.uniformMatrix2fv(this.addr,!1,Vh),It(t,i)}}function D1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;Gh.set(i),n.uniformMatrix3fv(this.addr,!1,Gh),It(t,i)}}function R1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;Bh.set(i),n.uniformMatrix4fv(this.addr,!1,Bh),It(t,i)}}function I1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function N1(n,e){const t=this.cache;Rt(t,e)||(n.uniform2iv(this.addr,e),It(t,e))}function F1(n,e){const t=this.cache;Rt(t,e)||(n.uniform3iv(this.addr,e),It(t,e))}function z1(n,e){const t=this.cache;Rt(t,e)||(n.uniform4iv(this.addr,e),It(t,e))}function k1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function O1(n,e){const t=this.cache;Rt(t,e)||(n.uniform2uiv(this.addr,e),It(t,e))}function U1(n,e){const t=this.cache;Rt(t,e)||(n.uniform3uiv(this.addr,e),It(t,e))}function B1(n,e){const t=this.cache;Rt(t,e)||(n.uniform4uiv(this.addr,e),It(t,e))}function G1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||kg,r)}function V1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ug,r)}function H1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bg,r)}function W1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Og,r)}function j1(n){switch(n){case 5126:return b1;case 35664:return C1;case 35665:return A1;case 35666:return L1;case 35674:return P1;case 35675:return D1;case 35676:return R1;case 5124:case 35670:return I1;case 35667:case 35671:return N1;case 35668:case 35672:return F1;case 35669:case 35673:return z1;case 5125:return k1;case 36294:return O1;case 36295:return U1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return W1}}function X1(n,e){n.uniform1fv(this.addr,e)}function q1(n,e){const t=Es(e,this.size,2);n.uniform2fv(this.addr,t)}function Y1(n,e){const t=Es(e,this.size,3);n.uniform3fv(this.addr,t)}function $1(n,e){const t=Es(e,this.size,4);n.uniform4fv(this.addr,t)}function Z1(n,e){const t=Es(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K1(n,e){const t=Es(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q1(n,e){const t=Es(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function J1(n,e){n.uniform1iv(this.addr,e)}function eM(n,e){n.uniform2iv(this.addr,e)}function tM(n,e){n.uniform3iv(this.addr,e)}function nM(n,e){n.uniform4iv(this.addr,e)}function iM(n,e){n.uniform1uiv(this.addr,e)}function rM(n,e){n.uniform2uiv(this.addr,e)}function sM(n,e){n.uniform3uiv(this.addr,e)}function oM(n,e){n.uniform4uiv(this.addr,e)}function aM(n,e,t){const i=e.length,r=gl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||kg,r[s])}function lM(n,e,t){const i=e.length,r=gl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Ug,r[s])}function uM(n,e,t){const i=e.length,r=gl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Bg,r[s])}function cM(n,e,t){const i=e.length,r=gl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Og,r[s])}function fM(n){switch(n){case 5126:return X1;case 35664:return q1;case 35665:return Y1;case 35666:return $1;case 35674:return Z1;case 35675:return K1;case 35676:return Q1;case 5124:case 35670:return J1;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return cM}}class dM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=j1(t.type)}}class hM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=fM(t.type)}}class pM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function Hh(n,e){n.seq.push(e),n.map[e.id]=e}function mM(n,e,t){const i=n.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),o=Eu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Hh(t,u===void 0?new dM(a,n,e):new hM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new pM(a),Hh(t,d)),t=d}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Wh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let gM=0;function vM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function _M(n){switch(n){case fr:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function jh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vM(n.getShaderSource(e),o)}else return r}function xM(n,e){const t=_M(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function yM(n,e){let t;switch(e){case U_:t="Linear";break;case B_:t="Reinhard";break;case G_:t="OptimizedCineon";break;case V_:t="ACESFilmic";break;case H_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function SM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function MM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vs(n){return n!==""}function Xh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(n){return n.replace(EM,TM)}function TM(n,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ac(t)}const bM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(n){return n.replace(bM,CM)}function CM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $h(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gs&&(e="SHADOWMAP_TYPE_VSM"),e}function LM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function DM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tf:e="ENVMAP_BLENDING_MULTIPLY";break;case k_:e="ENVMAP_BLENDING_MIX";break;case O_:e="ENVMAP_BLENDING_ADD";break}return e}function RM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=AM(t),u=LM(t),f=PM(t),d=DM(t),c=RM(t),v=t.isWebGL2?"":SM(t),x=MM(s),p=r.createProgram();let h,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(Vs).join(`
`),h.length>0&&(h+=`
`),g=[v,x].filter(Vs).join(`
`),g.length>0&&(g+=`
`)):(h=[$h(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),g=[v,$h(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Ce.tonemapping_pars_fragment:"",t.toneMapping!==ti?yM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,xM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=Ac(o),o=Xh(o,t),o=qh(o,t),a=Ac(a),a=Xh(a,t),a=qh(a,t),o=Yh(o),a=Yh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=m+h+o,S=m+g+a,M=Wh(r,35633,_),b=Wh(r,35632,S);if(r.attachShader(p,M),r.attachShader(p,b),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(M).trim(),j=r.getShaderInfoLog(b).trim();let te=!0,U=!0;if(r.getProgramParameter(p,35714)===!1){te=!1;const k=jh(r,M,"vertex"),X=jh(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+k+`
`+X)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(P===""||j==="")&&(U=!1);U&&(this.diagnostics={runnable:te,programLog:C,vertexShader:{log:P,prefix:h},fragmentShader:{log:j,prefix:g}})}r.deleteShader(M),r.deleteShader(b);let L;this.getUniforms=function(){return L===void 0&&(L=new Ta(r,p)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=wM(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=gM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}let NM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zM(e),t.set(e,i)),i}}class zM{constructor(e){this.id=NM++,this.code=e,this.usedTimes=0}}function kM(n,e,t,i,r,s,o){const a=new Lg,l=new FM,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,c=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,C,P,j,te){const U=j.fog,k=te.geometry,X=y.isMeshStandardMaterial?j.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),Q=!!Z&&Z.mapping===dl?Z.image.height:null,I=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const D=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,N=D!==void 0?D.length:0;let Y=0;k.morphAttributes.position!==void 0&&(Y=1),k.morphAttributes.normal!==void 0&&(Y=2),k.morphAttributes.color!==void 0&&(Y=3);let q,K,ue,ge;if(I){const ke=zn[I];q=ke.vertexShader,K=ke.fragmentShader}else q=y.vertexShader,K=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const H=n.getRenderTarget(),Le=y.alphaTest>0,ve=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:f,shaderID:I,shaderName:y.type,vertexShader:q,fragmentShader:K,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:c,outputEncoding:H===null?n.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:fr,map:!!y.map,matcap:!!y.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===lx,tangentSpaceNormalMap:y.normalMapType===Mg,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Qe,clearcoat:ve,clearcoatMap:ve&&!!y.clearcoatMap,clearcoatRoughnessMap:ve&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ss,alphaMap:!!y.alphaMap,alphaTest:Le,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!k.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Y,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:ti,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wi,flipSided:y.side===mn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)C.push(P),C.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(g(C,y),m(C,y),C.push(n.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function g(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function m(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),y.push(a.mask)}function _(y){const C=x[y.type];let P;if(C){const j=zn[C];P=Ex.clone(j.uniforms)}else P=y.uniforms;return P}function S(y,C){let P;for(let j=0,te=u.length;j<te;j++){const U=u[j];if(U.cacheKey===C){P=U,++P.usedTimes;break}}return P===void 0&&(P=new IM(n,C,y,s),u.push(P)),P}function M(y){if(--y.usedTimes===0){const C=u.indexOf(y);u[C]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:u,dispose:L}}function OM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function UM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,c,v,x,p,h){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:c,material:v,groupOrder:x,renderOrder:d.renderOrder,z:p,group:h},n[e]=g):(g.id=d.id,g.object=d,g.geometry=c,g.material=v,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=p,g.group=h),e++,g}function a(d,c,v,x,p,h){const g=o(d,c,v,x,p,h);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):t.push(g)}function l(d,c,v,x,p,h){const g=o(d,c,v,x,p,h);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,c){t.length>1&&t.sort(d||UM),i.length>1&&i.sort(c||Zh),r.length>1&&r.sort(c||Zh)}function f(){for(let d=e,c=n.length;d<c;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function BM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Kh,n.set(i,[o])):r>=s.length?(o=new Kh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Fe};break;case"SpotLight":t={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function VM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let HM=0;function WM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jM(n,e){const t=new GM,i=VM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new F);const s=new F,o=new mt,a=new mt;function l(f,d){let c=0,v=0,x=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let p=0,h=0,g=0,m=0,_=0,S=0,M=0,b=0,L=0,y=0;f.sort(WM);const C=d!==!0?Math.PI:1;for(let j=0,te=f.length;j<te;j++){const U=f[j],k=U.color,X=U.intensity,Z=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)c+=k.r*X*C,v+=k.g*X*C,x+=k.b*X*C;else if(U.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(U.sh.coefficients[I],X);else if(U.isDirectionalLight){const I=t.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const D=U.shadow,N=i.get(U);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,r.directionalShadow[p]=N,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=U.shadow.matrix,S++}r.directional[p]=I,p++}else if(U.isSpotLight){const I=t.get(U);I.position.setFromMatrixPosition(U.matrixWorld),I.color.copy(k).multiplyScalar(X*C),I.distance=Z,I.coneCos=Math.cos(U.angle),I.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),I.decay=U.decay,r.spot[g]=I;const D=U.shadow;if(U.map&&(r.spotLightMap[L]=U.map,L++,D.updateMatrices(U),U.castShadow&&y++),r.spotLightMatrix[g]=D.matrix,U.castShadow){const N=i.get(U);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,r.spotShadow[g]=N,r.spotShadowMap[g]=Q,b++}g++}else if(U.isRectAreaLight){const I=t.get(U);I.color.copy(k).multiplyScalar(X),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),r.rectArea[m]=I,m++}else if(U.isPointLight){const I=t.get(U);if(I.color.copy(U.color).multiplyScalar(U.intensity*C),I.distance=U.distance,I.decay=U.decay,U.castShadow){const D=U.shadow,N=i.get(U);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,N.shadowCameraNear=D.camera.near,N.shadowCameraFar=D.camera.far,r.pointShadow[h]=N,r.pointShadowMap[h]=Q,r.pointShadowMatrix[h]=U.shadow.matrix,M++}r.point[h]=I,h++}else if(U.isHemisphereLight){const I=t.get(U);I.skyColor.copy(U.color).multiplyScalar(X*C),I.groundColor.copy(U.groundColor).multiplyScalar(X*C),r.hemi[_]=I,_++}}m>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=c,r.ambient[1]=v,r.ambient[2]=x;const P=r.hash;(P.directionalLength!==p||P.pointLength!==h||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==_||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==b||P.numSpotMaps!==L)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=m,r.point.length=h,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=b+L-y,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=y,P.directionalLength=p,P.pointLength=h,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=_,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=b,P.numSpotMaps=L,r.version=HM++)}function u(f,d){let c=0,v=0,x=0,p=0,h=0;const g=d.matrixWorldInverse;for(let m=0,_=f.length;m<_;m++){const S=f[m];if(S.isDirectionalLight){const M=r.directional[c];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),c++}else if(S.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(S.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const M=r.point[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),v++}else if(S.isHemisphereLight){const M=r.hemi[h];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),h++}}}return{setup:l,setupView:u,state:r}}function Qh(n,e){const t=new jM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function XM(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Qh(n,e),t.set(s,[l])):o>=a.length?(l=new Qh(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class qM extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YM extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KM(n,e,t){let i=new Fg;const r=new Ee,s=new Ee,o=new _t,a=new qM({depthPacking:ax}),l=new YM,u={},f=t.maxTextureSize,d={0:mn,1:ps,2:wi},c=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:$M,fragmentShader:ZM}),v=c.clone();v.defines.HORIZONTAL_PASS=1;const x=new Rn;x.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Cn(x,c),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg,this.render=function(S,M,b){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const L=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Ri),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let j=0,te=S.length;j<te;j++){const U=S[j],k=U.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const X=k.getFrameExtents();if(r.multiply(X),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/X.x),r.x=s.x*X.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/X.y),r.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null){const Q=this.type!==Gs?{minFilter:Ot,magFilter:Ot}:{};k.map=new dr(r.x,r.y,Q),k.map.texture.name=U.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const Z=k.getViewportCount();for(let Q=0;Q<Z;Q++){const I=k.getViewport(Q);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),P.viewport(o),k.updateMatrices(U,Q),i=k.getFrustum(),_(M,b,k.camera,U,this.type)}k.isPointLightShadow!==!0&&this.type===Gs&&g(k,b),k.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(L,y,C)};function g(S,M){const b=e.update(p);c.defines.VSM_SAMPLES!==S.blurSamples&&(c.defines.VSM_SAMPLES=S.blurSamples,v.defines.VSM_SAMPLES=S.blurSamples,c.needsUpdate=!0,v.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new dr(r.x,r.y)),c.uniforms.shadow_pass.value=S.map.texture,c.uniforms.resolution.value=S.mapSize,c.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,b,c,p,null),v.uniforms.shadow_pass.value=S.mapPass.texture,v.uniforms.resolution.value=S.mapSize,v.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,b,v,p,null)}function m(S,M,b,L,y,C){let P=null;const j=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(j!==void 0?P=j:P=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const te=P.uuid,U=M.uuid;let k=u[te];k===void 0&&(k={},u[te]=k);let X=k[U];X===void 0&&(X=P.clone(),k[U]=X),P=X}return P.visible=M.visible,P.wireframe=M.wireframe,C===Gs?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:d[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(b.matrixWorld),P.nearDistance=L,P.farDistance=y),P}function _(S,M,b,L,y){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Gs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const j=e.update(S),te=S.material;if(Array.isArray(te)){const U=j.groups;for(let k=0,X=U.length;k<X;k++){const Z=U[k],Q=te[Z.materialIndex];if(Q&&Q.visible){const I=m(S,Q,L,b.near,b.far,y);n.renderBufferDirect(b,null,j,I,S,Z)}}}else if(te.visible){const U=m(S,te,L,b.near,b.far,y);n.renderBufferDirect(b,null,j,U,S,null)}}const P=S.children;for(let j=0,te=P.length;j<te;j++)_(P[j],M,b,L,y)}}function QM(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const se=new _t;let B=null;const fe=new _t(0,0,0,0);return{setMask:function(ce){B!==ce&&!R&&(n.colorMask(ce,ce,ce,ce),B=ce)},setLocked:function(ce){R=ce},setClear:function(ce,Ne,ft,et,ai){ai===!0&&(ce*=et,Ne*=et,ft*=et),se.set(ce,Ne,ft,et),fe.equals(se)===!1&&(n.clearColor(ce,Ne,ft,et),fe.copy(se))},reset:function(){R=!1,B=null,fe.set(-1,0,0,0)}}}function s(){let R=!1,se=null,B=null,fe=null;return{setTest:function(ce){ce?Le(2929):ve(2929)},setMask:function(ce){se!==ce&&!R&&(n.depthMask(ce),se=ce)},setFunc:function(ce){if(B!==ce){if(ce)switch(ce){case P_:n.depthFunc(512);break;case D_:n.depthFunc(519);break;case R_:n.depthFunc(513);break;case Sc:n.depthFunc(515);break;case I_:n.depthFunc(514);break;case N_:n.depthFunc(518);break;case F_:n.depthFunc(516);break;case z_:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);B=ce}},setLocked:function(ce){R=ce},setClear:function(ce){fe!==ce&&(n.clearDepth(ce),fe=ce)},reset:function(){R=!1,se=null,B=null,fe=null}}}function o(){let R=!1,se=null,B=null,fe=null,ce=null,Ne=null,ft=null,et=null,ai=null;return{setTest:function($e){R||($e?Le(2960):ve(2960))},setMask:function($e){se!==$e&&!R&&(n.stencilMask($e),se=$e)},setFunc:function($e,Vn,rn){(B!==$e||fe!==Vn||ce!==rn)&&(n.stencilFunc($e,Vn,rn),B=$e,fe=Vn,ce=rn)},setOp:function($e,Vn,rn){(Ne!==$e||ft!==Vn||et!==rn)&&(n.stencilOp($e,Vn,rn),Ne=$e,ft=Vn,et=rn)},setLocked:function($e){R=$e},setClear:function($e){ai!==$e&&(n.clearStencil($e),ai=$e)},reset:function(){R=!1,se=null,B=null,fe=null,ce=null,Ne=null,ft=null,et=null,ai=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,d=new WeakMap;let c={},v={},x=new WeakMap,p=[],h=null,g=!1,m=null,_=null,S=null,M=null,b=null,L=null,y=null,C=!1,P=null,j=null,te=null,U=null,k=null;const X=n.getParameter(35661);let Z=!1,Q=0;const I=n.getParameter(7938);I.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(I)[1]),Z=Q>=1):I.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Z=Q>=2);let D=null,N={};const Y=n.getParameter(3088),q=n.getParameter(2978),K=new _t().fromArray(Y),ue=new _t().fromArray(q);function ge(R,se,B){const fe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(R,ce),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let Ne=0;Ne<B;Ne++)n.texImage2D(se+Ne,0,6408,1,1,0,6408,5121,fe);return ce}const H={};H[3553]=ge(3553,3553,1),H[34067]=ge(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Le(2929),l.setFunc(Sc),ot(!1),Wt(Gd),Le(2884),nt(Ri);function Le(R){c[R]!==!0&&(n.enable(R),c[R]=!0)}function ve(R){c[R]!==!1&&(n.disable(R),c[R]=!1)}function ye(R,se){return v[R]!==se?(n.bindFramebuffer(R,se),v[R]=se,i&&(R===36009&&(v[36160]=se),R===36160&&(v[36009]=se)),!0):!1}function he(R,se){let B=p,fe=!1;if(R)if(B=x.get(se),B===void 0&&(B=[],x.set(se,B)),R.isWebGLMultipleRenderTargets){const ce=R.texture;if(B.length!==ce.length||B[0]!==36064){for(let Ne=0,ft=ce.length;Ne<ft;Ne++)B[Ne]=36064+Ne;B.length=ce.length,fe=!0}}else B[0]!==36064&&(B[0]=36064,fe=!0);else B[0]!==1029&&(B[0]=1029,fe=!0);fe&&(t.isWebGL2?n.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function ke(R){return h!==R?(n.useProgram(R),h=R,!0):!1}const Te={[Ur]:32774,[x_]:32778,[y_]:32779};if(i)Te[jd]=32775,Te[Xd]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Te[jd]=R.MIN_EXT,Te[Xd]=R.MAX_EXT)}const me={[S_]:0,[M_]:1,[w_]:768,[_g]:770,[L_]:776,[C_]:774,[T_]:772,[E_]:769,[xg]:771,[A_]:775,[b_]:773};function nt(R,se,B,fe,ce,Ne,ft,et){if(R===Ri){g===!0&&(ve(3042),g=!1);return}if(g===!1&&(Le(3042),g=!0),R!==__){if(R!==m||et!==C){if((_!==Ur||b!==Ur)&&(n.blendEquation(32774),_=Ur,b=Ur),et)switch(R){case ss:n.blendFuncSeparate(1,771,1,771);break;case Vd:n.blendFunc(1,1);break;case Hd:n.blendFuncSeparate(0,769,0,1);break;case Wd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ss:n.blendFuncSeparate(770,771,1,771);break;case Vd:n.blendFunc(770,1);break;case Hd:n.blendFuncSeparate(0,769,0,1);break;case Wd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,M=null,L=null,y=null,m=R,C=et}return}ce=ce||se,Ne=Ne||B,ft=ft||fe,(se!==_||ce!==b)&&(n.blendEquationSeparate(Te[se],Te[ce]),_=se,b=ce),(B!==S||fe!==M||Ne!==L||ft!==y)&&(n.blendFuncSeparate(me[B],me[fe],me[Ne],me[ft]),S=B,M=fe,L=Ne,y=ft),m=R,C=null}function gt(R,se){R.side===wi?ve(2884):Le(2884);let B=R.side===mn;se&&(B=!B),ot(B),R.blending===ss&&R.transparent===!1?nt(Ri):nt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const fe=R.stencilWrite;u.setTest(fe),fe&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Oe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Le(32926):ve(32926)}function ot(R){P!==R&&(R?n.frontFace(2304):n.frontFace(2305),P=R)}function Wt(R){R!==m_?(Le(2884),R!==j&&(R===Gd?n.cullFace(1029):R===g_?n.cullFace(1028):n.cullFace(1032))):ve(2884),j=R}function at(R){R!==te&&(Z&&n.lineWidth(R),te=R)}function Oe(R,se,B){R?(Le(32823),(U!==se||k!==B)&&(n.polygonOffset(se,B),U=se,k=B)):ve(32823)}function nn(R){R?Le(3089):ve(3089)}function jt(R){R===void 0&&(R=33984+X-1),D!==R&&(n.activeTexture(R),D=R)}function A(R,se){D===null&&jt();let B=N[D];B===void 0&&(B={type:void 0,texture:void 0},N[D]=B),(B.type!==R||B.texture!==se)&&(n.bindTexture(R,se||H[R]),B.type=R,B.texture=se)}function w(){const R=N[D];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function E(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(R){K.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function oe(R){ue.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ue.copy(R))}function xe(R,se){let B=d.get(se);B===void 0&&(B=new WeakMap,d.set(se,B));let fe=B.get(R);fe===void 0&&(fe=n.getUniformBlockIndex(se,R.name),B.set(R,fe))}function Pe(R,se){const fe=d.get(se).get(R);f.get(R)!==fe&&(n.uniformBlockBinding(se,fe,R.__bindingPointIndex),f.set(R,fe))}function We(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},D=null,N={},v={},x=new WeakMap,p=[],h=null,g=!1,m=null,_=null,S=null,M=null,b=null,L=null,y=null,C=!1,P=null,j=null,te=null,U=null,k=null,K.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Le,disable:ve,bindFramebuffer:ye,drawBuffers:he,useProgram:ke,setBlending:nt,setMaterial:gt,setFlipSided:ot,setCullFace:Wt,setLineWidth:at,setPolygonOffset:Oe,setScissorTest:nn,activeTexture:jt,bindTexture:A,unbindTexture:w,compressedTexImage2D:G,texImage2D:$,texImage3D:ie,updateUBOMapping:xe,uniformBlockBinding:Pe,texStorage2D:_e,texStorage3D:E,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:ae,scissor:le,viewport:oe,reset:We}}function JM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,d=r.maxSamples,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,w){return g?new OffscreenCanvas(A,w):Za("canvas")}function _(A,w,G,ee){let ne=1;if((A.width>ee||A.height>ee)&&(ne=ee/Math.max(A.width,A.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=w?Cc:Math.floor,_e=ae(ne*A.width),E=ae(ne*A.height);p===void 0&&(p=m(_e,E));const $=G?m(_e,E):p;return $.width=_e,$.height=E,$.getContext("2d").drawImage(A,0,0,_e,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+E+")."),$}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return xh(A.width)&&xh(A.height)}function M(A){return a?!1:A.wrapS!==bn||A.wrapT!==bn||A.minFilter!==Ot&&A.minFilter!==un}function b(A,w){return A.generateMipmaps&&w&&A.minFilter!==Ot&&A.minFilter!==un}function L(A){n.generateMipmap(A)}function y(A,w,G,ee,ne=!1){if(a===!1)return w;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=w;return w===6403&&(G===5126&&(ae=33326),G===5131&&(ae=33325),G===5121&&(ae=33321)),w===33319&&(G===5126&&(ae=33328),G===5131&&(ae=33327),G===5121&&(ae=33323)),w===6408&&(G===5126&&(ae=34836),G===5131&&(ae=34842),G===5121&&(ae=ee===Qe&&ne===!1?35907:32856),G===32819&&(ae=32854),G===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function C(A,w,G){return b(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==Ot&&A.minFilter!==un?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){return A===Ot||A===qd||A===Yd?9728:9729}function j(A){const w=A.target;w.removeEventListener("dispose",j),U(w),w.isVideoTexture&&x.delete(w)}function te(A){const w=A.target;w.removeEventListener("dispose",te),X(w)}function U(A){const w=i.get(A);if(w.__webglInit===void 0)return;const G=A.source,ee=h.get(G);if(ee){const ne=ee[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(A),Object.keys(ee).length===0&&h.delete(G)}i.remove(A)}function k(A){const w=i.get(A);n.deleteTexture(w.__webglTexture);const G=A.source,ee=h.get(G);delete ee[w.__cacheKey],o.memory.textures--}function X(A){const w=A.texture,G=i.get(A),ee=i.get(w);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(G.__webglFramebuffer[ne]),G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,ae=w.length;ne<ae;ne++){const _e=i.get(w[ne]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(w[ne])}i.remove(w),i.remove(A)}let Z=0;function Q(){Z=0}function I(){const A=Z;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Z+=1,A}function D(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function N(A,w){const G=i.get(A);if(A.isVideoTexture&&nn(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(G,A,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,G.__webglTexture)}function Y(A,w){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ve(G,A,w);return}t.activeTexture(33984+w),t.bindTexture(35866,G.__webglTexture)}function q(A,w){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ve(G,A,w);return}t.activeTexture(33984+w),t.bindTexture(32879,G.__webglTexture)}function K(A,w){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ye(G,A,w);return}t.activeTexture(33984+w),t.bindTexture(34067,G.__webglTexture)}const ue={[Ec]:10497,[bn]:33071,[Tc]:33648},ge={[Ot]:9728,[qd]:9984,[Yd]:9986,[un]:9729,[W_]:9985,[hl]:9987};function H(A,w,G){if(G?(n.texParameteri(A,10242,ue[w.wrapS]),n.texParameteri(A,10243,ue[w.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,ue[w.wrapR]),n.texParameteri(A,10240,ge[w.magFilter]),n.texParameteri(A,10241,ge[w.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(w.wrapS!==bn||w.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,P(w.magFilter)),n.texParameteri(A,10241,P(w.minFilter)),w.minFilter!==Ot&&w.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.type===Qi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===vo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Le(A,w){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",j));const ee=w.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const ae=D(w);if(ae!==A.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[ae].usedTimes++;const _e=ne[A.__cacheKey];_e!==void 0&&(ne[A.__cacheKey].usedTimes--,_e.usedTimes===0&&k(w)),A.__cacheKey=ae,A.__webglTexture=ne[ae].texture}return G}function ve(A,w,G){let ee=3553;w.isDataArrayTexture&&(ee=35866),w.isData3DTexture&&(ee=32879);const ne=Le(A,w),ae=w.source;if(t.activeTexture(33984+G),t.bindTexture(ee,A.__webglTexture),ae.version!==ae.__currentVersion||ne===!0){n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const _e=M(w)&&S(w.image)===!1;let E=_(w.image,_e,!1,f);E=jt(w,E);const $=S(E)||a,ie=s.convert(w.format,w.encoding);let le=s.convert(w.type),oe=y(w.internalFormat,ie,le,w.encoding,w.isVideoTexture);H(ee,w,$);let xe;const Pe=w.mipmaps,We=a&&w.isVideoTexture!==!0,R=ae.__currentVersion===void 0||ne===!0,se=C(w,E,$);if(w.isDepthTexture)oe=6402,a?w.type===Qi?oe=36012:w.type===Ki?oe=33190:w.type===os?oe=35056:oe=33189:w.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ir&&oe===6402&&w.type!==Sg&&w.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ki,le=s.convert(w.type)),w.format===vs&&oe===6402&&(oe=34041,w.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=os,le=s.convert(w.type))),R&&(We?t.texStorage2D(3553,1,oe,E.width,E.height):t.texImage2D(3553,0,oe,E.width,E.height,0,ie,le,null));else if(w.isDataTexture)if(Pe.length>0&&$){We&&R&&t.texStorage2D(3553,se,oe,Pe[0].width,Pe[0].height);for(let B=0,fe=Pe.length;B<fe;B++)xe=Pe[B],We?t.texSubImage2D(3553,B,0,0,xe.width,xe.height,ie,le,xe.data):t.texImage2D(3553,B,oe,xe.width,xe.height,0,ie,le,xe.data);w.generateMipmaps=!1}else We?(R&&t.texStorage2D(3553,se,oe,E.width,E.height),t.texSubImage2D(3553,0,0,0,E.width,E.height,ie,le,E.data)):t.texImage2D(3553,0,oe,E.width,E.height,0,ie,le,E.data);else if(w.isCompressedTexture){We&&R&&t.texStorage2D(3553,se,oe,Pe[0].width,Pe[0].height);for(let B=0,fe=Pe.length;B<fe;B++)xe=Pe[B],w.format!==On?ie!==null?We?t.compressedTexSubImage2D(3553,B,0,0,xe.width,xe.height,ie,xe.data):t.compressedTexImage2D(3553,B,oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(3553,B,0,0,xe.width,xe.height,ie,le,xe.data):t.texImage2D(3553,B,oe,xe.width,xe.height,0,ie,le,xe.data)}else if(w.isDataArrayTexture)We?(R&&t.texStorage3D(35866,se,oe,E.width,E.height,E.depth),t.texSubImage3D(35866,0,0,0,0,E.width,E.height,E.depth,ie,le,E.data)):t.texImage3D(35866,0,oe,E.width,E.height,E.depth,0,ie,le,E.data);else if(w.isData3DTexture)We?(R&&t.texStorage3D(32879,se,oe,E.width,E.height,E.depth),t.texSubImage3D(32879,0,0,0,0,E.width,E.height,E.depth,ie,le,E.data)):t.texImage3D(32879,0,oe,E.width,E.height,E.depth,0,ie,le,E.data);else if(w.isFramebufferTexture){if(R)if(We)t.texStorage2D(3553,se,oe,E.width,E.height);else{let B=E.width,fe=E.height;for(let ce=0;ce<se;ce++)t.texImage2D(3553,ce,oe,B,fe,0,ie,le,null),B>>=1,fe>>=1}}else if(Pe.length>0&&$){We&&R&&t.texStorage2D(3553,se,oe,Pe[0].width,Pe[0].height);for(let B=0,fe=Pe.length;B<fe;B++)xe=Pe[B],We?t.texSubImage2D(3553,B,0,0,ie,le,xe):t.texImage2D(3553,B,oe,ie,le,xe);w.generateMipmaps=!1}else We?(R&&t.texStorage2D(3553,se,oe,E.width,E.height),t.texSubImage2D(3553,0,0,0,ie,le,E)):t.texImage2D(3553,0,oe,ie,le,E);b(w,$)&&L(ee),ae.__currentVersion=ae.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ye(A,w,G){if(w.image.length!==6)return;const ee=Le(A,w),ne=w.source;if(t.activeTexture(33984+G),t.bindTexture(34067,A.__webglTexture),ne.version!==ne.__currentVersion||ee===!0){n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const ae=w.isCompressedTexture||w.image[0].isCompressedTexture,_e=w.image[0]&&w.image[0].isDataTexture,E=[];for(let B=0;B<6;B++)!ae&&!_e?E[B]=_(w.image[B],!1,!0,u):E[B]=_e?w.image[B].image:w.image[B],E[B]=jt(w,E[B]);const $=E[0],ie=S($)||a,le=s.convert(w.format,w.encoding),oe=s.convert(w.type),xe=y(w.internalFormat,le,oe,w.encoding),Pe=a&&w.isVideoTexture!==!0,We=ne.__currentVersion===void 0||ee===!0;let R=C(w,$,ie);H(34067,w,ie);let se;if(ae){Pe&&We&&t.texStorage2D(34067,R,xe,$.width,$.height);for(let B=0;B<6;B++){se=E[B].mipmaps;for(let fe=0;fe<se.length;fe++){const ce=se[fe];w.format!==On?le!==null?Pe?t.compressedTexSubImage2D(34069+B,fe,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(34069+B,fe,xe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+B,fe,0,0,ce.width,ce.height,le,oe,ce.data):t.texImage2D(34069+B,fe,xe,ce.width,ce.height,0,le,oe,ce.data)}}}else{se=w.mipmaps,Pe&&We&&(se.length>0&&R++,t.texStorage2D(34067,R,xe,E[0].width,E[0].height));for(let B=0;B<6;B++)if(_e){Pe?t.texSubImage2D(34069+B,0,0,0,E[B].width,E[B].height,le,oe,E[B].data):t.texImage2D(34069+B,0,xe,E[B].width,E[B].height,0,le,oe,E[B].data);for(let fe=0;fe<se.length;fe++){const Ne=se[fe].image[B].image;Pe?t.texSubImage2D(34069+B,fe+1,0,0,Ne.width,Ne.height,le,oe,Ne.data):t.texImage2D(34069+B,fe+1,xe,Ne.width,Ne.height,0,le,oe,Ne.data)}}else{Pe?t.texSubImage2D(34069+B,0,0,0,le,oe,E[B]):t.texImage2D(34069+B,0,xe,le,oe,E[B]);for(let fe=0;fe<se.length;fe++){const ce=se[fe];Pe?t.texSubImage2D(34069+B,fe+1,0,0,le,oe,ce.image[B]):t.texImage2D(34069+B,fe+1,xe,le,oe,ce.image[B])}}}b(w,ie)&&L(34067),ne.__currentVersion=ne.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function he(A,w,G,ee,ne){const ae=s.convert(G.format,G.encoding),_e=s.convert(G.type),E=y(G.internalFormat,ae,_e,G.encoding);i.get(w).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,E,w.width,w.height,w.depth,0,ae,_e,null):t.texImage2D(ne,0,E,w.width,w.height,0,ae,_e,null)),t.bindFramebuffer(36160,A),Oe(w)?c.framebufferTexture2DMultisampleEXT(36160,ee,ne,i.get(G).__webglTexture,0,at(w)):n.framebufferTexture2D(36160,ee,ne,i.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(A,w,G){if(n.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if(G||Oe(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Qi?ee=36012:ne.type===Ki&&(ee=33190));const ae=at(w);Oe(w)?c.renderbufferStorageMultisampleEXT(36161,ae,ee,w.width,w.height):n.renderbufferStorageMultisample(36161,ae,ee,w.width,w.height)}else n.renderbufferStorage(36161,ee,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const ee=at(w);G&&Oe(w)===!1?n.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):Oe(w)?c.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,A)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<ee.length;ne++){const ae=ee[ne],_e=s.convert(ae.format,ae.encoding),E=s.convert(ae.type),$=y(ae.internalFormat,_e,E,ae.encoding),ie=at(w);G&&Oe(w)===!1?n.renderbufferStorageMultisample(36161,ie,$,w.width,w.height):Oe(w)?c.renderbufferStorageMultisampleEXT(36161,ie,$,w.width,w.height):n.renderbufferStorage(36161,$,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Te(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ne=at(w);if(w.depthTexture.format===ir)Oe(w)?c.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===vs)Oe(w)?c.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function me(A){const w=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,A)}else if(G){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=n.createRenderbuffer(),ke(w.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),ke(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function nt(A,w,G){const ee=i.get(A);w!==void 0&&he(ee.__webglFramebuffer,A,A.texture,36064,3553),G!==void 0&&me(A)}function gt(A){const w=A.texture,G=i.get(A),ee=i.get(w);A.addEventListener("dispose",te),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,_e=S(A)||a;if(ne){G.__webglFramebuffer=[];for(let E=0;E<6;E++)G.__webglFramebuffer[E]=n.createFramebuffer()}else{if(G.__webglFramebuffer=n.createFramebuffer(),ae)if(r.drawBuffers){const E=A.texture;for(let $=0,ie=E.length;$<ie;$++){const le=i.get(E[$]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Oe(A)===!1){const E=ae?w:[w];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let $=0;$<E.length;$++){const ie=E[$];G.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(36161,G.__webglColorRenderbuffer[$]);const le=s.convert(ie.format,ie.encoding),oe=s.convert(ie.type),xe=y(ie.internalFormat,le,oe,ie.encoding),Pe=at(A);n.renderbufferStorageMultisample(36161,Pe,xe,A.width,A.height),n.framebufferRenderbuffer(36160,36064+$,36161,G.__webglColorRenderbuffer[$])}n.bindRenderbuffer(36161,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),H(34067,w,_e);for(let E=0;E<6;E++)he(G.__webglFramebuffer[E],A,w,36064,34069+E);b(w,_e)&&L(34067),t.unbindTexture()}else if(ae){const E=A.texture;for(let $=0,ie=E.length;$<ie;$++){const le=E[$],oe=i.get(le);t.bindTexture(3553,oe.__webglTexture),H(3553,le,_e),he(G.__webglFramebuffer,A,le,36064+$,3553),b(le,_e)&&L(3553)}t.unbindTexture()}else{let E=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?E=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,ee.__webglTexture),H(E,w,_e),he(G.__webglFramebuffer,A,w,36064,E),b(w,_e)&&L(E),t.unbindTexture()}A.depthBuffer&&me(A)}function ot(A){const w=S(A)||a,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,ne=G.length;ee<ne;ee++){const ae=G[ee];if(b(ae,w)){const _e=A.isWebGLCubeRenderTarget?34067:3553,E=i.get(ae).__webglTexture;t.bindTexture(_e,E),L(_e),t.unbindTexture()}}}function Wt(A){if(a&&A.samples>0&&Oe(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,ee=A.height;let ne=16384;const ae=[],_e=A.stencilBuffer?33306:36096,E=i.get(A),$=A.isWebGLMultipleRenderTargets===!0;if($)for(let ie=0;ie<w.length;ie++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ie,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ie,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let ie=0;ie<w.length;ie++){ae.push(36064+ie),A.depthBuffer&&ae.push(_e);const le=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(le===!1&&(A.depthBuffer&&(ne|=256),A.stencilBuffer&&(ne|=1024)),$&&n.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[ie]),le===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),$){const oe=i.get(w[ie]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,oe,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,ne,9728),v&&n.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let ie=0;ie<w.length;ie++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ie,36161,E.__webglColorRenderbuffer[ie]);const le=i.get(w[ie]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ie,3553,le,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function at(A){return Math.min(d,A.samples)}function Oe(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function nn(A){const w=o.render.frame;x.get(A)!==w&&(x.set(A,w),A.update())}function jt(A,w){const G=A.encoding,ee=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===bc||G!==fr&&(G===Qe?a===!1?e.has("EXT_sRGB")===!0&&ee===On?(A.format=bc,A.minFilter=un,A.generateMipmaps=!1):w=Tg.sRGBToLinear(w):(ee!==On||ne!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),w}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=N,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=nt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe}function ew(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===cr)return 5121;if(s===Y_)return 32819;if(s===$_)return 32820;if(s===j_)return 5120;if(s===X_)return 5122;if(s===Sg)return 5123;if(s===q_)return 5124;if(s===Ki)return 5125;if(s===Qi)return 5126;if(s===vo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Z_)return 6406;if(s===On)return 6408;if(s===Q_)return 6409;if(s===J_)return 6410;if(s===ir)return 6402;if(s===vs)return 34041;if(s===ex)return 6403;if(s===K_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===bc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===tx)return 36244;if(s===nx)return 33319;if(s===ix)return 33320;if(s===rx)return 36249;if(s===Yl||s===$l||s===Zl||s===Kl)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$l)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===Zd||s===Kd||s===Qd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$d)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jd||s===eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jd)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===eh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===ch||s===fh||s===dh||s===hh||s===ph)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===th)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ih)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ah)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ch)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ph)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mh)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===os?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class tw extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ca extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nw={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const m=new ca;m.matrixAutoUpdate=!1,m.visible=!1,u.joints[p.jointName]=m,u.add(m)}const g=u.joints[p.jointName];h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=h.radius),g.visible=h!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],c=f.position.distanceTo(d.position),v=.02,x=.005;u.inputState.pinching&&c>v+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=v-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class iw extends Dn{constructor(e,t,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:ir,f!==ir&&f!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ir&&(i=Ki),i===void 0&&f===vs&&(i=os),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1}}class rw extends _r{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,f=null,d=null,c=null,v=null;const x=t.getContextAttributes();let p=null,h=null;const g=[],m=[],_=new cn;_.layers.enable(1),_.viewport=new _t;const S=new cn;S.layers.enable(2),S.viewport=new _t;const M=[_,S],b=new tw;b.layers.enable(1),b.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let N=g[D];return N===void 0&&(N=new Tu,g[D]=N),N.getTargetRaySpace()},this.getControllerGrip=function(D){let N=g[D];return N===void 0&&(N=new Tu,g[D]=N),N.getGripSpace()},this.getHand=function(D){let N=g[D];return N===void 0&&(N=new Tu,g[D]=N),N.getHandSpace()};function C(D){const N=m.indexOf(D.inputSource);if(N===-1)return;const Y=g[N];Y!==void 0&&Y.dispatchEvent({type:D.type,data:D.inputSource})}function P(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",j);for(let D=0;D<g.length;D++){const N=m[D];N!==null&&(m[D]=null,g[D].disconnect(N))}L=null,y=null,e.setRenderTarget(p),c=null,d=null,f=null,r=null,h=null,I.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",P),r.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};c=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:c}),h=new dr(c.framebufferWidth,c.framebufferHeight,{format:On,type:cr,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let N=null,Y=null,q=null;x.depth&&(q=x.stencil?35056:33190,N=x.stencil?vs:ir,Y=x.stencil?os:Ki);const K={colorFormat:32856,depthFormat:q,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(K),r.updateRenderState({layers:[d]}),h=new dr(d.textureWidth,d.textureHeight,{format:On,type:cr,depthTexture:new iw(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const ue=e.properties.get(h);ue.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function j(D){for(let N=0;N<D.removed.length;N++){const Y=D.removed[N],q=m.indexOf(Y);q>=0&&(m[q]=null,g[q].dispatchEvent({type:"disconnected",data:Y}))}for(let N=0;N<D.added.length;N++){const Y=D.added[N];let q=m.indexOf(Y);if(q===-1){for(let ue=0;ue<g.length;ue++)if(ue>=m.length){m.push(Y),q=ue;break}else if(m[ue]===null){m[ue]=Y,q=ue;break}if(q===-1)break}const K=g[q];K&&K.dispatchEvent({type:"connected",data:Y})}}const te=new F,U=new F;function k(D,N,Y){te.setFromMatrixPosition(N.matrixWorld),U.setFromMatrixPosition(Y.matrixWorld);const q=te.distanceTo(U),K=N.projectionMatrix.elements,ue=Y.projectionMatrix.elements,ge=K[14]/(K[10]-1),H=K[14]/(K[10]+1),Le=(K[9]+1)/K[5],ve=(K[9]-1)/K[5],ye=(K[8]-1)/K[0],he=(ue[8]+1)/ue[0],ke=ge*ye,Te=ge*he,me=q/(-ye+he),nt=me*-ye;N.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(nt),D.translateZ(me),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const gt=ge+me,ot=H+me,Wt=ke-nt,at=Te+(q-nt),Oe=Le*H/ot*gt,nn=ve*H/ot*gt;D.projectionMatrix.makePerspective(Wt,at,Oe,nn,gt,ot)}function X(D,N){N===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(N.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;b.near=S.near=_.near=D.near,b.far=S.far=_.far=D.far,(L!==b.near||y!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,y=b.far);const N=D.parent,Y=b.cameras;X(b,N);for(let K=0;K<Y.length;K++)X(Y[K],N);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),D.matrix.copy(b.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const q=D.children;for(let K=0,ue=q.length;K<ue;K++)q[K].updateMatrixWorld(!0);Y.length===2?k(b,_,S):b.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(c!==null)return c.fixedFoveation},this.setFoveation=function(D){d!==null&&(d.fixedFoveation=D),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=D)};let Z=null;function Q(D,N){if(u=N.getViewerPose(l||o),v=N,u!==null){const Y=u.views;c!==null&&(e.setRenderTargetFramebuffer(h,c.framebuffer),e.setRenderTarget(h));let q=!1;Y.length!==b.cameras.length&&(b.cameras.length=0,q=!0);for(let K=0;K<Y.length;K++){const ue=Y[K];let ge=null;if(c!==null)ge=c.getViewport(ue);else{const Le=f.getViewSubImage(d,ue);ge=Le.viewport,K===0&&(e.setRenderTargetTextures(h,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(h))}let H=M[K];H===void 0&&(H=new cn,H.layers.enable(K),H.viewport=new _t,M[K]=H),H.matrix.fromArray(ue.transform.matrix),H.projectionMatrix.fromArray(ue.projectionMatrix),H.viewport.set(ge.x,ge.y,ge.width,ge.height),K===0&&b.matrix.copy(H.matrix),q===!0&&b.cameras.push(H)}}for(let Y=0;Y<g.length;Y++){const q=m[Y],K=g[Y];q!==null&&K!==void 0&&K.update(q,N,l||o)}Z&&Z(D,N),v=null}const I=new zg;I.setAnimationLoop(Q),this.setAnimationLoop=function(D){Z=D},this.dispose=function(){}}}function sw(n,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,g,m,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&c(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),v(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,g,m):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===mn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===mn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let m;h.map?m=h.map:h.specularMap?m=h.specularMap:h.displacementMap?m=h.displacementMap:h.normalMap?m=h.normalMap:h.bumpMap?m=h.bumpMap:h.roughnessMap?m=h.roughnessMap:h.metalnessMap?m=h.metalnessMap:h.alphaMap?m=h.alphaMap:h.emissiveMap?m=h.emissiveMap:h.clearcoatMap?m=h.clearcoatMap:h.clearcoatNormalMap?m=h.clearcoatNormalMap:h.clearcoatRoughnessMap?m=h.clearcoatRoughnessMap:h.iridescenceMap?m=h.iridescenceMap:h.iridescenceThicknessMap?m=h.iridescenceThicknessMap:h.specularIntensityMap?m=h.specularIntensityMap:h.specularColorMap?m=h.specularColorMap:h.transmissionMap?m=h.transmissionMap:h.thicknessMap?m=h.thicknessMap:h.sheenColorMap?m=h.sheenColorMap:h.sheenRoughnessMap&&(m=h.sheenRoughnessMap),m!==void 0&&(m.isWebGLRenderTarget&&(m=m.texture),m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix));let _;h.aoMap?_=h.aoMap:h.lightMap&&(_=h.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,g,m){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*g,p.scale.value=m*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let g;h.map?g=h.map:h.alphaMap&&(g=h.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function c(p,h,g){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===mn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function ow(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(m,_){const S=_.program;i.uniformBlockBinding(m,S)}function u(m,_){let S=r[m.id];S===void 0&&(x(m),S=f(m),r[m.id]=S,m.addEventListener("dispose",h));const M=_.program;i.updateUBOMapping(m,M);const b=e.render.frame;s[m.id]!==b&&(c(m),s[m.id]=b)}function f(m){const _=d();m.__bindingPointIndex=_;const S=n.createBuffer(),M=m.__size,b=m.usage;return n.bindBuffer(35345,S),n.bufferData(35345,M,b),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,S),S}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(m){const _=r[m.id],S=m.uniforms,M=m.__cache;n.bindBuffer(35345,_);for(let b=0,L=S.length;b<L;b++){const y=S[b];if(v(y,b,M)===!0){const C=y.value,P=y.__offset;typeof C=="number"?(y.__data[0]=C,n.bufferSubData(35345,P,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):C.toArray(y.__data),n.bufferSubData(35345,P,y.__data))}}n.bindBuffer(35345,null)}function v(m,_,S){const M=m.value;if(S[_]===void 0)return typeof M=="number"?S[_]=M:S[_]=M.clone(),!0;if(typeof M=="number"){if(S[_]!==M)return S[_]=M,!0}else{const b=S[_];if(b.equals(M)===!1)return b.copy(M),!0}return!1}function x(m){const _=m.uniforms;let S=0;const M=16;let b=0;for(let L=0,y=_.length;L<y;L++){const C=_[L],P=p(C);if(C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,L>0){b=S%M;const j=M-b;b!==0&&j-P.boundary<0&&(S+=M-b,C.__offset=S)}S+=P.storage}return b=S%M,b>0&&(S+=M-b),m.__size=S,m.__cache={},this}function p(m){const _=m.value,S={boundary:0,storage:0};return typeof _=="number"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function h(m){const _=m.target;_.removeEventListener("dispose",h);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function g(){for(const m in r)n.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function aw(){const n=Za("canvas");return n.style.display="block",n}function Gg(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:aw(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=n.alpha!==void 0?n.alpha:!1;let d=null,c=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fr,this.physicallyCorrectLights=!1,this.toneMapping=ti,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,g=0,m=0,_=null,S=-1,M=null;const b=new _t,L=new _t;let y=null,C=e.width,P=e.height,j=1,te=null,U=null;const k=new _t(0,0,C,P),X=new _t(0,0,C,P);let Z=!1;const Q=new Fg;let I=!1,D=!1,N=null;const Y=new mt,q=new Ee,K=new F,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return _===null?j:1}let H=t;function Le(T,O){for(let V=0;V<T.length;V++){const z=T[V],W=e.getContext(z,O);if(W!==null)return W}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ef}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",We,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),H=Le(O,T),H===null)throw Le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ve,ye,he,ke,Te,me,nt,gt,ot,Wt,at,Oe,nn,jt,A,w,G,ee,ne,ae,_e,E,$,ie;function le(){ve=new _1(H),ye=new f1(H,ve,n),ve.init(ye),E=new ew(H,ve,ye),he=new QM(H,ve,ye),ke=new S1,Te=new OM,me=new JM(H,ve,he,Te,ye,E,ke),nt=new h1(p),gt=new v1(p),ot=new Dx(H,ye),$=new u1(H,ve,ot,ye),Wt=new x1(H,ot,ke,$),at=new T1(H,Wt,ot,ke),ne=new E1(H,ye,me),w=new d1(Te),Oe=new kM(p,nt,gt,ve,ye,$,w),nn=new sw(p,Te),jt=new BM,A=new XM(ve,ye),ee=new l1(p,nt,he,at,f,o),G=new KM(p,at,ye),ie=new ow(H,ke,ye,he),ae=new c1(H,ve,ke,ye),_e=new y1(H,ve,ke,ye),ke.programs=Oe.programs,p.capabilities=ye,p.extensions=ve,p.properties=Te,p.renderLists=jt,p.shadowMap=G,p.state=he,p.info=ke}le();const oe=new rw(p,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(C,P,!1))},this.getSize=function(T){return T.set(C,P)},this.setSize=function(T,O,V){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=T,P=O,e.width=Math.floor(T*j),e.height=Math.floor(O*j),V!==!1&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(C*j,P*j).floor()},this.setDrawingBufferSize=function(T,O,V){C=T,P=O,j=V,e.width=Math.floor(T*V),e.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(k)},this.setViewport=function(T,O,V,z){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,O,V,z),he.viewport(b.copy(k).multiplyScalar(j).floor())},this.getScissor=function(T){return T.copy(X)},this.setScissor=function(T,O,V,z){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,O,V,z),he.scissor(L.copy(X).multiplyScalar(j).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){he.setScissorTest(Z=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,O=!0,V=!0){let z=0;T&&(z|=16384),O&&(z|=256),V&&(z|=1024),H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",We,!1),jt.dispose(),A.dispose(),Te.dispose(),nt.dispose(),gt.dispose(),at.dispose(),$.dispose(),ie.dispose(),Oe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ne),oe.removeEventListener("sessionend",ft),N&&(N.dispose(),N=null),et.stop()};function xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const T=ke.autoReset,O=G.enabled,V=G.autoUpdate,z=G.needsUpdate,W=G.type;le(),ke.autoReset=T,G.enabled=O,G.autoUpdate=V,G.needsUpdate=z,G.type=W}function We(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function R(T){const O=T.target;O.removeEventListener("dispose",R),se(O)}function se(T){B(T),Te.remove(T)}function B(T){const O=Te.get(T).programs;O!==void 0&&(O.forEach(function(V){Oe.releaseProgram(V)}),T.isShaderMaterial&&Oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,z,W,pe){O===null&&(O=ue);const Se=W.isMesh&&W.matrixWorld.determinant()<0,be=Xg(T,O,V,z,W);he.setMaterial(z,Se);let Me=V.index;const Ue=V.attributes.position;if(Me===null){if(Ue===void 0||Ue.count===0)return}else if(Me.count===0)return;let De=1;z.wireframe===!0&&(Me=Wt.getWireframeAttribute(V),De=2),$.setup(W,z,be,V,Me);let Re,Ze=ae;Me!==null&&(Re=ot.get(Me),Ze=_e,Ze.setIndex(Re));const Oi=Me!==null?Me.count:Ue.count,xr=V.drawRange.start*De,yr=V.drawRange.count*De,In=pe!==null?pe.start*De:0,ze=pe!==null?pe.count*De:1/0,Sr=Math.max(xr,In),it=Math.min(Oi,xr+yr,In+ze)-1,sn=Math.max(0,it-Sr+1);if(sn!==0){if(W.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*ge()),Ze.setMode(1)):Ze.setMode(4);else if(W.isLine){let li=z.linewidth;li===void 0&&(li=1),he.setLineWidth(li*ge()),W.isLineSegments?Ze.setMode(1):W.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else W.isPoints?Ze.setMode(0):W.isSprite&&Ze.setMode(4);if(W.isInstancedMesh)Ze.renderInstances(Sr,sn,W.count);else if(V.isInstancedBufferGeometry){const li=Math.min(V.instanceCount,V._maxInstanceCount);Ze.renderInstances(Sr,sn,li)}else Ze.render(Sr,sn)}},this.compile=function(T,O){function V(z,W,pe){z.transparent===!0&&z.side===wi?(z.side=mn,z.needsUpdate=!0,To(z,W,pe),z.side=ps,z.needsUpdate=!0,To(z,W,pe),z.side=wi):To(z,W,pe)}c=A.get(T),c.init(),x.push(c),T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(c.pushLight(z),z.castShadow&&c.pushShadow(z))}),c.setupLights(p.physicallyCorrectLights),T.traverse(function(z){const W=z.material;if(W)if(Array.isArray(W))for(let pe=0;pe<W.length;pe++){const Se=W[pe];V(Se,T,z)}else V(W,T,z)}),x.pop(),c=null};let fe=null;function ce(T){fe&&fe(T)}function Ne(){et.stop()}function ft(){et.start()}const et=new zg;et.setAnimationLoop(ce),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(T){fe=T,oe.setAnimationLoop(T),T===null?et.stop():et.start()},oe.addEventListener("sessionstart",Ne),oe.addEventListener("sessionend",ft),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(O),O=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,O,_),c=A.get(T,x.length),c.init(),x.push(c),Y.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(Y),D=this.localClippingEnabled,I=w.init(this.clippingPlanes,D,O),d=jt.get(T,v.length),d.init(),v.push(d),ai(T,O,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(te,U),I===!0&&w.beginShadows();const V=c.state.shadowsArray;if(G.render(V,T,O),I===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,T),c.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const z=O.cameras;for(let W=0,pe=z.length;W<pe;W++){const Se=z[W];$e(d,T,Se,Se.viewport)}}else $e(d,T,O);_!==null&&(me.updateMultisampleRenderTarget(_),me.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(p,T,O),$.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?c=x[x.length-1]:c=null,v.pop(),v.length>0?d=v[v.length-1]:d=null};function ai(T,O,V,z){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)c.pushLight(T),T.castShadow&&c.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){z&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Se=at.update(T),be=T.material;be.visible&&d.push(T,Se,be,V,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ke.render.frame&&(T.skeleton.update(),T.skeleton.frame=ke.render.frame),!T.frustumCulled||Q.intersectsObject(T))){z&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Se=at.update(T),be=T.material;if(Array.isArray(be)){const Me=Se.groups;for(let Ue=0,De=Me.length;Ue<De;Ue++){const Re=Me[Ue],Ze=be[Re.materialIndex];Ze&&Ze.visible&&d.push(T,Se,Ze,V,K.z,Re)}}else be.visible&&d.push(T,Se,be,V,K.z,null)}}const pe=T.children;for(let Se=0,be=pe.length;Se<be;Se++)ai(pe[Se],O,V,z)}function $e(T,O,V,z){const W=T.opaque,pe=T.transmissive,Se=T.transparent;c.setupLightsView(V),pe.length>0&&Vn(W,O,V),z&&he.viewport(b.copy(z)),W.length>0&&rn(W,O,V),pe.length>0&&rn(pe,O,V),Se.length>0&&rn(Se,O,V),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Vn(T,O,V){const z=ye.isWebGL2;N===null&&(N=new dr(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?vo:cr,minFilter:hl,samples:z&&s===!0?4:0})),p.getDrawingBufferSize(q),z?N.setSize(q.x,q.y):N.setSize(Cc(q.x),Cc(q.y));const W=p.getRenderTarget();p.setRenderTarget(N),p.clear();const pe=p.toneMapping;p.toneMapping=ti,rn(T,O,V),p.toneMapping=pe,me.updateMultisampleRenderTarget(N),me.updateRenderTargetMipmap(N),p.setRenderTarget(W)}function rn(T,O,V){const z=O.isScene===!0?O.overrideMaterial:null;for(let W=0,pe=T.length;W<pe;W++){const Se=T[W],be=Se.object,Me=Se.geometry,Ue=z===null?Se.material:z,De=Se.group;be.layers.test(V.layers)&&jg(be,O,V,Me,Ue,De)}}function jg(T,O,V,z,W,pe){T.onBeforeRender(p,O,V,z,W,pe),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(p,O,V,z,T,pe),W.transparent===!0&&W.side===wi?(W.side=mn,W.needsUpdate=!0,p.renderBufferDirect(V,O,z,W,T,pe),W.side=ps,W.needsUpdate=!0,p.renderBufferDirect(V,O,z,W,T,pe),W.side=wi):p.renderBufferDirect(V,O,z,W,T,pe),T.onAfterRender(p,O,V,z,W,pe)}function To(T,O,V){O.isScene!==!0&&(O=ue);const z=Te.get(T),W=c.state.lights,pe=c.state.shadowsArray,Se=W.state.version,be=Oe.getParameters(T,W.state,pe,O,V),Me=Oe.getProgramCacheKey(be);let Ue=z.programs;z.environment=T.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(T.isMeshStandardMaterial?gt:nt).get(T.envMap||z.environment),Ue===void 0&&(T.addEventListener("dispose",R),Ue=new Map,z.programs=Ue);let De=Ue.get(Me);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===Se)return Pf(T,be),De}else be.uniforms=Oe.getUniforms(T),T.onBuild(V,be,p),T.onBeforeCompile(be,p),De=Oe.acquireProgram(be,Me),Ue.set(Me,De),z.uniforms=be.uniforms;const Re=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=w.uniform),Pf(T,be),z.needsLights=Yg(T),z.lightsStateVersion=Se,z.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMap.value=W.state.directionalShadowMap,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotShadowMap.value=W.state.spotShadowMap,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMap.value=W.state.pointShadowMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix);const Ze=De.getUniforms(),Oi=Ta.seqWithValue(Ze.seq,Re);return z.currentProgram=De,z.uniformsList=Oi,De}function Pf(T,O){const V=Te.get(T);V.outputEncoding=O.outputEncoding,V.instancing=O.instancing,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Xg(T,O,V,z,W){O.isScene!==!0&&(O=ue),me.resetTextureUnits();const pe=O.fog,Se=z.isMeshStandardMaterial?O.environment:null,be=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:fr,Me=(z.isMeshStandardMaterial?gt:nt).get(z.envMap||Se),Ue=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!z.normalMap&&!!V.attributes.tangent,Re=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,Oi=!!V.morphAttributes.color,xr=z.toneMapped?p.toneMapping:ti,yr=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,In=yr!==void 0?yr.length:0,ze=Te.get(z),Sr=c.state.lights;if(I===!0&&(D===!0||T!==M)){const Xt=T===M&&z.id===S;w.setState(z,T,Xt)}let it=!1;z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Sr.state.version||ze.outputEncoding!==be||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Me||z.fog===!0&&ze.fog!==pe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==w.numPlanes||ze.numIntersection!==w.numIntersection)||ze.vertexAlphas!==Ue||ze.vertexTangents!==De||ze.morphTargets!==Re||ze.morphNormals!==Ze||ze.morphColors!==Oi||ze.toneMapping!==xr||ye.isWebGL2===!0&&ze.morphTargetsCount!==In)&&(it=!0):(it=!0,ze.__version=z.version);let sn=ze.currentProgram;it===!0&&(sn=To(z,O,W));let li=!1,Ts=!1,xl=!1;const Lt=sn.getUniforms(),Ui=ze.uniforms;if(he.useProgram(sn.program)&&(li=!0,Ts=!0,xl=!0),z.id!==S&&(S=z.id,Ts=!0),li||M!==T){if(Lt.setValue(H,"projectionMatrix",T.projectionMatrix),ye.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Ts=!0,xl=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Xt=Lt.map.cameraPosition;Xt!==void 0&&Xt.setValue(H,K.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||W.isSkinnedMesh)&&Lt.setValue(H,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){Lt.setOptional(H,W,"bindMatrix"),Lt.setOptional(H,W,"bindMatrixInverse");const Xt=W.skeleton;Xt&&(ye.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Lt.setValue(H,"boneTexture",Xt.boneTexture,me),Lt.setValue(H,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yl=V.morphAttributes;if((yl.position!==void 0||yl.normal!==void 0||yl.color!==void 0&&ye.isWebGL2===!0)&&ne.update(W,V,z,sn),(Ts||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,Lt.setValue(H,"receiveShadow",W.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ui.envMap.value=Me,Ui.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Ts&&(Lt.setValue(H,"toneMappingExposure",p.toneMappingExposure),ze.needsLights&&qg(Ui,xl),pe&&z.fog===!0&&nn.refreshFogUniforms(Ui,pe),nn.refreshMaterialUniforms(Ui,z,j,P,N),Ta.upload(H,ze.uniformsList,Ui,me)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ta.upload(H,ze.uniformsList,Ui,me),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Lt.setValue(H,"center",W.center),Lt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Lt.setValue(H,"normalMatrix",W.normalMatrix),Lt.setValue(H,"modelMatrix",W.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Xt=z.uniformsGroups;for(let Sl=0,$g=Xt.length;Sl<$g;Sl++)if(ye.isWebGL2){const Df=Xt[Sl];ie.update(Df,sn),ie.bind(Df,sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sn}function qg(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Yg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(T,O,V){Te.get(T.texture).__webglTexture=O,Te.get(T.depthTexture).__webglTexture=V;const z=Te.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const V=Te.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,V=0){_=T,g=O,m=V;let z=!0;if(T){const Me=Te.get(T);Me.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),z=!1):Me.__webglFramebuffer===void 0?me.setupRenderTarget(T):Me.__hasExternalTextures&&me.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture)}let W=null,pe=!1,Se=!1;if(T){const Me=T.texture;(Me.isData3DTexture||Me.isDataArrayTexture)&&(Se=!0);const Ue=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=Ue[O],pe=!0):ye.isWebGL2&&T.samples>0&&me.useMultisampledRTT(T)===!1?W=Te.get(T).__webglMultisampledFramebuffer:W=Ue,b.copy(T.viewport),L.copy(T.scissor),y=T.scissorTest}else b.copy(k).multiplyScalar(j).floor(),L.copy(X).multiplyScalar(j).floor(),y=Z;if(he.bindFramebuffer(36160,W)&&ye.drawBuffers&&z&&he.drawBuffers(T,W),he.viewport(b),he.scissor(L),he.setScissorTest(y),pe){const Me=Te.get(T.texture);H.framebufferTexture2D(36160,36064,34069+O,Me.__webglTexture,V)}else if(Se){const Me=Te.get(T.texture),Ue=O||0;H.framebufferTextureLayer(36160,36064,Me.__webglTexture,V||0,Ue)}S=-1},this.readRenderTargetPixels=function(T,O,V,z,W,pe,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){he.bindFramebuffer(36160,be);try{const Me=T.texture,Ue=Me.format,De=Me.type;if(Ue!==On&&E.convert(Ue)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=De===vo&&(ve.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ve.has("EXT_color_buffer_float"));if(De!==cr&&E.convert(De)!==H.getParameter(35738)&&!(De===Qi&&(ye.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-z&&V>=0&&V<=T.height-W&&H.readPixels(O,V,z,W,E.convert(Ue),E.convert(De),pe)}finally{const Me=_!==null?Te.get(_).__webglFramebuffer:null;he.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(T,O,V=0){const z=Math.pow(2,-V),W=Math.floor(O.image.width*z),pe=Math.floor(O.image.height*z);me.setTexture2D(O,0),H.copyTexSubImage2D(3553,V,0,0,T.x,T.y,W,pe),he.unbindTexture()},this.copyTextureToTexture=function(T,O,V,z=0){const W=O.image.width,pe=O.image.height,Se=E.convert(V.format),be=E.convert(V.type);me.setTexture2D(V,0),H.pixelStorei(37440,V.flipY),H.pixelStorei(37441,V.premultiplyAlpha),H.pixelStorei(3317,V.unpackAlignment),O.isDataTexture?H.texSubImage2D(3553,z,T.x,T.y,W,pe,Se,be,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(3553,z,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Se,O.mipmaps[0].data):H.texSubImage2D(3553,z,T.x,T.y,Se,be,O.image),z===0&&V.generateMipmaps&&H.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(T,O,V,z,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=T.max.x-T.min.x+1,Se=T.max.y-T.min.y+1,be=T.max.z-T.min.z+1,Me=E.convert(z.format),Ue=E.convert(z.type);let De;if(z.isData3DTexture)me.setTexture3D(z,0),De=32879;else if(z.isDataArrayTexture)me.setTexture2DArray(z,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,z.flipY),H.pixelStorei(37441,z.premultiplyAlpha),H.pixelStorei(3317,z.unpackAlignment);const Re=H.getParameter(3314),Ze=H.getParameter(32878),Oi=H.getParameter(3316),xr=H.getParameter(3315),yr=H.getParameter(32877),In=V.isCompressedTexture?V.mipmaps[0]:V.image;H.pixelStorei(3314,In.width),H.pixelStorei(32878,In.height),H.pixelStorei(3316,T.min.x),H.pixelStorei(3315,T.min.y),H.pixelStorei(32877,T.min.z),V.isDataTexture||V.isData3DTexture?H.texSubImage3D(De,W,O.x,O.y,O.z,pe,Se,be,Me,Ue,In.data):V.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(De,W,O.x,O.y,O.z,pe,Se,be,Me,In.data)):H.texSubImage3D(De,W,O.x,O.y,O.z,pe,Se,be,Me,Ue,In),H.pixelStorei(3314,Re),H.pixelStorei(32878,Ze),H.pixelStorei(3316,Oi),H.pixelStorei(3315,xr),H.pixelStorei(32877,yr),W===0&&z.generateMipmaps&&H.generateMipmap(De),he.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?me.setTextureCube(T,0):T.isData3DTexture?me.setTexture3D(T,0):T.isDataArrayTexture?me.setTexture2DArray(T,0):me.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){g=0,m=0,_=null,he.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class lw extends Gg{}lw.prototype.isWebGL1Renderer=!0;class uw extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Cf extends Ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jh=new F,ep=new F,tp=new mt,bu=new Ag,fa=new pl;class cw extends bt{constructor(e=new Rn,t=new Cf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Jh.fromBufferAttribute(t,r-1),ep.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Jh.distanceTo(ep);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;tp.copy(r).invert(),bu.copy(e.ray).applyMatrix4(tp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new F,f=new F,d=new F,c=new F,v=this.isLineSegments?2:1,x=i.index,h=i.attributes.position;if(x!==null){const g=Math.max(0,o.start),m=Math.min(x.count,o.start+o.count);for(let _=g,S=m-1;_<S;_+=v){const M=x.getX(_),b=x.getX(_+1);if(u.fromBufferAttribute(h,M),f.fromBufferAttribute(h,b),bu.distanceSqToSegment(u,f,c,d)>l)continue;c.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(c);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=g,S=m-1;_<S;_+=v){if(u.fromBufferAttribute(h,_),f.fromBufferAttribute(h,_+1),bu.distanceSqToSegment(u,f,c,d)>l)continue;c.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(c);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const np=new F,ip=new F;class Vg extends cw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)np.fromBufferAttribute(t,r),ip.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+np.distanceTo(ip);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Af extends Rn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),f(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new F,S=new F,M=new F;for(let b=0;b<t.length;b+=3)v(t[b+0],_),v(t[b+1],S),v(t[b+2],M),l(_,S,M,m)}function l(m,_,S,M){const b=M+1,L=[];for(let y=0;y<=b;y++){L[y]=[];const C=m.clone().lerp(S,y/b),P=_.clone().lerp(S,y/b),j=b-y;for(let te=0;te<=j;te++)te===0&&y===b?L[y][te]=C:L[y][te]=C.clone().lerp(P,te/j)}for(let y=0;y<b;y++)for(let C=0;C<2*(b-y)-1;C++){const P=Math.floor(C/2);C%2===0?(c(L[y][P+1]),c(L[y+1][P]),c(L[y][P])):(c(L[y][P+1]),c(L[y+1][P+1]),c(L[y+1][P]))}}function u(m){const _=new F;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(m),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function f(){const m=new F;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const S=h(m)/2/Math.PI+.5,M=g(m)/Math.PI+.5;o.push(S,1-M)}x(),d()}function d(){for(let m=0;m<o.length;m+=6){const _=o[m+0],S=o[m+2],M=o[m+4],b=Math.max(_,S,M),L=Math.min(_,S,M);b>.9&&L<.1&&(_<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),M<.2&&(o[m+4]+=1))}}function c(m){s.push(m.x,m.y,m.z)}function v(m,_){const S=m*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function x(){const m=new F,_=new F,S=new F,M=new F,b=new Ee,L=new Ee,y=new Ee;for(let C=0,P=0;C<s.length;C+=9,P+=6){m.set(s[C+0],s[C+1],s[C+2]),_.set(s[C+3],s[C+4],s[C+5]),S.set(s[C+6],s[C+7],s[C+8]),b.set(o[P+0],o[P+1]),L.set(o[P+2],o[P+3]),y.set(o[P+4],o[P+5]),M.copy(m).add(_).add(S).divideScalar(3);const j=h(M);p(b,P+0,m,j),p(L,P+2,_,j),p(y,P+4,S,j)}}function p(m,_,S,M){M<0&&m.x===1&&(o[_]=m.x-1),S.x===0&&S.z===0&&(o[_]=M/2/Math.PI+.5)}function h(m){return Math.atan2(m.z,-m.x)}function g(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}static fromJSON(e){return new Af(e.vertices,e.indices,e.radius,e.details)}}class Lf extends Af{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lf(e.radius,e.detail)}}class Cu extends Ms{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mg,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fw extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class dw extends fw{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DefaultUp),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}class rp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hw extends Vg{constructor(e=10,t=10,i=4473924,r=8947848){i=new Fe(i),r=new Fe(r);const s=t/2,o=e/t,a=e/2,l=[],u=[];for(let c=0,v=0,x=-a;c<=t;c++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const p=c===s?i:r;p.toArray(u,v),v+=3,p.toArray(u,v),v+=3,p.toArray(u,v),v+=3,p.toArray(u,v),v+=3}const f=new Rn;f.setAttribute("position",new Ct(l,3)),f.setAttribute("color",new Ct(u,3));const d=new Cf({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}}class pw extends Vg{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Rn;r.setAttribute("position",new Ct(t,3)),r.setAttribute("color",new Ct(i,3));const s=new Cf({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Fe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);const sp={type:"change"},Au={type:"start"},op={type:"end"};class mw extends _r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",jt),this._domElementKeyEvents=E},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(sp),i.update(),s=r.NONE},this.update=function(){const E=new F,$=new hr().setFromUnitVectors(e.up,new F(0,1,0)),ie=$.clone().invert(),le=new F,oe=new hr,xe=2*Math.PI;return function(){const We=i.object.position;E.copy(We).sub(i.target),E.applyQuaternion($),a.setFromVector3(E),i.autoRotate&&s===r.NONE&&C(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let R=i.minAzimuthAngle,se=i.maxAzimuthAngle;return isFinite(R)&&isFinite(se)&&(R<-Math.PI?R+=xe:R>Math.PI&&(R-=xe),se<-Math.PI?se+=xe:se>Math.PI&&(se-=xe),R<=se?a.theta=Math.max(R,Math.min(se,a.theta)):a.theta=a.theta>(R+se)/2?Math.max(R,a.theta):Math.min(se,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),E.setFromSpherical(a),E.applyQuaternion(ie),We.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),u=1,d||le.distanceToSquared(i.object.position)>o||8*(1-oe.dot(i.object.quaternion))>o?(i.dispatchEvent(sp),le.copy(i.object.position),oe.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",G),i.domElement.removeEventListener("pointerdown",nt),i.domElement.removeEventListener("pointercancel",Wt),i.domElement.removeEventListener("wheel",nn),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("pointerup",ot),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",jt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new rp,l=new rp;let u=1;const f=new F;let d=!1;const c=new Ee,v=new Ee,x=new Ee,p=new Ee,h=new Ee,g=new Ee,m=new Ee,_=new Ee,S=new Ee,M=[],b={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function C(E){l.theta-=E}function P(E){l.phi-=E}const j=function(){const E=new F;return function(ie,le){E.setFromMatrixColumn(le,0),E.multiplyScalar(-ie),f.add(E)}}(),te=function(){const E=new F;return function(ie,le){i.screenSpacePanning===!0?E.setFromMatrixColumn(le,1):(E.setFromMatrixColumn(le,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(ie),f.add(E)}}(),U=function(){const E=new F;return function(ie,le){const oe=i.domElement;if(i.object.isPerspectiveCamera){const xe=i.object.position;E.copy(xe).sub(i.target);let Pe=E.length();Pe*=Math.tan(i.object.fov/2*Math.PI/180),j(2*ie*Pe/oe.clientHeight,i.object.matrix),te(2*le*Pe/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(ie*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),te(le*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(E){i.object.isPerspectiveCamera?u/=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*E)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(E){i.object.isPerspectiveCamera?u*=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/E)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(E){c.set(E.clientX,E.clientY)}function Q(E){m.set(E.clientX,E.clientY)}function I(E){p.set(E.clientX,E.clientY)}function D(E){v.set(E.clientX,E.clientY),x.subVectors(v,c).multiplyScalar(i.rotateSpeed);const $=i.domElement;C(2*Math.PI*x.x/$.clientHeight),P(2*Math.PI*x.y/$.clientHeight),c.copy(v),i.update()}function N(E){_.set(E.clientX,E.clientY),S.subVectors(_,m),S.y>0?k(y()):S.y<0&&X(y()),m.copy(_),i.update()}function Y(E){h.set(E.clientX,E.clientY),g.subVectors(h,p).multiplyScalar(i.panSpeed),U(g.x,g.y),p.copy(h),i.update()}function q(E){E.deltaY<0?X(y()):E.deltaY>0&&k(y()),i.update()}function K(E){let $=!1;switch(E.code){case i.keys.UP:U(0,i.keyPanSpeed),$=!0;break;case i.keys.BOTTOM:U(0,-i.keyPanSpeed),$=!0;break;case i.keys.LEFT:U(i.keyPanSpeed,0),$=!0;break;case i.keys.RIGHT:U(-i.keyPanSpeed,0),$=!0;break}$&&(E.preventDefault(),i.update())}function ue(){if(M.length===1)c.set(M[0].pageX,M[0].pageY);else{const E=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);c.set(E,$)}}function ge(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const E=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);p.set(E,$)}}function H(){const E=M[0].pageX-M[1].pageX,$=M[0].pageY-M[1].pageY,ie=Math.sqrt(E*E+$*$);m.set(0,ie)}function Le(){i.enableZoom&&H(),i.enablePan&&ge()}function ve(){i.enableZoom&&H(),i.enableRotate&&ue()}function ye(E){if(M.length==1)v.set(E.pageX,E.pageY);else{const ie=_e(E),le=.5*(E.pageX+ie.x),oe=.5*(E.pageY+ie.y);v.set(le,oe)}x.subVectors(v,c).multiplyScalar(i.rotateSpeed);const $=i.domElement;C(2*Math.PI*x.x/$.clientHeight),P(2*Math.PI*x.y/$.clientHeight),c.copy(v)}function he(E){if(M.length===1)h.set(E.pageX,E.pageY);else{const $=_e(E),ie=.5*(E.pageX+$.x),le=.5*(E.pageY+$.y);h.set(ie,le)}g.subVectors(h,p).multiplyScalar(i.panSpeed),U(g.x,g.y),p.copy(h)}function ke(E){const $=_e(E),ie=E.pageX-$.x,le=E.pageY-$.y,oe=Math.sqrt(ie*ie+le*le);_.set(0,oe),S.set(0,Math.pow(_.y/m.y,i.zoomSpeed)),k(S.y),m.copy(_)}function Te(E){i.enableZoom&&ke(E),i.enablePan&&he(E)}function me(E){i.enableZoom&&ke(E),i.enableRotate&&ye(E)}function nt(E){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",gt),i.domElement.addEventListener("pointerup",ot)),ee(E),E.pointerType==="touch"?A(E):at(E))}function gt(E){i.enabled!==!1&&(E.pointerType==="touch"?w(E):Oe(E))}function ot(E){ne(E),M.length===0&&(i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("pointerup",ot)),i.dispatchEvent(op),s=r.NONE}function Wt(E){ne(E)}function at(E){let $;switch(E.button){case 0:$=i.mouseButtons.LEFT;break;case 1:$=i.mouseButtons.MIDDLE;break;case 2:$=i.mouseButtons.RIGHT;break;default:$=-1}switch($){case wr.DOLLY:if(i.enableZoom===!1)return;Q(E),s=r.DOLLY;break;case wr.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;I(E),s=r.PAN}else{if(i.enableRotate===!1)return;Z(E),s=r.ROTATE}break;case wr.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;Z(E),s=r.ROTATE}else{if(i.enablePan===!1)return;I(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Au)}function Oe(E){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;D(E);break;case r.DOLLY:if(i.enableZoom===!1)return;N(E);break;case r.PAN:if(i.enablePan===!1)return;Y(E);break}}function nn(E){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(E.preventDefault(),i.dispatchEvent(Au),q(E),i.dispatchEvent(op))}function jt(E){i.enabled===!1||i.enablePan===!1||K(E)}function A(E){switch(ae(E),M.length){case 1:switch(i.touches.ONE){case Er.ROTATE:if(i.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case Er.PAN:if(i.enablePan===!1)return;ge(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Er.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(),s=r.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Au)}function w(E){switch(ae(E),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ye(E),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;he(E),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(E),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;me(E),i.update();break;default:s=r.NONE}}function G(E){i.enabled!==!1&&E.preventDefault()}function ee(E){M.push(E)}function ne(E){delete b[E.pointerId];for(let $=0;$<M.length;$++)if(M[$].pointerId==E.pointerId){M.splice($,1);return}}function ae(E){let $=b[E.pointerId];$===void 0&&($=new Ee,b[E.pointerId]=$),$.set(E.pageX,E.pageY)}function _e(E){const $=E.pointerId===M[0].pointerId?M[1]:M[0];return b[$.pointerId]}i.domElement.addEventListener("contextmenu",G),i.domElement.addEventListener("pointerdown",nt),i.domElement.addEventListener("pointercancel",Wt),i.domElement.addEventListener("wheel",nn,{passive:!1}),this.update()}}class gw{constructor(e){we(this,"scene");we(this,"camera");we(this,"renderer");this.scene=new uw,this.camera=new cn(78,e.offsetWidth/e.offsetHeight,.1,1e3),this.renderer=new Gg({canvas:e,antialias:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight)}setOrbitControls(){new mw(this.camera,this.renderer.domElement).update()}helperGrid(e,t,i,r){this.scene.add(new hw(e,t,i,r))}helperAxes(e){this.scene.add(new pw(e))}light(e,t){const s=new dw(16777215,0,2.8);s.position.copy(e),s.rotation.copy(t),this.scene.add(s)}draw(){this.renderer.render(this.scene,this.camera)}get getScene(){return this.scene}get getCamera(){return this.camera}}class vw{createPlane(e,t){const i=new ml(...e),r=new Cu(t);return new Cn(i,r)}createCube(e,t){const i=new ws(...e),r=new Cu(t);return new Cn(i,r)}createBerry(e){const t=new Lf(1.5,2),i=new Cu(e);return new Cn(t,i)}}class _w{constructor(e,t,i){we(this,"frameID",0);we(this,"timer",0);we(this,"callback");we(this,"updateFrequency");we(this,"updateFrequencyStep");we(this,"totalTime",0);we(this,"startTime",Date.now());we(this,"isCanvasVisible",!0);this.callback=i,this.updateFrequency=e,this.updateFrequencyStep=t}getStart(){this.isCanvasVisible=!0}getStop(){this.isCanvasVisible=!1}setSpeedUp(){this.updateFrequency-=this.updateFrequencyStep}setSpeedDown(){this.updateFrequency+=this.updateFrequencyStep}toFixFloat(e){return+`${e}`.replace(/\..*/i,"")}get getSeconds(){return this.toFixFloat(this.totalTime/1e3%60)}get getMinutes(){return this.toFixFloat(this.totalTime/1e3/60%60)}get getHouse(){return this.toFixFloat(this.totalTime/1e3/60/60%24)}toBindContextToCallback(){this.callback=this.callback.bind(null,this)}winTarget(){window.onfocus=()=>{this.getStart(),this.toStartFrame()},window.onblur=()=>{this.cancelFrameAnimation(),this.getStop()}}cancelFrameAnimation(){cancelAnimationFrame(this.frameID)}toStartFrame(){const e=Date.now()-this.startTime-this.totalTime;this.totalTime=e+this.totalTime,this.isCanvasVisible&&this.update(e,this.callback),this.frameID=window.requestAnimationFrame(this.toStartFrame.bind(this))}update(e,t){this.timer+=e/1e3,this.timer>this.updateFrequency&&(this.timer-=this.updateFrequency,t())}}class xw extends vw{constructor(){super(...arguments);we(this,"sizeGrid",70);we(this,"divisGrid",20);we(this,"halfGrid",this.divisGrid/this.sizeGrid);we(this,"cameraPosition",new F(12,55,35));we(this,"cameraRotation",new pr(-.5*Math.PI,-.085*Math.PI,-.5*Math.PI));we(this,"lightPostion",new F(25,90,-200));we(this,"lightRotation",new pr(0,0,0));we(this,"marginCell",.2);we(this,"stepCell",this.sizeGrid/this.divisGrid+this.marginCell);we(this,"sizeCell",this.sizeGrid/this.halfGrid-this.stepCell);we(this,"propsCell",[this.stepCell-this.marginCell,this.getPosY(),this.stepCell-this.marginCell])}getPosY(){return(this.stepCell-this.marginCell)/8}getCoord(t){return(this.stepCell+this.marginCell)*t+this.stepCell/2}initFrame(){const t=new gw(document.querySelector("canvas"));return t.getCamera.position.copy(this.cameraPosition),t.getCamera.rotation.copy(this.cameraRotation),t.light(this.lightPostion,this.lightRotation),t}initAnimFrame(t,i,r){return new _w(t,i,r)}}let Ke;class yw{constructor(e){we(this,"default");we(this,"health");we(this,"incrBody");we(this,"decrBody");Ke=e}Default(){this.default=this.create\u0421arcass("#CC3924"),this.changePosBerry(this.default),this.default.action=()=>{Ke.Berry.changePosBerry(this.default),Ke.cells.unshift(Ke.createCell("#E42222")),Ke.body.push({x:Ke.body[Ke.body.length-1].x,z:Ke.body[Ke.body.length-1].z}),Ke.score++,Ke==null||Ke.setterScore(),Ke==null||Ke.setterTail()}}changePosBerry(e){e.pos.x=Math.floor(Math.random()*Ke.Grid.divisGrid),e.pos.z=Math.floor(Math.random()*Ke.Grid.divisGrid),e.mesh.position.x=Ke.Grid.getCoord(e.pos.x),e.mesh.position.z=Ke.Grid.getCoord(e.pos.z)}create\u0421arcass(e){const t=Ke.createCell(e);return t.position.y=Ke.Grid.getPosY(),{mesh:t,pos:{x:0,z:0,y:0},action:()=>{}}}}let zt;class Sw{constructor(e){zt=e}berry(e){const t=zt.Berry.default;t.pos.z===e.z&&t.pos.x===e.x&&t.action()}tail(e){for(let t=0;t<zt.body.length;t++)e.x===zt.body[t].x&&e.z===zt.body[t].z&&zt.setterLives(--zt.lives)}border(e){switch(zt.direction){case"UP":e.x=(e.x+1)%zt.Grid.divisGrid;break;case"DOWN":e.x=(e.x-1)%zt.Grid.divisGrid;break;case"LEFT":e.z=(e.z-1)%zt.Grid.divisGrid;break;case"RIGHT":e.z=(e.z+1)%zt.Grid.divisGrid;break}e.x<0?e.x=zt.Grid.divisGrid-1:e.z<0&&(e.z=zt.Grid.divisGrid-1)}}class Mw{constructor(){we(this,"Grid");we(this,"Berry");we(this,"Collision");we(this,"frame")}setBuild(e){this.Grid=new xw,this.frame=this.Grid.initFrame(),this.Berry=new yw(e),this.Collision=new Sw(e)}}class ww extends Mw{constructor(){super();we(this,"maxLives",3);we(this,"lives",this.maxLives);we(this,"score",0);we(this,"direction","UP");we(this,"cells",[]);we(this,"bodyLen",1);we(this,"body",[]);we(this,"setterScore");we(this,"setterTail");we(this,"setterLives");we(this,"animFrame");this.setBuild(this),this.animFrame=this.Grid.initAnimFrame(.09,.005,this.callbackForAnimFrame.bind(this)),this.animFrame.toBindContextToCallback(),this.animFrame.winTarget(),this.controlPanel()}callbackForAnimFrame(){this.lives>=1?(this.setUpdate(),this.drawSnake(),this.frame.draw()):(this.animFrame.getStop(),this.animFrame.cancelFrameAnimation())}controlPanel(){document.body.addEventListener("keyup",({code:t})=>{switch(t){case"KeyW":if(this.direction!="DOWN")return this.direction="UP";case"KeyS":if(this.direction!="UP")return this.direction="DOWN";case"KeyA":if(this.direction!="RIGHT")return this.direction="LEFT";case"KeyD":if(this.direction!="LEFT")return this.direction="RIGHT"}})}createCell(t){const i=this.Grid.createCube(this.Grid.propsCell,{color:t});return i.translateY(this.Grid.getPosY()),this.frame.getScene.add(i),i}createGrid(){for(let t=0;t<this.Grid.divisGrid;t++)for(let i=0;i<this.Grid.divisGrid;i++){const r=this.Grid.createPlane([this.Grid.stepCell,this.Grid.stepCell],{color:"#13161A"});r.position.y=0,r.position.x=this.Grid.getCoord(t),r.position.z=this.Grid.getCoord(i),this.frame.getScene.add(r),r.rotation.x=-.5*Math.PI}}createSnake(t){for(let i=0;i<=t;i++)i===t?(this.cells.push(this.createCell("#2C22E4")),this.body.push({x:i,z:0})):(this.cells.push(this.createCell("#E42222")),this.body.push({x:i,z:0}))}setUpdate(){const t={...this.getHead()};this.Collision.berry(t),this.Collision.border(t),this.body.shift(),this.Collision.tail(t),this.body.push(t)}drawSnake(){for(let t=0;t<this.body.length;t++)this.cells[t].position.x=this.Grid.getCoord(this.body[t].x),this.cells[t].position.z=this.Grid.getCoord(this.body[t].z)}main(){this.setBuild(this),this.createGrid(),this.Berry.Default(),this.createSnake(this.bodyLen),this.setterScore(),this.setterTail(),this.setterLives(),this.animFrame.toStartFrame()}resetGame(){this.cells=[],this.body=[],this.score=0,this.lives=this.maxLives,this.direction="UP",this.animFrame.cancelFrameAnimation(),this.frame.getScene.remove.apply(this.frame.getScene,this.frame.getScene.children),this.main()}getHead(){return this.body.at(-1)}initTail(t){this.setterTail=()=>t(this.body.length-1)}initScore(t){this.setterScore=()=>t(this.score)}initLives(t){this.setterLives=()=>t(this.lives)}stopGame(){return this.animFrame.getStop()}startGame(){return this.animFrame.getStart()}}const Hg=fn.exports.createContext(new ww);var vl={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew=fn.exports,Tw=Symbol.for("react.element"),bw=Symbol.for("react.fragment"),Cw=Object.prototype.hasOwnProperty,Aw=Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lw={key:!0,ref:!0,__self:!0,__source:!0};function Wg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Cw.call(e,i)&&!Lw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Tw,type:n,key:s,ref:o,props:r,_owner:Aw.current}}_l.Fragment=bw;_l.jsx=Wg;_l.jsxs=Wg;(function(n){n.exports=_l})(vl);const Pw=vl.exports.Fragment,er=vl.exports.jsx,Hs=vl.exports.jsxs;function Dw(){const n=fn.exports.useRef(null),e=fn.exports.useContext(Hg);function t(){n.current.classList.add("show"),e.stopGame()}function i(){n.current.classList.remove("show"),e.startGame()}fn.exports.useEffect(()=>{document.body.addEventListener("keydown",({key:s})=>{s==="Escape"&&(n.current.classList.contains("show")?i():t())})},[]);function r(){i(),e.resetGame()}return er("div",{className:"Menu",ref:n,children:er("div",{className:"Menu-container",children:Hs("ul",{children:[er("li",{onClick:()=>i(),children:"Continue"}),er("li",{onClick:r,children:"New game"})]})})})}function Rw(){const[n,e]=fn.exports.useState(0),[t,i]=fn.exports.useState(0),[r,s]=fn.exports.useState(0),o=fn.exports.useContext(Hg);return fn.exports.useEffect(()=>{o.initScore(e),o.initTail(i),o.initLives(s),o.main()},[]),Hs(Pw,{children:[er(Dw,{}),Hs("h1",{children:["SCORE:",n]}),Hs("h1",{children:["LENGTH:",t]}),Hs("h1",{children:["Lives:",r]}),er("h4",{children:"presskey ESC to open menu"})]})}gg(document.querySelector(".UI")).render(er(Rw,{}));
