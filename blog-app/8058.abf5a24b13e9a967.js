"use strict";(self.webpackChunkblog_app=self.webpackChunkblog_app||[]).push([[8058],{8058:(y,h,p)=>{p.r(h),p.d(h,{startTapClick:()=>M});var i=p(6225),u=p(839);const M=s=>{if(void 0===i.d)return;let e,E,c,o=10*-v,r=0;const O=s.getBoolean("animated",!0)&&s.getBoolean("rippleEffect",!0),f=new WeakMap,L=t=>{o=(0,u.u)(t),R(t)},A=()=>{c&&clearTimeout(c),c=void 0,e&&(b(!1),e=void 0)},D=t=>{e||_(S(t),t)},R=t=>{_(void 0,t)},_=(t,n)=>{if(t&&t===e)return;c&&clearTimeout(c),c=void 0;const{x:d,y:a}=(0,u.v)(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||w(e,d,a),b(!0)}if(t){const g=f.get(t);g&&(clearTimeout(g),f.delete(t)),t.classList.remove(l);const I=()=>{w(t,d,a),c=void 0};T(t)?I():c=setTimeout(I,k)}e=t},w=(t,n,d)=>{if(r=Date.now(),t.classList.add(l),!O)return;const a=P(t);null!==a&&(C(),E=a.addRipple(n,d))},C=()=>{void 0!==E&&(E.then(t=>t()),E=void 0)},b=t=>{C();const n=e;if(!n)return;const d=m-Date.now()+r;if(t&&d>0&&!T(n)){const a=setTimeout(()=>{n.classList.remove(l),f.delete(n)},m);f.set(n,a)}else n.classList.remove(l)};i.d.addEventListener("ionGestureCaptured",A),i.d.addEventListener("touchstart",t=>{o=(0,u.u)(t),D(t)},!0),i.d.addEventListener("touchcancel",L,!0),i.d.addEventListener("touchend",L,!0),i.d.addEventListener("pointercancel",A,!0),i.d.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.u)(t)-v;o<n&&D(t)},!0),i.d.addEventListener("mouseup",t=>{const n=(0,u.u)(t)-v;o<n&&R(t)},!0)},S=s=>{if(void 0===s.composedPath)return s.target.closest(".ion-activatable");{const o=s.composedPath();for(let r=0;r<o.length-2;r++){const e=o[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},T=s=>s.classList.contains("ion-activatable-instant"),P=s=>{if(s.shadowRoot){const o=s.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return s.querySelector("ion-ripple-effect")},l="ion-activated",k=100,m=150,v=2500}}]);