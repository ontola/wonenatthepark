import{S as N,i as O,s as U,k as v,q as S,a as C,w as z,l as b,m as $,r as A,h as _,c as I,x as H,n as d,b as h,I as k,y as P,u as q,f as g,t as E,z as V,H as y,e as M,g as B,d as R,J as ee,B as w,C as W,E as X,F as Y,G as Z,M as te,N as re,O as le}from"../../chunks/index-bd36da04.js";import{A as F,z as j,u as D,d as G}from"../../chunks/urls-d8917b2f.js";import{c as J}from"../../chunks/constructArticleUrl-dcf7d40c.js";import{E as se,s as ne}from"../../chunks/scrollRatio-8cfccdea.js";import{C as x}from"../../chunks/Container-307e9073.js";function oe(a){let e,l,s,t,n,r,c;return n=new se({props:{md:a[1]}}),{c(){e=v("a"),l=v("h3"),s=S(a[2]),t=C(),z(n.$$.fragment),this.h()},l(o){e=b(o,"A",{class:!0,href:!0});var i=$(e);l=b(i,"H3",{class:!0});var m=$(l);s=A(m,a[2]),m.forEach(_),t=I(i),H(n.$$.fragment,i),i.forEach(_),this.h()},h(){d(l,"class","svelte-1rfvfyc"),d(e,"class","card svelte-1rfvfyc"),d(e,"href",r=J(a[0]))},m(o,i){h(o,e,i),k(e,l),k(l,s),k(e,t),P(n,e,null),c=!0},p(o,[i]){(!c||i&4)&&q(s,o[2]);const m={};i&2&&(m.md=o[1]),n.$set(m),(!c||i&1&&r!==(r=J(o[0])))&&d(e,"href",r)},i(o){c||(g(n.$$.fragment,o),c=!0)},o(o){E(n.$$.fragment,o),c=!1},d(o){o&&_(e),V(n)}}}function ce(a,e,l){let s,t,n,{subject:r}=e;const c=F(r),o=j(c,D.properties.name);y(a,o,m=>l(2,n=m));const i=j(c,D.properties.description);return y(a,i,m=>l(5,t=m)),a.$$set=m=>{"subject"in m&&l(0,r=m.subject)},a.$$.update=()=>{a.$$.dirty&32&&l(1,s=`${t==null?void 0:t.slice(0,200)}${((t==null?void 0:t.length)??0)>200?"...":""}`)},[r,s,n,o,i,t]}class ae extends N{constructor(e){super(),O(this,e,ce,oe,U,{subject:0})}}function T(a,e,l){const s=a.slice();return s[5]=e[l],s}function ie(a){let e,l,s=a[1]??[],t=[];for(let r=0;r<s.length;r+=1)t[r]=K(T(a,s,r));const n=r=>E(t[r],1,1,()=>{t[r]=null});return{c(){e=v("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=b(r,"UL",{class:!0});var c=$(e);for(let o=0;o<t.length;o+=1)t[o].l(c);c.forEach(_),this.h()},h(){d(e,"class","svelte-nfcbfe")},m(r,c){h(r,e,c);for(let o=0;o<t.length;o+=1)t[o].m(e,null);l=!0},p(r,c){if(c&2){s=r[1]??[];let o;for(o=0;o<s.length;o+=1){const i=T(r,s,o);t[o]?(t[o].p(i,c),g(t[o],1)):(t[o]=K(i),t[o].c(),g(t[o],1),t[o].m(e,null))}for(B(),o=s.length;o<t.length;o+=1)n(o);R()}},i(r){if(!l){for(let c=0;c<s.length;c+=1)g(t[c]);l=!0}},o(r){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)E(t[c]);l=!1},d(r){r&&_(e),ee(t,r)}}}function ue(a){let e,l;return{c(){e=v("p"),l=S("Loading...")},l(s){e=b(s,"P",{});var t=$(e);l=A(t,"Loading..."),t.forEach(_)},m(s,t){h(s,e,t),k(e,l)},p:w,i:w,o:w,d(s){s&&_(e)}}}function K(a){let e,l,s,t;return l=new ae({props:{subject:a[5]}}),{c(){e=v("li"),z(l.$$.fragment),s=C()},l(n){e=b(n,"LI",{});var r=$(e);H(l.$$.fragment,r),s=I(r),r.forEach(_)},m(n,r){h(n,e,r),P(l,e,null),k(e,s),t=!0},p(n,r){const c={};r&2&&(c.subject=n[5]),l.$set(c)},i(n){t||(g(l.$$.fragment,n),t=!0)},o(n){E(l.$$.fragment,n),t=!1},d(n){n&&_(e),V(l)}}}function fe(a){let e,l,s,t;const n=[ue,ie],r=[];function c(o,i){return o[0].loading?0:1}return e=c(a),l=r[e]=n[e](a),{c(){l.c(),s=M()},l(o){l.l(o),s=M()},m(o,i){r[e].m(o,i),h(o,s,i),t=!0},p(o,[i]){let m=e;e=c(o),e===m?r[e].p(o,i):(B(),E(r[m],1,1,()=>{r[m]=null}),R(),l=r[e],l?l.p(o,i):(l=r[e]=n[e](o),l.c()),g(l,1),l.m(s.parentNode,s))},i(o){t||(g(l),t=!0)},o(o){E(l),t=!1},d(o){r[e].d(o),o&&_(s)}}}function _e(a,e,l){let s,t,{subject:n}=e,r=F(n);y(a,r,o=>l(0,s=o));const c=j(r,D.properties.collection.members);return y(a,c,o=>l(1,t=o)),a.$$set=o=>{"subject"in o&&l(4,n=o.subject)},[s,t,r,c,n]}class me extends N{constructor(e){super(),O(this,e,_e,fe,U,{subject:4})}}const pe=a=>({}),Q=a=>({});function de(a){let e;return{c(){e=v("div"),this.h()},l(l){e=b(l,"DIV",{class:!0}),$(e).forEach(_),this.h()},h(){d(e,"class","filler svelte-1rubomv")},m(l,s){h(l,e,s)},p:w,d(l){l&&_(e)}}}function he(a){let e,l,s,t,n;return{c(){e=v("div"),l=v("div"),this.h()},l(r){e=b(r,"DIV",{class:!0,style:!0});var c=$(e);l=b(c,"DIV",{class:!0}),$(l).forEach(_),c.forEach(_),this.h()},h(){d(l,"class","hero-image svelte-1rubomv"),d(e,"class","nothing svelte-1rubomv"),d(e,"style",s=`--image: url(${a[1]})`)},m(r,c){h(r,e,c),k(e,l),t||(n=re(ne.call(null,l,[-.5,1])),t=!0)},p(r,c){c&2&&s!==(s=`--image: url(${r[1]})`)&&d(e,"style",s)},d(r){r&&_(e),t=!1,n()}}}function ve(a){let e,l;const s=a[4]["title-card"],t=W(s,a,a[5],Q);return{c(){e=v("div"),t&&t.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var r=$(e);t&&t.l(r),r.forEach(_),this.h()},h(){d(e,"class","title-card svelte-1rubomv")},m(n,r){h(n,e,r),t&&t.m(e,null),l=!0},p(n,r){t&&t.p&&(!l||r&32)&&X(t,s,n,n[5],l?Z(s,n[5],r,pe):Y(n[5]),Q)},i(n){l||(g(t,n),l=!0)},o(n){E(t,n),l=!1},d(n){n&&_(e),t&&t.d(n)}}}function be(a){let e,l,s,t,n,r;function c(f,p){return f[0]&&f[1]?he:de}let o=c(a),i=o(a);s=new x({props:{$$slots:{default:[ve]},$$scope:{ctx:a}}});const m=a[4].default,u=W(m,a,a[5],null);return{c(){e=v("div"),i.c(),l=C(),z(s.$$.fragment),t=C(),n=v("div"),u&&u.c(),this.h()},l(f){e=b(f,"DIV",{class:!0});var p=$(e);i.l(p),l=I(p),H(s.$$.fragment,p),t=I(p),n=b(p,"DIV",{class:!0});var L=$(n);u&&u.l(L),L.forEach(_),p.forEach(_),this.h()},h(){d(n,"class","content svelte-1rubomv"),d(e,"class","hero-page-wrapper")},m(f,p){h(f,e,p),i.m(e,null),k(e,l),P(s,e,null),k(e,t),k(e,n),u&&u.m(n,null),r=!0},p(f,[p]){o===(o=c(f))&&i?i.p(f,p):(i.d(1),i=o(f),i&&(i.c(),i.m(e,l)));const L={};p&32&&(L.$$scope={dirty:p,ctx:f}),s.$set(L),u&&u.p&&(!r||p&32)&&X(u,m,f,f[5],r?Z(m,f[5],p,null):Y(f[5]),null)},i(f){r||(g(s.$$.fragment,f),g(u,f),r=!0)},o(f){E(s.$$.fragment,f),E(u,f),r=!1},d(f){f&&_(e),i.d(),V(s),u&&u.d(f)}}}function ge(a,e,l){let s,t,n,r=w,c=()=>(r(),r=te(t,u=>l(1,n=u)),t);a.$$.on_destroy.push(()=>r());let{$$slots:o={},$$scope:i}=e,{coverSubject:m}=e;return a.$$set=u=>{"coverSubject"in u&&l(2,m=u.coverSubject),"$$scope"in u&&l(5,i=u.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&l(3,s=m?F(m):void 0),a.$$.dirty&12&&c(l(0,t=m?j(s,D.properties.file.downloadUrl):void 0))},[t,n,m,s,o,i]}class $e extends N{constructor(e){super(),O(this,e,ge,be,U,{coverSubject:2})}}function ke(a){let e,l;return{c(){e=v("p"),l=S("Er zijn geen onderwerpen gevonden.")},l(s){e=b(s,"P",{});var t=$(e);l=A(t,"Er zijn geen onderwerpen gevonden."),t.forEach(_)},m(s,t){h(s,e,t),k(e,l)},p:w,i:w,o:w,d(s){s&&_(e)}}}function Ee(a){let e,l;return e=new me({props:{subject:a[3]}}),{c(){z(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,t){P(e,s,t),l=!0},p(s,t){const n={};t&8&&(n.subject=s[3]),e.$set(n)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){E(e.$$.fragment,s),l=!1},d(s){V(e,s)}}}function ye(a){let e,l,s,t,n,r,c;const o=[Ee,ke],i=[];function m(u,f){return u[3]?0:1}return t=m(a),n=i[t]=o[t](a),{c(){e=v("h2"),l=S("Onderwerpen"),s=C(),n.c(),r=M()},l(u){e=b(u,"H2",{});var f=$(e);l=A(f,"Onderwerpen"),f.forEach(_),s=I(u),n.l(u),r=M()},m(u,f){h(u,e,f),k(e,l),h(u,s,f),i[t].m(u,f),h(u,r,f),c=!0},p(u,f){let p=t;t=m(u),t===p?i[t].p(u,f):(B(),E(i[p],1,1,()=>{i[p]=null}),R(),n=i[t],n?n.p(u,f):(n=i[t]=o[t](u),n.c()),g(n,1),n.m(r.parentNode,r))},i(u){c||(g(n),c=!0)},o(u){E(n),c=!1},d(u){u&&_(e),u&&_(s),i[t].d(u),u&&_(r)}}}function je(a){let e,l;return e=new x({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){z(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,t){P(e,s,t),l=!0},p(s,t){const n={};t&1032&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){E(e.$$.fragment,s),l=!1},d(s){V(e,s)}}}function we(a){let e,l,s,t,n;return{c(){e=v("h1"),l=S(a[0]),s=C(),t=v("p"),n=S(a[1]),this.h()},l(r){e=b(r,"H1",{class:!0});var c=$(e);l=A(c,a[0]),c.forEach(_),s=I(r),t=b(r,"P",{class:!0});var o=$(t);n=A(o,a[1]),o.forEach(_),this.h()},h(){d(e,"class","svelte-1mehe4f"),d(t,"class","page-description svelte-1mehe4f")},m(r,c){h(r,e,c),k(e,l),h(r,s,c),h(r,t,c),k(t,n)},p(r,c){c&1&&q(l,r[0]),c&2&&q(n,r[1])},d(r){r&&_(e),r&&_(s),r&&_(t)}}}function Ce(a){let e,l,s,t,n;return document.title=e=a[0],t=new $e({props:{coverSubject:a[2],$$slots:{"title-card":[we],default:[je]},$$scope:{ctx:a}}}),{c(){l=v("meta"),s=C(),z(t.$$.fragment),this.h()},l(r){const c=le("svelte-178zzpy",document.head);l=b(c,"META",{name:!0,content:!0}),c.forEach(_),s=I(r),H(t.$$.fragment,r),this.h()},h(){d(l,"name","description"),d(l,"content",a[1])},m(r,c){k(document.head,l),h(r,s,c),P(t,r,c),n=!0},p(r,[c]){(!n||c&1)&&e!==(e=r[0])&&(document.title=e),(!n||c&2)&&d(l,"content",r[1]);const o={};c&4&&(o.coverSubject=r[2]),c&1035&&(o.$$scope={dirty:c,ctx:r}),t.$set(o)},i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),n=!1},d(r){_(l),r&&_(s),V(t,r)}}}function Ie(a,e,l){let s,t,n,r,{data:c}=e,{resource:o}=c;const i=j(o,D.properties.name);y(a,i,p=>l(0,s=p));const m=j(o,D.properties.description);y(a,m,p=>l(1,t=p));const u=j(o,G.articlesCollection);y(a,u,p=>l(3,r=p));const f=j(o,G.coverImage);return y(a,f,p=>l(2,n=p)),a.$$set=p=>{"data"in p&&l(8,c=p.data)},[s,t,n,r,i,m,u,f,c]}class Pe extends N{constructor(e){super(),O(this,e,Ie,Ce,U,{data:8})}}export{Pe as default};
