(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[16],{94:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(67),o=function(e,t){void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new a.Kb,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:a.N.ROTATE,MIDDLE:a.N.DOLLY,RIGHT:a.N.PAN},this.touches={ONE:a.Bb.ROTATE,TWO:a.Bb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.listenToKeyEvents=function(e){e.addEventListener("keydown",B),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),c=s.NONE},this.update=function(){var t=new a.Kb,r=(new a.lb).setFromUnitVectors(e.up,new a.Kb(0,1,0)),i=r.clone().invert(),b=new a.Kb,f=new a.lb,E=2*Math.PI;return function(){var e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(r),l.setFromVector3(t),n.autoRotate&&c===s.NONE&&L(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(l.theta+=m.theta*n.dampingFactor,l.phi+=m.phi*n.dampingFactor):(l.theta+=m.theta,l.phi+=m.phi);var a=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(a)&&isFinite(g)&&(a<-Math.PI?a+=E:a>Math.PI&&(a-=E),g<-Math.PI?g+=E:g>Math.PI&&(g-=E),l.theta=a<=g?Math.max(a,Math.min(g,l.theta)):l.theta>(a+g)/2?Math.max(a,l.theta):Math.min(g,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=p,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),!0===n.enableDamping?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),t.setFromSpherical(l),t.applyQuaternion(i),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(m.theta*=1-n.dampingFactor,m.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(m.set(0,0,0),h.set(0,0,0)),p=1,!!(d||b.distanceToSquared(n.object.position)>u||8*(1-f.dot(n.object.quaternion))>u)&&(n.dispatchEvent(o),b.copy(n.object.position),f.copy(n.object.quaternion),d=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",_),n.domElement.removeEventListener("wheel",z),n.domElement.removeEventListener("touchstart",Z),n.domElement.removeEventListener("touchend",G),n.domElement.removeEventListener("touchmove",K),n.domElement.ownerDocument.removeEventListener("pointermove",U),n.domElement.ownerDocument.removeEventListener("pointerup",X),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",B)};var n=this,o={type:"change"},r={type:"start"},i={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},c=s.NONE,u=1e-6,l=new a.yb,m=new a.yb,p=1,h=new a.Kb,d=!1,b=new a.Jb,f=new a.Jb,E=new a.Jb,g=new a.Jb,v=new a.Jb,y=new a.Jb,O=new a.Jb,T=new a.Jb,w=new a.Jb;function A(){return Math.pow(.95,n.zoomSpeed)}function L(e){m.theta-=e}function P(e){m.phi-=e}var N=function(){var e=new a.Kb;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),h.add(e)}}(),R=function(){var e=new a.Kb;return function(t,a){!0===n.screenSpacePanning?e.setFromMatrixColumn(a,1):(e.setFromMatrixColumn(a,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),h.add(e)}}(),k=function(){var e=new a.Kb;return function(t,a){var o=n.domElement;if(n.object.isPerspectiveCamera){var r=n.object.position;e.copy(r).sub(n.target);var i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),N(2*t*i/o.clientHeight,n.object.matrix),R(2*a*i/o.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(t*(n.object.right-n.object.left)/n.object.zoom/o.clientWidth,n.object.matrix),R(a*(n.object.top-n.object.bottom)/n.object.zoom/o.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(e){n.object.isPerspectiveCamera?p/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function M(e){n.object.isPerspectiveCamera?p*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(e){b.set(e.clientX,e.clientY)}function D(e){g.set(e.clientX,e.clientY)}function x(e){if(1==e.touches.length)b.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);b.set(t,n)}}function H(e){if(1==e.touches.length)g.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(t,n)}}function S(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);O.set(0,a)}function F(e){if(1==e.touches.length)f.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),a=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(t,a)}E.subVectors(f,b).multiplyScalar(n.rotateSpeed);var o=n.domElement;L(2*Math.PI*E.x/o.clientHeight),P(2*Math.PI*E.y/o.clientHeight),b.copy(f)}function C(e){if(1==e.touches.length)v.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),a=.5*(e.touches[0].pageY+e.touches[1].pageY);v.set(t,a)}y.subVectors(v,g).multiplyScalar(n.panSpeed),k(y.x,y.y),g.copy(v)}function I(e){var t=e.touches[0].pageX-e.touches[1].pageX,a=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+a*a);T.set(0,o),w.set(0,Math.pow(T.y/O.y,n.zoomSpeed)),j(w.y),O.copy(T)}function _(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){var t;switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case a.N.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY)}(e),c=s.DOLLY;break;case a.N.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;D(e),c=s.PAN}else{if(!1===n.enableRotate)return;Y(e),c=s.ROTATE}break;case a.N.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;Y(e),c=s.ROTATE}else{if(!1===n.enablePan)return;D(e),c=s.PAN}break;default:c=s.NONE}c!==s.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",U),n.domElement.ownerDocument.addEventListener("pointerup",X),n.dispatchEvent(r))}(e)}}function U(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===n.enabled)return;switch(e.preventDefault(),c){case s.ROTATE:if(!1===n.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),E.subVectors(f,b).multiplyScalar(n.rotateSpeed);var t=n.domElement;L(2*Math.PI*E.x/t.clientHeight),P(2*Math.PI*E.y/t.clientHeight),b.copy(f),n.update()}(e);break;case s.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY),w.subVectors(T,O),w.y>0?j(A()):w.y<0&&M(A()),O.copy(T),n.update()}(e);break;case s.PAN:if(!1===n.enablePan)return;!function(e){v.set(e.clientX,e.clientY),y.subVectors(v,g).multiplyScalar(n.panSpeed),k(y.x,y.y),g.copy(v),n.update()}(e)}}(e)}}function X(e){switch(e.pointerType){case"mouse":case"pen":!function(e){if(n.domElement.ownerDocument.removeEventListener("pointermove",U),n.domElement.ownerDocument.removeEventListener("pointerup",X),!1===n.enabled)return;n.dispatchEvent(i),c=s.NONE}()}}function z(e){!1===n.enabled||!1===n.enableZoom||c!==s.NONE&&c!==s.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(r),function(e){e.deltaY<0?M(A()):e.deltaY>0&&j(A()),n.update()}(e),n.dispatchEvent(i))}function B(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){var t=!1;switch(e.keyCode){case n.keys.UP:k(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function Z(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case a.Bb.ROTATE:if(!1===n.enableRotate)return;x(e),c=s.TOUCH_ROTATE;break;case a.Bb.PAN:if(!1===n.enablePan)return;H(e),c=s.TOUCH_PAN;break;default:c=s.NONE}break;case 2:switch(n.touches.TWO){case a.Bb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&S(e),n.enablePan&&H(e)}(e),c=s.TOUCH_DOLLY_PAN;break;case a.Bb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&S(e),n.enableRotate&&x(e)}(e),c=s.TOUCH_DOLLY_ROTATE;break;default:c=s.NONE}break;default:c=s.NONE}c!==s.NONE&&n.dispatchEvent(r)}}function K(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),c){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;F(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;C(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&I(e),n.enablePan&&C(e)}(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&I(e),n.enableRotate&&F(e)}(e),n.update();break;default:c=s.NONE}}function G(e){!1!==n.enabled&&(n.dispatchEvent(i),c=s.NONE)}function J(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",_),n.domElement.addEventListener("wheel",z),n.domElement.addEventListener("touchstart",Z),n.domElement.addEventListener("touchend",G),n.domElement.addEventListener("touchmove",K),this.update()};o.prototype=Object.create(a.q.prototype),o.prototype.constructor=o;var r=function(e,t){o.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=a.N.PAN,this.mouseButtons.RIGHT=a.N.ROTATE,this.touches.ONE=a.Bb.PAN,this.touches.TWO=a.Bb.DOLLY_ROTATE};(r.prototype=Object.create(a.q.prototype)).constructor=r},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(67),o=function(e){a.m.call(this,e),this.type=a.Ib};o.prototype=Object.assign(Object.create(a.m.prototype),{constructor:o,parse:function(e){var t=function(e,t){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(t||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(t||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(t||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(t||""))}return-1},n=function(e,t,n){t=t||1024;for(var a=e.pos,o=-1,r=0,i="",s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));0>(o=s.indexOf("\n"))&&r<t&&a<e.byteLength;)i+=s,r+=s.length,a+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));return-1<o&&(!1!==n&&(e.pos+=r+o+1),i+s.slice(0,o))},o=function(e,t,n,a){var o=e[t+3],r=Math.pow(2,o-128)/255;n[a+0]=e[t+0]*r,n[a+1]=e[t+1]*r,n[a+2]=e[t+2]*r},r=function(e,t,n,o){var r=e[t+3],i=Math.pow(2,r-128)/255;n[o+0]=a.n.toHalfFloat(e[t+0]*i),n[o+1]=a.n.toHalfFloat(e[t+1]*i),n[o+2]=a.n.toHalfFloat(e[t+2]*i)},i=new Uint8Array(e);i.pos=0;var s=function(e){var a,o,r=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,c=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,u={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};if(e.pos>=e.byteLength||!(a=n(e)))return t(1,"no header found");if(!(o=a.match(/^#\?(\S+)/)))return t(3,"bad initial token");for(u.valid|=1,u.programtype=o[1],u.string+=a+"\n";!1!==(a=n(e));)if(u.string+=a+"\n","#"!==a.charAt(0)){if((o=a.match(r))&&(u.gamma=parseFloat(o[1],10)),(o=a.match(i))&&(u.exposure=parseFloat(o[1],10)),(o=a.match(s))&&(u.valid|=2,u.format=o[1]),(o=a.match(c))&&(u.valid|=4,u.height=parseInt(o[1],10),u.width=parseInt(o[2],10)),2&u.valid&&4&u.valid)break}else u.comments+=a+"\n";return 2&u.valid?4&u.valid?u:t(3,"missing image size specifier"):t(3,"missing format specifier")}(i);if(-1!==s){var c=s.width,u=s.height,l=function(e,n,a){var o,r,i,s,c,u,l,m,p,h,d,b,f,E=n,g=a;if(E<8||E>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(E!==(e[2]<<8|e[3]))return t(3,"wrong scanline width");if(!(o=new Uint8Array(4*n*a)).length)return t(4,"unable to allocate buffer space");for(r=0,i=0,m=4*E,f=new Uint8Array(4),u=new Uint8Array(m);g>0&&i<e.byteLength;){if(i+4>e.byteLength)return t(1);if(f[0]=e[i++],f[1]=e[i++],f[2]=e[i++],f[3]=e[i++],2!=f[0]||2!=f[1]||(f[2]<<8|f[3])!=E)return t(3,"bad rgbe scanline format");for(l=0;l<m&&i<e.byteLength;){if((b=(s=e[i++])>128)&&(s-=128),0===s||l+s>m)return t(3,"bad scanline data");if(b)for(c=e[i++],p=0;p<s;p++)u[l++]=c;else u.set(e.subarray(i,i+s),l),l+=s,i+=s}for(h=E,p=0;p<h;p++)d=0,o[r]=u[p+d],d+=E,o[r+1]=u[p+d],d+=E,o[r+2]=u[p+d],d+=E,o[r+3]=u[p+d],r+=4;g--}return o}(i.subarray(i.pos),c,u);if(-1!==l){switch(this.type){case a.Ib:var m=l,p=a.ob,h=a.Ib;break;case a.s:for(var d=l.length/4*3,b=new Float32Array(d),f=0;f<d;f++)o(l,4*f,b,3*f);m=b,p=a.pb,h=a.s;break;case a.v:d=l.length/4*3;var E=new Uint16Array(d);for(f=0;f<d;f++)r(l,4*f,E,3*f);m=E,p=a.pb,h=a.v;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:c,height:u,data:m,header:s.string,gamma:s.gamma,exposure:s.exposure,format:p,type:h}}}return null},setDataType:function(e){return this.type=e,this},load:function(e,t,n,o){return a.m.prototype.load.call(this,e,(function(e,n){switch(e.type){case a.Ib:e.encoding=a.nb,e.minFilter=a.Y,e.magFilter=a.Y,e.generateMipmaps=!1,e.flipY=!0;break;case a.s:case a.v:e.encoding=a.G,e.minFilter=a.H,e.magFilter=a.H,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,n)}),n,o)}})}}]);
//# sourceMappingURL=16.a6cecf4f.chunk.js.map