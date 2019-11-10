(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1182:function(t,e,n){},"34ba":function(t,e,n){"use strict";var a=n("1182"),r=n.n(a);r.a},"53ad":function(t,e,n){"use strict";var a=n("5dbd"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("8c4f"),i=(n("99af"),n("c740"),n("caad"),n("d81d"),n("a434"),n("2532"),n("2f62")),s=n("bc3a"),o=n.n(s);a["a"].use(i["a"]);var c=new i["a"].Store({state:{user:null,favorites:[]},getters:{favorites:function(t){return t.favorites},isLoggedIn:function(t){return null!=t.user},isLoggedOut:function(t,e){return!e.isLoggedIn},user:function(t){return t.user}},mutations:{setUser:function(t,e){t.user=e},initFavorites:function(t,e){t.favorites=e},addToFavorites:function(t,e){t.favorites.map((function(t){return t.mal_id})).includes(e.mal_id)||o.a.get("/api/users/".concat(t.user.id,"/like/").concat(e.mal_id)).then((function(t){return t.data})).then((function(n){window.console.log(n),t.favorites.push(e)}))},removeFromFavorites:function(t,e){var n=t.favorites.findIndex((function(t){return t.mal_id==e}));-1!=n&&o.a.get("/api/users/".concat(t.user.id,"/unlike/").concat(e)).then((function(t){return t.data})).then((function(e){window.console.log(e),t.favorites.splice(n,1)}))}}}),u=c,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("nav-bar"),n("keep-alive",[n("router-view",{key:t.$route.path})],1)],1)},d=[],m=(n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("89ba")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/home"}},[t._v("AniANI-Jikan-VUE")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"}),n("ul",{staticClass:"navbar-nav mr-right"},[n("div",{staticClass:"form-inline my-2 my-lg-0 ml-2 mr-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.queryText,expression:"queryText"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.queryText},on:{input:function(e){e.target.composing||(t.queryText=e.target.value)}}}),n("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",on:{click:t.onSearch}},[t._v("Search")])]),t.$store.getters.isLoggedOut?n("a",{staticClass:"btn btn-sm btn-success ml-2 mr-2",attrs:{href:"/api/auth/google"}},[t._v("Log In")]):n("a",{staticClass:"btn btn-sm btn-success ml-2 mr-2",attrs:{href:"/api/auth/logout"}},[t._v("Log Out")])])])],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],f={data:function(){return{queryText:"",searchResults:[]}},methods:{searchAnime:function(t){window.console.log(t)},onSearch:function(){window.console.log(this.queryText),this.searchAnime(this.queryText),this.queryText=""}}},h=f,g=(n("34ba"),n("2877")),_=Object(g["a"])(h,v,p,!1,null,null,null),b=_.exports,C={name:"app",components:{navBar:b},created:function(){var t=this,e=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/auth/current_user");case 2:return n=e.sent,e.next=5,n.data;case 5:if(a=e.sent.id,-1!=a){e.next=8;break}return e.abrupt("return");case 8:return t.$store.commit("setUser",{id:a}),e.next=11,o.a.get("/api/users/".concat(a));case 11:return n=e.sent,e.next=14,n.data;case 14:r=e.sent,window.console.log(r),i=function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://api.jikan.moe/v3/anime/".concat(e));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Promise.all(r.favorites.map(i)).then((function(e){window.console.log(e),t.$store.commit("initFavorites",e)}));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}},k=C,y=(n("034f"),Object(g["a"])(k,l,d,!1,null,null,null)),w=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"anime-landing mt-3"},[null!=t.anime?n("div",[n("div",{staticClass:"col-md-12 row"},[n("div",{staticClass:"col-md-4"},[n("img",{attrs:{src:t.anime.image_url}})]),n("div",{staticClass:"col-md-8"},[n("h3",[t._v(t._s(t.anime.title)+" "),t.$store.getters.isLoggedIn?n("span",[t.isFavorite?n("span",{on:{click:t.onClickFavorite}},[n("i",{staticClass:"fas fa-heart"})]):n("span",{on:{click:t.onClickFavorite}},[n("i",{staticClass:"far fa-heart"})])]):t._e()]),n("p",[t._v(" "+t._s(t.anime.synopsis)+" ")])])]),n("div",{staticClass:"col-md-12"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("th",[t._v("MAL ID")]),n("td",[t._v(t._s(t.anime.mal_id))])]),n("tr",[n("th",[t._v("Type")]),n("td",[t._v(t._s(t.anime.type))])]),n("tr",[n("th",[t._v("Source")]),n("td",[t._v(t._s(t.anime.source))])]),n("tr",[n("th",[t._v("Episodes")]),n("td",[t._v(t._s(t.anime.episodes))])]),n("tr",[n("th",[t._v("Genres")]),n("td",[t._v(" "+t._s(t.anime.genres)+" ")])]),n("tr",[n("th",[t._v("Producers")]),n("td",[t._v(" "+t._s(t.anime.producers)+" ")])]),n("tr",[n("th",[t._v("Premiered")]),n("td",[t._v(t._s(t.anime.premiered))])]),n("tr",[n("th",[t._v("Score")]),n("td",[t._v(t._s(t.anime.score))])]),n("tr",[n("th",[t._v("Trailer")]),n("td",[null!=t.anime.trailer_url?n("iframe",{attrs:{src:t.anime.trailer_url}}):n("div",[t._v("n/a")])])])])])])]):n("div",[n("h1",[t._v("loading.....")])])])},$=[],F=(n("a15b"),n("b0c0"),{name:"AnimeLanding",props:{},data:function(){return{anime:null}},computed:{isFavorite:function(){return this.$store.getters.favorites.map((function(t){return t.mal_id})).includes(this.anime.mal_id)}},methods:{loadAnimeInfo:function(t){var e=this;o.a.get("https://api.jikan.moe/v3/anime/".concat(t)).then((function(t){return t.data})).then((function(t){e.anime=t,e.anime.genres=e.anime.genres.map((function(t){return t.name})).join(", "),e.anime.producers=e.anime.producers.map((function(t){return t.name})).join(", ")}))},onClickFavorite:function(){this.isFavorite?this.$store.commit("removeFromFavorites",this.anime.mal_id):this.$store.commit("addToFavorites",this.anime)}},created:function(){this.loadAnimeInfo(this.$route.params.id)}}),O=F,j=Object(g["a"])(O,x,$,!1,null,"6ac305c3",null),S=j.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"btn-group btn-group-toggle col-md-12"},[n("label",{staticClass:"btn btn-secondary",class:"discover"==t.picked?"active":""},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",value:"discover",checked:""},domProps:{checked:t._q(t.picked,"discover")},on:{change:function(e){t.picked="discover"}}}),t._v(" Discover ")]),n("label",{staticClass:"btn btn-secondary",class:"favorites"==t.picked?"active":""},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",value:"favorites"},domProps:{checked:t._q(t.picked,"favorites")},on:{change:function(e){t.picked="favorites"}}}),t._v(" Favorites ")])])]),"discover"===t.picked?n("discover-landing"):"favorites"===t.picked?n("favorites-landing"):t._e()],1)},L=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},t._l(t.animes,(function(t){return n("anime-mini",{key:t.mal_id,attrs:{anime:t}})})),1)])},q=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12 col-lg-6"},[n("div",{staticClass:"anime-mini-wrapper d-flex"},[n("div",{staticClass:"image-section"},[n("img",{attrs:{src:t.anime.image_url,alt:"Card image cap"}})]),n("div",{staticClass:"flex-grow-1 info-section"},[n("p",[t._v(t._s(t.anime.title))]),n("p",[t._v(t._s(t.anime.score))]),n("button",{staticClass:"btn btn-success btn-sm",on:{click:t.onClick}},[t._v("See More")]),n("br"),t.$store.getters.isLoggedIn?n("div",{staticClass:"d-flex flex-row-reverse"},[t.isFavorite?n("div",{on:{click:t.onClickFavorite}},[n("i",{staticClass:"fas fa-heart"})]):n("div",{on:{click:t.onClickFavorite}},[n("i",{staticClass:"far fa-heart"})])]):t._e()])])])},I=[],A={data:function(){return{}},computed:{isFavorite:function(){return this.$store.getters.favorites.map((function(t){return t.mal_id})).includes(this.anime.mal_id)}},props:["anime"],methods:{onClick:function(){this.$router.push({path:"/anime/".concat(this.$props.anime.mal_id)})},onClickFavorite:function(){this.isFavorite?this.$store.commit("removeFromFavorites",this.anime.mal_id):this.$store.commit("addToFavorites",this.anime)}}},M=A,R=(n("53ad"),Object(g["a"])(M,E,I,!1,null,null,null)),N=R.exports,J={data:function(){return{animes:[]}},components:{animeMini:N},created:function(){var t=this;o.a.get("https://api.jikan.moe/v3/top/anime").then((function(t){return t.data})).then((function(e){t.animes=e.top}))}},U=J,D=Object(g["a"])(U,P,q,!1,null,null,null),B=D.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$store.getters.isLoggedOut?n("div",{staticClass:"row m-3"},[n("div",{staticClass:"col-md-3"}),n("div",{staticClass:"col-md-6 alert alert-danger",attrs:{role:"alert"}},[t._v(" You must be logged in to use the favorites features. ")]),n("div",{staticClass:"col-md-3"})]):n("div",{staticClass:"row"},t._l(t.favorites,(function(t){return n("anime-mini",{key:t.mal_id,attrs:{anime:t}})})),1)])},V=[],Y={data:function(){return{}},computed:{favorites:function(){return this.$store.getters.favorites}},components:{animeMini:N},methods:{},created:function(){}},z=Y,H=Object(g["a"])(z,G,V,!1,null,null,null),K=H.exports,Q={data:function(){return{animes:[],picked:"discover"}},components:{discoverLanding:B,favoritesLanding:K},methods:{}},W=Q,X=Object(g["a"])(W,T,L,!1,null,null,null),Z=X.exports;a["a"].use(r["a"]);var tt=[{path:"/anime/:id",component:S},{path:"/home",component:Z},{path:"/",redirect:"/home"}],et=new r["a"]({mode:"history",routes:tt});a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(w)},router:et,store:u}).$mount("#app")},"5dbd":function(t,e,n){},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.ad8854b8.js.map