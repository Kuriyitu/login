Lyte.Component.register("lyte-checkbox",{_template:'<template tag-name="lyte-checkbox" onkeydown="{{action(\'preventInputClick\',event)}}" onkeyup="{{action(\'preventInputClick\',event)}}">\n\t\n\t<template is="switch" value="{{ltPropType}}">\n\t\t<template case="default">\n\t\t\t<label class="lyteCheckbox lyteDefault" onmouseup="{{action(\'mup\',event)}}" onclick="{{action(\'prevent\',event)}}">\n\t\t\t\t<input type="checkbox" id="{{ltPropId}}" name="{{ltPropName}}" value="{{ltPropValue}}" checked="{{ltPropChecked}}" tabindex="{{ltPropTabindex}}" disabled="{{ltPropDisabled}}" class="" readonly="{{ltPropReadonly}}" onclick="{{action(\'checkBoxClicked\',event)}}">\n\t\t\t\t<span class="{{ltPropFinalClass}}">\n\t\t\t\t\t<span class="{{ltPropFinalLabelClass}}">\n\t\t\t\t\t\t<template is="if" value="{{ltPropYield}}"><template case="true">\n\t\t\t\t\t\t\t<lyte-yield yield-name="yield"></lyte-yield>\n\t\t\t\t\t\t</template><template case="false">\n\t\t\t\t\t\t\t{{ltPropLabel}}\n\t\t\t\t\t\t</template></template>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</label>\n\t\t\t</template>\n\t\t<template case="primary">\n\t\t\t<label class="lyteCheckbox lytePrimary" onmouseup="{{action(\'mup\',event)}}" onclick="{{action(\'prevent\',event)}}">\n\t\t\t\t<input type="checkbox" id="{{ltPropId}}" name="{{ltPropName}}" value="{{ltPropValue}}" checked="{{ltPropChecked}}" tabindex="{{ltPropTabindex}}" disabled="{{ltPropDisabled}}" class="" readonly="{{ltPropReadonly}}" onclick="{{action(\'checkBoxClicked\',event)}}">\n\t\t\t\t<span class="{{ltPropFinalClass}}">\t\n\t\t\t\t\t<span class="{{ltPropFinalLabelClass}}">\n\t\t\t\t\t\t<template is="if" value="{{ltPropYield}}"><template case="true">\n\t\t\t\t\t\t\t<lyte-yield yield-name="yield"></lyte-yield>\n\t\t\t\t\t\t</template><template case="false">\n\t\t\t\t\t\t\t{{ltPropLabel}}\n\t\t\t\t\t\t</template></template>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</label>\n\t\t\t</template>\n\t\t<template case="switch">\n\t\t\t<label class="" onmouseup="{{action(\'mup\',event)}}" onclick="{{action(\'prevent\',event)}}">\n\t\t\t\t<input type="checkbox" id="{{ltPropId}}" name="{{ltPropName}}" value="{{ltPropValue}}" checked="{{ltPropChecked}}" tabindex="{{ltPropTabindex}}" disabled="{{ltPropDisabled}}" class="lyteHide on-off-sw" readonly="{{ltPropReadonly}}" onclick="{{action(\'checkBoxClicked\',event)}}">\n\t\t\t\t<span class="{{ltPropFinalClass}}">\n\t\t\t\t\t<span class="on-btn"></span>\n\t\t\t\t</span>\n\t\t\t\t<span class="{{ltPropFinalLabelClass}}">\n\t\t\t\t\t<template is="if" value="{{ltPropYield}}"><template case="true">\n\t\t\t\t\t\t<lyte-yield yield-name="yield"></lyte-yield>\n\t\t\t\t\t</template><template case="false">\n\t\t\t\t\t\t{{ltPropLabel}}\n\t\t\t\t\t</template></template>\n\t\t\t\t</span>\n\t\t\t</label>\n\t\t\t</template>\n\t\t<template case="slider">\n\t\t\t<label class="lyteCheckSliderLabel" onmouseup="{{action(\'mup\',event)}}" onclick="{{action(\'prevent\',event)}}">\n\t\t\t\t<input type="checkbox" id="{{ltPropId}}" name="{{ltPropName}}" value="{{ltPropValue}}" checked="{{ltPropChecked}}" tabindex="{{ltPropTabindex}}" disabled="{{ltPropDisabled}}" class="lyteHide" readonly="{{ltPropReadonly}}" onclick="{{action(\'checkBoxClicked\',event)}}">\n\t\t\t\t<span class="{{ltPropFinalClass}}">\n\t\t\t\t\t<span class="{{ltPropFinalLabelClass}}">\n\t\t\t\t\t\t<template is="if" value="{{ltPropYield}}"><template case="true">\n\t\t\t\t\t\t\t<lyte-yield yield-name="yield"></lyte-yield>\n\t\t\t\t\t\t</template><template case="false">\n\t\t\t\t\t\t\t{{ltPropLabel}}\n\t\t\t\t\t\t</template></template>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</label>\n\t\t\t</template>\n\t</template>\n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"switch",position:[1],cases:{default:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"attr",position:[1,3]},{type:"attr",position:[1,3,1]},{type:"attr",position:[1,3,1,1]},{type:"if",position:[1,3,1,1],cases:{true:{dynamicNodes:[{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"text",position:[1]}]}},default:{}}]},primary:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"attr",position:[1,3]},{type:"attr",position:[1,3,1]},{type:"attr",position:[1,3,1,1]},{type:"if",position:[1,3,1,1],cases:{true:{dynamicNodes:[{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"text",position:[1]}]}},default:{}}]},switch:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"attr",position:[1,3]},{type:"attr",position:[1,5]},{type:"attr",position:[1,5,1]},{type:"if",position:[1,5,1],cases:{true:{dynamicNodes:[{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"text",position:[1]}]}},default:{}}]},slider:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"attr",position:[1,3]},{type:"attr",position:[1,3,1]},{type:"attr",position:[1,3,1,1]},{type:"if",position:[1,3,1,1],cases:{true:{dynamicNodes:[{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"text",position:[1]}]}},default:{}}]}},default:{}}],_templateAttributes:{type:"attr",position:[]},_observedAttributes:["ltPropType","ltPropId","ltPropDisabled","ltPropChecked","ltPropLabel","ltPropName","ltPropValue","ltPropReadonly","ltPropFireOnInit","ltPropClass","ltPropLabelClass","ltPropTabindex","lyteUnbound","ltPropYield"],data:function(){return{ltPropType:Lyte.attr("string",{default:"default"}),ltPropId:Lyte.attr("string",{default:void 0}),ltPropDisabled:Lyte.attr("boolean",{default:!1}),ltPropChecked:Lyte.attr("boolean",{default:!1}),ltPropLabel:Lyte.attr("string",{default:void 0}),ltPropName:Lyte.attr("string",{default:void 0}),ltPropValue:Lyte.attr("string",{default:void 0}),ltPropReadonly:Lyte.attr("boolean",{default:!1}),ltPropFireOnInit:Lyte.attr("boolean",{default:!1}),ltPropClass:Lyte.attr("string",{default:""}),ltPropLabelClass:Lyte.attr("string",{default:""}),ltPropTabindex:Lyte.attr("number",{default:0}),lyteUnbound:Lyte.attr("boolean",{default:!1}),ltPropYield:Lyte.attr("boolean",{default:!1})}},didDestroy:function(){delete this.$node.focus,delete this.$node.blur,delete this.$node.click},reduceOpacity:function(){this.getData("ltPropDisabled")?this.$node.classList.add("lyteCheckDisabled"):this.$node.classList.remove("lyteCheckDisabled")},disabledChange:function(){this.reduceOpacity()}.observes("ltPropDisabled"),setDefaults:function(){var t=this.getData("ltPropType"),e=this.getData("ltPropClass"),a=this.getData("ltPropLabelClass");"switch"===t?this.setData("ltPropFinalClass",e||"lyteCheckSwitch"):"default"===t?this.setData("ltPropFinalClass",e||"lyteCheckBoxDefault"):"primary"===t?this.setData("ltPropFinalClass",e||"lyteCheckBoxPrimary"):"slider"===t&&this.setData("ltPropFinalClass",e||"lyteCheckSlider"),"slider"===t?this.setData("ltPropFinalLabelClass",a||"lyteCheckSliderText"):this.setData("ltPropFinalLabelClass",a||"")},typeObs:function(){this.setDefaults()}.observes("ltPropType","ltPropClass","ltPropLabelClass").on("init"),didDestroy:function(){delete this.$node.focus,delete this.$node.blur,delete this.$node.click},focusInput:function(){var t=this.$node.querySelector("input");document.activeElement!==t&&t.focus()},didConnect:function(){var t=this;this.reduceOpacity(),this.$node.click=function(){var e=new Event("click",{bubbles:!0,cancelable:!0}),a=t.$node,i=a.ltProp("checked"),l=a.ltProp("disabled"),n=a.ltProp("readonly"),s=(t.getData("lyteUnbound"),t.$node.querySelector("input"));l||n||(t.setData("eventCache",e),i?a.ltProp("checked",!1):a.ltProp("checked",!0),t.$node._fR&&(s.checked=a.ltProp("checked"),s.checked?s.setAttribute("checked",""):s.removeAttribute("checked"),t.fireCallBacksFunction({},!1)),a.dispatchEvent(e))},this.$node.focus=function(){var e=t.$node,a=e.querySelector("input"),i=e.ltProp("disabled"),l=e.ltProp("readonly");i||l||a.focus()},this.$node.blur=function(){var e=t.$node,a=e.querySelector("input"),i=e.ltProp("disabled"),l=e.ltProp("readonly");i||l||a.blur()},this.fireCallBacksFunction.call(this,void 0,!0)},fireCallbacks:function(t,e){this.getData("preventRefire")||this.fireCallBacksFunction.call(this,t,e)}.observes("ltPropChecked"),fireCallBacksFunction:function(t,e){var a=this.getData("ltPropChecked"),i=this.getData("ltPropFireOnInit"),l=this.getData("eventCache");if(this.$node.checked=a||!1,a&&e){if(!i)return;var n=this.$node.querySelector("input");this.getMethods("onBeforeChecked")&&this.executeMethod("onBeforeChecked",n,this,l),this.getMethods("onChecked")&&this.executeMethod("onChecked",n,this,l),this.getMethods("onChanged")&&this.executeMethod("onChanged",n,this,l)}else if(this.$node.checked&&!e){n=this.$node.querySelector("input");if(!this.clicked){if(this.setData("preventRefire",!0),this.setData("ltPropChecked",!1),this.getMethods("onBeforeChecked")){if(!(0!=this.executeMethod("onBeforeChecked",n,this,l)))return void this.setData("preventRefire",!1);this.setData("ltPropChecked",!0)}else this.setData("ltPropChecked",!0);this.setData("preventRefire",!1)}this.getMethods("onChecked")&&this.executeMethod("onChecked",n,this,l),this.getMethods("onChanged")&&this.executeMethod("onChanged",n,this,l)}else if(!this.$node.checked&&!e){n=this.$node.querySelector("input");if(!this.clicked){if(this.setData("preventRefire",!0),this.setData("ltPropChecked",!0),this.getMethods("onBeforeUnchecked")){if(!(0!=this.executeMethod("onBeforeUnchecked",n,this,l)))return void this.setData("preventRefire",!1);this.setData("ltPropChecked",!1)}else this.setData("ltPropChecked",!1);this.setData("preventRefire",!1)}this.getMethods("onUnchecked")&&this.executeMethod("onUnchecked",n,this,l),this.getMethods("onChanged")&&this.executeMethod("onChanged",n,this,l)}},isNodeDestroyed:function(){return!this.$node},fireClick:function(t){var e,a,i=this.getData("sendEvent"),l=this.getData("ltPropDisabled");this.isTimeoutInitiated=!1,this.isNodeDestroyed()||i||l||((e=this.$node.querySelector("input")).checked=!e.checked,(a=new Event("click")).shiftKey=!0,e.dispatchEvent(a))},actions:{preventInputClick:function(t){32===t.keyCode&&t.preventDefault()},mup:function(t){var e;if(this.setData("prevented",!1),this.setData("sendEvent",!1),!this.getData("ltPropDisabled")){var a=this.$node.querySelector("input");e=a.checked,this.getMethods("onBeforeChecked")&&!e?0!=this.executeMethod("onBeforeChecked",a,this,t)||(this.setData("prevented",!0),t.preventDefault()):this.getMethods("onBeforeUnchecked")&&e&&(0!=this.executeMethod("onBeforeUnchecked",a,this,t)||(this.setData("prevented",!0),t.preventDefault()))}},prevent:function(t){var e=this.getData("sendEvent"),a=!!~window.navigator.userAgent.indexOf("Firefox"),i=this.isTimeoutInitiated;e||t.stopPropagation(),a&&!i&&(this.isTimeoutInitiated=!0,setTimeout(this.fireClick.bind(this,t),0))},checkBoxClicked:function(t){var e;return this.setData("sendEvent",!0),this.setData("eventCache",t),this.clicked=!0,this.focusInput(),this.getData("prevented")?(e=this.$node.querySelector("input"),this.setData("prevented",!1),this.setData("preventRefire",!0),e.checked?e.checked=!1:e.checked=!0,this.setData("preventRefire",!1),this.clicked=!1,void this.setData("eventCache",{})):this.getData("ltPropDisabled")?(this.clicked=!1,t.preventDefault(),void this.setData("eventCache",{})):(t.target.checked?this.setData("ltPropChecked",!0):this.setData("ltPropChecked",!1),this.$node._fR&&(this.getData("ltPropChecked")?this.$node.querySelector("input").setAttribute("checked",""):this.$node.querySelector("input").removeAttribute("checked"),this.fireCallBacksFunction({},!1)),this.setData("eventCache",{}),void(this.clicked=!1))}}}),document.addEventListener("keyup",function(t){var e,a=t.keyCode;if(13===a||32===a){if("INPUT"!==(e=document.activeElement).tagName)return;for(;"LYTE-CHECKBOX"!==e.tagName&&"HTML"!==e.tagName;)e=e.parentElement;"LYTE-CHECKBOX"===e.tagName&&e.click()}},!0);