(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,79474,(e,t,r)=>{"use strict";var n=e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;r.c=function(e){return n.H.useMemoCache(e)}},932,(e,t,r)=>{"use strict";t.exports=e.r(79474)},67585,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let n=e.r(32061);function i({reason:e,children:t}){if("undefined"==typeof window)throw Object.defineProperty(new n.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},9885,(e,t,r)=>{"use strict";function n(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return n}})},52157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return l}});let n=e.r(43476),i=e.r(74080),a=e.r(63599),o=e.r(9885),s=e.r(43369);function l({moduleIds:e}){if("undefined"!=typeof window)return null;let t=a.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let n=t.reactLoadableManifest;for(let t of e){if(!n[t])continue;let e=n[t].files;r.push(...e)}}if(0===r.length)return null;let l=(0,s.getDeploymentIdQueryOrEmptyString)();return(0,n.jsx)(n.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,o.encodeURIPath)(e)}${l}`;return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,i.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},69093,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return c}});let n=e.r(43476),i=e.r(71645),a=e.r(67585),o=e.r(52157);function s(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},r=(0,i.lazy)(()=>t.loader().then(s)),c=t.loading;function u(e){let s=c?(0,n.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=!t.ssr||!!t.loading,u=l?i.Suspense:i.Fragment,d=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(o.PreloadChunks,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(u,{...l?{fallback:s}:{},children:d})}return u.displayName="LoadableComponent",u}},70703,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let n=e.r(55682)._(e.r(69093));function i(e,t){let r={};"function"==typeof e&&(r.loader=e);let i={...r,...t};return(0,n.default)({...i,modules:i.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},52683,e=>{"use strict";let t,r,n,i;var a=e.i(43476),o=e.i(932),s=e.i(71645);let l=(0,e.i(70703).default)(()=>e.A(87280).then(e=>e.Canvas),{loadableGenerated:{modules:[72700]},ssr:!1});function c(e){let t,r,n,i,c,u=(0,o.c)(8),{children:d,className:m}=e,f=`w-full h-full ${m||""}`;return u[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:[0,50,100],fov:60,near:1e-4,far:5e3},r=[1,2],n={antialias:!0,alpha:!0},u[0]=t,u[1]=r,u[2]=n):(t=u[0],r=u[1],n=u[2]),u[3]!==d?(i=(0,a.jsx)(l,{camera:t,dpr:r,gl:n,children:(0,a.jsx)(s.Suspense,{fallback:null,children:d})}),u[3]=d,u[4]=i):i=u[4],u[5]!==f||u[6]!==i?(c=(0,a.jsx)("div",{className:f,children:i}),u[5]=f,u[6]=i,u[7]=c):c=u[7],c}var u=e.i(40859),u=u;function d(){return(d=Object.assign.bind()).apply(null,arguments)}var m=u,u=u,f=e.i(90072),p=Object.defineProperty;class h{constructor(){((e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r})(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let r=this._listeners;void 0===r[e]&&(r[e]=[]),-1===r[e].indexOf(t)&&r[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let r=this._listeners;return void 0!==r[e]&&-1!==r[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let r=this._listeners[e];if(void 0!==r){let e=r.indexOf(t);-1!==e&&r.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let r=t.slice(0);for(let t=0,n=r.length;t<n;t++)r[t].call(this,e);e.target=null}}}var b=Object.defineProperty,v=(e,t,r)=>{let n;return(n="symbol"!=typeof t?t+"":t)in e?b(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,r};let y=new f.Ray,g=new f.Plane,x=Math.cos(Math.PI/180*70),S=(e,t)=>(e%t+t)%t;class w extends h{constructor(e,t){super(),v(this,"object"),v(this,"domElement"),v(this,"enabled",!0),v(this,"target",new f.Vector3),v(this,"minDistance",0),v(this,"maxDistance",1/0),v(this,"minZoom",0),v(this,"maxZoom",1/0),v(this,"minPolarAngle",0),v(this,"maxPolarAngle",Math.PI),v(this,"minAzimuthAngle",-1/0),v(this,"maxAzimuthAngle",1/0),v(this,"enableDamping",!1),v(this,"dampingFactor",.05),v(this,"enableZoom",!0),v(this,"zoomSpeed",1),v(this,"enableRotate",!0),v(this,"rotateSpeed",1),v(this,"enablePan",!0),v(this,"panSpeed",1),v(this,"screenSpacePanning",!0),v(this,"keyPanSpeed",7),v(this,"zoomToCursor",!1),v(this,"autoRotate",!1),v(this,"autoRotateSpeed",2),v(this,"reverseOrbit",!1),v(this,"reverseHorizontalOrbit",!1),v(this,"reverseVerticalOrbit",!1),v(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),v(this,"mouseButtons",{LEFT:f.MOUSE.ROTATE,MIDDLE:f.MOUSE.DOLLY,RIGHT:f.MOUSE.PAN}),v(this,"touches",{ONE:f.TOUCH.ROTATE,TWO:f.TOUCH.DOLLY_PAN}),v(this,"target0"),v(this,"position0"),v(this,"zoom0"),v(this,"_domElementKeyEvents",null),v(this,"getPolarAngle"),v(this,"getAzimuthalAngle"),v(this,"setPolarAngle"),v(this,"setAzimuthalAngle"),v(this,"getDistance"),v(this,"getZoomScale"),v(this,"listenToKeyEvents"),v(this,"stopListenToKeyEvents"),v(this,"saveState"),v(this,"reset"),v(this,"update"),v(this,"connect"),v(this,"dispose"),v(this,"dollyIn"),v(this,"dollyOut"),v(this,"getScale"),v(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>c.phi,this.getAzimuthalAngle=()=>c.theta,this.setPolarAngle=e=>{let t=S(e,2*Math.PI),n=c.phi;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-n);2*Math.PI-i<i&&(t<n?t+=2*Math.PI:n+=2*Math.PI),u.phi=t-n,r.update()},this.setAzimuthalAngle=e=>{let t=S(e,2*Math.PI),n=c.theta;n<0&&(n+=2*Math.PI),t<0&&(t+=2*Math.PI);let i=Math.abs(t-n);2*Math.PI-i<i&&(t<n?t+=2*Math.PI:n+=2*Math.PI),u.theta=t-n,r.update()},this.getDistance=()=>r.object.position.distanceTo(r.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=()=>{r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(n),r.update(),s=o.NONE},this.update=(()=>{let t=new f.Vector3,i=new f.Vector3(0,1,0),a=new f.Quaternion().setFromUnitVectors(e.up,i),p=a.clone().invert(),h=new f.Vector3,b=new f.Quaternion,v=2*Math.PI;return function(){let S=r.object.position;a.setFromUnitVectors(e.up,i),p.copy(a).invert(),t.copy(S).sub(r.target),t.applyQuaternion(a),c.setFromVector3(t),r.autoRotate&&s===o.NONE&&L(2*Math.PI/60/60*r.autoRotateSpeed),r.enableDamping?(c.theta+=u.theta*r.dampingFactor,c.phi+=u.phi*r.dampingFactor):(c.theta+=u.theta,c.phi+=u.phi);let w=r.minAzimuthAngle,E=r.maxAzimuthAngle;isFinite(w)&&isFinite(E)&&(w<-Math.PI?w+=v:w>Math.PI&&(w-=v),E<-Math.PI?E+=v:E>Math.PI&&(E-=v),w<=E?c.theta=Math.max(w,Math.min(E,c.theta)):c.theta=c.theta>(w+E)/2?Math.max(w,c.theta):Math.min(E,c.theta)),c.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,c.phi)),c.makeSafe(),!0===r.enableDamping?r.target.addScaledVector(m,r.dampingFactor):r.target.add(m),r.zoomToCursor&&R||r.object.isOrthographicCamera?c.radius=V(c.radius):c.radius=V(c.radius*d),t.setFromSpherical(c),t.applyQuaternion(p),S.copy(r.target).add(t),r.object.matrixAutoUpdate||r.object.updateMatrix(),r.object.lookAt(r.target),!0===r.enableDamping?(u.theta*=1-r.dampingFactor,u.phi*=1-r.dampingFactor,m.multiplyScalar(1-r.dampingFactor)):(u.set(0,0,0),m.set(0,0,0));let O=!1;if(r.zoomToCursor&&R){let n=null;if(r.object instanceof f.PerspectiveCamera&&r.object.isPerspectiveCamera){let e=t.length();n=V(e*d);let i=e-n;r.object.position.addScaledVector(_,i),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){let e=new f.Vector3(A.x,A.y,0);e.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/d)),r.object.updateProjectionMatrix(),O=!0;let i=new f.Vector3(A.x,A.y,0);i.unproject(r.object),r.object.position.sub(i).add(e),r.object.updateMatrixWorld(),n=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;null!==n&&(r.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(n).add(r.object.position):(y.origin.copy(r.object.position),y.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(y.direction))<x?e.lookAt(r.target):(g.setFromNormalAndCoplanarPoint(r.object.up,r.target),y.intersectPlane(g,r.target))))}else r.object instanceof f.OrthographicCamera&&r.object.isOrthographicCamera&&(O=1!==d)&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/d)),r.object.updateProjectionMatrix());return d=1,R=!1,!!(O||h.distanceToSquared(r.object.position)>l||8*(1-b.dot(r.object.quaternion))>l)&&(r.dispatchEvent(n),h.copy(r.object.position),b.copy(r.object.quaternion),O=!1,!0)}})(),this.connect=e=>{r.domElement=e,r.domElement.style.touchAction="none",r.domElement.addEventListener("contextmenu",et),r.domElement.addEventListener("pointerdown",Z),r.domElement.addEventListener("pointercancel",Q),r.domElement.addEventListener("wheel",J)},this.dispose=()=>{var e,t,n,i,a,o;r.domElement&&(r.domElement.style.touchAction="auto"),null==(e=r.domElement)||e.removeEventListener("contextmenu",et),null==(t=r.domElement)||t.removeEventListener("pointerdown",Z),null==(n=r.domElement)||n.removeEventListener("pointercancel",Q),null==(i=r.domElement)||i.removeEventListener("wheel",J),null==(a=r.domElement)||a.ownerDocument.removeEventListener("pointermove",q),null==(o=r.domElement)||o.ownerDocument.removeEventListener("pointerup",Q),null!==r._domElementKeyEvents&&r._domElementKeyEvents.removeEventListener("keydown",ee)};const r=this,n={type:"change"},i={type:"start"},a={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=o.NONE;const l=1e-6,c=new f.Spherical,u=new f.Spherical;let d=1;const m=new f.Vector3,p=new f.Vector2,h=new f.Vector2,b=new f.Vector2,w=new f.Vector2,E=new f.Vector2,O=new f.Vector2,j=new f.Vector2,P=new f.Vector2,M=new f.Vector2,_=new f.Vector3,A=new f.Vector2;let R=!1;const N=[],C={};function T(){return Math.pow(.95,r.zoomSpeed)}function L(e){r.reverseOrbit||r.reverseHorizontalOrbit?u.theta+=e:u.theta-=e}function D(e){r.reverseOrbit||r.reverseVerticalOrbit?u.phi+=e:u.phi-=e}const z=(()=>{let e=new f.Vector3;return function(t,r){e.setFromMatrixColumn(r,0),e.multiplyScalar(-t),m.add(e)}})(),I=(()=>{let e=new f.Vector3;return function(t,n){!0===r.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(r.object.up,e)),e.multiplyScalar(t),m.add(e)}})(),U=(()=>{let e=new f.Vector3;return function(t,n){let i=r.domElement;if(i&&r.object instanceof f.PerspectiveCamera&&r.object.isPerspectiveCamera){let a=r.object.position;e.copy(a).sub(r.target);let o=e.length();z(2*t*(o*=Math.tan(r.object.fov/2*Math.PI/180))/i.clientHeight,r.object.matrix),I(2*n*o/i.clientHeight,r.object.matrix)}else i&&r.object instanceof f.OrthographicCamera&&r.object.isOrthographicCamera?(z(t*(r.object.right-r.object.left)/r.object.zoom/i.clientWidth,r.object.matrix),I(n*(r.object.top-r.object.bottom)/r.object.zoom/i.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function k(e){r.object instanceof f.PerspectiveCamera&&r.object.isPerspectiveCamera||r.object instanceof f.OrthographicCamera&&r.object.isOrthographicCamera?d=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function F(e){if(!r.zoomToCursor||!r.domElement)return;R=!0;let t=r.domElement.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top,a=t.width,o=t.height;A.x=n/a*2-1,A.y=-(i/o*2)+1,_.set(A.x,A.y,1).unproject(r.object).sub(r.object.position).normalize()}function V(e){return Math.max(r.minDistance,Math.min(r.maxDistance,e))}function H(e){p.set(e.clientX,e.clientY)}function B(e){w.set(e.clientX,e.clientY)}function Y(){if(1==N.length)p.set(N[0].pageX,N[0].pageY);else{let e=.5*(N[0].pageX+N[1].pageX),t=.5*(N[0].pageY+N[1].pageY);p.set(e,t)}}function K(){if(1==N.length)w.set(N[0].pageX,N[0].pageY);else{let e=.5*(N[0].pageX+N[1].pageX),t=.5*(N[0].pageY+N[1].pageY);w.set(e,t)}}function W(){let e=N[0].pageX-N[1].pageX,t=N[0].pageY-N[1].pageY,r=Math.sqrt(e*e+t*t);j.set(0,r)}function $(e){if(1==N.length)h.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);h.set(r,n)}b.subVectors(h,p).multiplyScalar(r.rotateSpeed);let t=r.domElement;t&&(L(2*Math.PI*b.x/t.clientHeight),D(2*Math.PI*b.y/t.clientHeight)),p.copy(h)}function G(e){if(1==N.length)E.set(e.pageX,e.pageY);else{let t=en(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);E.set(r,n)}O.subVectors(E,w).multiplyScalar(r.panSpeed),U(O.x,O.y),w.copy(E)}function X(e){var t;let n=en(e),i=e.pageX-n.x,a=e.pageY-n.y,o=Math.sqrt(i*i+a*a);P.set(0,o),M.set(0,Math.pow(P.y/j.y,r.zoomSpeed)),t=M.y,k(d/t),j.copy(P)}function Z(e){var t,n,a;!1!==r.enabled&&(0===N.length&&(null==(t=r.domElement)||t.ownerDocument.addEventListener("pointermove",q),null==(n=r.domElement)||n.ownerDocument.addEventListener("pointerup",Q)),a=e,N.push(a),"touch"===e.pointerType?function(e){switch(er(e),N.length){case 1:switch(r.touches.ONE){case f.TOUCH.ROTATE:if(!1===r.enableRotate)return;Y(),s=o.TOUCH_ROTATE;break;case f.TOUCH.PAN:if(!1===r.enablePan)return;K(),s=o.TOUCH_PAN;break;default:s=o.NONE}break;case 2:switch(r.touches.TWO){case f.TOUCH.DOLLY_PAN:if(!1===r.enableZoom&&!1===r.enablePan)return;r.enableZoom&&W(),r.enablePan&&K(),s=o.TOUCH_DOLLY_PAN;break;case f.TOUCH.DOLLY_ROTATE:if(!1===r.enableZoom&&!1===r.enableRotate)return;r.enableZoom&&W(),r.enableRotate&&Y(),s=o.TOUCH_DOLLY_ROTATE;break;default:s=o.NONE}break;default:s=o.NONE}s!==o.NONE&&r.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=r.mouseButtons.LEFT;break;case 1:t=r.mouseButtons.MIDDLE;break;case 2:t=r.mouseButtons.RIGHT;break;default:t=-1}switch(t){case f.MOUSE.DOLLY:if(!1===r.enableZoom)return;F(e),j.set(e.clientX,e.clientY),s=o.DOLLY;break;case f.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===r.enablePan)return;B(e),s=o.PAN}else{if(!1===r.enableRotate)return;H(e),s=o.ROTATE}break;case f.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===r.enableRotate)return;H(e),s=o.ROTATE}else{if(!1===r.enablePan)return;B(e),s=o.PAN}break;default:s=o.NONE}s!==o.NONE&&r.dispatchEvent(i)}(e))}function q(e){!1!==r.enabled&&("touch"===e.pointerType?function(e){switch(er(e),s){case o.TOUCH_ROTATE:if(!1===r.enableRotate)return;$(e),r.update();break;case o.TOUCH_PAN:if(!1===r.enablePan)return;G(e),r.update();break;case o.TOUCH_DOLLY_PAN:if(!1===r.enableZoom&&!1===r.enablePan)return;r.enableZoom&&X(e),r.enablePan&&G(e),r.update();break;case o.TOUCH_DOLLY_ROTATE:if(!1===r.enableZoom&&!1===r.enableRotate)return;r.enableZoom&&X(e),r.enableRotate&&$(e),r.update();break;default:s=o.NONE}}(e):function(e){if(!1!==r.enabled)switch(s){case o.ROTATE:let t;if(!1===r.enableRotate)return;h.set(e.clientX,e.clientY),b.subVectors(h,p).multiplyScalar(r.rotateSpeed),(t=r.domElement)&&(L(2*Math.PI*b.x/t.clientHeight),D(2*Math.PI*b.y/t.clientHeight)),p.copy(h),r.update();break;case o.DOLLY:var n,i;if(!1===r.enableZoom)return;(P.set(e.clientX,e.clientY),M.subVectors(P,j),M.y>0)?(n=T(),k(d/n)):M.y<0&&(i=T(),k(d*i)),j.copy(P),r.update();break;case o.PAN:if(!1===r.enablePan)return;E.set(e.clientX,e.clientY),O.subVectors(E,w).multiplyScalar(r.panSpeed),U(O.x,O.y),w.copy(E),r.update()}}(e))}function Q(e){var t,n,i;(function(e){delete C[e.pointerId];for(let t=0;t<N.length;t++)if(N[t].pointerId==e.pointerId)return void N.splice(t,1)})(e),0===N.length&&(null==(t=r.domElement)||t.releasePointerCapture(e.pointerId),null==(n=r.domElement)||n.ownerDocument.removeEventListener("pointermove",q),null==(i=r.domElement)||i.ownerDocument.removeEventListener("pointerup",Q)),r.dispatchEvent(a),s=o.NONE}function J(e){if(!1!==r.enabled&&!1!==r.enableZoom&&(s===o.NONE||s===o.ROTATE)){var t,n;e.preventDefault(),r.dispatchEvent(i),(F(e),e.deltaY<0)?(t=T(),k(d*t)):e.deltaY>0&&(n=T(),k(d/n)),r.update(),r.dispatchEvent(a)}}function ee(e){if(!1!==r.enabled&&!1!==r.enablePan){let t=!1;switch(e.code){case r.keys.UP:U(0,r.keyPanSpeed),t=!0;break;case r.keys.BOTTOM:U(0,-r.keyPanSpeed),t=!0;break;case r.keys.LEFT:U(r.keyPanSpeed,0),t=!0;break;case r.keys.RIGHT:U(-r.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),r.update())}}function et(e){!1!==r.enabled&&e.preventDefault()}function er(e){let t=C[e.pointerId];void 0===t&&(t=new f.Vector2,C[e.pointerId]=t),t.set(e.pageX,e.pageY)}function en(e){return C[(e.pointerId===N[0].pointerId?N[1]:N[0]).pointerId]}this.dollyIn=(e=T())=>{k(d*e),r.update()},this.dollyOut=(e=T())=>{k(d/e),r.update()},this.getScale=()=>d,this.setScale=e=>{k(e),r.update()},this.getZoomScale=()=>T(),void 0!==t&&this.connect(t),this.update()}}let E=s.forwardRef(({makeDefault:e,camera:t,regress:r,domElement:n,enableDamping:i=!0,keyEvents:a=!1,onChange:o,onStart:l,onEnd:c,...f},p)=>{let h=(0,m.C)(e=>e.invalidate),b=(0,m.C)(e=>e.camera),v=(0,m.C)(e=>e.gl),y=(0,m.C)(e=>e.events),g=(0,m.C)(e=>e.setEvents),x=(0,m.C)(e=>e.set),S=(0,m.C)(e=>e.get),E=(0,m.C)(e=>e.performance),O=t||b,j=n||y.connected||v.domElement,P=s.useMemo(()=>new w(O),[O]);return(0,u.D)(()=>{P.enabled&&P.update()},-1),s.useEffect(()=>(a&&P.connect(!0===a?j:a),P.connect(j),()=>void P.dispose()),[a,j,r,P,h]),s.useEffect(()=>{let e=e=>{h(),r&&E.regress(),o&&o(e)},t=e=>{l&&l(e)},n=e=>{c&&c(e)};return P.addEventListener("change",e),P.addEventListener("start",t),P.addEventListener("end",n),()=>{P.removeEventListener("start",t),P.removeEventListener("end",n),P.removeEventListener("change",e)}},[o,l,c,P,h,g]),s.useEffect(()=>{if(e){let e=S().controls;return x({controls:P}),()=>x({controls:e})}},[e,P]),s.createElement("primitive",d({ref:p,object:P,enableDamping:i},f))});var u=u;function O(e,t){let r=e+"Geometry";return s.forwardRef(({args:e,children:n,...i},a)=>{let o=s.useRef(null);return s.useImperativeHandle(a,()=>o.current),s.useLayoutEffect(()=>void(null==t||t(o.current))),s.createElement("mesh",d({ref:o},i),s.createElement(r,{attach:"geometry",args:e}),n)})}let j=O("sphere"),P=O("ring");var m=u,M=u;let _=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function A(e,t){let r=(0,m.C)(e=>e.gl),n=(0,M.G)(f.TextureLoader,_(e)?Object.values(e):e);return(0,s.useLayoutEffect)(()=>{null==t||t(n)},[t]),(0,s.useEffect)(()=>{if("initTexture"in r){let e=[];Array.isArray(n)?e=n:n instanceof f.Texture?e=[n]:_(n)&&(e=Object.values(n)),e.forEach(e=>{e instanceof f.Texture&&r.initTexture(e)})}},[r,n]),(0,s.useMemo)(()=>{if(!_(e))return n;{let t={},r=0;for(let i in e)t[i]=n[r++];return t}},[e,n])}A.preload=e=>M.G.preload(f.TextureLoader,e),A.clear=e=>M.G.clear(f.TextureLoader,e);let R={DAY_IN_SECONDS:60,get YEAR_IN_SECONDS(){return 365.25*this.DAY_IN_SECONDS}},N="#FDB813",C="/textures/sun.jpg";function T(e){var t;let r,n=.00128*Math.pow(Math.abs(e.realRadiusEarth),1);return{name:e.name,displayName:e.displayName,realRadiusEarth:e.realRadiusEarth,realOrbitAU:e.realOrbitAU,realOrbitalPeriodYears:e.realOrbitalPeriodYears,realRotationHours:e.realRotationHours,visualSize:n,visualOrbitRadius:30*Math.pow(e.realOrbitAU,1),visualOrbitSpeed:2*Math.PI/(e.realOrbitalPeriodYears*R.YEAR_IN_SECONDS),visualRotationSpeed:(r=Math.abs((t=e.realRotationHours)/24)*R.DAY_IN_SECONDS,2*(t<0?-1:1)*Math.PI/r),color:e.color,texture:e.texture,description:e.description,hasRings:e.hasRings,ringColor:e.ringColor,ringTexture:e.ringTexture,moons:e.rawMoons?.map(e=>(function(e,t){var r,n;let i;return{name:e.name,displayName:e.displayName,realRadiusKm:e.realRadiusKm,realOrbitKm:e.realOrbitKm,realOrbitalPeriodDays:e.realOrbitalPeriodDays,visualSize:e.realRadiusKm/6371*.00128,visualOrbitRadius:(r=e.realOrbitKm,r/149597870.7*30),visualOrbitSpeed:(i=Math.abs(n=e.realOrbitalPeriodDays)*R.DAY_IN_SECONDS,2*(n<0?-1:1)*Math.PI/i),color:e.color,texture:e.texture,description:e.description}})(e,0))}}let L=[T({name:"mercury",displayName:"Mercury",realRadiusEarth:.383,realOrbitAU:.387,realOrbitalPeriodYears:.241,realRotationHours:1407.6,color:"#B5B5B5",texture:{diffuse:"/textures/planets/mercury.jpg"},description:"The smallest planet, closest to the Sun"}),T({name:"venus",displayName:"Venus",realRadiusEarth:.949,realOrbitAU:.723,realOrbitalPeriodYears:.615,realRotationHours:-5832.5,color:"#FFC649",texture:{diffuse:"/textures/planets/venus.jpg",clouds:"/textures/planets/venus_atmosphere.jpg"},description:"Earth's twin with retrograde rotation"}),T({name:"earth",displayName:"Earth",realRadiusEarth:1,realOrbitAU:1,realOrbitalPeriodYears:1,realRotationHours:23.93,color:"#6B93D6",texture:{diffuse:"/textures/planets/earth.jpg",clouds:"/textures/planets/earth_clouds.jpg"},description:"Our home planet, the blue marble",rawMoons:[{name:"moon",displayName:"Moon",realRadiusKm:1737,realOrbitKm:384400,realOrbitalPeriodDays:27.32,color:"#C4C4C4",texture:{diffuse:"/textures/moons/moon.jpg"},description:"Earth's only natural satellite"}]}),T({name:"mars",displayName:"Mars",realRadiusEarth:.532,realOrbitAU:1.524,realOrbitalPeriodYears:1.881,realRotationHours:24.62,color:"#C1440E",texture:{diffuse:"/textures/planets/mars.jpg"},description:"The red planet, target for human exploration",rawMoons:[{name:"phobos",displayName:"Phobos",realRadiusKm:11,realOrbitKm:9376,realOrbitalPeriodDays:.32,color:"#8B7355",description:"The larger moon of Mars"},{name:"deimos",displayName:"Deimos",realRadiusKm:6,realOrbitKm:23463,realOrbitalPeriodDays:1.26,color:"#A89078",description:"The smaller moon of Mars"}]}),T({name:"jupiter",displayName:"Jupiter",realRadiusEarth:11.21,realOrbitAU:5.203,realOrbitalPeriodYears:11.86,realRotationHours:9.93,color:"#D8CA9D",texture:{diffuse:"/textures/planets/jupiter.jpg"},description:"The largest planet with the fastest rotation",rawMoons:[{name:"io",displayName:"Io",realRadiusKm:1822,realOrbitKm:421800,realOrbitalPeriodDays:1.77,color:"#FFFF66",description:"Most volcanically active body in the solar system"},{name:"europa",displayName:"Europa",realRadiusKm:1561,realOrbitKm:671100,realOrbitalPeriodDays:3.55,color:"#B8D4E8",description:"Ice-covered moon with possible subsurface ocean"},{name:"ganymede",displayName:"Ganymede",realRadiusKm:2634,realOrbitKm:1070400,realOrbitalPeriodDays:7.15,color:"#8B8878",description:"Largest moon in the solar system"},{name:"callisto",displayName:"Callisto",realRadiusKm:2410,realOrbitKm:1882700,realOrbitalPeriodDays:16.69,color:"#4A4A4A",description:"Heavily cratered ancient surface"}]}),T({name:"saturn",displayName:"Saturn",realRadiusEarth:9.45,realOrbitAU:9.555,realOrbitalPeriodYears:29.46,realRotationHours:10.66,color:"#E8D4A8",texture:{diffuse:"/textures/planets/saturn.jpg"},description:"The ringed planet with stunning beauty",hasRings:!0,ringColor:"#C9B896",ringTexture:"/textures/planets/saturn_ring.png",rawMoons:[{name:"titan",displayName:"Titan",realRadiusKm:2575,realOrbitKm:1221870,realOrbitalPeriodDays:15.95,color:"#E8A84C",description:"Only moon with a dense atmosphere"},{name:"enceladus",displayName:"Enceladus",realRadiusKm:252,realOrbitKm:238020,realOrbitalPeriodDays:1.37,color:"#FFFFFF",description:"Geysers of water ice erupt from its surface"}]}),T({name:"uranus",displayName:"Uranus",realRadiusEarth:4.01,realOrbitAU:19.22,realOrbitalPeriodYears:84.02,realRotationHours:-17.24,color:"#D1E7E7",texture:{diffuse:"/textures/planets/uranus.jpg"},description:"The sideways planet with retrograde rotation",hasRings:!0,ringColor:"#A0C4C4"}),T({name:"neptune",displayName:"Neptune",realRadiusEarth:3.88,realOrbitAU:30.11,realOrbitalPeriodYears:164.8,realRotationHours:16.11,color:"#5B5DDF",texture:{diffuse:"/textures/planets/neptune.jpg"},description:"The windiest planet with supersonic storms",rawMoons:[{name:"triton",displayName:"Triton",realRadiusKm:1353,realOrbitKm:354760,realOrbitalPeriodDays:-5.88,color:"#C8B8A8",description:"Largest moon, orbits in retrograde direction"}]})];function D(e){let t,r=(0,o.c)(4),{texturePath:n,color:i,emissiveIntensity:s}=e,l=A(n);return r[0]!==i||r[1]!==s||r[2]!==l?(t=(0,a.jsx)("meshStandardMaterial",{map:l,emissive:i,emissiveMap:l,emissiveIntensity:s}),r[0]=i,r[1]=s,r[2]=l,r[3]=t):t=r[3],t}function z(e){let t,r=(0,o.c)(3),{color:n,emissiveIntensity:i}=e;return r[0]!==n||r[1]!==i?(t=(0,a.jsx)("meshStandardMaterial",{color:n,emissive:n,emissiveIntensity:i}),r[0]=n,r[1]=i,r[2]=t):t=r[2],t}function I(e){let t,r,n,i,l,c,d,m,p=(0,o.c)(11),{onClick:h}=e,b=(0,s.useRef)(null);return p[0]===Symbol.for("react.memo_cache_sentinel")?(t=e=>{let{clock:t}=e;b.current&&(b.current.rotation.y=.01*t.getElapsedTime())},p[0]=t):t=p[0],(0,u.D)(t),p[1]===Symbol.for("react.memo_cache_sentinel")?(r=[.13952,64,64],p[1]=r):r=p[1],p[2]!==h?(n=()=>h?.(new f.Vector3(0,0,0)),p[2]=h,p[3]=n):n=p[3],p[4]===Symbol.for("react.memo_cache_sentinel")?(i=C?(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(z,{color:N,emissiveIntensity:2}),children:(0,a.jsx)(D,{texturePath:C,color:N,emissiveIntensity:2})}):(0,a.jsx)(z,{color:N,emissiveIntensity:2}),p[4]=i):i=p[4],p[5]!==n?(l=(0,a.jsx)(j,{ref:b,args:r,onClick:n,children:i}),p[5]=n,p[6]=l):l=p[6],p[7]===Symbol.for("react.memo_cache_sentinel")?(c=(0,a.jsx)("pointLight",{color:N,intensity:3,distance:1500,decay:.1}),d=(0,a.jsx)("ambientLight",{intensity:.1}),p[7]=c,p[8]=d):(c=p[7],d=p[8]),p[9]!==l?(m=(0,a.jsxs)("group",{children:[l,c,d]}),p[9]=l,p[10]=m):m=p[10],m}var u=u,U=e.i(88014),m=u,u=u;let k=new f.Vector3,F=new f.Vector3,V=new f.Vector3,H=new f.Vector2;function B(e,t,r){let n=k.setFromMatrixPosition(e.matrixWorld);n.project(t);let i=r.width/2,a=r.height/2;return[n.x*i+i,-(n.y*a)+a]}let Y=e=>1e-10>Math.abs(e)?0:e;function K(e,t,r=""){let n="matrix3d(";for(let r=0;16!==r;r++)n+=Y(t[r]*e.elements[r])+(15!==r?",":")");return r+n}let W=(n=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>K(e,n)),$=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>K(e,i(t),"translate(-50%,-50%)")),G=s.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:i,center:a,fullscreen:o,portal:l,distanceFactor:c,sprite:p=!1,transform:h=!1,occlude:b,onOcclude:v,castShadow:y,receiveShadow:g,material:x,geometry:S,zIndexRange:w=[0x1000037,0],calculatePosition:E=B,as:O="div",wrapperClass:j,pointerEvents:P="auto",...M},_)=>{let{gl:A,camera:R,scene:N,size:C,raycaster:T,events:L,viewport:D}=(0,m.C)(),[z]=s.useState(()=>document.createElement(O)),I=s.useRef(null),K=s.useRef(null),G=s.useRef(0),X=s.useRef([0,0]),Z=s.useRef(null),q=s.useRef(null),Q=(null==l?void 0:l.current)||L.connected||A.domElement.parentNode,J=s.useRef(null),ee=s.useRef(!1),et=s.useMemo(()=>{var e;return b&&"blending"!==b||Array.isArray(b)&&b.length&&(e=b[0])&&"object"==typeof e&&"current"in e},[b]);s.useLayoutEffect(()=>{let e=A.domElement;b&&"blending"===b?(e.style.zIndex=`${Math.floor(w[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[b]),s.useLayoutEffect(()=>{if(K.current){let e=I.current=U.createRoot(z);if(N.updateMatrixWorld(),h)z.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=E(K.current,R,C);z.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Q&&(i?Q.prepend(z):Q.appendChild(z)),()=>{Q&&Q.removeChild(z),e.unmount()}}},[Q,h]),s.useLayoutEffect(()=>{j&&(z.className=j)},[j]);let er=s.useMemo(()=>h?{position:"absolute",top:0,left:0,width:C.width,height:C.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:a?"translate3d(-50%,-50%,0)":"none",...o&&{top:-C.height/2,left:-C.width/2,width:C.width,height:C.height},...r},[r,a,o,C,h]),en=s.useMemo(()=>({position:"absolute",pointerEvents:P}),[P]);s.useLayoutEffect(()=>{var t,i;ee.current=!1,h?null==(t=I.current)||t.render(s.createElement("div",{ref:Z,style:er},s.createElement("div",{ref:q,style:en},s.createElement("div",{ref:_,className:n,style:r,children:e})))):null==(i=I.current)||i.render(s.createElement("div",{ref:_,style:er,className:n,children:e}))});let ei=s.useRef(!0);(0,u.D)(e=>{if(K.current){R.updateMatrixWorld(),K.current.updateWorldMatrix(!0,!1);let e=h?X.current:E(K.current,R,C);if(h||Math.abs(G.current-R.zoom)>t||Math.abs(X.current[0]-e[0])>t||Math.abs(X.current[1]-e[1])>t){var r;let t,n,i,a,o=(r=K.current,t=k.setFromMatrixPosition(r.matrixWorld),n=F.setFromMatrixPosition(R.matrixWorld),i=t.sub(n),a=R.getWorldDirection(V),i.angleTo(a)>Math.PI/2),s=!1;et&&(Array.isArray(b)?s=b.map(e=>e.current):"blending"!==b&&(s=[N]));let l=ei.current;s?ei.current=function(e,t,r,n){let i=k.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),H.set(a.x,a.y),r.setFromCamera(H,t);let o=r.intersectObjects(n,!0);if(o.length){let e=o[0].distance;return i.distanceTo(r.ray.origin)<e}return!0}(K.current,R,T,s)&&!o:ei.current=!o,l!==ei.current&&(v?v(!ei.current):z.style.display=ei.current?"block":"none");let u=Math.floor(w[0]/2),d=b?et?[w[0],u]:[u-1,0]:w;if(z.style.zIndex=`${function(e,t,r){if(t instanceof f.PerspectiveCamera||t instanceof f.OrthographicCamera){let n=k.setFromMatrixPosition(e.matrixWorld),i=F.setFromMatrixPosition(t.matrixWorld),a=n.distanceTo(i),o=(r[1]-r[0])/(t.far-t.near),s=r[1]-o*t.far;return Math.round(o*a+s)}}(K.current,R,d)}`,h){let[e,t]=[C.width/2,C.height/2],r=R.projectionMatrix.elements[5]*t,{isOrthographicCamera:n,top:i,left:a,bottom:o,right:s}=R,l=W(R.matrixWorldInverse),u=n?`scale(${r})translate(${Y(-(s+a)/2)}px,${Y((i+o)/2)}px)`:`translateZ(${r}px)`,d=K.current.matrixWorld;p&&((d=R.matrixWorldInverse.clone().transpose().copyPosition(d).scale(K.current.scale)).elements[3]=d.elements[7]=d.elements[11]=0,d.elements[15]=1),z.style.width=C.width+"px",z.style.height=C.height+"px",z.style.perspective=n?"":`${r}px`,Z.current&&q.current&&(Z.current.style.transform=`${u}${l}translate(${e}px,${t}px)`,q.current.style.transform=$(d,1/((c||10)/400)))}else{let t=void 0===c?1:function(e,t){if(t instanceof f.OrthographicCamera)return t.zoom;if(!(t instanceof f.PerspectiveCamera))return 1;{let r=k.setFromMatrixPosition(e.matrixWorld),n=F.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*r.distanceTo(n))}}(K.current,R)*c;z.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}X.current=e,G.current=R.zoom}}if(!et&&J.current&&!ee.current)if(h){if(Z.current){let e=Z.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=R;if(t||S)M.scale&&(Array.isArray(M.scale)?M.scale instanceof f.Vector3?J.current.scale.copy(M.scale.clone().divideScalar(1)):J.current.scale.set(1/M.scale[0],1/M.scale[1],1/M.scale[2]):J.current.scale.setScalar(1/M.scale));else{let t=(c||10)/400,r=e.clientWidth*t,n=e.clientHeight*t;J.current.scale.set(r,n,1)}ee.current=!0}}}else{let t=z.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/D.factor,r=t.clientWidth*e,n=t.clientHeight*e;J.current.scale.set(r,n,1),ee.current=!0}J.current.lookAt(e.camera.position)}});let ea=s.useMemo(()=>({vertexShader:h?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[h]);return s.createElement("group",d({},M,{ref:K}),b&&!et&&s.createElement("mesh",{castShadow:y,receiveShadow:g,ref:J},S||s.createElement("planeGeometry",null),x||s.createElement("shaderMaterial",{side:f.DoubleSide,vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader})))});var u=u;function X(e){let t,r=(0,o.c)(4),{textureConfig:n,hovered:i}=e,s=A(n.diffuse),l=i?"#ffffff":"#000000",c=.1*!!i;return r[0]!==s||r[1]!==l||r[2]!==c?(t=(0,a.jsx)("meshStandardMaterial",{map:s,emissive:l,emissiveIntensity:c}),r[0]=s,r[1]=l,r[2]=c,r[3]=t):t=r[3],t}function Z(e){let t,r=(0,o.c)(4),{color:n,hovered:i}=e,s=i?n:"#000000",l=.3*!!i;return r[0]!==n||r[1]!==s||r[2]!==l?(t=(0,a.jsx)("meshStandardMaterial",{color:n,emissive:s,emissiveIntensity:l}),r[0]=n,r[1]=s,r[2]=l,r[3]=t):t=r[3],t}function q(e){let t,r,n,i,l,c,d,m,f,p=(0,o.c)(30),{data:h,timeScale:b,showLabels:v,onClick:y}=e,g=(0,s.useRef)(null),x=(0,s.useRef)(null),[S,w]=(0,s.useState)(!1),E=(0,s.useRef)(0),O=(0,s.useRef)(0),P=(0,s.useRef)(b);return p[0]!==h.visualOrbitRadius||p[1]!==h.visualOrbitSpeed||p[2]!==b?(t=e=>{let{clock:t}=e,r=t.getElapsedTime();b!==P.current&&(E.current=E.current+(r-O.current)*P.current,O.current=r,P.current=b);let n=E.current+(r-O.current)*b;if(x.current){let e=n*h.visualOrbitSpeed;x.current.position.x=Math.cos(e)*h.visualOrbitRadius,x.current.position.z=Math.sin(e)*h.visualOrbitRadius}g.current&&(g.current.rotation.y=n*h.visualOrbitSpeed)},p[0]=h.visualOrbitRadius,p[1]=h.visualOrbitSpeed,p[2]=b,p[3]=t):t=p[3],(0,u.D)(t),p[4]!==h.visualSize?(r=[h.visualSize,32,32],p[4]=h.visualSize,p[5]=r):r=p[5],p[6]!==h.name||p[7]!==h.visualSize||p[8]!==y?(n=()=>{x.current&&y?.(h.name,x.current.position.clone(),h.visualSize)},p[6]=h.name,p[7]=h.visualSize,p[8]=y,p[9]=n):n=p[9],p[10]===Symbol.for("react.memo_cache_sentinel")?(i=()=>w(!0),l=()=>w(!1),p[10]=i,p[11]=l):(i=p[10],l=p[11]),p[12]!==h.color||p[13]!==h.texture||p[14]!==S?(c=h.texture?(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(Z,{color:h.color,hovered:S}),children:(0,a.jsx)(X,{textureConfig:h.texture,hovered:S})}):(0,a.jsx)(Z,{color:h.color,hovered:S}),p[12]=h.color,p[13]=h.texture,p[14]=S,p[15]=c):c=p[15],p[16]!==r||p[17]!==n||p[18]!==c?(d=(0,a.jsx)(j,{ref:g,args:r,onClick:n,onPointerOver:i,onPointerOut:l,children:c}),p[16]=r,p[17]=n,p[18]=c,p[19]=d):d=p[19],p[20]!==h.displayName||p[21]!==h.name||p[22]!==h.visualSize||p[23]!==S||p[24]!==y||p[25]!==v?(m=(v||S)&&(0,a.jsx)(G,{position:[0,3*h.visualSize,0],center:!0,style:{userSelect:"none"},children:(0,a.jsx)("div",{className:"bg-black/70 text-white px-1.5 py-0.5 rounded text-xs whitespace-nowrap cursor-pointer hover:bg-black/90",onClick:()=>{x.current&&y?.(h.name,x.current.position.clone(),h.visualSize)},children:h.displayName})}),p[20]=h.displayName,p[21]=h.name,p[22]=h.visualSize,p[23]=S,p[24]=y,p[25]=v,p[26]=m):m=p[26],p[27]!==d||p[28]!==m?(f=(0,a.jsxs)("group",{ref:x,children:[d,m]}),p[27]=d,p[28]=m,p[29]=f):f=p[29],f}function Q(e){let t,r=(0,o.c)(4),{textureConfig:n,hovered:i}=e,s=A(n.diffuse),l=i?"#ffffff":"#000000",c=.1*!!i;return r[0]!==s||r[1]!==l||r[2]!==c?(t=(0,a.jsx)("meshStandardMaterial",{map:s,emissive:l,emissiveIntensity:c}),r[0]=s,r[1]=l,r[2]=c,r[3]=t):t=r[3],t}function J(e){let t,r,n,i,l=(0,o.c)(9),{size:c,cloudTexture:d,rotationRef:m}=e,f=(0,s.useRef)(null),p=A(d);l[0]!==m?(t=()=>{f.current&&m.current&&(f.current.rotation.y=1.1*m.current.rotation.y)},l[0]=m,l[1]=t):t=l[1],(0,u.D)(t);let h=1.02*c;return l[2]!==h?(r=[h,64,64],l[2]=h,l[3]=r):r=l[3],l[4]!==p?(n=(0,a.jsx)("meshStandardMaterial",{map:p,transparent:!0,opacity:.4,depthWrite:!1}),l[4]=p,l[5]=n):n=l[5],l[6]!==r||l[7]!==n?(i=(0,a.jsx)(j,{ref:f,args:r,children:n}),l[6]=r,l[7]=n,l[8]=i):i=l[8],i}function ee({innerRadius:e,outerRadius:t,texturePath:r,fallbackColor:n}){let i=r?A(r):null;return(0,a.jsx)(P,{args:[e,t,64],"rotation-x":Math.PI/2.2,children:(0,a.jsx)("meshBasicMaterial",{map:i,color:i?void 0:n,side:f.DoubleSide,transparent:!0,opacity:.8})})}function et(e){let t,r=(0,o.c)(4),{color:n,hovered:i}=e,s=i?n:"#000000",l=.4*!!i;return r[0]!==n||r[1]!==s||r[2]!==l?(t=(0,a.jsx)("meshStandardMaterial",{color:n,emissive:s,emissiveIntensity:l}),r[0]=n,r[1]=s,r[2]=l,r[3]=t):t=r[3],t}function er(e){let t,r,n,i,l,c,d,m,p,h,b,v,y=(0,o.c)(49),{data:g,timeScale:x,showLabels:S,showMoons:w,onClick:E}=e,O=(0,s.useRef)(null),M=(0,s.useRef)(null),[_,A]=(0,s.useState)(!1),R=(0,s.useRef)(0),N=(0,s.useRef)(0),C=(0,s.useRef)(x);return y[0]!==g.initialAngle||y[1]!==g.visualOrbitRadius||y[2]!==g.visualOrbitSpeed||y[3]!==g.visualRotationSpeed||y[4]!==x?(t=e=>{let{clock:t}=e,r=t.getElapsedTime();x!==C.current&&(R.current=R.current+(r-N.current)*C.current,N.current=r,C.current=x);let n=R.current+(r-N.current)*x;if(O.current&&(O.current.rotation.y=n*g.visualRotationSpeed),M.current){let e=(g.initialAngle??0)+n*g.visualOrbitSpeed;M.current.position.x=Math.cos(e)*g.visualOrbitRadius,M.current.position.z=Math.sin(e)*g.visualOrbitRadius}},y[0]=g.initialAngle,y[1]=g.visualOrbitRadius,y[2]=g.visualOrbitSpeed,y[3]=g.visualRotationSpeed,y[4]=x,y[5]=t):t=y[5],(0,u.D)(t),y[6]!==g.visualSize?(r=[g.visualSize,64,64],y[6]=g.visualSize,y[7]=r):r=y[7],y[8]!==g.name||y[9]!==g.visualSize||y[10]!==E?(n=()=>{M.current&&E?.(g.name,M.current.position.clone(),g.visualSize)},y[8]=g.name,y[9]=g.visualSize,y[10]=E,y[11]=n):n=y[11],y[12]===Symbol.for("react.memo_cache_sentinel")?(i=()=>A(!0),l=()=>A(!1),y[12]=i,y[13]=l):(i=y[12],l=y[13]),y[14]!==g.color||y[15]!==g.texture||y[16]!==_?(c=g.texture?(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(et,{color:g.color,hovered:_}),children:(0,a.jsx)(Q,{textureConfig:g.texture,hovered:_})}):(0,a.jsx)(et,{color:g.color,hovered:_}),y[14]=g.color,y[15]=g.texture,y[16]=_,y[17]=c):c=y[17],y[18]!==r||y[19]!==n||y[20]!==c?(d=(0,a.jsx)(j,{ref:O,args:r,onClick:n,onPointerOver:i,onPointerOut:l,children:c}),y[18]=r,y[19]=n,y[20]=c,y[21]=d):d=y[21],y[22]!==g.texture||y[23]!==g.visualSize?(m=g.texture?.clouds&&(0,a.jsx)(s.Suspense,{fallback:null,children:(0,a.jsx)(J,{size:g.visualSize,cloudTexture:g.texture.clouds,rotationRef:O})}),y[22]=g.texture,y[23]=g.visualSize,y[24]=m):m=y[24],y[25]!==g.hasRings||y[26]!==g.ringColor||y[27]!==g.ringTexture||y[28]!==g.visualSize?(p=g.hasRings&&(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(P,{args:[1.4*g.visualSize,2.2*g.visualSize,64],"rotation-x":Math.PI/2.2,children:(0,a.jsx)("meshBasicMaterial",{color:g.ringColor,side:f.DoubleSide,transparent:!0,opacity:.7})}),children:(0,a.jsx)(ee,{innerRadius:1.4*g.visualSize,outerRadius:2.2*g.visualSize,texturePath:g.ringTexture,fallbackColor:g.ringColor})}),y[25]=g.hasRings,y[26]=g.ringColor,y[27]=g.ringTexture,y[28]=g.visualSize,y[29]=p):p=y[29],y[30]!==g.displayName||y[31]!==g.name||y[32]!==g.visualSize||y[33]!==_||y[34]!==E||y[35]!==S?(h=(S||_)&&(0,a.jsx)(G,{position:[0,3*g.visualSize,0],center:!0,style:{userSelect:"none"},children:(0,a.jsx)("div",{className:"bg-black/70 text-white px-2 py-1 rounded text-sm whitespace-nowrap cursor-pointer hover:bg-black/90",onClick:()=>{M.current&&E?.(g.name,M.current.position.clone(),g.visualSize)},children:g.displayName})}),y[30]=g.displayName,y[31]=g.name,y[32]=g.visualSize,y[33]=_,y[34]=E,y[35]=S,y[36]=h):h=y[36],y[37]!==g.moons||y[38]!==E||y[39]!==S||y[40]!==w||y[41]!==x?(b=w&&g.moons?.map(e=>(0,a.jsx)(q,{data:e,timeScale:x,showLabels:S,onClick:(e,t,r)=>{if(M.current){let n=M.current.position.clone().add(t);E?.(e,n,r)}}},e.name)),y[37]=g.moons,y[38]=E,y[39]=S,y[40]=w,y[41]=x,y[42]=b):b=y[42],y[43]!==h||y[44]!==b||y[45]!==d||y[46]!==m||y[47]!==p?(v=(0,a.jsxs)("group",{ref:M,children:[d,m,p,h,b]}),y[43]=h,y[44]=b,y[45]=d,y[46]=m,y[47]=p,y[48]=v):v=y[48],v}var m=u,en=f,ei=f;let ea=new ei.Box3,eo=new ei.Vector3;class es extends ei.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new ei.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new ei.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new ei.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new ei.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceEnd",new ei.InterleavedBufferAttribute(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new ei.InstancedInterleavedBuffer(r,2*t,1);return this.setAttribute("instanceColorStart",new ei.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new ei.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ei.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new ei.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),ea.setFromBufferAttribute(t),this.boundingBox.union(ea))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new ei.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)eo.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(eo)),eo.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(eo));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var el=f,ec=e.i(8560);let eu=parseInt(f.REVISION.replace(/\D+/g,""));class ed extends el.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:el.UniformsUtils.clone(el.UniformsUtils.merge([ec.UniformsLib.common,ec.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new el.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${eu>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let em=eu>=125?"uv1":"uv2",ef=new en.Vector4,ep=new en.Vector3,eh=new en.Vector3,eb=new en.Vector4,ev=new en.Vector4,ey=new en.Vector4,eg=new en.Vector3,ex=new en.Matrix4,eS=new en.Line3,ew=new en.Vector3,eE=new en.Box3,eO=new en.Sphere,ej=new en.Vector4;function eP(e,t,n){return ej.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),ej.multiplyScalar(1/ej.w),ej.x=r/n.width,ej.y=r/n.height,ej.applyMatrix4(e.projectionMatrixInverse),ej.multiplyScalar(1/ej.w),Math.abs(Math.max(ej.x,ej.y))}class eM extends en.Mesh{constructor(e=new es,t=new ed({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)ep.fromBufferAttribute(t,e),eh.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+ep.distanceTo(eh);let i=new en.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new en.InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new en.InterleavedBufferAttribute(i,1,1)),this}raycast(e,n){let i,a,o=this.material.worldUnits,s=e.camera;null!==s||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let l=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let c=this.matrixWorld,u=this.geometry,d=this.material;if(r=d.linewidth+l,null===u.boundingSphere&&u.computeBoundingSphere(),eO.copy(u.boundingSphere).applyMatrix4(c),o)i=.5*r;else{let e=Math.max(s.near,eO.distanceToPoint(t.origin));i=eP(s,e,d.resolution)}if(eO.radius+=i,!1!==t.intersectsSphere(eO)){if(null===u.boundingBox&&u.computeBoundingBox(),eE.copy(u.boundingBox).applyMatrix4(c),o)a=.5*r;else{let e=Math.max(s.near,eE.distanceToPoint(t.origin));a=eP(s,e,d.resolution)}eE.expandByScalar(a),!1!==t.intersectsBox(eE)&&(o?function(e,n){let i=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,s=a.attributes.instanceEnd,l=Math.min(a.instanceCount,o.count);for(let a=0;a<l;a++){eS.start.fromBufferAttribute(o,a),eS.end.fromBufferAttribute(s,a),eS.applyMatrix4(i);let l=new en.Vector3,c=new en.Vector3;t.distanceSqToSegment(eS.start,eS.end,c,l),c.distanceTo(l)<.5*r&&n.push({point:c,pointOnLine:l,distance:t.origin.distanceTo(c),object:e,face:null,faceIndex:a,uv:null,[em]:null})}}(this,n):function(e,n,i){let a=n.projectionMatrix,o=e.material.resolution,s=e.matrixWorld,l=e.geometry,c=l.attributes.instanceStart,u=l.attributes.instanceEnd,d=Math.min(l.instanceCount,c.count),m=-n.near;t.at(1,ey),ey.w=1,ey.applyMatrix4(n.matrixWorldInverse),ey.applyMatrix4(a),ey.multiplyScalar(1/ey.w),ey.x*=o.x/2,ey.y*=o.y/2,ey.z=0,eg.copy(ey),ex.multiplyMatrices(n.matrixWorldInverse,s);for(let n=0;n<d;n++){if(eb.fromBufferAttribute(c,n),ev.fromBufferAttribute(u,n),eb.w=1,ev.w=1,eb.applyMatrix4(ex),ev.applyMatrix4(ex),eb.z>m&&ev.z>m)continue;if(eb.z>m){let e=eb.z-ev.z,t=(eb.z-m)/e;eb.lerp(ev,t)}else if(ev.z>m){let e=ev.z-eb.z,t=(ev.z-m)/e;ev.lerp(eb,t)}eb.applyMatrix4(a),ev.applyMatrix4(a),eb.multiplyScalar(1/eb.w),ev.multiplyScalar(1/ev.w),eb.x*=o.x/2,eb.y*=o.y/2,ev.x*=o.x/2,ev.y*=o.y/2,eS.start.copy(eb),eS.start.z=0,eS.end.copy(ev),eS.end.z=0;let l=eS.closestPointToPointParameter(eg,!0);eS.at(l,ew);let d=en.MathUtils.lerp(eb.z,ev.z,l),f=d>=-1&&d<=1,p=eg.distanceTo(ew)<.5*r;if(f&&p){eS.start.fromBufferAttribute(c,n),eS.end.fromBufferAttribute(u,n),eS.start.applyMatrix4(s),eS.end.applyMatrix4(s);let r=new en.Vector3,a=new en.Vector3;t.distanceSqToSegment(eS.start,eS.end,a,r),i.push({point:a,pointOnLine:r,distance:t.origin.distanceTo(a),object:e,face:null,faceIndex:n,uv:null,[em]:null})}}}(this,s,n))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ef),this.material.uniforms.resolution.value.set(ef.z,ef.w))}}class e_ extends es{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class eA extends eM{constructor(e=new e_,t=new ed({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let eR=s.forwardRef(function({points:e,color:t=0xffffff,vertexColors:r,linewidth:n,lineWidth:i,segments:a,dashed:o,...l},c){var u,p;let h=(0,m.C)(e=>e.size),b=s.useMemo(()=>a?new eM:new eA,[a]),[v]=s.useState(()=>new ed),y=(null==r||null==(u=r[0])?void 0:u.length)===4?4:3,g=s.useMemo(()=>{let n=a?new es:new e_,i=e.map(e=>{let t=Array.isArray(e);return e instanceof f.Vector3||e instanceof f.Vector4?[e.x,e.y,e.z]:e instanceof f.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=0xffffff;let e=r.map(e=>e instanceof f.Color?e.toArray():e);n.setColors(e.flat(),y)}return n},[e,a,r,y]);return s.useLayoutEffect(()=>{b.computeLineDistances()},[e,b]),s.useLayoutEffect(()=>{o?v.defines.USE_DASH="":delete v.defines.USE_DASH,v.needsUpdate=!0},[o,v]),s.useEffect(()=>()=>{g.dispose(),v.dispose()},[g]),s.createElement("primitive",d({object:b,ref:c},l),s.createElement("primitive",{object:g,attach:"geometry"}),s.createElement("primitive",d({object:v,attach:"material",color:t,vertexColors:!!r,resolution:[h.width,h.height],linewidth:null!=(p=null!=n?n:i)?p:1,dashed:o,transparent:4===y},l)))});function eN(e){let t,r,n=(0,o.c)(5),{radius:i,color:s}=e,l=void 0===s?"#ffffff":s;if(n[0]!==i){t=[];for(let e=0;e<=128;e++){let r=e/128*Math.PI*2;t.push(new f.Vector3(Math.cos(r)*i,0,Math.sin(r)*i))}n[0]=i,n[1]=t}else t=n[1];let c=t;return n[2]!==l||n[3]!==c?(r=(0,a.jsx)(eR,{points:c,color:l,lineWidth:1,transparent:!0,opacity:.3}),n[2]=l,n[3]=c,n[4]=r):r=n[4],r}var u=u,eC=f;let eT=parseInt(f.REVISION.replace(/\D+/g,""));class eL extends eC.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${eT>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}let eD=e=>new eC.Vector3().setFromSpherical(new eC.Spherical(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),ez=s.forwardRef(({radius:e=100,depth:t=50,count:r=5e3,saturation:n=0,factor:i=4,fade:a=!1,speed:o=1},l)=>{let c=s.useRef(null),[d,m,f]=s.useMemo(()=>{let a=[],o=[],s=Array.from({length:r},()=>(.5+.5*Math.random())*i),l=new eC.Color,c=e+t,u=t/r;for(let e=0;e<r;e++)c-=u*Math.random(),a.push(...eD(c).toArray()),l.setHSL(e/r,n,.9),o.push(l.r,l.g,l.b);return[new Float32Array(a),new Float32Array(o),new Float32Array(s)]},[r,t,i,e,n]);(0,u.D)(e=>c.current&&(c.current.uniforms.time.value=e.clock.elapsedTime*o));let[p]=s.useState(()=>new eL);return s.createElement("points",{ref:l},s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",args:[d,3]}),s.createElement("bufferAttribute",{attach:"attributes-color",args:[m,3]}),s.createElement("bufferAttribute",{attach:"attributes-size",args:[f,1]})),s.createElement("primitive",{ref:c,object:p,attach:"material",blending:eC.AdditiveBlending,"uniforms-fade-value":a,depthWrite:!1,transparent:!0,vertexColors:!0}))});function eI(){let e,t=(0,o.c)(1);return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,a.jsx)(ez,{radius:2e3,depth:100,count:8e3,factor:4,saturation:0,fade:!0,speed:.5}),t[0]=e):e=t[0],e}let eU=new Date(Date.UTC(2e3,0,1,12,0,0)),ek={mercury:252.25,venus:181.98,earth:100.46,mars:355.45,jupiter:34.4,saturn:50.08,uranus:314.2,neptune:304.22},eF={mercury:4.09235,venus:1.60215,earth:.98565,mars:.52407,jupiter:.08309,saturn:.03346,uranus:.01173,neptune:.00598},eV=new f.Vector3(0,50,100),eH=new f.Vector3(0,0,0);function eB({timeScale:e,showOrbits:t,showLabels:r,showMoons:n,resetCamera:i,focusTarget:o,onPlanetClick:l,onResetComplete:c,onFocusComplete:d}){let p=(0,s.useRef)(null),h=(0,s.useRef)(null),b=(0,s.useRef)(null),v=(0,s.useRef)(!1),y=(0,s.useRef)(!1),{camera:g,clock:x}=(0,m.C)(),S=(0,s.useRef)(null),w=(0,s.useRef)(null),O=(0,s.useRef)(0),j=(0,s.useRef)(0),P=(0,s.useRef)(e);i&&!v.current&&(v.current=!0,h.current=eH.clone(),b.current=eV.length());let M=(0,s.useMemo)(()=>{let e=new Date;return L.map(t=>({...t,initialAngle:function(e,t=new Date){return function(e,t=new Date){let r=ek[e],n=eF[e];return void 0===r||void 0===n?0:((r+n*function(e=new Date){return(e.getTime()-eU.getTime())/864e5}(t))%360+360)%360}(e,t)*Math.PI/180}(t.name,e)}))},[]);if(o!==w.current)if(w.current=o??null,o){if(S.current=o,y.current=!0,"sun"===o)b.current=Math.max(.55808,.01);else{let e=M.find(e=>e.name===o);if(e)b.current=Math.max(4*e.visualSize,.01);else for(let e of M){let t=e.moons?.find(e=>e.name===o);if(t){b.current=Math.max(4*t.visualSize,.01);break}}}l?.(o),d?.()}else S.current=null,y.current=!1;let _=(e,t,r)=>{S.current=e,y.current=!0,b.current=Math.max((r??M.find(t=>t.name===e)?.visualSize??.1)*4,.01),l?.(e)};return(0,u.D)(()=>{if(y.current&&S.current&&null!==b.current){let t,r=(t=x.getElapsedTime(),e!==P.current&&(O.current+=(t-j.current)*P.current,j.current=t,P.current=e),O.current+(t-j.current)*e);if("sun"===S.current)h.current=new f.Vector3(0,0,0);else{let e=M.find(e=>e.name===S.current);if(e){let t=(e.initialAngle??0)+r*e.visualOrbitSpeed;h.current=new f.Vector3(Math.cos(t)*e.visualOrbitRadius,0,Math.sin(t)*e.visualOrbitRadius)}else for(let e of M){let t=e.moons?.find(e=>e.name===S.current);if(t){let n=(e.initialAngle??0)+r*e.visualOrbitSpeed,i=Math.cos(n)*e.visualOrbitRadius,a=Math.sin(n)*e.visualOrbitRadius,o=r*t.visualOrbitSpeed,s=Math.cos(o)*t.visualOrbitRadius,l=Math.sin(o)*t.visualOrbitRadius;h.current=new f.Vector3(i+s,0,a+l);break}}}}if(h.current&&p.current&&null!==b.current)if(p.current.target.distanceTo(h.current)>.01*b.current)if(p.current.target.lerp(h.current,.05),v.current)g.position.lerp(eV,.05);else{let e=new f.Vector3().subVectors(g.position,h.current).normalize(),t=new f.Vector3().copy(h.current).add(e.multiplyScalar(b.current));g.position.lerp(t,.05)}else v.current&&(h.current=null,b.current=null,S.current=null,y.current=!1,v.current=!1,c?.())}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(eI,{}),(0,a.jsx)(I,{onClick:()=>{S.current="sun",y.current=!0,b.current=Math.max(.55808,.01),l?.("sun")}}),M.map(i=>(0,a.jsxs)("group",{children:[t&&(0,a.jsx)(eN,{radius:i.visualOrbitRadius,color:i.color}),(0,a.jsx)(er,{data:i,timeScale:e,showLabels:r,showMoons:n,onClick:_})]},i.name)),(0,a.jsx)(E,{ref:p,enablePan:!0,enableZoom:!0,enableRotate:!0,minDistance:.001,maxDistance:2e3,autoRotate:!1,enableDamping:!0,dampingFactor:.05,zoomSpeed:1,panSpeed:1,rotateSpeed:.8,onStart:()=>{y.current=!1,S.current=null,h.current=null,b.current=null}})]})}function eY(e){let t,r,n,i,s,l,c,u,d,m,f,p,h,b,v,y,g,x,S,w,E,O,j,P,M,_,A=(0,o.c)(59),{timeScale:R,showOrbits:N,showLabels:C,showMoons:T,simulationDate:D,onTimeScaleChange:z,onToggleOrbits:I,onToggleLabels:U,onToggleMoons:k,onResetCamera:F,onSelectTarget:V}=e;if(A[0]!==D){let e,r,n,i,a;e=D.getFullYear(),r=String(D.getMonth()+1).padStart(2,"0"),n=String(D.getDate()).padStart(2,"0"),i=String(D.getHours()).padStart(2,"0"),a=String(D.getMinutes()).padStart(2,"0"),t=`${e}-${r}-${n} ${i}:${a}`,A[0]=D,A[1]=t}else t=A[1];A[2]!==t?(r=(0,a.jsx)("div",{className:"text-lg font-mono font-bold text-blue-300",children:t}),A[2]=t,A[3]=r):r=A[3],A[4]===Symbol.for("react.memo_cache_sentinel")?(n=(0,a.jsx)("div",{className:"text-xs text-gray-500",children:"Simulation Date"}),A[4]=n):n=A[4],A[5]!==r?(i=(0,a.jsxs)("div",{className:"text-center mb-3 pb-3 border-b border-gray-700",children:[r,n]}),A[5]=r,A[6]=i):i=A[6],A[7]!==R?(s=R.toFixed(1),A[7]=R,A[8]=s):s=A[8],A[9]!==s?(l=(0,a.jsxs)("label",{className:"text-xs text-gray-400 block mb-1",children:["Time Scale: ",s,"x"]}),A[9]=s,A[10]=l):l=A[10],A[11]!==z?(c=e=>z(parseFloat(e.target.value)),A[11]=z,A[12]=c):c=A[12],A[13]!==c||A[14]!==R?(u=(0,a.jsx)("input",{type:"range",min:"0.1",max:"60",step:"0.1",value:R,onChange:c,className:"w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"}),A[13]=c,A[14]=R,A[15]=u):u=A[15];let H=60/R;A[16]!==H?(d=H.toFixed(1),A[16]=H,A[17]=d):d=A[17],A[18]!==d?(m=(0,a.jsxs)("div",{className:"text-xs text-gray-500 mt-1",children:["1 Earth day = ",d,"s"]}),A[18]=d,A[19]=m):m=A[19],A[20]!==m||A[21]!==l||A[22]!==u?(f=(0,a.jsxs)("div",{children:[l,u,m]}),A[20]=m,A[21]=l,A[22]=u,A[23]=f):f=A[23];let B=`px-3 py-1 rounded text-xs transition-colors ${N?"bg-blue-600 text-white":"bg-gray-700 text-gray-400"}`;A[24]!==I||A[25]!==B?(p=(0,a.jsx)("button",{onClick:I,className:B,children:"Orbits"}),A[24]=I,A[25]=B,A[26]=p):p=A[26];let Y=`px-3 py-1 rounded text-xs transition-colors ${C?"bg-blue-600 text-white":"bg-gray-700 text-gray-400"}`;A[27]!==U||A[28]!==Y?(h=(0,a.jsx)("button",{onClick:U,className:Y,children:"Labels"}),A[27]=U,A[28]=Y,A[29]=h):h=A[29];let K=`px-3 py-1 rounded text-xs transition-colors ${T?"bg-blue-600 text-white":"bg-gray-700 text-gray-400"}`;return A[30]!==k||A[31]!==K?(b=(0,a.jsx)("button",{onClick:k,className:K,children:"Moons"}),A[30]=k,A[31]=K,A[32]=b):b=A[32],A[33]!==F?(v=(0,a.jsx)("button",{onClick:F,className:"px-3 py-1 rounded text-xs transition-colors bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white",children:"Home"}),A[33]=F,A[34]=v):v=A[34],A[35]!==p||A[36]!==h||A[37]!==b||A[38]!==v?(y=(0,a.jsxs)("div",{className:"flex gap-2 flex-wrap",children:[p,h,b,v]}),A[35]=p,A[36]=h,A[37]=b,A[38]=v,A[39]=y):y=A[39],A[40]===Symbol.for("react.memo_cache_sentinel")?(g=(0,a.jsx)("label",{className:"text-xs text-gray-400 block mb-1",children:"Go to"}),A[40]=g):g=A[40],A[41]!==V?(x=e=>{e.target.value&&(V(e.target.value),e.target.value="")},A[41]=V,A[42]=x):x=A[42],A[43]===Symbol.for("react.memo_cache_sentinel")?(S=(0,a.jsx)("option",{value:"",disabled:!0,children:"Select..."}),w=(0,a.jsx)("option",{value:"sun",children:"Sun"}),A[43]=S,A[44]=w):(S=A[43],w=A[44]),A[45]===Symbol.for("react.memo_cache_sentinel")?(E=(0,a.jsx)("optgroup",{label:"Planets",children:L.map(eW)}),A[45]=E):E=A[45],A[46]!==T?(O=T&&(0,a.jsx)("optgroup",{label:"Moons",children:L.flatMap(eK)}),A[46]=T,A[47]=O):O=A[47],A[48]!==x||A[49]!==O?(j=(0,a.jsxs)("div",{children:[g,(0,a.jsxs)("select",{onChange:x,className:"w-full bg-gray-700 text-white text-sm px-2 py-1.5 rounded border border-gray-600 focus:border-blue-500 focus:outline-none",defaultValue:"",children:[S,w,E,O]})]}),A[48]=x,A[49]=O,A[50]=j):j=A[50],A[51]!==f||A[52]!==y||A[53]!==j?(P=(0,a.jsxs)("div",{className:"space-y-3",children:[f,y,j]}),A[51]=f,A[52]=y,A[53]=j,A[54]=P):P=A[54],A[55]===Symbol.for("react.memo_cache_sentinel")?(M=(0,a.jsx)("p",{className:"text-xs text-gray-500 mt-3",children:"Drag: Rotate | Scroll: Zoom"}),A[55]=M):M=A[55],A[56]!==P||A[57]!==i?(_=(0,a.jsxs)("div",{className:"absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg z-10",children:[i,P,M]}),A[56]=P,A[57]=i,A[58]=_):_=A[58],_}function eK(e){return e.moons?.map(t=>(0,a.jsxs)("option",{value:t.name,children:[t.displayName," (",e.displayName,")"]},t.name))??[]}function eW(e){return(0,a.jsx)("option",{value:e.name,children:e.displayName},e.name)}function e$(e){let t,r,n,i,s,l,c,u,d,m,f,p,h,b,v,y,g,x,S,w,E=(0,o.c)(52),{body:O,onClose:j}=e;E[0]!==O.color?(t={color:O.color},E[0]=O.color,E[1]=t):t=E[1],E[2]!==O.displayName||E[3]!==t?(r=(0,a.jsx)("h2",{className:"text-xl font-bold",style:t,children:O.displayName}),E[2]=O.displayName,E[3]=t,E[4]=r):r=E[4],E[5]!==j?(n=(0,a.jsx)("button",{onClick:j,className:"text-gray-400 hover:text-white transition-colors",children:"X"}),E[5]=j,E[6]=n):n=E[6],E[7]!==r||E[8]!==n?(i=(0,a.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[r,n]}),E[7]=r,E[8]=n,E[9]=i):i=E[9],E[10]!==O.name||E[11]!==O.parentPlanet||E[12]!==O.type?(s="sun"===O.type?"STAR":"moon"===O.type?`Moon of ${O.parentPlanet}`:O.name.toUpperCase(),E[10]=O.name,E[11]=O.parentPlanet,E[12]=O.type,E[13]=s):s=E[13],E[14]!==s?(l=(0,a.jsx)("p",{className:"text-sm text-gray-300 mb-3",children:s}),E[14]=s,E[15]=l):l=E[15],E[16]!==O.description?(c=(0,a.jsx)("p",{className:"text-sm mb-4",children:O.description}),E[16]=O.description,E[17]=c):c=E[17],E[18]===Symbol.for("react.memo_cache_sentinel")?(u=(0,a.jsx)("div",{className:"text-gray-400",children:"Radius"}),E[18]=u):u=E[18],E[19]!==O.radiusKm?(d=O.radiusKm.toLocaleString(),E[19]=O.radiusKm,E[20]=d):d=E[20],E[21]!==d?(m=(0,a.jsxs)("div",{className:"bg-white/10 p-2 rounded",children:[u,(0,a.jsxs)("div",{className:"font-medium",children:[d," km"]})]}),E[21]=d,E[22]=m):m=E[22];let P="sun"===O.type?"Position":"moon"===O.type?"Distance from Planet":"Distance from Sun";return E[23]!==P?(f=(0,a.jsx)("div",{className:"text-gray-400",children:P}),E[23]=P,E[24]=f):f=E[24],E[25]!==O.orbitInfo?(p=(0,a.jsx)("div",{className:"font-medium",children:O.orbitInfo}),E[25]=O.orbitInfo,E[26]=p):p=E[26],E[27]!==f||E[28]!==p?(h=(0,a.jsxs)("div",{className:"bg-white/10 p-2 rounded",children:[f,p]}),E[27]=f,E[28]=p,E[29]=h):h=E[29],E[30]!==O.orbitalPeriod||E[31]!==O.type?(b="sun"!==O.type&&(0,a.jsxs)("div",{className:"bg-white/10 p-2 rounded",children:[(0,a.jsx)("div",{className:"text-gray-400",children:"Orbital Period"}),(0,a.jsx)("div",{className:"font-medium",children:O.orbitalPeriod})]}),E[30]=O.orbitalPeriod,E[31]=O.type,E[32]=b):b=E[32],E[33]!==O.rotationPeriod?(v=O.rotationPeriod&&(0,a.jsxs)("div",{className:"bg-white/10 p-2 rounded",children:[(0,a.jsx)("div",{className:"text-gray-400",children:"Rotation Period"}),(0,a.jsx)("div",{className:"font-medium",children:O.rotationPeriod})]}),E[33]=O.rotationPeriod,E[34]=v):v=E[34],E[35]!==O.hasRings?(y=O.hasRings&&(0,a.jsxs)("div",{className:"bg-white/10 p-2 rounded",children:[(0,a.jsx)("div",{className:"text-gray-400",children:"Features"}),(0,a.jsx)("div",{className:"font-medium",children:"Has Rings"})]}),E[35]=O.hasRings,E[36]=y):y=E[36],E[37]!==O.moons?(g=O.moons&&O.moons.length>0&&(0,a.jsxs)("div",{className:"bg-white/10 p-2 rounded",children:[(0,a.jsxs)("div",{className:"text-gray-400",children:["Moons (",O.moons.length,")"]}),(0,a.jsx)("div",{className:"font-medium",children:O.moons.map(eG).join(", ")})]}),E[37]=O.moons,E[38]=g):g=E[38],E[39]!==m||E[40]!==h||E[41]!==b||E[42]!==v||E[43]!==y||E[44]!==g?(x=(0,a.jsxs)("div",{className:"space-y-2 text-xs",children:[m,h,b,v,y,g]}),E[39]=m,E[40]=h,E[41]=b,E[42]=v,E[43]=y,E[44]=g,E[45]=x):x=E[45],E[46]===Symbol.for("react.memo_cache_sentinel")?(S=(0,a.jsx)("p",{className:"text-[10px] text-gray-500 mt-3",children:"Data source: NASA Planetary Fact Sheet"}),E[46]=S):S=E[46],E[47]!==x||E[48]!==i||E[49]!==l||E[50]!==c?(w=(0,a.jsxs)("div",{className:"absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg max-w-sm z-10",children:[i,l,c,x,S]}),E[47]=x,E[48]=i,E[49]=l,E[50]=c,E[51]=w):w=E[51],w}function eG(e){return e.displayName}let eX={focusedPlanet:null,timeScale:1,showOrbits:!0,showLabels:!1,showMoons:!0};function eZ(e){return{...e,showMoons:!e.showMoons}}function eq(e){return{...e,showLabels:!e.showLabels}}function eQ(e){return{...e,showOrbits:!e.showOrbits}}function eJ(){let e,t,r,n,i,l,u,d,m,f=(0,o.c)(31),[p,h]=(0,s.useState)(!1),[b,v]=(0,s.useState)(null),{timeScale:y,showOrbits:g,showLabels:x,showMoons:S,simulationDate:w,setTimeScale:E,toggleOrbits:O,toggleLabels:j,toggleMoons:P,setFocusedPlanet:M,getFocusedBodyData:_}=function(){let e,t,r,n,i,a,l,c,u,d,m,f,p=(0,o.c)(19),[h,b]=(0,s.useState)(eX);p[0]===Symbol.for("react.memo_cache_sentinel")?(e=new Date,p[0]=e):e=p[0];let[v,y]=(0,s.useState)(e);p[1]===Symbol.for("react.memo_cache_sentinel")?(t=Date.now(),p[1]=t):t=p[1];let g=(0,s.useRef)(t);p[2]===Symbol.for("react.memo_cache_sentinel")?(r=new Date,p[2]=r):r=p[2];let x=(0,s.useRef)(r);p[3]!==h.timeScale?(n=()=>{let e=setInterval(()=>{let e=(Date.now()-g.current)/1e3*h.timeScale/R.DAY_IN_SECONDS;y(new Date(x.current.getTime()+24*e*36e5))},100);return()=>clearInterval(e)},i=[h.timeScale],p[3]=h.timeScale,p[4]=n,p[5]=i):(n=p[4],i=p[5]),(0,s.useEffect)(n,i),p[6]===Symbol.for("react.memo_cache_sentinel")?(a=e=>{b(t=>({...t,focusedPlanet:e}))},p[6]=a):a=p[6];let S=a;p[7]!==v?(l=e=>{x.current=v,g.current=Date.now(),b(t=>({...t,timeScale:e}))},p[7]=v,p[8]=l):l=p[8];let w=l;p[9]===Symbol.for("react.memo_cache_sentinel")?(c=()=>{b(eQ)},p[9]=c):c=p[9];let E=c;p[10]===Symbol.for("react.memo_cache_sentinel")?(u=()=>{b(eq)},p[10]=u):u=p[10];let O=u;p[11]===Symbol.for("react.memo_cache_sentinel")?(d=()=>{b(eZ)},p[11]=d):d=p[11];let j=d;p[12]!==h.focusedPlanet?(m=()=>{if(!h.focusedPlanet)return null;if("sun"===h.focusedPlanet)return{name:"sun",displayName:"Sun",type:"sun",color:N,description:"The star at the center of our Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core.",radiusKm:696340,orbitInfo:"Center of the Solar System",orbitalPeriod:"N/A",rotationPeriod:"25.4 days (equator)"};let e=L.find(e=>e.name===h.focusedPlanet);if(e){var t;let r;return{name:e.name,displayName:e.displayName,type:"planet",color:e.color,description:e.description,radiusKm:6371*e.realRadiusEarth,orbitInfo:(r=149597870.7*(t=e.realOrbitAU))>=1e9?`${t.toFixed(3)} AU (${(r/1e9).toFixed(1)} billion km)`:`${t.toFixed(3)} AU (${(r/1e6).toFixed(1)} million km)`,orbitalPeriod:function(e){if(e<1){let t=Math.round(365.25*e);return`${t} Earth days`}return`${e.toFixed(2)} Earth years`}(e.realOrbitalPeriodYears),rotationPeriod:function(e){let t=Math.abs(e),r=e<0?" (retrograde)":"";if(t<24)return`${t.toFixed(1)} hours${r}`;let n=t/24;return`${n.toFixed(1)} Earth days${r}`}(e.realRotationHours),hasRings:e.hasRings,moons:e.moons}}for(let e of L){let t=e.moons?.find(e=>e.name===h.focusedPlanet);if(t)return{name:t.name,displayName:t.displayName,type:"moon",color:t.color,description:t.description,radiusKm:t.realRadiusKm,orbitInfo:`${t.realOrbitKm.toLocaleString()} km from ${e.displayName}`,orbitalPeriod:function(e){let t=Math.abs(e),r=e<0?" (retrograde)":"";return t<1?`${(24*t).toFixed(1)} hours${r}`:`${t.toFixed(1)} days${r}`}(t.realOrbitalPeriodDays),parentPlanet:e.displayName}}return null},p[12]=h.focusedPlanet,p[13]=m):m=p[13];let P=m;return p[14]!==P||p[15]!==w||p[16]!==v||p[17]!==h?(f={...h,simulationDate:v,setFocusedPlanet:S,setTimeScale:w,toggleOrbits:E,toggleLabels:O,toggleMoons:j,getFocusedBodyData:P},p[14]=P,p[15]=w,p[16]=v,p[17]=h,p[18]=f):f=p[18],f}();f[0]!==_?(e=_(),f[0]=_,f[1]=e):e=f[1];let A=e;return f[2]===Symbol.for("react.memo_cache_sentinel")?(t=(0,a.jsxs)("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-10 text-center",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-white/90",children:"Solar System Explorer"}),(0,a.jsx)("p",{className:"text-sm text-white/50",children:"Interactive 3D Space Simulation"})]}),f[2]=t):t=f[2],f[3]===Symbol.for("react.memo_cache_sentinel")?(r=()=>h(!1),n=()=>v(null),f[3]=r,f[4]=n):(r=f[3],n=f[4]),f[5]!==b||f[6]!==p||f[7]!==M||f[8]!==x||f[9]!==S||f[10]!==g||f[11]!==y?(i=(0,a.jsx)(c,{className:"absolute inset-0",children:(0,a.jsx)(eB,{timeScale:y,showOrbits:g,showLabels:x,showMoons:S,resetCamera:p,focusTarget:b,onPlanetClick:M,onResetComplete:r,onFocusComplete:n})}),f[5]=b,f[6]=p,f[7]=M,f[8]=x,f[9]=S,f[10]=g,f[11]=y,f[12]=i):i=f[12],f[13]===Symbol.for("react.memo_cache_sentinel")?(l=()=>h(!0),f[13]=l):l=f[13],f[14]!==E||f[15]!==x||f[16]!==S||f[17]!==g||f[18]!==w||f[19]!==y||f[20]!==j||f[21]!==P||f[22]!==O?(u=(0,a.jsx)(eY,{timeScale:y,showOrbits:g,showLabels:x,showMoons:S,simulationDate:w,onTimeScaleChange:E,onToggleOrbits:O,onToggleLabels:j,onToggleMoons:P,onResetCamera:l,onSelectTarget:v}),f[14]=E,f[15]=x,f[16]=S,f[17]=g,f[18]=w,f[19]=y,f[20]=j,f[21]=P,f[22]=O,f[23]=u):u=f[23],f[24]!==A||f[25]!==M?(d=A&&(0,a.jsx)(e$,{body:A,onClose:()=>M(null)}),f[24]=A,f[25]=M,f[26]=d):d=f[26],f[27]!==i||f[28]!==u||f[29]!==d?(m=(0,a.jsxs)("div",{className:"relative w-full h-screen bg-black",children:[t,i,u,d]}),f[27]=i,f[28]=u,f[29]=d,f[30]=m):m=f[30],m}e.s(["default",()=>eJ],52683)}]);