(function(){"use strict";/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sm(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const al={},am=[],Ma=()=>{},om=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),lm=i=>i.startsWith("onUpdate:"),Ur=Object.assign,cm=Object.prototype.hasOwnProperty,ol=(i,e)=>cm.call(i,e),nn=Array.isArray,Fr=i=>ba(i)==="[object Map]",gh=i=>ba(i)==="[object Set]",_n=i=>typeof i=="function",Ui=i=>typeof i=="string",vr=i=>typeof i=="symbol",bn=i=>i!==null&&typeof i=="object",um=i=>(bn(i)||_n(i))&&_n(i.then)&&_n(i.catch),_h=Object.prototype.toString,ba=i=>_h.call(i),hm=i=>ba(i).slice(8,-1),vh=i=>ba(i)==="[object Object]",ll=i=>Ui(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,fi=(i,e)=>!Object.is(i,e);let xh;const cl=()=>xh||(xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ea(i){if(nn(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Ui(n)?mm(n):Ea(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ui(i)||bn(i))return i}const fm=/;(?![^(]*\))/g,dm=/:([^]+)/,pm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function mm(i){const e={};return i.replace(pm,t=>t.startsWith("/*")?"":t).split(fm).forEach(t=>{if(t){const n=t.split(dm);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function ul(i){let e="";if(Ui(i))e=i;else if(nn(i))for(let t=0;t<i.length;t++){const n=ul(i[t]);n&&(e+=n+" ")}else if(bn(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const yh=i=>!!(i&&i.__v_isRef===!0),hl=i=>Ui(i)?i:i==null?"":nn(i)||bn(i)&&(i.toString===_h||!_n(i.toString))?yh(i)?hl(i.value):JSON.stringify(i,Sh,2):String(i),Sh=(i,e)=>yh(e)?Sh(i,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[fl(n,s)+" =>"]=r,t),{})}:gh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>fl(t))}:vr(e)?fl(e):bn(e)&&!nn(e)&&!vh(e)?String(e):e,fl=(i,e="")=>{var t;return vr(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;const dl=new WeakSet;class gm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,dl.has(this)&&(dl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_m(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wh(this),bh(this);const e=zt,t=$n;zt=this,$n=!0;try{return this.fn()}finally{Eh(this),zt=e,$n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_l(e);this.deps=this.depsTail=void 0,wh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?dl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gl(this)&&this.run()}get dirty(){return gl(this)}}let Mh=0,Ps,Ls;function _m(i,e=!1){if(i.flags|=8,e){i.next=Ls,Ls=i;return}i.next=Ps,Ps=i}function pl(){Mh++}function ml(){if(--Mh>0)return;if(Ls){let e=Ls;for(Ls=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Ps;){let e=Ps;for(Ps=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function bh(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Eh(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),_l(n),xm(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function gl(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function vm(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Aa)||(i.globalVersion=Aa,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!gl(i))))return;i.flags|=2;const e=i.dep,t=zt,n=$n;zt=i,$n=!0;try{bh(i);const r=i.fn(i._value);(e.version===0||fi(r,i._value))&&(i.flags|=128,i._value=r,e.version++)}catch(r){throw e.version++,r}finally{zt=t,$n=n,Eh(i),i.flags&=-3}}function _l(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)_l(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function xm(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let $n=!0;const Th=[];function Ta(){Th.push($n),$n=!1}function wa(){const i=Th.pop();$n=i===void 0?!0:i}function wh(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=zt;zt=void 0;try{e()}finally{zt=t}}}let Aa=0;class ym{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ah{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!zt||!$n||zt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==zt)t=this.activeLink=new ym(zt,this),zt.deps?(t.prevDep=zt.depsTail,zt.depsTail.nextDep=t,zt.depsTail=t):zt.deps=zt.depsTail=t,Rh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=zt.depsTail,t.nextDep=void 0,zt.depsTail.nextDep=t,zt.depsTail=t,zt.deps===t&&(zt.deps=n)}return t}trigger(e){this.version++,Aa++,this.notify(e)}notify(e){pl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ml()}}}function Rh(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Rh(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const vl=new WeakMap,xr=Symbol(""),xl=Symbol(""),Is=Symbol("");function vn(i,e,t){if($n&&zt){let n=vl.get(i);n||vl.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new Ah),r.map=n,r.key=t),r.track()}}function er(i,e,t,n,r,s){const a=vl.get(i);if(!a){Aa++;return}const o=c=>{c&&c.trigger()};if(pl(),e==="clear")a.forEach(o);else{const c=nn(i),u=c&&ll(t);if(c&&t==="length"){const h=Number(n);a.forEach((f,p)=>{(p==="length"||p===Is||!vr(p)&&p>=h)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(Is)),e){case"add":c?u&&o(a.get("length")):(o(a.get(xr)),Fr(i)&&o(a.get(xl)));break;case"delete":c||(o(a.get(xr)),Fr(i)&&o(a.get(xl)));break;case"set":Fr(i)&&o(a.get(xr));break}}ml()}function Or(i){const e=kt(i);return e===i||(vn(e,"iterate",Is),Yn(i))?e:Oi(i)?Br(i)?e.map(t=>yr(pi(t))):e.map(yr):e.map(pi)}function yl(i){return vn(i=kt(i),"iterate",Is),i}function di(i,e){return Oi(i)?yr(Br(i)?pi(e):e):pi(e)}const Sm={__proto__:null,[Symbol.iterator](){return Sl(this,Symbol.iterator,i=>di(this,i))},concat(...i){return Or(this).concat(...i.map(e=>nn(e)?Or(e):e))},entries(){return Sl(this,"entries",i=>(i[1]=di(this,i[1]),i))},every(i,e){return Fi(this,"every",i,e,void 0,arguments)},filter(i,e){return Fi(this,"filter",i,e,t=>t.map(n=>di(this,n)),arguments)},find(i,e){return Fi(this,"find",i,e,t=>di(this,t),arguments)},findIndex(i,e){return Fi(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Fi(this,"findLast",i,e,t=>di(this,t),arguments)},findLastIndex(i,e){return Fi(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Fi(this,"forEach",i,e,void 0,arguments)},includes(...i){return Ml(this,"includes",i)},indexOf(...i){return Ml(this,"indexOf",i)},join(i){return Or(this).join(i)},lastIndexOf(...i){return Ml(this,"lastIndexOf",i)},map(i,e){return Fi(this,"map",i,e,void 0,arguments)},pop(){return Ds(this,"pop")},push(...i){return Ds(this,"push",i)},reduce(i,...e){return Ch(this,"reduce",i,e)},reduceRight(i,...e){return Ch(this,"reduceRight",i,e)},shift(){return Ds(this,"shift")},some(i,e){return Fi(this,"some",i,e,void 0,arguments)},splice(...i){return Ds(this,"splice",i)},toReversed(){return Or(this).toReversed()},toSorted(i){return Or(this).toSorted(i)},toSpliced(...i){return Or(this).toSpliced(...i)},unshift(...i){return Ds(this,"unshift",i)},values(){return Sl(this,"values",i=>di(this,i))}};function Sl(i,e,t){const n=yl(i),r=n[e]();return n!==i&&!Yn(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Mm=Array.prototype;function Fi(i,e,t,n,r,s){const a=yl(i),o=a!==i&&!Yn(i),c=a[e];if(c!==Mm[e]){const f=c.apply(i,s);return o?pi(f):f}let u=t;a!==i&&(o?u=function(f,p){return t.call(this,di(i,f),p,i)}:t.length>2&&(u=function(f,p){return t.call(this,f,p,i)}));const h=c.call(a,u,n);return o&&r?r(h):h}function Ch(i,e,t,n){const r=yl(i),s=r!==i&&!Yn(i);let a=t,o=!1;r!==i&&(s?(o=n.length===0,a=function(u,h,f){return o&&(o=!1,u=di(i,u)),t.call(this,u,di(i,h),f,i)}):t.length>3&&(a=function(u,h,f){return t.call(this,u,h,f,i)}));const c=r[e](a,...n);return o?di(i,c):c}function Ml(i,e,t){const n=kt(i);vn(n,"iterate",Is);const r=n[e](...t);return(r===-1||r===!1)&&Tl(t[0])?(t[0]=kt(t[0]),n[e](...t)):r}function Ds(i,e,t=[]){Ta(),pl();const n=kt(i)[e].apply(i,t);return ml(),wa(),n}const bm=sm("__proto__,__v_isRef,__isVue"),Ph=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(vr));function Em(i){vr(i)||(i=String(i));const e=kt(this);return vn(e,"has",i),e.hasOwnProperty(i)}class Lh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?Nm:Nh:s?Dm:Dh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const a=nn(e);if(!r){let c;if(a&&(c=Sm[t]))return c;if(t==="hasOwnProperty")return Em}const o=Reflect.get(e,t,mi(e)?e:n);if((vr(t)?Ph.has(t):bm(t))||(r||vn(e,"get",t),s))return o;if(mi(o)){const c=a&&ll(t)?o:o.value;return r&&bn(c)?El(c):c}return bn(o)?r?El(o):Uh(o):o}}class Tm extends Lh{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];const a=nn(e)&&ll(t);if(!this._isShallow){const u=Oi(s);if(!Yn(n)&&!Oi(n)&&(s=kt(s),n=kt(n)),!a&&mi(s)&&!mi(n))return u||(s.value=n),!0}const o=a?Number(t)<e.length:ol(e,t),c=Reflect.set(e,t,n,mi(e)?e:r);return e===kt(r)&&c&&(o?fi(n,s)&&er(e,"set",t,n):er(e,"add",t,n)),c}deleteProperty(e,t){const n=ol(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&er(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!vr(t)||!Ph.has(t))&&vn(e,"has",t),n}ownKeys(e){return vn(e,"iterate",nn(e)?"length":xr),Reflect.ownKeys(e)}}class wm extends Lh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Am=new Tm,Rm=new wm,bl=i=>i,Ra=i=>Reflect.getPrototypeOf(i);function Cm(i,e,t){return function(...n){const r=this.__v_raw,s=kt(r),a=Fr(s),o=i==="entries"||i===Symbol.iterator&&a,c=i==="keys"&&a,u=r[i](...n),h=t?bl:e?yr:pi;return!e&&vn(s,"iterate",c?xl:xr),Ur(Object.create(u),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:o?[h(f[0]),h(f[1])]:h(f),done:p}}})}}function Ca(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Pm(i,e){const t={get(r){const s=this.__v_raw,a=kt(s),o=kt(r);i||(fi(r,o)&&vn(a,"get",r),vn(a,"get",o));const{has:c}=Ra(a),u=e?bl:i?yr:pi;if(c.call(a,r))return u(s.get(r));if(c.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!i&&vn(kt(r),"iterate",xr),r.size},has(r){const s=this.__v_raw,a=kt(s),o=kt(r);return i||(fi(r,o)&&vn(a,"has",r),vn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,c=kt(o),u=e?bl:i?yr:pi;return!i&&vn(c,"iterate",xr),o.forEach((h,f)=>r.call(s,u(h),u(f),a))}};return Ur(t,i?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(r){const s=kt(this),a=Ra(s),o=kt(r),c=!e&&!Yn(r)&&!Oi(r)?o:r;return a.has.call(s,c)||fi(r,c)&&a.has.call(s,r)||fi(o,c)&&a.has.call(s,o)||(s.add(c),er(s,"add",c,c)),this},set(r,s){!e&&!Yn(s)&&!Oi(s)&&(s=kt(s));const a=kt(this),{has:o,get:c}=Ra(a);let u=o.call(a,r);u||(r=kt(r),u=o.call(a,r));const h=c.call(a,r);return a.set(r,s),u?fi(s,h)&&er(a,"set",r,s):er(a,"add",r,s),this},delete(r){const s=kt(this),{has:a,get:o}=Ra(s);let c=a.call(s,r);c||(r=kt(r),c=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return c&&er(s,"delete",r,void 0),u},clear(){const r=kt(this),s=r.size!==0,a=r.clear();return s&&er(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Cm(r,i,e)}),t}function Ih(i,e){const t=Pm(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(ol(t,r)&&r in n?t:n,r,s)}const Lm={get:Ih(!1,!1)},Im={get:Ih(!0,!1)},Dh=new WeakMap,Dm=new WeakMap,Nh=new WeakMap,Nm=new WeakMap;function Um(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uh(i){return Oi(i)?i:Fh(i,!1,Am,Lm,Dh)}function El(i){return Fh(i,!0,Rm,Im,Nh)}function Fh(i,e,t,n,r){if(!bn(i)||i.__v_raw&&!(e&&i.__v_isReactive)||i.__v_skip||!Object.isExtensible(i))return i;const s=r.get(i);if(s)return s;const a=Um(hm(i));if(a===0)return i;const o=new Proxy(i,a===2?n:t);return r.set(i,o),o}function Br(i){return Oi(i)?Br(i.__v_raw):!!(i&&i.__v_isReactive)}function Oi(i){return!!(i&&i.__v_isReadonly)}function Yn(i){return!!(i&&i.__v_isShallow)}function Tl(i){return i?!!i.__v_raw:!1}function kt(i){const e=i&&i.__v_raw;return e?kt(e):i}const pi=i=>bn(i)?Uh(i):i,yr=i=>bn(i)?El(i):i;function mi(i){return i?i.__v_isRef===!0:!1}function dn(i){return Fm(i,!1)}function Fm(i,e){return mi(i)?i:new Om(i,e)}class Om{constructor(e,t){this.dep=new Ah,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:kt(e),this._value=t?e:pi(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Yn(e)||Oi(e);e=n?e:kt(e),fi(e,t)&&(this._rawValue=e,this._value=n?e:pi(e),this.dep.trigger())}}const Pa={},La=new WeakMap;let Sr;function Bm(i,e=!1,t=Sr){if(t){let n=La.get(t);n||La.set(t,n=[]),n.push(i)}}function km(i,e,t=al){const{immediate:n,deep:r,once:s,scheduler:a,augmentJob:o,call:c}=t,u=A=>r?A:Yn(A)||r===!1||r===0?tr(A,1):tr(A);let h,f,p,m,x=!1,E=!1;if(mi(i)?(f=()=>i.value,x=Yn(i)):Br(i)?(f=()=>u(i),x=!0):nn(i)?(E=!0,x=i.some(A=>Br(A)||Yn(A)),f=()=>i.map(A=>{if(mi(A))return A.value;if(Br(A))return u(A);if(_n(A))return c?c(A,2):A()})):_n(i)?e?f=c?()=>c(i,2):i:f=()=>{if(p){Ta();try{p()}finally{wa()}}const A=Sr;Sr=h;try{return c?c(i,3,[m]):i(m)}finally{Sr=A}}:f=Ma,e&&r){const A=f,M=r===!0?1/0:r;f=()=>tr(A(),M)}const v=()=>{h.stop()};if(s&&e){const A=e;e=(...M)=>{const w=A(...M);return v(),w}}let _=E?new Array(i.length).fill(Pa):Pa;const L=A=>{if(!(!(h.flags&1)||!h.dirty&&!A))if(e){const M=h.run();if(A||r||x||(E?M.some((w,T)=>fi(w,_[T])):fi(M,_))){p&&p();const w=Sr;Sr=h;try{const T=[M,_===Pa?void 0:E&&_[0]===Pa?[]:_,m];_=M,c?c(e,3,T):e(...T)}finally{Sr=w}}}else h.run()};return o&&o(L),h=new gm(f),h.scheduler=a?()=>a(L,!1):L,m=A=>Bm(A,!1,h),p=h.onStop=()=>{const A=La.get(h);if(A){if(c)c(A,4);else for(const M of A)M();La.delete(h)}},e?n?L(!0):_=h.run():a?a(L.bind(null,!0),!0):h.run(),v.pause=h.pause.bind(h),v.resume=h.resume.bind(h),v.stop=v,v}function tr(i,e=1/0,t){if(e<=0||!bn(i)||i.__v_skip||(t=t||new Map,(t.get(i)||0)>=e))return i;if(t.set(i,e),e--,mi(i))tr(i.value,e,t);else if(nn(i))for(let n=0;n<i.length;n++)tr(i[n],e,t);else if(gh(i)||Fr(i))i.forEach(n=>{tr(n,e,t)});else if(vh(i)){for(const n in i)tr(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&tr(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wl(i,e,t,n){try{return n?i(...n):i()}catch(r){Oh(r,e,t)}}function Al(i,e,t,n){if(_n(i)){const r=wl(i,e,t,n);return r&&um(r)&&r.catch(s=>{Oh(s,e,t)}),r}if(nn(i)){const r=[];for(let s=0;s<i.length;s++)r.push(Al(i[s],e,t,n));return r}}function Oh(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||al;if(e){let o=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const h=o.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](i,c,u)===!1)return}o=o.parent}if(s){Ta(),wl(s,null,10,[i,c,u]),wa();return}}zm(i,t,r,n,a)}function zm(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Ln=[];let Bi=-1;const kr=[];let nr=null,zr=0;const Hm=Promise.resolve();let Rl=null;function Vm(i){let e=Bi+1,t=Ln.length;for(;e<t;){const n=e+t>>>1,r=Ln[n],s=Ns(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function Gm(i){if(!(i.flags&1)){const e=Ns(i),t=Ln[Ln.length-1];!t||!(i.flags&2)&&e>=Ns(t)?Ln.push(i):Ln.splice(Vm(e),0,i),i.flags|=1,Bh()}}function Bh(){Rl||(Rl=Hm.then(kh))}function Wm(i){if(!nn(i))nr&&i.id===-1?nr.splice(zr+1,0,i):i.flags&1||(kr.push(i),i.flags|=1);else for(let e=0;e<i.length;e++)kr.push(i[e]);Bh()}function Xm(i){if(kr.length){const e=[...new Set(kr)].sort((t,n)=>Ns(t)-Ns(n));if(kr.length=0,nr){for(let t=0;t<e.length;t++)nr.push(e[t]);return}for(nr=e,zr=0;zr<nr.length;zr++){const t=nr[zr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}nr=null,zr=0}}const Ns=i=>i.id==null?i.flags&2?-1:1/0:i.id;function kh(i){try{for(Bi=0;Bi<Ln.length;Bi++){const e=Ln[Bi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bi<Ln.length;Bi++){const e=Ln[Bi];e&&(e.flags&=-2)}Bi=-1,Ln.length=0,Xm(),Rl=null,(Ln.length||kr.length)&&kh()}}let Us=null,qm=null;function $m(i,e,t=!1){const n=gg();if(n||rg){let r=n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&_n(e)?e.call(n&&n.proxy):e}}const Ym=Symbol.for("v-scx"),Km=()=>$m(Ym);function jm(i,e,t){return Zm(i,e,t)}function Zm(i,e,t=al){const{immediate:n,deep:r,flush:s,once:a}=t,o=Ur({},t),c=e&&n||!e&&s!=="post";let u;if(Oa){if(s==="sync"){const m=Km();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ma,m.resume=Ma,m.pause=Ma,m}}const h=Hr;o.call=(m,x,E)=>Al(m,h,x,E);let f=!1;s==="post"?o.scheduler=m=>{ag(m,h&&h.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():Gm(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=km(i,e,o);return Oa&&(u?u.push(p):c&&p()),p}const Cl=i=>i.__isTeleport;function Jm(i){let e=i[0];if(i.length>1){for(const t of i)if(t.type!==Ia){e=t;break}}return e}function Qm(i){if(!eg(i))return Cl(i.type)&&i.children?Jm(i.children):i;if(i.component)return i.component.subTree;const{shapeFlag:e,children:t}=i;if(t){if(e&16)return t[0];if(e&32&&_n(t.default))return t.default()}}function zh(i,e){if(i.shapeFlag&6&&i.component){i.transition=e;const t=i.component.subTree;zh(Cl(t.type)&&Qm(t)||t,e)}else i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Hh(i,e){return _n(i)?Ur({name:i.name},e,{setup:i}):i}cl().requestIdleCallback,cl().cancelIdleCallback;const eg=i=>i.type.__isKeepAlive;function tg(i,e,t=Hr,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...a)=>{Ta();const o=_g(t),c=Al(e,t,i,a);return o(),wa(),c});return n?r.unshift(s):r.push(s),s}}const Vh=i=>(e,t=Hr)=>{(!Oa||i==="sp")&&tg(i,(...n)=>e(...n),t)},Gh=Vh("m"),ng=Vh("bum"),ig=Symbol.for("v-ndc");let rg=null;const sg={},Wh=i=>Object.getPrototypeOf(i)===sg,ag=lg,og=i=>i.__isSuspense;function lg(i,e){e&&e.pendingBranch?nn(i)?e.effects.push(...i):e.effects.push(i):Wm(i)}const Xh=Symbol.for("v-fgt"),cg=Symbol.for("v-txt"),Ia=Symbol.for("v-cmt"),Da=[];let Kn=null;function Mr(i=!1){Da.push(Kn=i?null:[])}function ug(){Da.pop(),Kn=Da[Da.length-1]||null}function qh(i){return i.dynamicChildren=Kn||am,ug(),Kn&&Kn.push(i),i}function Fs(i,e,t,n,r,s){return qh(ki(i,e,t,n,r,s,!0))}function $h(i,e,t,n,r){return qh(Pl(i,e,t,n,r,!0))}function hg(i){return i?i.__v_isVNode===!0:!1}const Yh=({key:i})=>i??null,Na=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Ui(i)||mi(i)||_n(i)?{i:Us,r:i,k:e,f:!!t}:i:null);function ki(i,e=null,t=null,n=0,r=null,s=i===Xh?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Yh(e),ref:e&&Na(e),scopeId:qm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Us};return o?(Fa(c,t),s&128&&i.normalize(c)):t&&(c.shapeFlag|=Ui(t)?8:16),!a&&Kn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Kn.push(c),c}const Pl=fg;function fg(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===ig)&&(i=Ia),hg(i)){const o=Ll(i,e,!0);return t&&Fa(o,t),!s&&Kn&&(o.shapeFlag&6?Kn[Kn.indexOf(i)]=o:Kn.push(o)),o.patchFlag=-2,o}if(vg(i)&&(i=i.__vccOpts),e){e=dg(e);let{class:o,style:c}=e;o&&!Ui(o)&&(e.class=ul(o)),bn(c)&&(Tl(c)&&!nn(c)&&(c=Ur({},c)),e.style=Ea(c))}const a=Ui(i)?1:og(i)?128:Cl(i)?64:bn(i)?4:_n(i)?2:0;return ki(i,e,t,n,r,a,s,!0)}function dg(i){return i?Tl(i)||Wh(i)?Ur({},i):i:null}function Ll(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:c}=i,u=e?mg(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:i.type,props:u,key:u&&Yh(u),ref:e&&e.ref?t&&s?nn(s)?s.concat(Na(e)):[s,Na(e)]:Na(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Xh?a===-1?16:a|16:a,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:c,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ll(i.ssContent),ssFallback:i.ssFallback&&Ll(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce,cacheIndex:i.cacheIndex};return c&&n&&zh(h,c.clone(h)),h}function pg(i=" ",e=0){return Pl(cg,null,i,e)}function Ua(i="",e=!1){return e?(Mr(),$h(Ia,null,i)):Pl(Ia,null,i)}function Fa(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(nn(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Fa(i,r()),r._c&&(r._d=!0));return}else t=32,!e._&&!Wh(e)&&(e._ctx=Us);else if(_n(e)){if(n&65){Fa(i,{default:e});return}e={default:e,_ctx:Us},t=32}else e=String(e),n&64?(t=16,e=[pg(e)]):t=8;i.children=e,i.shapeFlag|=t}function mg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=ul([e.class,n.class]));else if(r==="style")e.style=Ea([e.style,n.style]);else if(om(r)){const s=e[r],a=n[r];a&&s!==a&&!(nn(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!lm(r)&&(e[r]=a)}else r!==""&&(e[r]=n[r])}return e}let Hr=null;const gg=()=>Hr||Us;let Il;{const i=cl(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Il=e("__VUE_INSTANCE_SETTERS__",t=>Hr=t),e("__VUE_SSR_SETTERS__",t=>Oa=t)}const _g=i=>{const e=Hr;return Il(i),i.scope.on(),()=>{i.scope.off(),Il(e)}};let Oa=!1;function vg(i){return _n(i)&&"__vccOpts"in i}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="186",Vr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xg=0,Kh=1,yg=2,Ba=1,Sg=2,Os=3,zi=0,xn=1,jn=2,Hi=0,Bs=1,jh=2,Zh=3,Jh=4,Mg=5,Wr=100,bg=101,Eg=102,Tg=103,wg=104,Ag=200,Rg=201,Cg=202,Pg=203,Qh=204,ef=205,Lg=206,Ig=207,Dg=208,Ng=209,Ug=210,Fg=211,Og=212,Bg=213,kg=214,Nl=0,Ul=1,Fl=2,ks=3,Ol=4,Bl=5,kl=6,zl=7,Hl=0,zg=1,Hg=2,gi=0,tf=1,nf=2,rf=3,sf=4,af=5,of=6,lf=7,cf="attached",Vg="detached",uf=300,br=301,Xr=302,Vl=303,Gl=304,ka=306,_i=1e3,In=1001,qr=1002,jt=1003,hf=1004,zs=1005,qt=1006,za=1007,Zn=1008,En=1009,ff=1010,df=1011,Hs=1012,Wl=1013,vi=1014,Dn=1015,xi=1016,Xl=1017,ql=1018,Vs=1020,pf=35902,mf=35899,gf=1021,_f=1022,Nn=1023,Vi=1026,Er=1027,$l=1028,Yl=1029,Tr=1030,Kl=1031,jl=1033,Ha=33776,Va=33777,Ga=33778,Wa=33779,Zl=35840,Jl=35841,Ql=35842,ec=35843,tc=36196,nc=37492,ic=37496,rc=37488,sc=37489,Xa=37490,ac=37491,oc=37808,lc=37809,cc=37810,uc=37811,hc=37812,fc=37813,dc=37814,pc=37815,mc=37816,gc=37817,_c=37818,vc=37819,xc=37820,yc=37821,Sc=36492,Mc=36494,bc=36495,Ec=36283,Tc=36284,qa=36285,wc=36286,Gs=2300,Ws=2301,Ac=2302,vf=2303,xf=2400,yf=2401,Sf=2402,Gg=2500,Wg=0,Mf=1,Rc=2,Xg=3200,$a=0,qg=1,ir="",$t="srgb",Tn="srgb-linear",Ya="linear",It="srgb",Cc=7680,$g=519,Yg=512,Kg=513,jg=514,Pc=515,Zg=516,Jg=517,Lc=518,Qg=519,bf=35044,Ef="300 es",yi=2e3,Xs=2001;function e_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function t_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function n_(){const i=qs("canvas");return i.style.display="block",i}const Tf={};function Ka(...i){const e="THREE."+i.shift();console.log(e,...i)}function wf(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=wf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=wf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function $r(...i){const e=i.join(" ");e in Tf||(Tf[e]=!0,Qe(...i))}function i_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const r_={[Nl]:Ul,[Fl]:kl,[Ol]:zl,[ks]:Bl,[Ul]:Nl,[kl]:Fl,[zl]:Ol,[Bl]:ks};class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Af=1234567;const Yr=Math.PI/180,Kr=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Ic(i,e){return(i%e+e)%e}function s_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function a_(i,e,t){return i!==e?(t-i)/(e-i):0}function $s(i,e,t){return(1-t)*i+t*e}function o_(i,e,t,n){return $s(i,e,1-Math.exp(-t*n))}function l_(i,e=1){return e-Math.abs(Ic(i,e*2)-e)}function c_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function u_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function h_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function f_(i,e){return i+Math.random()*(e-i)}function d_(i){return i*(.5-Math.random())}function p_(i){i!==void 0&&(Af=i);let e=Af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m_(i){return i*Yr}function g_(i){return i*Kr}function __(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function v_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function x_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y_(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),u=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),p=a((e-n)/2),m=s((n-e)/2),x=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*f,c*p,o*u);break;case"YZY":i.set(c*p,o*h,c*f,o*u);break;case"ZXZ":i.set(c*f,c*p,o*h,o*u);break;case"XZX":i.set(o*h,c*x,c*m,o*u);break;case"YXY":i.set(c*m,o*h,c*x,o*u);break;case"ZYZ":i.set(c*x,c*m,o*h,o*u);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Rf={DEG2RAD:Yr,RAD2DEG:Kr,generateUUID:Jn,clamp:_t,euclideanModulo:Ic,mapLinear:s_,inverseLerp:a_,lerp:$s,damp:o_,pingpong:l_,smoothstep:c_,smootherstep:u_,randInt:h_,randFloat:f_,randFloatSpread:d_,seededRandom:p_,degToRad:m_,radToDeg:g_,isPowerOfTwo:__,ceilPowerOfTwo:v_,floorPowerOfTwo:x_,setQuaternionFromProperEuler:y_,normalize:Dt,denormalize:Qn},eh=class eh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};eh.prototype.isVector2=!0;let nt=eh;class Un{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3],p=s[a+0],m=s[a+1],x=s[a+2],E=s[a+3];if(f!==E||c!==p||u!==m||h!==x){let v=c*p+u*m+h*x+f*E;v<0&&(p=-p,m=-m,x=-x,E=-E,v=-v);let _=1-o;if(v<.9995){const L=Math.acos(v),A=Math.sin(L);_=Math.sin(_*L)/A,o=Math.sin(o*L)/A,c=c*_+p*o,u=u*_+m*o,h=h*_+x*o,f=f*_+E*o}else{c=c*_+p*o,u=u*_+m*o,h=h*_+x*o,f=f*_+E*o;const L=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=L,u*=L,h*=L,f*=L}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a],p=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+h*f+c*m-u*p,e[t+1]=c*x+h*p+u*f-o*m,e[t+2]=u*x+h*m+o*p-c*f,e[t+3]=h*x-o*f-c*p-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),f=o(s/2),p=c(n/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=p*h*f+u*m*x,this._y=u*m*f-p*h*x,this._z=u*h*x+p*m*f,this._w=u*h*f-p*m*x;break;case"YXZ":this._x=p*h*f+u*m*x,this._y=u*m*f-p*h*x,this._z=u*h*x-p*m*f,this._w=u*h*f+p*m*x;break;case"ZXY":this._x=p*h*f-u*m*x,this._y=u*m*f+p*h*x,this._z=u*h*x+p*m*f,this._w=u*h*f-p*m*x;break;case"ZYX":this._x=p*h*f-u*m*x,this._y=u*m*f+p*h*x,this._z=u*h*x-p*m*f,this._w=u*h*f+p*m*x;break;case"YZX":this._x=p*h*f+u*m*x,this._y=u*m*f+p*h*x,this._z=u*h*x-p*m*f,this._w=u*h*f-p*m*x;break;case"XZY":this._x=p*h*f-u*m*x,this._y=u*m*f-p*h*x,this._z=u*h*x+p*m*f,this._w=u*h*f+p*m*x;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],p=n+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const th=class th{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};th.prototype.isVector3=!0;let j=th;const Dc=new j,Cf=new Un,nh=class nh{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],p=n[2],m=n[5],x=n[8],E=r[0],v=r[3],_=r[6],L=r[1],A=r[4],M=r[7],w=r[2],T=r[5],P=r[8];return s[0]=a*E+o*L+c*w,s[3]=a*v+o*A+c*T,s[6]=a*_+o*M+c*P,s[1]=u*E+h*L+f*w,s[4]=u*v+h*A+f*T,s[7]=u*_+h*M+f*P,s[2]=p*E+m*L+x*w,s[5]=p*v+m*A+x*T,s[8]=p*_+m*M+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,p=o*c-h*s,m=u*s-a*c,x=t*f+n*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=f*E,e[1]=(r*u-h*n)*E,e[2]=(o*n-r*a)*E,e[3]=p*E,e[4]=(h*t-r*c)*E,e[5]=(r*s-o*t)*E,e[6]=m*E,e[7]=(n*c-u*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return $r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return $r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return $r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nh.prototype.isMatrix3=!0;let ft=nh;const Nc=new ft,Pf=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S_(){const i={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===It&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(r.r=jr(r.r),r.g=jr(r.g),r.b=jr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?Ya:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tn]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:It,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const xt=S_();function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zr;class M_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zr===void 0&&(Zr=qs("canvas")),Zr.width=e.width,Zr.height=e.height;const r=Zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Zr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b_=0;class Uc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fc(r[a].image)):s.push(Fc(r[a]))}else s=Fc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?M_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let E_=0;const Oc=new j;class rn extends rr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=In,r=In,s=qt,a=Zn,o=Nn,c=En,u=rn.DEFAULT_ANISOTROPY,h=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Jn(),this.name="",this.source=new Uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=uf,rn.DEFAULT_ANISOTROPY=1;const ih=class ih{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],h=c[4],f=c[8],p=c[1],m=c[5],x=c[9],E=c[2],v=c[6],_=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-E)<.01&&Math.abs(x-v)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+E)<.1&&Math.abs(x+v)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,M=(m+1)/2,w=(_+1)/2,T=(h+p)/4,P=(f+E)/4,y=(x+v)/4;return A>M&&A>w?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=T/n,s=P/n):M>w?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=T/r,s=y/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=P/s,r=y/s),this.set(n,r,s,t),this}let L=Math.sqrt((v-x)*(v-x)+(f-E)*(f-E)+(p-h)*(p-h));return Math.abs(L)<.001&&(L=1),this.x=(v-x)/L,this.y=(f-E)/L,this.z=(p-h)/L,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ih.prototype.isVector4=!0;let Ot=ih;class T_ extends rr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new rn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Uc(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends T_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class If extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w_ extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $o=class $o{constructor(e,t,n,r,s,a,o,c,u,h,f,p,m,x,E,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,f,p,m,x,E,v)}set(e,t,n,r,s,a,o,c,u,h,f,p,m,x,E,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=f,_[14]=p,_[3]=m,_[7]=x,_[11]=E,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),a=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*h,m=a*f,x=o*h,E=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=m+x*u,t[5]=p-E*u,t[9]=-o*c,t[2]=E-p*u,t[6]=x+m*u,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,m=c*f,x=u*h,E=u*f;t[0]=p+E*o,t[4]=x*o-m,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=E+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,m=c*f,x=u*h,E=u*f;t[0]=p-E*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=E-p*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,m=a*f,x=o*h,E=o*f;t[0]=c*h,t[4]=x*u-m,t[8]=p*u+E,t[1]=c*f,t[5]=E*u+p,t[9]=m*u-x,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*u,x=o*c,E=o*u;t[0]=c*h,t[4]=E-p*f,t[8]=x*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=m*f+x,t[10]=p-E*f}else if(e.order==="XZY"){const p=a*c,m=a*u,x=o*c,E=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=p*f+E,t[5]=a*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*h,t[10]=E*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A_,e,R_)}lookAt(e,t,n){const r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),sr.crossVectors(n,wn),sr.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),sr.crossVectors(n,wn)),sr.normalize(),ja.crossVectors(wn,sr),r[0]=sr.x,r[4]=ja.x,r[8]=wn.x,r[1]=sr.y,r[5]=ja.y,r[9]=wn.y,r[2]=sr.z,r[6]=ja.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],p=n[9],m=n[13],x=n[2],E=n[6],v=n[10],_=n[14],L=n[3],A=n[7],M=n[11],w=n[15],T=r[0],P=r[4],y=r[8],R=r[12],N=r[1],F=r[5],z=r[9],V=r[13],O=r[2],W=r[6],J=r[10],X=r[14],te=r[3],ie=r[7],pe=r[11],me=r[15];return s[0]=a*T+o*N+c*O+u*te,s[4]=a*P+o*F+c*W+u*ie,s[8]=a*y+o*z+c*J+u*pe,s[12]=a*R+o*V+c*X+u*me,s[1]=h*T+f*N+p*O+m*te,s[5]=h*P+f*F+p*W+m*ie,s[9]=h*y+f*z+p*J+m*pe,s[13]=h*R+f*V+p*X+m*me,s[2]=x*T+E*N+v*O+_*te,s[6]=x*P+E*F+v*W+_*ie,s[10]=x*y+E*z+v*J+_*pe,s[14]=x*R+E*V+v*X+_*me,s[3]=L*T+A*N+M*O+w*te,s[7]=L*P+A*F+M*W+w*ie,s[11]=L*y+A*z+M*J+w*pe,s[15]=L*R+A*V+M*X+w*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],p=e[10],m=e[14],x=e[3],E=e[7],v=e[11],_=e[15],L=c*m-u*p,A=o*m-u*f,M=o*p-c*f,w=a*m-u*h,T=a*p-c*h,P=a*f-o*h;return t*(E*L-v*A+_*M)-n*(x*L-v*w+_*T)+r*(x*A-E*w+_*P)-s*(x*M-E*T+v*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(s*h-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],p=e[10],m=e[11],x=e[12],E=e[13],v=e[14],_=e[15],L=t*o-n*a,A=t*c-r*a,M=t*u-s*a,w=n*c-r*o,T=n*u-s*o,P=r*u-s*c,y=h*E-f*x,R=h*v-p*x,N=h*_-m*x,F=f*v-p*E,z=f*_-m*E,V=p*_-m*v,O=L*V-A*z+M*F+w*N-T*R+P*y;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/O;return e[0]=(o*V-c*z+u*F)*W,e[1]=(r*z-n*V-s*F)*W,e[2]=(E*P-v*T+_*w)*W,e[3]=(p*T-f*P-m*w)*W,e[4]=(c*N-a*V-u*R)*W,e[5]=(t*V-r*N+s*R)*W,e[6]=(v*M-x*P-_*A)*W,e[7]=(h*P-p*M+m*A)*W,e[8]=(a*z-o*N+u*y)*W,e[9]=(n*N-t*z-s*y)*W,e[10]=(x*T-E*M+_*L)*W,e[11]=(f*M-h*T-m*L)*W,e[12]=(o*R-a*F-c*y)*W,e[13]=(t*F-n*R+r*y)*W,e[14]=(E*A-x*w-v*L)*W,e[15]=(h*w-f*A+p*L)*W,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,f=o+o,p=s*u,m=s*h,x=s*f,E=a*h,v=a*f,_=o*f,L=c*u,A=c*h,M=c*f,w=n.x,T=n.y,P=n.z;return r[0]=(1-(E+_))*w,r[1]=(m+M)*w,r[2]=(x-A)*w,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(p+_))*T,r[6]=(v+L)*T,r[7]=0,r[8]=(x+A)*P,r[9]=(v-L)*P,r[10]=(1-(p+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),c=Jr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ti.copy(this);const u=1/a,h=1/o,f=1/c;return ti.elements[0]*=u,ti.elements[1]*=u,ti.elements[2]*=u,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=yi,c=!1){const u=this.elements,h=2*s/(t-e),f=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let x,E;if(c)x=s/(a-s),E=a*s/(a-s);else if(o===yi)x=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Xs)x=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=yi,c=!1){const u=this.elements,h=2/(t-e),f=2/(n-r),p=-(t+e)/(t-e),m=-(n+r)/(n-r);let x,E;if(c)x=1/(a-s),E=a/(a-s);else if(o===yi)x=-2/(a-s),E=-(a+s)/(a-s);else if(o===Xs)x=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=p,u[1]=0,u[5]=f,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$o.prototype.isMatrix4=!0;let ut=$o;const Jr=new j,ti=new ut,A_=new j(0,0,0),R_=new j(1,1,1),sr=new j,ja=new j,wn=new j,Df=new ut,Nf=new Un;class Wi{constructor(e=0,t=0,n=0,r=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C_=0;const Ff=new j,Qr=new Un,Xi=new ut,Za=new j,Ys=new j,P_=new j,L_=new Un,Of=new j(1,0,0),Bf=new j(0,1,0),kf=new j(0,0,1),zf={type:"added"},I_={type:"removed"},es={type:"childadded",child:null},Bc={type:"childremoved",child:null};class Gt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new j,t=new Wi,n=new Un,r=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new ft}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Of,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(kf,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Of,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ys,Za,this.up):Xi.lookAt(Za,Ys,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(Xi),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zf),es.child=e,this.dispatchEvent(es),es.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I_),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zf),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,P_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,L_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new j(0,1,0),Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ni extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D_={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,n),_=this._getHandJoint(u,E);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,x=.005;u.inputState.pinching&&p>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=Ic(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zc(a,s,e+1/3),this.g=zc(a,s,e),this.b=zc(a,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=$t){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=Hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return xt.workingToColorSpace(hn.copy(this),e),Math.round(_t(hn.r*255,0,255))*65536+Math.round(_t(hn.g*255,0,255))*256+Math.round(_t(hn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(hn.copy(this),t);const n=hn.r,r=hn.g,s=hn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=$t){xt.workingToColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,r=hn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Ja);const n=$s(ar.h,Ja.h,t),r=$s(ar.s,Ja.s,t),s=$s(ar.l,Ja.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Je;Je.NAMES=Hf;class N_ extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ii=new j,qi=new j,Hc=new j,$i=new j,ts=new j,ns=new j,Vf=new j,Vc=new j,Gc=new j,Wc=new j,Xc=new Ot,qc=new Ot,$c=new Ot;class Fn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ii.subVectors(e,t),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ii.subVectors(r,t),qi.subVectors(n,t),Hc.subVectors(e,t);const a=ii.dot(ii),o=ii.dot(qi),c=ii.dot(Hc),u=qi.dot(qi),h=qi.dot(Hc),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(u*c-o*h)*p,x=(a*h-o*c)*p;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,$i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$i.x),c.addScaledVector(a,$i.y),c.addScaledVector(o,$i.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Xc.setScalar(0),qc.setScalar(0),$c.setScalar(0),Xc.fromBufferAttribute(e,t),qc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xc,s.x),a.addScaledVector(qc,s.y),a.addScaledVector($c,s.z),a}static isFrontFacing(e,t,n,r){return ii.subVectors(n,t),qi.subVectors(e,t),ii.cross(qi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),ii.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ts.subVectors(r,n),ns.subVectors(s,n),Vc.subVectors(e,n);const c=ts.dot(Vc),u=ns.dot(Vc);if(c<=0&&u<=0)return t.copy(n);Gc.subVectors(e,r);const h=ts.dot(Gc),f=ns.dot(Gc);if(h>=0&&f<=h)return t.copy(r);const p=c*f-h*u;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ts,a);Wc.subVectors(e,s);const m=ts.dot(Wc),x=ns.dot(Wc);if(x>=0&&m<=x)return t.copy(s);const E=m*u-c*x;if(E<=0&&u>=0&&x<=0)return o=u/(u-x),t.copy(n).addScaledVector(ns,o);const v=h*x-m*f;if(v<=0&&f-h>=0&&m-x>=0)return Vf.subVectors(s,r),o=(f-h)/(f-h+(m-x)),t.copy(r).addScaledVector(Vf,o);const _=1/(v+E+p);return a=E*_,o=p*_,t.copy(n).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Si{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(s,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),eo.subVectors(this.max,Ks),is.subVectors(e.a,Ks),rs.subVectors(e.b,Ks),ss.subVectors(e.c,Ks),or.subVectors(rs,is),lr.subVectors(ss,rs),wr.subVectors(is,ss);let t=[0,-or.z,or.y,0,-lr.z,lr.y,0,-wr.z,wr.y,or.z,0,-or.x,lr.z,0,-lr.x,wr.z,0,-wr.x,-or.y,or.x,0,-lr.y,lr.x,0,-wr.y,wr.x,0];return!Yc(t,is,rs,ss,eo)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,is,rs,ss,eo))?!1:(to.crossVectors(or,lr),t=[to.x,to.y,to.z],Yc(t,is,rs,ss,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new j,new j,new j,new j,new j,new j,new j,new j],ri=new j,Qa=new Si,is=new j,rs=new j,ss=new j,or=new j,lr=new j,wr=new j,Ks=new j,eo=new j,to=new j,Ar=new j;function Yc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ar.fromArray(i,s);const o=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),c=e.dot(Ar),u=t.dot(Ar),h=n.dot(Ar);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Jt=new j,no=new nt;let U_=0;class At extends rr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bf,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class F_ extends At{constructor(e,t,n){super(new Int8Array(e),t,n)}}class O_ extends At{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class B_ extends At{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Kc extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class k_ extends At{constructor(e,t,n){super(new Int32Array(e),t,n)}}class jc extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}const z_=new Si,js=new j,Zc=new j;class Mi{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):z_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(js,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Zc)),this.expandByPoint(js.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let H_=0;const On=new ut,Jc=new Gt,as=new j,An=new Si,Zs=new Si,sn=new j;class Lt extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?jc:Kc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(An.min,Zs.min),An.expandByPoint(sn),sn.addVectors(An.max,Zs.max),An.expandByPoint(sn)):(An.expandByPoint(Zs.min),An.expandByPoint(Zs.max))}An.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)sn.fromBufferAttribute(o,u),c&&(as.fromBufferAttribute(e,u),sn.add(as)),r=Math.max(r,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new At(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new j,c[y]=new j;const u=new j,h=new j,f=new j,p=new nt,m=new nt,x=new nt,E=new j,v=new j;function _(y,R,N){u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,R),f.fromBufferAttribute(n,N),p.fromBufferAttribute(s,y),m.fromBufferAttribute(s,R),x.fromBufferAttribute(s,N),h.sub(u),f.sub(u),m.sub(p),x.sub(p);const F=1/(m.x*x.y-x.x*m.y);isFinite(F)&&(E.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(F),v.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(F),o[y].add(E),o[R].add(E),o[N].add(E),c[y].add(v),c[R].add(v),c[N].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let y=0,R=L.length;y<R;++y){const N=L[y],F=N.start,z=N.count;for(let V=F,O=F+z;V<O;V+=3)_(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new j,M=new j,w=new j,T=new j;function P(y){w.fromBufferAttribute(r,y),T.copy(w);const R=o[y];A.copy(R),A.sub(w.multiplyScalar(w.dot(R))).normalize(),M.crossVectors(T,R);const F=M.dot(c[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,F)}for(let y=0,R=L.length;y<R;++y){const N=L[y],F=N.start,z=N.count;for(let V=F,O=F+z;V<O;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new j,s=new j,a=new j,o=new j,c=new j,u=new j,h=new j,f=new j;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),E=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,v),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,v),o.add(h),c.add(h),u.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,f=o.normalized,p=new u.constructor(c.length*h);let m=0,x=0;for(let E=0,v=c.length;E<v;E++){o.isInterleavedBufferAttribute?m=c[E]*o.data.stride+o.offset:m=c[E]*h;for(let _=0;_<h;_++)p[x++]=u[m++]}return new At(p,h,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const p=u[h],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,p=u.length;f<p;f++){const m=u[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class V_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bf,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const pn=new j;class Qc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const eu=new j,G_=new j,W_=new ft;class Ki{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=eu.subVectors(n,t).cross(G_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(eu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||W_.getNormalMatrix(e),r=this.coplanarPoint(eu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let X_=0;class Rn extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Bs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=ef,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cc,this.stencilZFail=Cc,this.stencilZPass=Cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ki().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ji=new j,tu=new j,io=new j,ro=new j;class Js{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){tu.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),ro.copy(this.origin).sub(tu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=ro.dot(this.direction),c=-ro.dot(io),u=ro.lengthSq(),h=Math.abs(1-a*a);let f,p,m,x;if(h>0)if(f=a*c-o,p=a*o-c,x=s*h,f>=0)if(p>=-x)if(p<=x){const E=1/h;f*=E,p*=E,m=f*(f+a*p+2*o)+p*(a*f+p+2*c)+u}else p=s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;else p=-s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;else p<=-x?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u):p<=x?(f=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+u):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tu).addScaledVector(io,p),m}intersectSphere(e,t){if(e.radius<0)return null;ji.subVectors(e.center,this.origin);const n=ji.dot(this.direction),r=ji.dot(ji)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(n=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(n=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,f=e.x-a.x,p=e.y-a.y,m=e.z-a.z,x=t.x-a.x,E=t.y-a.y,v=t.z-a.z,_=n.x-a.x,L=n.y-a.y,A=n.z-a.z,M=Math.abs(c),w=Math.abs(u),T=Math.abs(h);let P,y,R,N,F,z,V,O,W,J,X,te;if(M>=w&&M>=T?(R=c,z=f,W=x,te=_,c>=0?(P=u,y=h,N=p,F=m,V=E,O=v,J=L,X=A):(P=h,y=u,N=m,F=p,V=v,O=E,J=A,X=L)):w>=T?(R=u,z=p,W=E,te=L,u>=0?(P=h,y=c,N=m,F=f,V=v,O=x,J=A,X=_):(P=c,y=h,N=f,F=m,V=x,O=v,J=_,X=A)):(R=h,z=m,W=v,te=A,h>=0?(P=c,y=u,N=f,F=p,V=x,O=E,J=_,X=L):(P=u,y=c,N=p,F=f,V=E,O=x,J=L,X=_)),R===0)return null;const ie=P/R,pe=y/R,me=1/R,Ne=N-ie*z,we=F-pe*z,dt=V-ie*W,$e=O-pe*W,ot=J-ie*te,he=X-pe*te,k=ot*$e-he*dt,G=Ne*he-we*ot,ae=dt*we-$e*Ne;if(r){if(k<0||G<0||ae<0)return null}else if((k<0||G<0||ae<0)&&(k>0||G>0||ae>0))return null;const Q=k+G+ae;if(Q===0)return null;const se=me*(k*z+G*W+ae*te);return(Q>0?se<0:se>0)?null:this.at(se/Q,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rr extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gf=new ut,Cr=new Js,so=new Mi,Wf=new j,ao=new j,oo=new j,lo=new j,nu=new j,co=new j,Xf=new j,uo=new j;class Kt extends Gt{constructor(e=new Lt,t=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){co.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],f=s[c];h!==0&&(nu.fromBufferAttribute(f,e),a?co.addScaledVector(nu,h):co.addScaledVector(nu.sub(t),h))}t.add(co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(so.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(so,Wf)===null||Cr.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(Gf.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Gf),!(n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=p.length;x<E;x++){const v=p[x],_=a[v.materialIndex],L=Math.max(v.start,m.start),A=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let M=L,w=A;M<w;M+=3){const T=o.getX(M),P=o.getX(M+1),y=o.getX(M+2);r=ho(this,_,e,n,u,h,f,T,P,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let v=x,_=E;v<_;v+=3){const L=o.getX(v),A=o.getX(v+1),M=o.getX(v+2);r=ho(this,a,e,n,u,h,f,L,A,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,E=p.length;x<E;x++){const v=p[x],_=a[v.materialIndex],L=Math.max(v.start,m.start),A=Math.min(c.count,Math.min(v.start+v.count,m.start+m.count));for(let M=L,w=A;M<w;M+=3){const T=M,P=M+1,y=M+2;r=ho(this,_,e,n,u,h,f,T,P,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let v=x,_=E;v<_;v+=3){const L=v,A=v+1,M=v+2;r=ho(this,a,e,n,u,h,f,L,A,M),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function q_(i,e,t,n,r,s,a,o){let c;if(e.side===xn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===zi,o),c===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(uo);return u<t.near||u>t.far?null:{distance:u,point:uo.clone(),object:i}}function ho(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,ao),i.getVertexPosition(c,oo),i.getVertexPosition(u,lo);const h=q_(i,e,t,n,ao,oo,lo,Xf);if(h){const f=new j;Fn.getBarycoord(Xf,ao,oo,lo,f),r&&(h.uv=Fn.getInterpolatedAttribute(r,o,c,u,f,new nt)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,o,c,u,f,new nt)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,c,u,f,new j),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:u,normal:new j,materialIndex:0};Fn.getNormal(ao,oo,lo,p.normal),h.face=p,h.barycoord=f}return h}const Qs=new Ot,qf=new Ot,$f=new Ot,$_=new Ot,Yf=new ut,fo=new j,iu=new Mi,Kf=new ut,ru=new Js;class Y_ extends Kt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cf,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingBox.expandByPoint(fo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingSphere.expandByPoint(fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),iu.copy(this.boundingSphere),iu.applyMatrix4(r),e.ray.intersectsSphere(iu)!==!1&&(Kf.copy(r).invert(),ru.copy(e.ray).applyMatrix4(Kf),!(this.boundingBox!==null&&ru.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ru)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;qf.fromBufferAttribute(r.attributes.skinIndex,e),$f.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Qs.copy(t),t.set(0,0,0,0)):(Qs.set(...t,1),t.set(0,0,0)),Qs.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=$f.getComponent(s);if(a!==0){const o=qf.getComponent(s);Yf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector($_.copy(Qs).applyMatrix4(Yf),a)}}return t.isVector4&&(t.w=Qs.w),t.applyMatrix4(this.bindMatrixInverse)}}class jf extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class su extends rn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=jt,h=jt,f,p){super(null,a,o,c,u,h,r,s,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zf=new ut,K_=new ut;class au{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ut;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:K_;Zf.multiplyMatrices(o,t[s]),Zf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new au(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new su(t,e,e,Nn,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Qe("Skeleton: No bone found with UUID:",s),a=new jf),this.bones.push(a),this.boneInverses.push(new ut().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class po extends At{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new ut,Jf=new ut,mo=[],Qf=new Si,j_=new ut,ea=new Kt,ta=new Mi;class Z_ extends Kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,j_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Qf.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Qf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),ta.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),e.ray.intersectsSphere(ta)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,os),Jf.multiplyMatrices(n,os),ea.matrixWorld=Jf,ea.raycast(e,mo);for(let a=0,o=mo.length;a<o;a++){const c=mo[a];c.instanceId=s,c.object=this,t.push(c)}mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new su(new Float32Array(r*this.count),r,this.count,$l,Dn));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pr=new Mi,J_=new nt(.5,.5),go=new j;class ou{constructor(e=new Ki,t=new Ki,n=new Ki,r=new Ki,s=new Ki,a=new Ki){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],f=s[5],p=s[6],m=s[7],x=s[8],E=s[9],v=s[10],_=s[11],L=s[12],A=s[13],M=s[14],w=s[15];if(r[0].setComponents(u-a,m-h,_-x,w-L).normalize(),r[1].setComponents(u+a,m+h,_+x,w+L).normalize(),r[2].setComponents(u+o,m+f,_+E,w+A).normalize(),r[3].setComponents(u-o,m-f,_-E,w-A).normalize(),n)r[4].setComponents(c,p,v,M).normalize(),r[5].setComponents(u-c,m-p,_-v,w-M).normalize();else if(r[4].setComponents(u-c,m-p,_-v,w-M).normalize(),t===yi)r[5].setComponents(u+c,m+p,_+v,w+M).normalize();else if(t===Xs)r[5].setComponents(c,p,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const t=J_.distanceTo(e.center);return Pr.radius=.7071067811865476+t,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(go.x=r.normal.x>0?e.max.x:e.min.x,go.y=r.normal.y>0?e.max.y:e.min.y,go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cr extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _o=new j,vo=new j,ed=new ut,na=new Js,xo=new Mi,lu=new j,td=new j;class cu extends Gt{constructor(e=new Lt,t=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)_o.fromBufferAttribute(t,r-1),vo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=_o.distanceTo(vo);e.setAttribute("lineDistance",new St(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(r),xo.radius+=s,e.ray.intersectsSphere(xo)===!1)return;ed.copy(r).invert(),na.copy(e.ray).applyMatrix4(ed);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let E=m,v=x-1;E<v;E+=u){const _=h.getX(E),L=h.getX(E+1),A=yo(this,e,na,c,_,L,E);A&&t.push(A)}if(this.isLineLoop){const E=h.getX(x-1),v=h.getX(m),_=yo(this,e,na,c,E,v,x-1);_&&t.push(_)}}else{const m=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let E=m,v=x-1;E<v;E+=u){const _=yo(this,e,na,c,E,E+1,E);_&&t.push(_)}if(this.isLineLoop){const E=yo(this,e,na,c,x-1,m,x-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yo(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(_o.fromBufferAttribute(o,r),vo.fromBufferAttribute(o,s),t.distanceSqToSegment(_o,vo,lu,td)>n)return;lu.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(lu);if(!(u<e.near||u>e.far))return{distance:u,point:td.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const nd=new j,id=new j;class ia extends cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)nd.fromBufferAttribute(t,r),id.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+nd.distanceTo(id);e.setAttribute("lineDistance",new St(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q_ extends cu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ls extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rd=new ut,uu=new Js,So=new Mi,Mo=new j;class bo extends Gt{constructor(e=new Lt,t=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),So.radius+=s,e.ray.intersectsSphere(So)===!1)return;rd.copy(r).invert(),uu.copy(e.ray).applyMatrix4(rd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=p,E=m;x<E;x++){const v=u.getX(x);Mo.fromBufferAttribute(f,v),sd(Mo,v,c,r,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=p,E=m;x<E;x++)Mo.fromBufferAttribute(f,x),sd(Mo,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function sd(i,e,t,n,r,s,a){const o=uu.distanceSqToPoint(i);if(o<t){const c=new j;uu.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ad extends rn{constructor(e=[],t=br,n,r,s,a,o,c,u,h){super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ra extends rn{constructor(e,t,n=vi,r,s,a,o=jt,c=jt,u,h=Vi,f=1){if(h!==Vi&&h!==Er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:f};super(p,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class e0 extends ra{constructor(e,t=vi,n=br,r,s,a=jt,o=jt,c,u=Vi){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class od extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sa extends Lt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let p=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(f,2));function x(E,v,_,L,A,M,w,T,P,y,R){const N=M/P,F=w/y,z=M/2,V=w/2,O=T/2,W=P+1,J=y+1;let X=0,te=0;const ie=new j;for(let pe=0;pe<J;pe++){const me=pe*F-V;for(let Ne=0;Ne<W;Ne++){const we=Ne*N-z;ie[E]=we*L,ie[v]=me*A,ie[_]=O,u.push(ie.x,ie.y,ie.z),ie[E]=0,ie[v]=0,ie[_]=T>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(Ne/P),f.push(1-pe/y),X+=1}}for(let pe=0;pe<y;pe++)for(let me=0;me<P;me++){const Ne=p+me+W*pe,we=p+me+W*(pe+1),dt=p+(me+1)+W*(pe+1),$e=p+(me+1)+W*pe;c.push(Ne,we,$e),c.push(we,dt,$e),te+=6}o.addGroup(m,te,R),m+=te,p+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hu extends Lt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],p=[],m=[];let x=0;const E=[],v=n/2;let _=0;L(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new St(f,3)),this.setAttribute("normal",new St(p,3)),this.setAttribute("uv",new St(m,2));function L(){const M=new j,w=new j;let T=0;const P=(t-e)/n;for(let y=0;y<=s;y++){const R=[],N=y/s,F=N*(t-e)+e;for(let z=0;z<=r;z++){const V=z/r,O=V*c+o,W=Math.sin(O),J=Math.cos(O);w.x=F*W,w.y=-N*n+v,w.z=F*J,f.push(w.x,w.y,w.z),M.set(W,P,J).normalize(),p.push(M.x,M.y,M.z),m.push(V,1-N),R.push(x++)}E.push(R)}for(let y=0;y<r;y++)for(let R=0;R<s;R++){const N=E[R][y],F=E[R+1][y],z=E[R+1][y+1],V=E[R][y+1];(e>0||R!==0)&&(h.push(N,F,V),T+=3),(t>0||R!==s-1)&&(h.push(F,z,V),T+=3)}u.addGroup(_,T,0),_+=T}function A(M){const w=x,T=new nt,P=new j;let y=0;const R=M===!0?e:t,N=M===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,v*N,0),p.push(0,N,0),m.push(.5,.5),x++;const F=x;for(let z=0;z<=r;z++){const O=z/r*c+o,W=Math.cos(O),J=Math.sin(O);P.x=R*J,P.y=v*N,P.z=R*W,f.push(P.x,P.y,P.z),p.push(0,N,0),T.x=W*.5+.5,T.y=J*.5*N+.5,m.push(T.x,T.y),x++}for(let z=0;z<r;z++){const V=w+z,O=F+z;M===!0?h.push(O,O+1,V):h.push(O+1,O,V),y+=3}u.addGroup(_,y,M===!0?1:2),_+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Eo=new j,To=new j,fu=new j,wo=new Fn;class Ao extends Lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Yr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,u=[0,0,0],h=["a","b","c"],f=new Array(3),p={},m=[];for(let x=0;x<c;x+=3){a?(u[0]=a.getX(x),u[1]=a.getX(x+1),u[2]=a.getX(x+2)):(u[0]=x,u[1]=x+1,u[2]=x+2);const{a:E,b:v,c:_}=wo;if(E.fromBufferAttribute(o,u[0]),v.fromBufferAttribute(o,u[1]),_.fromBufferAttribute(o,u[2]),wo.getNormal(fu),f[0]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,f[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let L=0;L<3;L++){const A=(L+1)%3,M=f[L],w=f[A],T=wo[h[L]],P=wo[h[A]],y=`${M}_${w}`,R=`${w}_${M}`;R in p&&p[R]?(fu.dot(p[R].normal)<=s&&(m.push(T.x,T.y,T.z),m.push(P.x,P.y,P.z)),p[R]=null):y in p||(p[y]={index0:u[L],index1:u[A],normal:fu.clone()})}}for(const x in p)if(p[x]){const{index0:E,index1:v}=p[x];Eo.fromBufferAttribute(o,E),To.fromBufferAttribute(o,v),m.push(Eo.x,Eo.y,Eo.z),m.push(To.x,To.y,To.z)}this.setAttribute("position",new St(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ro extends Lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,f=e/o,p=t/c,m=[],x=[],E=[],v=[];for(let _=0;_<h;_++){const L=_*p-a;for(let A=0;A<u;A++){const M=A*f-s;x.push(M,-L,0),E.push(0,0,1),v.push(A/o),v.push(1-_/c)}}for(let _=0;_<c;_++)for(let L=0;L<o;L++){const A=L+u*_,M=L+u*(_+1),w=L+1+u*(_+1),T=L+1+u*_;m.push(A,M,T),m.push(M,w,T)}this.setIndex(m),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(E,3)),this.setAttribute("uv",new St(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.widthSegments,e.heightSegments)}}class du extends Lt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const h=[],f=new j,p=new j,m=[],x=[],E=[],v=[];for(let _=0;_<=n;_++){const L=[],A=_/n,M=a+A*o,w=e*Math.cos(M),T=Math.sqrt(e*e-w*w);let P=0;_===0&&a===0?P=.5/t:_===n&&c===Math.PI&&(P=-.5/t);for(let y=0;y<=t;y++){const R=y/t,N=r+R*s;f.x=-T*Math.cos(N),f.y=w,f.z=T*Math.sin(N),x.push(f.x,f.y,f.z),p.copy(f).normalize(),E.push(p.x,p.y,p.z),v.push(R+P,1-A),L.push(u++)}h.push(L)}for(let _=0;_<n;_++)for(let L=0;L<t;L++){const A=h[_][L+1],M=h[_][L],w=h[_+1][L],T=h[_+1][L+1];(_!==0||a>0)&&m.push(A,M,T),(_!==n-1||c<Math.PI)&&m.push(M,w,T)}this.setIndex(m),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(E,3)),this.setAttribute("uv",new St(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function cs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(ld(r))r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ld(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function mn(i){const e={};for(let t=0;t<i.length;t++){const n=cs(i[t]);for(const r in n)e[r]=n[r]}return e}function ld(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function t0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const n0={clone:cs,merge:mn};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(r.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new j().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ot().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class s0 extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class aa extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ei extends aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class us extends Rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Hl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class a0 extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o0 extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ur(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Co(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function l0(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function ud(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function c0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class hs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class u0 extends hs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xf,endingEnd:xf}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case yf:s=e,o=2*t-n;break;case Sf:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yf:a=e,c=2*n-t;break;case Sf:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}const u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(n-t)/(r-t),E=x*x,v=E*x,_=-p*v+2*p*E-p*x,L=(1+p)*v+(-1.5-2*p)*E+(-.5+p)*x+1,A=(-1-m)*v+(1.5+m)*E+.5*x,M=m*v-m*E;for(let w=0;w!==o;++w)s[w]=_*a[h+w]+L*a[u+w]+A*a[c+w]+M*a[f+w];return s}}class h0 extends hs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(r-t),f=1-h;for(let p=0;p!==o;++p)s[p]=a[u+p]*f+a[c+p]*h;return s}}class f0 extends hs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class d0 extends hs{interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){const x=(n-t)/(r-t),E=1-x;for(let v=0;v!==o;++v)s[v]=a[u+v]*E+a[c+v]*x;return s}const p=o*2,m=e-1;for(let x=0;x!==o;++x){const E=a[u+x],v=a[c+x],_=m*p+x*2,L=f[_],A=f[_+1],M=e*p+x*2,w=h[M],T=h[M+1],P=m0(n,t,L,w,r);s[x]=hd(P,E,A,T,v)}return s}}function hd(i,e,t,n,r){const s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function p0(i,e,t,n,r){const s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function m0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){const o=hd(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;const c=p0(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}class si{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ur(t,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ur(e.times,Array),values:ur(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Co(e.settings)&&(n.settings={inTangents:ur(e.settings.inTangents,Array),outTangents:ur(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new f0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new h0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new u0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new d0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Ac:t=this.InterpolantFactoryMethodSmooth;break;case vf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Ac;case this.InterpolantFactoryMethodBezier:return vf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Co(this.settings)&&(fd(this.settings.inTangents,e),fd(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){rt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){rt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&t_(r))for(let o=0,c=r.length;o!==c;++o){const u=r[o];if(isNaN(u)){rt("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ac,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(r)c=!0;else{const f=o*n,p=f-n,m=f+n;for(let x=0;x!==n;++x){const E=t[f+x];if(E!==t[p+x]||E!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,p=a*n;for(let m=0;m!==n;++m)t[p+m]=t[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Co(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}}function fd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}si.prototype.ValueTypeName="",si.prototype.TimeBufferType=Float32Array,si.prototype.ValueBufferType=Float32Array,si.prototype.DefaultInterpolation=Ws;class fs extends si{constructor(e,t,n){super(e,t,n)}}fs.prototype.ValueTypeName="bool",fs.prototype.ValueBufferType=Array,fs.prototype.DefaultInterpolation=Gs,fs.prototype.InterpolantFactoryMethodLinear=void 0,fs.prototype.InterpolantFactoryMethodSmooth=void 0;class dd extends si{constructor(e,t,n,r){super(e,t,n,r)}}dd.prototype.ValueTypeName="color";class oa extends si{constructor(e,t,n,r){super(e,t,n,r)}}oa.prototype.ValueTypeName="number";class g0 extends hs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t);let u=e*o;for(let h=u+o;u!==h;u+=4)Un.slerpFlat(s,0,a,u-o,a,u,c);return s}}class la extends si{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new g0(this.times,this.values,this.getValueSize(),e)}}la.prototype.ValueTypeName="quaternion",la.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends si{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="string",ds.prototype.ValueBufferType=Array,ds.prototype.DefaultInterpolation=Gs,ds.prototype.InterpolantFactoryMethodLinear=void 0,ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends si{constructor(e,t,n,r){super(e,t,n,r)}}Po.prototype.ValueTypeName="vector";class _0{constructor(e="",t=-1,n=[],r=Gg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(x0(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(si.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],u=[];c.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);const h=l0(c);c=ud(c,1,h),u=ud(u,1,h),!r&&c[0]===0&&(c.push(s),u.push(u[0])),a.push(new oa(".morphTargetInfluences["+t[o].name+"]",c,u).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const u=e[o],h=u.name.match(s);if(h&&h.length>1){const f=h[1];let p=r[f];p||(r[f]=p=[]),p.push(u)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function v0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oa;case"vector":case"vector2":case"vector3":case"vector4":return Po;case"color":return dd;case"quaternion":return la;case"bool":case"boolean":return fs;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function x0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=v0(i.type);if(i.times===void 0){const n=[],r=[];c0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Co(i.settings)&&(t.settings={inTangents:ur(i.settings.inTangents,Float32Array),outTangents:ur(i.settings.outTangents,Float32Array)}),t}const Zi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(pd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!pd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function pd(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class y0{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=u.length;f<p;f+=2){const m=u[f],x=u[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const S0=new y0;class Bn{constructor(e){this.manager=e!==void 0?e:S0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Bn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji={};class M0 extends Error{constructor(e,t){super(e),this.response=t}}class ps extends Bn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Zi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:r});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Ji[e],f=u.body.getReader(),p=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),m=p?parseInt(p):0,x=m!==0;let E=0;const v=new ReadableStream({start(_){L();function L(){f.read().then(({done:A,value:M})=>{if(A)_.close();else{E+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:x,loaded:E,total:m});for(let T=0,P=h.length;T<P;T++){const y=h[T];y.onProgress&&y.onProgress(w)}_.enqueue(M),L()}},A=>{_.error(A)})}}});return new Response(v)}else throw new M0(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return u.json();default:if(o==="")return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),p=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(p);return u.arrayBuffer().then(x=>m.decode(x))}}}).then(u=>{Zi.add(`file:${e}`,u);const h=Ji[e];delete Ji[e];for(let f=0,p=h.length;f<p;f++){const m=h[f];m.onLoad&&m.onLoad(u)}}).catch(u=>{const h=Ji[e];if(h===void 0)throw this.manager.itemError(e),u;delete Ji[e];for(let f=0,p=h.length;f<p;f++){const m=h[f];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ms=new WeakMap;class b0 extends Bn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Zi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=ms.get(a);f===void 0&&(f=[],ms.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=qs("img");function c(){h(),t&&t(this);const f=ms.get(this)||[];for(let p=0;p<f.length;p++){const m=f[p];m.onLoad&&m.onLoad(this)}ms.delete(this),s.manager.itemEnd(e)}function u(f){h(),r&&r(f),Zi.remove(`image:${e}`);const p=ms.get(this)||[];for(let m=0;m<p.length;m++){const x=p[m];x.onError&&x.onError(f)}ms.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class md extends Bn{constructor(e){super(e)}load(e,t,n,r){const s=new rn,a=new b0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ca extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class E0 extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const pu=new ut,gd=new j,_d=new j;class mu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),_d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_d),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){pu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Xs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lo=new j,Io=new Un,Ti=new j;class vd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lo,Io,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Io,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Lo,Io,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Io,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new j,xd=new nt,yd=new nt;class yn extends vd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,xd,yd),t.subVectors(yd,xd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class T0 extends mu{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Kr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class w0 extends ca{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new T0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class A0 extends mu{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class R0 extends ca{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new A0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ua extends vd{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class C0 extends mu{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Do extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new C0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class P0 extends ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ha{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const gu=new WeakMap;class L0 extends Bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Zi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{gu.has(a)===!0?(r&&r(gu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(u),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Zi.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),gu.set(c,u),Zi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Zi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const gs=-90,_s=1;class I0 extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(gs,_s,e,t);r.layers=this.layers,this.add(r);const s=new yn(gs,_s,e,t);s.layers=this.layers,this.add(s);const a=new yn(gs,_s,e,t);a.layers=this.layers,this.add(a);const o=new yn(gs,_s,e,t);o.layers=this.layers,this.add(o);const c=new yn(gs,_s,e,t);c.layers=this.layers,this.add(c);const u=new yn(gs,_s,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const u of t)this.remove(u);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class D0 extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const _u="\\[\\]\\.:\\/",N0=new RegExp("["+_u+"]","g"),vu="[^"+_u+"]",U0="[^"+_u.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",vu),O0=/(WCOD+)?/.source.replace("WCOD",U0),B0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vu),k0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vu),z0=new RegExp("^"+F0+O0+B0+k0+"$"),H0=["material","materials","bones","map"];class V0{constructor(e,t,n){const r=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Nt{constructor(e,t,n){this.path=t,this.parsedPath=n||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,n):new Nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N0,"")}static parseTrackName(e){const t=z0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);H0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[r];if(a===void 0){const u=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=V0,Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray],Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sd{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const rh=class rh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};rh.prototype.isMatrix2=!0;let Md=rh;class G0 extends ia{constructor(e=10,t=10,n=4473924,r=8947848){n=new Je(n),r=new Je(r);const s=t/2,a=e/t,o=e/2,c=[],u=[];for(let p=0,m=0,x=-o;p<=t;p++,x+=a){c.push(-o,0,x,o,0,x),c.push(x,0,-o,x,0,o);const E=p===s?n:r;E.toArray(u,m),m+=3,E.toArray(u,m),m+=3,E.toArray(u,m),m+=3,E.toArray(u,m),m+=3}const h=new Lt;h.setAttribute("position",new St(c,3)),h.setAttribute("color",new St(u,3));const f=new cr({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class W0 extends rr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function bd(i,e,t,n){const r=X0(n);switch(t){case gf:return i*e;case $l:return i*e/r.components*r.byteLength;case Yl:return i*e/r.components*r.byteLength;case Tr:return i*e*2/r.components*r.byteLength;case Kl:return i*e*2/r.components*r.byteLength;case _f:return i*e*3/r.components*r.byteLength;case Nn:return i*e*4/r.components*r.byteLength;case jl:return i*e*4/r.components*r.byteLength;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:case ec:return Math.max(i,16)*Math.max(e,8)/4;case Zl:case Ql:return Math.max(i,8)*Math.max(e,8)/2;case tc:case nc:case rc:case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ic:case Xa:case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sc:case Mc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ec:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qa:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X0(i){switch(i){case En:case ff:return{byteLength:1,components:1};case Hs:case df:case xi:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case vi:case Wl:case Dn:return{byteLength:4,components:1};case pf:case mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}})),typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ed(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function q0(i){const e=new WeakMap;function t(o,c){const u=o.array,h=o.usage,f=u.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,u){const h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<f.length;m++){const x=f[p],E=f[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++p,f[p]=E)}f.length=p+1;for(let m=0,x=f.length;m<x;m++){const E=f[m];i.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,av=`#ifdef USE_IRIDESCENCE
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
#endif`,ov=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gv=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_v=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ev=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nv=`#ifdef USE_GRADIENTMAP
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
}`,Uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,kv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ix=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vx=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gt={alphahash_fragment:$0,alphahash_pars_fragment:Y0,alphamap_fragment:K0,alphamap_pars_fragment:j0,alphatest_fragment:Z0,alphatest_pars_fragment:J0,aomap_fragment:Q0,aomap_pars_fragment:ev,batching_pars_vertex:tv,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:rv,bsdfs:sv,iridescence_fragment:av,bumpmap_pars_fragment:ov,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:hv,color_fragment:fv,color_pars_fragment:dv,color_pars_vertex:pv,color_vertex:mv,common:gv,cube_uv_reflection_fragment:_v,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:yv,emissivemap_fragment:Sv,emissivemap_pars_fragment:Mv,colorspace_fragment:bv,colorspace_pars_fragment:Ev,envmap_fragment:Tv,envmap_common_pars_fragment:wv,envmap_pars_fragment:Av,envmap_pars_vertex:Rv,envmap_physical_pars_fragment:kv,envmap_vertex:Cv,fog_vertex:Pv,fog_pars_vertex:Lv,fog_fragment:Iv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Nv,lightmap_pars_fragment:Uv,lights_lambert_fragment:Fv,lights_lambert_pars_fragment:Ov,lights_pars_begin:Bv,lights_toon_fragment:zv,lights_toon_pars_fragment:Hv,lights_phong_fragment:Vv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Wv,lights_physical_pars_fragment:Xv,lights_fragment_begin:qv,lights_fragment_maps:$v,lights_fragment_end:Yv,lightprobes_pars_fragment:Kv,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Jv,logdepthbuf_vertex:Qv,map_fragment:ex,map_pars_fragment:tx,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:rx,metalnessmap_pars_fragment:sx,morphinstance_vertex:ax,morphcolor_vertex:ox,morphnormal_vertex:lx,morphtarget_pars_vertex:cx,morphtarget_vertex:ux,normal_fragment_begin:hx,normal_fragment_maps:fx,normal_pars_fragment:dx,normal_pars_vertex:px,normal_vertex:mx,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:vx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:yx,opaque_fragment:Sx,packing:Mx,premultiplied_alpha_fragment:bx,project_vertex:Ex,dithering_fragment:Tx,dithering_pars_fragment:wx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Rx,shadowmap_pars_fragment:Cx,shadowmap_pars_vertex:Px,shadowmap_vertex:Lx,shadowmask_pars_fragment:Ix,skinbase_vertex:Dx,skinning_pars_vertex:Nx,skinning_vertex:Ux,skinnormal_vertex:Fx,specularmap_fragment:Ox,specularmap_pars_fragment:Bx,tonemapping_fragment:kx,tonemapping_pars_fragment:zx,transmission_fragment:Hx,transmission_pars_fragment:Vx,uv_pars_fragment:Gx,uv_pars_vertex:Wx,uv_vertex:Xx,worldpos_vertex:qx,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ke={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},wi={basic:{uniforms:mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:mn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:mn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Je(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:mn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:mn([ke.points,ke.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:mn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:mn([ke.common,ke.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:mn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:mn([ke.sprite,ke.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:mn([ke.common,ke.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:mn([ke.lights,ke.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};wi.physical={uniforms:mn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const No={r:0,b:0,g:0},$x=new ut,Td=new ft;Td.set(-1,0,0,0,1,0,0,0,1);function Yx(i,e,t,n,r,s){const a=new Je(0);let o=r===!0?0:1,c,u,h=null,f=0,p=null;function m(L){let A=L.isScene===!0?L.background:null;if(A&&A.isTexture){const M=L.backgroundBlurriness>0;A=e.get(A,M)}return A}function x(L){let A=!1;const M=m(L);M===null?v(a,o):M&&M.isColor&&(v(M,1),A=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(L,A){const M=m(A);M&&(M.isCubeTexture||M.mapping===ka)?(u===void 0&&(u=new Kt(new sa(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:cs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Td),u.material.toneMapped=xt.getTransfer(M.colorSpace)!==It,(h!==M||f!==M.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,p=i.toneMapping),u.layers.enableAll(),L.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Kt(new Ro(2,2),new bi({name:"BackgroundMaterial",uniforms:cs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=xt.getTransfer(M.colorSpace)!==It,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),L.unshift(c,c.geometry,c.material,0,0,null))}function v(L,A){L.getRGB(No,cd(i)),t.buffers.color.setClear(No.r,No.g,No.b,A,s)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(L,A=1){a.set(L),o=A,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(L){o=L,v(a,o)},render:x,addToRenderList:E,dispose:_}}function Kx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(F,z,V,O,W){let J=!1;const X=f(F,O,V,z);s!==X&&(s=X,u(s.object)),J=m(F,O,V,W),J&&x(F,O,V,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(F,z,V,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function u(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function f(F,z,V,O){const W=O.wireframe===!0;let J=n[z.id];J===void 0&&(J={},n[z.id]=J);const X=F.isInstancedMesh===!0?F.id:0;let te=J[X];te===void 0&&(te={},J[X]=te);let ie=te[V.id];ie===void 0&&(ie={},te[V.id]=ie);let pe=ie[W];return pe===void 0&&(pe=p(c()),ie[W]=pe),pe}function p(F){const z=[],V=[],O=[];for(let W=0;W<t;W++)z[W]=0,V[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:O,object:F,attributes:{},index:null}}function m(F,z,V,O){const W=s.attributes,J=z.attributes;let X=0;const te=V.getAttributes();for(const ie in te)if(te[ie].location>=0){const me=W[ie];let Ne=J[ie];if(Ne===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(Ne=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(Ne=F.instanceColor)),me===void 0||me.attribute!==Ne||Ne&&me.data!==Ne.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function x(F,z,V,O){const W={},J=z.attributes;let X=0;const te=V.getAttributes();for(const ie in te)if(te[ie].location>=0){let me=J[ie];me===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(me=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(me=F.instanceColor));const Ne={};Ne.attribute=me,me&&me.data&&(Ne.data=me.data),W[ie]=Ne,X++}s.attributes=W,s.attributesNum=X,s.index=O}function E(){const F=s.newAttributes;for(let z=0,V=F.length;z<V;z++)F[z]=0}function v(F){_(F,0)}function _(F,z){const V=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;V[F]=1,O[F]===0&&(i.enableVertexAttribArray(F),O[F]=1),W[F]!==z&&(i.vertexAttribDivisor(F,z),W[F]=z)}function L(){const F=s.newAttributes,z=s.enabledAttributes;for(let V=0,O=z.length;V<O;V++)z[V]!==F[V]&&(i.disableVertexAttribArray(V),z[V]=0)}function A(F,z,V,O,W,J,X){X===!0?i.vertexAttribIPointer(F,z,V,W,J):i.vertexAttribPointer(F,z,V,O,W,J)}function M(F,z,V,O){E();const W=O.attributes,J=V.getAttributes(),X=z.defaultAttributeValues;for(const te in J){const ie=J[te];if(ie.location>=0){let pe=W[te];if(pe===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(pe=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(pe=F.instanceColor)),pe!==void 0){const me=pe.normalized,Ne=pe.itemSize,we=e.get(pe);if(we===void 0)continue;const dt=we.buffer,$e=we.type,ot=we.bytesPerElement,he=$e===i.INT||$e===i.UNSIGNED_INT||pe.gpuType===Wl;if(pe.isInterleavedBufferAttribute){const k=pe.data,G=k.stride,ae=pe.offset;if(k.isInstancedInterleavedBuffer){for(let Q=0;Q<ie.locationSize;Q++)_(ie.location+Q,k.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Q=0;Q<ie.locationSize;Q++)v(ie.location+Q);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Q=0;Q<ie.locationSize;Q++)A(ie.location+Q,Ne/ie.locationSize,$e,me,G*ot,(ae+Ne/ie.locationSize*Q)*ot,he)}else{if(pe.isInstancedBufferAttribute){for(let k=0;k<ie.locationSize;k++)_(ie.location+k,pe.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let k=0;k<ie.locationSize;k++)v(ie.location+k);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let k=0;k<ie.locationSize;k++)A(ie.location+k,Ne/ie.locationSize,$e,me,Ne*ot,Ne/ie.locationSize*k*ot,he)}}else if(X!==void 0){const me=X[te];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(ie.location,me);break;case 3:i.vertexAttrib3fv(ie.location,me);break;case 4:i.vertexAttrib4fv(ie.location,me);break;default:i.vertexAttrib1fv(ie.location,me)}}}}L()}function w(){R();for(const F in n){const z=n[F];for(const V in z){const O=z[V];for(const W in O){const J=O[W];for(const X in J)h(J[X].object),delete J[X];delete O[W]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;const z=n[F.id];for(const V in z){const O=z[V];for(const W in O){const J=O[W];for(const X in J)h(J[X].object),delete J[X];delete O[W]}}delete n[F.id]}function P(F){for(const z in n){const V=n[z];for(const O in V){const W=V[O];if(W[F.id]===void 0)continue;const J=W[F.id];for(const X in J)h(J[X].object),delete J[X];delete W[F.id]}}}function y(F){for(const z in n){const V=n[z],O=F.isInstancedMesh===!0?F.id:0,W=V[O];if(W!==void 0){for(const J in W){const X=W[J];for(const te in X)h(X[te].object),delete X[te];delete W[J]}delete V[O],Object.keys(V).length===0&&delete n[z]}}}function R(){N(),a=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:v,disableUnusedAttributes:L}}function jx(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];t.update(p,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Zx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const y=P===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==En&&P!==Dn&&!y&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(Qe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:L,maxVaryings:A,maxFragmentUniforms:M,maxSamples:w,samples:T}}function Jx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ki,o=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||r;return r=p,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){const x=f.clippingPlanes,E=f.clipIntersection,v=f.clipShadows,_=i.get(f);if(!r||x===null||x.length===0||s&&!v)s?h(null):u();else{const L=s?0:n,A=L*4;let M=_.clippingState||null;c.value=M,M=h(x,p,A,m);for(let w=0;w!==A;++w)M[w]=t[w];_.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,m,x){const E=f!==null?f.length:0;let v=null;if(E!==0){if(v=c.value,x!==!0||v===null){const _=m+E*4,L=p.matrixWorldInverse;o.getNormalMatrix(L),(v===null||v.length<_)&&(v=new Float32Array(_));for(let A=0,M=m;A!==E;++A,M+=4)a.copy(f[A]).applyMatrix4(L,o),a.normal.toArray(v,M),v[M+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}const vs=4,Qx=6,ey=20,ty=256,fa=new ua,wd=new Je;let xu=null,yu=0,Su=0,Mu=!1;const ny=new j,Lr=new j;class Ad{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=ny}=s;xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xu,yu,Su),this._renderer.xr.enabled=Mu,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:xi,format:Nn,colorSpace:Tn,depthBuffer:!1},r=Rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=iy(s)),this._blurMaterial=sy(s,e,t),this._ggxMaterial=ry(s,e,t)}return r}_compileMaterial(e){const t=new Kt(new Lt,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,n,r,s){const c=new yn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(wd),f.toneMapping=gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new sa,new Rr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,v=E.material;let _=!1;const L=e.background;L?L.isColor&&(v.color.copy(L),e.background=null,_=!0):(v.color.copy(wd),_=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(c.up.set(0,u[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[A],s.y,s.z)):M===1?(c.up.set(0,0,u[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[A],s.z)):(c.up.set(0,u[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[A]));const w=this._cubeSize;xs(r,M*w,A>2?w:0,w,w),f.setRenderTarget(r),_&&f.render(E,c),f.render(e,c)}f.toneMapping=m,f.autoClear=p,e.background=L}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===br||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;xs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-h*h),p=u*1.25,m=f*p,{_lodMax:x}=this,E=this._sizeLods[n],v=3*E*(n>x-vs?n-x+vs:0),_=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-t,xs(s,v,_,3*E,2*E),r.setRenderTarget(s),r.render(o,fa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-n,xs(e,v,_,3*E,2*E),r.setRenderTarget(e),r.render(o,fa)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-n;const h=this._sizeLods[r],f=3*h*(r>this._lodMax-vs?r-this._lodMax+vs:0),p=4*(this._cubeSize-h);xs(t,f,p,3*h,2*h),a.setRenderTarget(t),a.render(c,fa)}}function iy(i){const e=[],t=[];let n=i;const r=i-vs+1+Qx;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,u=1+o,h=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,p=6,m=3,x=new Float32Array(m*p*f),E=new Float32Array(m*p*f);for(let _=0;_<f;_++){const L=_%3*2/3-1,A=_>2?0:-1,M=[L,A,0,L+2/3,A,0,L+2/3,A+1,0,L,A,0,L+2/3,A+1,0,L,A+1,0];x.set(M,m*p*_);for(let w=0;w<p;w++){const T=h[w*2]*2-1,P=h[w*2+1]*2-1;_===0?Lr.set(1,P,T):_===1?Lr.set(-T,1,-P):_===2?Lr.set(-T,P,1):_===3?Lr.set(-1,P,-T):_===4?Lr.set(-T,-1,P):Lr.set(T,P,-1),Lr.toArray(E,(_*p+w)*m)}}const v=new Lt;v.setAttribute("position",new At(x,m)),v.setAttribute("outputDirection",new At(E,m)),t.push(new Kt(v,null)),n>vs&&n--}return{lodMeshes:t,sizeLods:e}}function Rd(i,e,t){const n=new ei(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ry(i,e,t){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ty,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function sy(i,e,t){return new bi({name:"SphericalGaussianBlur",defines:{SAMPLES:ey,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Cd(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Pd(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ld extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ad(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sa(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Hi});s.uniforms.tEquirect.value=t;const a=new Kt(r,s),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=qt),new I0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function ay(i){let e=new WeakMap,t=new WeakMap,n=null;function r(p,m=!1){return p==null?null:m?a(p):s(p)}function s(p){if(p&&p.isTexture){const m=p.mapping;if(m===Vl||m===Gl)if(e.has(p)){const x=e.get(p).texture;return o(x,p.mapping)}else{const x=p.image;if(x&&x.height>0){const E=new Ld(x.height);return E.fromEquirectangularTexture(i,p),e.set(p,E),p.addEventListener("dispose",u),o(E.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){const m=p.mapping,x=m===Vl||m===Gl,E=m===br||m===Xr;if(x||E){let v=t.get(p);const _=v!==void 0?v.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return n===null&&(n=new Ad(i)),v=x?n.fromEquirectangular(p,v):n.fromCubemap(p,v),v.texture.pmremVersion=p.pmremVersion,t.set(p,v),v.texture;if(v!==void 0)return v.texture;{const L=p.image;return x&&L&&L.height>0||E&&L&&c(L)?(n===null&&(n=new Ad(i)),v=x?n.fromEquirectangular(p):n.fromCubemap(p),v.texture.pmremVersion=p.pmremVersion,t.set(p,v),p.addEventListener("dispose",h),v.texture):null}}}return p}function o(p,m){return m===Vl?p.mapping=br:m===Gl&&(p.mapping=Xr),p}function c(p){let m=0;const x=6;for(let E=0;E<x;E++)p[E]!==void 0&&m++;return m===x}function u(p){const m=p.target;m.removeEventListener("dispose",u);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(p){const m=p.target;m.removeEventListener("dispose",h);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function oy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&$r("WebGLRenderer: "+n+" extension not supported."),r}}}function ly(i,e,t,n){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function u(f){const p=[],m=f.index,x=f.attributes.position;let E=0;if(x===void 0)return;if(m!==null){const L=m.array;E=m.version;for(let A=0,M=L.length;A<M;A+=3){const w=L[A+0],T=L[A+1],P=L[A+2];p.push(w,T,T,P,P,w)}}else{const L=x.array;E=x.version;for(let A=0,M=L.length/3-1;A<M;A+=3){const w=A+0,T=A+1,P=A+2;p.push(w,T,T,P,P,w)}}const v=new(x.count>=65535?jc:Kc)(p,1);v.version=E;const _=s.get(f);_&&e.remove(_),s.set(f,v)}function h(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function cy(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function u(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,s,f*a,m),t.update(p,n,m))}function h(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,m);let E=0;for(let v=0;v<m;v++)E+=p[v];t.update(E,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function uy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function hy(i,e,t){const n=new WeakMap,r=new Ot;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let R=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",R)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],L=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),x===!0&&(A=2),E===!0&&(A=3);let M=o.attributes.position.count*A,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*w*4*f),P=new If(T,M,w,f);P.type=Dn,P.needsUpdate=!0;const y=A*4;for(let N=0;N<f;N++){const F=v[N],z=_[N],V=L[N],O=M*w*4*N;for(let W=0;W<F.count;W++){const J=W*y;m===!0&&(r.fromBufferAttribute(F,W),T[O+J+0]=r.x,T[O+J+1]=r.y,T[O+J+2]=r.z,T[O+J+3]=0),x===!0&&(r.fromBufferAttribute(z,W),T[O+J+4]=r.x,T[O+J+5]=r.y,T[O+J+6]=r.z,T[O+J+7]=0),E===!0&&(r.fromBufferAttribute(V,W),T[O+J+8]=r.x,T[O+J+9]=r.y,T[O+J+10]=r.z,T[O+J+11]=V.itemSize===4?r.w:1)}}p={count:f,texture:P,size:new nt(M,w)},n.set(o,p),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let E=0;E<u.length;E++)m+=u[E];const x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function fy(i,e,t,n,r){let s=new WeakMap;function a(u){const h=r.render.frame,f=u.geometry,p=e.get(u,f);if(s.get(p)!==h&&(e.update(p),s.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return p}function o(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const dy={[tf]:"LINEAR_TONE_MAPPING",[nf]:"REINHARD_TONE_MAPPING",[rf]:"CINEON_TONE_MAPPING",[sf]:"ACES_FILMIC_TONE_MAPPING",[of]:"AGX_TONE_MAPPING",[lf]:"NEUTRAL_TONE_MAPPING",[af]:"CUSTOM_TONE_MAPPING"};function py(i,e,t,n,r,s){const a=new ei(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const u=new Lt;u.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new St([0,2,0,0,2,0],2));const h=new s0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Kt(u,h),p=new ua(-1,1,1,-1,0,1);let m=null,x=null,E=!1,v,_=null,L=[],A=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),c!==null&&c.setSize(M,w);for(let T=0;T<L.length;T++){const P=L[T];P.setSize&&P.setSize(M,w)}},this.setEffects=function(M){L=M,A=L.length>0&&L[0].isRenderPass===!0;const w=a.width,T=a.height;L.length>0&&o===null&&(o=new ei(w,T,{type:xi,depthBuffer:!1,stencilBuffer:!1}),c=new ei(w,T,{type:xi,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<L.length;P++){const y=L[P];y.setSize&&y.setSize(w,T)}},this.begin=function(M,w){if(E||M.toneMapping===gi&&L.length===0)return!1;if(_=w,w!==null){const T=w.width,P=w.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return A===!1&&M.setRenderTarget(a),v=M.toneMapping,M.toneMapping=gi,!0},this.hasRenderPass=function(){return A},this.end=function(M,w){M.toneMapping=v,E=!0;let T=a,P=o;for(let y=0;y<L.length;y++){const R=L[y];R.enabled!==!1&&(R.render(M,P,T,w),R.needsSwap!==!1&&(T=P,P=P===o?c:o))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,h.defines={},xt.getTransfer(m)===It&&(h.defines.SRGB_TRANSFER="");const y=dy[x];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(_),M.render(f,p),_=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const Id=new rn,bu=new ra(1,1),Dd=new If,Nd=new w_,Ud=new ad,Fd=[],Od=[],Bd=new Float32Array(16),kd=new Float32Array(9),zd=new Float32Array(4);function ys(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Fd[r];if(s===void 0&&(s=new Float32Array(r),Fd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=Od[e];t===void 0&&(t=new Int32Array(e),Od[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function my(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function _y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function xy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;zd.set(n),i.uniformMatrix2fv(this.addr,!1,zd),en(t,n)}}function yy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;kd.set(n),i.uniformMatrix3fv(this.addr,!1,kd),en(t,n)}}function Sy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Bd.set(n),i.uniformMatrix4fv(this.addr,!1,Bd),en(t,n)}}function My(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function by(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function Ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function Ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function wy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function Ry(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Py(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(bu.compareFunction=t.isReversedDepthBuffer()?Lc:Pc,s=bu):s=Id,t.setTexture2D(e||s,r)}function Ly(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nd,r)}function Iy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ud,r)}function Dy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dd,r)}function Ny(i){switch(i){case 5126:return my;case 35664:return gy;case 35665:return _y;case 35666:return vy;case 35674:return xy;case 35675:return yy;case 35676:return Sy;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Ey;case 35669:case 35673:return Ty;case 5125:return wy;case 36294:return Ay;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Dy}}function Uy(i,e){i.uniform1fv(this.addr,e)}function Fy(i,e){const t=ys(e,this.size,2);i.uniform2fv(this.addr,t)}function Oy(i,e){const t=ys(e,this.size,3);i.uniform3fv(this.addr,t)}function By(i,e){const t=ys(e,this.size,4);i.uniform4fv(this.addr,t)}function ky(i,e){const t=ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zy(i,e){const t=ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hy(i,e){const t=ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vy(i,e){i.uniform1iv(this.addr,e)}function Gy(i,e){i.uniform2iv(this.addr,e)}function Wy(i,e){i.uniform3iv(this.addr,e)}function Xy(i,e){i.uniform4iv(this.addr,e)}function qy(i,e){i.uniform1uiv(this.addr,e)}function $y(i,e){i.uniform2uiv(this.addr,e)}function Yy(i,e){i.uniform3uiv(this.addr,e)}function Ky(i,e){i.uniform4uiv(this.addr,e)}function jy(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=bu:a=Id;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Zy(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nd,s[a])}function Jy(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ud,s[a])}function Qy(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dd,s[a])}function eS(i){switch(i){case 5126:return Uy;case 35664:return Fy;case 35665:return Oy;case 35666:return By;case 35674:return ky;case 35675:return zy;case 35676:return Hy;case 5124:case 35670:return Vy;case 35667:case 35671:return Gy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return qy;case 36294:return $y;case 36295:return Yy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Qy}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ny(t.type)}}class nS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eS(t.type)}}class iS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function Hd(i,e){i.seq.push(e),i.map[e.id]=e}function rS(i,e,t){const n=i.name,r=n.length;for(Eu.lastIndex=0;;){const s=Eu.exec(n),a=Eu.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Hd(t,u===void 0?new tS(o,i,e):new nS(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new iS(o),Hd(t,f)),t=f}}}class Oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);rS(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Vd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sS=37297;let aS=0;function oS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Gd=new ft;function lS(i){xt._getMatrix(Gd,xt.workingColorSpace,i);const e=`mat3( ${Gd.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Ya:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+oS(i.getShaderSource(e),o)}else return s}function cS(i,e){const t=lS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const uS={[tf]:"Linear",[nf]:"Reinhard",[rf]:"Cineon",[sf]:"ACESFilmic",[of]:"AgX",[lf]:"Neutral",[af]:"Custom"};function hS(i,e){const t=uS[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bo=new j;function fS(){xt.getLuminanceCoefficients(Bo);const i=Bo.x.toFixed(4),e=Bo.y.toFixed(4),t=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function pS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function da(i){return i!==""}function Xd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(i){return i.replace(gS,vS)}const _S=new Map;function vS(i,e){let t=gt[e];if(t===void 0){const n=_S.get(e);if(n!==void 0)t=gt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tu(t)}const xS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $d(i){return i.replace(xS,yS)}function yS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const SS={[Ba]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function MS(i){return SS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bS={[br]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE_UV"};function ES(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":bS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const TS={[Xr]:"ENVMAP_MODE_REFRACTION"};function wS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":TS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AS={[Hl]:"ENVMAP_BLENDING_MULTIPLY",[zg]:"ENVMAP_BLENDING_MIX",[Hg]:"ENVMAP_BLENDING_ADD"};function RS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":AS[i.combine]||"ENVMAP_BLENDING_NONE"}function CS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function PS(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=MS(t),u=ES(t),h=wS(t),f=RS(t),p=CS(t),m=dS(t),x=pS(s),E=r.createProgram();let v,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(da).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(da).join(`
`),_.length>0&&(_+=`
`)):(v=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),_=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?gt.tonemapping_pars_fragment:"",t.toneMapping!==gi?hS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,cS("linearToOutputTexel",t.outputColorSpace),fS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),a=Tu(a),a=Xd(a,t),a=qd(a,t),o=Tu(o),o=Xd(o,t),o=qd(o,t),a=$d(a),o=$d(o),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=L+v+a,M=L+_+o,w=Vd(r,r.VERTEX_SHADER,A),T=Vd(r,r.FRAGMENT_SHADER,M);r.attachShader(E,w),r.attachShader(E,T),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(F){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(E)||"",V=r.getShaderInfoLog(w)||"",O=r.getShaderInfoLog(T)||"",W=z.trim(),J=V.trim(),X=O.trim();let te=!0,ie=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,w,T);else{const pe=Wd(r,w,"vertex"),me=Wd(r,T,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+pe+`
`+me)}else W!==""?Qe("WebGLProgram: Program Info Log:",W):(J===""||X==="")&&(ie=!1);ie&&(F.diagnostics={runnable:te,programLog:W,vertexShader:{log:J,prefix:v},fragmentShader:{log:X,prefix:_}})}r.deleteShader(w),r.deleteShader(T),y=new Oo(r,E),R=mS(r,E)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(E,sS)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aS++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=T,this}let LS=0;class IS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DS(e),t.set(e,n)),n}}class DS{constructor(e){this.id=LS++,this.code=e,this.usedTimes=0}}function NS(i){return i===Tr||i===Xa||i===qa}function US(i,e,t,n,r,s){const a=new Uf,o=new IS,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer;let p=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function E(y,R,N,F,z,V){const O=F.fog,W=z.geometry,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,te=e.get(y.envMap||J,X),ie=te&&te.mapping===ka?te.image.height:null,pe=m[y.type];y.precision!==null&&(p=n.getMaxPrecision(y.precision),p!==y.precision&&Qe("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ne=me!==void 0?me.length:0;let we=0;W.morphAttributes.position!==void 0&&(we=1),W.morphAttributes.normal!==void 0&&(we=2),W.morphAttributes.color!==void 0&&(we=3);let dt,$e,ot,he;if(pe){const Bt=wi[pe];dt=Bt.vertexShader,$e=Bt.fragmentShader}else{dt=y.vertexShader,$e=y.fragmentShader;const Bt=o.getVertexShaderStage(y),Rt=o.getFragmentShaderStage(y);o.update(y,Bt,Rt),ot=Bt.id,he=Rt.id}const k=i.getRenderTarget(),G=i.state.buffers.depth.getReversed(),ae=z.isInstancedMesh===!0,Q=z.isBatchedMesh===!0,se=!!y.map,ce=!!y.matcap,de=!!te,ye=!!y.aoMap,ge=!!y.lightMap,ve=!!y.bumpMap&&y.wireframe===!1,Fe=!!y.normalMap,Te=!!y.displacementMap,st=!!y.emissiveMap,tt=!!y.metalnessMap,lt=!!y.roughnessMap,q=y.anisotropy>0,pt=y.clearcoat>0,Ae=y.dispersion>0,U=y.retroreflectivity>0,b=y.iridescence>0,ee=y.sheen>0,K=y.transmission>0,oe=q&&!!y.anisotropyMap,be=pt&&!!y.clearcoatMap,Re=pt&&!!y.clearcoatNormalMap,le=pt&&!!y.clearcoatRoughnessMap,xe=b&&!!y.iridescenceMap,Pe=b&&!!y.iridescenceThicknessMap,Xe=ee&&!!y.sheenColorMap,Ue=ee&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,je=!!y.specularColorMap,et=!!y.specularIntensityMap,ct=K&&!!y.transmissionMap,Z=K&&!!y.thicknessMap,Ie=!!y.gradientMap,_e=!!y.alphaMap,De=y.alphaTest>0,ze=!!y.alphaHash,Se=!!y.extensions;let Ee=gi;y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const Ke={shaderID:pe,shaderType:y.type,shaderName:y.name,vertexShader:dt,fragmentShader:$e,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Q,batchingColor:Q&&z._colorsTexture!==null,instancing:ae,instancingColor:ae&&z.instanceColor!==null,instancingMorph:ae&&z.morphTexture!==null,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:se,matcap:ce,envMap:de,envMapMode:de&&te.mapping,envMapCubeUVHeight:ie,aoMap:ye,lightMap:ge,bumpMap:ve,normalMap:Fe,displacementMap:Te,emissiveMap:st,normalMapObjectSpace:Fe&&y.normalMapType===qg,normalMapTangentSpace:Fe&&y.normalMapType===$a,packedNormalMap:Fe&&y.normalMapType===$a&&NS(y.normalMap.format),metalnessMap:tt,roughnessMap:lt,anisotropy:q,anisotropyMap:oe,clearcoat:pt,clearcoatMap:be,clearcoatNormalMap:Re,clearcoatRoughnessMap:le,dispersion:Ae,retroreflection:U,iridescence:b,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:ee,sheenColorMap:Xe,sheenRoughnessMap:Ue,specularMap:Ce,specularColorMap:je,specularIntensityMap:et,transmission:K,transmissionMap:ct,thicknessMap:Z,gradientMap:Ie,opaque:y.transparent===!1&&y.blending===Bs&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:De,alphaHash:ze,combine:y.combine,mapUv:se&&x(y.map.channel),aoMapUv:ye&&x(y.aoMap.channel),lightMapUv:ge&&x(y.lightMap.channel),bumpMapUv:ve&&x(y.bumpMap.channel),normalMapUv:Fe&&x(y.normalMap.channel),displacementMapUv:Te&&x(y.displacementMap.channel),emissiveMapUv:st&&x(y.emissiveMap.channel),metalnessMapUv:tt&&x(y.metalnessMap.channel),roughnessMapUv:lt&&x(y.roughnessMap.channel),anisotropyMapUv:oe&&x(y.anisotropyMap.channel),clearcoatMapUv:be&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(y.sheenRoughnessMap.channel),specularMapUv:Ce&&x(y.specularMap.channel),specularColorMapUv:je&&x(y.specularColorMap.channel),specularIntensityMapUv:et&&x(y.specularIntensityMap.channel),transmissionMapUv:ct&&x(y.transmissionMap.channel),thicknessMapUv:Z&&x(y.thicknessMap.channel),alphaMapUv:_e&&x(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Fe||q),vertexNormals:!!W.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(se||_e),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||W.attributes.normal===void 0&&Fe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:G,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:we,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:se&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===It,decodeVideoTextureEmissive:st&&y.emissiveMap.isVideoTexture===!0&&xt.getTransfer(y.emissiveMap.colorSpace)===It,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||Q)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function v(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)R.push(N),R.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(R,y),L(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function _(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function L(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){const R=m[y.type];let N;if(R){const F=wi[R];N=n0.clone(F.uniforms)}else N=y.uniforms;return N}function M(y,R){let N=h.get(R);return N!==void 0?++N.usedTimes:(N=new PS(i,R,y,r),u.push(N),h.set(R,N)),N}function w(y){if(--y.usedTimes===0){const R=u.indexOf(y);u[R]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function P(){o.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:A,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:P}}function FS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function OS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Kd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jd(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function o(p,m,x,E,v,_){let L=i[e];return L===void 0?(L={id:p.id,object:p,geometry:m,material:x,materialVariant:a(p),groupOrder:E,renderOrder:p.renderOrder,z:v,group:_},i[e]=L):(L.id=p.id,L.object=p,L.geometry=m,L.material=x,L.materialVariant=a(p),L.groupOrder=E,L.renderOrder=p.renderOrder,L.z=v,L.group=_),e++,L}function c(p,m,x,E,v,_,L){L.reversedDepth===!0&&(v=-v);const A=o(p,m,x,E,v,_);x.transmission>0?n.push(A):x.transparent===!0?r.push(A):t.push(A)}function u(p,m,x,E,v,_){const L=o(p,m,x,E,v,_);x.transmission>0?n.unshift(L):x.transparent===!0?r.unshift(L):t.unshift(L)}function h(p,m){t.length>1&&t.sort(p||OS),n.length>1&&n.sort(m||Kd),r.length>1&&r.sort(m||Kd)}function f(){for(let p=e,m=i.length;p<m;p++){const x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:f,sort:h}}function BS(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new jd,i.set(n,[a])):r>=s.length?(a=new jd,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function kS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new j,color:new Je};break;case"SpotLight":t={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function zS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let HS=0;function VS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function GS(i){const e=new kS,t=zS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new j);const r=new j,s=new ut,a=new ut;function o(u){let h=0,f=0,p=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let m=0,x=0,E=0,v=0,_=0,L=0,A=0,M=0,w=0,T=0,P=0,y=0,R=0,N=0;u.sort(VS);for(let z=0,V=u.length;z<V;z++){const O=u[z],W=O.color,J=O.intensity,X=O.distance;let te=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Tr?te=O.shadow.map.texture:te=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=W.r*J,f+=W.g*J,p+=W.b*J;else if(O.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(O.sh.coefficients[ie],J);N++}else if(O.isSunLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const pe=O.shadow,me=t.get(O);me.shadowIntensity=pe.intensity,me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize.copy(pe.mapSize).multiply(pe.getFrameExtents()),n.sunShadow[x]=me,n.sunShadowMap[x]=te;const Ne=pe.getViewportCount();for(let we=0;we<Ne;we++)n.sunShadowMatrix[E+we]=pe.getMatrix(we),n.sunShadowCascade[E+we]=pe._cascadeData[we];E+=Ne,x++}n.sun[m]=ie,m++}else if(O.isDirectionalLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const pe=O.shadow,me=t.get(O);me.shadowIntensity=pe.intensity,me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,n.directionalShadow[v]=me,n.directionalShadowMap[v]=te,n.directionalShadowMatrix[v]=O.shadow.matrix,w++}n.directional[v]=ie,v++}else if(O.isSpotLight){const ie=e.get(O);ie.position.setFromMatrixPosition(O.matrixWorld),ie.color.copy(W).multiplyScalar(J),ie.distance=X,ie.coneCos=Math.cos(O.angle),ie.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ie.decay=O.decay,n.spot[L]=ie;const pe=O.shadow;if(O.map&&(n.spotLightMap[y]=O.map,y++,pe.updateMatrices(O),O.castShadow&&R++),n.spotLightMatrix[L]=pe.matrix,O.castShadow){const me=t.get(O);me.shadowIntensity=pe.intensity,me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,n.spotShadow[L]=me,n.spotShadowMap[L]=te,P++}L++}else if(O.isRectAreaLight){const ie=e.get(O);ie.color.copy(W).multiplyScalar(J),ie.halfWidth.set(O.width*.5,0,0),ie.halfHeight.set(0,O.height*.5,0),n.rectArea[A]=ie,A++}else if(O.isPointLight){const ie=e.get(O);if(ie.color.copy(O.color).multiplyScalar(O.intensity),ie.distance=O.distance,ie.decay=O.decay,O.castShadow){const pe=O.shadow,me=t.get(O);me.shadowIntensity=pe.intensity,me.shadowBias=pe.bias,me.shadowNormalBias=pe.normalBias,me.shadowRadius=pe.radius,me.shadowMapSize=pe.mapSize,me.shadowCameraNear=pe.camera.near,me.shadowCameraFar=pe.camera.far,n.pointShadow[_]=me,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=O.shadow.matrix,T++}n.point[_]=ie,_++}else if(O.isHemisphereLight){const ie=e.get(O);ie.skyColor.copy(O.color).multiplyScalar(J),ie.groundColor.copy(O.groundColor).multiplyScalar(J),n.hemi[M]=ie,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const F=n.hash;(F.sunLength!==m||F.directionalLength!==v||F.pointLength!==_||F.spotLength!==L||F.rectAreaLength!==A||F.hemiLength!==M||F.numSunShadows!==x||F.numDirectionalShadows!==w||F.numPointShadows!==T||F.numSpotShadows!==P||F.numSpotMaps!==y||F.numLightProbes!==N)&&(n.sun.length=m,n.directional.length=v,n.spot.length=L,n.rectArea.length=A,n.point.length=_,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=N,F.sunLength=m,F.directionalLength=v,F.pointLength=_,F.spotLength=L,F.rectAreaLength=A,F.hemiLength=M,F.numSunShadows=x,F.numDirectionalShadows=w,F.numPointShadows=T,F.numSpotShadows=P,F.numSpotMaps=y,F.numLightProbes=N,n.version=HS++)}function c(u,h){let f=0,p=0,m=0,x=0,E=0,v=0;const _=h.matrixWorldInverse;for(let L=0,A=u.length;L<A;L++){const M=u[L];if(M.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(_),f++}else if(M.isDirectionalLight){const w=n.directional[p];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),p++}else if(M.isSpotLight){const w=n.spot[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),x++}else if(M.isRectAreaLight){const w=n.rectArea[E];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),a.identity(),s.copy(M.matrixWorld),s.premultiply(_),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),E++}else if(M.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(_),v++}}}return{setup:o,setupView:c,state:n}}function Zd(i){const e=new GS(i),t=[],n=[],r=[];function s(p){f.camera=p,t.length=0,n.length=0,r.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function c(p){r.push(p)}function u(){e.setup(t)}function h(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function WS(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Zd(i),e.set(r,[o])):s>=a.length?(o=new Zd(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const XS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$S=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],YS=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Jd=new ut,pa=new j,wu=new j;function KS(i,e,t){let n=new ou;const r=new nt,s=new nt,a=new Ot,o=new a0,c=new o0,u={},h=t.maxTextureSize,f={[zi]:xn,[xn]:zi,[jn]:jn},p=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:XS,fragmentShader:qS}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new Lt;x.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Kt(x,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba;let _=this.type;this.render=function(T,P,y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===Sg&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ba);const R=i.getRenderTarget(),N=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Hi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=_!==this.type;V&&P.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(W=>W.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,W=T.length;O<W;O++){const J=T[O],X=J.shadow;if(X===void 0){Qe("WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const te=X.getFrameExtents();r.multiply(te),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,X.mapSize.y=s.y));const ie=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ie,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Os){if(J.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new ei(r.x,r.y,{format:Tr,type:xi,minFilter:qt,magFilter:qt,generateMipmaps:!1}),X.map.texture.name=J.name+".shadowMap",X.map.depthTexture=new ra(r.x,r.y,Dn),X.map.depthTexture.name=J.name+".shadowMapDepth",X.map.depthTexture.format=Vi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=jt,X.map.depthTexture.magFilter=jt}else J.isPointLight?(X.map=new Ld(r.x),X.map.depthTexture=new e0(r.x,vi)):(X.map=new ei(r.x,r.y),X.map.depthTexture=new ra(r.x,r.y,vi)),X.map.depthTexture.name=J.name+".shadowMap",X.map.depthTexture.format=Vi,this.type===Ba?(X.map.depthTexture.compareFunction=ie?Lc:Pc,X.map.depthTexture.minFilter=qt,X.map.depthTexture.magFilter=qt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=jt,X.map.depthTexture.magFilter=jt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const pe=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();J.isPointLight!==!0&&X.updateMatrices(J,y);for(let me=0;me<pe;me++){const Ne=X.getCamera(me);if(J.isPointLight){const we=X.camera,dt=X.matrix,$e=J.distance||we.far;$e!==we.far&&(we.far=$e,we.updateProjectionMatrix()),pa.setFromMatrixPosition(J.matrixWorld),we.position.copy(pa),wu.copy(we.position),wu.add($S[me]),we.up.copy(YS[me]),we.lookAt(wu),we.updateMatrixWorld(),dt.makeTranslation(-pa.x,-pa.y,-pa.z),Jd.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Jd,we.coordinateSystem,we.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,me),i.clear();else{me===0&&(i.setRenderTarget(X.map),i.clear());const we=X.getViewport(me);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),z.viewport(a)}n=X.getFrustum(me),M(P,y,Ne,J,this.type)}X.isPointLightShadow!==!0&&this.type===Os&&L(X,y),X.needsUpdate=!1}_=this.type,v.needsUpdate=!1,i.setRenderTarget(R,N,F)};function L(T,P){const y=e.update(E);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new ei(r.x,r.y,{format:Tr,type:xi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),p.uniforms.shadow_pass.value=T.map.depthTexture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,y,p,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,y,m,E,null)}function A(T,P,y,R){let N=null;const F=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)N=F;else if(N=y.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=N.uuid,V=P.uuid;let O=u[z];O===void 0&&(O={},u[z]=O);let W=O[V];W===void 0&&(W=N.clone(),O[V]=W,P.addEventListener("dispose",w)),N=W}if(N.visible=P.visible,N.wireframe=P.wireframe,R===Os?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:f[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const z=i.properties.get(N);z.light=y}return N}function M(T,P,y,R,N){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Os)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const V=e.update(T),O=T.material;if(Array.isArray(O)){const W=V.groups;for(let J=0,X=W.length;J<X;J++){const te=W[J],ie=O[te.materialIndex];if(ie&&ie.visible){const pe=A(T,ie,R,N);T.onBeforeShadow(i,T,P,y,V,pe,te),i.renderBufferDirect(y,null,V,pe,T,te),T.onAfterShadow(i,T,P,y,V,pe,te)}}}else if(O.visible){const W=A(T,O,R,N);T.onBeforeShadow(i,T,P,y,V,W,null),i.renderBufferDirect(y,null,V,W,T,null),T.onAfterShadow(i,T,P,y,V,W,null)}}const z=T.children;for(let V=0,O=z.length;V<O;V++)M(z[V],P,y,R,N)}function w(T){T.target.removeEventListener("dispose",w);for(const y in u){const R=u[y],N=T.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function jS(i,e){function t(){let Z=!1;const Ie=new Ot;let _e=null;const De=new Ot(0,0,0,0);return{setMask:function(ze){_e!==ze&&!Z&&(i.colorMask(ze,ze,ze,ze),_e=ze)},setLocked:function(ze){Z=ze},setClear:function(ze,Se,Ee,Ke,Bt){Bt===!0&&(ze*=Ke,Se*=Ke,Ee*=Ke),Ie.set(ze,Se,Ee,Ke),De.equals(Ie)===!1&&(i.clearColor(ze,Se,Ee,Ke),De.copy(Ie))},reset:function(){Z=!1,_e=null,De.set(-1,0,0,0)}}}function n(){let Z=!1,Ie=!1,_e=null,De=null,ze=null;return{setReversed:function(Se){if(Ie!==Se){const Ee=e.get("EXT_clip_control");Se?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Ie=Se;const Ke=ze;ze=null,this.setClear(Ke)}},getReversed:function(){return Ie},setTest:function(Se){Se?k(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(Se){_e!==Se&&!Z&&(i.depthMask(Se),_e=Se)},setFunc:function(Se){if(Ie&&(Se=r_[Se]),De!==Se){switch(Se){case Nl:i.depthFunc(i.NEVER);break;case Ul:i.depthFunc(i.ALWAYS);break;case Fl:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Ol:i.depthFunc(i.EQUAL);break;case Bl:i.depthFunc(i.GEQUAL);break;case kl:i.depthFunc(i.GREATER);break;case zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=Se}},setLocked:function(Se){Z=Se},setClear:function(Se){ze!==Se&&(ze=Se,Ie&&(Se=1-Se),i.clearDepth(Se))},reset:function(){Z=!1,_e=null,De=null,ze=null,Ie=!1}}}function r(){let Z=!1,Ie=null,_e=null,De=null,ze=null,Se=null,Ee=null,Ke=null,Bt=null;return{setTest:function(Rt){Z||(Rt?k(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(Rt){Ie!==Rt&&!Z&&(i.stencilMask(Rt),Ie=Rt)},setFunc:function(Rt,Pn,Wn){(_e!==Rt||De!==Pn||ze!==Wn)&&(i.stencilFunc(Rt,Pn,Wn),_e=Rt,De=Pn,ze=Wn)},setOp:function(Rt,Pn,Wn){(Se!==Rt||Ee!==Pn||Ke!==Wn)&&(i.stencilOp(Rt,Pn,Wn),Se=Rt,Ee=Pn,Ke=Wn)},setLocked:function(Rt){Z=Rt},setClear:function(Rt){Bt!==Rt&&(i.clearStencil(Rt),Bt=Rt)},reset:function(){Z=!1,Ie=null,_e=null,De=null,ze=null,Se=null,Ee=null,Ke=null,Bt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,u=new WeakMap;let h={},f={},p={},m=new WeakMap,x=[],E=null,v=!1,_=null,L=null,A=null,M=null,w=null,T=null,P=null,y=new Je(0,0,0),R=0,N=!1,F=null,z=null,V=null,O=null,W=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,te=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ie)[1]),X=te>=1):ie.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),X=te>=2);let pe=null,me={};const Ne=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),dt=new Ot().fromArray(Ne),$e=new Ot().fromArray(we);function ot(Z,Ie,_e,De){const ze=new Uint8Array(4),Se=i.createTexture();i.bindTexture(Z,Se),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<_e;Ee++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Ie+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return Se}const he={};he[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(i.DEPTH_TEST),a.setFunc(ks),ve(!1),Fe(Kh),k(i.CULL_FACE),ye(Hi);function k(Z){h[Z]!==!0&&(i.enable(Z),h[Z]=!0)}function G(Z){h[Z]!==!1&&(i.disable(Z),h[Z]=!1)}function ae(Z,Ie){return p[Z]!==Ie?(i.bindFramebuffer(Z,Ie),p[Z]=Ie,Z===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ie),Z===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Q(Z,Ie){let _e=x,De=!1;if(Z){_e=m.get(Ie),_e===void 0&&(_e=[],m.set(Ie,_e));const ze=Z.textures;if(_e.length!==ze.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Ee=ze.length;Se<Ee;Se++)_e[Se]=i.COLOR_ATTACHMENT0+Se;_e.length=ze.length,De=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,De=!0);De&&i.drawBuffers(_e)}function se(Z){return E!==Z?(i.useProgram(Z),E=Z,!0):!1}const ce={[Wr]:i.FUNC_ADD,[bg]:i.FUNC_SUBTRACT,[Eg]:i.FUNC_REVERSE_SUBTRACT};ce[Tg]=i.MIN,ce[wg]=i.MAX;const de={[Ag]:i.ZERO,[Rg]:i.ONE,[Cg]:i.SRC_COLOR,[Qh]:i.SRC_ALPHA,[Ug]:i.SRC_ALPHA_SATURATE,[Dg]:i.DST_COLOR,[Lg]:i.DST_ALPHA,[Pg]:i.ONE_MINUS_SRC_COLOR,[ef]:i.ONE_MINUS_SRC_ALPHA,[Ng]:i.ONE_MINUS_DST_COLOR,[Ig]:i.ONE_MINUS_DST_ALPHA,[Fg]:i.CONSTANT_COLOR,[Og]:i.ONE_MINUS_CONSTANT_COLOR,[Bg]:i.CONSTANT_ALPHA,[kg]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(Z,Ie,_e,De,ze,Se,Ee,Ke,Bt,Rt){if(Z===Hi){v===!0&&(G(i.BLEND),v=!1);return}if(v===!1&&(k(i.BLEND),v=!0),Z!==Mg){if(Z!==_||Rt!==N){if((L!==Wr||w!==Wr)&&(i.blendEquation(i.FUNC_ADD),L=Wr,w=Wr),Rt)switch(Z){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jh:i.blendFunc(i.ONE,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zh:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jh:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",Z);break}A=null,M=null,T=null,P=null,y.set(0,0,0),R=0,_=Z,N=Rt}return}ze=ze||Ie,Se=Se||_e,Ee=Ee||De,(Ie!==L||ze!==w)&&(i.blendEquationSeparate(ce[Ie],ce[ze]),L=Ie,w=ze),(_e!==A||De!==M||Se!==T||Ee!==P)&&(i.blendFuncSeparate(de[_e],de[De],de[Se],de[Ee]),A=_e,M=De,T=Se,P=Ee),(Ke.equals(y)===!1||Bt!==R)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Bt),y.copy(Ke),R=Bt),_=Z,N=!1}function ge(Z,Ie){Z.side===jn?G(i.CULL_FACE):k(i.CULL_FACE);let _e=Z.side===xn;Ie&&(_e=!_e),ve(_e),Z.blending===Bs&&Z.transparent===!1?ye(Hi):ye(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),a.setFunc(Z.depthFunc),a.setTest(Z.depthTest),a.setMask(Z.depthWrite),s.setMask(Z.colorWrite);const De=Z.stencilWrite;o.setTest(De),De&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),st(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(Z){F!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),F=Z)}function Fe(Z){Z!==xg?(k(i.CULL_FACE),Z!==z&&(Z===Kh?i.cullFace(i.BACK):Z===yg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),z=Z}function Te(Z){Z!==V&&(X&&i.lineWidth(Z),V=Z)}function st(Z,Ie,_e){Z?(k(i.POLYGON_OFFSET_FILL),(O!==Ie||W!==_e)&&(O=Ie,W=_e,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,_e))):G(i.POLYGON_OFFSET_FILL)}function tt(Z){Z?k(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function lt(Z){Z===void 0&&(Z=i.TEXTURE0+J-1),pe!==Z&&(i.activeTexture(Z),pe=Z)}function q(Z,Ie,_e){_e===void 0&&(pe===null?_e=i.TEXTURE0+J-1:_e=pe);let De=me[_e];De===void 0&&(De={type:void 0,texture:void 0},me[_e]=De),(De.type!==Z||De.texture!==Ie)&&(pe!==_e&&(i.activeTexture(_e),pe=_e),i.bindTexture(Z,Ie||he[Z]),De.type=Z,De.texture=Ie)}function pt(){const Z=me[pe];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Ae(){try{i.compressedTexImage2D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function b(){try{i.texSubImage2D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function ee(){try{i.texSubImage3D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function be(){try{i.texStorage2D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function Re(){try{i.texStorage3D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function le(){try{i.texImage2D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function xe(){try{i.texImage3D(...arguments)}catch(Z){rt("WebGLState:",Z)}}function Pe(Z){return f[Z]!==void 0?f[Z]:i.getParameter(Z)}function Xe(Z,Ie){f[Z]!==Ie&&(i.pixelStorei(Z,Ie),f[Z]=Ie)}function Ue(Z){dt.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),dt.copy(Z))}function Ce(Z){$e.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),$e.copy(Z))}function je(Z,Ie){let _e=u.get(Ie);_e===void 0&&(_e=new WeakMap,u.set(Ie,_e));let De=_e.get(Z);De===void 0&&(De=i.getUniformBlockIndex(Ie,Z.name),_e.set(Z,De))}function et(Z,Ie){const De=u.get(Ie).get(Z);c.get(Ie)!==De&&(i.uniformBlockBinding(Ie,De,Z.__bindingPointIndex),c.set(Ie,De))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},pe=null,me={},p={},m=new WeakMap,x=[],E=null,v=!1,_=null,L=null,A=null,M=null,w=null,T=null,P=null,y=new Je(0,0,0),R=0,N=!1,F=null,z=null,V=null,O=null,W=null,dt.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:k,disable:G,bindFramebuffer:ae,drawBuffers:Q,useProgram:se,setBlending:ye,setMaterial:ge,setFlipSided:ve,setCullFace:Fe,setLineWidth:Te,setPolygonOffset:st,setScissorTest:tt,activeTexture:lt,bindTexture:q,unbindTexture:pt,compressedTexImage2D:Ae,compressedTexImage3D:U,texImage2D:le,texImage3D:xe,pixelStorei:Xe,getParameter:Pe,updateUBOMapping:je,uniformBlockBinding:et,texStorage2D:be,texStorage3D:Re,texSubImage2D:b,texSubImage3D:ee,compressedTexSubImage2D:K,compressedTexSubImage3D:oe,scissor:Ue,viewport:Ce,reset:ct}}function ZS(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,h=new WeakMap,f=new Set;let p;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return x?new OffscreenCanvas(U,b):qs("canvas")}function v(U,b,ee){let K=1;const oe=Ae(U);if((oe.width>ee||oe.height>ee)&&(K=ee/Math.max(oe.width,oe.height)),K<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const be=Math.floor(K*oe.width),Re=Math.floor(K*oe.height);p===void 0&&(p=E(be,Re));const le=b?E(be,Re):p;return le.width=be,le.height=Re,le.getContext("2d").drawImage(U,0,0,be,Re),Qe("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+be+"x"+Re+")."),le}else return"data"in U&&Qe("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),U;return U}function _(U){return U.generateMipmaps}function L(U){i.generateMipmap(U)}function A(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(U,b,ee,K,oe,be=!1){if(U!==null){if(i[U]!==void 0)return i[U];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Re;K&&(Re=e.get("EXT_texture_norm16"),Re||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=b;if(b===i.RED&&(ee===i.FLOAT&&(le=i.R32F),ee===i.HALF_FLOAT&&(le=i.R16F),ee===i.UNSIGNED_BYTE&&(le=i.R8),ee===i.UNSIGNED_SHORT&&Re&&(le=Re.R16_EXT),ee===i.SHORT&&Re&&(le=Re.R16_SNORM_EXT)),b===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.R8UI),ee===i.UNSIGNED_SHORT&&(le=i.R16UI),ee===i.UNSIGNED_INT&&(le=i.R32UI),ee===i.BYTE&&(le=i.R8I),ee===i.SHORT&&(le=i.R16I),ee===i.INT&&(le=i.R32I)),b===i.RG&&(ee===i.FLOAT&&(le=i.RG32F),ee===i.HALF_FLOAT&&(le=i.RG16F),ee===i.UNSIGNED_BYTE&&(le=i.RG8),ee===i.UNSIGNED_SHORT&&Re&&(le=Re.RG16_EXT),ee===i.SHORT&&Re&&(le=Re.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.RG8UI),ee===i.UNSIGNED_SHORT&&(le=i.RG16UI),ee===i.UNSIGNED_INT&&(le=i.RG32UI),ee===i.BYTE&&(le=i.RG8I),ee===i.SHORT&&(le=i.RG16I),ee===i.INT&&(le=i.RG32I)),b===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(le=i.RGB16UI),ee===i.UNSIGNED_INT&&(le=i.RGB32UI),ee===i.BYTE&&(le=i.RGB8I),ee===i.SHORT&&(le=i.RGB16I),ee===i.INT&&(le=i.RGB32I)),b===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),ee===i.UNSIGNED_INT&&(le=i.RGBA32UI),ee===i.BYTE&&(le=i.RGBA8I),ee===i.SHORT&&(le=i.RGBA16I),ee===i.INT&&(le=i.RGBA32I)),b===i.RGB&&(ee===i.UNSIGNED_SHORT&&Re&&(le=Re.RGB16_EXT),ee===i.SHORT&&Re&&(le=Re.RGB16_SNORM_EXT),ee===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),ee===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),b===i.RGBA){const xe=be?Ya:xt.getTransfer(oe);ee===i.FLOAT&&(le=i.RGBA32F),ee===i.HALF_FLOAT&&(le=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(le=xe===It?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT&&Re&&(le=Re.RGBA16_EXT),ee===i.SHORT&&Re&&(le=Re.RGBA16_SNORM_EXT),ee===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function w(U,b){let ee;return U?b===null||b===vi||b===Vs?ee=i.DEPTH24_STENCIL8:b===Dn?ee=i.DEPTH32F_STENCIL8:b===Hs&&(ee=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vi||b===Vs?ee=i.DEPTH_COMPONENT24:b===Dn?ee=i.DEPTH_COMPONENT32F:b===Hs&&(ee=i.DEPTH_COMPONENT16),ee}function T(U,b){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==jt&&U.minFilter!==qt?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function P(U){const b=U.target;b.removeEventListener("dispose",P),R(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function y(U){const b=U.target;b.removeEventListener("dispose",y),F(b)}function R(U){const b=n.get(U);if(b.__webglInit===void 0)return;const ee=U.source,K=m.get(ee);if(K){const oe=K[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&N(U),Object.keys(K).length===0&&m.delete(ee)}n.remove(U)}function N(U){const b=n.get(U);i.deleteTexture(b.__webglTexture);const ee=U.source,K=m.get(ee);delete K[b.__cacheKey],a.memory.textures--}function F(U){const b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let oe=0;oe<b.__webglFramebuffer[K].length;oe++)i.deleteFramebuffer(b.__webglFramebuffer[K][oe]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=U.textures;for(let K=0,oe=ee.length;K<oe;K++){const be=n.get(ee[K]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(ee[K])}n.remove(U)}let z=0;function V(){z=0}function O(){return z}function W(U){z=U}function J(){const U=z;return U>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+r.maxTextures),z+=1,U}function X(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function te(U,b){const ee=n.get(U);if(U.isVideoTexture&&q(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ee.__version!==U.version){const K=U.image;if(K===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{G(ee,U,b);return}}else U.isExternalTexture&&(ee.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+b)}function ie(U,b){const ee=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){G(ee,U,b);return}else U.isExternalTexture&&(ee.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+b)}function pe(U,b){const ee=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){G(ee,U,b);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+b)}function me(U,b){const ee=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ee.__version!==U.version){ae(ee,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+b)}const Ne={[_i]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},we={[jt]:i.NEAREST,[hf]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},dt={[Yg]:i.NEVER,[Qg]:i.ALWAYS,[Kg]:i.LESS,[Pc]:i.LEQUAL,[jg]:i.EQUAL,[Lc]:i.GEQUAL,[Zg]:i.GREATER,[Jg]:i.NOTEQUAL};function $e(U,b){if(b.type===Dn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qt||b.magFilter===za||b.magFilter===zs||b.magFilter===Zn||b.minFilter===qt||b.minFilter===za||b.minFilter===zs||b.minFilter===Zn)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Ne[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Ne[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Ne[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,we[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,we[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,dt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==zs&&b.minFilter!==Zn||b.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ot(U,b){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",P));const K=b.source;let oe=m.get(K);oe===void 0&&(oe={},m.set(K,oe));const be=X(b);if(be!==U.__cacheKey){oe[be]===void 0&&(oe[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),oe[be].usedTimes++;const Re=oe[U.__cacheKey];Re!==void 0&&(oe[U.__cacheKey].usedTimes--,Re.usedTimes===0&&N(b)),U.__cacheKey=be,U.__webglTexture=oe[be].texture}return ee}function he(U,b,ee){return Math.floor(Math.floor(U/ee)/b)}function k(U,b,ee,K){const be=U.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,ee,K,b.data);else{be.sort((Xe,Ue)=>Xe.start-Ue.start);let Re=0;for(let Xe=1;Xe<be.length;Xe++){const Ue=be[Re],Ce=be[Xe],je=Ue.start+Ue.count,et=he(Ce.start,b.width,4),ct=he(Ue.start,b.width,4);Ce.start<=je+1&&et===ct&&he(Ce.start+Ce.count-1,b.width,4)===et?Ue.count=Math.max(Ue.count,Ce.start+Ce.count-Ue.start):(++Re,be[Re]=Ce)}be.length=Re+1;const le=t.getParameter(i.UNPACK_ROW_LENGTH),xe=t.getParameter(i.UNPACK_SKIP_PIXELS),Pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Xe=0,Ue=be.length;Xe<Ue;Xe++){const Ce=be[Xe],je=Math.floor(Ce.start/4),et=Math.ceil(Ce.count/4),ct=je%b.width,Z=Math.floor(je/b.width),Ie=et,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,ct,Z,Ie,_e,ee,K,b.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function G(U,b,ee){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const oe=ot(U,b),be=b.source;t.bindTexture(K,U.__webglTexture,i.TEXTURE0+ee);const Re=n.get(be);if(be.version!==Re.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+ee),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const _e=xt.getPrimaries(xt.workingColorSpace),De=b.colorSpace===ir?null:xt.getPrimaries(b.colorSpace),ze=b.colorSpace===ir||_e===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let xe=v(b.image,!1,r.maxTextureSize);xe=pt(b,xe);const Pe=s.convert(b.format,b.colorSpace),Xe=s.convert(b.type);let Ue=M(b.internalFormat,Pe,Xe,b.normalized,b.colorSpace,b.isVideoTexture);$e(K,b);let Ce;const je=b.mipmaps,et=b.isVideoTexture!==!0,ct=Re.__version===void 0||oe===!0,Z=be.dataReady,Ie=T(b,xe);if(b.isDepthTexture)Ue=w(b.format===Er,b.type),ct&&(et?t.texStorage2D(i.TEXTURE_2D,1,Ue,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Ue,xe.width,xe.height,0,Pe,Xe,null));else if(b.isDataTexture)if(je.length>0){et&&ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Ue,je[0].width,je[0].height);for(let _e=0,De=je.length;_e<De;_e++)Ce=je[_e],et?Z&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,Pe,Xe,Ce.data):t.texImage2D(i.TEXTURE_2D,_e,Ue,Ce.width,Ce.height,0,Pe,Xe,Ce.data);b.generateMipmaps=!1}else et?(ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Ue,xe.width,xe.height),Z&&k(b,xe,Pe,Xe)):t.texImage2D(i.TEXTURE_2D,0,Ue,xe.width,xe.height,0,Pe,Xe,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){et&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ue,je[0].width,je[0].height,xe.depth);for(let _e=0,De=je.length;_e<De;_e++)if(Ce=je[_e],b.format!==Nn)if(Pe!==null)if(et){if(Z)if(b.layerUpdates.size>0){const ze=bd(Ce.width,Ce.height,b.format,b.type);for(const Se of b.layerUpdates){const Ee=Ce.data.subarray(Se*ze/Ce.data.BYTES_PER_ELEMENT,(Se+1)*ze/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Se,Ce.width,Ce.height,1,Pe,Ee)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,xe.depth,Pe,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,Ue,Ce.width,Ce.height,xe.depth,0,Ce.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,xe.depth,Pe,Xe,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,Ue,Ce.width,Ce.height,xe.depth,0,Pe,Xe,Ce.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{et&&ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Ue,je[0].width,je[0].height);for(let _e=0,De=je.length;_e<De;_e++)Ce=je[_e],b.format!==Nn?Pe!==null?et?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,Ue,Ce.width,Ce.height,0,Ce.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?Z&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,Pe,Xe,Ce.data):t.texImage2D(i.TEXTURE_2D,_e,Ue,Ce.width,Ce.height,0,Pe,Xe,Ce.data)}else if(b.isDataArrayTexture)if(et){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ue,xe.width,xe.height,xe.depth),Z)if(b.layerUpdates.size>0){const _e=bd(xe.width,xe.height,b.format,b.type);for(const De of b.layerUpdates){const ze=xe.data.subarray(De*_e/xe.data.BYTES_PER_ELEMENT,(De+1)*_e/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,xe.width,xe.height,1,Pe,Xe,ze)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Pe,Xe,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,xe.width,xe.height,xe.depth,0,Pe,Xe,xe.data);else if(b.isData3DTexture)et?(ct&&t.texStorage3D(i.TEXTURE_3D,Ie,Ue,xe.width,xe.height,xe.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Pe,Xe,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,xe.width,xe.height,xe.depth,0,Pe,Xe,xe.data);else if(b.isFramebufferTexture){if(ct)if(et)t.texStorage2D(i.TEXTURE_2D,Ie,Ue,xe.width,xe.height);else{let _e=xe.width,De=xe.height;for(let ze=0;ze<Ie;ze++)t.texImage2D(i.TEXTURE_2D,ze,Ue,_e,De,0,Pe,Xe,null),_e>>=1,De>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),xe.parentNode!==_e){_e.appendChild(xe),f.add(b),_e.onpaint=De=>{const ze=De.changedElements;for(const Se of f)ze.includes(Se.image)&&(Se.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xe);else{const ze=i.RGBA,Se=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,Se,Ee,xe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(je.length>0){if(et&&ct){const _e=Ae(je[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Ue,_e.width,_e.height)}for(let _e=0,De=je.length;_e<De;_e++)Ce=je[_e],et?Z&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Pe,Xe,Ce):t.texImage2D(i.TEXTURE_2D,_e,Ue,Pe,Xe,Ce);b.generateMipmaps=!1}else if(et){if(ct){const _e=Ae(xe);t.texStorage2D(i.TEXTURE_2D,Ie,Ue,_e.width,_e.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Xe,xe)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Pe,Xe,xe);_(b)&&L(K),Re.__version=be.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ae(U,b,ee){if(b.image.length!==6)return;const K=ot(U,b),oe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+ee);const be=n.get(oe);if(oe.version!==be.__version||K===!0){t.activeTexture(i.TEXTURE0+ee);const Re=xt.getPrimaries(xt.workingColorSpace),le=b.colorSpace===ir?null:xt.getPrimaries(b.colorSpace),xe=b.colorSpace===ir||Re===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,Xe=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let Se=0;Se<6;Se++)!Pe&&!Xe?Ue[Se]=v(b.image[Se],!0,r.maxCubemapSize):Ue[Se]=Xe?b.image[Se].image:b.image[Se],Ue[Se]=pt(b,Ue[Se]);const Ce=Ue[0],je=s.convert(b.format,b.colorSpace),et=s.convert(b.type),ct=M(b.internalFormat,je,et,b.normalized,b.colorSpace),Z=b.isVideoTexture!==!0,Ie=be.__version===void 0||K===!0,_e=oe.dataReady;let De=T(b,Ce);$e(i.TEXTURE_CUBE_MAP,b);let ze;if(Pe){Z&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ct,Ce.width,Ce.height);for(let Se=0;Se<6;Se++){ze=Ue[Se].mipmaps;for(let Ee=0;Ee<ze.length;Ee++){const Ke=ze[Ee];b.format!==Nn?je!==null?Z?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee,0,0,Ke.width,Ke.height,je,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee,ct,Ke.width,Ke.height,0,Ke.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee,0,0,Ke.width,Ke.height,je,et,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee,ct,Ke.width,Ke.height,0,je,et,Ke.data)}}}else{if(ze=b.mipmaps,Z&&Ie){ze.length>0&&De++;const Se=Ae(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ct,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Xe){Z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ue[Se].width,Ue[Se].height,je,et,Ue[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,Ue[Se].width,Ue[Se].height,0,je,et,Ue[Se].data);for(let Ee=0;Ee<ze.length;Ee++){const Bt=ze[Ee].image[Se].image;Z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee+1,0,0,Bt.width,Bt.height,je,et,Bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee+1,ct,Bt.width,Bt.height,0,je,et,Bt.data)}}else{Z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,je,et,Ue[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,je,et,Ue[Se]);for(let Ee=0;Ee<ze.length;Ee++){const Ke=ze[Ee];Z?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee+1,0,0,je,et,Ke.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee+1,ct,je,et,Ke.image[Se])}}}_(b)&&L(i.TEXTURE_CUBE_MAP),be.__version=oe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Q(U,b,ee,K,oe,be){const Re=s.convert(ee.format,ee.colorSpace),le=s.convert(ee.type),xe=M(ee.internalFormat,Re,le,ee.normalized,ee.colorSpace),Pe=n.get(b),Xe=n.get(ee);if(Xe.__renderTarget=b,!Pe.__hasExternalTextures){const Ue=Math.max(1,b.width>>be),Ce=Math.max(1,b.height>>be);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,be,xe,Ue,Ce,b.depth,0,Re,le,null):t.texImage2D(oe,be,xe,Ue,Ce,0,Re,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),lt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,oe,Xe.__webglTexture,0,tt(b)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,oe,Xe.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(U,b,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){const K=b.depthTexture,oe=K&&K.isDepthTexture?K.type:null,be=w(b.stencilBuffer,oe),Re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;lt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(b),be,b.width,b.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(b),be,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,be,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,U)}else{const K=b.textures;for(let oe=0;oe<K.length;oe++){const be=K[oe],Re=s.convert(be.format,be.colorSpace),le=s.convert(be.type),xe=M(be.internalFormat,Re,le,be.normalized,be.colorSpace);lt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(b),xe,b.width,b.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(b),xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(U,b,ee){const K=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const oe=n.get(b.depthTexture);if(oe.__renderTarget=b,(!oe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),$e(i.TEXTURE_CUBE_MAP,b.depthTexture);const Pe=s.convert(b.depthTexture.format),Xe=s.convert(b.depthTexture.type);let Ue;b.depthTexture.format===Vi?Ue=i.DEPTH_COMPONENT24:b.depthTexture.format===Er&&(Ue=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ue,b.width,b.height,0,Pe,Xe,null)}}else te(b.depthTexture,0);const be=oe.__webglTexture,Re=tt(b),le=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+ee:i.TEXTURE_2D,xe=b.depthTexture.format===Er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Vi)lt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,le,be,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,xe,le,be,0);else if(b.depthTexture.format===Er)lt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,le,be,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,xe,le,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(U){const b=n.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const K=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",oe)};K.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=K}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(ee)for(let K=0;K<6;K++)ce(b.__webglFramebuffer[K],U,K);else{const K=U.texture.mipmaps;K&&K.length>0?ce(b.__webglFramebuffer[0],U,0):ce(b.__webglFramebuffer,U,0)}else if(ee){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),se(b.__webglDepthbuffer[K],U,!1);else{const oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,be)}}else{const K=U.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),se(b.__webglDepthbuffer,U,!1);else{const oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(U,b,ee){const K=n.get(U);b!==void 0&&Q(K.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&de(U)}function ge(U){const b=U.texture,ee=n.get(U),K=n.get(b);U.addEventListener("dispose",y);const oe=U.textures,be=U.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,a.memory.textures++),be){ee.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[le]=[];for(let xe=0;xe<b.mipmaps.length;xe++)ee.__webglFramebuffer[le][xe]=i.createFramebuffer()}else ee.__webglFramebuffer[le]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)ee.__webglFramebuffer[le]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Re)for(let le=0,xe=oe.length;le<xe;le++){const Pe=n.get(oe[le]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&lt(U)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){const xe=oe[le];ee.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[le]);const Pe=s.convert(xe.format,xe.colorSpace),Xe=s.convert(xe.type),Ue=M(xe.internalFormat,Pe,Xe,xe.normalized,xe.colorSpace,U.isXRRenderTarget===!0),Ce=tt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ue,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ee.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),se(ee.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),$e(i.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Q(ee.__webglFramebuffer[le][xe],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else Q(ee.__webglFramebuffer[le],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(b)&&L(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,xe=oe.length;le<xe;le++){const Pe=oe[le],Xe=n.get(Pe);let Ue=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Xe.__webglTexture),$e(Ue,Pe),Q(ee.__webglFramebuffer,U,Pe,i.COLOR_ATTACHMENT0+le,Ue,0),_(Pe)&&L(Ue)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(le=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),$e(le,b),b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Q(ee.__webglFramebuffer[xe],U,b,i.COLOR_ATTACHMENT0,le,xe);else Q(ee.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,le,0);_(b)&&L(le),t.unbindTexture()}U.depthBuffer&&de(U)}function ve(U){const b=U.textures;for(let ee=0,K=b.length;ee<K;ee++){const oe=b[ee];if(_(oe)){const be=A(U),Re=n.get(oe).__webglTexture;t.bindTexture(be,Re),L(be),t.unbindTexture()}}}const Fe=[],Te=[];function st(U){if(U.samples>0){if(lt(U)===!1){const b=U.textures,ee=U.width,K=U.height;let oe=i.COLOR_BUFFER_BIT;const be=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(U),le=b.length>1;if(le)for(let Pe=0;Pe<b.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const xe=U.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);const Xe=n.get(b[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,ee,K,0,0,ee,K,oe,i.NEAREST),c===!0&&(Fe.length=0,Te.length=0,Fe.push(i.COLOR_ATTACHMENT0+Pe),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Fe.push(be),Te.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Pe=0;Pe<b.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);const Xe=n.get(b[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){const b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function tt(U){return Math.min(r.maxSamples,U.samples)}function lt(U){const b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function q(U){const b=a.render.frame;h.get(U)!==b&&(h.set(U,b),U.update())}function pt(U,b){const ee=U.colorSpace,K=U.format,oe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ee!==Tn&&ee!==ir&&(xt.getTransfer(ee)===It?(K!==Nn||oe!==En)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",ee)),b}function Ae(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=J,this.resetTextureUnits=V,this.getTextureUnits=O,this.setTextureUnits=W,this.setTexture2D=te,this.setTexture2DArray=ie,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=ye,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JS(i,e){function t(n,r=ir){let s;const a=xt.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ff)return i.BYTE;if(n===df)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===Wl)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===gf)return i.ALPHA;if(n===_f)return i.RGB;if(n===Nn)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Er)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===Yl)return i.RED_INTEGER;if(n===Tr)return i.RG;if(n===Kl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===Ha||n===Va||n===Ga||n===Wa)if(a===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zl||n===Jl||n===Ql||n===ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===nc||n===ic||n===rc||n===sc||n===Xa||n===ac)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tc||n===nc)return a===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ic)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===rc)return s.COMPRESSED_R11_EAC;if(n===sc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Xa)return s.COMPRESSED_RG11_EAC;if(n===ac)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oc||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===oc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sc||n===Mc||n===bc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Sc)return a===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ec||n===Tc||n===qa||n===wc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ec)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new od(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bi({vertexShader:QS,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new Ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends rr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,p=null,m=null,x=null;const E=typeof XRWebGLBinding<"u",v=new tM,_={},L=t.getContextAttributes();let A=null,M=null;const w=[],T=[],P=new nt;let y=null,R=null;const N=new yn;N.viewport=new Ot;const F=new yn;F.viewport=new Ot;const z=[N,F],V=new D0;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let k=w[he];return k===void 0&&(k=new kc,w[he]=k),k.getTargetRaySpace()},this.getControllerGrip=function(he){let k=w[he];return k===void 0&&(k=new kc,w[he]=k),k.getGripSpace()},this.getHand=function(he){let k=w[he];return k===void 0&&(k=new kc,w[he]=k),k.getHandSpace()};function J(he){const k=T.indexOf(he.inputSource);if(k===-1)return;const G=w[k];G!==void 0&&(G.update(he.inputSource,he.frame,u||a),G.dispatchEvent({type:he.type,data:he.inputSource}))}function X(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",te);for(let he=0;he<w.length;he++){const k=T[he];k!==null&&(T[he]=null,w[he].disconnect(k))}O=null,W=null,v.reset();for(const he in _)delete _[he];if(e.setRenderTarget(A),m=null,p=null,f=null,r=null,M=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(P.width,P.height,!1),R!==null){const he=R.camera;he.fov=R.fov,he.zoom=R.zoom,he.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){o=he,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(he){u=he},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",X),r.addEventListener("inputsourceschange",te),L.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,ae=null,Q=null;L.depth&&(Q=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=L.stencil?Er:Vi,ae=L.stencil?Vs:vi);const se={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};f=this.getBinding(),p=f.createProjectionLayer(se),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new ei(p.textureWidth,p.textureHeight,{format:Nn,type:En,depthTexture:new ra(p.textureWidth,p.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const G={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ei(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function te(he){for(let k=0;k<he.removed.length;k++){const G=he.removed[k],ae=T.indexOf(G);ae>=0&&(T[ae]=null,w[ae].disconnect(G))}for(let k=0;k<he.added.length;k++){const G=he.added[k];let ae=T.indexOf(G);if(ae===-1){for(let se=0;se<w.length;se++)if(se>=T.length){T.push(G),ae=se;break}else if(T[se]===null){T[se]=G,ae=se;break}if(ae===-1)break}const Q=w[ae];Q&&Q.connect(G)}}const ie=new j,pe=new j;function me(he,k,G){ie.setFromMatrixPosition(k.matrixWorld),pe.setFromMatrixPosition(G.matrixWorld);const ae=ie.distanceTo(pe),Q=k.projectionMatrix.elements,se=G.projectionMatrix.elements,ce=Q[14]/(Q[10]-1),de=Q[14]/(Q[10]+1),ye=(Q[9]+1)/Q[5],ge=(Q[9]-1)/Q[5],ve=(Q[8]-1)/Q[0],Fe=(se[8]+1)/se[0],Te=ce*ve,st=ce*Fe,tt=ae/(-ve+Fe),lt=tt*-ve;if(k.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(lt),he.translateZ(tt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Q[10]===-1)he.projectionMatrix.copy(k.projectionMatrix),he.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const q=ce+tt,pt=de+tt,Ae=Te-lt,U=st+(ae-lt),b=ye*de/pt*q,ee=ge*de/pt*q;he.projectionMatrix.makePerspective(Ae,U,b,ee,q,pt),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function Ne(he,k){k===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(k.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let k=he.near,G=he.far;v.texture!==null&&(v.depthNear>0&&(k=v.depthNear),v.depthFar>0&&(G=v.depthFar)),V.near=F.near=N.near=k,V.far=F.far=N.far=G,(O!==V.near||W!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),O=V.near,W=V.far),V.layers.mask=he.layers.mask|6,N.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;const ae=he.parent,Q=V.cameras;Ne(V,ae);for(let se=0;se<Q.length;se++)Ne(Q[se],ae);Q.length===2?me(V,N,F):V.projectionMatrix.copy(N.projectionMatrix),R===null&&he.isPerspectiveCamera&&(R={camera:he,fov:he.fov,zoom:he.zoom}),we(he,V,ae)};function we(he,k,G){G===null?he.matrix.copy(k.matrixWorld):(he.matrix.copy(G.matrixWorld),he.matrix.invert(),he.matrix.multiply(k.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(k.projectionMatrix),he.projectionMatrixInverse.copy(k.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Kr*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(he){c=he,p!==null&&(p.fixedFoveation=he),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=he)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(V)},this.getCameraTexture=function(he){return _[he]};let dt=null;function $e(he,k){if(h=k.getViewerPose(u||a),x=k,h!==null){const G=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ae=!1;G.length!==V.cameras.length&&(V.cameras.length=0,ae=!0);for(let de=0;de<G.length;de++){const ye=G[de];let ge=null;if(m!==null)ge=m.getViewport(ye);else{const Fe=f.getViewSubImage(p,ye);ge=Fe.viewport,de===0&&(e.setRenderTargetTextures(M,Fe.colorTexture,Fe.depthStencilTexture),e.setRenderTarget(M))}let ve=z[de];ve===void 0&&(ve=new yn,ve.layers.enable(de),ve.viewport=new Ot,z[de]=ve),ve.matrix.fromArray(ye.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(ye.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(ge.x,ge.y,ge.width,ge.height),de===0&&(V.matrix.copy(ve.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ae===!0&&V.cameras.push(ve)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=n.getBinding();const de=f.getDepthInformation(G[0]);de&&de.isValid&&de.texture&&v.init(de,r.renderState)}if(Q&&Q.includes("camera-access")&&E){e.state.unbindTexture(),f=n.getBinding();for(let de=0;de<G.length;de++){const ye=G[de].camera;if(ye){let ge=_[ye];ge||(ge=new od,_[ye]=ge);const ve=f.getCameraImage(ye);ge.sourceTexture=ve}}}}for(let G=0;G<w.length;G++){const ae=T[G],Q=w[G];ae!==null&&Q!==void 0&&Q.update(ae,k,u||a)}dt&&dt(he,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),x=null}const ot=new Ed;ot.setAnimationLoop($e),this.setAnimationLoop=function(he){dt=he},this.dispose=function(){}}}const iM=new ut,Qd=new ft;Qd.set(-1,0,0,0,1,0,0,0,1);function rM(i,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,cd(i)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function r(v,_,L,A,M){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(v,_):_.isMeshLambertMaterial?(s(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(v,_),f(v,_)):_.isMeshPhongMaterial?(s(v,_),h(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(v,_),p(v,_),_.isMeshPhysicalMaterial&&m(v,_,M)):_.isMeshMatcapMaterial?(s(v,_),x(v,_)):_.isMeshDepthMaterial?s(v,_):_.isMeshDistanceMaterial?(s(v,_),E(v,_)):_.isMeshNormalMaterial?s(v,_):_.isLineBasicMaterial?(a(v,_),_.isLineDashedMaterial&&o(v,_)):_.isPointsMaterial?c(v,_,L,A):_.isSpriteMaterial?u(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===xn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===xn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const L=e.get(_),A=L.envMap,M=L.envMapRotation;A&&(v.envMap.value=A,v.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Qd),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function a(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function o(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function c(v,_,L,A){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*L,v.scale.value=A*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function h(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function f(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function p(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function m(v,_,L){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===xn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.retroreflectivity>0&&(v.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,_){_.matcap&&(v.matcap.value=_.matcap)}function E(v,_){const L=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sM(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const T=w.program;n.uniformBlockBinding(M,T)}function u(M,w){let T=r[M.id];T===void 0&&(v(M),T=h(M),r[M.id]=T,M.addEventListener("dispose",L));const P=w.program;n.updateUBOMapping(M,P);const y=e.render.frame;s[M.id]!==y&&(p(M),s[M.id]=y)}function h(M){const w=f();M.__bindingPointIndex=w;const T=i.createBuffer(),P=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const w=r[M.id],T=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,R=T.length;y<R;y++){const N=T[y];if(Array.isArray(N))for(let F=0,z=N.length;F<z;F++)m(N[F],y,F,P);else m(N,y,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,w,T,P){if(E(M,w,T,P)===!0){const y=M.__offset,R=M.value;if(Array.isArray(R)){let N=0;for(let F=0;F<R.length;F++){const z=R[F],V=_(z);x(z,M.__data,N),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(N+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(R,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function x(M,w,T){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,T)}function E(M,w,T,P){const y=M.value,R=w+"_"+T;if(P[R]===void 0)return typeof y=="number"||typeof y=="boolean"?P[R]=y:ArrayBuffer.isView(y)?P[R]=y.slice():P[R]=y.clone(),!0;{const N=P[R];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return P[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function v(M){const w=M.uniforms;let T=0;const P=16;for(let R=0,N=w.length;R<N;R++){const F=Array.isArray(w[R])?w[R]:[w[R]];for(let z=0,V=F.length;z<V;z++){const O=F[z],W=Array.isArray(O.value)?O.value:[O.value];for(let J=0,X=W.length;J<X;J++){const te=W[J],ie=_(te),pe=T%P,me=pe%ie.boundary,Ne=pe+me;T+=me,Ne!==0&&P-Ne<ie.storage&&(T+=P-Ne),O.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=ie.storage}}}const y=T%P;return y>0&&(T+=P-y),M.__size=T,M.__cache={},this}function _(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",M),w}function L(M){const w=M.target;w.removeEventListener("dispose",L);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function A(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:u,dispose:A}}const aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function oM(){return Ai===null&&(Ai=new su(aM,16,16,Tr,xi),Ai.name="DFG_LUT",Ai.minFilter=qt,Ai.magFilter=qt,Ai.wrapS=In,Ai.wrapT=In,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class lM{constructor(e={}){const{canvas:t=n_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=En}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const E=m,v=new Set([jl,Kl,Yl]),_=new Set([En,vi,Hs,Vs,Xl,ql]),L=new Uint32Array(4),A=new Int32Array(4),M=new j;let w=null,T=null;const P=[],y=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1,z=null,V=null,O=null,W=null;this._outputColorSpace=$t;let J=0,X=0,te=null,ie=-1,pe=null;const me=new Ot,Ne=new Ot;let we=null;const dt=new Je(0);let $e=0,ot=t.width,he=t.height,k=1,G=null,ae=null;const Q=new Ot(0,0,ot,he),se=new Ot(0,0,ot,he);let ce=!1;const de=new ou;let ye=!1,ge=!1;const ve=new ut,Fe=new j,Te=new Ot,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function lt(){return te===null?k:1}let q=n;function pt(D,$){return t.getContext(D,$)}let Ae,U,b,ee,K,oe,be,Re,le,xe,Pe,Xe,Ue,Ce,je,et,ct,Z,Ie,_e,De,ze,Se;try{const D={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dl}`),t.addEventListener("webglcontextlost",Bt,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),q===null){const $="webgl2";if(q=pt($,D),q===null)throw pt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(D){throw t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),rt("WebGLRenderer: "+D.message),D}function Ee(){Ae=new oy(q),Ae.init(),De=new JS(q,Ae),U=new Zx(q,Ae,e,De),b=new jS(q,Ae),U.reversedDepthBuffer&&p&&b.buffers.depth.setReversed(!0),V=q.createFramebuffer(),O=q.createFramebuffer(),W=q.createFramebuffer(),ee=new uy(q),K=new FS,oe=new ZS(q,Ae,b,K,U,De,ee),be=new ay(N),Re=new q0(q),ze=new Kx(q,Re),le=new ly(q,Re,ee,ze),xe=new fy(q,le,Re,ze,ee),Z=new hy(q,U,oe),je=new Jx(K),Pe=new US(N,be,Ae,U,ze,je),Xe=new rM(N,K),Ue=new BS,Ce=new WS(Ae),ct=new Yx(N,be,b,xe,x,c),et=new KS(N,xe,U),Se=new sM(q,ee,U,b),Ie=new jx(q,Ae,ee),_e=new cy(q,Ae,ee),ee.programs=Pe.programs,N.capabilities=U,N.extensions=Ae,N.properties=K,N.renderLists=Ue,N.shadowMap=et,N.state=b,N.info=ee}E!==En&&(R=new py(E,t.width,t.height,o,r,s));const Ke=new nM(N,q);this.xr=Ke,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const D=Ae.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ae.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(D){D!==void 0&&(k=D,this.setSize(ot,he,!1))},this.getSize=function(D){return D.set(ot,he)},this.setSize=function(D,$,ue=!0){if(Ke.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=D,he=$,t.width=Math.floor(D*k),t.height=Math.floor($*k),ue===!0&&(t.style.width=D+"px",t.style.height=$+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(ot*k,he*k).floor()},this.setDrawingBufferSize=function(D,$,ue){ot=D,he=$,k=ue,t.width=Math.floor(D*ue),t.height=Math.floor($*ue),this.setViewport(0,0,D,$)},this.setEffects=function(D){if(E===En){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let $=0;$<D.length;$++)if(D[$].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(me)},this.getViewport=function(D){return D.copy(Q)},this.setViewport=function(D,$,ue,ne){D.isVector4?Q.set(D.x,D.y,D.z,D.w):Q.set(D,$,ue,ne),b.viewport(me.copy(Q).multiplyScalar(k).round())},this.getScissor=function(D){return D.copy(se)},this.setScissor=function(D,$,ue,ne){D.isVector4?se.set(D.x,D.y,D.z,D.w):se.set(D,$,ue,ne),b.scissor(Ne.copy(se).multiplyScalar(k).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(D){b.setScissorTest(ce=D)},this.setOpaqueSort=function(D){G=D},this.setTransparentSort=function(D){ae=D},this.getClearColor=function(D){return D.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,ue=!0){let ne=0;if(D){let re=!1;if(te!==null){const Be=te.texture.format;re=v.has(Be)}if(re){const Be=te.texture.type,Le=_.has(Be),Oe=ct.getClearColor(),Ye=ct.getClearAlpha(),Ze=Oe.r,mt=Oe.g,at=Oe.b;Le?(L[0]=Ze,L[1]=mt,L[2]=at,L[3]=Ye,q.clearBufferuiv(q.COLOR,0,L)):(A[0]=Ze,A[1]=mt,A[2]=at,A[3]=Ye,q.clearBufferiv(q.COLOR,0,A))}else ne|=q.COLOR_BUFFER_BIT}$&&(ne|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),z=D},this.dispose=function(){t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),ct.dispose(),Ue.dispose(),Ce.dispose(),K.dispose(),be.dispose(),xe.dispose(),ze.dispose(),Se.dispose(),Pe.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Yo),Ke.removeEventListener("sessionend",Ko),Xn.stop()};function Bt(D){D.preventDefault(),Ka("WebGLRenderer: Context Lost."),F=!0}function Rt(){Ka("WebGLRenderer: Context Restored."),F=!1;const D=ee.autoReset,$=et.enabled,ue=et.autoUpdate,ne=et.needsUpdate,re=et.type;Ee(),ee.autoReset=D,et.enabled=$,et.autoUpdate=ue,et.needsUpdate=ne,et.type=re}function Pn(D){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Wn(D){const $=D.target;$.removeEventListener("dispose",Wn),sh($)}function sh(D){xa(D),K.remove(D)}function xa(D){const $=K.get(D).programs;$!==void 0&&($.forEach(function(ue){Pe.releaseProgram(ue)}),D.isShaderMaterial&&Pe.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,ue,ne,re,Be){$===null&&($=st);const Le=re.isMesh&&re.matrixWorld.determinantAffine()<0,Oe=oh(D,$,ue,ne,re);b.setMaterial(ne,Le);let Ye=ue.index,Ze=1;if(ne.wireframe===!0){if(Ye=le.getWireframeAttribute(ue),Ye===void 0)return;Ze=2}const mt=ue.drawRange,at=ue.attributes.position;let Ve=mt.start*Ze,Ct=(mt.start+mt.count)*Ze;Be!==null&&(Ve=Math.max(Ve,Be.start*Ze),Ct=Math.min(Ct,(Be.start+Be.count)*Ze)),Ye!==null?(Ve=Math.max(Ve,0),Ct=Math.min(Ct,Ye.count)):at!=null&&(Ve=Math.max(Ve,0),Ct=Math.min(Ct,at.count));const Wt=Ct-Ve;if(Wt<0||Wt===1/0)return;ze.setup(re,ne,Oe,ue,Ye);let Mt,Pt=Ie;if(Ye!==null&&(Mt=Re.get(Ye),Pt=_e,Pt.setIndex(Mt)),re.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*lt()),Pt.setMode(q.LINES)):Pt.setMode(q.TRIANGLES);else if(re.isLine){let an=ne.linewidth;an===void 0&&(an=1),b.setLineWidth(an*lt()),re.isLineSegments?Pt.setMode(q.LINES):re.isLineLoop?Pt.setMode(q.LINE_LOOP):Pt.setMode(q.LINE_STRIP)}else re.isPoints?Pt.setMode(q.POINTS):re.isSprite&&Pt.setMode(q.TRIANGLES);if(re.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Pt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const an=re._multiDrawStarts,Ge=re._multiDrawCounts,bt=re._multiDrawCount,yt=Ye?Re.get(Ye).bytesPerElement:1,Mn=K.get(ne).currentProgram.getUniforms();for(let qn=0;qn<bt;qn++)Mn.setValue(q,"_gl_DrawID",qn),Pt.render(an[qn]/yt,Ge[qn])}else if(re.isInstancedMesh)Pt.renderInstances(Ve,Wt,re.count);else if(ue.isInstancedBufferGeometry){const an=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ge=Math.min(ue.instanceCount,an);Pt.renderInstances(Ve,Wt,Ge)}else Pt.render(Ve,Wt)};function C(D,$,ue,ne){z!==null&&D.isNodeMaterial&&z.setObject(ne,D),ye===!0&&je.setState(D,ue,!1),D.transparent===!0&&D.side===jn&&D.forceSinglePass===!1?(D.side=xn,D.needsUpdate=!0,ws(D,$,ne),D.side=zi,D.needsUpdate=!0,ws(D,$,ne),D.side=jn):ws(D,$,ne)}this.compile=function(D,$,ue=null){ue===null&&(ue=D),z!==null&&z.renderStart(D,$,ue),T=Ce.get(ue),T.init($),y.push(T),ue.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(T.pushLight(re),re.castShadow&&T.pushShadow(re))}),D!==ue&&D.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(T.pushLight(re),re.castShadow&&T.pushShadow(re))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),ge=this.localClippingEnabled,ye=je.init(this.clippingPlanes,ge),ye===!0&&je.setGlobalState(this.clippingPlanes,$),z!==null&&et.render(T.state.shadowsArray,ue,$);const ne=new Set;return D.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Be=re.material;if(Be)if(Array.isArray(Be))for(let Le=0;Le<Be.length;Le++){const Oe=Be[Le];C(Oe,ue,$,re),ne.add(Oe)}else C(Be,ue,$,re),ne.add(Be)}),T=y.pop(),z!==null&&z.renderEnd(),ne},this.compileAsync=function(D,$,ue=null){const ne=this.compile(D,$,ue);return new Promise(re=>{function Be(){if(ne.forEach(function(Le){const Ye=K.get(Le).currentProgram;(Ye===void 0||Ye.isReady())&&ne.delete(Le)}),ne.size===0){re(D);return}setTimeout(Be,10)}Ae.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Nr=null;function Tt(D){Nr&&Nr(D)}function Yo(){Xn.stop()}function Ko(){Xn.start()}const Xn=new Ed;Xn.setAnimationLoop(Tt),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(D){Nr=D,Ke.setAnimationLoop(D),D===null?Xn.stop():Xn.start()},Ke.addEventListener("sessionstart",Yo),Ke.addEventListener("sessionend",Ko),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(D,$);const ue=Ke.enabled===!0&&Ke.isPresenting===!0,ne=R!==null&&(te===null||ue)&&R.begin(N,te);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera($),$=Ke.getCamera()),D.isScene===!0&&D.onBeforeRender(N,D,$,te),T=Ce.get(D,y.length),T.init($),T.state.textureUnits=oe.getTextureUnits(),y.push(T),ve.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),de.setFromProjectionMatrix(ve,yi,$.reversedDepth),ge=this.localClippingEnabled,ye=je.init(this.clippingPlanes,ge),w=Ue.get(D,P.length),w.init(),P.push(w),Ke.enabled===!0&&Ke.isPresenting===!0){const Le=N.xr.getDepthSensingMesh();Le!==null&&Li(Le,$,-1/0,N.sortObjects)}Li(D,$,0,N.sortObjects),w.finish(),z!==null&&z.updateLights(T.state.lightsArray),N.sortObjects===!0&&w.sort(G,ae),tt=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,tt&&ct.addToRenderList(w,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&je.beginShadows();const re=T.state.shadowsArray;if(et.render(re,D,$),ye===!0&&je.endShadows(),(ne&&R.hasRenderPass())===!1){const Le=w.opaque,Oe=w.transmissive;if(T.setupLights(),$.isArrayCamera){const Ye=$.cameras;if(Oe.length>0)for(let Ze=0,mt=Ye.length;Ze<mt;Ze++){const at=Ye[Ze];Zo(Le,Oe,D,at)}tt&&ct.render(D);for(let Ze=0,mt=Ye.length;Ze<mt;Ze++){const at=Ye[Ze];jo(w,D,at,at.viewport)}}else Oe.length>0&&Zo(Le,Oe,D,$),tt&&ct.render(D),jo(w,D,$)}te!==null&&X===0&&(oe.updateMultisampleRenderTarget(te),oe.updateRenderTargetMipmap(te)),ne&&R.end(N),D.isScene===!0&&D.onAfterRender(N,D,$),ze.resetDefaultState(),ie=-1,pe=null,y.pop(),y.length>0?(T=y[y.length-1],oe.setTextureUnits(T.state.textureUnits),ye===!0&&je.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,z!==null&&z.renderEnd()};function Li(D,$,ue,ne){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)ue=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLightProbeGrid)T.pushLightProbeGrid(D);else if(D.isLight)T.pushLight(D),D.castShadow&&T.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(de)){ne&&Te.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ve);const Le=xe.update(D),Oe=D.material;Oe.visible&&w.push(D,Le,Oe,ue,Te.z,null,$)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(de))){const Le=xe.update(D),Oe=D.material;if(ne&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Te.copy(D.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Te.copy(Le.boundingSphere.center)),Te.applyMatrix4(D.matrixWorld).applyMatrix4(ve)),Array.isArray(Oe)){const Ye=Le.groups;for(let Ze=0,mt=Ye.length;Ze<mt;Ze++){const at=Ye[Ze],Ve=Oe[at.materialIndex];Ve&&Ve.visible&&w.push(D,Le,Ve,ue,Te.z,at,$)}}else Oe.visible&&w.push(D,Le,Oe,ue,Te.z,null,$)}}const Be=D.children;for(let Le=0,Oe=Be.length;Le<Oe;Le++)Li(Be[Le],$,ue,ne)}function jo(D,$,ue,ne){const{opaque:re,transmissive:Be,transparent:Le}=D;T.setupLightsView(ue),ye===!0&&je.setGlobalState(N.clippingPlanes,ue),ne&&b.viewport(me.copy(ne)),re.length>0&&Ts(re,$,ue),Be.length>0&&Ts(Be,$,ue),Le.length>0&&Ts(Le,$,ue),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Zo(D,$,ue,ne){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ne.id]===void 0){const Ve=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ne.id]=new ei(1,1,{generateMipmaps:!0,type:Ve?xi:En,minFilter:Zn,samples:Math.max(4,U.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Be=T.state.transmissionRenderTarget[ne.id],Le=ne.viewport||me;Be.setSize(Le.z*N.transmissionResolutionScale,Le.w*N.transmissionResolutionScale);const Oe=N.getRenderTarget(),Ye=N.getActiveCubeFace(),Ze=N.getActiveMipmapLevel();N.setRenderTarget(Be),N.getClearColor(dt),$e=N.getClearAlpha(),$e<1&&N.setClearColor(16777215,.5),N.clear(),tt&&ct.render(ue);const mt=N.toneMapping;N.toneMapping=gi;const at=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),T.setupLightsView(ne),ye===!0&&je.setGlobalState(N.clippingPlanes,ne),Ts(D,ue,ne),oe.updateMultisampleRenderTarget(Be),oe.updateRenderTargetMipmap(Be),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ct=0,Wt=$.length;Ct<Wt;Ct++){const Mt=$[Ct],{object:Pt,geometry:an,material:Ge,group:bt}=Mt;if(Ge.side===jn&&Pt.layers.test(ne.layers)){const yt=Ge.side;Ge.side=xn,Ge.needsUpdate=!0,Jo(Pt,ue,ne,an,Ge,bt),Ge.side=yt,Ge.needsUpdate=!0,Ve=!0}}Ve===!0&&(oe.updateMultisampleRenderTarget(Be),oe.updateRenderTargetMipmap(Be))}N.setRenderTarget(Oe,Ye,Ze),N.setClearColor(dt,$e),at!==void 0&&(ne.viewport=at),N.toneMapping=mt}function Ts(D,$,ue){const ne=$.isScene===!0?$.overrideMaterial:null;for(let re=0,Be=D.length;re<Be;re++){const Le=D[re],{object:Oe,geometry:Ye,group:Ze}=Le;let mt=Le.material;mt.allowOverride===!0&&ne!==null&&(mt=ne),Oe.layers.test(ue.layers)&&Jo(Oe,$,ue,Ye,mt,Ze)}}function Jo(D,$,ue,ne,re,Be){z!==null&&re.isNodeMaterial&&z.setObject(D,re),D.onBeforeRender(N,$,ue,ne,re,Be),D.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),re.onBeforeRender(N,$,ue,ne,D,Be),re.transparent===!0&&re.side===jn&&re.forceSinglePass===!1?(re.side=xn,re.needsUpdate=!0,N.renderBufferDirect(ue,$,ne,re,D,Be),re.side=zi,re.needsUpdate=!0,N.renderBufferDirect(ue,$,ne,re,D,Be),re.side=jn):N.renderBufferDirect(ue,$,ne,re,D,Be),D.onAfterRender(N,$,ue,ne,re,Be)}function ws(D,$,ue){$.isScene!==!0&&($=st);const ne=K.get(D),re=T.state.lights,Be=T.state.shadowsArray,Le=re.state.version,Oe=Pe.getParameters(D,re.state,Be,$,ue,T.state.lightProbeGridArray),Ye=Pe.getProgramCacheKey(Oe);let Ze=ne.programs;ne.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?$.environment:null,ne.fog=$.fog;const mt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ne.envMap=be.get(D.envMap||ne.environment,mt),ne.envMapRotation=ne.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,Ze===void 0&&(D.addEventListener("dispose",Wn),Ze=new Map,ne.programs=Ze);let at=Ze.get(Ye);if(at!==void 0){if(ne.currentProgram===at&&ne.lightsStateVersion===Le)return el(D,Oe),at}else Oe.uniforms=Pe.getUniforms(D),z!==null&&D.isNodeMaterial&&z.build(D,ue,Oe),D.onBeforeCompile(Oe,N),at=Pe.acquireProgram(Oe,Ye),Ze.set(Ye,at),ne.uniforms=Oe.uniforms;const Ve=ne.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ve.clippingPlanes=je.uniform),el(D,Oe),ne.needsLights=ch(D),ne.lightsStateVersion=Le,ne.needsLights&&(Ve.ambientLightColor.value=re.state.ambient,Ve.lightProbe.value=re.state.probe,Ve.sunLights.value=re.state.sun,Ve.sunLightShadows.value=re.state.sunShadow,Ve.directionalLights.value=re.state.directional,Ve.directionalLightShadows.value=re.state.directionalShadow,Ve.spotLights.value=re.state.spot,Ve.spotLightShadows.value=re.state.spotShadow,Ve.rectAreaLights.value=re.state.rectArea,Ve.ltc_1.value=re.state.rectAreaLTC1,Ve.ltc_2.value=re.state.rectAreaLTC2,Ve.pointLights.value=re.state.point,Ve.pointLightShadows.value=re.state.pointShadow,Ve.hemisphereLights.value=re.state.hemi,Ve.sunShadowMatrix.value=re.state.sunShadowMatrix,Ve.sunShadowCascade.value=re.state.sunShadowCascade,Ve.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ve.spotLightMatrix.value=re.state.spotLightMatrix,Ve.spotLightMap.value=re.state.spotLightMap,Ve.pointShadowMatrix.value=re.state.pointShadowMatrix),ne.lightProbeGrid=T.state.lightProbeGridArray.length>0,ne.currentProgram=at,ne.uniformsList=null,at}function Qo(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=Oo.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function el(D,$){const ue=K.get(D);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function ah(D,$){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;M.setFromMatrixPosition($.matrixWorld);for(let ue=0,ne=D.length;ue<ne;ue++){const re=D[ue];if(re.texture!==null&&re.boundingBox.containsPoint(M))return re}return null}function oh(D,$,ue,ne,re){$.isScene!==!0&&($=st),oe.resetTextureUnits();const Be=$.fog,Le=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?$.environment:null,Oe=te===null?N.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:xt.workingColorSpace,Ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ze=be.get(ne.envMap||Le,Ye),mt=ne.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,at=!!ue.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ve=!!ue.morphAttributes.position,Ct=!!ue.morphAttributes.normal,Wt=!!ue.morphAttributes.color;let Mt=gi;ne.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Mt=N.toneMapping);const Pt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,an=Pt!==void 0?Pt.length:0,Ge=K.get(ne),bt=T.state.lights;if(ye===!0&&(ge===!0||D!==pe)){const Ft=D===pe&&ne.id===ie;je.setState(ne,D,Ft)}let yt=!1;ne.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==bt.state.version||Ge.outputColorSpace!==Oe||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==Ze||ne.fog===!0&&Ge.fog!==Be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==je.numPlanes||Ge.numIntersection!==je.numIntersection)||Ge.vertexAlphas!==mt||Ge.vertexTangents!==at||Ge.morphTargets!==Ve||Ge.morphNormals!==Ct||Ge.morphColors!==Wt||Ge.toneMapping!==Mt||Ge.morphTargetsCount!==an||!!Ge.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ge.__version=ne.version);let Mn=Ge.currentProgram;yt===!0&&(Mn=ws(ne,$,re),z&&ne.isNodeMaterial&&z.onUpdateProgram(ne,Mn,Ge));let qn=!1,Ii=!1,mr=!1;const wt=Mn.getUniforms(),Xt=Ge.uniforms;if(b.useProgram(Mn.program)&&(qn=!0,Ii=!0,mr=!0),ne.id!==ie&&(ie=ne.id,Ii=!0),Ge.needsLights){const Ft=ah(T.state.lightProbeGridArray,re);Ge.lightProbeGrid!==Ft&&(Ge.lightProbeGrid=Ft,Ii=!0)}if(qn||pe!==D){b.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),wt.setValue(q,"projectionMatrix",D.projectionMatrix),wt.setValue(q,"viewMatrix",D.matrixWorldInverse);const Di=wt.map.cameraPosition;Di!==void 0&&Di.setValue(q,Fe.setFromMatrixPosition(D.matrixWorld)),U.logarithmicDepthBuffer&&wt.setValue(q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&wt.setValue(q,"isOrthographic",D.isOrthographicCamera===!0),pe!==D&&(pe=D,Ii=!0,mr=!0)}if(Ge.needsLights&&(bt.state.sunShadowMap.length>0&&wt.setValue(q,"sunShadowMap",bt.state.sunShadowMap,oe),bt.state.directionalShadowMap.length>0&&wt.setValue(q,"directionalShadowMap",bt.state.directionalShadowMap,oe),bt.state.spotShadowMap.length>0&&wt.setValue(q,"spotShadowMap",bt.state.spotShadowMap,oe),bt.state.pointShadowMap.length>0&&wt.setValue(q,"pointShadowMap",bt.state.pointShadowMap,oe)),re.isSkinnedMesh){wt.setOptional(q,re,"bindMatrix"),wt.setOptional(q,re,"bindMatrixInverse");const Ft=re.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),wt.setValue(q,"boneTexture",Ft.boneTexture,oe))}re.isBatchedMesh&&(wt.setOptional(q,re,"batchingTexture"),wt.setValue(q,"batchingTexture",re._matricesTexture,oe),wt.setOptional(q,re,"batchingIdTexture"),wt.setValue(q,"batchingIdTexture",re._indirectTexture,oe),wt.setOptional(q,re,"batchingColorTexture"),re._colorsTexture!==null&&wt.setValue(q,"batchingColorTexture",re._colorsTexture,oe));const ci=ue.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&Z.update(re,ue,Mn),(Ii||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,wt.setValue(q,"receiveShadow",re.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&$.environment!==null&&(Xt.envMapIntensity.value=$.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=oM()),Ii){if(wt.setValue(q,"toneMappingExposure",N.toneMappingExposure),Ge.needsLights&&lh(Xt,mr),Be&&ne.fog===!0&&Xe.refreshFogUniforms(Xt,Be),Xe.refreshMaterialUniforms(Xt,ne,k,he,T.state.transmissionRenderTarget[D.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ft=Ge.lightProbeGrid;Xt.probesSH.value=Ft.texture,Xt.probesMin.value.copy(Ft.boundingBox.min),Xt.probesMax.value.copy(Ft.boundingBox.max),Xt.probesResolution.value.copy(Ft.resolution)}Oo.upload(q,Qo(Ge),Xt,oe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Oo.upload(q,Qo(Ge),Xt,oe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&wt.setValue(q,"center",re.center),wt.setValue(q,"modelViewMatrix",re.modelViewMatrix),wt.setValue(q,"normalMatrix",re.normalMatrix),wt.setValue(q,"modelMatrix",re.matrixWorld),ne.uniformsGroups!==void 0){const Ft=ne.uniformsGroups;for(let Di=0,gr=Ft.length;Di<gr;Di++){const nl=Ft[Di];Se.update(nl,Mn),Se.bind(nl,Mn)}}return Mn}function lh(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.sunLights.needsUpdate=$,D.sunLightShadows.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function ch(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(D,$,ue){const ne=K.get(D);ne.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),K.get(D.texture).__webglTexture=$,K.get(D.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ue,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const ue=K.get(D);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(D,$=0,ue=0){te=D,J=$,X=ue;let ne=null,re=!1,Be=!1;if(D){const Oe=K.get(D);if(Oe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(q.FRAMEBUFFER,Oe.__webglFramebuffer),me.copy(D.viewport),Ne.copy(D.scissor),we=D.scissorTest,b.viewport(me),b.scissor(Ne),b.setScissorTest(we),ie=-1;return}else if(Oe.__webglFramebuffer===void 0)oe.setupRenderTarget(D);else if(Oe.__hasExternalTextures)oe.rebindTextures(D,K.get(D.texture).__webglTexture,K.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const mt=D.depthTexture;if(Oe.__boundDepthTexture!==mt){if(mt!==null&&K.has(mt)&&(D.width!==mt.image.width||D.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(D)}}const Ye=D.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Be=!0);const Ze=K.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?ne=Ze[$][ue]:ne=Ze[$],re=!0):D.samples>0&&oe.useMultisampledRTT(D)===!1?ne=K.get(D).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[ue]:ne=Ze,me.copy(D.viewport),Ne.copy(D.scissor),we=D.scissorTest}else me.copy(Q).multiplyScalar(k).floor(),Ne.copy(se).multiplyScalar(k).floor(),we=ce;if(ue!==0&&(ne=V),b.bindFramebuffer(q.FRAMEBUFFER,ne)&&b.drawBuffers(D,ne),b.viewport(me),b.scissor(Ne),b.setScissorTest(we),re){const Oe=K.get(D.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Oe.__webglTexture,ue)}else if(Be){const Oe=$;for(let Ye=0;Ye<D.textures.length;Ye++){const Ze=K.get(D.textures[Ye]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,ue,Oe)}}else if(D!==null&&ue!==0){const Oe=K.get(D.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Oe.__webglTexture,ue)}ie=-1};function tl(D){const $=K.get(D);return($.__readFormat!==D.format||$.__readType!==D.type)&&($.__readFormat=D.format,$.__readType=D.type,$.__formatReadable=U.textureFormatReadable(D.format),$.__typeReadable=U.textureTypeReadable(D.type)),$}this.readRenderTargetPixels=function(D,$,ue,ne,re,Be,Le,Oe=0){if(!(D&&D.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=K.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Le!==void 0&&(Ye=Ye[Le]),Ye){b.bindFramebuffer(q.FRAMEBUFFER,Ye);try{const Ze=D.textures[Oe],mt=Ze.format,at=Ze.type;D.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe);const Ve=tl(Ze);if(Ve.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-ne&&ue>=0&&ue<=D.height-re&&q.readPixels($,ue,ne,re,De.convert(mt),De.convert(at),Be)}finally{const Ze=te!==null?K.get(te).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(D,$,ue,ne,re,Be,Le,Oe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=K.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Le!==void 0&&(Ye=Ye[Le]),Ye)if($>=0&&$<=D.width-ne&&ue>=0&&ue<=D.height-re){b.bindFramebuffer(q.FRAMEBUFFER,Ye);const Ze=D.textures[Oe],mt=Ze.format,at=Ze.type;D.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe);const Ve=tl(Ze);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ct),q.bufferData(q.PIXEL_PACK_BUFFER,Be.byteLength,q.STREAM_READ),q.readPixels($,ue,ne,re,De.convert(mt),De.convert(at),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Wt=te!==null?K.get(te).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,Wt);const Mt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await i_(q,Mt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ct),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Be),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Ct),q.deleteSync(Mt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,ue=0){const ne=Math.pow(2,-ue),re=Math.floor(D.image.width*ne),Be=Math.floor(D.image.height*ne),Le=$!==null?$.x:0,Oe=$!==null?$.y:0;oe.setTexture2D(D,0),q.copyTexSubImage2D(q.TEXTURE_2D,ue,0,0,Le,Oe,re,Be),b.unbindTexture()},this.copyTextureToTexture=function(D,$,ue=null,ne=null,re=0,Be=0){let Le,Oe,Ye,Ze,mt,at,Ve,Ct,Wt;const Mt=D.isCompressedTexture?D.mipmaps[Be]:D.image;if(ue!==null)Le=ue.max.x-ue.min.x,Oe=ue.max.y-ue.min.y,Ye=ue.isBox3?ue.max.z-ue.min.z:1,Ze=ue.min.x,mt=ue.min.y,at=ue.isBox3?ue.min.z:0;else{const Xt=Math.pow(2,-re);Le=Math.floor(Mt.width*Xt),Oe=Math.floor(Mt.height*Xt),D.isDataArrayTexture?Ye=Mt.depth:D.isData3DTexture?Ye=Math.floor(Mt.depth*Xt):Ye=1,Ze=0,mt=0,at=0}ne!==null?(Ve=ne.x,Ct=ne.y,Wt=ne.z):(Ve=0,Ct=0,Wt=0);const Pt=De.convert($.format),an=De.convert($.type);let Ge;$.isData3DTexture?(oe.setTexture3D($,0),Ge=q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(oe.setTexture2DArray($,0),Ge=q.TEXTURE_2D_ARRAY):(oe.setTexture2D($,0),Ge=q.TEXTURE_2D),b.activeTexture(q.TEXTURE0),b.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),b.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),b.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment);const bt=b.getParameter(q.UNPACK_ROW_LENGTH),yt=b.getParameter(q.UNPACK_IMAGE_HEIGHT),Mn=b.getParameter(q.UNPACK_SKIP_PIXELS),qn=b.getParameter(q.UNPACK_SKIP_ROWS),Ii=b.getParameter(q.UNPACK_SKIP_IMAGES);b.pixelStorei(q.UNPACK_ROW_LENGTH,Mt.width),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Mt.height),b.pixelStorei(q.UNPACK_SKIP_PIXELS,Ze),b.pixelStorei(q.UNPACK_SKIP_ROWS,mt),b.pixelStorei(q.UNPACK_SKIP_IMAGES,at);const mr=D.isDataArrayTexture||D.isData3DTexture,wt=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const Xt=K.get(D),ci=K.get($),Ft=K.get(Xt.__renderTarget),Di=K.get(ci.__renderTarget);b.bindFramebuffer(q.READ_FRAMEBUFFER,Ft.__webglFramebuffer),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let gr=0;gr<Ye;gr++)mr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,K.get(D).__webglTexture,re,at+gr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,K.get($).__webglTexture,Be,Wt+gr)),q.blitFramebuffer(Ze,mt,Le,Oe,Ve,Ct,Le,Oe,q.DEPTH_BUFFER_BIT,q.NEAREST);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(re!==0||D.isRenderTargetTexture||K.has(D)){const Xt=K.get(D),ci=K.get($);b.bindFramebuffer(q.READ_FRAMEBUFFER,O),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,W);for(let Ft=0;Ft<Ye;Ft++)mr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xt.__webglTexture,re,at+Ft):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Xt.__webglTexture,re),wt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ci.__webglTexture,Be,Wt+Ft):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ci.__webglTexture,Be),re!==0?q.blitFramebuffer(Ze,mt,Le,Oe,Ve,Ct,Le,Oe,q.COLOR_BUFFER_BIT,q.NEAREST):wt?q.copyTexSubImage3D(Ge,Be,Ve,Ct,Wt+Ft,Ze,mt,Le,Oe):q.copyTexSubImage2D(Ge,Be,Ve,Ct,Ze,mt,Le,Oe);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else wt?D.isDataTexture||D.isData3DTexture?q.texSubImage3D(Ge,Be,Ve,Ct,Wt,Le,Oe,Ye,Pt,an,Mt.data):$.isCompressedArrayTexture?q.compressedTexSubImage3D(Ge,Be,Ve,Ct,Wt,Le,Oe,Ye,Pt,Mt.data):q.texSubImage3D(Ge,Be,Ve,Ct,Wt,Le,Oe,Ye,Pt,an,Mt):D.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Be,Ve,Ct,Le,Oe,Pt,an,Mt.data):D.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Be,Ve,Ct,Mt.width,Mt.height,Pt,Mt.data):q.texSubImage2D(q.TEXTURE_2D,Be,Ve,Ct,Le,Oe,Pt,an,Mt);b.pixelStorei(q.UNPACK_ROW_LENGTH,bt),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,yt),b.pixelStorei(q.UNPACK_SKIP_PIXELS,Mn),b.pixelStorei(q.UNPACK_SKIP_ROWS,qn),b.pixelStorei(q.UNPACK_SKIP_IMAGES,Ii),Be===0&&$.generateMipmaps&&q.generateMipmap(Ge),b.unbindTexture()},this.initRenderTarget=function(D){K.get(D).__webglFramebuffer===void 0&&oe.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?oe.setTextureCube(D,0):D.isData3DTexture?oe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?oe.setTexture2DArray(D,0):oe.setTexture2D(D,0),b.unbindTexture()},this.resetState=function(){J=0,X=0,te=null,b.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const ep={type:"change"},Au={type:"start"},tp={type:"end"},ko=new Js,np=new Ki,cM=Math.cos(70*Rf.DEG2RAD),tn=new j,Sn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ru=1e-6;class uM extends W0{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Un,this._lastTargetPosition=new j,this._quat=new Un().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sd,this._sphericalDelta=new Sd,this._scale=1,this._panOffset=new j,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new j,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fM.bind(this),this._onPointerDown=hM.bind(this),this._onPointerUp=dM.bind(this),this._onContextMenu=yM.bind(this),this._onMouseWheel=gM.bind(this),this._onKeyDown=_M.bind(this),this._onTouchStart=vM.bind(this),this._onTouchMove=xM.bind(this),this._onMouseDown=pM.bind(this),this._onMouseMove=mM.bind(this),this._interceptControlDown=SM.bind(this),this._interceptControlUp=MM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ut.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ep),this.update(),this.state=Ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Sn:n>Math.PI&&(n-=Sn),r<-Math.PI?r+=Sn:r>Math.PI&&(r-=Sn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=tn.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new j(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const u=new j(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ko.origin.copy(this.object.position),ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ko.direction))<cM?this.object.lookAt(this.target):(np.setFromNormalAndCoplanarPoint(this.object.up,this.target),ko.intersectPlane(np,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ru||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ru||this._lastTargetPosition.distanceToSquared(this.target)>Ru?(this.dispatchEvent(ep),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;tn.copy(r).sub(this.target);let s=tn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tp),this.state=Ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ut.DOLLY;break;case Vr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ut.ROTATE}break;case Vr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(Au)}function mM(i){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gM(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(i.preventDefault(),this.dispatchEvent(Au),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(tp))}function _M(i){this.enabled!==!1&&this._handleKeyDown(i)}function vM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ut.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ut.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(Au)}function xM(i){switch(this._trackPointer(i),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ut.NONE}}function yM(i){this.enabled!==!1&&i.preventDefault()}function SM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const bM=Hh({__name:"CadViewport",props:{bodies:{}},setup(i){const e=i,t=dn(null),n=dn(null),r=dn(null),s=dn(null),a=dn(null),o=dn(null),c=p(null),u=dn(new Map),h=dn(!0),f=dn(null);function p(L){return dn(L)}function m(){return document.documentElement.getAttribute("data-theme")==="dark"||document.body.classList.contains("theme--dark")||document.body.classList.contains("theme-dark")||window.matchMedia("(prefers-color-scheme: dark)").matches}function x(L){n.value&&(n.value.background=new Je(L?"#0f172a":"#f1f5f9")),o.value&&(o.value.material.dispose(),o.value.material=new cr({color:L?3359061:9741240,transparent:!0,opacity:L?.6:.4})),c.value&&c.value.groundColor.setHex(L?6583435:14870768),h.value=!0}let E=null;Gh(()=>{const L=t.value;if(!L)return;const A=L.clientWidth||800,M=L.clientHeight||600,w=A/M,T=new N_;n.value=T;const P=new ua(-w,w,1,-1,-500,1e3);P.position.set(.2,.2,.25),r.value=P;const y=new lM({antialias:!0,alpha:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});y.setSize(A,M),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.outputColorSpace=$t,s.value=y,L.appendChild(y.domElement);const R=new P0(16777215,.8);T.add(R);const N=new E0(16777215,6583435,.9);N.position.set(0,20,0),T.add(N),c.value=N;const F=new Do(16777215,1.1);F.position.set(10,10,10),T.add(F);const z=new Do(14739455,.5);z.position.set(6,10,8),T.add(z);const V=new Do(15857145,.4);V.position.set(-8,-4,-8),T.add(V);const O=new G0(1,20,3359061,1976635);O.position.y=-.001,T.add(O),o.value=O;const W=new uM(P,y.domElement);W.enableDamping=!0,W.dampingFactor=.08,W.screenSpacePanning=!0,W.zoomToCursor=!0,a.value=W,W.addEventListener("change",()=>{h.value=!0}),W.addEventListener("start",()=>{y.setPixelRatio(1)}),W.addEventListener("end",()=>{y.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.value=!0}),x(m()),E=new MutationObserver(()=>{x(m())}),E.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","class"]}),E.observe(document.body,{attributes:!0,attributeFilter:["class"]});const J=()=>{f.value=requestAnimationFrame(J),(W.update()||h.value)&&(h.value=!1,y.render(T,P))};J(),new ResizeObserver(te=>{for(const ie of te){const{width:pe,height:me}=ie.contentRect;if(pe>0&&me>0&&s.value&&r.value){const Ne=pe/me,we=r.value,$e=(we.top-we.bottom)*Ne/2;we.left=-$e,we.right=$e,we.updateProjectionMatrix(),s.value.setSize(pe,me),h.value=!0}}}).observe(L),_()});function v(L){const A=r.value,M=a.value,w=t.value;if(!A||!M||!w)return;const T=L.getCenter(new j),P=L.getSize(new j),y=Math.max(P.x,P.y,P.z);if(y===0)return;const R=w.clientWidth/w.clientHeight,N=y*1.8,F=N/2,z=F*R;A.left=-z,A.right=z,A.top=F,A.bottom=-F,A.near=-N*10,A.far=N*20,A.zoom=1,A.updateProjectionMatrix();const V=new j(1,1,1).normalize();if(A.position.copy(T).addScaledVector(V,N),M.target.copy(T),M.minDistance=Math.max(N/250,2e-4),M.maxDistance=N*20,M.update(),o.value){o.value.position.y=L.min.y-1e-4;const O=Math.max(Math.max(P.x,P.z)*3,.01);o.value.scale.set(O,O,O)}}function _(){const L=n.value;if(!L)return;if(u.value.forEach(M=>{L.remove(M),Array.isArray(M.material)?M.material.forEach(w=>w.dispose()):M.material.dispose()}),u.value.clear(),!e.bodies||e.bodies.length===0){h.value=!0;return}const A=new Si;e.bodies.forEach(M=>{const w=parseInt(M.metadata.color.replace("#",""),16)||9416591,T=M.metadata.opacity??1,P=T<.99,y=new aa({color:w,roughness:.38,metalness:0,transparent:P,opacity:T,depthWrite:T>=.95,side:P?jn:zi,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),R=new Kt(M.geometry,y);if(R.name=M.metadata.id,M.metadata.transform&&M.metadata.transform.length===16){const N=new ut().fromArray(M.metadata.transform);R.applyMatrix4(N)}if(M.edgeGeometry){const N=new cr({color:988970,linewidth:1,transparent:!1,depthTest:!0}),F=new ia(M.edgeGeometry,N);R.add(F)}if(L.add(R),u.value.set(M.metadata.id,R),R.geometry.computeBoundingBox(),R.geometry.boundingBox){const N=R.geometry.boundingBox.clone();N.applyMatrix4(R.matrix),A.union(N)}}),A.isEmpty()||v(A),h.value=!0}return jm(()=>e.bodies,()=>{_()},{deep:!0}),ng(()=>{var L,A,M,w,T;E&&E.disconnect(),f.value&&cancelAnimationFrame(f.value),(L=a.value)==null||L.dispose(),(A=s.value)==null||A.dispose(),(M=o.value)==null||M.geometry.dispose(),(T=(w=o.value)==null?void 0:w.material)==null||T.dispose()}),(L,A)=>(Mr(),Fs("div",{ref_key:"containerRef",ref:t,class:"cad-viewport-container"},null,512))}}),ip=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},EM=ip(bM,[["__scopeId","data-v-082fdcd9"]]);var rp={},TM=(function(i,e,t,n,r){var s=new Worker(rp[e]||(rp[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,c=o.$e$;if(c){var u=new Error(c[0]);u.code=c[1],u.stack=c[2],r(u,null)}else r(null,o)},s.postMessage(t,n),s}),gn=Uint8Array,Ir=Uint16Array,sp=Int32Array,Cu=new gn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Pu=new gn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ap=new gn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),op=function(i,e){for(var t=new Ir(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new sp(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},lp=op(Cu,2),Lu=lp.b,wM=lp.r;Lu[28]=258,wM[258]=28;for(var AM=op(Pu,0),cp=AM.b,zo=new Ir(32768),Ht=0;Ht<32768;++Ht){var fr=(Ht&43690)>>1|(Ht&21845)<<1;fr=(fr&52428)>>2|(fr&13107)<<2,fr=(fr&61680)>>4|(fr&3855)<<4,zo[Ht]=((fr&65280)>>8|(fr&255)<<8)>>1}for(var Ss=(function(i,e,t){for(var n=i.length,r=0,s=new Ir(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new Ir(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new Ir(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var u=r<<4|i[r],h=e-i[r],f=a[i[r]-1]++<<h,p=f|(1<<h)-1;f<=p;++f)o[zo[f]>>c]=u}else for(o=new Ir(n),r=0;r<n;++r)i[r]&&(o[r]=zo[a[i[r]-1]++]>>15-i[r]);return o}),ma=new gn(288),Ht=0;Ht<144;++Ht)ma[Ht]=8;for(var Ht=144;Ht<256;++Ht)ma[Ht]=9;for(var Ht=256;Ht<280;++Ht)ma[Ht]=7;for(var Ht=280;Ht<288;++Ht)ma[Ht]=8;for(var up=new gn(32),Ht=0;Ht<32;++Ht)up[Ht]=5;var hp=Ss(ma,9,1),fp=Ss(up,5,1),Ho=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},kn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Vo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},dp=function(i){return(i+7)/8|0},Go=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new gn(i.subarray(e,t))},pp=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fn=function(i,e,t){var n=new Error(e||pp[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,fn),!t)throw n;return n},mp=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new gn(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new gn(r*3));var u=function(Q){var se=t.length;if(Q>se){var ce=new gn(Math.max(se*2,Q));ce.set(t),t=ce}},h=e.f||0,f=e.p||0,p=e.b||0,m=e.l,x=e.d,E=e.m,v=e.n,_=r*8;do{if(!m){h=kn(i,f,1);var L=kn(i,f+1,3);if(f+=3,L)if(L==1)m=hp,x=fp,E=9,v=5;else if(L==2){var T=kn(i,f,31)+257,P=kn(i,f+10,15)+4,y=T+kn(i,f+5,31)+1;f+=14;for(var R=new gn(y),N=new gn(19),F=0;F<P;++F)N[ap[F]]=kn(i,f+F*3,7);f+=P*3;for(var z=Ho(N),V=(1<<z)-1,O=Ss(N,z,1),F=0;F<y;){var W=O[kn(i,f,V)];f+=W&15;var A=W>>4;if(A<16)R[F++]=A;else{var J=0,X=0;for(A==16?(X=3+kn(i,f,3),f+=2,J=R[F-1]):A==17?(X=3+kn(i,f,7),f+=3):A==18&&(X=11+kn(i,f,127),f+=7);X--;)R[F++]=J}}var te=R.subarray(0,T),ie=R.subarray(T);E=Ho(te),v=Ho(ie),m=Ss(te,E,1),x=Ss(ie,v,1)}else fn(1);else{var A=dp(f)+4,M=i[A-4]|i[A-3]<<8,w=A+M;if(w>r){c&&fn(0);break}o&&u(p+M),t.set(i.subarray(A,w),p),e.b=p+=M,e.p=f=w*8,e.f=h;continue}if(f>_){c&&fn(0);break}}o&&u(p+131072);for(var pe=(1<<E)-1,me=(1<<v)-1,Ne=f;;Ne=f){var J=m[Vo(i,f)&pe],we=J>>4;if(f+=J&15,f>_){c&&fn(0);break}if(J||fn(2),we<256)t[p++]=we;else if(we==256){Ne=f,m=null;break}else{var dt=we-254;if(we>264){var F=we-257,$e=Cu[F];dt=kn(i,f,(1<<$e)-1)+Lu[F],f+=$e}var ot=x[Vo(i,f)&me],he=ot>>4;ot||fn(3),f+=ot&15;var ie=cp[he];if(he>3){var $e=Pu[he];ie+=Vo(i,f)&(1<<$e)-1,f+=$e}if(f>_){c&&fn(0);break}o&&u(p+131072);var k=p+dt;if(p<ie){var G=s-ie,ae=Math.min(ie,k);for(G+p<0&&fn(3);p<ae;++p)t[p]=n[G+p]}for(;p<k;++p)t[p]=t[p-ie]}}e.l=m,e.p=Ne,e.b=p,e.f=h,m&&(h=1,e.m=E,e.d=x,e.n=v)}while(!h);return p!=t.length&&a?Go(t,0,p):t.subarray(0,p)},RM=new gn(0),CM=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},gp=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],c=s[a];if(typeof o=="function"){e+=";"+c+"=";var u=o.toString();if(o.prototype)if(u.indexOf("[native code]")!=-1){var h=u.indexOf(" ",8)+1;e+=u.slice(h,u.indexOf("(",h))}else{e+=u;for(var f in o.prototype)e+=";"+c+".prototype."+f+"="+o.prototype[f].toString()}else e+=u}else t[c]=o}return e},Wo=[],PM=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},LM=function(i,e,t,n){if(!Wo[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=gp(i[o],r,s);Wo[t]={c:gp(i[a],r,s),e:s}}var c=CM({},Wo[t].e);return TM(Wo[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,PM(c),n)},IM=function(){return[gn,Ir,sp,Cu,Pu,ap,Lu,cp,hp,fp,zo,pp,Ss,Ho,kn,Vo,dp,Go,fn,mp,Du,_p,vp]},_p=function(i){return postMessage(i,[i.buffer])},vp=function(i){return i&&{out:i.size&&new gn(i.size),dictionary:i.dictionary}},DM=function(i,e,t,n,r,s){var a=LM(t,n,r,function(o,c){a.terminate(),s(o,c)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},Ri=function(i,e){return i[e]|i[e+1]<<8},zn=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Iu=function(i,e){return zn(i,e)+zn(i,e+4)*4294967296};function NM(i,e,t){return t||(t=e,e={}),typeof t!="function"&&fn(7),DM(i,e,[IM],function(n){return _p(Du(n.data[0],vp(n.data[1])))},1,t)}function Du(i,e){return mp(i,{i:2},e&&e.out,e&&e.dictionary)}var Nu=typeof TextDecoder<"u"&&new TextDecoder,UM=0;try{Nu.decode(RM,{stream:!0}),UM=1}catch{}var FM=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Go(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function Xo(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Nu)return Nu.decode(i);var r=FM(i),s=r.s,t=r.r;return t.length&&fn(8),s}}var OM=function(i,e){return e+30+Ri(i,e+26)+Ri(i,e+28)},BM=function(i,e,t){var n=Ri(i,e+28),r=Ri(i,e+30),s=Xo(i.subarray(e+46,e+46+n),!(Ri(i,e+8)&2048)),a=e+46+n,o=kM(i,a,r,t,zn(i,e+20),zn(i,e+24),zn(i,e+42)),c=o[0],u=o[1],h=o[2];return[Ri(i,e+10),c,u,s,a+r+Ri(i,e+32),h]},kM=function(i,e,t,n,r,s,a){var o=r==4294967295,c=s==4294967295,u=a==4294967295,h=e+t,f=o+c+u;if(n&&f){for(;e+4<h;e+=4+Ri(i,e+2))if(Ri(i,e)==1)return[o?Iu(i,e+4+8*c):r,c?Iu(i,e+4):s,u?Iu(i,e+4+8*(c+o)):a,1];n<2&&fn(13)}return[r,s,a,0]},xp=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()};function zM(i,e,t){t||(t=e,e={}),typeof t!="function"&&fn(7);var n=[],r=function(){for(var v=0;v<n.length;++v)n[v]()},s={},a=function(v,_){xp(function(){t(v,_)})};xp(function(){a=t});for(var o=i.length-22;zn(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(fn(13,0,1),null),r;var c=Ri(i,o+8);if(c){var u=c,h=zn(i,o+16),f=zn(i,o-20)==117853008;if(f){var p=zn(i,o-12);f=zn(i,p)==101075792,f&&(u=c=zn(i,p+32),h=zn(i,p+48))}for(var m=e&&e.filter,x=function(v){var _=BM(i,h,f),L=_[0],A=_[1],M=_[2],w=_[3],T=_[4],P=_[5],y=OM(i,P);h=T;var R=function(F,z){F?(r(),a(F,null)):(z&&(s[w]=z),--c||a(null,s))};if(!m||m({name:w,size:A,originalSize:M,compression:L}))if(!L)R(null,Go(i,y,y+A));else if(L==8){var N=i.subarray(y,y+A);if(M<524288||A>.8*M)try{R(null,Du(N,{out:new gn(M)}))}catch(F){R(F,null)}else n.push(NM(N,{size:M},R))}else R(fn(14,"unknown compression type "+L,1),null);else R(null,null)},E=0;E<u;++E)x(E)}else a(null,{});return r}function HM(i){const e=new DataView(i),t=[];if(i.byteLength<16)throw new Error("Invalid facets.bin: file too small");const n=new Uint8Array(i,0,8),r=String.fromCharCode(...n);if(r!=="facets  ")throw new Error(`Invalid facets.bin magic header: "${r}"`);const s=e.getUint32(12,!0);let a=16;for(let o=0;o<s&&a<i.byteLength-32;o++){const c=e.getUint32(a,!0),u=e.getUint32(a+4,!0),h=e.getUint32(a+8,!0),f=e.getUint32(a+20,!0),p=e.getUint32(a+24,!0),m=e.getUint32(a+44,!0);if((f===5||f===4)&&p>0&&p<2e4&&m>0&&m<2e5){a+=48;let E=m,v=a,_=m,L=0,A=m;for(let V=0;V<p&&v<i.byteLength;V++){if(V>0){if(v+4>i.byteLength)break;const J=24+e.getUint32(v,!0)*12;if(v+J>i.byteLength)break;A=e.getUint32(v+J-4,!0),v+=J,_+=A}if(v+=A*32,v+4>i.byteLength)break;const O=e.getUint32(v,!0);if(L+=O,v+=4+O*2,v%4!==0&&(v+=4-v%4),v+4<=i.byteLength){const W=e.getUint32(v,!0);v+=4+W*2,v%4!==0&&(v+=4-v%4)}}const M=new Float32Array(_*3),w=new Float32Array(_*3),T=new Float32Array(_*2),P=_>65535?new Uint32Array(L):new Uint16Array(L);let y=0,R=0,N=0,F=0;for(let V=0;V<p&&a<i.byteLength;V++){if(V>0){if(a+4>i.byteLength)break;const X=24+e.getUint32(a,!0)*12;if(a+X>i.byteLength)break;E=e.getUint32(a+X-4,!0),a+=X}const O=E*32;if(a+O>i.byteLength)break;for(let J=0;J<E;J++){const X=a+(J<<5),te=(y+J)*3;M[te]=e.getFloat32(X,!0),M[te+1]=e.getFloat32(X+4,!0),M[te+2]=e.getFloat32(X+8,!0),w[te]=e.getFloat32(X+12,!0),w[te+1]=e.getFloat32(X+16,!0),w[te+2]=e.getFloat32(X+20,!0);const ie=R+J<<1;T[ie]=e.getFloat32(X+24,!0),T[ie+1]=e.getFloat32(X+28,!0)}if(y+=E,R+=E,a+=O,a+4>i.byteLength)break;const W=e.getUint32(a,!0);if(a+=4,a+W*2>i.byteLength)break;for(let J=0;J<W;J++)P[N++]=F+e.getUint16(a+(J<<1),!0);if(a+=W*2,a%4!==0&&(a+=4-a%4),a+4<=i.byteLength){const J=e.getUint32(a,!0);a+=4,a+J*2<=i.byteLength&&(a+=J*2,a%4!==0&&(a+=4-a%4))}F+=E}const z=new Lt;if(z.setAttribute("position",new At(M.subarray(0,y*3),3)),y>0?z.setAttribute("normal",new At(w.subarray(0,y*3),3)):z.computeVertexNormals(),R>0&&z.setAttribute("uv",new At(T.subarray(0,R*2),2)),N>0&&z.setIndex(new At(P.subarray(0,N),1)),z.computeBoundingBox(),z.computeBoundingSphere(),t.push({partId:`${u}:${c}`,bodyId:`${u}:${h}`,bodyNum:h,partNum:u,faceCount:p,totalVertices:y,totalTriangles:N/3,geometry:z}),o<s-1){let V=!1;if(a+32<=i.byteLength&&e.getUint32(a,!0)===2){const O=e.getUint32(a+28,!0),W=a+32+O*12;if(W+48<=i.byteLength){const J=e.getUint32(W,!0),X=e.getUint32(W+20,!0),te=e.getUint32(W+24,!0);J===1&&(X===5||X===4)&&te>0&&te<2e4&&(a=W,V=!0)}}if(!V){const O=Math.min(a+5e5,i.byteLength-48);for(let W=a+32;W<=O;W+=4){const J=e.getUint32(W,!0),X=e.getUint32(W+20,!0),te=e.getUint32(W+24,!0);if(J===1&&(X===5||X===4)&&te>0&&te<2e4){a=W,V=!0;break}if(W+32<=i.byteLength&&e.getUint32(W+16,!0)===4294967295){a=W,V=!0;break}}}if(!V)break}}else{const E=e.getUint32(a,!0),v=e.getUint32(a+4,!0),_=`${E}:${v}`,L=`${E}:${v}`,A=e.getUint32(a+72,!0);let M=i.byteLength;for(let R=a+80;R<=i.byteLength-48;R+=4){if(e.getUint32(R+16,!0)===4294967295){M=R;break}const N=e.getUint32(R,!0),F=e.getUint32(R+20,!0),z=e.getUint32(R+24,!0);if(N===1&&(F===5||F===4)&&z>0&&z<2e4){M=R;break}}let w=new Float32Array(0),T=new Uint32Array(0),P=0;if(A>0&&A<5e5&&a+76+A*12<=M){const R=a+76;w=new Float32Array(A*3);for(let z=0;z<A;z++){const V=R+z*12,O=z*3;w[O]=e.getFloat32(V,!0),w[O+1]=e.getFloat32(V+4,!0),w[O+2]=e.getFloat32(V+8,!0)}let N=M;for(let z=0;z<=16;z+=4){const V=M-z-36;if(V>=R+A*12){const O=e.getUint32(V+12,!0),W=e.getUint32(V+16,!0),J=e.getUint32(V+20,!0);if(O<A&&W<A&&J<A&&O!==W&&W!==J&&O!==J){N=M-z;break}}}const F=Math.max(0,Math.floor((N-(R+A*12))/36));for(T=new Uint32Array(F*3);N-36>=R+A*12;){const z=N-36,V=e.getUint32(z+12,!0),O=e.getUint32(z+16,!0),W=e.getUint32(z+20,!0);if(V<A&&O<A&&W<A&&V!==O&&O!==W&&V!==W)T[P++]=V,T[P++]=O,T[P++]=W,N-=36;else break}T.subarray(0,P).reverse()}const y=new Lt;w.length>0&&y.setAttribute("position",new At(w,3)),P>0&&y.setIndex(new At(T.subarray(0,P),1)),y.computeVertexNormals(),y.computeBoundingBox(),y.computeBoundingSphere(),t.push({partId:_,bodyId:L,bodyNum:v,partNum:E,faceCount:1,totalVertices:w.length/3,totalTriangles:P/3,geometry:y}),a=M}}return t}const Ms=["#8faf8f","#94a3b8","#38bdf8","#10b981","#f59e0b","#ef4444","#a855f7","#e2e8f0"];function VM(i,e){if(!i)return{hex:Ms[e%Ms.length],opacity:1};const t=parseInt(i,10);if(isNaN(t))return{hex:Ms[e%Ms.length],opacity:1};const n=t>>>0,r=(n>>24&255)/255,s=n>>16&255,a=n>>8&255,o=n&255;return{hex:"#"+[s,a,o].map(u=>u.toString(16).padStart(2,"0")).join(""),opacity:r>0?r:1}}function yp(i){if(!i||!i.trim())return null;const e=i.split(/[,\s]+/).map(n=>parseFloat(n.trim())).filter(n=>!isNaN(n));if(e.length<16)return null;const t=new ut;return t.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),t}async function GM(i,e,t){var M;t==null||t("ZIP展開中...",15);const n=i instanceof Uint8Array?i:new Uint8Array(i),r=await new Promise((w,T)=>{zM(n,(P,y)=>{P?T(P):w(y)})}),s=n.byteLength;t==null||t("構造解析中...",40);let a="SpaceClaim",o="MM";const c=r["docProps/app.xml"];if(c){const w=Xo(c),T=w.match(/<Application>([^<]+)<\/Application>/i);T&&(a=T[1]);const P=w.match(/<LengthType>([^<]+)<\/LengthType>/i);P&&(o=P[1])}const u=new Map,h=new Map;e.replace(/\.[^/.]+$/,"");const f=r["SpaceClaim/document.xml"];if(f){const w=Xo(f),T=w.match(/<RootCaptionDef[^>]*>[\s\S]*?<name>([^<]+)<\/name>/);T&&T[1].trim()&&T[1].trim();const P=/<CaptionDef[^>]*>[\s\S]*?<subjectId>([^<]+)<\/subjectId>[\s\S]*?<name>([^<]+)<\/name>/g;let y;for(;(y=P.exec(w))!==null;)u.set(y[1].trim(),y[2].trim());const R=/<(?:ComponentDef|PartDef|NominalBodyDef)[^>]*Id="([^"]+)"[^>]*>[\s\S]*?<name>([^<]+)<\/name>/g;for(;(y=R.exec(w))!==null;){const z=y[1].trim();u.has(z)||u.set(z,y[2].trim())}const N=/<(?:NominalBodyDef|MeshDef)\s+Id="([^"]+)"/g;let F=0;for(;(y=N.exec(w))!==null;){const z=y[1].trim();h.has(z)||h.set(z,F++)}}t==null||t("3D ファセット幾何抽出中...",70);const p=r["SpaceClaim/Graphics/facets.bin"];if(!p)throw new Error("facets.bin missing in RSDOCX container");const m=p.buffer.slice(p.byteOffset,p.byteOffset+p.byteLength),x=HM(m),E=[],v=new ut().makeRotationX(-Math.PI/2),_=r["SpaceClaim/Graphics/renderlist.xml"];let L;_&&(L=Xo(_));let A=0;if(L){const w=/<Item\s+([^>]+?)>(.*?)<\/Item>/gs;let T;for(;(T=w.exec(L))!==null;){const P=T[1],y=T[2],R=(P.match(/Transform="([^"]+)"/)||[])[1],N=yp(R),F=/<Body\s+([^>]+?)(?:\/>|>.*?<\/Body>)/gs;let z;for(;(z=F.exec(y))!==null;){const V=z[1],O=(V.match(/Id="([^"]+)"/)||[])[1]||`0:${A}`,J=(V.match(/Visible="([^"]+)"/)||[])[1]!=="0",X=(V.match(/Color="([^"]+)"/)||[])[1],{hex:te,opacity:ie}=VM(X,A),pe=(V.match(/Transform="([^"]+)"/)||[])[1],me=yp(pe);let Ne=N;me&&(Ne?Ne=Ne.clone().multiply(me):Ne=me);let we;const dt=h.get(O);if(dt!==void 0&&dt<x.length&&(we=x[dt]),!we&&x.length>0&&(we=x[A%x.length]),we&&we.geometry){let $e=we.geometry.clone();Ne&&$e.applyMatrix4(Ne),$e.applyMatrix4(v),$e.computeVertexNormals(),$e.computeBoundingBox(),$e.computeBoundingSphere();const ot=`inst-${O}-${A}`,he=u.get(O)||`Body ${O}`;A++;let k;try{k=new Ao($e,28),k.computeBoundingSphere()}catch{}E.push({name:he,metadata:{id:ot,originalId:O,name:he,color:te,opacity:ie,visible:J,vertexCount:((M=$e.getAttribute("position"))==null?void 0:M.count)||0,triangleCount:$e.getIndex()?$e.getIndex().count/3:0},geometry:$e,edgeGeometry:k})}}}}return E.length===0&&x.length>0&&x.forEach((w,T)=>{var z;const P=u.get(w.bodyId)||`Body ${w.bodyId}`,y=Ms[T%Ms.length],R=`body-${w.bodyId}`;let N=w.geometry.clone();N.applyMatrix4(v),N.computeVertexNormals(),N.computeBoundingBox(),N.computeBoundingSphere();let F;try{F=new Ao(N,28),F.computeBoundingSphere()}catch{}E.push({name:P,metadata:{id:R,originalId:w.bodyId,name:P,color:y,opacity:1,visible:!0,vertexCount:((z=N.getAttribute("position"))==null?void 0:z.count)||0,triangleCount:N.getIndex()?N.getIndex().count/3:0},geometry:N,edgeGeometry:F})}),t==null||t("表示完了",100),{fileName:e,fileSize:s,application:a,lengthUnits:o,bodies:E}}function WM(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function XM(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var Uu={exports:{}};const Fu=XM(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var Sp;function qM(){return Sp||(Sp=1,(function(i,e){var t=(()=>{var r;var n=typeof document<"u"?(r=document.currentScript)==null?void 0:r.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(s={}){var a,o=s,c,u,h=new Promise((l,d)=>{c=l,u=d}),f=typeof window=="object",p=typeof importScripts=="function",m=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",x=Object.assign({},o),E="./this.program",v=(l,d)=>{throw d},_="";function L(l){return o.locateFile?o.locateFile(l,_):_+l}var A,M;if(m){var w=Fu,T=Fu;_=__dirname+"/",M=l=>{l=st(l)?new URL(l):T.normalize(l);var d=w.readFileSync(l);return d},A=(l,d=!0)=>(l=st(l)?new URL(l):T.normalize(l),new Promise((g,S)=>{w.readFile(l,d?void 0:"utf8",(I,B)=>{I?S(I):g(d?B.buffer:B)})})),!o.thisProgram&&process.argv.length>1&&(E=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),v=(l,d)=>{throw process.exitCode=l,d}}else(f||p)&&(p?_=self.location.href:typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),n&&(_=n),_.startsWith("blob:")?_="":_=_.substr(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1),p&&(M=l=>{var d=new XMLHttpRequest;return d.open("GET",l,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),A=l=>st(l)?new Promise((d,g)=>{var S=new XMLHttpRequest;S.open("GET",l,!0),S.responseType="arraybuffer",S.onload=()=>{if(S.status==200||S.status==0&&S.response){d(S.response);return}g(S.status)},S.onerror=g,S.send(null)}):fetch(l,{credentials:"same-origin"}).then(d=>d.ok?d.arrayBuffer():Promise.reject(new Error(d.status+" : "+d.url))));var P=o.print||console.log.bind(console),y=o.printErr||console.error.bind(console);Object.assign(o,x),x=null,o.arguments&&o.arguments,o.thisProgram&&(E=o.thisProgram);var R=o.wasmBinary,N,F=!1;function z(l,d){l||ve(d)}var V,O,W,J,X,te,ie,pe;function me(){var l=N.buffer;o.HEAP8=V=new Int8Array(l),o.HEAP16=W=new Int16Array(l),o.HEAPU8=O=new Uint8Array(l),o.HEAPU16=J=new Uint16Array(l),o.HEAP32=X=new Int32Array(l),o.HEAPU32=te=new Uint32Array(l),o.HEAPF32=ie=new Float32Array(l),o.HEAPF64=pe=new Float64Array(l)}var Ne=[],we=[],dt=[],$e=!1;function ot(){var l=o.preRun;l&&(typeof l=="function"&&(l=[l]),l.forEach(G)),Re(Ne)}function he(){$e=!0,!o.noFSInit&&!C.initialized&&C.init(),C.ignorePermissions=!1,Re(we)}function k(){var l=o.postRun;l&&(typeof l=="function"&&(l=[l]),l.forEach(Q)),Re(dt)}function G(l){Ne.unshift(l)}function ae(l){we.unshift(l)}function Q(l){dt.unshift(l)}var se=0,ce=null;function de(l){return l}function ye(l){var d;se++,(d=o.monitorRunDependencies)==null||d.call(o,se)}function ge(l){var g;if(se--,(g=o.monitorRunDependencies)==null||g.call(o,se),se==0&&ce){var d=ce;ce=null,d()}}function ve(l){var g;(g=o.onAbort)==null||g.call(o,l),l="Aborted("+l+")",y(l),F=!0,l+=". Build with -sASSERTIONS for more info.",$e&&nm();var d=new WebAssembly.RuntimeError(l);throw u(d),d}var Fe="data:application/octet-stream;base64,",Te=l=>l.startsWith(Fe),st=l=>l.startsWith("file://");function tt(){var l="occt-import-js.wasm";return Te(l)?l:L(l)}var lt;function q(l){if(l==lt&&R)return new Uint8Array(R);if(M)return M(l);throw"both async and sync fetching of the wasm failed"}function pt(l){return R?Promise.resolve().then(()=>q(l)):A(l).then(d=>new Uint8Array(d),()=>q(l))}function Ae(l,d,g){return pt(l).then(S=>WebAssembly.instantiate(S,d)).then(g,S=>{y(`failed to asynchronously prepare wasm: ${S}`),ve(S)})}function U(l,d,g,S){return!l&&typeof WebAssembly.instantiateStreaming=="function"&&!Te(d)&&!st(d)&&!m&&typeof fetch=="function"?fetch(d,{credentials:"same-origin"}).then(I=>{var B=WebAssembly.instantiateStreaming(I,g);return B.then(S,function(H){return y(`wasm streaming compile failed: ${H}`),y("falling back to ArrayBuffer instantiation"),Ae(d,g,S)})}):Ae(d,g,S)}function b(){return{a:BT}}function ee(){var l=b();function d(S,I){return on=S.exports,N=on._,me(),Wp=on.ba,ae(on.$),ge(),on}ye();function g(S){d(S.instance)}if(o.instantiateWasm)try{return o.instantiateWasm(l,d)}catch(S){y(`Module.instantiateWasm callback failed with error: ${S}`),u(S)}return lt??(lt=tt()),U(R,lt,l,g).catch(u),{}}var K,oe;function be(l){this.name="ExitStatus",this.message=`Program terminated with exit(${l})`,this.status=l}var Re=l=>{l.forEach(d=>d(o))};o.noExitRuntime;var le={isAbs:l=>l.charAt(0)==="/",splitPath:l=>{var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return d.exec(l).slice(1)},normalizeArray:(l,d)=>{for(var g=0,S=l.length-1;S>=0;S--){var I=l[S];I==="."?l.splice(S,1):I===".."?(l.splice(S,1),g++):g&&(l.splice(S,1),g--)}if(d)for(;g;g--)l.unshift("..");return l},normalize:l=>{var d=le.isAbs(l),g=l.substr(-1)==="/";return l=le.normalizeArray(l.split("/").filter(S=>!!S),!d).join("/"),!l&&!d&&(l="."),l&&g&&(l+="/"),(d?"/":"")+l},dirname:l=>{var d=le.splitPath(l),g=d[0],S=d[1];return!g&&!S?".":(S&&(S=S.substr(0,S.length-1)),g+S)},basename:l=>{if(l==="/")return"/";l=le.normalize(l),l=l.replace(/\/$/,"");var d=l.lastIndexOf("/");return d===-1?l:l.substr(d+1)},join:(...l)=>le.normalize(l.join("/")),join2:(l,d)=>le.normalize(l+"/"+d)},xe=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return S=>crypto.getRandomValues(S);if(m)try{var l=Fu,d=l.randomFillSync;if(d)return S=>l.randomFillSync(S);var g=l.randomBytes;return S=>(S.set(g(S.byteLength)),S)}catch{}ve("initRandomDevice")},Pe=l=>(Pe=xe())(l),Xe={resolve:(...l)=>{for(var d="",g=!1,S=l.length-1;S>=-1&&!g;S--){var I=S>=0?l[S]:C.cwd();if(typeof I!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!I)return"";d=I+"/"+d,g=le.isAbs(I)}return d=le.normalizeArray(d.split("/").filter(B=>!!B),!g).join("/"),(g?"/":"")+d||"."},relative:(l,d)=>{l=Xe.resolve(l).substr(1),d=Xe.resolve(d).substr(1);function g(Me){for(var He=0;He<Me.length&&Me[He]==="";He++);for(var We=Me.length-1;We>=0&&Me[We]==="";We--);return He>We?[]:Me.slice(He,We-He+1)}for(var S=g(l.split("/")),I=g(d.split("/")),B=Math.min(S.length,I.length),H=B,Y=0;Y<B;Y++)if(S[Y]!==I[Y]){H=Y;break}for(var fe=[],Y=H;Y<S.length;Y++)fe.push("..");return fe=fe.concat(I.slice(H)),fe.join("/")}},Ue=typeof TextDecoder<"u"?new TextDecoder:void 0,Ce=(l,d=0,g=NaN)=>{for(var S=d+g,I=d;l[I]&&!(I>=S);)++I;if(I-d>16&&l.buffer&&Ue)return Ue.decode(l.subarray(d,I));for(var B="";d<I;){var H=l[d++];if(!(H&128)){B+=String.fromCharCode(H);continue}var Y=l[d++]&63;if((H&224)==192){B+=String.fromCharCode((H&31)<<6|Y);continue}var fe=l[d++]&63;if((H&240)==224?H=(H&15)<<12|Y<<6|fe:H=(H&7)<<18|Y<<12|fe<<6|l[d++]&63,H<65536)B+=String.fromCharCode(H);else{var Me=H-65536;B+=String.fromCharCode(55296|Me>>10,56320|Me&1023)}}return B},je=[],et=l=>{for(var d=0,g=0;g<l.length;++g){var S=l.charCodeAt(g);S<=127?d++:S<=2047?d+=2:S>=55296&&S<=57343?(d+=4,++g):d+=3}return d},ct=(l,d,g,S)=>{if(!(S>0))return 0;for(var I=g,B=g+S-1,H=0;H<l.length;++H){var Y=l.charCodeAt(H);if(Y>=55296&&Y<=57343){var fe=l.charCodeAt(++H);Y=65536+((Y&1023)<<10)|fe&1023}if(Y<=127){if(g>=B)break;d[g++]=Y}else if(Y<=2047){if(g+1>=B)break;d[g++]=192|Y>>6,d[g++]=128|Y&63}else if(Y<=65535){if(g+2>=B)break;d[g++]=224|Y>>12,d[g++]=128|Y>>6&63,d[g++]=128|Y&63}else{if(g+3>=B)break;d[g++]=240|Y>>18,d[g++]=128|Y>>12&63,d[g++]=128|Y>>6&63,d[g++]=128|Y&63}}return d[g]=0,g-I};function Z(l,d,g){var S=et(l)+1,I=new Array(S),B=ct(l,I,0,I.length);return I.length=B,I}var Ie=()=>{if(!je.length){var l=null;if(m){var d=256,g=Buffer.alloc(d),S=0,I=process.stdin.fd;try{S=w.readSync(I,g,0,d)}catch(B){if(B.toString().includes("EOF"))S=0;else throw B}S>0&&(l=g.slice(0,S).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(l=window.prompt("Input: "),l!==null&&(l+=`
`));if(!l)return null;je=Z(l)}return je.shift()},_e={ttys:[],init(){},shutdown(){},register(l,d){_e.ttys[l]={input:[],output:[],ops:d},C.registerDevice(l,_e.stream_ops)},stream_ops:{open(l){var d=_e.ttys[l.node.rdev];if(!d)throw new C.ErrnoError(43);l.tty=d,l.seekable=!1},close(l){l.tty.ops.fsync(l.tty)},fsync(l){l.tty.ops.fsync(l.tty)},read(l,d,g,S,I){if(!l.tty||!l.tty.ops.get_char)throw new C.ErrnoError(60);for(var B=0,H=0;H<S;H++){var Y;try{Y=l.tty.ops.get_char(l.tty)}catch{throw new C.ErrnoError(29)}if(Y===void 0&&B===0)throw new C.ErrnoError(6);if(Y==null)break;B++,d[g+H]=Y}return B&&(l.node.timestamp=Date.now()),B},write(l,d,g,S,I){if(!l.tty||!l.tty.ops.put_char)throw new C.ErrnoError(60);try{for(var B=0;B<S;B++)l.tty.ops.put_char(l.tty,d[g+B])}catch{throw new C.ErrnoError(29)}return S&&(l.node.timestamp=Date.now()),B}},default_tty_ops:{get_char(l){return Ie()},put_char(l,d){d===null||d===10?(P(Ce(l.output)),l.output=[]):d!=0&&l.output.push(d)},fsync(l){l.output&&l.output.length>0&&(P(Ce(l.output)),l.output=[])},ioctl_tcgets(l){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(l,d,g){return 0},ioctl_tiocgwinsz(l){return[24,80]}},default_tty1_ops:{put_char(l,d){d===null||d===10?(y(Ce(l.output)),l.output=[]):d!=0&&l.output.push(d)},fsync(l){l.output&&l.output.length>0&&(y(Ce(l.output)),l.output=[])}}},De=(l,d)=>{O.fill(0,l,l+d)},ze=(l,d)=>Math.ceil(l/d)*d,Se=l=>{l=ze(l,65536);var d=tm(65536,l);return d&&De(d,l),d},Ee={ops_table:null,mount(l){return Ee.createNode(null,"/",16895,0)},createNode(l,d,g,S){if(C.isBlkdev(g)||C.isFIFO(g))throw new C.ErrnoError(63);Ee.ops_table||(Ee.ops_table={dir:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr,lookup:Ee.node_ops.lookup,mknod:Ee.node_ops.mknod,rename:Ee.node_ops.rename,unlink:Ee.node_ops.unlink,rmdir:Ee.node_ops.rmdir,readdir:Ee.node_ops.readdir,symlink:Ee.node_ops.symlink},stream:{llseek:Ee.stream_ops.llseek}},file:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr},stream:{llseek:Ee.stream_ops.llseek,read:Ee.stream_ops.read,write:Ee.stream_ops.write,allocate:Ee.stream_ops.allocate,mmap:Ee.stream_ops.mmap,msync:Ee.stream_ops.msync}},link:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr,readlink:Ee.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr},stream:C.chrdev_stream_ops}});var I=C.createNode(l,d,g,S);return C.isDir(I.mode)?(I.node_ops=Ee.ops_table.dir.node,I.stream_ops=Ee.ops_table.dir.stream,I.contents={}):C.isFile(I.mode)?(I.node_ops=Ee.ops_table.file.node,I.stream_ops=Ee.ops_table.file.stream,I.usedBytes=0,I.contents=null):C.isLink(I.mode)?(I.node_ops=Ee.ops_table.link.node,I.stream_ops=Ee.ops_table.link.stream):C.isChrdev(I.mode)&&(I.node_ops=Ee.ops_table.chrdev.node,I.stream_ops=Ee.ops_table.chrdev.stream),I.timestamp=Date.now(),l&&(l.contents[d]=I,l.timestamp=I.timestamp),I},getFileDataAsTypedArray(l){return l.contents?l.contents.subarray?l.contents.subarray(0,l.usedBytes):new Uint8Array(l.contents):new Uint8Array(0)},expandFileStorage(l,d){var g=l.contents?l.contents.length:0;if(!(g>=d)){var S=1024*1024;d=Math.max(d,g*(g<S?2:1.125)>>>0),g!=0&&(d=Math.max(d,256));var I=l.contents;l.contents=new Uint8Array(d),l.usedBytes>0&&l.contents.set(I.subarray(0,l.usedBytes),0)}},resizeFileStorage(l,d){if(l.usedBytes!=d)if(d==0)l.contents=null,l.usedBytes=0;else{var g=l.contents;l.contents=new Uint8Array(d),g&&l.contents.set(g.subarray(0,Math.min(d,l.usedBytes))),l.usedBytes=d}},node_ops:{getattr(l){var d={};return d.dev=C.isChrdev(l.mode)?l.id:1,d.ino=l.id,d.mode=l.mode,d.nlink=1,d.uid=0,d.gid=0,d.rdev=l.rdev,C.isDir(l.mode)?d.size=4096:C.isFile(l.mode)?d.size=l.usedBytes:C.isLink(l.mode)?d.size=l.link.length:d.size=0,d.atime=new Date(l.timestamp),d.mtime=new Date(l.timestamp),d.ctime=new Date(l.timestamp),d.blksize=4096,d.blocks=Math.ceil(d.size/d.blksize),d},setattr(l,d){d.mode!==void 0&&(l.mode=d.mode),d.timestamp!==void 0&&(l.timestamp=d.timestamp),d.size!==void 0&&Ee.resizeFileStorage(l,d.size)},lookup(l,d){throw C.genericErrors[44]},mknod(l,d,g,S){return Ee.createNode(l,d,g,S)},rename(l,d,g){if(C.isDir(l.mode)){var S;try{S=C.lookupNode(d,g)}catch{}if(S)for(var I in S.contents)throw new C.ErrnoError(55)}delete l.parent.contents[l.name],l.parent.timestamp=Date.now(),l.name=g,d.contents[g]=l,d.timestamp=l.parent.timestamp},unlink(l,d){delete l.contents[d],l.timestamp=Date.now()},rmdir(l,d){var g=C.lookupNode(l,d);for(var S in g.contents)throw new C.ErrnoError(55);delete l.contents[d],l.timestamp=Date.now()},readdir(l){var d=[".",".."];for(var g of Object.keys(l.contents))d.push(g);return d},symlink(l,d,g){var S=Ee.createNode(l,d,41471,0);return S.link=g,S},readlink(l){if(!C.isLink(l.mode))throw new C.ErrnoError(28);return l.link}},stream_ops:{read(l,d,g,S,I){var B=l.node.contents;if(I>=l.node.usedBytes)return 0;var H=Math.min(l.node.usedBytes-I,S);if(H>8&&B.subarray)d.set(B.subarray(I,I+H),g);else for(var Y=0;Y<H;Y++)d[g+Y]=B[I+Y];return H},write(l,d,g,S,I,B){if(d.buffer===V.buffer&&(B=!1),!S)return 0;var H=l.node;if(H.timestamp=Date.now(),d.subarray&&(!H.contents||H.contents.subarray)){if(B)return H.contents=d.subarray(g,g+S),H.usedBytes=S,S;if(H.usedBytes===0&&I===0)return H.contents=d.slice(g,g+S),H.usedBytes=S,S;if(I+S<=H.usedBytes)return H.contents.set(d.subarray(g,g+S),I),S}if(Ee.expandFileStorage(H,I+S),H.contents.subarray&&d.subarray)H.contents.set(d.subarray(g,g+S),I);else for(var Y=0;Y<S;Y++)H.contents[I+Y]=d[g+Y];return H.usedBytes=Math.max(H.usedBytes,I+S),S},llseek(l,d,g){var S=d;if(g===1?S+=l.position:g===2&&C.isFile(l.node.mode)&&(S+=l.node.usedBytes),S<0)throw new C.ErrnoError(28);return S},allocate(l,d,g){Ee.expandFileStorage(l.node,d+g),l.node.usedBytes=Math.max(l.node.usedBytes,d+g)},mmap(l,d,g,S,I){if(!C.isFile(l.node.mode))throw new C.ErrnoError(43);var B,H,Y=l.node.contents;if(!(I&2)&&Y&&Y.buffer===V.buffer)H=!1,B=Y.byteOffset;else{if(H=!0,B=Se(d),!B)throw new C.ErrnoError(48);Y&&((g>0||g+d<Y.length)&&(Y.subarray?Y=Y.subarray(g,g+d):Y=Array.prototype.slice.call(Y,g,g+d)),V.set(Y,B))}return{ptr:B,allocated:H}},msync(l,d,g,S,I){return Ee.stream_ops.write(l,d,0,S,g,!1),0}}},Ke=(l,d,g,S)=>{var I=`al ${l}`;A(l).then(B=>{d(new Uint8Array(B)),I&&ge()},B=>{if(g)g();else throw`Loading data file "${l}" failed.`}),I&&ye()},Bt=(l,d,g,S,I,B)=>{C.createDataFile(l,d,g,S,I,B)},Rt=o.preloadPlugins||[],Pn=(l,d,g,S)=>{typeof Browser<"u"&&Browser.init();var I=!1;return Rt.forEach(B=>{I||B.canHandle(d)&&(B.handle(l,d,g,S),I=!0)}),I},Wn=(l,d,g,S,I,B,H,Y,fe,Me)=>{var He=d?Xe.resolve(le.join2(l,d)):l;function We(it){function qe(ht){Me==null||Me(),Y||Bt(l,d,ht,S,I,fe),B==null||B(),ge()}Pn(it,He,qe,()=>{H==null||H(),ge()})||qe(it)}ye(),typeof g=="string"?Ke(g,We,H):We(g)},sh=l=>{var d={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},g=d[l];if(typeof g>"u")throw new Error(`Unknown file open mode: ${l}`);return g},xa=(l,d)=>{var g=0;return l&&(g|=365),d&&(g|=146),g},C={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(l){this.name="ErrnoError",this.errno=l}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(l){this.node=l}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(l){this.shared.flags=l}get position(){return this.shared.position}set position(l){this.shared.position=l}},FSNode:class{constructor(l,d,g,S){l||(l=this),this.parent=l,this.mount=l.mount,this.mounted=null,this.id=C.nextInode++,this.name=d,this.mode=g,this.node_ops={},this.stream_ops={},this.rdev=S,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(l){l?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(l){l?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return C.isDir(this.mode)}get isDevice(){return C.isChrdev(this.mode)}},lookupPath(l,d={}){if(l=Xe.resolve(l),!l)return{path:"",node:null};var g={follow_mount:!0,recurse_count:0};if(d=Object.assign(g,d),d.recurse_count>8)throw new C.ErrnoError(32);for(var S=l.split("/").filter(We=>!!We),I=C.root,B="/",H=0;H<S.length;H++){var Y=H===S.length-1;if(Y&&d.parent)break;if(I=C.lookupNode(I,S[H]),B=le.join2(B,S[H]),C.isMountpoint(I)&&(!Y||Y&&d.follow_mount)&&(I=I.mounted.root),!Y||d.follow)for(var fe=0;C.isLink(I.mode);){var Me=C.readlink(B);B=Xe.resolve(le.dirname(B),Me);var He=C.lookupPath(B,{recurse_count:d.recurse_count+1});if(I=He.node,fe++>40)throw new C.ErrnoError(32)}}return{path:B,node:I}},getPath(l){for(var d;;){if(C.isRoot(l)){var g=l.mount.mountpoint;return d?g[g.length-1]!=="/"?`${g}/${d}`:g+d:g}d=d?`${l.name}/${d}`:l.name,l=l.parent}},hashName(l,d){for(var g=0,S=0;S<d.length;S++)g=(g<<5)-g+d.charCodeAt(S)|0;return(l+g>>>0)%C.nameTable.length},hashAddNode(l){var d=C.hashName(l.parent.id,l.name);l.name_next=C.nameTable[d],C.nameTable[d]=l},hashRemoveNode(l){var d=C.hashName(l.parent.id,l.name);if(C.nameTable[d]===l)C.nameTable[d]=l.name_next;else for(var g=C.nameTable[d];g;){if(g.name_next===l){g.name_next=l.name_next;break}g=g.name_next}},lookupNode(l,d){var g=C.mayLookup(l);if(g)throw new C.ErrnoError(g);for(var S=C.hashName(l.id,d),I=C.nameTable[S];I;I=I.name_next){var B=I.name;if(I.parent.id===l.id&&B===d)return I}return C.lookup(l,d)},createNode(l,d,g,S){var I=new C.FSNode(l,d,g,S);return C.hashAddNode(I),I},destroyNode(l){C.hashRemoveNode(l)},isRoot(l){return l===l.parent},isMountpoint(l){return!!l.mounted},isFile(l){return(l&61440)===32768},isDir(l){return(l&61440)===16384},isLink(l){return(l&61440)===40960},isChrdev(l){return(l&61440)===8192},isBlkdev(l){return(l&61440)===24576},isFIFO(l){return(l&61440)===4096},isSocket(l){return(l&49152)===49152},flagsToPermissionString(l){var d=["r","w","rw"][l&3];return l&512&&(d+="w"),d},nodePermissions(l,d){return C.ignorePermissions?0:d.includes("r")&&!(l.mode&292)||d.includes("w")&&!(l.mode&146)||d.includes("x")&&!(l.mode&73)?2:0},mayLookup(l){if(!C.isDir(l.mode))return 54;var d=C.nodePermissions(l,"x");return d||(l.node_ops.lookup?0:2)},mayCreate(l,d){try{var g=C.lookupNode(l,d);return 20}catch{}return C.nodePermissions(l,"wx")},mayDelete(l,d,g){var S;try{S=C.lookupNode(l,d)}catch(B){return B.errno}var I=C.nodePermissions(l,"wx");if(I)return I;if(g){if(!C.isDir(S.mode))return 54;if(C.isRoot(S)||C.getPath(S)===C.cwd())return 10}else if(C.isDir(S.mode))return 31;return 0},mayOpen(l,d){return l?C.isLink(l.mode)?32:C.isDir(l.mode)&&(C.flagsToPermissionString(d)!=="r"||d&512)?31:C.nodePermissions(l,C.flagsToPermissionString(d)):44},MAX_OPEN_FDS:4096,nextfd(){for(var l=0;l<=C.MAX_OPEN_FDS;l++)if(!C.streams[l])return l;throw new C.ErrnoError(33)},getStreamChecked(l){var d=C.getStream(l);if(!d)throw new C.ErrnoError(8);return d},getStream:l=>C.streams[l],createStream(l,d=-1){return l=Object.assign(new C.FSStream,l),d==-1&&(d=C.nextfd()),l.fd=d,C.streams[d]=l,l},closeStream(l){C.streams[l]=null},dupStream(l,d=-1){var S,I;var g=C.createStream(l,d);return(I=(S=g.stream_ops)==null?void 0:S.dup)==null||I.call(S,g),g},chrdev_stream_ops:{open(l){var g,S;var d=C.getDevice(l.node.rdev);l.stream_ops=d.stream_ops,(S=(g=l.stream_ops).open)==null||S.call(g,l)},llseek(){throw new C.ErrnoError(70)}},major:l=>l>>8,minor:l=>l&255,makedev:(l,d)=>l<<8|d,registerDevice(l,d){C.devices[l]={stream_ops:d}},getDevice:l=>C.devices[l],getMounts(l){for(var d=[],g=[l];g.length;){var S=g.pop();d.push(S),g.push(...S.mounts)}return d},syncfs(l,d){typeof l=="function"&&(d=l,l=!1),C.syncFSRequests++,C.syncFSRequests>1&&y(`warning: ${C.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var g=C.getMounts(C.root.mount),S=0;function I(H){return C.syncFSRequests--,d(H)}function B(H){if(H)return B.errored?void 0:(B.errored=!0,I(H));++S>=g.length&&I(null)}g.forEach(H=>{if(!H.type.syncfs)return B(null);H.type.syncfs(H,l,B)})},mount(l,d,g){var S=g==="/",I=!g,B;if(S&&C.root)throw new C.ErrnoError(10);if(!S&&!I){var H=C.lookupPath(g,{follow_mount:!1});if(g=H.path,B=H.node,C.isMountpoint(B))throw new C.ErrnoError(10);if(!C.isDir(B.mode))throw new C.ErrnoError(54)}var Y={type:l,opts:d,mountpoint:g,mounts:[]},fe=l.mount(Y);return fe.mount=Y,Y.root=fe,S?C.root=fe:B&&(B.mounted=Y,B.mount&&B.mount.mounts.push(Y)),fe},unmount(l){var d=C.lookupPath(l,{follow_mount:!1});if(!C.isMountpoint(d.node))throw new C.ErrnoError(28);var g=d.node,S=g.mounted,I=C.getMounts(S);Object.keys(C.nameTable).forEach(H=>{for(var Y=C.nameTable[H];Y;){var fe=Y.name_next;I.includes(Y.mount)&&C.destroyNode(Y),Y=fe}}),g.mounted=null;var B=g.mount.mounts.indexOf(S);g.mount.mounts.splice(B,1)},lookup(l,d){return l.node_ops.lookup(l,d)},mknod(l,d,g){var S=C.lookupPath(l,{parent:!0}),I=S.node,B=le.basename(l);if(!B||B==="."||B==="..")throw new C.ErrnoError(28);var H=C.mayCreate(I,B);if(H)throw new C.ErrnoError(H);if(!I.node_ops.mknod)throw new C.ErrnoError(63);return I.node_ops.mknod(I,B,d,g)},create(l,d){return d=d!==void 0?d:438,d&=4095,d|=32768,C.mknod(l,d,0)},mkdir(l,d){return d=d!==void 0?d:511,d&=1023,d|=16384,C.mknod(l,d,0)},mkdirTree(l,d){for(var g=l.split("/"),S="",I=0;I<g.length;++I)if(g[I]){S+="/"+g[I];try{C.mkdir(S,d)}catch(B){if(B.errno!=20)throw B}}},mkdev(l,d,g){return typeof g>"u"&&(g=d,d=438),d|=8192,C.mknod(l,d,g)},symlink(l,d){if(!Xe.resolve(l))throw new C.ErrnoError(44);var g=C.lookupPath(d,{parent:!0}),S=g.node;if(!S)throw new C.ErrnoError(44);var I=le.basename(d),B=C.mayCreate(S,I);if(B)throw new C.ErrnoError(B);if(!S.node_ops.symlink)throw new C.ErrnoError(63);return S.node_ops.symlink(S,I,l)},rename(l,d){var g=le.dirname(l),S=le.dirname(d),I=le.basename(l),B=le.basename(d),H,Y,fe;if(H=C.lookupPath(l,{parent:!0}),Y=H.node,H=C.lookupPath(d,{parent:!0}),fe=H.node,!Y||!fe)throw new C.ErrnoError(44);if(Y.mount!==fe.mount)throw new C.ErrnoError(75);var Me=C.lookupNode(Y,I),He=Xe.relative(l,S);if(He.charAt(0)!==".")throw new C.ErrnoError(28);if(He=Xe.relative(d,g),He.charAt(0)!==".")throw new C.ErrnoError(55);var We;try{We=C.lookupNode(fe,B)}catch{}if(Me!==We){var it=C.isDir(Me.mode),qe=C.mayDelete(Y,I,it);if(qe)throw new C.ErrnoError(qe);if(qe=We?C.mayDelete(fe,B,it):C.mayCreate(fe,B),qe)throw new C.ErrnoError(qe);if(!Y.node_ops.rename)throw new C.ErrnoError(63);if(C.isMountpoint(Me)||We&&C.isMountpoint(We))throw new C.ErrnoError(10);if(fe!==Y&&(qe=C.nodePermissions(Y,"w"),qe))throw new C.ErrnoError(qe);C.hashRemoveNode(Me);try{Y.node_ops.rename(Me,fe,B),Me.parent=fe}catch(ht){throw ht}finally{C.hashAddNode(Me)}}},rmdir(l){var d=C.lookupPath(l,{parent:!0}),g=d.node,S=le.basename(l),I=C.lookupNode(g,S),B=C.mayDelete(g,S,!0);if(B)throw new C.ErrnoError(B);if(!g.node_ops.rmdir)throw new C.ErrnoError(63);if(C.isMountpoint(I))throw new C.ErrnoError(10);g.node_ops.rmdir(g,S),C.destroyNode(I)},readdir(l){var d=C.lookupPath(l,{follow:!0}),g=d.node;if(!g.node_ops.readdir)throw new C.ErrnoError(54);return g.node_ops.readdir(g)},unlink(l){var d=C.lookupPath(l,{parent:!0}),g=d.node;if(!g)throw new C.ErrnoError(44);var S=le.basename(l),I=C.lookupNode(g,S),B=C.mayDelete(g,S,!1);if(B)throw new C.ErrnoError(B);if(!g.node_ops.unlink)throw new C.ErrnoError(63);if(C.isMountpoint(I))throw new C.ErrnoError(10);g.node_ops.unlink(g,S),C.destroyNode(I)},readlink(l){var d=C.lookupPath(l),g=d.node;if(!g)throw new C.ErrnoError(44);if(!g.node_ops.readlink)throw new C.ErrnoError(28);return Xe.resolve(C.getPath(g.parent),g.node_ops.readlink(g))},stat(l,d){var g=C.lookupPath(l,{follow:!d}),S=g.node;if(!S)throw new C.ErrnoError(44);if(!S.node_ops.getattr)throw new C.ErrnoError(63);return S.node_ops.getattr(S)},lstat(l){return C.stat(l,!0)},chmod(l,d,g){var S;if(typeof l=="string"){var I=C.lookupPath(l,{follow:!g});S=I.node}else S=l;if(!S.node_ops.setattr)throw new C.ErrnoError(63);S.node_ops.setattr(S,{mode:d&4095|S.mode&-4096,timestamp:Date.now()})},lchmod(l,d){C.chmod(l,d,!0)},fchmod(l,d){var g=C.getStreamChecked(l);C.chmod(g.node,d)},chown(l,d,g,S){var I;if(typeof l=="string"){var B=C.lookupPath(l,{follow:!S});I=B.node}else I=l;if(!I.node_ops.setattr)throw new C.ErrnoError(63);I.node_ops.setattr(I,{timestamp:Date.now()})},lchown(l,d,g){C.chown(l,d,g,!0)},fchown(l,d,g){var S=C.getStreamChecked(l);C.chown(S.node,d,g)},truncate(l,d){if(d<0)throw new C.ErrnoError(28);var g;if(typeof l=="string"){var S=C.lookupPath(l,{follow:!0});g=S.node}else g=l;if(!g.node_ops.setattr)throw new C.ErrnoError(63);if(C.isDir(g.mode))throw new C.ErrnoError(31);if(!C.isFile(g.mode))throw new C.ErrnoError(28);var I=C.nodePermissions(g,"w");if(I)throw new C.ErrnoError(I);g.node_ops.setattr(g,{size:d,timestamp:Date.now()})},ftruncate(l,d){var g=C.getStreamChecked(l);if((g.flags&2097155)===0)throw new C.ErrnoError(28);C.truncate(g.node,d)},utime(l,d,g){var S=C.lookupPath(l,{follow:!0}),I=S.node;I.node_ops.setattr(I,{timestamp:Math.max(d,g)})},open(l,d,g){if(l==="")throw new C.ErrnoError(44);d=typeof d=="string"?sh(d):d,d&64?(g=typeof g>"u"?438:g,g=g&4095|32768):g=0;var S;if(typeof l=="object")S=l;else{l=le.normalize(l);try{var I=C.lookupPath(l,{follow:!(d&131072)});S=I.node}catch{}}var B=!1;if(d&64)if(S){if(d&128)throw new C.ErrnoError(20)}else S=C.mknod(l,g,0),B=!0;if(!S)throw new C.ErrnoError(44);if(C.isChrdev(S.mode)&&(d&=-513),d&65536&&!C.isDir(S.mode))throw new C.ErrnoError(54);if(!B){var H=C.mayOpen(S,d);if(H)throw new C.ErrnoError(H)}d&512&&!B&&C.truncate(S,0),d&=-131713;var Y=C.createStream({node:S,path:C.getPath(S),flags:d,seekable:!0,position:0,stream_ops:S.stream_ops,ungotten:[],error:!1});return Y.stream_ops.open&&Y.stream_ops.open(Y),o.logReadFiles&&!(d&1)&&(l in C.readFiles||(C.readFiles[l]=1)),Y},close(l){if(C.isClosed(l))throw new C.ErrnoError(8);l.getdents&&(l.getdents=null);try{l.stream_ops.close&&l.stream_ops.close(l)}catch(d){throw d}finally{C.closeStream(l.fd)}l.fd=null},isClosed(l){return l.fd===null},llseek(l,d,g){if(C.isClosed(l))throw new C.ErrnoError(8);if(!l.seekable||!l.stream_ops.llseek)throw new C.ErrnoError(70);if(g!=0&&g!=1&&g!=2)throw new C.ErrnoError(28);return l.position=l.stream_ops.llseek(l,d,g),l.ungotten=[],l.position},read(l,d,g,S,I){if(S<0||I<0)throw new C.ErrnoError(28);if(C.isClosed(l))throw new C.ErrnoError(8);if((l.flags&2097155)===1)throw new C.ErrnoError(8);if(C.isDir(l.node.mode))throw new C.ErrnoError(31);if(!l.stream_ops.read)throw new C.ErrnoError(28);var B=typeof I<"u";if(!B)I=l.position;else if(!l.seekable)throw new C.ErrnoError(70);var H=l.stream_ops.read(l,d,g,S,I);return B||(l.position+=H),H},write(l,d,g,S,I,B){if(S<0||I<0)throw new C.ErrnoError(28);if(C.isClosed(l))throw new C.ErrnoError(8);if((l.flags&2097155)===0)throw new C.ErrnoError(8);if(C.isDir(l.node.mode))throw new C.ErrnoError(31);if(!l.stream_ops.write)throw new C.ErrnoError(28);l.seekable&&l.flags&1024&&C.llseek(l,0,2);var H=typeof I<"u";if(!H)I=l.position;else if(!l.seekable)throw new C.ErrnoError(70);var Y=l.stream_ops.write(l,d,g,S,I,B);return H||(l.position+=Y),Y},allocate(l,d,g){if(C.isClosed(l))throw new C.ErrnoError(8);if(d<0||g<=0)throw new C.ErrnoError(28);if((l.flags&2097155)===0)throw new C.ErrnoError(8);if(!C.isFile(l.node.mode)&&!C.isDir(l.node.mode))throw new C.ErrnoError(43);if(!l.stream_ops.allocate)throw new C.ErrnoError(138);l.stream_ops.allocate(l,d,g)},mmap(l,d,g,S,I){if((S&2)!==0&&(I&2)===0&&(l.flags&2097155)!==2)throw new C.ErrnoError(2);if((l.flags&2097155)===1)throw new C.ErrnoError(2);if(!l.stream_ops.mmap)throw new C.ErrnoError(43);if(!d)throw new C.ErrnoError(28);return l.stream_ops.mmap(l,d,g,S,I)},msync(l,d,g,S,I){return l.stream_ops.msync?l.stream_ops.msync(l,d,g,S,I):0},ioctl(l,d,g){if(!l.stream_ops.ioctl)throw new C.ErrnoError(59);return l.stream_ops.ioctl(l,d,g)},readFile(l,d={}){if(d.flags=d.flags||0,d.encoding=d.encoding||"binary",d.encoding!=="utf8"&&d.encoding!=="binary")throw new Error(`Invalid encoding type "${d.encoding}"`);var g,S=C.open(l,d.flags),I=C.stat(l),B=I.size,H=new Uint8Array(B);return C.read(S,H,0,B,0),d.encoding==="utf8"?g=Ce(H):d.encoding==="binary"&&(g=H),C.close(S),g},writeFile(l,d,g={}){g.flags=g.flags||577;var S=C.open(l,g.flags,g.mode);if(typeof d=="string"){var I=new Uint8Array(et(d)+1),B=ct(d,I,0,I.length);C.write(S,I,0,B,void 0,g.canOwn)}else if(ArrayBuffer.isView(d))C.write(S,d,0,d.byteLength,void 0,g.canOwn);else throw new Error("Unsupported data type");C.close(S)},cwd:()=>C.currentPath,chdir(l){var d=C.lookupPath(l,{follow:!0});if(d.node===null)throw new C.ErrnoError(44);if(!C.isDir(d.node.mode))throw new C.ErrnoError(54);var g=C.nodePermissions(d.node,"x");if(g)throw new C.ErrnoError(g);C.currentPath=d.path},createDefaultDirectories(){C.mkdir("/tmp"),C.mkdir("/home"),C.mkdir("/home/web_user")},createDefaultDevices(){C.mkdir("/dev"),C.registerDevice(C.makedev(1,3),{read:()=>0,write:(S,I,B,H,Y)=>H}),C.mkdev("/dev/null",C.makedev(1,3)),_e.register(C.makedev(5,0),_e.default_tty_ops),_e.register(C.makedev(6,0),_e.default_tty1_ops),C.mkdev("/dev/tty",C.makedev(5,0)),C.mkdev("/dev/tty1",C.makedev(6,0));var l=new Uint8Array(1024),d=0,g=()=>(d===0&&(d=Pe(l).byteLength),l[--d]);C.createDevice("/dev","random",g),C.createDevice("/dev","urandom",g),C.mkdir("/dev/shm"),C.mkdir("/dev/shm/tmp")},createSpecialDirectories(){C.mkdir("/proc");var l=C.mkdir("/proc/self");C.mkdir("/proc/self/fd"),C.mount({mount(){var d=C.createNode(l,"fd",16895,73);return d.node_ops={lookup(g,S){var I=+S,B=C.getStreamChecked(I),H={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>B.path}};return H.parent=H,H}},d}},{},"/proc/self/fd")},createStandardStreams(l,d,g){l?C.createDevice("/dev","stdin",l):C.symlink("/dev/tty","/dev/stdin"),d?C.createDevice("/dev","stdout",null,d):C.symlink("/dev/tty","/dev/stdout"),g?C.createDevice("/dev","stderr",null,g):C.symlink("/dev/tty1","/dev/stderr"),C.open("/dev/stdin",0),C.open("/dev/stdout",1),C.open("/dev/stderr",1)},staticInit(){[44].forEach(l=>{C.genericErrors[l]=new C.ErrnoError(l),C.genericErrors[l].stack="<generic error, no stack>"}),C.nameTable=new Array(4096),C.mount(Ee,{},"/"),C.createDefaultDirectories(),C.createDefaultDevices(),C.createSpecialDirectories(),C.filesystems={MEMFS:Ee}},init(l,d,g){C.initialized=!0,l??(l=o.stdin),d??(d=o.stdout),g??(g=o.stderr),C.createStandardStreams(l,d,g)},quit(){C.initialized=!1;for(var l=0;l<C.streams.length;l++){var d=C.streams[l];d&&C.close(d)}},findObject(l,d){var g=C.analyzePath(l,d);return g.exists?g.object:null},analyzePath(l,d){try{var g=C.lookupPath(l,{follow:!d});l=g.path}catch{}var S={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var g=C.lookupPath(l,{parent:!0});S.parentExists=!0,S.parentPath=g.path,S.parentObject=g.node,S.name=le.basename(l),g=C.lookupPath(l,{follow:!d}),S.exists=!0,S.path=g.path,S.object=g.node,S.name=g.node.name,S.isRoot=g.path==="/"}catch(I){S.error=I.errno}return S},createPath(l,d,g,S){l=typeof l=="string"?l:C.getPath(l);for(var I=d.split("/").reverse();I.length;){var B=I.pop();if(B){var H=le.join2(l,B);try{C.mkdir(H)}catch{}l=H}}return H},createFile(l,d,g,S,I){var B=le.join2(typeof l=="string"?l:C.getPath(l),d),H=xa(S,I);return C.create(B,H)},createDataFile(l,d,g,S,I,B){var H=d;l&&(l=typeof l=="string"?l:C.getPath(l),H=d?le.join2(l,d):l);var Y=xa(S,I),fe=C.create(H,Y);if(g){if(typeof g=="string"){for(var Me=new Array(g.length),He=0,We=g.length;He<We;++He)Me[He]=g.charCodeAt(He);g=Me}C.chmod(fe,Y|146);var it=C.open(fe,577);C.write(it,g,0,g.length,0,B),C.close(it),C.chmod(fe,Y)}},createDevice(l,d,g,S){var Y;var I=le.join2(typeof l=="string"?l:C.getPath(l),d),B=xa(!!g,!!S);(Y=C.createDevice).major??(Y.major=64);var H=C.makedev(C.createDevice.major++,0);return C.registerDevice(H,{open(fe){fe.seekable=!1},close(fe){var Me;(Me=S==null?void 0:S.buffer)!=null&&Me.length&&S(10)},read(fe,Me,He,We,it){for(var qe=0,ht=0;ht<We;ht++){var Et;try{Et=g()}catch{throw new C.ErrnoError(29)}if(Et===void 0&&qe===0)throw new C.ErrnoError(6);if(Et==null)break;qe++,Me[He+ht]=Et}return qe&&(fe.node.timestamp=Date.now()),qe},write(fe,Me,He,We,it){for(var qe=0;qe<We;qe++)try{S(Me[He+qe])}catch{throw new C.ErrnoError(29)}return We&&(fe.node.timestamp=Date.now()),qe}}),C.mkdev(I,B,H)},forceLoadFile(l){if(l.isDevice||l.isFolder||l.link||l.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{l.contents=M(l.url),l.usedBytes=l.contents.length}catch{throw new C.ErrnoError(29)}},createLazyFile(l,d,g,S,I){class B{constructor(){this.lengthKnown=!1,this.chunks=[]}get(qe){if(!(qe>this.length-1||qe<0)){var ht=qe%this.chunkSize,Et=qe/this.chunkSize|0;return this.getter(Et)[ht]}}setDataGetter(qe){this.getter=qe}cacheLength(){var qe=new XMLHttpRequest;if(qe.open("HEAD",g,!1),qe.send(null),!(qe.status>=200&&qe.status<300||qe.status===304))throw new Error("Couldn't load "+g+". Status: "+qe.status);var ht=Number(qe.getResponseHeader("Content-length")),Et,ln=(Et=qe.getResponseHeader("Accept-Ranges"))&&Et==="bytes",Yt=(Et=qe.getResponseHeader("Content-Encoding"))&&Et==="gzip",ui=1024*1024;ln||(ui=ht);var hi=(Ni,Cs)=>{if(Ni>Cs)throw new Error("invalid range ("+Ni+", "+Cs+") or no bytes requested!");if(Cs>ht-1)throw new Error("only "+ht+" bytes available! programmer error!");var cn=new XMLHttpRequest;if(cn.open("GET",g,!1),ht!==ui&&cn.setRequestHeader("Range","bytes="+Ni+"-"+Cs),cn.responseType="arraybuffer",cn.overrideMimeType&&cn.overrideMimeType("text/plain; charset=x-user-defined"),cn.send(null),!(cn.status>=200&&cn.status<300||cn.status===304))throw new Error("Couldn't load "+g+". Status: "+cn.status);return cn.response!==void 0?new Uint8Array(cn.response||[]):Z(cn.responseText||"")},Sa=this;Sa.setDataGetter(Ni=>{var Cs=Ni*ui,cn=(Ni+1)*ui-1;if(cn=Math.min(cn,ht-1),typeof Sa.chunks[Ni]>"u"&&(Sa.chunks[Ni]=hi(Cs,cn)),typeof Sa.chunks[Ni]>"u")throw new Error("doXHR failed!");return Sa.chunks[Ni]}),(Yt||!ht)&&(ui=ht=1,ht=this.getter(0).length,ui=ht,P("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ht,this._chunkSize=ui,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!p)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var H=new B,Y={isDevice:!1,contents:H}}else var Y={isDevice:!1,url:g};var fe=C.createFile(l,d,Y,S,I);Y.contents?fe.contents=Y.contents:Y.url&&(fe.contents=null,fe.url=Y.url),Object.defineProperties(fe,{usedBytes:{get:function(){return this.contents.length}}});var Me={},He=Object.keys(fe.stream_ops);He.forEach(it=>{var qe=fe.stream_ops[it];Me[it]=(...ht)=>(C.forceLoadFile(fe),qe(...ht))});function We(it,qe,ht,Et,ln){var Yt=it.node.contents;if(ln>=Yt.length)return 0;var ui=Math.min(Yt.length-ln,Et);if(Yt.slice)for(var hi=0;hi<ui;hi++)qe[ht+hi]=Yt[ln+hi];else for(var hi=0;hi<ui;hi++)qe[ht+hi]=Yt.get(ln+hi);return ui}return Me.read=(it,qe,ht,Et,ln)=>(C.forceLoadFile(fe),We(it,qe,ht,Et,ln)),Me.mmap=(it,qe,ht,Et,ln)=>{C.forceLoadFile(fe);var Yt=Se(qe);if(!Yt)throw new C.ErrnoError(48);return We(it,V,Yt,qe,ht),{ptr:Yt,allocated:!0}},fe.stream_ops=Me,fe}},Nr=(l,d)=>l?Ce(O,l,d):"",Tt={DEFAULT_POLLMASK:5,calculateAt(l,d,g){if(le.isAbs(d))return d;var S;if(l===-100)S=C.cwd();else{var I=Tt.getStreamFromFD(l);S=I.path}if(d.length==0){if(!g)throw new C.ErrnoError(44);return S}return le.join2(S,d)},doStat(l,d,g){var S=l(d);X[g>>2]=S.dev,X[g+4>>2]=S.mode,te[g+8>>2]=S.nlink,X[g+12>>2]=S.uid,X[g+16>>2]=S.gid,X[g+20>>2]=S.rdev,oe=[S.size>>>0,(K=S.size,+Math.abs(K)>=1?K>0?+Math.floor(K/4294967296)>>>0:~~+Math.ceil((K-+(~~K>>>0))/4294967296)>>>0:0)],X[g+24>>2]=oe[0],X[g+28>>2]=oe[1],X[g+32>>2]=4096,X[g+36>>2]=S.blocks;var I=S.atime.getTime(),B=S.mtime.getTime(),H=S.ctime.getTime();return oe=[Math.floor(I/1e3)>>>0,(K=Math.floor(I/1e3),+Math.abs(K)>=1?K>0?+Math.floor(K/4294967296)>>>0:~~+Math.ceil((K-+(~~K>>>0))/4294967296)>>>0:0)],X[g+40>>2]=oe[0],X[g+44>>2]=oe[1],te[g+48>>2]=I%1e3*1e3*1e3,oe=[Math.floor(B/1e3)>>>0,(K=Math.floor(B/1e3),+Math.abs(K)>=1?K>0?+Math.floor(K/4294967296)>>>0:~~+Math.ceil((K-+(~~K>>>0))/4294967296)>>>0:0)],X[g+56>>2]=oe[0],X[g+60>>2]=oe[1],te[g+64>>2]=B%1e3*1e3*1e3,oe=[Math.floor(H/1e3)>>>0,(K=Math.floor(H/1e3),+Math.abs(K)>=1?K>0?+Math.floor(K/4294967296)>>>0:~~+Math.ceil((K-+(~~K>>>0))/4294967296)>>>0:0)],X[g+72>>2]=oe[0],X[g+76>>2]=oe[1],te[g+80>>2]=H%1e3*1e3*1e3,oe=[S.ino>>>0,(K=S.ino,+Math.abs(K)>=1?K>0?+Math.floor(K/4294967296)>>>0:~~+Math.ceil((K-+(~~K>>>0))/4294967296)>>>0:0)],X[g+88>>2]=oe[0],X[g+92>>2]=oe[1],0},doMsync(l,d,g,S,I){if(!C.isFile(d.node.mode))throw new C.ErrnoError(43);if(S&2)return 0;var B=O.slice(l,l+g);C.msync(d,B,I,g,S)},getStreamFromFD(l){var d=C.getStreamChecked(l);return d},varargs:void 0,getStr(l){var d=Nr(l);return d}};function Yo(l,d){try{return l=Tt.getStr(l),C.chmod(l,d),0}catch(g){if(typeof C>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function Ko(l,d,g,S){try{if(d=Tt.getStr(d),d=Tt.calculateAt(l,d),g&-8)return-28;var I=C.lookupPath(d,{follow:!0}),B=I.node;if(!B)return-44;var H="";return g&4&&(H+="r"),g&2&&(H+="w"),g&1&&(H+="x"),H&&C.nodePermissions(B,H)?-2:0}catch(Y){if(typeof C>"u"||Y.name!=="ErrnoError")throw Y;return-Y.errno}}function Xn(){var l=X[+Tt.varargs>>2];return Tt.varargs+=4,l}var Li=Xn;function jo(l,d,g){Tt.varargs=g;try{var S=Tt.getStreamFromFD(l);switch(d){case 0:{var I=Xn();if(I<0)return-28;for(;C.streams[I];)I++;var B;return B=C.dupStream(S,I),B.fd}case 1:case 2:return 0;case 3:return S.flags;case 4:{var I=Xn();return S.flags|=I,0}case 12:{var I=Li(),H=0;return W[I+H>>1]=2,0}case 13:case 14:return 0}return-28}catch(Y){if(typeof C>"u"||Y.name!=="ErrnoError")throw Y;return-Y.errno}}function Zo(l,d){try{var g=Tt.getStreamFromFD(l);return Tt.doStat(C.stat,g.path,d)}catch(S){if(typeof C>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function Ts(l,d,g){Tt.varargs=g;try{var S=Tt.getStreamFromFD(l);switch(d){case 21509:return S.tty?0:-59;case 21505:{if(!S.tty)return-59;if(S.tty.ops.ioctl_tcgets){var I=S.tty.ops.ioctl_tcgets(S),B=Li();X[B>>2]=I.c_iflag||0,X[B+4>>2]=I.c_oflag||0,X[B+8>>2]=I.c_cflag||0,X[B+12>>2]=I.c_lflag||0;for(var H=0;H<32;H++)V[B+H+17]=I.c_cc[H]||0;return 0}return 0}case 21510:case 21511:case 21512:return S.tty?0:-59;case 21506:case 21507:case 21508:{if(!S.tty)return-59;if(S.tty.ops.ioctl_tcsets){for(var B=Li(),Y=X[B>>2],fe=X[B+4>>2],Me=X[B+8>>2],He=X[B+12>>2],We=[],H=0;H<32;H++)We.push(V[B+H+17]);return S.tty.ops.ioctl_tcsets(S.tty,d,{c_iflag:Y,c_oflag:fe,c_cflag:Me,c_lflag:He,c_cc:We})}return 0}case 21519:{if(!S.tty)return-59;var B=Li();return X[B>>2]=0,0}case 21520:return S.tty?-28:-59;case 21531:{var B=Li();return C.ioctl(S,d,B)}case 21523:{if(!S.tty)return-59;if(S.tty.ops.ioctl_tiocgwinsz){var it=S.tty.ops.ioctl_tiocgwinsz(S.tty),B=Li();W[B>>1]=it[0],W[B+2>>1]=it[1]}return 0}case 21524:return S.tty?0:-59;case 21515:return S.tty?0:-59;default:return-28}}catch(qe){if(typeof C>"u"||qe.name!=="ErrnoError")throw qe;return-qe.errno}}function Jo(l,d){try{return l=Tt.getStr(l),Tt.doStat(C.lstat,l,d)}catch(g){if(typeof C>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function ws(l,d,g,S){try{d=Tt.getStr(d);var I=S&256,B=S&4096;return S=S&-6401,d=Tt.calculateAt(l,d,B),Tt.doStat(I?C.lstat:C.stat,d,g)}catch(H){if(typeof C>"u"||H.name!=="ErrnoError")throw H;return-H.errno}}function Qo(l,d,g,S){Tt.varargs=S;try{d=Tt.getStr(d),d=Tt.calculateAt(l,d);var I=S?Xn():0;return C.open(d,g,I).fd}catch(B){if(typeof C>"u"||B.name!=="ErrnoError")throw B;return-B.errno}}function el(l){try{return l=Tt.getStr(l),C.rmdir(l),0}catch(d){if(typeof C>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function ah(l,d){try{return l=Tt.getStr(l),Tt.doStat(C.stat,l,d)}catch(g){if(typeof C>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function oh(l,d,g){try{return d=Tt.getStr(d),d=Tt.calculateAt(l,d),g===0?C.unlink(d):g===512?C.rmdir(d):ve("Invalid flags passed to unlinkat"),0}catch(S){if(typeof C>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}var lh=()=>{ve("")},ch=(l,d,g,S,I)=>{},tl=()=>{for(var l=new Array(256),d=0;d<256;++d)l[d]=String.fromCharCode(d);D=l},D,$=l=>{for(var d="",g=l;O[g];)d+=D[O[g++]];return d},ue={},ne={},re={},Be,Le=l=>{throw new Be(l)},Oe,Ye=l=>{throw new Oe(l)},Ze=(l,d,g)=>{l.forEach(Y=>re[Y]=d);function S(Y){var fe=g(Y);fe.length!==l.length&&Ye("Mismatched type converter count");for(var Me=0;Me<l.length;++Me)at(l[Me],fe[Me])}var I=new Array(d.length),B=[],H=0;d.forEach((Y,fe)=>{ne.hasOwnProperty(Y)?I[fe]=ne[Y]:(B.push(Y),ue.hasOwnProperty(Y)||(ue[Y]=[]),ue[Y].push(()=>{I[fe]=ne[Y],++H,H===B.length&&S(I)}))}),B.length===0&&S(I)};function mt(l,d,g={}){var S=d.name;if(l||Le(`type "${S}" must have a positive integer typeid pointer`),ne.hasOwnProperty(l)){if(g.ignoreDuplicateRegistrations)return;Le(`Cannot register type '${S}' twice`)}if(ne[l]=d,delete re[l],ue.hasOwnProperty(l)){var I=ue[l];delete ue[l],I.forEach(B=>B())}}function at(l,d,g={}){return mt(l,d,g)}var Ve=8,Ct=(l,d,g,S)=>{d=$(d),at(l,{name:d,fromWireType:function(I){return!!I},toWireType:function(I,B){return B?g:S},argPackAdvance:Ve,readValueFromPointer:function(I){return this.fromWireType(O[I])},destructorFunction:null})},Wt=[],Mt=[],Pt=l=>{l>9&&--Mt[l+1]===0&&(Mt[l]=void 0,Wt.push(l))},an=()=>Mt.length/2-5-Wt.length,Ge=()=>{Mt.push(0,1,void 0,1,null,1,!0,1,!1,1),o.count_emval_handles=an},bt={toValue:l=>(l||Le("Cannot use deleted val. handle = "+l),Mt[l]),toHandle:l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const d=Wt.pop()||Mt.length;return Mt[d]=l,Mt[d+1]=1,d}}}};function yt(l){return this.fromWireType(te[l>>2])}var Mn={name:"emscripten::val",fromWireType:l=>{var d=bt.toValue(l);return Pt(l),d},toWireType:(l,d)=>bt.toHandle(d),argPackAdvance:Ve,readValueFromPointer:yt,destructorFunction:null},qn=l=>at(l,Mn),Ii=(l,d)=>{switch(d){case 4:return function(g){return this.fromWireType(ie[g>>2])};case 8:return function(g){return this.fromWireType(pe[g>>3])};default:throw new TypeError(`invalid float width (${d}): ${l}`)}},mr=(l,d,g)=>{d=$(d),at(l,{name:d,fromWireType:S=>S,toWireType:(S,I)=>I,argPackAdvance:Ve,readValueFromPointer:Ii(d,g),destructorFunction:null})},wt=(l,d)=>Object.defineProperty(d,"name",{value:l}),Xt=l=>{for(;l.length;){var d=l.pop(),g=l.pop();g(d)}};function ci(l){for(var d=1;d<l.length;++d)if(l[d]!==null&&l[d].destructorFunction===void 0)return!0;return!1}function Ft(l,d){if(!(l instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof l} which is not a function`);var g=wt(l.name||"unknownFunctionName",function(){});g.prototype=l.prototype;var S=new g,I=l.apply(S,d);return I instanceof Object?I:S}function Di(l,d,g,S){for(var I=ci(l),B=l.length-2,H=[],Y=["fn"],fe=0;fe<B;++fe)H.push(`arg${fe}`),Y.push(`arg${fe}Wired`);H=H.join(","),Y=Y.join(",");var Me=`return function (${H}) {
`;I&&(Me+=`var destructors = [];
`);for(var He=I?"destructors":"null",We=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],fe=0;fe<B;++fe)Me+=`var arg${fe}Wired = argType${fe}['toWireType'](${He}, arg${fe});
`,We.push(`argType${fe}`);if(Me+=(g||S?"var rv = ":"")+`invoker(${Y});
`,I)Me+=`runDestructors(destructors);
`;else for(var fe=2;fe<l.length;++fe){var it=fe===1?"thisWired":"arg"+(fe-2)+"Wired";l[fe].destructorFunction!==null&&(Me+=`${it}_dtor(${it});
`,We.push(`${it}_dtor`))}return g&&(Me+=`var ret = retType['fromWireType'](rv);
return ret;
`),Me+=`}
`,[We,Me]}function gr(l,d,g,S,I,B){var H=d.length;H<2&&Le("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Y=d[1]!==null&&g!==null,fe=ci(d),Me=d[0].name!=="void",He=[l,Le,S,I,Xt,d[0],d[1]],We=0;We<H-2;++We)He.push(d[We+2]);if(!fe)for(var We=2;We<d.length;++We)d[We].destructorFunction!==null&&He.push(d[We].destructorFunction);let[it,qe]=Di(d,Y,Me,B);it.push(qe);var ht=Ft(Function,it)(...He);return wt(l,ht)}var nl=(l,d,g)=>{if(l[d].overloadTable===void 0){var S=l[d];l[d]=function(...I){return l[d].overloadTable.hasOwnProperty(I.length)||Le(`Function '${g}' called with an invalid number of arguments (${I.length}) - expects one of (${l[d].overloadTable})!`),l[d].overloadTable[I.length].apply(this,I)},l[d].overloadTable=[],l[d].overloadTable[S.argCount]=S}},ME=(l,d,g)=>{o.hasOwnProperty(l)?((g===void 0||o[l].overloadTable!==void 0&&o[l].overloadTable[g]!==void 0)&&Le(`Cannot register public name '${l}' twice`),nl(o,l,l),o.hasOwnProperty(g)&&Le(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),o[l].overloadTable[g]=d):(o[l]=d,g!==void 0&&(o[l].numArguments=g))},bE=(l,d)=>{for(var g=[],S=0;S<l;S++)g.push(te[d+S*4>>2]);return g},EE=(l,d,g)=>{o.hasOwnProperty(l)||Ye("Replacing nonexistent public symbol"),o[l].overloadTable!==void 0&&g!==void 0?o[l].overloadTable[g]=d:(o[l]=d,o[l].argCount=g)},TE=(l,d,g)=>{l=l.replace(/p/g,"i");var S=o["dynCall_"+l];return S(d,...g)},il=[],Wp,Xp=l=>{var d=il[l];return d||(l>=il.length&&(il.length=l+1),il[l]=d=Wp.get(l)),d},wE=(l,d,g=[])=>{if(l.includes("j"))return TE(l,d,g);var S=Xp(d)(...g);return S},AE=(l,d)=>(...g)=>wE(l,d,g),RE=(l,d)=>{l=$(l);function g(){return l.includes("j")?AE(l,d):Xp(d)}var S=g();return typeof S!="function"&&Le(`unknown function pointer with signature ${l}: ${d}`),S},CE=(l,d)=>{var g=wt(d,function(S){this.name=d,this.message=S;var I=new Error(S).stack;I!==void 0&&(this.stack=this.toString()+`
`+I.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(l.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g},qp,$p=l=>{var d=Qp(l),g=$(d);return Qi(d),g},PE=(l,d)=>{var g=[],S={};function I(B){if(!S[B]&&!ne[B]){if(re[B]){re[B].forEach(I);return}g.push(B),S[B]=!0}}throw d.forEach(I),new qp(`${l}: `+g.map($p).join([", "]))},LE=l=>{l=l.trim();const d=l.indexOf("(");return d!==-1?l.substr(0,d):l},IE=(l,d,g,S,I,B,H,Y)=>{var fe=bE(d,g);l=$(l),l=LE(l),I=RE(S,I),ME(l,function(){PE(`Cannot call ${l} due to unbound types`,fe)},d-1),Ze([],fe,Me=>{var He=[Me[0],null].concat(Me.slice(1));return EE(l,gr(l,He,null,I,B,H),d-1),[]})},DE=(l,d,g)=>{switch(d){case 1:return g?S=>V[S]:S=>O[S];case 2:return g?S=>W[S>>1]:S=>J[S>>1];case 4:return g?S=>X[S>>2]:S=>te[S>>2];default:throw new TypeError(`invalid integer width (${d}): ${l}`)}},NE=(l,d,g,S,I)=>{d=$(d);var B=He=>He;if(S===0){var H=32-8*g;B=He=>He<<H>>>H}var Y=d.includes("unsigned"),fe=(He,We)=>{},Me;Y?Me=function(He,We){return fe(We,this.name),We>>>0}:Me=function(He,We){return fe(We,this.name),We},at(l,{name:d,fromWireType:B,toWireType:Me,argPackAdvance:Ve,readValueFromPointer:DE(d,g,S!==0),destructorFunction:null})},UE=(l,d,g)=>{var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],I=S[d];function B(H){var Y=te[H>>2],fe=te[H+4>>2];return new I(V.buffer,fe,Y)}g=$(g),at(l,{name:g,fromWireType:B,argPackAdvance:Ve,readValueFromPointer:B},{ignoreDuplicateRegistrations:!0})},As=(l,d,g)=>ct(l,O,d,g),FE=(l,d)=>{d=$(d);var g=d==="std::string";at(l,{name:d,fromWireType(S){var I=te[S>>2],B=S+4,H;if(g)for(var Y=B,fe=0;fe<=I;++fe){var Me=B+fe;if(fe==I||O[Me]==0){var He=Me-Y,We=Nr(Y,He);H===void 0?H=We:(H+="\0",H+=We),Y=Me+1}}else{for(var it=new Array(I),fe=0;fe<I;++fe)it[fe]=String.fromCharCode(O[B+fe]);H=it.join("")}return Qi(S),H},toWireType(S,I){I instanceof ArrayBuffer&&(I=new Uint8Array(I));var B,H=typeof I=="string";H||I instanceof Uint8Array||I instanceof Uint8ClampedArray||I instanceof Int8Array||Le("Cannot pass non-string to std::string"),g&&H?B=et(I):B=I.length;var Y=mh(4+B+1),fe=Y+4;if(te[Y>>2]=B,g&&H)As(I,fe,B+1);else if(H)for(var Me=0;Me<B;++Me){var He=I.charCodeAt(Me);He>255&&(Qi(fe),Le("String has UTF-16 code units that do not fit in 8 bits")),O[fe+Me]=He}else for(var Me=0;Me<B;++Me)O[fe+Me]=I[Me];return S!==null&&S.push(Qi,Y),Y},argPackAdvance:Ve,readValueFromPointer:yt,destructorFunction(S){Qi(S)}})},Yp=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,OE=(l,d)=>{for(var g=l,S=g>>1,I=S+d/2;!(S>=I)&&J[S];)++S;if(g=S<<1,g-l>32&&Yp)return Yp.decode(O.subarray(l,g));for(var B="",H=0;!(H>=d/2);++H){var Y=W[l+H*2>>1];if(Y==0)break;B+=String.fromCharCode(Y)}return B},BE=(l,d,g)=>{if(g??(g=2147483647),g<2)return 0;g-=2;for(var S=d,I=g<l.length*2?g/2:l.length,B=0;B<I;++B){var H=l.charCodeAt(B);W[d>>1]=H,d+=2}return W[d>>1]=0,d-S},kE=l=>l.length*2,zE=(l,d)=>{for(var g=0,S="";!(g>=d/4);){var I=X[l+g*4>>2];if(I==0)break;if(++g,I>=65536){var B=I-65536;S+=String.fromCharCode(55296|B>>10,56320|B&1023)}else S+=String.fromCharCode(I)}return S},HE=(l,d,g)=>{if(g??(g=2147483647),g<4)return 0;for(var S=d,I=S+g-4,B=0;B<l.length;++B){var H=l.charCodeAt(B);if(H>=55296&&H<=57343){var Y=l.charCodeAt(++B);H=65536+((H&1023)<<10)|Y&1023}if(X[d>>2]=H,d+=4,d+4>I)break}return X[d>>2]=0,d-S},VE=l=>{for(var d=0,g=0;g<l.length;++g){var S=l.charCodeAt(g);S>=55296&&S<=57343&&++g,d+=4}return d},GE=(l,d,g)=>{g=$(g);var S,I,B,H;d===2?(S=OE,I=BE,H=kE,B=Y=>J[Y>>1]):d===4&&(S=zE,I=HE,H=VE,B=Y=>te[Y>>2]),at(l,{name:g,fromWireType:Y=>{for(var fe=te[Y>>2],Me,He=Y+4,We=0;We<=fe;++We){var it=Y+4+We*d;if(We==fe||B(it)==0){var qe=it-He,ht=S(He,qe);Me===void 0?Me=ht:(Me+="\0",Me+=ht),He=it+d}}return Qi(Y),Me},toWireType:(Y,fe)=>{typeof fe!="string"&&Le(`Cannot pass non-string to C++ string type ${g}`);var Me=H(fe),He=mh(4+Me+d);return te[He>>2]=Me/d,I(fe,He+4,Me+d),Y!==null&&Y.push(Qi,He),He},argPackAdvance:Ve,readValueFromPointer:yt,destructorFunction(Y){Qi(Y)}})},WE=(l,d)=>{d=$(d),at(l,{isVoid:!0,name:d,argPackAdvance:0,fromWireType:()=>{},toWireType:(g,S)=>{}})},XE=1,qE=()=>XE,Kp=l=>{for(var d=l.split("."),g=0;g<4;g++){var S=Number(d[g]);if(isNaN(S))return null;d[g]=S}return(d[0]|d[1]<<8|d[2]<<16|d[3]<<24)>>>0},rl=l=>parseInt(l),$E=l=>{var d,g,S,I,B=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,H=[];if(!B.test(l))return null;if(l==="::")return[0,0,0,0,0,0,0,0];for(l.startsWith("::")?l=l.replace("::","Z:"):l=l.replace("::",":Z:"),l.indexOf(".")>0?(l=l.replace(new RegExp("[.]","g"),":"),d=l.split(":"),d[d.length-4]=rl(d[d.length-4])+rl(d[d.length-3])*256,d[d.length-3]=rl(d[d.length-2])+rl(d[d.length-1])*256,d=d.slice(0,d.length-2)):d=l.split(":"),S=0,I=0,g=0;g<d.length;g++)if(typeof d[g]=="string")if(d[g]==="Z"){for(I=0;I<8-d.length+1;I++)H[g+I]=0;S=I-1}else H[g+S]=em(parseInt(d[g],16));else H[g+S]=d[g];return[H[1]<<16|H[0],H[3]<<16|H[2],H[5]<<16|H[4],H[7]<<16|H[6]]},_r={address_map:{id:1,addrs:{},names:{}},lookup_name(l){var d=Kp(l);if(d!==null||(d=$E(l),d!==null))return l;var g;if(_r.address_map.addrs[l])g=_r.address_map.addrs[l];else{var S=_r.address_map.id++;z(S<65535,"exceeded max address mappings of 65535"),g="172.29."+(S&255)+"."+(S&65280),_r.address_map.names[g]=l,_r.address_map.addrs[l]=g}return g},lookup_addr(l){return _r.address_map.names[l]?_r.address_map.names[l]:null}},YE=l=>{var d=Nr(l);return Kp(_r.lookup_name(d))},KE=(l,d,g)=>O.copyWithin(l,d,d+g),uh=(l,d)=>{var g=ne[l];return g===void 0&&Le(`${d} has unknown type ${$p(l)}`),g},jp=(l,d,g)=>{var S=[],I=l.toWireType(S,g);return S.length&&(te[d>>2]=bt.toHandle(S)),I},jE=(l,d,g)=>(l=bt.toValue(l),d=uh(d,"emval::as"),jp(d,g,l)),ZE={},hh=l=>{var d=ZE[l];return d===void 0?$(l):d},fh=[],JE=(l,d,g,S,I)=>(l=fh[l],d=bt.toValue(d),g=hh(g),l(d,d[g],S,I)),Zp=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),QE=l=>l===0?bt.toHandle(Zp()):(l=hh(l),bt.toHandle(Zp()[l])),eT=l=>{var d=fh.length;return fh.push(l),d},tT=(l,d)=>{for(var g=new Array(l),S=0;S<l;++S)g[S]=uh(te[d+S*4>>2],"parameter "+S);return g},nT=(l,d,g)=>{var S=tT(l,d),I=S.shift();l--;var B=`return function (obj, func, destructorsRef, args) {
`,H=0,Y=[];g===0&&Y.push("obj");for(var fe=["retType"],Me=[I],He=0;He<l;++He)Y.push("arg"+He),fe.push("argType"+He),Me.push(S[He]),B+=`  var arg${He} = argType${He}.readValueFromPointer(args${H?"+"+H:""});
`,H+=S[He].argPackAdvance;var We=g===1?"new func":"func.call";B+=`  var rv = ${We}(${Y.join(", ")});
`,I.isVoid||(fe.push("emval_returnValue"),Me.push(jp),B+=`  return emval_returnValue(retType, destructorsRef, rv);
`),B+=`};
`,fe.push(B);var it=Ft(Function,fe)(...Me),qe=`methodCaller<(${S.map(ht=>ht.name).join(", ")}) => ${I.name}>`;return eT(wt(qe,it))},iT=(l,d)=>(l=bt.toValue(l),d=bt.toValue(d),bt.toHandle(l[d])),rT=l=>{l>9&&(Mt[l+1]+=1)},sT=()=>bt.toHandle([]),aT=l=>bt.toHandle(hh(l)),oT=()=>bt.toHandle({}),lT=l=>{var d=bt.toValue(l);Xt(d),Pt(l)},cT=(l,d,g)=>{l=bt.toValue(l),d=bt.toValue(d),g=bt.toValue(g),l[d]=g},uT=(l,d)=>{l=uh(l,"_emval_take_value");var g=l.readValueFromPointer(d);return bt.toHandle(g)},hT=l=>l%4===0&&(l%100!==0||l%400===0),fT=[0,31,60,91,121,152,182,213,244,274,305,335],dT=[0,31,59,90,120,151,181,212,243,273,304,334],pT=l=>{var d=hT(l.getFullYear()),g=d?fT:dT,S=g[l.getMonth()]+l.getDate()-1;return S},dh=(l,d)=>d+2097152>>>0<4194305-!!l?(l>>>0)+d*4294967296:NaN;function mT(l,d,g){var S=dh(l,d),I=new Date(S*1e3);X[g>>2]=I.getSeconds(),X[g+4>>2]=I.getMinutes(),X[g+8>>2]=I.getHours(),X[g+12>>2]=I.getDate(),X[g+16>>2]=I.getMonth(),X[g+20>>2]=I.getFullYear()-1900,X[g+24>>2]=I.getDay();var B=pT(I)|0;X[g+28>>2]=B,X[g+36>>2]=-(I.getTimezoneOffset()*60);var H=new Date(I.getFullYear(),0,1),Y=new Date(I.getFullYear(),6,1).getTimezoneOffset(),fe=H.getTimezoneOffset(),Me=(Y!=fe&&I.getTimezoneOffset()==Math.min(fe,Y))|0;X[g+32>>2]=Me}function gT(l,d,g,S,I,B,H){var Y=dh(B,H);try{var fe=Tt.getStreamFromFD(I);g&2&&Tt.doMsync(l,fe,d,S,Y)}catch(Me){if(typeof C>"u"||Me.name!=="ErrnoError")throw Me;return-Me.errno}}var _T=(l,d,g,S)=>{var I=new Date().getFullYear(),B=new Date(I,0,1),H=new Date(I,6,1),Y=B.getTimezoneOffset(),fe=H.getTimezoneOffset(),Me=Math.max(Y,fe);te[l>>2]=Me*60,X[d>>2]=+(Y!=fe);var He=qe=>{var ht=qe>=0?"-":"+",Et=Math.abs(qe),ln=String(Math.floor(Et/60)).padStart(2,"0"),Yt=String(Et%60).padStart(2,"0");return`UTC${ht}${ln}${Yt}`},We=He(Y),it=He(fe);fe<Y?(As(We,g,17),As(it,S,17)):(As(We,S,17),As(it,g,17))},vT=()=>Date.now();function xT(){return new Error().stack.toString()}var Rs=l=>{Rs.shown||(Rs.shown={}),Rs.shown[l]||(Rs.shown[l]=1,m&&(l="warning: "+l),y(l))};function yT(l){var d=xT(),g=d.lastIndexOf("_emscripten_log"),S=d.lastIndexOf("_emscripten_get_callstack"),I=d.indexOf(`
`,Math.max(g,S))+1;d=d.slice(I),l&8&&typeof emscripten_source_map>"u"&&(Rs('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),l^=8,l|=16);var B=d.split(`
`);d="";var H=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),Y=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),fe=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Me in B){var He=B[Me],We="",it="",qe=0,ht=0,Et=fe.exec(He);if(Et&&Et.length==5)We=Et[1],it=Et[2],qe=Et[3],ht=Et[4];else if(Et=H.exec(He)||Y.exec(He),Et&&Et.length>=4)We=Et[1],it=Et[2],qe=Et[3],ht=Et[4]|0;else{d+=He+`
`;continue}var ln=!1;if(l&8){var Yt=emscripten_source_map.originalPositionFor({line:qe,column:ht});ln=Yt==null?void 0:Yt.source,ln&&(l&64&&(Yt.source=Yt.source.substring(Yt.source.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=`    at ${We} (${Yt.source}:${Yt.line}:${Yt.column})
`)}(l&16||!ln)&&(l&64&&(it=it.substring(it.replace(/\\/g,"/").lastIndexOf("/")+1)),d+=(ln?`     = ${We}`:`    at ${We}`)+` (${it}:${qe}:${ht})
`)}return d=d.replace(/\s+$/,""),d}function ST(l,d,g){var S=yT(l);if(!d||g<=0)return et(S)+1;var I=As(S,d,g);return I+1}var Jp=()=>2147483648,MT=()=>Jp(),bT=l=>{var d=N.buffer,g=(l-d.byteLength+65535)/65536|0;try{return N.grow(g),me(),1}catch{}},ET=l=>{var d=O.length;l>>>=0;var g=Jp();if(l>g)return!1;for(var S=1;S<=4;S*=2){var I=d*(1+.2/S);I=Math.min(I,l+100663296);var B=Math.min(g,ze(Math.max(l,I),65536)),H=bT(B);if(H)return!0}return!1},ph={},TT=()=>E||"./this.program",ya=()=>{if(!ya.strings){var l=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:l,_:TT()};for(var g in ph)ph[g]===void 0?delete d[g]:d[g]=ph[g];var S=[];for(var g in d)S.push(`${g}=${d[g]}`);ya.strings=S}return ya.strings},wT=(l,d)=>{for(var g=0;g<l.length;++g)V[d++]=l.charCodeAt(g);V[d]=0},AT=(l,d)=>{var g=0;return ya().forEach((S,I)=>{var B=d+g;te[l+I*4>>2]=B,wT(S,B),g+=S.length+1}),0},RT=(l,d)=>{var g=ya();te[l>>2]=g.length;var S=0;return g.forEach(I=>S+=I.length+1),te[d>>2]=S,0},CT=l=>{v(l,new be(l))},PT=(l,d)=>{CT(l)},LT=PT;function IT(l){try{var d=Tt.getStreamFromFD(l);return C.close(d),0}catch(g){if(typeof C>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var DT=(l,d,g,S)=>{for(var I=0,B=0;B<g;B++){var H=te[d>>2],Y=te[d+4>>2];d+=8;var fe=C.read(l,V,H,Y,S);if(fe<0)return-1;if(I+=fe,fe<Y)break}return I};function NT(l,d,g,S){try{var I=Tt.getStreamFromFD(l),B=DT(I,d,g);return te[S>>2]=B,0}catch(H){if(typeof C>"u"||H.name!=="ErrnoError")throw H;return H.errno}}function UT(l,d,g,S,I){var B=dh(d,g);try{if(isNaN(B))return 61;var H=Tt.getStreamFromFD(l);return C.llseek(H,B,S),oe=[H.position>>>0,(K=H.position,+Math.abs(K)>=1?K>0?+Math.floor(K/4294967296)>>>0:~~+Math.ceil((K-+(~~K>>>0))/4294967296)>>>0:0)],X[I>>2]=oe[0],X[I+4>>2]=oe[1],H.getdents&&B===0&&S===0&&(H.getdents=null),0}catch(Y){if(typeof C>"u"||Y.name!=="ErrnoError")throw Y;return Y.errno}}var FT=(l,d,g,S)=>{for(var I=0,B=0;B<g;B++){var H=te[d>>2],Y=te[d+4>>2];d+=8;var fe=C.write(l,V,H,Y,S);if(fe<0)return-1;if(I+=fe,fe<Y)break}return I};function OT(l,d,g,S){try{var I=Tt.getStreamFromFD(l),B=FT(I,d,g);return te[S>>2]=B,0}catch(H){if(typeof C>"u"||H.name!=="ErrnoError")throw H;return H.errno}}C.createPreloadedFile=Wn,C.staticInit(),tl(),Be=o.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},Oe=o.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},Ge(),qp=o.UnboundTypeError=CE(Error,"UnboundTypeError");var BT={M:Yo,N:Ko,h:jo,I:Zo,Q:Ts,F:Jo,G:ws,j:Qo,B:el,H:ah,C:oh,A:lh,w:ch,V:Ct,U:qn,n:mr,f:IE,b:NE,a:UE,m:FE,i:GE,W:WE,J:qE,x:YE,L:KE,e:jE,q:JE,T:Pt,u:QE,p:nT,k:iT,Y:rT,X:sT,r:aT,Z:oT,o:lT,c:cT,d:uT,t:mT,s:gT,O:_T,K:vT,R:ST,z:MT,y:ET,D:AT,E:RT,S:LT,g:IT,P:NT,v:UT,l:OT},on=ee(),Qp=l=>(Qp=on.aa)(l),mh=l=>(mh=on.ca)(l),Qi=l=>(Qi=on.da)(l),em=l=>(em=on.ea)(l),tm=(l,d)=>(tm=on.fa)(l,d),nm=()=>(nm=on.ga)();o.dynCall_viijii=(l,d,g,S,I,B,H)=>(o.dynCall_viijii=on.ha)(l,d,g,S,I,B,H),o.dynCall_viiiiji=(l,d,g,S,I,B,H,Y)=>(o.dynCall_viiiiji=on.ia)(l,d,g,S,I,B,H,Y),o.dynCall_jiji=(l,d,g,S,I)=>(o.dynCall_jiji=on.ja)(l,d,g,S,I),o.dynCall_iiiiij=(l,d,g,S,I,B,H)=>(o.dynCall_iiiiij=on.ka)(l,d,g,S,I,B,H),o.dynCall_iiiiijj=(l,d,g,S,I,B,H,Y,fe)=>(o.dynCall_iiiiijj=on.la)(l,d,g,S,I,B,H,Y,fe),o.dynCall_iiiiiijj=(l,d,g,S,I,B,H,Y,fe,Me)=>(o.dynCall_iiiiiijj=on.ma)(l,d,g,S,I,B,H,Y,fe,Me);var sl,im;ce=function l(){sl||rm(),sl||(ce=l)};function rm(){if(se>0||!im&&(im=1,ot(),se>0))return;function l(){var d;sl||(sl=1,o.calledRun=1,!F&&(he(),c(o),(d=o.onRuntimeInitialized)==null||d.call(o),k()))}o.setStatus?(o.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>o.setStatus(""),1),l()},1)):l()}if(o.preInit)for(typeof o.preInit=="function"&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return rm(),a=h,a})})();i.exports=t})(Uu)),Uu.exports}var $M=qM();const YM=WM($M);let Ou=null;async function KM(){return Ou||(Ou=await YM({locateFile:e=>{var t,n,r,s;if(typeof window<"u"){const a=(n=(t=window.OC)==null?void 0:t.filePath)==null?void 0:n.call(t,"files_3dmv_next","js",e);return a||`${((s=(r=window.OC)==null?void 0:r.getRootPath)==null?void 0:s.call(r))||""}/apps/files_3dmv_next/js/${e}`}return e}})),Ou}async function Mp(i,e,t=!1){const n=await KM(),r=new Uint8Array(i),s=t?n.ReadIgesFile(r,null):n.ReadStepFile(r,null);if(!s||!s.success||!s.meshes||s.meshes.length===0)throw new Error(`Failed to tessellate ${t?"IGES":"STEP"} B-Rep model`);const a=[];return s.meshes.forEach((o,c)=>{var m,x,E,v,_,L;const u=new Lt;(x=(m=o.attributes)==null?void 0:m.position)!=null&&x.array&&u.setAttribute("position",new St(o.attributes.position.array,3)),(v=(E=o.attributes)==null?void 0:E.normal)!=null&&v.array?u.setAttribute("normal",new St(o.attributes.normal.array,3)):u.computeVertexNormals(),(_=o.index)!=null&&_.array&&u.setIndex(new At(o.index.array,1)),u.computeBoundingBox(),u.computeBoundingSphere();const h=o.color&&o.color.length>=3?`#${new Je(o.color[0],o.color[1],o.color[2]).getHexString()}`:"#94a3b8";let f;try{f=new Ao(u,28),f.computeBoundingSphere()}catch{}const p=o.name||`Solid ${c+1}`;a.push({name:p,metadata:{id:`solid-${c}`,originalId:`${c}`,name:p,color:h,opacity:1,visible:!0,vertexCount:((L=u.getAttribute("position"))==null?void 0:L.count)||0,triangleCount:u.getIndex()?u.getIndex().count/3:0},geometry:u,edgeGeometry:f})}),{fileName:e,fileSize:i.byteLength,bodies:a}}class jM extends Bn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new ps(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e){function t(u){const h=new DataView(u),f=32/8*3+32/8*3*3+16/8,p=h.getUint32(80,!0);if(80+32/8+p*f===h.byteLength)return!0;const x=[115,111,108,105,100];for(let E=0;E<5;E++)if(n(x,h,E))return!1;return!0}function n(u,h,f){for(let p=0,m=u.length;p<m;p++)if(u[p]!==h.getUint8(f+p))return!1;return!0}function r(u){const h=new DataView(u),f=h.getUint32(80,!0);let p,m,x,E=!1,v,_,L,A,M;for(let F=0;F<70;F++)h.getUint32(F,!1)==1129270351&&h.getUint8(F+4)==82&&h.getUint8(F+5)==61&&(E=!0,v=new Float32Array(f*3*3),_=h.getUint8(F+6)/255,L=h.getUint8(F+7)/255,A=h.getUint8(F+8)/255,M=h.getUint8(F+9)/255);const w=84,T=50,P=new Lt,y=new Float32Array(f*3*3),R=new Float32Array(f*3*3),N=new Je;for(let F=0;F<f;F++){const z=w+F*T,V=h.getFloat32(z,!0),O=h.getFloat32(z+4,!0),W=h.getFloat32(z+8,!0);if(E){const J=h.getUint16(z+48,!0);(J&32768)===0?(p=(J&31)/31,m=(J>>5&31)/31,x=(J>>10&31)/31):(p=_,m=L,x=A)}for(let J=1;J<=3;J++){const X=z+J*12,te=F*3*3+(J-1)*3;y[te]=h.getFloat32(X,!0),y[te+1]=h.getFloat32(X+4,!0),y[te+2]=h.getFloat32(X+8,!0),R[te]=V,R[te+1]=O,R[te+2]=W,E&&(N.setRGB(p,m,x,$t),v[te]=N.r,v[te+1]=N.g,v[te+2]=N.b)}}return P.setAttribute("position",new At(y,3)),P.setAttribute("normal",new At(R,3)),E&&(P.setAttribute("color",new At(v,3)),P.hasColors=!0,P.alpha=M),P}function s(u){const h=new Lt,f=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let x=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,v=new RegExp("vertex"+E+E+E,"g"),_=new RegExp("normal"+E+E+E,"g"),L=[],A=[],M=[],w=new j;let T,P=0,y=0,R=0;for(;(T=f.exec(u))!==null;){y=R;const N=T[0],F=(T=m.exec(N))!==null?T[1]:"";for(M.push(F);(T=p.exec(N))!==null;){let O=0,W=0;const J=T[0];for(;(T=_.exec(J))!==null;)w.x=parseFloat(T[1]),w.y=parseFloat(T[2]),w.z=parseFloat(T[3]),W++;for(;(T=v.exec(J))!==null;)L.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),A.push(w.x,w.y,w.z),O++,R++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+x),O!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+x),x++}const z=y,V=R-y;h.userData.groupNames=M,h.addGroup(z,V,P),P++}return h.setAttribute("position",new St(L,3)),h.setAttribute("normal",new St(A,3)),h}function a(u){return typeof u!="string"?new TextDecoder().decode(u):u}function o(u){if(typeof u=="string"){const h=new Uint8Array(u.length);for(let f=0;f<u.length;f++)h[f]=u.charCodeAt(f)&255;return h.buffer||h}else return u}const c=o(e);return t(c)?r(c):s(a(e))}}const ai=new Je;class ZM extends Bn{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,n,r){const s=this,a=new ps(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(A,M=0){const w=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let T="";const P=w.exec(A);P!==null&&(T=P[1]);const y={comments:[],elements:[],headerLength:M,objInfo:""},R=T.split(/\r\n|\r|\n/);let N;function F(z,V){const O={type:z[0]};return O.type==="list"?(O.name=z[3],O.countType=z[1],O.itemType=z[2]):O.name=z[1],O.name in V&&(O.name=V[O.name]),O}for(let z=0;z<R.length;z++){let V=R[z];if(V=V.trim(),V==="")continue;const O=V.split(/\s+/),W=O.shift();switch(V=O.join(" "),W){case"format":y.format=O[0],y.version=O[1];break;case"comment":y.comments.push(V);break;case"element":N!==void 0&&y.elements.push(N),N={},N.name=O[0],N.count=parseInt(O[1]),N.properties=[];break;case"property":N.properties.push(F(O,L.propertyNameMapping));break;case"obj_info":y.objInfo=V;break;default:console.log("unhandled",W,O)}}return N!==void 0&&y.elements.push(N),y}function n(A,M){switch(M){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(A);case"float":case"double":case"float32":case"float64":return parseFloat(A)}}function r(A,M){const w={};for(let T=0;T<A.length;T++){if(M.empty())return null;if(A[T].type==="list"){const P=[],y=n(M.next(),A[T].countType);for(let R=0;R<y;R++){if(M.empty())return null;P.push(n(M.next(),A[T].itemType))}w[A[T].name]=P}else w[A[T].name]=n(M.next(),A[T].type)}return w}function s(){const A={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[],descriptors:{}};for(const M of Object.keys(L.customPropertyMapping))A[M]=[];return A}function a(A){switch(A){case"int8":case"char":return F_;case"uint8":case"uchar":return O_;case"int16":case"short":return B_;case"uint16":case"ushort":return Kc;case"int32":case"int":return k_;case"uint32":case"uint":return jc;case"float32":case"float":return St;case"float64":case"double":return JM}}function o(A){switch(A){case"uchar":case"uint8":return 1/255;case"ushort":case"uint16":return 1/65535;case"float":case"float32":case"double":case"float64":return 1;default:return 1/255}}function c(A){return A==="float"||A==="float32"||A==="double"||A==="float64"}function u(A){function M(te){for(const ie of te){const pe=A.find(me=>me.name===ie);if(pe)return pe}return null}const w=M(["x","px","posx"]),T=M(["y","py","posy"]),P=M(["z","pz","posz"]),y=M(["nx","normalx"]),R=M(["ny","normaly"]),N=M(["nz","normalz"]),F=M(["s","u","texture_u","tx"]),z=M(["t","v","texture_v","ty"]),V=M(["red","diffuse_red","r","diffuse_r"]),O=M(["green","diffuse_green","g","diffuse_g"]),W=M(["blue","diffuse_blue","b","diffuse_b"]),J=M(["texcoord"]),X={};for(const te of Object.keys(L.customPropertyMapping)){const pe=L.customPropertyMapping[te].map(we=>A.find(dt=>dt.name===we)),me=pe.filter(we=>we).map(we=>we.type),Ne=me.length>0&&me.every(we=>we===me[0]);X[te]={type:Ne?me[0]:"float32",usage:pe.every(we=>we!==void 0)}}return{position:{names:[w?w.name:"x",T?T.name:"y",P?P.name:"z"],type:w?w.type:"float32",usage:!!(w&&T&&P)},normal:{names:[y?y.name:"nx",R?R.name:"ny",N?N.name:"nz"],type:y?y.type:"float32",usage:!!(y&&R&&N)},uv:{names:[F?F.name:"s",z?z.name:"t"],type:F?F.type:"float32",usage:!!(F&&z)},texcoord:{type:J?J.itemType:"float32",usage:!!J},color:{names:[V?V.name:"red",O?O.name:"green",W?W.name:"blue"],type:V?V.type:"uchar",usage:!!(V&&O&&W)},custom:X}}function h(A,M){const w=s(),T=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let P,y;(y=T.exec(A))!==null?P=y[1].split(/\s+/):P=[];const R=new QM(P);e:for(let N=0;N<M.elements.length;N++){const F=M.elements[N],z=u(F.properties);w.descriptors[F.name]=z;for(let V=0;V<F.count;V++){const O=r(F.properties,R);if(!O)break e;p(w,F.name,O,z)}}return f(w)}function f(A){let M=new Lt;const w=A.descriptors.vertex;A.indices.length>0&&M.setIndex(A.indices);const T=a(w?w.position.type:"float32");if(M.setAttribute("position",new T(A.vertices,3)),A.normals.length>0){const P=a(w.normal.type);M.setAttribute("normal",new P(A.normals,3))}if(A.uvs.length>0){const P=a(w.uv.type);M.setAttribute("uv",new P(A.uvs,2))}if(A.colors.length>0){const P=w.color.type,y=!c(P),R=a(P);M.setAttribute("color",new R(A.colors,3,y))}if(A.faceVertexUvs.length>0||A.faceVertexColors.length>0){if(M=M.toNonIndexed(),A.faceVertexUvs.length>0){const P=a(A.descriptors.face.texcoord.type);M.setAttribute("uv",new P(A.faceVertexUvs,2))}if(A.faceVertexColors.length>0){const P=A.descriptors.face.color.type,y=!c(P),R=a(P);M.setAttribute("color",new R(A.faceVertexColors,3,y))}}for(const P of Object.keys(L.customPropertyMapping))if(A[P].length>0){const y=a(w.custom[P].type);M.setAttribute(P,new y(A[P],L.customPropertyMapping[P].length))}return M.computeBoundingSphere(),M}function p(A,M,w,T){if(M==="vertex"){const{position:P,normal:y,uv:R,color:N}=T;if(P.usage&&A.vertices.push(w[P.names[0]],w[P.names[1]],w[P.names[2]]),y.usage&&A.normals.push(w[y.names[0]],w[y.names[1]],w[y.names[2]]),R.usage&&A.uvs.push(w[R.names[0]],w[R.names[1]]),N.usage){const F=o(N.type),z=c(N.type);ai.setRGB(w[N.names[0]]*F,w[N.names[1]]*F,w[N.names[2]]*F,$t);const V=1/F;A.colors.push(z?ai.r:Math.round(ai.r*V),z?ai.g:Math.round(ai.g*V),z?ai.b:Math.round(ai.b*V))}for(const F of Object.keys(L.customPropertyMapping))for(const z of L.customPropertyMapping[F])A[F].push(w[z])}else if(M==="face"){const P=w.vertex_indices||w.vertex_index,y=w.texcoord;P.length===3?(A.indices.push(P[0],P[1],P[2]),y&&y.length===6&&(A.faceVertexUvs.push(y[0],y[1]),A.faceVertexUvs.push(y[2],y[3]),A.faceVertexUvs.push(y[4],y[5]))):P.length===4&&(A.indices.push(P[0],P[1],P[3]),A.indices.push(P[1],P[2],P[3]));const{color:R}=T;if(R.usage){const N=o(R.type);ai.setRGB(w[R.names[0]]*N,w[R.names[1]]*N,w[R.names[2]]*N,$t);const F=1/N,z=ai.r*F,V=ai.g*F,O=ai.b*F;A.faceVertexColors.push(z,V,O),A.faceVertexColors.push(z,V,O),A.faceVertexColors.push(z,V,O)}}}function m(A,M){const w={};let T=0;for(let P=0;P<M.length;P++){const y=M[P],R=y.valueReader;if(y.type==="list"){const N=[],F=y.countReader.read(A+T);T+=y.countReader.size;for(let z=0;z<F;z++)N.push(R.read(A+T)),T+=R.size;w[y.name]=N}else w[y.name]=R.read(A+T),T+=R.size}return[w,T]}function x(A,M,w){function T(P,y,R){switch(y){case"int8":case"char":return{read:N=>P.getInt8(N),size:1};case"uint8":case"uchar":return{read:N=>P.getUint8(N),size:1};case"int16":case"short":return{read:N=>P.getInt16(N,R),size:2};case"uint16":case"ushort":return{read:N=>P.getUint16(N,R),size:2};case"int32":case"int":return{read:N=>P.getInt32(N,R),size:4};case"uint32":case"uint":return{read:N=>P.getUint32(N,R),size:4};case"float32":case"float":return{read:N=>P.getFloat32(N,R),size:4};case"float64":case"double":return{read:N=>P.getFloat64(N,R),size:8}}}for(let P=0,y=A.length;P<y;P++){const R=A[P];R.type==="list"?(R.countReader=T(M,R.countType,w),R.valueReader=T(M,R.itemType,w)):R.valueReader=T(M,R.type,w)}}function E(A,M){const w=s(),T=M.format==="binary_little_endian",P=new DataView(A,M.headerLength);let y,R=0;for(let N=0;N<M.elements.length;N++){const F=M.elements[N],z=F.properties,V=u(z);w.descriptors[F.name]=V,x(z,P,T);for(let O=0;O<F.count;O++){y=m(R,z),R+=y[1];const W=y[0];p(w,F.name,W,V)}}return f(w)}function v(A){let M=0,w=!0,T="";const P=[],y=new TextDecoder().decode(A.subarray(0,5)),R=/^ply\r\n/.test(y);do{const N=String.fromCharCode(A[M++]);N!==`
`&&N!=="\r"?T+=N:(T==="end_header"&&(w=!1),T!==""&&(P.push(T),T=""))}while(w&&M<A.length);return R===!0&&M++,{headerText:P.join("\r")+"\r",headerLength:M}}let _;const L=this;if(e instanceof ArrayBuffer){const A=new Uint8Array(e),{headerText:M,headerLength:w}=v(A),T=t(M,w);if(T.format==="ascii"){const P=new TextDecoder().decode(A);_=h(P,T)}else _=E(e,T)}else _=h(e,t(e));return _}}class JM extends At{constructor(e,t,n){super(new Float64Array(e),t,n)}}class QM{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}const eb=/^[og]\s*(.+)?/,tb=/^mtllib /,nb=/^usemtl /,ib=/^usemap /,bp=/\s+/,Ep=new j,Bu=new j,Tp=new j,wp=new j,Hn=new j,qo=new Je;function rb(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const u={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,s=this.object.geometry.normals;Ep.fromArray(r,e),Bu.fromArray(r,t),Tp.fromArray(r,n),Hn.subVectors(Tp,Bu),wp.subVectors(Ep,Bu),Hn.cross(wp),Hn.normalize(),s.push(Hn.x,Hn.y,Hn.z),s.push(Hn.x,Hn.y,Hn.z),s.push(Hn.x,Hn.y,Hn.z)},addColor:function(e,t,n){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,s,a,o,c,u){const h=this.vertices.length;let f=this.parseVertexIndex(e,h),p=this.parseVertexIndex(t,h),m=this.parseVertexIndex(n,h);if(this.addVertex(f,p,m),this.addColor(f,p,m),o!==void 0&&o!==""){const x=this.normals.length;f=this.parseNormalIndex(o,x),p=this.parseNormalIndex(c,x),m=this.parseNormalIndex(u,x),this.addNormal(f,p,m)}else this.addFaceNormal(f,p,m);if(r!==void 0&&r!==""){const x=this.uvs.length;f=this.parseUVIndex(r,x),p=this.parseUVIndex(s,x),m=this.parseUVIndex(a,x),this.addUV(f,p,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return i.startObject("",!1),i}class sb extends Bn{constructor(e){super(e),this.materials=null}load(e,t,n,r){const s=this,a=new ps(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new rb;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let o=0,c=n.length;o<c;o++){const u=n[o].trimStart();if(u.length===0)continue;const h=u.charAt(0);if(h!=="#")if(h==="v"){const f=u.split(bp);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(qo.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),$t),t.colors.push(qo.r,qo.g,qo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(h==="f"){const p=u.slice(1).trim().split(bp),m=[];for(let E=0,v=p.length;E<v;E++){const _=p[E];if(_.length>0){const L=_.split("/");m.push(L)}}const x=m[0];for(let E=1,v=m.length-1;E<v;E++){const _=m[E],L=m[E+1];t.addFace(x[0],_[0],L[0],x[1],_[1],L[1],x[2],_[2],L[2])}}else if(h==="l"){const f=u.substring(1).trim().split(" ");let p=[];const m=[];if(u.indexOf("/")===-1)p=f;else for(let x=0,E=f.length;x<E;x++){const v=f[x].split("/");v[0]!==""&&p.push(v[0]),v[1]!==""&&m.push(v[1])}t.addLineGeometry(p,m)}else if(h==="p"){const p=u.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((r=eb.exec(u))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);t.startObject(f)}else if(nb.test(u))t.object.startMaterial(u.substring(7).trim(),t.materialLibraries);else if(tb.test(u))t.materialLibraries.push(u.substring(7).trim());else if(ib.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(r=u.split(" "),r.length>1){const p=r[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}t.finalize();const s=new ni;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const u=t.objects[o],h=u.geometry,f=u.materials,p=h.type==="Line",m=h.type==="Points";let x=!1;if(h.vertices.length===0)continue;const E=new Lt;E.setAttribute("position",new St(h.vertices,3)),h.normals.length>0&&E.setAttribute("normal",new St(h.normals,3)),h.colors.length>0&&(x=!0,E.setAttribute("color",new St(h.colors,3))),h.hasUVIndices===!0&&E.setAttribute("uv",new St(h.uvs,2));const v=[];for(let L=0,A=f.length;L<A;L++){const M=f[L],w=M.name+"_"+M.smooth+"_"+x;let T=t.materials[w];if(this.materials!==null){if(T=this.materials.create(M.name),p&&T&&!(T instanceof cr)){const P=new cr;Rn.prototype.copy.call(P,T),P.color.copy(T.color),T=P}else if(m&&T&&!(T instanceof ls)){const P=new ls({size:10,sizeAttenuation:!1});Rn.prototype.copy.call(P,T),P.color.copy(T.color),P.map=T.map,T=P}}T===void 0&&(p?T=new cr:m?T=new ls({size:1,sizeAttenuation:!1}):T=new us,T.name=M.name,T.flatShading=!M.smooth,T.vertexColors=x,t.materials[w]=T),v.push(T)}let _;if(v.length>1){for(let L=0,A=f.length;L<A;L++){const M=f[L];E.addGroup(M.groupStart,M.groupCount,L)}p?_=new ia(E,v):m?_=new bo(E,v):_=new Kt(E,v)}else p?_=new ia(E,v[0]):m?_=new bo(E,v[0]):_=new Kt(E,v[0]);_.name=u.name,s.add(_)}else if(t.vertices.length>0){const o=new ls({size:1,sizeAttenuation:!1}),c=new Lt;c.setAttribute("position",new St(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new St(t.colors,3)),o.vertexColors=!0);const u=new bo(c,o);s.add(u)}return s}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Cn=Uint8Array,bs=Uint16Array,ab=Int32Array,Ap=new Cn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Rp=new Cn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ob=new Cn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Cp=function(i,e){for(var t=new bs(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new ab(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Pp=Cp(Ap,2),Lp=Pp.b,lb=Pp.r;Lp[28]=258,lb[258]=28;for(var cb=Cp(Rp,0),ub=cb.b,ku=new bs(32768),Vt=0;Vt<32768;++Vt){var dr=(Vt&43690)>>1|(Vt&21845)<<1;dr=(dr&52428)>>2|(dr&13107)<<2,dr=(dr&61680)>>4|(dr&3855)<<4,ku[Vt]=((dr&65280)>>8|(dr&255)<<8)>>1}for(var ga=(function(i,e,t){for(var n=i.length,r=0,s=new bs(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new bs(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new bs(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var u=r<<4|i[r],h=e-i[r],f=a[i[r]-1]++<<h,p=f|(1<<h)-1;f<=p;++f)o[ku[f]>>c]=u}else for(o=new bs(n),r=0;r<n;++r)i[r]&&(o[r]=ku[a[i[r]-1]++]>>15-i[r]);return o}),_a=new Cn(288),Vt=0;Vt<144;++Vt)_a[Vt]=8;for(var Vt=144;Vt<256;++Vt)_a[Vt]=9;for(var Vt=256;Vt<280;++Vt)_a[Vt]=7;for(var Vt=280;Vt<288;++Vt)_a[Vt]=8;for(var Ip=new Cn(32),Vt=0;Vt<32;++Vt)Ip[Vt]=5;var hb=ga(_a,9,1),fb=ga(Ip,5,1),zu=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},oi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Hu=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},db=function(i){return(i+7)/8|0},Vu=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Cn(i.subarray(e,t))},pb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Vn=function(i,e,t){var n=new Error(e||pb[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Vn),!t)throw n;return n},mb=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new Cn(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new Cn(r*3));var u=function(Q){var se=t.length;if(Q>se){var ce=new Cn(Math.max(se*2,Q));ce.set(t),t=ce}},h=e.f||0,f=e.p||0,p=e.b||0,m=e.l,x=e.d,E=e.m,v=e.n,_=r*8;do{if(!m){h=oi(i,f,1);var L=oi(i,f+1,3);if(f+=3,L)if(L==1)m=hb,x=fb,E=9,v=5;else if(L==2){var T=oi(i,f,31)+257,P=oi(i,f+10,15)+4,y=T+oi(i,f+5,31)+1;f+=14;for(var R=new Cn(y),N=new Cn(19),F=0;F<P;++F)N[ob[F]]=oi(i,f+F*3,7);f+=P*3;for(var z=zu(N),V=(1<<z)-1,O=ga(N,z,1),F=0;F<y;){var W=O[oi(i,f,V)];f+=W&15;var A=W>>4;if(A<16)R[F++]=A;else{var J=0,X=0;for(A==16?(X=3+oi(i,f,3),f+=2,J=R[F-1]):A==17?(X=3+oi(i,f,7),f+=3):A==18&&(X=11+oi(i,f,127),f+=7);X--;)R[F++]=J}}var te=R.subarray(0,T),ie=R.subarray(T);E=zu(te),v=zu(ie),m=ga(te,E,1),x=ga(ie,v,1)}else Vn(1);else{var A=db(f)+4,M=i[A-4]|i[A-3]<<8,w=A+M;if(w>r){c&&Vn(0);break}o&&u(p+M),t.set(i.subarray(A,w),p),e.b=p+=M,e.p=f=w*8,e.f=h;continue}if(f>_){c&&Vn(0);break}}o&&u(p+131072);for(var pe=(1<<E)-1,me=(1<<v)-1,Ne=f;;Ne=f){var J=m[Hu(i,f)&pe],we=J>>4;if(f+=J&15,f>_){c&&Vn(0);break}if(J||Vn(2),we<256)t[p++]=we;else if(we==256){Ne=f,m=null;break}else{var dt=we-254;if(we>264){var F=we-257,$e=Ap[F];dt=oi(i,f,(1<<$e)-1)+Lp[F],f+=$e}var ot=x[Hu(i,f)&me],he=ot>>4;ot||Vn(3),f+=ot&15;var ie=ub[he];if(he>3){var $e=Rp[he];ie+=Hu(i,f)&(1<<$e)-1,f+=$e}if(f>_){c&&Vn(0);break}o&&u(p+131072);var k=p+dt;if(p<ie){var G=s-ie,ae=Math.min(ie,k);for(G+p<0&&Vn(3);p<ae;++p)t[p]=n[G+p]}for(;p<k;++p)t[p]=t[p-ie]}}e.l=m,e.p=Ne,e.b=p,e.f=h,m&&(h=1,e.m=E,e.d=x,e.n=v)}while(!h);return p!=t.length&&a?Vu(t,0,p):t.subarray(0,p)},gb=new Cn(0),Ci=function(i,e){return i[e]|i[e+1]<<8},li=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Gu=function(i,e){return li(i,e)+li(i,e+4)*4294967296};function _b(i,e){return mb(i,{i:2},e&&e.out,e&&e.dictionary)}var Wu=typeof TextDecoder<"u"&&new TextDecoder,vb=0;try{Wu.decode(gb,{stream:!0}),vb=1}catch{}var xb=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Vu(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function yb(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Wu)return Wu.decode(i);var r=xb(i),s=r.s,t=r.r;return t.length&&Vn(8),s}}var Sb=function(i,e){return e+30+Ci(i,e+26)+Ci(i,e+28)},Mb=function(i,e,t){var n=Ci(i,e+28),r=yb(i.subarray(e+46,e+46+n),!(Ci(i,e+8)&2048)),s=e+46+n,a=li(i,e+20),o=t&&a==4294967295?bb(i,s):[a,li(i,e+24),li(i,e+42)],c=o[0],u=o[1],h=o[2];return[Ci(i,e+10),c,u,r,s+Ci(i,e+30)+Ci(i,e+32),h]},bb=function(i,e){for(;Ci(i,e)!=1;e+=4+Ci(i,e+2));return[Gu(i,e+12),Gu(i,e+4),Gu(i,e+20)]};function Eb(i,e){for(var t={},n=i.length-22;li(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Vn(13);var r=Ci(i,n+8);if(!r)return{};var s=li(i,n+16),a=s==4294967295||r==65535;if(a){var o=li(i,n-12);a=li(i,o)==101075792,a&&(r=li(i,o+32),s=li(i,o+48))}for(var c=0;c<r;++c){var u=Mb(i,s,a),h=u[0],f=u[1],p=u[2],m=u[3],x=u[4],E=u[5],v=Sb(i,E);s=x,h?h==8?t[m]=_b(i.subarray(v,v+f),{out:new Cn(p)}):Vn(14,"unknown compression type "+h):t[m]=Vu(i,v,v+f)}return t}function Tb(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Lt;let u=0;for(let h=0;h<i.length;++h){const f=i[h];let p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(f.attributes[m]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in f.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m])}if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,m,h),u+=m}}if(t){let h=0;const f=[];for(let p=0;p<i.length;++p){const m=i[p].index;for(let x=0;x<m.count;++x)f.push(m.getX(x)+h);h+=i[p].attributes.position.count}c.setIndex(f)}for(const h in s){const f=Dp(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<f;++p){const m=[];for(let E=0;E<a[h].length;++E)m.push(a[h][E][p]);const x=Dp(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}}return c}function Dp(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){const h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new At(a,t,n);let c=0;for(let u=0;u<i.length;++u){const h=i[u];if(h.isInterleavedBufferAttribute){const f=c/t;for(let p=0,m=h.count;p<m;p++)for(let x=0;x<t;x++){const E=h.getComponent(p,x);o.setComponent(p+f,x,E)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}function Np(i,e){if(e===Wg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Rc||e===Mf){let t=i.getIndex();if(t===null){const s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Rc)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const Xu=$t,Up="http://schemas.microsoft.com/3dmanufacturing/beamlattice/2017/02",qu="http://schemas.microsoft.com/3dmanufacturing/beamlattice/balls/2020/07";class wb extends Bn{constructor(e){super(e),this.availableExtensions=[]}load(e,t,n,r){const s=this,a=new ps(s.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e){const t=this,n=new md(this.manager);function r(k){let G=null,ae=null,Q,se;const ce=[],de=[];let ye;const ge={},ve={},Fe={},Te=new TextDecoder;try{G=Eb(new Uint8Array(k))}catch(pt){if(pt instanceof ReferenceError)return console.error("THREE.3MFLoader: fflate missing and file is compressed."),null}let st=null;for(ae in G)ae.match(/\_rels\/.rels$/)?Q=ae:ae.match(/3D\/_rels\/.*\.model\.rels$/)?se=ae:ae.match(/^3D\/[^\/]*\.model$/)?st=ae:ae.match(/^3D\/.*\/.*\.model$/)?ce.push(ae):ae.match(/^3D\/Textures?\/.*/)&&de.push(ae);if(ce.push(st),Q===void 0)throw new Error("THREE.ThreeMFLoader: Cannot find relationship file `rels` in 3MF archive.");const tt=G[Q],lt=Te.decode(tt),q=s(lt);if(se){const pt=G[se],Ae=Te.decode(pt);ye=s(Ae)}for(let pt=0;pt<ce.length;pt++){const Ae=ce[pt],U=G[Ae],b=Te.decode(U),ee=new DOMParser().parseFromString(b,"application/xml");ee.documentElement.nodeName.toLowerCase()!=="model"&&console.error("THREE.3MFLoader: Error loading 3MF - no 3MF document found: ",Ae);const K=ee.querySelector("model"),oe={};for(let Re=0;Re<K.attributes.length;Re++){const le=K.attributes[Re];le.name.match(/^xmlns:(.+)$/)&&(oe[le.value]=RegExp.$1)}const be=P(K);be.xml=K,0<Object.keys(oe).length&&(be.extensions=oe),ge[Ae]=be}for(let pt=0;pt<de.length;pt++){const Ae=de[pt];Fe[Ae]=G[Ae].buffer}return{rels:q,modelRels:ye,model:ge,printTicket:ve,texture:Fe}}function s(k){const G=[],Q=new DOMParser().parseFromString(k,"application/xml").querySelectorAll("Relationship");for(let se=0;se<Q.length;se++){const ce=Q[se],de={target:ce.getAttribute("Target"),id:ce.getAttribute("Id"),type:ce.getAttribute("Type")};G.push(de)}return G}function a(k){const G={};for(let ae=0;ae<k.length;ae++){const Q=k[ae],se=Q.getAttribute("name");0<=["Title","Designer","Description","Copyright","LicenseTerms","Rating","CreationDate","ModificationDate"].indexOf(se)&&(G[se]=Q.textContent)}return G}function o(k){const G={id:k.getAttribute("id"),basematerials:[]},ae=k.querySelectorAll("base");for(let Q=0;Q<ae.length;Q++){const se=ae[Q],ce=x(se);ce.index=Q,G.basematerials.push(ce)}return G}function c(k){return{id:k.getAttribute("id"),path:k.getAttribute("path"),contenttype:k.getAttribute("contenttype"),tilestyleu:k.getAttribute("tilestyleu"),tilestylev:k.getAttribute("tilestylev"),filter:k.getAttribute("filter")}}function u(k){const G={id:k.getAttribute("id"),texid:k.getAttribute("texid"),displaypropertiesid:k.getAttribute("displaypropertiesid")},ae=k.querySelectorAll("tex2coord"),Q=[];for(let se=0;se<ae.length;se++){const ce=ae[se],de=ce.getAttribute("u"),ye=ce.getAttribute("v");Q.push(parseFloat(de),parseFloat(ye))}return G.uvs=new Float32Array(Q),G}function h(k){const G={id:k.getAttribute("id"),displaypropertiesid:k.getAttribute("displaypropertiesid")},ae=k.querySelectorAll("color"),Q=[],se=new Je;for(let ce=0;ce<ae.length;ce++){const ye=ae[ce].getAttribute("color");se.setStyle(ye.substring(0,7),Xu),Q.push(se.r,se.g,se.b)}return G.colors=new Float32Array(Q),G}function f(k){const G=k.children,ae={};for(let Q=0;Q<G.length;Q++){const se={type:G[Q].nodeName.substring(2)};for(let ce=0;ce<G[Q].attributes.length;ce++){const de=G[Q].attributes[ce];de.specified&&(se[de.name]=de.value)}ae[G[Q].getAttribute("identifier")]=se}return ae}function p(k){const G={id:k.getAttribute("id"),displayname:k.getAttribute("displayname")},ae=k.children,Q={};for(let se=0;se<ae.length;se++){const ce=ae[se];if(ce.nodeName==="i:in"||ce.nodeName==="i:out")Q[ce.nodeName==="i:in"?"inputs":"outputs"]=f(ce);else{const de=ce.children,ye={op:ce.nodeName.substring(2),identifier:ce.getAttribute("identifier")};for(let ge=0;ge<de.length;ge++)ye[de[ge].nodeName.substring(2)]=f(de[ge]);Q[ye.identifier]=ye}}return G.operations=Q,G}function m(k){const G={id:k.getAttribute("id")},ae=k.querySelectorAll("pbmetallic"),Q=[];for(let se=0;se<ae.length;se++){const ce=ae[se];Q.push({name:ce.getAttribute("name"),metallicness:parseFloat(ce.getAttribute("metallicness")),roughness:parseFloat(ce.getAttribute("roughness"))})}return G.data=Q,G}function x(k){const G={};return G.name=k.getAttribute("name"),G.displaycolor=k.getAttribute("displaycolor"),G.displaypropertiesid=k.getAttribute("displaypropertiesid"),G}function E(k){const G={},ae=[],Q=k.querySelectorAll("vertices vertex");for(let ge=0;ge<Q.length;ge++){const ve=Q[ge],Fe=ve.getAttribute("x"),Te=ve.getAttribute("y"),st=ve.getAttribute("z");ae.push(parseFloat(Fe),parseFloat(Te),parseFloat(st))}G.vertices=new Float32Array(ae);const se=[],ce=[],de=k.querySelectorAll("triangles triangle");for(let ge=0;ge<de.length;ge++){const ve=de[ge],Fe=ve.getAttribute("v1"),Te=ve.getAttribute("v2"),st=ve.getAttribute("v3"),tt=ve.getAttribute("p1"),lt=ve.getAttribute("p2"),q=ve.getAttribute("p3"),pt=ve.getAttribute("pid"),Ae={};Ae.v1=parseInt(Fe,10),Ae.v2=parseInt(Te,10),Ae.v3=parseInt(st,10),ce.push(Ae.v1,Ae.v2,Ae.v3),tt&&(Ae.p1=parseInt(tt,10)),lt&&(Ae.p2=parseInt(lt,10)),q&&(Ae.p3=parseInt(q,10)),pt&&(Ae.pid=pt),0<Object.keys(Ae).length&&se.push(Ae)}G.triangleProperties=se,G.triangles=new Uint32Array(ce);const ye=k.getElementsByTagNameNS(Up,"beamlattice")[0];return ye!==void 0&&(G.beamlattice=v(ye)),G}function v(k){const G={radius:parseFloat(k.getAttribute("radius")),minLength:parseFloat(k.getAttribute("minlength")),cap:k.getAttribute("cap")||"sphere",ballMode:k.getAttributeNS(qu,"ballmode")||"none",ballRadius:parseFloat(k.getAttributeNS(qu,"ballradius")),beams:[],balls:[]},ae=k.getAttribute("clippingmode")||k.getAttribute("clipping");ae!==null&&ae!=="none"&&console.warn("THREE.3MFLoader: Beam lattice clipping is not supported. The lattice is rendered unclipped.");const Q=k.getElementsByTagNameNS(Up,"beam");for(let ce=0;ce<Q.length;ce++){const de=Q[ce],ye={v1:parseInt(de.getAttribute("v1"),10),v2:parseInt(de.getAttribute("v2"),10)},ge=de.getAttribute("r1"),ve=de.getAttribute("r2");ge!==null&&(ye.r1=parseFloat(ge)),ve!==null&&(ye.r2=parseFloat(ve)),G.beams.push(ye)}const se=k.getElementsByTagNameNS(qu,"ball");for(let ce=0;ce<se.length;ce++){const de=se[ce],ye={vindex:parseInt(de.getAttribute("vindex"),10)},ge=de.getAttribute("r");ge!==null&&(ye.r=parseFloat(ge)),G.balls.push(ye)}return G}function _(k){const G=[],ae=k.querySelectorAll("component");for(let Q=0;Q<ae.length;Q++){const se=ae[Q],ce=L(se);G.push(ce)}return G}function L(k){const G={};G.objectId=k.getAttribute("objectid");const ae=k.getAttribute("transform");return ae&&(G.transform=A(ae)),G}function A(k){const G=[];k.split(" ").forEach(function(Q){G.push(parseFloat(Q))});const ae=new ut;return ae.set(G[0],G[3],G[6],G[9],G[1],G[4],G[7],G[10],G[2],G[5],G[8],G[11],0,0,0,1),ae}function M(k){const G={type:k.getAttribute("type")},ae=k.getAttribute("id");ae&&(G.id=ae);const Q=k.getAttribute("pid");Q&&(G.pid=Q);const se=k.getAttribute("pindex");se&&(G.pindex=se);const ce=k.getAttribute("thumbnail");ce&&(G.thumbnail=ce);const de=k.getAttribute("partnumber");de&&(G.partnumber=de);const ye=k.getAttribute("name");ye&&(G.name=ye);const ge=k.querySelector("mesh");ge&&(G.mesh=E(ge));const ve=k.querySelector("components");return ve&&(G.components=_(ve)),G}function w(k){const G={};G.basematerials={};const ae=k.querySelectorAll("basematerials");for(let ve=0;ve<ae.length;ve++){const Fe=ae[ve],Te=o(Fe);G.basematerials[Te.id]=Te}G.texture2d={};const Q=k.querySelectorAll("texture2d");for(let ve=0;ve<Q.length;ve++){const Fe=Q[ve],Te=c(Fe);G.texture2d[Te.id]=Te}G.colorgroup={};const se=k.querySelectorAll("colorgroup");for(let ve=0;ve<se.length;ve++){const Fe=se[ve],Te=h(Fe);G.colorgroup[Te.id]=Te}const ce=k.querySelectorAll("implicitfunction");ce.length>0&&(G.implicitfunction={});for(let ve=0;ve<ce.length;ve++){const Fe=ce[ve],Te=p(Fe);G.implicitfunction[Te.id]=Te}G.pbmetallicdisplayproperties={};const de=k.querySelectorAll("pbmetallicdisplayproperties");for(let ve=0;ve<de.length;ve++){const Fe=de[ve],Te=m(Fe);G.pbmetallicdisplayproperties[Te.id]=Te}G.texture2dgroup={};const ye=k.querySelectorAll("texture2dgroup");for(let ve=0;ve<ye.length;ve++){const Fe=ye[ve],Te=u(Fe);G.texture2dgroup[Te.id]=Te}G.object={};const ge=k.querySelectorAll("object");for(let ve=0;ve<ge.length;ve++){const Fe=ge[ve],Te=M(Fe);G.object[Te.id]=Te}return G}function T(k){const G=[],ae=k.querySelectorAll("item");for(let Q=0;Q<ae.length;Q++){const se=ae[Q],ce={objectId:se.getAttribute("objectid")},de=se.getAttribute("transform");de&&(ce.transform=A(de)),G.push(ce)}return G}function P(k){const G={unit:k.getAttribute("unit")||"millimeter"},ae=k.querySelectorAll("metadata");ae&&(G.metadata=a(ae));const Q=k.querySelector("resources");Q&&(G.resources=w(Q));const se=k.querySelector("build");return se&&(G.build=T(se)),G}function y(k,G,ae,Q){const se=k.texid,de=ae.resources.texture2d[se];if(de){const ye=Q[de.path],ge=de.contenttype,ve=new Blob([ye],{type:ge}),Fe=URL.createObjectURL(ve),Te=n.load(Fe,function(){URL.revokeObjectURL(Fe)});switch(Te.colorSpace=Xu,de.tilestyleu){case"wrap":Te.wrapS=_i;break;case"mirror":Te.wrapS=qr;break;case"none":case"clamp":Te.wrapS=In;break;default:Te.wrapS=_i}switch(de.tilestylev){case"wrap":Te.wrapT=_i;break;case"mirror":Te.wrapT=qr;break;case"none":case"clamp":Te.wrapT=In;break;default:Te.wrapT=_i}switch(de.filter){case"auto":Te.magFilter=qt,Te.minFilter=Zn;break;case"linear":Te.magFilter=qt,Te.minFilter=qt,Te.generateMipmaps=!1;break;case"nearest":Te.magFilter=jt,Te.minFilter=jt,Te.generateMipmaps=!1;break;default:Te.magFilter=qt,Te.minFilter=Zn}return Te}else return null}function R(k,G,ae,Q,se,ce,de){const ye=de.pindex,ge={};for(let Te=0,st=G.length;Te<st;Te++){const tt=G[Te],lt=tt.p1!==void 0?tt.p1:ye;ge[lt]===void 0&&(ge[lt]=[]),ge[lt].push(tt)}const ve=Object.keys(ge),Fe=[];for(let Te=0,st=ve.length;Te<st;Te++){const tt=ve[Te],lt=ge[tt],q=k.basematerials[tt],pt=ie(q,Q,se,ce,de,pe),Ae=new Lt,U=[],b=ae.vertices;for(let K=0,oe=lt.length;K<oe;K++){const be=lt[K];U.push(b[be.v1*3+0]),U.push(b[be.v1*3+1]),U.push(b[be.v1*3+2]),U.push(b[be.v2*3+0]),U.push(b[be.v2*3+1]),U.push(b[be.v2*3+2]),U.push(b[be.v3*3+0]),U.push(b[be.v3*3+1]),U.push(b[be.v3*3+2])}Ae.setAttribute("position",new St(U,3));const ee=new Kt(Ae,pt);Fe.push(ee)}return Fe}function N(k,G,ae,Q,se,ce,de){const ye=new Lt,ge=[],ve=[],Fe=ae.vertices,Te=k.uvs;for(let q=0,pt=G.length;q<pt;q++){const Ae=G[q];ge.push(Fe[Ae.v1*3+0]),ge.push(Fe[Ae.v1*3+1]),ge.push(Fe[Ae.v1*3+2]),ge.push(Fe[Ae.v2*3+0]),ge.push(Fe[Ae.v2*3+1]),ge.push(Fe[Ae.v2*3+2]),ge.push(Fe[Ae.v3*3+0]),ge.push(Fe[Ae.v3*3+1]),ge.push(Fe[Ae.v3*3+2]),ve.push(Te[Ae.p1*2+0]),ve.push(Te[Ae.p1*2+1]),ve.push(Te[Ae.p2*2+0]),ve.push(Te[Ae.p2*2+1]),ve.push(Te[Ae.p3*2+0]),ve.push(Te[Ae.p3*2+1])}ye.setAttribute("position",new St(ge,3)),ye.setAttribute("uv",new St(ve,2));const st=ie(k,Q,se,ce,de,y),tt=new us({map:st,flatShading:!0});return new Kt(ye,tt)}function F(k,G,ae,Q){const se=new Lt,ce=[],de=[],ye=ae.vertices,ge=k.colors;for(let Te=0,st=G.length;Te<st;Te++){const tt=G[Te],lt=tt.v1,q=tt.v2,pt=tt.v3;ce.push(ye[lt*3+0]),ce.push(ye[lt*3+1]),ce.push(ye[lt*3+2]),ce.push(ye[q*3+0]),ce.push(ye[q*3+1]),ce.push(ye[q*3+2]),ce.push(ye[pt*3+0]),ce.push(ye[pt*3+1]),ce.push(ye[pt*3+2]);const Ae=tt.p1!==void 0?tt.p1:Q.pindex,U=tt.p2!==void 0?tt.p2:Ae,b=tt.p3!==void 0?tt.p3:Ae;de.push(ge[Ae*3+0]),de.push(ge[Ae*3+1]),de.push(ge[Ae*3+2]),de.push(ge[U*3+0]),de.push(ge[U*3+1]),de.push(ge[U*3+2]),de.push(ge[b*3+0]),de.push(ge[b*3+1]),de.push(ge[b*3+2])}se.setAttribute("position",new St(ce,3)),se.setAttribute("color",new St(de,3));const ve=new us({vertexColors:!0,flatShading:!0});return new Kt(se,ve)}function z(k){const G=new Lt;G.setIndex(new At(k.triangles,1)),G.setAttribute("position",new At(k.vertices,3));const ae=new us({name:Bn.DEFAULT_MATERIAL_NAME,color:16777215,flatShading:!0});return new Kt(G,ae)}function V(k){const G=k.beamlattice,ae=k.vertices,Q=[],se=new j,ce=new j,de=new j,ye=new j(0,1,0),ge=new Un,ve=new ut,Fe=G.beams,Te=G.cap!=="butt",st=new Map;for(let Ae=0;Ae<Fe.length;Ae++){const U=Fe[Ae];se.fromArray(ae,U.v1*3),ce.fromArray(ae,U.v2*3);const b=se.distanceTo(ce);if(b<G.minLength)continue;const ee=U.r1!==void 0?U.r1:G.radius,K=U.r2!==void 0?U.r2:ee,oe=new hu(K,ee,b,8,1,Te);de.subVectors(ce,se).divideScalar(b),ge.setFromUnitVectors(ye,de),ve.makeRotationFromQuaternion(ge),ve.setPosition(se.add(ce).multiplyScalar(.5)),oe.applyMatrix4(ve),Q.push(oe),Te&&(st.set(U.v1,Math.max(ee,st.get(U.v1)||0)),st.set(U.v2,Math.max(K,st.get(U.v2)||0))),G.ballMode==="all"&&(st.set(U.v1,Math.max(G.ballRadius,st.get(U.v1)||0)),st.set(U.v2,Math.max(G.ballRadius,st.get(U.v2)||0)))}const tt=G.balls;for(let Ae=0;Ae<tt.length;Ae++){const U=tt[Ae],b=U.r!==void 0?U.r:G.ballRadius;st.set(U.vindex,Math.max(b,st.get(U.vindex)||0))}for(const[Ae,U]of st){const b=new du(U,8,6);se.fromArray(ae,Ae*3),b.translate(se.x,se.y,se.z),Q.push(b)}const lt=Tb(Q),q=new us({name:Bn.DEFAULT_MATERIAL_NAME,color:16777215});return new Kt(lt,q)}function O(k,G,ae,Q,se,ce){const de=Object.keys(k),ye=[];for(let ge=0,ve=de.length;ge<ve;ge++){const Fe=de[ge],Te=k[Fe];switch(W(Fe,Q)){case"material":const tt=Q.resources.basematerials[Fe],lt=R(tt,Te,G,ae,Q,se,ce);for(let Ae=0,U=lt.length;Ae<U;Ae++)ye.push(lt[Ae]);break;case"texture":const q=Q.resources.texture2dgroup[Fe];ye.push(N(q,Te,G,ae,Q,se,ce));break;case"vertexColors":const pt=Q.resources.colorgroup[Fe];ye.push(F(pt,Te,G,ce));break;case"default":ye.push(z(G));break;default:console.error("THREE.3MFLoader: Unsupported resource type.")}}if(ce.name)for(let ge=0;ge<ye.length;ge++)ye[ge].name=ce.name;return ye}function W(k,G){return G.resources.texture2dgroup[k]!==void 0?"texture":G.resources.basematerials[k]!==void 0?"material":G.resources.colorgroup[k]!==void 0?"vertexColors":k==="default"?"default":void 0}function J(k,G){const ae={},Q=k.triangleProperties,se=G.pid;for(let ce=0,de=Q.length;ce<de;ce++){const ye=Q[ce];let ge=ye.pid!==void 0?ye.pid:se;ge===void 0&&(ge="default"),ae[ge]===void 0&&(ae[ge]=[]),ae[ge].push(ye)}return ae}function X(k,G,ae,Q,se){const ce=new ni,de=J(k,se),ye=O(de,k,G,ae,Q,se);if(k.beamlattice!==void 0){const ge=V(k);se.name&&(ge.name=se.name),ye.push(ge)}for(let ge=0,ve=ye.length;ge<ve;ge++)ce.add(ye[ge]);return ce}function te(k,G,ae){if(!k)return;const Q=[],se=Object.keys(k);for(let ce=0;ce<se.length;ce++){const de=se[ce];for(let ye=0;ye<t.availableExtensions.length;ye++){const ge=t.availableExtensions[ye];ge.ns===de&&Q.push(ge)}}for(let ce=0;ce<Q.length;ce++){const de=Q[ce];de.apply(ae,k[de.ns],G)}}function ie(k,G,ae,Q,se,ce){return k.build!==void 0||(k.build=ce(k,G,ae,Q,se)),k.build}function pe(k,G,ae){let Q;const se=k.displaypropertiesid,ce=ae.resources.pbmetallicdisplayproperties;if(se!==null&&ce[se]!==void 0){const ve=ce[se].data[k.index];Q=new aa({flatShading:!0,roughness:ve.roughness,metalness:ve.metallicness})}else Q=new us({flatShading:!0});Q.name=k.name;const de=k.displaycolor,ye=de.substring(0,7);return Q.color.setStyle(ye,Xu),de.length===9&&(Q.opacity=parseInt(de.charAt(7)+de.charAt(8),16)/255),Q}function me(k,G,ae,Q){const se=new ni;for(let ce=0;ce<k.length;ce++){const de=k[ce];let ye=G[de.objectId];ye===void 0&&(Ne(de.objectId,G,ae,Q),ye=G[de.objectId]);const ge=ye.clone(),ve=de.transform;ve&&ge.applyMatrix4(ve),se.add(ge)}return se}function Ne(k,G,ae,Q){const se=ae.resources.object[k];if(se.mesh){const ce=se.mesh,de=ae.extensions,ye=ae.xml;te(de,ce,ye),G[se.id]=ie(ce,G,ae,Q,se,X)}else{const ce=se.components;G[se.id]=ie(ce,G,ae,Q,se,me)}se.name&&(G[se.id].name=se.name),ae.resources.implicitfunction&&console.warn("THREE.ThreeMFLoader: Implicit Functions are implemented in data-only.",ae.resources.implicitfunction)}function we(k){const G=k.model,ae=k.modelRels,Q={},se=Object.keys(G),ce={};if(ae)for(let de=0,ye=ae.length;de<ye;de++){const ge=ae[de],ve=ge.target.substring(1);k.texture[ve]&&(ce[ge.target]=k.texture[ve])}for(let de=0;de<se.length;de++){const ye=se[de],ge=G[ye],ve=Object.keys(ge.resources.object);for(let Fe=0;Fe<ve.length;Fe++){const Te=ve[Fe];Ne(Te,Q,ge,ce)}}return Q}function dt(k){for(let G=0;G<k.length;G++){const ae=k[G];if(ae.target.split(".").pop().toLowerCase()==="model")return ae}}function $e(k,G){const ae=new ni,Q=dt(G.rels),se=G.model[Q.target.substring(1)].build;for(let ce=0;ce<se.length;ce++){const de=se[ce],ye=k[de.objectId].clone(),ge=de.transform;ge&&ye.applyMatrix4(ge),ae.add(ye)}return ae}const ot=r(e),he=we(ot);return $e(he,ot)}addExtension(e){this.availableExtensions.push(e)}}function Ab(i){const e=new Map,t=new Map,n=i.clone();return Fp(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Fp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Fp(i.children[n],e.children[n],t)}class Rb extends Bn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Db(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Op(t,vt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Op(t,vt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new qb(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=ha.extractUrlBase(e);a=ha.resolveURL(u,this.path)}else a=ha.extractUrlBase(e);this.manager.itemStart(e);const o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ps(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Bp){try{a[vt.KHR_BINARY_GLTF]=new $b(e)}catch(f){r&&r(f);return}s=JSON.parse(a[vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new aE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const f=s.extensionsUsed[h],p=s.extensionsRequired||[];switch(f){case vt.KHR_MATERIALS_UNLIT:a[f]=new Lb;break;case vt.KHR_DRACO_MESH_COMPRESSION:a[f]=new Yb(s,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:a[f]=new Kb;break;case vt.KHR_MESH_QUANTIZATION:a[f]=new jb;break;default:p.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Cb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Zt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Pb{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const h=new Je(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Tn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Do(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new R0(h),u.distance=f;break;case"spot":u=new w0(h),u.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),Pi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Lb{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rr}extendParams(e,t,n){const r=[];e.color=new Je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Tn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,$t))}return Promise.all(r)}}class Ib{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Db{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(s,s)}return Promise.all(r)}}class Nb{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Ub{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}}class Fb{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];if(t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,$t)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}}class Ob{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}}class Bb{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(s[0],s[1],s[2],Tn),Promise.all(r)}}class kb{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class zb{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(s[0],s[1],s[2],Tn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,$t)),Promise.all(r)}}class Hb{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}}class Vb{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}}class Gb{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Wb{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}}class Xb{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return n.loadTextureImage(e,a.source,c)}}class Op{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=r.byteOffset||0,u=r.byteLength||0,h=r.count,f=r.byteStride,p=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,p,r.mode,r.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(m),h,f,p,r.mode,r.filter),m})})}else return null}}class qb{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const u of r.primitives)if(u.mode!==Gn.TRIANGLES&&u.mode!==Gn.TRIANGLE_STRIP&&u.mode!==Gn.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(h=>(c[u]=h,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const h=u.pop(),f=h.isGroup?h.children:[h],p=u[0].count,m=[];for(const x of f){const E=new ut,v=new j,_=new Un,L=new j(1,1,1),A=new Z_(x.geometry,x.material,p);for(let w=0;w<p;w++)c.TRANSLATION&&v.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&_.fromBufferAttribute(c.ROTATION,w),c.SCALE&&L.fromBufferAttribute(c.SCALE,w),A.setMatrixAt(w,E.compose(v,_,L));let M=null;for(const w in c)if(w==="_COLOR_0"){const T=c[w];A.instanceColor=new po(T.array,T.itemSize,T.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(M===null){const P=A.geometry;M=new Lt,M.name=P.name;for(const y in P.attributes)M.setAttribute(y,P.attributes[y]);for(const y in P.morphAttributes)M.morphAttributes[y]=P.morphAttributes[y];P.index!==null&&M.setIndex(P.index),M.morphTargetsRelative=P.morphTargetsRelative;for(const y of P.groups)M.addGroup(y.start,y.count,y.materialIndex);P.boundingBox!==null&&(M.boundingBox=P.boundingBox.clone()),P.boundingSphere!==null&&(M.boundingSphere=P.boundingSphere.clone()),M.drawRange.start=P.drawRange.start,M.drawRange.count=P.drawRange.count,M.userData=Object.assign({},P.userData),A.geometry=M}const T=c[w];M.setAttribute(w,new po(T.array,T.itemSize,T.normalized))}Gt.prototype.copy.call(A,x),this.parser.assignFinalMaterial(A),m.push(A)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const Bp="glTF",va=12,kp={JSON:1313821514,BIN:5130562};class $b{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,va),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-va,s=new DataView(e,va);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===kp.JSON){const u=new Uint8Array(e,va+a,o);this.content=n.decode(u)}else if(c===kp.BIN){const u=va+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},u={};for(const h in a){const f=Yu[h]||h.toLowerCase();o[f]=a[h]}for(const h in e.attributes){const f=Yu[h]||h.toLowerCase();if(a[h]!==void 0){const p=n.accessors[e.attributes[h]],m=Es[p.componentType];u[f]=m.name,c[f]=p.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(f,p){r.decodeDracoFile(h,function(m){for(const x in m.attributes){const E=m.attributes[x],v=c[x];v!==void 0&&(E.normalized=v)}f(m)},o,u,Tn,p)})})}}class Kb{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class jb{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class zp extends hs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,h=r-t,f=(n-t)/h,p=f*f,m=p*f,x=e*u,E=x-u,v=-2*m+3*p,_=m-p,L=1-v,A=_-p+f;for(let M=0;M!==o;M++){const w=a[E+M+o],T=a[E+M+c]*h,P=a[x+M+o],y=a[x+M]*h;s[M]=L*w+A*T+v*P+_*y}return s}}const Zb=new Un;class Jb extends zp{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Zb.fromArray(s).normalize().toArray(s),s}}const Gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hp={9728:jt,9729:qt,9984:hf,9985:za,9986:zs,9987:Zn},Vp={33071:In,33648:qr,10497:_i},$u={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qb={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Gs},Ku={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new aa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),i.DefaultMaterial}function Dr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tE(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,h=e.length;u<h;u++){const f=e[u];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],c=[];for(let u=0,h=e.length;u<h;u++){const f=e[u];if(n){const p=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(p)}if(r){const p=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(p)}if(s){const p=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(p)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],p=u[2];return n&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=p),i.morphTargetsRelative=!0,i})}function nE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iE(i){let e;const t=i.extensions&&i.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ju(t.attributes):e=i.indices+":"+ju(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+ju(i.targets[n]);return e}function ju(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Zu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sE=new ut;class aE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new md(this.options.manager):this.textureLoader=new L0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ps(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return Dr(s,o,r),Pi(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[u,h]of a.children.entries())s(h,o.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(ha.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=$u[r.type],o=Es[r.componentType],c=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new At(u,a,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=$u[r.type],u=Es[r.componentType],h=u.BYTES_PER_ELEMENT,f=h*c,p=r.byteOffset||0,m=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0;let E,v;if(m&&m!==f){const _=Math.floor(p/m),L="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let A=t.cache.get(L);A||(E=new u(o,_*m,r.count*m/h),A=new V_(E,m/h),t.cache.add(L,A)),v=new Qc(A,c,p%m/h,x)}else o===null?E=new u(r.count*c):E=new u(o,p,r.count*c),v=new At(E,c,x);if(r.sparse!==void 0){const _=$u.SCALAR,L=Es[r.sparse.indices.componentType],A=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,w=new L(a[1],A,r.sparse.count*_),T=new u(a[2],M,r.sparse.count*c);o!==null&&(v=new At(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let P=0,y=w.length;P<y;P++){const R=w[P];if(v.setX(R,T[P*c]),c>=2&&v.setY(R,T[P*c+1]),c>=3&&v.setZ(R,T[P*c+2]),c>=4&&v.setW(R,T[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=x}return v})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const p=(s.samplers||{})[a.sampler]||{};return h.magFilter=Hp[p.magFilter]||qt,h.minFilter=Hp[p.minFilter]||Zn,h.wrapS=Vp[p.wrapS]||_i,h.wrapT=Vp[p.wrapT]||_i,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==qt,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){u=!0;const p=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(p),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(f){return new Promise(function(p,m){let x=p;t.isImageBitmapLoader===!0&&(x=function(E){const v=new rn(E);v.needsUpdate=!0,p(v)}),t.load(ha.resolveURL(f,s.path),x,void 0,m)})}).then(function(f){return u===!0&&o.revokeObjectURL(c),Pi(f,a),f.userData.mimeType=a.mimeType||rE(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ls,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new cr,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return aa}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},u=[];if(c[vt.KHR_MATERIALS_UNLIT]){const f=r[vt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Je(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const p=f.baseColorFactor;o.color.setRGB(p[0],p[1],p[2],Tn),o.opacity=p[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",f.baseColorTexture,$t)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=jn);const h=s.alphaMode||Ku.OPAQUE;if(h===Ku.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ku.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Rr&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==Rr&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Rr){const f=s.emissiveFactor;o.emissive=new Je().setRGB(f[0],f[1],f[2],Tn)}return s.emissiveTexture!==void 0&&a!==Rr&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,$t)),Promise.all(u).then(function(){const f=new a(o);return s.name&&(f.name=s.name),Pi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Dr(r,f,s),f})}createUniqueName(e){const t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Gp(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o],h=iE(u),f=r[h];if(f)a.push(f.promise);else{let p;u.extensions&&u.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?p=s(u):p=Gp(new Lt,u,t),u.mode===Gn.TRIANGLE_STRIP?p=p.then(m=>Np(m,Mf)):u.mode===Gn.TRIANGLE_FAN&&(p=p.then(m=>Np(m,Rc))),r[h]={primitive:u,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,u=a.length;c<u;c++){const h=a[c].material===void 0?eE(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let m=0,x=h.length;m<x;m++){const E=h[m],v=a[m];let _;const L=u[m];if(v.mode===Gn.TRIANGLES||v.mode===Gn.TRIANGLE_STRIP||v.mode===Gn.TRIANGLE_FAN||v.mode===void 0){const A=s.isSkinnedMesh===!0,M=E.hasAttribute("skinIndex")&&E.hasAttribute("skinWeight");A&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),_=A&&M?new Y_(E,L):new Kt(E,L),_.isSkinnedMesh===!0&&_.normalizeSkinWeights()}else if(v.mode===Gn.LINES)_=new ia(E,L);else if(v.mode===Gn.LINE_STRIP)_=new cu(E,L);else if(v.mode===Gn.LINE_LOOP)_=new Q_(E,L);else if(v.mode===Gn.POINTS)_=new bo(E,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(_.geometry.morphAttributes).length>0&&nE(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Pi(_,s),v.extensions&&Dr(r,_,v),t.assignFinalMaterial(_),f.push(_)}for(let m=0,x=f.length;m<x;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return s.extensions&&Dr(r,f[0],s),f[0];const p=new ni;s.extensions&&Dr(r,p,s),t.associations.set(p,{meshes:e});for(let m=0,x=f.length;m<x;m++)p.add(f[m]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(Rf.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new ua(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],c=[];for(let u=0,h=a.length;u<h;u++){const f=a[u];if(f){o.push(f);const p=new ut;s!==null&&p.fromArray(s.array,u*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new au(o,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],u=[],h=[];for(let f=0,p=r.channels.length;f<p;f++){const m=r.channels[f],x=r.samplers[m.sampler],E=m.target,v=E.node,_=r.parameters!==void 0?r.parameters[x.input]:x.input,L=r.parameters!==void 0?r.parameters[x.output]:x.output;E.node!==void 0&&(a.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",_)),c.push(this.getDependency("accessor",L)),u.push(x),h.push(E))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(f){const p=f[0],m=f[1],x=f[2],E=f[3],v=f[4],_=[];for(let A=0,M=p.length;A<M;A++){const w=p[A],T=m[A],P=x[A],y=E[A],R=v[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const N=n._createAnimationTracks(w,T,P,y,R);if(N)for(let F=0;F<N.length;F++)_.push(N[F])}const L=new _0(s,void 0,_);return Pi(L,r),L})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=r.weights.length;c<u;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,h=o.length;u<h;u++)a.push(n.getDependency("node",o[u]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(u){const h=u[0],f=u[1],p=u[2];p!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(p,sE)});for(let m=0,x=f.length;m<x;m++)h.add(f[m]);if(h.userData.pivot!==void 0&&f.length>0){const m=h.userData.pivot,x=f[0];h.pivot=new j().fromArray(m),h.position.x-=m[0],h.position.y-=m[1],h.position.z-=m[2],x.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let h;if(s.isBone===!0?h=new jf:u.length>1?h=new ni:u.length===1?h=u[0]:h=new Gt,h!==u[0])for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(s.name&&(h.userData.name=s.name,h.name=a),Pi(h,s),s.extensions&&Dr(n,h,s),s.matrix!==void 0){const f=new ut;f.fromArray(s.matrix),h.applyMatrix4(f)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!r.associations.has(h))r.associations.set(h,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const f=r.associations.get(h);r.associations.set(h,{...f})}return r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ni;n.name&&(s.name=r.createUniqueName(n.name)),Pi(s,n),n.extensions&&Dr(t,s,n);const a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,f=c.length;h<f;h++){const p=c[h];p.parent!==null?s.add(Ab(p)):s.add(p)}const u=h=>{const f=new Map;for(const[p,m]of r.associations)(p instanceof Rn||p instanceof rn)&&f.set(p,m);return h.traverse(p=>{const m=r.associations.get(p);m!=null&&f.set(p,m)}),f};return r.associations=u(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,c=[];function u(m){m.morphTargetInfluences&&c.push(m.name?m.name:m.uuid)}pr[s.path]===pr.weights?(u(e),e.isGroup&&e.children.forEach(u)):c.push(o);let h;switch(pr[s.path]){case pr.weights:h=oa;break;case pr.rotation:h=la;break;case pr.translation:case pr.scale:h=Po;break;default:switch(n.itemSize){case 1:h=oa;break;case 2:case 3:default:h=Po;break}break}const f=r.interpolation!==void 0?Qb[r.interpolation]:Ws,p=this._getArrayFromAccessor(n);for(let m=0,x=c.length;m<x;m++){const E=new h(c[m]+"."+pr[s.path],t.array,p,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),a.push(E)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Zu(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof la?Jb:zp;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function oE(i,e,t){const n=e.attributes,r=new Si;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(r.set(new j(c[0],c[1],c[2]),new j(u[0],u[1],u[2])),o.normalized){const h=Zu(Es[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new j,c=new j;for(let u=0,h=s.length;u<h;u++){const f=s[u];if(f.POSITION!==void 0){const p=t.json.accessors[f.POSITION],m=p.min,x=p.max;if(m!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),p.normalized){const E=Zu(Es[p.componentType]);c.multiplyScalar(E)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new Mi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Gp(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Yu[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return xt.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Pi(i,e),oE(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?tE(i,e.targets,t):i})}function Ju(i,e,t="#94a3b8"){var a;i.getAttribute("normal")||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere();let n;try{n=new Ao(i,28),n.computeBoundingSphere()}catch{}const r=((a=i.getAttribute("position"))==null?void 0:a.count)||0,s=i.getIndex()?i.getIndex().count/3:r/3;return{name:e,metadata:{id:`mesh-${Math.random().toString(36).substring(2,9)}`,originalId:e,name:e,color:t,opacity:1,visible:!0,vertexCount:r,triangleCount:Math.floor(s)},geometry:i,edgeGeometry:n}}function Qu(i,e){const t=[];let n=1;return i.traverse(r=>{if(r instanceof Kt&&r.geometry){const s=r.geometry.clone();r.updateMatrixWorld(),s.applyMatrix4(r.matrixWorld);let a="#94a3b8";if(r.material){const c=Array.isArray(r.material)?r.material[0]:r.material;c&&"color"in c&&c.color instanceof Je&&(a=`#${c.color.getHexString()}`)}const o=r.name||`${e} Part ${n++}`;t.push(Ju(s,o,a))}}),t}async function lE(i,e){var s;const t=(s=e.split(".").pop())==null?void 0:s.toLowerCase(),n=e.replace(/\.[^/.]+$/,"");let r=[];switch(t){case"stl":{const o=new jM().parse(i);r=[Ju(o,n,"#38bdf8")];break}case"ply":{const o=new ZM().parse(i);r=[Ju(o,n,"#10b981")];break}case"obj":{const a=new TextDecoder().decode(i),c=new sb().parse(a);r=Qu(c,n);break}case"3mf":{const o=new wb().parse(i);r=Qu(o,n);break}case"gltf":case"glb":{const a=new Rb,o=await new Promise((c,u)=>{a.parse(i,"",c,u)});o.scene&&(r=Qu(o.scene,n));break}default:throw new Error(`Unsupported mesh format .${t}`)}if(r.length===0)throw new Error(`No 3D meshes found in ${e}`);return{fileName:e,fileSize:i.byteLength,bodies:r}}async function cE(i,e,t){var r;const n=(r=e.split(".").pop())==null?void 0:r.toLowerCase();switch(n){case"rsdocx":case"rsdoc":return await GM(i,e,t);case"step":case"stp":return t==null||t("STEP B-Rep 解析中...",50),await Mp(i,e,!1);case"iges":case"igs":return t==null||t("IGES B-Rep 解析中...",50),await Mp(i,e,!0);case"stl":case"ply":case"obj":case"3mf":case"gltf":case"glb":return t==null||t("3Dメッシュ構築中...",50),await lE(i,e);default:throw new Error(`Unsupported 3D format: .${n}`)}}const uE={class:"viewer-wrapper"},hE={key:1,class:"viewer-loading-overlay"},fE={class:"viewer-loading-box"},dE={class:"viewer-loading-text"},pE={key:0,class:"viewer-progress-bar"},mE={key:2,class:"viewer-error-overlay"},gE={class:"viewer-error-box"},_E={class:"viewer-error-detail"},vE=ip(Hh({__name:"Viewer",props:{file:{},path:{},mime:{}},setup(i){const e=i,t=dn([]),n=dn(!0),r=dn("3Dモデルを取得中..."),s=dn(10),a=dn(null);async function o(){var c,u,h,f,p;n.value=!0,a.value=null,s.value=10,r.value="3Dモデルを取得中...";try{const m=((c=e.file)==null?void 0:c.name)||e.path&&e.path.split("/").pop()||"model.stl";let x=((u=e.file)==null?void 0:u.url)||((h=e.file)==null?void 0:h.source);if(!x&&e.path&&(x=`${((p=(f=window.OC)==null?void 0:f.linkToRemoteBase)==null?void 0:p.call(f,"webdav"))||"/remote.php/webdav"}${e.path.startsWith("/")?"":"/"}${encodeURI(e.path)}`),!x)throw new Error("ファイルの取得 URL を解決できませんでした。");r.value=`ダウンロード中: ${m}`;const E=await fetch(x);if(!E.ok)throw new Error(`ダウンロードに失敗しました (Status: ${E.status})`);s.value=40,r.value="幾何解析中...";const v=await E.arrayBuffer(),_=await cE(v,m,(L,A)=>{r.value=L,A!==void 0&&(s.value=A)});t.value=_.bodies,n.value=!1}catch(m){console.error("[files_3dmv_next] Load error:",m),a.value=(m==null?void 0:m.message)||String(m),n.value=!1}}return Gh(()=>{o()}),(c,u)=>(Mr(),Fs("div",uE,[t.value.length>0?(Mr(),$h(EM,{key:0,bodies:t.value},null,8,["bodies"])):Ua("",!0),n.value?(Mr(),Fs("div",hE,[ki("div",fE,[u[0]||(u[0]=ki("div",{class:"viewer-spinner"},null,-1)),ki("div",dE,hl(r.value),1),s.value>0?(Mr(),Fs("div",pE,[ki("div",{class:"viewer-progress-fill",style:Ea({width:`${s.value}%`})},null,4)])):Ua("",!0)])])):Ua("",!0),a.value?(Mr(),Fs("div",mE,[ki("div",gE,[u[1]||(u[1]=ki("div",{class:"viewer-error-title"},"3D モデルの読み込みに失敗しました",-1)),ki("div",_E,hl(a.value),1)])])):Ua("",!0)]))}}),[["__scopeId","data-v-0731fa53"]]),xE=["model/stl","model/ply","model/3mf","model/gltf+json","model/gltf-binary","application/sla","application/step","application/iges","application/prs.wavefront-obj","application/vnd.spaceclaim.rsdocx","application/vnd.spaceclaim.rsdoc","application/x-b","application/x-t"],yE=["step","stp","iges","igs","rsdocx","rsdoc","stl","ply","obj","3mf","gltf","glb","x_b","x_t"];function SE(){const i={id:"files_3dmv_next",group:"3d",mimes:xE,component:vE,match:e=>{if(!e)return!1;const n=(e.name||e.basename||e.path||"").toLowerCase().split(".").pop();return n?yE.includes(n):!1}};typeof window.OCA<"u"&&window.OCA.Viewer?window.OCA.Viewer.registerHandler(i):window.addEventListener("DOMContentLoaded",()=>{var e;(e=window.OCA)!=null&&e.Viewer&&window.OCA.Viewer.registerHandler(i)})}SE()})();
