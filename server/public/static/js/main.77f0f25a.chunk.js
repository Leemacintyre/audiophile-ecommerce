(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(C,e,t){},64:function(C,e,t){},66:function(C,e,t){},67:function(C,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),a=t(11),c=t.n(a),o=t(13),s=t(9),i=(t(41),t(30)),l=t(8),u=t.n(l),j=t(10),d=t(27),h=t(28),p=t.n(h),v=function(){var C=Object(d.a)(u.a.mark((function C(){var e,t;return u.a.wrap((function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,p.a.get("https://the-dealer-portal.herokuapp.com/v1/shopData");case 2:return e=C.sent,t=e.data,console.log("axios",t),C.abrupt("return",t);case 6:case"end":return C.stop()}}),C)})));return function(){return C.apply(this,arguments)}}(),b="FETCH_SHOP_DATA_START",O="FETCH_SHOP_DATA_SUCCESS",f="FETCH_SHOP_DATA_FAILURE",x=u.a.mark(m),g=u.a.mark(y);function m(){var C;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("i am fired");case 2:return e.prev=2,e.next=5,Object(j.a)(v);case 5:return C=e.sent,e.next=8,Object(j.b)({type:O,payload:C});case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),e.next=14,Object(j.b)((t=e.t0.message,{type:f,payload:t}));case 14:case"end":return e.stop()}var t}),x,null,[[2,10]])}function y(){return u.a.wrap((function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Object(j.c)(b,m);case 2:case"end":return C.stop()}}),g)}var w=t(17),D={shopData:null},S=Object(s.b)({shopData:function(){var C=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;return e.type===O?Object(w.a)(Object(w.a)({},C),{},{shopData:e.payload}):C}}),N=Object(i.a)(),k=[N];var L=Object(s.d)(S,s.a.apply(void 0,k));N.run(y);var M,P=L,E=(t(63),t(64),["title","titleId"]);function T(){return T=Object.assign||function(C){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(C[n]=t[n])}return C},T.apply(this,arguments)}function Z(C,e){if(null==C)return{};var t,n,r=function(C,e){if(null==C)return{};var t,n,r={},a=Object.keys(C);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=C[t]);return r}(C,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(C);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(C,t)&&(r[t]=C[t])}return r}function _(C,e){var t=C.title,r=C.titleId,a=Z(C,E);return n.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",ref:e,"aria-labelledby":r},a),t?n.createElement("title",{id:r},t):null,M||(M=n.createElement("path",{d:"M 25 0 C 22.433594 0 20.3125 2.121094 20.3125 4.6875 C 20.3125 5.265625 20.460938 5.75 20.59375 6.1875 C 20.660156 6.40625 20.734375 6.609375 20.78125 6.75 C 20.789063 6.78125 20.804688 6.789063 20.8125 6.8125 C 20.816406 6.828125 20.8125 6.902344 20.8125 6.90625 C 20.835938 6.984375 20.867188 7.054688 20.90625 7.125 C 22.082031 9.574219 22.554688 11.203125 22.625 12.125 C 22.625 12.136719 22.625 12.144531 22.625 12.15625 C 20.761719 12.527344 19.0625 13.269531 17.59375 14.28125 C 17.492188 14.179688 17.410156 14.066406 17.3125 13.9375 C 16.769531 13.21875 16.480469 12.0625 16.5625 11.71875 C 16.582031 11.648438 16.589844 11.574219 16.59375 11.5 L 16.59375 11.3125 C 16.679688 10.992188 16.8125 10.664063 16.8125 10.1875 C 16.8125 7.621094 14.660156 5.5 12.09375 5.5 C 9.527344 5.5 7.40625 7.621094 7.40625 10.1875 C 7.40625 12.179688 8.664063 13.96875 10.53125 14.625 C 10.554688 14.632813 10.570313 14.648438 10.59375 14.65625 C 11.492188 15.039063 12.722656 15.894531 13.5625 16.8125 C 13.839844 17.113281 14.046875 17.429688 14.21875 17.71875 C 12.824219 19.792969 12 22.3125 12 25 C 12 25.882813 12.117188 26.730469 12.21875 27.53125 C 12.222656 27.59375 12.234375 27.65625 12.25 27.71875 C 12.25 27.726563 12.25 27.742188 12.25 27.75 C 12.25 27.769531 12.25 27.792969 12.25 27.8125 C 12.214844 28.015625 12.0625 28.085938 11.8125 28.21875 C 11.445313 28.414063 10.804688 28.371094 10.8125 28.375 L 10.78125 28.40625 C 10.089844 27.984375 9.300781 27.6875 8.40625 27.6875 C 5.839844 27.6875 3.6875 29.839844 3.6875 32.40625 C 3.6875 34.972656 5.839844 37.09375 8.40625 37.09375 C 9.941406 37.09375 11.308594 36.347656 12.1875 35.21875 C 12.199219 35.207031 12.207031 35.199219 12.21875 35.1875 C 12.726563 34.46875 13.425781 33.882813 14 33.65625 C 14.574219 33.429688 14.890625 33.449219 15.3125 33.84375 C 15.410156 33.9375 15.527344 34.015625 15.65625 34.0625 C 17.722656 36.105469 20.46875 37.535156 23.5 37.90625 C 23.570313 38.34375 23.605469 38.765625 23.5625 39.15625 C 23.449219 40.207031 22.933594 41.050781 22.59375 41.3125 C 21.253906 42.105469 20.3125 43.589844 20.3125 45.3125 C 20.3125 47.878906 22.433594 50 25 50 C 27.566406 50 29.6875 47.878906 29.6875 45.3125 C 29.6875 43.398438 29.132813 41.066406 28.75 39.0625 C 28.648438 38.519531 28.5625 38 28.5 37.53125 C 31.734375 36.585938 34.453125 34.496094 36.1875 31.65625 C 36.667969 31.867188 37.191406 32.238281 37.65625 32.6875 C 38.585938 33.582031 39.25 34.625 39.25 34.625 C 39.355469 34.789063 39.507813 34.921875 39.6875 35 C 39.71875 35.023438 39.75 35.042969 39.78125 35.0625 C 40.609375 36.261719 41.859375 37.1875 43.5 37.1875 C 46.066406 37.1875 48.1875 35.066406 48.1875 32.5 C 48.1875 29.933594 46.066406 27.8125 43.5 27.8125 C 42.675781 27.8125 41.855469 28.058594 41.125 28.5 L 41.09375 28.46875 C 40.238281 28.839844 39.578125 28.722656 38.78125 28.34375 C 38.433594 28.179688 38.074219 27.957031 37.71875 27.71875 C 37.921875 26.820313 38 25.9375 38 25 L 38 24.625 C 38.011719 24.59375 38.023438 24.5625 38.03125 24.53125 C 38.066406 24.488281 38.152344 24.371094 38.3125 24.28125 C 38.628906 24.097656 39.148438 23.894531 39.71875 23.71875 C 40.863281 23.367188 42.296875 23.167969 43.40625 23.375 L 43.40625 23.34375 C 43.734375 23.445313 44.078125 23.5 44.3125 23.5 C 46.347656 23.5 48.09375 21.828125 48.09375 19.6875 C 48.09375 17.546875 46.246094 16 44.1875 16 C 42.789063 16 41.59375 16.800781 41 17.96875 L 40.96875 17.9375 C 40.601563 18.457031 39.542969 19.078125 38.53125 19.25 C 38.023438 19.335938 37.542969 19.324219 37.1875 19.21875 C 36.832031 19.113281 36.628906 18.957031 36.46875 18.6875 C 36.394531 18.574219 36.300781 18.480469 36.1875 18.40625 C 36.167969 18.382813 36.148438 18.363281 36.125 18.34375 C 34.523438 15.679688 32.015625 13.59375 29 12.625 C 28.960938 12.601563 28.917969 12.582031 28.875 12.5625 C 28.84375 12.550781 28.8125 12.539063 28.78125 12.53125 C 27.5 11.976563 27.367188 11.289063 27.40625 10.40625 C 27.445313 9.511719 27.933594 8.484375 28.125 8.1875 C 28.128906 8.183594 28.121094 8.160156 28.125 8.15625 C 28.769531 7.238281 29.6875 6.265625 29.6875 4.6875 C 29.6875 2.121094 27.566406 0 25 0 Z M 25 2 C 26.433594 2 27.6875 3.253906 27.6875 4.6875 C 27.6875 5.5 27.222656 5.953125 26.46875 7.03125 C 26.054688 7.652344 25.46875 8.84375 25.40625 10.3125 C 25.347656 11.6875 26.03125 13.355469 27.78125 14.25 C 27.8125 14.273438 27.84375 14.292969 27.875 14.3125 C 27.925781 14.347656 27.976563 14.378906 28.03125 14.40625 C 28.0625 14.421875 28.09375 14.425781 28.125 14.4375 C 28.183594 14.464844 28.25 14.484375 28.3125 14.5 C 31.007813 15.335938 33.261719 17.238281 34.625 19.6875 C 34.71875 19.859375 34.859375 20 35.03125 20.09375 C 35.460938 20.605469 36.027344 20.949219 36.625 21.125 C 37.359375 21.34375 38.132813 21.34375 38.875 21.21875 C 40.363281 20.964844 41.792969 20.242188 42.625 19.0625 C 42.660156 19.011719 42.691406 18.960938 42.71875 18.90625 C 42.960938 18.363281 43.449219 18 44.1875 18 C 45.328125 18 46.09375 18.628906 46.09375 19.6875 C 46.09375 20.746094 45.277344 21.5 44.3125 21.5 C 44.011719 21.5 44.023438 21.480469 44.0625 21.5 C 43.972656 21.453125 43.878906 21.421875 43.78125 21.40625 C 42.1875 21.113281 40.507813 21.386719 39.125 21.8125 C 38.433594 22.023438 37.8125 22.273438 37.3125 22.5625 C 36.859375 22.824219 36.417969 23.015625 36.1875 23.65625 C 36.050781 23.847656 35.984375 24.078125 36 24.3125 L 36 25 C 36 25.566406 35.972656 26.09375 35.90625 26.59375 C 35.832031 26.585938 35.761719 26.585938 35.6875 26.59375 C 35.65625 26.59375 35.625 26.59375 35.59375 26.59375 C 35.179688 26.664063 34.855469 26.984375 34.78125 27.394531 C 34.703125 27.808594 34.890625 28.222656 35.25 28.4375 C 35.390625 28.53125 35.589844 28.667969 35.75 28.78125 C 35.867188 28.941406 36.03125 29.058594 36.21875 29.125 C 36.726563 29.484375 37.285156 29.847656 37.9375 30.15625 C 39.042969 30.679688 40.460938 30.941406 41.90625 30.3125 C 41.960938 30.285156 42.011719 30.253906 42.0625 30.21875 C 42.492188 29.933594 42.992188 29.8125 43.5 29.8125 C 44.933594 29.8125 46.1875 31.066406 46.1875 32.5 C 46.1875 33.933594 44.933594 35.1875 43.5 35.1875 C 42.398438 35.1875 41.542969 34.558594 41.09375 33.65625 C 40.996094 33.46875 40.84375 33.316406 40.65625 33.21875 C 40.472656 32.9375 40.035156 32.1875 39.0625 31.25 C 38.488281 30.699219 37.804688 30.164063 37 29.8125 C 36.722656 29.691406 36.433594 29.59375 36.125 29.53125 C 35.984375 29.476563 35.835938 29.457031 35.6875 29.46875 C 35.21875 29.429688 34.726563 29.480469 34.25 29.65625 C 33.890625 29.765625 33.625 30.066406 33.558594 30.4375 C 33.496094 30.804688 33.640625 31.179688 33.9375 31.40625 C 32.628906 33.203125 30.832031 34.5625 28.71875 35.34375 C 28.902344 35.007813 28.878906 34.601563 28.660156 34.289063 C 28.441406 33.976563 28.0625 33.816406 27.6875 33.875 C 27.644531 33.882813 27.601563 33.894531 27.5625 33.90625 C 27.410156 33.945313 27.273438 34.019531 27.15625 34.125 C 26.386719 34.773438 26.378906 35.660156 26.40625 36.53125 C 26.40625 36.570313 26.40625 36.617188 26.40625 36.65625 C 26.390625 36.816406 26.410156 36.976563 26.46875 37.125 C 26.527344 37.851563 26.625 38.621094 26.78125 39.4375 C 27.175781 41.507813 27.6875 43.828125 27.6875 45.3125 C 27.6875 46.746094 26.433594 48 25 48 C 23.566406 48 22.3125 46.746094 22.3125 45.3125 C 22.3125 44.292969 22.902344 43.398438 23.6875 42.96875 C 23.730469 42.949219 23.773438 42.929688 23.8125 42.90625 C 24.773438 42.167969 25.398438 40.898438 25.5625 39.375 C 25.648438 38.585938 25.566406 37.722656 25.3125 36.84375 C 25.296875 36.746094 25.265625 36.652344 25.21875 36.5625 C 24.976563 35.84375 24.625 35.105469 24.09375 34.40625 C 23.898438 34.074219 23.535156 33.882813 23.152344 33.914063 C 22.765625 33.941406 22.4375 34.191406 22.296875 34.550781 C 22.160156 34.90625 22.238281 35.3125 22.5 35.59375 C 22.53125 35.636719 22.5625 35.675781 22.59375 35.71875 C 20.363281 35.199219 18.351563 34.019531 16.8125 32.40625 C 16.695313 32.277344 16.542969 32.179688 16.375 32.125 C 15.429688 31.453125 14.214844 31.402344 13.25 31.78125 C 12.1875 32.199219 11.3125 33.035156 10.625 34 C 10.617188 34.011719 10.601563 34.019531 10.59375 34.03125 C 10.070313 34.679688 9.257813 35.09375 8.40625 35.09375 C 6.972656 35.09375 5.6875 33.839844 5.6875 32.40625 C 5.6875 30.972656 6.972656 29.6875 8.40625 29.6875 C 9.039063 29.6875 9.371094 29.808594 9.84375 30.125 C 9.894531 30.160156 9.945313 30.191406 10 30.21875 C 10.910156 30.621094 11.84375 30.480469 12.75 30 C 13.65625 29.519531 14.472656 28.347656 14.1875 27 C 14.171875 26.9375 14.152344 26.871094 14.125 26.8125 C 14.050781 26.1875 14 25.570313 14 25 C 14 23.265625 14.414063 21.644531 15.125 20.1875 C 15.378906 20.289063 15.660156 20.28125 15.90625 20.167969 C 16.15625 20.058594 16.347656 19.851563 16.4375 19.59375 C 16.472656 19.503906 16.492188 19.410156 16.5 19.3125 L 16.5 19.1875 C 16.609375 18.667969 16.558594 18.140625 16.40625 17.65625 C 16.390625 17.546875 16.359375 17.441406 16.3125 17.34375 C 16.304688 17.324219 16.289063 17.300781 16.28125 17.28125 C 16.261719 17.25 16.242188 17.21875 16.21875 17.1875 C 15.925781 16.574219 15.523438 16.003906 15.03125 15.46875 C 13.960938 14.304688 12.578125 13.3125 11.28125 12.78125 C 11.261719 12.769531 11.238281 12.757813 11.21875 12.75 C 10.125 12.386719 9.40625 11.371094 9.40625 10.1875 C 9.40625 8.753906 10.660156 7.5 12.09375 7.5 C 13.527344 7.5 14.8125 8.753906 14.8125 10.1875 C 14.8125 10.421875 14.734375 10.625 14.625 11.0625 C 14.605469 11.144531 14.59375 11.226563 14.59375 11.3125 L 14.59375 11.5 L 14.625 11.5 C 14.410156 12.785156 14.878906 14.085938 15.6875 15.15625 C 15.960938 15.515625 16.285156 15.828125 16.65625 16.09375 C 16.851563 16.4375 17.230469 16.632813 17.625 16.59375 C 18.269531 16.777344 19.03125 16.734375 19.6875 16.375 C 20.144531 16.125 20.335938 15.570313 20.125 15.09375 C 20.628906 14.84375 21.171875 14.644531 21.71875 14.46875 C 21.800781 14.769531 22.015625 15.015625 22.300781 15.140625 C 22.585938 15.261719 22.914063 15.246094 23.1875 15.09375 C 23.742188 14.796875 24.164063 14.261719 24.40625 13.59375 C 24.574219 13.371094 24.640625 13.085938 24.59375 12.8125 C 24.628906 12.550781 24.644531 12.285156 24.625 12 C 24.523438 10.648438 23.914063 8.933594 22.78125 6.53125 C 22.777344 6.511719 22.785156 6.453125 22.78125 6.4375 C 22.769531 6.394531 22.757813 6.34375 22.75 6.3125 C 22.730469 6.25 22.710938 6.199219 22.6875 6.125 C 22.640625 5.976563 22.558594 5.785156 22.5 5.59375 C 22.382813 5.207031 22.3125 4.710938 22.3125 4.6875 C 22.3125 3.253906 23.566406 2 25 2 Z M 37 6.09375 C 34.816406 6.09375 33 7.910156 33 10.09375 C 33 11.046875 32.851563 11.527344 32.78125 11.6875 C 32.765625 11.71875 32.789063 11.707031 32.78125 11.71875 C 32.769531 11.734375 32.734375 11.765625 32.75 11.75 C 32.367188 12.078125 32.289063 12.640625 32.566406 13.0625 C 32.84375 13.480469 33.390625 13.628906 33.84375 13.40625 C 33.84375 13.40625 34.082031 13.242188 34.21875 13.09375 C 34.355469 12.945313 34.511719 12.757813 34.625 12.5 C 34.851563 11.988281 35 11.238281 35 10.09375 C 35 9.078125 35.984375 8.09375 37 8.09375 C 38.058594 8.09375 39 8.941406 39 10.09375 C 39 11.109375 38.015625 12.09375 37 12.09375 C 35.449219 12.09375 34.78125 13.4375 34.78125 13.4375 C 34.46875 13.894531 34.589844 14.515625 35.046875 14.828125 C 35.503906 15.140625 36.125 15.019531 36.4375 14.5625 C 36.4375 14.5625 36.949219 14.09375 37 14.09375 C 39.183594 14.09375 41 12.277344 41 10.09375 C 41 7.84375 39.140625 6.09375 37 6.09375 Z M 28 16.5 C 25.527344 16.5 23.5 18.527344 23.5 21 C 23.5 23.472656 25.527344 25.5 28 25.5 C 30.472656 25.5 32.5 23.472656 32.5 21 C 32.5 18.527344 30.472656 16.5 28 16.5 Z M 5.59375 18.40625 C 3.558594 18.40625 1.8125 20.046875 1.8125 22.1875 C 1.8125 24.328125 3.558594 26 5.59375 26 C 6.359375 26 6.976563 25.730469 7.4375 25.5 C 8.4375 25 9.109375 24.65625 10.0625 24.875 C 10.421875 24.992188 10.816406 24.902344 11.082031 24.636719 C 11.347656 24.371094 11.445313 23.976563 11.328125 23.617188 C 11.210938 23.257813 10.902344 22.996094 10.53125 22.9375 C 8.882813 22.558594 7.5625 23.21875 6.5625 23.71875 C 6.222656 23.890625 5.828125 24 5.59375 24 C 4.628906 24 3.8125 23.246094 3.8125 22.1875 C 3.8125 21.128906 4.628906 20.40625 5.59375 20.40625 C 6.199219 20.40625 6.589844 20.617188 6.9375 21.03125 C 6.957031 21.054688 6.976563 21.074219 7 21.09375 C 7.535156 21.628906 8.171875 21.890625 8.84375 22.03125 C 9.515625 22.171875 10.207031 22.207031 10.90625 21.90625 C 11.273438 21.792969 11.542969 21.472656 11.597656 21.09375 C 11.652344 20.710938 11.480469 20.332031 11.160156 20.117188 C 10.839844 19.90625 10.425781 19.894531 10.09375 20.09375 C 10.09375 20.09375 9.683594 20.148438 9.28125 20.0625 C 8.878906 19.976563 8.46875 19.75 8.40625 19.6875 C 7.75 18.9375 6.757813 18.40625 5.59375 18.40625 Z M 28 18.5 C 29.390625 18.5 30.5 19.609375 30.5 21 C 30.5 22.390625 29.390625 23.5 28 23.5 C 26.609375 23.5 25.5 22.390625 25.5 21 C 25.5 19.609375 26.609375 18.5 28 18.5 Z M 20.5 25 C 18.578125 25 17 26.578125 17 28.5 C 17 30.421875 18.578125 32 20.5 32 C 22.421875 32 24 30.421875 24 28.5 C 24 26.578125 22.421875 25 20.5 25 Z M 20.5 27 C 21.339844 27 22 27.660156 22 28.5 C 22 29.339844 21.339844 30 20.5 30 C 19.660156 30 19 29.339844 19 28.5 C 19 27.660156 19.660156 27 20.5 27 Z M 29.3125 27.90625 C 28.320313 27.90625 27.5 28.695313 27.5 29.6875 C 27.5 30.679688 28.320313 31.5 29.3125 31.5 C 30.304688 31.5 31.09375 30.679688 31.09375 29.6875 C 31.09375 28.695313 30.304688 27.90625 29.3125 27.90625 Z M 16.5 35.375 C 16.0625 35.421875 15.707031 35.753906 15.625 36.1875 C 15.53125 36.597656 15.289063 36.949219 15 37.21875 C 14.710938 37.488281 14.304688 37.644531 14.40625 37.625 C 12.445313 37.8125 11 39.351563 11 41.1875 C 11 43.222656 12.671875 45 14.8125 45 C 16.914063 45 18.59375 43.289063 18.59375 41.1875 C 18.59375 40.210938 19.8125 38.8125 19.8125 38.8125 C 20.109375 38.570313 20.246094 38.183594 20.160156 37.808594 C 20.074219 37.4375 19.78125 37.144531 19.410156 37.058594 C 19.035156 36.972656 18.648438 37.109375 18.40625 37.40625 C 18.40625 37.40625 16.59375 38.960938 16.59375 41.1875 C 16.59375 42.289063 15.914063 43 14.8125 43 C 13.753906 43 13 42.152344 13 41.1875 C 13 40.265625 13.484375 39.667969 14.65625 39.59375 C 14.699219 39.597656 14.738281 39.597656 14.78125 39.59375 C 15.382813 39.472656 15.832031 39.167969 16.34375 38.6875 C 16.855469 38.207031 17.355469 37.515625 17.5625 36.625 C 17.644531 36.308594 17.570313 35.972656 17.355469 35.722656 C 17.144531 35.472656 16.824219 35.34375 16.5 35.375 Z M 36 35.96875 C 35.957031 35.976563 35.914063 35.988281 35.875 36 C 35.410156 36.105469 35.082031 36.523438 35.09375 37 C 35.09375 37.921875 35.488281 38.699219 36 39.21875 C 36.511719 39.738281 37.105469 40.050781 37.59375 40.34375 C 38.082031 40.636719 38.476563 40.90625 38.71875 41.1875 C 38.960938 41.46875 39.09375 41.753906 39.09375 42.3125 C 39.09375 43.277344 38.371094 44 37.40625 44 C 36.394531 44 35.6875 43.414063 35.6875 42.3125 C 35.6875 41.347656 35.488281 40.382813 35.09375 39.59375 C 34.898438 39.199219 34.640625 38.859375 34.3125 38.5625 C 33.984375 38.265625 33.539063 38 33 38 C 32.449219 37.984375 31.984375 38.417969 31.96875 38.96875 C 31.953125 39.519531 32.386719 39.984375 32.9375 40 C 32.945313 40.003906 32.945313 40.011719 32.96875 40.03125 C 33.046875 40.101563 33.164063 40.269531 33.28125 40.5 C 33.511719 40.960938 33.6875 41.679688 33.6875 42.3125 C 33.6875 44.414063 35.417969 46 37.40625 46 C 39.441406 46 41.09375 44.347656 41.09375 42.3125 C 41.09375 41.324219 40.726563 40.457031 40.21875 39.875 C 39.710938 39.292969 39.136719 38.960938 38.625 38.65625 C 38.113281 38.351563 37.675781 38.085938 37.4375 37.84375 C 37.199219 37.601563 37.09375 37.429688 37.09375 37 C 37.105469 36.710938 36.988281 36.433594 36.78125 36.238281 C 36.570313 36.039063 36.285156 35.941406 36 35.96875 Z"})))}var A=n.forwardRef(_),B=(t.p,t(3)),H=function(){return Object(B.jsxs)("div",{className:"NavBar-container",children:[Object(B.jsx)("div",{className:"NavBar-logo",children:Object(B.jsx)(A,{})}),Object(B.jsxs)("div",{className:"NavBar-nav",children:[Object(B.jsx)("div",{className:"NavBar-link",children:"SHOP "}),Object(B.jsx)("div",{className:"NavBar-link",children:"SHOP "}),Object(B.jsx)("div",{className:"NavBar-link",children:"SHOP "}),Object(B.jsx)("div",{className:"NavBar-link",children:"CART "})]})]})},F=t(29),I=Object(F.a)([function(C){return C.shopData}],(function(C){return C.shopData})),R=function(C){var e=C.shopData;return Object(B.jsx)("div",{children:Object(B.jsx)("div",{children:e.map((function(C){return Object(B.jsx)("div",{children:Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{children:C.product}),Object(B.jsx)("div",{children:C.items.map((function(C){return Object(B.jsx)("div",{children:C.name},C._id)}))})]})},C._id)}))})})},J=Object(o.b)((function(C){return{shopData:I(C)}}),(function(C){return{getShopData:function(){return C({type:b,payload:e});var e}}}))((function(C){var e=C.shopData,t=C.getShopData;return Object(n.useEffect)((function(){t()}),[t]),e&&console.log("ProductDisplay",e),e&&Object(B.jsxs)("div",{children:[Object(B.jsx)(R,{shopData:e}),Object(B.jsx)("a",{href:"https://localhost:8000/v1/google/auth/google",children:"login "}),Object(B.jsx)("a",{href:"https://localhost:8000/v1/google/checklog",children:" check log "}),Object(B.jsx)("a",{href:"https://localhost:8000/v1/google/logout",children:" logout"})]})})),U=function(){return Object(B.jsx)("div",{children:Object(B.jsx)(J,{})})};t(66);var q=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(H,{}),Object(B.jsx)(U,{})]})},z=function(C){C&&C instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(C),n(C),r(C),a(C),c(C)}))};c.a.render(Object(B.jsx)(o.a,{store:P,children:Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(q,{})})}),document.getElementById("root")),z()}},[[67,1,2]]]);
//# sourceMappingURL=main.77f0f25a.chunk.js.map