(()=>{var X0=Object.create;var mh=Object.defineProperty;var j0=Object.getOwnPropertyDescriptor;var K0=Object.getOwnPropertyNames;var J0=Object.getPrototypeOf,Y0=Object.prototype.hasOwnProperty;var Et=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var jf=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},Io=(i,e)=>{for(var t in e)mh(i,t,{get:e[t],enumerable:!0})},$0=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of K0(e))!Y0.call(i,s)&&s!==t&&mh(i,s,{get:()=>e[s],enumerable:!(n=j0(e,s))||n.enumerable});return i};var Kf=(i,e,t)=>(t=i!=null?X0(J0(i)):{},$0(e||!i||!i.__esModule?mh(t,"default",{value:i,enumerable:!0}):t,i));function Z0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Q0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _m(){let i=Rr("canvas");return i.style.display="block",i}function Aa(...i){let e="THREE."+i.shift();Cr?Cr("log",e,...i):console.log(e,...i)}function xm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=xm(i);let e="THREE."+i.shift();if(Cr)Cr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=xm(i);let e="THREE."+i.shift();if(Cr)Cr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Os(...i){let e=i.join(" ");e in Jf||(Jf[e]=!0,Ie(...i))}function ym(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Su(i,e){return(i%e+e)%e}function eb(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function tb(i,e,t){return i!==e?(t-i)/(e-i):0}function Ta(i,e,t){return(1-t)*i+t*e}function nb(i,e,t,n){return Ta(i,e,1-Math.exp(-t*n))}function ib(i,e=1){return e-Math.abs(Su(i,e*2)-e)}function sb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ab(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ob(i,e){return i+Math.random()*(e-i)}function cb(i){return i*(.5-Math.random())}function lb(i){i!==void 0&&(Yf=i);let e=Yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hb(i){return i*Ma}function ub(i){return i*Bs}function db(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function fb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pb(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tu(i,e){if(e.constructor===Float32Array)return i;let t=xl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Eu(i,e){if(e.constructor===Float32Array)return i;let t=xl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function mb(){let i={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ji?wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mn]:{primaries:e,whitePoint:n,transfer:wa,toXYZ:Zf,fromXYZ:Qf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Zf,fromXYZ:Qf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function _h(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}function vh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ch(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Is.fromArray(i,r);let o=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),c=e.dot(Is),l=t.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function cp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=xi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function Ib(i,e,t,n,s,r,a,o){let c;if(e.side===en?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===bi,o),c===null)return null;Xo.copy(o),Xo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Xo);return l<t.near||l>t.far?null:{distance:l,point:Xo.clone(),object:i}}function jo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Go),i.getVertexPosition(c,Vo),i.getVertexPosition(l,Wo);let h=Ib(i,e,t,n,Go,Vo,Wo,up);if(h){let u=new P;us.getBarycoord(up,Go,Vo,Wo,u),s&&(h.uv=us.getInterpolatedAttribute(s,o,c,l,u,new Ge)),r&&(h.uv1=us.getInterpolatedAttribute(r,o,c,l,u,new Ge)),a&&(h.normal=us.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};us.getNormal(Go,Vo,Wo,d.normal),h.face=d,h.barycoord=u}return h}function Zo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(gc.fromBufferAttribute(o,s),bc.fromBufferAttribute(o,r),t.distanceSqToSegment(gc,bc,Uh,vp)>n)return;Uh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Uh);if(!(l<e.near||l>e.far))return{distance:l,point:vp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Ep(i,e,t,n,s,r,a){let o=Gh.distanceSqToPoint(i);if(o<t){let c=new P;Gh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wp(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function wp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ob(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}function hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Bb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ap(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function zb(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function Tm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Hb(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Gb(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Tm(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Hb(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function Rp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Cp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function Vb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return Wa;case"quaternion":return Gi;case"bool":case"boolean":return zi;case"string":return Vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Vb(i.type);if(i.times===void 0){let n=[],s=[];zb(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Sa(i.settings)&&(t.settings={inTangents:hs(i.settings.inTangents,Float32Array),outTangents:hs(i.settings.outTangents,Float32Array)}),t}function Pp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Op(i,e){return i.distance-e.distance}function Kh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Kh(r[a],e,t,!0)}}function Cu(i,e,t,n){let s=e_(n);switch(t){case fu:return i*e;case kc:return i*e/s.components*s.byteLength;case Bc:return i*e/s.components*s.byteLength;case bs:return i*e*2/s.components*s.byteLength;case zc:return i*e*2/s.components*s.byteLength;case pu:return i*e*3/s.components*s.byteLength;case Jn:return i*e*4/s.components*s.byteLength;case Hc:return i*e*4/s.components*s.byteLength;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:case qc:return Math.max(i,16)*Math.max(e,8)/4;case Gc:case Wc:return Math.max(i,8)*Math.max(e,8)/2;case Xc:case jc:case Jc:case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kc:case ro:case $c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dl:case fl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ao:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e_(i){switch(i){case En:case lu:return{byteLength:1,components:1};case Jr:case hu:case si:return{byteLength:2,components:1};case Oc:case Uc:return{byteLength:2,components:4};case ii:case Fc:case On:return{byteLength:4,components:1};case uu:case du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Up,Yh,kp,Qa,Pc,qr,bi,en,tn,js,Xr,$h,Zh,Qh,Bp,Ks,zp,Hp,Gp,Vp,Wp,qp,Xp,jp,eu,tu,Kp,Jp,Yp,$p,Zp,Qp,em,tm,nm,rc,ac,oc,Er,cc,lc,hc,uc,Ic,im,sm,_i,nu,iu,su,eo,ru,au,ou,zh,rm,cu,Js,jr,Lc,Dc,ui,qn,wr,Nt,Nc,Ys,Gt,Kr,Kn,En,lu,hu,Jr,Fc,ii,On,si,Oc,Uc,$s,uu,du,fu,pu,Jn,Ui,Xi,kc,Bc,bs,zc,Hc,to,no,io,so,Gc,Vc,Wc,qc,Xc,jc,Kc,Jc,Yc,ro,$c,Zc,Qc,el,tl,nl,il,sl,rl,al,ol,cl,ll,hl,ul,dl,fl,pl,ml,gl,ao,bl,am,om,cm,Us,ks,ic,Hh,Ns,Fs,Ea,_l,lm,mu,oo,Yr,hm,co,um,ji,Rt,mn,wa,ut,sc,dm,fm,pm,mm,gu,gm,bm,bu,_u,xu,yu,vu,Xn,Ar,Jf,Cr,vm,ni,rn,Yf,Ma,Bs,bt,Ge,Lt,P,gh,$f,Be,bh,Zf,Qf,Qe,hr,dc,gb,Pr,bb,xh,Vt,ft,fc,Ln,Ra,pc,Ve,ur,Qn,_b,xb,rs,Lo,Cn,ep,tp,jn,Ir,yb,np,dr,Pi,Do,pa,vb,Sb,ip,sp,rp,ap,Mb,fr,yh,vt,zt,Tb,Lr,Sm,as,No,Fe,an,Ca,zs,ei,Ii,Sh,Li,pr,mr,op,Mh,Th,Eh,wh,Ah,Rh,us,Dn,Di,ti,Fo,gr,br,_r,os,cs,Ps,ma,Oo,Uo,Is,Ot,ko,Eb,Ht,Pa,Ia,st,wb,ga,Ph,Sn,Ab,Wn,Ih,xr,Pn,ba,$t,Ct,Dr,pn,Nr,Lh,Rb,Cb,In,Pb,gn,Ni,Dh,Bo,zo,ds,bn,lp,Ls,Ho,hp,Go,Vo,Wo,Nh,qo,up,Xo,he,_a,dp,fp,Lb,pp,Ko,Fh,mp,Oh,La,Fr,Or,gp,Db,Da,ki,yr,bp,Jo,_p,Nb,xa,ya,di,Ds,Fb,Yo,fs,xp,mc,Ur,gc,bc,yp,va,$o,Uh,vp,Hs,Sp,Mp,Na,Fa,kr,Tp,Gh,Qo,ec,Oa,Ua,Br,Bi,ka,Ba,pt,ps,fi,Mn,ms,zr,Gs,za,Hr,on,Vs,Nn,Ha,Mm,Ub,kb,pi,_c,rt,_n,Ga,xc,yc,mi,vc,Va,Sc,Mc,Tn,zi,Wa,Hi,Tc,Gi,Vi,gs,Wi,hi,Ec,Em,gi,Fi,Vh,Gr,vr,wc,qa,Ws,Xa,kh,Ip,Lp,Vr,tc,nc,li,ja,ls,Dp,Np,Bt,Wh,Ka,qh,Fn,qs,Xh,Xs,qi,Bh,Ja,Sr,Mr,Wr,Ac,Rc,Au,qb,Ru,Xb,jb,Kb,Jb,Yb,$b,Zb,jh,gt,Cc,Qb,Ya,Fp,$a,Za,Jh,Pu=Et(()=>{Up=0,Yh=1,kp=2,Qa=1,Pc=2,qr=3,bi=0,en=1,tn=2,js=0,Xr=1,$h=2,Zh=3,Qh=4,Bp=5,Ks=100,zp=101,Hp=102,Gp=103,Vp=104,Wp=200,qp=201,Xp=202,jp=203,eu=204,tu=205,Kp=206,Jp=207,Yp=208,$p=209,Zp=210,Qp=211,em=212,tm=213,nm=214,rc=0,ac=1,oc=2,Er=3,cc=4,lc=5,hc=6,uc=7,Ic=0,im=1,sm=2,_i=0,nu=1,iu=2,su=3,eo=4,ru=5,au=6,ou=7,zh="attached",rm="detached",cu=300,Js=301,jr=302,Lc=303,Dc=304,ui=1e3,qn=1001,wr=1002,Nt=1003,Nc=1004,Ys=1005,Gt=1006,Kr=1007,Kn=1008,En=1009,lu=1010,hu=1011,Jr=1012,Fc=1013,ii=1014,On=1015,si=1016,Oc=1017,Uc=1018,$s=1020,uu=35902,du=35899,fu=1021,pu=1022,Jn=1023,Ui=1026,Xi=1027,kc=1028,Bc=1029,bs=1030,zc=1031,Hc=1033,to=33776,no=33777,io=33778,so=33779,Gc=35840,Vc=35841,Wc=35842,qc=35843,Xc=36196,jc=37492,Kc=37496,Jc=37488,Yc=37489,ro=37490,$c=37491,Zc=37808,Qc=37809,el=37810,tl=37811,nl=37812,il=37813,sl=37814,rl=37815,al=37816,ol=37817,cl=37818,ll=37819,hl=37820,ul=37821,dl=36492,fl=36494,pl=36495,ml=36283,gl=36284,ao=36285,bl=36286,am=2200,om=2201,cm=2202,Us=2300,ks=2301,ic=2302,Hh=2303,Ns=2400,Fs=2401,Ea=2402,_l=2500,lm=2501,mu=0,oo=1,Yr=2,hm=3200,co=0,um=1,ji="",Rt="srgb",mn="srgb-linear",wa="linear",ut="srgb",sc=7680,dm=519,fm=512,pm=513,mm=514,gu=515,gm=516,bm=517,bu=518,_u=519,xu=35044,yu=35048,vu="300 es",Xn=2e3,Ar=2001;Jf={},Cr=null;vm={[rc]:rc,[oc]:hc,[cc]:cc,[Er]:lc,[ac]:ac,[hc]:oc,[uc]:uc,[lc]:Er},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=1234567,Ma=Math.PI/180,Bs=180/Math.PI;bt={DEG2RAD:Ma,RAD2DEG:Bs,generateUUID:xi,clamp:tt,euclideanModulo:Su,mapLinear:eb,inverseLerp:tb,lerp:Ta,damp:nb,pingpong:ib,smoothstep:sb,smootherstep:rb,randInt:ab,randFloat:ob,randFloatSpread:cb,seededRandom:lb,degToRad:hb,radToDeg:ub,isPowerOfTwo:db,ceilPowerOfTwo:fb,floorPowerOfTwo:Mu,setQuaternionFromProperEuler:pb,normalize:Eu,denormalize:Tu},Ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let x=Math.acos(m),M=Math.sin(x);p=Math.sin(p*x)/M,o=Math.sin(o*x)/M,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+y*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+y*o;let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($f.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gh=new P,$f=new Lt,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],x=s[1],M=s[4],_=s[7],w=s[2],v=s[5],b=s[8];return r[0]=a*y+o*x+c*w,r[3]=a*m+o*M+c*v,r[6]=a*p+o*_+c*b,r[1]=l*y+h*x+u*w,r[4]=l*m+h*M+u*v,r[7]=l*p+h*_+u*b,r[2]=d*y+f*x+g*w,r[5]=d*m+f*M+g*v,r[8]=d*p+f*_+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bh.makeScale(e,t)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bh=new Be,Zf=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qf=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe=mb();dc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Rr("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gb=0,Pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_h(s[a].image)):r.push(_h(s[a]))}else r=_h(s);n.url=r}return t||(e.images[this.uuid]=n),n}};bb=0,xh=new P,Vt=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=qn,s=qn,r=Gt,a=Kn,o=Jn,c=En,l=i.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=xi(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ui:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ui:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=cu;Vt.DEFAULT_ANISOTROPY=1;ft=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,_=(f+1)/2,w=(p+1)/2,v=(h+d)/4,b=(u+y)/4,S=(g+m)/4;return M>_&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=v/n,r=b/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=v/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=b/r,s=S/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fc=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Vt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ra=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},pc=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ve=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,y,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),a=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_b,e,xb)}lookAt(e,t,n){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),rs.crossVectors(n,Cn),rs.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),rs.crossVectors(n,Cn)),rs.normalize(),Lo.crossVectors(Cn,rs),s[0]=rs.x,s[4]=Lo.x,s[8]=Cn.x,s[1]=rs.y,s[5]=Lo.y,s[9]=Cn.y,s[2]=rs.z,s[6]=Lo.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],M=n[7],_=n[11],w=n[15],v=s[0],b=s[4],S=s[8],C=s[12],R=s[1],D=s[5],F=s[9],z=s[13],L=s[2],q=s[6],j=s[10],G=s[14],te=s[3],H=s[7],J=s[11],Q=s[15];return r[0]=a*v+o*R+c*L+l*te,r[4]=a*b+o*D+c*q+l*H,r[8]=a*S+o*F+c*j+l*J,r[12]=a*C+o*z+c*G+l*Q,r[1]=h*v+u*R+d*L+f*te,r[5]=h*b+u*D+d*q+f*H,r[9]=h*S+u*F+d*j+f*J,r[13]=h*C+u*z+d*G+f*Q,r[2]=g*v+y*R+m*L+p*te,r[6]=g*b+y*D+m*q+p*H,r[10]=g*S+y*F+m*j+p*J,r[14]=g*C+y*z+m*G+p*Q,r[3]=x*v+M*R+_*L+w*te,r[7]=x*b+M*D+_*q+w*H,r[11]=x*S+M*F+_*j+w*J,r[15]=x*C+M*z+_*G+w*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],x=c*f-l*d,M=o*f-l*u,_=o*d-c*u,w=a*f-l*h,v=a*d-c*h,b=a*u-o*h;return t*(y*x-m*M+p*_)-n*(g*x-m*w+p*v)+s*(g*M-y*w+p*b)-r*(g*_-y*v+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],x=t*o-n*a,M=t*c-s*a,_=t*l-r*a,w=n*c-s*o,v=n*l-r*o,b=s*l-r*c,S=h*y-u*g,C=h*m-d*g,R=h*p-f*g,D=u*m-d*y,F=u*p-f*y,z=d*p-f*m,L=x*z-M*F+_*D+w*R-v*C+b*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/L;return e[0]=(o*z-c*F+l*D)*q,e[1]=(s*F-n*z-r*D)*q,e[2]=(y*b-m*v+p*w)*q,e[3]=(d*v-u*b-f*w)*q,e[4]=(c*R-a*z-l*C)*q,e[5]=(t*z-s*R+r*C)*q,e[6]=(m*_-g*b-p*M)*q,e[7]=(h*b-d*_+f*M)*q,e[8]=(a*F-o*R+l*S)*q,e[9]=(n*R-t*F-r*S)*q,e[10]=(g*v-y*_+p*x)*q,e[11]=(u*_-h*v-f*x)*q,e[12]=(o*C-a*D-c*S)*q,e[13]=(t*D-n*C+s*S)*q,e[14]=(y*M-g*w-m*x)*q,e[15]=(h*w-u*M+d*x)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,x=c*l,M=c*h,_=c*u,w=n.x,v=n.y,b=n.z;return s[0]=(1-(y+p))*w,s[1]=(f+_)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(f-_)*v,s[5]=(1-(d+p))*v,s[6]=(m+x)*v,s[7]=0,s[8]=(g+M)*b,s[9]=(m-x)*b,s[10]=(1-(d+y))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),c=ur.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);let l=1/a,h=1/o,u=1/c;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,t.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Xn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===Xn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ar)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Xn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===Xn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ar)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ur=new P,Qn=new Ve,_b=new P(0,0,0),xb=new P(1,1,1),rs=new P,Lo=new P,Cn=new P,ep=new Ve,tp=new Lt,jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";Ir=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yb=0,np=new P,dr=new Lt,Pi=new Ve,Do=new P,pa=new P,vb=new P,Sb=new Lt,ip=new P(1,0,0),sp=new P(0,1,0),rp=new P(0,0,1),ap={type:"added"},Mb={type:"removed"},fr={type:"childadded",child:null},yh={type:"childremoved",child:null},vt=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new jn,n=new Lt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Be}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(pa,Do,this.up):Pi.lookAt(Do,pa,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Pi),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),fr.child=e,this.dispatchEvent(fr),fr.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mb),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,vb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,Sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;zt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tb={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},No={h:0,s:0,l:0};Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Su(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vh(a,r,e+1/3),this.g=vh(a,r,e),this.b=vh(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Sm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Qe.workingToColorSpace(an.copy(this),e),Math.round(tt(an.r*255,0,255))*65536+Math.round(tt(an.g*255,0,255))*256+Math.round(tt(an.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(an.copy(this),t);let n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Rt){Qe.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,s=an.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(No);let n=Ta(as.h,No.h,t),s=Ta(as.s,No.s,t),r=Ta(as.l,No.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Fe;Fe.NAMES=Sm;Ca=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zs=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ei=new P,Ii=new P,Sh=new P,Li=new P,pr=new P,mr=new P,op=new P,Mh=new P,Th=new P,Eh=new P,wh=new ft,Ah=new ft,Rh=new ft,us=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),Ii.subVectors(n,t),Sh.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(Ii),c=ei.dot(Sh),l=Ii.dot(Ii),h=Ii.dot(Sh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Li.x),c.addScaledVector(a,Li.y),c.addScaledVector(o,Li.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return wh.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),wh.fromBufferAttribute(e,t),Ah.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wh,r.x),a.addScaledVector(Ah,r.y),a.addScaledVector(Rh,r.z),a}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),Ii.subVectors(e,t),ei.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ei.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;pr.subVectors(s,n),mr.subVectors(r,n),Mh.subVectors(e,n);let c=pr.dot(Mh),l=mr.dot(Mh);if(c<=0&&l<=0)return t.copy(n);Th.subVectors(e,s);let h=pr.dot(Th),u=mr.dot(Th);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(pr,a);Eh.subVectors(e,r);let f=pr.dot(Eh),g=mr.dot(Eh);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(mr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return op.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(op,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Oo.subVectors(this.max,ma),gr.subVectors(e.a,ma),br.subVectors(e.b,ma),_r.subVectors(e.c,ma),os.subVectors(br,gr),cs.subVectors(_r,br),Ps.subVectors(gr,_r);let t=[0,-os.z,os.y,0,-cs.z,cs.y,0,-Ps.z,Ps.y,os.z,0,-os.x,cs.z,0,-cs.x,Ps.z,0,-Ps.x,-os.y,os.x,0,-cs.y,cs.x,0,-Ps.y,Ps.x,0];return!Ch(t,gr,br,_r,Oo)||(t=[1,0,0,0,1,0,0,0,1],!Ch(t,gr,br,_r,Oo))?!1:(Uo.crossVectors(os,cs),t=[Uo.x,Uo.y,Uo.z],Ch(t,gr,br,_r,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new P,new P,new P,new P,new P,new P,new P,new P],ti=new P,Fo=new Dn,gr=new P,br=new P,_r=new P,os=new P,cs=new P,Ps=new P,ma=new P,Oo=new P,Uo=new P,Is=new P;Ot=new P,ko=new Ge,Eb=0,Ht=class extends ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xu,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=e!==void 0?xl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eu(e,this.array)}},Pa=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ia=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}},st=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},wb=new Dn,ga=new P,Ph=new P,Sn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ga,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Ph)),this.expandByPoint(ga.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ab=0,Wn=new Ve,Ih=new vt,xr=new P,Pn=new Dn,ba=new Dn,$t=new P,Ct=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?Ia:Pa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ba.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Pn.min,ba.min),Pn.expandByPoint($t),$t.addVectors(Pn.max,ba.max),Pn.expandByPoint($t)):(Pn.expandByPoint(ba.min),Pn.expandByPoint(ba.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$t.fromBufferAttribute(o,l),c&&(xr.fromBufferAttribute(e,l),$t.add(xr)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new P,c[C]=new P;let h=new P,u=new P,d=new P,f=new Ge,g=new Ge,y=new Ge,m=new P,p=new P;function x(C,R,D){l[C]=l[R]=l[D]=1,h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,C),g.fromBufferAttribute(r,R),y.fromBufferAttribute(r,D),u.sub(h),d.sub(h),g.sub(f),y.sub(f);let F=1/(g.x*y.y-y.x*g.y);isFinite(F)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(F),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(F),o[C].add(m),o[R].add(m),o[D].add(m),c[C].add(p),c[R].add(p),c[D].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,R=M.length;C<R;++C){let D=M[C],F=D.start,z=D.count;for(let L=F,q=F+z;L<q;L+=3)x(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new P,w=new P,v=new P,b=new P;function S(C){v.fromBufferAttribute(s,C),b.copy(v);let R=o[C];_.copy(R),_.sub(v.multiplyScalar(v.dot(R))).normalize(),w.crossVectors(b,R);let F=w.dot(c[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,F)}for(let C=0,R=n.count;C<R;++C)l[C]&&S(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ht(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xu,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=cp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=cp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};pn=new P,Nr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?xl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eu(e,this.data.array)}},Lh=new P,Rb=new P,Cb=new Be,In=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Lh.subVectors(n,t).cross(Rb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Lh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cb.getNormalMatrix(e),s=this.coplanarPoint(Lh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pb=0,gn=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Xr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new In().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ni=new P,Dh=new P,Bo=new P,zo=new P,ds=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Dh.copy(e).add(t).multiplyScalar(.5),Bo.copy(t).sub(e).normalize(),zo.copy(this.origin).sub(Dh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Bo),o=zo.dot(this.direction),c=-zo.dot(Bo),l=zo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Dh).addScaledVector(Bo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,x=n.y-a.y,M=n.z-a.z,_=Math.abs(c),w=Math.abs(l),v=Math.abs(h),b,S,C,R,D,F,z,L,q,j,G,te;if(_>=w&&_>=v?(C=c,F=u,q=g,te=p,c>=0?(b=l,S=h,R=d,D=f,z=y,L=m,j=x,G=M):(b=h,S=l,R=f,D=d,z=m,L=y,j=M,G=x)):w>=v?(C=l,F=d,q=y,te=x,l>=0?(b=h,S=c,R=f,D=u,z=m,L=g,j=M,G=p):(b=c,S=h,R=u,D=f,z=g,L=m,j=p,G=M)):(C=h,F=f,q=m,te=M,h>=0?(b=c,S=l,R=u,D=d,z=g,L=y,j=p,G=x):(b=l,S=c,R=d,D=u,z=y,L=g,j=x,G=p)),C===0)return null;let H=b/C,J=S/C,Q=1/C,Se=R-H*F,Me=D-J*F,W=z-H*q,ie=L-J*q,ve=j-H*te,Le=G-J*te,ae=ve*ie-Le*W,ze=Se*Le-Me*ve,xt=W*Me-ie*Se;if(s){if(ae<0||ze<0||xt<0)return null}else if((ae<0||ze<0||xt<0)&&(ae>0||ze>0||xt>0))return null;let Oe=ae+ze+xt;if(Oe===0)return null;let at=Q*(ae*F+ze*q+xt*te);return(Oe>0?at<0:at>0)?null:this.at(at/Oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bn=class extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lp=new Ve,Ls=new ds,Ho=new Sn,hp=new P,Go=new P,Vo=new P,Wo=new P,Nh=new P,qo=new P,up=new P,Xo=new P,he=class extends vt{constructor(e=new Ct,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Nh.fromBufferAttribute(u,e),a?qo.addScaledVector(Nh,h):qo.addScaledVector(Nh.sub(t),h))}t.add(qo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Ho.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ho,hp)===null||Ls.origin.distanceToSquared(hp)>(e.far-e.near)**2))&&(lp.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(lp),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,w=M;_<w;_+=3){let v=o.getX(_),b=o.getX(_+1),S=o.getX(_+2);s=jo(this,p,e,n,l,h,u,v,b,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=jo(this,a,e,n,l,h,u,x,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,w=M;_<w;_+=3){let v=_,b=_+1,S=_+2;s=jo(this,p,e,n,l,h,u,v,b,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=m,M=m+1,_=m+2;s=jo(this,a,e,n,l,h,u,x,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};_a=new ft,dp=new ft,fp=new ft,Lb=new ft,pp=new Ve,Ko=new P,Fh=new Sn,mp=new Ve,Oh=new ds,La=class extends he{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ko),this.boundingBox.expandByPoint(Ko)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ko),this.boundingSphere.expandByPoint(Ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fh.copy(this.boundingSphere),Fh.applyMatrix4(s),e.ray.intersectsSphere(Fh)!==!1&&(mp.copy(s).invert(),Oh.copy(e.ray).applyMatrix4(mp),!(this.boundingBox!==null&&Oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;dp.fromBufferAttribute(s.attributes.skinIndex,e),fp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(_a.copy(t),t.set(0,0,0,0)):(_a.set(t.x,t.y,t.z,1),t.set(0,0,0)),_a.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=fp.getComponent(r);if(a!==0){let o=dp.getComponent(r);pp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Lb.copy(_a).applyMatrix4(pp),a)}}return t.isVector4&&(t.w=_a.w),t.applyMatrix4(this.bindMatrixInverse)}},Fr=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Or=class extends Vt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,h=Nt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gp=new Ve,Db=new Ve,Da=class i{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Db;gp.multiplyMatrices(o,t[r]),gp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Or(t,e,e,Jn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new Fr),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ki=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yr=new Ve,bp=new Ve,Jo=[],_p=new Dn,Nb=new Ve,xa=new he,ya=new Sn,di=class extends he{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),_p.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(_p)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),ya.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(n),e.ray.intersectsSphere(ya)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),bp.multiplyMatrices(n,yr),xa.matrixWorld=bp,xa.raycast(e,Jo);for(let a=0,o=Jo.length;a<o;a++){let c=Jo[a];c.instanceId=r,c.object=this,t.push(c)}Jo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,kc,On));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new Sn,Fb=new Ge(.5,.5),Yo=new P,fs=class{constructor(e=new In,t=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],x=r[12],M=r[13],_=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-g,w-x).normalize(),s[1].setComponents(l+a,f+h,p+g,w+x).normalize(),s[2].setComponents(l+o,f+u,p+y,w+M).normalize(),s[3].setComponents(l-o,f-u,p-y,w-M).normalize(),n)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,f-d,p-m,w-_).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-_).normalize(),t===Xn)s[5].setComponents(l+c,f+d,p+m,w+_).normalize();else if(t===Ar)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);let t=Fb.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yo.x=s.normal.x>0?e.max.x:e.min.x,Yo.y=s.normal.y>0?e.max.y:e.min.y,Yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xp=new Ve,mc=class i{constructor(){this.coordinateSystem=Xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];xp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fs),n[s].setFromProjectionMatrix(xp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new fs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},Ur=class extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gc=new P,bc=new P,yp=new Ve,va=new ds,$o=new Sn,Uh=new P,vp=new P,Hs=class extends vt{constructor(e=new Ct,t=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)gc.fromBufferAttribute(t,s-1),bc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gc.distanceTo(bc);e.setAttribute("lineDistance",new st(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;yp.copy(s).invert(),va.copy(e.ray).applyMatrix4(yp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){let p=h.getX(y),x=h.getX(y+1),M=Zo(this,e,va,c,p,x,y);M&&t.push(M)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Zo(this,e,va,c,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){let p=Zo(this,e,va,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=Zo(this,e,va,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Sp=new P,Mp=new P,Na=class extends Hs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Sp.fromBufferAttribute(t,s),Mp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sp.distanceTo(Mp);e.setAttribute("lineDistance",new st(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fa=class extends Hs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},kr=class extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tp=new Ve,Gh=new ds,Qo=new Sn,ec=new P,Oa=class extends vt{constructor(e=new Ct,t=new kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Tp.copy(s).invert(),Gh.copy(e.ray).applyMatrix4(Tp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=l.getX(g);ec.fromBufferAttribute(u,m),Ep(ec,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)ec.fromBufferAttribute(u,g),Ep(ec,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ua=class extends Vt{constructor(e=[],t=Js,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Br=class extends Vt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bi=class extends Vt{constructor(e,t,n=ii,s,r,a,o=Nt,c=Nt,l,h=Ui,u=1){if(h!==Ui&&h!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ka=class extends Bi{constructor(e,t=ii,n=Js,s,r,a=Nt,o=Nt,c,l=Ui){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ba=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pt=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(y,m,p,x,M,_,w,v,b,S,C){let R=_/b,D=w/S,F=_/2,z=w/2,L=v/2,q=b+1,j=S+1,G=0,te=0,H=new P;for(let J=0;J<j;J++){let Q=J*D-z;for(let Se=0;Se<q;Se++){let Me=Se*R-F;H[y]=Me*x,H[m]=Q*M,H[p]=L,l.push(H.x,H.y,H.z),H[y]=0,H[m]=0,H[p]=v>0?1:-1,h.push(H.x,H.y,H.z),u.push(Se/b),u.push(1-J/S),G+=1}}for(let J=0;J<S;J++)for(let Q=0;Q<b;Q++){let Se=d+Q+q*J,Me=d+Q+q*(J+1),W=d+(Q+1)+q*(J+1),ie=d+(Q+1)+q*J;c.push(Se,Me,ie),c.push(Me,W,ie),te+=6}o.addGroup(f,te,C),f+=te,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ps=class i extends Ct{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,y=s+1,m=new P,p=new P;for(let x=0;x<=g;x++){let M=0,_=0,w=0,v=0;if(x<=n){let C=x/n,R=C*Math.PI/2;_=-h-e*Math.cos(R),w=e*Math.sin(R),v=-e*Math.cos(R),M=C*u}else if(x<=n+r){let C=(x-n)/r;_=-h+C*t,w=e,v=0,M=u+C*d}else{let C=(x-n-r)/n,R=C*Math.PI/2;_=h+e*Math.sin(R),w=e*Math.cos(R),v=e*Math.sin(R),M=u+d+C*u}let b=Math.max(0,Math.min(1,M/f)),S=0;x===0?S=.5/s:x===g&&(S=-.5/s);for(let C=0;C<=s;C++){let R=C/s,D=R*Math.PI*2,F=Math.sin(D),z=Math.cos(D);p.x=-w*z,p.y=_,p.z=w*F,o.push(p.x,p.y,p.z),m.set(-w*z,v,w*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+S,b)}if(x>0){let C=(x-1)*y;for(let R=0;R<s;R++){let D=C+R,F=C+R+1,z=x*y+R,L=x*y+R+1;a.push(D,F,z),a.push(F,L,z)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},fi=class i extends Ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,h=new Ge;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mn=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function x(){let _=new P,w=new P,v=0,b=(t-e)/n;for(let S=0;S<=r;S++){let C=[],R=S/r,D=R*(t-e)+e;for(let F=0;F<=s;F++){let z=F/s,L=z*c+o,q=Math.sin(L),j=Math.cos(L);w.x=D*q,w.y=-R*n+m,w.z=D*j,u.push(w.x,w.y,w.z),_.set(q,b,j).normalize(),d.push(_.x,_.y,_.z),f.push(z,1-R),C.push(g++)}y.push(C)}for(let S=0;S<s;S++)for(let C=0;C<r;C++){let R=y[C][S],D=y[C+1][S],F=y[C+1][S+1],z=y[C][S+1];(e>0||C!==0)&&(h.push(R,D,z),v+=3),(t>0||C!==r-1)&&(h.push(D,F,z),v+=3)}l.addGroup(p,v,0),p+=v}function M(_){let w=g,v=new Ge,b=new P,S=0,C=_===!0?e:t,R=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let D=g;for(let F=0;F<=s;F++){let L=F/s*c+o,q=Math.cos(L),j=Math.sin(L);b.x=C*j,b.y=m*R,b.z=C*q,u.push(b.x,b.y,b.z),d.push(0,R,0),v.x=q*.5+.5,v.y=j*.5*R+.5,f.push(v.x,v.y),g++}for(let F=0;F<s;F++){let z=w+F,L=D+F;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),S+=3}l.addGroup(p,S,_===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ms=class i extends Mn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zr=class i extends Ct{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let M=new P,_=new P,w=new P;for(let v=0;v<t.length;v+=3)f(t[v+0],M),f(t[v+1],_),f(t[v+2],w),c(M,_,w,x)}function c(x,M,_,w){let v=w+1,b=[];for(let S=0;S<=v;S++){b[S]=[];let C=x.clone().lerp(_,S/v),R=M.clone().lerp(_,S/v),D=v-S;for(let F=0;F<=D;F++)F===0&&S===v?b[S][F]=C:b[S][F]=C.clone().lerp(R,F/D)}for(let S=0;S<v;S++)for(let C=0;C<2*(v-S)-1;C++){let R=Math.floor(C/2);C%2===0?(d(b[S][R+1]),d(b[S+1][R]),d(b[S][R])):(d(b[S][R+1]),d(b[S+1][R+1]),d(b[S+1][R]))}}function l(x){let M=new P;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(x),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let x=new P;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let _=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(_,1-w)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let M=a[x+0],_=a[x+2],w=a[x+4],v=Math.max(M,_,w),b=Math.min(M,_,w);v>.9&&b<.1&&(M<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,M){let _=x*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function g(){let x=new P,M=new P,_=new P,w=new P,v=new Ge,b=new Ge,S=new Ge;for(let C=0,R=0;C<r.length;C+=9,R+=6){x.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),_.set(r[C+6],r[C+7],r[C+8]),v.set(a[R+0],a[R+1]),b.set(a[R+2],a[R+3]),S.set(a[R+4],a[R+5]),w.copy(x).add(M).add(_).divideScalar(3);let D=m(w);y(v,R+0,x,D),y(b,R+2,M,D),y(S,R+4,_,D)}}function y(x,M,_,w){w<0&&x.x===1&&(a[M]=x.x-1),_.x===0&&_.z===0&&(a[M]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Gs=class i extends zr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},za=class i extends zr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Hr=class i extends zr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},on=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let x=p*d-a;for(let M=0;M<l;M++){let _=M*u-r;g.push(_,-x,0),y.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let M=x+l*p,_=x+l*(p+1),w=x+1+l*(p+1),v=x+1+l*p;f.push(M,_,v),f.push(_,w,v)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Vs=class i extends Ct{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new P,g=new Ge;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let x=p+m,M=x,_=x+n+1,w=x+n+2,v=x+1;o.push(M,_,v),o.push(_,w,v)}}this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Nn=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let x=[],M=p/n,_=a+M*o,w=e*Math.cos(_),v=Math.sqrt(e*e-w*w),b=0;p===0&&a===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){let C=S/t,R=s+C*r;u.x=-v*Math.cos(R),u.y=w,u.z=v*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(C+b,1-M),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let M=h[p][x+1],_=h[p][x],w=h[p+1][x],v=h[p+1][x+1];(p!==0||a>0)&&f.push(M,_,v),(p!==n-1||c<Math.PI)&&f.push(_,w,v)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ha=class i extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new P,f=new P,g=new P;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let x=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,x=(s+1)*(y-1)+m-1,M=(s+1)*(y-1)+m,_=(s+1)*y+m;c.push(p,x,_),c.push(x,M,_)}this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};Mm={clone:Zs,merge:cn},Ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ub,this.fragmentShader=kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Ob(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_c=class extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rt=class extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_n=class extends rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Os('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Os('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ga=class extends gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ic,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xc=class extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yc=class extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vc=class extends mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ns,endingEnd:Ns}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fs:r=e,o=2*t-n;break;case Ea:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fs:a=e,c=2*n-t;break;case Ea:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*y+.5*g,_=f*m-f*y;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+x*a[l+w]+M*a[c+w]+_*a[u+w];return r}},Va=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Sc=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mc=class extends mi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[l+g],m=a[c+g],p=f*d+g*2,x=u[p],M=u[p+1],_=e*d+g*2,w=h[_],v=h[_+1],b=Gb(n,t,x,w,s);r[g]=Tm(b,y,M,v,m)}return r}};Tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Sa(e.settings)&&(n.settings={inTangents:hs(e.settings.inTangents,Array),outTangents:hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth;break;case Hh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return ic;case this.InterpolantFactoryMethodBezier:return Hh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Sa(this.settings)&&(Rp(this.settings.inTangents,e),Rp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Sa(this.settings)&&(Cp(this.settings.inTangents,e),Cp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Q0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ic,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Sa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ks;zi=class extends Tn{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Us;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;Wa=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};Wa.prototype.ValueTypeName="color";Hi=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};Hi.prototype.ValueTypeName="number";Tc=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Lt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Gi=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;Vi=class extends Tn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Us;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;gs=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};gs.prototype.ValueTypeName="vector";Wi=class{constructor(e="",t=-1,n=[],s=_l){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Wb(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Tn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Bb(c);c=Ap(c,1,h),l=Ap(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Hi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Pp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Pp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};Ec=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Em=new Ec,gi=class{constructor(e){this.manager=e!==void 0?e:Em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";Fi={},Vh=class extends Error{constructor(e,t){super(e),this.response=t}},Gr=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:s});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Fi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,m=new ReadableStream({start(p){x();function x(){u.read().then(({done:M,value:_})=>{if(M)p.close();else{y+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let v=0,b=h.length;v<b;v++){let S=h[v];S.onProgress&&S.onProgress(w)}p.enqueue(_),x()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Vh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{hi.add(`file:${e}`,l);let h=Fi[e];delete Fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Fi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},vr=new WeakMap,wc=class extends gi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=vr.get(a);u===void 0&&(u=[],vr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Rr("img");function c(){h(),t&&t(this);let u=vr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}vr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),hi.remove(`image:${e}`);let d=vr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}vr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},qa=class extends gi{constructor(e){super(e)}load(e,t,n,s){let r=new Vt,a=new wc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ws=class extends vt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xa=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},kh=new Ve,Ip=new P,Lp=new P,Vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ip),Lp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){kh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ar||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tc=new P,nc=new Lt,li=new P,ja=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tc,nc,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tc,nc,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ls=new P,Dp=new Ge,Np=new Ge,Bt=class extends ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,Dp,Np),t.subVectors(Np,Dp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wh=class extends Vr{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ka=class extends Ws{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},qh=class extends Vr{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}},Fn=class extends Ws{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qs=class extends ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xh=class extends Vr{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},qi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Bh=new WeakMap,Ja=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Bh.has(a)===!0?(s&&s(Bh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return hi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Bh.set(c,l),hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Sr=-90,Mr=1,Wr=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Sr,Mr,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Sr,Mr,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Sr,Mr,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Sr,Mr,e,t);o.layers=this.layers,this.add(o);let c=new Bt(Sr,Mr,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Sr,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ac=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Rc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Lt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Lt.multiplyQuaternionsFlat(e,a,e,t,e,n),Lt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Au="\\[\\]\\.:\\/",qb=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",Xb="[^"+Au.replace("\\.","")+"]",jb=/((?:WC+[\/:])*)/.source.replace("WC",Ru),Kb=/(WCOD+)?/.source.replace("WCOD",Xb),Jb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),Yb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),$b=new RegExp("^"+jb+Kb+Jb+Yb+"$"),Zb=["material","materials","bones","map"],jh=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qb,"")}static parseTrackName(e){let t=$b.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;He("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=jh;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Cc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ns,endingEnd:Ns};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=om,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case lm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case _l:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===cm;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===am){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Fs,s.endingEnd=Fs):(e?s.endingStart=this.zeroSlopeAtStart?Fs:Ns:s.endingStart=Ea,t?s.endingEnd=this.zeroSlopeAtEnd?Fs:Ns:s.endingEnd=Ea)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Qb=new Float32Array(1),Ya=class extends ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;g=new Rc(gt.create(n,f,y),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Va(new Float32Array(2),new Float32Array(2),1,Qb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Wi.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=_l),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Cc(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Wi.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Fp=new Ve,$a=class{constructor(e,t,n=0,s=1/0){this.ray=new ds(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fp),this}intersectObject(e,t=!0,n=[]){return Kh(e,this,n,t),n.sort(Op),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kh(e[s],this,n,t);return n.sort(Op),n}};Za=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Jh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function jm(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function n_(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function Uy(i,e,t,n,s,r){let a=new Fe(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let _=x.backgroundBlurriness>0;M=e.get(M,_)}return M}function g(x){let M=!1,_=f(x);_===null?m(a,o):_&&_.isColor&&(m(_,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,M){let _=f(M);_&&_.isCubeTexture?(l===void 0&&(l=new he(new pt(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Zs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,v,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Km),l.material.toneMapped=Qe.getTransfer(_.colorSpace)!==ut,(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new he(new on(2,2),new pi({name:"BackgroundMaterial",uniforms:Zs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,M){x.getRGB(yl,wu(i)),t.buffers.color.setClear(yl.r,yl.g,yl.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:y,dispose:p}}function ky(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,F,z,L,q){let j=!1,G=u(D,L,z,F);r!==G&&(r=G,l(r.object)),j=f(D,L,z,q),j&&g(D,L,z,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,_(D,F,z,L),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,F,z,L){let q=L.wireframe===!0,j=n[F.id];j===void 0&&(j={},n[F.id]=j);let G=D.isInstancedMesh===!0?D.id:0,te=j[G];te===void 0&&(te={},j[G]=te);let H=te[z.id];H===void 0&&(H={},te[z.id]=H);let J=H[q];return J===void 0&&(J=d(c()),H[q]=J),J}function d(D){let F=[],z=[],L=[];for(let q=0;q<t;q++)F[q]=0,z[q]=0,L[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,F,z,L){let q=r.attributes,j=F.attributes,G=0,te=z.getAttributes();for(let H in te)if(te[H].location>=0){let Q=q[H],Se=j[H];if(Se===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),Q===void 0||Q.attribute!==Se||Se&&Q.data!==Se.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function g(D,F,z,L){let q={},j=F.attributes,G=0,te=z.getAttributes();for(let H in te)if(te[H].location>=0){let Q=j[H];Q===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let Se={};Se.attribute=Q,Q&&Q.data&&(Se.data=Q.data),q[H]=Se,G++}r.attributes=q,r.attributesNum=G,r.index=L}function y(){let D=r.newAttributes;for(let F=0,z=D.length;F<z;F++)D[F]=0}function m(D){p(D,0)}function p(D,F){let z=r.newAttributes,L=r.enabledAttributes,q=r.attributeDivisors;z[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),q[D]!==F&&(i.vertexAttribDivisor(D,F),q[D]=F)}function x(){let D=r.newAttributes,F=r.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==D[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function M(D,F,z,L,q,j,G){G===!0?i.vertexAttribIPointer(D,F,z,q,j):i.vertexAttribPointer(D,F,z,L,q,j)}function _(D,F,z,L){y();let q=L.attributes,j=z.getAttributes(),G=F.defaultAttributeValues;for(let te in j){let H=j[te];if(H.location>=0){let J=q[te];if(J===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){let Q=J.normalized,Se=J.itemSize,Me=e.get(J);if(Me===void 0)continue;let W=Me.buffer,ie=Me.type,ve=Me.bytesPerElement,Le=ie===i.INT||ie===i.UNSIGNED_INT||J.gpuType===Fc;if(J.isInterleavedBufferAttribute){let ae=J.data,ze=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,xt=J.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let Oe=0;Oe<H.locationSize;Oe++)p(H.location+Oe,ae.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)m(H.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Oe=0;Oe<H.locationSize;Oe++)M(H.location+Oe,Se/H.locationSize,ie,Q,ze*ve,(xt+Se/H.locationSize*Oe)*ve,Le)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae,J.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);i.bindBuffer(i.ARRAY_BUFFER,W);for(let ae=0;ae<H.locationSize;ae++)M(H.location+ae,Se/H.locationSize,ie,Q,Se*ve,Se/H.locationSize*ae*ve,Le)}}else if(G!==void 0){let Q=G[te];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(H.location,Q);break;case 3:i.vertexAttrib3fv(H.location,Q);break;case 4:i.vertexAttrib4fv(H.location,Q);break;default:i.vertexAttrib1fv(H.location,Q)}}}}x()}function w(){C();for(let D in n){let F=n[D];for(let z in F){let L=F[z];for(let q in L){let j=L[q];for(let G in j)h(j[G].object),delete j[G];delete L[q]}}delete n[D]}}function v(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let z in F){let L=F[z];for(let q in L){let j=L[q];for(let G in j)h(j[G].object),delete j[G];delete L[q]}}delete n[D.id]}function b(D){for(let F in n){let z=n[F];for(let L in z){let q=z[L];if(q[D.id]===void 0)continue;let j=q[D.id];for(let G in j)h(j[G].object),delete j[G];delete q[D.id]}}}function S(D){for(let F in n){let z=n[F],L=D.isInstancedMesh===!0?D.id:0,q=z[L];if(q!==void 0){for(let j in q){let G=q[j];for(let te in G)h(G[te].object),delete G[te];delete q[j]}delete z[L],Object.keys(z).length===0&&delete n[F]}}}function C(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:v,releaseStatesOfObject:S,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function By(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==Jn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let S=b===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==En&&b!==On&&!S&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,maxSamples:w,samples:v}}function Hy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new In,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let x=r?0:n,M=x*4,_=p.clippingState||null;c.value=_,_=h(g,d,M,f);for(let w=0;w!==M;++w)_[w]=t[w];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==y;++M,_+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Am(i,e,t){return new uo(i,{minFilter:Kn,generateMipmaps:e,type:si,colorSpace:mn,depthBuffer:t})}function fo(i,e,t){return new pi({name:i,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:en,blending:js,depthTest:!1,depthWrite:!1})}function jy(){return fo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ky(){return fo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ym}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Jy(){return fo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Rm(){return fo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Cm(){return fo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Yy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Lc||f===Dc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new uo(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Lc||f===Dc,y=f===Js||f===jr;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Zr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return g&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new Zr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Lc?d.mapping=Js:f===Dc&&(d.mapping=jr),d}function c(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function $y(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function Zy(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(g){let y=g.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function u(g){let y=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let x=y!==null?y.array.length:m.array.length/3-1,M=m.count>=65535?Ia:Pa,_=new M(Math.ceil(x/3)*6,1),w=_.array;if(y!==null){let b=y.array;p=y.version;for(let S=0,C=0;S<x;S+=3){let R=b[S+0],D=b[S+1],F=b[S+2];w[C++]=R,w[C++]=D,w[C++]=D,w[C++]=F,w[C++]=F,w[C++]=R}}else{p=m.version;for(let b=0,S=0;b<x;b+=3){let C=b+0,R=b+1,D=b+2;w[S++]=C,w[S++]=R,w[S++]=R,w[S++]=D,w[S++]=D,w[S++]=C}}_.version=p;let v=r.get(g);v&&e.remove(v),r.set(g,_)}function d(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function Qy(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ev(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tv(i,e,t){let n=new WeakMap,s=new ft;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let C=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let _=o.attributes.position.count*M,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let v=new Float32Array(_*w*4*u),b=new Ra(v,_,w,u);b.type=On,b.needsUpdate=!0;let S=M*4;for(let R=0;R<u;R++){let D=m[R],F=p[R],z=x[R],L=_*w*4*R;for(let q=0;q<D.count;q++){let j=q*S;f===!0&&(s.fromBufferAttribute(D,q),v[L+j+0]=s.x,v[L+j+1]=s.y,v[L+j+2]=s.z,v[L+j+3]=0),g===!0&&(s.fromBufferAttribute(F,q),v[L+j+4]=s.x,v[L+j+5]=s.y,v[L+j+6]=s.z,v[L+j+7]=0),y===!0&&(s.fromBufferAttribute(z,q),v[L+j+8]=s.x,v[L+j+9]=s.y,v[L+j+10]=s.z,v[L+j+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new Ge(_,w)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function nv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function sv(i,e,t,n,s,r){let a=new Ln(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ct;h.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new st([0,2,0,0,2,0],2));let u=new _c({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new he(h,u),f=new qs(-1,1,1,-1,0,1),g=null,y=null,m=!1,p,x=null,M=[],_=!1;this.setSize=function(w,v){a.setSize(w,v),o!==null&&o.setSize(w,v),c!==null&&c.setSize(w,v);for(let b=0;b<M.length;b++){let S=M[b];S.setSize&&S.setSize(w,v)}},this.setEffects=function(w){M=w,_=M.length>0&&M[0].isRenderPass===!0;let v=a.width,b=a.height;M.length>0&&o===null&&(o=new Ln(v,b,{type:si,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(v,b,{type:si,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&M.some(C=>C.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new Bi(v,b),r===!0&&(l.format=Xi,l.type=$s)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let C=0;C<M.length;C++){let R=M[C];R.setSize&&R.setSize(v,b),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(w,v){if(m||w.toneMapping===_i&&M.length===0)return!1;if(x=v,v!==null){let b=v.width,S=v.height;(a.width!==b||a.height!==S)&&this.setSize(b,S)}return _===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=_i,!0},this.hasRenderPass=function(){return _},this.end=function(w,v){w.toneMapping=p,m=!0;let b=a,S=o;for(let C=0;C<M.length;C++){let R=M[C];R.enabled!==!1&&(R.render(w,S,b,v),R.needsSwap!==!1&&(b=S,S=S===o?c:o))}if(g!==w.outputColorSpace||y!==w.toneMapping){g=w.outputColorSpace,y=w.toneMapping,u.defines={},Qe.getTransfer(g)===ut&&(u.defines.SRGB_TRANSFER="");let C=iv[y];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,w.setRenderTarget(x),w.render(d,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}function Qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Pm[s];if(r===void 0&&(r=new Float32Array(s),Pm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ml(i,e){let t=Im[e];t===void 0&&(t=new Int32Array(e),Im[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,n))return;Nm.set(n),i.uniformMatrix2fv(this.addr,!1,Nm),qt(t,n)}}function hv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,n))return;Dm.set(n),i.uniformMatrix3fv(this.addr,!1,Dm),qt(t,n)}}function uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,n))return;Lm.set(n),i.uniformMatrix4fv(this.addr,!1,Lm),qt(t,n)}}function dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Tl(i){return i.version===0&&(i.compareFunction=_u,i.needsUpdate=!0),i}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Tl(Zm):r=$m,t.setTexture2D(e||r,s)}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tg,s)}function Sv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Tl(Qm):r=ng,t.setTextureCube(e||r,s)}function Mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||eg,s)}function Tv(i){switch(i){case 5126:return rv;case 35664:return av;case 35665:return ov;case 35666:return cv;case 35674:return lv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return bv;case 36295:return _v;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Mv}}function Ev(i,e){i.uniform1fv(this.addr,e)}function wv(i,e){let t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function Av(i,e){let t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function Rv(i,e){let t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function Cv(i,e){let t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pv(i,e){let t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Iv(i,e){let t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lv(i,e){i.uniform1iv(this.addr,e)}function Dv(i,e){i.uniform2iv(this.addr,e)}function Nv(i,e){i.uniform3iv(this.addr,e)}function Fv(i,e){i.uniform4iv(this.addr,e)}function Ov(i,e){i.uniform1uiv(this.addr,e)}function Uv(i,e){i.uniform2uiv(this.addr,e)}function kv(i,e){i.uniform3uiv(this.addr,e)}function Bv(i,e){i.uniform4uiv(this.addr,e)}function zv(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tl(Zm):a=$m;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hv(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||tg,r[a])}function Gv(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Tl(Qm):a=ng;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Vv(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||eg,r[a])}function Wv(i){switch(i){case 5126:return Ev;case 35664:return wv;case 35665:return Av;case 35666:return Rv;case 35674:return Cv;case 35675:return Pv;case 35676:return Iv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Nv;case 35669:case 35673:return Fv;case 5125:return Ov;case 36294:return Uv;case 36295:return kv;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Fm(i,e){i.seq.push(e),i.map[e.id]=e}function qv(i,e,t){let n=i.name,s=n.length;for(Iu.lastIndex=0;;){let r=Iu.exec(n),a=Iu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Fm(t,l===void 0?new Du(o,i,e):new Nu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Fu(o),Fm(t,u)),t=u}}}function Om(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Kv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Jv(i){Qe._getMatrix(Um,Qe.workingColorSpace,i);let e=`mat3( ${Um.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case wa:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function km(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kv(i.getShaderSource(e),o)}else return r}function Yv(i,e){let t=Jv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Zv(i,e){let t=$v[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qv(){Qe.getLuminanceCoefficients(vl);let i=vl.x.toFixed(4),e=vl.y.toFixed(4),t=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function tS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ho(i){return i!==""}function Bm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function zm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Ou(i){return i.replace(iS,sS)}function sS(i,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ou(t)}function Hm(i){return i.replace(rS,aS)}function aS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function cS(i){return oS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function hS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function dS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":uS[i.combine]||"ENVMAP_BLENDING_NONE"}function fS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=cS(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=hS(t),u=dS(t),d=eS(t),f=tS(r),g=s.createProgram(),y,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ho).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ho).join(`
`),m.length>0&&(m+=`
`)):(y=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),m=[Gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Ze.tonemapping_pars_fragment:"",t.toneMapping!==_i?Zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Yv("linearToOutputTexel",t.outputColorSpace),Qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),a=Ou(a),a=Bm(a,t),a=zm(a,t),o=Ou(o),o=Bm(o,t),o=zm(o,t),a=Hm(a),o=Hm(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=p+y+a,M=p+m+o,_=Om(s,s.VERTEX_SHADER,x),w=Om(s,s.FRAGMENT_SHADER,M);s.attachShader(g,_),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function v(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(_)||"",z=s.getShaderInfoLog(w)||"",L=D.trim(),q=F.trim(),j=z.trim(),G=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,_,w);else{let H=km(s,_,"vertex"),J=km(s,w,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+H+`
`+J)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(q===""||j==="")&&(te=!1);te&&(R.diagnostics={runnable:G,programLog:L,vertexShader:{log:q,prefix:y},fragmentShader:{log:j,prefix:m}})}s.deleteShader(_),s.deleteShader(w),b=new $r(s,g),S=nS(s,g)}let b;this.getUniforms=function(){return b===void 0&&v(this),b};let S;this.getAttributes=function(){return S===void 0&&v(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(g,Xv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=w,this}function mS(i){return i===bs||i===ro||i===ao}function gS(i,e,t,n,s,r){let a=new Ir,o=new Uu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,C,R,D,F){let z=R.fog,L=D.geometry,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?R.environment:null,j=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,G=e.get(b.envMap||q,j),te=d[b.type],H=n.precision;b.precision!==null&&(H=n.getMaxPrecision(b.precision),H!==b.precision&&Ie("WebGLProgram.getParameters:",b.precision,"not supported, using",H,"instead."));let J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=J!==void 0?J.length:0,Se=0;L.morphAttributes.position!==void 0&&(Se=1),L.morphAttributes.normal!==void 0&&(Se=2),L.morphAttributes.color!==void 0&&(Se=3);let Me,W,ie,ve;if(te){let be=vi[te];Me=be.vertexShader,W=be.fragmentShader}else{Me=b.vertexShader,W=b.fragmentShader;let be=o.getVertexShaderStage(b),dt=o.getFragmentShaderStage(b);o.update(b,be,dt),ie=be.id,ve=dt.id}let Le=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,xt=D.isBatchedMesh===!0,Oe=!!b.map,at=!!b.matcap,ot=!!G,Xe=ot&&G.isPMREMTexture===!0,St=!!b.aoMap,It=!!b.lightMap,jt=!!b.bumpMap&&b.wireframe===!1,wt=!!b.normalMap,ci=!!b.displacementMap,Kt=!!b.emissiveMap,zn=!!b.metalnessMap,Hn=!!b.roughnessMap,Gn=b.anisotropy>0,O=b.clearcoat>0,Vn=b.diffuseRoughness>0,Mt=b.dispersion>0,Tt=b.retroreflectivity>0,ge=b.iridescence>0,kt=b.sheen>0,ke=b.transmission>0,We=Gn&&!!b.anisotropyMap,A=O&&!!b.clearcoatMap,T=O&&!!b.clearcoatNormalMap,k=O&&!!b.clearcoatRoughnessMap,se=Vn&&!!b.diffuseRoughnessMap,Z=ge&&!!b.iridescenceMap,ce=ge&&!!b.iridescenceThicknessMap,pe=kt&&!!b.sheenColorMap,K=kt&&!!b.sheenRoughnessMap,Y=!!b.specularMap,ue=!!b.specularColorMap,I=!!b.specularIntensityMap,$=ke&&!!b.transmissionMap,X=ke&&!!b.thicknessMap,de=!!b.gradientMap,oe=!!b.alphaMap,le=b.alphaTest>0,De=!!b.alphaHash,$e=!!b.extensions,re=_i;b.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(re=i.toneMapping);let Ue=Xe?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ke={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:Me,fragmentShader:W,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:H,batching:xt,batchingColor:xt&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Oe,matcap:at,envMap:ot,envMapMode:ot&&G.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Ue.length-1:null,envMapSize:Xe?Ue[0].width:null,aoMap:St,lightMap:It,bumpMap:jt,normalMap:wt,displacementMap:ci,emissiveMap:Kt,normalMapObjectSpace:wt&&b.normalMapType===um,normalMapTangentSpace:wt&&b.normalMapType===co,packedNormalMap:wt&&b.normalMapType===co&&mS(b.normalMap.format),metalnessMap:zn,roughnessMap:Hn,anisotropy:Gn,anisotropyMap:We,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:T,clearcoatRoughnessMap:k,diffuseRoughness:Vn,diffuseRoughnessMap:se,dispersion:Mt,retroreflection:Tt,iridescence:ge,iridescenceMap:Z,iridescenceThicknessMap:ce,sheen:kt,sheenColorMap:pe,sheenRoughnessMap:K,specularMap:Y,specularColorMap:ue,specularIntensityMap:I,transmission:ke,transmissionMap:$,thicknessMap:X,gradientMap:de,opaque:b.transparent===!1&&b.blending===Xr&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:De,combine:b.combine,mapUv:Oe&&f(b.map.channel),aoMapUv:St&&f(b.aoMap.channel),lightMapUv:It&&f(b.lightMap.channel),bumpMapUv:jt&&f(b.bumpMap.channel),normalMapUv:wt&&f(b.normalMap.channel),displacementMapUv:ci&&f(b.displacementMap.channel),emissiveMapUv:Kt&&f(b.emissiveMap.channel),metalnessMapUv:zn&&f(b.metalnessMap.channel),roughnessMapUv:Hn&&f(b.roughnessMap.channel),anisotropyMapUv:We&&f(b.anisotropyMap.channel),clearcoatMapUv:A&&f(b.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(b.diffuseRoughnessMap.channel),iridescenceMapUv:Z&&f(b.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(b.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&f(b.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(b.sheenRoughnessMap.channel),specularMapUv:Y&&f(b.specularMap.channel),specularColorMapUv:ue&&f(b.specularColorMap.channel),specularIntensityMapUv:I&&f(b.specularIntensityMap.channel),transmissionMapUv:$&&f(b.transmissionMap.channel),thicknessMapUv:X&&f(b.thicknessMap.channel),alphaMapUv:oe&&f(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(wt||Gn),vertexNormals:!!L.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Oe||oe),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&wt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===ut,decodeVideoTextureEmissive:Kt&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||xt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function y(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)S.push(C),S.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(m(S,b),p(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function m(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapPMREM),b.push(S.envMapMaxLod),b.push(S.envMapSize),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.diffuseRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.numLightProbeGrids),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function p(b,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function x(b){let S=d[b.type],C;if(S){let R=vi[S];C=Mm.clone(R.uniforms)}else C=b.uniforms;return C}function M(b,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new fS(i,S,b,s),l.push(C),h.set(S,C)),C}function _(b){if(--b.usedTimes===0){let S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function w(b){o.remove(b)}function v(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:x,acquireProgram:M,releaseProgram:_,releaseShaderCache:w,programs:l,dispose:v}}function bS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _S(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,m,p){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.materialVariant=a(d),x.groupOrder=y,x.renderOrder=d.renderOrder,x.z=m,x.group=p),e++,x}function c(d,f,g,y,m,p,x){x.reversedDepth===!0&&(m=-m);let M=o(d,f,g,y,m,p);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(d,f,g,y,m,p){let x=o(d,f,g,y,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||_S),n.length>1&&n.sort(f||Vm),s.length>1&&s.sort(f||Vm)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function xS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Wm,i.set(n,[a])):s>=r.length?(a=new Wm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function vS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function MS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TS(i){let e=new yS,t=vS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Ve,a=new Ve;function o(l){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,x=0,M=0,_=0,w=0,v=0,b=0,S=0,C=0,R=0;l.sort(MS);for(let F=0,z=l.length;F<z;F++){let L=l[F],q=L.color,j=L.intensity,G=L.distance,te=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===bs?te=L.shadow.map.texture:te=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=q.r*j,u+=q.g*j,d+=q.b*j;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],j);R++}else if(L.isSunLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,Q=t.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=te;let Se=J.getViewportCount();for(let Me=0;Me<Se;Me++)n.sunShadowMatrix[y+Me]=J.getMatrix(Me),n.sunShadowCascade[y+Me]=J._cascadeData[Me];y+=Se,g++}n.sun[f]=H,f++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,Q=t.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=H,m++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(q).multiplyScalar(j),H.distance=G,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[x]=H;let J=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,J.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[x]=J.matrix,L.castShadow){let Q=t.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=te,b++}x++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(q).multiplyScalar(j),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=H,M++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let J=L.shadow,Q=t.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=L.shadow.matrix,v++}n.point[p]=H,p++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(j),H.groundColor.copy(L.groundColor).multiplyScalar(j),n.hemi[_]=H,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==M||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==v||D.numSpotShadows!==b||D.numSpotMaps!==S||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=M,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=x,D.rectAreaLength=M,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=v,D.numSpotShadows=b,D.numSpotMaps=S,D.numLightProbes=R,n.version=SS++)}function c(l,h){let u=0,d=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let x=0,M=l.length;x<M;x++){let _=l[x];if(_.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(_.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function qm(i){let e=new TS(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function ES(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new qm(i),e.set(s,[o])):r>=a.length?(o=new qm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function PS(i,e,t){let n=new fs,s=new Ge,r=new Ge,a=new ft,o=new xc,c=new yc,l={},h=t.maxTextureSize,u={[bi]:en,[en]:bi,[tn]:tn},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:wS,fragmentShader:AS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new he(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let p=this.type;this.render=function(v,b,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Pc&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qa);let C=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(js),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=p!==this.type;z&&b.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(q=>q.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,q=v.length;L<q;L++){let j=v[L],G=j.shadow;if(G===void 0){Ie("WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let te=G.getFrameExtents();s.multiply(te),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,G.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=H,G.map===null||z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===qr){if(j.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ln(s.x,s.y,{format:bs,type:si,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),G.map.texture.name=j.name+".shadowMap",G.map.depthTexture=new Bi(s.x,s.y,On),G.map.depthTexture.name=j.name+".shadowMapDepth",G.map.depthTexture.format=Ui,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nt,G.map.depthTexture.magFilter=Nt}else j.isPointLight?(G.map=new uo(s.x),G.map.depthTexture=new ka(s.x,ii)):(G.map=new Ln(s.x,s.y),G.map.depthTexture=new Bi(s.x,s.y,ii)),G.map.depthTexture.name=j.name+".shadowMap",G.map.depthTexture.format=Ui,this.type===Qa?(G.map.depthTexture.compareFunction=H?bu:gu,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Nt,G.map.depthTexture.magFilter=Nt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();j.isPointLight!==!0&&G.updateMatrices(j,S);let Q=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let Se=0;Se<J;Se++){let Me=G.getCamera(Se);if(j.isPointLight){let W=G.camera,ie=G.matrix,ve=j.distance||W.far;ve!==W.far&&(W.far=ve,W.updateProjectionMatrix()),lo.setFromMatrixPosition(j.matrixWorld),W.position.copy(lo),Lu.copy(W.position),Lu.add(RS[Se]),W.up.copy(CS[Se]),W.lookAt(Lu),W.updateMatrixWorld(),ie.makeTranslation(-lo.x,-lo.y,-lo.z),Xm.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Xm,W.coordinateSystem,W.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(G.map),i.clear());let W=G.getViewport(Se);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),F.viewport(a)}n=G.getFrustum(Se),_(b,S,Me,j,Q,this.type)}G.isPointLightShadow!==!0&&this.type===qr&&x(G,S),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,R,D)};function x(v,b){let S=e.update(y);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null?v.mapPass=new Ln(s.x,s.y,{format:bs,type:si}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(b,null,S,d,y,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(b,null,S,f,y,null)}function M(v,b,S,C){let R=null,D=S.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(D!==void 0)R=D;else if(R=S.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let F=R.uuid,z=b.uuid,L=l[F];L===void 0&&(L={},l[F]=L);let q=L[z];q===void 0&&(q=R.clone(),L[z]=q,b.addEventListener("dispose",w)),R=q}if(R.visible=b.visible,R.wireframe=b.wireframe,C===qr?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:u[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=S}return R}function _(v,b,S,C,R,D){if(v.visible===!1)return;if(v.layers.test(R)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&D===qr)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,v.matrixWorld);let L=e.update(v),q=v.material;if(Array.isArray(q)){let j=L.groups;for(let G=0,te=j.length;G<te;G++){let H=j[G],J=q[H.materialIndex];if(J&&J.visible){let Q=M(v,J,C,D);v.onBeforeShadow(i,v,b,S,L,Q,H),i.renderBufferDirect(S,null,L,Q,v,H),v.onAfterShadow(i,v,b,S,L,Q,H)}}}else if(q.visible){let j=M(v,q,C,D);v.onBeforeShadow(i,v,b,S,L,j,null),i.renderBufferDirect(S,null,L,j,v,null),v.onAfterShadow(i,v,b,S,L,j,null)}}let z=v.children;for(let L=0,q=z.length;L<q;L++)_(z[L],b,S,C,R,D)}function w(v){v.target.removeEventListener("dispose",w);for(let S in l){let C=l[S],R=v.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function IS(i,e){function t(){let I=!1,$=new ft,X=null,de=new ft(0,0,0,0);return{setMask:function(oe){X!==oe&&!I&&(i.colorMask(oe,oe,oe,oe),X=oe)},setLocked:function(oe){I=oe},setClear:function(oe,le,De,$e,re){re===!0&&(oe*=$e,le*=$e,De*=$e),$.set(oe,le,De,$e),de.equals($)===!1&&(i.clearColor(oe,le,De,$e),de.copy($))},reset:function(){I=!1,X=null,de.set(-1,0,0,0)}}}function n(){let I=!1,$=!1,X=null,de=null,oe=null;return{setReversed:function(le){if($!==le){let De=e.get("EXT_clip_control");le?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),$=le;let $e=oe;oe=null,this.setClear($e)}},getReversed:function(){return $},setTest:function(le){le?ae(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(le){X!==le&&!I&&(i.depthMask(le),X=le)},setFunc:function(le){if($&&(le=vm[le]),de!==le){switch(le){case rc:i.depthFunc(i.NEVER);break;case ac:i.depthFunc(i.ALWAYS);break;case oc:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case cc:i.depthFunc(i.EQUAL);break;case lc:i.depthFunc(i.GEQUAL);break;case hc:i.depthFunc(i.GREATER);break;case uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=le}},setLocked:function(le){I=le},setClear:function(le){oe!==le&&(oe=le,$&&(le=1-le),i.clearDepth(le))},reset:function(){I=!1,X=null,de=null,oe=null,$=!1}}}function s(){let I=!1,$=null,X=null,de=null,oe=null,le=null,De=null,$e=null,re=null;return{setTest:function(Ue){I||(Ue?ae(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Ue){$!==Ue&&!I&&(i.stencilMask(Ue),$=Ue)},setFunc:function(Ue,Ke,be){(X!==Ue||de!==Ke||oe!==be)&&(i.stencilFunc(Ue,Ke,be),X=Ue,de=Ke,oe=be)},setOp:function(Ue,Ke,be){(le!==Ue||De!==Ke||$e!==be)&&(i.stencilOp(Ue,Ke,be),le=Ue,De=Ke,$e=be)},setLocked:function(Ue){I=Ue},setClear:function(Ue){re!==Ue&&(i.clearStencil(Ue),re=Ue)},reset:function(){I=!1,$=null,X=null,de=null,oe=null,le=null,De=null,$e=null,re=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,x=null,M=null,_=null,w=null,v=null,b=null,S=new Fe(0,0,0),C=0,R=!1,D=null,F=null,z=null,L=null,q=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,te=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=te>=2);let J=null,Q={},Se=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),W=new ft().fromArray(Se),ie=new ft().fromArray(Me);function ve(I,$,X,de){let oe=new Uint8Array(4),le=i.createTexture();i.bindTexture(I,le),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<X;De++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D($+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return le}let Le={};Le[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Er),jt(!1),wt(Yh),ae(i.CULL_FACE),St(js);function ae(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function ze(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function xt(I,$){return d[I]!==$?(i.bindFramebuffer(I,$),d[I]=$,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Oe(I,$){let X=g,de=!1;if(I){X=f.get($),X===void 0&&(X=[],f.set($,X));let oe=I.textures;if(X.length!==oe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let le=0,De=oe.length;le<De;le++)X[le]=i.COLOR_ATTACHMENT0+le;X.length=oe.length,de=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,de=!0);de&&i.drawBuffers(X)}function at(I){return y!==I?(i.useProgram(I),y=I,!0):!1}let ot={[Ks]:i.FUNC_ADD,[zp]:i.FUNC_SUBTRACT,[Hp]:i.FUNC_REVERSE_SUBTRACT};ot[Gp]=i.MIN,ot[Vp]=i.MAX;let Xe={[Wp]:i.ZERO,[qp]:i.ONE,[Xp]:i.SRC_COLOR,[eu]:i.SRC_ALPHA,[Zp]:i.SRC_ALPHA_SATURATE,[Yp]:i.DST_COLOR,[Kp]:i.DST_ALPHA,[jp]:i.ONE_MINUS_SRC_COLOR,[tu]:i.ONE_MINUS_SRC_ALPHA,[$p]:i.ONE_MINUS_DST_COLOR,[Jp]:i.ONE_MINUS_DST_ALPHA,[Qp]:i.CONSTANT_COLOR,[em]:i.ONE_MINUS_CONSTANT_COLOR,[tm]:i.CONSTANT_ALPHA,[nm]:i.ONE_MINUS_CONSTANT_ALPHA};function St(I,$,X,de,oe,le,De,$e,re,Ue){if(I===js){m===!0&&(ze(i.BLEND),m=!1);return}if(m===!1&&(ae(i.BLEND),m=!0),I!==Bp){if(I!==p||Ue!==R){if((x!==Ks||w!==Ks)&&(i.blendEquation(i.FUNC_ADD),x=Ks,w=Ks),Ue)switch(I){case Xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $h:i.blendFunc(i.ONE,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",I);break}else switch(I){case Xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $h:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zh:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qh:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",I);break}M=null,_=null,v=null,b=null,S.set(0,0,0),C=0,p=I,R=Ue}return}oe=oe||$,le=le||X,De=De||de,($!==x||oe!==w)&&(i.blendEquationSeparate(ot[$],ot[oe]),x=$,w=oe),(X!==M||de!==_||le!==v||De!==b)&&(i.blendFuncSeparate(Xe[X],Xe[de],Xe[le],Xe[De]),M=X,_=de,v=le,b=De),($e.equals(S)===!1||re!==C)&&(i.blendColor($e.r,$e.g,$e.b,re),S.copy($e),C=re),p=I,R=!1}function It(I,$){I.side===tn?ze(i.CULL_FACE):ae(i.CULL_FACE);let X=I.side===en;$&&(X=!X),jt(X),I.blending===Xr&&I.transparent===!1?St(js):St(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Kt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(I){D!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),D=I)}function wt(I){I!==Up?(ae(i.CULL_FACE),I!==F&&(I===Yh?i.cullFace(i.BACK):I===kp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),F=I}function ci(I){I!==z&&(G&&i.lineWidth(I),z=I)}function Kt(I,$,X){I?(ae(i.POLYGON_OFFSET_FILL),(L!==$||q!==X)&&(L=$,q=X,a.getReversed()&&($=-$,X=-X),i.polygonOffset($,X))):ze(i.POLYGON_OFFSET_FILL)}function zn(I){I?ae(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function Hn(I){I===void 0&&(I=i.TEXTURE0+j-1),J!==I&&(i.activeTexture(I),J=I)}function Gn(I,$,X){X===void 0&&(J===null?X=i.TEXTURE0+j-1:X=J);let de=Q[X];de===void 0&&(de={type:void 0,texture:void 0},Q[X]=de),(de.type!==I||de.texture!==$)&&(J!==X&&(i.activeTexture(X),J=X),i.bindTexture(I,$||Le[I]),de.type=I,de.texture=$)}function O(){let I=Q[J];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Vn(){try{i.compressedTexImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function Mt(){try{i.compressedTexImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function Tt(){try{i.texSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function ge(){try{i.texSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function kt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function We(){try{i.texStorage2D(...arguments)}catch(I){He("WebGLState:",I)}}function A(){try{i.texStorage3D(...arguments)}catch(I){He("WebGLState:",I)}}function T(){try{i.texImage2D(...arguments)}catch(I){He("WebGLState:",I)}}function k(){try{i.texImage3D(...arguments)}catch(I){He("WebGLState:",I)}}function se(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function Z(I,$){u[I]!==$&&(i.pixelStorei(I,$),u[I]=$)}function ce(I){W.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),W.copy(I))}function pe(I){ie.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ie.copy(I))}function K(I,$){let X=l.get($);X===void 0&&(X=new WeakMap,l.set($,X));let de=X.get(I);de===void 0&&(de=i.getUniformBlockIndex($,I.name),i.uniformBlockBinding($,de,de),X.set(I,de))}function Y(I,$,X){let oe=l.get($).get(I);c[oe]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,X),c[oe]=X)}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,Q={},d={},c={},f=new WeakMap,g=[],y=null,m=!1,p=null,x=null,M=null,_=null,w=null,v=null,b=null,S=new Fe(0,0,0),C=0,R=!1,D=null,F=null,z=null,L=null,q=null,W.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:ze,bindFramebuffer:xt,drawBuffers:Oe,useProgram:at,setBlending:St,setMaterial:It,setFlipSided:jt,setCullFace:wt,setLineWidth:ci,setPolygonOffset:Kt,setScissorTest:zn,activeTexture:Hn,bindTexture:Gn,unbindTexture:O,compressedTexImage2D:Vn,compressedTexImage3D:Mt,texImage2D:T,texImage3D:k,pixelStorei:Z,getParameter:se,updateUBOMapping:K,uniformBlockBinding:Y,texStorage2D:We,texStorage3D:A,texSubImage2D:Tt,texSubImage3D:ge,compressedTexSubImage2D:kt,compressedTexSubImage3D:ke,scissor:ce,viewport:pe,reset:ue}}function LS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,y=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,T){return m?new OffscreenCanvas(A,T):Rr("canvas")}function x(A,T,k){let se=1,Z=We(A);if((Z.width>k||Z.height>k)&&(se=k/Math.max(Z.width,Z.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ce=Math.floor(se*Z.width),pe=Math.floor(se*Z.height);d===void 0&&(d=p(ce,pe));let K=T?p(ce,pe):d;return K.width=ce,K.height=pe,K.getContext("2d").drawImage(A,0,0,ce,pe),Ie("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+pe+")."),K}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function M(A){return A.generateMipmaps}function _(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,T,k,se,Z,ce=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;se&&(pe=e.get("EXT_texture_norm16"),pe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8),k===i.UNSIGNED_SHORT&&pe&&(K=pe.R16_EXT),k===i.SHORT&&pe&&(K=pe.R16_SNORM_EXT)),T===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),T===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8),k===i.UNSIGNED_SHORT&&pe&&(K=pe.RG16_EXT),k===i.SHORT&&pe&&(K=pe.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),T===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),T===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),T===i.RGB&&(k===i.UNSIGNED_SHORT&&pe&&(K=pe.RGB16_EXT),k===i.SHORT&&pe&&(K=pe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),T===i.RGBA){let Y=ce?wa:Qe.getTransfer(Z);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=Y===ut?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&pe&&(K=pe.RGBA16_EXT),k===i.SHORT&&pe&&(K=pe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(A,T){let k;return A?T===null||T===ii||T===$s?k=i.DEPTH24_STENCIL8:T===On?k=i.DEPTH32F_STENCIL8:T===Jr&&(k=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ii||T===$s?k=i.DEPTH_COMPONENT24:T===On?k=i.DEPTH_COMPONENT32F:T===Jr&&(k=i.DEPTH_COMPONENT16),k}function S(A,T){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==Gt?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function C(A){let T=new WeakRef(A);n.get(A).__ref=T,g.add(T),y.register(A,T,T)}function R(A){let T=n.get(A).__ref;T!==void 0&&(g.delete(T),y.unregister(T))}function D(A){z(A.target)}function F(A){L(A.target)}function z(A){A.removeEventListener("dispose",D),R(A),j(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function L(A){A.removeEventListener("dispose",F),R(A),te(A)}function q(){for(let A of g){let T=A.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):z(T))}g.clear(),u.clear()}function j(A){let T=n.get(A);if(T.__webglInit===void 0)return;let k=A.source,se=f.get(k);if(se){let Z=se[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&G(A),Object.keys(se).length===0&&f.delete(k)}n.remove(A)}function G(A){let T=n.get(A);i.deleteTexture(T.__webglTexture);let k=A.source,se=f.get(k);delete se[T.__cacheKey],a.memory.textures--}function te(A){let T=n.get(A);T.__depthDisposeCallback&&T.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&z(k),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let ce=0;ce<T.__webglFramebuffer[Z].length;ce++)i.deleteFramebuffer(T.__webglFramebuffer[Z][ce]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let se=A.textures;for(let Z=0,ce=se.length;Z<ce;Z++){let pe=n.get(se[Z]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(se[Z])}n.remove(A)}let H=0;function J(){H=0}function Q(){return H}function Se(A){H=A}function Me(){let A=H;return A>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,A}function W(A){let T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.mipmapsAutoUpdate),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function ie(A,T){let k=n.get(A);if(A.isVideoTexture&&kt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let se=A.image;if(se===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{It(k,A,T);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+T)}function ve(A,T){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){It(k,A,T);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+T)}function Le(A,T){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){It(k,A,T);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+T)}function ae(A,T){let k=n.get(A);if(A.version>0&&k.__version!==A.version){jt(k,A,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+T)}let ze={[ui]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},xt={[Nt]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Oe={[fm]:i.NEVER,[_u]:i.ALWAYS,[pm]:i.LESS,[gu]:i.LEQUAL,[mm]:i.EQUAL,[bu]:i.GEQUAL,[gm]:i.GREATER,[bm]:i.NOTEQUAL};function at(A,T){if(T.type===On&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Gt||T.magFilter===Kr||T.magFilter===Ys||T.magFilter===Kn||T.minFilter===Gt||T.minFilter===Kr||T.minFilter===Ys||T.minFilter===Kn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ze[T.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ze[T.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ze[T.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,xt[T.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nt||T.minFilter!==Ys&&T.minFilter!==Kn||T.type===On&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ot(A,T){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",D),C(T));let se=T.source,Z=f.get(se);Z===void 0&&(Z={},f.set(se,Z));let ce=W(T);if(ce!==A.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[ce].usedTimes++;let pe=Z[A.__cacheKey];pe!==void 0&&(Z[A.__cacheKey].usedTimes--,pe.usedTimes===0&&G(T)),A.__cacheKey=ce,A.__webglTexture=Z[ce].texture}return k}function Xe(A,T,k){return Math.floor(Math.floor(A/k)/T)}function St(A,T,k,se){let ce=A.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,k,se,T.data);else{ce.sort((I,$)=>I.start-$.start);let pe=0;for(let I=1;I<ce.length;I++){let $=ce[pe],X=ce[I],de=$.start+$.count,oe=Xe(X.start,T.width,4),le=Xe($.start,T.width,4);X.start<=de+1&&oe===le&&Xe(X.start+X.count-1,T.width,4)===oe?$.count=Math.max($.count,X.start+X.count-$.start):(++pe,ce[pe]=X)}ce.length=pe+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let I=0,$=ce.length;I<$;I++){let X=ce[I],de=Math.floor(X.start/4),oe=Math.ceil(X.count/4),le=de%T.width,De=Math.floor(de/T.width),$e=oe,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,le,De,$e,re,k,se,T.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function It(A,T,k){let se=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=i.TEXTURE_3D);let Z=ot(A,T),ce=T.source;t.bindTexture(se,A.__webglTexture,i.TEXTURE0+k);let pe=n.get(ce);if(ce.version!==pe.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let re=Qe.getPrimaries(Qe.workingColorSpace),Ue=T.colorSpace===ji?null:Qe.getPrimaries(T.colorSpace),Ke=T.colorSpace===ji||re===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let Y=x(T.image,!1,s.maxTextureSize);Y=ke(T,Y);let ue=r.convert(T.format,T.colorSpace),I=r.convert(T.type),$=v(T.internalFormat,ue,I,T.normalized,T.colorSpace,T.isVideoTexture);at(se,T);let X,de=T.mipmaps,oe=T.isVideoTexture!==!0,le=pe.__version===void 0||Z===!0,De=ce.dataReady,$e=S(T,Y);if(T.isDepthTexture)$=b(T.format===Xi,T.type),le&&(oe?t.texStorage2D(i.TEXTURE_2D,1,$,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,$,Y.width,Y.height,0,ue,I,null));else if(T.isDataTexture)if(de.length>0){oe&&le&&t.texStorage2D(i.TEXTURE_2D,$e,$,de[0].width,de[0].height);for(let re=0,Ue=de.length;re<Ue;re++)X=de[re],oe?De&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,X.width,X.height,ue,I,X.data):t.texImage2D(i.TEXTURE_2D,re,$,X.width,X.height,0,ue,I,X.data);T.generateMipmaps=!1}else oe?(le&&t.texStorage2D(i.TEXTURE_2D,$e,$,Y.width,Y.height),De&&St(T,Y,ue,I)):t.texImage2D(i.TEXTURE_2D,0,$,Y.width,Y.height,0,ue,I,Y.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,$,de[0].width,de[0].height,Y.depth);for(let re=0,Ue=de.length;re<Ue;re++)if(X=de[re],T.format!==Jn)if(ue!==null)if(oe){if(De)if(T.layerUpdates.size>0){let Ke=Cu(X.width,X.height,T.format,T.type);for(let be of T.layerUpdates){let dt=X.data.subarray(be*Ke/X.data.BYTES_PER_ELEMENT,(be+1)*Ke/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,be,X.width,X.height,1,ue,dt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,Y.depth,ue,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,$,X.width,X.height,Y.depth,0,X.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,Y.depth,ue,I,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,$,X.width,X.height,Y.depth,0,ue,I,X.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{oe&&le&&t.texStorage2D(i.TEXTURE_2D,$e,$,de[0].width,de[0].height);for(let re=0,Ue=de.length;re<Ue;re++)X=de[re],T.format!==Jn?ue!==null?oe?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,X.width,X.height,ue,X.data):t.compressedTexImage2D(i.TEXTURE_2D,re,$,X.width,X.height,0,X.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?De&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,X.width,X.height,ue,I,X.data):t.texImage2D(i.TEXTURE_2D,re,$,X.width,X.height,0,ue,I,X.data)}else if(T.isDataArrayTexture)if(oe){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,$,Y.width,Y.height,Y.depth),De)if(T.layerUpdates.size>0){let re=Cu(Y.width,Y.height,T.format,T.type);for(let Ue of T.layerUpdates){let Ke=Y.data.subarray(Ue*re/Y.data.BYTES_PER_ELEMENT,(Ue+1)*re/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,Y.width,Y.height,1,ue,I,Ke)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ue,I,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Y.width,Y.height,Y.depth,0,ue,I,Y.data);else if(T.isData3DTexture)oe?(le&&t.texStorage3D(i.TEXTURE_3D,$e,$,Y.width,Y.height,Y.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ue,I,Y.data)):t.texImage3D(i.TEXTURE_3D,0,$,Y.width,Y.height,Y.depth,0,ue,I,Y.data);else if(T.isFramebufferTexture){if(le)if(oe)t.texStorage2D(i.TEXTURE_2D,$e,$,Y.width,Y.height);else{let re=Y.width,Ue=Y.height;for(let Ke=0;Ke<$e;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,$,re,Ue,0,ue,I,null),re>>=1,Ue>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Y.parentNode!==re){re.appendChild(Y),u.add(T),re.onpaint=Ue=>{let Ke=Ue.changedElements;for(let be of u)Ke.includes(be.image)&&(be.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let Ke=i.RGBA,be=i.RGBA,dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,be,dt,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(de.length>0){if(oe&&le){let re=We(de[0]);t.texStorage2D(i.TEXTURE_2D,$e,$,re.width,re.height)}for(let re=0,Ue=de.length;re<Ue;re++)X=de[re],oe?De&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ue,I,X):t.texImage2D(i.TEXTURE_2D,re,$,ue,I,X);T.generateMipmaps=!1}else if(oe){if(le){let re=We(Y);t.texStorage2D(i.TEXTURE_2D,$e,$,re.width,re.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,I,Y)}else t.texImage2D(i.TEXTURE_2D,0,$,ue,I,Y);M(T)&&T.mipmapsAutoUpdate===!0&&_(se),pe.__version=ce.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function jt(A,T,k){if(T.image.length!==6)return;let se=ot(A,T),Z=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let ce=n.get(Z);if(Z.version!==ce.__version||se===!0){t.activeTexture(i.TEXTURE0+k);let pe=Qe.getPrimaries(Qe.workingColorSpace),K=T.colorSpace===ji?null:Qe.getPrimaries(T.colorSpace),Y=T.colorSpace===ji||pe===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ue=T.isCompressedTexture||T.image[0].isCompressedTexture,I=T.image[0]&&T.image[0].isDataTexture,$=[];for(let be=0;be<6;be++)!ue&&!I?$[be]=x(T.image[be],!0,s.maxCubemapSize):$[be]=I?T.image[be].image:T.image[be],$[be]=ke(T,$[be]);let X=$[0],de=r.convert(T.format,T.colorSpace),oe=r.convert(T.type),le=v(T.internalFormat,de,oe,T.normalized,T.colorSpace),De=T.isVideoTexture!==!0,$e=ce.__version===void 0||se===!0,re=Z.dataReady,Ue=S(T,X);at(i.TEXTURE_CUBE_MAP,T);let Ke;if(T.isDepthTexture){if(le=b(T.format===Xi,T.type),$e)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,X.width,X.height);else for(let be=0;be<6;be++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,le,X.width,X.height,0,de,oe,null)}else if(ue){De&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,le,X.width,X.height);for(let be=0;be<6;be++){Ke=$[be].mipmaps;for(let dt=0;dt<Ke.length;dt++){let Jt=Ke[dt];T.format!==Jn?de!==null?De?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,dt,0,0,Jt.width,Jt.height,de,Jt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,dt,le,Jt.width,Jt.height,0,Jt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,dt,0,0,Jt.width,Jt.height,de,oe,Jt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,dt,le,Jt.width,Jt.height,0,de,oe,Jt.data)}}}else{if(Ke=T.mipmaps,De&&$e){Ke.length>0&&Ue++;let be=We($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,le,be.width,be.height)}for(let be=0;be<6;be++)if(I){De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,$[be].width,$[be].height,de,oe,$[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,le,$[be].width,$[be].height,0,de,oe,$[be].data);for(let dt=0;dt<Ke.length;dt++){let is=Ke[dt].image[be].image;De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,dt+1,0,0,is.width,is.height,de,oe,is.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,dt+1,le,is.width,is.height,0,de,oe,is.data)}}else{De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,de,oe,$[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,le,de,oe,$[be]);for(let dt=0;dt<Ke.length;dt++){let Jt=Ke[dt];De?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,dt+1,0,0,de,oe,Jt.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,dt+1,le,de,oe,Jt.image[be])}}}M(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),ce.__version=Z.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function wt(A,T,k,se,Z,ce){let pe=r.convert(k.format,k.colorSpace),K=r.convert(k.type),Y=v(k.internalFormat,pe,K,k.normalized,k.colorSpace),ue=n.get(T),I=n.get(k);if(I.__renderTarget=T,!ue.__hasExternalTextures){let $=Math.max(1,T.width>>ce),X=Math.max(1,T.height>>ce);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ce,Y,$,X,T.depth,0,pe,K,null):t.texImage2D(Z,ce,Y,$,X,0,pe,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ge(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,Z,I.__webglTexture,0,Tt(T)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,Z,I.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ci(A,T,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),T.depthBuffer){let se=T.depthTexture,Z=se&&se.isDepthTexture?se.type:null,ce=b(T.stencilBuffer,Z),pe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(T),ce,T.width,T.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(T),ce,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,A)}else{let se=T.textures;for(let Z=0;Z<se.length;Z++){let ce=se[Z],pe=r.convert(ce.format,ce.colorSpace),K=r.convert(ce.type),Y=v(ce.internalFormat,pe,K,ce.normalized,ce.colorSpace);ge(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(T),Y,T.width,T.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(T),Y,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Y,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(A,T,k){let se=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(T.depthTexture);Z.__renderTarget=T;let ce=se?T.depthTexture.image[0]:T.depthTexture.image;(!Z.__webglTexture||ce.width!==T.width||ce.height!==T.height)&&(ce.width=T.width,ce.height=T.height,T.depthTexture.needsUpdate=!0),se?ae(T.depthTexture,0):ie(T.depthTexture,0);let pe=Z.__webglTexture,K=Tt(T),Y=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ue=T.depthTexture.format===Xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ui)ge(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,Y,pe,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ue,Y,pe,0);else if(T.depthTexture.format===Xi)ge(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,Y,pe,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ue,Y,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zn(A){let T=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==A.depthTexture){let se=A.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),se){let Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,se.removeEventListener("dispose",Z)};se.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=se}if(A.depthTexture&&!T.__autoAllocateDepthBuffer)if(k)for(let se=0;se<6;se++)Kt(T.__webglFramebuffer[se],A,se);else A.texture.mipmaps.length>0?Kt(T.__webglFramebuffer[0],A,0):Kt(T.__webglFramebuffer,A,0);else if(k){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]===void 0)T.__webglDepthbuffer[se]=i.createRenderbuffer(),ci(T.__webglDepthbuffer[se],A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ci(T.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Hn(A,T,k){let se=n.get(A);T!==void 0&&wt(se.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&zn(A)}function Gn(A){let T=A.texture,k=n.get(A),se=n.get(T);A.addEventListener("dispose",F),C(A);let Z=A.textures,ce=A.isWebGLCubeRenderTarget===!0,pe=Z.length>1;if(pe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=T.version,a.memory.textures++),ce){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let Y=0;Y<T.mipmaps.length;Y++)k.__webglFramebuffer[K][Y]=i.createFramebuffer()}else k.__webglFramebuffer[K]=i.createFramebuffer()}else{if(T.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)k.__webglFramebuffer[K]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(pe)for(let K=0,Y=Z.length;K<Y;K++){let ue=n.get(Z[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ge(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let Y=Z[K];k.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let ue=r.convert(Y.format,Y.colorSpace),I=r.convert(Y.type),$=v(Y.internalFormat,ue,I,Y.normalized,Y.colorSpace,A.isXRRenderTarget===!0),X=Tt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,$,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,k.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ci(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),at(i.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps.length>0)for(let Y=0;Y<T.mipmaps.length;Y++)wt(k.__webglFramebuffer[K][Y],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Y);else wt(k.__webglFramebuffer[K],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);M(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let K=0,Y=Z.length;K<Y;K++){let ue=Z[K],I=n.get(ue),$=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,I.__webglTexture),at($,ue),wt(k.__webglFramebuffer,A,ue,i.COLOR_ATTACHMENT0+K,$,0),M(ue)&&_($)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,se.__webglTexture),at(K,T),T.mipmaps.length>0)for(let Y=0;Y<T.mipmaps.length;Y++)wt(k.__webglFramebuffer[Y],A,T,i.COLOR_ATTACHMENT0,K,Y);else wt(k.__webglFramebuffer,A,T,i.COLOR_ATTACHMENT0,K,0);M(T)?_(K):T.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&zn(A)}function O(A){let T=A.textures;for(let k=0,se=T.length;k<se;k++){let Z=T[k];if(M(Z)&&Z.mipmapsAutoUpdate===!0){let ce=w(A),pe=n.get(Z).__webglTexture;t.bindTexture(ce,pe),_(ce),t.unbindTexture()}}}let Vn=[];function Mt(A){if(A.samples>0){if(ge(A)===!1){let T=A.textures,k=A.width,se=A.height,Z=i.COLOR_BUFFER_BIT,ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(A),K=T.length>1;if(K)for(let ue=0;ue<T.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<T.length;ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let I=n.get(T[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,k,se,0,0,k,se,Z,i.NEAREST),c===!0&&(Vn.length=0,Vn.push(i.COLOR_ATTACHMENT0+ue),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Vn.push(ce),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<T.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let I=n.get(T[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let T=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Tt(A){return Math.min(s.maxSamples,A.samples)}function ge(A){let T=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(A){let T=a.render.frame;h.get(A)!==T&&(h.set(A,T),A.update())}function ke(A,T){let k=A.colorSpace,se=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==mn&&k!==ji&&(Qe.getTransfer(k)===ut?(se!==Jn||Z!==En)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",k)),T}function We(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Me,this.resetTextureUnits=J,this.getTextureUnits=Q,this.setTextureUnits=Se,this.setTexture2D=ie,this.setTexture2DArray=ve,this.setTexture3D=Le,this.setTextureCube=ae,this.rebindTextures=Hn,this.setupRenderTarget=Gn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=zn,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ge,this.dispose=q}function DS(i,e){function t(n,s=ji){let r,a=Qe.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lu)return i.BYTE;if(n===hu)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===Fc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===pu)return i.RGB;if(n===Jn)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===kc)return i.RED;if(n===Bc)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===zc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===to||n===no||n===io||n===so)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Vc||n===Wc||n===qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===jc||n===Kc||n===Jc||n===Yc||n===ro||n===$c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===jc)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jc)return r.COMPRESSED_R11_EAC;if(n===Yc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ro)return r.COMPRESSED_RG11_EAC;if(n===$c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zc||n===Qc||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===cl||n===ll||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===fl||n===pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dl)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===gl||n===ao||n===bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function US(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ig),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kS(i,e,t,n){let s={},r={};function a(x,M){let _=M.program;n.uniformBlockBinding(x,_,s[x.id])}function o(x,M){let _=s[x.id];_===void 0&&(g(x),_=c(x),s[x.id]=_,x.addEventListener("dispose",m));let w=M.program;n.updateUBOMapping(x,w);let v=e.render.frame;r[x.id]!==v&&(l(x),r[x.id]=v)}function c(x){let M=i.createBuffer(),_=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,_,w),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function l(x){let M=s[x.id],_=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,b=_.length;v<b;v++){let S=_[v];if(Array.isArray(S))for(let C=0,R=S.length;C<R;C++)h(S[C],v,C,w);else h(S,v,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,M,_,w){if(d(x,M,_,w)===!0){let v=x.__offset,b=x.value;if(Array.isArray(b)){let S=0;for(let C=0;C<b.length;C++){let R=b[C],D=y(R,!0);u(R,x.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function u(x,M,_){typeof x=="number"||typeof x=="boolean"?M[_]=x:x.isMatrix3?(M[_]=x.elements[0],M[_+1]=x.elements[1],M[_+2]=x.elements[2],M[_+3]=0,M[_+4]=x.elements[3],M[_+5]=x.elements[4],M[_+6]=x.elements[5],M[_+7]=0,M[_+8]=x.elements[6],M[_+9]=x.elements[7],M[_+10]=x.elements[8],M[_+11]=0):ArrayBuffer.isView(x)?M.set(x.subarray(0,M.length-_),_):x.toArray(M,_)}function d(x,M,_,w){let v=x.value,b=M+"_"+_;if(Array.isArray(v)){w[b]===void 0&&(w[b]=[]);let S=w[b],C=!1;for(let R=0;R<v.length;R++)f(v[R],S,R)===!0&&(C=!0);return C}return f(v,w,b)}function f(x,M,_){if(M[_]===void 0)return typeof x=="number"||typeof x=="boolean"?M[_]=x:ArrayBuffer.isView(x)?M[_]=x.slice():M[_]=x.clone(),!0;{let w=M[_];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return M[_]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function g(x){let M=x.uniforms,_=0,w=16;for(let b=0,S=M.length;b<S;b++){let C=Array.isArray(M[b])?M[b]:[M[b]];for(let R=0,D=C.length;R<D;R++){let F=C[R],z=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(M[b])||Array.isArray(F.value),q=_;for(let G=0,te=z.length;G<te;G++){let H=z[G],J=y(H,L),Q=_%w,Se=Q%J.boundary,Me=Q+Se;_+=Se,Me!==0&&w-Me<J.storage&&(_+=w-Me),G===0&&(q=_),_+=J.storage}let j=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new j((_-q)/Float32Array.BYTES_PER_ELEMENT),F.__offset=q}}let v=_%w;return v>0&&(_+=w-v),x.__size=_,x.__cache={},this}function y(x,M){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=16,_.storage=48):x.isMatrix4?(_.boundary=16,_.storage=64):x.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",x),M===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(x){let M=x.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:p}}function zS(){return yi===null&&(yi=new Or(BS,16,16,bs,si),yi.name="DFG_LUT",yi.minFilter=Gt,yi.magFilter=Gt,yi.wrapS=qn,yi.wrapT=qn,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var i_,s_,r_,a_,o_,c_,l_,h_,u_,d_,f_,p_,m_,g_,b_,__,x_,y_,v_,S_,M_,T_,E_,w_,A_,R_,C_,P_,I_,L_,D_,N_,F_,O_,U_,k_,B_,z_,H_,G_,V_,W_,q_,X_,j_,K_,J_,Y_,$_,Z_,Q_,ex,tx,nx,ix,sx,rx,ax,ox,cx,lx,hx,ux,dx,fx,px,mx,gx,bx,_x,xx,yx,vx,Sx,Mx,Tx,Ex,wx,Ax,Rx,Cx,Px,Ix,Lx,Dx,Nx,Fx,Ox,Ux,kx,Bx,zx,Hx,Gx,Vx,Wx,qx,Xx,jx,Kx,Jx,Yx,$x,Zx,Qx,ey,ty,ny,iy,sy,ry,ay,oy,cy,ly,hy,uy,dy,fy,py,my,gy,by,_y,xy,yy,vy,Sy,My,Ty,Ey,wy,Ay,Ry,Cy,Py,Iy,Ly,Dy,Ny,Fy,Ze,_e,vi,yl,Oy,Km,uo,wm,Gy,Vy,Jm,Ym,Wy,qy,Xy,Zr,iv,$m,Zm,Qm,eg,tg,ng,Pm,Im,Lm,Dm,Nm,Du,Nu,Fu,Iu,$r,Xv,jv,Um,$v,vl,iS,rS,oS,lS,uS,pS,Uu,ku,SS,wS,AS,RS,CS,Xm,lo,Lu,NS,FS,Bu,zu,OS,ig,BS,yi,Sl,Qs=Et(()=>{Pu();Pu();i_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s_=`#ifdef USE_ALPHAHASH
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
#endif`,r_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l_=`#ifdef USE_AOMAP
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
#endif`,h_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u_=`#ifdef USE_BATCHING
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
#endif`,d_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g_=`#ifdef USE_IRIDESCENCE
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
#endif`,b_=`#ifdef USE_BUMPMAP
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
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,E_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,w_=`#define PI 3.141592653589793
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
} // validated`,A_=`vec3 transformedNormal = objectNormal;
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
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L_="gl_FragColor = linearToOutputTexel( gl_FragColor );",D_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N_=`#ifdef USE_ENVMAP
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
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V_=`#ifdef USE_GRADIENTMAP
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
}`,W_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,K_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,ex=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,tx=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dx=`#if defined( USE_POINTS_UV )
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
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ex=`#ifdef USE_NORMALMAP
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
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ix=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`#include <common>
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
}`,ly=`#if DEPTH_PACKING == 3200
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
}`,hy=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`uniform float scale;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,by=`uniform vec3 diffuse;
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
}`,_y=`#define LAMBERT
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
}`,xy=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,vy=`#define MATCAP
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
}`,Sy=`#define NORMAL
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
}`,My=`#define NORMAL
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
}`,Ty=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,wy=`#define STANDARD
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
}`,Ay=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,Ry=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Py=`uniform float size;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Ny=`uniform float rotation;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:i_,alphahash_pars_fragment:s_,alphamap_fragment:r_,alphamap_pars_fragment:a_,alphatest_fragment:o_,alphatest_pars_fragment:c_,aomap_fragment:l_,aomap_pars_fragment:h_,batching_pars_vertex:u_,batching_vertex:d_,begin_vertex:f_,beginnormal_vertex:p_,bsdfs:m_,iridescence_fragment:g_,bumpmap_pars_fragment:b_,clipping_planes_fragment:__,clipping_planes_pars_fragment:x_,clipping_planes_pars_vertex:y_,clipping_planes_vertex:v_,color_fragment:S_,color_pars_fragment:M_,color_pars_vertex:T_,color_vertex:E_,common:w_,defaultnormal_vertex:A_,displacementmap_pars_vertex:R_,displacementmap_vertex:C_,emissivemap_fragment:P_,emissivemap_pars_fragment:I_,colorspace_fragment:L_,colorspace_pars_fragment:D_,envmap_fragment:N_,envmap_common_pars_fragment:F_,envmap_pars_fragment:O_,envmap_pars_vertex:U_,envmap_physical_pars_fragment:K_,envmap_vertex:k_,fog_vertex:B_,fog_pars_vertex:z_,fog_fragment:H_,fog_pars_fragment:G_,gradientmap_pars_fragment:V_,lightmap_pars_fragment:W_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:X_,lights_pars_begin:j_,lights_toon_fragment:J_,lights_toon_pars_fragment:Y_,lights_phong_fragment:$_,lights_phong_pars_fragment:Z_,lights_physical_fragment:Q_,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:nx,lights_fragment_end:ix,lightprobes_pars_fragment:sx,logdepthbuf_fragment:rx,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:cx,map_fragment:lx,map_pars_fragment:hx,map_particle_fragment:ux,map_particle_pars_fragment:dx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:gx,morphnormal_vertex:bx,morphtarget_pars_vertex:_x,morphtarget_vertex:xx,normal_fragment_begin:yx,normal_fragment_maps:vx,normal_pars_fragment:Sx,normal_pars_vertex:Mx,normal_vertex:Tx,normalmap_pars_fragment:Ex,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Cx,opaque_fragment:Px,packing:Ix,premultiplied_alpha_fragment:Lx,project_vertex:Dx,dithering_fragment:Nx,dithering_pars_fragment:Fx,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:Bx,shadowmap_vertex:zx,shadowmask_pars_fragment:Hx,skinbase_vertex:Gx,skinning_pars_vertex:Vx,skinning_vertex:Wx,skinnormal_vertex:qx,specularmap_fragment:Xx,specularmap_pars_fragment:jx,tonemapping_fragment:Kx,tonemapping_pars_fragment:Jx,transmission_fragment:Yx,transmission_pars_fragment:$x,uv_pars_fragment:Zx,uv_pars_vertex:Qx,uv_vertex:ey,worldpos_vertex:ty,background_vert:ny,background_frag:iy,backgroundCube_vert:sy,backgroundCube_frag:ry,cube_vert:ay,cube_frag:oy,depth_vert:cy,depth_frag:ly,distance_vert:hy,distance_frag:uy,equirect_vert:dy,equirect_frag:fy,linedashed_vert:py,linedashed_frag:my,meshbasic_vert:gy,meshbasic_frag:by,meshlambert_vert:_y,meshlambert_frag:xy,meshmatcap_vert:yy,meshmatcap_frag:vy,meshnormal_vert:Sy,meshnormal_frag:My,meshphong_vert:Ty,meshphong_frag:Ey,meshphysical_vert:wy,meshphysical_frag:Ay,meshtoon_vert:Ry,meshtoon_frag:Cy,points_vert:Py,points_frag:Iy,shadow_vert:Ly,shadow_frag:Dy,sprite_vert:Ny,sprite_frag:Fy},_e={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},vi={basic:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:cn([_e.points,_e.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:cn([_e.common,_e.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:cn([_e.sprite,_e.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:cn([_e.common,_e.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:cn([_e.lights,_e.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};vi.physical={uniforms:cn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};yl={r:0,b:0,g:0},Oy=new Ve,Km=new Be;Km.set(-1,0,0,0,1,0,0,0,1);uo=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pt(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:js});r.uniforms.tEquirect.value=t;let a=new he(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Gt),new Wr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},wm=256,Gy=3,Vy=20,Jm=256,Ym=16,Wy=3,qy=new P,Xy=new Fe,Zr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wr(1,10,null),this._boxMesh=new he(new pt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=qy}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(Xy));let m=new Wr(n,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(wm,Mu(e))}_fromTexture(e,t){e.mapping===Js||e.mapping===jr?this._setSize(e.image.length===0?wm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Am(e,!1,!1),n=Math.log2(e)-Gy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Am(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Js||e.mapping===jr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jy(),this._integrationMaterial=Ky());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ym);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Wy)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Jm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Jy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};iv={[nu]:"LINEAR_TONE_MAPPING",[iu]:"REINHARD_TONE_MAPPING",[su]:"CINEON_TONE_MAPPING",[eo]:"ACES_FILMIC_TONE_MAPPING",[au]:"AGX_TONE_MAPPING",[ou]:"NEUTRAL_TONE_MAPPING",[ru]:"CUSTOM_TONE_MAPPING"};$m=new Vt,Zm=new Bi(1,1),Qm=new ka(1),eg=new Ra,tg=new pc,ng=new Ua,Pm=[],Im=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Nm=new Float32Array(4);Du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tv(t.type)}},Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wv(t.type)}},Fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Iu=/(\w+)(\])?(\[|\.)?/g;$r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);qv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};Xv=37297,jv=0;Um=new Be;$v={[nu]:"Linear",[iu]:"Reinhard",[su]:"Cineon",[eo]:"ACESFilmic",[au]:"AgX",[ou]:"Neutral",[ru]:"Custom"};vl=new P;iS=/^[ \t]*#include +<([\w\d./]+)>/gm;rS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;oS={[Qa]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};lS={[jr]:"ENVMAP_MODE_REFRACTION"};uS={[Ic]:"ENVMAP_BLENDING_MULTIPLY",[im]:"ENVMAP_BLENDING_MIX",[sm]:"ENVMAP_BLENDING_ADD"};pS=0,Uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ku(e),t.set(e,n)),n}},ku=class{constructor(e){this.id=pS++,this.code=e,this.usedTimes=0}};SS=0;wS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AS=`uniform sampler2D shadow_pass;
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
}`,RS=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],CS=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Xm=new Ve,lo=new P,Lu=new P;NS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FS=`
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

}`,Bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ba(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pi({vertexShader:NS,fragmentShader:FS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new he(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zu=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Bu,p={},x=t.getContextAttributes(),M=null,_=null,w=[],v=[],b=new Ge,S=null,C=null,R=new Bt;R.viewport=new ft;let D=new Bt;D.viewport=new ft;let F=[R,D],z=new Ac,L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=w[W];return ie===void 0&&(ie=new Lr,w[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=w[W];return ie===void 0&&(ie=new Lr,w[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=w[W];return ie===void 0&&(ie=new Lr,w[W]=ie),ie.getHandSpace()};function j(W){let ie=v.indexOf(W.inputSource);if(ie===-1)return;let ve=w[ie];ve!==void 0&&(ve.update(W.inputSource,W.frame,l||a),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",te);for(let W=0;W<w.length;W++){let ie=v[W];ie!==null&&(v[W]=null,w[W].disconnect(ie))}L=null,q=null,m.reset();for(let W in p)delete p[W];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,_=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(b.width,b.height,!1),C!==null){let W=C.camera;W.fov=C.fov,W.zoom=C.zoom,W.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",G),s.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Le=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=x.stencil?Xi:Ui,Le=x.stencil?$s:ii);let ze={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ln(d.textureWidth,d.textureHeight,{format:Jn,type:En,depthTexture:new Bi(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ln(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(W){for(let ie=0;ie<W.removed.length;ie++){let ve=W.removed[ie],Le=v.indexOf(ve);Le>=0&&(v[Le]=null,w[Le].disconnect(ve))}for(let ie=0;ie<W.added.length;ie++){let ve=W.added[ie],Le=v.indexOf(ve);if(Le===-1){for(let ze=0;ze<w.length;ze++)if(ze>=v.length){v.push(ve),Le=ze;break}else if(v[ze]===null){v[ze]=ve,Le=ze;break}if(Le===-1)break}let ae=w[Le];ae&&ae.connect(ve)}}function H(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ie=W.near,ve=W.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),z.near=D.near=R.near=ie,z.far=D.far=R.far=ve,(L!==z.near||q!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,q=z.far),z.layers.mask=W.layers.mask|6,R.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;let Le=W.parent,ae=z.cameras;H(z,Le);for(let ze=0;ze<ae.length;ze++)H(ae[ze],Le);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&W.isPerspectiveCamera&&(C={camera:W,fov:W.fov,zoom:W.zoom}),J(W,z,Le)};function J(W,ie,ve){ve===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Bs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(W){return p[W]};let Q=null;function Se(W,ie){if(h=ie.getViewerPose(l||a),g=ie,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Le=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,Le=!0);for(let Oe=0;Oe<ve.length;Oe++){let at=ve[Oe],ot=null;if(f!==null)ot=f.getViewport(at);else{let St=u.getViewSubImage(d,at);ot=St.viewport,Oe===0&&(e.setRenderTargetTextures(_,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(_))}let Xe=F[Oe];Xe===void 0&&(Xe=new Bt,Xe.layers.enable(Oe),Xe.viewport=new ft,F[Oe]=Xe),Xe.matrix.fromArray(at.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(at.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ot.x,ot.y,ot.width,ot.height),Oe===0&&(z.matrix.copy(Xe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Le===!0&&z.cameras.push(Xe)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Oe=u.getDepthInformation(ve[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,s.renderState)}if(ae&&ae.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Oe=0;Oe<ve.length;Oe++){let at=ve[Oe].camera;if(at){let ot=p[at];ot||(ot=new Ba,p[at]=ot);let Xe=u.getCameraImage(at);ot.sourceTexture=Xe}}}}for(let ve=0;ve<w.length;ve++){let Le=v[ve],ae=w[ve];Le!==null&&ae!==void 0&&ae.update(Le,ie,l||a)}Q&&Q(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Me=new jm;Me.setAnimationLoop(Se),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}},OS=new Ve,ig=new Be;ig.set(-1,0,0,0,1,0,0,0,1);BS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;Sl=class{constructor(e={}){let{canvas:t=_m(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Hc,zc,Bc]),p=new Set([En,ii,Jr,$s,Oc,Uc]),x=new Uint32Array(4),M=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},w=null,v=null,b=[],S=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,F=null,z=null,L=null,q=null;this._outputColorSpace=Rt;let j=0,G=0,te=null,H=-1,J=null,Q=new ft,Se=new ft,Me=null,W=new Fe(0),ie=0,ve=t.width,Le=t.height,ae=1,ze=null,xt=null,Oe=new ft(0,0,ve,Le),at=new ft(0,0,ve,Le),ot=!1,Xe=new fs,St=new mc,It=!1,jt=!1,wt=new Ve,ci=new P,Kt=new ft,zn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Hn=!1;function Gn(){return te===null?ae:1}let O=n;function Vn(E,N){return t.getContext(E,N)}let Mt,Tt,ge,kt,ke,We,A,T,k,se,Z,ce,pe,K,Y,ue,I,$,X,de,oe,le,De;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){let N="webgl2";if(O=Vn(N,E),O===null)throw Vn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(E){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",be,!1),He("WebGLRenderer: "+E.message),E}function $e(){Mt=new $y(O),Mt.init(),oe=new DS(O,Mt),Tt=new zy(O,Mt,e,oe),ge=new IS(O,Mt),Tt.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),z=O.createFramebuffer(),L=O.createFramebuffer(),q=O.createFramebuffer(),kt=new ev(O),ke=new bS,We=new LS(O,Mt,ge,ke,Tt,oe,kt),A=new Yy(R),T=new n_(O),le=new ky(O,T),k=new Zy(O,T,kt,le),se=new nv(O,k,T,le,kt),$=new tv(O,Tt,We),Y=new Hy(ke),Z=new gS(R,A,Mt,Tt,le,Y),ce=new US(R,ke),pe=new xS,K=new ES(Mt),I=new Uy(R,A,ge,se,g,c),ue=new PS(R,se,Tt),De=new kS(O,kt,Tt,ge),X=new By(O,Mt,kt),de=new Qy(O,Mt,kt),kt.programs=Z.programs,R.capabilities=Tt,R.extensions=Mt,R.properties=ke,R.renderLists=pe,R.shadowMap=ue,R.state=ge,R.info=kt}y!==En&&(C=new sv(y,t.width,t.height,o,s,r));let re=new zu(R,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(ve,Le,!1))},this.getSize=function(E){return E.set(ve,Le)},this.setSize=function(E,N,V=!0){if(re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=E,Le=N,t.width=Math.floor(E*ae),t.height=Math.floor(N*ae),V===!0&&(t.style.width=E+"px",t.style.height=N+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(ve*ae,Le*ae).floor()},this.setDrawingBufferSize=function(E,N,V){ve=E,Le=N,ae=V,t.width=Math.floor(E*V),t.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(y===En){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Q)},this.getViewport=function(E){return E.copy(Oe)},this.setViewport=function(E,N,V,U){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,N,V,U),ge.viewport(Q.copy(Oe).multiplyScalar(Gn()).round())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,N,V,U){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,N,V,U),ge.scissor(Se.copy(at).multiplyScalar(Gn()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){ge.setScissorTest(ot=E)},this.setOpaqueSort=function(E){ze=E},this.setTransparentSort=function(E){xt=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,V=!0){let U=0;if(E){let B=!1;if(te!==null){let me=te.texture.format;B=m.has(me)}if(B){let me=te.texture.type,Ee=p.has(me),fe=I.getClearColor(),xe=I.getClearAlpha(),Ce=fe.r,je=fe.g,nt=fe.b;Ee?(x[0]=Ce,x[1]=je,x[2]=nt,x[3]=xe,O.clearBufferuiv(O.COLOR,0,x)):(M[0]=Ce,M[1]=je,M[2]=nt,M[3]=xe,O.clearBufferiv(O.COLOR,0,M))}else U|=O.COLOR_BUFFER_BIT}N&&(U|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(U|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&O.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",be,!1),I.dispose(),pe.dispose(),K.dispose(),We.dispose(),ke.dispose(),A.dispose(),se.dispose(),k.dispose(),le.dispose(),De.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",Uf),re.removeEventListener("sessionend",kf),As.stop()};function Ue(E){E.preventDefault(),Aa("WebGLRenderer: Context Lost."),D=!0}function Ke(){Aa("WebGLRenderer: Context Restored."),D=!1;let E=kt.autoReset,N=ue.enabled,V=ue.autoUpdate,U=ue.needsUpdate,B=ue.type;$e(),kt.autoReset=E,ue.enabled=N,ue.autoUpdate=V,ue.needsUpdate=U,ue.type=B}function be(E){He("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){let N=E.target;N.removeEventListener("dispose",dt),Jt(N)}function Jt(E){is(E),ke.remove(E)}function is(E){let N=ke.get(E).programs;N!==void 0&&(N.forEach(function(V){Z.releaseProgram(V)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,U,B,me){N===null&&(N=zn);let Ee=B.isMesh&&B.matrixWorld.determinantAffine()<0,fe=V0(E,N,V,U,B);ge.setMaterial(U,Ee);let xe=V.index,Ce=1;if(U.wireframe===!0){if(xe=k.getWireframeAttribute(V),xe===void 0)return;Ce=2}let je=V.drawRange,nt=V.attributes.position,we=je.start*Ce,it=(je.start+je.count)*Ce;me!==null&&(we=Math.max(we,me.start*Ce),it=Math.min(it,(me.start+me.count)*Ce)),xe!==null?(we=Math.max(we,0),it=Math.min(it,xe.count)):nt!=null&&(we=Math.max(we,0),it=Math.min(it,nt.count));let Ft=it-we;if(Ft<0||Ft===1/0)return;le.setup(B,U,fe,V,xe);let yt,_t=X;if(xe!==null&&(yt=T.get(xe),_t=de,_t.setIndex(yt)),B.isMesh)U.wireframe===!0?(ge.setLineWidth(U.wireframeLinewidth*Gn()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(B.isLine){let nn=U.linewidth;nn===void 0&&(nn=1),ge.setLineWidth(nn*Gn()),B.isLineSegments?_t.setMode(O.LINES):B.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else B.isPoints?_t.setMode(O.POINTS):B.isSprite&&_t.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))_t.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let nn=B._multiDrawStarts,Ae=B._multiDrawCounts,fn=B._multiDrawCount,ht=xe?T.get(xe).bytesPerElement:1,Rs=ke.get(U).currentProgram.getUniforms();for(let sn=0;sn<fn;sn++)Rs.setValue(O,"_gl_DrawID",sn),_t.render(nn[sn]/ht,Ae[sn])}else if(B.isInstancedMesh)_t.renderInstances(we,Ft,B.count);else if(V.isInstancedBufferGeometry){let nn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ae=Math.min(V.instanceCount,nn);_t.renderInstances(we,Ft,Ae)}else _t.render(we,Ft)};function Of(E,N,V,U){F!==null&&E.isNodeMaterial&&F.setObject(U,E),It===!0&&Y.setState(E,V,!1),E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,fa(E,N,U),E.side=bi,E.needsUpdate=!0,fa(E,N,U),E.side=tn):fa(E,N,U)}this.compile=function(E,N,V=null){V===null&&(V=E),F!==null&&F.renderStart(E,N,V),v=K.get(V),v.init(N),S.push(v),V.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),E!==V&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),v.setupLights(),F!==null&&F.updateLights(v.state.lightsArray),jt=this.localClippingEnabled,It=Y.init(this.clippingPlanes,jt),It===!0&&Y.setGlobalState(this.clippingPlanes,N),F!==null&&ue.render(v.state.shadowsArray,V,N);let U=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let me=B.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){let fe=me[Ee];Of(fe,V,N,B),U.add(fe)}else Of(me,V,N,B),U.add(me)}),v=S.pop(),F!==null&&F.renderEnd(),U},this.compileAsync=function(E,N,V=null){let U=this.compile(E,N,V);return new Promise(B=>{function me(){if(U.forEach(function(Ee){let xe=ke.get(Ee).currentProgram;(xe===void 0||xe.isReady())&&U.delete(Ee)}),U.size===0){B(E);return}setTimeout(me,10)}Mt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let fh=null;function H0(E){fh&&fh(E)}function Uf(){As.stop()}function kf(){As.start()}let As=new jm;As.setAnimationLoop(H0),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(E){fh=E,re.setAnimationLoop(E),E===null?As.stop():As.start()},re.addEventListener("sessionstart",Uf),re.addEventListener("sessionend",kf),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(E,N);let V=re.enabled===!0&&re.isPresenting===!0,U=C!==null&&(te===null||V)&&C.begin(R,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,N,te),v=K.get(E,S.length),v.init(N),v.state.textureUnits=We.getTextureUnits(),S.push(v),wt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?St.setFromArrayCamera(N):Xe.setFromProjectionMatrix(wt,Xn,N.reversedDepth),jt=this.localClippingEnabled,It=Y.init(this.clippingPlanes,jt),w=pe.get(E,b.length),w.init(),b.push(w),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ee=R.xr.getDepthSensingMesh();Ee!==null&&ph(Ee,N,-1/0,R.sortObjects)}ph(E,N,0,R.sortObjects),w.finish(),F!==null&&F.updateLights(v.state.lightsArray),R.sortObjects===!0&&w.sort(ze,xt),Hn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Hn&&I.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),It===!0&&Y.beginShadows();let B=v.state.shadowsArray;if(ue.render(B,E,N),It===!0&&Y.endShadows(),(U&&C.hasRenderPass())===!1){let Ee=w.opaque,fe=w.transmissive;if(v.setupLights(),N.isArrayCamera){let xe=N.cameras;if(fe.length>0)for(let Ce=0,je=xe.length;Ce<je;Ce++){let nt=xe[Ce];zf(Ee,fe,E,nt)}Hn&&I.render(E);for(let Ce=0,je=xe.length;Ce<je;Ce++){let nt=xe[Ce];Bf(w,E,nt,nt.viewport)}}else fe.length>0&&zf(Ee,fe,E,N),Hn&&I.render(E),Bf(w,E,N)}te!==null&&G===0&&(We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te)),U&&C.end(R),E.isScene===!0&&E.onAfterRender(R,E,N),le.resetDefaultState(),H=-1,J=null,S.pop(),S.length>0?(v=S[S.length-1],We.setTextureUnits(v.state.textureUnits),It===!0&&Y.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,F!==null&&F.renderEnd()};function ph(E,N,V,U){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){let Ee=N.isArrayCamera?St:Xe;if(!E.frustumCulled||E.intersectsFrustum(Ee)){U&&Kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);let fe=se.update(E),xe=E.material;xe.visible&&w.push(E,fe,xe,V,Kt.z,null,N)}}else if(E.isMesh||E.isLine||E.isPoints){let Ee=N.isArrayCamera?St:Xe;if(!E.frustumCulled||E.intersectsFrustum(Ee)){let fe=se.update(E),xe=E.material;if(U&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Kt.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Kt.copy(fe.boundingSphere.center)),Kt.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(xe)){let Ce=fe.groups;for(let je=0,nt=Ce.length;je<nt;je++){let we=Ce[je],it=xe[we.materialIndex];it&&it.visible&&w.push(E,fe,it,V,Kt.z,we,N)}}else xe.visible&&w.push(E,fe,xe,V,Kt.z,null,N)}}}let me=E.children;for(let Ee=0,fe=me.length;Ee<fe;Ee++)ph(me[Ee],N,V,U)}function Bf(E,N,V,U){let{opaque:B,transmissive:me,transparent:Ee}=E;v.setupLightsView(V),It===!0&&Y.setGlobalState(R.clippingPlanes,V),U&&ge.viewport(Q.copy(U)),B.length>0&&Co(B,N,V),me.length>0&&Co(me,N,V),Ee.length>0&&Co(Ee,N,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function zf(E,N,V,U){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[U.id]===void 0){let we=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[U.id]=new Ln(1,1,{generateMipmaps:!0,type:we?si:En,minFilter:Kn,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let me=v.state.transmissionRenderTarget[U.id],Ee=U.viewport||Q;me.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);let fe=R.getRenderTarget(),xe=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(W),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),Hn&&I.render(V);let je=R.toneMapping;R.toneMapping=_i;let nt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),v.setupLightsView(U),It===!0&&Y.setGlobalState(R.clippingPlanes,U),Co(E,V,U),We.updateMultisampleRenderTarget(me),We.updateRenderTargetMipmap(me),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let it=0,Ft=N.length;it<Ft;it++){let yt=N[it],{object:_t,geometry:nn,material:Ae,group:fn}=yt;if(Ae.side===tn&&_t.layers.test(U.layers)){let ht=Ae.side;Ae.side=en,Ae.needsUpdate=!0,Hf(_t,V,U,nn,Ae,fn),Ae.side=ht,Ae.needsUpdate=!0,we=!0}}we===!0&&(We.updateMultisampleRenderTarget(me),We.updateRenderTargetMipmap(me))}R.setRenderTarget(fe,xe,Ce),R.setClearColor(W,ie),nt!==void 0&&(U.viewport=nt),R.toneMapping=je}function Co(E,N,V){let U=N.isScene===!0?N.overrideMaterial:null;for(let B=0,me=E.length;B<me;B++){let Ee=E[B],{object:fe,geometry:xe,group:Ce}=Ee,je=Ee.material;je.allowOverride===!0&&U!==null&&(je=U),fe.layers.test(V.layers)&&Hf(fe,N,V,xe,je,Ce)}}function Hf(E,N,V,U,B,me){F!==null&&B.isNodeMaterial&&F.setObject(E,B),E.onBeforeRender(R,N,V,U,B,me),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(R,N,V,U,E,me),B.transparent===!0&&B.side===tn&&B.forceSinglePass===!1?(B.side=en,B.needsUpdate=!0,R.renderBufferDirect(V,N,U,B,E,me),B.side=bi,B.needsUpdate=!0,R.renderBufferDirect(V,N,U,B,E,me),B.side=tn):R.renderBufferDirect(V,N,U,B,E,me),E.onAfterRender(R,N,V,U,B,me)}function Gf(E){let N=0;for(let V of E)V.texture!==null&&N++;return N}function fa(E,N,V){N.isScene!==!0&&(N=zn);let U=ke.get(E),B=v.state.lights,me=v.state.shadowsArray,Ee=B.state.version,fe=Z.getParameters(E,B.state,me,N,V,v.state.lightProbeGridArray),xe=Z.getProgramCacheKey(fe),Ce=U.programs;U.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,U.fog=N.fog;let je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;U.envMap=A.get(E.envMap||U.environment,je),U.envMapRotation=U.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",dt),Ce=new Map,U.programs=Ce,U.programVariants=new Map);let nt=Ce.get(xe);if(nt!==void 0){if(U.currentProgram===nt&&U.lightsStateVersion===Ee)return Wf(E,fe),nt}else fe.uniforms=Z.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,V,fe),E.onBeforeCompile(fe,R),nt=Z.acquireProgram(fe,xe),Ce.set(xe,nt),U.uniforms=fe.uniforms;let we=U.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=Y.uniform),Wf(E,fe),U.needsLights=q0(E),U.lightsStateVersion=Ee,U.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.sunLights.value=B.state.sun,we.sunLightShadows.value=B.state.sunShadow,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.sunShadowMatrix.value=B.state.sunShadowMatrix,we.sunShadowCascade.value=B.state.sunShadowCascade,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),U.numLightProbeGrids=Gf(v.state.lightProbeGridArray),U.currentProgram=nt,U.uniformsList=null,nt}function G0(E,N,V,U,B){let me=ke.get(E),Ee=me.currentProgram.id+","+U+","+B,fe=me.programVariants.get(Ee);return fe===void 0?(fe=fa(E,N,V),me.programVariants.set(Ee,fe)):(me.currentProgram=fe,me.uniformsList=null,me.outputColorSpace=U,me.toneMapping=B),fe}function Vf(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=$r.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Wf(E,N){let V=ke.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function V0(E,N,V,U,B){N.isScene!==!0&&(N=zn),We.resetTextureUnits();let me=N.fog,Ee=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?N.environment:null,fe=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Qe.workingColorSpace,xe=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Ce=A.get(U.envMap||Ee,xe),je=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,nt=!!V.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),we=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,Ft=!!V.morphAttributes.color,yt=_i;U.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(yt=R.toneMapping);let _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nn=_t!==void 0?_t.length:0,Ae=ke.get(U),fn=v.state.lights;if(It===!0&&(jt===!0||E!==J)){let At=E===J&&U.id===H;Y.setState(U,E,At)}let ht=!1,Rs=!1;U.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==fn.state.version||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==Ce||U.fog===!0&&Ae.fog!==me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Y.numPlanes||Ae.numIntersection!==Y.numIntersection)||Ae.vertexAlphas!==je||Ae.vertexTangents!==nt||Ae.morphTargets!==we||Ae.morphNormals!==it||Ae.morphColors!==Ft||Ae.morphTargetsCount!==nn||Ae.numLightProbeGrids!==Gf(v.state.lightProbeGridArray)?ht=!0:(Ae.outputColorSpace!==fe||Ae.toneMapping!==yt)&&(Rs=!0):(ht=!0,Ae.__version=U.version);let sn=Ae.currentProgram;(ht===!0||Rs===!0)&&(sn=Rs===!0?G0(U,N,B,fe,yt):fa(U,N,B),F&&U.isNodeMaterial&&F.onUpdateProgram(U,sn,Ae));let Po=!1,ss=!1,Cs=!1,ct=sn.getUniforms(),Qt=Ae.uniforms;if(ge.useProgram(sn.program)&&(Po=!0,ss=!0,Cs=!0),U.id!==H&&(H=U.id,ss=!0),Po||J!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(O,"projectionMatrix",E.projectionMatrix),ct.setValue(O,"viewMatrix",E.matrixWorldInverse);let Yt=ct.map.cameraPosition;Yt!==void 0&&Yt.setValue(O,ci.setFromMatrixPosition(E.matrixWorld)),Tt.logarithmicDepthBuffer&&ct.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ct.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),J!==E&&(J=E,ss=!0,Cs=!0)}if(Ae.needsLights&&(fn.state.sunShadowMap.length>0&&ct.setValue(O,"sunShadowMap",fn.state.sunShadowMap,We),fn.state.directionalShadowMap.length>0&&ct.setValue(O,"directionalShadowMap",fn.state.directionalShadowMap,We),fn.state.spotShadowMap.length>0&&ct.setValue(O,"spotShadowMap",fn.state.spotShadowMap,We),fn.state.pointShadowMap.length>0&&ct.setValue(O,"pointShadowMap",fn.state.pointShadowMap,We)),B.isSkinnedMesh){ct.setOptional(O,B,"bindMatrix"),ct.setOptional(O,B,"bindMatrixInverse");let At=B.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ct.setValue(O,"boneTexture",At.boneTexture,We))}B.isBatchedMesh&&(ct.setOptional(O,B,"batchingTexture"),ct.setValue(O,"batchingTexture",B._matricesTexture,We),ct.setOptional(O,B,"batchingIdTexture"),ct.setValue(O,"batchingIdTexture",B._indirectTexture,We),ct.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(O,"batchingColorTexture",B._colorsTexture,We));let Zn=V.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&$.update(B,V,sn),(ss||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,ct.setValue(O,"receiveShadow",B.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&N.environment!==null&&(Qt.envMapIntensity.value=N.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=zS()),ss){if(ct.setValue(O,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&W0(Qt,Cs),me&&U.fog===!0&&ce.refreshFogUniforms(Qt,me),ce.refreshMaterialUniforms(Qt,U,ae,Le,v.state.transmissionRenderTarget[E.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let At=_,Yt=0;for(let Ci of v.state.lightProbeGridArray)Ci.texture!==null&&(At.textures[Yt]=Ci.texture,At.min[Yt]=Ci.boundingBox.min,At.max[Yt]=Ci.boundingBox.max,At.resolution[Yt]=Ci.resolution,Yt++);for(let Ci in At)At[Ci].length=Yt;Qt.probesSH.value=At.textures,Qt.probesMin.value=At.min,Qt.probesMax.value=At.max,Qt.probesResolution.value=At.resolution}$r.upload(O,Vf(Ae),Qt,We)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&($r.upload(O,Vf(Ae),Qt,We),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ct.setValue(O,"center",B.center),ct.setValue(O,"modelViewMatrix",B.modelViewMatrix),ct.setValue(O,"normalMatrix",B.normalMatrix),ct.setValue(O,"modelMatrix",B.matrixWorld),U.uniformsGroups!==void 0){let At=U.uniformsGroups;for(let Yt=0,Ci=At.length;Yt<Ci;Yt++){let Xf=At[Yt];De.update(Xf,sn),De.bind(Xf,sn)}}return sn}function W0(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function q0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,N,V){let U=ke.get(E);U.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),ke.get(E.texture).__webglTexture=N,ke.get(E.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:V,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let V=ke.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){te=E,j=N,G=V;let U=null,B=!1,me=!1;if(E){let fe=ke.get(E);if(fe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),Q.copy(E.viewport),Se.copy(E.scissor),Me=E.scissorTest,ge.viewport(Q),ge.scissor(Se),ge.setScissorTest(Me),H=-1;return}else if(fe.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(fe.__hasExternalTextures)We.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let je=E.depthTexture;if(fe.__boundDepthTexture!==je){if(je!==null&&ke.has(je)&&(E.width!==je.image.width||E.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}let xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(me=!0);let Ce=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?U=Ce[N][V]:U=Ce[N],B=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?U=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[V]:U=Ce,Q.copy(E.viewport),Se.copy(E.scissor),Me=E.scissorTest}else Q.copy(Oe).multiplyScalar(ae).floor(),Se.copy(at).multiplyScalar(ae).floor(),Me=ot;if(V!==0&&(U=z),ge.bindFramebuffer(O.FRAMEBUFFER,U)&&ge.drawBuffers(E,U),ge.viewport(Q),ge.scissor(Se),ge.setScissorTest(Me),B){let fe=ke.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,V)}else if(me){let fe=N;for(let xe=0;xe<E.textures.length;xe++){let Ce=ke.get(E.textures[xe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+xe,Ce.__webglTexture,V,fe)}}else if(E!==null&&V!==0){let fe=ke.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,V)}H=-1};function qf(E){let N=ke.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=Tt.textureFormatReadable(E.format),N.__typeReadable=Tt.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,V,U,B,me,Ee,fe=0){if(!(E&&E.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee],Array.isArray(xe)&&(xe=xe[0])),xe){ge.bindFramebuffer(O.FRAMEBUFFER,xe);try{let Ce=E.textures[fe],je=Ce.format,nt=Ce.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let we=qf(Ce);if(we.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-U&&V>=0&&V<=E.height-B&&O.readPixels(N,V,U,B,oe.convert(je),oe.convert(nt),me)}finally{let Ce=te!==null?ke.get(te).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,U,B,me,Ee,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee],Array.isArray(xe)&&(xe=xe[0])),xe)if(N>=0&&N<=E.width-U&&V>=0&&V<=E.height-B){ge.bindFramebuffer(O.FRAMEBUFFER,xe);let Ce=E.textures[fe],je=Ce.format,nt=Ce.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let we=qf(Ce);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(N,V,U,B,oe.convert(je),oe.convert(nt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ft=te!==null?ke.get(te).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ft);let yt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ym(O,yt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(it),O.deleteSync(yt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,V=0){let U=Math.pow(2,-V),B=Math.floor(E.image.width*U),me=Math.floor(E.image.height*U),Ee=N!==null?N.x:0,fe=N!==null?N.y:0;We.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,Ee,fe,B,me),ge.unbindTexture()},this.copyTextureToTexture=function(E,N,V=null,U=null,B=0,me=0){let Ee,fe,xe,Ce,je,nt,we,it,Ft,yt=E.isCompressedTexture?E.mipmaps[me]:E.image;if(V!==null)Ee=V.max.x-V.min.x,fe=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,je=V.min.y,nt=V.isBox3?V.min.z:0;else{let ct=Math.pow(2,-B);Ee=Math.floor(yt.width*ct),fe=Math.floor(yt.height*ct),E.isDataArrayTexture?xe=yt.depth:E.isData3DTexture?xe=Math.floor(yt.depth*ct):xe=1,Ce=0,je=0,nt=0}U!==null?(we=U.x,it=U.y,Ft=U.z):(we=0,it=0,Ft=0);let _t=oe.convert(N.format),nn=oe.convert(N.type),Ae;N.isData3DTexture?(We.setTexture3D(N,0),Ae=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(We.setTexture2DArray(N,0),Ae=O.TEXTURE_2D_ARRAY):(We.setTexture2D(N,0),Ae=O.TEXTURE_2D),ge.activeTexture(O.TEXTURE0),ge.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),ge.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ge.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let fn=ge.getParameter(O.UNPACK_ROW_LENGTH),ht=ge.getParameter(O.UNPACK_IMAGE_HEIGHT),Rs=ge.getParameter(O.UNPACK_SKIP_PIXELS),sn=ge.getParameter(O.UNPACK_SKIP_ROWS),Po=ge.getParameter(O.UNPACK_SKIP_IMAGES);ge.pixelStorei(O.UNPACK_ROW_LENGTH,yt.width),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt.height),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),ge.pixelStorei(O.UNPACK_SKIP_ROWS,je),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);let ss=E.isDataArrayTexture||E.isData3DTexture,Cs=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let ct=ke.get(E),Qt=ke.get(N),Zn=ke.get(ct.__renderTarget),At=ke.get(Qt.__renderTarget);ge.bindFramebuffer(O.READ_FRAMEBUFFER,Zn.__webglFramebuffer),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Yt=0;Yt<xe;Yt++)ss&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(E).__webglTexture,B,nt+Yt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(N).__webglTexture,me,Ft+Yt)),O.blitFramebuffer(Ce,je,Ce+Ee,je+fe,we,it,we+Ee,it+fe,O.DEPTH_BUFFER_BIT,O.NEAREST);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||ke.has(E)){let ct=ke.get(E),Qt=ke.get(N);ge.bindFramebuffer(O.READ_FRAMEBUFFER,L),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,q);for(let Zn=0;Zn<xe;Zn++)ss?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ct.__webglTexture,B,nt+Zn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ct.__webglTexture,B),Cs?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qt.__webglTexture,me,Ft+Zn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qt.__webglTexture,me),B!==0?O.blitFramebuffer(Ce,je,Ce+Ee,je+fe,we,it,we+Ee,it+fe,O.COLOR_BUFFER_BIT,O.NEAREST):Cs?O.copyTexSubImage3D(Ae,me,we,it,Ft+Zn,Ce,je,Ee,fe):O.copyTexSubImage2D(Ae,me,we,it,Ce,je,Ee,fe);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Cs?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Ae,me,we,it,Ft,Ee,fe,xe,_t,nn,yt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,me,we,it,Ft,Ee,fe,xe,_t,yt.data):O.texSubImage3D(Ae,me,we,it,Ft,Ee,fe,xe,_t,nn,yt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,we,it,Ee,fe,_t,nn,yt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,we,it,yt.width,yt.height,_t,yt.data):O.texSubImage2D(O.TEXTURE_2D,me,we,it,Ee,fe,_t,nn,yt);ge.pixelStorei(O.UNPACK_ROW_LENGTH,fn),ge.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),ge.pixelStorei(O.UNPACK_SKIP_PIXELS,Rs),ge.pixelStorei(O.UNPACK_SKIP_ROWS,sn),ge.pixelStorei(O.UNPACK_SKIP_IMAGES,Po),me===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&O.generateMipmap(Ae),ge.unbindTexture()},this.initRenderTarget=function(E){ke.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){j=0,G=0,te=null,ge.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}});function Gu(i,e){if(e===mu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yr||e===oo){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Yr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var sg=Et(()=>{Qs()});function El(i){let e=new Map,t=new Map,n=i.clone();return rg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function rg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)rg(i.children[n],e.children[n],t)}var Vu=Et(()=>{});function HS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Pt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function WS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new rt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),i.DefaultMaterial}function er(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function XS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jS(i){let e,t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xu(t.attributes):e=i.indices+":"+Xu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Xu(i.targets[n]);return e}function Xu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function bd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function KS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function YS(i,e,t){let n=e.attributes,s=new Dn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=bd(ea[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=bd(ea[d.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Sn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function lg(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=gd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Qe.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Si(i,e),YS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?qS(i,e.targets,t):i})}var wl,et,ju,Ku,Ju,Yu,$u,Zu,Qu,ed,td,nd,id,sd,rd,ad,od,cd,ld,Al,hd,hg,po,ag,ud,dd,fd,pd,Rl,GS,md,Yn,ea,og,cg,Wu,gd,_s,VS,qu,JS,_d,ug=Et(()=>{Qs();sg();Vu();wl=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Al(t,et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Al(t,et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new hd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=qi.extractUrlBase(e);a=qi.resolveURL(l,this.path)}else a=qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Gr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hg){try{a[et.KHR_BINARY_GLTF]=new ud(e)}catch(u){s&&s(u);return}r=JSON.parse(a[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new _d(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case et.KHR_MATERIALS_UNLIT:a[u]=new Ku;break;case et.KHR_DRACO_MESH_COMPRESSION:a[u]=new dd(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:a[u]=new fd;break;case et.KHR_MESH_QUANTIZATION:a[u]=new pd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ju=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],mn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Xs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Fn(h),l.distance=u;break;case"spot":l=new Ka(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Ku=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return bn}extendParams(e,t,n){let s=[];e.color=new Fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],mn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},Ju=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Yu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(r,r)}return Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Zu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Qu=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Rt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(r[0],r[1],r[2],mn),Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},sd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(r[0],r[1],r[2],mn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Rt)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},cd=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ld=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Al=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},hd=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Yn.TRIANGLES&&l.mode!==Yn.TRIANGLE_STRIP&&l.mode!==Yn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let y=new Ve,m=new P,p=new Lt,x=new P(1,1,1),M=new di(g.geometry,g.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,w),c.SCALE&&x.fromBufferAttribute(c.SCALE,w),M.setMatrixAt(w,y.compose(m,p,x));let _=null;for(let w in c)if(w==="_COLOR_0"){let v=c[w];M.instanceColor=new ki(v.array,v.itemSize,v.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(_===null){let b=M.geometry;_=new Ct,_.name=b.name;for(let S in b.attributes)_.setAttribute(S,b.attributes[S]);for(let S in b.morphAttributes)_.morphAttributes[S]=b.morphAttributes[S];b.index!==null&&_.setIndex(b.index),_.morphTargetsRelative=b.morphTargetsRelative;for(let S of b.groups)_.addGroup(S.start,S.count,S.materialIndex);b.boundingBox!==null&&(_.boundingBox=b.boundingBox.clone()),b.boundingSphere!==null&&(_.boundingSphere=b.boundingSphere.clone()),_.drawRange.start=b.drawRange.start,_.drawRange.count=b.drawRange.count,_.userData=Object.assign({},b.userData),M.geometry=_}let v=c[w];_.setAttribute(w,new ki(v.array,v.itemSize,v.normalized))}vt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},hg="glTF",po=12,ag={JSON:1313821514,BIN:5130562},ud=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-po,r=new DataView(e,po),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===ag.JSON){let l=new Uint8Array(e,po+a,o);this.content=n.decode(l)}else if(c===ag.BIN){let l=po+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},dd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=gd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=gd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ea[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(f)},o,l,mn,d)})})}},fd=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},pd=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},Rl=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,y=g-l,m=-2*f+3*d,p=f-d,x=1-m,M=p-d+u;for(let _=0;_!==o;_++){let w=a[y+_+o],v=a[y+_+c]*h,b=a[g+_+o],S=a[g+_]*h;r[_]=x*w+M*v+m*b+p*S}return r}},GS=new Lt,md=class extends Rl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return GS.fromArray(r).normalize().toArray(r),r}},Yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},og={9728:Nt,9729:Gt,9984:Nc,9985:Kr,9986:Ys,9987:Kn},cg={33071:qn,33648:wr,10497:ui},Wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VS={CUBICSPLINE:void 0,LINEAR:ks,STEP:Us},qu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};JS=new Ve,_d=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new qa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ja(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return er(r,o,s),Si(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(qi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Wu[s.type],o=ea[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ht(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Wu[s.type],l=ea[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(x);M||(y=new l(o,p*f,s.count*f/h),M=new Dr(y,f/h),t.cache.add(x,M)),m=new Nr(M,c,d%f/h,g)}else o===null?y=new l(s.count*c):y=new l(o,d,s.count*c),m=new Ht(y,c,g);if(s.sparse!==void 0){let p=Wu.SCALAR,x=ea[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,w=new x(a[1],M,s.sparse.count*p),v=new l(a[2],_,s.sparse.count*c);o!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,S=w.length;b<S;b++){let C=w[b];if(m.setX(C,v[b*c]),c>=2&&m.setY(C,v[b*c+1]),c>=3&&m.setZ(C,v[b*c+2]),c>=4&&m.setW(C,v[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=og[d.magFilter]||Gt,h.minFilter=og[d.minFilter]||Kn,h.wrapS=cg[d.wrapS]||ui,h.wrapT=cg[d.wrapT]||ui,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Gt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,g){let y=f;t.isImageBitmapLoader===!0&&(y=function(m){let p=new Vt(m);p.needsUpdate=!0,f(p)}),t.load(qi.resolveURL(d,r.path),y,void 0,g)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),Si(d,a),d.userData.mimeType=a.mimeType||KS(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new kr,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ur,gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return rt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[et.KHR_MATERIALS_UNLIT]){let u=s[et.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],mn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=tn);let h=r.alphaMode||qu.OPAQUE;if(h===qu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===qu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==bn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ge(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==bn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==bn){let u=r.emissiveFactor;o.emissive=new Fe().setRGB(u[0],u[1],u[2],mn)}return r.emissiveTexture!==void 0&&a!==bn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Si(u,r),t.associations.set(u,{materials:e}),r.extensions&&er(s,u,r),u})}createUniqueName(e){let t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return lg(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=jS(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[et.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=lg(new Ct,l,t),l.mode===Yn.TRIANGLE_STRIP?d=d.then(f=>Gu(f,oo)):l.mode===Yn.TRIANGLE_FAN&&(d=d.then(f=>Gu(f,Yr))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?WS(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=a[f],p,x=l[f];if(m.mode===Yn.TRIANGLES||m.mode===Yn.TRIANGLE_STRIP||m.mode===Yn.TRIANGLE_FAN||m.mode===void 0){let M=r.isSkinnedMesh===!0,_=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");M&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&_?new La(y,x):new he(y,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Yn.LINES)p=new Na(y,x);else if(m.mode===Yn.LINE_STRIP)p=new Hs(y,x);else if(m.mode===Yn.LINE_LOOP)p=new Fa(y,x);else if(m.mode===Yn.POINTS)p=new Oa(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&XS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Si(p,r),m.extensions&&er(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&er(s,u[0],r),u[0];let d=new zt;r.extensions&&er(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(bt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new qs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Da(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let M=0,_=d.length;M<_;M++){let w=d[M],v=f[M],b=g[M],S=y[M],C=m[M];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let R=n._createAnimationTracks(w,v,b,S,C);if(R)for(let D=0;D<R.length;D++)p.push(R[D])}let x=new Wi(r,void 0,p);return Si(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,JS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Fr:l.length>1?h=new zt:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Si(h,r),r.extensions&&er(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new zt;n.name&&(r.name=s.createUniqueName(n.name)),Si(r,n),n.extensions&&er(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(El(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof gn||d instanceof Vt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}_s[r.path]===_s.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(_s[r.path]){case _s.weights:h=Hi;break;case _s.rotation:h=Gi;break;case _s.translation:case _s.scale:h=gs;break;default:n.itemSize===1?h=Hi:h=gs;break}let u=s.interpolation!==void 0?VS[s.interpolation]:ks,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let y=new h(c[f]+"."+_s[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Gi?md:Rl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var dg,fg=Et(()=>{dg=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),M=0;M<p.length;++M){var _=p.charCodeAt(M);x[M]=_>96?_-97:_>64?_-39:_+4}for(var w=0,M=0;M<p.length;++M)x[w++]=x[M]<60?n[x[M]]:(x[M]-60)*64+x[++M];return x.buffer.slice(0,w)}function c(p,x,M,_,w,v,b){var S=p.exports.sbrk,C=_+3&-4,R=S(C*w),D=S(v.length),F=new Uint8Array(p.exports.memory.buffer);F.set(v,D);var z=x(R,_,w,D,v.length);if(z==0&&b&&b(R,C,w),M.set(F.subarray(R,R+_*w)),S(R-S(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(M){var _=M.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function g(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(M),w=u.length;w<p;++w)u[w]=f(_);for(var w=p;w<u.length;++w)u[w].object.postMessage({});u.length=p,URL.revokeObjectURL(_)}function y(p,x,M,_,w){for(var v=u[0],b=1;b<u.length;++b)u[b].pending<v.pending&&(v=u[b]);return new Promise(function(S,C){var R=new Uint8Array(M),D=++d;v.pending+=p,v.requests[D]={resolve:S,reject:C},v.object.postMessage({id:D,count:p,size:x,source:R,mode:_,filter:w},[R.buffer])})}function m(p){var x=p.data;self.ready.then(function(M){if(!x.id)return self.close();try{var _=new Uint8Array(x.count*x.size);c(M,M.exports[x.mode],_,x.count,x.size,x.source,M.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(w){self.postMessage({id:x.id,count:x.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,M,_,w){c(r,r.exports.meshopt_decodeVertexBuffer,p,x,M,_,r.exports[l[w]])},decodeIndexBuffer:function(p,x,M,_){c(r,r.exports.meshopt_decodeIndexBuffer,p,x,M,_)},decodeIndexSequence:function(p,x,M,_){c(r,r.exports.meshopt_decodeIndexSequence,p,x,M,_)},decodeGltfBuffer:function(p,x,M,_,w,v){c(r,r.exports[h[w]],p,x,M,_,r.exports[l[v]])},decodeGltfBufferAsync:function(p,x,M,_,w){return u.length>0?y(p,x,M,h[_],l[w]):a.then(function(){var v=new Uint8Array(p*x);return c(r,r.exports[h[_]],v,p,x,M,r.exports[l[w]]),v})}}})()});function ta(i){return new Ga({color:0,emissive:16777215,emissiveIntensity:i})}var Cl,pg=Et(()=>{Qs();Cl=class extends zs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new pt;e.deleteAttribute("uv");let t=new rt({side:en}),n=new rt,s=new Fn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new he(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new di(e,n,6),o=new vt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new he(e,ta(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new he(e,ta(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new he(e,ta(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new he(e,ta(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new he(e,ta(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new he(e,ta(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var xn,Pl,mg=Et(()=>{Qs();xn={kFollow:{top:60,mid:10,hem:2.5},gravity:9.8,sewDepth:.13,restHold:1,holdRange:.15,cAir:1.05,cRel:3.5,ripple:.35,stretch:1,shear:.6,bend:.18,iters:6,hz:120,maxOffset:.65,gearClear:.006,maxForward:.1},Pl=class{constructor(e,t){if(this.ok=!1,this.root=e,this.T=xn,e.traverse(v=>{!this.skin&&v.isSkinnedMesh&&/LyriaCape/i.test(v.name+(v.parent?v.parent.name:""))&&(this.skin=v)}),!this.skin)return;let n=this.skin.geometry,s=n.attributes.uv,r=n.attributes.position.count,a=new Set,o=new Set;for(let v=0;v<r;v++)a.add(Math.round(s.getX(v)*1e4)),o.add(Math.round(s.getY(v)*1e4));let c=a.size,l=o.size;this.C=c,this.R=l;let h=c*l;this.vmap=new Int32Array(r),this.rep=new Int32Array(h).fill(-1);for(let v=0;v<r;v++){let b=Math.round(s.getX(v)*(c-1)),C=Math.round(s.getY(v)*(l-1))*c+b;this.vmap[v]=C,this.rep[C]<0&&(this.rep[C]=v)}if([...this.rep].some(v=>v<0)){console.warn("capesim: grid incomplete",c,l);return}this.x=new Float32Array(h*3),this.xp=new Float32Array(h*3),this.t=new Float32Array(h*3),this.tp=new Float32Array(h*3),this.row=new Int32Array(h);for(let v=0;v<h;v++)this.row[v]=Math.floor(v/c);this.kf=new Float32Array(l);for(let v=0;v<l;v++){let b=v/(l-1);this.kf[v]=v===0?0:v<2?xn.kFollow.top:b<.35?bt.lerp(xn.kFollow.top,xn.kFollow.mid,b/.35):bt.lerp(xn.kFollow.mid,xn.kFollow.hem,(b-.35)/.65)}let u=new Ct;u.setAttribute("position",new Ht(new Float32Array(r*3),3).setUsage(yu)),u.setAttribute("uv",n.attributes.uv.clone()),n.index&&u.setIndex(n.index.clone());let d=this.skin.material.clone();d.side=tn,this.mesh=new he(u,d),this.mesh.name="LyriaCapeSim",this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.matrixAutoUpdate=!1,t.add(this.mesh),this.skin.visible=!1;let f=v=>{let b=null;return e.traverse(S=>{!b&&S.isBone&&S.name.replace(/[:]/g,"")==="mixamorig"+v&&(b=S)}),b};this.caps=[["Hips","Spine1",.14],["Spine1","Spine2",.13],["LeftUpLeg","LeftLeg",.085],["LeftLeg","LeftFoot",.06],["RightUpLeg","RightLeg",.085],["RightLeg","RightFoot",.06],["LeftArm","LeftForeArm",.05],["LeftForeArm","LeftHand",.04],["RightArm","RightForeArm",.05],["RightForeArm","RightHand",.04]].map(([v,b,S])=>({a:f(v),b:f(b),r:S,A:new P,B:new P})).filter(v=>v.a&&v.b),this.links=[];let g=(v,b,S)=>this.links.push([v,b,0,S]);for(let v=0;v<l;v++)for(let b=0;b<c;b++){let S=v*c+b;b+1<c&&g(S,S+1,xn.stretch),v+1<l&&g(S,S+c,xn.stretch),b+1<c&&v+1<l&&(g(S,S+c+1,xn.shear),g(S+1,S+c,xn.shear)),b+2<c&&g(S,S+2,xn.bend),v+2<l&&g(S,S+2*c,xn.bend)}let y=f("Spine2"),m=f("Hips");this.bS=y,this.bH=m;let p=this.skin.skeleton,x=p.bones.indexOf(y);this.restS=new Float32Array(h*3),this.restH=new Float32Array(h*3),this.wH=new Float32Array(l),p.pose(),e.updateMatrixWorld(!0);let M=new Be().setFromMatrix4(e.matrixWorld).invert(),_=new P().setFromMatrixPosition(m.matrixWorld),w=new P;for(let v=0;v<h;v++){w.fromBufferAttribute(n.attributes.position,this.rep[v]).applyMatrix4(this.skin.bindMatrix);let b=w.clone().applyMatrix4(p.boneInverses[x]),S=b.clone().applyMatrix4(y.matrixWorld).sub(_).applyMatrix3(M);this.restS.set([b.x,b.y,b.z],3*v),this.restH.set([S.x,S.y,S.z],3*v)}for(let v=0;v<l;v++){let b=bt.clamp((v/(l-1)-.12)/.55,0,1);this.wH[v]=b*b*(3-2*b)}{let v=C=>{let R=0;for(let D=0;D<c;D++)R+=this.restH[3*(C*c+D)+1];return R/c},b=v(0),S=2;for(;S<l-4&&b-v(S)<=xn.sewDepth+1e-4;)S++;this.nSew=S}this.gGap=null;{let v=[];if(e.traverse(b=>{b.isMesh&&/LyriaGear/i.test(b.name+(b.parent?b.parent.name:""))&&v.push(b)}),v.length){let S=new P().setFromMatrixColumn(e.matrixWorld,2).setY(0).normalize().clone().negate(),C=new P(0,1,0),R=new P().crossVectors(C,S).normalize(),D=.02,F=new Map,z=[],L=new P,q=[new P,new P,new P];for(let H of v){H.updateMatrixWorld(!0);let J=H.geometry,Q=J.index,Se=Q?Q.count/3:J.attributes.position.count/3,Me=new Float32Array(J.attributes.position.count*3);for(let W=0;W<J.attributes.position.count;W++)H.isSkinnedMesh?H.getVertexPosition(W,L):L.fromBufferAttribute(J.attributes.position,W),L.applyMatrix4(H.matrixWorld),Me[3*W]=L.dot(R),Me[3*W+1]=L.y,Me[3*W+2]=L.dot(S);for(let W=0;W<Se;W++){let ie=Q?Q.getX(3*W):3*W,ve=Q?Q.getX(3*W+1):3*W+1,Le=Q?Q.getX(3*W+2):3*W+2,ae=[Me[3*ie],Me[3*ie+1],Me[3*ie+2],Me[3*ve],Me[3*ve+1],Me[3*ve+2],Me[3*Le],Me[3*Le+1],Me[3*Le+2]],ze=z.length;z.push(ae);let xt=Math.floor(Math.min(ae[0],ae[3],ae[6])/D),Oe=Math.floor(Math.max(ae[0],ae[3],ae[6])/D),at=Math.floor(Math.min(ae[1],ae[4],ae[7])/D),ot=Math.floor(Math.max(ae[1],ae[4],ae[7])/D);for(let Xe=xt;Xe<=Oe;Xe++)for(let St=at;St<=ot;St++){let It=Xe*100003+St,jt=F.get(It);jt||F.set(It,jt=[]),jt.push(ze)}}}let j=(H,J,Q)=>{let Se=F.get(Math.floor(H/D)*100003+Math.floor(J/D));if(!Se)return 9;let Me=9;for(let W of Se){let ie=z[W],ve=ie[3]-ie[0],Le=ie[4]-ie[1],ae=ie[6]-ie[0],ze=ie[7]-ie[1],xt=ve*ze-Le*ae;if(Math.abs(xt)<1e-12)continue;let Oe=H-ie[0],at=J-ie[1],ot=(Oe*ze-at*ae)/xt,Xe=(ve*at-Le*Oe)/xt;if(ot<0||Xe<0||ot+Xe>1)continue;let St=ie[2]+ot*(ie[5]-ie[2])+Xe*(ie[8]-ie[2])-Q;St>-.01&&St<Me&&(Me=St)}return Me};this.gGap=new Float32Array(h).fill(9);let G=new P,te=0;for(let H=0;H<h;H++){this.skin.getVertexPosition(this.rep[H],G),G.applyMatrix4(this.skin.matrixWorld);let J=G.dot(R),Q=G.y,Se=G.dot(S),Me=9;for(let[W,ie]of[[0,0],[.03,0],[-.03,0],[0,.03],[0,-.03]])Me=Math.min(Me,j(J+W,Q+ie,Se));this.gGap[H]=Math.max(0,Me),Me<9&&te++}this.debug0={gearMeshes:v.map(H=>H.name),gearTris:z.length,gearParticles:te}}}this.v=new P,this.acc=0,this.time=0,this.needReset=!0,this.minD=null,this.debug={particles:h,cols:c,rows:l,sewRows:this.nSew,maxOffset:0,maxHem:0,pushes:0,...this.debug0||{}},this.ok=!0}_targets(){let e=this.v,t=this.t,n=new P;this.root.updateMatrixWorld(!0);let s=this.bS.matrixWorld,r=new P().setFromMatrixPosition(this.bH.matrixWorld),a=new Be().setFromMatrix4(this.root.matrixWorld);this.groundY=new P().setFromMatrixPosition(this.root.matrixWorld).y+.02;for(let o=0;o<this.rep.length;o++){let c=3*o,l=this.wH[this.row[o]];e.set(this.restS[c],this.restS[c+1],this.restS[c+2]).applyMatrix4(s),l>0&&(n.set(this.restH[c],this.restH[c+1],this.restH[c+2]).applyMatrix3(a).add(r),e.lerp(n,l)),t[c]=e.x,t[c+1]=e.y,t[c+2]=e.z}for(let o of this.caps)o.a.getWorldPosition(o.A),o.b.getWorldPosition(o.B);this.fwd||(this.fwd=new P),this.fwd.setFromMatrixColumn(this.root.matrixWorld,2).setY(0).normalize()}_capDist(e,t,n,s,r){let a=s.A.x,o=s.A.y,c=s.A.z,l=s.B.x-a,h=s.B.y-o,u=s.B.z-c,d=l*l+h*h+u*u,f=d>1e-9?((e-a)*l+(t-o)*h+(n-c)*u)/d:0;return f=f<0?0:f>1?1:f,r[0]=e-(a+l*f),r[1]=t-(o+h*f),r[2]=n-(c+u*f),Math.hypot(r[0],r[1],r[2])}reset(){this.needReset=!0}update(e){if(!this.ok)return;this.frames=(this.frames||0)+1,this.frames===3&&(this.needReset=!0),this.tp.set(this.t),this._targets();let t=this.rep.length,n=this.x,s=this.xp,r=this.t;if(this.needReset){n.set(r),s.set(r),this.tp.set(r),this.needReset=!1;for(let m of this.links){let p=m[0]*3,x=m[1]*3;m[2]=Math.hypot(r[p]-r[x],r[p+1]-r[x+1],r[p+2]-r[x+2])}if(!this.minD){let m=[0,0,0];for(let p of this.caps){let x=9;for(let M=this.nSew*this.C;M<t;M++)x=Math.min(x,this._capDist(r[3*M],r[3*M+1],r[3*M+2],p,m));p.r=Math.max(.02,Math.min(p.r*1.6,x-.006))}this.minD=!0}}let a=1/xn.hz;this.acc=Math.min(this.acc+e,.1);let o=Math.floor(this.acc/a);this.acc-=o*a;let c=xn,l=[0,0,0],h=0;if(e>0){for(let m=0;m<this.C;m++)h+=Math.hypot(r[3*m]-this.tp[3*m],r[3*m+2]-this.tp[3*m+2]);h/=this.C*e}let u=0;for(let m=0;m<o;m++){this.time+=a;let p=(m+1)/o;for(let x=0;x<t;x++){let M=this.row[x],_=3*x,w=this.tp[_]+(r[_]-this.tp[_])*p,v=this.tp[_+1]+(r[_+1]-this.tp[_+1])*p,b=this.tp[_+2]+(r[_+2]-this.tp[_+2])*p;if(M<this.nSew){s[_]=n[_],s[_+1]=n[_+1],s[_+2]=n[_+2],n[_]=w,n[_+1]=v,n[_+2]=b;continue}let S=(n[_]-s[_])/a,C=(n[_+1]-s[_+1])/a,R=(n[_+2]-s[_+2])/a,D=(r[_]-this.tp[_])/Math.max(e,1e-4),F=(r[_+1]-this.tp[_+1])/Math.max(e,1e-4),z=(r[_+2]-this.tp[_+2])/Math.max(e,1e-4),L=this.kf[M],q=L*(w-n[_])-c.cAir*S-c.cRel*(S-D),j=Math.hypot(w-n[_],v-n[_+1],b-n[_+2]),G=c.restHold*Math.max(0,1-j/c.holdRange),te=-c.gravity*(1-G)+L*(v-n[_+1])-c.cAir*C-c.cRel*(C-F),H=L*(b-n[_+2])-c.cAir*R-c.cRel*(R-z),J=M/(this.R-1);if(h>2.5){let Q=c.ripple*(h-2.5)*J*J*Math.sin(this.time*9-J*6+x%this.C*.5);te+=Q}s[_]=n[_],s[_+1]=n[_+1],s[_+2]=n[_+2],n[_]+=S*a+q*a*a,n[_+1]+=C*a+te*a*a,n[_+2]+=R*a+H*a*a}for(let x=0;x<c.iters;x++){for(let M of this.links){let _=M[0]*3,w=M[1]*3,v=n[w]-n[_],b=n[w+1]-n[_+1],S=n[w+2]-n[_+2],C=Math.hypot(v,b,S)||1e-9,R=this.row[M[0]]<this.nSew?0:1,D=this.row[M[1]]<this.nSew?0:1;if(R+D===0)continue;let F=M[3]*(C-M[2])/(C*(R+D));n[_]+=v*F*R,n[_+1]+=b*F*R,n[_+2]+=S*F*R,n[w]-=v*F*D,n[w+1]-=b*F*D,n[w+2]-=S*F*D}for(let M=this.nSew*this.C;M<t;M++){let _=3*M;for(let v of this.caps){let b=this._capDist(n[_],n[_+1],n[_+2],v,l);if(b>=v.r)continue;let S=v.r;if(b<1e-6)continue;let C=(S-b)/b;n[_]+=l[0]*C,n[_+1]+=l[1]*C,n[_+2]+=l[2]*C,u++}n[_+1]<this.groundY&&(n[_+1]=this.groundY);let w=(n[_]-r[_])*this.fwd.x+(n[_+2]-r[_+2])*this.fwd.z-c.maxForward;if(w>0&&(n[_]-=w*this.fwd.x,n[_+2]-=w*this.fwd.z),this.gGap&&this.gGap[M]<8){let v=-((n[_]-r[_])*this.fwd.x+(n[_+2]-r[_+2])*this.fwd.z)-(this.gGap[M]-c.gearClear);v>0&&(n[_]+=v*this.fwd.x,n[_+2]+=v*this.fwd.z)}}}}for(let m=0;m<this.nSew*this.C;m++){let p=3*m;n[p]=r[p],n[p+1]=r[p+1],n[p+2]=r[p+2]}let d=0,f=0,g=this.mesh.geometry.attributes.position.array;for(let m=0;m<t;m++){let p=3*m,x=n[p]-r[p],M=n[p+1]-r[p+1],_=n[p+2]-r[p+2],w=Math.hypot(x,M,_);if(w>c.maxOffset){let v=c.maxOffset/w;n[p]=r[p]+x*v,n[p+1]=r[p+1]+M*v,n[p+2]=r[p+2]+_*v}d=Math.max(d,Math.min(w,c.maxOffset)),this.row[m]===this.R-1&&(f=Math.max(f,Math.min(w,c.maxOffset)))}let y=this.acc/a-1;for(let m=0;m<this.vmap.length;m++){let p=3*this.vmap[m];if(this.row[this.vmap[m]]<this.nSew){g[3*m]=n[p],g[3*m+1]=n[p+1],g[3*m+2]=n[p+2];continue}g[3*m]=n[p]+(n[p]-s[p])*y,g[3*m+1]=n[p+1]+(n[p+1]-s[p+1])*y,g[3*m+2]=n[p+2]+(n[p+2]-s[p+2])*y}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.computeVertexNormals(),this.debug.maxOffset=d,this.debug.maxHem=f,this.debug.pushes=u}}});function tr(){try{let i=JSON.parse(localStorage.getItem(_g)||"{}");return{profiles:i.profiles||{},last:i.last||null}}catch{return{profiles:{},last:null}}}function Il(i){localStorage.setItem(_g,JSON.stringify(i))}function $S(i){return{id:"p"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),name:i,hero:null,gold:gg.gold,gems:gg.gems,inv:{},boss:{mine:0,wood:0,ruins:0},created:Date.now(),updated:Date.now()}}function bg(i){return i.inv=i.inv||{},i.boss=Object.assign({mine:0,wood:0,ruins:0},i.boss||{}),i.gold=Math.max(0,Math.floor(+i.gold||0)),i.gems=Math.max(0,Math.floor(+i.gems||0)),i.name=String(i.name||"Hero").slice(0,20),i}var _g,gg,ri,xg=Et(()=>{_g="thornhold_world_profiles_v1",gg={gold:120,gems:5};ri={list(){return Object.values(tr().profiles).sort((i,e)=>e.updated-i.updated)},last(){let i=tr();return i.last&&i.profiles[i.last]?i.profiles[i.last]:null},create(i){if(i=String(i||"").trim().slice(0,20),!i)throw new Error("Type a name first.");let e=tr();if(Object.values(e.profiles).some(n=>n.name.toLowerCase()===i.toLowerCase()))throw new Error("That name is already used in this browser.");let t=$S(i);return e.profiles[t.id]=t,e.last=t.id,Il(e),t},get(i){let e=tr().profiles[i];return e?bg(e):null},save(i){let e=tr();i.updated=Date.now(),e.profiles[i.id]=i,e.last=i.id,Il(e)},remove(i){let e=tr();delete e.profiles[i],e.last===i&&(e.last=null),Il(e)},exportCode(i){return"TH1."+btoa(unescape(encodeURIComponent(JSON.stringify(i))))},importCode(i){if(i=String(i||"").trim(),!i.startsWith("TH1."))throw new Error("That is not a Thornhold save code.");let e;try{e=JSON.parse(decodeURIComponent(escape(atob(i.slice(4)))))}catch{throw new Error("The save code is damaged or incomplete.")}if(!e||!e.id||!e.name)throw new Error("The save code is missing its profile.");e=bg(e);let t=tr();return t.profiles[e.id]=e,t.last=e.id,Il(t),e}}});function Sd(i,e){let t=null;return i.traverse(n=>{!t&&n.isBone&&(n.name===e||n.name.replace(/[:.]/g,"")===e)&&(t=n)}),t}var ln,xs,ZS,xd,yd,vd,QS,Ll,yg=Et(()=>{Qs();ln=Math.PI/180,xs=class{constructor(e,t){this.w=2*Math.PI*e,this.z=t,this.x=0,this.v=0}step(e,t){let n=Math.max(1,Math.ceil(t/.008333333333333333)),s=t/n;for(let r=0;r<n;r++){let a=this.w*this.w*(e-this.x)-2*this.z*this.w*this.v;this.v+=a*s,this.x+=this.v*s}return this.x}},ZS=["L","C","R"],xd=[{f:2.6,z:.42,p:.45,s:.55},{f:2,z:.34,p:.35,s:.3},{f:1.6,z:.28,p:.3,s:.25}],yd=[{f:3,z:.4,p:.55,s:.6},{f:2.3,z:.32,p:.45,s:.4}],vd=[{f:3.2,z:.45,p:.6,s:.6},{f:2.4,z:.35,p:.4,s:.4}],QS={capeDragPerMps:2.6*ln,capeAccel:1.6*ln,capeFall:4.5*ln,capeRise:-1.5*ln,capeTurn:3.2*ln,capeLatAccel:1.2*ln,capeFlutter:.8*ln,capeMaxPitch:70*ln,capeMaxSway:14*ln,capeIdleForward:-4*ln,hairGain:.35,beardFall:3.5*ln,beardBrake:2.2*ln,beardBounce:1.6*ln,beardMax:24*ln,beardSwayGain:.4};Ll=class{constructor(e,{cape:t=!0}={}){this.root=e,this.chains=[];for(let r of t?ZS:[]){let a=[1,2,3].map(o=>Sd(e,`sec_Cape${r}${o}`));a.every(Boolean)&&this.chains.push({kind:"cape",side:r,bones:a,seg:xd,pitch:xd.map(o=>new xs(o.f,o.z)),sway:xd.map(o=>new xs(o.f,o.z))})}let n=[1,2].map(r=>Sd(e,`sec_Hair${r}`));n.every(Boolean)&&this.chains.push({kind:"hair",side:"C",bones:n,seg:vd,pitch:vd.map(r=>new xs(r.f,r.z)),sway:vd.map(r=>new xs(r.f,r.z))});let s=[1,2].map(r=>Sd(e,`sec_Beard${r}`));s.every(Boolean)&&this.chains.push({kind:"beard",side:"C",bones:s,seg:yd,pitch:yd.map(r=>new xs(r.f,r.z)),sway:yd.map(r=>new xs(r.f,r.z))}),this.prevPos=null,this.prevVel=new P,this.acc=new P,this.prevYaw=null,this.yawRate=0,this.t=0,this._q=new Lt,this._pq=new Lt,this._cq=new Lt,this._axis=new P,this.debug={pitch:0,sway:0}}get found(){return this.chains.map(e=>`${e.kind}${e.side}`)}update(e,{position:t,yaw:n}){if(e<=0||!this.chains.length)return;this.t+=e;let s=new P;this.prevPos&&s.subVectors(t,this.prevPos).divideScalar(e),this.prevPos=t.clone();let r=s.clone().sub(this.prevVel).divideScalar(e);if(this.acc.lerp(r,1-Math.exp(-12*e)),this.prevVel.copy(s),this.prevYaw!==null){let M=n-this.prevYaw;for(;M>Math.PI;)M-=2*Math.PI;for(;M<-Math.PI;)M+=2*Math.PI;this.yawRate+=(M/e-this.yawRate)*(1-Math.exp(-10*e))}this.prevYaw=n;let a=new P(Math.sin(n),0,Math.cos(n)),o=new P(Math.cos(n),0,-Math.sin(n)),c=s.dot(a),l=s.dot(o),h=this.acc.dot(a),u=this.acc.dot(o),d=s.y,f=Math.hypot(c,l),g=QS,y=g.capeDragPerMps*Math.max(0,c)+g.capeAccel*bt.clamp(h,-8,8)+(d<0?g.capeFall*-d:g.capeRise*d);y+=g.capeFlutter*f*Math.sin(this.t*13)*(f>3?1:0),y=bt.clamp(y,g.capeIdleForward,g.capeMaxPitch);let m=-g.capeTurn*this.yawRate*f-g.capeLatAccel*bt.clamp(u,-8,8);m=bt.clamp(m,-g.capeMaxSway,g.capeMaxSway),this.debug.pitch=y/ln,this.debug.sway=m/ln;let p=f>.4||Math.abs(d)>.3;this.root.updateMatrixWorld(!0),this.root.getWorldQuaternion(this._cq);let x=-(g.beardFall*Math.max(0,-d)+g.beardBrake*Math.max(0,-bt.clamp(h,-8,8))+g.beardBounce*f*Math.max(0,Math.sin(this.t*15))*(f>2?1:0));x=bt.clamp(x,-g.beardMax,0);for(let M of this.chains){let _=M.kind==="hair"?g.hairGain:1,w=0;for(let v=0;v<M.bones.length;v++){let b=M.seg[v],S,C;M.kind==="beard"?(S=Math.min(0,M.pitch[v].step(x*b.p,e)),C=M.sway[v].step(m*b.s*g.beardSwayGain,e)):(S=M.pitch[v].step(y*b.p*_,e),C=M.sway[v].step(m*b.s*_,e));let R=p?-w:g.capeIdleForward*b.p-w;M.kind==="cape"&&S<R&&(S=R),w+=S;let D=M.bones[v];D.parent.getWorldQuaternion(this._pq);let F=this._pq.clone().invert().multiply(this._cq);S!==0&&(this._axis.set(1,0,0).applyQuaternion(F).normalize(),this._q.setFromAxisAngle(this._axis,S),D.quaternion.premultiply(this._q)),C!==0&&(this._axis.set(0,0,1).applyQuaternion(F).normalize(),this._q.setFromAxisAngle(this._axis,C),D.quaternion.premultiply(this._q)),D.updateMatrixWorld(!0)}}}}});function eM(i){let e=0;for(let s of i)e+=s.byteLength;let t=new Uint8Array(e),n=0;for(let s of i){let r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function wd(i){return new Td(i).unpack()}function Ad(i){let e=new Ed,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}var Md,Td,Ed,vg=Et(()=>{Md=class{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){let e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){let e=[];for(let t of this._parts)e.push(t);return eM(e).buffer}};Td=class{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){let e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){let e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){let e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){let e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){let e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){let e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){let e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){let e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){let e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);let t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){let t=this.read(e),n=0,s="",r,a;for(;n<e;)r=t[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(a);return this.index+=e,s}unpack_array(e){let t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){let t={};for(let n=0;n<e;n++){let s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){let e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){let e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*a}read(e){let t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}},Ed=class{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{let t=e.constructor;if(e instanceof Array){let n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){let n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){let n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){let t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){let t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){let t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");let n=s=>{if(s<t){let r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);let n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),a=2**32,o=t<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){let t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");let s=r=>{if(r<t.length){let a=t[r];if(e.hasOwnProperty(a)){this.pack(a);let o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){let t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){let t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){let t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Md,this._textEncoder=new TextEncoder}}});function na(i,e,t){let n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Mi(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){mo("Unable to polyfill events");return}let s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(o,c){if(o!==e)return r.apply(this,arguments);let l=h=>{let u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[o,l])};let a=s.removeEventListener;s.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);let l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Eg(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Mg=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function wg(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Tg=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function mo(){if(typeof window=="object"){if(Mg)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function ia(i,e){Tg&&console.warn(i+" is deprecated, please use "+e+" instead.")}function Ag(i){let e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;let{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){let n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){let s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(na(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(na(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(na(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=na(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Sg(i){return Object.prototype.toString.call(i)==="[object Object]"}function Cd(i){return Sg(i)?Object.keys(i).reduce(function(e,t){let n=Sg(i[t]),s=n?Cd(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Rd(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Rd(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Rd(i,i.get(s),t)})}))}function Pd(i,e,t){let n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;let r=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&r.push(a)}),r.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&Rd(i,o,s)})}),s}var Mg,Tg,ys=Et(()=>{"use strict";Mg=!0,Tg=!0});function Dl(i,e){if(e.version>=64)return;let t=i&&i.navigator;if(!t.mediaDevices)return;let n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;let c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;let h=typeof o[l]=="object"?o[l]:{ideal:o[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);let u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){c.optional=c.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",l)]=h.ideal,c.optional.push(d),d={},d[u("max",l)]=h.ideal,c.optional.push(d)):(d[u("",l)]=h.ideal,c.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,l)]=h[d])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},s=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){let l=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});let h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete o.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let f=d.find(g=>u.some(y=>g.label.toLowerCase().includes(y)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(o.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),o.video=n(o.video),Rg("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return Rg("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){s(o,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){let o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>o(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}var Rg,Cg=Et(()=>{"use strict";ys();Rg=mo});var Fl={};Io(Fl,{fixNegotiationNeeded:()=>Od,shimAddTrackRemoveTrack:()=>Fd,shimAddTrackRemoveTrackWithNative:()=>Pg,shimGetSendersWithDtmf:()=>Dd,shimGetUserMedia:()=>Dl,shimMediaStream:()=>Id,shimOnTrack:()=>Ld,shimPeerConnection:()=>Nl,shimSenderReceiverGetStats:()=>Nd});function Id(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Ld(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});let t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};let o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)}),s.stream.getTracks().forEach(r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};let o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Mi(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Dd(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){let e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};let s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=s.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};let r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);let c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}let t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(e(this,a))})};let n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{let o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){let e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){let n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Nd(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){let n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){let a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});let s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){let a=s.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){let a=this;return this._pc.getStats().then(o=>Pd(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){let n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){let r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),Mi(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){let r=this;return this._pc.getStats().then(a=>Pd(a,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;let t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){let s=arguments[0],r,a,o;return this.getSenders().forEach(c=>{c.track===s&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(a?o=!0:a=c),c.track===s)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Pg(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};let e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};let c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};let t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});let o=this.getSenders();t.apply(this,arguments);let c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};let n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};let s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{let c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),s.apply(this,arguments)}}function Fd(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Pg(i);let t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){let h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};let n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){let u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};let s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");let d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(y=>y===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(y=>y.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};let g=this._streams[u.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{let y=new i.MediaStream([h]);this._streams[u.id]=y,this._reverseStreams[y.id]=u,this.addStream(y)}return this.getSenders().find(y=>y.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{let f=l._reverseStreams[d],g=l._streams[f.id];u=u.replace(new RegExp(g.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function a(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{let f=l._reverseStreams[d],g=l._streams[f.id];u=u.replace(new RegExp(f.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){let h=i.RTCPeerConnection.prototype[l],u={[l](){let d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{let y=r(this,g);d[0].apply(null,[y])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[l]=u[l]});let o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};let c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){let l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(y=>h.track===y)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Nl(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){let n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function Od(i,e){e.version>102||Mi(i,"negotiationneeded",t=>{let n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}var Ig=Et(()=>{"use strict";ys();Cg()});function Ol(i,e){let t=i&&i.navigator;if(!t.mediaDevices)return;let n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,a){ia("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){let s=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a.audio,"autoGainControl","mozAutoGainControl"),s(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){let a=n.prototype.getSettings;n.prototype.getSettings=function(){let o=a.apply(this,arguments);return s(o,"mozAutoGainControl","autoGainControl"),s(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){let a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o,"autoGainControl","mozAutoGainControl"),s(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}var Lg=Et(()=>{"use strict";ys()});function Dg(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){let s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}var Ng=Et(()=>{"use strict"});var kl={};Io(kl,{shimAddTransceiver:()=>Vd,shimCreateAnswer:()=>Xd,shimCreateOffer:()=>qd,shimGetDisplayMedia:()=>Dg,shimGetParameters:()=>Wd,shimGetStats:()=>kd,shimGetUserMedia:()=>Ol,shimOnTrack:()=>Ud,shimPeerConnection:()=>Ul,shimRTCDataChannel:()=>Gd,shimReceiverGetStats:()=>zd,shimRemoveStream:()=>Hd,shimSenderGetStats:()=>Bd});function Ud(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Ul(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){let n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function kd(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;let t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){let[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(a,o)}}function Bd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;let e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){let s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});let t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){let s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function zd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;let e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){let n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),Mi(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Hd(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){ia("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Gd(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Vd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];let r=s.length>0;r&&s.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});let a=t.apply(this,arguments);if(r){let{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,o.sendEncodings=s,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function Wd(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;let t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){let s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function qd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Xd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}var Fg=Et(()=>{"use strict";ys();Lg();Ng()});var Bl={};Io(Bl,{shimAudioContext:()=>ef,shimCallbacksAPI:()=>Jd,shimConstraints:()=>Og,shimCreateOfferLegacy:()=>Qd,shimGetUserMedia:()=>Yd,shimLocalStreamsAPI:()=>jd,shimRTCIceServerUrls:()=>$d,shimRemoteStreamsAPI:()=>Kd,shimTrackEventTransceiver:()=>Zd});function jd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){let e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);let n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);let s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Kd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);let r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});let e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){let n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);let a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Jd(i){if(typeof i!="object"||!i.RTCPeerConnection)return;let e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,h){let u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d},e.createAnswer=function(l,h){let u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d};let o=function(c,l,h){let u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=o,o=function(c,l,h){let u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=o,o=function(c,l,h){let u=a.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=o}function Yd(i){let e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){let t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(Og(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}.bind(e))}function Og(i){return i&&i.video!==void 0?Object.assign({},i,{video:Cd(i.video)}):i}function $d(i){if(!i.RTCPeerConnection)return;let e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){let r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(ia("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Zd(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Qd(i){let e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);let s=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);let r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function ef(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}var Ug=Et(()=>{"use strict";ys()});var nf=jf((rA,tf)=>{"use strict";var ne={};ne.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)};ne.localCName=ne.generateIdentifier();ne.splitLines=function(i){return i.trim().split(`
`).map(e=>e.trim())};ne.splitSections=function(i){return i.split(`
m=`).map((t,n)=>(n>0?"m="+t:t).trim()+`\r
`)};ne.getDescription=function(i){let e=ne.splitSections(i);return e&&e[0]};ne.getMediaSections=function(i){let e=ne.splitSections(i);return e.shift(),e};ne.matchPrefix=function(i,e){return ne.splitLines(i).filter(t=>t.indexOf(e)===0)};ne.parseCandidate=function(i){let e;i.indexOf("a=candidate:")===0?e=i.substring(12).split(" "):e=i.substring(10).split(" ");let t={foundation:e[0],component:{1:"rtp",2:"rtcp"}[e[1]]||e[1],protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]};for(let n=8;n<e.length;n+=2)switch(e[n]){case"raddr":t.relatedAddress=e[n+1];break;case"rport":t.relatedPort=parseInt(e[n+1],10);break;case"tcptype":t.tcpType=e[n+1];break;case"ufrag":t.ufrag=e[n+1],t.usernameFragment=e[n+1];break;default:t[e[n]]===void 0&&(t[e[n]]=e[n+1]);break}return t};ne.writeCandidate=function(i){let e=[];e.push(i.foundation);let t=i.component;t==="rtp"?e.push(1):t==="rtcp"?e.push(2):e.push(t),e.push(i.protocol.toUpperCase()),e.push(i.priority),e.push(i.address||i.ip),e.push(i.port);let n=i.type;return e.push("typ"),e.push(n),n!=="host"&&i.relatedAddress&&i.relatedPort!==void 0&&(e.push("raddr"),e.push(i.relatedAddress),e.push("rport"),e.push(i.relatedPort)),i.tcpType&&i.protocol.toLowerCase()==="tcp"&&(e.push("tcptype"),e.push(i.tcpType)),(i.usernameFragment||i.ufrag)&&(e.push("ufrag"),e.push(i.usernameFragment||i.ufrag)),"candidate:"+e.join(" ")};ne.parseIceOptions=function(i){return i.substring(14).split(" ")};ne.parseRtpMap=function(i){let e=i.substring(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=e.length===3?parseInt(e[2],10):1,t.numChannels=t.channels,t};ne.writeRtpMap=function(i){let e=i.payloadType;i.preferredPayloadType!==void 0&&(e=i.preferredPayloadType);let t=i.channels||i.numChannels||1;return"a=rtpmap:"+e+" "+i.name+"/"+i.clockRate+(t!==1?"/"+t:"")+`\r
`};ne.parseExtmap=function(i){let e=i.substring(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1],attributes:e.slice(2).join(" ")}};ne.writeExtmap=function(i){return"a=extmap:"+(i.id||i.preferredId)+(i.direction&&i.direction!=="sendrecv"?"/"+i.direction:"")+" "+i.uri+(i.attributes?" "+i.attributes:"")+`\r
`};ne.parseFmtp=function(i){let e={},t=i.substring(i.indexOf(" ")+1).split(";");for(let n=0;n<t.length;n++){let[s,...r]=t[n].trim().split("=");e[s.trim()]=r.length?r.join("="):void 0}return e};ne.writeFmtp=function(i){let e="",t=i.payloadType;if(i.preferredPayloadType!==void 0&&(t=i.preferredPayloadType),i.parameters&&Object.keys(i.parameters).length){let n=[];Object.keys(i.parameters).forEach(s=>{i.parameters[s]!==void 0?n.push(s+"="+i.parameters[s]):n.push(s)}),e+="a=fmtp:"+t+" "+n.join(";")+`\r
`}return e};ne.parseRtcpFb=function(i){let e=i.substring(i.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}};ne.writeRtcpFb=function(i){let e="",t=i.payloadType;return i.preferredPayloadType!==void 0&&(t=i.preferredPayloadType),i.rtcpFeedback&&i.rtcpFeedback.length&&i.rtcpFeedback.forEach(n=>{e+="a=rtcp-fb:"+t+" "+n.type+(n.parameter&&n.parameter.length?" "+n.parameter:"")+`\r
`}),e};ne.parseSsrcMedia=function(i){let e=i.indexOf(" "),t={ssrc:parseInt(i.substring(7,e),10)},n=i.indexOf(":",e);return n>-1?(t.attribute=i.substring(e+1,n),t.value=i.substring(n+1)):t.attribute=i.substring(e+1),t};ne.parseSsrcGroup=function(i){let e=i.substring(13).split(" ");return{semantics:e.shift(),ssrcs:e.map(t=>parseInt(t,10))}};ne.getMid=function(i){let e=ne.matchPrefix(i,"a=mid:")[0];if(e)return e.substring(6)};ne.parseFingerprint=function(i){let e=i.substring(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1].toUpperCase()}};ne.getDtlsParameters=function(i,e){return{role:"auto",fingerprints:ne.matchPrefix(i+e,"a=fingerprint:").map(ne.parseFingerprint)}};ne.writeDtlsParameters=function(i,e){let t="a=setup:"+e+`\r
`;return i.fingerprints.forEach(n=>{t+="a=fingerprint:"+n.algorithm+" "+n.value+`\r
`}),t};ne.parseCryptoLine=function(i){let e=i.substring(9).split(" ");return{tag:parseInt(e[0],10),cryptoSuite:e[1],keyParams:e[2],sessionParams:e.slice(3)}};ne.writeCryptoLine=function(i){return"a=crypto:"+i.tag+" "+i.cryptoSuite+" "+(typeof i.keyParams=="object"?ne.writeCryptoKeyParams(i.keyParams):i.keyParams)+(i.sessionParams?" "+i.sessionParams.join(" "):"")+`\r
`};ne.parseCryptoKeyParams=function(i){if(i.indexOf("inline:")!==0)return null;let e=i.substring(7).split("|");return{keyMethod:"inline",keySalt:e[0],lifeTime:e[1],mkiValue:e[2]?e[2].split(":")[0]:void 0,mkiLength:e[2]?e[2].split(":")[1]:void 0}};ne.writeCryptoKeyParams=function(i){return i.keyMethod+":"+i.keySalt+(i.lifeTime?"|"+i.lifeTime:"")+(i.mkiValue&&i.mkiLength?"|"+i.mkiValue+":"+i.mkiLength:"")};ne.getCryptoParameters=function(i,e){return ne.matchPrefix(i+e,"a=crypto:").map(ne.parseCryptoLine)};ne.getIceParameters=function(i,e){let t=ne.matchPrefix(i+e,"a=ice-ufrag:")[0],n=ne.matchPrefix(i+e,"a=ice-pwd:")[0];return t&&n?{usernameFragment:t.substring(12),password:n.substring(10)}:null};ne.writeIceParameters=function(i){let e="a=ice-ufrag:"+i.usernameFragment+`\r
a=ice-pwd:`+i.password+`\r
`;return i.iceLite&&(e+=`a=ice-lite\r
`),e};ne.parseRtpParameters=function(i){let e={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=ne.splitLines(i)[0].split(" ");e.profile=n[2];for(let r=3;r<n.length;r++){let a=n[r],o=ne.matchPrefix(i,"a=rtpmap:"+a+" ")[0];if(o){let c=ne.parseRtpMap(o),l=ne.matchPrefix(i,"a=fmtp:"+a+" ");switch(c.parameters=l.length?ne.parseFmtp(l[0]):{},c.rtcpFeedback=ne.matchPrefix(i,"a=rtcp-fb:"+a+" ").map(ne.parseRtcpFb),e.codecs.push(c),c.name.toUpperCase()){case"RED":case"ULPFEC":e.fecMechanisms.push(c.name.toUpperCase());break;default:break}}}ne.matchPrefix(i,"a=extmap:").forEach(r=>{e.headerExtensions.push(ne.parseExtmap(r))});let s=ne.matchPrefix(i,"a=rtcp-fb:* ").map(ne.parseRtcpFb);return e.codecs.forEach(r=>{s.forEach(a=>{r.rtcpFeedback.find(c=>c.type===a.type&&c.parameter===a.parameter)||r.rtcpFeedback.push(a)})}),e};ne.writeRtpDescription=function(i,e){let t="";t+="m="+i+" ",t+=e.codecs.length>0?"9":"0",t+=" "+(e.profile||"UDP/TLS/RTP/SAVPF")+" ",t+=e.codecs.map(s=>s.preferredPayloadType!==void 0?s.preferredPayloadType:s.payloadType).join(" ")+`\r
`,t+=`c=IN IP4 0.0.0.0\r
`,t+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,e.codecs.forEach(s=>{t+=ne.writeRtpMap(s),t+=ne.writeFmtp(s),t+=ne.writeRtcpFb(s)});let n=0;return e.codecs.forEach(s=>{s.maxptime>n&&(n=s.maxptime)}),n>0&&(t+="a=maxptime:"+n+`\r
`),e.headerExtensions&&e.headerExtensions.forEach(s=>{t+=ne.writeExtmap(s)}),t};ne.parseRtpEncodingParameters=function(i){let e=[],t=ne.parseRtpParameters(i),n=t.fecMechanisms.indexOf("RED")!==-1,s=t.fecMechanisms.indexOf("ULPFEC")!==-1,r=ne.matchPrefix(i,"a=ssrc:").map(h=>ne.parseSsrcMedia(h)).filter(h=>h.attribute==="cname"),a=r.length>0&&r[0].ssrc,o,c=ne.matchPrefix(i,"a=ssrc-group:FID").map(h=>h.substring(17).split(" ").map(d=>parseInt(d,10)));c.length>0&&c[0].length>1&&c[0][0]===a&&(o=c[0][1]),t.codecs.forEach(h=>{if(h.name.toUpperCase()==="RTX"&&h.parameters.apt){let u={ssrc:a,codecPayloadType:parseInt(h.parameters.apt,10)};a&&o&&(u.rtx={ssrc:o}),e.push(u),n&&(u=JSON.parse(JSON.stringify(u)),u.fec={ssrc:a,mechanism:s?"red+ulpfec":"red"},e.push(u))}}),e.length===0&&a&&e.push({ssrc:a});let l=ne.matchPrefix(i,"b=");return l.length&&(l[0].indexOf("b=TIAS:")===0?l=parseInt(l[0].substring(7),10):l[0].indexOf("b=AS:")===0?l=parseInt(l[0].substring(5),10)*1e3*.95-2e3*8:l=void 0,e.forEach(h=>{h.maxBitrate=l})),e};ne.parseRtcpParameters=function(i){let e={},t=ne.matchPrefix(i,"a=ssrc:").map(r=>ne.parseSsrcMedia(r)).filter(r=>r.attribute==="cname")[0];t&&(e.cname=t.value,e.ssrc=t.ssrc);let n=ne.matchPrefix(i,"a=rtcp-rsize");e.reducedSize=n.length>0,e.compound=n.length===0;let s=ne.matchPrefix(i,"a=rtcp-mux");return e.mux=s.length>0,e};ne.writeRtcpParameters=function(i){let e="";return i.reducedSize&&(e+=`a=rtcp-rsize\r
`),i.mux&&(e+=`a=rtcp-mux\r
`),i.ssrc!==void 0&&i.cname&&(e+="a=ssrc:"+i.ssrc+" cname:"+i.cname+`\r
`),e};ne.parseMsid=function(i){let e,t=ne.matchPrefix(i,"a=msid:");if(t.length===1)return e=t[0].substring(7).split(" "),{stream:e[0],track:e[1]};let n=ne.matchPrefix(i,"a=ssrc:").map(s=>ne.parseSsrcMedia(s)).filter(s=>s.attribute==="msid");if(n.length>0)return e=n[0].value.split(" "),{stream:e[0],track:e[1]}};ne.parseSctpDescription=function(i){let e=ne.parseMLine(i),t=ne.matchPrefix(i,"a=max-message-size:"),n;t.length>0&&(n=parseInt(t[0].substring(19),10)),isNaN(n)&&(n=65536);let s=ne.matchPrefix(i,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substring(12),10),protocol:e.fmt,maxMessageSize:n};let r=ne.matchPrefix(i,"a=sctpmap:");if(r.length>0){let a=r[0].substring(10).split(" ");return{port:parseInt(a[0],10),protocol:a[1],maxMessageSize:n}}};ne.writeSctpDescription=function(i,e){let t=[];return i.protocol!=="DTLS/SCTP"?t=["m="+i.kind+" 9 "+i.protocol+" "+e.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+e.port+`\r
`]:t=["m="+i.kind+" 9 "+i.protocol+" "+e.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+e.port+" "+e.protocol+` 65535\r
`],e.maxMessageSize!==void 0&&t.push("a=max-message-size:"+e.maxMessageSize+`\r
`),t.join("")};ne.generateSessionId=function(){return Math.random().toString().substr(2,22)};ne.writeSessionBoilerplate=function(i,e,t){let n,s=e!==void 0?e:2;return i?n=i:n=ne.generateSessionId(),`v=0\r
o=`+(t||"thisisadapterortc")+" "+n+" "+s+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`};ne.getDirection=function(i,e){let t=ne.splitLines(i);for(let n=0;n<t.length;n++)switch(t[n]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return t[n].substring(2);default:}return e?ne.getDirection(e):"sendrecv"};ne.getKind=function(i){return ne.splitLines(i)[0].split(" ")[0].substring(2)};ne.isRejected=function(i){return i.split(" ",2)[1]==="0"};ne.parseMLine=function(i){let t=ne.splitLines(i)[0].substring(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}};ne.parseOLine=function(i){let t=ne.matchPrefix(i,"o=")[0].substring(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}};ne.isValidSDP=function(i){if(typeof i!="string"||i.length===0)return!1;let e=ne.splitLines(i);for(let t=0;t<e.length;t++)if(e[t].length<2||e[t].charAt(1)!=="=")return!1;return!0};typeof tf=="object"&&(tf.exports=ne)});var sf={};Io(sf,{removeExtmapAllowMixed:()=>Gl,shimAddIceCandidateNullOrEmpty:()=>xo,shimConnectionState:()=>Hl,shimMaxMessageSize:()=>bo,shimParameterlessSetLocalDescription:()=>yo,shimRTCIceCandidate:()=>go,shimRTCIceCandidateRelayProtocol:()=>zl,shimSendThrowTypeError:()=>_o});function go(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;let e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){let s=new e(n),r=sa.default.parseCandidate(n.candidate);for(let a in r)a in s||Object.defineProperty(s,a,{value:r[a]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,Mi(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function zl(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||Mi(i,"icecandidate",e=>{if(e.candidate){let t=sa.default.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function bo(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});let t=function(o){if(!o||!o.sdp)return!1;let c=sa.default.splitSections(o.sdp);return c.shift(),c.some(l=>{let h=sa.default.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(o){let c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;let l=parseInt(c[1],10);return l!==l?-1:l},s=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);let h=sa.default.matchPrefix(o.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){let{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){let c=n(arguments[0]),l=s(c),h=r(arguments[0],c),u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);let d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return a.apply(this,arguments)}}function _o(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){let a=s.send;s.send=function(){let c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(s,arguments)}}let n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){let r=n.apply(this,arguments);return t(r,this),r},Mi(i,"datachannel",s=>(t(s.channel,s.target),s))}function Hl(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;let e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{let n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{let r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;let a=new Event("connectionstatechange",s);r.dispatchEvent(a)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Gl(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;let t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){let r=s.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function xo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;let t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function yo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;let t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}var sa,kg=Et(()=>{"use strict";sa=Kf(nf());ys()});function Bg({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){let t=mo,n=Ag(i),s={browserDetails:n,commonShim:sf,extractVersion:na,disableLog:Eg,disableWarnings:wg,sdp:tM};switch(n.browser){case"chrome":if(!Fl||!Nl||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=Fl,xo(i,n),yo(i,n),Dl(i,n),Id(i,n),Nl(i,n),Ld(i,n),Fd(i,n),Dd(i,n),Nd(i,n),Od(i,n),go(i,n),zl(i,n),Hl(i,n),bo(i,n),_o(i,n),Gl(i,n);break;case"firefox":if(!kl||!Ul||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=kl,xo(i,n),yo(i,n),Ol(i,n),Ul(i,n),kd(i,n),Ud(i,n),Hd(i,n),Bd(i,n),zd(i,n),Gd(i,n),Vd(i,n),Wd(i,n),qd(i,n),Xd(i,n),go(i,n),Hl(i,n),bo(i,n),_o(i,n);break;case"safari":if(!Bl||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=Bl,xo(i,n),yo(i,n),$d(i,n),Qd(i,n),Jd(i,n),jd(i,n),Kd(i,n),Zd(i,n),Yd(i,n),ef(i,n),go(i,n),zl(i,n),bo(i,n),_o(i,n),Gl(i,n);break;default:t("Unsupported browser!");break}return s}var tM,zg=Et(()=>{ys();Ig();Fg();Ug();kg();tM=Kf(nf())});var nM,rf,Hg=Et(()=>{"use strict";zg();nM=Bg({window:typeof window>"u"?void 0:window}),rf=nM});function ir(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}function iM(i){let e=0;for(let s of i)e+=s.byteLength;let t=new Uint8Array(e),n=0;for(let s of i)t.set(s,n),n+=s.byteLength;return t}function Mo(){}function oM(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Wg(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new oM(t,n||i,s),a=yn?yn+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],r]:i._events[a].push(r):(i._events[a]=r,i._eventsCount++),i}function Vl(i,e){--i._eventsCount===0?i._events=new Mo:delete i._events[e]}function un(){this._events=new Mo,this._eventsCount=0}var Wl,af,vo,sM,Vg,Gg,of,wn,rM,cf,Re,mf,aM,yn,sr,Ss,Ut,lf,gf,$l,vs,hn,qg,hf,ql,Xl,uf,jl,Kl,df,Jl,To,So,ff,pf,Yl,Xg=Et(()=>{vg();Hg();Wl=class{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{let t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU),r=0,a=0;for(;a<n;){let o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),a=o,r++}return this._dataCount++,t}}};af=rf.default||rf,vo=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){let i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return af.browserDetails.browser}getVersion(){return af.browserDetails.version||0}isUnifiedPlanSupported(){let i=this.getBrowser(),e=af.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},sM=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Vg=()=>Math.random().toString(36).slice(2),Gg={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},of=class extends Wl{noop(){}blobToArrayBuffer(e,t){let n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Gg,this.browser=vo.getBrowser(),this.browserVersion=vo.getVersion(),this.pack=Ad,this.unpack=wd,this.supports=(function(){let t={browser:vo.isBrowserSupported(),webRTC:vo.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Gg),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!vo.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=sM,this.randomToken=Vg}},wn=new of,rM="PeerJS: ",cf=class{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){let n=[rM,...t];for(let s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}},Re=new cf,mf={},aM=Object.prototype.hasOwnProperty,yn="~";Object.create&&(Mo.prototype=Object.create(null),new Mo().__proto__||(yn=!1));un.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)aM.call(t,n)&&e.push(yn?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};un.prototype.listeners=function(e){var t=yn?yn+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,a=new Array(r);s<r;s++)a[s]=n[s].fn;return a};un.prototype.listenerCount=function(e){var t=yn?yn+e:e,n=this._events[t];return n?n.fn?1:n.length:0};un.prototype.emit=function(e,t,n,s,r,a){var o=yn?yn+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,a),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var d=c.length,f;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c[u].fn.apply(c[u].context,h)}}return!0};un.prototype.on=function(e,t,n){return Wg(this,e,t,n,!1)};un.prototype.once=function(e,t,n){return Wg(this,e,t,n,!0)};un.prototype.removeListener=function(e,t,n,s){var r=yn?yn+e:e;if(!this._events[r])return this;if(!t)return Vl(this,r),this;var a=this._events[r];if(a.fn)a.fn===t&&(!s||a.once)&&(!n||a.context===n)&&Vl(this,r);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||s&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:Vl(this,r)}return this};un.prototype.removeAllListeners=function(e){var t;return e?(t=yn?yn+e:e,this._events[t]&&Vl(this,t)):(this._events=new Mo,this._eventsCount=0),this};un.prototype.off=un.prototype.removeListener;un.prototype.addListener=un.prototype.on;un.prefixed=yn;un.EventEmitter=un;mf=un;sr={};ir(sr,"ConnectionType",()=>Ss);ir(sr,"PeerErrorType",()=>Ut);ir(sr,"BaseConnectionErrorType",()=>lf);ir(sr,"DataConnectionErrorType",()=>gf);ir(sr,"SerializationType",()=>$l);ir(sr,"SocketEventType",()=>vs);ir(sr,"ServerMessageType",()=>hn);Ss=(function(i){return i.Data="data",i.Media="media",i})({}),Ut=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),lf=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),gf=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),$l=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),vs=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),hn=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({}),qg="1.5.5",hf=class extends mf.EventEmitter{constructor(e,t,n,s,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];let o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;let n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+qg),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),Re.log("Server message received:",r)}catch{Re.log("Invalid server message",s.data);return}this.emit(vs.Message,r)},this._socket.onclose=s=>{this._disconnected||(Re.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(vs.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Re.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Re.log("Cannot send heartbeat, because socket closed");return}let e=JSON.stringify({type:hn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){let e=[...this._messagesQueue];this._messagesQueue=[];for(let t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(vs.Error,"Invalid message");return}if(!this._wsOpen())return;let t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}},ql=class{constructor(e){this.connection=e}startConnection(e){let t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Ss.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){let n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Re.log("Creating RTCPeerConnection.");let e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){let t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;Re.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(Re.log(`Received ICE candidates for ${t}:`,a.candidate),r.socket.send({type:hn.Candidate,payload:{candidate:a.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Re.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(lf.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Re.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(lf.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Re.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Re.log("Listening for data channel"),e.ondatachannel=a=>{Re.log("Received data channel");let o=a.channel;r.getConnection(t,n)._initializeDataChannel(o)},Re.log("Listening for remote stream"),e.ontrack=a=>{Re.log("Received remote stream");let o=a.streams[0],c=r.getConnection(t,n);if(c.type===Ss.Media){let l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){Re.log("Cleaning up PeerConnection to "+this.connection.peer);let e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};let t=e.signalingState!=="closed",n=!1,s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createOffer(this.connection.options.constraints);Re.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Re.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Ss.Data){let r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:hn.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Ut.WebRTC,s),Re.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Ut.WebRTC,n),Re.log("Failed to createOffer, ",n)}}async _makeAnswer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createAnswer();Re.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Re.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:hn.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Ut.WebRTC,s),Re.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Ut.WebRTC,n),Re.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);let n=this.connection.peerConnection,s=this.connection.provider;Re.log("Setting remote description",t);let r=this;try{await n.setRemoteDescription(t),Re.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(a){s.emitError(Ut.WebRTC,a),Re.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){Re.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Re.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Ut.WebRTC,t),Re.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Re.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Re.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Re.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}},Xl=class extends mf.EventEmitter{emitError(e,t){Re.error("Error:",t),this.emit("error",new uf(`${e}`,t))}},uf=class extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}},jl=class extends Xl{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}},Kl=class i extends jl{static#e=this.ID_PREFIX="mc_";get type(){return Ss.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||i.ID_PREFIX+wn.randomToken(),this._negotiator=new ql(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Re.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Re.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Re.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){let t=e.type,n=e.payload;switch(e.type){case hn.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case hn.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Re.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Re.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});let n=this.provider._getMessages(this.connectionId);for(let s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}},df=class{constructor(e){this._options=e}_buildRequest(e){let t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:a}=this._options,o=new URL(`${t}://${n}:${s}${r}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",qg),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{let e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Re.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==wn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{let e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===wn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Re.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}},Jl=class i extends jl{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Ss.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||i.ID_PREFIX+Vg(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new ql(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Re.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Re.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Re.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(gf.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){let t=e.payload;switch(e.type){case hn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case hn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Re.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}},To=class extends Jl{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Jl.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Re.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;let e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}},So=class extends To{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Wl,this.serialization=$l.Binary,this._chunkedData={}}_handleDataMessage({data:e}){let t=wd(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){let t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];let s=iM(n.data);this._handleDataMessage({data:s})}}_send(e,t){let n=Ad(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){let t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){let t=this.chunker.chunk(e);Re.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(let n of t)this.send(n,!0)}},ff=class extends To{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=$l.None}},pf=class extends To{_handleDataMessage({data:e}){let t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){let n=this.encoder.encode(this.stringify(e));if(n.byteLength>=wn.chunkedMTU){this.emitError(gf.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=$l.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}},Yl=class i extends Xl{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){let e=Object.create(null);for(let[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:ff,json:pf,binary:So,"binary-utf8":So,default:So},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:wn.CLOUD_HOST,port:wn.CLOUD_PORT,path:"/",key:i.DEFAULT_KEY,token:wn.randomToken(),config:wn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==wn.CLOUD_HOST?this._options.secure=wn.isSecure():this._options.host==wn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Re.setLogFunction(this._options.logFunction),Re.logLevel=this._options.debug||0,this._api=new df(t),this._socket=this._createServerConnection(),!wn.supports.audioVideo&&!wn.supports.data){this._delayedAbort(Ut.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!wn.validateId(n)){this._delayedAbort(Ut.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Ut.ServerError,s))}_createServerConnection(){let e=new hf(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(vs.Message,t=>{this._handleMessage(t)}),e.on(vs.Error,t=>{this._abort(Ut.SocketError,t)}),e.on(vs.Disconnected,()=>{this.disconnected||(this.emitError(Ut.Network,"Lost connection to server."),this.disconnect())}),e.on(vs.Close,()=>{this.disconnected||this._abort(Ut.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){let t=e.type,n=e.payload,s=e.src;switch(t){case hn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case hn.Error:this._abort(Ut.ServerError,n.msg);break;case hn.IdTaken:this._abort(Ut.UnavailableID,`ID "${this.id}" is taken`);break;case hn.InvalidKey:this._abort(Ut.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case hn.Leave:Re.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case hn.Expire:this.emitError(Ut.PeerUnavailable,`Could not connect to peer ${s}`);break;case hn.Offer:{let r=n.connectionId,a=this.getConnection(s,r);if(a&&(a.close(),Re.warn(`Offer received for existing Connection ID:${r}`)),n.type===Ss.Media){let c=new Kl(s,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(s,a),this.emit("call",c)}else if(n.type===Ss.Data){let c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(s,a),this.emit("connection",c)}else{Re.warn(`Received malformed connection type:${n.type}`);return}let o=this._getMessages(r);for(let c of o)a.handleMessage(c);break}default:{if(!n){Re.warn(`You received a malformed message from ${s} of type ${t}`);return}let r=n.connectionId,a=this.getConnection(s,r);a&&a.peerConnection?a.handleMessage(e):r?this._storeMessage(r,e):Re.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){let t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Re.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Ut.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}let n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Re.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Ut.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Re.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}let s=new Kl(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){Re.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){let t=this._connections.get(e.peer);if(t){let n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){let n=this._connections.get(e);if(!n)return null;for(let s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Re.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Re.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){let t=this._connections.get(e);if(t)for(let n of t)n.close()}disconnect(){if(this.disconnected)return;let e=this.id;Re.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Re.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Re.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Ut.ServerError,t))}}});var jg,Kg=Et(()=>{jg=[{urls:"stun:stun.relay.metered.ca:80"},{urls:"turn:global.relay.metered.ca:80",username:"eb2052c916f7d88ddc273871",credential:"NoSG+duyDMDHS9NO"},{urls:"turn:global.relay.metered.ca:80?transport=tcp",username:"eb2052c916f7d88ddc273871",credential:"NoSG+duyDMDHS9NO"},{urls:"turn:global.relay.metered.ca:443",username:"eb2052c916f7d88ddc273871",credential:"NoSG+duyDMDHS9NO"},{urls:"turns:global.relay.metered.ca:443?transport=tcp",username:"eb2052c916f7d88ddc273871",credential:"NoSG+duyDMDHS9NO"}]});var Zl,Ms,Ql,bf,Jg,Yg,cM,$g,Zg,lM,hM,eh,Qg=Et(()=>{Xg();Kg();Zl=class{constructor(){this._h={}}on(e,t){return(this._h[e]=this._h[e]||[]).push(t),this}emit(e,...t){for(let n of this._h[e]||[])n(...t)}},Ms=()=>Ms.c=Ms.c||new BroadcastChannel("thornhold-fakenet"),Ql=class extends Zl{constructor(e,t,n){super(),this.p=e,this.peer=t,this.cid=n,this.open=!1}send(e){this.open&&Ms().postMessage({k:"data",cid:this.cid,to:this.peer,d:JSON.parse(JSON.stringify(e))})}close(){this.open&&(this.open=!1,Ms().postMessage({k:"close",cid:this.cid,to:this.peer}),this.emit("close"))}},bf=class extends Zl{constructor(e){super(),typeof e!="string"&&(e="fake-"+Math.random().toString(36).slice(2,10)),this.id=e,this.destroyed=!1,this.conns=new Map,this.onmsg=t=>{let n=t.data;if(this.destroyed)return;if(n.k==="connect"&&n.to===this.id){let r=new Ql(this,n.from,n.cid);r.open=!0,this.conns.set(n.cid,r),this.emit("connection",r),Ms().postMessage({k:"accept",cid:n.cid,to:n.from}),setTimeout(()=>r.emit("open"),0)}let s=this.conns.get(n.cid);!s||n.to!==this.id||(n.k==="accept"?(s.open=!0,s.emit("open")):n.k==="data"?s.emit("data",n.d):n.k==="close"&&(s.open=!1,this.conns.delete(n.cid),s.emit("close")))},Ms().addEventListener("message",this.onmsg),setTimeout(()=>this.emit("open",this.id),50)}connect(e){let t=new Ql(this,e,Math.random().toString(36).slice(2));return this.conns.set(t.cid,t),Ms().postMessage({k:"connect",cid:t.cid,from:this.id,to:e}),t}reconnect(){}destroy(){if(!this.destroyed){for(let e of this.conns.values())e.close();this.destroyed=!0,Ms().removeEventListener("message",this.onmsg)}}},Jg=new URLSearchParams(location.search).has("fakenet")?bf:Yl,Yg="thornhold-",cM=[...jg,{urls:["stun:stun.l.google.com:19302","stun:stun.cloudflare.com:3478"]},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],$g=i=>({debug:1,config:{iceServers:cM,...i?{iceTransportPolicy:"relay"}:{}}}),Zg="ABCDEFGHJKMNPQRSTUVWXYZ23456789",lM=()=>Array.from({length:5},()=>Zg[Math.floor(Math.random()*Zg.length)]).join(""),hM=i=>String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5),eh=class{constructor(e){this.h=e,this.mode="off",this.peer=null,this.conns=new Map,this.hostConn=null,this.code=null,this.id=null,this.retry=0}setStatus(e,t){this.state=e,this.msg=t||"",this.h.status(e,this.msg)}host(e=0){return this.leave(!0),new Promise((t,n)=>{let s=lM(),r=new Jg(Yg+s,$g(!1));this.peer=r,this.setStatus("connecting","Opening a room\u2026"),r.on("open",a=>{this.mode="host",this.code=s,this.id=a,this.setStatus("hosting",`Room ${s}`),t(s)}),r.on("connection",a=>this._hostConn(a)),r.on("disconnected",()=>{this.mode==="host"&&!r.destroyed&&(this.setStatus("connecting","Lost the matchmaking server, reconnecting\u2026"),setTimeout(()=>!r.destroyed&&r.reconnect(),1500))}),r.on("error",a=>{if(a.type==="unavailable-id"&&e<4){r.destroy(),this.host(e+1).then(t,n);return}this.mode!=="host"?(this.leave(!0),this.setStatus("error","Could not open a room: "+(a.type||a.message)),n(a)):console.warn("peer error",a.type)})})}_hostConn(e){e.on("open",()=>{this.conns.set(e.peer,e)}),e.on("data",n=>{this.conns.has(e.peer)||this.conns.set(e.peer,e),this.h.message(n,e.peer)});let t=()=>{this.conns.get(e.peer)===e&&(this.conns.delete(e.peer),this.h.left(e.peer))};e.on("close",t),e.on("error",t)}join(e,t=0){return e=hM(e),this.leave(!0),this.retry=t,new Promise((n,s)=>{if(e.length!==5){let c=new Error("Room codes have 5 letters or numbers.");this.setStatus("error",c.message),s(c);return}this.code=e,this.mode="client",this.setStatus("connecting",`Joining room ${e}\u2026`);let r=this.retry>0,a=new Jg($g(r));this.peer=a,r&&this.setStatus("connecting",`Trying a relay server for room ${e}\u2026`);let o=!1;a.on("open",c=>{this.id=c,this._connect(()=>{o||(o=!0,n())})}),a.on("error",c=>{let l=c.type==="peer-unavailable"?`No game is open with code ${e}. Check the code, and make sure the host is still hosting.`:"Connection problem: "+(c.type||c.message);o?this.mode==="client"&&this.setStatus("lost",l):(o=!0,this.leave(!0),this.setStatus("error",l),s(new Error(l)))}),a.on("disconnected",()=>{this.mode==="client"&&!a.destroyed&&setTimeout(()=>!a.destroyed&&a.reconnect(),1500)})})}_connect(e){let t=this.peer.connect(Yg+this.code,{reliable:!0});this.hostConn=t;let n=this.peer.options&&this.peer.options.config&&this.peer.options.config.iceTransportPolicy==="relay",s=setTimeout(()=>{!t.open&&this.mode==="client"&&this.setStatus("connecting",n?"Still trying the relay server\u2026":"No direct link yet, also trying a relay server\u2026")},5e3),r=setTimeout(()=>{t.open||this.mode!=="client"||(this.setStatus("connecting","No answer yet. Trying again through a relay server\u2026"),this._scheduleRetry(!0))},n?25e3:15e3);t.on("open",()=>{clearTimeout(r),clearTimeout(s),this.retry=0,this.setStatus("connected",`Room ${this.code}`),this.h.opened(),e&&e()}),t.on("data",a=>this.h.message(a,"host")),t.on("close",()=>{clearTimeout(r),clearTimeout(s),this.hostConn===t&&this.mode==="client"&&(this.h.hostLost(),this.setStatus("lost","Lost the connection to the host. Trying again\u2026"),this._scheduleRetry())})}_scheduleRetry(e){if(this.retry>=2||this.mode!=="client"){this.mode==="client"&&this.setStatus("lost","Could not reach the host, even through a relay. Make sure the host still has the game open (not in a background tab on a phone), then press Rejoin. Some work or school networks block this; try a phone hotspot.");return}this.retry++,clearTimeout(this.rt),this.rt=setTimeout(()=>{if(e){let t=this.retry,n=this.code;this.join(n,t).catch(()=>{})}else this.rejoin(!0)},1500)}rejoin(e){if(this.mode!=="client"||!this.peer||this.peer.destroyed)return this.join(this.code).catch(()=>{});if(!e)return this.retry=0,this.join(this.code).catch(()=>{});if(this.setStatus("connecting",`Rejoining room ${this.code}\u2026`),this.hostConn)try{this.hostConn.close()}catch{}this._connect()}send(e){this.mode==="client"&&this.hostConn&&this.hostConn.open&&this.hostConn.send(e)}broadcast(e,t){for(let[n,s]of this.conns)n!==t&&s.open&&s.send(e)}sendTo(e,t){let n=this.conns.get(e);n&&n.open&&n.send(t)}leave(e){clearTimeout(this.rt);let t=this.mode;if(this.mode="off",this.conns.clear(),this.hostConn=null,this.peer){try{this.peer.destroy()}catch{}this.peer=null}(!e||t!=="off")&&this.setStatus("off","")}}});var QM=jf(()=>{Qs();ug();fg();pg();mg();Vu();xg();yg();Qg();var lh=[{id:"lyria",name:"Lyria Mooncrest",faction:"Elves",img:"lyria.webp",glb:"models/lyria.glb",walk:1.8,run:4.8,walkStride:1.425,runStride:2.8},{id:"torvik",name:"Torvik Emberforge",faction:"Dwarves",img:"torvik.webp",glb:"models/torvik.glb",walk:1.53,run:3.9,walkStride:.95625,runStride:1.7875},{id:"rowan",name:"Rowan Thorncall",faction:"Druids",img:"rowan.webp",locked:!0},{id:"vesper",name:"Vesper Ashveil",faction:"Warlocks",img:"vesper.webp",locked:!0}],uM=[{id:"tavern",label:"The Prancing Boar",sub:"Tavern",glb:"models/tavern.glb",x:0,z:-14,rot:0,w:10.58,d:8.5,h:9.6,prompt:"Enter Tavern"},{id:"smithy",label:"The Ember Anvil",sub:"Blacksmith",glb:"models/smithy.glb",x:-13.5,z:-1,rot:Math.PI/2,w:7.77,d:6.51,h:7.7,prompt:"Enter Blacksmith"},{id:"shop",label:"The Copper Kettle",sub:"Shop",glb:"models/shop.glb",x:13.5,z:-1,rot:-Math.PI/2,w:5.8,d:6.5,h:7.2,prompt:"Enter Shop"}],dM=[{id:"stable",label:"Stable",x:-13.5,z:13,rot:Math.PI/2,w:9,d:7},{id:"guild",label:"Guild Hall",x:13.5,z:13,rot:-Math.PI/2,w:9,d:8},{id:"chapel",label:"Chapel",x:15,z:-17,rot:0,w:7,d:7},{id:"gate",label:"Town Gate",x:0,z:27,rot:Math.PI,w:10,d:3}],dn=60,ra=.4,e0=["A trader swears the Elderwood paths moved overnight. Twice.","Bandits have been seen on the east road. Travel in pairs.","The smith says good ore from the deep mines is getting hard to find.","Someone paid for a room upstairs and never came down for supper.","Old Maren claims the stones by the river hum before a storm."],la=document.getElementById("c"),Ri=new Sl({canvas:la,antialias:!0,powerPreference:"high-performance"});Ri.setPixelRatio(Math.min(devicePixelRatio,2));Ri.setSize(innerWidth,innerHeight);Ri.outputColorSpace=Rt;Ri.toneMapping=eo;Ri.toneMappingExposure=1.05;Ri.shadowMap.enabled=!0;Ri.shadowMap.type=Pc;var qe=new zs,u0=new Fe(13220244);qe.background=u0;qe.fog=new Ca(u0,42,95);var fM=new Zr(Ri);qe.environment=fM.fromScene(new Cl,.04).texture;qe.environmentIntensity=.45;var Ji=new Bt(38,innerWidth/innerHeight,.5,200);qe.add(new Xa(16773590,4872746,1.25));var Qi=new Xs(16769712,2.6);Qi.castShadow=!0;Qi.shadow.mapSize.set(2048,2048);Object.assign(Qi.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});Qi.shadow.bias=-4e-4;Qi.shadow.normalBias=.03;qe.add(Qi,Qi.target);var pM=new P(-18,30,14);function ha(i,e,t=256,n=1){let s=document.createElement("canvas");s.width=s.height=t;let r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,t,t);for(let[o,c,l]of e){r.fillStyle=o;for(let h=0;h<c;h++)r.globalAlpha=.15+Math.random()*.35,r.beginPath(),r.arc(Math.random()*t,Math.random()*t,Math.random()*l+.5,0,7),r.fill()}r.globalAlpha=1;let a=new Br(s);return a.wrapS=a.wrapT=ui,a.repeat.set(n,n),a.colorSpace=Rt,a.anisotropy=8,a}var mM=ha("#6d7f3a",[["#5a6e2c",900,4],["#879447",700,3],["#4c5f26",300,6],["#9a9a52",120,2]],256,40),ts=()=>ha("#8a6a43",[["#7a5b37",700,4],["#a2825a",500,3],["#6b4f2d",200,5],["#b09a72",120,2]],256,1),Ef=new he(new on(220,220),new rt({map:mM,roughness:1}));Ef.rotation.x=-Math.PI/2;Ef.receiveShadow=!0;qe.add(Ef);function Bn(i,e,t,n,s){e.repeat.set(n[0],n[1]);let r=new he(i,new rt({map:e,roughness:1,polygonOffset:!0,polygonOffsetFactor:-s,polygonOffsetUnits:-s}));return r.rotation.x=-Math.PI/2,r.position.y=t,r.receiveShadow=!0,qe.add(r),r}Bn(new fi(9,48),ts(),.02,[4,4],2).position.set(0,.02,-2);var gM=Bn(new on(4,31),ts(),.015,[2,14],1);gM.position.set(0,.015,13.5);var bM=Bn(new on(3,4),ts(),.015,[1.5,2],1);bM.position.set(0,.015,-8.5);var _M=Bn(new on(4,2.6),ts(),.015,[2,1.3],1);_M.position.set(-8.6,.015,-1);var xM=Bn(new on(4,2.6),ts(),.015,[2,1.3],1);xM.position.set(8.6,.015,-1);for(let[i,e]of[[-6.5,9],[6.5,9]])Bn(new on(e,2.2),ts(),.015,[4,1],1).position.set(i,.015,13);Bn(new on(37,3),ts(),.015,[16,1.3],1).position.set(-20.5,.015,6);Bn(new on(37,3),ts(),.015,[16,1.3],1).position.set(20.5,.015,6);Bn(new on(4,10),ts(),.015,[2,5],1).position.set(0,.015,33.5);var ua=[],oi=[];function yM(i,e,t,n,s){let r=Math.abs(Math.round(Math.sin(s)))?n:t,a=Math.abs(Math.round(Math.sin(s)))?t:n;ua.push({minX:i-r/2,maxX:i+r/2,minZ:e-a/2,maxZ:e+a/2})}var d0=i=>new P(Math.sin(i),0,Math.cos(i)),Xt=new rt({color:7031338,roughness:.95}),nh=new rt({color:9209207,roughness:.9,flatShading:!0});function Je(i){return i.castShadow=!0,i.receiveShadow=!0,i}var Ei=[],Ye=(()=>{let i=7;return()=>(i=i*16807%2147483647)/2147483647})(),Zi=[{id:"mine",x:-47,z:6,r:11},{id:"wood",x:47,z:6,r:12},{id:"ruins",x:0,z:47,r:11}],f0=(i,e)=>Math.abs(e-6)<3.5&&Math.abs(i)>26&&Math.abs(i)<40||Math.abs(i)<4.5&&e>26&&e<38,vM=(i,e)=>f0(i,e)||Zi.some(t=>Math.hypot(i-t.x,e-t.z)<t.r),SM=[[-6,-22],[7,-23],[-21,-14],[22,-8],[-6,22],[7,21],[-22,22],[22,23],[-24,-24],[24,-24],[-4,-24],[20,-26]];for(let[i,e]of SM)Ei.push([i,e,.9+Ye()*.4]);for(let i=-30;i<=30;i+=3.4)for(let e of[-31.5,31.5])e>0&&Math.abs(i)<7||Ei.push([i+Ye(),e+Ye()*1.5,1+Ye()*.5]);for(let i=-30;i<=30;i+=3.4)for(let e of[-31.5,31.5])Math.abs(i-6)>4&&Ei.push([e+Ye()*1.5,i+Ye(),1+Ye()*.5]);for(let i=0;i<700&&Ei.length<520;i++){let e=(Ye()*2-1)*70,t=(Ye()*2-1)*70;Math.abs(e)<34&&Math.abs(t)<34||vM(e,t)||Math.abs(e)<dn-2&&Math.abs(t)<dn-2&&Ye()<.55||Ei.push([e,t,1+Ye()*.7])}for(let i=0;i<70;i++){let e=Ye()*Math.PI*2,t=12.5+Ye()*7,n=Zi[1].x+Math.cos(e)*t,s=Zi[1].z+Math.sin(e)*t;f0(n,s)||n<Zi[1].x-8&&Math.abs(s-6)<4||Ei.push([n,s,1.3+Ye()*.6,1])}for(let[i,e]of[[-6,-7],[-7,8],[5,-8],[7,7],[9,-2],[3,10]])Ei.push([Zi[1].x+i,Zi[1].z+e,1.4+Ye()*.4,1]);{let i=new Mn(.18,.28,2.2,7);i.translate(0,1.1,0);let e=new za(1.5,3),t=new di(i,Xt,Ei.length),n=new di(e,new rt({roughness:.95}),Ei.length*2),s=new Ve,r=new Lt,a=new P,o=new P,c=new Fe,l=[4151844,5073706,5995056,3625258,6978100],h=[1913122,2242604,1583652,2767402];Ei.forEach(([u,d,f,g],y)=>{s.compose(o.set(u,0,d),r.identity(),a.set(f,f,f)),t.setMatrixAt(y,s);for(let m=0;m<2;m++){let p=(2.4+m*1.1)*f,x=f*(m?.75:1.05);r.setFromEuler(new jn(0,Ye()*6,0)),s.compose(o.set(u+(Ye()-.5)*.4,p,d+(Ye()-.5)*.4),r,a.set(x,x*.9,x)),n.setMatrixAt(y*2+m,s),n.setColorAt(y*2+m,c.setHex(g?h[(y+m)%h.length]:l[(y+m)%l.length]))}Math.abs(u)<dn+1&&Math.abs(d)<dn+1&&oi.push({x:u,z:d,r:.45*f})}),Je(t),Je(n),qe.add(t,n)}for(let[i,e,t]of[[-4,-20],[5,18,.7],[-18,-6,1.2],[19,8,.9],[-17,22,1.3],[10,-24,1],[-25,-2,1.4],[25,15,1.1],[3,-19,.6],[-10,18,.8]].map(n=>[n[0],n[1],n[2]||1])){let n=Je(new he(new Gs(.6*t,0),nh));n.position.set(i,.25*t,e),n.rotation.set(Ye(),Ye()*6,Ye()),n.scale.y=.7,qe.add(n),oi.push({x:i,z:e,r:.55*t})}function ih(i,e,t,n){let s=Math.hypot(t-i,n-e),r=Math.max(1,Math.round(s/2)),a=new zt;for(let o=0;o<=r;o++){let c=o/r,l=Je(new he(new pt(.16,1.1,.16),Xt));l.position.set(i+(t-i)*c,.55,e+(n-e)*c),a.add(l)}for(let o of[.45,.85]){let c=Je(new he(new pt(.08,.1,s),Xt));c.position.set((i+t)/2,o,(e+n)/2),c.rotation.y=Math.atan2(t-i,n-e),a.add(c)}qe.add(a),ua.push({minX:Math.min(i,t)-.1,maxX:Math.max(i,t)+.1,minZ:Math.min(e,n)-.1,maxZ:Math.max(e,n)+.1})}for(let i of[-1,1])ih(i*2.6,7.5,i*2.6,11.6),ih(i*2.6,14.4,i*2.6,23.5);ih(-22,-12,-22,-4);ih(21,19,27,19);{let i=new zt;i.add(Je(new he(new Mn(1.1,1.2,.9,14,1,!0),nh)));let e=Je(new he(new Ha(1.12,.12,6,18),nh));e.rotation.x=Math.PI/2,e.position.y=.45,i.add(e);let t=new he(new fi(1.05,18),new rt({color:2307130,roughness:.2}));t.rotation.x=-Math.PI/2,t.position.y=.2,i.add(t);for(let s of[-1,1]){let r=Je(new he(new pt(.15,2.2,.15),Xt));r.position.set(s*1.05,1.1,0),i.add(r)}let n=Je(new he(new ms(1.6,.9,4),new rt({color:8010533,roughness:.9,flatShading:!0})));n.position.y=2.55,n.rotation.y=Math.PI/4,i.add(n),i.position.set(0,.45,-1.5),qe.add(i),oi.push({x:0,z:-1.5,r:1.3})}var MM=new rt({color:8082740,roughness:.9});for(let[i,e]of[[9.2,3.6],[9.9,4.3],[-9.3,-5.4]]){let t=Je(new he(new Mn(.38,.33,.9,10),MM));t.position.set(i,.45,e),qe.add(t),oi.push({x:i,z:e,r:.45})}var p0=document.getElementById("labels"),Ao=[];function ns(i,e,t=""){let n=document.createElement("div");n.className="lbl "+t,n.innerHTML=i,p0.appendChild(n);let s={el:n,pos:e};return Ao.push(s),s}function TM(i){let e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d");t.fillStyle="#6b4a2a",t.fillRect(0,0,512,256),t.strokeStyle="#3d2914",t.lineWidth=6;for(let s=64;s<256;s+=64)t.beginPath(),t.moveTo(0,s),t.lineTo(512,s),t.stroke();t.strokeStyle="#c99a4a",t.lineWidth=12,t.strokeRect(8,8,496,240),t.fillStyle="#f6ecd2",t.textAlign="center",t.font="bold 72px Georgia, serif",t.fillText(i.toUpperCase(),256,115),t.fillStyle="#ffd85a",t.font="italic 46px Georgia, serif",t.fillText("Coming soon",256,195);let n=new Br(e);return n.colorSpace=Rt,n.anisotropy=8,n}var lr=[],aa=null,EM=new rt({color:14205066,roughness:1});for(let i of dM){let e=Math.abs(Math.sin(i.rot))>.5?i.d:i.w,t=Math.abs(Math.sin(i.rot))>.5?i.w:i.d;Bn(new on(e,t),ha("#7d6a48",[["#6e5c3c",500,4],["#94815c",300,3]],256,1),.012,[e/4,t/4],1).position.set(i.x,.012,i.z);let s=new zt,r=[[-e/2,-t/2],[e/2,-t/2],[e/2,t/2],[-e/2,t/2]];r.forEach(([u,d],f)=>{let g=Je(new he(new pt(.12,.7,.12),Xt));g.position.set(u,.35,d),s.add(g);let[y,m]=r[(f+1)%4],p=Math.hypot(y-u,m-d),x=new he(new pt(.03,.03,p),EM);x.position.set((u+y)/2,.6,(d+m)/2),x.rotation.y=Math.atan2(y-u,m-d),s.add(x)}),s.position.set(i.x,0,i.z),qe.add(s);let a=i.id==="gate"?4.2:i.x+Math.sin(i.rot)*(e/2-1.6),o=i.id==="gate"?25.6:i.z+t/2-.5,c=new zt;for(let u of[-.9,.9]){let d=Je(new he(new pt(.12,2,.12),Xt));d.position.set(u,1,0),c.add(d)}let l=Je(new he(new pt(2.1,1.05,.08),[Xt,Xt,Xt,Xt,new rt({map:TM(i.label),roughness:.9}),Xt]));l.position.y=1.55,c.add(l),c.position.set(a,0,o),qe.add(c),oi.push({x:a-.9,z:o,r:.2},{x:a+.9,z:o,r:.2});let h={x:0,z:1};ns(`${i.label}<small>coming soon</small>`,new P(c.position.x,3,c.position.z),"lot"),lr.push({id:i.id,kind:"lot",label:i.label,prompt:`${i.label} (coming soon)`,pos:new P(c.position.x+h.x*1.3,0,c.position.z+h.z*1.3),r:2.6})}var es={mine:{name:"Korgrath Slagjaw",title:"Tyrant of the Slagjaw Mine",area:"Slagjaw Mine",color:7166538,eye:16742938,blurb:"A hulking ogre foreman who claimed the old dwarf mine and everything dug from it.",hp:[10,16,22,30,40],rewards:[["2 iron","3 stone","10 gold"],["4 iron","5 stone","15 gold"],["6 iron","8 stone","20 gold"],["9 iron","11 stone","25 gold","1 gem"],["12 iron","15 stone","30 gold","1 gem"]]},wood:{name:"Mossbane",title:"the Thorn Wraith of Gloomroot Wood",area:"Gloomroot Wood",color:3099186,eye:7336160,blurb:"A spirit of bark and bramble that strangles the paths through the dark trees.",hp:[10,16,22,30,40],rewards:[["3 wood","2 herbs","10 gold","5% rare gem"],["5 wood","3 herbs","15 gold","10% rare gem"],["8 wood","5 herbs","20 gold","15% rare gem"],["11 wood","7 herbs","25 gold","25% rare gem"],["15 wood","10 herbs","30 gold","40% rare gem"]]},ruins:{name:"Umbrath",title:"the Hollow King of the Fallen Spire",area:"Fallen Spire Ruins",color:3810128,eye:12872703,blurb:"A crowned shade that still holds court among the broken stones.",hp:[10,16,22,30,40],rewards:[["1 shadow shard","1 gem","5 gold"],["2 shadow shards","1 gem","10 gold"],["3 shadow shards","2 gems","15 gold"],["5 shadow shards","3 gems","20 gold"],["7 shadow shards","4 gems","25 gold"]]}},wf=[],sh=(i,e=2)=>new rt({color:i,emissive:i,emissiveIntensity:e,roughness:.6});function wM(i){let e=es[i],t=new zt,n=new rt({color:e.color,roughness:.85}),s=sh(e.eye,3);if(i==="mine"){let r=Je(new he(new ps(.85,.9,6,12),n));r.position.y=1.6,r.scale.set(1.25,1,.95),t.add(r);let a=Je(new he(new Nn(.45,14,10),n));a.position.set(0,2.85,.15),t.add(a);for(let l of[-1,1]){let h=Je(new he(new Mn(.3,.35,.9,8),n));h.position.set(l*.45,.45,0),t.add(h);let u=Je(new he(new ps(.25,1.1,4,8),n));u.position.set(l*1.25,1.65,.1),u.rotation.z=l*.25,t.add(u);let d=new he(new Nn(.06,8,6),s);d.position.set(l*.16,2.92,.55),t.add(d)}let o=Je(new he(new Mn(.07,.07,2.2,8),Xt));o.position.set(1.45,1.2,.5),o.rotation.x=.3,t.add(o);let c=Je(new he(new pt(.7,.45,.45),nh));c.position.set(1.45,.15,.2),t.add(c)}else if(i==="wood"){let r=Je(new he(new ms(.8,2.6,9),n));r.position.y=1.3,t.add(r);let a=Je(new he(new ps(.42,.6,4,10),n));a.position.y=2.35,t.add(a);let o=Je(new he(new Nn(.36,12,10),n));o.position.y=3.1,o.scale.y=1.25,t.add(o);for(let c of[-1,1]){for(let u=0;u<3;u++){let d=Je(new he(new ms(.06,.9-u*.2,5),Xt));d.position.set(c*(.3+u*.18),3.55+u*.12,0),d.rotation.z=-c*(.5+u*.35),t.add(d)}let l=Je(new he(new ps(.12,1.5,4,6),n));l.position.set(c*.75,2,.15),l.rotation.z=c*.45,t.add(l);let h=new he(new Nn(.06,8,6),s);h.position.set(c*.13,3.15,.31),t.add(h)}}else{let r=Je(new he(new ms(.95,2.7,10),n));r.position.y=1.55,t.add(r);let a=Je(new he(new Nn(.45,14,10),n));a.position.y=3.05,t.add(a);let o=new he(new Mn(.38,.42,.22,8,1,!0),new rt({color:11569722,metalness:.8,roughness:.35,side:tn}));o.position.y=3.42,t.add(o);for(let h of[-1,1]){let u=new he(new Nn(.06,8,6),s);u.position.set(h*.14,3.05,.4),t.add(u)}let c=new he(new Nn(.22,14,10),sh(e.eye,2.5));c.position.set(.75,2.1,.45),t.add(c);let l=new Fn(e.eye,6,9,1.6);l.position.set(.75,2.2,.6),t.add(l)}return t}function Af(i,e,t,n){let s=es[i],r=wM(i);r.position.set(e,i==="ruins"?.25:0,t),r.rotation.y=n,qe.add(r);let a=new he(new Vs(1.5,1.75,40),new bn({color:16767066,transparent:!0,opacity:.7,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.set(e,.06,t),qe.add(a),wf.push({g:r,ring:a,y0:r.position.y,kind:i}),oi.push({x:e,z:t,r:1.3}),ns(`${s.name}<small>Boss \xB7 Levels 1\u20135</small>`,new P(e,4.6,t));let o=d0(n);lr.push({id:"boss_"+i,kind:"boss",boss:i,label:s.name,prompt:`Inspect ${s.name}`,pos:new P(e+o.x*3,0,t+o.z*3),r:3.6})}{let i=Zi[0];Bn(new fi(i.r,40),ha("#6f6a60",[["#5a564e",600,5],["#85806f",400,3],["#4a463f",200,6]],256,1),.02,[4,4],2).position.set(i.x,.02,i.z);let e=new rt({color:7827562,roughness:.95,flatShading:!0});for(let l=0;l<22;l++){let h=i.z-13+l*1.25,u=1.7+Ye()*1.6,d=i.x-8-Ye()*3-(Math.abs(h-i.z)<3?1.2:0),f=Je(new he(new Gs(u,0),e));f.position.set(d,u*.55,h),f.rotation.set(Ye(),Ye()*6,Ye()),qe.add(f)}ua.push({minX:i.x-14,maxX:i.x-6.6,minZ:i.z-14,maxZ:i.z+14});let t=new he(new fi(2.1,24,0,Math.PI),new bn({color:460298}));t.position.set(i.x-6.45,.02,i.z),t.rotation.y=Math.PI/2,qe.add(t);for(let l of[-2.2,2.2]){let h=Je(new he(new pt(.3,2.6,.3),Xt));h.position.set(i.x-6.3,1.3,i.z+l),qe.add(h)}let n=Je(new he(new pt(.35,.35,5),Xt));n.position.set(i.x-6.3,2.6,i.z),qe.add(n);let s=new rt({color:4867136,metalness:.6,roughness:.5});for(let l of[-.45,.45]){let h=new he(new pt(7,.08,.08),s);h.position.set(i.x-2.8,.06,i.z+3.5+l),qe.add(h)}let r=Je(new he(new pt(1.4,.8,1),Xt));r.position.set(i.x-1,.55,i.z+3.5),qe.add(r),oi.push({x:i.x-1,z:i.z+3.5,r:.8});let a=[new rt({color:12085550,metalness:.5,roughness:.5,flatShading:!0}),new rt({color:8161945,metalness:.5,roughness:.5,flatShading:!0})];for(let l=0;l<10;l++){let h=Je(new he(new Gs(.25+Ye()*.2,0),a[l%2]));h.position.set(i.x-1+(Ye()-.5)*.9,1+Ye()*.15,i.z+3.5+(Ye()-.5)*.6),qe.add(h)}let o=new Fn(16752704,8,10,1.6);o.position.set(i.x-5.6,2.3,i.z-2.6),qe.add(o);let c=new he(new Nn(.14,8,6),sh(16752704,3));c.position.copy(o.position),qe.add(c),Af("mine",i.x-3.2,i.z-.5,Math.PI/2)}{let i=Zi[1];Bn(new fi(i.r,40),ha("#2f4029",[["#24331f",700,5],["#3c5233",400,3],["#1b2617",200,6]],256,1),.02,[4,4],2).position.set(i.x,.02,i.z);let e=new rt({color:5201477,roughness:1,flatShading:!0});for(let r=0;r<7;r++){let a=r/7*Math.PI*2,o=i.x+1+Math.cos(a)*5.2,c=i.z+Math.sin(a)*5.2;if(o<i.x-3&&Math.abs(c-i.z)<2.5)continue;let l=Je(new he(new pt(.7,1.6+Ye(),.5),e));l.position.set(o,.8,c),l.rotation.y=-a,qe.add(l),oi.push({x:o,z:c,r:.5})}let t=new rt({color:3127464,emissive:2087104,emissiveIntensity:.55,roughness:.6}),n=new rt({color:14209208});for(let r=0;r<16;r++){let a=Ye()*Math.PI*2,o=6.5+Ye()*4,c=i.x+Math.cos(a)*o,l=i.z+Math.sin(a)*o;if(c<i.x-4&&Math.abs(l-i.z)<3)continue;let h=new zt,u=new he(new Mn(.05,.07,.35,6),n);u.position.y=.17,h.add(u);let d=new he(new Nn(.2,10,6,0,Math.PI*2,0,Math.PI/2),t);d.position.y=.32,h.add(d),h.position.set(c,0,l),h.scale.setScalar(.8+Ye()),qe.add(h)}let s=new Fn(6287576,6,14,1.4);s.position.set(i.x+2,2.5,i.z),qe.add(s),Af("wood",i.x+3,i.z,-Math.PI/2)}{let i=Zi[2];Bn(new fi(i.r,40),ha("#6a6470",[["#57515e",500,6],["#7d7783",400,4],["#3f3a45",300,3]],256,1),.02,[5,5],2).position.set(i.x,.02,i.z);let e=new rt({color:9077652,roughness:.9,flatShading:!0});for(let a=0;a<9;a++){let o=a/9*Math.PI*2+.2,c=i.x+Math.cos(o)*7.5,l=i.z+1+Math.sin(o)*7.5;if(l<i.z-4&&Math.abs(c-i.x)<3.2)continue;let h=1+Ye()*3.5,u=Je(new he(new Mn(.45,.55,h,9),e));u.position.set(c,h/2,l),u.rotation.z=(Ye()-.5)*.15,qe.add(u),oi.push({x:c,z:l,r:.6})}for(let a of[-2.6,2.6]){let o=Je(new he(new pt(.9,5,.9),e));o.position.set(i.x+a,2.5,i.z-6),qe.add(o),oi.push({x:i.x+a,z:i.z-6,r:.7})}let t=Je(new he(new pt(4.4,.8,.9),e));t.position.set(i.x-.5,5.2,i.z-6),t.rotation.z=.12,qe.add(t);let n=Je(new he(new Mn(.5,.5,4.5,9),e));n.position.set(i.x+4.5,.5,i.z-2.5),n.rotation.set(0,.6,Math.PI/2),qe.add(n),ua.push({minX:i.x+2.6,maxX:i.x+6.4,minZ:i.z-4,maxZ:i.z-1});for(let a=0;a<14;a++){let o=Je(new he(new pt(.4+Ye()*.5,.3,.4+Ye()*.4),e));o.position.set(i.x+(Ye()-.5)*16,.15,i.z+(Ye()-.5)*16),o.rotation.y=Ye()*3,qe.add(o)}let s=new he(new Vs(2.4,2.75,48),new bn({color:12872703,transparent:!0,opacity:.85,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(i.x,.05,i.z+1.5),qe.add(s);let r=new Fn(10898943,10,16,1.3);r.position.set(i.x,3,i.z+1.5),qe.add(r),Af("ruins",i.x,i.z+1.5,0)}ns("\u25C4 Slagjaw Mine<small>boss area</small>",new P(-30,2.2,6),"lot");ns("Gloomroot Wood \u25BA<small>boss area</small>",new P(30,2.2,6),"lot");ns("\u25BC Fallen Spire Ruins<small>boss area</small>",new P(0,2.2,31.5),"lot");{let t=new zt,n=Je(new he(new pt(3,1,1),Xt));n.position.set(0,.5,.6),t.add(n);let s=Je(new he(new pt(3,1.8,.2),Xt));s.position.set(0,.9,-1),t.add(s);for(let[l,h]of[[-1.4,1],[1.4,1],[-1.4,-1],[1.4,-1]]){let u=Je(new he(new pt(.14,2.6,.14),Xt));u.position.set(l,1.3,h),t.add(u)}let r=[new rt({color:5974666,roughness:.9}),new rt({color:14200906,roughness:.9})];for(let l=0;l<6;l++){let h=Je(new he(new pt(.55,.08,2.6),r[l%2]));h.position.set(-1.375+l*.55,2.7,0),h.rotation.x=.18,t.add(h)}let a=[5232895,12872703,7077786,16734842];for(let l=0;l<6;l++){let h=new he(new Hr(.13,0),sh(a[l%4],1.2));h.position.set(-1.1+l*.44,1.12,.6),t.add(h)}let o=new he(new Hr(.5,0),new rt({color:8382719,emissive:4176127,emissiveIntensity:1.6,metalness:.2,roughness:.15}));o.scale.y=1.5,o.position.set(0,3.7,0),t.add(o),wf.push({g:o,spin:!0,y0:3.7});let c=new Fn(8378623,4,7,1.6);c.position.set(0,3.6,.5),t.add(c),t.position.set(8.5,0,-9.5),qe.add(t),ua.push({minX:8.5-1.6,maxX:8.5+1.6,minZ:-9.5-1.2,maxZ:-9.5+1.2}),ns("The Glimmering Gem<small>Gem Shop</small>",new P(8.5,4.9,-9.5)),lr.push({id:"gemshop",kind:"building",label:"Gem Shop",prompt:"Enter Gem Shop",pos:new P(8.5,0,-9.5+2.3),r:2.6})}var Rf=new wl;Rf.setMeshoptDecoder(dg);var t0=document.getElementById("loading"),m0=performance.now(),g0=Promise.all(uM.map(async i=>{let t=(await Rf.loadAsync(i.glb)).scene;t.traverse(s=>{if(s.isMesh){s.castShadow=!0,s.receiveShadow=!0;let r=Array.isArray(s.material)?s.material:[s.material];for(let a of r)a.emissiveMap&&(a.emissiveIntensity=.35)}}),t.position.set(i.x,0,i.z),t.rotation.y=i.rot,qe.add(t),yM(i.x,i.z,i.w-.2,i.d-.2,i.rot);let n=d0(i.rot);ns(`${i.label}<small>${i.sub}</small>`,new P(i.x,i.h+.6,i.z)),lr.push({id:i.id,kind:"building",label:i.sub,prompt:i.prompt,pos:new P(i.x+n.x*(i.d/2+1.2),0,i.z+n.z*(i.d/2+1.2)),r:2.8})})),n0={};function AM(i){return n0[i.id]||(n0[i.id]=Rf.loadAsync(i.glb).then(e=>(e.scene.traverse(t=>{if(t.isMesh){t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1;for(let n of[].concat(t.material))n.side=tn}}),e)))}async function b0(i,e,t,n){let s=await AM(i),r=El(s.scene);r.position.set(e,0,t),r.rotation.y=n,qe.add(r),r.updateMatrixWorld(!0);let a={hero:i,root:r,mixer:null,A:{},cape:null,phase:0,speed:0,bob:0};if(s.animations.length){a.mixer=new Ya(r);for(let o of["idle","walk","run"]){let c=Wi.findByName(s.animations,o);if(!c)continue;let l=a.mixer.clipAction(c);l.play(),l.setEffectiveWeight(o==="idle"?1:0),o!=="idle"&&(l.timeScale=0),a.A[o]=l}}try{let o=new Pl(r,qe);o.ok&&(a.cape=o,o.reset())}catch(o){console.warn("cape sim off",o)}if(i.id==="torvik")try{a.sec=new Ll(r,{cape:!1})}catch(o){console.warn("springs off",o)}return a}function rh(i){i&&(qe.remove(i.root),i.mixer&&i.mixer.stopAllAction(),i.cape&&i.cape.mesh&&(qe.remove(i.cape.mesh),i.cape.mesh.geometry.dispose()))}var RM=1/60;function _0(i,e,t,n,s){let r=Math.max(1,Math.ceil(e/RM-1e-6));if(r===1||t===void 0||!i.cape&&!i.sec||i.cape&&i.cape.needReset){_f(i,e);return}let a=i.root.position.x,o=i.root.position.z,c=i.root.rotation.y;if(Math.hypot(a-t,o-n)>2){_f(i,e);return}let l=c-s;l=Math.atan2(Math.sin(l),Math.cos(l));for(let h=1;h<=r;h++){let u=h/r;i.root.position.x=t+(a-t)*u,i.root.position.z=n+(o-n)*u,i.root.rotation.y=s+l*u,_f(i,e/r)}i.root.rotation.y=c}function _f(i,e){let t=i.hero,n=i.speed;if(i.A.walk&&i.A.run&&i.A.idle){let s=n<=t.walk?t.walkStride:bt.lerp(t.walkStride,t.runStride,(n-t.walk)/(t.run-t.walk));i.phase=(i.phase+n/s*e)%1;let r=bt.clamp(1-n/(t.walk*.7),0,1),a=bt.clamp((n-t.walk)/(t.run-t.walk),0,1);i.A.idle.setEffectiveWeight(r),i.A.walk.setEffectiveWeight((1-r)*(1-a)),i.A.run.setEffectiveWeight((1-r)*a),i.A.walk.time=i.phase*i.A.walk.getClip().duration,i.A.run.time=i.phase*i.A.run.getClip().duration,i.mixer.update(e)}else i.bob+=n*e*6,i.root.position.y=Math.abs(Math.sin(i.bob))*.06*Math.min(1,n);i.sec&&i.sec.update(e,{position:i.root.position,yaw:i.root.rotation.y,grounded:!0}),i.cape&&i.cape.update(e)}var ee={hero:null,av:null,root:null,yaw:Math.PI,speed:0,target:null,pos:new P(0,0,3),get cape(){return this.av&&this.av.cape}};async function CM(i){let e=await b0(i,ee.pos.x,ee.pos.z,ee.yaw);rh(ee.av),ee.av=e,ee.hero=i,ee.root=e.root,ee.speed=0,ee.target=null}var An=Object.create(null);addEventListener("keydown",i=>{i.target&&i.target.matches&&i.target.matches("input, textarea")||(An[i.code]=!0,i.code==="KeyE"&&ar&&!or()&&ws(ar),i.code==="Escape"&&or()&&Ai(),i.code.startsWith("Arrow")&&i.preventDefault())});addEventListener("keyup",i=>{An[i.code]=!1});addEventListener("blur",()=>{for(let i in An)An[i]=!1});var kn={dist:18,min:12,max:30,elev:bt.degToRad(52)};la.addEventListener("wheel",i=>{kn.dist=bt.clamp(kn.dist*(1+Math.sign(i.deltaY)*.08),kn.min,kn.max),i.preventDefault()},{passive:!1});var Yi=new Map,ah=0,x0=0,rr=null,i0=new $a,PM=new In(new P(0,1,0),0),s0=new Ge,cr=new he(new Vs(.35,.5,24),new bn({color:16767066,transparent:!0,opacity:0,depthWrite:!1}));cr.rotation.x=-Math.PI/2;cr.position.y=.05;qe.add(cr);la.addEventListener("pointerdown",i=>{if(Yi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Yi.size===2){let[e,t]=[...Yi.values()];ah=Math.hypot(e.x-t.x,e.y-t.y),x0=kn.dist,rr=null}else rr={x:i.clientX,y:i.clientY,t:performance.now()}});la.addEventListener("pointermove",i=>{if(Yi.has(i.pointerId)&&(Yi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Yi.size===2&&ah)){let[e,t]=[...Yi.values()];kn.dist=bt.clamp(x0*ah/Math.max(20,Math.hypot(e.x-t.x,e.y-t.y)),kn.min,kn.max)}});function y0(i){if(Yi.delete(i.pointerId),Yi.size<2&&(ah=0),rr&&i.type==="pointerup"&&Math.hypot(i.clientX-rr.x,i.clientY-rr.y)<10&&performance.now()-rr.t<600&&ee.root&&!or()&&!R0()){s0.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),i0.setFromCamera(s0,Ji);let e=new P;i0.ray.intersectPlane(PM,e)&&(e.x=bt.clamp(e.x,-dn,dn),e.z=bt.clamp(e.z,-dn,dn),ee.target=e,cr.position.set(e.x,.05,e.z),cr.material.opacity=.9)}rr=null}la.addEventListener("pointerup",y0);la.addEventListener("pointercancel",y0);function v0(i){for(let e=0;e<3;e++){for(let t of ua){let n=bt.clamp(i.x,t.minX,t.maxX),s=bt.clamp(i.z,t.minZ,t.maxZ),r=i.x-n,a=i.z-s,o=Math.hypot(r,a);if(o<ra)if(o<1e-5){let c=[[i.x-t.minX,-1,0],[t.maxX-i.x,1,0],[i.z-t.minZ,0,-1],[t.maxZ-i.z,0,1]].sort((l,h)=>l[0]-h[0])[0];i.x+=c[1]*(c[0]+ra),i.z+=c[2]*(c[0]+ra)}else i.x=n+r/o*ra,i.z=s+a/o*ra}for(let t of oi){let n=i.x-t.x,s=i.z-t.z,r=Math.hypot(n,s),a=t.r+ra;r<a&&r>1e-5&&(i.x=t.x+n/r*a,i.z=t.z+s/r*a)}i.x=bt.clamp(i.x,-dn,dn),i.z=bt.clamp(i.z,-dn,dn)}}var Te=i=>document.getElementById(i),vn=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),oh=Te("prompt"),Ts=Te("menu"),ar=null,Dt=null,or=()=>!Ts.classList.contains("hidden");oh.addEventListener("click",()=>ar&&ws(ar));Te("closeBtn").addEventListener("click",Ai);Ts.addEventListener("pointerdown",i=>{i.target===Ts&&Ai()});function lt(i,e=2400){let t=Te("toast");t.textContent=i,t.classList.remove("hidden"),clearTimeout(lt.h),lt.h=setTimeout(()=>t.classList.add("hidden"),e)}var Pe=null,IM=[["iron","Iron"],["stone","Stone"],["wood","Wood"],["herbs","Herbs"],["shadow shards","Shadow shards"]],Cf={buyback:{name:"Exiled card buy-back",gold:25},draught:{name:"Healing draught",gold:15},rations:{name:"Travel rations",gold:5},torch:{name:"Torch and rope",gold:8},whetstone:{name:"Whetstone",gold:12},pack_common:{name:"Common pack",gems:1},pack_rare:{name:"Rare pack",gems:3},pack_epic:{name:"Epic pack",gems:6},pack_legendary:{name:"Legendary pack",gems:12},pack_godly:{name:"Godly pack",gems:25},token:{name:"Upgrade token",gems:2},cardback:{name:"Card back: Starfall",gems:4}},LM=i=>i.gold?`${i.gold} gold`:`${i.gems} ${i.gems===1?"gem":"gems"}`;function Ro(){Pe&&(ri.save(Pe),Pf())}function Pf(){Pe&&(Te("gold").textContent=Pe.gold,Te("gems").textContent=Pe.gems,Te("hudName").textContent=Pe.name)}function vf(i,e){return i.gold&&Pe.gold<i.gold?(lt(`Not enough gold for ${e} (need ${i.gold}, you have ${Pe.gold}).`),!1):i.gems&&Pe.gems<i.gems?(lt(`Not enough gems for ${e} (need ${i.gems}, you have ${Pe.gems}).`),!1):(Pe.gold-=i.gold||0,Pe.gems-=i.gems||0,!0)}function DM(i){let e=Cf[i];!e||!vf(e,e.name)||(Pe.inv[i]=(Pe.inv[i]||0)+1,Ro(),lt(`Bought ${e.name}. You now have ${Pe.inv[i]}.`))}function If(i,e){let t=[];for(let n of es[i].rewards[e-1]){let s=n.match(/^(\d+)% rare gem$/);if(s){Math.random()*100<+s[1]&&(Pe.gems+=1,t.push("a rare gem (+1 gem)"));continue}if(s=n.match(/^(\d+) (.+)$/),!s)continue;let r=+s[1],a=s[2].toLowerCase();if(a.startsWith("gem")){Pe.gems+=r,t.push(`${r} gem${r>1?"s":""}`);continue}if(a==="gold"){Pe.gold+=r,t.push(`${r} gold`);continue}a.startsWith("shadow shard")&&(a="shadow shards"),Pe.inv[a]=(Pe.inv[a]||0)+r,t.push(`${r} ${a}`)}return Pe.boss[i]=Math.max(Pe.boss[i]||0,e),Ro(),t}function Eo(i,e,t,n,s,r=""){return`<div class="row"><div class="d"><b>${i}</b><div>${e}</div></div>${t?`<span class="price">${t}</span>`:""}<button class="btn small" data-act="${s}" ${r}>${n}</button></div>`}var $n=(i,e,t="")=>{let n=Cf[i],s=Pe&&Pe.inv[i]?` <span class="own">owned ${Pe.inv[i]}</span>`:"";return`<div class="row ${t}"><div class="d"><b class="${t.includes("t-")?"tier "+t:""}">${n.name}</b>${s}<div>${e}</div></div><span class="price">${LM(n)}</span><button class="btn small" data-act="buy" data-item="${i}">Buy</button></div>`};function ws(i){ee.target=null,Dt=i;let e=i.label,t="",n="",s="";if(i.id==="tavern")e="The Prancing Boar",t="Warm fire, cold ale, loose tongues.",n=Eo("Rest by the fire",`Heal to full health. (HP ${ch} / 20)`,"10 gold","Rest","rest")+Eo("Buy a round, hear rumors","Locals share what they have heard.","2 gold","Listen","rumor")+'<div class="rumor" id="rumor">The tavern keeper polishes a mug and waits.</div>';else if(i.id==="shop")e="The Copper Kettle",t="Supplies for the road. Gold only.",n=$n("buyback","Return an exiled card to your collection (choosing the card comes later).")+$n("draught","A one-use potion for your next fight.")+$n("rations","Food for a trip to the boss areas.")+$n("torch","For the mine and the ruins.")+$n("whetstone","Supplies for the blacksmith."),s="Purchases are saved to your profile. Items do nothing in fights yet.";else if(i.id==="gemshop")e="The Glimmering Gem",t="Card packs and rare goods. Gems only.",n=$n("pack_common","3 cards, mostly common.","t-common")+$n("pack_rare","3 cards, at least 1 rare.","t-rare")+$n("pack_epic","3 cards, at least 1 epic.","t-epic")+$n("pack_legendary","3 cards, at least 1 legendary.","t-legendary")+$n("pack_godly","1 guaranteed godly card + 2 epic or better.","t-godly premium")+$n("token","Use at the blacksmith in place of 1 duplicate card.")+$n("cardback","A cosmetic card back. No effect in play."),s="Packs are saved unopened. Opening them comes when the town is joined to the card game.";else if(i.id==="smithy")e="The Ember Anvil",t="Make your cards stronger.",n=Eo("Upgrade a card","Cost: 2 duplicate copies + 3 iron + 2 gems. +1 ATK / +1 HP.","","Pick card","upg")+Eo("Reforge a relic","Swap a relic for another of your faction.","3 gems","Reforge","upg")+Eo("Smelt duplicates","Turn spare duplicate cards into iron.","","Smelt","upg"),s=`Mockup: upgrades come when the town is joined to the card game. You have ${Pe.inv.iron||0} iron.`;else if(i.kind==="boss"){let r=es[i.boss],a=Pe.boss[i.boss]||0;e=r.name,t=r.title,n=`<p class="blurb">${r.blurb}</p>`+r.rewards.map((o,c)=>{let l=c+1,h=l<=a+1,u=l<=a;return`<div class="row${h?"":" locked"}"><div class="d"><b>Level ${l}</b>${u?' <span class="done">\u2713 beaten</span>':""} <span class="lv">Boss HP ${r.hp[c]}</span>${c===0?' <span class="easy">Beatable with the starter deck</span>':""}<div>Rewards: ${o.join(" \xB7 ")}</div></div>`+(h?`<div class="btns"><button class="btn small" data-act="fight" data-lv="${l}">Fight</button><button class="btn small ghost" data-act="win" data-lv="${l}">Win (test)</button></div>`:'<button class="btn small" disabled>Locked</button>')+"</div>"}).join(""),s="Fight starts a card battle using the regular card-game rules. If a teammate is standing nearby, they get an invite to fight with you. Win (test) still skips the fight and grants this level's rewards."}else if(i.id==="profile")e=Pe.name,t="Your saved profile (this browser only)",n=FM();else if(i.id==="coop")e="Play together",t="Online co-op with a room code",n=UM();else if(i.id==="lobby"){let r=ye;e=`${es[r.boss].name} \xB7 Level ${r.level}`,t="Party fight",n=YM()}else e=i.label,t="Coming soon",n=`<p>This lot is saved for the <b>${i.label}</b>. The building is not built yet.</p>`;Ts.querySelector(".panel").classList.toggle("wide2",i.kind==="boss"||i.id==="gemshop"||i.id==="profile"),Te("menuTitle").textContent=e,Te("menuSub").textContent=t,Te("menuBody").innerHTML=n+(s?`<p class="note">${s}</p>`:""),Te("menuBody").querySelectorAll("[data-act]").forEach(r=>r.addEventListener("click",()=>NM(r.dataset.act,r,i))),Ts.classList.remove("hidden"),oh.classList.add("hidden")}function wi(){if(or()&&Dt){let i=Te("menuBody").parentElement.scrollTop;ws(Dt),Te("menuBody").parentElement.scrollTop=i}}function NM(i,e,t){if(i==="rest"){if(ch>=20){lt("You are already at full health.");return}if(!vf({gold:10},"a rest"))return;ch=20,Te("hudHp").textContent="HP 20 / 20",Ro(),lt("You rest by the fire. Health restored.")}else if(i==="rumor"){if(!vf({gold:2},"a round"))return;Ro(),Te("rumor").textContent="\u201C"+e0[Math.floor(Math.random()*e0.length)]+"\u201D";return}else if(i==="buy")DM(e.dataset.item);else if(i==="win"){let n=If(t.boss,+e.dataset.lv);lt(`Victory (test)! You got ${n.join(", ")||"nothing this time"}.`,3500)}else if(i==="fight"){F0(t.boss,+e.dataset.lv);return}else if(i==="export"){Te("codeBox").value=ri.exportCode(Pe),Te("codeBox").select();try{navigator.clipboard.writeText(Te("codeBox").value),lt("Save code copied. Keep it somewhere safe.")}catch{lt("Copy the code in the box.")}return}else if(i==="import"){try{let n=ri.importCode(Te("codeBox").value);lt(`Imported ${n.name}.`),Ai(),uh(n)}catch(n){lt(n.message,3500)}return}else if(i==="switchprof"){Ai(),Ne.leave(),hh();return}else if(i==="host"){kM();return}else if(i==="join"){T0(Te("joinCode").value);return}else if(i==="leave"){Ne.leave(),Lf(),wi();return}else if(i==="rejoin"){Ne.rejoin();return}else if(i==="copylink"){try{navigator.clipboard.writeText(M0()),lt("Invite link copied.")}catch{lt("Copy the link in the box.")}return}else if(i==="lobbywin"){$M();return}else if(i==="lobbystart"){L0();return}else if(i==="lobbyleave"){ca(!0),Ai();return}else lt("Mockup only: this will be wired up later.");wi()}function Ai(i){Ts.classList.add("hidden"),!i&&Dt&&Dt.id==="lobby"&&ye&&ca(!0),Dt=null}var ch=20;function FM(){let i=IM.map(([n,s])=>`<span class="chip">${s}: <b>${Pe.inv[n]||0}</b></span>`).join(""),e=Object.entries(Cf).filter(([n])=>Pe.inv[n]).map(([n,s])=>`<span class="chip">${s.name}: <b>${Pe.inv[n]}</b></span>`).join("")||'<span class="sub">Nothing bought yet.</span>',t=Object.entries(es).map(([n,s])=>`<span class="chip">${s.name}: <b>${Pe.boss[n]||0} / 5</b></span>`).join("");return`<div class="stats"><span class="chip">Gold <b>${Pe.gold}</b></span><span class="chip">Gems <b>${Pe.gems}</b></span><span class="chip">Hero <b>${vn(ee.hero?ee.hero.name:"-")}</b></span></div>
    <h3>Materials</h3><div class="chips">${i}</div><h3>Items</h3><div class="chips">${e}</div><h3>Boss levels beaten</h3><div class="chips">${t}</div>
    <h3>Backup</h3><p class="note">Your save lives only in this browser. Copy the save code to keep a backup, or paste one here to load it.</p>
    <textarea id="codeBox" rows="3" placeholder="Paste a save code here to import it"></textarea>
    <div class="btns"><button class="btn small" data-act="export">Copy save code</button><button class="btn small ghost" data-act="import">Import code</button><button class="btn small ghost" data-act="switchprof">Switch profile</button></div>`}function hh(){Te("hud").classList.add("hidden"),Te("help").classList.add("hidden"),Te("select").classList.add("hidden"),$i.hide();let i=ri.list();Te("profList").innerHTML=i.length?i.map(e=>`<div class="prow"><button class="btn ghost pick" data-id="${e.id}"><b>${vn(e.name)}</b><small>${e.hero?vn((lh.find(t=>t.id===e.hero)||{}).name||"")+" \xB7 ":""}${e.gold} gold \xB7 ${e.gems} gems</small></button><button class="del" data-del="${e.id}" title="Delete">\u2715</button></div>`).join(""):'<p class="sub">No profiles yet. Make one below.</p>',Te("profList").querySelectorAll(".pick").forEach(e=>e.addEventListener("click",()=>uh(ri.get(e.dataset.id)))),Te("profList").querySelectorAll("[data-del]").forEach(e=>e.addEventListener("click",()=>{let t=ri.get(e.dataset.del);t&&confirm(`Delete the profile "${t.name}" from this browser? This cannot be undone.`)&&(ri.remove(t.id),hh())})),Te("profiles").classList.remove("hidden")}Te("newProfBtn").addEventListener("click",()=>{try{uh(ri.create(Te("newProfName").value)),Te("newProfName").value=""}catch(i){lt(i.message)}});Te("newProfName").addEventListener("keydown",i=>{i.key==="Enter"&&Te("newProfBtn").click(),i.stopPropagation()});Te("importBtn").addEventListener("click",()=>{try{let i=ri.importCode(Te("importCode").value);Te("importCode").value="",uh(i)}catch(i){lt(i.message,3500)}});function uh(i){if(!i)return;let e=Pe&&Pe.id!==i.id;Pe=i,ri.save(Pe),ch=20,Te("hudHp").textContent="HP 20 / 20",e&&(Ne.leave(),Lf()),Te("profiles").classList.add("hidden"),Te("selectSub").textContent=`Playing as ${Pe.name}. Choose your hero.`,document.querySelectorAll(".tile").forEach(t=>t.classList.toggle("last",t.dataset.hero===Pe.hero)),Te("select").classList.remove("hidden"),Te("selectBack").classList.remove("hidden"),Pf()}Te("selectBack").addEventListener("click",()=>{ee.root&&Pe&&Pe.hero===(ee.hero&&ee.hero.id)?(Te("select").classList.add("hidden"),S0()):hh()});Te("profileBtn").addEventListener("click",()=>ws({id:"profile",kind:"ui"}));Te("coopBtn").addEventListener("click",()=>ws({id:"coop",kind:"ui"}));Te("swapBtn").addEventListener("click",()=>{Ai(),Te("selectSub").textContent=`Playing as ${Pe.name}. Choose your hero.`,Te("select").classList.remove("hidden"),$i.hide()});var OM=Te("tiles");for(let i of lh){let e=document.createElement("button");e.className="tile"+(i.locked?" locked":""),e.dataset.hero=i.id,e.innerHTML=`<img src="${i.img}" alt="${i.name}"><div class="nm">${i.name}</div><div class="fc">${i.faction}</div>`+(i.locked?'<div class="lock">\u{1F512}</div><div class="soon">Coming soon</div>':""),e.addEventListener("click",()=>i.locked?lt(`${i.name} is coming soon.`):Sf(i)),OM.appendChild(e)}var xf=!1;async function Sf(i){if(!xf){xf=!0,Te("loadMsg").textContent=`Loading ${i.name}\u2026`;try{await g0,(!ee.hero||ee.hero.id!==i.id)&&await CM(i),Pe.hero=i.id,Ro(),Te("select").classList.add("hidden"),S0(),window.__world.loadMs||(window.__world.loadMs=Math.round(performance.now()-m0));let e=new URLSearchParams(location.search).get("join");e&&Ne.mode==="off"&&!Sf.autoJoined&&(Sf.autoJoined=!0,T0(e))}catch(e){console.error(e),lt("Could not load the hero: "+e.message,4e3)}finally{xf=!1,Te("loadMsg").textContent=""}}}function S0(){Te("hud").classList.remove("hidden"),Te("help").classList.remove("hidden"),Te("hudImg").src=ee.hero.img,Pf(),$i.show(),E0()}g0.then(()=>{t0.remove(),window.__world.buildingsMs=Math.round(performance.now()-m0)}).catch(i=>{t0.textContent="Could not load the town: "+i.message,console.error(i)});var Zt=new Map,Es=new Map,ye=null,Ne=new eh({status:(i,e)=>{let t=Te("netChip");t.className="chip net "+i,t.textContent={off:"Solo",connecting:/relay/i.test(e)?"Trying relay\u2026":"Connecting\u2026",hosting:`Hosting ${Ne.code} \xB7 ${1+Zt.size}`,connected:`In room ${Ne.code} \xB7 ${1+Zt.size}`,lost:"Disconnected",error:"Co-op error"}[i]||i,t.title=e,(i==="error"||i==="lost"||i==="connecting"&&/relay/i.test(e))&&e&&lt(e,4500),Dt&&Dt.id==="coop"&&wi()},opened:()=>E0(),message:(i,e)=>BM(i,e),left:i=>{Es.delete(i),dh(i),mt&&!mt.rewarded&&(lt("A player left. The fight ended."),Ne.broadcast({t:"battleover",won:null}),wo(!1)),ye&&(ye.party.delete(i),ye.leader===i?(mt&&wo(!1),lt("The party leader left."),ca(!1)):Dt&&Dt.id==="lobby"&&wi()),Ne.setStatus("hosting","")},hostLost:()=>{Lf(),mt&&(lt("Lost the connection to the host. The fight ended."),wo(!1)),ye&&ca(!1)}}),Rn=()=>Ne.mode==="host"?"host":Ne.id,M0=()=>`${location.origin}${location.pathname}?join=${Ne.code}`;function UM(){return Ne.mode==="host"?`<p>Your room code:</p><div class="code">${Ne.code}</div><p class="note">Your friend opens the 3D town, makes a profile, picks a hero, then taps Co-op \u2192 Join and types this code. Or send them this link:</p><input class="link" readonly value="${M0()}"><div class="btns"><button class="btn small" data-act="copylink">Copy invite link</button><button class="btn small ghost" data-act="leave">Stop hosting</button></div>${r0()}`:Ne.mode==="client"?`<p>Room <b>${Ne.code}</b>: <span class="netstate">${vn(Ne.state==="connected"?"connected":Ne.state)}</span></p>${Ne.state!=="connected"&&Ne.msg?`<p class="note">${vn(Ne.msg)}</p>`:""}${r0()}<div class="btns">${Ne.state!=="connected"?'<button class="btn small" data-act="rejoin">Rejoin</button>':""}<button class="btn small ghost" data-act="leave">Leave room</button></div>`:`<p>One player hosts and gets a 5-letter code. The other player joins with it. You will see each other in town and can fight bosses together. Each of you keeps your own gold, gems and progress.</p>
    <div class="btns"><button class="btn" data-act="host">Host game</button></div><p class="or">or join a friend</p>
    <div class="joinrow"><input id="joinCode" maxlength="5" placeholder="CODE" autocomplete="off" autocapitalize="characters"><button class="btn" data-act="join">Join game</button></div>`}function r0(){return`<h3>Players</h3><div class="chips"><span class="chip">${vn(Pe.name)} (you) \xB7 ${vn(ee.hero.name.split(" ")[0])}</span>${[...Zt.values()].map(i=>`<span class="chip">${vn(i.name)} \xB7 ${vn(i.hero.name.split(" ")[0])}</span>`).join("")}</div>`}async function kM(){try{await Ne.host(),lt(`Hosting. Your room code is ${Ne.code}.`,4e3)}catch{}wi()}async function T0(i){try{await Ne.join(i),lt(`Joined room ${Ne.code}.`)}catch{}wi()}function Mf(){return{id:Rn(),name:Pe?Pe.name:"?",hero:ee.hero?ee.hero.id:null,x:+ee.pos.x.toFixed(2),z:+ee.pos.z.toFixed(2),yaw:+ee.yaw.toFixed(3),spd:+ee.speed.toFixed(2)}}function E0(){Ne.mode==="client"&&ee.hero&&Ne.send({t:"hello",...Mf()})}function da(i){i.from=Rn(),i.fromName=Pe.name,Ne.mode==="host"?Ne.broadcast({t:"ev",ev:i}):Ne.send({t:"ev",ev:i})}var th=(i,e,t)=>Math.max(e,Math.min(t,Number(i)||0)),a0=i=>({name:String(i.name||"Player").slice(0,20),hero:lh.find(e=>e.id===i.hero&&!e.locked)?i.hero:null,x:th(i.x,-dn,dn),z:th(i.z,-dn,dn),yaw:th(i.yaw,-10,10),spd:th(i.spd,0,6)});function BM(i,e){if(!(!i||typeof i!="object"))if(Ne.mode==="host")if(i.t==="hello"||i.t==="st"){let t=a0(i),n=!Es.has(e);Es.set(e,{...t,seen:performance.now()}),n&&i.t==="hello"&&(lt(`${t.name} joined your game.`),Ne.setStatus("hosting",""))}else i.t==="ev"&&i.ev?(i.ev.from=e,Ne.broadcast({t:"ev",ev:i.ev},e),h0(i.ev)):i.t==="bact"?(Ne.broadcast({t:"bact",a:i.a,v:i.v}),l0(i.a,i.v)):i.t==="battleover"&&(Ne.broadcast({t:"battleover",won:i.won},e),Tf(i.won));else if(i.t==="sts"&&Array.isArray(i.players)){let t=new Set;for(let s of i.players)s.id!==Ne.id&&(t.add(s.id),w0(s.id,a0(s)));for(let s of[...Zt.keys()])t.has(s)||dh(s);let n=Te("netChip");Ne.state==="connected"&&(n.textContent=`In room ${Ne.code} \xB7 ${1+Zt.size}`)}else i.t==="ev"&&i.ev&&i.ev.from!==Ne.id?h0(i.ev):i.t==="bact"?l0(i.a,i.v):i.t==="battleover"&&Tf(i.won)}var yf=0;setInterval(()=>zM(1/12),83);function zM(i){if(Ne.mode==="off"||!ee.hero||(yf+=i,yf<1/12))return;if(yf=0,Ne.mode==="client"){Ne.state==="connected"&&Ne.send({t:"st",...Mf()});return}let e=performance.now(),t=[Mf()];for(let[n,s]of Es){if(e-s.seen>15e3){Es.delete(n),dh(n);continue}t.push({id:n,...s}),w0(n,s)}Ne.broadcast({t:"sts",players:t}),Te("netChip").textContent=`Hosting ${Ne.code} \xB7 ${1+Zt.size}`}function w0(i,e){if(!e.hero)return;let t=Zt.get(i),n=lh.find(s=>s.id===e.hero);t||(t={hero:n,name:e.name,x:e.x,z:e.z,yaw:e.yaw,spd:e.spd,cx:e.x,cz:e.z,cyaw:e.yaw,av:null,loading:!1},t.label=ns("",new P(e.x,2.4,e.z),"player"),Zt.set(i,t)),(t.name!==e.name||!t.label.el.innerHTML)&&(t.name=e.name,t.label.el.innerHTML=vn(e.name)),Object.assign(t,{x:e.x,z:e.z,yaw:e.yaw,spd:e.spd}),(!t.av||t.av.hero.id!==n.id)&&!t.loading&&(t.loading=!0,b0(n,t.cx,t.cz,t.cyaw).then(s=>{if(Zt.get(i)!==t){rh(s);return}rh(t.av),t.av=s,t.hero=n,t.loading=!1,s.root.position.set(t.cx,0,t.cz),s.root.rotation.y=t.cyaw,s.root.updateMatrixWorld(!0),s.cape&&s.cape.reset()}))}function dh(i){let e=Zt.get(i);e&&(rh(e.av),e.label.el.remove(),Ao.splice(Ao.indexOf(e.label),1),Zt.delete(i))}function Lf(){for(let i of[...Zt.keys()])dh(i);Es.clear()}function HM(i){let e=1-Math.exp(-i*10);for(let t of Zt.values()){Math.hypot(t.x-t.cx,t.z-t.cz)>3&&(t.cx=t.x,t.cz=t.z,t.av&&t.av.cape&&t.av.cape.reset(),t.av&&t.av.sec&&(t.av.sec.prevPos=null));let n=(t.x-t.cx)*e,s=(t.z-t.cz)*e,r=Math.hypot(n,s),a=7*i;r>a&&(n*=a/r,s*=a/r),t.cx+=n,t.cz+=s;let o=t.yaw-t.cyaw;if(o=Math.atan2(Math.sin(o),Math.cos(o)),t.cyaw+=o*e,t.label.pos.set(t.cx,t.av&&t.av.hero.id==="torvik"?2.1:2.4,t.cz),!t.av)continue;let c=t.av.root.position.x,l=t.av.root.position.z,h=t.av.root.rotation.y;t.av.root.position.set(t.cx,0,t.cz),t.av.root.rotation.y=t.cyaw,t.av.speed+=(t.spd-t.av.speed)*e,_0(t.av,i,c,l,h)}}var Df=i=>lr.find(e=>e.id==="boss_"+i).pos,o0={mine:[{cid:"banditBoss",diff:"easy"},{cid:"banditBoss",diff:"medium"},{cid:"banditBoss",diff:"hard"},{cid:"bandit",diff:"easy"},{cid:"bandit",diff:"medium"}],wood:[{cid:"direAlpha",diff:"easy"},{cid:"direAlpha",diff:"medium"},{cid:"treeline",diff:"easy"},{cid:"treeline",diff:"medium"},{cid:"treeline",diff:"hard"}],ruins:[{cid:"cryptKeeper",diff:"easy"},{cid:"cryptKeeper",diff:"medium"},{cid:"apprentice",diff:"medium"},{cid:"apprentice",diff:"hard"},{cid:"apprentice",diff:"hard"}]},c0={lyria:{fac:"elf",deckId:"skyblade"},torvik:{fac:"dwarf",deckId:"ironHold"}},GM={banditBoss:"the Mine Bandit Boss",bandit:"Brakka the Bandit Chief",direAlpha:"the Dire Wolf Alpha",treeline:"the Pack of the Treeline",cryptKeeper:"the Crypt Keeper",apprentice:"a Rogue Apprentice",lich:"Morvayne the Lich"},VM={easy:"Easy",medium:"Medium",hard:"Hard"};function A0(i,e){let t=(o0[i]||o0.mine)[Math.max(0,Math.min(4,(e||1)-1))];return{cid:t.cid,diff:t.diff,cname:GM[t.cid]||t.cid,diffName:VM[t.diff]||t.diff}}function WM(i){return c0[i]||c0.lyria}function R0(){return!!mt}var mt=null,C0=Te("battle"),Un=Te("battleFrame"),qM=new URL("../index.html?embed=1",location.href).href;function XM(i){let e=Zt.get(i)||Es.get(i);return e?e.hero&&e.hero.id?e.hero.id:e.hero||null:null}function P0(){if(ye&&ye.party&&ye.party.size){let i=[];for(let[e,t]of ye.party){let n=t&&t.hero||null;e===Rn()?n=ee.hero.id:n||(n=XM(e)),i.push({id:e,name:O0(t),hero:n||"lyria"})}return i.sort((e,t)=>e.id===ye.leader?-1:t.id===ye.leader?1:e.id<t.id?-1:e.id>t.id?1:0),i}return[{id:Rn(),name:Pe.name,hero:ee.hero.id}]}function I0(i,e,t,n){let s=A0(e,t),r=i.map(a=>{let o=WM(a.hero);return{id:a.id,name:a.name,fac:o.fac,deckId:o.deckId,hero:a.hero}});return{seed:n,diff:s.diff,cid:s.cid,drawOrder:"purchase",players:r,town:{boss:e,level:t,lobby:ye&&ye.id}}}function L0(){if(!ye||ye.leader!==Rn())return;if(!U0()){wi();return}let i=P0(),e=Date.now()%2147483646+1,t=I0(i,ye.boss,ye.level,e);t.role=i.length===1?"solo":"host";let n={...t,role:i.length===1?"solo":"client"};da({k:"battle",lobby:ye.id,cfg:n}),Nf(t,ye.id)}function D0(i){let e=i.party||P0(),t=i.seed||Date.now()%2147483646+1,n=I0(e,i.boss,i.level,t);e.length===1&&(n.role="solo"),Nf(n,i.lobby||ye&&ye.id||null)}function jM(i){let e=i.players||[],t=e.findIndex(n=>n.id&&n.id===Rn());return t<0&&(t=e.findIndex(n=>n.name===(Pe&&Pe.name))),t<0?0:t}function Nf(i,e){oa(),Ai(!0);let t={...i,localPi:jM(i)};(t.players||[]).length<=1?t.role="solo":Ne.mode==="host"?t.role="host":i.role==="client"||Ne.mode==="client"?t.role="client":t.role=i.role||"solo",mt={lobby:e||ye&&ye.id||null,cfg:t,ready:!1,started:!1,rewarded:!1,ended:!1,boss:t.town&&t.town.boss,level:t.town&&t.town.level},document.body.classList.add("in-battle"),C0.classList.remove("hidden"),KM()}function KM(){Un.dataset.bound||(Un.dataset.bound="1",window.addEventListener("message",JM),Un.addEventListener("load",()=>{Un.dataset.loaded="1"})),Un.dataset.loaded==="1"&&mt&&!mt.started&&Un.src,Un.dataset.loaded="",Un.src=qM}function N0(i){let e=Un.contentWindow;e&&e.postMessage(Object.assign({source:"thornhold-town"},i),"*")}function JM(i){if(!i.data||i.data.source!=="thornhold-battle"||i.source&&Un.contentWindow&&i.source!==Un.contentWindow)return;let e=i.data;if(e.k==="ready")mt&&!mt.started&&(mt.ready=!0,mt.started=!0,N0({k:"start",cfg:mt.cfg}));else if(e.k==="act"){if(!mt)return;mt.cfg.role==="host"?Ne.broadcast({t:"bact",a:e.a,v:e.v}):mt.cfg.role==="client"&&Ne.send({t:"bact",a:e.a,v:e.v})}else e.k==="result"?Tf(e.won):e.k==="over"&&wo(!0)}function l0(i,e){mt&&N0({k:"act",a:i,v:e})}function Tf(i){if(!mt||(Ne.mode==="host"&&!mt.sentOver&&(mt.sentOver=!0,Ne.broadcast({t:"battleover",won:i})),mt.rewarded))return;mt.rewarded=!0;let e=mt.boss||ye&&ye.boss,t=mt.level||ye&&ye.level;if(i===!0&&e&&t){let n=If(e,t);lt(`Victory over ${es[e].name}! You got ${n.join(", ")||"nothing this time"}.`,4e3)}else i===!1?lt("The party was defeated. You can try this level again.",3500):i!==!0&&lt("The fight ended without a victory. No rewards this time.",3e3)}function wo(i){if(!(!mt&&!document.body.classList.contains("in-battle"))){document.body.classList.remove("in-battle"),C0.classList.add("hidden");try{Un.removeAttribute("src"),Un.dataset.loaded=""}catch{}mt=null,ye&&(ye=null),Dt&&Dt.id==="lobby"&&(Dt=null,Ts.classList.add("hidden"))}}function F0(i,e){let t=Df(i),n=Ne.mode==="off"?[]:[...Zt.values()].filter(r=>Math.hypot((r.x??r.cx)-t.x,(r.z??r.cz)-t.z)<12);if(Ne.mode==="off"||!n.length){D0({boss:i,level:e,party:[{id:Rn(),name:Pe.name,hero:ee.hero.id}]});return}let s=[...Zt.entries()].filter(([r,a])=>Math.hypot((a.x??a.cx)-t.x,(a.z??a.cz)-t.z)<12).map(([r,a])=>({id:r,name:a.name||"Player"}));ye={id:Math.random().toString(36).slice(2,8),boss:i,level:e,leader:Rn(),leaderName:Pe.name,party:new Map([[Rn(),{name:Pe.name,hero:ee.hero.id}]]),invited:s,declined:new Set},da({k:"start",lobby:ye.id,boss:i,level:e,hero:ee.hero.id}),ws({id:"lobby",kind:"ui"})}function O0(i){return typeof i=="string"?i:i&&i.name||"Player"}function Ff(){if(!ye||!ye.invited)return[];let i=Df(ye.boss);return ye.invited.filter(e=>{if(ye.party.has(e.id)||ye.declined&&ye.declined.has(e.id))return!1;let t=Zt.get(e.id)||Es.get(e.id);return!(!t||i&&Math.hypot((t.x??t.cx)-i.x,(t.z??t.cz)-i.z)>12)})}function U0(){return Ff().length===0}function YM(){let i=ye,e=i.leader===Rn(),t=[...i.party.values()].map(o=>`<span class="chip">${vn(O0(o))}</span>`).join(""),n=A0(i.boss,i.level),s=Ff(),r=s.length?`<p class="sub">Waiting for ${s.map(o=>vn(o.name)).join(", ")} to join\u2026 Start battle unlocks when every nearby teammate is listed below.</p>`:"",a=e?s.length===0?'<button class="btn" data-act="lobbystart">Start battle</button>':'<button class="btn" data-act="lobbystart" disabled>Start battle</button>':'<span class="sub">Waiting for the leader to start the battle\u2026</span>';return`<p>${e?"You started this fight. Nearby players got an invite.":`${vn(i.leaderName)} is leading this fight.`}</p><h3>Players</h3><div class="chips">${t}</div>${r}
    <p class="note">This will be a card battle against <b>${vn(n.cname)}</b> (${vn(n.diffName)}). Each of you plays your own hero. The regular card-game rules apply. Win (test) still skips the fight and grants this level's rewards.</p>
    <div class="btns">${a}${e?'<button class="btn small ghost" data-act="lobbywin">Win (test)</button>':""}<button class="btn small ghost" data-act="lobbyleave">${e?"Cancel fight":"Leave party"}</button></div>`}function $M(){ye&&(da({k:"win",lobby:ye.id}),k0())}function k0(){let i=ye;ye=null;let e=If(i.boss,i.level);Ai(),lt(`Party victory (test) over ${es[i.boss].name}! You got ${e.join(", ")||"nothing this time"}.`,4e3)}function ca(i){if(!ye)return;let e=ye;ye=null,i&&da({k:e.leader===Rn()?"cancel":"part",lobby:e.id}),Dt&&Dt.id==="lobby"&&(Dt=null,Ts.classList.add("hidden"))}var Ti=null;function h0(i){if(i.k==="start"){let e=Df(i.boss);if(!e||ye||Math.hypot(ee.pos.x-e.x,ee.pos.z-e.z)>12)return;Ti=i,Te("inviteText").textContent=`${i.fromName} wants to fight ${es[i.boss].name} (Level ${i.level}) with you.`,Te("invite").classList.remove("hidden")}else i.k==="join"&&ye&&i.lobby===ye.id?(ye.party.set(i.from,{name:i.fromName,hero:i.hero||null}),ye.declined&&ye.declined.delete(i.from),Dt&&Dt.id==="lobby"&&wi(),ye.leader===Rn()&&lt(`${i.fromName} joined the fight.`)):i.k==="decline"&&ye&&i.lobby===ye.id?(ye.declined||(ye.declined=new Set),ye.declined.add(i.from),Dt&&Dt.id==="lobby"&&wi(),ye.leader===Rn()&&lt(`${i.fromName} declined the fight.`)):i.k==="part"&&ye&&i.lobby===ye.id?(ye.party.delete(i.from),Dt&&Dt.id==="lobby"&&wi()):i.k==="cancel"?(Ti&&Ti.lobby===i.lobby&&oa(),mt&&mt.lobby===i.lobby&&wo(!1),ye&&i.lobby===ye.id&&(lt("The leader cancelled the fight."),ca(!1))):i.k==="win"?(Ti&&Ti.lobby===i.lobby&&oa(),ye&&i.lobby===ye.id&&k0()):i.k==="battle"&&i.cfg&&(Ti&&Ti.lobby===i.lobby&&oa(),!ye&&i.lobby&&(ye={id:i.lobby,boss:i.cfg.town&&i.cfg.town.boss,level:i.cfg.town&&i.cfg.town.level,leader:i.from,leaderName:i.fromName,party:new Map}),Nf(i.cfg,i.lobby))}function oa(){Ti=null,Te("invite").classList.add("hidden")}Te("inviteJoin").addEventListener("click",()=>{let i=Ti;oa(),i&&(ye={id:i.lobby,boss:i.boss,level:i.level,leader:i.from,leaderName:i.fromName,party:new Map([[i.from,{name:i.fromName,hero:i.hero||null}],[Rn(),{name:Pe.name,hero:ee.hero.id}]])},da({k:"join",lobby:i.lobby,hero:ee.hero.id}),ws({id:"lobby",kind:"ui"}))});Te("inviteNo").addEventListener("click",()=>{let i=Ti;oa(),i&&da({k:"decline",lobby:i.lobby})});addEventListener("beforeunload",()=>{ye&&ca(!0),Ne.leave(!0)});var $i=(()=>{let i=Te("joy"),e=Te("joyKnob"),t=null,n=0,s=0,r={x:0,z:0,on:!1},a=48,o=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;i.addEventListener("pointerdown",h=>{t=h.pointerId,i.setPointerCapture(t);let u=i.getBoundingClientRect();n=u.left+u.width/2,s=u.top+u.height/2,l(h),h.preventDefault()}),i.addEventListener("pointermove",h=>{h.pointerId===t&&l(h)});let c=h=>{h.pointerId===t&&(t=null,r.x=r.z=0,r.on=!1,e.style.transform="")};i.addEventListener("pointerup",c),i.addEventListener("pointercancel",c);function l(h){let u=h.clientX-n,d=h.clientY-s,f=Math.hypot(u,d);f>a&&(u*=a/f,d*=a/f),e.style.transform=`translate(${u}px, ${d}px)`;let g=Math.min(1,f/a);r.on=g>.15,r.x=u/a,r.z=d/a,r.mag=g}return{v:r,show(){o&&i.classList.remove("hidden")},hide(){i.classList.add("hidden")},isTouch:o}})();$i.isTouch&&document.body.classList.add("touch");var ZM=new Za,Ki=new P(0,1,6),ai=new P;function B0(i){if(!ee.root){Ki.set(0,1,2);return}aa&&(aa.el.style.visibility=Ne.mode==="off"?"hidden":"",aa.pos.set(ee.pos.x,ee.hero.id==="torvik"?2.1:2.4,ee.pos.z),Pe&&aa.el.textContent!==Pe.name&&(aa.el.textContent=Pe.name));let e=ee.hero,t=(An.KeyD||An.ArrowRight?1:0)-(An.KeyA||An.ArrowLeft?1:0),n=(An.KeyS||An.ArrowDown?1:0)-(An.KeyW||An.ArrowUp?1:0),s=An.ShiftLeft||An.ShiftRight,r=null;(or()||R0())&&(t=n=0,ee.target=null);let a=1;!t&&!n&&$i.v.on&&!or()&&(t=$i.v.x,n=$i.v.z,a=$i.v.mag),t||n?(ee.target=null,r=ai.set(t,0,n).normalize()):ee.target&&(ai.set(ee.target.x-ee.pos.x,0,ee.target.z-ee.pos.z),ai.length()<.25?ee.target=null:r=ai.normalize());let o=r?s||a<.6?e.walk:e.run:0;if(ee.target&&r){let g=Math.hypot(ee.target.x-ee.pos.x,ee.target.z-ee.pos.z);o=Math.min(o,Math.max(e.walk*.6,g*3))}if(ee.speed+=(o-ee.speed)*(1-Math.exp(-i*10)),r){let y=Math.atan2(r.x,r.z)-ee.yaw;y=Math.atan2(Math.sin(y),Math.cos(y)),ee.yaw+=y*(1-Math.exp(-i*12))}let c=ee.pos.clone();ee.pos.x+=Math.sin(ee.yaw)*ee.speed*i,ee.pos.z+=Math.cos(ee.yaw)*ee.speed*i,v0(ee.pos),ee.target&&ee.speed>.5&&c.distanceTo(ee.pos)<ee.speed*i*.15&&(ee.target=null);let l=ee.root.position.x,h=ee.root.position.z,u=ee.root.rotation.y;ee.root.position.copy(ee.pos),ee.root.rotation.y=ee.yaw,ee.av.speed=ee.speed,_0(ee.av,i,l,h,u),HM(i),Ki.lerp(ai.set(ee.pos.x,1,ee.pos.z),1-Math.exp(-i*8)),cr.material.opacity=ee.target?.5+.4*Math.sin(performance.now()/150):Math.max(0,cr.material.opacity-i*3);let d=null,f=1/0;for(let g of lr){let y=Math.hypot(g.pos.x-ee.pos.x,g.pos.z-ee.pos.z);y<g.r&&y<f&&(f=y,d=g)}d!==ar&&(ar=d,d&&(oh.innerHTML=`${d.prompt} <small style="opacity:.7">[E]</small>`)),oh.classList.toggle("hidden",!ar||or())}function z0(){let i=Math.min(ZM.getDelta(),.05);window.__pause||B0(i);let e=performance.now()/1e3;for(let a of wf)a.g.position.y=a.y0+Math.sin(e*1.6+a.y0)*(a.spin?.15:a.kind==="ruins"?.12:.03),a.spin&&(a.g.rotation.y=e*.9),a.ring&&(a.ring.material.opacity=.45+.3*Math.sin(e*2.5));let t=kn.dist*Math.cos(kn.elev),n=kn.dist*Math.sin(kn.elev);Ji.position.set(Ki.x,Ki.y+n,Ki.z+t),Ji.lookAt(Ki),window.__camOverride&&window.__camOverride(Ji),Qi.position.copy(Ki).add(pM),Qi.target.position.copy(Ki),Ri.render(qe,Ji);let s=innerWidth,r=innerHeight;for(let a of Ao){ai.copy(a.pos).project(Ji);let o=ai.z<1&&Math.abs(ai.x)<1.2&&Math.abs(ai.y)<1.2;a.el.style.display=o?"":"none",o&&(a.el.style.transform=`translate(${(ai.x*.5+.5)*s}px, ${(-ai.y*.5+.5)*r}px) translate(-50%,-100%)`)}requestAnimationFrame(z0)}for(let i of[Ao]);p0.style.cssText+=";";addEventListener("resize",()=>{Ri.setSize(innerWidth,innerHeight),Ji.aspect=innerWidth/innerHeight,Ji.updateProjectionMatrix()});aa=ns("",new P,"player me");hh();window.__world={P:ee,cam:kn,scene:qe,camera:Ji,interactables:lr,openMenu:ws,closeMenu:Ai,net:Ne,remotes:Zt,get prof(){return Pe},get battle(){return mt},get lobby(){return ye},startFight:F0,openBattle:D0,beginPartyBattle:L0,lobbyReady:U0,invitePending:Ff,joy:$i,teleport:(i,e,t=Math.PI)=>{ee.pos.set(i,0,e),ee.yaw=t,v0(ee.pos),Ki.set(ee.pos.x,1,ee.pos.z),ee.root&&(ee.root.position.copy(ee.pos),ee.root.rotation.y=ee.yaw),ee.av&&ee.av.cape&&ee.av.cape.reset(),ee.av&&ee.av.sec&&(ee.av.sec.prevPos=null)},moveTo:(i,e)=>{ee.target=new P(i,0,e)},advance:(i,e=window.__step||1/60)=>{for(let t=0;t<i-1e-4;t+=e)B0(e)}};requestAnimationFrame(z0)});QM();})();
