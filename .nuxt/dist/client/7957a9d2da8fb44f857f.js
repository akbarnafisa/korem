(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{190:function(t,e,r){var content=r(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("3b0c1900",content,!0,{sourceMap:!1})},202:function(t,e,r){"use strict";var n=r(190);r.n(n).a},203:function(t,e,r){(t.exports=r(31)(!1)).push([t.i,".link[data-v-58be4c52],a[data-v-58be4c52]{text-decoration:none}.link--is-underlined[data-v-58be4c52],a--is-underlined[data-v-58be4c52]{text-decoration:underline}.articles .list .list__title[data-v-58be4c52]{color:#0a0a0a;font-size:18px;margin-bottom:8px;font-weight:700;line-height:1.35;transition:opacity .3s ease-in-out}.articles .list .list__date[data-v-58be4c52]{color:#15191e;font-size:12px;margin-top:12px}.articles .list .card__image-wrapper[data-v-58be4c52]{overflow:hidden;transition:opacity .3s ease-in-out}.articles .list .card__image-wrapper .card__image[data-v-58be4c52]{height:200px;width:100%;background-size:cover;background-position:50%;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.articles .list:hover .list__title[data-v-58be4c52]{color:#ca3027}.articles .list:hover .card__image-wrapper[data-v-58be4c52]{opacity:.6}",""])},222:function(t,e,r){"use strict";r.r(e);r(59);var n=r(7),c={asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(r=e.store).state.news.list){t.next=4;break}return t.next=4,r.dispatch("news/FETCH_NEWS");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),computed:{articles:function(){return this.$store.state.news.list}}},o=(r(202),r(14)),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"articles container"},[r("section",{staticClass:"section-header"},[r("h3",{staticClass:"section-title fw-700 h2-sm "},[t._v("\n      Berita Terbaru\n    ")]),t._v(" "),t._l(t.articles,function(data){return r("nuxt-link",{key:data._id,staticClass:"list grid grid-list",attrs:{to:"berita/"+data.link}},[r("div",{staticClass:"row no-gutters pt-5 mx-sm-4 mx-md-0"},[r("div",{staticClass:"order-1 col-md-4 pr-md-3"},[r("div",{staticClass:"list__title text-black text-title"},[t._v(t._s(data.judul))]),t._v(" "),r("h6",{staticClass:"list__date fw-700"},[t._v(t._s(data.date))])]),t._v(" "),r("div",{staticClass:" order-3 order-md-2 col-md-4 pt-3  pt-md-0"},[r("div",{staticClass:" "},[r("p",{staticClass:"p-small"},[t._v(t._s(data.desc.slice(0,150))+"...")])])]),t._v(" "),r("div",{staticClass:"card__image-wrapper  order-2 order-md-3 col-md-4 pl-md-3 pt-4 pt-md-0"},[r("div",{staticClass:"card__image",style:"backgroundImage: url('"+data.gambar+"')"})])])])})],2)])},[],!1,null,"58be4c52",null);e.default=component.exports}}]);