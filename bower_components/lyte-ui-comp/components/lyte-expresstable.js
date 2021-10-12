Lyte.Component.register("lyte-expresstable",{_template:'<template tag-name="lyte-expresstable">\n<div class="lyteExpTableWrapper">\n\t<template is="if" value="{{expHandlers(ltPropHeaderLabelKey,\'&amp;&amp;\',tableHeader.length)}}"><template case="true">\n\t<div class="lyteExpTableFakeHeaderWrapper">\n\t\t\n\t\t\t<div class="lyteExpTableFixedColHeader">\n\t\t\t\t<template is="if" value="{{expHandlers(ltPropYield,\'==\',false)}}"><template case="true"> \n\t\t\t\t\t<lyte-exptable-thead class="fixedColumnTableHeader lyteExpTableHeaderGroup">\n\t\t\t\t\t\t<lyte-exptable-tr class="fixedColumnTableRow lyteExpTableRow">\n\t\t\t\t\t\t \t<template is="for" items="{{fixedTableHeader}}" item="list" index="indexVal">\n\t\t\t\t\t\t \t\t<lyte-exptable-th class="fixedColumn lyteExpTableHead {{list.class}}" id="{{list.id}}" index="{{indexVal}}" resize="{{list.resize}}" fixed="{{list.fixed}}" icon="{{list.icon}}">\n\t\t\t\t\t\t\t\t{{list[ltPropHeaderLabelKey]}}\n\t\t\t\t\t\t\t\t</lyte-exptable-th>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t</lyte-exptable-tr>\n\t\t\t\t\t</lyte-exptable-thead>\n\t\t\t\t</template><template case="false">\t\n\t\t\t\t\t<lyte-yield class="lyteExpTableFakeHeaderGroup lyteExpTableHeaderGroup" yield-name="headerYield" lt-prop-table-header="{{fixedTableHeader}}"></lyte-yield>\n\t\t\t\t</template></template>\n\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t\n\t\t\t<div class="lyteExpTableFakeColHeaderWrapper">\n\t\t\t\t\t<template is="if" value="{{expHandlers(ltPropYield,\'==\',false)}}"><template case="true">  \n\t\t\t\t\t\t\t<lyte-exptable-thead class="lyteExpTableFakeColHeader lyteExpTableHeaderGroup">\n\t\t\t\t\t\t\t\t<lyte-exptable-tr class="originalColumnTableRow lyteExpTableRow">\n\t\t\t\t\t\t\t\t<template is="for" items="{{tableHeader}}" item="list" index="indexVal">\n\t\t\t\t\t\t\t\t\t<lyte-exptable-th id="{{list.id}}" class="originalColumn lyteExpTableHead list.class" index="{{indexVal}}" resize="{{list.resize}}" fixed="{{list.fixed}}" icon="{{list.icon}}">\n\t\t\t\t\t\t\t\t\t\t{{list[ltPropHeaderLabelKey]}}\n\t\t\t\t\t\t\t\t\t</lyte-exptable-th>\n\t\t\t\t\t\t\t\t</template>\t\n\t\t\t\t\t\t\t\t</lyte-exptable-tr>\n\t\t\t\t\t\t\t</lyte-exptable-thead>\n\t\t\t\t\t</template><template case="false">\t\n\t\t\t\t\t\t\t<lyte-yield class="lyteExpTableFakeColHeader lyteExpTableHeaderGroup" yield-name="headerYield" lt-prop-table-header="{{tableHeader}}"></lyte-yield>\n\t\t\t\t\t</template></template>\t\t\n\t\t\t</div>\n\t</div>\n\t</template></template>\n\n\t<div class="lyteExpTableOrigTableWrapper ">\n\t\t\t\n\t\t\t\n\t\t\t<div class="lyteExpTableFixedColWrapper" onscroll="{{action(\'fixedColScroll\', event)}}">\n\t\t\t\t<lyte-exptable class="lyteExpTableFixedColTable">\n\t\t\t\t\t<template is="if" value="{{expHandlers(ltPropYield,\'==\',false)}}"><template case="true">\n\t\t\t\t\t\t<lyte-exptable-thead class="fixedColumn lyteExpTableHeaderGroup">\n\t\t\t\t\t\t\t<lyte-exptable-tr class="fixedColumn lyteExpTableRow">\n\t\t\t\t\t\t\t   <template is="for" items="{{fixedTableHeader}}" item="list" index="indexVal">\n\t\t\t\t\t\t\t\t\t<lyte-exptable-th id="{{list.id}}" class="fixedColumn lyteExpTableHead list.class" index="{{indexVal}}" resize="{{list.resize}}" fixed="{{list.fixed}}" icon="{{list.icon}}">\n\t\t\t\t\t\t\t\t\t\t{{unescape(list[ltPropHeaderLabelKey])}}\n\t\t\t\t\t\t\t\t\t</lyte-exptable-th>\n\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t</lyte-exptable-tr>\n\t\t\t\t\t\t</lyte-exptable-thead>\n\t\t\t\t\t\t<lyte-exptable-tbody class="fixedColumn lyteExpTableRowGroup">\n\t\t\t\t\t\t\t<template is="for" items="{{ltPropContent}}" item="list" index="indexVal">\t\n\t\t\t\t\t\t\t\t<lyte-exptable-tr id="{{list.id}}" class="fixedColumn lyteExpTableRow {{list.class}}">\n\t\t\t\t\t\t\t\t\t<template is="for" items="{{fixedTableHeader}}" item="header">\n\t\t\t\t\t\t\t\t\t\t<lyte-exptable-td class="fixedColumn lyteExpTableCell">{{unescape(lyteUiGetValue(list,header[ltPropBodyLabelKey]))}}</lyte-exptable-td>\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t </lyte-exptable-tr>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t</lyte-exptable-tbody>\n\t\t\t\t\t</template><template case="false">\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<lyte-yield class="lyteExpTableHeaderGroup" yield-name="headerYield" lt-prop-table-header="{{fixedTableHeader}}"></lyte-yield>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<lyte-yield class="lyteExpTableRowGroup" yield-name="contentYield" lt-prop-table-header="{{fixedTableHeader}}">\n\t\t\t\t\t\t\t\t</lyte-yield>\n\t\t\t\t\t\t\n\t\t\t\t\t</template></template>\n\t\t\t\t</lyte-exptable>\n\t\t\t</div>\n\t\t\t\n\t\t\t<template is="if" value="{{expHandlers(ltPropHeaderLabelKey,\'&amp;&amp;\',tableHeader.length)}}"><template case="true"> \n\t\t\t<div class="lyteExpTableOrigTableInnerWrap" tabindex="0" onscroll="{{action(\'scroll\',event)}}">\n\t\t\t\t<lyte-exptable class="lyteExpOriginalTable">\n\t\t\t\t\t<template is="if" value="{{expHandlers(ltPropYield,\'==\',false)}}"><template case="true">\n\t\t\t\t\t<lyte-exptable-thead class="originalColumn lyteExpTableHeaderGroup">\n\t\t\t\t\t\t<lyte-exptable-tr class="originalColumn lyteExpTableRow">\n\t\t\t\t\t\t   <template is="for" items="{{tableHeader}}" item="list" index="indexVal">\n\t\t\t\t\t\t\t\t<lyte-exptable-th id="{{list.id}}" class="originalColumn lyteExpTableHead list.class" index="{{indexVal}}" resize="{{list.resize}}" fixed="{{list.fixed}}" icon="{{list.icon}}">\n\t\t\t\t\t\t\t\t\t{{list[ltPropHeaderLabelKey]}}\n\t\t\t\t\t\t\t\t</lyte-exptable-th>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t</lyte-exptable-tr>\n\t\t\t\t\t</lyte-exptable-thead>\n\t\t\t\t\t<lyte-exptable-tbody class="originalColumn lyteExpTableRowGroup">\n\n\t\t\t\t\t\t\t<template is="for" items="{{ltPropContent}}" item="list" index="indexVal">\t\n\t\t\t\t\t\t\t\t<lyte-exptable-tr id="{{list.id}}" class="originalColumn lyteExpTableRow {{list.class}}">\n\t\t\t\t\t\t\t\t\t<template is="for" items="{{tableHeader}}" item="header">\n\n\t\t\t\t\t\t\t\t\t\t<lyte-exptable-td class="originalColumn lyteExpTableCell">{{unescape(lyteUiGetValue(list,header[ltPropBodyLabelKey]))}}</lyte-exptable-td>\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t</lyte-exptable-tr>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t</lyte-exptable-tbody>\n\t\t\t\t\t</template><template case="false">\t\n\t\t\t\t\t\t<lyte-yield class="lyteExpTableHeaderGroup" yield-name="headerYield" lt-prop-table-header="{{tableHeader}}"></lyte-yield>\n\t\t\t\t\t\t<lyte-yield class="lyteExpTableRowGroup" yield-name="contentYield" lt-prop-table-header="{{tableHeader}}"></lyte-yield>\n\t\t\t\t\t\n\t\t\t\t\t</template></template>\t\n\t\t\t\t</lyte-exptable>\n\t\t\t</div>\n\t\t</template></template>\n\t\n\t</div>\n</div>\n</template>',_dynamicNodes:[{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"for",position:[1,1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"insertYield",position:[1]}]}},default:{}},{type:"attr",position:[1,3,1]},{type:"if",position:[1,3,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"for",position:[1,1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"insertYield",position:[1]}]}},default:{}}]}},default:{}},{type:"attr",position:[1,3,1]},{type:"attr",position:[1,3,1,1,1]},{type:"if",position:[1,3,1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"for",position:[1,1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]},{type:"attr",position:[3,1]},{type:"for",position:[3,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"text",position:[1,0]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[3]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"insertYield",position:[1]},{type:"attr",position:[3]},{type:"insertYield",position:[3]}]}},default:{}},{type:"componentDynamic",position:[1,3,1,1]},{type:"attr",position:[1,3,3]},{type:"if",position:[1,3,3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"for",position:[1,1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]},{type:"attr",position:[3,1]},{type:"for",position:[3,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"text",position:[1,0]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[3]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"insertYield",position:[1]},{type:"attr",position:[3]},{type:"insertYield",position:[3]}]}},default:{}},{type:"componentDynamic",position:[1,1]}]}},default:{}}],_observedAttributes:["ltPropHeader","ltPropContent","ltPropHeaderLabelKey","ltPropBodyLabelKey","ltPropYield","ltPropInfiniteScroll","ltPropYield","ltPropMinWidth","ltPropMaxWidth","ltPropResize","ltPropFixedTableScroll","ltPropHeight","fixedTableHeader","fixedTableContent","tableHeader","tableContent","fixedColumns","columns","minWidth1","minWidth2"],data:function(){return{ltPropHeader:Lyte.attr("array",{default:[]}),ltPropContent:Lyte.attr("array",{default:[]}),ltPropHeaderLabelKey:Lyte.attr("string",{default:""}),ltPropBodyLabelKey:Lyte.attr("string",{default:""}),ltPropYield:Lyte.attr("boolean",{default:!1}),ltPropInfiniteScroll:Lyte.attr("boolean",{default:!1}),ltPropYield:Lyte.attr("boolean",{default:!1}),ltPropMinWidth:Lyte.attr("string",{default:"50px"}),ltPropMaxWidth:Lyte.attr("string",{default:"1000px"}),ltPropResize:Lyte.attr("object",{default:{}}),ltPropFixedTableScroll:Lyte.attr("boolean",{default:!1}),ltPropHeight:Lyte.attr("string",{default:"auto"}),fixedTableHeader:Lyte.attr("array",{default:[]}),fixedTableContent:Lyte.attr("array",{default:[]}),tableHeader:Lyte.attr("array",{default:[]}),tableContent:Lyte.attr("array",{default:[]}),fixedColumns:Lyte.attr("array",{default:[]}),columns:Lyte.attr("array",{default:[]}),minWidth1:Lyte.attr("string",{default:""}),minWidth2:Lyte.attr("string",{default:""})}},didDestroy:function(){this.$node.fixRowHeight=null,this.$node.scrollTo=null,this.$node.setHeaderWidth=null,clearTimeout(this._scrollTimeOut)},init:function(){var t=navigator.userAgent;this._dir=_lyteUiUtils.getRTL(),this.isIE11Lyte=/rv:11/gi.test(t),this.isEdgeLyte=/Edge/gi.test(t),this._scrollWidth=_lyteUiUtils.getScrollBarWidth(),this._verticalScrollWidth=this._scrollWidth,this._heightScrollWidth=this._scrollWidth,this._isIE=this.isIE11Lyte||this.isEdgeLyte,this._fixHeaderCount=0,this._tmpScrollTop=0,this._chrome=/Chrome/i.test(navigator.userAgent)&&/Google Inc/i.test(navigator.vendor),this.getMethods("beforeRender")&&this.executeMethod("beforeRender",this.$node),this.setTableHeader(),this.setData("tableContent",this.getData("ltPropContent"));this.getData("tableHeader"),this.getData("fixedTableHeader")},didConnect:function(){this.$node.fixRowHeight=function(t){this.setFixTableRowHeight(t)}.bind(this),this._scrollDiv=this.$node.querySelector(".lyteExpTableWrapper"),this.getData("ltPropHeader").length>=1&&(this.initProcess(),this.getMethods("afterRender")&&this.executeMethod("afterRender",this.$node)),this.$node.scrollTo=function(t,e,i){this._scrolled=!0,void 0!=t&&(this._originalDiv.scrollLeft=t),void 0!=e&&(this._originalDiv.scrollTop=e),this._scrolled&&(clearTimeout(this._scrollTimeOut),this._scrollTimeOut=setTimeout(function(){this.actions.scroll.call(this,i,t,e,!0)}.bind(this),20)),delete this._scrolled}.bind(this),this.$node.setHeaderWidth=function(){this.fixHeaderHeight()}.bind(this)},initProcess:function(){var t=this.$node.getElementsByClassName("lyteExpTableOrigTableInnerWrap")[0],e=/firefox/gi.test(navigator.userAgent);this._originalDiv=t,this._oHeader=this.$node.getElementsByClassName("lyteExpTableFakeColHeader")[0],this._headerDiv=this.$node.getElementsByClassName("lyteExpTableFakeHeaderWrapper")[0],this._originalTable=this.$node.getElementsByClassName("lyteExpOriginalTable")[0];var i=this._colwrap||this.$node.getElementsByClassName("lyteExpTableFixedColWrapper")[0],l=this.getData("ltPropHeight");this._scrollWidth;"auto"!=l&&(this.$node.style.height=this.getData("ltPropHeight")),$L.fastdom.measure(function(){var l=this._dir?"left":"right";this._startScrollLeft=e?0:t.scrollLeft,this.setScrollWidth(!0);var a=this._originalDiv.getBoundingClientRect().height;$L.fastdom.mutate(function(){this._headerDiv.style[l]=this._verticalScrollWidth+"px",i.style.height=parseFloat(a)-this._heightScrollWidth+"px"}.bind(this))}.bind(this)),this.fixHeaderHeight(),this._prevScollLeft=0,window.requestAnimationFrame(function(){this.setVisibleFixHeader()}.bind(this))},setTableHeader:function(){for(var t=[],e=this.getData("ltPropHeader"),i=[],l=0;l<e.length;++l)t[l]=e[l],t[l].fixed&&"enable"==t[l].fixed&&Lyte.arrayUtils(i,"push",t[l]);this.setData("tableHeader",t),this.setData("fixedTableHeader",i)},setScrollWidth:function(t){if(this._oriwrap=this._oriwrap||this.$node.getElementsByClassName("lyteExpTableOrigTableInnerWrap")[0],this._oriwrap){var e=this.$node.getElementsByClassName("lyteExpTableFixedColWrapper")[0],i=this._scrollWidth,l=this._scrollWidth;this._oriwrap.scrollHeight<=this._oriwrap.offsetHeight&&(this._verticalScrollWidth=0,i=0),this._oriwrap.scrollWidth<=this._oriwrap.offsetWidth&&(this._heightScrollWidth=0,l=0),t||$L.fastdom.measure(function(){var t=this._dir?"left":"right",a=this._originalDiv.getBoundingClientRect().height;$L.fastdom.mutate(function(){this._headerDiv.style[t]=i+"px",e.style.height=parseFloat(a)-l+"px"}.bind(this))}.bind(this))}},setWidth:function(){},fixHeaderHeight:function(){this.getData("tableHeader"),this.getData("fixedTableHeader");var t=this._oHeader.getElementsByTagName("lyte-exptable-th"),e=this._originalDiv.getElementsByTagName("lyte-exptable-th"),i=(this._colwrap||this.$node.getElementsByClassName("lyteExpTableFixedColWrapper")[0],[]);this._othead=this._originalDiv.getElementsByClassName("lyteExpTableHeaderGroup")[0],$L.fastdom.measure(function(){for(var l=0;l<t.length;++l){var a=e[l].getBoundingClientRect();i[l]=a.width+"px"}}.bind(this)),$L.fastdom.mutate(function(){this.getData("tableHeader"),this.getData("fixedTableHeader");for(var t=this._oHeader.getElementsByTagName("lyte-exptable-th"),e=this._originalDiv.getElementsByTagName("lyte-exptable-th"),l=this._colwrap||this.$node.getElementsByClassName("lyteExpTableFixedColWrapper")[0],a=0;a<i.length;a++)t[a].style.minWidth=i[a];l.getElementsByTagName("lyte-exptable-tr");var s=[],o=this.$node.getElementsByClassName("lyteExpTableFixedColHeader")[0],n=(t=o.getElementsByTagName("lyte-exptable-th"),l.getElementsByTagName("lyte-exptable-th")),r=0;if(e)for(var d=0;d<e.length;d++)e[d].classList.contains("lyteFixedColumn")&&s.push(e[d]);for(a=0;a<this._fixHeaderCount;++a){var p=this.getIndex(s[a]);t[a].style.minWidth=i[p],t[a].style.width=i[p],n[a].style.minWidth=i[p],r+=parseFloat(i[p])}this._fHeader=o,this._fthList=l.getElementsByClassName("lyteExpTableHeaderGroup")[0],this._setHeight=!0,0==this._fixHeaderCount&&(delete this._setHeight,delete this._fHeader,delete this._fthList),l.style.width=r+"px"}.bind(this))},setFixTableRowHeight:function(t){var e,i=(this._colwrap||this.$node.getElementsByClassName("lyteExpTableFixedColWrapper")[0]).getElementsByTagName("lyte-exptable-tr"),l=this._originalDiv.getElementsByTagName("lyte-exptable-tr"),a=[],s=this,o=this.$node.getElementsByClassName("lyteExpTableFixedColHeader")[0].getElementsByTagName("lyte-exptable-tr")[0];!t||1!==t.nodeType&&isNaN(t)?($L.fastdom.measure(function(){if(s.$node)for(var t=0;t<l.length;t++)a.push(l[t].getBoundingClientRect().height+"px"),l[t]._relatedRow=i[t],i[t]._relatedRow=l[t]}),$L.fastdom.mutate(function(){if(s.$node){for(var t=0;t<l.length;t++)i[t].style.height=a[t];l.length>0&&o&&(o.style.height=a[0])}})):(e=1===t.nodeType?Array.from(l).indexOf(t):t,$L.fastdom.measure(function(){s.$node&&(a=l[e].getBoundingClientRect().height+"px",l[e]._relatedRow=i[e],i[e]._relatedRow=l[e])}),$L.fastdom.mutate(function(){s.$node&&(i[e].style.height=a)}))},setVisibleFixHeader:function(){for(var t=this.$node.getElementsByClassName("lyteExpTableFixedColHeader")[0].getElementsByTagName("lyte-exptable-th"),e=this._fixHeaderCount,i=this.$node.getElementsByClassName("lyteExpTableFakeColHeaderWrapper")[0].getElementsByClassName("lyteFixedColumn"),l=this.$node,a=0;a<t.length;a++)a+1<=e?(t[a].style.display="",t[a].style.width=i[a].style.minWidth):t[a].style.display="none";e=this._fixHeaderCount;var s=this.$node.getElementsByClassName("lyteExpTableFixedColTable")[0].getElementsByTagName("lyte-exptable-tr");for(a=s.length-1;a>=0;a--)for(var o=s[a].getElementsByTagName(0==a?"lyte-exptable-th":"lyte-exptable-td"),n=0;n<o.length;++n)n+1<=e?(o[n].style.display="",o[n].style.width=i[n].style.minWidth):0!=n&&(o[n].style.display="none");this.setFixTableRowHeight(),0==e?!l.classList.contains("lyteExpTableNoShadow")&&l.classList.add("lyteExpTableNoShadow"):l.classList.contains("lyteExpTableNoShadow")&&l.classList.remove("lyteExpTableNoShadow")},headerObs:function(){this.setTableHeader(),this._fixHeaderCount=0,this.setData("columns",[]),this.getData("ltPropHeader").length>=1&&this.initProcess(),this._oHeader.style.transform="translateX(0)"}.observes("ltPropHeader.[]"),contentObs:function(){this.fixHeaderHeight(),this.setFixTableRowHeight(),this.setScrollWidth()}.observes("ltPropContent.[]"),HeightObs:function(){this.getData("ltPropHeight"),this._scrollWidth;this.$node.style.height=this.getData("ltPropHeight"),this.setScrollWidth()}.observes("ltPropHeight"),fixedTableScrollObs:function(){var t=this.$node.getElementsByClassName("lyteExpTableFixedColWrapper")[0];this.getData("ltPropFixedTableScroll")?t.style.overflow="":t.style.overflow="hidden"}.observes("ltPropFixedTableScroll").on("didConnect"),getIndex:function(t){return Array.from(this._originalDiv.getElementsByTagName("lyte-exptable-th")).indexOf(t)},composePath:function(t){for(var e=[],i=t.target.correspondingElement||t.target;i&&"HTML"!=i.tagName;)e.push(i),i=i.parentNode;return e},rtlfunc:function(t,e,i){if(this._dir&&"top"!=t&&"clientY"!=t){if(e)return"right"==t?i-e.left:"clientX"==t?i-e.clientX:i-e.right;if("left"==t)return"right";if("right"==t)return"left"}return e?e[t]:t},scrollCheck:function(t,e,i){this._colwrap=this._colwrap||this.$node.getElementsByClassName("lyteExpTableFixedColWrapper")[0],this._oriwrap=this._oriwrap||this.$node.getElementsByClassName("lyteExpTableOrigTableInnerWrap")[0],this._tableWrp=this._tableWrp||this.$node.getElementsByClassName("lyteExpTableOrigTableWrapper")[0];var l=this._colwrap.getElementsByClassName("lyteFixedColumn"),a=this._oriwrap?this._oriwrap.getElementsByClassName("lyteFixedColumn"):[],s=this._tableWrp.getBoundingClientRect(),o=window.innerWidth;if(e!=this._prevScrollLeft||i){for(var n=this.getData("columns"),r=(this.getData("fixedColumns"),this.getData("tableHeader"),this.data.ltPropFixedColumnClass,0),d=0;d<l.length;d++)l[d]._off=l[d].getBoundingClientRect(),a[d]._off=a[d].getBoundingClientRect();for(var p=0;p<n.length;p++)r+=n[p]._off.width;this._fixHeaderCount;var h=[],y=this._colwrap;this._fthList||(this._fthList=y.getElementsByClassName("lyteExpTableHeaderGroup")[0]),this._fthList&&(y.scrollTop=t);for(d=n.length;d<l.length;d++){var c=a[d];if(!(Math.round(this.rtlfunc("left",c._off,o)-this.rtlfunc("left",s,o))<r))break;n.push(l[d]),y.style.width=parseFloat(y.style.width)+a[d]._off.width+"px",r+=a[d]._off.width,this._fixHeaderCount++,this.setVisibleFixHeader(),h.push(d)}for(var m=n.length-1;m>=0;m--)-1==h.indexOf(m)&&this.rtlfunc("right",n[m]._off,o)<=this.rtlfunc("right",a[m]._off,o)+(this._isIE?2:0)&&(this._oHeader.style.transform="translateX("+(this._isIE?e*(this._dir?1:-1):this._dir?this._startScrollLeft-e:-e)+"px)",y.style.width=parseFloat(y.style.width)-a[m]._off.width+"px",this._fixHeaderCount--,this.setVisibleFixHeader(),Lyte.arrayUtils(n,"removeAt",m))}this.prevScollTop=t,this._prevScrollLeft=e},hideTempHeader:function(t){$L.fastdom.measure(function(){var e=this._colwrap||this.$node.querySelector(".lyteExpTableFixedColWrapper"),i=e.scrollTop,l=this._originalDiv.scrollTop;$L.fastdom.mutate(function(){this.getData("ltPropFixedTableScroll")&&(t?e.scrollTop=l:this._originalDiv.scrollTop=i)}.bind(this))}.bind(this)),clearTimeout(this._scrollY),delete this._scrollY},scrollF:function(t,e,i){this.scrollCheck(t,e,i)},verticalScroll:function(t,e){clearTimeout(this._scrollY),this._scrollY=setTimeout(this.hideTempHeader.bind(this,e),200)},fixedScroll:function(t){if(this._parentScroll)delete this._parentScroll;else{var e=(this._colwrap||this.$node.getElementsByClassName("lyteExpTableFixedColWrapper")[0]).scrollTop,i=this._originalDiv.scrollLeft;if(e!=this.prevScollTop){if(this.getData("ltPropFixedTableScroll"))this._originalDiv.scrollTop=e;i=this._dir?this._startScrollLeft-i:-i,this.prevScollTop=e,clearTimeout(this._fixedscrollY),this.setTranslate=this.setTranslate.bind(this),this._fixedscrollY=setTimeout(this.setTranslate,200)}}},setTranslate:function(){this._originalDiv.scrollTop;clearTimeout(this._fixedscrollY),delete this._fixedscrollY},actions:{scroll:function(t,e,i,l){if(delete this._scrolled,this._scrolltriggered)delete this._scrolltriggered;else{var a=this._originalDiv,s=(i=i||a.scrollTop,e=e||a.scrollLeft,a.scrollWidth),o=a.offsetWidth;if((i!=this.prevScollTop||l)&&($L.fastdom.mutate(function(){this.getData("ltPropFixedTableScroll")&&((this._colwrap||this.$node.getElementsByClassName("lyteExpTableFixedColWrapper")[0]).scrollTop=i)}.bind(this)),this.verticalScroll(e,!0),this.prevScollTop=i,this._parentScroll=!0),(e!=this._prevScollLeft||l)&&($L.fastdom.mutate(function(){var t;t=this._isIE?e*(this._dir?1:-1):this._dir?this._chrome?s-o-e+this._verticalScrollWidth:this._startScrollLeft-e:-e,this._oHeader.style.transform="translateX("+t+"px)"}.bind(this)),this.scrollF(i,e,l),this._prevScollLeft=e,this.fixHeaderHeight()),!this._dir&&0==e&&this._fixHeaderCount>=0){this._fixHeaderCount=0,this.setVisibleFixHeader();this.setData("columns",[])}this._scrollTimeOut&&(clearTimeout(this._scrollTimeOut),delete this._scrollTimeOut)}},fixedColScroll:function(t){return this.fixedScroll(t),!1}}}),window.addEventListener("resize",function(){window.clearTimeout(_lyteUiUtils._expressDebounce),_lyteUiUtils._expressDebounce=setTimeout(function(){for(var t=document.getElementsByTagName("lyte-expresstable"),e=0;e<t.length;e++)t[e].component.setFixTableRowHeight(),t[e].component.fixHeaderHeight()},250)},!0),_lyteUiUtils.registeredCustomElements["lyte-exptable-th"]||(_lyteUiUtils.registeredCustomElements["lyte-exptable-th"]=!0,Lyte.createCustomElement("lyte-exptable-th",{static:{observedAttributes:{get:function(){return["fixed","resize","icon"]}}},attributeChangedCallback:function(t,e,i){if("fixed"==t){for(var l=this;"DIV"!=l.tagName;)l=l.parentElement;"enable"==i?this.classList.add("lyteFixedColumn"):this.classList.remove("lyteFixedColumn")}else"icon"==t&&("disable"==i?this.classList.add("lytePreventIcon"):this.classList.remove("lytePreventIcon"))}}));