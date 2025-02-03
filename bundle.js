var app=function(){"use strict";const e=globalThis.process?.env?.NODE_ENV;var t=e&&!e.toLowerCase().startsWith("prod"),n=Array.isArray,r=Array.prototype.indexOf,l=Array.from,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,s=Object.prototype,u=Array.prototype,f=Object.getPrototypeOf;function c(e){return e()}function v(e){for(var t=0;t<e.length;t++)e[t]()}const d=32,p=64,h=128,y=256,g=512,w=1024,m=2048,_=4096,b=8192,x=16384,S=65536,E=1<<18,k=1<<20,$=Symbol("$state"),O=Symbol("$state metadata"),j=Symbol("legacy props"),T=Symbol("");function q(e){return e===this.v}function P(e){return t=e,n=this.v,!(t!=t?n==n:t!==n||null!==t&&"object"==typeof t||"function"==typeof t);var t,n}let A=!1;const N=Symbol(),C=Symbol("filename");var M="font-weight: bold",I="font-weight: normal";function D(e,n){t?console.warn(`%c[svelte] ownership_invalid_mutation\n%c${e?`${e} mutated a value owned by ${n}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead`:"Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead"}\nhttps://svelte.dev/e/ownership_invalid_mutation`,M,I):console.warn("https://svelte.dev/e/ownership_invalid_mutation")}function G(e){t?console.warn(`%c[svelte] state_proxy_equality_mismatch\n%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results\nhttps://svelte.dev/e/state_proxy_equality_mismatch`,M,I):console.warn("https://svelte.dev/e/state_proxy_equality_mismatch")}const L={},R=/at (?:.+ \()?(.+):(\d+):(\d+)\)?$/,V=/@(.+):(\d+):(\d+)$/;function W(){const e=function(){const e=(new Error).stack;if(!e)return null;const t=[];for(const n of e.split("\n")){let e=R.exec(n)??V.exec(n);e&&t.push({file:e[1],line:+e[2],column:+e[3]})}return t}()?.slice(4);if(!e)return null;for(let t=0;t<e.length;t++){const n=e[t],r=L[n.file];if(r)for(const e of r){if(null==e.end)return null;if(e.start.line<n.line&&e.end.line>n.line)return e.component}else if(0===t)return null}return null}function B(e,t){if(null!==t.owners)for(;e;){if(null===e.owners){t.owners=null;break}for(const n of e.owners)t.owners.add(n);e=e.parent}}function Y(e,t){return null===e.owners||(e.owners.has(t)||[...e.owners].some((e=>e[C]===t?.[C]))||null!==e.parent&&Y(e.parent,t))}function F(e){return e?.owners?.values().next().value??F(e.parent)}function z(e){const t=W();if(t&&!Y(e,t)){let n=F(e);n[C]!==t[C]?D(t[C],n[C]):D()}}let J=null;function Q(e){J=e}let K=null;function H(e){K=e}function U(e,n=!1,r){J={p:J,c:null,e:null,m:!1,s:e,x:null,l:null},A&&!n&&(J.l={s:null,u:null,r1:[],r2:ne(!1)}),t&&(J.function=r,K=r)}function X(e){const n=J;if(null!==n){void 0!==e&&(n.x=e);const a=n.e;if(null!==a){var r=ft,l=at;n.e=null;try{for(var o=0;o<a.length;o++){var i=a[o];ct(i.effect),ut(i.reaction),qe(i.fn)}}finally{ct(r),ut(l)}}J=n.p,t&&(K=n.p?.function??null),n.m=!0}return e||{}}function Z(){return!A||null!==J&&null===J.l}let ee=new Set;function te(e){ee=e}function ne(e,t){var n={f:0,v:e,reactions:null,equals:q,rv:0,wv:0};return n}function re(e,t=!1){const n=ne(e);return t||(n.equals=P),A&&null!==J&&null!==J.l&&(J.l.s??=[]).push(n),n}function le(e,t=!1){return function(e){null!==at&&!st&&2&at.f&&(null===vt?vt=[e]:vt.push(e));return e}(re(e,t))}function oe(e,n){return null!==at&&!st&&Z()&&18&at.f&&(null===vt||!vt.includes(e))&&function(){if(t){const e=new Error("state_unsafe_mutation\nUpdating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),ie(e,n)}function ie(e,n){if(!e.equals(n)){e.v;if(e.v=n,e.wv=mt(),ae(e,m),Z()&&null!==ft&&ft.f&w&&!(96&ft.f)&&(null===ht?function(e){ht=e}([e]):ht.push(e)),t&&ee.size>0){const e=Array.from(ee);var r=et;nt(!0);try{for(const t of e)t.f&w&&Gt(t,_),_t(t)&&jt(t)}finally{nt(r)}ee.clear()}}return n}function ae(e,n){var r=e.reactions;if(null!==r)for(var l=Z(),o=r.length,i=0;i<o;i++){var a=r[i],s=a.f;s&m||(l||a!==ft)&&(t&&s&E?ee.add(a):(Gt(a,n),1280&s&&(2&s?ae(a,_):Nt(a))))}}function se(e,r=null,l){if("object"!=typeof e||null===e||$ in e)return e;const o=f(e);if(o!==s&&o!==u)return e;var a,c=new Map,v=n(e),d=ne(0);if(v&&c.set("length",ne(e.length)),t)if(a={parent:r,owners:null},l){const e=l.v?.[O]?.owners;a.owners=e?new Set(e):null}else a.owners=null===r?null!==J?new Set([J.function]):null:new Set;return new Proxy(e,{defineProperty(e,n,r){"value"in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){if(t){const e=new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var l=c.get(n);return void 0===l?(l=ne(r.value),c.set(n,l)):oe(l,se(r.value,a)),!0},deleteProperty(e,t){var n=c.get(t);if(void 0===n)t in e&&c.set(t,ne(N));else{if(v&&"string"==typeof t){var r=c.get("length"),l=Number(t);Number.isInteger(l)&&l<r.v&&oe(r,l)}oe(n,N),ue(d)}return!0},get(n,r,l){if(t&&r===O)return a;if(r===$)return e;var o=c.get(r),s=r in n;if(void 0!==o||s&&!i(n,r)?.writable||(o=ne(se(s?n[r]:N,a)),c.set(r,o)),void 0!==o){var u=Mt(o);if(t){var f=u?.[O];f&&f?.parent!==a&&B(a,f)}return u===N?void 0:u}return Reflect.get(n,r,l)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&"value"in n){var r=c.get(t);r&&(n.value=Mt(r))}else if(void 0===n){var l=c.get(t),o=l?.v;if(void 0!==l&&o!==N)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,n){if(t&&n===O)return!0;if(n===$)return!0;var r=c.get(n),l=void 0!==r&&r.v!==N||Reflect.has(e,n);if((void 0!==r||null!==ft&&(!l||i(e,n)?.writable))&&(void 0===r&&(r=ne(l?se(e[n],a):N),c.set(n,r)),Mt(r)===N))return!1;return l},set(e,n,r,l){var o=c.get(n),s=n in e;if(v&&"length"===n)for(var u=r;u<o.v;u+=1){var f=c.get(u+"");void 0!==f?oe(f,N):u in e&&(f=ne(N),c.set(u+"",f))}if(void 0===o?s&&!i(e,n)?.writable||(oe(o=ne(void 0),se(r,a)),c.set(n,o)):(s=o.v!==N,oe(o,se(r,a))),t){var p=r?.[O];p&&p?.parent!==a&&B(a,p),z(a)}var h=Reflect.getOwnPropertyDescriptor(e,n);if(h?.set&&h.set.call(l,r),!s){if(v&&"string"==typeof n){var y=c.get("length"),g=Number(n);Number.isInteger(g)&&g>=y.v&&oe(y,g+1)}ue(d)}return!0},ownKeys(e){Mt(d);var t=Reflect.ownKeys(e).filter((e=>{var t=c.get(e);return void 0===t||t.v!==N}));for(var[n,r]of c)r.v===N||n in e||t.push(n);return t},setPrototypeOf(){!function(){if(t){const e=new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function ue(e,t=1){oe(e,e.v+t)}function fe(e){return null!==e&&"object"==typeof e&&$ in e?e[$]:e}var ce,ve,de;function pe(){if(void 0===ce){ce=window;var e=Element.prototype,n=Node.prototype;ve=i(n,"firstChild").get,de=i(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0,t&&(e.__svelte_meta=null,function(){const e=Array.prototype,t=Array.__svelte_cleanup;t&&t();const{indexOf:n,lastIndexOf:r,includes:l}=e;e.indexOf=function(e,t){const r=n.call(this,e,t);if(-1===r)for(let n=t??0;n<this.length;n+=1)if(fe(this[n])===e){G("array.indexOf(...)");break}return r},e.lastIndexOf=function(e,t){const n=r.call(this,e,t??this.length-1);if(-1===n)for(let n=0;n<=(t??this.length-1);n+=1)if(fe(this[n])===e){G("array.lastIndexOf(...)");break}return n},e.includes=function(e,t){const n=l.call(this,e,t);if(!n)for(let t=0;t<this.length;t+=1)if(fe(this[t])===e){G("array.includes(...)");break}return n},Array.__svelte_cleanup=()=>{e.indexOf=n,e.lastIndexOf=r,e.includes=l}}())}}function he(e=""){return document.createTextNode(e)}function ye(e){return ve.call(e)}function ge(e){return de.call(e)}function we(e,t){return ye(e)}function me(e,t){var n=ye(e);return n instanceof Comment&&""===n.data?ge(n):n}function _e(e,t=1,n=!1){let r=e;for(;t--;)r=ge(r);return r}function be(e){var t=2050,n=null!==at&&2&at.f?at:null;null===ft||null!==n&&n.f&y?t|=y:ft.f|=k;const r={ctx:J,deps:null,effects:null,equals:q,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:n??ft};return r}function xe(e){const t=be(e);return t.equals=P,t}function Se(e){var t=e.effects;if(null!==t){e.effects=null;for(var n=0;n<t.length;n+=1)Le(t[n])}}let Ee=[];function ke(e){var n,r=ft;if(ct(function(e){for(var t=e.parent;null!==t;){if(!(2&t.f))return t;t=t.parent}return null}(e)),t){let l=ee;te(new Set);try{Ee.includes(e)&&function(){if(t){const e=new Error("derived_references_self\nA derived value cannot reference itself recursively\nhttps://svelte.dev/e/derived_references_self");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/derived_references_self")}(),Ee.push(e),Se(e),n=kt(e)}finally{ct(r),te(l),Ee.pop()}}else try{Se(e),n=kt(e)}finally{ct(r)}return n}function $e(e){var t=ke(e);Gt(e,(wt||e.f&y)&&null!==e.deps?_:w),e.equals(t)||(e.v=t,e.wv=mt())}function Oe(e){null===ft&&null===at&&function(e){if(t){const t=new Error(`effect_orphan\n\`${e}\` can only be used inside an effect (e.g. during component initialisation)\nhttps://svelte.dev/e/effect_orphan`);throw t.name="Svelte error",t}throw new Error("https://svelte.dev/e/effect_orphan")}(e),null!==at&&at.f&y&&null===ft&&function(){if(t){const e=new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),tt&&function(e){if(t){const t=new Error(`effect_in_teardown\n\`${e}\` cannot be used inside an effect cleanup function\nhttps://svelte.dev/e/effect_in_teardown`);throw t.name="Svelte error",t}throw new Error("https://svelte.dev/e/effect_in_teardown")}(e)}function je(e,n,r,l=!0){var o=!!(e&p),i=ft;if(t)for(;null!==i&&i.f&E;)i=i.parent;var a={ctx:J,deps:null,nodes_start:null,nodes_end:null,f:e|m,first:null,fn:n,last:null,next:null,parent:o?null:i,prev:null,teardown:null,transitions:null,wv:0};if(t&&(a.component_function=K),r){var s=et;try{nt(!0),jt(a),a.f|=32768}catch(e){throw Le(a),e}finally{nt(s)}}else null!==n&&Nt(a);if(!(r&&null===a.deps&&null===a.first&&null===a.nodes_start&&null===a.teardown&&!(1048704&a.f))&&!o&&l&&(null!==i&&function(e,t){var n=t.last;null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(a,i),null!==at&&2&at.f)){var u=at;(u.effects??=[]).push(a)}return a}function Te(e){Oe("$effect");var n=null!==ft&&!!(ft.f&d)&&null!==J&&!J.m;if(t&&o(e,"name",{value:"$effect"}),!n)return qe(e);var r=J;(r.e??=[]).push({fn:e,effect:ft,reaction:at})}function qe(e){return je(4,e,!1)}function Pe(e,t){var n=J,r={effect:null,ran:!1};n.l.r1.push(r),r.effect=Ne((()=>{e(),r.ran||(r.ran=!0,oe(n.l.r2,!0),It(t))}))}function Ae(){var e=J;Ne((()=>{if(Mt(e.l.r2)){for(var t of e.l.r1){var n=t.effect;n.f&w&&Gt(n,_),_t(n)&&jt(n),t.ran=!1}e.l.r2.v=!1}}))}function Ne(e){return je(8,e,!0)}function Ce(e,n=[],r=be){const l=n.map(r),i=()=>e(...l.map(Mt));return t&&o(i,"name",{value:"{expression}"}),Me(i)}function Me(e,t=0){return je(24|t,e,!0)}function Ie(e,t=!0){return je(40,e,!0,t)}function De(e){var t=e.teardown;if(null!==t){const e=tt,n=at;rt(!0),ut(null);try{t.call(null)}finally{rt(e),ut(n)}}}function Ge(e,t=!1){var n=e.first;for(e.first=e.last=null;null!==n;){var r=n.next;Le(n,t),n=r}}function Le(e,n=!0){var r=!1;if((n||524288&e.f)&&null!==e.nodes_start){for(var l=e.nodes_start,o=e.nodes_end;null!==l;){var i=l===o?null:ge(l);l.remove(),l=i}r=!0}Ge(e,n&&!r),Ot(e,0),Gt(e,x);var a=e.transitions;if(null!==a)for(const e of a)e.stop();De(e);var s=e.parent;null!==s&&null!==s.first&&Re(e),t&&(e.component_function=null),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Re(e){var t=e.parent,n=e.prev,r=e.next;null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Ve(e,t){var n=[];Be(e,n,!0),We(n,(()=>{Le(e),t&&t()}))}function We(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var l of e)l.out(r)}else t()}function Be(e,t,n){if(!(e.f&b)){if(e.f^=b,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r);for(var r=e.first;null!==r;){var l=r.next;Be(r,t,!!(!!(r.f&S)||!!(r.f&d))&&n),r=l}}}function Ye(e){Fe(e,!0)}function Fe(e,t){if(e.f&b){e.f^=b,e.f&w||(e.f^=w),_t(e)&&(Gt(e,m),Nt(e));for(var n=e.first;null!==n;){var r=n.next;Fe(n,!!(!!(n.f&S)||!!(n.f&d))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}let ze=!1,Je=[];function Qe(){ze=!1;const e=Je.slice();Je=[],v(e)}function Ke(e){ze||(ze=!0,queueMicrotask(Qe)),Je.push(e)}const He=new WeakSet;let Ue=!1,Xe=!1,Ze=null,et=!1,tt=!1;function nt(e){et=e}function rt(e){tt=e}let lt=[],ot=0,it=[],at=null,st=!1;function ut(e){at=e}let ft=null;function ct(e){ft=e}let vt=null;let dt=null,pt=0,ht=null;let yt=1,gt=0,wt=!1;function mt(){return++yt}function _t(e){var t=e.f;if(t&m)return!0;if(t&_){var n=e.deps,r=!!(t&y);if(null!==n){var l,o,i=!!(t&g),a=r&&null!==ft&&!wt,s=n.length;if(i||a){for(l=0;l<s;l++)o=n[l],!i&&o?.reactions?.includes(e)||(o.reactions??=[]).push(e);i&&(e.f^=g)}for(l=0;l<s;l++)if(_t(o=n[l])&&$e(o),o.wv>e.wv)return!0}r&&(null===ft||wt)||Gt(e,w)}return!1}function bt(e,t){for(var n=t;null!==n;){if(n.f&h)try{return void n.fn(e)}catch{n.f^=h}n=n.parent}throw Ue=!1,e}function xt(e){return!(e.f&x||null!==e.parent&&e.parent.f&h)}function St(e,n,r,l){if(Ue){if(null===r&&(Ue=!1),xt(n))throw e;return}if(null!==r&&(Ue=!0),!t||null===l||!(e instanceof Error)||He.has(e))return void bt(e,n);He.add(e);const i=[],a=n.fn?.name;a&&i.push(a);let s=l;for(;null!==s;){if(t){var u=s.function?.[C];if(u){const e=u.split("/").pop();i.push(e)}}s=s.p}const f=/Firefox/.test(navigator.userAgent)?"  ":"\t";o(e,"message",{value:e.message+`\n${i.map((e=>`\n${f}in ${e}`)).join("")}\n`}),o(e,"component_stack",{value:i});const c=e.stack;if(c){const t=c.split("\n"),n=[];for(let e=0;e<t.length;e++){const r=t[e];r.includes("svelte/src/internal")||n.push(r)}o(e,"stack",{value:n.join("\n")})}if(bt(e,n),xt(n))throw e}function Et(e,t,n=0){var r=e.reactions;if(null!==r)for(var l=0;l<r.length;l++){var o=r[l];2&o.f?Et(o,t,n+1):t===o&&(0===n?Gt(o,m):o.f&w&&Gt(o,_),Nt(o))}}function kt(e){var t=dt,n=pt,r=ht,l=at,o=wt,i=vt,a=J,s=st,u=e.f;dt=null,pt=0,ht=null,at=96&u?null:e,wt=!!(u&y)&&(!et||(null===l||s)&&null!==e.parent),vt=null,Q(e.ctx),st=!1,gt++;try{var f=(0,e.fn)(),c=e.deps;if(null!==dt){var v;if(Ot(e,pt),null!==c&&pt>0)for(c.length=pt+dt.length,v=0;v<dt.length;v++)c[pt+v]=dt[v];else e.deps=c=dt;if(!wt)for(v=pt;v<c.length;v++)(c[v].reactions??=[]).push(e)}else null!==c&&pt<c.length&&(Ot(e,pt),c.length=pt);if(Z()&&null!==ht&&!(6146&e.f))for(v=0;v<ht.length;v++)Et(ht[v],e);return null!==l&&gt++,f}finally{dt=t,pt=n,ht=r,at=l,wt=o,vt=i,Q(a),st=s}}function $t(e,t){let n=t.reactions;if(null!==n){var l=r.call(n,e);if(-1!==l){var o=n.length-1;0===o?n=t.reactions=null:(n[l]=n[o],n.pop())}}null===n&&2&t.f&&(null===dt||!dt.includes(t))&&(Gt(t,_),768&t.f||(t.f^=g),Se(t),Ot(t,0))}function Ot(e,t){var n=e.deps;if(null!==n)for(var r=t;r<n.length;r++)$t(e,n[r])}function jt(e){var n=e.f;if(!(n&x)){Gt(e,w);var r=ft,l=J;if(ft=e,t){var o=K;H(e.component_function)}try{16&n?function(e){for(var t=e.first;null!==t;){var n=t.next;t.f&d||Le(t),t=n}}(e):Ge(e),De(e);var i=kt(e);e.teardown="function"==typeof i?i:null,e.wv=yt;e.deps;t&&it.push(e)}catch(t){St(t,e,r,l||e.ctx)}finally{ft=r,t&&H(o)}}}function Tt(){console.error("Last ten effects were: ",it.slice(-10).map((e=>e.fn))),it=[]}function qt(){if(ot>1e3){ot=0;try{!function(){if(t){const e=new Error("effect_update_depth_exceeded\nMaximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops\nhttps://svelte.dev/e/effect_update_depth_exceeded");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){if(t&&o(e,"stack",{value:""}),null===Ze)throw t&&Tt(),e;if(t)try{St(e,Ze,null,null)}catch(e){throw Tt(),e}else St(e,Ze,null,null)}}ot++}function Pt(e){var t=e.length;if(0!==t)for(var n=0;n<t;n++){var r=e[n];if(!(24576&r.f))try{_t(r)&&(jt(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?Re(r):r.fn=null))}catch(e){St(e,r,null,r.ctx)}}}function At(){if(Xe=!1,ot>1001)return;const e=lt;lt=[],function(e){var t=e.length;if(0!==t){qt();var n=et;et=!0;try{for(var r=0;r<t;r++){var l=e[r];l.f&w||(l.f^=w);var o=[];Ct(l,o),Pt(o)}}finally{et=n}}}(e),Xe||(ot=0,Ze=null,t&&(it=[]))}function Nt(e){Xe||(Xe=!0,queueMicrotask(At)),Ze=e;for(var t=e;null!==t.parent;){var n=(t=t.parent).f;if(96&n){if(!(n&w))return;t.f^=w}}lt.push(t)}function Ct(e,t){var n=e.first,r=[];e:for(;null!==n;){var l=n.f,o=!!(l&d),i=o&&!!(l&w),a=n.next;if(!(i||l&b))if(8&l){if(o)n.f^=w;else{var s=at;try{at=n,_t(n)&&jt(n)}catch(e){St(e,n,null,n.ctx)}finally{at=s}}var u=n.first;if(null!==u){n=u;continue}}else 4&l&&r.push(n);if(null===a){let t=n.parent;for(;null!==t;){if(e===t)break e;var f=t.next;if(null!==f){n=f;continue e}t=t.parent}}n=a}for(var c=0;c<r.length;c++)u=r[c],t.push(u),Ct(u,t)}function Mt(e){var n=e.f,r=!!(2&n);if(r&&n&x){var l=ke(e);return function(e){Se(e),Ot(e,0),Gt(e,x),e.v=e.deps=e.ctx=e.reactions=null}(e),l}if(null===at||st){if(r&&null===e.deps&&null===e.effects){var o=e,i=o.parent;null===i||i.f&y||(o.f^=y)}}else{null!==vt&&vt.includes(e)&&function(){if(t){const e=new Error("state_unsafe_local_read\nReading state that was created inside the same derived is forbidden. Consider using `untrack` to read locally created state\nhttps://svelte.dev/e/state_unsafe_local_read");throw e.name="Svelte error",e}throw new Error("https://svelte.dev/e/state_unsafe_local_read")}();var a=at.deps;e.rv<gt&&(e.rv=gt,null===dt&&null!==a&&a[pt]===e?pt++:null===dt?dt=[e]:dt.push(e))}return r&&_t(o=e)&&$e(o),e.v}function It(e){var t=st;try{return st=!0,e()}finally{st=t}}const Dt=-7169;function Gt(e,t){e.f=e.f&Dt|t}function Lt(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if($ in e)Rt(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];"object"==typeof n&&n&&$ in n&&Rt(n)}}function Rt(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Rt(e[n],t)}catch(e){}const n=f(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=a(n);for(let n in t){const r=t[n].get;if(r)try{r.call(e)}catch(e){}}}}}const Vt=["touchstart","touchmove"];function Wt(e){return Vt.includes(e)}const Bt=new Set,Yt=new Set;function Ft(e,t,n,r={}){function l(e){if(r.capture||Jt.call(t,e),!e.cancelBubble)return function(e){var t=at,n=ft;ut(null),ct(null);try{return e()}finally{ut(t),ct(n)}}((()=>n?.call(this,e)))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?Ke((()=>{t.addEventListener(e,l,r)})):t.addEventListener(e,l,r),l}function zt(e,t,n,r,l){var o={capture:r,passive:l},i=Ft(e,t,n,o);t!==document.body&&t!==window&&t!==document||function(e){const t=je(8,null,!1);Gt(t,w),t.teardown=e}((()=>{t.removeEventListener(e,i,o)}))}function Jt(e){var t=this,r=t.ownerDocument,l=e.type,i=e.composedPath?.()||[],a=i[0]||e.target,s=0,u=e.__root;if(u){var f=i.indexOf(u);if(-1!==f&&(t===document||t===window))return void(e.__root=t);var c=i.indexOf(t);if(-1===c)return;f<=c&&(s=f)}if((a=i[s]||e.target)!==t){o(e,"currentTarget",{configurable:!0,get:()=>a||r});var v=at,d=ft;ut(null),ct(null);try{for(var p,h=[];null!==a;){var y=a.assignedSlot||a.parentNode||a.host||null;try{var g=a["__"+l];if(void 0!==g&&!a.disabled)if(n(g)){var[w,...m]=g;w.apply(a,[e,...m])}else g.call(a,e)}catch(e){p?h.push(e):p=e}if(e.cancelBubble||y===t||null===y)break;a=y}if(p){for(let e of h)queueMicrotask((()=>{throw e}));throw p}}finally{e.__root=t,delete e.currentTarget,ut(v),ct(d)}}}function Qt(e,t){var n=ft;null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function Kt(e,t){var n,r=!!(1&t),l=!!(2&t),o=!e.startsWith("<!>");return()=>{var t,i;void 0===n&&(t=o?e:"<!>"+e,(i=document.createElement("template")).innerHTML=t,n=i.content,r||(n=ye(n)));var a=l?document.importNode(n,!0):n.cloneNode(!0);r?Qt(ye(a),a.lastChild):Qt(a,a);return a}}function Ht(e,t){null!==e&&e.before(t)}function Ut(e,t){var n=null==t?"":"object"==typeof t?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=null==n?"":n+"")}const Xt=new Map;let Zt=new WeakMap;function en(e,t,n=!1){var r=e,l=null,o=null,i=N,a=!1;const s=(e,t=!0)=>{a=!0,u(t,e)},u=(e,t)=>{i!==(i=e)&&(i?(l?Ye(l):t&&(l=Ie((()=>t(r)))),o&&Ve(o,(()=>{o=null}))):(o?Ye(o):t&&(o=Ie((()=>t(r)))),l&&Ve(l,(()=>{l=null}))))};Me((()=>{a=!1,t(s),a||u(null,null)}),n?S:0)}function tn(e,t){return t}function nn(e,t,r,o,i,a=null){var s=e,u={flags:t,items:new Map,first:null};!(4&t)||(s=e.appendChild(he()));var f=null,c=!1,v=xe((()=>{var e=r();return n(e)?e:null==e?[]:l(e)}));Me((()=>{var e=Mt(v),n=e.length;c&&0===n||(c=0===n,function(e,t,n,r,o,i,a){var s,u,f,c,v,d,p=!!(8&o),h=!!(3&o),y=e.length,g=t.items,w=t.first,m=w,_=null,x=[],S=[];if(p)for(d=0;d<y;d+=1)c=i(f=e[d],d),void 0!==(v=g.get(c))&&(v.a?.measure(),(u??=new Set).add(v));for(d=0;d<y;d+=1)if(c=i(f=e[d],d),void 0!==(v=g.get(c))){if(h&&rn(v,f,d,o),v.e.f&b&&(Ye(v.e),p&&(v.a?.unfix(),(u??=new Set).delete(v))),v!==m){if(void 0!==s&&s.has(v)){if(x.length<S.length){var E,k=S[0];_=k.prev;var $=x[0],O=x[x.length-1];for(E=0;E<x.length;E+=1)on(x[E],k,n);for(E=0;E<S.length;E+=1)s.delete(S[E]);an(t,$.prev,O.next),an(t,_,$),an(t,O,k),m=k,_=O,d-=1,x=[],S=[]}else s.delete(v),on(v,m,n),an(t,v.prev,v.next),an(t,v,null===_?t.first:_.next),an(t,_,v),_=v;continue}for(x=[],S=[];null!==m&&m.k!==c;)m.e.f&b||(s??=new Set).add(m),S.push(m),m=m.next;if(null===m)continue;v=m}x.push(v),_=v,m=v.next}else{_=ln(m?m.e.nodes_start:n,t,_,null===_?t.first:_.next,f,c,d,r,o,a),g.set(c,_),x=[],S=[],m=_.next}if(null!==m||void 0!==s){for(var j=void 0===s?[]:l(s);null!==m;)m.e.f&b||j.push(m),m=m.next;var T=j.length;if(T>0){var q=4&o&&0===y?n:null;if(p){for(d=0;d<T;d+=1)j[d].a?.measure();for(d=0;d<T;d+=1)j[d].a?.fix()}!function(e,t,n,r){for(var l=[],o=t.length,i=0;i<o;i++)Be(t[i].e,l,!0);var a=o>0&&0===l.length&&null!==n;if(a){var s=n.parentNode;s.textContent="",s.append(n),r.clear(),an(e,t[0].prev,t[o-1].next)}We(l,(()=>{for(var n=0;n<o;n++){var l=t[n];a||(r.delete(l.k),an(e,l.prev,l.next)),Le(l.e,!a)}}))}(t,j,q,g)}}p&&Ke((()=>{if(void 0!==u)for(v of u)v.a?.apply()}));ft.first=t.first&&t.first.e,ft.last=_&&_.e}(e,u,s,i,t,o,r),null!==a&&(0===n?f?Ye(f):f=Ie((()=>a(s))):null!==f&&Ve(f,(()=>{f=null}))),Mt(v))}))}function rn(e,t,n,r){1&r&&ie(e.v,t),2&r?ie(e.i,n):e.i=n}function ln(e,n,r,l,o,i,a,s,u,f){var c=!!(1&u),v=c?!(16&u)?re(o):ne(o):o,d=2&u?ne(a):a;t&&c&&(v.debug=()=>{var e="number"==typeof d?a:d.v;f()[e]});var p={i:d,v:v,k:i,a:null,e:null,prev:r,next:l};try{return p.e=Ie((()=>s(e,v,d,f)),false),p.e.prev=r&&r.e,p.e.next=l&&l.e,null===r?n.first=p:(r.next=p,r.e.next=p.e),null!==l&&(l.prev=p,l.e.prev=p.e),p}finally{}}function on(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,l=t?t.e.nodes_start:n,o=e.e.nodes_start;o!==r;){var i=ge(o);l.before(o),o=i}}function an(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}function sn(e,t,n,r){var l=e.__attributes??={};l[t]!==(l[t]=n)&&("style"===t&&"__styles"in e&&(e.__styles={}),"loading"===t&&(e[T]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=un.get(e.nodeName);if(n)return n;un.set(e.nodeName,n=[]);var r=e,l=Element.prototype;for(;l!==r;){for(var o in t=a(r))t[o].set&&n.push(o);r=f(r)}return n}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}var un=new Map;function fn(e=!1){const n=J,r=n.l.u;if(!r)return;let l=()=>Lt(n.s);if(e){let e=0,t={};const r=be((()=>{let r=!1;const l=n.s;for(const e in l)l[e]!==t[e]&&(t[e]=l[e],r=!0);return r&&e++,e}));l=()=>Mt(r)}var i;r.b.length&&(i=()=>{cn(n,l),v(r.b)},Oe("$effect.pre"),t&&o(i,"name",{value:"$effect.pre"}),Ne(i)),Te((()=>{const e=It((()=>r.m.map(c)));return()=>{for(const t of e)"function"==typeof t&&t()}})),r.a.length&&Te((()=>{cn(n,l),v(r.a)}))}function cn(e,t){if(e.l.s)for(const t of e.l.s)Mt(t);t()}let vn=!1;function dn(e){for(var t=ft,n=ft;null!==t&&!(96&t.f);)t=t.parent;try{return ct(t),e()}finally{ct(n)}}function pn(e,n,r,l){var o,a=!!(1&r),s=!A||!!(2&r),u=!!(8&r),f=!!(16&r),c=!1;u?[o,c]=function(e){var t=vn;try{return vn=!1,[e(),vn]}finally{vn=t}}((()=>e[n])):o=e[n];var v,d=$ in e||j in e,p=u&&(i(e,n)?.set??(d&&n in e&&(t=>e[n]=t)))||void 0,h=l,y=!0,g=!1,w=()=>(g=!0,y&&(y=!1,h=f?It(l):l),h);if(void 0===o&&void 0!==l&&(p&&s&&function(e){if(t){const t=new Error(`props_invalid_value\nCannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value\nhttps://svelte.dev/e/props_invalid_value`);throw t.name="Svelte error",t}throw new Error("https://svelte.dev/e/props_invalid_value")}(n),o=w(),p&&p(o)),s)v=()=>{var t=e[n];return void 0===t?w():(y=!0,g=!1,t)};else{var m=dn((()=>(a?be:xe)((()=>e[n]))));m.f|=131072,v=()=>{var e=Mt(m);return void 0!==e&&(h=void 0),void 0===e?h:e}}if(!(4&r))return v;if(p){var _=e.$$legacy;return function(e,t){return arguments.length>0?(s&&t&&!_&&!c||p(t?v():e),e):v()}}var b=!1,x=re(o),S=dn((()=>be((()=>{var e=v(),t=Mt(x);return b?(b=!1,t):x.v=e}))));return a||(S.equals=P),function(e,t){if(arguments.length>0){const n=t?Mt(S):s&&u?se(e):e;return S.equals(n)||(b=!0,oe(x,n),g&&void 0!==h&&(h=n),It((()=>Mt(S)))),e}return Mt(S)}}if(t){function qn(e){if(!(e in globalThis)){let n;Object.defineProperty(globalThis,e,{configurable:!0,get:()=>{if(void 0!==n)return n;!function(e){if(t){const t=new Error(`rune_outside_svelte\nThe \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files\nhttps://svelte.dev/e/rune_outside_svelte`);throw t.name="Svelte error",t}throw new Error("https://svelte.dev/e/rune_outside_svelte")}(e)},set:e=>{n=e}})}}qn("$state"),qn("$effect"),qn("$derived"),qn("$inspect"),qn("$props"),qn("$bindable")}function hn(e){var n,r;null===J&&function(e){if(t){const t=new Error(`lifecycle_outside_component\n\`${e}(...)\` can only be used during component initialisation\nhttps://svelte.dev/e/lifecycle_outside_component`);throw t.name="Svelte error",t}throw new Error("https://svelte.dev/e/lifecycle_outside_component")}("onMount"),A&&null!==J.l?(n=J,r=n.l,r.u??={a:[],b:[],m:[]}).m.push(e):Te((()=>{const t=It(e);if("function"==typeof t)return t}))}"undefined"!=typeof window&&(window.__svelte||={v:new Set}).v.add("5"),A=!0;var yn=Kt("<option></option>"),gn=Kt('<div class="mb-4"><div class="flex justify-stretch items-center space-x-4 items-center"><button class="w-full px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700"><span style="color: black;"> </span></button> <button class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700"><span style="color: yellow;">⬅️</span></button> <select class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200"></select> <button class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700"><span style="color: yellow;">➡️</span></button> <button class="px-4 py-2 bg-gray-300 rounded transition-colors duration-200 hover:bg-gray-400 text-gray-700"><span style="color: yellow;"> </span></button></div></div>'),wn=Kt('<div style="width: 100%; height: 88vh;"><!> <div class="video" style="width: 100%; height: 100%;"><div id="player" style="width: 100%; height: 100%;"></div></div></div>');function mn(e,t){U(t,!1);let n=pn(t,"videoId",8),r=pn(t,"persons",24,(()=>[])),l=pn(t,"pauseVideoTime",12,1),o=le(),i=le(!1);const a=()=>{const e=document.querySelector("iframe");if(e&&e.contentWindow)if(Mt(i))e.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo"}),"*"),oe(i,!1);else{const e=r()[0].sequences[Mt(o)-1];e&&s(e.start,e.end),oe(i,!0)}},s=(e,t)=>{const n=document.querySelector("iframe");n&&n.contentWindow?(n.contentWindow.postMessage(JSON.stringify({event:"command",func:"seekTo",args:[e,!0]}),"*"),n.contentWindow.postMessage(JSON.stringify({event:"command",func:"playVideo"}),"*"),l(t),oe(i,!0)):console.log("Iframe not yet loaded")},u=(e,t)=>{oe(o,e);const n=t[e-1];n&&s(n.start,n.end)};let f,c=le();function v(){Mt(c)&&Mt(c).destroy(),oe(c,new YT.Player("player",{width:"100%",videoId:n(),events:{onReady:d,onStateChange:p}}))}function d(e){e.target.playVideo()}function p(e){let t,n,r;clearTimeout(f),e.data==YT.PlayerState.PLAYING&&(t=Mt(c).getCurrentTime(),t+.4<l()&&(n=Mt(c).getPlaybackRate(),r=(l()-t)/n,f=setTimeout(h,1e3*r)))}function h(){Mt(c).pauseVideo()}hn((()=>{if(window.YT)v();else{const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}window.onYouTubeIframeAPIReady=v})),Pe((()=>Mt(o)),(()=>{Mt(o)||(oe(o,1),r().length>0&&u(1,r()[0].sequences))})),Pe((()=>(Mt(c),Lt(n()))),(()=>{Mt(c)&&n()&&Mt(c).cueVideoById(n())})),Ae(),fn();var y=wn();nn(we(y),1,r,tn,((e,t)=>{var n=gn(),r=we(n),l=we(r),s=we(l),f=we(s),c=_e(l,2),v=_e(c,2);nn(v,5,(()=>Mt(t).sequences),tn,((e,t,n)=>{var r=yn();r.value=null==(r.__value=n+1)?"":n+1,r.textContent=`Sequence ${n+1??""}`,Ce((()=>{return e=r,void(Mt(o)===n+1?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"));var e})),Ht(e,r)}));var d=_e(v,2),p=_e(d,2),h=we(p),y=we(h);Ce((()=>{Ut(f,Mt(t).name),c.disabled=1===Mt(o),d.disabled=Mt(o)===Mt(t).sequences.length,Ut(y,Mt(i)?"⏸️":"▶️")})),zt("click",c,(()=>u(Math.max(Mt(o)-1,1),Mt(t).sequences))),zt("change",v,(e=>{const n=parseInt(e.target.value);u(n,Mt(t).sequences)})),zt("click",d,(()=>u(Math.min(Mt(o)+1,Mt(t).sequences.length),Mt(t).sequences))),zt("click",p,a),Ht(e,n)})),Ht(e,y),X()}var _n=[{id:"YliMTSYrOdw",date:"2024-11-23",title:"Cascades (4) vs As (1)",arena:"Pavillon de la jeunesse",gamesheet:"https://masculin.lheq.ca/vProd/fr/service/apps/json/SportsDynastyGame/getOfficialGameSheetForStats/?idGame=1601040",shifts:"YliMTSYrOdw.json"},{id:"iIn3fv88Cog",date:"2024-12-05",title:"Blizzard (7) vs As (1)",arena:"Pavillon de la jeunesse",gamesheet:"https://masculin.lheq.ca/vProd/fr/service/apps/json/SportsDynastyGame/getOfficialGameSheetForStats/?idGame=1611718",shifts:"iIn3fv88Cog.json"},{id:"Q_FNGS4liw0",date:"2025-01-11",title:"Albatros (1) vs As (4)",arena:"Pavillon de la jeunesse",gamesheet:"https://masculin.lheq.ca/vProd/fr/service/apps/json/SportsDynastyGame/getOfficialGameSheetForStats/?idGame=1601070",shifts:"Q_FNGS4liw0.json"}],bn=Kt('<div class="video-card svelte-dh3ava"><h3> </h3> <p> </p> <p> </p></div>'),xn=Kt('<h1>As de Qc saison 2024/25</h1> <div class="video-list svelte-dh3ava"></div>',1);function Sn(e,t){U(t,!1);let n=pn(t,"onSelectVideo",8);fn();var r=xn();nn(_e(me(r),2),5,(()=>_n),tn,((e,t)=>{var r=bn(),l=we(r),o=we(l),i=_e(l,2),a=we(i),s=we(_e(i,2));Ce((()=>{Ut(o,Mt(t).title),Ut(a,Mt(t).date),Ut(s,Mt(t).arena)})),zt("click",r,(()=>function(e){n()(e)}(Mt(t)))),Ht(e,r)})),Ht(e,r),X()}var En=Kt('<button><img width="auto" height="40" style="margin-right: 10px;"> <span> </span></button>'),kn=Kt('<div style="display: flex; align-items: flex-start; width: 100%;"><button style="margin-right: 10px;">☰</button> <div><button style="margin: 10px;">Back to Games</button> <!></div> <!></div>'),$n=Kt('<!> <main style="margin-top: 20px;"></main>',1);const On=(jn=function(e,t){U(t,!1);let n=le(null);const r=["01-goalie","02-lavallee","03-deraspe","04-beland","05-duchesne","06-gauthier","07-dion","08-drolet","10-parent","11-chaput","12-pelletier","13-trudelle","14-bergeron","15-rochette","16-dorval","17-gauthier"],l=["#1/#30 Goalie","#2 Lavallée","#3 Déraspe","#4 Béland","#5 Duchesne","#6 Gauthier","#7 Dion","#8 Drolet","#10 Parent","#11 Chaput","#12 Pelletier","#13 Trudelle","#14 Bergeron","#15 Rochette","#16 Dorval","#17 Gauthier"];let o=le(null),i=le(null),a=le([]),s=le(!1),u=le([]);Pe((()=>(Mt(n),Mt(i),Mt(o),Mt(a),Mt(u))),(()=>{Mt(n)&&Mt(n)!==Mt(i)&&(oe(i,Mt(n)),oe(o,null),fetch(`./games/${Mt(n).id}.json`).then((e=>e.json())).then((e=>{oe(a,e),oe(u,r.map(((e,t)=>({name:l[t],sequences:Mt(a)[t].shifts,image:`./images/players/${e}.webp`})))),Mt(u).length>0&&!Mt(o)&&oe(o,Mt(u)[0])})))})),Ae(),fn();var f=$n(),c=me(f),v=e=>{var t=kn(),r=we(t),l=_e(r,2),i=we(l);nn(_e(i,2),1,(()=>Mt(u)),tn,((e,t)=>{var n=En(),r=we(n),l=we(_e(r,2));Ce((()=>{sn(n,"style",`display: flex; align-items: center; padding: 10px; cursor: pointer; background-color: ${(Mt(o)===Mt(t)?"#ffffe0":"transparent")??""}; width: 100%;`),sn(r,"src",Mt(t).image),sn(r,"alt",Mt(t).name),Ut(l,Mt(t).name)})),zt("click",n,(()=>oe(o,Mt(t)))),zt("mousedown",n,(()=>event.currentTarget.style.backgroundColor="#ffff00")),zt("mouseup",n,(()=>event.currentTarget.style.backgroundColor=Mt(o)===Mt(t)?"#ffffe0":"transparent")),zt("mouseleave",n,(()=>event.currentTarget.style.backgroundColor=Mt(o)===Mt(t)?"#ffffe0":"transparent")),Ht(e,n)}));var a=_e(l,2),f=e=>{const t=xe((()=>[Mt(o)]));mn(e,{get videoId(){return Mt(n).id},get persons(){return Mt(t)}})};en(a,(e=>{Mt(o)&&e(f)})),Ce((()=>sn(l,"style",`width: 250px; overflow-y: auto; height: 100vh; border-right: 1px solid #ccc; display: ${(Mt(s)?"none":"block")??""};`))),zt("click",r,(()=>oe(s,!Mt(s)))),zt("click",i,(()=>oe(n,null))),Ht(e,t)},d=e=>{Sn(e,{onSelectVideo:e=>oe(n,e)})};en(c,(e=>{Mt(n)?e(v):e(d,!1)})),Ht(e,f),X()},Tn={target:document.body},function(e,{target:t,anchor:n,props:r={},events:o,context:i,intro:a=!0}){pe();var s=new Set,u=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!s.has(r)){s.add(r);var l=Wt(r);t.addEventListener(r,Jt,{passive:l});var o=Xt.get(r);void 0===o?(document.addEventListener(r,Jt,{passive:l}),Xt.set(r,1)):Xt.set(r,o+1)}}};u(l(Bt)),Yt.add(u);var f=void 0,c=function(e){const t=je(p,e,!0);return(e={})=>new Promise((n=>{e.outro?Ve(t,(()=>{Le(t),n(void 0)})):(Le(t),n(void 0))}))}((()=>{var l=n??t.appendChild(he());return Ie((()=>{i&&(U({}),J.c=i),o&&(r.$$events=o),f=e(l,r)||{},i&&X()})),()=>{for(var e of s){t.removeEventListener(e,Jt);var r=Xt.get(e);0==--r?(document.removeEventListener(e,Jt),Xt.delete(e)):Xt.set(e,r)}Yt.delete(u),l!==n&&l.parentNode?.removeChild(l)}}));return Zt.set(f,c),f}(jn,Tn));var jn,Tn;return On}();
//# sourceMappingURL=bundle.js.map
