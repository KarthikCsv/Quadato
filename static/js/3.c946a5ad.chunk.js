(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],{83:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var s=r(67),n=function(){function e(e){s.K.call(this,e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register((function(e){return new i(e)})),this.register((function(e){return new u(e)})),this.register((function(e){return new l(e)})),this.register((function(e){return new o(e)})),this.register((function(e){return new n(e)})),this.register((function(e){return new c(e)}))}function t(){var e={};return{get:function(t){return e[t]},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},removeAll:function(){e={}}}}e.prototype=Object.assign(Object.create(s.K.prototype),{constructor:e,load:function(e,t,r,n){var a,i=this;a=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:s.L.extractUrlBase(e),this.manager.itemStart(e);var o=function(t){n?n(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},u=new s.r(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,(function(r){try{i.parse(r,a,(function(r){t(r),i.manager.itemEnd(e)}),o)}catch(s){o(s)}}),r,o)},setDRACOLoader:function(e){return this.dracoLoader=e,this},setDDSLoader:function(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')},setKTX2Loader:function(e){return this.ktx2Loader=e,this},setMeshoptDecoder:function(e){return this.meshoptDecoder=e,this},register:function(e){return-1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this},unregister:function(e){return-1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this},parse:function(e,t,n,i){var o,u={},l={};if("string"===typeof e)o=e;else if(s.L.decodeText(new Uint8Array(e,0,4))===p){try{u[r.KHR_BINARY_GLTF]=new f(e)}catch(b){return void(i&&i(b))}o=u[r.KHR_BINARY_GLTF].content}else o=s.L.decodeText(new Uint8Array(e));var c=JSON.parse(o);if(void 0===c.asset||c.asset.version[0]<2)i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));else{var h=new V(c,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(var d=0;d<this.pluginCallbacks.length;d++){var g=this.pluginCallbacks[d](h);l[g.name]=g,u[g.name]=!0}if(c.extensionsUsed)for(d=0;d<c.extensionsUsed.length;++d){var x=c.extensionsUsed[d],R=c.extensionsRequired||[];switch(x){case r.KHR_MATERIALS_UNLIT:u[x]=new a;break;case r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:u[x]=new T;break;case r.KHR_DRACO_MESH_COMPRESSION:u[x]=new m(c,this.dracoLoader);break;case r.KHR_TEXTURE_TRANSFORM:u[x]=new v;break;case r.KHR_MESH_QUANTIZATION:u[x]=new y;break;default:R.indexOf(x)>=0&&void 0===l[x]&&console.warn('THREE.GLTFLoader: Unknown extension "'+x+'".')}}h.setExtensions(u),h.setPlugins(l),h.parse(n,i)}}});var r={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};function n(e){this.parser=e,this.name=r.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}function a(){this.name=r.KHR_MATERIALS_UNLIT}function i(e){this.parser=e,this.name=r.KHR_MATERIALS_CLEARCOAT}function o(e){this.parser=e,this.name=r.KHR_MATERIALS_TRANSMISSION}function u(e){this.parser=e,this.name=r.KHR_TEXTURE_BASISU}function l(e){this.parser=e,this.name=r.EXT_TEXTURE_WEBP,this.isSupported=null}function c(e){this.name=r.EXT_MESHOPT_COMPRESSION,this.parser=e}n.prototype._markDefs=function(){for(var e=this.parser,t=this.parser.json.nodes||[],r=0,s=t.length;r<s;r++){var n=t[r];n.extensions&&n.extensions[this.name]&&void 0!==n.extensions[this.name].light&&e._addNodeRef(this.cache,n.extensions[this.name].light)}},n.prototype._loadLight=function(e){var t=this.parser,r="light:"+e,n=t.cache.get(r);if(n)return n;var a,i=t.json,o=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],u=new s.l(16777215);void 0!==o.color&&u.fromArray(o.color);var l=void 0!==o.range?o.range:0;switch(o.type){case"directional":(a=new s.o(u)).target.position.set(0,0,-1),a.add(a.target);break;case"point":(a=new s.hb(u)).distance=l;break;case"spot":(a=new s.zb(u)).distance=l,o.spot=o.spot||{},o.spot.innerConeAngle=void 0!==o.spot.innerConeAngle?o.spot.innerConeAngle:0,o.spot.outerConeAngle=void 0!==o.spot.outerConeAngle?o.spot.outerConeAngle:Math.PI/4,a.angle=o.spot.outerConeAngle,a.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return a.position.set(0,0,0),a.decay=2,void 0!==o.intensity&&(a.intensity=o.intensity),a.name=t.createUniqueName(o.name||"light_"+e),n=Promise.resolve(a),t.cache.add(r,n),n},n.prototype.createNodeAttachment=function(e){var t=this,r=this.parser,s=r.json.nodes[e],n=(s.extensions&&s.extensions[this.name]||{}).light;return void 0===n?null:this._loadLight(n).then((function(e){return r._getNodeRef(t.cache,n,e)}))},a.prototype.getMaterialType=function(){return s.S},a.prototype.extendParams=function(e,t,r){var n=[];e.color=new s.l(1,1,1),e.opacity=1;var a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){var i=a.baseColorFactor;e.color.fromArray(i),e.opacity=i[3]}void 0!==a.baseColorTexture&&n.push(r.assignTexture(e,"map",a.baseColorTexture))}return Promise.all(n)},i.prototype.getMaterialType=function(e){var t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.V:null},i.prototype.extendMaterialParams=function(e,t){var r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();var a=[],i=n.extensions[this.name];if(void 0!==i.clearcoatFactor&&(t.clearcoat=i.clearcoatFactor),void 0!==i.clearcoatTexture&&a.push(r.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),void 0!==i.clearcoatRoughnessFactor&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),void 0!==i.clearcoatRoughnessTexture&&a.push(r.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),void 0!==i.clearcoatNormalTexture&&(a.push(r.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),void 0!==i.clearcoatNormalTexture.scale)){var o=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new s.Jb(o,-o)}return Promise.all(a)},o.prototype.getMaterialType=function(e){var t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.V:null},o.prototype.extendMaterialParams=function(e,t){var r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();var n=[],a=s.extensions[this.name];return void 0!==a.transmissionFactor&&(t.transmission=a.transmissionFactor),void 0!==a.transmissionTexture&&n.push(r.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(n)},u.prototype.loadTexture=function(e){var t=this.parser,r=t.json,s=r.textures[e];if(!s.extensions||!s.extensions[this.name])return null;var n=s.extensions[this.name],a=r.images[n.source],i=t.options.ktx2Loader;if(!i){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a,i)},l.prototype.loadTexture=function(e){var t=this.name,r=this.parser,s=r.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;var a=n.extensions[t],i=s.images[a.source],o=r.textureLoader;if(i.uri){var u=r.options.manager.getHandler(i.uri);null!==u&&(o=u)}return this.detectSupport().then((function(n){if(n)return r.loadTextureImage(e,i,o);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)}))},l.prototype.detectSupport=function(){return this.isSupported||(this.isSupported=new Promise((function(e){var t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(1===t.height)}}))),this.isSupported},c.prototype.loadBufferView=function(e){var t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){var s=r.extensions[this.name],n=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([n,a.ready]).then((function(e){var t=s.byteOffset||0,r=s.byteLength||0,n=s.count,i=s.byteStride,o=new ArrayBuffer(n*i),u=new Uint8Array(e[0],t,r);return a.decodeGltfBuffer(new Uint8Array(o),n,i,u,s.mode,s.filter),o}))}return null};var p="glTF",h=1313821514,d=5130562;function f(e){this.name=r.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,12);if(this.header={magic:s.L.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==p)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");for(var n=this.header.length-12,a=new DataView(e,12),i=0;i<n;){var o=a.getUint32(i,!0);i+=4;var u=a.getUint32(i,!0);if(i+=4,u===h){var l=new Uint8Array(e,12+i,o);this.content=s.L.decodeText(l)}else if(u===d){var c=12+i;this.body=e.slice(c,c+o)}i+=o}if(null===this.content)throw new Error("THREE.GLTFLoader: JSON content not found.")}function m(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=r.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}function v(){this.name=r.KHR_TEXTURE_TRANSFORM}function g(e){s.W.call(this),this.isGLTFSpecularGlossinessMaterial=!0;var t=["#ifdef USE_SPECULARMAP","\tuniform sampler2D specularMap;","#endif"].join("\n"),r=["#ifdef USE_GLOSSINESSMAP","\tuniform sampler2D glossinessMap;","#endif"].join("\n"),n=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),a=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),i=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join("\n"),o={specular:{value:(new s.l).setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(e){for(var s in o)e.uniforms[s]=o[s];e.fragmentShader=e.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",r).replace("#include <roughnessmap_fragment>",n).replace("#include <metalnessmap_fragment>",a).replace("#include <lights_physical_fragment>",i)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(e){o.specular.value=e}},specularMap:{get:function(){return o.specularMap.value},set:function(e){o.specularMap.value=e,e?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(e){o.glossiness.value=e}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(e){o.glossinessMap.value=e,e?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}function T(){return{name:r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return g},extendParams:function(e,t,r){var n=t.extensions[this.name];e.color=new s.l(1,1,1),e.opacity=1;var a=[];if(Array.isArray(n.diffuseFactor)){var i=n.diffuseFactor;e.color.fromArray(i),e.opacity=i[3]}if(void 0!==n.diffuseTexture&&a.push(r.assignTexture(e,"map",n.diffuseTexture)),e.emissive=new s.l(0,0,0),e.glossiness=void 0!==n.glossinessFactor?n.glossinessFactor:1,e.specular=new s.l(1,1,1),Array.isArray(n.specularFactor)&&e.specular.fromArray(n.specularFactor),void 0!==n.specularGlossinessTexture){var o=n.specularGlossinessTexture;a.push(r.assignTexture(e,"glossinessMap",o)),a.push(r.assignTexture(e,"specularMap",o))}return Promise.all(a)},createMaterial:function(e){var t=new g(e);return t.fog=!0,t.color=e.color,t.map=void 0===e.map?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=void 0===e.aoMap?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=void 0===e.emissiveMap?null:e.emissiveMap,t.bumpMap=void 0===e.bumpMap?null:e.bumpMap,t.bumpScale=1,t.normalMap=void 0===e.normalMap?null:e.normalMap,t.normalMapType=s.Cb,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=void 0===e.specularMap?null:e.specularMap,t.specular=e.specular,t.glossinessMap=void 0===e.glossinessMap?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=void 0===e.envMap?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}}function y(){this.name=r.KHR_MESH_QUANTIZATION}function x(e,t,r,n){s.z.call(this,e,t,r,n)}m.prototype.decodePrimitive=function(e,t){var r=this.json,s=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,i={},o={},u={};for(var l in a){var c=O[l]||l.toLowerCase();i[c]=a[l]}for(l in e.attributes){c=O[l]||l.toLowerCase();if(void 0!==a[l]){var p=r.accessors[e.attributes[l]],h=w[p.componentType];u[c]=h,o[c]=!0===p.normalized}}return t.getDependency("bufferView",n).then((function(e){return new Promise((function(t){s.decodeDracoFile(e,(function(e){for(var r in e.attributes){var s=e.attributes[r],n=o[r];void 0!==n&&(s.normalized=n)}t(e)}),i,u)}))}))},v.prototype.extendTexture=function(e,t){return e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.needsUpdate=!0,e},g.prototype=Object.create(s.W.prototype),g.prototype.constructor=g,g.prototype.copy=function(e){return s.W.prototype.copy.call(this,e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this},x.prototype=Object.create(s.z.prototype),x.prototype.constructor=x,x.prototype.copySampleValue_=function(e){for(var t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,n=e*s*3+s,a=0;a!==s;a++)t[a]=r[n+a];return t},x.prototype.beforeStart_=x.prototype.copySampleValue_,x.prototype.afterEnd_=x.prototype.copySampleValue_,x.prototype.interpolate_=function(e,t,r,s){for(var n=this.resultBuffer,a=this.sampleValues,i=this.valueSize,o=2*i,u=3*i,l=s-t,c=(r-t)/l,p=c*c,h=p*c,d=e*u,f=d-u,m=-2*h+3*p,v=h-p,g=1-m,T=v-p+c,y=0;y!==i;y++){var x=a[f+y+i],R=a[f+y+o]*l,b=a[d+y+i],M=a[d+y]*l;n[y]=g*x+T*R+m*b+v*M}return n};var R=0,b=1,M=2,S=3,A=4,E=5,_=6,w={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},L={9728:s.Y,9729:s.H,9984:s.ab,9985:s.J,9986:s.Z,9987:s.I},I={33071:s.j,33648:s.X,10497:s.rb},P={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},O={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},N={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},C={CUBICSPLINE:void 0,LINEAR:s.B,STEP:s.A},H="OPAQUE",U="MASK",F="BLEND";function k(e,t){return"string"!==typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}function D(e,t,r){for(var s in r.extensions)void 0===e[s]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=r.extensions[s])}function G(e,t){void 0!==t.extras&&("object"===typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function j(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(var r=0,s=t.weights.length;r<s;r++)e.morphTargetInfluences[r]=t.weights[r];if(t.extras&&Array.isArray(t.extras.targetNames)){var n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(r=0,s=n.length;r<s;r++)e.morphTargetDictionary[n[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function K(e){var t=e.extensions&&e.extensions[r.KHR_DRACO_MESH_COMPRESSION];return t?"draco:"+t.bufferView+":"+t.indices+":"+B(t.attributes):e.indices+":"+B(e.attributes)+":"+e.mode}function B(e){for(var t="",r=Object.keys(e).sort(),s=0,n=r.length;s<n;s++)t+=r[s]+":"+e[r[s]]+";";return t}function V(e,r){this.json=e||{},this.extensions={},this.plugins={},this.options=r||{},this.cache=new t,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.nodeNamesUsed={},"undefined"!==typeof createImageBitmap&&!1===/Firefox/.test(navigator.userAgent)?this.textureLoader=new s.w(this.options.manager):this.textureLoader=new s.Db(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new s.r(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}function X(e,t,r){var n=t.attributes,a=[];function i(t,s){return r.getDependency("accessor",t).then((function(t){e.setAttribute(s,t)}))}for(var o in n){var u=O[o]||o.toLowerCase();u in e.attributes||a.push(i(n[o],u))}if(void 0!==t.indices&&!e.index){var l=r.getDependency("accessor",t.indices).then((function(t){e.setIndex(t)}));a.push(l)}return G(e,t),function(e,t,r){var n=t.attributes,a=new s.f;if(void 0!==n.POSITION){var i=(d=r.json.accessors[n.POSITION]).min,o=d.max;if(void 0!==i&&void 0!==o){a.set(new s.Kb(i[0],i[1],i[2]),new s.Kb(o[0],o[1],o[2]));var u=t.targets;if(void 0!==u){for(var l=new s.Kb,c=new s.Kb,p=0,h=u.length;p<h;p++){var d,f=u[p];if(void 0!==f.POSITION)i=(d=r.json.accessors[f.POSITION]).min,o=d.max,void 0!==i&&void 0!==o?(c.setX(Math.max(Math.abs(i[0]),Math.abs(o[0]))),c.setY(Math.max(Math.abs(i[1]),Math.abs(o[1]))),c.setZ(Math.max(Math.abs(i[2]),Math.abs(o[2]))),l.max(c)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}a.expandByVector(l)}e.boundingBox=a;var m=new s.wb;a.getCenter(m.center),m.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=m}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}(e,t,r),Promise.all(a).then((function(){return void 0!==t.targets?function(e,t,r){for(var s=!1,n=!1,a=0,i=t.length;a<i&&(void 0!==(l=t[a]).POSITION&&(s=!0),void 0!==l.NORMAL&&(n=!0),!s||!n);a++);if(!s&&!n)return Promise.resolve(e);var o=[],u=[];for(a=0,i=t.length;a<i;a++){var l=t[a];if(s){var c=void 0!==l.POSITION?r.getDependency("accessor",l.POSITION):e.attributes.position;o.push(c)}n&&(c=void 0!==l.NORMAL?r.getDependency("accessor",l.NORMAL):e.attributes.normal,u.push(c))}return Promise.all([Promise.all(o),Promise.all(u)]).then((function(t){var r=t[0],a=t[1];return s&&(e.morphAttributes.position=r),n&&(e.morphAttributes.normal=a),e.morphTargetsRelative=!0,e}))}(e,t.targets,r):e}))}function q(e,t){var r=e.getIndex();if(null===r){var n=[],a=e.getAttribute("position");if(void 0===a)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(var i=0;i<a.count;i++)n.push(i);e.setIndex(n),r=e.getIndex()}var o=r.count-2,u=[];if(t===s.Eb)for(i=1;i<=o;i++)u.push(r.getX(0)),u.push(r.getX(i)),u.push(r.getX(i+1));else for(i=0;i<o;i++)i%2===0?(u.push(r.getX(i)),u.push(r.getX(i+1)),u.push(r.getX(i+2))):(u.push(r.getX(i+2)),u.push(r.getX(i+1)),u.push(r.getX(i)));u.length/3!==o&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var l=e.clone();return l.setIndex(u),l}return V.prototype.setExtensions=function(e){this.extensions=e},V.prototype.setPlugins=function(e){this.plugins=e},V.prototype.parse=function(e,t){var r=this,s=this.json,n=this.extensions;this.cache.removeAll(),this._invokeAll((function(e){return e._markDefs&&e._markDefs()})),Promise.all(this._invokeAll((function(e){return e.beforeRoot&&e.beforeRoot()}))).then((function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])})).then((function(t){var a={scene:t[0][s.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:s.asset,parser:r,userData:{}};D(n,a,s),G(a,s),Promise.all(r._invokeAll((function(e){return e.afterRoot&&e.afterRoot(a)}))).then((function(){e(a)}))})).catch(t)},V.prototype._markDefs=function(){for(var e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[],s=0,n=t.length;s<n;s++)for(var a=t[s].joints,i=0,o=a.length;i<o;i++)e[a[i]].isBone=!0;for(var u=0,l=e.length;u<l;u++){var c=e[u];void 0!==c.mesh&&(this._addNodeRef(this.meshCache,c.mesh),void 0!==c.skin&&(r[c.mesh].isSkinnedMesh=!0)),void 0!==c.camera&&this._addNodeRef(this.cameraCache,c.camera)}},V.prototype._addNodeRef=function(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)},V.prototype._getNodeRef=function(e,t,r){if(e.refs[t]<=1)return r;var s=r.clone();return s.name+="_instance_"+e.uses[t]++,s},V.prototype._invokeOne=function(e){var t=Object.values(this.plugins);t.push(this);for(var r=0;r<t.length;r++){var s=e(t[r]);if(s)return s}},V.prototype._invokeAll=function(e){var t=Object.values(this.plugins);t.unshift(this);for(var r=[],s=0;s<t.length;s++){var n=e(t[s]);n&&r.push(n)}return r},V.prototype.getDependency=function(e,t){var r=e+":"+t,s=this.cache.get(r);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne((function(e){return e.loadMesh&&e.loadMesh(t)}));break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne((function(e){return e.loadBufferView&&e.loadBufferView(t)}));break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne((function(e){return e.loadMaterial&&e.loadMaterial(t)}));break;case"texture":s=this._invokeOne((function(e){return e.loadTexture&&e.loadTexture(t)}));break;case"skin":s=this.loadSkin(t);break;case"animation":s=this.loadAnimation(t);break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(r,s)}return s},V.prototype.getDependencies=function(e){var t=this.cache.get(e);if(!t){var r=this,s=this.json[e+("mesh"===e?"es":"s")]||[];t=Promise.all(s.map((function(t,s){return r.getDependency(e,s)}))),this.cache.add(e,t)}return t},V.prototype.loadBuffer=function(e){var t=this.json.buffers[e],s=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[r.KHR_BINARY_GLTF].body);var n=this.options;return new Promise((function(e,r){s.load(k(t.uri,n.path),e,void 0,(function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))}))}))},V.prototype.loadBufferView=function(e){var t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then((function(e){var r=t.byteLength||0,s=t.byteOffset||0;return e.slice(s,s+r)}))},V.prototype.loadAccessor=function(e){var t=this,r=this.json,n=this.json.accessors[e];if(void 0===n.bufferView&&void 0===n.sparse)return Promise.resolve(null);var a=[];return void 0!==n.bufferView?a.push(this.getDependency("bufferView",n.bufferView)):a.push(null),void 0!==n.sparse&&(a.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(a).then((function(e){var a,i,o=e[0],u=P[n.type],l=w[n.componentType],c=l.BYTES_PER_ELEMENT,p=c*u,h=n.byteOffset||0,d=void 0!==n.bufferView?r.bufferViews[n.bufferView].byteStride:void 0,f=!0===n.normalized;if(d&&d!==p){var m=Math.floor(h/d),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count,g=t.cache.get(v);g||(a=new l(o,m*d,n.count*d/c),g=new s.x(a,d/c),t.cache.add(v,g)),i=new s.y(g,u,h%d/c,f)}else a=null===o?new l(n.count*u):new l(o,h,n.count*u),i=new s.g(a,u,f);if(void 0!==n.sparse){var T=P.SCALAR,y=w[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,R=n.sparse.values.byteOffset||0,b=new y(e[1],x,n.sparse.count*T),M=new l(e[2],R,n.sparse.count*u);null!==o&&(i=new s.g(i.array.slice(),i.itemSize,i.normalized));for(var S=0,A=b.length;S<A;S++){var E=b[S];if(i.setX(E,M[S*u]),u>=2&&i.setY(E,M[S*u+1]),u>=3&&i.setZ(E,M[S*u+2]),u>=4&&i.setW(E,M[S*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return i}))},V.prototype.loadTexture=function(e){var t=this.json,r=this.options,s=t.textures[e],n=t.images[s.source],a=this.textureLoader;if(n.uri){var i=r.manager.getHandler(n.uri);null!==i&&(a=i)}return this.loadTextureImage(e,n,a)},V.prototype.loadTextureImage=function(e,t,r){var n=this,a=this.json,i=this.options,o=a.textures[e],u=self.URL||self.webkitURL,l=t.uri,c=!1,p=!0;if("image/jpeg"===t.mimeType&&(p=!1),void 0!==t.bufferView)l=n.getDependency("bufferView",t.bufferView).then((function(e){if("image/png"===t.mimeType){var r=new DataView(e,25,1).getUint8(0,!1);p=6===r||4===r||3===r}c=!0;var s=new Blob([e],{type:t.mimeType});return l=u.createObjectURL(s)}));else if(void 0===t.uri)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");return Promise.resolve(l).then((function(e){return new Promise((function(t,n){var a=t;!0===r.isImageBitmapLoader&&(a=function(e){t(new s.i(e))}),r.load(k(e,i.path),a,void 0,n)}))})).then((function(t){!0===c&&u.revokeObjectURL(l),t.flipY=!1,o.name&&(t.name=o.name),p||(t.format=s.pb);var r=(a.samplers||{})[o.sampler]||{};return t.magFilter=L[r.magFilter]||s.H,t.minFilter=L[r.minFilter]||s.I,t.wrapS=I[r.wrapS]||s.rb,t.wrapT=I[r.wrapT]||s.rb,n.associations.set(t,{type:"textures",index:e}),t}))},V.prototype.assignTexture=function(e,t,s){var n=this;return this.getDependency("texture",s.index).then((function(a){if(void 0===s.texCoord||0==s.texCoord||"aoMap"===t&&1==s.texCoord||console.warn("THREE.GLTFLoader: Custom UV set "+s.texCoord+" for texture "+t+" not yet supported."),n.extensions[r.KHR_TEXTURE_TRANSFORM]){var i=void 0!==s.extensions?s.extensions[r.KHR_TEXTURE_TRANSFORM]:void 0;if(i){var o=n.associations.get(a);a=n.extensions[r.KHR_TEXTURE_TRANSFORM].extendTexture(a,i),n.associations.set(a,o)}}e[t]=a}))},V.prototype.assignFinalMaterial=function(e){var t=e.geometry,r=e.material,n=void 0!==t.attributes.tangent,a=void 0!==t.attributes.color,i=void 0===t.attributes.normal,o=!0===e.isSkinnedMesh,u=Object.keys(t.morphAttributes).length>0,l=u&&void 0!==t.morphAttributes.normal;if(e.isPoints){var c="PointsMaterial:"+r.uuid,p=this.cache.get(c);p||(p=new s.jb,s.O.prototype.copy.call(p,r),p.color.copy(r.color),p.map=r.map,p.sizeAttenuation=!1,this.cache.add(c,p)),r=p}else if(e.isLine){c="LineBasicMaterial:"+r.uuid;var h=this.cache.get(c);h||(h=new s.D,s.O.prototype.copy.call(h,r),h.color.copy(r.color),this.cache.add(c,h)),r=h}if(n||a||i||o||u){c="ClonedMaterial:"+r.uuid+":";r.isGLTFSpecularGlossinessMaterial&&(c+="specular-glossiness:"),o&&(c+="skinning:"),n&&(c+="vertex-tangents:"),a&&(c+="vertex-colors:"),i&&(c+="flat-shading:"),u&&(c+="morph-targets:"),l&&(c+="morph-normals:");var d=this.cache.get(c);d||(d=r.clone(),o&&(d.skinning=!0),a&&(d.vertexColors=!0),i&&(d.flatShading=!0),u&&(d.morphTargets=!0),l&&(d.morphNormals=!0),n&&(d.vertexTangents=!0,d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(c,d),this.associations.set(d,this.associations.get(r))),r=d}r.aoMap&&void 0===t.attributes.uv2&&void 0!==t.attributes.uv&&t.setAttribute("uv2",t.attributes.uv),e.material=r},V.prototype.getMaterialType=function(){return s.W},V.prototype.loadMaterial=function(e){var t,n=this,a=this.json,i=this.extensions,o=a.materials[e],u={},l=o.extensions||{},c=[];if(l[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var p=i[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];t=p.getMaterialType(),c.push(p.extendParams(u,o,n))}else if(l[r.KHR_MATERIALS_UNLIT]){var h=i[r.KHR_MATERIALS_UNLIT];t=h.getMaterialType(),c.push(h.extendParams(u,o,n))}else{var d=o.pbrMetallicRoughness||{};if(u.color=new s.l(1,1,1),u.opacity=1,Array.isArray(d.baseColorFactor)){var f=d.baseColorFactor;u.color.fromArray(f),u.opacity=f[3]}void 0!==d.baseColorTexture&&c.push(n.assignTexture(u,"map",d.baseColorTexture)),u.metalness=void 0!==d.metallicFactor?d.metallicFactor:1,u.roughness=void 0!==d.roughnessFactor?d.roughnessFactor:1,void 0!==d.metallicRoughnessTexture&&(c.push(n.assignTexture(u,"metalnessMap",d.metallicRoughnessTexture)),c.push(n.assignTexture(u,"roughnessMap",d.metallicRoughnessTexture))),t=this._invokeOne((function(t){return t.getMaterialType&&t.getMaterialType(e)})),c.push(Promise.all(this._invokeAll((function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,u)}))))}!0===o.doubleSided&&(u.side=s.p);var m=o.alphaMode||H;return m===F?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===U&&(u.alphaTest=void 0!==o.alphaCutoff?o.alphaCutoff:.5)),void 0!==o.normalTexture&&t!==s.S&&(c.push(n.assignTexture(u,"normalMap",o.normalTexture)),u.normalScale=new s.Jb(1,-1),void 0!==o.normalTexture.scale&&u.normalScale.set(o.normalTexture.scale,-o.normalTexture.scale)),void 0!==o.occlusionTexture&&t!==s.S&&(c.push(n.assignTexture(u,"aoMap",o.occlusionTexture)),void 0!==o.occlusionTexture.strength&&(u.aoMapIntensity=o.occlusionTexture.strength)),void 0!==o.emissiveFactor&&t!==s.S&&(u.emissive=(new s.l).fromArray(o.emissiveFactor)),void 0!==o.emissiveTexture&&t!==s.S&&c.push(n.assignTexture(u,"emissiveMap",o.emissiveTexture)),Promise.all(c).then((function(){var a;return a=t===g?i[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(u):new t(u),o.name&&(a.name=o.name),a.map&&(a.map.encoding=s.Pb),a.emissiveMap&&(a.emissiveMap.encoding=s.Pb),G(a,o),n.associations.set(a,{type:"materials",index:e}),o.extensions&&D(i,a,o),a}))},V.prototype.createUniqueName=function(e){for(var t=s.kb.sanitizeNodeName(e||""),r=t,n=1;this.nodeNamesUsed[r];++n)r=t+"_"+n;return this.nodeNamesUsed[r]=!0,r},V.prototype.loadGeometries=function(e){var t=this,n=this.extensions,a=this.primitiveCache;function i(e){return n[r.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then((function(r){return X(r,e,t)}))}for(var o=[],u=0,l=e.length;u<l;u++){var c,p=e[u],h=K(p),d=a[h];if(d)o.push(d.promise);else c=p.extensions&&p.extensions[r.KHR_DRACO_MESH_COMPRESSION]?i(p):X(new s.h,p,t),a[h]={primitive:p,promise:c},o.push(c)}return Promise.all(o)},V.prototype.loadMesh=function(e){for(var t,r=this,n=this.json,a=this.extensions,i=n.meshes[e],o=i.primitives,u=[],l=0,c=o.length;l<c;l++){var p=void 0===o[l].material?(void 0===(t=this.cache).DefaultMaterial&&(t.DefaultMaterial=new s.W({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:s.t})),t.DefaultMaterial):this.getDependency("material",o[l].material);u.push(p)}return u.push(r.loadGeometries(o)),Promise.all(u).then((function(t){for(var n=t.slice(0,t.length-1),u=t[t.length-1],l=[],c=0,p=u.length;c<p;c++){var h,d=u[c],f=o[c],m=n[c];if(f.mode===A||f.mode===E||f.mode===_||void 0===f.mode)!0!==(h=!0===i.isSkinnedMesh?new s.vb(d,m):new s.R(d,m)).isSkinnedMesh||h.geometry.attributes.skinWeight.normalized||h.normalizeSkinWeights(),f.mode===E?h.geometry=q(h.geometry,s.Fb):f.mode===_&&(h.geometry=q(h.geometry,s.Eb));else if(f.mode===b)h=new s.F(d,m);else if(f.mode===S)h=new s.C(d,m);else if(f.mode===M)h=new s.E(d,m);else{if(f.mode!==R)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);h=new s.ib(d,m)}Object.keys(h.geometry.morphAttributes).length>0&&j(h,i),h.name=r.createUniqueName(i.name||"mesh_"+e),G(h,i),f.extensions&&D(a,h,f),r.assignFinalMaterial(h),l.push(h)}if(1===l.length)return l[0];var v=new s.u;for(c=0,p=l.length;c<p;c++)v.add(l[c]);return v}))},V.prototype.loadCamera=function(e){var t,r=this.json.cameras[e],n=r[r.type];if(n)return"perspective"===r.type?t=new s.fb(s.P.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):"orthographic"===r.type&&(t=new s.db(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),G(t,r),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")},V.prototype.loadSkin=function(e){var t=this.json.skins[e],r={joints:t.joints};return void 0===t.inverseBindMatrices?Promise.resolve(r):this.getDependency("accessor",t.inverseBindMatrices).then((function(e){return r.inverseBindMatrices=e,r}))},V.prototype.loadAnimation=function(e){for(var t=this.json.animations[e],r=[],n=[],a=[],i=[],o=[],u=0,l=t.channels.length;u<l;u++){var c=t.channels[u],p=t.samplers[c.sampler],h=c.target,d=void 0!==h.node?h.node:h.id,f=void 0!==t.parameters?t.parameters[p.input]:p.input,m=void 0!==t.parameters?t.parameters[p.output]:p.output;r.push(this.getDependency("node",d)),n.push(this.getDependency("accessor",f)),a.push(this.getDependency("accessor",m)),i.push(p),o.push(h)}return Promise.all([Promise.all(r),Promise.all(n),Promise.all(a),Promise.all(i),Promise.all(o)]).then((function(r){for(var n=r[0],a=r[1],i=r[2],o=r[3],u=r[4],l=[],c=0,p=n.length;c<p;c++){var h=n[c],d=a[c],f=i[c],m=o[c],v=u[c];if(void 0!==h){var g;switch(h.updateMatrix(),h.matrixAutoUpdate=!0,N[v.path]){case N.weights:g=s.bb;break;case N.rotation:g=s.mb;break;case N.position:case N.scale:default:g=s.Lb}var T=h.name?h.name:h.uuid,y=void 0!==m.interpolation?C[m.interpolation]:s.B,R=[];N[v.path]===N.weights?h.traverse((function(e){!0===e.isMesh&&e.morphTargetInfluences&&R.push(e.name?e.name:e.uuid)})):R.push(T);var b=f.array;if(f.normalized){var M;if(b.constructor===Int8Array)M=1/127;else if(b.constructor===Uint8Array)M=1/255;else if(b.constructor==Int16Array)M=1/32767;else{if(b.constructor!==Uint16Array)throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");M=1/65535}for(var S=new Float32Array(b.length),A=0,E=b.length;A<E;A++)S[A]=b[A]*M;b=S}for(A=0,E=R.length;A<E;A++){var _=new g(R[A]+"."+N[v.path],d.array,b,y);"CUBICSPLINE"===m.interpolation&&(_.createInterpolant=function(e){return new x(this.times,this.values,this.getValueSize()/3,e)},_.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),l.push(_)}}}var w=t.name?t.name:"animation_"+e;return new s.c(w,void 0,l)}))},V.prototype.loadNode=function(e){var t=this.json,r=this.extensions,n=this,a=t.nodes[e],i=a.name?n.createUniqueName(a.name):"";return function(){var t=[];return void 0!==a.mesh&&t.push(n.getDependency("mesh",a.mesh).then((function(e){var t=n._getNodeRef(n.meshCache,a.mesh,e);return void 0!==a.weights&&t.traverse((function(e){if(e.isMesh)for(var t=0,r=a.weights.length;t<r;t++)e.morphTargetInfluences[t]=a.weights[t]})),t}))),void 0!==a.camera&&t.push(n.getDependency("camera",a.camera).then((function(e){return n._getNodeRef(n.cameraCache,a.camera,e)}))),n._invokeAll((function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)})).forEach((function(e){t.push(e)})),Promise.all(t)}().then((function(t){var o;if((o=!0===a.isBone?new s.e:t.length>1?new s.u:1===t.length?t[0]:new s.cb)!==t[0])for(var u=0,l=t.length;u<l;u++)o.add(t[u]);if(a.name&&(o.userData.name=a.name,o.name=i),G(o,a),a.extensions&&D(r,o,a),void 0!==a.matrix){var c=new s.Q;c.fromArray(a.matrix),o.applyMatrix4(c)}else void 0!==a.translation&&o.position.fromArray(a.translation),void 0!==a.rotation&&o.quaternion.fromArray(a.rotation),void 0!==a.scale&&o.scale.fromArray(a.scale);return n.associations.set(o,{type:"nodes",index:e}),o}))},V.prototype.loadScene=function(){function e(t,r,n,a){var i=n.nodes[t];return a.getDependency("node",t).then((function(e){return void 0===i.skin?e:a.getDependency("skin",i.skin).then((function(e){for(var r=[],s=0,n=(t=e).joints.length;s<n;s++)r.push(a.getDependency("node",t.joints[s]));return Promise.all(r)})).then((function(r){return e.traverse((function(e){if(e.isMesh){for(var n=[],a=[],i=0,o=r.length;i<o;i++){var u=r[i];if(u){n.push(u);var l=new s.Q;void 0!==t.inverseBindMatrices&&l.fromArray(t.inverseBindMatrices.array,16*i),a.push(l)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[i])}e.bind(new s.ub(n,a),e.matrixWorld)}})),e}));var t})).then((function(t){r.add(t);var s=[];if(i.children)for(var o=i.children,u=0,l=o.length;u<l;u++){var c=o[u];s.push(e(c,t,n,a))}return Promise.all(s)}))}return function(t){var r=this.json,n=this.extensions,a=this.json.scenes[t],i=new s.u;a.name&&(i.name=this.createUniqueName(a.name)),G(i,a),a.extensions&&D(n,i,a);for(var o=a.nodes||[],u=[],l=0,c=o.length;l<c;l++)u.push(e(o[l],i,r,this));return Promise.all(u).then((function(){return i}))}}(),e}()}}]);
//# sourceMappingURL=3.c946a5ad.chunk.js.map