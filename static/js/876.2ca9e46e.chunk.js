"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[876],{262:function(n,e,r){r.d(e,{Hx:function(){return l},Mc:function(){return s},Pv:function(){return u},uV:function(){return d},wr:function(){return c}});var t=r(5861),a=r(4687),i=r.n(a),o=r(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzAwMzY5MjM1NGU2MGRkMTkxZDU3ZjIyNDE5M2ViYyIsInN1YiI6IjY0OTRiYzBkOTdlYWI0MDE0NjUzYTg0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eRloYStb0E7htYX_KZc4cK1BXIC7CsOABKJUGMS2eo4"};var c=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,o.Z.get("search/movie",{params:{query:e,include_adult:!1}});case 4:return r=n.sent,n.abrupt("return",r.data.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1328:function(n,e,r){r.d(e,{O:function(){return t}});var t={headerText:"#434852",linkText:"#36393f",linkTextHover:"#e78310",buttonActiveBackground:"#5e5e5e",buttonHoverBackground:"#18b4db",buttonActiveText:"#fff"}},5780:function(n,e,r){r.d(e,{D:function(){return d}});var t=r(5861),a=r(9439),i=r(4687),o=r.n(i),c=r(262),s=r(2791),u=r(7689),d=function(){var n=(0,s.useState)({}),e=(0,a.Z)(n,2),r=e[0],i=e[1],d=(0,s.useState)(!1),l=(0,a.Z)(d,2),p=l[0],f=l[1],x=(0,s.useState)(null),h=(0,a.Z)(x,2),v=h[0],b=h[1],j=(0,u.UO)().movieId;return(0,s.useEffect)((function(){if(j){f(!0),i({});var n=function(){var n=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.Mc)(j);case 3:if(e=n.sent,Object.entries(e).length){n.next=6;break}throw new Error("Sorry. There are no movies ... ");case 6:i(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),b(n.t0.message);case 12:return n.prev=12,f(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[j]),{movie:r,isLoading:p,error:v}}},7876:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,a,i,o,c,s,u,d=r(8349),l=r(1087),p=r(7689),f=r(3874),x=r(168),h=r(5706),v=r(1328),b=h.Z.div(t||(t=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  margin-bottom: 24px;\n"]))),j=h.Z.img(a||(a=(0,x.Z)(["\n  display: block;\n  width: auto;\n  height: 500px;\n"]))),m=h.Z.div(i||(i=(0,x.Z)(["\n  padding-left: 24px;\n"]))),g=h.Z.div(o||(o=(0,x.Z)(["\n  /* border-top: 1px solid #bbb8b8; */\n  /* border-bottom: 1px solid #bbb8b8; */\n  background-color: #f3eeee;\n\n  padding: 8px;\n"]))),Z=h.Z.ul(c||(c=(0,x.Z)(["\n  list-style-type: none;\n  padding-left: 0;\n\n  li a {\n    color: ",";\n  }\n\n  li a:hover,\n  li a:focus {\n    color: ",";\n  }\n"])),v.O.linkText,v.O.linkTextHover),k=r(2791),w=r(184),y=function(n){var e=n.movie,r=e.title,t=e.poster_path,a=e.status,i=e.vote_average,o=e.overview,c=e.genres,s=c?c.map((function(n){return n.name})).join(", "):"none";return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(b,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(j,{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:r})}),(0,w.jsxs)(m,{children:[(0,w.jsx)("h3",{children:r}),(0,w.jsxs)("p",{children:["Status: ",a]}),(0,w.jsxs)("p",{children:["User score: ",i]}),(0,w.jsx)("h4",{children:"Overview"}),(0,w.jsx)("p",{children:o}),(0,w.jsx)("h5",{children:"Genres"}),(0,w.jsx)("p",{children:s})]})]}),(0,w.jsxs)("div",{children:[(0,w.jsxs)(g,{children:[(0,w.jsx)("p",{children:"Additional information"}),(0,w.jsxs)(Z,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(l.rU,{to:f._.CAST,children:"Casts"})}),(0,w.jsx)("li",{children:(0,w.jsx)(l.rU,{to:f._.REVIEWS,children:"Reviews"})})]})]}),(0,w.jsx)(k.Suspense,{fallback:(0,w.jsx)(d.a,{}),children:(0,w.jsx)(p.j3,{})})]})]})},I=h.Z.div(s||(s=(0,x.Z)(["\n  padding-top: 12px;\n  padding-bottom: 12px;\n"]))),O=(0,h.Z)(l.rU)(u||(u=(0,x.Z)(["\n  padding: 8px;\n  max-width: 40px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  text-decoration: none;\n  color: #fff;\n\n  background-color: #646363;\n  border: 1px solid transparent;\n  border-radius: 2px;\n\n  &:hover {\n    color: #646363;\n    background-color: #fff;\n    border-color: #646363;\n  }\n\n  &:active {\n    color: #fff;\n    background-color: #e78310;\n    border-color: transparent;\n  }\n"]))),T=function(){var n,e,r=(0,p.TH)(),t=(0,k.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:f._.MOVIES);return(0,w.jsx)(I,{children:(0,w.jsx)(O,{to:t.current,state:{from:r},children:"Back"})})},M=r(5780),S=function(){var n=(0,M.D)(),e=n.movie,r=n.isLoading,t=n.error;return(0,w.jsxs)(w.Fragment,{children:[r&&(0,w.jsx)(d.a,{}),!!Object.keys(e).length&&(0,w.jsxs)("section",{children:[(0,w.jsx)(T,{}),(0,w.jsx)(y,{movie:e})]}),t&&(0,w.jsx)("p",{children:t})]})}}}]);
//# sourceMappingURL=876.2ca9e46e.chunk.js.map