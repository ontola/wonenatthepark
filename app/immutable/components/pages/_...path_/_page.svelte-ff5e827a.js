import{S as T,i as B,s as F,k as v,q as K,a as I,w as A,l as $,m as b,r as Q,h as d,c as S,x as C,n as h,b as E,I as p,y as H,u as W,f as k,t as w,z as M,C as L,E as N,F as O,G as P,B as j,M as V,N as X,O as Y}from"../../../chunks/index-bd36da04.js";import{E as Z,s as x}from"../../../chunks/scrollRatio-8cfccdea.js";import{z as U,V as D,u as z}from"../../../chunks/urls-98b34cbf.js";import{C as ee}from"../../../chunks/Container-307e9073.js";import{d as te}from"../../../chunks/domainSubjects-7c5e407f.js";function se(n){let e,t,r,l,s,i,a,f;return a=new Z({props:{md:n[1]}}),{c(){e=v("article"),t=v("h1"),r=K(n[0]),l=I(),s=v("div"),i=I(),A(a.$$.fragment),this.h()},l(o){e=$(o,"ARTICLE",{class:!0});var _=b(e);t=$(_,"H1",{class:!0});var c=b(t);r=Q(c,n[0]),c.forEach(d),l=S(_),s=$(_,"DIV",{class:!0}),b(s).forEach(d),i=S(_),C(a.$$.fragment,_),_.forEach(d),this.h()},h(){h(t,"class","svelte-i6yvt7"),h(s,"class","divider svelte-i6yvt7"),h(e,"class","svelte-i6yvt7")},m(o,_){E(o,e,_),p(e,t),p(t,r),p(e,l),p(e,s),p(e,i),H(a,e,null),f=!0},p(o,[_]){(!f||_&1)&&W(r,o[0]);const c={};_&2&&(c.md=o[1]),a.$set(c)},i(o){f||(k(a.$$.fragment,o),f=!0)},o(o){w(a.$$.fragment,o),f=!1},d(o){o&&d(e),M(a)}}}function re(n,e,t){let{title:r}=e,{markdown:l=""}=e;return n.$$set=s=>{"title"in s&&t(0,r=s.title),"markdown"in s&&t(1,l=s.markdown)},[r,l]}class ne extends T{constructor(e){super(),B(this,e,re,se,F,{title:0,markdown:1})}}const le=n=>({}),G=n=>({});function ae(n){let e;return{c(){e=v("div"),this.h()},l(t){e=$(t,"DIV",{class:!0}),b(e).forEach(d),this.h()},h(){h(e,"class","filler svelte-1j4xr7t")},m(t,r){E(t,e,r)},p:j,d(t){t&&d(e)}}}function ie(n){let e,t,r,l,s;return{c(){e=v("div"),t=v("div"),this.h()},l(i){e=$(i,"DIV",{class:!0,style:!0});var a=b(e);t=$(a,"DIV",{class:!0}),b(t).forEach(d),a.forEach(d),this.h()},h(){h(t,"class","hero-image svelte-1j4xr7t"),h(e,"class","nothing"),h(e,"style",r=`--image: url(${n[1]})`)},m(i,a){E(i,e,a),p(e,t),l||(s=X(x.call(null,t,[-.5,1])),l=!0)},p(i,a){a&2&&r!==(r=`--image: url(${i[1]})`)&&h(e,"style",r)},d(i){i&&d(e),l=!1,s()}}}function oe(n){let e,t;const r=n[4].article,l=L(r,n,n[5],G);return{c(){e=v("div"),l&&l.c(),this.h()},l(s){e=$(s,"DIV",{class:!0});var i=b(e);l&&l.l(i),i.forEach(d),this.h()},h(){h(e,"class","article svelte-1j4xr7t")},m(s,i){E(s,e,i),l&&l.m(e,null),t=!0},p(s,i){l&&l.p&&(!t||i&32)&&N(l,r,s,s[5],t?P(r,s[5],i,le):O(s[5]),G)},i(s){t||(k(l,s),t=!0)},o(s){w(l,s),t=!1},d(s){s&&d(e),l&&l.d(s)}}}function ce(n){let e,t,r,l,s,i;function a(u,m){return u[0]&&u[1]?ie:ae}let f=a(n),o=f(n);r=new ee({props:{$$slots:{default:[oe]},$$scope:{ctx:n}}});const _=n[4].default,c=L(_,n,n[5],null);return{c(){e=v("div"),o.c(),t=I(),A(r.$$.fragment),l=I(),s=v("div"),c&&c.c(),this.h()},l(u){e=$(u,"DIV",{});var m=b(e);o.l(m),t=S(m),C(r.$$.fragment,m),l=S(m),s=$(m,"DIV",{class:!0});var g=b(s);c&&c.l(g),g.forEach(d),m.forEach(d),this.h()},h(){h(s,"class","content svelte-1j4xr7t")},m(u,m){E(u,e,m),o.m(e,null),p(e,t),H(r,e,null),p(e,l),p(e,s),c&&c.m(s,null),i=!0},p(u,[m]){f===(f=a(u))&&o?o.p(u,m):(o.d(1),o=f(u),o&&(o.c(),o.m(e,t)));const g={};m&32&&(g.$$scope={dirty:m,ctx:u}),r.$set(g),c&&c.p&&(!i||m&32)&&N(c,_,u,u[5],i?P(_,u[5],m,null):O(u[5]),null)},i(u){i||(k(r.$$.fragment,u),k(c,u),i=!0)},o(u){w(r.$$.fragment,u),w(c,u),i=!1},d(u){u&&d(e),o.d(),M(r),c&&c.d(u)}}}function ue(n,e,t){let r,l,s,i=j,a=()=>(i(),i=V(l,c=>t(1,s=c)),l);n.$$.on_destroy.push(()=>i());let{$$slots:f={},$$scope:o}=e,{coverSubject:_}=e;return n.$$set=c=>{"coverSubject"in c&&t(2,_=c.coverSubject),"$$scope"in c&&t(5,o=c.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&t(3,r=_?U(_):void 0),n.$$.dirty&12&&a(t(0,l=_?D(r,z.properties.file.downloadUrl):void 0))},[l,s,_,r,f,o]}class fe extends T{constructor(e){super(),B(this,e,ue,ce,F,{coverSubject:2})}}function _e(n){let e,t;return e=new ne({props:{title:n[3]??"",markdown:n[4]??""}}),{c(){A(e.$$.fragment)},l(r){C(e.$$.fragment,r)},m(r,l){H(e,r,l),t=!0},p(r,l){const s={};l&8&&(s.title=r[3]??""),l&16&&(s.markdown=r[4]??""),e.$set(s)},i(r){t||(k(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){M(e,r)}}}function me(n){let e,t,r,l,s,i;return document.title=e=n[3],s=new fe({props:{coverSubject:n[5],$$slots:{article:[_e]},$$scope:{ctx:n}}}),{c(){t=v("meta"),l=I(),A(s.$$.fragment),this.h()},l(a){const f=Y("svelte-11dugbs",document.head);t=$(f,"META",{name:!0,content:!0}),f.forEach(d),l=S(a),C(s.$$.fragment,a),this.h()},h(){var a;h(t,"name","description"),h(t,"content",r=((a=n[4])==null?void 0:a.slice(0,100))+"...")},m(a,f){p(document.head,t),E(a,l,f),H(s,a,f),i=!0},p(a,[f]){var _;(!i||f&8)&&e!==(e=a[3])&&(document.title=e),(!i||f&16&&r!==(r=((_=a[4])==null?void 0:_.slice(0,100))+"..."))&&h(t,"content",r);const o={};f&32&&(o.coverSubject=a[5]),f&536&&(o.$$scope={dirty:f,ctx:a}),s.$set(o)},i(a){i||(k(s.$$.fragment,a),i=!0)},o(a){w(s.$$.fragment,a),i=!1},d(a){d(t),a&&d(l),M(s,a)}}}function de(n,e,t){let r,l,s,i,a,f,o=j,_=()=>(o(),o=V(s,y=>t(3,f=y)),s),c,u=j,m=()=>(u(),u=V(i,y=>t(4,c=y)),i),g,R=j,J=()=>(R(),R=V(a,y=>t(5,g=y)),a);n.$$.on_destroy.push(()=>o()),n.$$.on_destroy.push(()=>u()),n.$$.on_destroy.push(()=>R());let{data:q}=e;return n.$$set=y=>{"data"in y&&t(6,q=y.data)},n.$$.update=()=>{n.$$.dirty&64&&t(8,{subject:r}=q,r),n.$$.dirty&256&&t(7,l=U(r)),n.$$.dirty&128&&_(t(2,s=D(l,z.properties.name))),n.$$.dirty&128&&m(t(1,i=D(l,z.properties.description))),n.$$.dirty&128&&J(t(0,a=D(l,te.coverImage)))},[a,i,s,f,c,g,q,l,r]}class ge extends T{constructor(e){super(),B(this,e,de,me,F,{data:6})}}export{ge as default};
