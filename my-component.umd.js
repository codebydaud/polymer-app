(function(s){typeof define=="function"&&define.amd?define(s):s()})(function(){"use strict";var st=Object.defineProperty;var ct=(s,u,h)=>u in s?st(s,u,{enumerable:!0,configurable:!0,writable:!0,value:h}):s[u]=h;var N=(s,u,h)=>ct(s,typeof u!="symbol"?u+"":u,h);function s(){}function u(t){return t()}function h(){return Object.create(null)}function B(t){t.forEach(u)}function C(t){return typeof t=="function"}function O(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let F;function U(t,e){return t===e?!0:(F||(F=document.createElement("a")),F.href=e,t===F.href)}function Q(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function M(){return p(" ")}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function G(t){return Array.from(t.childNodes)}function W(t,e){e=""+e,t.data!==e&&(t.data=e)}let y;function V(t){y=t}const m=[],H=[];let g=[];const I=[],Z=Promise.resolve();let q=!1;function K(){q||(q=!0,Z.then(L))}function R(t){g.push(t)}const j=new Set;let E=0;function L(){if(E!==0)return;const t=y;do{try{for(;E<m.length;){const e=m[E];E++,V(e),z(e.$$)}}catch(e){throw m.length=0,E=0,e}for(V(null),m.length=0,E=0;H.length;)H.pop()();for(let e=0;e<g.length;e+=1){const n=g[e];j.has(n)||(j.add(n),n())}g.length=0}while(m.length);for(;I.length;)I.pop()();q=!1,j.clear(),V(t)}function z(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}function P(t){const e=[],n=[];g.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),g=e}const v=new Set;function Y(t,e){t&&t.i&&(v.delete(t),t.i(e))}function X(t,e,n){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),R(()=>{const c=t.$$.on_mount.map(u).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...c):B(c),t.$$.on_mount=[]}),l.forEach(R)}function _(t,e){const n=t.$$;n.fragment!==null&&(P(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $(t,e){t.$$.dirty[0]===-1&&(m.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(t,e,n,i,l,c,a=null,k=[-1]){const S=y;V(t);const r=t.$$={fragment:null,ctx:[],props:c,update:s,not_equal:l,bound:h(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(S?S.$$.context:[])),callbacks:h(),dirty:k,skip_bound:!1,root:e.target||S.$$.root};a&&a(r.root);let w=!1;if(r.ctx=n?n(t,e.props||{},(o,A,...D)=>{const J=D.length?D[0]:A;return r.ctx&&l(r.ctx[o],r.ctx[o]=J)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](J),w&&$(t,o)),A}):[],r.update(),w=!0,B(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){const o=G(e.target);r.fragment&&r.fragment.l(o),o.forEach(x)}else r.fragment&&r.fragment.c();e.intro&&Y(t.$$.fragment),X(t,e.target,e.anchor),L()}V(S)}class et{constructor(){N(this,"$$");N(this,"$$set")}$destroy(){_(this,1),this.$destroy=s}$on(e,n){if(!C(n))return s;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nt);function it(t){let e,n,i,l,c,a,k,S,r,w;return{c(){e=b("div"),n=b("img"),l=M(),c=b("div"),a=b("h2"),k=p(t[0]),S=M(),r=b("p"),w=p(t[2]),f(n,"class","w-full h-48 object-cover"),U(n.src,i=t[1])||f(n,"src",i),f(n,"alt",t[0]),f(a,"class","text-xl font-semibold mb-2"),f(r,"class","text-gray-700"),f(c,"class","p-4"),f(e,"class","max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden")},m(o,A){T(o,e,A),d(e,n),d(e,l),d(e,c),d(c,a),d(a,k),d(c,S),d(c,r),d(r,w)},p(o,[A]){A&2&&!U(n.src,i=o[1])&&f(n,"src",i),A&1&&f(n,"alt",o[0]),A&1&&W(k,o[0]),A&4&&W(w,o[2])},i:s,o:s,d(o){o&&x(e)}}}function rt(t,e,n){let{title:i="Card Title"}=e,{imageSrc:l="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExMWFhUXFRcVFxUXGBgVFhcVFxUXFhUVFxUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA/EAABAwICBwYEBQIFBAMAAAABAAIRAyEEMQUSQVFhcYEGE5GhwfAUIrHRMkJS4fEHgjNDU2LSFZKishYjY//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAxEQACAgIABQIEBAYDAAAAAAAAAQIRAxIEEyExQQVRFEKRoSJSgdFhcbHB8PEVI1P/2gAMAwEAAhEDEQA/APNQE8KUJ4X0J49iFMpwxSY8jIqZqSgVkdROGqbHqQIQKyACI0KTSNyI2NyYiLQrFJ42jzUABuUggkstr8EsygtCI0J0JsKGcvFEahtCMwJkhGuMRsRWUyoUzCLrE3JlAiYCI0KDAjMCBE2NR2BDYEdgUsAjAjMCiwI7GqGxokxq1tHaONZp1B8zb8CDs4HNZzAtzs9iBTcSd3TisMsmo2jfEk5UzX0Bh3UmuBs6bjdy2JtK09dkEXFxzWhh8e12Sr4kyvP2e9s9HVaarsZmDo6gy+Yi59ArVMJFidrVTdkRjXQMDF0zHTmoOClTCkstUwrDQqtJyvMYVmzSIUKYUGtUgVBoQ1BtuppEKIKAM7G13Tq5BUltYvD64zuFRGE1T8+XBaxkqMZxdlQBMtang2iZE7uCdPmIOWz5Y1UoRdVLVXtnl2DhOAp6qkGoCyACmAnAUwECEAptCQCIAgQmhEaEmtRGtTEJoRGtSa1Ea1MQ7QjNCi0IjQgRJoRWhRaEZoQSSaEZjVFgWrorRFWvrd2AdUTcgTwE7VMpKKtjUW3SKTGrS0bo6pW1hTAcWiSJAMcAc1bwmgHODg46r2uDdU3i0mei7hlYNaAABAiwiy5c3E69I9Tpw8Pt1l0MXAdkwaR7wkVJsQZAG6I92V+h2XotdJ13AbHER5AFWm4oqz8XI4rgllyPyd0cWJeATNC4YAjuxfeSSORJkKvgdH0GF0Q6+brwNwGXVHqYgAHWNis2pVGYEJJzfljlovCLuJ1DUDmQ2JDshrZQfqnLZWWCc1oYEm6clSFGVsM2mk2mrLWIopLPY01M91NNqq+aM5Ifw4H4vFGwagKIWjRdZU3BoyClScZSfUcehoJiVEPQnuKg0sm+ooB6E96gaidE2WtZSgEQVTFVSbVRQ7LshMqnfJJUOz5n1E2ovQ2djKRdTLXS0fjBk632C3MT2LwlRgaGahG1ufWc17D4qCPKWCbPINROGLtu0/ZvDYWlrBzi8kBoJ8TCxNC1BTcXauscuS1jkUo7IzcGnTMluHcQTBgZ8Ewauoxdcu/C0AO2RbqVXOiWmnMw/YJBkIWT3E4+xhBqm1qO3CPJgNM8kRuEfrauqdbdtWlogA0IjQt7BdlK1QgBzQcyDIItyVPSGh6tAxUYRnBzBjiFKyRbpMbhJK6KLQiNak1qK1qsgTWorWpNYjNYmIi1qK1qdrURrUhEmNXZ9iKDmOc42BAEGRcG3quUwpGsJyXQYHTLmuEj5bc4+65+IUpRcUb4HGMlJnVYrBNNTWaSCc4Npkkkj3kFabggR+Iqvg6zXgkG0K/RIc2xXlSbXQ9SKi+pmFsHhsPBGaU+Lp6x1Jt5pqdMSGjxKd9BV1B4prS0lxsFi97fOUfSeNJGpq7c/FUaZW8I0upz5JW+hepOW3hgBESPusvR+H1itkwAssj8G2NeSyHCEz6ioVKwKiw8Vlqa7Gg18KlWxU2O+ydkyAclYrYJrv2sjou4dWugMgEAzfcitYZ4KNWjqiydtaBdAwrnKBcpNqgqT2SpGVnJoRCxSZT3pioBCeFdY0KvXhqLHRFrUyCcYAkimK0ebvo4hl6brf7ir2je0D2/LWERbW2FYrO0D4gtBVXF6RL2kFoXpcpy6SR5/MS6pm12qpU8Q0PDsgYj7dFxBbBhW4dvKh3S6McNFVmE57OwTKzhkUbDVtUyfm4FN3KkKSukRbNXCac1XAlgjKOHNT0hpVtSo2oGZRO+FkikjMbwUcuN2Vu6o6bD9oYuWG/4Y2dVsUavxVInW1XapaJgwd5XFCsYjYtTRGMeHBo8hnwgZrGeFVaNYZetMFpDsvWpAFo1xF4uRHDaqFfAVKerrtI1hInavUMITqguaRwOYTYvD06lnsDhBHjnyWceLkukkaS4WLVpnEaC7OOrFpcdRhvrWJI4CbdVr4zsQ9oc6nUDmgEtBBDzwtaeP0W1gaApfKPwjfsG5bFLFMLbO8lGTicm1x7FY+HhrUu5zGF0bTpMa19NveATMAm97nali9HUX/M4NBsTFjyVzS9UOJ1Lu2jjwWTSwFaoCN17mOnFOLb/ABN0TJJfhSsVHRFCpIYXCDz8CtPC9m6erDnv2xcQPJQ0VSdSBaRtlW8biHiDuUzyTukyoQhVyRpYbBMpgATAAHHdKsU6QbJBXOv7QiDrOAAEk7hlJ4WRaXaBh1mAyRE9RIuueUX5ZuskF2NoVASFGriWTG70WOzHynbT1zYxKeldw5l9gOlHB5kQIVOkFOu0tcWkX8kzbLddEc76uzVwJjbCuVXSFk06iuYWrFzkFlJeTaMvAS+1WaTLIgqtePNRrVQBPSFnZrVCOIDTmnqaRAWZinkqiXlUoJkPI0bzcYHZmJQ3VBNjKx21FrUyCANYZcihxoalZZw9SVoNesekIm/K6ariiocbLUqNGrUCY1Z2rEq4klCdiCnoLmGq7SBCqVsUXLPdWS71VoQ52HL0lX1klVE2efjDnckcPwXVnRlMibjrP1UBopsTM+H1XZz0cnIZy3cJdwutpaLHDqFNmjjrfhB8Ec9ByGcn8E6J1TB2xZN8NwXe4bRrtrYU62GgyWyp+JK+HOCZg3HIK7Q0I9xgFn/cF19QMdEtHUKwG0iNVzWg53A8ZUviX4Q1w68s5M9m3t/E5o5XutjsvgTTJJaCZs7O3DdmVsh9PVIgEcFCli2CwWcs05Jo0jijFpm13gi6C2kFRbiZ2ogrHYubVnTsixUot3IdOi3a2Apio6N6rVsS7cmrE2h9IYBn4hYrMfhTOZnerFSs5yydMaWbQbLjc2aN5WibirbMpOLNiri20wA9wneelvMeK8y7UdtCKz2gOLG2BuNUjN4IN7xEgi2V1ndqu0XfVmBoMhouDZroMgkXOw2N4ELlSbwQXP2kEgluyA42JtcriyZ76LsS7ka+K0xVfTAZUBv/AIYGs4M2azhNrmwbuteBW+Kr0wfn1gYfA1hYXJvGQWVQIBJFOC0tGs4gt+YmAWx+IiTA/SdyNU7yo4tI/BIOs5ogt1nZmARBgNGezNZdR6He6K0xWoRTqgtDmhwc4y4AgEFzi2HGAbax27lrYPtd8zRqPGtlAyIMFtiZdwjaF5RjHVnkOIdLmz3cP1WNGcbhMW5TsV3C6ae0sZUGuxpGqC4gQ06zmh1jdwMk7ytY5ZR6eCXja7HtvxYqAGPEEHzTFy53RfarDVWgfgfFmuMNsQILyIBNzutmuqwGH7ym2o27XCRt6GLSu+OSDXRipsFSKvU6hiyf4AxOSmyiQhtMtJorsxOqrDcfOfgpOwspNwSluJSUkSZWBzHoo/ChxsjswgCOKI5Kb9iqvuZdbCEKLAQtV9FC7hNSE4ldr7Js1bGHS+HCVjooupoL6B2LVFEbkajTaM0bUGtmEcG7cm+HcNi6J2IGwQmqPa4X+iW7Hy17nPdyUlslw3BJPYWpy7GORWA7lr1NHxcZIXwyvdMjVoHRxMC4RDVBvqotDCSnrUdijpZfWgbcVCP8Y2EDuExpncikFsq1iCZyQ3OEZq66lOxD+F4K00ZtMz+9OSg1q03YYlSbgSr3RDgyeAotABN94Wlh3NOTQAOH1VXD4U7VdpU4ssJuzeCaDQ0C1lTrCFbdTUTQBUJmjVmRWC86/qZjHsDaeu3UdePl7wO+aLR+EWuvWfgmcV4P/VjA1aeJJ70VgWk6zWgGm2TDCWk3Ai9ks07ikjLlu+pw5rEvdZxsSQcrD8TuVlPC1HOnVZrjbNiRI1mh5Frbdn1r4ZwB1y0OId8od/hxDgS5rSDYlpGyxkEKLq7BIAcRfV+fLKJt80ARs37FhRrr7GpicQ6oxga4hjAe7a8CWktmpAAuS4H5s7AmNj4HF4cPD6jqj9Zjpa1oadcyxl5IBaL6zeFswsp79UkDWmzgNkxaeIuiNqiZ/ENoNiSTJvzgylQqLWGxL6Z1gbiQbS75gRBkHPccxyVh3/2F/wCFusS4iSN8AknOT9Vj065aRqkg5OI2mTaRs4KXxB5nZckARciNtvqk4icDb0XqsdAz/utlMbpkD2V9M6FxOvhqVUjVL6bHlu4uaCfMr5iwBJAAIlzgLAnWDgGltsz53X0loUB1CjqtLG92yGluoWgNFi3ZyWmLq2JOmW8VW1rBAa1HdThO2nK6k0kS02wQaphvH6oraKmKCTkhqLA3ThF7kp9SEWh0yDiSpNoFFFSydrlNsukDfThQLVaLbKOoEkwcSrqp9RGLE0J2KiJpJ9VTaSpuEpWVRWdQlOjhqSLCjlx2nwjsqni1/wDxRG6ZwxyrM6mPqvLadLn5oraG6fNeKvU8i8L7/uZOR6t/1XDBv+Mzodb/ANZVGr2hw4/M48mn1heeMwx2T4/upjCu3T/dCiXqmXxX+fqJyO2qdqqQya484H3VKt2w/TSb1ef+K5luBqHIf+RKm3QzznPgfusn6jmfef2QbGpW7ZV9jaY6OPqh0+1eIJu5oHBo9VWZoMcfBHp6APAdFnLj5/nZOwer2qqD8/k30CrP7YYnY4Dm0H0Rx2fP6vIIrOzo/V5LL4yS+eX1YWypT7W4wn/F/wDBv/FW6PazFbS4/wBjB6Kw3QP/AOh8EanoRgze4qXx0vzP6sLkKl2txO1k8wB9Fcodq622iEJmjKQ2n31RhhmDJT8flXaT+rHtIuUO0s50j0I+68p/q7psVa4YwZUg1xyvrEwf1QPBel6jR/P7LJqdmcE57qjsOxznO1iTe+0ict9tt10YfVZJ/wDa7X6DU/c8S0f2er4hlSqxrdSm0l7i9rWtABMXO4TuUcVoyrSs5j2tmD3lMthwv+B2ZAi/HivddGaGwuGBFGi1kiHEXLhuc43I5ommMBSxVI0qslhIJhxBkGRB2LX/AJiO/b8P3G8p88VHyHaxl0iMhA4iOWW/aoF8kySZizctbd5Zhevs7Cso1KD8PVLe7eHVC+C9wDphj2gFnyl7SMjaRtWZ/VDQdEGhXptFN9Ss2i8gWcHAkPLbfMIN8zPJdMPU8M8ihHz9ilkTdHDaE0bUrPFNjQdZri1jnNbIBMlsnPO4v0VjGaHqUH6lWmWkjWblOrMZibbLG3VeodmuyFDCPLjFR1tVzqbQ5jrhxaZsC3VtE2N7wOmqMa8QW6w3ESM5y1TtA8Fx5fWorJUFcfoZvKfPpfTpOFtuy8GLn5szMTsI3r2XsFpBz8Iw03usXNILsiDYReLRbcud0j/TucbTLKdWph3tf3zi86zHmSH65+ZxJ1dhyvMldT2c7LtwLXspmo4OMy9wkWyENA37EuN4/FPEuW3ff/Y3NUdAzHVRmfGPVGGlKg3eSzjRd+l3jPohVMO7aHLy1xuf/wBJfV/uTzDV/wCrVP1gdB6oZ0y//U8mrHqYU7CR0CA/Bk7T1+ipcXlffJL6sfNN3/rj/wBc9GqP/wAicM79PsueqYR2xVH4OpsHgtocVlXbI/qxc07FvagbWeB9CFZo9qKBz1m8xI8iuCfTrDZPMEoZ7z9Dhyn6FdeP1LiF8yf86/tQ1kPUaGmsO7Kqz+46v/tCvU6gN2kEbwZHkvIGmobAO6SrGHw+ImWtcDvPynxXVD1WXzRX1r9y1kPWioFcHhK+Mb/mOHAku8iCFp0NM4kfiLHc238iFvH1bD8yaHzEdSFIFYNPtAfzUvAn6EIo7Qt203eP7LdepcM/m/qPmR9zaSWSNPs/Q/y+6Sr4/hvzoN4+5xQ0RU/T5s9FNujXj8p8R91ujFBOcUOC+ReRkamK3AO/T5j7ojcG/wDT9PutMVmqfxAS3FqZowzx+U+Sm2k/cfJXDimpfFNS2CirquGwp/n3Kz37U4rNS2FRXBfuKXeO3HwVoVtyk3EcAjZBRROIcNn1UfjVqNxfRTGK9ylaDV+5kfFOOQJ5AlEYapypv8CFrDFFM/EneffRFJi0/iUW4OsfyRzP2Vinox35nDoJ8ynfiHcPfqszSOkKrRZoN+CaxphrFdzZGAaM78z9kz2sZc6jecepXA47SOMdIDmtE7LmN17eSxa+BqvMvLnHiT9Ml1Q4VeWieZFdkeiYztThKUzXZItDfmM8mheb/wBRO0vxjsOykx+pSq965xgFxEAaondrZxmEw0Q/9Kk3Rj/0Lswwx4pbd2LnUztMP2/oPuQ9h3OaDHVpKtM7YYZ3+bH9rvsuGbgHj8iK3Av/ANNYvBi8C5sjvqem6DjArN8QrLcQDlUB6j0XAU9GuP8AlHwCtU9E1djHjospYYLsw5kjuxrbHFPLt8+K4+jgcSMi8df3WlhziW5vPWCsZQS8opZPdG6S7goO1twVNlV8Xc1TZU/3DxPqoL2DEcAhOpg7vD9lIO4hPKdCBjDjgkKI3DwUu8UTV9/sp1Yiepx8kveSA+uh/EcfqnqFotEcfJQMbyqzqo3hRNYfqCaiK0WTCYkKsaw3+ai6sN/mnqFos6/uySqE8R4lOnoKyq6sDl78CmFTjlwnwVPvCd31/lLvff7I1NLNHvhv8/3SbUG/qFRDpH7KLanu6WobGi17UQVQP2usw1efP+VJtfn75pajs0hXT97t9+azxUPuFLvOHvxS1FsaDcQN46IrMVy98lmh/HwT95y8+m1KkNSNVtef2T96OvL6rKNUbY8fRIYjK9uh85S1Hsawrj3CkMSsxmJnbf31RRVO362SaCzT7/enLmnMBZbak7fO/qkyuRsHW3hKVMLNM0qf6QVD4aif8seH7qqMQpGqD/EItoOhZGDo/wCmFIYamPy+SrNr8eil8SAjZiqJa7hmwBSFDcB5Ku3EqfflTbHURVGOGyyCeSN39/38k3eg7J8ChSJaRWceaA8q+4MjLbyE7FE4VpyMK1NCcSgXKLTy98FfOB5Hr6FAdgyNipTQtWADhuUBU5o5wxQnUXDimpIlxZDvz0S747woOaeCCCTNv3VXZLiw7sQeB98lB1c7Wj30Qr7h4ob2nNUhdQhxP+0HwQXYwfpPgo5byka0fl+ipE0xzWHFRFVm7rCRrDcfFR71u7zVA0wvejj5pKArDd5pkgSZRbiuX08kjiAdv0WaK3H0UmuHu600NLL7q8bfJRZX5qmSNw99U5rxaD73I1HZqNrjn75JB4/nIdYWYMVBuY6eqIzEE/zv6qeWBp95x5b0qeI2Z8wZjqs1z3bLcP4PombXnMHpkeuX8paBZqGtut75KXfGInLn9RmsxtQm3vygI7XbLeJClxoZbFWdnlc9JyU+82/sqTapGYHvrKmK4P2vlyS1AutqbgfL7IofawPkfMFZuu3dPMQiNDYmxnl4JOIzRNbfPKw+phMXDht5qi14OYA5z0lMHxZsTw+4FuqWo0y82v8AyBHrfyRBVMXb0yP281SFQ2kR5qfK+zZbLjn4pUFlwExa3MGfIone7ysziMuHrdSFXj4zbkUnEVmsKo3n6ooq+9qyRU93Sp1ffvJQ4BZr96nbUG/0+qyxUPuPJEDifYhTqOzSa/b74J+89hZore9h8lIVt/ojULNEVuJRm1yNvqshu8Ez4fVE7w7iPVJxCzV70HMA+ClLCsoYhJ2ItbPfAN0tWNSNF2Hacj09Dw4oT8EDmB0O1VW4sZSJ3A+hCMzEnfPRH4kPZAauCGyQenqq1TDHd72rRFcHPzUpb7uqU2iXTMIt97ue5QfT9+5W53TCI9hAr4IbD75K1lQnH2MMh2f7ILuUrVrYN4JNjaLW5kz0VSpSvlflBIG8rdTTJaKYdwSRTSBt6hJVaJo5VlQ+wEWiZEnf9kkl2SKZJjjPRWKYuUkllIRXrOMi5yG1JxNkkla7FBgbHl6qbR8p5nO6ZJZskk8REcE+YE7/AEKSSXgPAdjrIjT9EklmxocmBbmpveY8EkkmDCaxGXBRbUJ1rmwHD6JJJUMlhDrAk5gkdAYE70WkflSSUy7sCbXHVnhPsJwb9EklIyT7T19FKmbeCSSnwSNReZhEq2ySSQ+4yLHn0+inrXjqkkhgwgFuvPenpmQSd/uySSgQQmw5E+aQcfEBJJIZNpT1DEcwN/1SSS8h5DloiUAOMxzSSSQ2GBt4eicOMdR5wkkgAoddNVpDdw9hJJSu40Z9eg2cvMhJJJbpuiW2f//Z"}=e,{content:c="This is some content inside the card."}=e;return t.$$set=a=>{"title"in a&&n(0,i=a.title),"imageSrc"in a&&n(1,l=a.imageSrc),"content"in a&&n(2,c=a.content)},[i,l,c]}class ot extends et{constructor(e){super(),tt(this,e,rt,it,O,{title:0,imageSrc:1,content:2})}}customElements.define("my-card",class extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._svelteComponent=new ot({target:this._shadowRoot,props:{label:this.getAttribute("label")||"Click me"}})}static get observedAttributes(){return["label"]}attributeChangedCallback(t,e,n){t==="label"&&this._svelteComponent.$set({label:n})}})});
