Lyte.Component.register("lyte-nav",{_template:'<template tag-name="lyte-nav">\n\t<template is="if" value="{{expHandlers(ltPropAlignment,\'!==\',\'vertical\')}}"><template case="true">\n\t\t<template is="if" value="{{ltPropNavYield}}"><template case="true">\n\t\t\t<lyte-yield yield-name="nav" items="{{auxArray}}"></lyte-yield>\n\t\t</template><template case="false">\n\t\t\t<template is="for" items="{{auxArray}}" item="item" index="index">\n\t\t\t\t<lyte-nav-item data-value="{{item[ltPropSystemValue]}}">{{item[ltPropUserValue]}}</lyte-nav-item>\n\t\t\t</template>\n\t\t</template></template>\n\t\t\n\t\t<template is="if" value="{{expHandlers(ltPropType,\'===\',\'collapse\')}}"><template case="true">\n\t\t\t<template is="if" value="{{expHandlers(expHandlers(menuContent.length,\'>\',0),\'||\',showMenu)}}"><template case="true">\n\t\t\t\t<span class="{{ltPropContainerClass}}">\n\t\t\t\t\t<span class="{{ltPropMenuIcon}}"></span>\n\t\t\t\t</span>\n\t\t\t</template></template>\n\t\t\t<lyte-menu lt-prop="{{stringify(ltPropMenu)}}" on-menu-click="{{method(\'itemSelected\')}}" on-before-open="{{method(\'beforeOpen\')}}" on-open="{{method(\'open\')}}" on-before-close="{{method(\'beforeClose\')}}" on-close="{{method(\'close\')}}" before-render="{{method(\'befRender\')}}" after-render="{{method(\'aftRender\')}}">\n\n\t\t\t\t<template is="registerYield" yield-name="yield">\n\t\t\t\t\t<template is="if" value="{{ltPropMenuYield}}"><template case="true">\n\t\t\t\t\t\t<lyte-yield yield-name="menu" items="{{menuContent}}"></lyte-yield>\n\t\t\t\t\t</template><template case="false">\n\t\t\t\t\t\t<lyte-menu-body class="{{ltPropNavMenuClass}}">\n\t\t\t\t\t\t\t<template is="for" items="{{menuContent}}" item="item" index="index">\n\t\t\t\t\t\t\t\t<lyte-menu-item data-value="{{item[ltPropSystemValue]}}">\n\t\t\t\t\t\t\t\t\t<lyte-menu-label>\n\t\t\t\t\t\t\t\t\t\t{{item[ltPropUserValue]}}\n\t\t\t\t\t\t\t\t\t</lyte-menu-label>\n\t\t\t\t\t\t\t\t</lyte-menu-item>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t</lyte-menu-body>\n\t\t\t\t\t</template></template>\n\t\t\t\t</template>\n\n\t\t\t</lyte-menu>\n\t\t</template></template>\n\t\t\n\t</template></template>\n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"for",position:[1],dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,0]},{type:"componentDynamic",position:[1]}]}]}},default:{}},{type:"attr",position:[3]},{type:"if",position:[3],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]}]}},default:{}},{type:"attr",position:[3]},{type:"registerYield",position:[3,1],dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,1]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]}]},{type:"componentDynamic",position:[1]}]}},default:{}}]},{type:"componentDynamic",position:[3]}]}},default:{}}]}},default:{}}],_observedAttributes:["ltPropMenu","ltPropNavYield","ltPropMenuYield","ltPropItems","ltPropUserValue","ltPropSystemValue","ltPropMaxWidth","ltPropType","ltPropNavMenuClass","ltPropMenuIcon","ltPropContainerClass","ltPropClick","ltPropAlignment","menuContent","auxArray","arrowTop","arrowBot","showMenu"],init:function(){var t=this.getData("ltPropMenu"),e=this.getData("ltPropContainerClass");$L.fastdom.measure(function(){_lyteUiUtils.nav_innerWidth||(_lyteUiUtils.nav_innerWidth=document.documentElement.clientWidth)}),Lyte.objectUtils(t,"add","yield",!0),Lyte.objectUtils(t,"add","query","."+e)},didDestroy:function(){for(var t=this.$node.querySelectorAll("lyte-nav-item"),e=0;e<t.length;e++)t[e].getAttribute("lyte-shortcut")&&t[e].setAttribute("lyte-shortcut",JSON.stringify({}))},createOuterDiv:function(){var t=document.createElement("div");return t.setAttribute("class","lyteNavDiv"),t.style.overflow=window._lyteUiUtils.isMobile?"auto":"hidden",t},show:function(t,e){this.setData("topH",t[0].getBoundingClientRect().height),this.setData("botH",t[1].getBoundingClientRect().height),this.dispArrow.call(this,t,e),this.getMethods("afterRender")&&this.executeMethod("afterRender",this)},construct:function(){for(var t,e=this.getData("ltPropItems")||[],i=0,n=this.getData("ltPropUserValue"),a=this.getData("ltPropSystemValue"),l=[];i<e.length;i++)(t={})[n]=e[i][n],t[a]=e[i][a],Lyte.arrayUtils(l,"push",t);this.setData("auxArray",l)},recalculate:function(){var t,e=this.getCurrentSelected(),i=this.getDataValue(e);this.getData("ltPropClick");this.construct(),(t=this.$node.querySelector('lyte-nav-item[data-value="'+window._lyteUiUtils.escape(i)+'"]'))&&t.setAttribute("selected",!0),this.collapse()},itemsOb:function(){this.recalculate()}.observes("ltPropItems"),getCurrentSelected:function(){var t=this.getData("ltPropClick");return this.$node.querySelector("lyte-nav-item."+t)},getDataValue:function(t){return t?t.getAttribute("data-value"):""},getWidth:function(t){return t?t.getBoundingClientRect().width:0},getMenuWidth:function(){var t,e;return this.setData("showMenu",!0),t=this.$node.querySelector("."+this.getData("ltPropContainerClass")),e=this.getWidth(t),this.setData("showMenu",!1),e},calculate:function(){var t,e,i=this.getData("auxArray"),n=[],a=[],l=this.$node.getBoundingClientRect(),o=parseFloat(this.getData("ltPropMaxWidth"))/100,s=l.width*o,r=0,d=(i.length,this.getData("ltPropSystemValue")),c=0,p=this.getCurrentSelected(),h=this.getDataValue(p);for(c=c+this.getWidth(p)+this.getMenuWidth();r<i.length;r++)(e=i[r])[d]!==h&&(c+=this.getWidth(this.$node.querySelector('lyte-nav-item[data-value="'+window._lyteUiUtils.escape(e[d])+'"]')))>s&&(Lyte.arrayUtils(n,"push",e),a.push(r));for(this.setData("menuContent",n);!isNaN(t=a.pop());)Lyte.arrayUtils(i,"removeAt",t,1)},collapse:function(){$L.fastdom.measure(this.calculate,this)},didConnect:function(){var t,e,i,n,a,l,o,s=this.getData("ltPropAlignment"),r=this.$node,d=window._lyteUiUtils.isMobile,c=r.children,p=c.length;if("horizontal"===s)t=this.getData("ltPropType"),(this.getData("ltPropItems")||[]).length>0&&(this.construct(),"collapse"===t&&this.collapse());else if("vertical"===s){for(e=this.createOuterDiv(),i=r.querySelectorAll("lyte-arrow"),n=0;n<p;n++)c[0].prevent=!0,l=c[0],c[0].hasAttribute("selected")&&"false"!==c[0].getAttribute("selected")&&(o=c[0]).removeAttribute("selected"),_lyteUiUtils.appendChild(e,c[0]),l.prevent=!1,l=null;_lyteUiUtils.appendChild(r,e),o&&o.setAttribute("selected","true"),o=null,0==i.length?(this.addArrow("arrow-up"),this.addArrow("arrow-down")):(r.insertBefore(i[0],r.children[0]),r.appendChild(i[1])),i=r.querySelectorAll("lyte-arrow"),$L.fastdom.measure(this.show.bind(this,i,e)),a=r.querySelector(".lyteNavDiv"),d?(i[0].addEventListener("touchstart",this.moveup.bind(this)),i[1].addEventListener("touchstart",this.movedown.bind(this))):(i[0].addEventListener("mouseenter",this.moveup.bind(this)),i[1].addEventListener("mouseenter",this.movedown.bind(this)));var h=this;d?(this.prev=a.scrollTop,a.addEventListener("scroll",function(t){var e,n,l,o=a.scrollHeight,s=a.scrollTop,r=a.getBoundingClientRect().height,d=h.prev,c=Math.floor(s-d),p=h.getData("stopHandler");h.prev=s,e=i[0].getBoundingClientRect().height,n=i[1].getBoundingClientRect().height,t.preventDefault(),0==c||p||(c>0?("none"===i[0].style.display&&(i[0].style.display="inline-block",l=(e=h.getData("topH"))+n,a.style.height="calc(100% - "+l+"px)"),Math.abs(s+r-o)<=5&&(i[1].style.display="none",a.style.height="calc(100% - "+e+"px)")):("none"===i[1].style.display&&o-(s+r)>=30&&(i[1].style.display="inline-block",l=e+(n=h.getData("botH")),a.style.height="calc(100% - "+l+"px)"),s<=0&&(i[0].style.display="none",a.style.height="calc(100% - "+n+"px)")))})):a.addEventListener("wheel",function(t){var e,n,l,o=t.deltaY,s=a.scrollHeight,r=a.getBoundingClientRect().height,d=a.scrollTop;t.preventDefault(),Math.floor(s)!=Math.floor(r)&&(e=i[0].getBoundingClientRect().height,n=i[1].getBoundingClientRect().height,o<0&&(d=a.scrollTop=a.scrollTop-6,"none"===i[1].style.display&&(i[1].style.display="inline-block",l=e+(n=h.getData("botH")),a.style.height="calc(100% - "+l+"px)"),d<=0&&(i[0].style.display="none",a.style.height="calc(100% - "+n+"px)")),o>0&&(d=a.scrollTop=a.scrollTop+6,"none"===i[0].style.display&&(i[0].style.display="inline-block",l=(e=h.getData("topH"))+n,a.style.height="calc(100% - "+l+"px)"),Math.floor(r)+Math.floor(d)>=Math.floor(s)&&(i[1].style.display="none",a.style.height="calc(100% - "+e+"px)")))}),d?(i[0].addEventListener("touchend",this.removeup.bind(this)),i[1].addEventListener("touchend",this.removedown.bind(this)),i[0].addEventListener("touchcancel",this.removeup.bind(this)),i[1].addEventListener("touchcancel",this.removedown.bind(this))):(i[0].addEventListener("mouseleave",this.removeup.bind(this)),i[1].addEventListener("mouseleave",this.removedown.bind(this)))}},removedown:function(){this.setData("stopHandler",!1),window.cancelAnimationFrame(this.getData("arrowdid"))},removeup:function(){this.setData("stopHandler",!1),window.cancelAnimationFrame(this.getData("arrowuid"))},down:function(t,e,i){var n,a=t.scrollTop,l=t.scrollHeight,o=t.getBoundingClientRect().height;this.setData("stopHandler",!0),a+o<l&&(a=t.scrollTop=t.scrollTop+3),Math.floor(o)+Math.floor(a)>=l&&(e[1].style.display="none",t.style.height="calc(100% - "+i+"px)"),n=window.requestAnimationFrame(this.down.bind(this,t,e,i)),this.setData("arrowdid",n)},up:function(t,e,i){var n,a=t.scrollTop;this.setData("stopHandler",!0),0!==a&&(a=t.scrollTop=t.scrollTop-3),a<=0&&(e[0].style.display="none",t.style.height="calc(100% - "+i+"px)"),n=window.requestAnimationFrame(this.up.bind(this,t,e,i)),this.setData("arrowuid",n)},movedown:function(){var t,e,i=this.$node,n=i.querySelector(".lyteNavDiv"),a=i.querySelectorAll("lyte-arrow");n.getBoundingClientRect().height,n.scrollHeight;a[0].style.display="inline-block",e=this.getData("topH")+(t=this.getData("botH")),n.style.height="calc(100% - "+e+"px)",window.requestAnimationFrame(this.down.bind(this,n,a,t))},moveup:function(){var t,e,i=this.$node,n=i.querySelector(".lyteNavDiv"),a=i.querySelectorAll("lyte-arrow");n.getBoundingClientRect().height,n.scrollHeight;a[1].style.display="inline-block",e=(t=this.getData("topH"))+this.getData("botH"),n.style.height="calc(100% - "+e+"px)",window.requestAnimationFrame(this.up.bind(this,n,a,t))},addArrow:function(t){var e=document.createElement("i"),i=document.createElement("lyte-arrow"),n=this.$node;e.setAttribute("class",t),i.appendChild(e),-1!==t.indexOf("up")?n.insertBefore(i,n.children[0]):n.appendChild(i)},dispArrow:function(t,e){var i=0,n=0,a=0,l=0;switch(this.getData("arrowTop")&&(n=this.getData("topH"),i=1),this.getData("arrowBot")&&(a=this.getData("botH"),i=1==i?3:2),i){case 1:e.style.height="calc(100% - "+n+"px)",t[1].style.display="none";break;case 2:e.style.height="calc(100% - "+a+"px)",t[0].style.display="none";break;case 3:l=n+a,e.style.height="calc(100% - "+l+"px)"}},recreateFromDv:function(t){for(var e=this.getData("ltPropSystemValue"),i=0,n={},a=this.getData("ltPropUserValue"),l=this.getData("ltPropItems")||[];i<l.length;i++)if(l[i][e]===t)return n[a]=l[i][a],n[e]=t,n},findInd:function(t){for(var e=this.getData("menuContent"),i=0,n=(this.getData("ltPropUserValue"),this.getData("ltPropSystemValue"));i<e.length;i++)if(t==e[i][n])return i},setSelected:function(t){var e=this.$node.querySelector('lyte-nav-item[data-value="'+window._lyteUiUtils.escape(t)+'"]');this.getData("ltPropClick");e&&e.click()},methods:{itemSelected:function(){var t,e,i,n=arguments[4],a=this.getData("ltPropClick"),l=n.element,o=this.getData("auxArray"),s=this.getDataValue(l),r=this.findInd(s),d=this.getData("menuContent"),c=o.length;(t=this.$node.querySelector("lyte-nav-item."+a))&&t.classList.remove(a),i=this.recreateFromDv(s),e=Lyte.arrayUtils(o,"replaceAt",c-1,i),Lyte.arrayUtils(d,"removeAt",r,1),Lyte.arrayUtils(d,"insertAt",r,e),this.setSelected(s),this.getMethods("onMenuClick")&&this.executeMethod("onMenuClick")},beforeOpen:function(){this.getMethods("onBeforeOpen")&&this.executeMethod("onBeforeOpen")},open:function(){this.getMethods("onOpen")&&this.executeMethod("onOpen")},beforeClose:function(){this.getMethods("onBeforeClose")&&this.executeMethod("onBeforeClose")},close:function(){this.getMethods("onClose")&&this.executeMethod("onClose")},befRender:function(){this.getData("beforeMenuRender")&&this.executeMethod("beforeMenuRender")},aftRender:function(){this.getData("afterMenuRender")&&this.executeMethod("afterMenuRender")}},data:function(){return{ltPropMenu:Lyte.attr("object",{default:{}}),ltPropNavYield:Lyte.attr("boolean",{default:!1}),ltPropMenuYield:Lyte.attr("boolean",{default:!1}),ltPropItems:Lyte.attr("array",{default:[]}),ltPropUserValue:Lyte.attr("string",{default:""}),ltPropSystemValue:Lyte.attr("string",{default:""}),ltPropMaxWidth:Lyte.attr("string",{default:"90%"}),ltPropType:Lyte.attr("string",{default:""}),ltPropNavMenuClass:Lyte.attr("string",{default:"lyteNavMenuClass"}),ltPropMenuIcon:Lyte.attr("string",{default:"lyteNavKebabMenu"}),ltPropContainerClass:Lyte.attr("string",{default:"lyteNavIconContainer"}),ltPropClick:Lyte.attr("string",{default:"lyteNavActive"}),ltPropAlignment:Lyte.attr("string",{default:"horizontal"}),menuContent:Lyte.attr("array",{default:[]}),auxArray:Lyte.attr("array",{default:[]}),arrowTop:Lyte.attr("boolean",{default:!1}),arrowBot:Lyte.attr("boolean",{default:!1}),showMenu:Lyte.attr("boolean",{default:!1})}}}),_lyteUiUtils.registeredCustomElements["lyte-nav-item"]||(_lyteUiUtils.registeredCustomElements["lyte-nav-item"]=!0,Lyte.createCustomElement("lyte-nav-item",{connectedCallback:function(){if(!this.prevent){for(var t,e,i=this,n=this;"LYTE-NAV"!=i.tagName&&"HTML"!=i.tagName;)i=i.parentElement;if("HTML"==i.tagName)return;if(t=i.component,"vertical"===(e=t.getData("ltPropAlignment")))for(;n&&!n.classList.contains("lyteNavDiv");)n=n.parentElement;$L.fastdom.measure(function(){var i;this.hasAttribute("selected")&&this.getAttribute("selected")?n&&"vertical"===e&&(i=this.offsetTop,n.scrollTop=i,0!=i&&t.setData("arrowTop",!0),t.setData("arrowBot",!1)):n&&"vertical"===e&&this.offsetTop+this.getBoundingClientRect().height>n.getBoundingClientRect().height+n.scrollTop&&t.setData("arrowBot",!0)},this),this._eventRegistered||(this._eventRegistered=!0,this.addEventListener("click",function(){this.setAttribute("selected",!0),t.getMethods("onItemSelected")&&t.executeMethod("onItemSelected",this,t)}.bind(this)))}},static:{observedAttributes:{get:function(){return["selected","lyte-shortcut"]}}},attributeChangedCallback:function(t,e,i,n){if(!this.prevent){var a,l,o,s=this;if("lyte-shortcut"===t){if("function"==typeof shortcut){if(!i)return;i=JSON.parse(i),e=e?JSON.parse(e):{},shortcut.push({newKey:i.key,type:i.type,wait:i.wait,oldKey:e.key,value:this})}}else if("selected"==t&&i&&"false"!==i){for(o=this.getAttribute("selected");s&&"LYTE-NAV"!=s.tagName&&"HTML"!=s.tagName;)s=s.parentElement;if(!s||"HTML"==s.tagName)return;a=s.component.getData("ltPropClick"),(l=s.querySelector("."+a))&&l!=this&&l.setAttribute("selected",""),o&&this.classList.add(a)}else if("selected"==t){for(s=this;s&&"LYTE-NAV"!=s.tagName&&"HTML"!=s.tagName;)s=s.parentElement;if(!s||"HTML"==s.tagName)return;a=s.component.getData("ltPropClick"),this.classList.remove(a)}}}}));var _lyteUiNav={resize:function(){for(var t,e=document.querySelectorAll("lyte-nav"),i=(e.length,0);i<e.length;i++)(t=e[i].component)&&"collapse"===t.getData("ltPropType")&&t.recalculate()}};window.addEventListener("resize",function(t){var e,i=_lyteUiUtils.lyteNavId,n=_lyteUiUtils.isMobile,a=_lyteUiUtils.nav_innerWidth;n&&a?(e=document.documentElement.clientWidth)!==a&&(_lyteUiUtils.nav_innerWidth=e,_lyteUiNav.resize()):n||(window.clearTimeout(i),_lyteUiUtils.lyteNavId=window.setTimeout(function(){_lyteUiNav.resize()},16))});