(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(t,e,r){var content=r(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("79847975",content,!0,{sourceMap:!1})},210:function(t,e,r){"use strict";var n=r(196);r.n(n).a},211:function(t,e,r){(t.exports=r(31)(!1)).push([t.i,".link[data-v-78bf442e],a[data-v-78bf442e]{text-decoration:none}.link--is-underlined[data-v-78bf442e],a--is-underlined[data-v-78bf442e]{text-decoration:underline}.article-content *[data-v-78bf442e]{word-break:break-word;word-wrap:break-word;letter-spacing:-.3px}.article-content a[data-v-78bf442e]{color:#ca3027}.article-content a[data-v-78bf442e]:hover{opacity:.8}.article-content li[data-v-78bf442e]{margin-top:.25rem}.text-grey[data-v-78bf442e],.text-title[data-v-78bf442e]{font-weight:700}.text-grey[data-v-78bf442e]{color:#5f6d87}",""])},227:function(t,e,r){"use strict";r.r(e);r(59);var n=r(7),c={asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,n=e.route,null!==r.state.news.list){t.next=4;break}return t.next=4,r.dispatch("kesatuan/FETCH_KESATUAN");case 4:return t.abrupt("return",{article:r.getters["kesatuan/GET_KESATUAN"](n.params.post)});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},o=(r(210),r(14)),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mw-4 section-header"},[r("h4",{staticClass:"text-center text-title h3-sm h2-md text-center"},[t._v(t._s(t.article.judul))]),t._v(" "),r("p",{staticClass:"text-center pt-1 text-grey text-pre-wrap text-center"},[t._v(t._s(t.article.date))]),t._v(" "),r("div",{staticClass:"text-center py-4"},[r("img",{staticClass:"article-image",attrs:{src:t.article.gambar}})]),t._v(" "),r("div",{staticClass:"article-content content text-semiblack",domProps:{innerHTML:t._s(t.article.kontent)}})])},[],!1,null,"78bf442e",null);e.default=component.exports}}]);