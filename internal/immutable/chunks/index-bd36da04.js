function m(){}function W(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function O(){return Object.create(null)}function y(t){t.forEach(P)}function S(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function G(t){return Object.keys(t).length===0}function q(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t){let e;return q(t,n=>e=n)(),e}function at(t,e,n){t.$$.on_destroy.push(q(e,n))}function _t(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?W(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)l[s]=e.dirty[s]|r[s];return l}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,l){if(r){const o=B(e,n,i,l);t.p(o,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){return t&&S(t.destroy)?t.destroy:m}let E=!1;function I(){E=!0}function J(){E=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:K(1,r,g=>e[n[g]].claim_order,u))-1;i[c]=n[a]+1;const f=a+1;n[f]=c,r=Math.max(f,r)}const l=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);l.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<l.length&&o[c].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(o[c],a)}}function U(t,e){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){E&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function xt(){return k(" ")}function bt(){return k("")}function H(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:H(t,i,e[i])}function wt(t,e){Object.keys(e).forEach(n=>{Y(t,n,e[n])})}function Y(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:H(t,e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,r=!1){tt(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function et(t,e,n,i){return L(t,r=>r.nodeName===e,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||l.push(s.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Et(t,e,n){return et(t,e,n,X)}function nt(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function Nt(t){return nt(t," ")}function vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function jt(t,e,n){t.classList[n?"add":"remove"](e)}function St(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function kt(t,e){return new t(e)}let p;function h(t){p=t}function N(){if(!p)throw new Error("Function called outside component initialization");return p}function Ct(t){N().$$.on_mount.push(t)}function Tt(t){N().$$.after_update.push(t)}function Ot(t,e){return N().$$.context.set(t,e),e}function Dt(t){return N().$$.context.get(t)}const d=[],D=[],$=[],M=[],z=Promise.resolve();let A=!1;function F(){A||(A=!0,z.then(R))}function Mt(){return F(),z}function j(t){$.push(t)}const v=new Set;let b=0;function R(){const t=p;do{for(;b<d.length;){const e=d[b];b++,h(e),it(e.$$)}for(h(null),d.length=0,b=0;D.length;)D.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];v.has(n)||(v.add(n),n())}$.length=0}while(d.length);for(;M.length;)M.pop()();A=!1,v.clear(),h(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const w=new Set;let _;function Pt(){_={r:0,c:[],p:_}}function qt(){_.r||y(_.c),_=_.p}function rt(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ht(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],s=e[l];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(n[c]=s[c],r[c]=1);t[l]=s}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Lt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||j(()=>{const o=t.$$.on_mount.map(P).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...o):y(o),t.$$.on_mount=[]}),l.forEach(j)}function ot(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,i,r,l,o,s=[-1]){const c=p;h(t);const u=t.$$={fragment:null,ctx:[],props:l,update:m,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:O(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,g,...C)=>{const T=C.length?C[0]:g;return u.ctx&&r(u.ctx[f],u.ctx[f]=T)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](T),a&&st(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){I();const f=Z(e.target);u.fragment&&u.fragment.l(f),f.forEach(V)}else u.fragment&&u.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),J(),R()}h(c)}class Wt{$destroy(){ot(this,1),this.$destroy=m}$on(e,n){if(!S(n))return m;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Mt as A,m as B,_t as C,jt as D,ht as E,mt as F,dt as G,at as H,U as I,gt as J,lt as K,ft as L,q as M,pt as N,St as O,Dt as P,Ht as Q,Lt as R,Wt as S,W as T,wt as U,$t as V,Ot as W,xt as a,yt as b,Nt as c,qt as d,bt as e,rt as f,Pt as g,V as h,Rt as i,Tt as j,X as k,Et as l,Z as m,H as n,Ct as o,At as p,k as q,nt as r,ut as s,Bt as t,vt as u,kt as v,zt as w,Ft as x,ct as y,ot as z};
