(function(){"use strict";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const or={ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kf=0,kc=1,jf=2,Ns=1,Zf=2,Kr=3,Di=0,dn=1,kn=2,yi=0,jr=1,zc=2,Vc=3,Hc=4,Jf=5,cr=100,Qf=101,ed=102,td=103,nd=104,id=200,rd=201,sd=202,ad=203,Gc=204,Wc=205,od=206,ld=207,cd=208,ud=209,hd=210,fd=211,dd=212,pd=213,md=214,to=0,no=1,io=2,Zr=3,ro=4,so=5,ao=6,oo=7,lo=0,gd=1,_d=2,ni=0,Xc=1,qc=2,$c=3,Yc=4,Kc=5,jc=6,Zc=7,Jc="attached",vd="detached",Qc=300,Ki=301,ur=302,co=303,uo=304,Us=306,ii=1e3,En=1001,hr=1002,Yt=1003,eu=1004,Jr=1005,Wt=1006,Fs=1007,zn=1008,_n=1009,tu=1010,nu=1011,Qr=1012,ho=1013,ri=1014,Tn=1015,si=1016,fo=1017,po=1018,es=1020,iu=35902,ru=35899,su=1021,au=1022,wn=1023,Mi=1026,ji=1027,mo=1028,go=1029,Zi=1030,_o=1031,vo=1033,Os=33776,Bs=33777,ks=33778,zs=33779,xo=35840,yo=35841,Mo=35842,So=35843,bo=36196,Eo=37492,To=37496,wo=37488,Ao=37489,Vs=37490,Ro=37491,Co=37808,Po=37809,Lo=37810,Io=37811,Do=37812,No=37813,Uo=37814,Fo=37815,Oo=37816,Bo=37817,ko=37818,zo=37819,Vo=37820,Ho=37821,Go=36492,Wo=36494,Xo=36495,qo=36283,$o=36284,Hs=36285,Yo=36286,ts=2300,ns=2301,Ko=2302,ou=2303,lu=2400,cu=2401,uu=2402,xd=2500,yd=0,hu=1,jo=2,Md=3200,Gs=0,Sd=1,Ni="",Xt="srgb",vn="srgb-linear",Ws="linear",It="srgb",Zo=7680,bd=519,Ed=512,Td=513,wd=514,Jo=515,Ad=516,Rd=517,Qo=518,Cd=519,fu=35044,du="300 es",ai=2e3,is=2001;function Pd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Id(){const i=rs("canvas");return i.style.display="block",i}const pu={};function Xs(...i){const e="THREE."+i.shift();console.log(e,...i)}function mu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=mu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=mu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function fr(...i){const e=i.join(" ");e in pu||(pu[e]=!0,Qe(...i))}function Dd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Nd={[to]:no,[io]:ao,[ro]:oo,[Zr]:so,[no]:to,[ao]:io,[oo]:ro,[so]:Zr};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gu=1234567;const dr=Math.PI/180,pr=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function el(i,e){return(i%e+e)%e}function Ud(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Fd(i,e,t){return i!==e?(t-i)/(e-i):0}function ss(i,e,t){return(1-t)*i+t*e}function Od(i,e,t,n){return ss(i,e,1-Math.exp(-t*n))}function Bd(i,e=1){return e-Math.abs(el(i,e*2)-e)}function kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hd(i,e){return i+Math.random()*(e-i)}function Gd(i){return i*(.5-Math.random())}function Wd(i){i!==void 0&&(gu=i);let e=gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xd(i){return i*dr}function qd(i){return i*pr}function $d(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jd(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),u=a(t/2),c=s((e+n)/2),f=a((e+n)/2),d=s((e-n)/2),p=a((e-n)/2),m=s((n-e)/2),x=a((n-e)/2);switch(r){case"XYX":i.set(o*f,u*d,u*p,o*c);break;case"YZY":i.set(u*p,o*f,u*d,o*c);break;case"ZXZ":i.set(u*d,u*p,o*f,o*c);break;case"XZX":i.set(o*f,u*x,u*m,o*c);break;case"YXY":i.set(u*m,o*f,u*x,o*c);break;case"ZYZ":i.set(u*x,u*m,o*f,o*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _u={DEG2RAD:dr,RAD2DEG:pr,generateUUID:Vn,clamp:_t,euclideanModulo:el,mapLinear:Ud,inverseLerp:Fd,lerp:ss,damp:Od,pingpong:Bd,smoothstep:kd,smootherstep:zd,randInt:Vd,randFloat:Hd,randFloatSpread:Gd,seededRandom:Wd,degToRad:Xd,radToDeg:qd,isPowerOfTwo:$d,ceilPowerOfTwo:Yd,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:jd,normalize:Dt,denormalize:Hn},bc=class bc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bc.prototype.isVector2=!0;let nt=bc;class An{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let u=n[r+0],c=n[r+1],f=n[r+2],d=n[r+3],p=s[a+0],m=s[a+1],x=s[a+2],E=s[a+3];if(d!==E||u!==p||c!==m||f!==x){let v=u*p+c*m+f*x+d*E;v<0&&(p=-p,m=-m,x=-x,E=-E,v=-v);let _=1-o;if(v<.9995){const D=Math.acos(v),C=Math.sin(D);_=Math.sin(_*D)/C,o=Math.sin(o*D)/C,u=u*_+p*o,c=c*_+m*o,f=f*_+x*o,d=d*_+E*o}else{u=u*_+p*o,c=c*_+m*o,f=f*_+x*o,d=d*_+E*o;const D=1/Math.sqrt(u*u+c*c+f*f+d*d);u*=D,c*=D,f*=D,d*=D}}e[t]=u,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],u=n[r+1],c=n[r+2],f=n[r+3],d=s[a],p=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+f*d+u*m-c*p,e[t+1]=u*x+f*p+c*d-o*m,e[t+2]=c*x+f*m+o*p-u*d,e[t+3]=f*x-o*d-u*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,u=Math.sin,c=o(n/2),f=o(r/2),d=o(s/2),p=u(n/2),m=u(r/2),x=u(s/2);switch(a){case"XYZ":this._x=p*f*d+c*m*x,this._y=c*m*d-p*f*x,this._z=c*f*x+p*m*d,this._w=c*f*d-p*m*x;break;case"YXZ":this._x=p*f*d+c*m*x,this._y=c*m*d-p*f*x,this._z=c*f*x-p*m*d,this._w=c*f*d+p*m*x;break;case"ZXY":this._x=p*f*d-c*m*x,this._y=c*m*d+p*f*x,this._z=c*f*x+p*m*d,this._w=c*f*d-p*m*x;break;case"ZYX":this._x=p*f*d-c*m*x,this._y=c*m*d+p*f*x,this._z=c*f*x-p*m*d,this._w=c*f*d+p*m*x;break;case"YZX":this._x=p*f*d+c*m*x,this._y=c*m*d+p*f*x,this._z=c*f*x-p*m*d,this._w=c*f*d-p*m*x;break;case"XZY":this._x=p*f*d-c*m*x,this._y=c*m*d-p*f*x,this._z=c*f*x+p*m*d,this._w=c*f*d+p*m*x;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],u=t[9],c=t[2],f=t[6],d=t[10],p=n+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(f-u)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(f-u)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(u+f)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(u+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,u=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+r*c-s*u,this._y=r*f+a*u+s*o-n*c,this._z=s*f+a*c+n*u-r*o,this._w=a*f-n*o-r*u-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let u=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);u=Math.sin(u*c)/f,t=Math.sin(t*c)/f,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+s*t,this._w=this._w*u+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ec=class Ec{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,u=e.w,c=2*(a*r-o*n),f=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+u*c+a*d-o*f,this.y=n+u*f+o*c-s*d,this.z=r+u*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,u=t.z;return this.x=r*u-s*o,this.y=s*a-n*u,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ec.prototype.isVector3=!0;let Z=Ec;const tl=new Z,vu=new An,Tc=class Tc{constructor(e,t,n,r,s,a,o,u,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,u,c)}set(e,t,n,r,s,a,o,u,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],u=n[6],c=n[1],f=n[4],d=n[7],p=n[2],m=n[5],x=n[8],E=r[0],v=r[3],_=r[6],D=r[1],C=r[4],b=r[7],T=r[2],w=r[5],P=r[8];return s[0]=a*E+o*D+u*T,s[3]=a*v+o*C+u*w,s[6]=a*_+o*b+u*P,s[1]=c*E+f*D+d*T,s[4]=c*v+f*C+d*w,s[7]=c*_+f*b+d*P,s[2]=p*E+m*D+x*T,s[5]=p*v+m*C+x*w,s[8]=p*_+m*b+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*u+r*s*c-r*a*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],f=e[8],d=f*a-o*c,p=o*u-f*s,m=c*s-a*u,x=t*d+n*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=d*E,e[1]=(r*c-f*n)*E,e[2]=(o*n-r*a)*E,e[3]=p*E,e[4]=(f*t-r*u)*E,e[5]=(r*s-o*t)*E,e[6]=m*E,e[7]=(n*u-c*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const u=Math.cos(s),c=Math.sin(s);return this.set(n*u,n*c,-n*(u*a+c*o)+a+e,-r*c,r*u,-r*(-c*a+u*o)+o+t,0,0,1),this}scale(e,t){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nl.makeScale(e,t)),this}rotate(e){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tc.prototype.isMatrix3=!0;let ft=Tc;const nl=new ft,xu=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zd(){const i={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===It&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?Ws:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vn]:{primaries:e,whitePoint:n,transfer:Ws,toXYZ:xu,fromXYZ:yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:It,toXYZ:xu,fromXYZ:yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const xt=Zd();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gr;class Jd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gr===void 0&&(gr=rs("canvas")),gr.width=e.width,gr.height=e.height;const r=gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=gr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qd=0;class il{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(rl(r[a].image)):s.push(rl(r[a]))}else s=rl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let ep=0;const sl=new Z;class en extends Ui{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=En,r=En,s=Wt,a=zn,o=wn,u=_n,c=en.DEFAULT_ANISOTROPY,f=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Vn(),this.name="",this.source=new il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=u,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sl).x}get height(){return this.source.getSize(sl).y}get depth(){return this.source.getSize(sl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null,en.DEFAULT_MAPPING=Qc,en.DEFAULT_ANISOTROPY=1;const wc=class wc{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,c=u[0],f=u[4],d=u[8],p=u[1],m=u[5],x=u[9],E=u[2],v=u[6],_=u[10];if(Math.abs(f-p)<.01&&Math.abs(d-E)<.01&&Math.abs(x-v)<.01){if(Math.abs(f+p)<.1&&Math.abs(d+E)<.1&&Math.abs(x+v)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,b=(m+1)/2,T=(_+1)/2,w=(f+p)/4,P=(d+E)/4,y=(x+v)/4;return C>b&&C>T?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=w/n,s=P/n):b>T?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=w/r,s=y/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=P/s,r=y/s),this.set(n,r,s,t),this}let D=Math.sqrt((v-x)*(v-x)+(d-E)*(d-E)+(p-f)*(p-f));return Math.abs(D)<.001&&(D=1),this.x=(v-x)/D,this.y=(d-E)/D,this.z=(p-f)/D,this.w=Math.acos((c+m+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wc.prototype.isVector4=!0;let Ot=wc;class tp extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new en(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new il(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends tp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mu extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class np extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ha=class Ha{constructor(e,t,n,r,s,a,o,u,c,f,d,p,m,x,E,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,u,c,f,d,p,m,x,E,v)}set(e,t,n,r,s,a,o,u,c,f,d,p,m,x,E,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=u,_[2]=c,_[6]=f,_[10]=d,_[14]=p,_[3]=m,_[7]=x,_[11]=E,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ha().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),u=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*f,m=a*d,x=o*f,E=o*d;t[0]=u*f,t[4]=-u*d,t[8]=c,t[1]=m+x*c,t[5]=p-E*c,t[9]=-o*u,t[2]=E-p*c,t[6]=x+m*c,t[10]=a*u}else if(e.order==="YXZ"){const p=u*f,m=u*d,x=c*f,E=c*d;t[0]=p+E*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=m*o-x,t[6]=E+p*o,t[10]=a*u}else if(e.order==="ZXY"){const p=u*f,m=u*d,x=c*f,E=c*d;t[0]=p-E*o,t[4]=-a*d,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*f,t[9]=E-p*o,t[2]=-a*c,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const p=a*f,m=a*d,x=o*f,E=o*d;t[0]=u*f,t[4]=x*c-m,t[8]=p*c+E,t[1]=u*d,t[5]=E*c+p,t[9]=m*c-x,t[2]=-c,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const p=a*u,m=a*c,x=o*u,E=o*c;t[0]=u*f,t[4]=E-p*d,t[8]=x*d+m,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*d+x,t[10]=p-E*d}else if(e.order==="XZY"){const p=a*u,m=a*c,x=o*u,E=o*c;t[0]=u*f,t[4]=-d,t[8]=c*f,t[1]=p*d+E,t[5]=a*f,t[9]=m*d-x,t[2]=x*d-m,t[6]=o*f,t[10]=E*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ip,e,rp)}lookAt(e,t,n){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Fi.crossVectors(n,xn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Fi.crossVectors(n,xn)),Fi.normalize(),qs.crossVectors(xn,Fi),r[0]=Fi.x,r[4]=qs.x,r[8]=xn.x,r[1]=Fi.y,r[5]=qs.y,r[9]=xn.y,r[2]=Fi.z,r[6]=qs.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],u=n[8],c=n[12],f=n[1],d=n[5],p=n[9],m=n[13],x=n[2],E=n[6],v=n[10],_=n[14],D=n[3],C=n[7],b=n[11],T=n[15],w=r[0],P=r[4],y=r[8],A=r[12],N=r[1],F=r[5],k=r[9],H=r[13],O=r[2],W=r[6],K=r[10],X=r[14],te=r[3],re=r[7],pe=r[11],ve=r[15];return s[0]=a*w+o*N+u*O+c*te,s[4]=a*P+o*F+u*W+c*re,s[8]=a*y+o*k+u*K+c*pe,s[12]=a*A+o*H+u*X+c*ve,s[1]=f*w+d*N+p*O+m*te,s[5]=f*P+d*F+p*W+m*re,s[9]=f*y+d*k+p*K+m*pe,s[13]=f*A+d*H+p*X+m*ve,s[2]=x*w+E*N+v*O+_*te,s[6]=x*P+E*F+v*W+_*re,s[10]=x*y+E*k+v*K+_*pe,s[14]=x*A+E*H+v*X+_*ve,s[3]=D*w+C*N+b*O+T*te,s[7]=D*P+C*F+b*W+T*re,s[11]=D*y+C*k+b*K+T*pe,s[15]=D*A+C*H+b*X+T*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],u=e[9],c=e[13],f=e[2],d=e[6],p=e[10],m=e[14],x=e[3],E=e[7],v=e[11],_=e[15],D=u*m-c*p,C=o*m-c*d,b=o*p-u*d,T=a*m-c*f,w=a*p-u*f,P=a*d-o*f;return t*(E*D-v*C+_*b)-n*(x*D-v*T+_*w)+r*(x*C-E*T+_*P)-s*(x*b-E*w+v*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],u=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(s*f-o*u)+r*(s*c-a*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],u=e[6],c=e[7],f=e[8],d=e[9],p=e[10],m=e[11],x=e[12],E=e[13],v=e[14],_=e[15],D=t*o-n*a,C=t*u-r*a,b=t*c-s*a,T=n*u-r*o,w=n*c-s*o,P=r*c-s*u,y=f*E-d*x,A=f*v-p*x,N=f*_-m*x,F=d*v-p*E,k=d*_-m*E,H=p*_-m*v,O=D*H-C*k+b*F+T*N-w*A+P*y;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/O;return e[0]=(o*H-u*k+c*F)*W,e[1]=(r*k-n*H-s*F)*W,e[2]=(E*P-v*w+_*T)*W,e[3]=(p*w-d*P-m*T)*W,e[4]=(u*N-a*H-c*A)*W,e[5]=(t*H-r*N+s*A)*W,e[6]=(v*b-x*P-_*C)*W,e[7]=(f*P-p*b+m*C)*W,e[8]=(a*k-o*N+c*y)*W,e[9]=(n*N-t*k-s*y)*W,e[10]=(x*w-E*b+_*D)*W,e[11]=(d*b-f*w-m*D)*W,e[12]=(o*A-a*F-u*y)*W,e[13]=(t*F-n*A+r*y)*W,e[14]=(E*C-x*T-v*D)*W,e[15]=(f*T-d*C+p*D)*W,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,u=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-r*u,c*u+r*o,0,c*o+r*u,f*o+n,f*u-r*a,0,c*u-r*o,f*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,u=t._w,c=s+s,f=a+a,d=o+o,p=s*c,m=s*f,x=s*d,E=a*f,v=a*d,_=o*d,D=u*c,C=u*f,b=u*d,T=n.x,w=n.y,P=n.z;return r[0]=(1-(E+_))*T,r[1]=(m+b)*T,r[2]=(x-C)*T,r[3]=0,r[4]=(m-b)*w,r[5]=(1-(p+_))*w,r[6]=(v+D)*w,r[7]=0,r[8]=(x+C)*P,r[9]=(v-D)*P,r[10]=(1-(p+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=_r.set(r[0],r[1],r[2]).length();const o=_r.set(r[4],r[5],r[6]).length(),u=_r.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Wn.copy(this);const c=1/a,f=1/o,d=1/u;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),n.x=a,n.y=o,n.z=u,this}makePerspective(e,t,n,r,s,a,o=ai,u=!1){const c=this.elements,f=2*s/(t-e),d=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let x,E;if(u)x=s/(a-s),E=a*s/(a-s);else if(o===ai)x=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===is)x=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ai,u=!1){const c=this.elements,f=2/(t-e),d=2/(n-r),p=-(t+e)/(t-e),m=-(n+r)/(n-r);let x,E;if(u)x=1/(a-s),E=a/(a-s);else if(o===ai)x=-2/(a-s),E=-(a+s)/(a-s);else if(o===is)x=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ha.prototype.isMatrix4=!0;let ut=Ha;const _r=new Z,Wn=new ut,ip=new Z(0,0,0),rp=new Z(1,1,1),Fi=new Z,qs=new Z,xn=new Z,Su=new ut,bu=new An;class bi{constructor(e=0,t=0,n=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],u=r[1],c=r[5],f=r[9],d=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bu.setFromEuler(this),this.setFromQuaternion(bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sp=0;const Tu=new Z,vr=new An,Ei=new ut,$s=new Z,as=new Z,ap=new Z,op=new An,wu=new Z(1,0,0),Au=new Z(0,1,0),Ru=new Z(0,0,1),Cu={type:"added"},lp={type:"removed"},xr={type:"childadded",child:null},al={type:"childremoved",child:null};class Vt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new Z,t=new bi,n=new An,r=new Z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new ft}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$s.copy(e):$s.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(as,$s,this.up):Ei.lookAt($s,as,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(Ei),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cu),xr.child=e,this.dispatchEvent(xr),xr.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cu),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let c=0,f=u.length;c<f;c++){const d=u[c];s(e.shapes,d)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,c=this.material.length;u<c;u++)o.push(s(e.materials,this.material[u]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];r.animations.push(s(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),p=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const u=[];for(const c in o){const f=o[c];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vt.DEFAULT_UP=new Z(0,1,0),Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xn extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cp={type:"move"};class ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,n),_=this._getHandJoint(c,E);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=f.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return o!==null&&(o.visible=r!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function ll(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=el(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ll(a,s,e+1/3),this.g=ll(a,s,e),this.b=ll(a,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return xt.workingToColorSpace(ln.copy(this),e),Math.round(_t(ln.r*255,0,255))*65536+Math.round(_t(ln.g*255,0,255))*256+Math.round(_t(ln.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(ln.copy(this),t);const n=ln.r,r=ln.g,s=ln.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let u,c;const f=(o+a)/2;if(o===a)u=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case n:u=(r-s)/d+(r<s?6:0);break;case r:u=(s-n)/d+2;break;case s:u=(n-r)/d+4;break}u/=6}return e.h=u,e.s=c,e.l=f,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Xt){xt.workingToColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,r=ln.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Ys);const n=ss(Oi.h,Ys.h,t),r=ss(Oi.s,Ys.s,t),s=ss(Oi.l,Ys.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Je;Je.NAMES=Pu;class up extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qn=new Z,Ti=new Z,cl=new Z,wi=new Z,yr=new Z,Mr=new Z,Lu=new Z,ul=new Z,hl=new Z,fl=new Z,dl=new Ot,pl=new Ot,ml=new Ot;class Rn{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qn.subVectors(r,t),Ti.subVectors(n,t),cl.subVectors(e,t);const a=qn.dot(qn),o=qn.dot(Ti),u=qn.dot(cl),c=Ti.dot(Ti),f=Ti.dot(cl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,m=(c*u-o*f)*p,x=(a*f-o*u)*p;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,r,s,a,o,u){return this.getBarycoord(e,t,n,r,wi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,wi.x),u.addScaledVector(a,wi.y),u.addScaledVector(o,wi.z),u)}static getInterpolatedAttribute(e,t,n,r,s,a){return dl.setScalar(0),pl.setScalar(0),ml.setScalar(0),dl.fromBufferAttribute(e,t),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(dl,s.x),a.addScaledVector(pl,s.y),a.addScaledVector(ml,s.z),a}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),Ti.subVectors(e,t),qn.cross(Ti).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),qn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;yr.subVectors(r,n),Mr.subVectors(s,n),ul.subVectors(e,n);const u=yr.dot(ul),c=Mr.dot(ul);if(u<=0&&c<=0)return t.copy(n);hl.subVectors(e,r);const f=yr.dot(hl),d=Mr.dot(hl);if(f>=0&&d<=f)return t.copy(r);const p=u*d-f*c;if(p<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(yr,a);fl.subVectors(e,s);const m=yr.dot(fl),x=Mr.dot(fl);if(x>=0&&m<=x)return t.copy(s);const E=m*c-u*x;if(E<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Mr,o);const v=f*x-m*d;if(v<=0&&d-f>=0&&m-x>=0)return Lu.subVectors(s,r),o=(d-f)/(d-f+(m-x)),t.copy(r).addScaledVector(Lu,o);const _=1/(v+E+p);return a=E*_,o=p*_,t.copy(n).addScaledVector(yr,a).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $n{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),js.subVectors(this.max,os),Sr.subVectors(e.a,os),br.subVectors(e.b,os),Er.subVectors(e.c,os),Bi.subVectors(br,Sr),ki.subVectors(Er,br),Ji.subVectors(Sr,Er);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-Ji.z,Ji.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,Ji.z,0,-Ji.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-Ji.y,Ji.x,0];return!gl(t,Sr,br,Er,js)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,Sr,br,Er,js))?!1:(Zs.crossVectors(Bi,ki),t=[Zs.x,Zs.y,Zs.z],gl(t,Sr,br,Er,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Yn=new Z,Ks=new $n,Sr=new Z,br=new Z,Er=new Z,Bi=new Z,ki=new Z,Ji=new Z,os=new Z,js=new Z,Zs=new Z,Qi=new Z;function gl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Qi.fromArray(i,s);const o=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),u=e.dot(Qi),c=t.dot(Qi),f=n.dot(Qi);if(Math.max(-Math.max(u,c,f),Math.min(u,c,f))>o)return!1}return!0}const jt=new Z,Js=new nt;let hp=0;class At extends Ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fu,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class fp extends At{constructor(e,t,n){super(new Int8Array(e),t,n)}}class dp extends At{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class pp extends At{constructor(e,t,n){super(new Int16Array(e),t,n)}}class _l extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mp extends At{constructor(e,t,n){super(new Int32Array(e),t,n)}}class vl extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}const gp=new $n,ls=new Z,xl=new Z;class oi{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ls,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(xl)),this.expandByPoint(ls.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _p=0;const Cn=new ut,yl=new Vt,Tr=new Z,yn=new $n,cs=new $n,tn=new Z;class Lt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?vl:_l)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ft().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(yn.min,cs.min),yn.expandByPoint(tn),tn.addVectors(yn.max,cs.max),yn.expandByPoint(tn)):(yn.expandByPoint(cs.min),yn.expandByPoint(cs.max))}yn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(tn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],u=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)tn.fromBufferAttribute(o,c),u&&(Tr.fromBufferAttribute(e,c),tn.add(Tr)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new At(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],u=[];for(let y=0;y<n.count;y++)o[y]=new Z,u[y]=new Z;const c=new Z,f=new Z,d=new Z,p=new nt,m=new nt,x=new nt,E=new Z,v=new Z;function _(y,A,N){c.fromBufferAttribute(n,y),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,N),p.fromBufferAttribute(s,y),m.fromBufferAttribute(s,A),x.fromBufferAttribute(s,N),f.sub(c),d.sub(c),m.sub(p),x.sub(p);const F=1/(m.x*x.y-x.x*m.y);isFinite(F)&&(E.copy(f).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(F),v.copy(d).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(F),o[y].add(E),o[A].add(E),o[N].add(E),u[y].add(v),u[A].add(v),u[N].add(v))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let y=0,A=D.length;y<A;++y){const N=D[y],F=N.start,k=N.count;for(let H=F,O=F+k;H<O;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const C=new Z,b=new Z,T=new Z,w=new Z;function P(y){T.fromBufferAttribute(r,y),w.copy(T);const A=o[y];C.copy(A),C.sub(T.multiplyScalar(T.dot(A))).normalize(),b.crossVectors(w,A);const F=b.dot(u[y])<0?-1:1;a.setXYZW(y,C.x,C.y,C.z,F)}for(let y=0,A=D.length;y<A;++y){const N=D[y],F=N.start,k=N.count;for(let H=F,O=F+k;H<O;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,u=new Z,c=new Z,f=new Z,d=new Z;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),E=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,v),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),c.fromBufferAttribute(n,v),o.add(f),u.add(f),c.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),n.setXYZ(p+0,f.x,f.y,f.z),n.setXYZ(p+1,f.x,f.y,f.z),n.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,u){const c=o.array,f=o.itemSize,d=o.normalized,p=new c.constructor(u.length*f);let m=0,x=0;for(let E=0,v=u.length;E<v;E++){o.isInterleavedBufferAttribute?m=u[E]*o.data.stride+o.offset:m=u[E]*f;for(let _=0;_<f;_++)p[x++]=c[m++]}return new At(p,f,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,r=this.attributes;for(const o in r){const u=r[o],c=e(u,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const u=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const p=c[f],m=e(p,n);u.push(m)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],f=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[u]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let p=0,m=d.length;p<m;p++)f.push(d[p].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fu,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const un=new Z;class Ml{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Xs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ml(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sl=new Z,xp=new Z,yp=new ft;class Ri{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Sl.subVectors(n,t).cross(xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Sl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yp.getNormalMatrix(e),r=this.coplanarPoint(Sl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Mp=0;class Mn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=jr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const u=s[o];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ri().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new Z,bl=new Z,Qs=new Z,ea=new Z;class us{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){bl.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),ea.copy(this.origin).sub(bl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=ea.dot(this.direction),u=-ea.dot(Qs),c=ea.lengthSq(),f=Math.abs(1-a*a);let d,p,m,x;if(f>0)if(d=a*u-o,p=a*o-u,x=s*f,d>=0)if(p>=-x)if(p<=x){const E=1/f;d*=E,p*=E,m=d*(d+a*p+2*o)+p*(a*d+p+2*u)+c}else p=s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*u)+c;else p=-s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*u)+c;else p<=-x?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-u),s),m=-d*d+p*(p+2*u)+c):p<=x?(d=0,p=Math.min(Math.max(-s,-u),s),m=p*(p+2*u)+c):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-u),s),m=-d*d+p*(p+2*u)+c);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(bl).addScaledVector(Qs,p),m}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),r=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,u=n+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,u;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),f>=0?(s=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,u=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,u=(e.min.z-p.z)*d),n>u||o>r)||((o>n||n!==n)&&(n=o),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,u=o.x,c=o.y,f=o.z,d=e.x-a.x,p=e.y-a.y,m=e.z-a.z,x=t.x-a.x,E=t.y-a.y,v=t.z-a.z,_=n.x-a.x,D=n.y-a.y,C=n.z-a.z,b=Math.abs(u),T=Math.abs(c),w=Math.abs(f);let P,y,A,N,F,k,H,O,W,K,X,te;if(b>=T&&b>=w?(A=u,k=d,W=x,te=_,u>=0?(P=c,y=f,N=p,F=m,H=E,O=v,K=D,X=C):(P=f,y=c,N=m,F=p,H=v,O=E,K=C,X=D)):T>=w?(A=c,k=p,W=E,te=D,c>=0?(P=f,y=u,N=m,F=d,H=v,O=x,K=C,X=_):(P=u,y=f,N=d,F=m,H=x,O=v,K=_,X=C)):(A=f,k=m,W=v,te=C,f>=0?(P=u,y=c,N=d,F=p,H=x,O=E,K=_,X=D):(P=c,y=u,N=p,F=d,H=E,O=x,K=D,X=_)),A===0)return null;const re=P/A,pe=y/A,ve=1/A,Oe=N-re*k,Ae=F-pe*k,pt=H-re*W,Ye=O-pe*W,ot=K-re*te,he=X-pe*te,z=ot*Ye-he*pt,G=Oe*he-Ae*ot,ae=pt*Ae-Ye*Oe;if(r){if(z<0||G<0||ae<0)return null}else if((z<0||G<0||ae<0)&&(z>0||G>0||ae>0))return null;const Q=z+G+ae;if(Q===0)return null;const se=ve*(z*k+G*W+ae*te);return(Q>0?se<0:se>0)?null:this.at(se/Q,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class er extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Iu=new ut,tr=new us,ta=new oi,Du=new Z,na=new Z,ia=new Z,ra=new Z,El=new Z,sa=new Z,Nu=new Z,aa=new Z;class $t extends Vt{constructor(e=new Lt,t=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){sa.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const f=o[u],d=s[u];f!==0&&(El.fromBufferAttribute(d,e),a?sa.addScaledVector(El,f):sa.addScaledVector(El.sub(t),f))}t.add(sa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(ta.containsPoint(tr.origin)===!1&&(tr.intersectSphere(ta,Du)===null||tr.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Iu.copy(s).invert(),tr.copy(e.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,u=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=p.length;x<E;x++){const v=p[x],_=a[v.materialIndex],D=Math.max(v.start,m.start),C=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let b=D,T=C;b<T;b+=3){const w=o.getX(b),P=o.getX(b+1),y=o.getX(b+2);r=oa(this,_,e,n,c,f,d,w,P,y),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let v=x,_=E;v<_;v+=3){const D=o.getX(v),C=o.getX(v+1),b=o.getX(v+2);r=oa(this,a,e,n,c,f,d,D,C,b),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let x=0,E=p.length;x<E;x++){const v=p[x],_=a[v.materialIndex],D=Math.max(v.start,m.start),C=Math.min(u.count,Math.min(v.start+v.count,m.start+m.count));for(let b=D,T=C;b<T;b+=3){const w=b,P=b+1,y=b+2;r=oa(this,_,e,n,c,f,d,w,P,y),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(u.count,m.start+m.count);for(let v=x,_=E;v<_;v+=3){const D=v,C=v+1,b=v+2;r=oa(this,a,e,n,c,f,d,D,C,b),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function Sp(i,e,t,n,r,s,a,o){let u;if(e.side===dn?u=n.intersectTriangle(a,s,r,!0,o):u=n.intersectTriangle(r,s,a,e.side===Di,o),u===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:i}}function oa(i,e,t,n,r,s,a,o,u,c){i.getVertexPosition(o,na),i.getVertexPosition(u,ia),i.getVertexPosition(c,ra);const f=Sp(i,e,t,n,na,ia,ra,Nu);if(f){const d=new Z;Rn.getBarycoord(Nu,na,ia,ra,d),r&&(f.uv=Rn.getInterpolatedAttribute(r,o,u,c,d,new nt)),s&&(f.uv1=Rn.getInterpolatedAttribute(s,o,u,c,d,new nt)),a&&(f.normal=Rn.getInterpolatedAttribute(a,o,u,c,d,new Z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:u,c,normal:new Z,materialIndex:0};Rn.getNormal(na,ia,ra,p.normal),f.face=p,f.barycoord=d}return f}const hs=new Ot,Uu=new Ot,Fu=new Ot,bp=new Ot,Ou=new ut,la=new Z,Tl=new oi,Bu=new ut,wl=new us;class Ep extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jc,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,la),this.boundingBox.expandByPoint(la)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,la),this.boundingSphere.expandByPoint(la)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(r),e.ray.intersectsSphere(Tl)!==!1&&(Bu.copy(r).invert(),wl.copy(e.ray).applyMatrix4(Bu),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Uu.fromBufferAttribute(r.attributes.skinIndex,e),Fu.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(hs.copy(t),t.set(0,0,0,0)):(hs.set(...t,1),t.set(0,0,0)),hs.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Fu.getComponent(s);if(a!==0){const o=Uu.getComponent(s);Ou.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(bp.copy(hs).applyMatrix4(Ou),a)}}return t.isVector4&&(t.w=hs.w),t.applyMatrix4(this.bindMatrixInverse)}}class ku extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Al extends en{constructor(e=null,t=1,n=1,r,s,a,o,u,c=Yt,f=Yt,d,p){super(null,a,o,u,c,f,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zu=new ut,Tp=new ut;class Rl{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ut;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Tp;zu.multiplyMatrices(o,t[s]),zu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Rl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Al(t,e,e,wn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Qe("Skeleton: No bone found with UUID:",s),a=new ku),this.bones.push(a),this.boneInverses.push(new ut().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class ca extends At{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wr=new ut,Vu=new ut,ua=[],Hu=new $n,wp=new ut,fs=new $t,ds=new oi;class Ap extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ca(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,wp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Hu.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(Hu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),ds.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),e.ray.intersectsSphere(ds)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wr),Vu.multiplyMatrices(n,wr),fs.matrixWorld=Vu,fs.raycast(e,ua);for(let a=0,o=ua.length;a<o;a++){const u=ua[a];u.instanceId=s,u.object=this,t.push(u)}ua.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Al(new Float32Array(r*this.count),r,this.count,mo,Tn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,u=r*e;return s[u]=o,s.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nr=new oi,Rp=new nt(.5,.5),ha=new Z;class Cl{constructor(e=new Ri,t=new Ri,n=new Ri,r=new Ri,s=new Ri,a=new Ri){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],u=s[2],c=s[3],f=s[4],d=s[5],p=s[6],m=s[7],x=s[8],E=s[9],v=s[10],_=s[11],D=s[12],C=s[13],b=s[14],T=s[15];if(r[0].setComponents(c-a,m-f,_-x,T-D).normalize(),r[1].setComponents(c+a,m+f,_+x,T+D).normalize(),r[2].setComponents(c+o,m+d,_+E,T+C).normalize(),r[3].setComponents(c-o,m-d,_-E,T-C).normalize(),n)r[4].setComponents(u,p,v,b).normalize(),r[5].setComponents(c-u,m-p,_-v,T-b).normalize();else if(r[4].setComponents(c-u,m-p,_-v,T-b).normalize(),t===ai)r[5].setComponents(c+u,m+p,_+v,T+b).normalize();else if(t===is)r[5].setComponents(u,p,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);const t=Rp.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ha.x=r.normal.x>0?e.max.x:e.min.x,ha.y=r.normal.y>0?e.max.y:e.min.y,ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zi extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fa=new Z,da=new Z,Gu=new ut,ps=new us,pa=new oi,Pl=new Z,Wu=new Z;class Ll extends Vt{constructor(e=new Lt,t=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)fa.fromBufferAttribute(t,r-1),da.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=fa.distanceTo(da);e.setAttribute("lineDistance",new Mt(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),pa.radius+=s,e.ray.intersectsSphere(pa)===!1)return;Gu.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Gu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,c=this.isLineSegments?2:1,f=n.index,p=n.attributes.position;if(f!==null){const m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let E=m,v=x-1;E<v;E+=c){const _=f.getX(E),D=f.getX(E+1),C=ma(this,e,ps,u,_,D,E);C&&t.push(C)}if(this.isLineLoop){const E=f.getX(x-1),v=f.getX(m),_=ma(this,e,ps,u,E,v,x-1);_&&t.push(_)}}else{const m=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let E=m,v=x-1;E<v;E+=c){const _=ma(this,e,ps,u,E,E+1,E);_&&t.push(_)}if(this.isLineLoop){const E=ma(this,e,ps,u,x-1,m,x-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ma(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(fa.fromBufferAttribute(o,r),da.fromBufferAttribute(o,s),t.distanceSqToSegment(fa,da,Pl,Wu)>n)return;Pl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Pl);if(!(c<e.near||c>e.far))return{distance:c,point:Wu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Xu=new Z,qu=new Z;class ms extends Ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Xu.fromBufferAttribute(t,r),qu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Xu.distanceTo(qu);e.setAttribute("lineDistance",new Mt(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cp extends Ll{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ar extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $u=new ut,Il=new us,ga=new oi,_a=new Z;class va extends Vt{constructor(e=new Lt,t=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),ga.radius+=s,e.ray.intersectsSphere(ga)===!1)return;$u.copy(r).invert(),Il.copy(e.ray).applyMatrix4($u);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=p,E=m;x<E;x++){const v=c.getX(x);_a.fromBufferAttribute(d,v),Yu(_a,v,u,r,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=p,E=m;x<E;x++)_a.fromBufferAttribute(d,x),Yu(_a,x,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Yu(i,e,t,n,r,s,a){const o=Il.distanceSqToPoint(i);if(o<t){const u=new Z;Il.closestPointToPoint(i,u),u.applyMatrix4(n);const c=r.ray.origin.distanceTo(u);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ku extends en{constructor(e=[],t=Ki,n,r,s,a,o,u,c,f){super(e,t,n,r,s,a,o,u,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gs extends en{constructor(e,t,n=ri,r,s,a,o=Yt,u=Yt,c,f=Mi,d=1){if(f!==Mi&&f!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,a,o,u,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Pp extends gs{constructor(e,t=ri,n=Ki,r,s,a=Yt,o=Yt,u,c=Mi){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,o,u,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ju extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _s extends Lt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],c=[],f=[],d=[];let p=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(d,2));function x(E,v,_,D,C,b,T,w,P,y,A){const N=b/P,F=T/y,k=b/2,H=T/2,O=w/2,W=P+1,K=y+1;let X=0,te=0;const re=new Z;for(let pe=0;pe<K;pe++){const ve=pe*F-H;for(let Oe=0;Oe<W;Oe++){const Ae=Oe*N-k;re[E]=Ae*D,re[v]=ve*C,re[_]=O,c.push(re.x,re.y,re.z),re[E]=0,re[v]=0,re[_]=w>0?1:-1,f.push(re.x,re.y,re.z),d.push(Oe/P),d.push(1-pe/y),X+=1}}for(let pe=0;pe<y;pe++)for(let ve=0;ve<P;ve++){const Oe=p+ve+W*pe,Ae=p+ve+W*(pe+1),pt=p+(ve+1)+W*(pe+1),Ye=p+(ve+1)+W*pe;u.push(Oe,Ae,Ye),u.push(Ae,pt,Ye),te+=6}o.addGroup(m,te,A),m+=te,p+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Dl extends Lt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:u};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],p=[],m=[];let x=0;const E=[],v=n/2;let _=0;D(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(f),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(p,3)),this.setAttribute("uv",new Mt(m,2));function D(){const b=new Z,T=new Z;let w=0;const P=(t-e)/n;for(let y=0;y<=s;y++){const A=[],N=y/s,F=N*(t-e)+e;for(let k=0;k<=r;k++){const H=k/r,O=H*u+o,W=Math.sin(O),K=Math.cos(O);T.x=F*W,T.y=-N*n+v,T.z=F*K,d.push(T.x,T.y,T.z),b.set(W,P,K).normalize(),p.push(b.x,b.y,b.z),m.push(H,1-N),A.push(x++)}E.push(A)}for(let y=0;y<r;y++)for(let A=0;A<s;A++){const N=E[A][y],F=E[A+1][y],k=E[A+1][y+1],H=E[A][y+1];(e>0||A!==0)&&(f.push(N,F,H),w+=3),(t>0||A!==s-1)&&(f.push(F,k,H),w+=3)}c.addGroup(_,w,0),_+=w}function C(b){const T=x,w=new nt,P=new Z;let y=0;const A=b===!0?e:t,N=b===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,v*N,0),p.push(0,N,0),m.push(.5,.5),x++;const F=x;for(let k=0;k<=r;k++){const O=k/r*u+o,W=Math.cos(O),K=Math.sin(O);P.x=A*K,P.y=v*N,P.z=A*W,d.push(P.x,P.y,P.z),p.push(0,N,0),w.x=W*.5+.5,w.y=K*.5*N+.5,m.push(w.x,w.y),x++}for(let k=0;k<r;k++){const H=T+k,O=F+k;b===!0?f.push(O,O+1,H):f.push(O+1,O,H),y+=3}c.addGroup(_,y,b===!0?1:2),_+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const xa=new Z,ya=new Z,Nl=new Z,Ma=new Rn;class Sa extends Lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(dr*t),a=e.getIndex(),o=e.getAttribute("position"),u=a?a.count:o.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),p={},m=[];for(let x=0;x<u;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:E,b:v,c:_}=Ma;if(E.fromBufferAttribute(o,c[0]),v.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),Ma.getNormal(Nl),d[0]=`${Math.round(E.x*r)},${Math.round(E.y*r)},${Math.round(E.z*r)}`,d[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let D=0;D<3;D++){const C=(D+1)%3,b=d[D],T=d[C],w=Ma[f[D]],P=Ma[f[C]],y=`${b}_${T}`,A=`${T}_${b}`;A in p&&p[A]?(Nl.dot(p[A].normal)<=s&&(m.push(w.x,w.y,w.z),m.push(P.x,P.y,P.z)),p[A]=null):y in p||(p[y]={index0:c[D],index1:c[C],normal:Nl.clone()})}}for(const x in p)if(p[x]){const{index0:E,index1:v}=p[x];xa.fromBufferAttribute(o,E),ya.fromBufferAttribute(o,v),m.push(xa.x,xa.y,xa.z),m.push(ya.x,ya.y,ya.z)}this.setAttribute("position",new Mt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ba extends Lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),u=Math.floor(r),c=o+1,f=u+1,d=e/o,p=t/u,m=[],x=[],E=[],v=[];for(let _=0;_<f;_++){const D=_*p-a;for(let C=0;C<c;C++){const b=C*d-s;x.push(b,-D,0),E.push(0,0,1),v.push(C/o),v.push(1-_/u)}}for(let _=0;_<u;_++)for(let D=0;D<o;D++){const C=D+c*_,b=D+c*(_+1),T=D+1+c*(_+1),w=D+1+c*_;m.push(C,b,w),m.push(b,T,w)}this.setIndex(m),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(E,3)),this.setAttribute("uv",new Mt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ul extends Lt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+o,Math.PI);let c=0;const f=[],d=new Z,p=new Z,m=[],x=[],E=[],v=[];for(let _=0;_<=n;_++){const D=[],C=_/n,b=a+C*o,T=e*Math.cos(b),w=Math.sqrt(e*e-T*T);let P=0;_===0&&a===0?P=.5/t:_===n&&u===Math.PI&&(P=-.5/t);for(let y=0;y<=t;y++){const A=y/t,N=r+A*s;d.x=-w*Math.cos(N),d.y=T,d.z=w*Math.sin(N),x.push(d.x,d.y,d.z),p.copy(d).normalize(),E.push(p.x,p.y,p.z),v.push(A+P,1-C),D.push(c++)}f.push(D)}for(let _=0;_<n;_++)for(let D=0;D<t;D++){const C=f[_][D+1],b=f[_][D],T=f[_+1][D],w=f[_+1][D+1];(_!==0||a>0)&&m.push(C,b,w),(_!==n-1||u<Math.PI)&&m.push(b,T,w)}this.setIndex(m),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(E,3)),this.setAttribute("uv",new Mt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Rr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Zu(r))r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Zu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=Rr(i[t]);for(const r in n)e[r]=n[r]}return e}function Zu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Ip={clone:Rr,merge:hn};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=Lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(r.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ot().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Up extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vs extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends vs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cr extends Mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fp extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Op extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Vi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ea(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Bp(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Qu(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let u=0;u!==e;++u)r[a++]=i[o+u]}return r}function kp(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Pr{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class zp extends Pr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],u=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case cu:s=e,o=2*t-n;break;case uu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(u===void 0)switch(this.getSettings_().endingEnd){case cu:a=e,u=2*n-t;break;case uu:a=1,u=n+r[1]-r[0];break;default:a=e-1,u=t}const c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(u-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,u=e*o,c=u-o,f=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(n-t)/(r-t),E=x*x,v=E*x,_=-p*v+2*p*E-p*x,D=(1+p)*v+(-1.5-2*p)*E+(-.5+p)*x+1,C=(-1-m)*v+(1.5+m)*E+.5*x,b=m*v-m*E;for(let T=0;T!==o;++T)s[T]=_*a[f+T]+D*a[c+T]+C*a[u+T]+b*a[d+T];return s}}class Vp extends Pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,u=e*o,c=u-o,f=(n-t)/(r-t),d=1-f;for(let p=0;p!==o;++p)s[p]=a[c+p]*d+a[u+p]*f;return s}}class Hp extends Pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gp extends Pr{interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,u=e*o,c=u-o,f=this.inTangents,d=this.outTangents;if(!f||!d){const x=(n-t)/(r-t),E=1-x;for(let v=0;v!==o;++v)s[v]=a[c+v]*E+a[u+v]*x;return s}const p=o*2,m=e-1;for(let x=0;x!==o;++x){const E=a[c+x],v=a[u+x],_=m*p+x*2,D=d[_],C=d[_+1],b=e*p+x*2,T=f[b],w=f[b+1],P=Xp(n,t,D,T,r);s[x]=eh(P,E,C,w,v)}return s}}function eh(i,e,t,n,r){const s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Wp(i,e,t,n,r){const s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function Xp(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){const o=eh(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;const u=Wp(s,e,t,n,r);if(Math.abs(u)<1e-10)break;s=Math.max(0,Math.min(1,s-o/u))}return s}class Kn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vi(t,this.TimeBufferType),this.values=Vi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vi(e.times,Array),values:Vi(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Ea(e.settings)&&(n.settings={inTangents:Vi(e.settings.inTangents,Array),outTangents:Vi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Gp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ts:t=this.InterpolantFactoryMethodDiscrete;break;case ns:t=this.InterpolantFactoryMethodLinear;break;case Ko:t=this.InterpolantFactoryMethodSmooth;break;case ou:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return ns;case this.InterpolantFactoryMethodSmooth:return Ko;case this.InterpolantFactoryMethodBezier:return ou}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ea(this.settings)&&(th(this.settings.inTangents,e),th(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const u=n[o];if(typeof u=="number"&&isNaN(u)){rt("KeyframeTrack: Time is not a valid number.",this,o,u),e=!1;break}if(a!==null&&a>u){rt("KeyframeTrack: Out of order keys.",this,o,u,a),e=!1;break}a=u}if(r!==void 0&&Ld(r))for(let o=0,u=r.length;o!==u;++o){const c=r[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ko,s=e.length-1;let a=1;for(let o=1;o<s;++o){let u=!1;const c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(r)u=!0;else{const d=o*n,p=d-n,m=d+n;for(let x=0;x!==n;++x){const E=t[d+x];if(E!==t[p+x]||E!==t[m+x]){u=!0;break}}}if(u){if(o!==a){e[a]=e[o];const d=o*n,p=a*n;for(let m=0;m!==n;++m)t[p+m]=t[d+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,u=a*n,c=0;c!==n;++c)t[u+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ea(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}}function th(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Kn.prototype.ValueTypeName="",Kn.prototype.TimeBufferType=Float32Array,Kn.prototype.ValueBufferType=Float32Array,Kn.prototype.DefaultInterpolation=ns;class Lr extends Kn{constructor(e,t,n){super(e,t,n)}}Lr.prototype.ValueTypeName="bool",Lr.prototype.ValueBufferType=Array,Lr.prototype.DefaultInterpolation=ts,Lr.prototype.InterpolantFactoryMethodLinear=void 0,Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class nh extends Kn{constructor(e,t,n,r){super(e,t,n,r)}}nh.prototype.ValueTypeName="color";class xs extends Kn{constructor(e,t,n,r){super(e,t,n,r)}}xs.prototype.ValueTypeName="number";class qp extends Pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,u=(n-t)/(r-t);let c=e*o;for(let f=c+o;c!==f;c+=4)An.slerpFlat(s,0,a,c-o,a,c,u);return s}}class ys extends Kn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}}ys.prototype.ValueTypeName="quaternion",ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Ir extends Kn{constructor(e,t,n){super(e,t,n)}}Ir.prototype.ValueTypeName="string",Ir.prototype.ValueBufferType=Array,Ir.prototype.DefaultInterpolation=ts,Ir.prototype.InterpolantFactoryMethodLinear=void 0,Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Ta extends Kn{constructor(e,t,n,r){super(e,t,n,r)}}Ta.prototype.ValueTypeName="vector";class $p{constructor(e="",t=-1,n=[],r=xd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Kp(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Kn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let u=[],c=[];u.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const f=Bp(u);u=Qu(u,1,f),c=Qu(c,1,f),!r&&u[0]===0&&(u.push(s),c.push(c[0])),a.push(new xs(".morphTargetInfluences["+t[o].name+"]",u,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,u=e.length;o<u;o++){const c=e[o],f=c.name.match(s);if(f&&f.length>1){const d=f[1];let p=r[d];p||(r[d]=p=[]),p.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Yp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return Ta;case"color":return nh;case"quaternion":return ys;case"bool":case"boolean":return Lr;case"string":return Ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Kp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yp(i.type);if(i.times===void 0){const n=[],r=[];kp(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ea(i.settings)&&(t.settings={inTangents:Vi(i.settings.inTangents,Float32Array),outTangents:Vi(i.settings.outTangents,Float32Array)}),t}const Pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ih(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ih(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ih(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class jp{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){const d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,p=c.length;d<p;d+=2){const m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zp=new jp;class Pn{constructor(e){this.manager=e!==void 0?e:Zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class Jp extends Error{constructor(e,t){super(e),this.response=t}}class Dr extends Pn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:r});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,u=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=Li[e],d=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=p?parseInt(p):0,x=m!==0;let E=0;const v=new ReadableStream({start(_){D();function D(){d.read().then(({done:C,value:b})=>{if(C)_.close();else{E+=b.byteLength;const T=new ProgressEvent("progress",{lengthComputable:x,loaded:E,total:m});for(let w=0,P=f.length;w<P;w++){const y=f[w];y.onProgress&&y.onProgress(T)}_.enqueue(b),D()}},C=>{_.error(C)})}}});return new Response(v)}else throw new Jp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(u){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{Pi.add(`file:${e}`,c);const f=Li[e];delete Li[e];for(let d=0,p=f.length;d<p;d++){const m=f[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const f=Li[e];if(f===void 0)throw this.manager.itemError(e),c;delete Li[e];for(let d=0,p=f.length;d<p;d++){const m=f[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Nr=new WeakMap;class Qp extends Pn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Pi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Nr.get(a);d===void 0&&(d=[],Nr.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=rs("img");function u(){f(),t&&t(this);const d=Nr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onLoad&&m.onLoad(this)}Nr.delete(this),s.manager.itemEnd(e)}function c(d){f(),r&&r(d),Pi.remove(`image:${e}`);const p=Nr.get(this)||[];for(let m=0;m<p.length;m++){const x=p[m];x.onError&&x.onError(d)}Nr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",u,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",u,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class rh extends Pn{constructor(e){super(e)}load(e,t,n,r){const s=new en,a=new Qp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ms extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class em extends Ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Fl=new ut,sh=new Z,ah=new Z;class Ol{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(sh),ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ah),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fl,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,u=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===is||e.reversedDepth?t.set(.5*a,0,0,.5*a+u,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+u,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wa=new Z,Aa=new An,ui=new Z;class oh extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Aa,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wa,Aa,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new Z,lh=new nt,ch=new nt;class pn extends oh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,lh,ch),t.subVectors(ch,lh)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/c,r*=a.width/u,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tm extends Ol{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=pr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class nm extends Ms{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new tm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class im extends Ol{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}}class rm extends Ms{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new im}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ss extends oh{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,u=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sm extends Ol{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ra extends Ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new sm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class am extends Ms{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Bl=new WeakMap;class om extends Pn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Pi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{Bl.has(a)===!0?(r&&r(Bl.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Bl.set(u,c),Pi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Pi.add(`image-bitmap:${e}`,u),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ur=-90,Fr=1;class lm extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Ur,Fr,e,t);r.layers=this.layers,this.add(r);const s=new pn(Ur,Fr,e,t);s.layers=this.layers,this.add(s);const a=new pn(Ur,Fr,e,t);a.layers=this.layers,this.add(a);const o=new pn(Ur,Fr,e,t);o.layers=this.layers,this.add(o);const u=new pn(Ur,Fr,e,t);u.layers=this.layers,this.add(u);const c=new pn(Ur,Fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,u]=t;for(const c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,u,c,f]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,p,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class cm extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kl="\\[\\]\\.:\\/",um=new RegExp("["+kl+"]","g"),zl="[^"+kl+"]",hm="[^"+kl.replace("\\.","")+"]",fm=/((?:WC+[\/:])*)/.source.replace("WC",zl),dm=/(WCOD+)?/.source.replace("WCOD",hm),pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),gm=new RegExp("^"+fm+dm+pm+mm+"$"),_m=["material","materials","bones","map"];class vm{constructor(e,t,n){const r=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Nt{constructor(e,t,n){this.path=t,this.parsedPath=n||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,n):new Nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(um,"")}static parseTrackName(e){const t=gm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);_m.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const u=n(o.children);if(u)return u}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=vm,Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray],Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class uh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ac=class Ac{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Ac.prototype.isMatrix2=!0;let hh=Ac;class xm extends ms{constructor(e=10,t=10,n=4473924,r=8947848){n=new Je(n),r=new Je(r);const s=t/2,a=e/t,o=e/2,u=[],c=[];for(let p=0,m=0,x=-o;p<=t;p++,x+=a){u.push(-o,0,x,o,0,x),u.push(x,0,-o,x,0,o);const E=p===s?n:r;E.toArray(c,m),m+=3,E.toArray(c,m),m+=3,E.toArray(c,m),m+=3,E.toArray(c,m),m+=3}const f=new Lt;f.setAttribute("position",new Mt(u,3)),f.setAttribute("color",new Mt(c,3));const d=new zi({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class ym extends Ui{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fh(i,e,t,n){const r=Mm(n);switch(t){case su:return i*e;case mo:return i*e/r.components*r.byteLength;case go:return i*e/r.components*r.byteLength;case Zi:return i*e*2/r.components*r.byteLength;case _o:return i*e*2/r.components*r.byteLength;case au:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case vo:return i*e*4/r.components*r.byteLength;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ks:case zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:case So:return Math.max(i,16)*Math.max(e,8)/4;case xo:case Mo:return Math.max(i,8)*Math.max(e,8)/2;case bo:case Eo:case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case Vs:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hs:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mm(i){switch(i){case _n:case tu:return{byteLength:1,components:1};case Qr:case nu:case si:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case ri:case ho:case Tn:return{byteLength:4,components:1};case iu:case ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}})),typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dh(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Sm(i){const e=new WeakMap;function t(o,u){const c=o.array,f=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,u,c){const f=u.array,d=u.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,f);else{d.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<d.length;m++){const x=d[p],E=d[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++p,d[p]=E)}d.length=p+1;for(let m=0,x=d.length;m<x;m++){const E=d[m];i.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(i.deleteBuffer(u.buffer),e.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,u));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,u),c.version=o.version}}return{get:r,remove:s,update:a}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
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
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qm=`#define PI 3.141592653589793
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
} // validated`,$m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ug=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
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
#endif`,Mg=`uniform sampler2D dfgLUT;
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
}`,Sg=`
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dg=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qg=`#ifdef USE_NORMALMAP
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
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u_=`#ifdef USE_SKINNING
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
#endif`,h_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,d_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,__=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gt={alphahash_fragment:bm,alphahash_pars_fragment:Em,alphamap_fragment:Tm,alphamap_pars_fragment:wm,alphatest_fragment:Am,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Lm,batching_vertex:Im,begin_vertex:Dm,beginnormal_vertex:Nm,bsdfs:Um,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Vm,color_fragment:Hm,color_pars_fragment:Gm,color_pars_vertex:Wm,color_vertex:Xm,common:qm,cube_uv_reflection_fragment:$m,defaultnormal_vertex:Ym,displacementmap_pars_vertex:Km,displacementmap_vertex:jm,emissivemap_fragment:Zm,emissivemap_pars_fragment:Jm,colorspace_fragment:Qm,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:rg,envmap_physical_pars_fragment:mg,envmap_vertex:sg,fog_vertex:ag,fog_pars_vertex:og,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:ug,lightmap_pars_fragment:hg,lights_lambert_fragment:fg,lights_lambert_pars_fragment:dg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:_g,lights_phong_fragment:vg,lights_phong_pars_fragment:xg,lights_physical_fragment:yg,lights_physical_pars_fragment:Mg,lights_fragment_begin:Sg,lights_fragment_maps:bg,lights_fragment_end:Eg,lightprobes_pars_fragment:Tg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Cg,map_fragment:Pg,map_pars_fragment:Lg,map_particle_fragment:Ig,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Fg,morphcolor_vertex:Og,morphnormal_vertex:Bg,morphtarget_pars_vertex:kg,morphtarget_vertex:zg,normal_fragment_begin:Vg,normal_fragment_maps:Hg,normal_pars_fragment:Gg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:qg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:jg,opaque_fragment:Zg,packing:Jg,premultiplied_alpha_fragment:Qg,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:r_,shadowmap_pars_fragment:s_,shadowmap_pars_vertex:a_,shadowmap_vertex:o_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:u_,skinning_vertex:h_,skinnormal_vertex:f_,specularmap_fragment:d_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:__,transmission_pars_fragment:v_,uv_pars_fragment:x_,uv_pars_vertex:y_,uv_vertex:M_,worldpos_vertex:S_,background_vert:`varying vec2 vUv;
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
}`},ke={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},hi={basic:{uniforms:hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:hn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:hn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Je(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:hn([ke.points,ke.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:hn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:hn([ke.common,ke.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:hn([ke.sprite,ke.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:hn([ke.common,ke.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:hn([ke.lights,ke.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};hi.physical={uniforms:hn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Ca={r:0,b:0,g:0},b_=new ut,ph=new ft;ph.set(-1,0,0,0,1,0,0,0,1);function E_(i,e,t,n,r,s){const a=new Je(0);let o=r===!0?0:1,u,c,f=null,d=0,p=null;function m(D){let C=D.isScene===!0?D.background:null;if(C&&C.isTexture){const b=D.backgroundBlurriness>0;C=e.get(C,b)}return C}function x(D){let C=!1;const b=m(D);b===null?v(a,o):b&&b.isColor&&(v(b,1),C=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(D,C){const b=m(C);b&&(b.isCubeTexture||b.mapping===Us)?(c===void 0&&(c=new $t(new _s(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Rr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ph),c.material.toneMapped=xt.getTransfer(b.colorSpace)!==It,(f!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new $t(new ba(2,2),new li({name:"BackgroundMaterial",uniforms:Rr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.toneMapped=xt.getTransfer(b.colorSpace)!==It,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,p=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null))}function v(D,C){D.getRGB(Ca,Ju(i)),t.buffers.color.setClear(Ca.r,Ca.g,Ca.b,C,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(D,C=1){a.set(D),o=C,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(D){o=D,v(a,o)},render:x,addToRenderList:E,dispose:_}}function T_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(F,k,H,O,W){let K=!1;const X=d(F,O,H,k);s!==X&&(s=X,c(s.object)),K=m(F,O,H,W),K&&x(F,O,H,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(F,k,H,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function u(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function f(F){return i.deleteVertexArray(F)}function d(F,k,H,O){const W=O.wireframe===!0;let K=n[k.id];K===void 0&&(K={},n[k.id]=K);const X=F.isInstancedMesh===!0?F.id:0;let te=K[X];te===void 0&&(te={},K[X]=te);let re=te[H.id];re===void 0&&(re={},te[H.id]=re);let pe=re[W];return pe===void 0&&(pe=p(u()),re[W]=pe),pe}function p(F){const k=[],H=[],O=[];for(let W=0;W<t;W++)k[W]=0,H[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:O,object:F,attributes:{},index:null}}function m(F,k,H,O){const W=s.attributes,K=k.attributes;let X=0;const te=H.getAttributes();for(const re in te)if(te[re].location>=0){const ve=W[re];let Oe=K[re];if(Oe===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(Oe=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(Oe=F.instanceColor)),ve===void 0||ve.attribute!==Oe||Oe&&ve.data!==Oe.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function x(F,k,H,O){const W={},K=k.attributes;let X=0;const te=H.getAttributes();for(const re in te)if(te[re].location>=0){let ve=K[re];ve===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(ve=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(ve=F.instanceColor));const Oe={};Oe.attribute=ve,ve&&ve.data&&(Oe.data=ve.data),W[re]=Oe,X++}s.attributes=W,s.attributesNum=X,s.index=O}function E(){const F=s.newAttributes;for(let k=0,H=F.length;k<H;k++)F[k]=0}function v(F){_(F,0)}function _(F,k){const H=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;H[F]=1,O[F]===0&&(i.enableVertexAttribArray(F),O[F]=1),W[F]!==k&&(i.vertexAttribDivisor(F,k),W[F]=k)}function D(){const F=s.newAttributes,k=s.enabledAttributes;for(let H=0,O=k.length;H<O;H++)k[H]!==F[H]&&(i.disableVertexAttribArray(H),k[H]=0)}function C(F,k,H,O,W,K,X){X===!0?i.vertexAttribIPointer(F,k,H,W,K):i.vertexAttribPointer(F,k,H,O,W,K)}function b(F,k,H,O){E();const W=O.attributes,K=H.getAttributes(),X=k.defaultAttributeValues;for(const te in K){const re=K[te];if(re.location>=0){let pe=W[te];if(pe===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(pe=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(pe=F.instanceColor)),pe!==void 0){const ve=pe.normalized,Oe=pe.itemSize,Ae=e.get(pe);if(Ae===void 0)continue;const pt=Ae.buffer,Ye=Ae.type,ot=Ae.bytesPerElement,he=Ye===i.INT||Ye===i.UNSIGNED_INT||pe.gpuType===ho;if(pe.isInterleavedBufferAttribute){const z=pe.data,G=z.stride,ae=pe.offset;if(z.isInstancedInterleavedBuffer){for(let Q=0;Q<re.locationSize;Q++)_(re.location+Q,z.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Q=0;Q<re.locationSize;Q++)v(re.location+Q);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Q=0;Q<re.locationSize;Q++)C(re.location+Q,Oe/re.locationSize,Ye,ve,G*ot,(ae+Oe/re.locationSize*Q)*ot,he)}else{if(pe.isInstancedBufferAttribute){for(let z=0;z<re.locationSize;z++)_(re.location+z,pe.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let z=0;z<re.locationSize;z++)v(re.location+z);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let z=0;z<re.locationSize;z++)C(re.location+z,Oe/re.locationSize,Ye,ve,Oe*ot,Oe/re.locationSize*z*ot,he)}}else if(X!==void 0){const ve=X[te];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(re.location,ve);break;case 3:i.vertexAttrib3fv(re.location,ve);break;case 4:i.vertexAttrib4fv(re.location,ve);break;default:i.vertexAttrib1fv(re.location,ve)}}}}D()}function T(){A();for(const F in n){const k=n[F];for(const H in k){const O=k[H];for(const W in O){const K=O[W];for(const X in K)f(K[X].object),delete K[X];delete O[W]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;const k=n[F.id];for(const H in k){const O=k[H];for(const W in O){const K=O[W];for(const X in K)f(K[X].object),delete K[X];delete O[W]}}delete n[F.id]}function P(F){for(const k in n){const H=n[k];for(const O in H){const W=H[O];if(W[F.id]===void 0)continue;const K=W[F.id];for(const X in K)f(K[X].object),delete K[X];delete W[F.id]}}}function y(F){for(const k in n){const H=n[k],O=F.isInstancedMesh===!0?F.id:0,W=H[O];if(W!==void 0){for(const K in W){const X=W[K];for(const te in X)f(X[te].object),delete X[te];delete W[K]}delete H[O],Object.keys(H).length===0&&delete n[k]}}}function A(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:v,disableUnusedAttributes:D}}function w_(i,e,t){let n;function r(u){n=u}function s(u,c){i.drawArrays(n,u,c),t.update(c,n,1)}function a(u,c,f){f!==0&&(i.drawArraysInstanced(n,u,c,f),t.update(c,n,f))}function o(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,f);let p=0;for(let m=0;m<f;m++)p+=c[m];t.update(p,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function A_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==wn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const y=P===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==_n&&P!==Tn&&!y&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=u(c);f!==c&&(Qe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:D,maxVaryings:C,maxFragmentUniforms:b,maxSamples:T,samples:w}}function R_(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ri,o=new ft,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||r;return r=p,n=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=f(d,p,0)},this.setState=function(d,p,m){const x=d.clippingPlanes,E=d.clipIntersection,v=d.clipShadows,_=i.get(d);if(!r||x===null||x.length===0||s&&!v)s?f(null):c();else{const D=s?0:n,C=D*4;let b=_.clippingState||null;u.value=b,b=f(x,p,C,m);for(let T=0;T!==C;++T)b[T]=t[T];_.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,p,m,x){const E=d!==null?d.length:0;let v=null;if(E!==0){if(v=u.value,x!==!0||v===null){const _=m+E*4,D=p.matrixWorldInverse;o.getNormalMatrix(D),(v===null||v.length<_)&&(v=new Float32Array(_));for(let C=0,b=m;C!==E;++C,b+=4)a.copy(d[C]).applyMatrix4(D,o),a.normal.toArray(v,b),v[b+3]=a.constant}u.value=v,u.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}const Or=4,C_=6,P_=20,L_=256,Es=new Ss,mh=new Je;let Vl=null,Hl=0,Gl=0,Wl=!1;const I_=new Z,ir=new Z;class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=I_}=s;Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,o),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Hl,Gl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:si,format:wn,colorSpace:vn,depthBuffer:!1},r=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=D_(s)),this._blurMaterial=U_(s,e,t),this._ggxMaterial=N_(s,e,t)}return r}_compileMaterial(e){const t=new $t(new Lt,e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,n,r,s){const u=new pn(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(mh),d.toneMapping=ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new _s,new er({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,v=E.material;let _=!1;const D=e.background;D?D.isColor&&(v.color.copy(D),e.background=null,_=!0):(v.color.copy(mh),_=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(u.up.set(0,c[C],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+f[C],s.y,s.z)):b===1?(u.up.set(0,0,c[C]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+f[C],s.z)):(u.up.set(0,c[C],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+f[C]));const T=this._cubeSize;Br(r,b*T,C>2?T:0,T,T),d.setRenderTarget(r),_&&d.render(E,u),d.render(e,u)}d.toneMapping=m,d.autoClear=p,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ki||e.mapping===ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const u=this._cubeSize;Br(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Es)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const u=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),p=c*1.25,m=d*p,{_lodMax:x}=this,E=this._sizeLods[n],v=3*E*(n>x-Or?n-x+Or:0),_=4*(this._cubeSize-E);u.envMap.value=e.texture,u.roughness.value=m,u.mipInt.value=x-t,Br(s,v,_,3*E,2*E),r.setRenderTarget(s),r.render(o,Es),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=x-n,Br(e,v,_,3*E,2*E),r.setRenderTarget(e),r.render(o,Es)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,u=this._lodMeshes[r];u.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const f=this._sizeLods[r],d=3*f*(r>this._lodMax-Or?r-this._lodMax+Or:0),p=4*(this._cubeSize-f);Br(t,d,p,3*f,2*f),a.setRenderTarget(t),a.render(u,Es)}}function D_(i){const e=[],t=[];let n=i;const r=i-Or+1+C_;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),u=-o,c=1+o,f=[u,u,c,u,c,c,u,u,c,c,u,c],d=6,p=6,m=3,x=new Float32Array(m*p*d),E=new Float32Array(m*p*d);for(let _=0;_<d;_++){const D=_%3*2/3-1,C=_>2?0:-1,b=[D,C,0,D+2/3,C,0,D+2/3,C+1,0,D,C,0,D+2/3,C+1,0,D,C+1,0];x.set(b,m*p*_);for(let T=0;T<p;T++){const w=f[T*2]*2-1,P=f[T*2+1]*2-1;_===0?ir.set(1,P,w):_===1?ir.set(-w,1,-P):_===2?ir.set(-w,P,1):_===3?ir.set(-1,P,-w):_===4?ir.set(-w,-1,P):ir.set(w,P,-1),ir.toArray(E,(_*p+T)*m)}}const v=new Lt;v.setAttribute("position",new At(x,m)),v.setAttribute("outputDirection",new At(E,m)),t.push(new $t(v,null)),n>Or&&n--}return{lodMeshes:t,sizeLods:e}}function _h(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function N_(i,e,t){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function U_(i,e,t){return new li({name:"SphericalGaussianBlur",defines:{SAMPLES:P_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function vh(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function xh(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class yh extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ku(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _s(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:yi});s.uniforms.tEquirect.value=t;const a=new $t(r,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Wt),new lm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function F_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(p,m=!1){return p==null?null:m?a(p):s(p)}function s(p){if(p&&p.isTexture){const m=p.mapping;if(m===co||m===uo)if(e.has(p)){const x=e.get(p).texture;return o(x,p.mapping)}else{const x=p.image;if(x&&x.height>0){const E=new yh(x.height);return E.fromEquirectangularTexture(i,p),e.set(p,E),p.addEventListener("dispose",c),o(E.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){const m=p.mapping,x=m===co||m===uo,E=m===Ki||m===ur;if(x||E){let v=t.get(p);const _=v!==void 0?v.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return n===null&&(n=new gh(i)),v=x?n.fromEquirectangular(p,v):n.fromCubemap(p,v),v.texture.pmremVersion=p.pmremVersion,t.set(p,v),v.texture;if(v!==void 0)return v.texture;{const D=p.image;return x&&D&&D.height>0||E&&D&&u(D)?(n===null&&(n=new gh(i)),v=x?n.fromEquirectangular(p):n.fromCubemap(p),v.texture.pmremVersion=p.pmremVersion,t.set(p,v),p.addEventListener("dispose",f),v.texture):null}}}return p}function o(p,m){return m===co?p.mapping=Ki:m===uo&&(p.mapping=ur),p}function u(p){let m=0;const x=6;for(let E=0;E<x;E++)p[E]!==void 0&&m++;return m===x}function c(p){const m=p.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(p){const m=p.target;m.removeEventListener("dispose",f);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function O_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&fr("WebGLRenderer: "+n+" extension not supported."),r}}}function B_(i,e,t,n){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function u(d){const p=d.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function c(d){const p=[],m=d.index,x=d.attributes.position;let E=0;if(x===void 0)return;if(m!==null){const D=m.array;E=m.version;for(let C=0,b=D.length;C<b;C+=3){const T=D[C+0],w=D[C+1],P=D[C+2];p.push(T,w,w,P,P,T)}}else{const D=x.array;E=x.version;for(let C=0,b=D.length/3-1;C<b;C+=3){const T=C+0,w=C+1,P=C+2;p.push(T,w,w,P,P,T)}}const v=new(x.count>=65535?vl:_l)(p,1);v.version=E;const _=s.get(d);_&&e.remove(_),s.set(d,v)}function f(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:u,getWireframeAttribute:f}}function k_(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function u(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,s,d*a,m),t.update(p,n,m))}function f(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,m);let E=0;for(let v=0;v<m;v++)E+=p[v];t.update(E,n,1)}this.setMode=r,this.setIndex=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=f}function z_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function V_(i,e,t){const n=new WeakMap,r=new Ot;function s(a,o,u){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let A=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],D=o.morphAttributes.color||[];let C=0;m===!0&&(C=1),x===!0&&(C=2),E===!0&&(C=3);let b=o.attributes.position.count*C,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*T*4*d),P=new Mu(w,b,T,d);P.type=Tn,P.needsUpdate=!0;const y=C*4;for(let N=0;N<d;N++){const F=v[N],k=_[N],H=D[N],O=b*T*4*N;for(let W=0;W<F.count;W++){const K=W*y;m===!0&&(r.fromBufferAttribute(F,W),w[O+K+0]=r.x,w[O+K+1]=r.y,w[O+K+2]=r.z,w[O+K+3]=0),x===!0&&(r.fromBufferAttribute(k,W),w[O+K+4]=r.x,w[O+K+5]=r.y,w[O+K+6]=r.z,w[O+K+7]=0),E===!0&&(r.fromBufferAttribute(H,W),w[O+K+8]=r.x,w[O+K+9]=r.y,w[O+K+10]=r.z,w[O+K+11]=H.itemSize===4?r.w:1)}}p={count:d,texture:P,size:new nt(b,T)},n.set(o,p),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let E=0;E<c.length;E++)m+=c[E];const x=o.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",c)}u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function H_(i,e,t,n,r){let s=new WeakMap;function a(c){const f=r.render.frame,d=c.geometry,p=e.get(c,d);if(s.get(p)!==f&&(e.update(p),s.set(p,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),s.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return p}function o(){s=new WeakMap}function u(c){const f=c.target;f.removeEventListener("dispose",u),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const G_={[Xc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[$c]:"CINEON_TONE_MAPPING",[Yc]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[Kc]:"CUSTOM_TONE_MAPPING"};function W_(i,e,t,n,r,s){const a=new Gn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,u=null;const c=new Lt;c.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Mt([0,2,0,0,2,0],2));const f=new Up({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new $t(c,f),p=new Ss(-1,1,1,-1,0,1);let m=null,x=null,E=!1,v,_=null,D=[],C=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),u!==null&&u.setSize(b,T);for(let w=0;w<D.length;w++){const P=D[w];P.setSize&&P.setSize(b,T)}},this.setEffects=function(b){D=b,C=D.length>0&&D[0].isRenderPass===!0;const T=a.width,w=a.height;D.length>0&&o===null&&(o=new Gn(T,w,{type:si,depthBuffer:!1,stencilBuffer:!1}),u=new Gn(T,w,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<D.length;P++){const y=D[P];y.setSize&&y.setSize(T,w)}},this.begin=function(b,T){if(E||b.toneMapping===ni&&D.length===0)return!1;if(_=T,T!==null){const w=T.width,P=T.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return C===!1&&b.setRenderTarget(a),v=b.toneMapping,b.toneMapping=ni,!0},this.hasRenderPass=function(){return C},this.end=function(b,T){b.toneMapping=v,E=!0;let w=a,P=o;for(let y=0;y<D.length;y++){const A=D[y];A.enabled!==!1&&(A.render(b,P,w,T),A.needsSwap!==!1&&(w=P,P=P===o?u:o))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,f.defines={},xt.getTransfer(m)===It&&(f.defines.SRGB_TRANSFER="");const y=G_[x];y&&(f.defines[y]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(_),b.render(d,p),_=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),u!==null&&u.dispose(),c.dispose(),f.dispose()}}const Mh=new en,Xl=new gs(1,1),Sh=new Mu,bh=new np,Eh=new Ku,Th=[],wh=[],Ah=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function kr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Th[r];if(s===void 0&&(s=new Float32Array(r),Th[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function La(i,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function X_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function $_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function Y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function K_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Ch.set(n),i.uniformMatrix2fv(this.addr,!1,Ch),Jt(t,n)}}function j_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Rh.set(n),i.uniformMatrix3fv(this.addr,!1,Rh),Jt(t,n)}}function Z_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Ah.set(n),i.uniformMatrix4fv(this.addr,!1,Ah),Jt(t,n)}}function J_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function n0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function a0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=t.isReversedDepthBuffer()?Qo:Jo,s=Xl):s=Mh,t.setTexture2D(e||s,r)}function o0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bh,r)}function l0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Eh,r)}function c0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Sh,r)}function u0(i){switch(i){case 5126:return X_;case 35664:return q_;case 35665:return $_;case 35666:return Y_;case 35674:return K_;case 35675:return j_;case 35676:return Z_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function h0(i,e){i.uniform1fv(this.addr,e)}function f0(i,e){const t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function d0(i,e){const t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function p0(i,e){const t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function m0(i,e){const t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g0(i,e){const t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _0(i,e){const t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function v0(i,e){i.uniform1iv(this.addr,e)}function x0(i,e){i.uniform2iv(this.addr,e)}function y0(i,e){i.uniform3iv(this.addr,e)}function M0(i,e){i.uniform4iv(this.addr,e)}function S0(i,e){i.uniform1uiv(this.addr,e)}function b0(i,e){i.uniform2uiv(this.addr,e)}function E0(i,e){i.uniform3uiv(this.addr,e)}function T0(i,e){i.uniform4uiv(this.addr,e)}function w0(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xl:a=Mh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function A0(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bh,s[a])}function R0(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Eh,s[a])}function C0(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Sh,s[a])}function P0(i){switch(i){case 5126:return h0;case 35664:return f0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}class L0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u0(t.type)}}class I0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}}class D0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function Ph(i,e){i.seq.push(e),i.map[e.id]=e}function N0(i,e,t){const n=i.name,r=n.length;for(ql.lastIndex=0;;){const s=ql.exec(n),a=ql.lastIndex;let o=s[1];const u=s[2]==="]",c=s[3];if(u&&(o=o|0),c===void 0||c==="["&&a+2===r){Ph(t,c===void 0?new L0(o,i,e):new I0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new D0(o),Ph(t,d)),t=d}}}class Ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);N0(o,u,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],u=n[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Lh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const U0=37297;let F0=0;function O0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ih=new ft;function B0(i){xt._getMatrix(Ih,xt.workingColorSpace,i);const e=`mat3( ${Ih.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Ws:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+O0(i.getShaderSource(e),o)}else return s}function k0(i,e){const t=B0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const z0={[Xc]:"Linear",[qc]:"Reinhard",[$c]:"Cineon",[Yc]:"ACESFilmic",[jc]:"AgX",[Zc]:"Neutral",[Kc]:"Custom"};function V0(i,e){const t=z0[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Da=new Z;function H0(){xt.getLuminanceCoefficients(Da);const i=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function W0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ts(i){return i!==""}function Nh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(q0,Y0)}const $0=new Map;function Y0(i,e){let t=gt[e];if(t===void 0){const n=$0.get(e);if(n!==void 0)t=gt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $l(t)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(i){return i.replace(K0,j0)}function j0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Z0={[Ns]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function J0(i){return Z0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q0={[Ki]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE_UV"};function ev(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Q0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const tv={[ur]:"ENVMAP_MODE_REFRACTION"};function nv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iv={[lo]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[_d]:"ENVMAP_BLENDING_ADD"};function rv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iv[i.combine]||"ENVMAP_BLENDING_NONE"}function sv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function av(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=J0(t),c=ev(t),f=nv(t),d=rv(t),p=sv(t),m=G0(t),x=W0(s),E=r.createProgram();let v,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ts).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ts).join(`
`),_.length>0&&(_+=`
`)):(v=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),_=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?gt.tonemapping_pars_fragment:"",t.toneMapping!==ni?V0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),H0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),a=$l(a),a=Nh(a,t),a=Uh(a,t),o=$l(o),o=Nh(o,t),o=Uh(o,t),a=Fh(a),o=Fh(o),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=D+v+a,b=D+_+o,T=Lh(r,r.VERTEX_SHADER,C),w=Lh(r,r.FRAGMENT_SHADER,b);r.attachShader(E,T),r.attachShader(E,w),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(F){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(E)||"",H=r.getShaderInfoLog(T)||"",O=r.getShaderInfoLog(w)||"",W=k.trim(),K=H.trim(),X=O.trim();let te=!0,re=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,T,w);else{const pe=Dh(r,T,"vertex"),ve=Dh(r,w,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+pe+`
`+ve)}else W!==""?Qe("WebGLProgram: Program Info Log:",W):(K===""||X==="")&&(re=!1);re&&(F.diagnostics={runnable:te,programLog:W,vertexShader:{log:K,prefix:v},fragmentShader:{log:X,prefix:_}})}r.deleteShader(T),r.deleteShader(w),y=new Ia(r,E),A=X0(r,E)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(E,U0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=w,this}let ov=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cv(e),t.set(e,n)),n}}class cv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function uv(i){return i===Zi||i===Vs||i===Hs}function hv(i,e,t,n,r,s){const a=new Eu,o=new lv,u=new Set,c=[],f=new Map,d=n.logarithmicDepthBuffer;let p=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return u.add(y),y===0?"uv":`uv${y}`}function E(y,A,N,F,k,H){const O=F.fog,W=k.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,te=e.get(y.envMap||K,X),re=te&&te.mapping===Us?te.image.height:null,pe=m[y.type];y.precision!==null&&(p=n.getMaxPrecision(y.precision),p!==y.precision&&Qe("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Oe=ve!==void 0?ve.length:0;let Ae=0;W.morphAttributes.position!==void 0&&(Ae=1),W.morphAttributes.normal!==void 0&&(Ae=2),W.morphAttributes.color!==void 0&&(Ae=3);let pt,Ye,ot,he;if(pe){const Bt=hi[pe];pt=Bt.vertexShader,Ye=Bt.fragmentShader}else{pt=y.vertexShader,Ye=y.fragmentShader;const Bt=o.getVertexShaderStage(y),Rt=o.getFragmentShaderStage(y);o.update(y,Bt,Rt),ot=Bt.id,he=Rt.id}const z=i.getRenderTarget(),G=i.state.buffers.depth.getReversed(),ae=k.isInstancedMesh===!0,Q=k.isBatchedMesh===!0,se=!!y.map,ce=!!y.matcap,de=!!te,ye=!!y.aoMap,me=!!y.lightMap,_e=!!y.bumpMap&&y.wireframe===!1,Ue=!!y.normalMap,Te=!!y.displacementMap,st=!!y.emissiveMap,tt=!!y.metalnessMap,lt=!!y.roughnessMap,q=y.anisotropy>0,dt=y.clearcoat>0,we=y.dispersion>0,U=y.retroreflectivity>0,S=y.iridescence>0,ee=y.sheen>0,j=y.transmission>0,oe=q&&!!y.anisotropyMap,be=dt&&!!y.clearcoatMap,Re=dt&&!!y.clearcoatNormalMap,le=dt&&!!y.clearcoatRoughnessMap,xe=S&&!!y.iridescenceMap,Pe=S&&!!y.iridescenceThicknessMap,Xe=ee&&!!y.sheenColorMap,Ne=ee&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,je=!!y.specularColorMap,et=!!y.specularIntensityMap,ct=j&&!!y.transmissionMap,J=j&&!!y.thicknessMap,Ie=!!y.gradientMap,ge=!!y.alphaMap,De=y.alphaTest>0,ze=!!y.alphaHash,Me=!!y.extensions;let Ee=ni;y.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const Ke={shaderID:pe,shaderType:y.type,shaderName:y.name,vertexShader:pt,fragmentShader:Ye,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Q,batchingColor:Q&&k._colorsTexture!==null,instancing:ae,instancingColor:ae&&k.instanceColor!==null,instancingMorph:ae&&k.morphTexture!==null,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:se,matcap:ce,envMap:de,envMapMode:de&&te.mapping,envMapCubeUVHeight:re,aoMap:ye,lightMap:me,bumpMap:_e,normalMap:Ue,displacementMap:Te,emissiveMap:st,normalMapObjectSpace:Ue&&y.normalMapType===Sd,normalMapTangentSpace:Ue&&y.normalMapType===Gs,packedNormalMap:Ue&&y.normalMapType===Gs&&uv(y.normalMap.format),metalnessMap:tt,roughnessMap:lt,anisotropy:q,anisotropyMap:oe,clearcoat:dt,clearcoatMap:be,clearcoatNormalMap:Re,clearcoatRoughnessMap:le,dispersion:we,retroreflection:U,iridescence:S,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:ee,sheenColorMap:Xe,sheenRoughnessMap:Ne,specularMap:Ce,specularColorMap:je,specularIntensityMap:et,transmission:j,transmissionMap:ct,thicknessMap:J,gradientMap:Ie,opaque:y.transparent===!1&&y.blending===jr&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:De,alphaHash:ze,combine:y.combine,mapUv:se&&x(y.map.channel),aoMapUv:ye&&x(y.aoMap.channel),lightMapUv:me&&x(y.lightMap.channel),bumpMapUv:_e&&x(y.bumpMap.channel),normalMapUv:Ue&&x(y.normalMap.channel),displacementMapUv:Te&&x(y.displacementMap.channel),emissiveMapUv:st&&x(y.emissiveMap.channel),metalnessMapUv:tt&&x(y.metalnessMap.channel),roughnessMapUv:lt&&x(y.roughnessMap.channel),anisotropyMapUv:oe&&x(y.anisotropyMap.channel),clearcoatMapUv:be&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(y.sheenRoughnessMap.channel),specularMapUv:Ce&&x(y.specularMap.channel),specularColorMapUv:je&&x(y.specularColorMap.channel),specularIntensityMapUv:et&&x(y.specularIntensityMap.channel),transmissionMapUv:ct&&x(y.transmissionMap.channel),thicknessMapUv:J&&x(y.thicknessMap.channel),alphaMapUv:ge&&x(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ue||q),vertexNormals:!!W.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(se||ge),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||W.attributes.normal===void 0&&Ue===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:G,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ae,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:se&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===It,decodeVideoTextureEmissive:st&&y.emissiveMap.isVideoTexture===!0&&xt.getTransfer(y.emissiveMap.colorSpace)===It,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===kn,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Me&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&y.extensions.multiDraw===!0||Q)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function v(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)A.push(N),A.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(A,y),D(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function _(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function D(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function C(y){const A=m[y.type];let N;if(A){const F=hi[A];N=Ip.clone(F.uniforms)}else N=y.uniforms;return N}function b(y,A){let N=f.get(A);return N!==void 0?++N.usedTimes:(N=new av(i,A,y,r),c.push(N),f.set(A,N)),N}function T(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function P(){o.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:C,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:P}}function fv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,u){i.get(a)[o]=u}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function dv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function o(p,m,x,E,v,_){let D=i[e];return D===void 0?(D={id:p.id,object:p,geometry:m,material:x,materialVariant:a(p),groupOrder:E,renderOrder:p.renderOrder,z:v,group:_},i[e]=D):(D.id=p.id,D.object=p,D.geometry=m,D.material=x,D.materialVariant=a(p),D.groupOrder=E,D.renderOrder=p.renderOrder,D.z=v,D.group=_),e++,D}function u(p,m,x,E,v,_,D){D.reversedDepth===!0&&(v=-v);const C=o(p,m,x,E,v,_);x.transmission>0?n.push(C):x.transparent===!0?r.push(C):t.push(C)}function c(p,m,x,E,v,_){const D=o(p,m,x,E,v,_);x.transmission>0?n.unshift(D):x.transparent===!0?r.unshift(D):t.unshift(D)}function f(p,m){t.length>1&&t.sort(p||dv),n.length>1&&n.sort(m||Bh),r.length>1&&r.sort(m||Bh)}function d(){for(let p=e,m=i.length;p<m;p++){const x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:u,unshift:c,finish:d,sort:f}}function pv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new kh,i.set(n,[a])):r>=s.length?(a=new kh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new Je};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function gv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _v=0;function vv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xv(i){const e=new mv,t=gv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);const r=new Z,s=new ut,a=new ut;function o(c){let f=0,d=0,p=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,x=0,E=0,v=0,_=0,D=0,C=0,b=0,T=0,w=0,P=0,y=0,A=0,N=0;c.sort(vv);for(let k=0,H=c.length;k<H;k++){const O=c[k],W=O.color,K=O.intensity,X=O.distance;let te=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Zi?te=O.shadow.map.texture:te=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)f+=W.r*K,d+=W.g*K,p+=W.b*K;else if(O.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(O.sh.coefficients[re],K);N++}else if(O.isSunLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const pe=O.shadow,ve=t.get(O);ve.shadowIntensity=pe.intensity,ve.shadowBias=pe.bias,ve.shadowNormalBias=pe.normalBias,ve.shadowRadius=pe.radius,ve.shadowMapSize.copy(pe.mapSize).multiply(pe.getFrameExtents()),n.sunShadow[x]=ve,n.sunShadowMap[x]=te;const Oe=pe.getViewportCount();for(let Ae=0;Ae<Oe;Ae++)n.sunShadowMatrix[E+Ae]=pe.getMatrix(Ae),n.sunShadowCascade[E+Ae]=pe._cascadeData[Ae];E+=Oe,x++}n.sun[m]=re,m++}else if(O.isDirectionalLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const pe=O.shadow,ve=t.get(O);ve.shadowIntensity=pe.intensity,ve.shadowBias=pe.bias,ve.shadowNormalBias=pe.normalBias,ve.shadowRadius=pe.radius,ve.shadowMapSize=pe.mapSize,n.directionalShadow[v]=ve,n.directionalShadowMap[v]=te,n.directionalShadowMatrix[v]=O.shadow.matrix,T++}n.directional[v]=re,v++}else if(O.isSpotLight){const re=e.get(O);re.position.setFromMatrixPosition(O.matrixWorld),re.color.copy(W).multiplyScalar(K),re.distance=X,re.coneCos=Math.cos(O.angle),re.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),re.decay=O.decay,n.spot[D]=re;const pe=O.shadow;if(O.map&&(n.spotLightMap[y]=O.map,y++,pe.updateMatrices(O),O.castShadow&&A++),n.spotLightMatrix[D]=pe.matrix,O.castShadow){const ve=t.get(O);ve.shadowIntensity=pe.intensity,ve.shadowBias=pe.bias,ve.shadowNormalBias=pe.normalBias,ve.shadowRadius=pe.radius,ve.shadowMapSize=pe.mapSize,n.spotShadow[D]=ve,n.spotShadowMap[D]=te,P++}D++}else if(O.isRectAreaLight){const re=e.get(O);re.color.copy(W).multiplyScalar(K),re.halfWidth.set(O.width*.5,0,0),re.halfHeight.set(0,O.height*.5,0),n.rectArea[C]=re,C++}else if(O.isPointLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),re.distance=O.distance,re.decay=O.decay,O.castShadow){const pe=O.shadow,ve=t.get(O);ve.shadowIntensity=pe.intensity,ve.shadowBias=pe.bias,ve.shadowNormalBias=pe.normalBias,ve.shadowRadius=pe.radius,ve.shadowMapSize=pe.mapSize,ve.shadowCameraNear=pe.camera.near,ve.shadowCameraFar=pe.camera.far,n.pointShadow[_]=ve,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=O.shadow.matrix,w++}n.point[_]=re,_++}else if(O.isHemisphereLight){const re=e.get(O);re.skyColor.copy(O.color).multiplyScalar(K),re.groundColor.copy(O.groundColor).multiplyScalar(K),n.hemi[b]=re,b++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=p;const F=n.hash;(F.sunLength!==m||F.directionalLength!==v||F.pointLength!==_||F.spotLength!==D||F.rectAreaLength!==C||F.hemiLength!==b||F.numSunShadows!==x||F.numDirectionalShadows!==T||F.numPointShadows!==w||F.numSpotShadows!==P||F.numSpotMaps!==y||F.numLightProbes!==N)&&(n.sun.length=m,n.directional.length=v,n.spot.length=D,n.rectArea.length=C,n.point.length=_,n.hemi.length=b,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=N,F.sunLength=m,F.directionalLength=v,F.pointLength=_,F.spotLength=D,F.rectAreaLength=C,F.hemiLength=b,F.numSunShadows=x,F.numDirectionalShadows=T,F.numPointShadows=w,F.numSpotShadows=P,F.numSpotMaps=y,F.numLightProbes=N,n.version=_v++)}function u(c,f){let d=0,p=0,m=0,x=0,E=0,v=0;const _=f.matrixWorldInverse;for(let D=0,C=c.length;D<C;D++){const b=c[D];if(b.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(_),d++}else if(b.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),p++}else if(b.isSpotLight){const T=n.spot[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),x++}else if(b.isRectAreaLight){const T=n.rectArea[E];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(_),a.identity(),s.copy(b.matrixWorld),s.premultiply(_),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),E++}else if(b.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const T=n.hemi[v];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(_),v++}}}return{setup:o,setupView:u,state:n}}function zh(i){const e=new xv(i),t=[],n=[],r=[];function s(p){d.camera=p,t.length=0,n.length=0,r.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function u(p){r.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:u}}function yv(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new zh(i),e.set(r,[o])):s>=a.length?(o=new zh(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
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
}`,bv=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Ev=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Vh=new ut,ws=new Z,Yl=new Z;function Tv(i,e,t){let n=new Cl;const r=new nt,s=new nt,a=new Ot,o=new Fp,u=new Op,c={},f=t.maxTextureSize,d={[Di]:dn,[dn]:Di,[kn]:kn},p=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Mv,fragmentShader:Sv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new Lt;x.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new $t(x,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let _=this.type;this.render=function(w,P,y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===Zf&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);const A=i.getRenderTarget(),N=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(yi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=_!==this.type;H&&P.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(W=>W.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,W=w.length;O<W;O++){const K=w[O],X=K.shadow;if(X===void 0){Qe("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const te=X.getFrameExtents();r.multiply(te),s.copy(X.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/te.x),r.x=s.x*te.x,X.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/te.y),r.y=s.y*te.y,X.mapSize.y=s.y));const re=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=re,X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Kr){if(K.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Gn(r.x,r.y,{format:Zi,type:si,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new gs(r.x,r.y,Tn),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=Mi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Yt,X.map.depthTexture.magFilter=Yt}else K.isPointLight?(X.map=new yh(r.x),X.map.depthTexture=new Pp(r.x,ri)):(X.map=new Gn(r.x,r.y),X.map.depthTexture=new gs(r.x,r.y,ri)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=Mi,this.type===Ns?(X.map.depthTexture.compareFunction=re?Qo:Jo,X.map.depthTexture.minFilter=Wt,X.map.depthTexture.magFilter=Wt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Yt,X.map.depthTexture.magFilter=Yt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const pe=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();K.isPointLight!==!0&&X.updateMatrices(K,y);for(let ve=0;ve<pe;ve++){const Oe=X.getCamera(ve);if(K.isPointLight){const Ae=X.camera,pt=X.matrix,Ye=K.distance||Ae.far;Ye!==Ae.far&&(Ae.far=Ye,Ae.updateProjectionMatrix()),ws.setFromMatrixPosition(K.matrixWorld),Ae.position.copy(ws),Yl.copy(Ae.position),Yl.add(bv[ve]),Ae.up.copy(Ev[ve]),Ae.lookAt(Yl),Ae.updateMatrixWorld(),pt.makeTranslation(-ws.x,-ws.y,-ws.z),Vh.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Vh,Ae.coordinateSystem,Ae.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(X.map),i.clear());const Ae=X.getViewport(ve);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),k.viewport(a)}n=X.getFrustum(ve),b(P,y,Oe,K,this.type)}X.isPointLightShadow!==!0&&this.type===Kr&&D(X,y),X.needsUpdate=!1}_=this.type,v.needsUpdate=!1,i.setRenderTarget(A,N,F)};function D(w,P){const y=e.update(E);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new Gn(r.x,r.y,{format:Zi,type:si}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),p.uniforms.shadow_pass.value=w.map.depthTexture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,y,p,E,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,y,m,E,null)}function C(w,P,y,A){let N=null;const F=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)N=F;else if(N=y.isPointLight===!0?u:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const k=N.uuid,H=P.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let W=O[H];W===void 0&&(W=N.clone(),O[H]=W,P.addEventListener("dispose",T)),N=W}if(N.visible=P.visible,N.wireframe=P.wireframe,A===Kr?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:d[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const k=i.properties.get(N);k.light=y}return N}function b(w,P,y,A,N){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Kr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const H=e.update(w),O=w.material;if(Array.isArray(O)){const W=H.groups;for(let K=0,X=W.length;K<X;K++){const te=W[K],re=O[te.materialIndex];if(re&&re.visible){const pe=C(w,re,A,N);w.onBeforeShadow(i,w,P,y,H,pe,te),i.renderBufferDirect(y,null,H,pe,w,te),w.onAfterShadow(i,w,P,y,H,pe,te)}}}else if(O.visible){const W=C(w,O,A,N);w.onBeforeShadow(i,w,P,y,H,W,null),i.renderBufferDirect(y,null,H,W,w,null),w.onAfterShadow(i,w,P,y,H,W,null)}}const k=w.children;for(let H=0,O=k.length;H<O;H++)b(k[H],P,y,A,N)}function T(w){w.target.removeEventListener("dispose",T);for(const y in c){const A=c[y],N=w.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function wv(i,e){function t(){let J=!1;const Ie=new Ot;let ge=null;const De=new Ot(0,0,0,0);return{setMask:function(ze){ge!==ze&&!J&&(i.colorMask(ze,ze,ze,ze),ge=ze)},setLocked:function(ze){J=ze},setClear:function(ze,Me,Ee,Ke,Bt){Bt===!0&&(ze*=Ke,Me*=Ke,Ee*=Ke),Ie.set(ze,Me,Ee,Ke),De.equals(Ie)===!1&&(i.clearColor(ze,Me,Ee,Ke),De.copy(Ie))},reset:function(){J=!1,ge=null,De.set(-1,0,0,0)}}}function n(){let J=!1,Ie=!1,ge=null,De=null,ze=null;return{setReversed:function(Me){if(Ie!==Me){const Ee=e.get("EXT_clip_control");Me?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Ie=Me;const Ke=ze;ze=null,this.setClear(Ke)}},getReversed:function(){return Ie},setTest:function(Me){Me?z(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(Me){ge!==Me&&!J&&(i.depthMask(Me),ge=Me)},setFunc:function(Me){if(Ie&&(Me=Nd[Me]),De!==Me){switch(Me){case to:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=Me}},setLocked:function(Me){J=Me},setClear:function(Me){ze!==Me&&(ze=Me,Ie&&(Me=1-Me),i.clearDepth(Me))},reset:function(){J=!1,ge=null,De=null,ze=null,Ie=!1}}}function r(){let J=!1,Ie=null,ge=null,De=null,ze=null,Me=null,Ee=null,Ke=null,Bt=null;return{setTest:function(Rt){J||(Rt?z(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(Rt){Ie!==Rt&&!J&&(i.stencilMask(Rt),Ie=Rt)},setFunc:function(Rt,bn,Fn){(ge!==Rt||De!==bn||ze!==Fn)&&(i.stencilFunc(Rt,bn,Fn),ge=Rt,De=bn,ze=Fn)},setOp:function(Rt,bn,Fn){(Me!==Rt||Ee!==bn||Ke!==Fn)&&(i.stencilOp(Rt,bn,Fn),Me=Rt,Ee=bn,Ke=Fn)},setLocked:function(Rt){J=Rt},setClear:function(Rt){Bt!==Rt&&(i.clearStencil(Rt),Bt=Rt)},reset:function(){J=!1,Ie=null,ge=null,De=null,ze=null,Me=null,Ee=null,Ke=null,Bt=null}}}const s=new t,a=new n,o=new r,u=new WeakMap,c=new WeakMap;let f={},d={},p={},m=new WeakMap,x=[],E=null,v=!1,_=null,D=null,C=null,b=null,T=null,w=null,P=null,y=new Je(0,0,0),A=0,N=!1,F=null,k=null,H=null,O=null,W=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,te=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(re)[1]),X=te>=1):re.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),X=te>=2);let pe=null,ve={};const Oe=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),pt=new Ot().fromArray(Oe),Ye=new Ot().fromArray(Ae);function ot(J,Ie,ge,De){const ze=new Uint8Array(4),Me=i.createTexture();i.bindTexture(J,Me),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<ge;Ee++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Ie+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return Me}const he={};he[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),z(i.DEPTH_TEST),a.setFunc(Zr),_e(!1),Ue(kc),z(i.CULL_FACE),ye(yi);function z(J){f[J]!==!0&&(i.enable(J),f[J]=!0)}function G(J){f[J]!==!1&&(i.disable(J),f[J]=!1)}function ae(J,Ie){return p[J]!==Ie?(i.bindFramebuffer(J,Ie),p[J]=Ie,J===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Ie),J===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Q(J,Ie){let ge=x,De=!1;if(J){ge=m.get(Ie),ge===void 0&&(ge=[],m.set(Ie,ge));const ze=J.textures;if(ge.length!==ze.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Ee=ze.length;Me<Ee;Me++)ge[Me]=i.COLOR_ATTACHMENT0+Me;ge.length=ze.length,De=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,De=!0);De&&i.drawBuffers(ge)}function se(J){return E!==J?(i.useProgram(J),E=J,!0):!1}const ce={[cr]:i.FUNC_ADD,[Qf]:i.FUNC_SUBTRACT,[ed]:i.FUNC_REVERSE_SUBTRACT};ce[td]=i.MIN,ce[nd]=i.MAX;const de={[id]:i.ZERO,[rd]:i.ONE,[sd]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[cd]:i.DST_COLOR,[od]:i.DST_ALPHA,[ad]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[ud]:i.ONE_MINUS_DST_COLOR,[ld]:i.ONE_MINUS_DST_ALPHA,[fd]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[pd]:i.CONSTANT_ALPHA,[md]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(J,Ie,ge,De,ze,Me,Ee,Ke,Bt,Rt){if(J===yi){v===!0&&(G(i.BLEND),v=!1);return}if(v===!1&&(z(i.BLEND),v=!0),J!==Jf){if(J!==_||Rt!==N){if((D!==cr||T!==cr)&&(i.blendEquation(i.FUNC_ADD),D=cr,T=cr),Rt)switch(J){case jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFunc(i.ONE,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",J);break}else switch(J){case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vc:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hc:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",J);break}C=null,b=null,w=null,P=null,y.set(0,0,0),A=0,_=J,N=Rt}return}ze=ze||Ie,Me=Me||ge,Ee=Ee||De,(Ie!==D||ze!==T)&&(i.blendEquationSeparate(ce[Ie],ce[ze]),D=Ie,T=ze),(ge!==C||De!==b||Me!==w||Ee!==P)&&(i.blendFuncSeparate(de[ge],de[De],de[Me],de[Ee]),C=ge,b=De,w=Me,P=Ee),(Ke.equals(y)===!1||Bt!==A)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Bt),y.copy(Ke),A=Bt),_=J,N=!1}function me(J,Ie){J.side===kn?G(i.CULL_FACE):z(i.CULL_FACE);let ge=J.side===dn;Ie&&(ge=!ge),_e(ge),J.blending===jr&&J.transparent===!1?ye(yi):ye(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),a.setFunc(J.depthFunc),a.setTest(J.depthTest),a.setMask(J.depthWrite),s.setMask(J.colorWrite);const De=J.stencilWrite;o.setTest(De),De&&(o.setMask(J.stencilWriteMask),o.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),o.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),st(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(J){F!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),F=J)}function Ue(J){J!==Kf?(z(i.CULL_FACE),J!==k&&(J===kc?i.cullFace(i.BACK):J===jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),k=J}function Te(J){J!==H&&(X&&i.lineWidth(J),H=J)}function st(J,Ie,ge){J?(z(i.POLYGON_OFFSET_FILL),(O!==Ie||W!==ge)&&(O=Ie,W=ge,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,ge))):G(i.POLYGON_OFFSET_FILL)}function tt(J){J?z(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function lt(J){J===void 0&&(J=i.TEXTURE0+K-1),pe!==J&&(i.activeTexture(J),pe=J)}function q(J,Ie,ge){ge===void 0&&(pe===null?ge=i.TEXTURE0+K-1:ge=pe);let De=ve[ge];De===void 0&&(De={type:void 0,texture:void 0},ve[ge]=De),(De.type!==J||De.texture!==Ie)&&(pe!==ge&&(i.activeTexture(ge),pe=ge),i.bindTexture(J,Ie||he[J]),De.type=J,De.texture=Ie)}function dt(){const J=ve[pe];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function we(){try{i.compressedTexImage2D(...arguments)}catch(J){rt("WebGLState:",J)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(J){rt("WebGLState:",J)}}function S(){try{i.texSubImage2D(...arguments)}catch(J){rt("WebGLState:",J)}}function ee(){try{i.texSubImage3D(...arguments)}catch(J){rt("WebGLState:",J)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(J){rt("WebGLState:",J)}}function oe(){try{i.compressedTexSubImage3D(...arguments)}catch(J){rt("WebGLState:",J)}}function be(){try{i.texStorage2D(...arguments)}catch(J){rt("WebGLState:",J)}}function Re(){try{i.texStorage3D(...arguments)}catch(J){rt("WebGLState:",J)}}function le(){try{i.texImage2D(...arguments)}catch(J){rt("WebGLState:",J)}}function xe(){try{i.texImage3D(...arguments)}catch(J){rt("WebGLState:",J)}}function Pe(J){return d[J]!==void 0?d[J]:i.getParameter(J)}function Xe(J,Ie){d[J]!==Ie&&(i.pixelStorei(J,Ie),d[J]=Ie)}function Ne(J){pt.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),pt.copy(J))}function Ce(J){Ye.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Ye.copy(J))}function je(J,Ie){let ge=c.get(Ie);ge===void 0&&(ge=new WeakMap,c.set(Ie,ge));let De=ge.get(J);De===void 0&&(De=i.getUniformBlockIndex(Ie,J.name),ge.set(J,De))}function et(J,Ie){const De=c.get(Ie).get(J);u.get(Ie)!==De&&(i.uniformBlockBinding(Ie,De,J.__bindingPointIndex),u.set(Ie,De))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},pe=null,ve={},p={},m=new WeakMap,x=[],E=null,v=!1,_=null,D=null,C=null,b=null,T=null,w=null,P=null,y=new Je(0,0,0),A=0,N=!1,F=null,k=null,H=null,O=null,W=null,pt.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:z,disable:G,bindFramebuffer:ae,drawBuffers:Q,useProgram:se,setBlending:ye,setMaterial:me,setFlipSided:_e,setCullFace:Ue,setLineWidth:Te,setPolygonOffset:st,setScissorTest:tt,activeTexture:lt,bindTexture:q,unbindTexture:dt,compressedTexImage2D:we,compressedTexImage3D:U,texImage2D:le,texImage3D:xe,pixelStorei:Xe,getParameter:Pe,updateUBOMapping:je,uniformBlockBinding:et,texStorage2D:be,texStorage3D:Re,texSubImage2D:S,texSubImage3D:ee,compressedTexSubImage2D:j,compressedTexSubImage3D:oe,scissor:Ne,viewport:Ce,reset:ct}}function Av(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,f=new WeakMap,d=new Set;let p;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,S){return x?new OffscreenCanvas(U,S):rs("canvas")}function v(U,S,ee){let j=1;const oe=we(U);if((oe.width>ee||oe.height>ee)&&(j=ee/Math.max(oe.width,oe.height)),j<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const be=Math.floor(j*oe.width),Re=Math.floor(j*oe.height);p===void 0&&(p=E(be,Re));const le=S?E(be,Re):p;return le.width=be,le.height=Re,le.getContext("2d").drawImage(U,0,0,be,Re),Qe("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+be+"x"+Re+")."),le}else return"data"in U&&Qe("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),U;return U}function _(U){return U.generateMipmaps}function D(U){i.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(U,S,ee,j,oe,be=!1){if(U!==null){if(i[U]!==void 0)return i[U];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Re;j&&(Re=e.get("EXT_texture_norm16"),Re||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=S;if(S===i.RED&&(ee===i.FLOAT&&(le=i.R32F),ee===i.HALF_FLOAT&&(le=i.R16F),ee===i.UNSIGNED_BYTE&&(le=i.R8),ee===i.UNSIGNED_SHORT&&Re&&(le=Re.R16_EXT),ee===i.SHORT&&Re&&(le=Re.R16_SNORM_EXT)),S===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.R8UI),ee===i.UNSIGNED_SHORT&&(le=i.R16UI),ee===i.UNSIGNED_INT&&(le=i.R32UI),ee===i.BYTE&&(le=i.R8I),ee===i.SHORT&&(le=i.R16I),ee===i.INT&&(le=i.R32I)),S===i.RG&&(ee===i.FLOAT&&(le=i.RG32F),ee===i.HALF_FLOAT&&(le=i.RG16F),ee===i.UNSIGNED_BYTE&&(le=i.RG8),ee===i.UNSIGNED_SHORT&&Re&&(le=Re.RG16_EXT),ee===i.SHORT&&Re&&(le=Re.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.RG8UI),ee===i.UNSIGNED_SHORT&&(le=i.RG16UI),ee===i.UNSIGNED_INT&&(le=i.RG32UI),ee===i.BYTE&&(le=i.RG8I),ee===i.SHORT&&(le=i.RG16I),ee===i.INT&&(le=i.RG32I)),S===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(le=i.RGB16UI),ee===i.UNSIGNED_INT&&(le=i.RGB32UI),ee===i.BYTE&&(le=i.RGB8I),ee===i.SHORT&&(le=i.RGB16I),ee===i.INT&&(le=i.RGB32I)),S===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),ee===i.UNSIGNED_INT&&(le=i.RGBA32UI),ee===i.BYTE&&(le=i.RGBA8I),ee===i.SHORT&&(le=i.RGBA16I),ee===i.INT&&(le=i.RGBA32I)),S===i.RGB&&(ee===i.UNSIGNED_SHORT&&Re&&(le=Re.RGB16_EXT),ee===i.SHORT&&Re&&(le=Re.RGB16_SNORM_EXT),ee===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),ee===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),S===i.RGBA){const xe=be?Ws:xt.getTransfer(oe);ee===i.FLOAT&&(le=i.RGBA32F),ee===i.HALF_FLOAT&&(le=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(le=xe===It?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT&&Re&&(le=Re.RGBA16_EXT),ee===i.SHORT&&Re&&(le=Re.RGBA16_SNORM_EXT),ee===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function T(U,S){let ee;return U?S===null||S===ri||S===es?ee=i.DEPTH24_STENCIL8:S===Tn?ee=i.DEPTH32F_STENCIL8:S===Qr&&(ee=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ri||S===es?ee=i.DEPTH_COMPONENT24:S===Tn?ee=i.DEPTH_COMPONENT32F:S===Qr&&(ee=i.DEPTH_COMPONENT16),ee}function w(U,S){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Yt&&U.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function P(U){const S=U.target;S.removeEventListener("dispose",P),A(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&d.delete(S)}function y(U){const S=U.target;S.removeEventListener("dispose",y),F(S)}function A(U){const S=n.get(U);if(S.__webglInit===void 0)return;const ee=U.source,j=m.get(ee);if(j){const oe=j[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&N(U),Object.keys(j).length===0&&m.delete(ee)}n.remove(U)}function N(U){const S=n.get(U);i.deleteTexture(S.__webglTexture);const ee=U.source,j=m.get(ee);delete j[S.__cacheKey],a.memory.textures--}function F(U){const S=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let oe=0;oe<S.__webglFramebuffer[j].length;oe++)i.deleteFramebuffer(S.__webglFramebuffer[j][oe]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ee=U.textures;for(let j=0,oe=ee.length;j<oe;j++){const be=n.get(ee[j]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(ee[j])}n.remove(U)}let k=0;function H(){k=0}function O(){return k}function W(U){k=U}function K(){const U=k;return U>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,U}function X(U){const S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function te(U,S){const ee=n.get(U);if(U.isVideoTexture&&q(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ee.__version!==U.version){const j=U.image;if(j===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{G(ee,U,S);return}}else U.isExternalTexture&&(ee.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+S)}function re(U,S){const ee=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){G(ee,U,S);return}else U.isExternalTexture&&(ee.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+S)}function pe(U,S){const ee=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){G(ee,U,S);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+S)}function ve(U,S){const ee=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ee.__version!==U.version){ae(ee,U,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+S)}const Oe={[ii]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[hr]:i.MIRRORED_REPEAT},Ae={[Yt]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Fs]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},pt={[Ed]:i.NEVER,[Cd]:i.ALWAYS,[Td]:i.LESS,[Jo]:i.LEQUAL,[wd]:i.EQUAL,[Qo]:i.GEQUAL,[Ad]:i.GREATER,[Rd]:i.NOTEQUAL};function Ye(U,S){if(S.type===Tn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wt||S.magFilter===Fs||S.magFilter===Jr||S.magFilter===zn||S.minFilter===Wt||S.minFilter===Fs||S.minFilter===Jr||S.minFilter===zn)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Oe[S.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Oe[S.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Oe[S.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Ae[S.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Ae[S.minFilter]),S.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==Jr&&S.minFilter!==zn||S.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ot(U,S){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",P));const j=S.source;let oe=m.get(j);oe===void 0&&(oe={},m.set(j,oe));const be=X(S);if(be!==U.__cacheKey){oe[be]===void 0&&(oe[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),oe[be].usedTimes++;const Re=oe[U.__cacheKey];Re!==void 0&&(oe[U.__cacheKey].usedTimes--,Re.usedTimes===0&&N(S)),U.__cacheKey=be,U.__webglTexture=oe[be].texture}return ee}function he(U,S,ee){return Math.floor(Math.floor(U/ee)/S)}function z(U,S,ee,j){const be=U.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,ee,j,S.data);else{be.sort((Xe,Ne)=>Xe.start-Ne.start);let Re=0;for(let Xe=1;Xe<be.length;Xe++){const Ne=be[Re],Ce=be[Xe],je=Ne.start+Ne.count,et=he(Ce.start,S.width,4),ct=he(Ne.start,S.width,4);Ce.start<=je+1&&et===ct&&he(Ce.start+Ce.count-1,S.width,4)===et?Ne.count=Math.max(Ne.count,Ce.start+Ce.count-Ne.start):(++Re,be[Re]=Ce)}be.length=Re+1;const le=t.getParameter(i.UNPACK_ROW_LENGTH),xe=t.getParameter(i.UNPACK_SKIP_PIXELS),Pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Xe=0,Ne=be.length;Xe<Ne;Xe++){const Ce=be[Xe],je=Math.floor(Ce.start/4),et=Math.ceil(Ce.count/4),ct=je%S.width,J=Math.floor(je/S.width),Ie=et,ge=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(i.UNPACK_SKIP_ROWS,J),t.texSubImage2D(i.TEXTURE_2D,0,ct,J,Ie,ge,ee,j,S.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function G(U,S,ee){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const oe=ot(U,S),be=S.source;t.bindTexture(j,U.__webglTexture,i.TEXTURE0+ee);const Re=n.get(be);if(be.version!==Re.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+ee),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ge=xt.getPrimaries(xt.workingColorSpace),De=S.colorSpace===Ni?null:xt.getPrimaries(S.colorSpace),ze=S.colorSpace===Ni||ge===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let xe=v(S.image,!1,r.maxTextureSize);xe=dt(S,xe);const Pe=s.convert(S.format,S.colorSpace),Xe=s.convert(S.type);let Ne=b(S.internalFormat,Pe,Xe,S.normalized,S.colorSpace,S.isVideoTexture);Ye(j,S);let Ce;const je=S.mipmaps,et=S.isVideoTexture!==!0,ct=Re.__version===void 0||oe===!0,J=be.dataReady,Ie=w(S,xe);if(S.isDepthTexture)Ne=T(S.format===ji,S.type),ct&&(et?t.texStorage2D(i.TEXTURE_2D,1,Ne,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Pe,Xe,null));else if(S.isDataTexture)if(je.length>0){et&&ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Ne,je[0].width,je[0].height);for(let ge=0,De=je.length;ge<De;ge++)Ce=je[ge],et?J&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Pe,Xe,Ce.data):t.texImage2D(i.TEXTURE_2D,ge,Ne,Ce.width,Ce.height,0,Pe,Xe,Ce.data);S.generateMipmaps=!1}else et?(ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Ne,xe.width,xe.height),J&&z(S,xe,Pe,Xe)):t.texImage2D(i.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Pe,Xe,xe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ne,je[0].width,je[0].height,xe.depth);for(let ge=0,De=je.length;ge<De;ge++)if(Ce=je[ge],S.format!==wn)if(Pe!==null)if(et){if(J)if(S.layerUpdates.size>0){const ze=fh(Ce.width,Ce.height,S.format,S.type);for(const Me of S.layerUpdates){const Ee=Ce.data.subarray(Me*ze/Ce.data.BYTES_PER_ELEMENT,(Me+1)*ze/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Me,Ce.width,Ce.height,1,Pe,Ee)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,xe.depth,Pe,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ne,Ce.width,Ce.height,xe.depth,0,Ce.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,xe.depth,Pe,Xe,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ne,Ce.width,Ce.height,xe.depth,0,Pe,Xe,Ce.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{et&&ct&&t.texStorage2D(i.TEXTURE_2D,Ie,Ne,je[0].width,je[0].height);for(let ge=0,De=je.length;ge<De;ge++)Ce=je[ge],S.format!==wn?Pe!==null?et?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ne,Ce.width,Ce.height,0,Ce.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?J&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Pe,Xe,Ce.data):t.texImage2D(i.TEXTURE_2D,ge,Ne,Ce.width,Ce.height,0,Pe,Xe,Ce.data)}else if(S.isDataArrayTexture)if(et){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ne,xe.width,xe.height,xe.depth),J)if(S.layerUpdates.size>0){const ge=fh(xe.width,xe.height,S.format,S.type);for(const De of S.layerUpdates){const ze=xe.data.subarray(De*ge/xe.data.BYTES_PER_ELEMENT,(De+1)*ge/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,xe.width,xe.height,1,Pe,Xe,ze)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Pe,Xe,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,Pe,Xe,xe.data);else if(S.isData3DTexture)et?(ct&&t.texStorage3D(i.TEXTURE_3D,Ie,Ne,xe.width,xe.height,xe.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Pe,Xe,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,Pe,Xe,xe.data);else if(S.isFramebufferTexture){if(ct)if(et)t.texStorage2D(i.TEXTURE_2D,Ie,Ne,xe.width,xe.height);else{let ge=xe.width,De=xe.height;for(let ze=0;ze<Ie;ze++)t.texImage2D(i.TEXTURE_2D,ze,Ne,ge,De,0,Pe,Xe,null),ge>>=1,De>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const ge=i.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),xe.parentNode!==ge){ge.appendChild(xe),d.add(S),ge.onpaint=De=>{const ze=De.changedElements;for(const Me of d)ze.includes(Me.image)&&(Me.needsUpdate=!0)},ge.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xe);else{const ze=i.RGBA,Me=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,Me,Ee,xe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(je.length>0){if(et&&ct){const ge=we(je[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Ne,ge.width,ge.height)}for(let ge=0,De=je.length;ge<De;ge++)Ce=je[ge],et?J&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Pe,Xe,Ce):t.texImage2D(i.TEXTURE_2D,ge,Ne,Pe,Xe,Ce);S.generateMipmaps=!1}else if(et){if(ct){const ge=we(xe);t.texStorage2D(i.TEXTURE_2D,Ie,Ne,ge.width,ge.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Xe,xe)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Pe,Xe,xe);_(S)&&D(j),Re.__version=be.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function ae(U,S,ee){if(S.image.length!==6)return;const j=ot(U,S),oe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+ee);const be=n.get(oe);if(oe.version!==be.__version||j===!0){t.activeTexture(i.TEXTURE0+ee);const Re=xt.getPrimaries(xt.workingColorSpace),le=S.colorSpace===Ni?null:xt.getPrimaries(S.colorSpace),xe=S.colorSpace===Ni||Re===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Xe=S.image[0]&&S.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Pe&&!Xe?Ne[Me]=v(S.image[Me],!0,r.maxCubemapSize):Ne[Me]=Xe?S.image[Me].image:S.image[Me],Ne[Me]=dt(S,Ne[Me]);const Ce=Ne[0],je=s.convert(S.format,S.colorSpace),et=s.convert(S.type),ct=b(S.internalFormat,je,et,S.normalized,S.colorSpace),J=S.isVideoTexture!==!0,Ie=be.__version===void 0||j===!0,ge=oe.dataReady;let De=w(S,Ce);Ye(i.TEXTURE_CUBE_MAP,S);let ze;if(Pe){J&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ct,Ce.width,Ce.height);for(let Me=0;Me<6;Me++){ze=Ne[Me].mipmaps;for(let Ee=0;Ee<ze.length;Ee++){const Ke=ze[Ee];S.format!==wn?je!==null?J?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ee,0,0,Ke.width,Ke.height,je,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ee,ct,Ke.width,Ke.height,0,Ke.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ee,0,0,Ke.width,Ke.height,je,et,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ee,ct,Ke.width,Ke.height,0,je,et,Ke.data)}}}else{if(ze=S.mipmaps,J&&Ie){ze.length>0&&De++;const Me=we(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ct,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Xe){J?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,je,et,Ne[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ct,Ne[Me].width,Ne[Me].height,0,je,et,Ne[Me].data);for(let Ee=0;Ee<ze.length;Ee++){const Bt=ze[Ee].image[Me].image;J?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ee+1,0,0,Bt.width,Bt.height,je,et,Bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ee+1,ct,Bt.width,Bt.height,0,je,et,Bt.data)}}else{J?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,je,et,Ne[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ct,je,et,Ne[Me]);for(let Ee=0;Ee<ze.length;Ee++){const Ke=ze[Ee];J?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ee+1,0,0,je,et,Ke.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ee+1,ct,je,et,Ke.image[Me])}}}_(S)&&D(i.TEXTURE_CUBE_MAP),be.__version=oe.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function Q(U,S,ee,j,oe,be){const Re=s.convert(ee.format,ee.colorSpace),le=s.convert(ee.type),xe=b(ee.internalFormat,Re,le,ee.normalized,ee.colorSpace),Pe=n.get(S),Xe=n.get(ee);if(Xe.__renderTarget=S,!Pe.__hasExternalTextures){const Ne=Math.max(1,S.width>>be),Ce=Math.max(1,S.height>>be);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,be,xe,Ne,Ce,S.depth,0,Re,le,null):t.texImage2D(oe,be,xe,Ne,Ce,0,Re,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),lt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,oe,Xe.__webglTexture,0,tt(S)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,oe,Xe.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(U,S,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,U),S.depthBuffer){const j=S.depthTexture,oe=j&&j.isDepthTexture?j.type:null,be=T(S.stencilBuffer,oe),Re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;lt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(S),be,S.width,S.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(S),be,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,be,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,U)}else{const j=S.textures;for(let oe=0;oe<j.length;oe++){const be=j[oe],Re=s.convert(be.format,be.colorSpace),le=s.convert(be.type),xe=b(be.internalFormat,Re,le,be.normalized,be.colorSpace);lt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(S),xe,S.width,S.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(S),xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(U,S,ee){const j=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const oe=n.get(S.depthTexture);if(oe.__renderTarget=S,(!oe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,S.depthTexture);const Pe=s.convert(S.depthTexture.format),Xe=s.convert(S.depthTexture.type);let Ne;S.depthTexture.format===Mi?Ne=i.DEPTH_COMPONENT24:S.depthTexture.format===ji&&(Ne=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ne,S.width,S.height,0,Pe,Xe,null)}}else te(S.depthTexture,0);const be=oe.__webglTexture,Re=tt(S),le=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+ee:i.TEXTURE_2D,xe=S.depthTexture.format===ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Mi)lt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,le,be,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,xe,le,be,0);else if(S.depthTexture.format===ji)lt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,le,be,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,xe,le,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(U){const S=n.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==U.depthTexture){const j=U.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",oe)};j.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=j}if(U.depthTexture&&!S.__autoAllocateDepthBuffer)if(ee)for(let j=0;j<6;j++)ce(S.__webglFramebuffer[j],U,j);else{const j=U.texture.mipmaps;j&&j.length>0?ce(S.__webglFramebuffer[0],U,0):ce(S.__webglFramebuffer,U,0)}else if(ee){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),se(S.__webglDepthbuffer[j],U,!1);else{const oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,be)}}else{const j=U.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),se(S.__webglDepthbuffer,U,!1);else{const oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(U,S,ee){const j=n.get(U);S!==void 0&&Q(j.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&de(U)}function me(U){const S=U.texture,ee=n.get(U),j=n.get(S);U.addEventListener("dispose",y);const oe=U.textures,be=U.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),be){ee.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer[le]=[];for(let xe=0;xe<S.mipmaps.length;xe++)ee.__webglFramebuffer[le][xe]=i.createFramebuffer()}else ee.__webglFramebuffer[le]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)ee.__webglFramebuffer[le]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Re)for(let le=0,xe=oe.length;le<xe;le++){const Pe=n.get(oe[le]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&lt(U)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){const xe=oe[le];ee.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[le]);const Pe=s.convert(xe.format,xe.colorSpace),Xe=s.convert(xe.type),Ne=b(xe.internalFormat,Pe,Xe,xe.normalized,xe.colorSpace,U.isXRRenderTarget===!0),Ce=tt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ne,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ee.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),se(ee.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Q(ee.__webglFramebuffer[le][xe],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe);else Q(ee.__webglFramebuffer[le],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(S)&&D(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let le=0,xe=oe.length;le<xe;le++){const Pe=oe[le],Xe=n.get(Pe);let Ne=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ne=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Xe.__webglTexture),Ye(Ne,Pe),Q(ee.__webglFramebuffer,U,Pe,i.COLOR_ATTACHMENT0+le,Ne,0),_(Pe)&&D(Ne)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(le=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),Ye(le,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Q(ee.__webglFramebuffer[xe],U,S,i.COLOR_ATTACHMENT0,le,xe);else Q(ee.__webglFramebuffer,U,S,i.COLOR_ATTACHMENT0,le,0);_(S)&&D(le),t.unbindTexture()}U.depthBuffer&&de(U)}function _e(U){const S=U.textures;for(let ee=0,j=S.length;ee<j;ee++){const oe=S[ee];if(_(oe)){const be=C(U),Re=n.get(oe).__webglTexture;t.bindTexture(be,Re),D(be),t.unbindTexture()}}}const Ue=[],Te=[];function st(U){if(U.samples>0){if(lt(U)===!1){const S=U.textures,ee=U.width,j=U.height;let oe=i.COLOR_BUFFER_BIT;const be=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(U),le=S.length>1;if(le)for(let Pe=0;Pe<S.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const xe=U.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);const Xe=n.get(S[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,ee,j,0,0,ee,j,oe,i.NEAREST),u===!0&&(Ue.length=0,Te.length=0,Ue.push(i.COLOR_ATTACHMENT0+Pe),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Ue.push(be),Te.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Pe=0;Pe<S.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Pe]);const Xe=n.get(S[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&u){const S=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function tt(U){return Math.min(r.maxSamples,U.samples)}function lt(U){const S=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function q(U){const S=a.render.frame;f.get(U)!==S&&(f.set(U,S),U.update())}function dt(U,S){const ee=U.colorSpace,j=U.format,oe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ee!==vn&&ee!==Ni&&(xt.getTransfer(ee)===It?(j!==wn||oe!==_n)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",ee)),S}function we(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=O,this.setTextureUnits=W,this.setTexture2D=te,this.setTexture2DArray=re,this.setTexture3D=pe,this.setTextureCube=ve,this.rebindTextures=ye,this.setupRenderTarget=me,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rv(i,e){function t(n,r=Ni){let s;const a=xt.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tu)return i.BYTE;if(n===nu)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===su)return i.ALPHA;if(n===au)return i.RGB;if(n===wn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===mo)return i.RED;if(n===go)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Os||n===Bs||n===ks||n===zs)if(a===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===yo||n===Mo||n===So)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===Eo||n===To||n===wo||n===Ao||n===Vs||n===Ro)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bo||n===Eo)return a===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===To)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wo)return s.COMPRESSED_R11_EAC;if(n===Ao)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Vs)return s.COMPRESSED_RG11_EAC;if(n===Ro)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Ho)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Co)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Wo||n===Xo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Go)return a===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===$o||n===Hs||n===Yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
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

}`;class Lv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ju(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new li({vertexShader:Cv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iv extends Ui{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",u=1,c=null,f=null,d=null,p=null,m=null,x=null;const E=typeof XRWebGLBinding<"u",v=new Lv,_={},D=t.getContextAttributes();let C=null,b=null;const T=[],w=[],P=new nt;let y=null,A=null;const N=new pn;N.viewport=new Ot;const F=new pn;F.viewport=new Ot;const k=[N,F],H=new cm;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let z=T[he];return z===void 0&&(z=new ol,T[he]=z),z.getTargetRaySpace()},this.getControllerGrip=function(he){let z=T[he];return z===void 0&&(z=new ol,T[he]=z),z.getGripSpace()},this.getHand=function(he){let z=T[he];return z===void 0&&(z=new ol,T[he]=z),z.getHandSpace()};function K(he){const z=w.indexOf(he.inputSource);if(z===-1)return;const G=T[z];G!==void 0&&(G.update(he.inputSource,he.frame,c||a),G.dispatchEvent({type:he.type,data:he.inputSource}))}function X(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",te);for(let he=0;he<T.length;he++){const z=w[he];z!==null&&(w[he]=null,T[he].disconnect(z))}O=null,W=null,v.reset();for(const he in _)delete _[he];if(e.setRenderTarget(C),m=null,p=null,d=null,r=null,b=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(P.width,P.height,!1),A!==null){const he=A.camera;he.fov=A.fov,he.zoom=A.zoom,he.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){o=he,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(he){c=he},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",X),r.addEventListener("inputsourceschange",te),D.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,ae=null,Q=null;D.depth&&(Q=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=D.stencil?ji:Mi,ae=D.stencil?es:ri);const se={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(se),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Gn(p.textureWidth,p.textureHeight,{format:wn,type:_n,depthTexture:new gs(p.textureWidth,p.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const G={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Gn(m.framebufferWidth,m.framebufferHeight,{format:wn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(u),c=null,a=await r.requestReferenceSpace(o),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function te(he){for(let z=0;z<he.removed.length;z++){const G=he.removed[z],ae=w.indexOf(G);ae>=0&&(w[ae]=null,T[ae].disconnect(G))}for(let z=0;z<he.added.length;z++){const G=he.added[z];let ae=w.indexOf(G);if(ae===-1){for(let se=0;se<T.length;se++)if(se>=w.length){w.push(G),ae=se;break}else if(w[se]===null){w[se]=G,ae=se;break}if(ae===-1)break}const Q=T[ae];Q&&Q.connect(G)}}const re=new Z,pe=new Z;function ve(he,z,G){re.setFromMatrixPosition(z.matrixWorld),pe.setFromMatrixPosition(G.matrixWorld);const ae=re.distanceTo(pe),Q=z.projectionMatrix.elements,se=G.projectionMatrix.elements,ce=Q[14]/(Q[10]-1),de=Q[14]/(Q[10]+1),ye=(Q[9]+1)/Q[5],me=(Q[9]-1)/Q[5],_e=(Q[8]-1)/Q[0],Ue=(se[8]+1)/se[0],Te=ce*_e,st=ce*Ue,tt=ae/(-_e+Ue),lt=tt*-_e;if(z.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(lt),he.translateZ(tt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Q[10]===-1)he.projectionMatrix.copy(z.projectionMatrix),he.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const q=ce+tt,dt=de+tt,we=Te-lt,U=st+(ae-lt),S=ye*de/dt*q,ee=me*de/dt*q;he.projectionMatrix.makePerspective(we,U,S,ee,q,dt),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function Oe(he,z){z===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(z.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let z=he.near,G=he.far;v.texture!==null&&(v.depthNear>0&&(z=v.depthNear),v.depthFar>0&&(G=v.depthFar)),H.near=F.near=N.near=z,H.far=F.far=N.far=G,(O!==H.near||W!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),O=H.near,W=H.far),H.layers.mask=he.layers.mask|6,N.layers.mask=H.layers.mask&-5,F.layers.mask=H.layers.mask&-3;const ae=he.parent,Q=H.cameras;Oe(H,ae);for(let se=0;se<Q.length;se++)Oe(Q[se],ae);Q.length===2?ve(H,N,F):H.projectionMatrix.copy(N.projectionMatrix),A===null&&he.isPerspectiveCamera&&(A={camera:he,fov:he.fov,zoom:he.zoom}),Ae(he,H,ae)};function Ae(he,z,G){G===null?he.matrix.copy(z.matrixWorld):(he.matrix.copy(G.matrixWorld),he.matrix.invert(),he.matrix.multiply(z.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(z.projectionMatrix),he.projectionMatrixInverse.copy(z.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=pr*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&m===null))return u},this.setFoveation=function(he){u=he,p!==null&&(p.fixedFoveation=he),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=he)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(H)},this.getCameraTexture=function(he){return _[he]};let pt=null;function Ye(he,z){if(f=z.getViewerPose(c||a),x=z,f!==null){const G=f.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let ae=!1;G.length!==H.cameras.length&&(H.cameras.length=0,ae=!0);for(let de=0;de<G.length;de++){const ye=G[de];let me=null;if(m!==null)me=m.getViewport(ye);else{const Ue=d.getViewSubImage(p,ye);me=Ue.viewport,de===0&&(e.setRenderTargetTextures(b,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(b))}let _e=k[de];_e===void 0&&(_e=new pn,_e.layers.enable(de),_e.viewport=new Ot,k[de]=_e),_e.matrix.fromArray(ye.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ye.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(me.x,me.y,me.width,me.height),de===0&&(H.matrix.copy(_e.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ae===!0&&H.cameras.push(_e)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){d=n.getBinding();const de=d.getDepthInformation(G[0]);de&&de.isValid&&de.texture&&v.init(de,r.renderState)}if(Q&&Q.includes("camera-access")&&E){e.state.unbindTexture(),d=n.getBinding();for(let de=0;de<G.length;de++){const ye=G[de].camera;if(ye){let me=_[ye];me||(me=new ju,_[ye]=me);const _e=d.getCameraImage(ye);me.sourceTexture=_e}}}}for(let G=0;G<T.length;G++){const ae=w[G],Q=T[G];ae!==null&&Q!==void 0&&Q.update(ae,z,c||a)}pt&&pt(he,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),x=null}const ot=new dh;ot.setAnimationLoop(Ye),this.setAnimationLoop=function(he){pt=he},this.dispose=function(){}}}const Dv=new ut,Hh=new ft;Hh.set(-1,0,0,0,1,0,0,0,1);function Nv(i,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,Ju(i)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function r(v,_,D,C,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(v,_):_.isMeshLambertMaterial?(s(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(v,_),d(v,_)):_.isMeshPhongMaterial?(s(v,_),f(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(v,_),p(v,_),_.isMeshPhysicalMaterial&&m(v,_,b)):_.isMeshMatcapMaterial?(s(v,_),x(v,_)):_.isMeshDepthMaterial?s(v,_):_.isMeshDistanceMaterial?(s(v,_),E(v,_)):_.isMeshNormalMaterial?s(v,_):_.isLineBasicMaterial?(a(v,_),_.isLineDashedMaterial&&o(v,_)):_.isPointsMaterial?u(v,_,D,C):_.isSpriteMaterial?c(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===dn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===dn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const D=e.get(_),C=D.envMap,b=D.envMapRotation;C&&(v.envMap.value=C,v.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Hh),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function a(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function o(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function u(v,_,D,C){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*D,v.scale.value=C*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function c(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function f(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function d(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function p(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function m(v,_,D){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===dn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.retroreflectivity>0&&(v.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=D.texture,v.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,_){_.matcap&&(v.matcap.value=_.matcap)}function E(v,_){const D=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(D.matrixWorld),v.nearDistance.value=D.shadow.camera.near,v.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Uv(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(b,T){const w=T.program;n.uniformBlockBinding(b,w)}function c(b,T){let w=r[b.id];w===void 0&&(v(b),w=f(b),r[b.id]=w,b.addEventListener("dispose",D));const P=T.program;n.updateUBOMapping(b,P);const y=e.render.frame;s[b.id]!==y&&(p(b),s[b.id]=y)}function f(b){const T=d();b.__bindingPointIndex=T;const w=i.createBuffer(),P=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const T=r[b.id],w=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,A=w.length;y<A;y++){const N=w[y];if(Array.isArray(N))for(let F=0,k=N.length;F<k;F++)m(N[F],y,F,P);else m(N,y,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,w,P){if(E(b,T,w,P)===!0){const y=b.__offset,A=b.value;if(Array.isArray(A)){let N=0;for(let F=0;F<A.length;F++){const k=A[F],H=_(k);x(k,b.__data,N),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,b.__data)}}function x(b,T,w){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,w)}function E(b,T,w,P){const y=b.value,A=T+"_"+w;if(P[A]===void 0)return typeof y=="number"||typeof y=="boolean"?P[A]=y:ArrayBuffer.isView(y)?P[A]=y.slice():P[A]=y.clone(),!0;{const N=P[A];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return P[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function v(b){const T=b.uniforms;let w=0;const P=16;for(let A=0,N=T.length;A<N;A++){const F=Array.isArray(T[A])?T[A]:[T[A]];for(let k=0,H=F.length;k<H;k++){const O=F[k],W=Array.isArray(O.value)?O.value:[O.value];for(let K=0,X=W.length;K<X;K++){const te=W[K],re=_(te),pe=w%P,ve=pe%re.boundary,Oe=pe+ve;w+=ve,Oe!==0&&P-Oe<re.storage&&(w+=P-Oe),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=re.storage}}}const y=w%P;return y>0&&(w+=P-y),b.__size=w,b.__cache={},this}function _(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",b),T}function D(b){const T=b.target;T.removeEventListener("dispose",D);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function C(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:u,update:c,dispose:C}}const Fv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function Ov(){return fi===null&&(fi=new Al(Fv,16,16,Zi,si),fi.name="DFG_LUT",fi.minFilter=Wt,fi.magFilter=Wt,fi.wrapS=En,fi.wrapT=En,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class Bv{constructor(e={}){const{canvas:t=Id(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:m=_n}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const E=m,v=new Set([vo,_o,go]),_=new Set([_n,ri,Qr,es,fo,po]),D=new Uint32Array(4),C=new Int32Array(4),b=new Z;let T=null,w=null;const P=[],y=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1,k=null,H=null,O=null,W=null;this._outputColorSpace=Xt;let K=0,X=0,te=null,re=-1,pe=null;const ve=new Ot,Oe=new Ot;let Ae=null;const pt=new Je(0);let Ye=0,ot=t.width,he=t.height,z=1,G=null,ae=null;const Q=new Ot(0,0,ot,he),se=new Ot(0,0,ot,he);let ce=!1;const de=new Cl;let ye=!1,me=!1;const _e=new ut,Ue=new Z,Te=new Ot,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function lt(){return te===null?z:1}let q=n;function dt(I,$){return t.getContext(I,$)}let we,U,S,ee,j,oe,be,Re,le,xe,Pe,Xe,Ne,Ce,je,et,ct,J,Ie,ge,De,ze,Me;try{const I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Bt,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",bn,!1),q===null){const $="webgl2";if(q=dt($,I),q===null)throw dt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(I){throw t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),rt("WebGLRenderer: "+I.message),I}function Ee(){we=new O_(q),we.init(),De=new Rv(q,we),U=new A_(q,we,e,De),S=new wv(q,we),U.reversedDepthBuffer&&p&&S.buffers.depth.setReversed(!0),H=q.createFramebuffer(),O=q.createFramebuffer(),W=q.createFramebuffer(),ee=new z_(q),j=new fv,oe=new Av(q,we,S,j,U,De,ee),be=new F_(N),Re=new Sm(q),ze=new T_(q,Re),le=new B_(q,Re,ee,ze),xe=new H_(q,le,Re,ze,ee),J=new V_(q,U,oe),je=new R_(j),Pe=new hv(N,be,we,U,ze,je),Xe=new Nv(N,j),Ne=new pv,Ce=new yv(we),ct=new E_(N,be,S,xe,x,u),et=new Tv(N,xe,U),Me=new Uv(q,ee,U,S),Ie=new w_(q,we,ee),ge=new k_(q,we,ee),ee.programs=Pe.programs,N.capabilities=U,N.extensions=we,N.properties=j,N.renderLists=Ne,N.shadowMap=et,N.state=S,N.info=ee}E!==_n&&(A=new W_(E,t.width,t.height,o,r,s));const Ke=new Iv(N,q);this.xr=Ke,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const I=we.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=we.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(I){I!==void 0&&(z=I,this.setSize(ot,he,!1))},this.getSize=function(I){return I.set(ot,he)},this.setSize=function(I,$,ue=!0){if(Ke.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=I,he=$,t.width=Math.floor(I*z),t.height=Math.floor($*z),ue===!0&&(t.style.width=I+"px",t.style.height=$+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(ot*z,he*z).floor()},this.setDrawingBufferSize=function(I,$,ue){ot=I,he=$,z=ue,t.width=Math.floor(I*ue),t.height=Math.floor($*ue),this.setViewport(0,0,I,$)},this.setEffects=function(I){if(E===_n){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let $=0;$<I.length;$++)if(I[$].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(ve)},this.getViewport=function(I){return I.copy(Q)},this.setViewport=function(I,$,ue,ne){I.isVector4?Q.set(I.x,I.y,I.z,I.w):Q.set(I,$,ue,ne),S.viewport(ve.copy(Q).multiplyScalar(z).round())},this.getScissor=function(I){return I.copy(se)},this.setScissor=function(I,$,ue,ne){I.isVector4?se.set(I.x,I.y,I.z,I.w):se.set(I,$,ue,ne),S.scissor(Oe.copy(se).multiplyScalar(z).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(I){S.setScissorTest(ce=I)},this.setOpaqueSort=function(I){G=I},this.setTransparentSort=function(I){ae=I},this.getClearColor=function(I){return I.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(I=!0,$=!0,ue=!0){let ne=0;if(I){let ie=!1;if(te!==null){const Be=te.texture.format;ie=v.has(Be)}if(ie){const Be=te.texture.type,Le=_.has(Be),Fe=ct.getClearColor(),$e=ct.getClearAlpha(),Ze=Fe.r,mt=Fe.g,at=Fe.b;Le?(D[0]=Ze,D[1]=mt,D[2]=at,D[3]=$e,q.clearBufferuiv(q.COLOR,0,D)):(C[0]=Ze,C[1]=mt,C[2]=at,C[3]=$e,q.clearBufferiv(q.COLOR,0,C))}else ne|=q.COLOR_BUFFER_BIT}$&&(ne|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),k=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),ct.dispose(),Ne.dispose(),Ce.dispose(),j.dispose(),be.dispose(),xe.dispose(),ze.dispose(),Me.dispose(),Pe.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Ga),Ke.removeEventListener("sessionend",Wa),On.stop()};function Bt(I){I.preventDefault(),Xs("WebGLRenderer: Context Lost."),F=!0}function Rt(){Xs("WebGLRenderer: Context Restored."),F=!1;const I=ee.autoReset,$=et.enabled,ue=et.autoUpdate,ne=et.needsUpdate,ie=et.type;Ee(),ee.autoReset=I,et.enabled=$,et.autoUpdate=ue,et.needsUpdate=ne,et.type=ie}function bn(I){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Fn(I){const $=I.target;$.removeEventListener("dispose",Fn),Rc($)}function Rc(I){Ls(I),j.remove(I)}function Ls(I){const $=j.get(I).programs;$!==void 0&&($.forEach(function(ue){Pe.releaseProgram(ue)}),I.isShaderMaterial&&Pe.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,ue,ne,ie,Be){$===null&&($=st);const Le=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Fe=Pc(I,$,ue,ne,ie);S.setMaterial(ne,Le);let $e=ue.index,Ze=1;if(ne.wireframe===!0){if($e=le.getWireframeAttribute(ue),$e===void 0)return;Ze=2}const mt=ue.drawRange,at=ue.attributes.position;let He=mt.start*Ze,Ct=(mt.start+mt.count)*Ze;Be!==null&&(He=Math.max(He,Be.start*Ze),Ct=Math.min(Ct,(Be.start+Be.count)*Ze)),$e!==null?(He=Math.max(He,0),Ct=Math.min(Ct,$e.count)):at!=null&&(He=Math.max(He,0),Ct=Math.min(Ct,at.count));const Ht=Ct-He;if(Ht<0||Ht===1/0)return;ze.setup(ie,ne,Fe,ue,$e);let St,Pt=Ie;if($e!==null&&(St=Re.get($e),Pt=ge,Pt.setIndex(St)),ie.isMesh)ne.wireframe===!0?(S.setLineWidth(ne.wireframeLinewidth*lt()),Pt.setMode(q.LINES)):Pt.setMode(q.TRIANGLES);else if(ie.isLine){let nn=ne.linewidth;nn===void 0&&(nn=1),S.setLineWidth(nn*lt()),ie.isLineSegments?Pt.setMode(q.LINES):ie.isLineLoop?Pt.setMode(q.LINE_LOOP):Pt.setMode(q.LINE_STRIP)}else ie.isPoints?Pt.setMode(q.POINTS):ie.isSprite&&Pt.setMode(q.TRIANGLES);if(ie.isBatchedMesh)if(we.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const nn=ie._multiDrawStarts,Ge=ie._multiDrawCounts,bt=ie._multiDrawCount,yt=$e?Re.get($e).bytesPerElement:1,gn=j.get(ne).currentProgram.getUniforms();for(let Bn=0;Bn<bt;Bn++)gn.setValue(q,"_gl_DrawID",Bn),Pt.render(nn[Bn]/yt,Ge[Bn])}else if(ie.isInstancedMesh)Pt.renderInstances(He,Ht,ie.count);else if(ue.isInstancedBufferGeometry){const nn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ge=Math.min(ue.instanceCount,nn);Pt.renderInstances(He,Ht,Ge)}else Pt.render(He,Ht)};function R(I,$,ue,ne){k!==null&&I.isNodeMaterial&&k.setObject(ne,I),ye===!0&&je.setState(I,ue,!1),I.transparent===!0&&I.side===kn&&I.forceSinglePass===!1?(I.side=dn,I.needsUpdate=!0,Xr(I,$,ne),I.side=Di,I.needsUpdate=!0,Xr(I,$,ne),I.side=kn):Xr(I,$,ne)}this.compile=function(I,$,ue=null){ue===null&&(ue=I),k!==null&&k.renderStart(I,$,ue),w=Ce.get(ue),w.init($),y.push(w),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(w.pushLight(ie),ie.castShadow&&w.pushShadow(ie))}),I!==ue&&I.traverseVisible(function(ie){ie.isLight&&ie.layers.test($.layers)&&(w.pushLight(ie),ie.castShadow&&w.pushShadow(ie))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),me=this.localClippingEnabled,ye=je.init(this.clippingPlanes,me),ye===!0&&je.setGlobalState(this.clippingPlanes,$),k!==null&&et.render(w.state.shadowsArray,ue,$);const ne=new Set;return I.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Be=ie.material;if(Be)if(Array.isArray(Be))for(let Le=0;Le<Be.length;Le++){const Fe=Be[Le];R(Fe,ue,$,ie),ne.add(Fe)}else R(Be,ue,$,ie),ne.add(Be)}),w=y.pop(),k!==null&&k.renderEnd(),ne},this.compileAsync=function(I,$,ue=null){const ne=this.compile(I,$,ue);return new Promise(ie=>{function Be(){if(ne.forEach(function(Le){const $e=j.get(Le).currentProgram;($e===void 0||$e.isReady())&&ne.delete(Le)}),ne.size===0){ie(I);return}setTimeout(Be,10)}we.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ar=null;function Tt(I){ar&&ar(I)}function Ga(){On.stop()}function Wa(){On.start()}const On=new dh;On.setAnimationLoop(Tt),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(I){ar=I,Ke.setAnimationLoop(I),I===null?On.stop():On.start()},Ke.addEventListener("sessionstart",Ga),Ke.addEventListener("sessionend",Wa),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(I,$);const ue=Ke.enabled===!0&&Ke.isPresenting===!0,ne=A!==null&&(te===null||ue)&&A.begin(N,te);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera($),$=Ke.getCamera()),I.isScene===!0&&I.onBeforeRender(N,I,$,te),w=Ce.get(I,y.length),w.init($),w.state.textureUnits=oe.getTextureUnits(),y.push(w),_e.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),de.setFromProjectionMatrix(_e,ai,$.reversedDepth),me=this.localClippingEnabled,ye=je.init(this.clippingPlanes,me),T=Ne.get(I,P.length),T.init(),P.push(T),Ke.enabled===!0&&Ke.isPresenting===!0){const Le=N.xr.getDepthSensingMesh();Le!==null&&gi(Le,$,-1/0,N.sortObjects)}gi(I,$,0,N.sortObjects),T.finish(),k!==null&&k.updateLights(w.state.lightsArray),N.sortObjects===!0&&T.sort(G,ae),tt=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,tt&&ct.addToRenderList(T,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&je.beginShadows();const ie=w.state.shadowsArray;if(et.render(ie,I,$),ye===!0&&je.endShadows(),(ne&&A.hasRenderPass())===!1){const Le=T.opaque,Fe=T.transmissive;if(w.setupLights(),$.isArrayCamera){const $e=$.cameras;if(Fe.length>0)for(let Ze=0,mt=$e.length;Ze<mt;Ze++){const at=$e[Ze];qa(Le,Fe,I,at)}tt&&ct.render(I);for(let Ze=0,mt=$e.length;Ze<mt;Ze++){const at=$e[Ze];Xa(T,I,at,at.viewport)}}else Fe.length>0&&qa(Le,Fe,I,$),tt&&ct.render(I),Xa(T,I,$)}te!==null&&X===0&&(oe.updateMultisampleRenderTarget(te),oe.updateRenderTargetMipmap(te)),ne&&A.end(N),I.isScene===!0&&I.onAfterRender(N,I,$),ze.resetDefaultState(),re=-1,pe=null,y.pop(),y.length>0?(w=y[y.length-1],oe.setTextureUnits(w.state.textureUnits),ye===!0&&je.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,k!==null&&k.renderEnd()};function gi(I,$,ue,ne){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)ue=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLightProbeGrid)w.pushLightProbeGrid(I);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(de)){ne&&Te.setFromMatrixPosition(I.matrixWorld).applyMatrix4(_e);const Le=xe.update(I),Fe=I.material;Fe.visible&&T.push(I,Le,Fe,ue,Te.z,null,$)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(de))){const Le=xe.update(I),Fe=I.material;if(ne&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Te.copy(I.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Te.copy(Le.boundingSphere.center)),Te.applyMatrix4(I.matrixWorld).applyMatrix4(_e)),Array.isArray(Fe)){const $e=Le.groups;for(let Ze=0,mt=$e.length;Ze<mt;Ze++){const at=$e[Ze],He=Fe[at.materialIndex];He&&He.visible&&T.push(I,Le,He,ue,Te.z,at,$)}}else Fe.visible&&T.push(I,Le,Fe,ue,Te.z,null,$)}}const Be=I.children;for(let Le=0,Fe=Be.length;Le<Fe;Le++)gi(Be[Le],$,ue,ne)}function Xa(I,$,ue,ne){const{opaque:ie,transmissive:Be,transparent:Le}=I;w.setupLightsView(ue),ye===!0&&je.setGlobalState(N.clippingPlanes,ue),ne&&S.viewport(ve.copy(ne)),ie.length>0&&Wr(ie,$,ue),Be.length>0&&Wr(Be,$,ue),Le.length>0&&Wr(Le,$,ue),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function qa(I,$,ue,ne){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ne.id]===void 0){const He=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ne.id]=new Gn(1,1,{generateMipmaps:!0,type:He?si:_n,minFilter:zn,samples:Math.max(4,U.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Be=w.state.transmissionRenderTarget[ne.id],Le=ne.viewport||ve;Be.setSize(Le.z*N.transmissionResolutionScale,Le.w*N.transmissionResolutionScale);const Fe=N.getRenderTarget(),$e=N.getActiveCubeFace(),Ze=N.getActiveMipmapLevel();N.setRenderTarget(Be),N.getClearColor(pt),Ye=N.getClearAlpha(),Ye<1&&N.setClearColor(16777215,.5),N.clear(),tt&&ct.render(ue);const mt=N.toneMapping;N.toneMapping=ni;const at=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),w.setupLightsView(ne),ye===!0&&je.setGlobalState(N.clippingPlanes,ne),Wr(I,ue,ne),oe.updateMultisampleRenderTarget(Be),oe.updateRenderTargetMipmap(Be),we.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ct=0,Ht=$.length;Ct<Ht;Ct++){const St=$[Ct],{object:Pt,geometry:nn,material:Ge,group:bt}=St;if(Ge.side===kn&&Pt.layers.test(ne.layers)){const yt=Ge.side;Ge.side=dn,Ge.needsUpdate=!0,$a(Pt,ue,ne,nn,Ge,bt),Ge.side=yt,Ge.needsUpdate=!0,He=!0}}He===!0&&(oe.updateMultisampleRenderTarget(Be),oe.updateRenderTargetMipmap(Be))}N.setRenderTarget(Fe,$e,Ze),N.setClearColor(pt,Ye),at!==void 0&&(ne.viewport=at),N.toneMapping=mt}function Wr(I,$,ue){const ne=$.isScene===!0?$.overrideMaterial:null;for(let ie=0,Be=I.length;ie<Be;ie++){const Le=I[ie],{object:Fe,geometry:$e,group:Ze}=Le;let mt=Le.material;mt.allowOverride===!0&&ne!==null&&(mt=ne),Fe.layers.test(ue.layers)&&$a(Fe,$,ue,$e,mt,Ze)}}function $a(I,$,ue,ne,ie,Be){k!==null&&ie.isNodeMaterial&&k.setObject(I,ie),I.onBeforeRender(N,$,ue,ne,ie,Be),I.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ie.onBeforeRender(N,$,ue,ne,I,Be),ie.transparent===!0&&ie.side===kn&&ie.forceSinglePass===!1?(ie.side=dn,ie.needsUpdate=!0,N.renderBufferDirect(ue,$,ne,ie,I,Be),ie.side=Di,ie.needsUpdate=!0,N.renderBufferDirect(ue,$,ne,ie,I,Be),ie.side=kn):N.renderBufferDirect(ue,$,ne,ie,I,Be),I.onAfterRender(N,$,ue,ne,ie,Be)}function Xr(I,$,ue){$.isScene!==!0&&($=st);const ne=j.get(I),ie=w.state.lights,Be=w.state.shadowsArray,Le=ie.state.version,Fe=Pe.getParameters(I,ie.state,Be,$,ue,w.state.lightProbeGridArray),$e=Pe.getProgramCacheKey(Fe);let Ze=ne.programs;ne.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?$.environment:null,ne.fog=$.fog;const mt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ne.envMap=be.get(I.envMap||ne.environment,mt),ne.envMapRotation=ne.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,Ze===void 0&&(I.addEventListener("dispose",Fn),Ze=new Map,ne.programs=Ze);let at=Ze.get($e);if(at!==void 0){if(ne.currentProgram===at&&ne.lightsStateVersion===Le)return Ka(I,Fe),at}else Fe.uniforms=Pe.getUniforms(I),k!==null&&I.isNodeMaterial&&k.build(I,ue,Fe),I.onBeforeCompile(Fe,N),at=Pe.acquireProgram(Fe,$e),Ze.set($e,at),ne.uniforms=Fe.uniforms;const He=ne.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(He.clippingPlanes=je.uniform),Ka(I,Fe),ne.needsLights=Ic(I),ne.lightsStateVersion=Le,ne.needsLights&&(He.ambientLightColor.value=ie.state.ambient,He.lightProbe.value=ie.state.probe,He.sunLights.value=ie.state.sun,He.sunLightShadows.value=ie.state.sunShadow,He.directionalLights.value=ie.state.directional,He.directionalLightShadows.value=ie.state.directionalShadow,He.spotLights.value=ie.state.spot,He.spotLightShadows.value=ie.state.spotShadow,He.rectAreaLights.value=ie.state.rectArea,He.ltc_1.value=ie.state.rectAreaLTC1,He.ltc_2.value=ie.state.rectAreaLTC2,He.pointLights.value=ie.state.point,He.pointLightShadows.value=ie.state.pointShadow,He.hemisphereLights.value=ie.state.hemi,He.sunShadowMatrix.value=ie.state.sunShadowMatrix,He.sunShadowCascade.value=ie.state.sunShadowCascade,He.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,He.spotLightMatrix.value=ie.state.spotLightMatrix,He.spotLightMap.value=ie.state.spotLightMap,He.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=w.state.lightProbeGridArray.length>0,ne.currentProgram=at,ne.uniformsList=null,at}function Ya(I){if(I.uniformsList===null){const $=I.currentProgram.getUniforms();I.uniformsList=Ia.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function Ka(I,$){const ue=j.get(I);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Cc(I,$){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;b.setFromMatrixPosition($.matrixWorld);for(let ue=0,ne=I.length;ue<ne;ue++){const ie=I[ue];if(ie.texture!==null&&ie.boundingBox.containsPoint(b))return ie}return null}function Pc(I,$,ue,ne,ie){$.isScene!==!0&&($=st),oe.resetTextureUnits();const Be=$.fog,Le=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?$.environment:null,Fe=te===null?N.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:xt.workingColorSpace,$e=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ze=be.get(ne.envMap||Le,$e),mt=ne.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,at=!!ue.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),He=!!ue.morphAttributes.position,Ct=!!ue.morphAttributes.normal,Ht=!!ue.morphAttributes.color;let St=ni;ne.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(St=N.toneMapping);const Pt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,nn=Pt!==void 0?Pt.length:0,Ge=j.get(ne),bt=w.state.lights;if(ye===!0&&(me===!0||I!==pe)){const Ft=I===pe&&ne.id===re;je.setState(ne,I,Ft)}let yt=!1;ne.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==bt.state.version||Ge.outputColorSpace!==Fe||ie.isBatchedMesh&&Ge.batching===!1||!ie.isBatchedMesh&&Ge.batching===!0||ie.isBatchedMesh&&Ge.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Ge.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Ge.instancing===!1||!ie.isInstancedMesh&&Ge.instancing===!0||ie.isSkinnedMesh&&Ge.skinning===!1||!ie.isSkinnedMesh&&Ge.skinning===!0||ie.isInstancedMesh&&Ge.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ge.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ge.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ge.instancingMorph===!1&&ie.morphTexture!==null||Ge.envMap!==Ze||ne.fog===!0&&Ge.fog!==Be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==je.numPlanes||Ge.numIntersection!==je.numIntersection)||Ge.vertexAlphas!==mt||Ge.vertexTangents!==at||Ge.morphTargets!==He||Ge.morphNormals!==Ct||Ge.morphColors!==Ht||Ge.toneMapping!==St||Ge.morphTargetsCount!==nn||!!Ge.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ge.__version=ne.version);let gn=Ge.currentProgram;yt===!0&&(gn=Xr(ne,$,ie),k&&ne.isNodeMaterial&&k.onUpdateProgram(ne,gn,Ge));let Bn=!1,_i=!1,qi=!1;const wt=gn.getUniforms(),Gt=Ge.uniforms;if(S.useProgram(gn.program)&&(Bn=!0,_i=!0,qi=!0),ne.id!==re&&(re=ne.id,_i=!0),Ge.needsLights){const Ft=Cc(w.state.lightProbeGridArray,ie);Ge.lightProbeGrid!==Ft&&(Ge.lightProbeGrid=Ft,_i=!0)}if(Bn||pe!==I){S.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),wt.setValue(q,"projectionMatrix",I.projectionMatrix),wt.setValue(q,"viewMatrix",I.matrixWorldInverse);const vi=wt.map.cameraPosition;vi!==void 0&&vi.setValue(q,Ue.setFromMatrixPosition(I.matrixWorld)),U.logarithmicDepthBuffer&&wt.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&wt.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),pe!==I&&(pe=I,_i=!0,qi=!0)}if(Ge.needsLights&&(bt.state.sunShadowMap.length>0&&wt.setValue(q,"sunShadowMap",bt.state.sunShadowMap,oe),bt.state.directionalShadowMap.length>0&&wt.setValue(q,"directionalShadowMap",bt.state.directionalShadowMap,oe),bt.state.spotShadowMap.length>0&&wt.setValue(q,"spotShadowMap",bt.state.spotShadowMap,oe),bt.state.pointShadowMap.length>0&&wt.setValue(q,"pointShadowMap",bt.state.pointShadowMap,oe)),ie.isSkinnedMesh){wt.setOptional(q,ie,"bindMatrix"),wt.setOptional(q,ie,"bindMatrixInverse");const Ft=ie.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),wt.setValue(q,"boneTexture",Ft.boneTexture,oe))}ie.isBatchedMesh&&(wt.setOptional(q,ie,"batchingTexture"),wt.setValue(q,"batchingTexture",ie._matricesTexture,oe),wt.setOptional(q,ie,"batchingIdTexture"),wt.setValue(q,"batchingIdTexture",ie._indirectTexture,oe),wt.setOptional(q,ie,"batchingColorTexture"),ie._colorsTexture!==null&&wt.setValue(q,"batchingColorTexture",ie._colorsTexture,oe));const Qn=ue.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&J.update(ie,ue,gn),(_i||Ge.receiveShadow!==ie.receiveShadow)&&(Ge.receiveShadow=ie.receiveShadow,wt.setValue(q,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&$.environment!==null&&(Gt.envMapIntensity.value=$.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Ov()),_i){if(wt.setValue(q,"toneMappingExposure",N.toneMappingExposure),Ge.needsLights&&Lc(Gt,qi),Be&&ne.fog===!0&&Xe.refreshFogUniforms(Gt,Be),Xe.refreshMaterialUniforms(Gt,ne,z,he,w.state.transmissionRenderTarget[I.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ft=Ge.lightProbeGrid;Gt.probesSH.value=Ft.texture,Gt.probesMin.value.copy(Ft.boundingBox.min),Gt.probesMax.value.copy(Ft.boundingBox.max),Gt.probesResolution.value.copy(Ft.resolution)}Ia.upload(q,Ya(Ge),Gt,oe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ia.upload(q,Ya(Ge),Gt,oe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&wt.setValue(q,"center",ie.center),wt.setValue(q,"modelViewMatrix",ie.modelViewMatrix),wt.setValue(q,"normalMatrix",ie.normalMatrix),wt.setValue(q,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Ft=ne.uniformsGroups;for(let vi=0,$i=Ft.length;vi<$i;vi++){const Za=Ft[vi];Me.update(Za,gn),Me.bind(Za,gn)}}return gn}function Lc(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.sunLights.needsUpdate=$,I.sunLightShadows.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function Ic(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(I,$,ue){const ne=j.get(I);ne.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),j.get(I.texture).__webglTexture=$,j.get(I.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ue,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,$){const ue=j.get(I);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,ue=0){te=I,K=$,X=ue;let ne=null,ie=!1,Be=!1;if(I){const Fe=j.get(I);if(Fe.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(q.FRAMEBUFFER,Fe.__webglFramebuffer),ve.copy(I.viewport),Oe.copy(I.scissor),Ae=I.scissorTest,S.viewport(ve),S.scissor(Oe),S.setScissorTest(Ae),re=-1;return}else if(Fe.__webglFramebuffer===void 0)oe.setupRenderTarget(I);else if(Fe.__hasExternalTextures)oe.rebindTextures(I,j.get(I.texture).__webglTexture,j.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const mt=I.depthTexture;if(Fe.__boundDepthTexture!==mt){if(mt!==null&&j.has(mt)&&(I.width!==mt.image.width||I.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(I)}}const $e=I.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Be=!0);const Ze=j.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?ne=Ze[$][ue]:ne=Ze[$],ie=!0):I.samples>0&&oe.useMultisampledRTT(I)===!1?ne=j.get(I).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[ue]:ne=Ze,ve.copy(I.viewport),Oe.copy(I.scissor),Ae=I.scissorTest}else ve.copy(Q).multiplyScalar(z).floor(),Oe.copy(se).multiplyScalar(z).floor(),Ae=ce;if(ue!==0&&(ne=H),S.bindFramebuffer(q.FRAMEBUFFER,ne)&&S.drawBuffers(I,ne),S.viewport(ve),S.scissor(Oe),S.setScissorTest(Ae),ie){const Fe=j.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe.__webglTexture,ue)}else if(Be){const Fe=$;for(let $e=0;$e<I.textures.length;$e++){const Ze=j.get(I.textures[$e]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+$e,Ze.__webglTexture,ue,Fe)}}else if(I!==null&&ue!==0){const Fe=j.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Fe.__webglTexture,ue)}re=-1};function ja(I){const $=j.get(I);return($.__readFormat!==I.format||$.__readType!==I.type)&&($.__readFormat=I.format,$.__readType=I.type,$.__formatReadable=U.textureFormatReadable(I.format),$.__typeReadable=U.textureTypeReadable(I.type)),$}this.readRenderTargetPixels=function(I,$,ue,ne,ie,Be,Le,Fe=0){if(!(I&&I.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=j.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Le!==void 0&&($e=$e[Le]),$e){S.bindFramebuffer(q.FRAMEBUFFER,$e);try{const Ze=I.textures[Fe],mt=Ze.format,at=Ze.type;I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe);const He=ja(Ze);if(He.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-ne&&ue>=0&&ue<=I.height-ie&&q.readPixels($,ue,ne,ie,De.convert(mt),De.convert(at),Be)}finally{const Ze=te!==null?j.get(te).__webglFramebuffer:null;S.bindFramebuffer(q.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(I,$,ue,ne,ie,Be,Le,Fe=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=j.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Le!==void 0&&($e=$e[Le]),$e)if($>=0&&$<=I.width-ne&&ue>=0&&ue<=I.height-ie){S.bindFramebuffer(q.FRAMEBUFFER,$e);const Ze=I.textures[Fe],mt=Ze.format,at=Ze.type;I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe);const He=ja(Ze);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ct),q.bufferData(q.PIXEL_PACK_BUFFER,Be.byteLength,q.STREAM_READ),q.readPixels($,ue,ne,ie,De.convert(mt),De.convert(at),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Ht=te!==null?j.get(te).__webglFramebuffer:null;S.bindFramebuffer(q.FRAMEBUFFER,Ht);const St=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Dd(q,St,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ct),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Be),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Ct),q.deleteSync(St),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,$=null,ue=0){const ne=Math.pow(2,-ue),ie=Math.floor(I.image.width*ne),Be=Math.floor(I.image.height*ne),Le=$!==null?$.x:0,Fe=$!==null?$.y:0;oe.setTexture2D(I,0),q.copyTexSubImage2D(q.TEXTURE_2D,ue,0,0,Le,Fe,ie,Be),S.unbindTexture()},this.copyTextureToTexture=function(I,$,ue=null,ne=null,ie=0,Be=0){let Le,Fe,$e,Ze,mt,at,He,Ct,Ht;const St=I.isCompressedTexture?I.mipmaps[Be]:I.image;if(ue!==null)Le=ue.max.x-ue.min.x,Fe=ue.max.y-ue.min.y,$e=ue.isBox3?ue.max.z-ue.min.z:1,Ze=ue.min.x,mt=ue.min.y,at=ue.isBox3?ue.min.z:0;else{const Gt=Math.pow(2,-ie);Le=Math.floor(St.width*Gt),Fe=Math.floor(St.height*Gt),I.isDataArrayTexture?$e=St.depth:I.isData3DTexture?$e=Math.floor(St.depth*Gt):$e=1,Ze=0,mt=0,at=0}ne!==null?(He=ne.x,Ct=ne.y,Ht=ne.z):(He=0,Ct=0,Ht=0);const Pt=De.convert($.format),nn=De.convert($.type);let Ge;$.isData3DTexture?(oe.setTexture3D($,0),Ge=q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(oe.setTexture2DArray($,0),Ge=q.TEXTURE_2D_ARRAY):(oe.setTexture2D($,0),Ge=q.TEXTURE_2D),S.activeTexture(q.TEXTURE0),S.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),S.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),S.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment);const bt=S.getParameter(q.UNPACK_ROW_LENGTH),yt=S.getParameter(q.UNPACK_IMAGE_HEIGHT),gn=S.getParameter(q.UNPACK_SKIP_PIXELS),Bn=S.getParameter(q.UNPACK_SKIP_ROWS),_i=S.getParameter(q.UNPACK_SKIP_IMAGES);S.pixelStorei(q.UNPACK_ROW_LENGTH,St.width),S.pixelStorei(q.UNPACK_IMAGE_HEIGHT,St.height),S.pixelStorei(q.UNPACK_SKIP_PIXELS,Ze),S.pixelStorei(q.UNPACK_SKIP_ROWS,mt),S.pixelStorei(q.UNPACK_SKIP_IMAGES,at);const qi=I.isDataArrayTexture||I.isData3DTexture,wt=$.isDataArrayTexture||$.isData3DTexture;if(I.isDepthTexture){const Gt=j.get(I),Qn=j.get($),Ft=j.get(Gt.__renderTarget),vi=j.get(Qn.__renderTarget);S.bindFramebuffer(q.READ_FRAMEBUFFER,Ft.__webglFramebuffer),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let $i=0;$i<$e;$i++)qi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,j.get(I).__webglTexture,ie,at+$i),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,j.get($).__webglTexture,Be,Ht+$i)),q.blitFramebuffer(Ze,mt,Le,Fe,He,Ct,Le,Fe,q.DEPTH_BUFFER_BIT,q.NEAREST);S.bindFramebuffer(q.READ_FRAMEBUFFER,null),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ie!==0||I.isRenderTargetTexture||j.has(I)){const Gt=j.get(I),Qn=j.get($);S.bindFramebuffer(q.READ_FRAMEBUFFER,O),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,W);for(let Ft=0;Ft<$e;Ft++)qi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Gt.__webglTexture,ie,at+Ft):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Gt.__webglTexture,ie),wt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Qn.__webglTexture,Be,Ht+Ft):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Qn.__webglTexture,Be),ie!==0?q.blitFramebuffer(Ze,mt,Le,Fe,He,Ct,Le,Fe,q.COLOR_BUFFER_BIT,q.NEAREST):wt?q.copyTexSubImage3D(Ge,Be,He,Ct,Ht+Ft,Ze,mt,Le,Fe):q.copyTexSubImage2D(Ge,Be,He,Ct,Ze,mt,Le,Fe);S.bindFramebuffer(q.READ_FRAMEBUFFER,null),S.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else wt?I.isDataTexture||I.isData3DTexture?q.texSubImage3D(Ge,Be,He,Ct,Ht,Le,Fe,$e,Pt,nn,St.data):$.isCompressedArrayTexture?q.compressedTexSubImage3D(Ge,Be,He,Ct,Ht,Le,Fe,$e,Pt,St.data):q.texSubImage3D(Ge,Be,He,Ct,Ht,Le,Fe,$e,Pt,nn,St):I.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Be,He,Ct,Le,Fe,Pt,nn,St.data):I.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Be,He,Ct,St.width,St.height,Pt,St.data):q.texSubImage2D(q.TEXTURE_2D,Be,He,Ct,Le,Fe,Pt,nn,St);S.pixelStorei(q.UNPACK_ROW_LENGTH,bt),S.pixelStorei(q.UNPACK_IMAGE_HEIGHT,yt),S.pixelStorei(q.UNPACK_SKIP_PIXELS,gn),S.pixelStorei(q.UNPACK_SKIP_ROWS,Bn),S.pixelStorei(q.UNPACK_SKIP_IMAGES,_i),Be===0&&$.generateMipmaps&&q.generateMipmap(Ge),S.unbindTexture()},this.initRenderTarget=function(I){j.get(I).__webglFramebuffer===void 0&&oe.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?oe.setTextureCube(I,0):I.isData3DTexture?oe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?oe.setTexture2DArray(I,0):oe.setTexture2D(I,0),S.unbindTexture()},this.resetState=function(){K=0,X=0,te=null,S.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Gh={type:"change"},Kl={type:"start"},Wh={type:"end"},Na=new us,Xh=new Ri,kv=Math.cos(70*_u.DEG2RAD),Qt=new Z,mn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jl=1e-6;class zv extends ym{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new An,this._lastTargetPosition=new Z,this._quat=new An().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uh,this._sphericalDelta=new uh,this._scale=1,this._panOffset=new Z,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new Z,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hv.bind(this),this._onPointerDown=Vv.bind(this),this._onPointerUp=Gv.bind(this),this._onContextMenu=jv.bind(this),this._onMouseWheel=qv.bind(this),this._onKeyDown=$v.bind(this),this._onTouchStart=Yv.bind(this),this._onTouchMove=Kv.bind(this),this._onMouseDown=Wv.bind(this),this._onMouseMove=Xv.bind(this),this._interceptControlDown=Zv.bind(this),this._interceptControlUp=Jv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ut.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gh),this.update(),this.state=Ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),r<-Math.PI?r+=mn:r>Math.PI&&(r-=mn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Qt.length();a=this._clampDistance(o*this._scale);const u=o-a;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Na.origin.copy(this.object.position),Na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Na.direction))<kv?this.object.lookAt(this.target):(Xh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Na.intersectPlane(Xh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jl||this._lastTargetPosition.distanceToSquared(this.target)>jl?(this.dispatchEvent(Gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Qt.copy(r).sub(this.target);let s=Qt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Vv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Hv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Gv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wh),this.state=Ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Wv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ut.DOLLY;break;case or.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ut.ROTATE}break;case or.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(Kl)}function Xv(i){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(i.preventDefault(),this.dispatchEvent(Kl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wh))}function $v(i){this.enabled!==!1&&this._handleKeyDown(i)}function Yv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ut.TOUCH_ROTATE;break;case lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ut.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(Kl)}function Kv(i){switch(this._trackPointer(i),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ut.NONE}}function jv(i){this.enabled!==!1&&i.preventDefault()}function Zv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qv(){return typeof document>"u"?!0:document.documentElement.getAttribute("data-theme")==="dark"||document.body.classList.contains("theme--dark")||document.body.classList.contains("theme-dark")||window.matchMedia("(prefers-color-scheme: dark)").matches}function ex(i){const e=i.clientWidth||800,t=i.clientHeight||600,n=e/t,r=new up,s=new Ss(-n,n,1,-1,-500,1e3);s.position.set(.2,.2,.25);const a=new Bv({antialias:!0,alpha:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});a.setSize(e,t),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.outputColorSpace=Xt,i.appendChild(a.domElement);const o=new am(16777215,.85);r.add(o);const u=new em(16777215,6583435,.9);u.position.set(0,20,0),r.add(u);const c=new Ra(16777215,1.1);c.position.set(10,10,10),r.add(c);const f=new Ra(14739455,.55);f.position.set(6,10,8),r.add(f);const d=new Ra(15857145,.45);d.position.set(-8,-4,-8),r.add(d);const p=new xm(1,20,3359061,1976635);p.position.y=-.001,r.add(p);const m=new zv(s,a.domElement);m.enableDamping=!0,m.dampingFactor=.08,m.screenSpacePanning=!0,m.zoomToCursor=!0;let x=!0,E=null;const v=new Map;m.addEventListener("change",()=>{x=!0}),m.addEventListener("start",()=>{a.setPixelRatio(1)}),m.addEventListener("end",()=>{a.setPixelRatio(Math.min(window.devicePixelRatio,2)),x=!0});function _(){const A=Qv();r.background=new Je(A?"#0f172a":"#f1f5f9"),p.material.dispose(),p.material=new zi({color:A?3359061:9741240,transparent:!0,opacity:A?.6:.4}),u.groundColor.setHex(A?6583435:14870768),x=!0}_();const D=new MutationObserver(_);D.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","class"]}),D.observe(document.body,{attributes:!0,attributeFilter:["class"]});const C=()=>{E=requestAnimationFrame(C),(m.update()||x)&&(x=!1,a.render(r,s))};C();const b=new ResizeObserver(A=>{for(const N of A){const{width:F,height:k}=N.contentRect;if(F>0&&k>0){const H=F/k,W=(s.top-s.bottom)*H/2;s.left=-W,s.right=W,s.updateProjectionMatrix(),a.setSize(F,k),x=!0}}});b.observe(i);let T=new $n;function w(A){const N=A.getCenter(new Z),F=A.getSize(new Z),k=Math.max(F.x,F.y,F.z);if(k===0)return;const H=(i.clientWidth||800)/(i.clientHeight||600),O=k*1.8,W=O/2,K=W*H;s.left=-K,s.right=K,s.top=W,s.bottom=-W,s.near=-O*10,s.far=O*20,s.zoom=1,s.updateProjectionMatrix();const X=new Z(1,1,1).normalize();s.position.copy(N).addScaledVector(X,O),m.target.copy(N),m.minDistance=Math.max(O/250,2e-4),m.maxDistance=O*20,m.update(),p.position.y=A.min.y-1e-4;const te=Math.max(Math.max(F.x,F.z)*3,.01);p.scale.set(te,te,te),x=!0}function P(A){v.forEach(N=>{r.remove(N),Array.isArray(N.material)?N.material.forEach(F=>F.dispose()):N.material.dispose()}),v.clear(),T=new $n,A.forEach(N=>{const F=parseInt(N.metadata.color.replace("#",""),16)||9416591,k=N.metadata.opacity??1,H=k<.99,O=new vs({color:F,roughness:.38,metalness:0,transparent:H,opacity:k,depthWrite:k>=.95,side:kn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),W=new $t(N.geometry,O);if(W.name=N.metadata.id,N.metadata.transform&&N.metadata.transform.length===16){const K=new ut().fromArray(N.metadata.transform);W.applyMatrix4(K)}if(N.edgeGeometry){const K=new zi({color:988970,linewidth:1,transparent:!1,depthTest:!0}),X=new ms(N.edgeGeometry,K);W.add(X)}if(r.add(W),v.set(N.metadata.id,W),W.geometry.computeBoundingBox(),W.geometry.boundingBox){const K=W.geometry.boundingBox.clone();K.applyMatrix4(W.matrix),T.union(K)}}),T.isEmpty()||w(T),x=!0}function y(){D.disconnect(),b.disconnect(),E&&cancelAnimationFrame(E),m.dispose(),a.dispose(),p.geometry.dispose(),p.material.dispose(),i.contains(a.domElement)&&i.removeChild(a.domElement)}return{dispose:y,updateBodies:P,fitToScreen:()=>{T.isEmpty()||w(T)}}}var qh={},tx=(function(i,e,t,n,r){var s=new Worker(qh[e]||(qh[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,u=o.$e$;if(u){var c=new Error(u[0]);c.code=u[1],c.stack=u[2],r(c,null)}else r(null,o)},s.postMessage(t,n),s}),fn=Uint8Array,rr=Uint16Array,$h=Int32Array,Zl=new fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Jl=new fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Yh=new fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kh=function(i,e){for(var t=new rr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new $h(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},jh=Kh(Zl,2),Ql=jh.b,nx=jh.r;Ql[28]=258,nx[258]=28;for(var ix=Kh(Jl,0),Zh=ix.b,Ua=new rr(32768),kt=0;kt<32768;++kt){var Gi=(kt&43690)>>1|(kt&21845)<<1;Gi=(Gi&52428)>>2|(Gi&13107)<<2,Gi=(Gi&61680)>>4|(Gi&3855)<<4,Ua[kt]=((Gi&65280)>>8|(Gi&255)<<8)>>1}for(var zr=(function(i,e,t){for(var n=i.length,r=0,s=new rr(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new rr(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new rr(1<<e);var u=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],f=e-i[r],d=a[i[r]-1]++<<f,p=d|(1<<f)-1;d<=p;++d)o[Ua[d]>>u]=c}else for(o=new rr(n),r=0;r<n;++r)i[r]&&(o[r]=Ua[a[i[r]-1]++]>>15-i[r]);return o}),As=new fn(288),kt=0;kt<144;++kt)As[kt]=8;for(var kt=144;kt<256;++kt)As[kt]=9;for(var kt=256;kt<280;++kt)As[kt]=7;for(var kt=280;kt<288;++kt)As[kt]=8;for(var Jh=new fn(32),kt=0;kt<32;++kt)Jh[kt]=5;var Qh=zr(As,9,1),ef=zr(Jh,5,1),Fa=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Ln=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Oa=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},tf=function(i){return(i+7)/8|0},Ba=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new fn(i.subarray(e,t))},nf=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],cn=function(i,e,t){var n=new Error(e||nf[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,cn),!t)throw n;return n},rf=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new fn(0);var a=!t,o=a||e.i!=2,u=e.i;a&&(t=new fn(r*3));var c=function(Q){var se=t.length;if(Q>se){var ce=new fn(Math.max(se*2,Q));ce.set(t),t=ce}},f=e.f||0,d=e.p||0,p=e.b||0,m=e.l,x=e.d,E=e.m,v=e.n,_=r*8;do{if(!m){f=Ln(i,d,1);var D=Ln(i,d+1,3);if(d+=3,D)if(D==1)m=Qh,x=ef,E=9,v=5;else if(D==2){var w=Ln(i,d,31)+257,P=Ln(i,d+10,15)+4,y=w+Ln(i,d+5,31)+1;d+=14;for(var A=new fn(y),N=new fn(19),F=0;F<P;++F)N[Yh[F]]=Ln(i,d+F*3,7);d+=P*3;for(var k=Fa(N),H=(1<<k)-1,O=zr(N,k,1),F=0;F<y;){var W=O[Ln(i,d,H)];d+=W&15;var C=W>>4;if(C<16)A[F++]=C;else{var K=0,X=0;for(C==16?(X=3+Ln(i,d,3),d+=2,K=A[F-1]):C==17?(X=3+Ln(i,d,7),d+=3):C==18&&(X=11+Ln(i,d,127),d+=7);X--;)A[F++]=K}}var te=A.subarray(0,w),re=A.subarray(w);E=Fa(te),v=Fa(re),m=zr(te,E,1),x=zr(re,v,1)}else cn(1);else{var C=tf(d)+4,b=i[C-4]|i[C-3]<<8,T=C+b;if(T>r){u&&cn(0);break}o&&c(p+b),t.set(i.subarray(C,T),p),e.b=p+=b,e.p=d=T*8,e.f=f;continue}if(d>_){u&&cn(0);break}}o&&c(p+131072);for(var pe=(1<<E)-1,ve=(1<<v)-1,Oe=d;;Oe=d){var K=m[Oa(i,d)&pe],Ae=K>>4;if(d+=K&15,d>_){u&&cn(0);break}if(K||cn(2),Ae<256)t[p++]=Ae;else if(Ae==256){Oe=d,m=null;break}else{var pt=Ae-254;if(Ae>264){var F=Ae-257,Ye=Zl[F];pt=Ln(i,d,(1<<Ye)-1)+Ql[F],d+=Ye}var ot=x[Oa(i,d)&ve],he=ot>>4;ot||cn(3),d+=ot&15;var re=Zh[he];if(he>3){var Ye=Jl[he];re+=Oa(i,d)&(1<<Ye)-1,d+=Ye}if(d>_){u&&cn(0);break}o&&c(p+131072);var z=p+pt;if(p<re){var G=s-re,ae=Math.min(re,z);for(G+p<0&&cn(3);p<ae;++p)t[p]=n[G+p]}for(;p<z;++p)t[p]=t[p-re]}}e.l=m,e.p=Oe,e.b=p,e.f=f,m&&(f=1,e.m=E,e.d=x,e.n=v)}while(!f);return p!=t.length&&a?Ba(t,0,p):t.subarray(0,p)},rx=new fn(0),sx=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},sf=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],u=s[a];if(typeof o=="function"){e+=";"+u+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var f=c.indexOf(" ",8)+1;e+=c.slice(f,c.indexOf("(",f))}else{e+=c;for(var d in o.prototype)e+=";"+u+".prototype."+d+"="+o.prototype[d].toString()}else e+=c}else t[u]=o}return e},ka=[],ax=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},ox=function(i,e,t,n){if(!ka[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=sf(i[o],r,s);ka[t]={c:sf(i[a],r,s),e:s}}var u=sx({},ka[t].e);return tx(ka[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,u,ax(u),n)},lx=function(){return[fn,rr,$h,Zl,Jl,Yh,Ql,Zh,Qh,ef,Ua,nf,zr,Fa,Ln,Oa,tf,Ba,cn,rf,tc,af,of]},af=function(i){return postMessage(i,[i.buffer])},of=function(i){return i&&{out:i.size&&new fn(i.size),dictionary:i.dictionary}},cx=function(i,e,t,n,r,s){var a=ox(t,n,r,function(o,u){a.terminate(),s(o,u)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},di=function(i,e){return i[e]|i[e+1]<<8},In=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},ec=function(i,e){return In(i,e)+In(i,e+4)*4294967296};function ux(i,e,t){return t||(t=e,e={}),typeof t!="function"&&cn(7),cx(i,e,[lx],function(n){return af(tc(n.data[0],of(n.data[1])))},1,t)}function tc(i,e){return rf(i,{i:2},e&&e.out,e&&e.dictionary)}var nc=typeof TextDecoder<"u"&&new TextDecoder,hx=0;try{nc.decode(rx,{stream:!0}),hx=1}catch{}var fx=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Ba(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function za(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(nc)return nc.decode(i);var r=fx(i),s=r.s,t=r.r;return t.length&&cn(8),s}}var dx=function(i,e){return e+30+di(i,e+26)+di(i,e+28)},px=function(i,e,t){var n=di(i,e+28),r=di(i,e+30),s=za(i.subarray(e+46,e+46+n),!(di(i,e+8)&2048)),a=e+46+n,o=mx(i,a,r,t,In(i,e+20),In(i,e+24),In(i,e+42)),u=o[0],c=o[1],f=o[2];return[di(i,e+10),u,c,s,a+r+di(i,e+32),f]},mx=function(i,e,t,n,r,s,a){var o=r==4294967295,u=s==4294967295,c=a==4294967295,f=e+t,d=o+u+c;if(n&&d){for(;e+4<f;e+=4+di(i,e+2))if(di(i,e)==1)return[o?ec(i,e+4+8*u):r,u?ec(i,e+4):s,c?ec(i,e+4+8*(u+o)):a,1];n<2&&cn(13)}return[r,s,a,0]},lf=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()};function gx(i,e,t){t||(t=e,e={}),typeof t!="function"&&cn(7);var n=[],r=function(){for(var v=0;v<n.length;++v)n[v]()},s={},a=function(v,_){lf(function(){t(v,_)})};lf(function(){a=t});for(var o=i.length-22;In(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(cn(13,0,1),null),r;var u=di(i,o+8);if(u){var c=u,f=In(i,o+16),d=In(i,o-20)==117853008;if(d){var p=In(i,o-12);d=In(i,p)==101075792,d&&(c=u=In(i,p+32),f=In(i,p+48))}for(var m=e&&e.filter,x=function(v){var _=px(i,f,d),D=_[0],C=_[1],b=_[2],T=_[3],w=_[4],P=_[5],y=dx(i,P);f=w;var A=function(F,k){F?(r(),a(F,null)):(k&&(s[T]=k),--u||a(null,s))};if(!m||m({name:T,size:C,originalSize:b,compression:D}))if(!D)A(null,Ba(i,y,y+C));else if(D==8){var N=i.subarray(y,y+C);if(b<524288||C>.8*b)try{A(null,tc(N,{out:new fn(b)}))}catch(F){A(F,null)}else n.push(ux(N,{size:b},A))}else A(cn(14,"unknown compression type "+D,1),null);else A(null,null)},E=0;E<c;++E)x(E)}else a(null,{});return r}function _x(i){const e=new DataView(i),t=[];if(i.byteLength<16)throw new Error("Invalid facets.bin: file too small");const n=new Uint8Array(i,0,8),r=String.fromCharCode(...n);if(r!=="facets  ")throw new Error(`Invalid facets.bin magic header: "${r}"`);const s=e.getUint32(12,!0);let a=16;for(let o=0;o<s&&a<i.byteLength-32;o++){const u=e.getUint32(a,!0),c=e.getUint32(a+4,!0),f=e.getUint32(a+8,!0),d=e.getUint32(a+20,!0),p=e.getUint32(a+24,!0),m=e.getUint32(a+44,!0);if((d===5||d===4)&&p>0&&p<2e4&&m>0&&m<2e5){a+=48;let E=m,v=a,_=m,D=0,C=m;for(let H=0;H<p&&v<i.byteLength;H++){if(H>0){if(v+4>i.byteLength)break;const K=24+e.getUint32(v,!0)*12;if(v+K>i.byteLength)break;C=e.getUint32(v+K-4,!0),v+=K,_+=C}if(v+=C*32,v+4>i.byteLength)break;const O=e.getUint32(v,!0);if(D+=O,v+=4+O*2,v%4!==0&&(v+=4-v%4),v+4<=i.byteLength){const W=e.getUint32(v,!0);v+=4+W*2,v%4!==0&&(v+=4-v%4)}}const b=new Float32Array(_*3),T=new Float32Array(_*3),w=new Float32Array(_*2),P=_>65535?new Uint32Array(D):new Uint16Array(D);let y=0,A=0,N=0,F=0;for(let H=0;H<p&&a<i.byteLength;H++){if(H>0){if(a+4>i.byteLength)break;const X=24+e.getUint32(a,!0)*12;if(a+X>i.byteLength)break;E=e.getUint32(a+X-4,!0),a+=X}const O=E*32;if(a+O>i.byteLength)break;for(let K=0;K<E;K++){const X=a+(K<<5),te=(y+K)*3;b[te]=e.getFloat32(X,!0),b[te+1]=e.getFloat32(X+4,!0),b[te+2]=e.getFloat32(X+8,!0),T[te]=e.getFloat32(X+12,!0),T[te+1]=e.getFloat32(X+16,!0),T[te+2]=e.getFloat32(X+20,!0);const re=A+K<<1;w[re]=e.getFloat32(X+24,!0),w[re+1]=e.getFloat32(X+28,!0)}if(y+=E,A+=E,a+=O,a+4>i.byteLength)break;const W=e.getUint32(a,!0);if(a+=4,a+W*2>i.byteLength)break;for(let K=0;K<W;K++)P[N++]=F+e.getUint16(a+(K<<1),!0);if(a+=W*2,a%4!==0&&(a+=4-a%4),a+4<=i.byteLength){const K=e.getUint32(a,!0);a+=4,a+K*2<=i.byteLength&&(a+=K*2,a%4!==0&&(a+=4-a%4))}F+=E}const k=new Lt;if(k.setAttribute("position",new At(b.subarray(0,y*3),3)),y>0?k.setAttribute("normal",new At(T.subarray(0,y*3),3)):k.computeVertexNormals(),A>0&&k.setAttribute("uv",new At(w.subarray(0,A*2),2)),N>0&&k.setIndex(new At(P.subarray(0,N),1)),k.computeBoundingBox(),k.computeBoundingSphere(),t.push({partId:`${c}:${u}`,bodyId:`${c}:${f}`,bodyNum:f,partNum:c,faceCount:p,totalVertices:y,totalTriangles:N/3,geometry:k}),o<s-1){let H=!1;if(a+32<=i.byteLength&&e.getUint32(a,!0)===2){const O=e.getUint32(a+28,!0),W=a+32+O*12;if(W+48<=i.byteLength){const K=e.getUint32(W,!0),X=e.getUint32(W+20,!0),te=e.getUint32(W+24,!0);K===1&&(X===5||X===4)&&te>0&&te<2e4&&(a=W,H=!0)}}if(!H){const O=Math.min(a+5e5,i.byteLength-48);for(let W=a+32;W<=O;W+=4){const K=e.getUint32(W,!0),X=e.getUint32(W+20,!0),te=e.getUint32(W+24,!0);if(K===1&&(X===5||X===4)&&te>0&&te<2e4){a=W,H=!0;break}if(W+32<=i.byteLength&&e.getUint32(W+16,!0)===4294967295){a=W,H=!0;break}}}if(!H)break}}else{const E=e.getUint32(a,!0),v=e.getUint32(a+4,!0),_=`${E}:${v}`,D=`${E}:${v}`,C=e.getUint32(a+72,!0);let b=i.byteLength;for(let A=a+80;A<=i.byteLength-48;A+=4){if(e.getUint32(A+16,!0)===4294967295){b=A;break}const N=e.getUint32(A,!0),F=e.getUint32(A+20,!0),k=e.getUint32(A+24,!0);if(N===1&&(F===5||F===4)&&k>0&&k<2e4){b=A;break}}let T=new Float32Array(0),w=new Uint32Array(0),P=0;if(C>0&&C<5e5&&a+76+C*12<=b){const A=a+76;T=new Float32Array(C*3);for(let k=0;k<C;k++){const H=A+k*12,O=k*3;T[O]=e.getFloat32(H,!0),T[O+1]=e.getFloat32(H+4,!0),T[O+2]=e.getFloat32(H+8,!0)}let N=b;for(let k=0;k<=16;k+=4){const H=b-k-36;if(H>=A+C*12){const O=e.getUint32(H+12,!0),W=e.getUint32(H+16,!0),K=e.getUint32(H+20,!0);if(O<C&&W<C&&K<C&&O!==W&&W!==K&&O!==K){N=b-k;break}}}const F=Math.max(0,Math.floor((N-(A+C*12))/36));for(w=new Uint32Array(F*3);N-36>=A+C*12;){const k=N-36,H=e.getUint32(k+12,!0),O=e.getUint32(k+16,!0),W=e.getUint32(k+20,!0);if(H<C&&O<C&&W<C&&H!==O&&O!==W&&H!==W)w[P++]=H,w[P++]=O,w[P++]=W,N-=36;else break}w.subarray(0,P).reverse()}const y=new Lt;T.length>0&&y.setAttribute("position",new At(T,3)),P>0&&y.setIndex(new At(w.subarray(0,P),1)),y.computeVertexNormals(),y.computeBoundingBox(),y.computeBoundingSphere(),t.push({partId:_,bodyId:D,bodyNum:v,partNum:E,faceCount:1,totalVertices:T.length/3,totalTriangles:P/3,geometry:y}),a=b}}return t}const Vr=["#8faf8f","#94a3b8","#38bdf8","#10b981","#f59e0b","#ef4444","#a855f7","#e2e8f0"];function vx(i,e){if(!i)return{hex:Vr[e%Vr.length],opacity:1};const t=parseInt(i,10);if(isNaN(t))return{hex:Vr[e%Vr.length],opacity:1};const n=t>>>0,r=(n>>24&255)/255,s=n>>16&255,a=n>>8&255,o=n&255;return{hex:"#"+[s,a,o].map(c=>c.toString(16).padStart(2,"0")).join(""),opacity:r>0?r:1}}function cf(i){if(!i||!i.trim())return null;const e=i.split(/[,\s]+/).map(n=>parseFloat(n.trim())).filter(n=>!isNaN(n));if(e.length<16)return null;const t=new ut;return t.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),t}async function xx(i,e,t){var b;t==null||t("ZIP展開中...",15);const n=i instanceof Uint8Array?i:new Uint8Array(i),r=await new Promise((T,w)=>{gx(n,(P,y)=>{P?w(P):T(y)})}),s=n.byteLength;t==null||t("構造解析中...",40);let a="SpaceClaim",o="MM";const u=r["docProps/app.xml"];if(u){const T=za(u),w=T.match(/<Application>([^<]+)<\/Application>/i);w&&(a=w[1]);const P=T.match(/<LengthType>([^<]+)<\/LengthType>/i);P&&(o=P[1])}const c=new Map,f=new Map;e.replace(/\.[^/.]+$/,"");const d=r["SpaceClaim/document.xml"];if(d){const T=za(d),w=T.match(/<RootCaptionDef[^>]*>[\s\S]*?<name>([^<]+)<\/name>/);w&&w[1].trim()&&w[1].trim();const P=/<CaptionDef[^>]*>[\s\S]*?<subjectId>([^<]+)<\/subjectId>[\s\S]*?<name>([^<]+)<\/name>/g;let y;for(;(y=P.exec(T))!==null;)c.set(y[1].trim(),y[2].trim());const A=/<(?:ComponentDef|PartDef|NominalBodyDef)[^>]*Id="([^"]+)"[^>]*>[\s\S]*?<name>([^<]+)<\/name>/g;for(;(y=A.exec(T))!==null;){const k=y[1].trim();c.has(k)||c.set(k,y[2].trim())}const N=/<(?:NominalBodyDef|MeshDef)\s+Id="([^"]+)"/g;let F=0;for(;(y=N.exec(T))!==null;){const k=y[1].trim();f.has(k)||f.set(k,F++)}}t==null||t("3D ファセット幾何抽出中...",70);const p=r["SpaceClaim/Graphics/facets.bin"];if(!p)throw new Error("facets.bin missing in RSDOCX container");const m=p.buffer.slice(p.byteOffset,p.byteOffset+p.byteLength),x=_x(m),E=[],v=new ut().makeRotationX(-Math.PI/2),_=r["SpaceClaim/Graphics/renderlist.xml"];let D;_&&(D=za(_));let C=0;if(D){const T=/<Item\s+([^>]+?)>(.*?)<\/Item>/gs;let w;for(;(w=T.exec(D))!==null;){const P=w[1],y=w[2],A=(P.match(/Transform="([^"]+)"/)||[])[1],N=cf(A),F=/<Body\s+([^>]+?)(?:\/>|>.*?<\/Body>)/gs;let k;for(;(k=F.exec(y))!==null;){const H=k[1],O=(H.match(/Id="([^"]+)"/)||[])[1]||`0:${C}`,K=(H.match(/Visible="([^"]+)"/)||[])[1]!=="0",X=(H.match(/Color="([^"]+)"/)||[])[1],{hex:te,opacity:re}=vx(X,C),pe=(H.match(/Transform="([^"]+)"/)||[])[1],ve=cf(pe);let Oe=N;ve&&(Oe?Oe=Oe.clone().multiply(ve):Oe=ve);let Ae;const pt=f.get(O);if(pt!==void 0&&pt<x.length&&(Ae=x[pt]),!Ae&&x.length>0&&(Ae=x[C%x.length]),Ae&&Ae.geometry){let Ye=Ae.geometry.clone();Oe&&Ye.applyMatrix4(Oe),Ye.applyMatrix4(v),Ye.computeVertexNormals(),Ye.computeBoundingBox(),Ye.computeBoundingSphere();const ot=`inst-${O}-${C}`,he=c.get(O)||`Body ${O}`;C++;let z;try{z=new Sa(Ye,28),z.computeBoundingSphere()}catch{}E.push({name:he,metadata:{id:ot,originalId:O,name:he,color:te,opacity:re,visible:K,vertexCount:((b=Ye.getAttribute("position"))==null?void 0:b.count)||0,triangleCount:Ye.getIndex()?Ye.getIndex().count/3:0},geometry:Ye,edgeGeometry:z})}}}}return E.length===0&&x.length>0&&x.forEach((T,w)=>{var k;const P=c.get(T.bodyId)||`Body ${T.bodyId}`,y=Vr[w%Vr.length],A=`body-${T.bodyId}`;let N=T.geometry.clone();N.applyMatrix4(v),N.computeVertexNormals(),N.computeBoundingBox(),N.computeBoundingSphere();let F;try{F=new Sa(N,28),F.computeBoundingSphere()}catch{}E.push({name:P,metadata:{id:A,originalId:T.bodyId,name:P,color:y,opacity:1,visible:!0,vertexCount:((k=N.getAttribute("position"))==null?void 0:k.count)||0,triangleCount:N.getIndex()?N.getIndex().count/3:0},geometry:N,edgeGeometry:F})}),t==null||t("表示完了",100),{fileName:e,fileSize:s,application:a,lengthUnits:o,bodies:E}}function yx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Mx(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var ic={exports:{}};const rc=Mx(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var uf;function Sx(){return uf||(uf=1,(function(i,e){var t=(()=>{var r;var n=typeof document<"u"?(r=document.currentScript)==null?void 0:r.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(s={}){var a,o=s,u,c,f=new Promise((l,h)=>{u=l,c=h}),d=typeof window=="object",p=typeof importScripts=="function",m=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",x=Object.assign({},o),E="./this.program",v=(l,h)=>{throw h},_="";function D(l){return o.locateFile?o.locateFile(l,_):_+l}var C,b;if(m){var T=rc,w=rc;_=__dirname+"/",b=l=>{l=st(l)?new URL(l):w.normalize(l);var h=T.readFileSync(l);return h},C=(l,h=!0)=>(l=st(l)?new URL(l):w.normalize(l),new Promise((g,M)=>{T.readFile(l,h?void 0:"utf8",(L,B)=>{L?M(L):g(h?B.buffer:B)})})),!o.thisProgram&&process.argv.length>1&&(E=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),v=(l,h)=>{throw process.exitCode=l,h}}else(d||p)&&(p?_=self.location.href:typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),n&&(_=n),_.startsWith("blob:")?_="":_=_.substr(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1),p&&(b=l=>{var h=new XMLHttpRequest;return h.open("GET",l,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),C=l=>st(l)?new Promise((h,g)=>{var M=new XMLHttpRequest;M.open("GET",l,!0),M.responseType="arraybuffer",M.onload=()=>{if(M.status==200||M.status==0&&M.response){h(M.response);return}g(M.status)},M.onerror=g,M.send(null)}):fetch(l,{credentials:"same-origin"}).then(h=>h.ok?h.arrayBuffer():Promise.reject(new Error(h.status+" : "+h.url))));var P=o.print||console.log.bind(console),y=o.printErr||console.error.bind(console);Object.assign(o,x),x=null,o.arguments&&o.arguments,o.thisProgram&&(E=o.thisProgram);var A=o.wasmBinary,N,F=!1;function k(l,h){l||_e(h)}var H,O,W,K,X,te,re,pe;function ve(){var l=N.buffer;o.HEAP8=H=new Int8Array(l),o.HEAP16=W=new Int16Array(l),o.HEAPU8=O=new Uint8Array(l),o.HEAPU16=K=new Uint16Array(l),o.HEAP32=X=new Int32Array(l),o.HEAPU32=te=new Uint32Array(l),o.HEAPF32=re=new Float32Array(l),o.HEAPF64=pe=new Float64Array(l)}var Oe=[],Ae=[],pt=[],Ye=!1;function ot(){var l=o.preRun;l&&(typeof l=="function"&&(l=[l]),l.forEach(G)),Re(Oe)}function he(){Ye=!0,!o.noFSInit&&!R.initialized&&R.init(),R.ignorePermissions=!1,Re(Ae)}function z(){var l=o.postRun;l&&(typeof l=="function"&&(l=[l]),l.forEach(Q)),Re(pt)}function G(l){Oe.unshift(l)}function ae(l){Ae.unshift(l)}function Q(l){pt.unshift(l)}var se=0,ce=null;function de(l){return l}function ye(l){var h;se++,(h=o.monitorRunDependencies)==null||h.call(o,se)}function me(l){var g;if(se--,(g=o.monitorRunDependencies)==null||g.call(o,se),se==0&&ce){var h=ce;ce=null,h()}}function _e(l){var g;(g=o.onAbort)==null||g.call(o,l),l="Aborted("+l+")",y(l),F=!0,l+=". Build with -sASSERTIONS for more info.",Ye&&qf();var h=new WebAssembly.RuntimeError(l);throw c(h),h}var Ue="data:application/octet-stream;base64,",Te=l=>l.startsWith(Ue),st=l=>l.startsWith("file://");function tt(){var l="occt-import-js.wasm";return Te(l)?l:D(l)}var lt;function q(l){if(l==lt&&A)return new Uint8Array(A);if(b)return b(l);throw"both async and sync fetching of the wasm failed"}function dt(l){return A?Promise.resolve().then(()=>q(l)):C(l).then(h=>new Uint8Array(h),()=>q(l))}function we(l,h,g){return dt(l).then(M=>WebAssembly.instantiate(M,h)).then(g,M=>{y(`failed to asynchronously prepare wasm: ${M}`),_e(M)})}function U(l,h,g,M){return!l&&typeof WebAssembly.instantiateStreaming=="function"&&!Te(h)&&!st(h)&&!m&&typeof fetch=="function"?fetch(h,{credentials:"same-origin"}).then(L=>{var B=WebAssembly.instantiateStreaming(L,g);return B.then(M,function(V){return y(`wasm streaming compile failed: ${V}`),y("falling back to ArrayBuffer instantiation"),we(h,g,M)})}):we(h,g,M)}function S(){return{a:oS}}function ee(){var l=S();function h(M,L){return rn=M.exports,N=rn._,ve(),Nf=rn.ba,ae(rn.$),me(),rn}ye();function g(M){h(M.instance)}if(o.instantiateWasm)try{return o.instantiateWasm(l,h)}catch(M){y(`Module.instantiateWasm callback failed with error: ${M}`),c(M)}return lt??(lt=tt()),U(A,lt,l,g).catch(c),{}}var j,oe;function be(l){this.name="ExitStatus",this.message=`Program terminated with exit(${l})`,this.status=l}var Re=l=>{l.forEach(h=>h(o))};o.noExitRuntime;var le={isAbs:l=>l.charAt(0)==="/",splitPath:l=>{var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return h.exec(l).slice(1)},normalizeArray:(l,h)=>{for(var g=0,M=l.length-1;M>=0;M--){var L=l[M];L==="."?l.splice(M,1):L===".."?(l.splice(M,1),g++):g&&(l.splice(M,1),g--)}if(h)for(;g;g--)l.unshift("..");return l},normalize:l=>{var h=le.isAbs(l),g=l.substr(-1)==="/";return l=le.normalizeArray(l.split("/").filter(M=>!!M),!h).join("/"),!l&&!h&&(l="."),l&&g&&(l+="/"),(h?"/":"")+l},dirname:l=>{var h=le.splitPath(l),g=h[0],M=h[1];return!g&&!M?".":(M&&(M=M.substr(0,M.length-1)),g+M)},basename:l=>{if(l==="/")return"/";l=le.normalize(l),l=l.replace(/\/$/,"");var h=l.lastIndexOf("/");return h===-1?l:l.substr(h+1)},join:(...l)=>le.normalize(l.join("/")),join2:(l,h)=>le.normalize(l+"/"+h)},xe=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return M=>crypto.getRandomValues(M);if(m)try{var l=rc,h=l.randomFillSync;if(h)return M=>l.randomFillSync(M);var g=l.randomBytes;return M=>(M.set(g(M.byteLength)),M)}catch{}_e("initRandomDevice")},Pe=l=>(Pe=xe())(l),Xe={resolve:(...l)=>{for(var h="",g=!1,M=l.length-1;M>=-1&&!g;M--){var L=M>=0?l[M]:R.cwd();if(typeof L!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!L)return"";h=L+"/"+h,g=le.isAbs(L)}return h=le.normalizeArray(h.split("/").filter(B=>!!B),!g).join("/"),(g?"/":"")+h||"."},relative:(l,h)=>{l=Xe.resolve(l).substr(1),h=Xe.resolve(h).substr(1);function g(Se){for(var Ve=0;Ve<Se.length&&Se[Ve]==="";Ve++);for(var We=Se.length-1;We>=0&&Se[We]==="";We--);return Ve>We?[]:Se.slice(Ve,We-Ve+1)}for(var M=g(l.split("/")),L=g(h.split("/")),B=Math.min(M.length,L.length),V=B,Y=0;Y<B;Y++)if(M[Y]!==L[Y]){V=Y;break}for(var fe=[],Y=V;Y<M.length;Y++)fe.push("..");return fe=fe.concat(L.slice(V)),fe.join("/")}},Ne=typeof TextDecoder<"u"?new TextDecoder:void 0,Ce=(l,h=0,g=NaN)=>{for(var M=h+g,L=h;l[L]&&!(L>=M);)++L;if(L-h>16&&l.buffer&&Ne)return Ne.decode(l.subarray(h,L));for(var B="";h<L;){var V=l[h++];if(!(V&128)){B+=String.fromCharCode(V);continue}var Y=l[h++]&63;if((V&224)==192){B+=String.fromCharCode((V&31)<<6|Y);continue}var fe=l[h++]&63;if((V&240)==224?V=(V&15)<<12|Y<<6|fe:V=(V&7)<<18|Y<<12|fe<<6|l[h++]&63,V<65536)B+=String.fromCharCode(V);else{var Se=V-65536;B+=String.fromCharCode(55296|Se>>10,56320|Se&1023)}}return B},je=[],et=l=>{for(var h=0,g=0;g<l.length;++g){var M=l.charCodeAt(g);M<=127?h++:M<=2047?h+=2:M>=55296&&M<=57343?(h+=4,++g):h+=3}return h},ct=(l,h,g,M)=>{if(!(M>0))return 0;for(var L=g,B=g+M-1,V=0;V<l.length;++V){var Y=l.charCodeAt(V);if(Y>=55296&&Y<=57343){var fe=l.charCodeAt(++V);Y=65536+((Y&1023)<<10)|fe&1023}if(Y<=127){if(g>=B)break;h[g++]=Y}else if(Y<=2047){if(g+1>=B)break;h[g++]=192|Y>>6,h[g++]=128|Y&63}else if(Y<=65535){if(g+2>=B)break;h[g++]=224|Y>>12,h[g++]=128|Y>>6&63,h[g++]=128|Y&63}else{if(g+3>=B)break;h[g++]=240|Y>>18,h[g++]=128|Y>>12&63,h[g++]=128|Y>>6&63,h[g++]=128|Y&63}}return h[g]=0,g-L};function J(l,h,g){var M=et(l)+1,L=new Array(M),B=ct(l,L,0,L.length);return L.length=B,L}var Ie=()=>{if(!je.length){var l=null;if(m){var h=256,g=Buffer.alloc(h),M=0,L=process.stdin.fd;try{M=T.readSync(L,g,0,h)}catch(B){if(B.toString().includes("EOF"))M=0;else throw B}M>0&&(l=g.slice(0,M).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(l=window.prompt("Input: "),l!==null&&(l+=`
`));if(!l)return null;je=J(l)}return je.shift()},ge={ttys:[],init(){},shutdown(){},register(l,h){ge.ttys[l]={input:[],output:[],ops:h},R.registerDevice(l,ge.stream_ops)},stream_ops:{open(l){var h=ge.ttys[l.node.rdev];if(!h)throw new R.ErrnoError(43);l.tty=h,l.seekable=!1},close(l){l.tty.ops.fsync(l.tty)},fsync(l){l.tty.ops.fsync(l.tty)},read(l,h,g,M,L){if(!l.tty||!l.tty.ops.get_char)throw new R.ErrnoError(60);for(var B=0,V=0;V<M;V++){var Y;try{Y=l.tty.ops.get_char(l.tty)}catch{throw new R.ErrnoError(29)}if(Y===void 0&&B===0)throw new R.ErrnoError(6);if(Y==null)break;B++,h[g+V]=Y}return B&&(l.node.timestamp=Date.now()),B},write(l,h,g,M,L){if(!l.tty||!l.tty.ops.put_char)throw new R.ErrnoError(60);try{for(var B=0;B<M;B++)l.tty.ops.put_char(l.tty,h[g+B])}catch{throw new R.ErrnoError(29)}return M&&(l.node.timestamp=Date.now()),B}},default_tty_ops:{get_char(l){return Ie()},put_char(l,h){h===null||h===10?(P(Ce(l.output)),l.output=[]):h!=0&&l.output.push(h)},fsync(l){l.output&&l.output.length>0&&(P(Ce(l.output)),l.output=[])},ioctl_tcgets(l){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(l,h,g){return 0},ioctl_tiocgwinsz(l){return[24,80]}},default_tty1_ops:{put_char(l,h){h===null||h===10?(y(Ce(l.output)),l.output=[]):h!=0&&l.output.push(h)},fsync(l){l.output&&l.output.length>0&&(y(Ce(l.output)),l.output=[])}}},De=(l,h)=>{O.fill(0,l,l+h)},ze=(l,h)=>Math.ceil(l/h)*h,Me=l=>{l=ze(l,65536);var h=Xf(65536,l);return h&&De(h,l),h},Ee={ops_table:null,mount(l){return Ee.createNode(null,"/",16895,0)},createNode(l,h,g,M){if(R.isBlkdev(g)||R.isFIFO(g))throw new R.ErrnoError(63);Ee.ops_table||(Ee.ops_table={dir:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr,lookup:Ee.node_ops.lookup,mknod:Ee.node_ops.mknod,rename:Ee.node_ops.rename,unlink:Ee.node_ops.unlink,rmdir:Ee.node_ops.rmdir,readdir:Ee.node_ops.readdir,symlink:Ee.node_ops.symlink},stream:{llseek:Ee.stream_ops.llseek}},file:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr},stream:{llseek:Ee.stream_ops.llseek,read:Ee.stream_ops.read,write:Ee.stream_ops.write,allocate:Ee.stream_ops.allocate,mmap:Ee.stream_ops.mmap,msync:Ee.stream_ops.msync}},link:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr,readlink:Ee.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr},stream:R.chrdev_stream_ops}});var L=R.createNode(l,h,g,M);return R.isDir(L.mode)?(L.node_ops=Ee.ops_table.dir.node,L.stream_ops=Ee.ops_table.dir.stream,L.contents={}):R.isFile(L.mode)?(L.node_ops=Ee.ops_table.file.node,L.stream_ops=Ee.ops_table.file.stream,L.usedBytes=0,L.contents=null):R.isLink(L.mode)?(L.node_ops=Ee.ops_table.link.node,L.stream_ops=Ee.ops_table.link.stream):R.isChrdev(L.mode)&&(L.node_ops=Ee.ops_table.chrdev.node,L.stream_ops=Ee.ops_table.chrdev.stream),L.timestamp=Date.now(),l&&(l.contents[h]=L,l.timestamp=L.timestamp),L},getFileDataAsTypedArray(l){return l.contents?l.contents.subarray?l.contents.subarray(0,l.usedBytes):new Uint8Array(l.contents):new Uint8Array(0)},expandFileStorage(l,h){var g=l.contents?l.contents.length:0;if(!(g>=h)){var M=1024*1024;h=Math.max(h,g*(g<M?2:1.125)>>>0),g!=0&&(h=Math.max(h,256));var L=l.contents;l.contents=new Uint8Array(h),l.usedBytes>0&&l.contents.set(L.subarray(0,l.usedBytes),0)}},resizeFileStorage(l,h){if(l.usedBytes!=h)if(h==0)l.contents=null,l.usedBytes=0;else{var g=l.contents;l.contents=new Uint8Array(h),g&&l.contents.set(g.subarray(0,Math.min(h,l.usedBytes))),l.usedBytes=h}},node_ops:{getattr(l){var h={};return h.dev=R.isChrdev(l.mode)?l.id:1,h.ino=l.id,h.mode=l.mode,h.nlink=1,h.uid=0,h.gid=0,h.rdev=l.rdev,R.isDir(l.mode)?h.size=4096:R.isFile(l.mode)?h.size=l.usedBytes:R.isLink(l.mode)?h.size=l.link.length:h.size=0,h.atime=new Date(l.timestamp),h.mtime=new Date(l.timestamp),h.ctime=new Date(l.timestamp),h.blksize=4096,h.blocks=Math.ceil(h.size/h.blksize),h},setattr(l,h){h.mode!==void 0&&(l.mode=h.mode),h.timestamp!==void 0&&(l.timestamp=h.timestamp),h.size!==void 0&&Ee.resizeFileStorage(l,h.size)},lookup(l,h){throw R.genericErrors[44]},mknod(l,h,g,M){return Ee.createNode(l,h,g,M)},rename(l,h,g){if(R.isDir(l.mode)){var M;try{M=R.lookupNode(h,g)}catch{}if(M)for(var L in M.contents)throw new R.ErrnoError(55)}delete l.parent.contents[l.name],l.parent.timestamp=Date.now(),l.name=g,h.contents[g]=l,h.timestamp=l.parent.timestamp},unlink(l,h){delete l.contents[h],l.timestamp=Date.now()},rmdir(l,h){var g=R.lookupNode(l,h);for(var M in g.contents)throw new R.ErrnoError(55);delete l.contents[h],l.timestamp=Date.now()},readdir(l){var h=[".",".."];for(var g of Object.keys(l.contents))h.push(g);return h},symlink(l,h,g){var M=Ee.createNode(l,h,41471,0);return M.link=g,M},readlink(l){if(!R.isLink(l.mode))throw new R.ErrnoError(28);return l.link}},stream_ops:{read(l,h,g,M,L){var B=l.node.contents;if(L>=l.node.usedBytes)return 0;var V=Math.min(l.node.usedBytes-L,M);if(V>8&&B.subarray)h.set(B.subarray(L,L+V),g);else for(var Y=0;Y<V;Y++)h[g+Y]=B[L+Y];return V},write(l,h,g,M,L,B){if(h.buffer===H.buffer&&(B=!1),!M)return 0;var V=l.node;if(V.timestamp=Date.now(),h.subarray&&(!V.contents||V.contents.subarray)){if(B)return V.contents=h.subarray(g,g+M),V.usedBytes=M,M;if(V.usedBytes===0&&L===0)return V.contents=h.slice(g,g+M),V.usedBytes=M,M;if(L+M<=V.usedBytes)return V.contents.set(h.subarray(g,g+M),L),M}if(Ee.expandFileStorage(V,L+M),V.contents.subarray&&h.subarray)V.contents.set(h.subarray(g,g+M),L);else for(var Y=0;Y<M;Y++)V.contents[L+Y]=h[g+Y];return V.usedBytes=Math.max(V.usedBytes,L+M),M},llseek(l,h,g){var M=h;if(g===1?M+=l.position:g===2&&R.isFile(l.node.mode)&&(M+=l.node.usedBytes),M<0)throw new R.ErrnoError(28);return M},allocate(l,h,g){Ee.expandFileStorage(l.node,h+g),l.node.usedBytes=Math.max(l.node.usedBytes,h+g)},mmap(l,h,g,M,L){if(!R.isFile(l.node.mode))throw new R.ErrnoError(43);var B,V,Y=l.node.contents;if(!(L&2)&&Y&&Y.buffer===H.buffer)V=!1,B=Y.byteOffset;else{if(V=!0,B=Me(h),!B)throw new R.ErrnoError(48);Y&&((g>0||g+h<Y.length)&&(Y.subarray?Y=Y.subarray(g,g+h):Y=Array.prototype.slice.call(Y,g,g+h)),H.set(Y,B))}return{ptr:B,allocated:V}},msync(l,h,g,M,L){return Ee.stream_ops.write(l,h,0,M,g,!1),0}}},Ke=(l,h,g,M)=>{var L=`al ${l}`;C(l).then(B=>{h(new Uint8Array(B)),L&&me()},B=>{if(g)g();else throw`Loading data file "${l}" failed.`}),L&&ye()},Bt=(l,h,g,M,L,B)=>{R.createDataFile(l,h,g,M,L,B)},Rt=o.preloadPlugins||[],bn=(l,h,g,M)=>{typeof Browser<"u"&&Browser.init();var L=!1;return Rt.forEach(B=>{L||B.canHandle(h)&&(B.handle(l,h,g,M),L=!0)}),L},Fn=(l,h,g,M,L,B,V,Y,fe,Se)=>{var Ve=h?Xe.resolve(le.join2(l,h)):l;function We(it){function qe(ht){Se==null||Se(),Y||Bt(l,h,ht,M,L,fe),B==null||B(),me()}bn(it,Ve,qe,()=>{V==null||V(),me()})||qe(it)}ye(),typeof g=="string"?Ke(g,We,V):We(g)},Rc=l=>{var h={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},g=h[l];if(typeof g>"u")throw new Error(`Unknown file open mode: ${l}`);return g},Ls=(l,h)=>{var g=0;return l&&(g|=365),h&&(g|=146),g},R={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(l){this.name="ErrnoError",this.errno=l}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(l){this.node=l}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(l){this.shared.flags=l}get position(){return this.shared.position}set position(l){this.shared.position=l}},FSNode:class{constructor(l,h,g,M){l||(l=this),this.parent=l,this.mount=l.mount,this.mounted=null,this.id=R.nextInode++,this.name=h,this.mode=g,this.node_ops={},this.stream_ops={},this.rdev=M,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(l){l?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(l){l?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return R.isDir(this.mode)}get isDevice(){return R.isChrdev(this.mode)}},lookupPath(l,h={}){if(l=Xe.resolve(l),!l)return{path:"",node:null};var g={follow_mount:!0,recurse_count:0};if(h=Object.assign(g,h),h.recurse_count>8)throw new R.ErrnoError(32);for(var M=l.split("/").filter(We=>!!We),L=R.root,B="/",V=0;V<M.length;V++){var Y=V===M.length-1;if(Y&&h.parent)break;if(L=R.lookupNode(L,M[V]),B=le.join2(B,M[V]),R.isMountpoint(L)&&(!Y||Y&&h.follow_mount)&&(L=L.mounted.root),!Y||h.follow)for(var fe=0;R.isLink(L.mode);){var Se=R.readlink(B);B=Xe.resolve(le.dirname(B),Se);var Ve=R.lookupPath(B,{recurse_count:h.recurse_count+1});if(L=Ve.node,fe++>40)throw new R.ErrnoError(32)}}return{path:B,node:L}},getPath(l){for(var h;;){if(R.isRoot(l)){var g=l.mount.mountpoint;return h?g[g.length-1]!=="/"?`${g}/${h}`:g+h:g}h=h?`${l.name}/${h}`:l.name,l=l.parent}},hashName(l,h){for(var g=0,M=0;M<h.length;M++)g=(g<<5)-g+h.charCodeAt(M)|0;return(l+g>>>0)%R.nameTable.length},hashAddNode(l){var h=R.hashName(l.parent.id,l.name);l.name_next=R.nameTable[h],R.nameTable[h]=l},hashRemoveNode(l){var h=R.hashName(l.parent.id,l.name);if(R.nameTable[h]===l)R.nameTable[h]=l.name_next;else for(var g=R.nameTable[h];g;){if(g.name_next===l){g.name_next=l.name_next;break}g=g.name_next}},lookupNode(l,h){var g=R.mayLookup(l);if(g)throw new R.ErrnoError(g);for(var M=R.hashName(l.id,h),L=R.nameTable[M];L;L=L.name_next){var B=L.name;if(L.parent.id===l.id&&B===h)return L}return R.lookup(l,h)},createNode(l,h,g,M){var L=new R.FSNode(l,h,g,M);return R.hashAddNode(L),L},destroyNode(l){R.hashRemoveNode(l)},isRoot(l){return l===l.parent},isMountpoint(l){return!!l.mounted},isFile(l){return(l&61440)===32768},isDir(l){return(l&61440)===16384},isLink(l){return(l&61440)===40960},isChrdev(l){return(l&61440)===8192},isBlkdev(l){return(l&61440)===24576},isFIFO(l){return(l&61440)===4096},isSocket(l){return(l&49152)===49152},flagsToPermissionString(l){var h=["r","w","rw"][l&3];return l&512&&(h+="w"),h},nodePermissions(l,h){return R.ignorePermissions?0:h.includes("r")&&!(l.mode&292)||h.includes("w")&&!(l.mode&146)||h.includes("x")&&!(l.mode&73)?2:0},mayLookup(l){if(!R.isDir(l.mode))return 54;var h=R.nodePermissions(l,"x");return h||(l.node_ops.lookup?0:2)},mayCreate(l,h){try{var g=R.lookupNode(l,h);return 20}catch{}return R.nodePermissions(l,"wx")},mayDelete(l,h,g){var M;try{M=R.lookupNode(l,h)}catch(B){return B.errno}var L=R.nodePermissions(l,"wx");if(L)return L;if(g){if(!R.isDir(M.mode))return 54;if(R.isRoot(M)||R.getPath(M)===R.cwd())return 10}else if(R.isDir(M.mode))return 31;return 0},mayOpen(l,h){return l?R.isLink(l.mode)?32:R.isDir(l.mode)&&(R.flagsToPermissionString(h)!=="r"||h&512)?31:R.nodePermissions(l,R.flagsToPermissionString(h)):44},MAX_OPEN_FDS:4096,nextfd(){for(var l=0;l<=R.MAX_OPEN_FDS;l++)if(!R.streams[l])return l;throw new R.ErrnoError(33)},getStreamChecked(l){var h=R.getStream(l);if(!h)throw new R.ErrnoError(8);return h},getStream:l=>R.streams[l],createStream(l,h=-1){return l=Object.assign(new R.FSStream,l),h==-1&&(h=R.nextfd()),l.fd=h,R.streams[h]=l,l},closeStream(l){R.streams[l]=null},dupStream(l,h=-1){var M,L;var g=R.createStream(l,h);return(L=(M=g.stream_ops)==null?void 0:M.dup)==null||L.call(M,g),g},chrdev_stream_ops:{open(l){var g,M;var h=R.getDevice(l.node.rdev);l.stream_ops=h.stream_ops,(M=(g=l.stream_ops).open)==null||M.call(g,l)},llseek(){throw new R.ErrnoError(70)}},major:l=>l>>8,minor:l=>l&255,makedev:(l,h)=>l<<8|h,registerDevice(l,h){R.devices[l]={stream_ops:h}},getDevice:l=>R.devices[l],getMounts(l){for(var h=[],g=[l];g.length;){var M=g.pop();h.push(M),g.push(...M.mounts)}return h},syncfs(l,h){typeof l=="function"&&(h=l,l=!1),R.syncFSRequests++,R.syncFSRequests>1&&y(`warning: ${R.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var g=R.getMounts(R.root.mount),M=0;function L(V){return R.syncFSRequests--,h(V)}function B(V){if(V)return B.errored?void 0:(B.errored=!0,L(V));++M>=g.length&&L(null)}g.forEach(V=>{if(!V.type.syncfs)return B(null);V.type.syncfs(V,l,B)})},mount(l,h,g){var M=g==="/",L=!g,B;if(M&&R.root)throw new R.ErrnoError(10);if(!M&&!L){var V=R.lookupPath(g,{follow_mount:!1});if(g=V.path,B=V.node,R.isMountpoint(B))throw new R.ErrnoError(10);if(!R.isDir(B.mode))throw new R.ErrnoError(54)}var Y={type:l,opts:h,mountpoint:g,mounts:[]},fe=l.mount(Y);return fe.mount=Y,Y.root=fe,M?R.root=fe:B&&(B.mounted=Y,B.mount&&B.mount.mounts.push(Y)),fe},unmount(l){var h=R.lookupPath(l,{follow_mount:!1});if(!R.isMountpoint(h.node))throw new R.ErrnoError(28);var g=h.node,M=g.mounted,L=R.getMounts(M);Object.keys(R.nameTable).forEach(V=>{for(var Y=R.nameTable[V];Y;){var fe=Y.name_next;L.includes(Y.mount)&&R.destroyNode(Y),Y=fe}}),g.mounted=null;var B=g.mount.mounts.indexOf(M);g.mount.mounts.splice(B,1)},lookup(l,h){return l.node_ops.lookup(l,h)},mknod(l,h,g){var M=R.lookupPath(l,{parent:!0}),L=M.node,B=le.basename(l);if(!B||B==="."||B==="..")throw new R.ErrnoError(28);var V=R.mayCreate(L,B);if(V)throw new R.ErrnoError(V);if(!L.node_ops.mknod)throw new R.ErrnoError(63);return L.node_ops.mknod(L,B,h,g)},create(l,h){return h=h!==void 0?h:438,h&=4095,h|=32768,R.mknod(l,h,0)},mkdir(l,h){return h=h!==void 0?h:511,h&=1023,h|=16384,R.mknod(l,h,0)},mkdirTree(l,h){for(var g=l.split("/"),M="",L=0;L<g.length;++L)if(g[L]){M+="/"+g[L];try{R.mkdir(M,h)}catch(B){if(B.errno!=20)throw B}}},mkdev(l,h,g){return typeof g>"u"&&(g=h,h=438),h|=8192,R.mknod(l,h,g)},symlink(l,h){if(!Xe.resolve(l))throw new R.ErrnoError(44);var g=R.lookupPath(h,{parent:!0}),M=g.node;if(!M)throw new R.ErrnoError(44);var L=le.basename(h),B=R.mayCreate(M,L);if(B)throw new R.ErrnoError(B);if(!M.node_ops.symlink)throw new R.ErrnoError(63);return M.node_ops.symlink(M,L,l)},rename(l,h){var g=le.dirname(l),M=le.dirname(h),L=le.basename(l),B=le.basename(h),V,Y,fe;if(V=R.lookupPath(l,{parent:!0}),Y=V.node,V=R.lookupPath(h,{parent:!0}),fe=V.node,!Y||!fe)throw new R.ErrnoError(44);if(Y.mount!==fe.mount)throw new R.ErrnoError(75);var Se=R.lookupNode(Y,L),Ve=Xe.relative(l,M);if(Ve.charAt(0)!==".")throw new R.ErrnoError(28);if(Ve=Xe.relative(h,g),Ve.charAt(0)!==".")throw new R.ErrnoError(55);var We;try{We=R.lookupNode(fe,B)}catch{}if(Se!==We){var it=R.isDir(Se.mode),qe=R.mayDelete(Y,L,it);if(qe)throw new R.ErrnoError(qe);if(qe=We?R.mayDelete(fe,B,it):R.mayCreate(fe,B),qe)throw new R.ErrnoError(qe);if(!Y.node_ops.rename)throw new R.ErrnoError(63);if(R.isMountpoint(Se)||We&&R.isMountpoint(We))throw new R.ErrnoError(10);if(fe!==Y&&(qe=R.nodePermissions(Y,"w"),qe))throw new R.ErrnoError(qe);R.hashRemoveNode(Se);try{Y.node_ops.rename(Se,fe,B),Se.parent=fe}catch(ht){throw ht}finally{R.hashAddNode(Se)}}},rmdir(l){var h=R.lookupPath(l,{parent:!0}),g=h.node,M=le.basename(l),L=R.lookupNode(g,M),B=R.mayDelete(g,M,!0);if(B)throw new R.ErrnoError(B);if(!g.node_ops.rmdir)throw new R.ErrnoError(63);if(R.isMountpoint(L))throw new R.ErrnoError(10);g.node_ops.rmdir(g,M),R.destroyNode(L)},readdir(l){var h=R.lookupPath(l,{follow:!0}),g=h.node;if(!g.node_ops.readdir)throw new R.ErrnoError(54);return g.node_ops.readdir(g)},unlink(l){var h=R.lookupPath(l,{parent:!0}),g=h.node;if(!g)throw new R.ErrnoError(44);var M=le.basename(l),L=R.lookupNode(g,M),B=R.mayDelete(g,M,!1);if(B)throw new R.ErrnoError(B);if(!g.node_ops.unlink)throw new R.ErrnoError(63);if(R.isMountpoint(L))throw new R.ErrnoError(10);g.node_ops.unlink(g,M),R.destroyNode(L)},readlink(l){var h=R.lookupPath(l),g=h.node;if(!g)throw new R.ErrnoError(44);if(!g.node_ops.readlink)throw new R.ErrnoError(28);return Xe.resolve(R.getPath(g.parent),g.node_ops.readlink(g))},stat(l,h){var g=R.lookupPath(l,{follow:!h}),M=g.node;if(!M)throw new R.ErrnoError(44);if(!M.node_ops.getattr)throw new R.ErrnoError(63);return M.node_ops.getattr(M)},lstat(l){return R.stat(l,!0)},chmod(l,h,g){var M;if(typeof l=="string"){var L=R.lookupPath(l,{follow:!g});M=L.node}else M=l;if(!M.node_ops.setattr)throw new R.ErrnoError(63);M.node_ops.setattr(M,{mode:h&4095|M.mode&-4096,timestamp:Date.now()})},lchmod(l,h){R.chmod(l,h,!0)},fchmod(l,h){var g=R.getStreamChecked(l);R.chmod(g.node,h)},chown(l,h,g,M){var L;if(typeof l=="string"){var B=R.lookupPath(l,{follow:!M});L=B.node}else L=l;if(!L.node_ops.setattr)throw new R.ErrnoError(63);L.node_ops.setattr(L,{timestamp:Date.now()})},lchown(l,h,g){R.chown(l,h,g,!0)},fchown(l,h,g){var M=R.getStreamChecked(l);R.chown(M.node,h,g)},truncate(l,h){if(h<0)throw new R.ErrnoError(28);var g;if(typeof l=="string"){var M=R.lookupPath(l,{follow:!0});g=M.node}else g=l;if(!g.node_ops.setattr)throw new R.ErrnoError(63);if(R.isDir(g.mode))throw new R.ErrnoError(31);if(!R.isFile(g.mode))throw new R.ErrnoError(28);var L=R.nodePermissions(g,"w");if(L)throw new R.ErrnoError(L);g.node_ops.setattr(g,{size:h,timestamp:Date.now()})},ftruncate(l,h){var g=R.getStreamChecked(l);if((g.flags&2097155)===0)throw new R.ErrnoError(28);R.truncate(g.node,h)},utime(l,h,g){var M=R.lookupPath(l,{follow:!0}),L=M.node;L.node_ops.setattr(L,{timestamp:Math.max(h,g)})},open(l,h,g){if(l==="")throw new R.ErrnoError(44);h=typeof h=="string"?Rc(h):h,h&64?(g=typeof g>"u"?438:g,g=g&4095|32768):g=0;var M;if(typeof l=="object")M=l;else{l=le.normalize(l);try{var L=R.lookupPath(l,{follow:!(h&131072)});M=L.node}catch{}}var B=!1;if(h&64)if(M){if(h&128)throw new R.ErrnoError(20)}else M=R.mknod(l,g,0),B=!0;if(!M)throw new R.ErrnoError(44);if(R.isChrdev(M.mode)&&(h&=-513),h&65536&&!R.isDir(M.mode))throw new R.ErrnoError(54);if(!B){var V=R.mayOpen(M,h);if(V)throw new R.ErrnoError(V)}h&512&&!B&&R.truncate(M,0),h&=-131713;var Y=R.createStream({node:M,path:R.getPath(M),flags:h,seekable:!0,position:0,stream_ops:M.stream_ops,ungotten:[],error:!1});return Y.stream_ops.open&&Y.stream_ops.open(Y),o.logReadFiles&&!(h&1)&&(l in R.readFiles||(R.readFiles[l]=1)),Y},close(l){if(R.isClosed(l))throw new R.ErrnoError(8);l.getdents&&(l.getdents=null);try{l.stream_ops.close&&l.stream_ops.close(l)}catch(h){throw h}finally{R.closeStream(l.fd)}l.fd=null},isClosed(l){return l.fd===null},llseek(l,h,g){if(R.isClosed(l))throw new R.ErrnoError(8);if(!l.seekable||!l.stream_ops.llseek)throw new R.ErrnoError(70);if(g!=0&&g!=1&&g!=2)throw new R.ErrnoError(28);return l.position=l.stream_ops.llseek(l,h,g),l.ungotten=[],l.position},read(l,h,g,M,L){if(M<0||L<0)throw new R.ErrnoError(28);if(R.isClosed(l))throw new R.ErrnoError(8);if((l.flags&2097155)===1)throw new R.ErrnoError(8);if(R.isDir(l.node.mode))throw new R.ErrnoError(31);if(!l.stream_ops.read)throw new R.ErrnoError(28);var B=typeof L<"u";if(!B)L=l.position;else if(!l.seekable)throw new R.ErrnoError(70);var V=l.stream_ops.read(l,h,g,M,L);return B||(l.position+=V),V},write(l,h,g,M,L,B){if(M<0||L<0)throw new R.ErrnoError(28);if(R.isClosed(l))throw new R.ErrnoError(8);if((l.flags&2097155)===0)throw new R.ErrnoError(8);if(R.isDir(l.node.mode))throw new R.ErrnoError(31);if(!l.stream_ops.write)throw new R.ErrnoError(28);l.seekable&&l.flags&1024&&R.llseek(l,0,2);var V=typeof L<"u";if(!V)L=l.position;else if(!l.seekable)throw new R.ErrnoError(70);var Y=l.stream_ops.write(l,h,g,M,L,B);return V||(l.position+=Y),Y},allocate(l,h,g){if(R.isClosed(l))throw new R.ErrnoError(8);if(h<0||g<=0)throw new R.ErrnoError(28);if((l.flags&2097155)===0)throw new R.ErrnoError(8);if(!R.isFile(l.node.mode)&&!R.isDir(l.node.mode))throw new R.ErrnoError(43);if(!l.stream_ops.allocate)throw new R.ErrnoError(138);l.stream_ops.allocate(l,h,g)},mmap(l,h,g,M,L){if((M&2)!==0&&(L&2)===0&&(l.flags&2097155)!==2)throw new R.ErrnoError(2);if((l.flags&2097155)===1)throw new R.ErrnoError(2);if(!l.stream_ops.mmap)throw new R.ErrnoError(43);if(!h)throw new R.ErrnoError(28);return l.stream_ops.mmap(l,h,g,M,L)},msync(l,h,g,M,L){return l.stream_ops.msync?l.stream_ops.msync(l,h,g,M,L):0},ioctl(l,h,g){if(!l.stream_ops.ioctl)throw new R.ErrnoError(59);return l.stream_ops.ioctl(l,h,g)},readFile(l,h={}){if(h.flags=h.flags||0,h.encoding=h.encoding||"binary",h.encoding!=="utf8"&&h.encoding!=="binary")throw new Error(`Invalid encoding type "${h.encoding}"`);var g,M=R.open(l,h.flags),L=R.stat(l),B=L.size,V=new Uint8Array(B);return R.read(M,V,0,B,0),h.encoding==="utf8"?g=Ce(V):h.encoding==="binary"&&(g=V),R.close(M),g},writeFile(l,h,g={}){g.flags=g.flags||577;var M=R.open(l,g.flags,g.mode);if(typeof h=="string"){var L=new Uint8Array(et(h)+1),B=ct(h,L,0,L.length);R.write(M,L,0,B,void 0,g.canOwn)}else if(ArrayBuffer.isView(h))R.write(M,h,0,h.byteLength,void 0,g.canOwn);else throw new Error("Unsupported data type");R.close(M)},cwd:()=>R.currentPath,chdir(l){var h=R.lookupPath(l,{follow:!0});if(h.node===null)throw new R.ErrnoError(44);if(!R.isDir(h.node.mode))throw new R.ErrnoError(54);var g=R.nodePermissions(h.node,"x");if(g)throw new R.ErrnoError(g);R.currentPath=h.path},createDefaultDirectories(){R.mkdir("/tmp"),R.mkdir("/home"),R.mkdir("/home/web_user")},createDefaultDevices(){R.mkdir("/dev"),R.registerDevice(R.makedev(1,3),{read:()=>0,write:(M,L,B,V,Y)=>V}),R.mkdev("/dev/null",R.makedev(1,3)),ge.register(R.makedev(5,0),ge.default_tty_ops),ge.register(R.makedev(6,0),ge.default_tty1_ops),R.mkdev("/dev/tty",R.makedev(5,0)),R.mkdev("/dev/tty1",R.makedev(6,0));var l=new Uint8Array(1024),h=0,g=()=>(h===0&&(h=Pe(l).byteLength),l[--h]);R.createDevice("/dev","random",g),R.createDevice("/dev","urandom",g),R.mkdir("/dev/shm"),R.mkdir("/dev/shm/tmp")},createSpecialDirectories(){R.mkdir("/proc");var l=R.mkdir("/proc/self");R.mkdir("/proc/self/fd"),R.mount({mount(){var h=R.createNode(l,"fd",16895,73);return h.node_ops={lookup(g,M){var L=+M,B=R.getStreamChecked(L),V={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>B.path}};return V.parent=V,V}},h}},{},"/proc/self/fd")},createStandardStreams(l,h,g){l?R.createDevice("/dev","stdin",l):R.symlink("/dev/tty","/dev/stdin"),h?R.createDevice("/dev","stdout",null,h):R.symlink("/dev/tty","/dev/stdout"),g?R.createDevice("/dev","stderr",null,g):R.symlink("/dev/tty1","/dev/stderr"),R.open("/dev/stdin",0),R.open("/dev/stdout",1),R.open("/dev/stderr",1)},staticInit(){[44].forEach(l=>{R.genericErrors[l]=new R.ErrnoError(l),R.genericErrors[l].stack="<generic error, no stack>"}),R.nameTable=new Array(4096),R.mount(Ee,{},"/"),R.createDefaultDirectories(),R.createDefaultDevices(),R.createSpecialDirectories(),R.filesystems={MEMFS:Ee}},init(l,h,g){R.initialized=!0,l??(l=o.stdin),h??(h=o.stdout),g??(g=o.stderr),R.createStandardStreams(l,h,g)},quit(){R.initialized=!1;for(var l=0;l<R.streams.length;l++){var h=R.streams[l];h&&R.close(h)}},findObject(l,h){var g=R.analyzePath(l,h);return g.exists?g.object:null},analyzePath(l,h){try{var g=R.lookupPath(l,{follow:!h});l=g.path}catch{}var M={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var g=R.lookupPath(l,{parent:!0});M.parentExists=!0,M.parentPath=g.path,M.parentObject=g.node,M.name=le.basename(l),g=R.lookupPath(l,{follow:!h}),M.exists=!0,M.path=g.path,M.object=g.node,M.name=g.node.name,M.isRoot=g.path==="/"}catch(L){M.error=L.errno}return M},createPath(l,h,g,M){l=typeof l=="string"?l:R.getPath(l);for(var L=h.split("/").reverse();L.length;){var B=L.pop();if(B){var V=le.join2(l,B);try{R.mkdir(V)}catch{}l=V}}return V},createFile(l,h,g,M,L){var B=le.join2(typeof l=="string"?l:R.getPath(l),h),V=Ls(M,L);return R.create(B,V)},createDataFile(l,h,g,M,L,B){var V=h;l&&(l=typeof l=="string"?l:R.getPath(l),V=h?le.join2(l,h):l);var Y=Ls(M,L),fe=R.create(V,Y);if(g){if(typeof g=="string"){for(var Se=new Array(g.length),Ve=0,We=g.length;Ve<We;++Ve)Se[Ve]=g.charCodeAt(Ve);g=Se}R.chmod(fe,Y|146);var it=R.open(fe,577);R.write(it,g,0,g.length,0,B),R.close(it),R.chmod(fe,Y)}},createDevice(l,h,g,M){var Y;var L=le.join2(typeof l=="string"?l:R.getPath(l),h),B=Ls(!!g,!!M);(Y=R.createDevice).major??(Y.major=64);var V=R.makedev(R.createDevice.major++,0);return R.registerDevice(V,{open(fe){fe.seekable=!1},close(fe){var Se;(Se=M==null?void 0:M.buffer)!=null&&Se.length&&M(10)},read(fe,Se,Ve,We,it){for(var qe=0,ht=0;ht<We;ht++){var Et;try{Et=g()}catch{throw new R.ErrnoError(29)}if(Et===void 0&&qe===0)throw new R.ErrnoError(6);if(Et==null)break;qe++,Se[Ve+ht]=Et}return qe&&(fe.node.timestamp=Date.now()),qe},write(fe,Se,Ve,We,it){for(var qe=0;qe<We;qe++)try{M(Se[Ve+qe])}catch{throw new R.ErrnoError(29)}return We&&(fe.node.timestamp=Date.now()),qe}}),R.mkdev(L,B,V)},forceLoadFile(l){if(l.isDevice||l.isFolder||l.link||l.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{l.contents=b(l.url),l.usedBytes=l.contents.length}catch{throw new R.ErrnoError(29)}},createLazyFile(l,h,g,M,L){class B{constructor(){this.lengthKnown=!1,this.chunks=[]}get(qe){if(!(qe>this.length-1||qe<0)){var ht=qe%this.chunkSize,Et=qe/this.chunkSize|0;return this.getter(Et)[ht]}}setDataGetter(qe){this.getter=qe}cacheLength(){var qe=new XMLHttpRequest;if(qe.open("HEAD",g,!1),qe.send(null),!(qe.status>=200&&qe.status<300||qe.status===304))throw new Error("Couldn't load "+g+". Status: "+qe.status);var ht=Number(qe.getResponseHeader("Content-length")),Et,sn=(Et=qe.getResponseHeader("Accept-Ranges"))&&Et==="bytes",qt=(Et=qe.getResponseHeader("Content-Encoding"))&&Et==="gzip",ei=1024*1024;sn||(ei=ht);var ti=(xi,Yr)=>{if(xi>Yr)throw new Error("invalid range ("+xi+", "+Yr+") or no bytes requested!");if(Yr>ht-1)throw new Error("only "+ht+" bytes available! programmer error!");var an=new XMLHttpRequest;if(an.open("GET",g,!1),ht!==ei&&an.setRequestHeader("Range","bytes="+xi+"-"+Yr),an.responseType="arraybuffer",an.overrideMimeType&&an.overrideMimeType("text/plain; charset=x-user-defined"),an.send(null),!(an.status>=200&&an.status<300||an.status===304))throw new Error("Couldn't load "+g+". Status: "+an.status);return an.response!==void 0?new Uint8Array(an.response||[]):J(an.responseText||"")},Ds=this;Ds.setDataGetter(xi=>{var Yr=xi*ei,an=(xi+1)*ei-1;if(an=Math.min(an,ht-1),typeof Ds.chunks[xi]>"u"&&(Ds.chunks[xi]=ti(Yr,an)),typeof Ds.chunks[xi]>"u")throw new Error("doXHR failed!");return Ds.chunks[xi]}),(qt||!ht)&&(ei=ht=1,ht=this.getter(0).length,ei=ht,P("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ht,this._chunkSize=ei,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!p)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var V=new B,Y={isDevice:!1,contents:V}}else var Y={isDevice:!1,url:g};var fe=R.createFile(l,h,Y,M,L);Y.contents?fe.contents=Y.contents:Y.url&&(fe.contents=null,fe.url=Y.url),Object.defineProperties(fe,{usedBytes:{get:function(){return this.contents.length}}});var Se={},Ve=Object.keys(fe.stream_ops);Ve.forEach(it=>{var qe=fe.stream_ops[it];Se[it]=(...ht)=>(R.forceLoadFile(fe),qe(...ht))});function We(it,qe,ht,Et,sn){var qt=it.node.contents;if(sn>=qt.length)return 0;var ei=Math.min(qt.length-sn,Et);if(qt.slice)for(var ti=0;ti<ei;ti++)qe[ht+ti]=qt[sn+ti];else for(var ti=0;ti<ei;ti++)qe[ht+ti]=qt.get(sn+ti);return ei}return Se.read=(it,qe,ht,Et,sn)=>(R.forceLoadFile(fe),We(it,qe,ht,Et,sn)),Se.mmap=(it,qe,ht,Et,sn)=>{R.forceLoadFile(fe);var qt=Me(qe);if(!qt)throw new R.ErrnoError(48);return We(it,H,qt,qe,ht),{ptr:qt,allocated:!0}},fe.stream_ops=Se,fe}},ar=(l,h)=>l?Ce(O,l,h):"",Tt={DEFAULT_POLLMASK:5,calculateAt(l,h,g){if(le.isAbs(h))return h;var M;if(l===-100)M=R.cwd();else{var L=Tt.getStreamFromFD(l);M=L.path}if(h.length==0){if(!g)throw new R.ErrnoError(44);return M}return le.join2(M,h)},doStat(l,h,g){var M=l(h);X[g>>2]=M.dev,X[g+4>>2]=M.mode,te[g+8>>2]=M.nlink,X[g+12>>2]=M.uid,X[g+16>>2]=M.gid,X[g+20>>2]=M.rdev,oe=[M.size>>>0,(j=M.size,+Math.abs(j)>=1?j>0?+Math.floor(j/4294967296)>>>0:~~+Math.ceil((j-+(~~j>>>0))/4294967296)>>>0:0)],X[g+24>>2]=oe[0],X[g+28>>2]=oe[1],X[g+32>>2]=4096,X[g+36>>2]=M.blocks;var L=M.atime.getTime(),B=M.mtime.getTime(),V=M.ctime.getTime();return oe=[Math.floor(L/1e3)>>>0,(j=Math.floor(L/1e3),+Math.abs(j)>=1?j>0?+Math.floor(j/4294967296)>>>0:~~+Math.ceil((j-+(~~j>>>0))/4294967296)>>>0:0)],X[g+40>>2]=oe[0],X[g+44>>2]=oe[1],te[g+48>>2]=L%1e3*1e3*1e3,oe=[Math.floor(B/1e3)>>>0,(j=Math.floor(B/1e3),+Math.abs(j)>=1?j>0?+Math.floor(j/4294967296)>>>0:~~+Math.ceil((j-+(~~j>>>0))/4294967296)>>>0:0)],X[g+56>>2]=oe[0],X[g+60>>2]=oe[1],te[g+64>>2]=B%1e3*1e3*1e3,oe=[Math.floor(V/1e3)>>>0,(j=Math.floor(V/1e3),+Math.abs(j)>=1?j>0?+Math.floor(j/4294967296)>>>0:~~+Math.ceil((j-+(~~j>>>0))/4294967296)>>>0:0)],X[g+72>>2]=oe[0],X[g+76>>2]=oe[1],te[g+80>>2]=V%1e3*1e3*1e3,oe=[M.ino>>>0,(j=M.ino,+Math.abs(j)>=1?j>0?+Math.floor(j/4294967296)>>>0:~~+Math.ceil((j-+(~~j>>>0))/4294967296)>>>0:0)],X[g+88>>2]=oe[0],X[g+92>>2]=oe[1],0},doMsync(l,h,g,M,L){if(!R.isFile(h.node.mode))throw new R.ErrnoError(43);if(M&2)return 0;var B=O.slice(l,l+g);R.msync(h,B,L,g,M)},getStreamFromFD(l){var h=R.getStreamChecked(l);return h},varargs:void 0,getStr(l){var h=ar(l);return h}};function Ga(l,h){try{return l=Tt.getStr(l),R.chmod(l,h),0}catch(g){if(typeof R>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function Wa(l,h,g,M){try{if(h=Tt.getStr(h),h=Tt.calculateAt(l,h),g&-8)return-28;var L=R.lookupPath(h,{follow:!0}),B=L.node;if(!B)return-44;var V="";return g&4&&(V+="r"),g&2&&(V+="w"),g&1&&(V+="x"),V&&R.nodePermissions(B,V)?-2:0}catch(Y){if(typeof R>"u"||Y.name!=="ErrnoError")throw Y;return-Y.errno}}function On(){var l=X[+Tt.varargs>>2];return Tt.varargs+=4,l}var gi=On;function Xa(l,h,g){Tt.varargs=g;try{var M=Tt.getStreamFromFD(l);switch(h){case 0:{var L=On();if(L<0)return-28;for(;R.streams[L];)L++;var B;return B=R.dupStream(M,L),B.fd}case 1:case 2:return 0;case 3:return M.flags;case 4:{var L=On();return M.flags|=L,0}case 12:{var L=gi(),V=0;return W[L+V>>1]=2,0}case 13:case 14:return 0}return-28}catch(Y){if(typeof R>"u"||Y.name!=="ErrnoError")throw Y;return-Y.errno}}function qa(l,h){try{var g=Tt.getStreamFromFD(l);return Tt.doStat(R.stat,g.path,h)}catch(M){if(typeof R>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Wr(l,h,g){Tt.varargs=g;try{var M=Tt.getStreamFromFD(l);switch(h){case 21509:return M.tty?0:-59;case 21505:{if(!M.tty)return-59;if(M.tty.ops.ioctl_tcgets){var L=M.tty.ops.ioctl_tcgets(M),B=gi();X[B>>2]=L.c_iflag||0,X[B+4>>2]=L.c_oflag||0,X[B+8>>2]=L.c_cflag||0,X[B+12>>2]=L.c_lflag||0;for(var V=0;V<32;V++)H[B+V+17]=L.c_cc[V]||0;return 0}return 0}case 21510:case 21511:case 21512:return M.tty?0:-59;case 21506:case 21507:case 21508:{if(!M.tty)return-59;if(M.tty.ops.ioctl_tcsets){for(var B=gi(),Y=X[B>>2],fe=X[B+4>>2],Se=X[B+8>>2],Ve=X[B+12>>2],We=[],V=0;V<32;V++)We.push(H[B+V+17]);return M.tty.ops.ioctl_tcsets(M.tty,h,{c_iflag:Y,c_oflag:fe,c_cflag:Se,c_lflag:Ve,c_cc:We})}return 0}case 21519:{if(!M.tty)return-59;var B=gi();return X[B>>2]=0,0}case 21520:return M.tty?-28:-59;case 21531:{var B=gi();return R.ioctl(M,h,B)}case 21523:{if(!M.tty)return-59;if(M.tty.ops.ioctl_tiocgwinsz){var it=M.tty.ops.ioctl_tiocgwinsz(M.tty),B=gi();W[B>>1]=it[0],W[B+2>>1]=it[1]}return 0}case 21524:return M.tty?0:-59;case 21515:return M.tty?0:-59;default:return-28}}catch(qe){if(typeof R>"u"||qe.name!=="ErrnoError")throw qe;return-qe.errno}}function $a(l,h){try{return l=Tt.getStr(l),Tt.doStat(R.lstat,l,h)}catch(g){if(typeof R>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function Xr(l,h,g,M){try{h=Tt.getStr(h);var L=M&256,B=M&4096;return M=M&-6401,h=Tt.calculateAt(l,h,B),Tt.doStat(L?R.lstat:R.stat,h,g)}catch(V){if(typeof R>"u"||V.name!=="ErrnoError")throw V;return-V.errno}}function Ya(l,h,g,M){Tt.varargs=M;try{h=Tt.getStr(h),h=Tt.calculateAt(l,h);var L=M?On():0;return R.open(h,g,L).fd}catch(B){if(typeof R>"u"||B.name!=="ErrnoError")throw B;return-B.errno}}function Ka(l){try{return l=Tt.getStr(l),R.rmdir(l),0}catch(h){if(typeof R>"u"||h.name!=="ErrnoError")throw h;return-h.errno}}function Cc(l,h){try{return l=Tt.getStr(l),Tt.doStat(R.stat,l,h)}catch(g){if(typeof R>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function Pc(l,h,g){try{return h=Tt.getStr(h),h=Tt.calculateAt(l,h),g===0?R.unlink(h):g===512?R.rmdir(h):_e("Invalid flags passed to unlinkat"),0}catch(M){if(typeof R>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}var Lc=()=>{_e("")},Ic=(l,h,g,M,L)=>{},ja=()=>{for(var l=new Array(256),h=0;h<256;++h)l[h]=String.fromCharCode(h);I=l},I,$=l=>{for(var h="",g=l;O[g];)h+=I[O[g++]];return h},ue={},ne={},ie={},Be,Le=l=>{throw new Be(l)},Fe,$e=l=>{throw new Fe(l)},Ze=(l,h,g)=>{l.forEach(Y=>ie[Y]=h);function M(Y){var fe=g(Y);fe.length!==l.length&&$e("Mismatched type converter count");for(var Se=0;Se<l.length;++Se)at(l[Se],fe[Se])}var L=new Array(h.length),B=[],V=0;h.forEach((Y,fe)=>{ne.hasOwnProperty(Y)?L[fe]=ne[Y]:(B.push(Y),ue.hasOwnProperty(Y)||(ue[Y]=[]),ue[Y].push(()=>{L[fe]=ne[Y],++V,V===B.length&&M(L)}))}),B.length===0&&M(L)};function mt(l,h,g={}){var M=h.name;if(l||Le(`type "${M}" must have a positive integer typeid pointer`),ne.hasOwnProperty(l)){if(g.ignoreDuplicateRegistrations)return;Le(`Cannot register type '${M}' twice`)}if(ne[l]=h,delete ie[l],ue.hasOwnProperty(l)){var L=ue[l];delete ue[l],L.forEach(B=>B())}}function at(l,h,g={}){return mt(l,h,g)}var He=8,Ct=(l,h,g,M)=>{h=$(h),at(l,{name:h,fromWireType:function(L){return!!L},toWireType:function(L,B){return B?g:M},argPackAdvance:He,readValueFromPointer:function(L){return this.fromWireType(O[L])},destructorFunction:null})},Ht=[],St=[],Pt=l=>{l>9&&--St[l+1]===0&&(St[l]=void 0,Ht.push(l))},nn=()=>St.length/2-5-Ht.length,Ge=()=>{St.push(0,1,void 0,1,null,1,!0,1,!1,1),o.count_emval_handles=nn},bt={toValue:l=>(l||Le("Cannot use deleted val. handle = "+l),St[l]),toHandle:l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const h=Ht.pop()||St.length;return St[h]=l,St[h+1]=1,h}}}};function yt(l){return this.fromWireType(te[l>>2])}var gn={name:"emscripten::val",fromWireType:l=>{var h=bt.toValue(l);return Pt(l),h},toWireType:(l,h)=>bt.toHandle(h),argPackAdvance:He,readValueFromPointer:yt,destructorFunction:null},Bn=l=>at(l,gn),_i=(l,h)=>{switch(h){case 4:return function(g){return this.fromWireType(re[g>>2])};case 8:return function(g){return this.fromWireType(pe[g>>3])};default:throw new TypeError(`invalid float width (${h}): ${l}`)}},qi=(l,h,g)=>{h=$(h),at(l,{name:h,fromWireType:M=>M,toWireType:(M,L)=>L,argPackAdvance:He,readValueFromPointer:_i(h,g),destructorFunction:null})},wt=(l,h)=>Object.defineProperty(h,"name",{value:l}),Gt=l=>{for(;l.length;){var h=l.pop(),g=l.pop();g(h)}};function Qn(l){for(var h=1;h<l.length;++h)if(l[h]!==null&&l[h].destructorFunction===void 0)return!0;return!1}function Ft(l,h){if(!(l instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof l} which is not a function`);var g=wt(l.name||"unknownFunctionName",function(){});g.prototype=l.prototype;var M=new g,L=l.apply(M,h);return L instanceof Object?L:M}function vi(l,h,g,M){for(var L=Qn(l),B=l.length-2,V=[],Y=["fn"],fe=0;fe<B;++fe)V.push(`arg${fe}`),Y.push(`arg${fe}Wired`);V=V.join(","),Y=Y.join(",");var Se=`return function (${V}) {
`;L&&(Se+=`var destructors = [];
`);for(var Ve=L?"destructors":"null",We=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],fe=0;fe<B;++fe)Se+=`var arg${fe}Wired = argType${fe}['toWireType'](${Ve}, arg${fe});
`,We.push(`argType${fe}`);if(Se+=(g||M?"var rv = ":"")+`invoker(${Y});
`,L)Se+=`runDestructors(destructors);
`;else for(var fe=2;fe<l.length;++fe){var it=fe===1?"thisWired":"arg"+(fe-2)+"Wired";l[fe].destructorFunction!==null&&(Se+=`${it}_dtor(${it});
`,We.push(`${it}_dtor`))}return g&&(Se+=`var ret = retType['fromWireType'](rv);
return ret;
`),Se+=`}
`,[We,Se]}function $i(l,h,g,M,L,B){var V=h.length;V<2&&Le("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Y=h[1]!==null&&g!==null,fe=Qn(h),Se=h[0].name!=="void",Ve=[l,Le,M,L,Gt,h[0],h[1]],We=0;We<V-2;++We)Ve.push(h[We+2]);if(!fe)for(var We=2;We<h.length;++We)h[We].destructorFunction!==null&&Ve.push(h[We].destructorFunction);let[it,qe]=vi(h,Y,Se,B);it.push(qe);var ht=Ft(Function,it)(...Ve);return wt(l,ht)}var Za=(l,h,g)=>{if(l[h].overloadTable===void 0){var M=l[h];l[h]=function(...L){return l[h].overloadTable.hasOwnProperty(L.length)||Le(`Function '${g}' called with an invalid number of arguments (${L.length}) - expects one of (${l[h].overloadTable})!`),l[h].overloadTable[L.length].apply(this,L)},l[h].overloadTable=[],l[h].overloadTable[M.argCount]=M}},Xy=(l,h,g)=>{o.hasOwnProperty(l)?((g===void 0||o[l].overloadTable!==void 0&&o[l].overloadTable[g]!==void 0)&&Le(`Cannot register public name '${l}' twice`),Za(o,l,l),o.hasOwnProperty(g)&&Le(`Cannot register multiple overloads of a function with the same number of arguments (${g})!`),o[l].overloadTable[g]=h):(o[l]=h,g!==void 0&&(o[l].numArguments=g))},qy=(l,h)=>{for(var g=[],M=0;M<l;M++)g.push(te[h+M*4>>2]);return g},$y=(l,h,g)=>{o.hasOwnProperty(l)||$e("Replacing nonexistent public symbol"),o[l].overloadTable!==void 0&&g!==void 0?o[l].overloadTable[g]=h:(o[l]=h,o[l].argCount=g)},Yy=(l,h,g)=>{l=l.replace(/p/g,"i");var M=o["dynCall_"+l];return M(h,...g)},Ja=[],Nf,Uf=l=>{var h=Ja[l];return h||(l>=Ja.length&&(Ja.length=l+1),Ja[l]=h=Nf.get(l)),h},Ky=(l,h,g=[])=>{if(l.includes("j"))return Yy(l,h,g);var M=Uf(h)(...g);return M},jy=(l,h)=>(...g)=>Ky(l,h,g),Zy=(l,h)=>{l=$(l);function g(){return l.includes("j")?jy(l,h):Uf(h)}var M=g();return typeof M!="function"&&Le(`unknown function pointer with signature ${l}: ${h}`),M},Jy=(l,h)=>{var g=wt(h,function(M){this.name=h,this.message=M;var L=new Error(M).stack;L!==void 0&&(this.stack=this.toString()+`
`+L.replace(/^Error(:[^\n]*)?\n/,""))});return g.prototype=Object.create(l.prototype),g.prototype.constructor=g,g.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},g},Ff,Of=l=>{var h=Gf(l),g=$(h);return Ii(h),g},Qy=(l,h)=>{var g=[],M={};function L(B){if(!M[B]&&!ne[B]){if(ie[B]){ie[B].forEach(L);return}g.push(B),M[B]=!0}}throw h.forEach(L),new Ff(`${l}: `+g.map(Of).join([", "]))},eM=l=>{l=l.trim();const h=l.indexOf("(");return h!==-1?l.substr(0,h):l},tM=(l,h,g,M,L,B,V,Y)=>{var fe=qy(h,g);l=$(l),l=eM(l),L=Zy(M,L),Xy(l,function(){Qy(`Cannot call ${l} due to unbound types`,fe)},h-1),Ze([],fe,Se=>{var Ve=[Se[0],null].concat(Se.slice(1));return $y(l,$i(l,Ve,null,L,B,V),h-1),[]})},nM=(l,h,g)=>{switch(h){case 1:return g?M=>H[M]:M=>O[M];case 2:return g?M=>W[M>>1]:M=>K[M>>1];case 4:return g?M=>X[M>>2]:M=>te[M>>2];default:throw new TypeError(`invalid integer width (${h}): ${l}`)}},iM=(l,h,g,M,L)=>{h=$(h);var B=Ve=>Ve;if(M===0){var V=32-8*g;B=Ve=>Ve<<V>>>V}var Y=h.includes("unsigned"),fe=(Ve,We)=>{},Se;Y?Se=function(Ve,We){return fe(We,this.name),We>>>0}:Se=function(Ve,We){return fe(We,this.name),We},at(l,{name:h,fromWireType:B,toWireType:Se,argPackAdvance:He,readValueFromPointer:nM(h,g,M!==0),destructorFunction:null})},rM=(l,h,g)=>{var M=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],L=M[h];function B(V){var Y=te[V>>2],fe=te[V+4>>2];return new L(H.buffer,fe,Y)}g=$(g),at(l,{name:g,fromWireType:B,argPackAdvance:He,readValueFromPointer:B},{ignoreDuplicateRegistrations:!0})},qr=(l,h,g)=>ct(l,O,h,g),sM=(l,h)=>{h=$(h);var g=h==="std::string";at(l,{name:h,fromWireType(M){var L=te[M>>2],B=M+4,V;if(g)for(var Y=B,fe=0;fe<=L;++fe){var Se=B+fe;if(fe==L||O[Se]==0){var Ve=Se-Y,We=ar(Y,Ve);V===void 0?V=We:(V+="\0",V+=We),Y=Se+1}}else{for(var it=new Array(L),fe=0;fe<L;++fe)it[fe]=String.fromCharCode(O[B+fe]);V=it.join("")}return Ii(M),V},toWireType(M,L){L instanceof ArrayBuffer&&(L=new Uint8Array(L));var B,V=typeof L=="string";V||L instanceof Uint8Array||L instanceof Uint8ClampedArray||L instanceof Int8Array||Le("Cannot pass non-string to std::string"),g&&V?B=et(L):B=L.length;var Y=Bc(4+B+1),fe=Y+4;if(te[Y>>2]=B,g&&V)qr(L,fe,B+1);else if(V)for(var Se=0;Se<B;++Se){var Ve=L.charCodeAt(Se);Ve>255&&(Ii(fe),Le("String has UTF-16 code units that do not fit in 8 bits")),O[fe+Se]=Ve}else for(var Se=0;Se<B;++Se)O[fe+Se]=L[Se];return M!==null&&M.push(Ii,Y),Y},argPackAdvance:He,readValueFromPointer:yt,destructorFunction(M){Ii(M)}})},Bf=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,aM=(l,h)=>{for(var g=l,M=g>>1,L=M+h/2;!(M>=L)&&K[M];)++M;if(g=M<<1,g-l>32&&Bf)return Bf.decode(O.subarray(l,g));for(var B="",V=0;!(V>=h/2);++V){var Y=W[l+V*2>>1];if(Y==0)break;B+=String.fromCharCode(Y)}return B},oM=(l,h,g)=>{if(g??(g=2147483647),g<2)return 0;g-=2;for(var M=h,L=g<l.length*2?g/2:l.length,B=0;B<L;++B){var V=l.charCodeAt(B);W[h>>1]=V,h+=2}return W[h>>1]=0,h-M},lM=l=>l.length*2,cM=(l,h)=>{for(var g=0,M="";!(g>=h/4);){var L=X[l+g*4>>2];if(L==0)break;if(++g,L>=65536){var B=L-65536;M+=String.fromCharCode(55296|B>>10,56320|B&1023)}else M+=String.fromCharCode(L)}return M},uM=(l,h,g)=>{if(g??(g=2147483647),g<4)return 0;for(var M=h,L=M+g-4,B=0;B<l.length;++B){var V=l.charCodeAt(B);if(V>=55296&&V<=57343){var Y=l.charCodeAt(++B);V=65536+((V&1023)<<10)|Y&1023}if(X[h>>2]=V,h+=4,h+4>L)break}return X[h>>2]=0,h-M},hM=l=>{for(var h=0,g=0;g<l.length;++g){var M=l.charCodeAt(g);M>=55296&&M<=57343&&++g,h+=4}return h},fM=(l,h,g)=>{g=$(g);var M,L,B,V;h===2?(M=aM,L=oM,V=lM,B=Y=>K[Y>>1]):h===4&&(M=cM,L=uM,V=hM,B=Y=>te[Y>>2]),at(l,{name:g,fromWireType:Y=>{for(var fe=te[Y>>2],Se,Ve=Y+4,We=0;We<=fe;++We){var it=Y+4+We*h;if(We==fe||B(it)==0){var qe=it-Ve,ht=M(Ve,qe);Se===void 0?Se=ht:(Se+="\0",Se+=ht),Ve=it+h}}return Ii(Y),Se},toWireType:(Y,fe)=>{typeof fe!="string"&&Le(`Cannot pass non-string to C++ string type ${g}`);var Se=V(fe),Ve=Bc(4+Se+h);return te[Ve>>2]=Se/h,L(fe,Ve+4,Se+h),Y!==null&&Y.push(Ii,Ve),Ve},argPackAdvance:He,readValueFromPointer:yt,destructorFunction(Y){Ii(Y)}})},dM=(l,h)=>{h=$(h),at(l,{isVoid:!0,name:h,argPackAdvance:0,fromWireType:()=>{},toWireType:(g,M)=>{}})},pM=1,mM=()=>pM,kf=l=>{for(var h=l.split("."),g=0;g<4;g++){var M=Number(h[g]);if(isNaN(M))return null;h[g]=M}return(h[0]|h[1]<<8|h[2]<<16|h[3]<<24)>>>0},Qa=l=>parseInt(l),gM=l=>{var h,g,M,L,B=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,V=[];if(!B.test(l))return null;if(l==="::")return[0,0,0,0,0,0,0,0];for(l.startsWith("::")?l=l.replace("::","Z:"):l=l.replace("::",":Z:"),l.indexOf(".")>0?(l=l.replace(new RegExp("[.]","g"),":"),h=l.split(":"),h[h.length-4]=Qa(h[h.length-4])+Qa(h[h.length-3])*256,h[h.length-3]=Qa(h[h.length-2])+Qa(h[h.length-1])*256,h=h.slice(0,h.length-2)):h=l.split(":"),M=0,L=0,g=0;g<h.length;g++)if(typeof h[g]=="string")if(h[g]==="Z"){for(L=0;L<8-h.length+1;L++)V[g+L]=0;M=L-1}else V[g+M]=Wf(parseInt(h[g],16));else V[g+M]=h[g];return[V[1]<<16|V[0],V[3]<<16|V[2],V[5]<<16|V[4],V[7]<<16|V[6]]},Yi={address_map:{id:1,addrs:{},names:{}},lookup_name(l){var h=kf(l);if(h!==null||(h=gM(l),h!==null))return l;var g;if(Yi.address_map.addrs[l])g=Yi.address_map.addrs[l];else{var M=Yi.address_map.id++;k(M<65535,"exceeded max address mappings of 65535"),g="172.29."+(M&255)+"."+(M&65280),Yi.address_map.names[g]=l,Yi.address_map.addrs[l]=g}return g},lookup_addr(l){return Yi.address_map.names[l]?Yi.address_map.names[l]:null}},_M=l=>{var h=ar(l);return kf(Yi.lookup_name(h))},vM=(l,h,g)=>O.copyWithin(l,h,h+g),Dc=(l,h)=>{var g=ne[l];return g===void 0&&Le(`${h} has unknown type ${Of(l)}`),g},zf=(l,h,g)=>{var M=[],L=l.toWireType(M,g);return M.length&&(te[h>>2]=bt.toHandle(M)),L},xM=(l,h,g)=>(l=bt.toValue(l),h=Dc(h,"emval::as"),zf(h,g,l)),yM={},Nc=l=>{var h=yM[l];return h===void 0?$(l):h},Uc=[],MM=(l,h,g,M,L)=>(l=Uc[l],h=bt.toValue(h),g=Nc(g),l(h,h[g],M,L)),Vf=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),SM=l=>l===0?bt.toHandle(Vf()):(l=Nc(l),bt.toHandle(Vf()[l])),bM=l=>{var h=Uc.length;return Uc.push(l),h},EM=(l,h)=>{for(var g=new Array(l),M=0;M<l;++M)g[M]=Dc(te[h+M*4>>2],"parameter "+M);return g},TM=(l,h,g)=>{var M=EM(l,h),L=M.shift();l--;var B=`return function (obj, func, destructorsRef, args) {
`,V=0,Y=[];g===0&&Y.push("obj");for(var fe=["retType"],Se=[L],Ve=0;Ve<l;++Ve)Y.push("arg"+Ve),fe.push("argType"+Ve),Se.push(M[Ve]),B+=`  var arg${Ve} = argType${Ve}.readValueFromPointer(args${V?"+"+V:""});
`,V+=M[Ve].argPackAdvance;var We=g===1?"new func":"func.call";B+=`  var rv = ${We}(${Y.join(", ")});
`,L.isVoid||(fe.push("emval_returnValue"),Se.push(zf),B+=`  return emval_returnValue(retType, destructorsRef, rv);
`),B+=`};
`,fe.push(B);var it=Ft(Function,fe)(...Se),qe=`methodCaller<(${M.map(ht=>ht.name).join(", ")}) => ${L.name}>`;return bM(wt(qe,it))},wM=(l,h)=>(l=bt.toValue(l),h=bt.toValue(h),bt.toHandle(l[h])),AM=l=>{l>9&&(St[l+1]+=1)},RM=()=>bt.toHandle([]),CM=l=>bt.toHandle(Nc(l)),PM=()=>bt.toHandle({}),LM=l=>{var h=bt.toValue(l);Gt(h),Pt(l)},IM=(l,h,g)=>{l=bt.toValue(l),h=bt.toValue(h),g=bt.toValue(g),l[h]=g},DM=(l,h)=>{l=Dc(l,"_emval_take_value");var g=l.readValueFromPointer(h);return bt.toHandle(g)},NM=l=>l%4===0&&(l%100!==0||l%400===0),UM=[0,31,60,91,121,152,182,213,244,274,305,335],FM=[0,31,59,90,120,151,181,212,243,273,304,334],OM=l=>{var h=NM(l.getFullYear()),g=h?UM:FM,M=g[l.getMonth()]+l.getDate()-1;return M},Fc=(l,h)=>h+2097152>>>0<4194305-!!l?(l>>>0)+h*4294967296:NaN;function BM(l,h,g){var M=Fc(l,h),L=new Date(M*1e3);X[g>>2]=L.getSeconds(),X[g+4>>2]=L.getMinutes(),X[g+8>>2]=L.getHours(),X[g+12>>2]=L.getDate(),X[g+16>>2]=L.getMonth(),X[g+20>>2]=L.getFullYear()-1900,X[g+24>>2]=L.getDay();var B=OM(L)|0;X[g+28>>2]=B,X[g+36>>2]=-(L.getTimezoneOffset()*60);var V=new Date(L.getFullYear(),0,1),Y=new Date(L.getFullYear(),6,1).getTimezoneOffset(),fe=V.getTimezoneOffset(),Se=(Y!=fe&&L.getTimezoneOffset()==Math.min(fe,Y))|0;X[g+32>>2]=Se}function kM(l,h,g,M,L,B,V){var Y=Fc(B,V);try{var fe=Tt.getStreamFromFD(L);g&2&&Tt.doMsync(l,fe,h,M,Y)}catch(Se){if(typeof R>"u"||Se.name!=="ErrnoError")throw Se;return-Se.errno}}var zM=(l,h,g,M)=>{var L=new Date().getFullYear(),B=new Date(L,0,1),V=new Date(L,6,1),Y=B.getTimezoneOffset(),fe=V.getTimezoneOffset(),Se=Math.max(Y,fe);te[l>>2]=Se*60,X[h>>2]=+(Y!=fe);var Ve=qe=>{var ht=qe>=0?"-":"+",Et=Math.abs(qe),sn=String(Math.floor(Et/60)).padStart(2,"0"),qt=String(Et%60).padStart(2,"0");return`UTC${ht}${sn}${qt}`},We=Ve(Y),it=Ve(fe);fe<Y?(qr(We,g,17),qr(it,M,17)):(qr(We,M,17),qr(it,g,17))},VM=()=>Date.now();function HM(){return new Error().stack.toString()}var $r=l=>{$r.shown||($r.shown={}),$r.shown[l]||($r.shown[l]=1,m&&(l="warning: "+l),y(l))};function GM(l){var h=HM(),g=h.lastIndexOf("_emscripten_log"),M=h.lastIndexOf("_emscripten_get_callstack"),L=h.indexOf(`
`,Math.max(g,M))+1;h=h.slice(L),l&8&&typeof emscripten_source_map>"u"&&($r('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),l^=8,l|=16);var B=h.split(`
`);h="";var V=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),Y=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),fe=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var Se in B){var Ve=B[Se],We="",it="",qe=0,ht=0,Et=fe.exec(Ve);if(Et&&Et.length==5)We=Et[1],it=Et[2],qe=Et[3],ht=Et[4];else if(Et=V.exec(Ve)||Y.exec(Ve),Et&&Et.length>=4)We=Et[1],it=Et[2],qe=Et[3],ht=Et[4]|0;else{h+=Ve+`
`;continue}var sn=!1;if(l&8){var qt=emscripten_source_map.originalPositionFor({line:qe,column:ht});sn=qt==null?void 0:qt.source,sn&&(l&64&&(qt.source=qt.source.substring(qt.source.replace(/\\/g,"/").lastIndexOf("/")+1)),h+=`    at ${We} (${qt.source}:${qt.line}:${qt.column})
`)}(l&16||!sn)&&(l&64&&(it=it.substring(it.replace(/\\/g,"/").lastIndexOf("/")+1)),h+=(sn?`     = ${We}`:`    at ${We}`)+` (${it}:${qe}:${ht})
`)}return h=h.replace(/\s+$/,""),h}function WM(l,h,g){var M=GM(l);if(!h||g<=0)return et(M)+1;var L=qr(M,h,g);return L+1}var Hf=()=>2147483648,XM=()=>Hf(),qM=l=>{var h=N.buffer,g=(l-h.byteLength+65535)/65536|0;try{return N.grow(g),ve(),1}catch{}},$M=l=>{var h=O.length;l>>>=0;var g=Hf();if(l>g)return!1;for(var M=1;M<=4;M*=2){var L=h*(1+.2/M);L=Math.min(L,l+100663296);var B=Math.min(g,ze(Math.max(l,L),65536)),V=qM(B);if(V)return!0}return!1},Oc={},YM=()=>E||"./this.program",Is=()=>{if(!Is.strings){var l=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:l,_:YM()};for(var g in Oc)Oc[g]===void 0?delete h[g]:h[g]=Oc[g];var M=[];for(var g in h)M.push(`${g}=${h[g]}`);Is.strings=M}return Is.strings},KM=(l,h)=>{for(var g=0;g<l.length;++g)H[h++]=l.charCodeAt(g);H[h]=0},jM=(l,h)=>{var g=0;return Is().forEach((M,L)=>{var B=h+g;te[l+L*4>>2]=B,KM(M,B),g+=M.length+1}),0},ZM=(l,h)=>{var g=Is();te[l>>2]=g.length;var M=0;return g.forEach(L=>M+=L.length+1),te[h>>2]=M,0},JM=l=>{v(l,new be(l))},QM=(l,h)=>{JM(l)},eS=QM;function tS(l){try{var h=Tt.getStreamFromFD(l);return R.close(h),0}catch(g){if(typeof R>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var nS=(l,h,g,M)=>{for(var L=0,B=0;B<g;B++){var V=te[h>>2],Y=te[h+4>>2];h+=8;var fe=R.read(l,H,V,Y,M);if(fe<0)return-1;if(L+=fe,fe<Y)break}return L};function iS(l,h,g,M){try{var L=Tt.getStreamFromFD(l),B=nS(L,h,g);return te[M>>2]=B,0}catch(V){if(typeof R>"u"||V.name!=="ErrnoError")throw V;return V.errno}}function rS(l,h,g,M,L){var B=Fc(h,g);try{if(isNaN(B))return 61;var V=Tt.getStreamFromFD(l);return R.llseek(V,B,M),oe=[V.position>>>0,(j=V.position,+Math.abs(j)>=1?j>0?+Math.floor(j/4294967296)>>>0:~~+Math.ceil((j-+(~~j>>>0))/4294967296)>>>0:0)],X[L>>2]=oe[0],X[L+4>>2]=oe[1],V.getdents&&B===0&&M===0&&(V.getdents=null),0}catch(Y){if(typeof R>"u"||Y.name!=="ErrnoError")throw Y;return Y.errno}}var sS=(l,h,g,M)=>{for(var L=0,B=0;B<g;B++){var V=te[h>>2],Y=te[h+4>>2];h+=8;var fe=R.write(l,H,V,Y,M);if(fe<0)return-1;if(L+=fe,fe<Y)break}return L};function aS(l,h,g,M){try{var L=Tt.getStreamFromFD(l),B=sS(L,h,g);return te[M>>2]=B,0}catch(V){if(typeof R>"u"||V.name!=="ErrnoError")throw V;return V.errno}}R.createPreloadedFile=Fn,R.staticInit(),ja(),Be=o.BindingError=class extends Error{constructor(h){super(h),this.name="BindingError"}},Fe=o.InternalError=class extends Error{constructor(h){super(h),this.name="InternalError"}},Ge(),Ff=o.UnboundTypeError=Jy(Error,"UnboundTypeError");var oS={M:Ga,N:Wa,h:Xa,I:qa,Q:Wr,F:$a,G:Xr,j:Ya,B:Ka,H:Cc,C:Pc,A:Lc,w:Ic,V:Ct,U:Bn,n:qi,f:tM,b:iM,a:rM,m:sM,i:fM,W:dM,J:mM,x:_M,L:vM,e:xM,q:MM,T:Pt,u:SM,p:TM,k:wM,Y:AM,X:RM,r:CM,Z:PM,o:LM,c:IM,d:DM,t:BM,s:kM,O:zM,K:VM,R:WM,z:XM,y:$M,D:jM,E:ZM,S:eS,g:tS,P:iS,v:rS,l:aS},rn=ee(),Gf=l=>(Gf=rn.aa)(l),Bc=l=>(Bc=rn.ca)(l),Ii=l=>(Ii=rn.da)(l),Wf=l=>(Wf=rn.ea)(l),Xf=(l,h)=>(Xf=rn.fa)(l,h),qf=()=>(qf=rn.ga)();o.dynCall_viijii=(l,h,g,M,L,B,V)=>(o.dynCall_viijii=rn.ha)(l,h,g,M,L,B,V),o.dynCall_viiiiji=(l,h,g,M,L,B,V,Y)=>(o.dynCall_viiiiji=rn.ia)(l,h,g,M,L,B,V,Y),o.dynCall_jiji=(l,h,g,M,L)=>(o.dynCall_jiji=rn.ja)(l,h,g,M,L),o.dynCall_iiiiij=(l,h,g,M,L,B,V)=>(o.dynCall_iiiiij=rn.ka)(l,h,g,M,L,B,V),o.dynCall_iiiiijj=(l,h,g,M,L,B,V,Y,fe)=>(o.dynCall_iiiiijj=rn.la)(l,h,g,M,L,B,V,Y,fe),o.dynCall_iiiiiijj=(l,h,g,M,L,B,V,Y,fe,Se)=>(o.dynCall_iiiiiijj=rn.ma)(l,h,g,M,L,B,V,Y,fe,Se);var eo,$f;ce=function l(){eo||Yf(),eo||(ce=l)};function Yf(){if(se>0||!$f&&($f=1,ot(),se>0))return;function l(){var h;eo||(eo=1,o.calledRun=1,!F&&(he(),u(o),(h=o.onRuntimeInitialized)==null||h.call(o),z()))}o.setStatus?(o.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>o.setStatus(""),1),l()},1)):l()}if(o.preInit)for(typeof o.preInit=="function"&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return Yf(),a=f,a})})();i.exports=t})(ic)),ic.exports}var bx=Sx();const Ex=yx(bx);let sc=null;async function Tx(){return sc||(sc=await Ex({locateFile:e=>{var t,n,r,s;if(typeof window<"u"){const a=(n=(t=window.OC)==null?void 0:t.filePath)==null?void 0:n.call(t,"files_3dmv_next","js",e);return a||`${((s=(r=window.OC)==null?void 0:r.getRootPath)==null?void 0:s.call(r))||""}/apps/files_3dmv_next/js/${e}`}return e}})),sc}async function hf(i,e,t=!1){const n=await Tx(),r=new Uint8Array(i),s=t?n.ReadIgesFile(r,null):n.ReadStepFile(r,null);if(!s||!s.success||!s.meshes||s.meshes.length===0)throw new Error(`Failed to tessellate ${t?"IGES":"STEP"} B-Rep model`);const a=[];return s.meshes.forEach((o,u)=>{var m,x,E,v,_,D;const c=new Lt;(x=(m=o.attributes)==null?void 0:m.position)!=null&&x.array&&c.setAttribute("position",new Mt(o.attributes.position.array,3)),(v=(E=o.attributes)==null?void 0:E.normal)!=null&&v.array?c.setAttribute("normal",new Mt(o.attributes.normal.array,3)):c.computeVertexNormals(),(_=o.index)!=null&&_.array&&c.setIndex(new At(o.index.array,1)),c.computeBoundingBox(),c.computeBoundingSphere();const f=o.color&&o.color.length>=3?`#${new Je(o.color[0],o.color[1],o.color[2]).getHexString()}`:"#94a3b8";let d;try{d=new Sa(c,28),d.computeBoundingSphere()}catch{}const p=o.name||`Solid ${u+1}`;a.push({name:p,metadata:{id:`solid-${u}`,originalId:`${u}`,name:p,color:f,opacity:1,visible:!0,vertexCount:((D=c.getAttribute("position"))==null?void 0:D.count)||0,triangleCount:c.getIndex()?c.getIndex().count/3:0},geometry:c,edgeGeometry:d})}),{fileName:e,fileSize:i.byteLength,bodies:a}}class wx extends Pn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Dr(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(u){r?r(u):console.error(u),s.manager.itemError(e)}},n,r)}parse(e){function t(c){const f=new DataView(c),d=32/8*3+32/8*3*3+16/8,p=f.getUint32(80,!0);if(80+32/8+p*d===f.byteLength)return!0;const x=[115,111,108,105,100];for(let E=0;E<5;E++)if(n(x,f,E))return!1;return!0}function n(c,f,d){for(let p=0,m=c.length;p<m;p++)if(c[p]!==f.getUint8(d+p))return!1;return!0}function r(c){const f=new DataView(c),d=f.getUint32(80,!0);let p,m,x,E=!1,v,_,D,C,b;for(let F=0;F<70;F++)f.getUint32(F,!1)==1129270351&&f.getUint8(F+4)==82&&f.getUint8(F+5)==61&&(E=!0,v=new Float32Array(d*3*3),_=f.getUint8(F+6)/255,D=f.getUint8(F+7)/255,C=f.getUint8(F+8)/255,b=f.getUint8(F+9)/255);const T=84,w=50,P=new Lt,y=new Float32Array(d*3*3),A=new Float32Array(d*3*3),N=new Je;for(let F=0;F<d;F++){const k=T+F*w,H=f.getFloat32(k,!0),O=f.getFloat32(k+4,!0),W=f.getFloat32(k+8,!0);if(E){const K=f.getUint16(k+48,!0);(K&32768)===0?(p=(K&31)/31,m=(K>>5&31)/31,x=(K>>10&31)/31):(p=_,m=D,x=C)}for(let K=1;K<=3;K++){const X=k+K*12,te=F*3*3+(K-1)*3;y[te]=f.getFloat32(X,!0),y[te+1]=f.getFloat32(X+4,!0),y[te+2]=f.getFloat32(X+8,!0),A[te]=H,A[te+1]=O,A[te+2]=W,E&&(N.setRGB(p,m,x,Xt),v[te]=N.r,v[te+1]=N.g,v[te+2]=N.b)}}return P.setAttribute("position",new At(y,3)),P.setAttribute("normal",new At(A,3)),E&&(P.setAttribute("color",new At(v,3)),P.hasColors=!0,P.alpha=b),P}function s(c){const f=new Lt,d=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let x=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,v=new RegExp("vertex"+E+E+E,"g"),_=new RegExp("normal"+E+E+E,"g"),D=[],C=[],b=[],T=new Z;let w,P=0,y=0,A=0;for(;(w=d.exec(c))!==null;){y=A;const N=w[0],F=(w=m.exec(N))!==null?w[1]:"";for(b.push(F);(w=p.exec(N))!==null;){let O=0,W=0;const K=w[0];for(;(w=_.exec(K))!==null;)T.x=parseFloat(w[1]),T.y=parseFloat(w[2]),T.z=parseFloat(w[3]),W++;for(;(w=v.exec(K))!==null;)D.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),C.push(T.x,T.y,T.z),O++,A++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+x),O!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+x),x++}const k=y,H=A-y;f.userData.groupNames=b,f.addGroup(k,H,P),P++}return f.setAttribute("position",new Mt(D,3)),f.setAttribute("normal",new Mt(C,3)),f}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const f=new Uint8Array(c.length);for(let d=0;d<c.length;d++)f[d]=c.charCodeAt(d)&255;return f.buffer||f}else return c}const u=o(e);return t(u)?r(u):s(a(e))}}const jn=new Je;class Ax extends Pn{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,n,r){const s=this,a=new Dr(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(u){r?r(u):console.error(u),s.manager.itemError(e)}},n,r)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(C,b=0){const T=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let w="";const P=T.exec(C);P!==null&&(w=P[1]);const y={comments:[],elements:[],headerLength:b,objInfo:""},A=w.split(/\r\n|\r|\n/);let N;function F(k,H){const O={type:k[0]};return O.type==="list"?(O.name=k[3],O.countType=k[1],O.itemType=k[2]):O.name=k[1],O.name in H&&(O.name=H[O.name]),O}for(let k=0;k<A.length;k++){let H=A[k];if(H=H.trim(),H==="")continue;const O=H.split(/\s+/),W=O.shift();switch(H=O.join(" "),W){case"format":y.format=O[0],y.version=O[1];break;case"comment":y.comments.push(H);break;case"element":N!==void 0&&y.elements.push(N),N={},N.name=O[0],N.count=parseInt(O[1]),N.properties=[];break;case"property":N.properties.push(F(O,D.propertyNameMapping));break;case"obj_info":y.objInfo=H;break;default:console.log("unhandled",W,O)}}return N!==void 0&&y.elements.push(N),y}function n(C,b){switch(b){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(C);case"float":case"double":case"float32":case"float64":return parseFloat(C)}}function r(C,b){const T={};for(let w=0;w<C.length;w++){if(b.empty())return null;if(C[w].type==="list"){const P=[],y=n(b.next(),C[w].countType);for(let A=0;A<y;A++){if(b.empty())return null;P.push(n(b.next(),C[w].itemType))}T[C[w].name]=P}else T[C[w].name]=n(b.next(),C[w].type)}return T}function s(){const C={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[],descriptors:{}};for(const b of Object.keys(D.customPropertyMapping))C[b]=[];return C}function a(C){switch(C){case"int8":case"char":return fp;case"uint8":case"uchar":return dp;case"int16":case"short":return pp;case"uint16":case"ushort":return _l;case"int32":case"int":return mp;case"uint32":case"uint":return vl;case"float32":case"float":return Mt;case"float64":case"double":return Rx}}function o(C){switch(C){case"uchar":case"uint8":return 1/255;case"ushort":case"uint16":return 1/65535;case"float":case"float32":case"double":case"float64":return 1;default:return 1/255}}function u(C){return C==="float"||C==="float32"||C==="double"||C==="float64"}function c(C){function b(te){for(const re of te){const pe=C.find(ve=>ve.name===re);if(pe)return pe}return null}const T=b(["x","px","posx"]),w=b(["y","py","posy"]),P=b(["z","pz","posz"]),y=b(["nx","normalx"]),A=b(["ny","normaly"]),N=b(["nz","normalz"]),F=b(["s","u","texture_u","tx"]),k=b(["t","v","texture_v","ty"]),H=b(["red","diffuse_red","r","diffuse_r"]),O=b(["green","diffuse_green","g","diffuse_g"]),W=b(["blue","diffuse_blue","b","diffuse_b"]),K=b(["texcoord"]),X={};for(const te of Object.keys(D.customPropertyMapping)){const pe=D.customPropertyMapping[te].map(Ae=>C.find(pt=>pt.name===Ae)),ve=pe.filter(Ae=>Ae).map(Ae=>Ae.type),Oe=ve.length>0&&ve.every(Ae=>Ae===ve[0]);X[te]={type:Oe?ve[0]:"float32",usage:pe.every(Ae=>Ae!==void 0)}}return{position:{names:[T?T.name:"x",w?w.name:"y",P?P.name:"z"],type:T?T.type:"float32",usage:!!(T&&w&&P)},normal:{names:[y?y.name:"nx",A?A.name:"ny",N?N.name:"nz"],type:y?y.type:"float32",usage:!!(y&&A&&N)},uv:{names:[F?F.name:"s",k?k.name:"t"],type:F?F.type:"float32",usage:!!(F&&k)},texcoord:{type:K?K.itemType:"float32",usage:!!K},color:{names:[H?H.name:"red",O?O.name:"green",W?W.name:"blue"],type:H?H.type:"uchar",usage:!!(H&&O&&W)},custom:X}}function f(C,b){const T=s(),w=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let P,y;(y=w.exec(C))!==null?P=y[1].split(/\s+/):P=[];const A=new Cx(P);e:for(let N=0;N<b.elements.length;N++){const F=b.elements[N],k=c(F.properties);T.descriptors[F.name]=k;for(let H=0;H<F.count;H++){const O=r(F.properties,A);if(!O)break e;p(T,F.name,O,k)}}return d(T)}function d(C){let b=new Lt;const T=C.descriptors.vertex;C.indices.length>0&&b.setIndex(C.indices);const w=a(T?T.position.type:"float32");if(b.setAttribute("position",new w(C.vertices,3)),C.normals.length>0){const P=a(T.normal.type);b.setAttribute("normal",new P(C.normals,3))}if(C.uvs.length>0){const P=a(T.uv.type);b.setAttribute("uv",new P(C.uvs,2))}if(C.colors.length>0){const P=T.color.type,y=!u(P),A=a(P);b.setAttribute("color",new A(C.colors,3,y))}if(C.faceVertexUvs.length>0||C.faceVertexColors.length>0){if(b=b.toNonIndexed(),C.faceVertexUvs.length>0){const P=a(C.descriptors.face.texcoord.type);b.setAttribute("uv",new P(C.faceVertexUvs,2))}if(C.faceVertexColors.length>0){const P=C.descriptors.face.color.type,y=!u(P),A=a(P);b.setAttribute("color",new A(C.faceVertexColors,3,y))}}for(const P of Object.keys(D.customPropertyMapping))if(C[P].length>0){const y=a(T.custom[P].type);b.setAttribute(P,new y(C[P],D.customPropertyMapping[P].length))}return b.computeBoundingSphere(),b}function p(C,b,T,w){if(b==="vertex"){const{position:P,normal:y,uv:A,color:N}=w;if(P.usage&&C.vertices.push(T[P.names[0]],T[P.names[1]],T[P.names[2]]),y.usage&&C.normals.push(T[y.names[0]],T[y.names[1]],T[y.names[2]]),A.usage&&C.uvs.push(T[A.names[0]],T[A.names[1]]),N.usage){const F=o(N.type),k=u(N.type);jn.setRGB(T[N.names[0]]*F,T[N.names[1]]*F,T[N.names[2]]*F,Xt);const H=1/F;C.colors.push(k?jn.r:Math.round(jn.r*H),k?jn.g:Math.round(jn.g*H),k?jn.b:Math.round(jn.b*H))}for(const F of Object.keys(D.customPropertyMapping))for(const k of D.customPropertyMapping[F])C[F].push(T[k])}else if(b==="face"){const P=T.vertex_indices||T.vertex_index,y=T.texcoord;P.length===3?(C.indices.push(P[0],P[1],P[2]),y&&y.length===6&&(C.faceVertexUvs.push(y[0],y[1]),C.faceVertexUvs.push(y[2],y[3]),C.faceVertexUvs.push(y[4],y[5]))):P.length===4&&(C.indices.push(P[0],P[1],P[3]),C.indices.push(P[1],P[2],P[3]));const{color:A}=w;if(A.usage){const N=o(A.type);jn.setRGB(T[A.names[0]]*N,T[A.names[1]]*N,T[A.names[2]]*N,Xt);const F=1/N,k=jn.r*F,H=jn.g*F,O=jn.b*F;C.faceVertexColors.push(k,H,O),C.faceVertexColors.push(k,H,O),C.faceVertexColors.push(k,H,O)}}}function m(C,b){const T={};let w=0;for(let P=0;P<b.length;P++){const y=b[P],A=y.valueReader;if(y.type==="list"){const N=[],F=y.countReader.read(C+w);w+=y.countReader.size;for(let k=0;k<F;k++)N.push(A.read(C+w)),w+=A.size;T[y.name]=N}else T[y.name]=A.read(C+w),w+=A.size}return[T,w]}function x(C,b,T){function w(P,y,A){switch(y){case"int8":case"char":return{read:N=>P.getInt8(N),size:1};case"uint8":case"uchar":return{read:N=>P.getUint8(N),size:1};case"int16":case"short":return{read:N=>P.getInt16(N,A),size:2};case"uint16":case"ushort":return{read:N=>P.getUint16(N,A),size:2};case"int32":case"int":return{read:N=>P.getInt32(N,A),size:4};case"uint32":case"uint":return{read:N=>P.getUint32(N,A),size:4};case"float32":case"float":return{read:N=>P.getFloat32(N,A),size:4};case"float64":case"double":return{read:N=>P.getFloat64(N,A),size:8}}}for(let P=0,y=C.length;P<y;P++){const A=C[P];A.type==="list"?(A.countReader=w(b,A.countType,T),A.valueReader=w(b,A.itemType,T)):A.valueReader=w(b,A.type,T)}}function E(C,b){const T=s(),w=b.format==="binary_little_endian",P=new DataView(C,b.headerLength);let y,A=0;for(let N=0;N<b.elements.length;N++){const F=b.elements[N],k=F.properties,H=c(k);T.descriptors[F.name]=H,x(k,P,w);for(let O=0;O<F.count;O++){y=m(A,k),A+=y[1];const W=y[0];p(T,F.name,W,H)}}return d(T)}function v(C){let b=0,T=!0,w="";const P=[],y=new TextDecoder().decode(C.subarray(0,5)),A=/^ply\r\n/.test(y);do{const N=String.fromCharCode(C[b++]);N!==`
`&&N!=="\r"?w+=N:(w==="end_header"&&(T=!1),w!==""&&(P.push(w),w=""))}while(T&&b<C.length);return A===!0&&b++,{headerText:P.join("\r")+"\r",headerLength:b}}let _;const D=this;if(e instanceof ArrayBuffer){const C=new Uint8Array(e),{headerText:b,headerLength:T}=v(C),w=t(b,T);if(w.format==="ascii"){const P=new TextDecoder().decode(C);_=f(P,w)}else _=E(e,w)}else _=f(e,t(e));return _}}class Rx extends At{constructor(e,t,n){super(new Float64Array(e),t,n)}}class Cx{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}const Px=/^[og]\s*(.+)?/,Lx=/^mtllib /,Ix=/^usemtl /,Dx=/^usemap /,ff=/\s+/,df=new Z,ac=new Z,pf=new Z,mf=new Z,Dn=new Z,Va=new Je;function Nx(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(u){const c={index:typeof u=="number"?u:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,s=this.object.geometry.normals;df.fromArray(r,e),ac.fromArray(r,t),pf.fromArray(r,n),Dn.subVectors(pf,ac),mf.subVectors(df,ac),Dn.cross(mf),Dn.normalize(),s.push(Dn.x,Dn.y,Dn.z),s.push(Dn.x,Dn.y,Dn.z),s.push(Dn.x,Dn.y,Dn.z)},addColor:function(e,t,n){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,s,a,o,u,c){const f=this.vertices.length;let d=this.parseVertexIndex(e,f),p=this.parseVertexIndex(t,f),m=this.parseVertexIndex(n,f);if(this.addVertex(d,p,m),this.addColor(d,p,m),o!==void 0&&o!==""){const x=this.normals.length;d=this.parseNormalIndex(o,x),p=this.parseNormalIndex(u,x),m=this.parseNormalIndex(c,x),this.addNormal(d,p,m)}else this.addFaceNormal(d,p,m);if(r!==void 0&&r!==""){const x=this.uvs.length;d=this.parseUVIndex(r,x),p=this.parseUVIndex(s,x),m=this.parseUVIndex(a,x),this.addUV(d,p,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return i.startObject("",!1),i}class Ux extends Pn{constructor(e){super(e),this.materials=null}load(e,t,n,r){const s=this,a=new Dr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(u){r?r(u):console.error(u),s.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Nx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let o=0,u=n.length;o<u;o++){const c=n[o].trimStart();if(c.length===0)continue;const f=c.charAt(0);if(f!=="#")if(f==="v"){const d=c.split(ff);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(Va.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Xt),t.colors.push(Va.r,Va.g,Va.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(f==="f"){const p=c.slice(1).trim().split(ff),m=[];for(let E=0,v=p.length;E<v;E++){const _=p[E];if(_.length>0){const D=_.split("/");m.push(D)}}const x=m[0];for(let E=1,v=m.length-1;E<v;E++){const _=m[E],D=m[E+1];t.addFace(x[0],_[0],D[0],x[1],_[1],D[1],x[2],_[2],D[2])}}else if(f==="l"){const d=c.substring(1).trim().split(" ");let p=[];const m=[];if(c.indexOf("/")===-1)p=d;else for(let x=0,E=d.length;x<E;x++){const v=d[x].split("/");v[0]!==""&&p.push(v[0]),v[1]!==""&&m.push(v[1])}t.addLineGeometry(p,m)}else if(f==="p"){const p=c.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((r=Px.exec(c))!==null){const d=(" "+r[0].slice(1).trim()).slice(1);t.startObject(d)}else if(Ix.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Lx.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Dx.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(f==="s"){if(r=c.split(" "),r.length>1){const p=r[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Xn;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,u=t.objects.length;o<u;o++){const c=t.objects[o],f=c.geometry,d=c.materials,p=f.type==="Line",m=f.type==="Points";let x=!1;if(f.vertices.length===0)continue;const E=new Lt;E.setAttribute("position",new Mt(f.vertices,3)),f.normals.length>0&&E.setAttribute("normal",new Mt(f.normals,3)),f.colors.length>0&&(x=!0,E.setAttribute("color",new Mt(f.colors,3))),f.hasUVIndices===!0&&E.setAttribute("uv",new Mt(f.uvs,2));const v=[];for(let D=0,C=d.length;D<C;D++){const b=d[D],T=b.name+"_"+b.smooth+"_"+x;let w=t.materials[T];if(this.materials!==null){if(w=this.materials.create(b.name),p&&w&&!(w instanceof zi)){const P=new zi;Mn.prototype.copy.call(P,w),P.color.copy(w.color),w=P}else if(m&&w&&!(w instanceof Ar)){const P=new Ar({size:10,sizeAttenuation:!1});Mn.prototype.copy.call(P,w),P.color.copy(w.color),P.map=w.map,w=P}}w===void 0&&(p?w=new zi:m?w=new Ar({size:1,sizeAttenuation:!1}):w=new Cr,w.name=b.name,w.flatShading=!b.smooth,w.vertexColors=x,t.materials[T]=w),v.push(w)}let _;if(v.length>1){for(let D=0,C=d.length;D<C;D++){const b=d[D];E.addGroup(b.groupStart,b.groupCount,D)}p?_=new ms(E,v):m?_=new va(E,v):_=new $t(E,v)}else p?_=new ms(E,v[0]):m?_=new va(E,v[0]):_=new $t(E,v[0]);_.name=c.name,s.add(_)}else if(t.vertices.length>0){const o=new Ar({size:1,sizeAttenuation:!1}),u=new Lt;u.setAttribute("position",new Mt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(u.setAttribute("color",new Mt(t.colors,3)),o.vertexColors=!0);const c=new va(u,o);s.add(c)}return s}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Sn=Uint8Array,Hr=Uint16Array,Fx=Int32Array,gf=new Sn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_f=new Sn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ox=new Sn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vf=function(i,e){for(var t=new Hr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Fx(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},xf=vf(gf,2),yf=xf.b,Bx=xf.r;yf[28]=258,Bx[258]=28;for(var kx=vf(_f,0),zx=kx.b,oc=new Hr(32768),zt=0;zt<32768;++zt){var Wi=(zt&43690)>>1|(zt&21845)<<1;Wi=(Wi&52428)>>2|(Wi&13107)<<2,Wi=(Wi&61680)>>4|(Wi&3855)<<4,oc[zt]=((Wi&65280)>>8|(Wi&255)<<8)>>1}for(var Rs=(function(i,e,t){for(var n=i.length,r=0,s=new Hr(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new Hr(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new Hr(1<<e);var u=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],f=e-i[r],d=a[i[r]-1]++<<f,p=d|(1<<f)-1;d<=p;++d)o[oc[d]>>u]=c}else for(o=new Hr(n),r=0;r<n;++r)i[r]&&(o[r]=oc[a[i[r]-1]++]>>15-i[r]);return o}),Cs=new Sn(288),zt=0;zt<144;++zt)Cs[zt]=8;for(var zt=144;zt<256;++zt)Cs[zt]=9;for(var zt=256;zt<280;++zt)Cs[zt]=7;for(var zt=280;zt<288;++zt)Cs[zt]=8;for(var Mf=new Sn(32),zt=0;zt<32;++zt)Mf[zt]=5;var Vx=Rs(Cs,9,1),Hx=Rs(Mf,5,1),lc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Zn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},cc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Gx=function(i){return(i+7)/8|0},uc=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Sn(i.subarray(e,t))},Wx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Nn=function(i,e,t){var n=new Error(e||Wx[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Nn),!t)throw n;return n},Xx=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new Sn(0);var a=!t,o=a||e.i!=2,u=e.i;a&&(t=new Sn(r*3));var c=function(Q){var se=t.length;if(Q>se){var ce=new Sn(Math.max(se*2,Q));ce.set(t),t=ce}},f=e.f||0,d=e.p||0,p=e.b||0,m=e.l,x=e.d,E=e.m,v=e.n,_=r*8;do{if(!m){f=Zn(i,d,1);var D=Zn(i,d+1,3);if(d+=3,D)if(D==1)m=Vx,x=Hx,E=9,v=5;else if(D==2){var w=Zn(i,d,31)+257,P=Zn(i,d+10,15)+4,y=w+Zn(i,d+5,31)+1;d+=14;for(var A=new Sn(y),N=new Sn(19),F=0;F<P;++F)N[Ox[F]]=Zn(i,d+F*3,7);d+=P*3;for(var k=lc(N),H=(1<<k)-1,O=Rs(N,k,1),F=0;F<y;){var W=O[Zn(i,d,H)];d+=W&15;var C=W>>4;if(C<16)A[F++]=C;else{var K=0,X=0;for(C==16?(X=3+Zn(i,d,3),d+=2,K=A[F-1]):C==17?(X=3+Zn(i,d,7),d+=3):C==18&&(X=11+Zn(i,d,127),d+=7);X--;)A[F++]=K}}var te=A.subarray(0,w),re=A.subarray(w);E=lc(te),v=lc(re),m=Rs(te,E,1),x=Rs(re,v,1)}else Nn(1);else{var C=Gx(d)+4,b=i[C-4]|i[C-3]<<8,T=C+b;if(T>r){u&&Nn(0);break}o&&c(p+b),t.set(i.subarray(C,T),p),e.b=p+=b,e.p=d=T*8,e.f=f;continue}if(d>_){u&&Nn(0);break}}o&&c(p+131072);for(var pe=(1<<E)-1,ve=(1<<v)-1,Oe=d;;Oe=d){var K=m[cc(i,d)&pe],Ae=K>>4;if(d+=K&15,d>_){u&&Nn(0);break}if(K||Nn(2),Ae<256)t[p++]=Ae;else if(Ae==256){Oe=d,m=null;break}else{var pt=Ae-254;if(Ae>264){var F=Ae-257,Ye=gf[F];pt=Zn(i,d,(1<<Ye)-1)+yf[F],d+=Ye}var ot=x[cc(i,d)&ve],he=ot>>4;ot||Nn(3),d+=ot&15;var re=zx[he];if(he>3){var Ye=_f[he];re+=cc(i,d)&(1<<Ye)-1,d+=Ye}if(d>_){u&&Nn(0);break}o&&c(p+131072);var z=p+pt;if(p<re){var G=s-re,ae=Math.min(re,z);for(G+p<0&&Nn(3);p<ae;++p)t[p]=n[G+p]}for(;p<z;++p)t[p]=t[p-re]}}e.l=m,e.p=Oe,e.b=p,e.f=f,m&&(f=1,e.m=E,e.d=x,e.n=v)}while(!f);return p!=t.length&&a?uc(t,0,p):t.subarray(0,p)},qx=new Sn(0),pi=function(i,e){return i[e]|i[e+1]<<8},Jn=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},hc=function(i,e){return Jn(i,e)+Jn(i,e+4)*4294967296};function $x(i,e){return Xx(i,{i:2},e&&e.out,e&&e.dictionary)}var fc=typeof TextDecoder<"u"&&new TextDecoder,Yx=0;try{fc.decode(qx,{stream:!0}),Yx=1}catch{}var Kx=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:uc(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function jx(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(fc)return fc.decode(i);var r=Kx(i),s=r.s,t=r.r;return t.length&&Nn(8),s}}var Zx=function(i,e){return e+30+pi(i,e+26)+pi(i,e+28)},Jx=function(i,e,t){var n=pi(i,e+28),r=jx(i.subarray(e+46,e+46+n),!(pi(i,e+8)&2048)),s=e+46+n,a=Jn(i,e+20),o=t&&a==4294967295?Qx(i,s):[a,Jn(i,e+24),Jn(i,e+42)],u=o[0],c=o[1],f=o[2];return[pi(i,e+10),u,c,r,s+pi(i,e+30)+pi(i,e+32),f]},Qx=function(i,e){for(;pi(i,e)!=1;e+=4+pi(i,e+2));return[hc(i,e+12),hc(i,e+4),hc(i,e+20)]};function ey(i,e){for(var t={},n=i.length-22;Jn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Nn(13);var r=pi(i,n+8);if(!r)return{};var s=Jn(i,n+16),a=s==4294967295||r==65535;if(a){var o=Jn(i,n-12);a=Jn(i,o)==101075792,a&&(r=Jn(i,o+32),s=Jn(i,o+48))}for(var u=0;u<r;++u){var c=Jx(i,s,a),f=c[0],d=c[1],p=c[2],m=c[3],x=c[4],E=c[5],v=Zx(i,E);s=x,f?f==8?t[m]=$x(i.subarray(v,v+d),{out:new Sn(p)}):Nn(14,"unknown compression type "+f):t[m]=uc(i,v,v+d)}return t}function ty(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,u=new Lt;let c=0;for(let f=0;f<i.length;++f){const d=i[f];let p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(d.attributes[m]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in d.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.morphAttributes[m])}if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;u.addGroup(c,m,f),c+=m}}if(t){let f=0;const d=[];for(let p=0;p<i.length;++p){const m=i[p].index;for(let x=0;x<m.count;++x)d.push(m.getX(x)+f);f+=i[p].attributes.position.count}u.setIndex(d)}for(const f in s){const d=Sf(s[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;u.setAttribute(f,d)}for(const f in a){const d=a[f][0].length;if(d!==0){u.morphAttributes=u.morphAttributes||{},u.morphAttributes[f]=[];for(let p=0;p<d;++p){const m=[];for(let E=0;E<a[f].length;++E)m.push(a[f][E][p]);const x=Sf(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;u.morphAttributes[f].push(x)}}}return u}function Sf(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const f=i[c];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*t}const a=new e(s),o=new At(a,t,n);let u=0;for(let c=0;c<i.length;++c){const f=i[c];if(f.isInterleavedBufferAttribute){const d=u/t;for(let p=0,m=f.count;p<m;p++)for(let x=0;x<t;x++){const E=f.getComponent(p,x);o.setComponent(p+d,x,E)}}else a.set(f.array,u);u+=f.count*t}return r!==void 0&&(o.gpuType=r),o}function bf(i,e){if(e===yd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===jo||e===hu){let t=i.getIndex();if(t===null){const s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===jo)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const dc=Xt,Ef="http://schemas.microsoft.com/3dmanufacturing/beamlattice/2017/02",pc="http://schemas.microsoft.com/3dmanufacturing/beamlattice/balls/2020/07";class ny extends Pn{constructor(e){super(e),this.availableExtensions=[]}load(e,t,n,r){const s=this,a=new Dr(s.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(u){r?r(u):console.error(u),s.manager.itemError(e)}},n,r)}parse(e){const t=this,n=new rh(this.manager);function r(z){let G=null,ae=null,Q,se;const ce=[],de=[];let ye;const me={},_e={},Ue={},Te=new TextDecoder;try{G=ey(new Uint8Array(z))}catch(dt){if(dt instanceof ReferenceError)return console.error("THREE.3MFLoader: fflate missing and file is compressed."),null}let st=null;for(ae in G)ae.match(/\_rels\/.rels$/)?Q=ae:ae.match(/3D\/_rels\/.*\.model\.rels$/)?se=ae:ae.match(/^3D\/[^\/]*\.model$/)?st=ae:ae.match(/^3D\/.*\/.*\.model$/)?ce.push(ae):ae.match(/^3D\/Textures?\/.*/)&&de.push(ae);if(ce.push(st),Q===void 0)throw new Error("THREE.ThreeMFLoader: Cannot find relationship file `rels` in 3MF archive.");const tt=G[Q],lt=Te.decode(tt),q=s(lt);if(se){const dt=G[se],we=Te.decode(dt);ye=s(we)}for(let dt=0;dt<ce.length;dt++){const we=ce[dt],U=G[we],S=Te.decode(U),ee=new DOMParser().parseFromString(S,"application/xml");ee.documentElement.nodeName.toLowerCase()!=="model"&&console.error("THREE.3MFLoader: Error loading 3MF - no 3MF document found: ",we);const j=ee.querySelector("model"),oe={};for(let Re=0;Re<j.attributes.length;Re++){const le=j.attributes[Re];le.name.match(/^xmlns:(.+)$/)&&(oe[le.value]=RegExp.$1)}const be=P(j);be.xml=j,0<Object.keys(oe).length&&(be.extensions=oe),me[we]=be}for(let dt=0;dt<de.length;dt++){const we=de[dt];Ue[we]=G[we].buffer}return{rels:q,modelRels:ye,model:me,printTicket:_e,texture:Ue}}function s(z){const G=[],Q=new DOMParser().parseFromString(z,"application/xml").querySelectorAll("Relationship");for(let se=0;se<Q.length;se++){const ce=Q[se],de={target:ce.getAttribute("Target"),id:ce.getAttribute("Id"),type:ce.getAttribute("Type")};G.push(de)}return G}function a(z){const G={};for(let ae=0;ae<z.length;ae++){const Q=z[ae],se=Q.getAttribute("name");0<=["Title","Designer","Description","Copyright","LicenseTerms","Rating","CreationDate","ModificationDate"].indexOf(se)&&(G[se]=Q.textContent)}return G}function o(z){const G={id:z.getAttribute("id"),basematerials:[]},ae=z.querySelectorAll("base");for(let Q=0;Q<ae.length;Q++){const se=ae[Q],ce=x(se);ce.index=Q,G.basematerials.push(ce)}return G}function u(z){return{id:z.getAttribute("id"),path:z.getAttribute("path"),contenttype:z.getAttribute("contenttype"),tilestyleu:z.getAttribute("tilestyleu"),tilestylev:z.getAttribute("tilestylev"),filter:z.getAttribute("filter")}}function c(z){const G={id:z.getAttribute("id"),texid:z.getAttribute("texid"),displaypropertiesid:z.getAttribute("displaypropertiesid")},ae=z.querySelectorAll("tex2coord"),Q=[];for(let se=0;se<ae.length;se++){const ce=ae[se],de=ce.getAttribute("u"),ye=ce.getAttribute("v");Q.push(parseFloat(de),parseFloat(ye))}return G.uvs=new Float32Array(Q),G}function f(z){const G={id:z.getAttribute("id"),displaypropertiesid:z.getAttribute("displaypropertiesid")},ae=z.querySelectorAll("color"),Q=[],se=new Je;for(let ce=0;ce<ae.length;ce++){const ye=ae[ce].getAttribute("color");se.setStyle(ye.substring(0,7),dc),Q.push(se.r,se.g,se.b)}return G.colors=new Float32Array(Q),G}function d(z){const G=z.children,ae={};for(let Q=0;Q<G.length;Q++){const se={type:G[Q].nodeName.substring(2)};for(let ce=0;ce<G[Q].attributes.length;ce++){const de=G[Q].attributes[ce];de.specified&&(se[de.name]=de.value)}ae[G[Q].getAttribute("identifier")]=se}return ae}function p(z){const G={id:z.getAttribute("id"),displayname:z.getAttribute("displayname")},ae=z.children,Q={};for(let se=0;se<ae.length;se++){const ce=ae[se];if(ce.nodeName==="i:in"||ce.nodeName==="i:out")Q[ce.nodeName==="i:in"?"inputs":"outputs"]=d(ce);else{const de=ce.children,ye={op:ce.nodeName.substring(2),identifier:ce.getAttribute("identifier")};for(let me=0;me<de.length;me++)ye[de[me].nodeName.substring(2)]=d(de[me]);Q[ye.identifier]=ye}}return G.operations=Q,G}function m(z){const G={id:z.getAttribute("id")},ae=z.querySelectorAll("pbmetallic"),Q=[];for(let se=0;se<ae.length;se++){const ce=ae[se];Q.push({name:ce.getAttribute("name"),metallicness:parseFloat(ce.getAttribute("metallicness")),roughness:parseFloat(ce.getAttribute("roughness"))})}return G.data=Q,G}function x(z){const G={};return G.name=z.getAttribute("name"),G.displaycolor=z.getAttribute("displaycolor"),G.displaypropertiesid=z.getAttribute("displaypropertiesid"),G}function E(z){const G={},ae=[],Q=z.querySelectorAll("vertices vertex");for(let me=0;me<Q.length;me++){const _e=Q[me],Ue=_e.getAttribute("x"),Te=_e.getAttribute("y"),st=_e.getAttribute("z");ae.push(parseFloat(Ue),parseFloat(Te),parseFloat(st))}G.vertices=new Float32Array(ae);const se=[],ce=[],de=z.querySelectorAll("triangles triangle");for(let me=0;me<de.length;me++){const _e=de[me],Ue=_e.getAttribute("v1"),Te=_e.getAttribute("v2"),st=_e.getAttribute("v3"),tt=_e.getAttribute("p1"),lt=_e.getAttribute("p2"),q=_e.getAttribute("p3"),dt=_e.getAttribute("pid"),we={};we.v1=parseInt(Ue,10),we.v2=parseInt(Te,10),we.v3=parseInt(st,10),ce.push(we.v1,we.v2,we.v3),tt&&(we.p1=parseInt(tt,10)),lt&&(we.p2=parseInt(lt,10)),q&&(we.p3=parseInt(q,10)),dt&&(we.pid=dt),0<Object.keys(we).length&&se.push(we)}G.triangleProperties=se,G.triangles=new Uint32Array(ce);const ye=z.getElementsByTagNameNS(Ef,"beamlattice")[0];return ye!==void 0&&(G.beamlattice=v(ye)),G}function v(z){const G={radius:parseFloat(z.getAttribute("radius")),minLength:parseFloat(z.getAttribute("minlength")),cap:z.getAttribute("cap")||"sphere",ballMode:z.getAttributeNS(pc,"ballmode")||"none",ballRadius:parseFloat(z.getAttributeNS(pc,"ballradius")),beams:[],balls:[]},ae=z.getAttribute("clippingmode")||z.getAttribute("clipping");ae!==null&&ae!=="none"&&console.warn("THREE.3MFLoader: Beam lattice clipping is not supported. The lattice is rendered unclipped.");const Q=z.getElementsByTagNameNS(Ef,"beam");for(let ce=0;ce<Q.length;ce++){const de=Q[ce],ye={v1:parseInt(de.getAttribute("v1"),10),v2:parseInt(de.getAttribute("v2"),10)},me=de.getAttribute("r1"),_e=de.getAttribute("r2");me!==null&&(ye.r1=parseFloat(me)),_e!==null&&(ye.r2=parseFloat(_e)),G.beams.push(ye)}const se=z.getElementsByTagNameNS(pc,"ball");for(let ce=0;ce<se.length;ce++){const de=se[ce],ye={vindex:parseInt(de.getAttribute("vindex"),10)},me=de.getAttribute("r");me!==null&&(ye.r=parseFloat(me)),G.balls.push(ye)}return G}function _(z){const G=[],ae=z.querySelectorAll("component");for(let Q=0;Q<ae.length;Q++){const se=ae[Q],ce=D(se);G.push(ce)}return G}function D(z){const G={};G.objectId=z.getAttribute("objectid");const ae=z.getAttribute("transform");return ae&&(G.transform=C(ae)),G}function C(z){const G=[];z.split(" ").forEach(function(Q){G.push(parseFloat(Q))});const ae=new ut;return ae.set(G[0],G[3],G[6],G[9],G[1],G[4],G[7],G[10],G[2],G[5],G[8],G[11],0,0,0,1),ae}function b(z){const G={type:z.getAttribute("type")},ae=z.getAttribute("id");ae&&(G.id=ae);const Q=z.getAttribute("pid");Q&&(G.pid=Q);const se=z.getAttribute("pindex");se&&(G.pindex=se);const ce=z.getAttribute("thumbnail");ce&&(G.thumbnail=ce);const de=z.getAttribute("partnumber");de&&(G.partnumber=de);const ye=z.getAttribute("name");ye&&(G.name=ye);const me=z.querySelector("mesh");me&&(G.mesh=E(me));const _e=z.querySelector("components");return _e&&(G.components=_(_e)),G}function T(z){const G={};G.basematerials={};const ae=z.querySelectorAll("basematerials");for(let _e=0;_e<ae.length;_e++){const Ue=ae[_e],Te=o(Ue);G.basematerials[Te.id]=Te}G.texture2d={};const Q=z.querySelectorAll("texture2d");for(let _e=0;_e<Q.length;_e++){const Ue=Q[_e],Te=u(Ue);G.texture2d[Te.id]=Te}G.colorgroup={};const se=z.querySelectorAll("colorgroup");for(let _e=0;_e<se.length;_e++){const Ue=se[_e],Te=f(Ue);G.colorgroup[Te.id]=Te}const ce=z.querySelectorAll("implicitfunction");ce.length>0&&(G.implicitfunction={});for(let _e=0;_e<ce.length;_e++){const Ue=ce[_e],Te=p(Ue);G.implicitfunction[Te.id]=Te}G.pbmetallicdisplayproperties={};const de=z.querySelectorAll("pbmetallicdisplayproperties");for(let _e=0;_e<de.length;_e++){const Ue=de[_e],Te=m(Ue);G.pbmetallicdisplayproperties[Te.id]=Te}G.texture2dgroup={};const ye=z.querySelectorAll("texture2dgroup");for(let _e=0;_e<ye.length;_e++){const Ue=ye[_e],Te=c(Ue);G.texture2dgroup[Te.id]=Te}G.object={};const me=z.querySelectorAll("object");for(let _e=0;_e<me.length;_e++){const Ue=me[_e],Te=b(Ue);G.object[Te.id]=Te}return G}function w(z){const G=[],ae=z.querySelectorAll("item");for(let Q=0;Q<ae.length;Q++){const se=ae[Q],ce={objectId:se.getAttribute("objectid")},de=se.getAttribute("transform");de&&(ce.transform=C(de)),G.push(ce)}return G}function P(z){const G={unit:z.getAttribute("unit")||"millimeter"},ae=z.querySelectorAll("metadata");ae&&(G.metadata=a(ae));const Q=z.querySelector("resources");Q&&(G.resources=T(Q));const se=z.querySelector("build");return se&&(G.build=w(se)),G}function y(z,G,ae,Q){const se=z.texid,de=ae.resources.texture2d[se];if(de){const ye=Q[de.path],me=de.contenttype,_e=new Blob([ye],{type:me}),Ue=URL.createObjectURL(_e),Te=n.load(Ue,function(){URL.revokeObjectURL(Ue)});switch(Te.colorSpace=dc,de.tilestyleu){case"wrap":Te.wrapS=ii;break;case"mirror":Te.wrapS=hr;break;case"none":case"clamp":Te.wrapS=En;break;default:Te.wrapS=ii}switch(de.tilestylev){case"wrap":Te.wrapT=ii;break;case"mirror":Te.wrapT=hr;break;case"none":case"clamp":Te.wrapT=En;break;default:Te.wrapT=ii}switch(de.filter){case"auto":Te.magFilter=Wt,Te.minFilter=zn;break;case"linear":Te.magFilter=Wt,Te.minFilter=Wt,Te.generateMipmaps=!1;break;case"nearest":Te.magFilter=Yt,Te.minFilter=Yt,Te.generateMipmaps=!1;break;default:Te.magFilter=Wt,Te.minFilter=zn}return Te}else return null}function A(z,G,ae,Q,se,ce,de){const ye=de.pindex,me={};for(let Te=0,st=G.length;Te<st;Te++){const tt=G[Te],lt=tt.p1!==void 0?tt.p1:ye;me[lt]===void 0&&(me[lt]=[]),me[lt].push(tt)}const _e=Object.keys(me),Ue=[];for(let Te=0,st=_e.length;Te<st;Te++){const tt=_e[Te],lt=me[tt],q=z.basematerials[tt],dt=re(q,Q,se,ce,de,pe),we=new Lt,U=[],S=ae.vertices;for(let j=0,oe=lt.length;j<oe;j++){const be=lt[j];U.push(S[be.v1*3+0]),U.push(S[be.v1*3+1]),U.push(S[be.v1*3+2]),U.push(S[be.v2*3+0]),U.push(S[be.v2*3+1]),U.push(S[be.v2*3+2]),U.push(S[be.v3*3+0]),U.push(S[be.v3*3+1]),U.push(S[be.v3*3+2])}we.setAttribute("position",new Mt(U,3));const ee=new $t(we,dt);Ue.push(ee)}return Ue}function N(z,G,ae,Q,se,ce,de){const ye=new Lt,me=[],_e=[],Ue=ae.vertices,Te=z.uvs;for(let q=0,dt=G.length;q<dt;q++){const we=G[q];me.push(Ue[we.v1*3+0]),me.push(Ue[we.v1*3+1]),me.push(Ue[we.v1*3+2]),me.push(Ue[we.v2*3+0]),me.push(Ue[we.v2*3+1]),me.push(Ue[we.v2*3+2]),me.push(Ue[we.v3*3+0]),me.push(Ue[we.v3*3+1]),me.push(Ue[we.v3*3+2]),_e.push(Te[we.p1*2+0]),_e.push(Te[we.p1*2+1]),_e.push(Te[we.p2*2+0]),_e.push(Te[we.p2*2+1]),_e.push(Te[we.p3*2+0]),_e.push(Te[we.p3*2+1])}ye.setAttribute("position",new Mt(me,3)),ye.setAttribute("uv",new Mt(_e,2));const st=re(z,Q,se,ce,de,y),tt=new Cr({map:st,flatShading:!0});return new $t(ye,tt)}function F(z,G,ae,Q){const se=new Lt,ce=[],de=[],ye=ae.vertices,me=z.colors;for(let Te=0,st=G.length;Te<st;Te++){const tt=G[Te],lt=tt.v1,q=tt.v2,dt=tt.v3;ce.push(ye[lt*3+0]),ce.push(ye[lt*3+1]),ce.push(ye[lt*3+2]),ce.push(ye[q*3+0]),ce.push(ye[q*3+1]),ce.push(ye[q*3+2]),ce.push(ye[dt*3+0]),ce.push(ye[dt*3+1]),ce.push(ye[dt*3+2]);const we=tt.p1!==void 0?tt.p1:Q.pindex,U=tt.p2!==void 0?tt.p2:we,S=tt.p3!==void 0?tt.p3:we;de.push(me[we*3+0]),de.push(me[we*3+1]),de.push(me[we*3+2]),de.push(me[U*3+0]),de.push(me[U*3+1]),de.push(me[U*3+2]),de.push(me[S*3+0]),de.push(me[S*3+1]),de.push(me[S*3+2])}se.setAttribute("position",new Mt(ce,3)),se.setAttribute("color",new Mt(de,3));const _e=new Cr({vertexColors:!0,flatShading:!0});return new $t(se,_e)}function k(z){const G=new Lt;G.setIndex(new At(z.triangles,1)),G.setAttribute("position",new At(z.vertices,3));const ae=new Cr({name:Pn.DEFAULT_MATERIAL_NAME,color:16777215,flatShading:!0});return new $t(G,ae)}function H(z){const G=z.beamlattice,ae=z.vertices,Q=[],se=new Z,ce=new Z,de=new Z,ye=new Z(0,1,0),me=new An,_e=new ut,Ue=G.beams,Te=G.cap!=="butt",st=new Map;for(let we=0;we<Ue.length;we++){const U=Ue[we];se.fromArray(ae,U.v1*3),ce.fromArray(ae,U.v2*3);const S=se.distanceTo(ce);if(S<G.minLength)continue;const ee=U.r1!==void 0?U.r1:G.radius,j=U.r2!==void 0?U.r2:ee,oe=new Dl(j,ee,S,8,1,Te);de.subVectors(ce,se).divideScalar(S),me.setFromUnitVectors(ye,de),_e.makeRotationFromQuaternion(me),_e.setPosition(se.add(ce).multiplyScalar(.5)),oe.applyMatrix4(_e),Q.push(oe),Te&&(st.set(U.v1,Math.max(ee,st.get(U.v1)||0)),st.set(U.v2,Math.max(j,st.get(U.v2)||0))),G.ballMode==="all"&&(st.set(U.v1,Math.max(G.ballRadius,st.get(U.v1)||0)),st.set(U.v2,Math.max(G.ballRadius,st.get(U.v2)||0)))}const tt=G.balls;for(let we=0;we<tt.length;we++){const U=tt[we],S=U.r!==void 0?U.r:G.ballRadius;st.set(U.vindex,Math.max(S,st.get(U.vindex)||0))}for(const[we,U]of st){const S=new Ul(U,8,6);se.fromArray(ae,we*3),S.translate(se.x,se.y,se.z),Q.push(S)}const lt=ty(Q),q=new Cr({name:Pn.DEFAULT_MATERIAL_NAME,color:16777215});return new $t(lt,q)}function O(z,G,ae,Q,se,ce){const de=Object.keys(z),ye=[];for(let me=0,_e=de.length;me<_e;me++){const Ue=de[me],Te=z[Ue];switch(W(Ue,Q)){case"material":const tt=Q.resources.basematerials[Ue],lt=A(tt,Te,G,ae,Q,se,ce);for(let we=0,U=lt.length;we<U;we++)ye.push(lt[we]);break;case"texture":const q=Q.resources.texture2dgroup[Ue];ye.push(N(q,Te,G,ae,Q,se,ce));break;case"vertexColors":const dt=Q.resources.colorgroup[Ue];ye.push(F(dt,Te,G,ce));break;case"default":ye.push(k(G));break;default:console.error("THREE.3MFLoader: Unsupported resource type.")}}if(ce.name)for(let me=0;me<ye.length;me++)ye[me].name=ce.name;return ye}function W(z,G){return G.resources.texture2dgroup[z]!==void 0?"texture":G.resources.basematerials[z]!==void 0?"material":G.resources.colorgroup[z]!==void 0?"vertexColors":z==="default"?"default":void 0}function K(z,G){const ae={},Q=z.triangleProperties,se=G.pid;for(let ce=0,de=Q.length;ce<de;ce++){const ye=Q[ce];let me=ye.pid!==void 0?ye.pid:se;me===void 0&&(me="default"),ae[me]===void 0&&(ae[me]=[]),ae[me].push(ye)}return ae}function X(z,G,ae,Q,se){const ce=new Xn,de=K(z,se),ye=O(de,z,G,ae,Q,se);if(z.beamlattice!==void 0){const me=H(z);se.name&&(me.name=se.name),ye.push(me)}for(let me=0,_e=ye.length;me<_e;me++)ce.add(ye[me]);return ce}function te(z,G,ae){if(!z)return;const Q=[],se=Object.keys(z);for(let ce=0;ce<se.length;ce++){const de=se[ce];for(let ye=0;ye<t.availableExtensions.length;ye++){const me=t.availableExtensions[ye];me.ns===de&&Q.push(me)}}for(let ce=0;ce<Q.length;ce++){const de=Q[ce];de.apply(ae,z[de.ns],G)}}function re(z,G,ae,Q,se,ce){return z.build!==void 0||(z.build=ce(z,G,ae,Q,se)),z.build}function pe(z,G,ae){let Q;const se=z.displaypropertiesid,ce=ae.resources.pbmetallicdisplayproperties;if(se!==null&&ce[se]!==void 0){const _e=ce[se].data[z.index];Q=new vs({flatShading:!0,roughness:_e.roughness,metalness:_e.metallicness})}else Q=new Cr({flatShading:!0});Q.name=z.name;const de=z.displaycolor,ye=de.substring(0,7);return Q.color.setStyle(ye,dc),de.length===9&&(Q.opacity=parseInt(de.charAt(7)+de.charAt(8),16)/255),Q}function ve(z,G,ae,Q){const se=new Xn;for(let ce=0;ce<z.length;ce++){const de=z[ce];let ye=G[de.objectId];ye===void 0&&(Oe(de.objectId,G,ae,Q),ye=G[de.objectId]);const me=ye.clone(),_e=de.transform;_e&&me.applyMatrix4(_e),se.add(me)}return se}function Oe(z,G,ae,Q){const se=ae.resources.object[z];if(se.mesh){const ce=se.mesh,de=ae.extensions,ye=ae.xml;te(de,ce,ye),G[se.id]=re(ce,G,ae,Q,se,X)}else{const ce=se.components;G[se.id]=re(ce,G,ae,Q,se,ve)}se.name&&(G[se.id].name=se.name),ae.resources.implicitfunction&&console.warn("THREE.ThreeMFLoader: Implicit Functions are implemented in data-only.",ae.resources.implicitfunction)}function Ae(z){const G=z.model,ae=z.modelRels,Q={},se=Object.keys(G),ce={};if(ae)for(let de=0,ye=ae.length;de<ye;de++){const me=ae[de],_e=me.target.substring(1);z.texture[_e]&&(ce[me.target]=z.texture[_e])}for(let de=0;de<se.length;de++){const ye=se[de],me=G[ye],_e=Object.keys(me.resources.object);for(let Ue=0;Ue<_e.length;Ue++){const Te=_e[Ue];Oe(Te,Q,me,ce)}}return Q}function pt(z){for(let G=0;G<z.length;G++){const ae=z[G];if(ae.target.split(".").pop().toLowerCase()==="model")return ae}}function Ye(z,G){const ae=new Xn,Q=pt(G.rels),se=G.model[Q.target.substring(1)].build;for(let ce=0;ce<se.length;ce++){const de=se[ce],ye=z[de.objectId].clone(),me=de.transform;me&&ye.applyMatrix4(me),ae.add(ye)}return ae}const ot=r(e),he=Ae(ot);return Ye(he,ot)}addExtension(e){this.availableExtensions.push(e)}}function iy(i){const e=new Map,t=new Map,n=i.clone();return Tf(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(u){return t.get(u)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Tf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Tf(i.children[n],e.children[n],t)}class ry extends Pn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new wf(t,vt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new wf(t,vt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sy(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=bs.extractUrlBase(e);a=bs.resolveURL(c,this.path)}else a=bs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},u=new Dr(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(c){try{s.parse(c,a,function(f){t(f),s.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},u=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===Af){try{a[vt.KHR_BINARY_GLTF]=new by(e)}catch(d){r&&r(d);return}s=JSON.parse(a[vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(u.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Fy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const d=this.pluginCallbacks[f](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const d=s.extensionsUsed[f],p=s.extensionsRequired||[];switch(d){case vt.KHR_MATERIALS_UNLIT:a[d]=new oy;break;case vt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ey(s,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:a[d]=new Ty;break;case vt.KHR_MESH_QUANTIZATION:a[d]=new wy;break;default:p.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function sy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Kt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ay{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const f=new Je(16777215);u.color!==void 0&&f.setRGB(u.color[0],u.color[1],u.color[2],vn);const d=u.range!==void 0?u.range:0;switch(u.type){case"directional":c=new Ra(f),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rm(f),c.distance=d;break;case"spot":c=new nm(f),c.distance=d,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,c.angle=u.spot.outerConeAngle,c.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return c.position.set(0,0,0),mi(c,u),u.intensity!==void 0&&(c.intensity=u.intensity),c.name=t.createUniqueName(u.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(u){return n._getNodeRef(t.cache,o,u)})}}class oy{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return er}extendParams(e,t,n){const r=[];e.color=new Je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Xt))}return Promise.all(r)}}class ly{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class cy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(s,s)}return Promise.all(r)}}class uy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class hy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}}class fy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];if(t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],vn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Xt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}}class dy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}}class py{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(s[0],s[1],s[2],vn),Promise.all(r)}}class my{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class gy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(s[0],s[1],s[2],vn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Xt)),Promise.all(r)}}class _y{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}}class vy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?ci:null}extendMaterialParams(e,t){const n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}}class xy{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class yy{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let u=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(u=c)}return n.loadTextureImage(e,a.source,u)}}class My{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let u=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(u=c)}return n.loadTextureImage(e,a.source,u)}}class wf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const u=r.byteOffset||0,c=r.byteLength||0,f=r.count,d=r.byteStride,p=new Uint8Array(o,u,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,d,p,r.mode,r.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(f*d);return a.decodeGltfBuffer(new Uint8Array(m),f,d,p,r.mode,r.filter),m})})}else return null}}class Sy{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Un.TRIANGLES&&c.mode!==Un.TRIANGLE_STRIP&&c.mode!==Un.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],u={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(f=>(u[c]=f,u[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const f=c.pop(),d=f.isGroup?f.children:[f],p=c[0].count,m=[];for(const x of d){const E=new ut,v=new Z,_=new An,D=new Z(1,1,1),C=new Ap(x.geometry,x.material,p);for(let T=0;T<p;T++)u.TRANSLATION&&v.fromBufferAttribute(u.TRANSLATION,T),u.ROTATION&&_.fromBufferAttribute(u.ROTATION,T),u.SCALE&&D.fromBufferAttribute(u.SCALE,T),C.setMatrixAt(T,E.compose(v,_,D));let b=null;for(const T in u)if(T==="_COLOR_0"){const w=u[T];C.instanceColor=new ca(w.array,w.itemSize,w.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(b===null){const P=C.geometry;b=new Lt,b.name=P.name;for(const y in P.attributes)b.setAttribute(y,P.attributes[y]);for(const y in P.morphAttributes)b.morphAttributes[y]=P.morphAttributes[y];P.index!==null&&b.setIndex(P.index),b.morphTargetsRelative=P.morphTargetsRelative;for(const y of P.groups)b.addGroup(y.start,y.count,y.materialIndex);P.boundingBox!==null&&(b.boundingBox=P.boundingBox.clone()),P.boundingSphere!==null&&(b.boundingSphere=P.boundingSphere.clone()),b.drawRange.start=P.drawRange.start,b.drawRange.count=P.drawRange.count,b.userData=Object.assign({},P.userData),C.geometry=b}const w=u[T];b.setAttribute(T,new ca(w.array,w.itemSize,w.normalized))}Vt.prototype.copy.call(C,x),this.parser.assignFinalMaterial(C),m.push(C)}return f.isGroup?(f.clear(),f.add(...m),f):m[0]}))}}const Af="glTF",Ps=12,Rf={JSON:1313821514,BIN:5130562};class by{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ps),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Af)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ps,s=new DataView(e,Ps);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const u=s.getUint32(a,!0);if(a+=4,u===Rf.JSON){const c=new Uint8Array(e,Ps+a,o);this.content=n.decode(c)}else if(u===Rf.BIN){const c=Ps+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ey{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},u={},c={};for(const f in a){const d=gc[f]||f.toLowerCase();o[d]=a[f]}for(const f in e.attributes){const d=gc[f]||f.toLowerCase();if(a[f]!==void 0){const p=n.accessors[e.attributes[f]],m=Gr[p.componentType];c[d]=m.name,u[d]=p.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(d,p){r.decodeDracoFile(f,function(m){for(const x in m.attributes){const E=m.attributes[x],v=u[x];v!==void 0&&(E.normalized=v)}d(m)},o,c,vn,p)})})}}class Ty{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class wy{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class Cf extends Pr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,u=o*2,c=o*3,f=r-t,d=(n-t)/f,p=d*d,m=p*d,x=e*c,E=x-c,v=-2*m+3*p,_=m-p,D=1-v,C=_-p+d;for(let b=0;b!==o;b++){const T=a[E+b+o],w=a[E+b+u]*f,P=a[x+b+o],y=a[x+b]*f;s[b]=D*T+C*w+v*P+_*y}return s}}const Ay=new An;class Ry extends Cf{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Ay.fromArray(s).normalize().toArray(s),s}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pf={9728:Yt,9729:Wt,9984:eu,9985:Fs,9986:Jr,9987:zn},Lf={33071:En,33648:hr,10497:ii},mc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cy={CUBICSPLINE:void 0,LINEAR:ns,STEP:ts},_c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Py(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new vs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),i.DefaultMaterial}function sr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ly(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,f=e.length;c<f;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],u=[];for(let c=0,f=e.length;c<f;c++){const d=e[c];if(n){const p=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(p)}if(r){const p=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(p)}if(s){const p=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;u.push(p)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(u)]).then(function(c){const f=c[0],d=c[1],p=c[2];return n&&(i.morphAttributes.position=f),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=p),i.morphTargetsRelative=!0,i})}function Iy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dy(i){let e;const t=i.extensions&&i.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vc(t.attributes):e=i.indices+":"+vc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+vc(i.targets[n]);return e}function vc(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function xc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ny(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Uy=new ut;class Fy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const u=o.match(/Version\/(\d+)/);r=n&&u?parseInt(u[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new rh(this.options.manager):this.textureLoader=new om(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return sr(s,o,r),mi(o,r),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(o)})).then(function(){for(const u of o.scenes)u.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,u=a.length;o<u;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const u=this.associations.get(a);u!=null&&this.associations.set(o,u);for(const[c,f]of a.children.entries())s(f,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(bs.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=mc[r.type],o=Gr[r.componentType],u=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new At(c,a,u))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],u=mc[r.type],c=Gr[r.componentType],f=c.BYTES_PER_ELEMENT,d=f*u,p=r.byteOffset||0,m=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0;let E,v;if(m&&m!==d){const _=Math.floor(p/m),D="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let C=t.cache.get(D);C||(E=new c(o,_*m,r.count*m/f),C=new vp(E,m/f),t.cache.add(D,C)),v=new Ml(C,u,p%m/f,x)}else o===null?E=new c(r.count*u):E=new c(o,p,r.count*u),v=new At(E,u,x);if(r.sparse!==void 0){const _=mc.SCALAR,D=Gr[r.sparse.indices.componentType],C=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,T=new D(a[1],C,r.sparse.count*_),w=new c(a[2],b,r.sparse.count*u);o!==null&&(v=new At(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let P=0,y=T.length;P<y;P++){const A=T[P];if(v.setX(A,w[P*u]),u>=2&&v.setY(A,w[P*u+1]),u>=3&&v.setZ(A,w[P*u+2]),u>=4&&v.setW(A,w[P*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=x}return v})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const u=n.manager.getHandler(a.uri);u!==null&&(o=u)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],u=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[u])return this.textureCache[u];const c=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);const p=(s.samplers||{})[a.sampler]||{};return f.magFilter=Pf[p.magFilter]||Wt,f.minFilter=Pf[p.minFilter]||zn,f.wrapS=Lf[p.wrapS]||ii,f.wrapT=Lf[p.wrapT]||ii,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Yt&&f.minFilter!==Wt,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[u]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=r.images[e],o=self.URL||self.webkitURL;let u=a.uri||"",c=!1;if(a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const p=new Blob([d],{type:a.mimeType});return u=o.createObjectURL(p),u});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(u).then(function(d){return new Promise(function(p,m){let x=p;t.isImageBitmapLoader===!0&&(x=function(E){const v=new en(E);v.needsUpdate=!0,p(v)}),t.load(bs.resolveURL(d,s.path),x,void 0,m)})}).then(function(d){return c===!0&&o.revokeObjectURL(u),mi(d,a),d.userData.mimeType=a.mimeType||Ny(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const u=s.associations.get(a);a=s.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,u)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let u=this.cache.get(o);u||(u=new Ar,Mn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(o,u)),n=u}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let u=this.cache.get(o);u||(u=new zi,Mn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(o,u)),n=u}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let u=this.cache.get(o);u||(u=n.clone(),s&&(u.vertexColors=!0),a&&(u.flatShading=!0),r&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(o,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return vs}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},u=s.extensions||{},c=[];if(u[vt.KHR_MATERIALS_UNLIT]){const d=r[vt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Je(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const p=d.baseColorFactor;o.color.setRGB(p[0],p[1],p[2],vn),o.opacity=p[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Xt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=kn);const f=s.alphaMode||_c.OPAQUE;if(f===_c.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===_c.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==er&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new nt(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==er&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==er){const d=s.emissiveFactor;o.emissive=new Je().setRGB(d[0],d[1],d[2],vn)}return s.emissiveTexture!==void 0&&a!==er&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Xt)),Promise.all(c).then(function(){const d=new a(o);return s.name&&(d.name=s.name),mi(d,s),t.associations.set(d,{materials:e}),s.extensions&&sr(r,d,s),d})}createUniqueName(e){const t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(u){return If(u,o,t)})}const a=[];for(let o=0,u=e.length;o<u;o++){const c=e[o],f=Dy(c),d=r[f];if(d)a.push(d.promise);else{let p;c.extensions&&c.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?p=s(c):p=If(new Lt,c,t),c.mode===Un.TRIANGLE_STRIP?p=p.then(m=>bf(m,hu)):c.mode===Un.TRIANGLE_FAN&&(p=p.then(m=>bf(m,jo))),r[f]={primitive:c,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let u=0,c=a.length;u<c;u++){const f=a[u].material===void 0?Py(this.cache):this.getDependency("material",a[u].material);o.push(f)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(u){const c=u.slice(0,u.length-1),f=u[u.length-1],d=[];for(let m=0,x=f.length;m<x;m++){const E=f[m],v=a[m];let _;const D=c[m];if(v.mode===Un.TRIANGLES||v.mode===Un.TRIANGLE_STRIP||v.mode===Un.TRIANGLE_FAN||v.mode===void 0){const C=s.isSkinnedMesh===!0,b=E.hasAttribute("skinIndex")&&E.hasAttribute("skinWeight");C&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),_=C&&b?new Ep(E,D):new $t(E,D),_.isSkinnedMesh===!0&&_.normalizeSkinWeights()}else if(v.mode===Un.LINES)_=new ms(E,D);else if(v.mode===Un.LINE_STRIP)_=new Ll(E,D);else if(v.mode===Un.LINE_LOOP)_=new Cp(E,D);else if(v.mode===Un.POINTS)_=new va(E,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(_.geometry.morphAttributes).length>0&&Iy(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),mi(_,s),v.extensions&&sr(r,_,v),t.assignFinalMaterial(_),d.push(_)}for(let m=0,x=d.length;m<x;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return s.extensions&&sr(r,d[0],s),d[0];const p=new Xn;s.extensions&&sr(r,p,s),t.associations.set(p,{meshes:e});for(let m=0,x=d.length;m<x;m++)p.add(d[m]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(_u.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ss(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],u=[];for(let c=0,f=a.length;c<f;c++){const d=a[c];if(d){o.push(d);const p=new ut;s!==null&&p.fromArray(s.array,c*16),u.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Rl(o,u)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],u=[],c=[],f=[];for(let d=0,p=r.channels.length;d<p;d++){const m=r.channels[d],x=r.samplers[m.sampler],E=m.target,v=E.node,_=r.parameters!==void 0?r.parameters[x.input]:x.input,D=r.parameters!==void 0?r.parameters[x.output]:x.output;E.node!==void 0&&(a.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",_)),u.push(this.getDependency("accessor",D)),c.push(x),f.push(E))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(u),Promise.all(c),Promise.all(f)]).then(function(d){const p=d[0],m=d[1],x=d[2],E=d[3],v=d[4],_=[];for(let C=0,b=p.length;C<b;C++){const T=p[C],w=m[C],P=x[C],y=E[C],A=v[C];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const N=n._createAnimationTracks(T,w,P,y,A);if(N)for(let F=0;F<N.length;F++)_.push(N[F])}const D=new $p(s,void 0,_);return mi(D,r),D})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let u=0,c=r.weights.length;u<c;u++)o.morphTargetInfluences[u]=r.weights[u]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,f=o.length;c<f;c++)a.push(n.getDependency("node",o[c]));const u=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),u]).then(function(c){const f=c[0],d=c[1],p=c[2];p!==null&&f.traverse(function(m){m.isSkinnedMesh&&m.bind(p,Uy)});for(let m=0,x=d.length;m<x;m++)f.add(d[m]);if(f.userData.pivot!==void 0&&d.length>0){const m=f.userData.pivot,x=d[0];f.pivot=new Z().fromArray(m),f.position.x-=m[0],f.position.y-=m[1],f.position.z-=m[2],x.position.set(0,0,0),delete f.userData.pivot}return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],u=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return u&&o.push(u),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let f;if(s.isBone===!0?f=new ku:c.length>1?f=new Xn:c.length===1?f=c[0]:f=new Vt,f!==c[0])for(let d=0,p=c.length;d<p;d++)f.add(c[d]);if(s.name&&(f.userData.name=s.name,f.name=a),mi(f,s),s.extensions&&sr(n,f,s),s.matrix!==void 0){const d=new ut;d.fromArray(s.matrix),f.applyMatrix4(d)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);if(!r.associations.has(f))r.associations.set(f,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const d=r.associations.get(f);r.associations.set(f,{...d})}return r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Xn;n.name&&(s.name=r.createUniqueName(n.name)),mi(s,n),n.extensions&&sr(t,s,n);const a=n.nodes||[],o=[];for(let u=0,c=a.length;u<c;u++)o.push(r.getDependency("node",a[u]));return Promise.all(o).then(function(u){for(let f=0,d=u.length;f<d;f++){const p=u[f];p.parent!==null?s.add(iy(p)):s.add(p)}const c=f=>{const d=new Map;for(const[p,m]of r.associations)(p instanceof Mn||p instanceof en)&&d.set(p,m);return f.traverse(p=>{const m=r.associations.get(p);m!=null&&d.set(p,m)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,u=[];function c(m){m.morphTargetInfluences&&u.push(m.name?m.name:m.uuid)}Xi[s.path]===Xi.weights?(c(e),e.isGroup&&e.children.forEach(c)):u.push(o);let f;switch(Xi[s.path]){case Xi.weights:f=xs;break;case Xi.rotation:f=ys;break;case Xi.translation:case Xi.scale:f=Ta;break;default:switch(n.itemSize){case 1:f=xs;break;case 2:case 3:default:f=Ta;break}break}const d=r.interpolation!==void 0?Cy[r.interpolation]:ns,p=this._getArrayFromAccessor(n);for(let m=0,x=u.length;m<x;m++){const E=new f(u[m]+"."+Xi[s.path],t.array,p,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),a.push(E)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xc(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ys?Ry:Cf;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Oy(i,e,t){const n=e.attributes,r=new $n;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],u=o.min,c=o.max;if(u!==void 0&&c!==void 0){if(r.set(new Z(u[0],u[1],u[2]),new Z(c[0],c[1],c[2])),o.normalized){const f=xc(Gr[o.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new Z,u=new Z;for(let c=0,f=s.length;c<f;c++){const d=s[c];if(d.POSITION!==void 0){const p=t.json.accessors[d.POSITION],m=p.min,x=p.max;if(m!==void 0&&x!==void 0){if(u.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),u.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),u.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),p.normalized){const E=xc(Gr[p.componentType]);u.multiplyScalar(E)}o.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new oi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function If(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(u){i.setAttribute(o,u)})}for(const a in n){const o=gc[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return xt.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),mi(i,e),Oy(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Ly(i,e.targets,t):i})}function yc(i,e,t="#94a3b8"){var a;i.getAttribute("normal")||i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere();let n;try{n=new Sa(i,28),n.computeBoundingSphere()}catch{}const r=((a=i.getAttribute("position"))==null?void 0:a.count)||0,s=i.getIndex()?i.getIndex().count/3:r/3;return{name:e,metadata:{id:`mesh-${Math.random().toString(36).substring(2,9)}`,originalId:e,name:e,color:t,opacity:1,visible:!0,vertexCount:r,triangleCount:Math.floor(s)},geometry:i,edgeGeometry:n}}function Mc(i,e){const t=[];let n=1;return i.traverse(r=>{if(r instanceof $t&&r.geometry){const s=r.geometry.clone();r.updateMatrixWorld(),s.applyMatrix4(r.matrixWorld);let a="#94a3b8";if(r.material){const u=Array.isArray(r.material)?r.material[0]:r.material;u&&"color"in u&&u.color instanceof Je&&(a=`#${u.color.getHexString()}`)}const o=r.name||`${e} Part ${n++}`;t.push(yc(s,o,a))}}),t}async function By(i,e){var s;const t=(s=e.split(".").pop())==null?void 0:s.toLowerCase(),n=e.replace(/\.[^/.]+$/,"");let r=[];switch(t){case"stl":{const o=new wx().parse(i);r=[yc(o,n,"#38bdf8")];break}case"ply":{const o=new Ax().parse(i);r=[yc(o,n,"#10b981")];break}case"obj":{const a=new TextDecoder().decode(i),u=new Ux().parse(a);r=Mc(u,n);break}case"3mf":{const o=new ny().parse(i);r=Mc(o,n);break}case"gltf":case"glb":{const a=new ry,o=await new Promise((u,c)=>{a.parse(i,"",u,c)});o.scene&&(r=Mc(o.scene,n));break}default:throw new Error(`Unsupported mesh format .${t}`)}if(r.length===0)throw new Error(`No 3D meshes found in ${e}`);return{fileName:e,fileSize:i.byteLength,bodies:r}}async function ky(i,e,t){var s;const r=(s=e.split("?")[0].split(".").pop())==null?void 0:s.toLowerCase();switch(r){case"rsdocx":case"rsdoc":return await xx(i,e,t);case"step":case"stp":return t==null||t("STEP B-Rep 解析中...",50),await hf(i,e,!1);case"iges":case"igs":return t==null||t("IGES B-Rep 解析中...",50),await hf(i,e,!0);case"stl":case"ply":case"obj":case"3mf":case"gltf":case"glb":return t==null||t("3Dメッシュ構築中...",50),await By(i,e);default:throw new Error(`Unsupported 3D format: .${r}`)}}const Df=["application/octet-stream","model/stl","model/step","model/iges","model/obj","model/ply","model/3mf","model/gltf+json","model/gltf-binary","application/sla","application/step","application/x-step","application/iges","application/prs.wavefront-obj","application/vnd.spaceclaim.rsdocx","application/vnd.spaceclaim.rsdoc","application/x-b","application/x-t"];function zy(i){var t,n;if(typeof i.basename=="string"&&i.basename.length>0)return decodeURIComponent(i.basename.split("?")[0]);if((t=i.fileInfo)!=null&&t.name)return decodeURIComponent(i.fileInfo.name.split("?")[0]);if((n=i.file)!=null&&n.name)return decodeURIComponent(i.file.name.split("?")[0]);const e=[i.filename,i.path,i.source,i.davPath,i.src];for(const r of e)if(typeof r=="string"&&r.length>0){const a=r.split("?")[0].replace(/\/+$/,"").split("/").pop();if(a&&a.includes("."))return decodeURIComponent(a)}return"model.stl"}function Vy(i){var t,n,r,s;let e=i.source||i.davPath||i.src;if(!e&&((t=i.fileInfo)!=null&&t.url)&&(e=i.fileInfo.url),!e&&((n=i.file)!=null&&n.url)&&(e=i.file.url),!e&&i.filename&&(e=i.filename),!e&&i.path){const a=((s=(r=window.OC)==null?void 0:r.linkToRemoteBase)==null?void 0:s.call(r,"webdav"))||"/remote.php/webdav",o=i.path;e=`${a}${o.startsWith("/")?"":"/"}${encodeURI(o)}`}return e||""}const Hy={name:"CadViewerNext",props:["src","source","davPath","mime","filename","basename","active","path","file","fileInfo"],data(){return{isLoading:!0,loadingMessage:"3D CAD モデルを取得中...",error:null}},watch:{active(i){i?this.start():this.stop()}},mounted(){typeof this.doneLoading=="function"&&this.doneLoading(),typeof this.updateHeightWidth=="function"&&this.updateHeightWidth(),this.start()},beforeDestroy(){this.stop()},methods:{async start(){if(this.viewport)return;const i=this.$refs.mountPoint;if(i){this.viewport=ex(i),this.isLoading=!0,this.error=null,this.loadingMessage="3D CAD モデルを取得中...";try{const e=Vy(this),t=zy(this);if(!e)throw new Error("ファイルの取得URLを解決できませんでした。");const n=await fetch(e);if(!n.ok)throw new Error(`ダウンロードに失敗しました (Status: ${n.status})`);this.loadingMessage="幾何解析中...";const r=await n.arrayBuffer(),s=await ky(r,t,a=>{this.loadingMessage=a});this.viewport&&this.viewport.updateBodies(s.bodies),this.isLoading=!1}catch(e){console.error("[files_3dmv_next]",e),this.error=(e==null?void 0:e.message)||String(e),this.isLoading=!1}}},stop(){this.viewport&&(this.viewport.dispose(),this.viewport=null)}},render(i){const e=[i("div",{ref:"mountPoint",style:{width:"100%",height:"100%",position:"relative"}})];return this.isLoading&&e.push(i("div",{style:{position:"absolute",inset:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(15, 23, 42, 0.75)",backdropFilter:"blur(8px)",color:"#38bdf8",fontFamily:"monospace",fontSize:"13px",gap:"12px",zIndex:"50"}},[i("div",{style:{width:"36px",height:"36px",border:"3px solid rgba(56, 189, 248, 0.2)",borderTopColor:"#38bdf8",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),i("div",this.loadingMessage)])),this.error&&e.push(i("div",{style:{position:"absolute",inset:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(15, 23, 42, 0.85)",color:"#f87171",fontFamily:"monospace",fontSize:"13px",padding:"24px",textAlign:"center",zIndex:"50"}},[i("div",{style:{fontWeight:"bold",marginBottom:"8px"}},"3D モデルの表示に失敗しました"),i("div",{style:{color:"#94a3b8",fontSize:"11px"}},this.error)])),i("div",{class:"files_3dmv_next-root",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",backgroundColor:"#0f172a"}},e)}};function Gy(){var t,n;const i={id:"files_3dmv_next",group:"3d",canCompare:!1,mimes:Df,component:Hy},e=window.OCA;if(e!=null&&e.Viewer)try{(t=e.Viewer.availableHandlers)!=null&&t.some(r=>r.id===i.id)||e.Viewer.registerHandler(i)}catch(r){(n=r==null?void 0:r.message)!=null&&n.includes("already registered")||console.warn("[files_3dmv_next] registerHandler failed:",r)}else window._oca_viewer_handlers=window._oca_viewer_handlers||[],window._oca_viewer_handlers.some(r=>r.id===i.id)||window._oca_viewer_handlers.push(i)}function Wy(){var e;const i=window.OCA;(e=i==null?void 0:i.Files)!=null&&e.fileActions&&Df.forEach(t=>{try{i.Files.fileActions.registerAction({name:"Open3D",displayName:"3D表示",mime:t,permissions:1,iconClass:"icon-category-multimedia",actionHandler:(n,r)=>{var c;const s=(c=n.split("?")[0].split(".").pop())==null?void 0:c.toLowerCase(),a={rsdocx:"application/vnd.spaceclaim.rsdocx",rsdoc:"application/vnd.spaceclaim.rsdoc",stl:"model/stl",step:"model/step",stp:"model/step",iges:"model/iges",igs:"model/iges",ply:"model/ply",obj:"model/obj","3mf":"model/3mf",gltf:"model/gltf+json",glb:"model/gltf-binary",x_b:"application/x-b",x_t:"application/x-t"},o=s&&a[s]?a[s]:t,u=r!=null&&r.fileInfo?{...r.fileInfo,mime:o}:{filename:(r!=null&&r.dir?r.dir.endsWith("/")?r.dir:r.dir+"/":"")+n,basename:n,mime:o};i.Viewer&&(typeof i.Viewer.openWith=="function"?i.Viewer.openWith("files_3dmv_next",{fileInfo:u,list:[u]}):i.Viewer.open({fileInfo:u,list:[u]}))}}),i.Files.fileActions.setDefault(t,"Open3D")}catch{}})}function Sc(){Gy(),Wy()}Sc(),typeof window<"u"&&(window.addEventListener("DOMContentLoaded",Sc),window.addEventListener("load",Sc))})();
