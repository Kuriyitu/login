Lyte.Component.register("lyte-fileupload",{_template:'<template tag-name="lyte-fileupload">\n\t<input class="fileuploadInput {{ltPropClass}}" id="{{ltPropId}}" type="file" name="{{ltPropName}}" onchange="{{action(\'change\', event, this)}}" multiple="{{ltPropMultiple}}" accept="{{ltPropAccept}}">\n\t<div tabindex="{{ltPropTabindex}}" class="fileUploadWrapper {{fileClass}} {{if(ltPropMultiple, \'multiFileupload\', \'singleFileUpload\')}} lyteFileUpd{{ltPropAppearance}}Type {{if(ltPropDisabled,\'lyteFileUpdDisabled\')}}" ondragenter="{{action(\'drag\', event)}}" ondragleave="{{action(\'drag\', event)}}" ondragover="{{action(\'drag\', event)}}" ondrop="{{action(\'drop\', event)}}" onclick="{{action(\'click\', event)}}" style="outline: none;" onpaste="{{action(\'paste\', event)}}" onkeydown="{{action( \'keydown\', event)}}">\n\t\t<template is="if" value="{{ltPropYield}}"><template case="true">\n\t\t\t<lyte-yield yield-name="file" queue-list="{{queueList}}" predefined-list="{{predefinedList}}"></lyte-yield>\n\t\t</template><template case="false">\n\t\t\t<template is="if" value="{{ltPropMultiple}}"><template case="true">\n\t\t\t\t<lyte-file-select-area>\n\t\t\t \t\t<lyte-file-message class="lyteFileUpdMsgWrap"> <span class="lyteFileUpdMsg">{{lyteUiI18n(ltPropMessage,"fileupload")}}</span> </lyte-file-message>\n\t\t\t\t </lyte-file-select-area>\n\t\t\t\t <div class="lyteFileUpdList">\n\t\t\t\t\t<template is="for" items="{{predefinedList}}" item="item" index="index">\n\t\t\t\t\t\t<div class="lyteFileUpdListFile">\n\t\t\t\t\t\t\t<div class="lyteFileUpdTypePreview">\n\t\t\t\t\t\t\t\t<template is="if" value="{{item.src}}"><template case="true">\n\t\t\t\t\t\t\t\t\t\t<img class="lyteFileUpdThumb" src="{{item.src}}">\n\t\t\t\t\t\t\t\t</template><template case="false">\n\t\t\t\t\t\t\t\t\t<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>\n\t\t\t\t\t\t\t\t</template></template>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<lyte-text class="lyteFileUpdFileName" lt-prop-value="{{item.name}}"></lyte-text>\n\t\t\t\t\t\t\t<span class="lyteFileUpdFileSize">( {{lyteUiFileSize(item.size, ltPropFileUnit, ltPropDigits)}} )</span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<lyte-file-close data-value="{{item.id}}" class="{{item.status}}"></lyte-file-close>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</template>\n\t\t\t\t \t<template is="for" items="{{queueList}}" item="item" index="index">\n\t\t\t\t \t\t<div class="lyteFileUpdListFile {{item.status}}">\n\t\t\t\t \t\t\t<div class="lyteFileUpdTypePreview">\n\t\t\t\t\t \t\t\t<template is="if" value="{{item.src}}"><template case="true">\n\t\t\t\t\t \t\t\t\t\t<img class="lyteFileUpdThumb" src="{{item.src}}">\n\t\t\t\t \t\t\t\t</template><template case="false">\n\t\t\t\t \t\t\t\t\t<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>\n\t\t\t\t \t\t\t\t</template></template>\n\t\t\t \t\t\t\t</div>\n\t\t\t\t \t\t\t<lyte-text class="lyteFileUpdFileName" lt-prop-value="{{item.name}}"></lyte-text>\n\t\t\t\t\t\t\t <span class="lyteFileUpdFileSize">( {{lyteUiFileSize(item.size, ltPropFileUnit, ltPropDigits)}} )</span>\n\t\t\t\t\t\t\t <template is="if" value="{{expHandlers(expHandlers(ltPropUploadMultiple,\'!\'),\'&amp;&amp;\',expHandlers(item.percentage,\'!=\',undefined))}}"><template case="true">\n\t\t\t\t\t\t\t\t<div class="lyteFileUpdFileStatus" data-completed="{{item.percentage}}">\n\t\t\t\t\t\t\t\t\t<div class="lyteFileUpdProgressBar {{item.status}}">\n\t\t\t\t\t\t\t\t\t\t<div class="lyteFileUpdProgressFill" style="width: {{item.percentage}}%"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t \t\t\t</template></template><template is="if" value="{{expHandlers(item.status,\'==\',&quot;error&quot;)}}"><template case="true">\n\t\t\t\t \t\t\t\t<lyte-file-retry data-value="{{item.id}}">\n\t\t\t\t\t\t\t\t\t <span class="lyteFileUpdFailMsg">{{lyteUiI18n(ltPropFailureMessage,"fileupload")}}</span>\n\t\t\t\t\t\t\t\t\t<template is="if" value="{{expHandlers(ltPropUploadMultiple,\'!\')}}"><template case="true">\n\t\t\t\t\t\t\t\t\t\t<span class="lyteFileUpdRetryMsg">{{lyteUiI18n(ltPropRetryText,"fileupload")}}</span>\n\t\t\t\t\t\t\t\t\t</template></template>\n\t\t\t\t \t\t\t\t</lyte-file-retry>\n\t\t\t\t\t\t\t </template></template>\n\t\t\t\t\t\t\t <template is="if" value="{{expHandlers(expHandlers(ltPropUploadMultiple,\'!\'),\'||\',expHandlers(expHandlers(expHandlers(item.status,\'!\'),\'||\',expHandlers(item.status,\'==\',&quot;error&quot;)),\'||\',expHandlers(item.status,\'==\',&quot;success&quot;)))}}"><template case="true">\n\t\t\t\t\t\t\t\t<lyte-file-close data-value="{{item.id}}" class="{{item.status}}"></lyte-file-close>\n\t\t\t\t\t\t\t</template></template>\n\t\t\t\t \t\t</div>\n\t\t\t\t \t</template>\n\t\t\t\t  </div>\n\t\t\t</template><template case="false">\n\t\t\t\t<lyte-file-select-area>\n\t\t\t \t\t<lyte-file-message class="lyteFileUpdMsgWrap {{if((queueList.length || predefinedList.length), \'lyteHide\', \'\')}}"> \n\t\t\t \t\t\t<span class="lyteFileUpdMsg">\n\t\t\t\t\t\t\t{{lyteUiI18n(ltPropMessage,"fileupload")}}\n\t\t\t \t\t\t</span> \n\t\t\t \t\t</lyte-file-message>\n\t\t\t \t\t <div class="lyteFileUpdList">\n\t\t\t\t\t\t<template is="for" items="{{predefinedList}}" item="item" index="index">\n\t\t\t\t\t\t\t<div class="lyteFileUpdListFile">\n\t\t\t\t\t\t\t\t<div class="lyteFileUpdTypePreview">\n\t\t\t\t\t\t\t\t\t<template is="if" value="{{item.src}}"><template case="true">\n\t\t\t\t\t\t\t\t\t\t\t<img class="lyteFileUpdThumb" src="{{item.src}}">\n\t\t\t\t\t\t\t\t\t</template><template case="false">\n\t\t\t\t\t\t\t\t\t\t<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>\n\t\t\t\t\t\t\t\t\t</template></template>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<lyte-text class="lyteFileUpdFileName" lt-prop-value="{{item.name}}"></lyte-text>\n\t\t\t\t\t\t\t\t<span class="lyteFileUpdFileSize">( {{lyteUiFileSize(item.size, ltPropFileUnit, ltPropDigits)}} )</span>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<lyte-file-close data-value="{{item.id}}" class="{{item.status}}"></lyte-file-close>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t \t<template is="for" items="{{queueList}}" item="item" index="index">\n\t\t\t\t\t \t\t<div class="lyteFileUpdListFile {{item.status}}">\n\t\t\t\t\t \t\t\t<div class="lyteFileUpdTypePreview">\n\t\t\t\t\t\t \t\t\t<template is="if" value="{{item.src}}"><template case="true">\n\t\t\t\t\t\t \t\t\t\t\t<img class="lyteFileUpdThumb" src="{{item.src}}">\n\t\t\t\t\t \t\t\t\t</template><template case="false">\n\t\t\t\t\t \t\t\t\t\t<span class="lyteFileUpdTypeIcon {{item.fileType}}"></span>\n\t\t\t\t\t \t\t\t\t</template></template>\n\t\t\t\t \t\t\t\t</div>\n\t\t\t\t\t \t\t\t<lyte-text class="lyteFileUpdFileName" lt-prop-value="{{item.name}}"></lyte-text>\n\t\t\t\t\t\t\t\t<span class="lyteFileUpdFileSize">( {{lyteUiFileSize(item.size, ltPropFileUnit, ltPropDigits)}} )</span>\n\t\t\t\t\t\t\t\t<template is="if" value="{{expHandlers(item.percentage,\'!=\',undefined)}}"><template case="true">\n\t\t\t\t\t\t\t\t\t<div class="lyteFileUpdFileStatus" data-completed="{{item.percentage}}">\n\t\t\t\t\t\t\t\t\t\t<div class="lyteFileUpdProgressBar {{item.status}}">\n\t\t\t\t\t\t\t\t\t\t\t<div class="lyteFileUpdProgressFill" style="width: {{item.percentage}}%"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t \t\t\t</template></template><template is="if" value="{{expHandlers(item.status,\'==\',&quot;error&quot;)}}"><template case="true">\n\t\t\t\t\t \t\t\t\t<lyte-file-retry data-value="{{item.id}}">\n\t\t\t\t\t \t\t\t\t\t<span class="lyteFileUpdFailMsg">{{lyteUiI18n(ltPropFailureMessage,"fileupload")}}</span>\n\t\t\t\t\t \t\t\t\t\t<span class="lyteFileUpdRetryMsg">{{lyteUiI18n(ltPropRetryText,"fileupload")}}</span>\n\t\t\t\t\t \t\t\t\t</lyte-file-retry>\n\t\t\t\t\t\t\t\t</template></template>\n\t\t\t\t\t\t\t\t<lyte-file-close data-value="{{item.id}}" class="{{item.status}}"></lyte-file-close>\n\t\t\t\t\t \t\t</div>\n\t\t\t\t\t \t</template>\n\t\t\t\t\t  </div>\n\t\t\t\t </lyte-file-select-area>\n\t\t\t</template></template>\n\t\t\t \n\t\t</template></template>\n\t</div>\n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[3]},{type:"attr",position:[3,1]},{type:"if",position:[3,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"text",position:[1,1,1,0]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]},{type:"attr",position:[3,1]},{type:"for",position:[3,1],dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}},{type:"attr",position:[1,3]},{type:"componentDynamic",position:[1,3]},{type:"text",position:[1,5,1]},{type:"attr",position:[1,7]},{type:"componentDynamic",position:[1,7]}]},{type:"attr",position:[3,3]},{type:"for",position:[3,3],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}},{type:"attr",position:[1,3]},{type:"componentDynamic",position:[1,3]},{type:"text",position:[1,5,1]},{type:"attr",position:[1,7]},{type:"if",position:[1,7],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"attr",position:[1,1,1],attr:{style:{name:"style",helperInfo:{name:"concat",args:["'width: '","item.percentage","'%'"]}}}}]}},default:{}},{type:"attr",position:[1,8]},{type:"if",position:[1,8],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0]},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"text",position:[1,0]}]}},default:{}},{type:"componentDynamic",position:[1]}]}},default:{}},{type:"attr",position:[1,10]},{type:"if",position:[1,10],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"componentDynamic",position:[1]}]}},default:{}}]}]},false:{dynamicNodes:[{type:"attr",position:[1,1]},{type:"text",position:[1,1,1,1]},{type:"componentDynamic",position:[1,1]},{type:"attr",position:[1,3,1]},{type:"for",position:[1,3,1],dynamicNodes:[{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}},{type:"attr",position:[1,3]},{type:"componentDynamic",position:[1,3]},{type:"text",position:[1,5,1]},{type:"attr",position:[1,7]},{type:"componentDynamic",position:[1,7]}]},{type:"attr",position:[1,3,3]},{type:"for",position:[1,3,3],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]}]}},default:{}},{type:"attr",position:[1,3]},{type:"componentDynamic",position:[1,3]},{type:"text",position:[1,5,1]},{type:"attr",position:[1,7]},{type:"if",position:[1,7],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"attr",position:[1,1,1],attr:{style:{name:"style",helperInfo:{name:"concat",args:["'width: '","item.percentage","'%'"]}}}}]}},default:{}},{type:"attr",position:[1,8]},{type:"if",position:[1,8],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0]},{type:"text",position:[1,3,0]},{type:"componentDynamic",position:[1]}]}},default:{}},{type:"attr",position:[1,10]},{type:"componentDynamic",position:[1,10]}]},{type:"componentDynamic",position:[1]}]}},default:{}}]}},default:{}}],_observedAttributes:["ltPropName","ltPropMultiple","ltPropAccept","ltPropId","ltPropClass","ltPropAppearance","ltPropDisabled","ltPropYield","ltPropFileLimit","ltPropMinimumFileSize","ltPropParallel","ltPropAutoUpload","ltPropTriggerUpload","ltPropParamName","ltPropThumb","ltPropTabindex","ltPropRetry","ltPropFileUnit","ltPropDigits","ltPropMessage","ltPropFailureMessage","ltPropRetryText","ltPropFiles","ltPropFolder","ltPropChunk","ltPropChunkSize","ltPropParallelChunkUpload","ltPropParallelChunkCount","ltPropChunkRetry","ltPropUploadMultiple","ltPropUploadMultipleCount","ltPropAjax","queueList","predefinedList","currentUpload","chunkUpload","fileClass","chunkCount","abort","lxhrs","uploadedFiles","manualUpdFiles","uploadMultipleRetry","retryFiles","retry","manualUpload"],init:function(){this.getMethods("beforeRender")&&this.executeMethod("beforeRender",this.$node)},didConnect:function(){this._file=this.$node.querySelector("input.fileuploadInput"),this.$node.upload=this.processqueue.bind(this),this.$node.removeUpload=function(t){t?(this.removeFrmUpload(t,"queueList"),this._file.value=""):this.removeFrmUpload(this.data.queueList,"queueList",!0)}.bind(this),this.$node.predefined=function(t){Lyte.arrayUtils(this.data.predefinedList,"push",t)}.bind(this),this.folderUpload(),this.getMethods("afterRender")&&this.executeMethod("afterRender",this.$node)},didDestroy:function(){this.$node.removeUpload(),delete this._file,delete this.$node.upload,delete this.$node.removeUpload},data:function(){return{ltPropName:Lyte.attr("string",{default:"file"}),ltPropMultiple:Lyte.attr("boolean",{default:!0}),ltPropAccept:Lyte.attr("string",{default:""}),ltPropId:Lyte.attr("string",{default:""}),ltPropClass:Lyte.attr("string",{default:""}),ltPropAppearance:Lyte.attr("string",{default:"Box"}),ltPropDisabled:Lyte.attr("boolean",{default:!1}),ltPropYield:Lyte.attr("boolean",{default:!1}),ltPropFileLimit:Lyte.attr("number",{default:void 0}),ltPropMinimumFileSize:Lyte.attr("number",{default:0}),ltPropParallel:Lyte.attr("number",{default:2}),ltPropAutoUpload:Lyte.attr("boolean",{default:!0}),ltPropTriggerUpload:Lyte.attr("boolean",{default:!1}),ltPropParamName:Lyte.attr("string",{default:"file"}),ltPropThumb:Lyte.attr("boolean",{default:!1}),ltPropTabindex:Lyte.attr("number",{default:1}),ltPropRetry:Lyte.attr("number",{default:2}),ltPropFileUnit:Lyte.attr("string",{default:""}),ltPropDigits:Lyte.attr("number",{default:1}),ltPropMessage:Lyte.attr("string",{default:"Drag file here or browse to upload"}),ltPropFailureMessage:Lyte.attr("string",{default:"Attachment failed"}),ltPropRetryText:Lyte.attr("string",{default:"Retry"}),ltPropFiles:Lyte.attr("array",{default:[]}),ltPropFolder:Lyte.attr("boolean",{default:!1}),ltPropChunk:Lyte.attr("boolean",{default:!1}),ltPropChunkSize:Lyte.attr("number",{default:2e6}),ltPropParallelChunkUpload:Lyte.attr("boolean",{default:!1}),ltPropParallelChunkCount:Lyte.attr("number",{default:1/0}),ltPropChunkRetry:Lyte.attr("number",{default:2}),ltPropUploadMultiple:Lyte.attr("boolean",{default:!1}),ltPropUploadMultipleCount:Lyte.attr("number",{default:1/0}),ltPropAjax:Lyte.attr("object",{default:{url:""}}),queueList:Lyte.attr("array",{default:[]}),predefinedList:Lyte.attr("array",{default:[]}),currentUpload:Lyte.attr("array",{default:[]}),chunkUpload:Lyte.attr("array",{default:[]}),fileClass:Lyte.attr("string",{default:""}),chunkCount:Lyte.attr("number",{default:0}),abort:Lyte.attr("boolean",{default:!1}),lxhrs:Lyte.attr("array",{default:[]}),uploadedFiles:Lyte.attr("array",{default:[]}),manualUpdFiles:Lyte.attr("array",{default:[]}),uploadMultipleRetry:Lyte.attr("number",{default:0}),retryFiles:Lyte.attr("array",{default:[]}),retry:Lyte.attr("boolean",{default:!1}),manualUpload:Lyte.attr("boolean",{default:!1})}},folderUpload:function(){this.data.ltPropFolder?this._file.setAttribute("webkitdirectory",!0):this._file.removeAttribute("webkitdirectory")},folderUploadObserver:function(){this.folderUpload()}.observes("ltPropFolder"),trigUpl:function(t){t.newValue&&(this.processqueue(),this.setData("ltPropTriggerUpload",!1))}.observes("ltPropTriggerUpload"),validate:function(t){var e=[],i=!1;acceptRegex=new RegExp(this.data.ltPropAccept.replace(/\s+/g,"").split(",").join("|"));for(var a=0;a<t.length;a++){var s,l={},o=this.data.ltPropChunk,r=t[a].name,n=t[a].type,p="";if(r&&(p=r.substring(r.lastIndexOf(".")+1,r.length)),acceptRegex.test(n)?s=(s=n.match(/(video|image|pdf|zip)/gi))&&s[0]?s[0]:p:acceptRegex.test(p)?s=p:l.type="Invalid_Type",t[a].size<this.data.ltPropMinimumFileSize?l.size="Lower_Size":t[a].size>this.data.ltPropFileLimit&&(l.size="Higher_Size"),l.size||l.type)i=!0,this.getMethods("onReject")&&this.executeMethod("onReject",t[a],l,this.$node);else{var d;if(this.getMethods("onBeforeAdd")&&(d=this.executeMethod("onBeforeAdd",t[a],this.$node)),0==d)continue;if(d&&d.then){e.push(d);var u=t[a];Promise.resolve(d).then(this.add.bind(this,u,o,s))}else this.add(t[a],o,s);if(!this.data.ltPropMultiple)break}}i&&(this._file.value=""),this.data.ltPropAutoUpload&&(e.length?Lyte.resolvePromises(e).then(this.processqueue.bind(this)):this.processqueue())},add:function(t,e,i){var a={id:"lyte"+(new Date).getTime()+parseInt(1e11*Math.random()),file:t,size:t.size,name:t.name,isChunk:e,retry:0,fileType:i||"document"};this.data.ltPropThumb&&/image/i.test(t.type)&&Lyte.Component.set(a,"src",URL.createObjectURL(t)),Lyte.arrayUtils(this.data.uploadedFiles,"push",a),Lyte.arrayUtils(this.data.queueList,"push",a),Lyte.arrayUtils(this.data.ltPropFiles,"push",t),this.getMethods("onAdd")&&this.executeMethod("onAdd",t,this.$node)},chkId:function(t,e){return e.id==t},SendingFile:function(){for(var t=this.data,e=t.manualUpdFiles,i=0;i<e.length;){var a=e[i];if(!a.status||a.isChunk&&"uploading"==a.status)if(a.isChunk){if(!a.status){this.setData("manualUpload",!0),this.uploadFile(a);break}if(a.finished+a.currentUploadingChunks<a.chunks.length){this.setData("manualUpload",!0),this.uploadFile(a);break}i++}else{if(!(t.currentUpload.length<t.ltPropParallel))break;this.setData("manualUpload",!0),Lyte.arrayUtils(t.currentUpload,"push",a),this.uploadFile(a),i++}else i++}i===e.length&&this.finishcallback(e)},processqueue:function(t,e,i){var a=this.data,s=0,l=[];if(t&&!i){t.constructor!=Array&&(t=[t]);for(var o=0;o<t.length;o++){var r=t[o].id||t[o],n=a.queueList[this.findIndex(a.queueList,this.chkId.bind(this,r))];n&&Lyte.arrayUtils(this.data.manualUpdFiles,"push",n)}if(this.data.manualUpdFiles.length)return void this.SendingFile()}if(a.manualUpload)this.SendingFile();else{for(;a.currentUpload.length<a.ltPropParallel||a.ltPropUploadMultiple&&a.currentUpload.length<a.ltPropUploadMultipleCount||i&&a.queueList.length;){var p=a.queueList[s];if(t&&(t=t.constructor==Object?t.id:t,p=a.queueList[this.findIndex(a.queueList,this.chkId.bind(this,t))],i&&p))return Lyte.arrayUtils(this.data.retryFiles,"push",p),Lyte.Component.set(p,"status","reloading"),void(a.uploadedFiles.indexOf(p)<0&&(Lyte.arrayUtils(this.data.uploadedFiles,"push",p),this.retrySendingFile()));if(!p){this.data.retryFiles.length&&this.retrySendingFile(),e&&this.finishcallback();break}if(/uploading|success/.test(p.status)){if(t)break;if(/uploading/.test(p.status)&&p.isChunk&&p.finished+p.currentUploadingChunks<p.chunks.length){this.processChunkQueue(p.chunks);break}s++}else if("error"!=p.status||!(this.data.ltPropUploadMultiple||p.retry>=a.ltPropRetry-1||p.isChunk)||t)if("reloading"!=p.status){if(p.isChunk||Lyte.arrayUtils(a.currentUpload,"push",p),this.data.ltPropUploadMultiple)l.push(p);else if(this.uploadFile(p),t||p.isChunk)break;s++}else s++;else s++}this.data.ltPropUploadMultiple&&l.length&&this.uploadFile(l)}},retrySendingFile:function(){for(var t=this.data,e=t.retryFiles,i=0;i<e.length;){var a=e[i];if("reloading"==a.status||"uploading"==a.status)if(a.isChunk){if(a.finished+a.currentUploadingChunks<a.chunks.length){this.setData("retry",!0),this.processChunkQueue(a.chunks);break}i++}else{if(!(t.currentUpload.length<t.ltPropParallel))break;this.setData("retry",!0),Lyte.arrayUtils(e,"removeAt",i),Lyte.arrayUtils(t.currentUpload,"push",a),this.uploadFile(a)}else Lyte.arrayUtils(e,"removeAt",i)}e.length||(this.setData("retry",!1),this.processqueue(void 0,!0))},findIndex:function(t,e){if(e.constructor!=Function)return t.indexOf(e);for(var i=0;i<t.length;i++){if(e.call(t[i],t[i]))return i}},abortChunksFrmUpload:function(t){for(var e=this.data.chunkUpload,i=0;i<e.length;){var a=e[i];a.chunkProp.origin.id===t&&a.xhr?(this.setData("abort",!0),a.xhr.ret.abort()):i++}},removeFrmUpload:function(t,e,i,a){t.constructor!=Array&&(t=[t]);for(var s=0;s<t.length;s++){id=t[s].id||t[s];var l,o,r=this.data[e],n=this.findIndex(r,this.chkId.bind(this,id));if((void 0===n||n<0)&&(r=this.data.predefinedList,(n=this.findIndex(r,this.chkId.bind(this,id)))>-1&&(e="predefinedList")),n>=0){if(!i&&this.getMethods("onBeforeRemove")&&0==this.executeMethod("onBeforeRemove",e,r[n],this.$node))continue;if("uploading"==(o=r[n]).status&&(l=!0,o.xhr&&(this.setData("abort",!0),o.xhr.ret.abort()),o.isChunk&&this.abortChunksFrmUpload(o.id)),Lyte.arrayUtils(r,"removeAt",n),"queueList"===e){var p,d=this.getData("lxhrs"),u=$L.search(d,"fileId",o.id)[0];o.isChunk&&l&&this.getMethods("onFileFailure")&&this.executeMethod("onFileFailure",u,o,this.$node,!0),Lyte.arrayUtils(this.data.ltPropFiles,"removeAt",n);var h=this.data.uploadedFiles;(c=this.findIndex(h,this.chkId.bind(this,id)))>=0&&Lyte.arrayUtils(h,"removeAt",c);var c;h=this.data.retryFiles;(c=this.findIndex(h,this.chkId.bind(this,id)))>=0&&Lyte.arrayUtils(h,"removeAt",c),(p=d.indexOf(u))>-1&&Lyte.arrayUtils(d,"removeAt",p),n<=s&&s--}!i&&this.getMethods("onRemove")&&this.executeMethod("onRemove",e,o,this.$node)}}!this.data.ltPropUploadMultiple&&("queueList"==e&&l||a)&&(this.data.retry?this.retrySendingFile():this.processqueue(void 0,!0))},uploadFile:function(t){var e=Lyte.deepCopyObject(this.data.ltPropAjax);t.isChunk?this.proceedChunk(t,e):this.proceedUpload(t,e,!1)},succFunc:function(t){if(this.$node){var e,i=arguments[2].xhr.file,a=arguments[2].xhr.ret,s=[];i.xhr&&delete i.xhr,this.getMethods("onRequestSuccess")&&this.executeMethod("onRequestSuccess",a,i,this.$node),i.constructor!=Array&&(i=[i]);for(var l=0;l<i.length;l++)if(Lyte.Component.set(i[l],"status","success"),Lyte.objectUtils(i[l],"delete","xhr"),this.data.ltPropUploadMultiple)s.push(i[l].id),this.removeFrmUpload(i[l].id,"currentUpload",!0);else{var o=this.getData("lxhrs");(e=$L.search(o,"fileId",i[l].id)).length&&Lyte.arrayUtils(o,"removeAt",o.indexOf(e[0])),a.fileId=i[l].id,Lyte.arrayUtils(this.getData("lxhrs"),"push",a),this.getMethods("onFileSuccess")&&this.executeMethod("onFileSuccess",a,i[l],this.$node),this.removeFrmUpload(i[l].id,"currentUpload",!0,!0)}this.data.ltPropUploadMultiple&&(a.fileId=s,Lyte.arrayUtils(this.getData("lxhrs"),"push",a),this.setData("uploadMultipleRetry",0),this.processqueue(void 0,!0)),delete arguments[2].xhr.file}},reject:function(t){if(this.$node){var e,i=t.xhr.file,a=t.xhr.ret,s=i.retry,l=[];if(this.data.abort||s>=this.data.ltPropRetry||this.data.ltPropUploadMultiple&&this.data.uploadMultipleRetry>=this.data.ltPropRetry){i.xhr&&delete i.xhr,this.getMethods("onRequestFailure")&&this.executeMethod("onRequestFailure",a,i,this.$node,this.data.abort),i.constructor!=Array&&(i=[i]);for(var o=0;o<i.length;o++){if(Lyte.Component.set(i[o],"status","error"),Lyte.objectUtils(i[o],"delete","xhr"),this.data.ltPropUploadMultiple)l.push(i[o].id);else{var r=this.getData("lxhrs");(e=$L.search(r,"fileId",i[o].id)).length&&Lyte.arrayUtils(r,"removeAt",r.indexOf(e[0])),a.fileId=i[o].id,this.getMethods("onFileFailure")&&this.executeMethod("onFileFailure",a,i[o],this.$node,this.data.abort),!this.data.abort&&Lyte.arrayUtils(this.getData("lxhrs"),"push",a)}this.removeFrmUpload(i[o].id,"currentUpload",!0,!this.data.abort)}this.data.ltPropUploadMultiple&&(a.fileId=l,Lyte.arrayUtils(this.getData("lxhrs"),"push",a),this.setData("uploadMultipleRetry",0),this.processqueue(void 0,!0)),this.data.abort&&(Lyte.objectUtils(t.xhr.file,"add","retry",this.data.ltPropRetry),this.setData("abort",!1)),delete t.xhr.file}else if(this.data.ltPropUploadMultiple){delete i.xhr;for(o=0;o<i.length;o++)Lyte.Component.set(t.xhr.file[o],"status","retrying"),Lyte.Component.set(t.xhr.file[o],"retry",t.xhr.file[o].retry+1);this.setData("uploadMultipleRetry",this.data.uploadMultipleRetry+1),this.getMethods("onRetry")&&this.executeMethod("onRetry",a,i,this.$node),this.uploadFile(i)}else Lyte.Component.set(t.xhr.file,"status","retrying"),Lyte.objectUtils(t.xhr.file,"add","retry",s+1),this.getMethods("onRetry")&&this.executeMethod("onRetry",a,i,this.$node),this.uploadFile(i)}},progress:function(t){if(t.lengthComputable){var e=t.total,i=t.loaded,a=t.target.xhr,s=a.file;s.constructor!=Array&&(s=[s]);for(var l=0;l<s.length;l++)this.data.ltPropUploadMultiple?Lyte.Component.set(s[l],{size:s[l].size,loaded:s[l].size,percentage:100}):Lyte.Component.set(s[l],{size:e,loaded:i,percentage:Math.round(100*i/e)}),this.getMethods("onProgress")&&this.executeMethod("onProgress",t,a,s[l],this.$node)}},removeChunk:function(t,e,i){var a=this.data.chunkUpload,s=this.findIndex(a,function(e){return e.chunkProp.chunkId==t});s>-1&&(Lyte.arrayUtils(a,"removeAt",s),!i&&this.processChunkQueue(e.chunks))},chunkReject:function(t){if(this.$node){var e=t.xhr.file,i=e.chunkProp.origin,a=arguments[0].xhr.ret;if(!this.data.abort&&e.retry<this.data.ltPropChunkRetry)Lyte.Component.set(e,"status","retrying"),Lyte.objectUtils(e,"add","retry",e.retry+1),this.removeChunk(e.chunkProp.chunkId,i,!0),this.getMethods("onRetry")&&this.executeMethod("onRetry",a,e,this.$node),Lyte.Component.set(i,"currentUploadingChunks",i.currentUploadingChunks-1),this.processChunkQueue(e,!0);else{if(this.getMethods("onRequestFailure")&&this.executeMethod("onRequestFailure",a,e,this.$node,this.data.abort),Lyte.Component.set(e,"status","error"),this.removeChunk(e.chunkProp.chunkId,i,!0),this.getMethods("onChunkError")&&this.executeMethod("onChunkError",a,e,i,this.$node,this.data.abort),Lyte.objectUtils(e,"delete","xhr"),delete t.xhr.file,Lyte.Component.set(i,"currentUploadingChunks",i.currentUploadingChunks-1),Lyte.Component.set(i,"error",i.error+1),"error"!=i.status){var s,l=this.getData("lxhrs");Lyte.Component.set(i,"status","error"),(s=$L.search(l,"fileId",i.id)).length&&Lyte.arrayUtils(l,"removeAt",l.indexOf(s[0])),a.fileId=i.id,Lyte.arrayUtils(this.getData("lxhrs"),"push",a)}this.data.abort?this.setData("abort",!1):(this.abortChunksFrmUpload(i.id),this.getMethods("onFileFailure")&&this.executeMethod("onFileFailure",a,i,this.$node,this.data.abort),this.data.retry?this.retrySendingFile():this.processqueue(void 0,!0))}}},chunkSuccess:function(t){if(this.$node){var e=arguments[2].xhr.file,i=e.chunkProp.origin,a=arguments[2].xhr.ret;if(this.getMethods("onRequestSuccess")&&this.executeMethod("onRequestSuccess",a,e,this.$node),Lyte.Component.set(e,"status","success"),this.removeChunk(e.chunkProp.chunkId,i,!0),this.getMethods("onChunkSuccess")&&this.executeMethod("onChunkSuccess",a,e,i,this.$node),Lyte.objectUtils(e,"delete","xhr"),delete arguments[2].xhr.file,Lyte.Component.set(i,"finished",i.finished+1),Lyte.Component.set(i,"currentUploadingChunks",i.currentUploadingChunks-1),i.finished==i.total){var s,l=this.getData("lxhrs");Lyte.Component.set(i,"status","success"),(s=$L.search(l,"fileId",i.id)).length&&Lyte.arrayUtils(l,"removeAt",l.indexOf(s[0])),a.fileId=i.id,Lyte.arrayUtils(this.getData("lxhrs"),"push",a),this.getMethods("onFileSuccess")&&this.executeMethod("onFileSuccess",a,i,this.$node),this.data.retry?this.retrySendingFile():this.processqueue(void 0,!0)}else this.processChunkQueue(i.chunks,!0)}},chunkProgress:function(t){if(t.lengthComputable){t.total;var e=t.loaded,i=t.target.xhr.file,a=i.chunkProp.origin,s=e-i.loaded;Lyte.Component.set(i,"loaded",e),Lyte.Component.set(a,{loaded:Math.min(a.loaded+s,a.size),percentage:Math.min(Math.round(100*(a.loaded+s)/a.size),100)}),this.getMethods("onProgress")&&this.executeMethod("onProgress",t,xhr,a,this.$node)}},proceedChunk:function(t,e){for(var i=this.data,a=i.ltPropChunkSize,s=t.size,l=0,o=[];l<=s;){var r=l,n=Math.min(s,l+=a),p=n-r;o.push({file:t.file.slice(r,n),chunkProp:{chunkOffset:r,chunkEnd:n,chunkSize:p,chunkId:"lyteChunk"+(new Date).getTime()+parseInt(1e11*Math.random()),chunkIndex:o.length,origin:t,chunkCount:Math.ceil(t.size/a),totalSize:t.size},name:t.file.name,loaded:0,retry:0})}Lyte.Component.set(t,{chunks:o,error:0,finished:0,total:o.length}),i.ltPropParallelChunkCount===1/0&&this.setData("chunkCount",o.length),this.processChunkQueue(o)},processChunkQueue:function(t,e){var i=this.data,a=0;for(t.constructor!=Array&&(t=[t]);!i.ltPropParallelChunkUpload&&i.chunkUpload.length<1||i.ltPropParallelChunkUpload&&i.ltPropParallelChunkCount===1/0||i.ltPropParallelChunkCount!=1/0&&i.chunkUpload.length<i.ltPropParallelChunkCount;){var s=t[a];if(!s){i.retry?this.retrySendingFile():i.ltPropParallelChunkUpload&&(i.ltPropParallelChunkCount!=1/0&&i.chunkUpload.length<i.ltPropParallelChunkCount&&this.processqueue(),i.ltPropParallelChunkCount==1/0&&this.processqueue());break}/success|uploading/.test(s.status)||e&&(!e||/error/.test(s.status))?a++:(file=s.chunkProp.origin,Lyte.Component.set(file,{status:"uploading",percentage:file.percentage||0,loaded:file.loaded||0,size:file.size,currentUploadingChunks:file.currentUploadingChunks+1||1}),this.proceedUpload(s,Lyte.deepCopyObject(i.ltPropAjax),!0),Lyte.arrayUtils(i.chunkUpload,"push",s),a++)}},proceedUpload:function(t,e,i){if(!/success|uploading/.test(t[0]&&t[0].status||t.status)){var a,s,l=new FormData,o=["chunkOffset","chunkSize","chunkIndex","chunkCount","totalSize"];if(t.constructor==Array)for(var r=0;r<t.length;r++)s=this.data.ltPropFolder?t[r].file.webkitRelativePath:t[r].name,l.append(this.data.ltPropParamName+"["+r+"]",t[r].file,s);else s=this.data.ltPropFolder&&!i?t.file.webkitRelativePath:t.name,l.append(this.data.ltPropParamName,t.file,s);if(i){for(var n=0;n<o.length;n++)l.append(o[n],t.chunkProp[o[n]]);var p=t.chunkProp.origin;l.append("fileId",p.id),s=this.data.ltPropFolder?p.file.webkitRelativePath:p.name,l.append("fileName",s)}e.success=i?this.chunkSuccess.bind(this):this.succFunc.bind(this),e.error=i?this.chunkReject.bind(this):this.reject.bind(this);var d=new XMLHttpRequest;if(e.type=e.type||"POST",t.xhr=d,d.file=t,d.upload.xhr=d,d.upload.addEventListener("progress",i?this.chunkProgress.bind(this):this.progress.bind(this),!1),e.xhr=function(){return d},e.data=e.data||l,e.processData=e.processData||!1,this.getMethods("onBeforeSend")&&(a=this.executeMethod("onBeforeSend",d,t,i,this.$node,l)),a&&a.then)Promise.resolve(a).then(function(){this.finishSend(e,d,t)}.bind(this));else{if(0==a){t.constructor!=Array&&(t=[t]);for(var u=0;u<t.length;u++)this.removeFrmUpload(t[u].id,"currentUpload",!0);return}a&&a.constructor==FormData&&(e.data=a),this.finishSend(e,d,t,i)}}},finishSend:function(t,e,i,a){if(i.constructor==Array)for(var s=0;s<i.length;s++)Lyte.Component.set(i[s],"status","uploading");else Lyte.Component.set(i,"status","uploading");t.contentType=!1;var l=$L.ajax(t);l.xhr=e,e.ret=l,this.getMethods("onSend")&&this.executeMethod("onSend",e,l,i,!!a,this.$node)},finishcallback:function(t){var e,i=t||this.data.uploadedFiles,a=this.data.chunkUpload,s=this.data.lxhrs;if(i.length){for(var l=0;l<i.length;l++){if(!i[l].status||"uploading"==i[l].status)return;"error"==i[l].status&&(e=!0)}for(l=0;l<a.length;l++){if("uploading"==a[l].status)return;"error"==a[l].status&&(e=!0)}this.data.ltPropMultiple||(i=i[0],s=s[0]),e?(this.getMethods("onFailure")&&this.executeMethod("onFailure",i,this.$node,s),this.setData("uploadedFiles",[]),this.setData("lxhrs",[]),1==this.data.manualUpload&&this.setData("manualUpdFiles",[])||this.getData("manualUpload",!1)):(this.getMethods("onSuccess")&&this.executeMethod("onSuccess",i,this.$node,s),this.setData("uploadedFiles",[]),this.setData("lxhrs",[]),1==this.data.manualUpload&&this.setData("manualUpdFiles",[])||this.getData("manualUpload",!1))}},actions:{change:function(t,e){this.data.ltPropMultiple||this.$node.removeUpload(),e.files.length&&this.validate(e.files)},drag:function(t){var e=t.type,i="onDrag",a=e.match(/drag(.+)/);if(a&&a[1]&&(i+=a[1].slice(0,1).toUpperCase()+a[1].slice(1),/enter|over/.test(t.type))){if("dragover"==t.type){var s=t.dataTransfer;if(s){var l=s.effectAllowed;s.dropEffect="move"===l||"linkMove"===l?"move":"copy"}}t.preventDefault()}"dragenter"==e?this.setData("fileClass","fileDragEnter"):"dragleave"==e&&this.setData("fileClass",""),this.getMethods(i)&&this.executeMethod(i,t,this.$node)},drop:function(t){this.setData("fileClass","");var e=t.dataTransfer;if(e){if(this.getMethods("onBeforeDrop")&&0==this.executeMethod("onBeforeDrop",t,this.$node))return;t.preventDefault(),this.data.ltPropMultiple||this.$node.removeUpload(),this.validate(e.files),this.getMethods("onDrop")&&this.executeMethod("onDrop",t,this.$node)}},click:function(t){var e;if(!this.data.ltPropYield&&this.data.ltPropMultiple&&(t.shiftKey?t.preventDefault():$L("#lyteFileUpdSelectedFile.lyteFileUpdListFile").removeAttr("id"),"lyteFileUpdRetryMsg"!=t.target.className&&$L(t.target).closest(".lyteFileUpdListFile").attr("id","lyteFileUpdSelectedFile")),!(t.ctrlKey||t.shiftKey||t.metaKey))if((e=$L(t.target).closest("lyte-file-close")).length)this.$node.removeUpload(e.eq(0).attr("data-value"));else if((e=$L(t.target).closest("lyte-file-retry")).length)this.$node.upload(e.eq(0).attr("data-value"),void 0,!0);else if($L(t.target).closest("lyte-file-select-area").length&&this.data.ltPropMultiple||0==this.data.queueList.length&&0==this.data.predefinedList.length){if(this.getMethods("onBeforeOpen")&&0==this.executeMethod("onBeforeOpen",t,this.$node))return;this._file.click()}},paste:function(t){for(var e=(t.clipboardData||window.clipboardData).items,i=[],a=0;a<e.length;a++){var s=e[a].getAsFile();s&&i.push(s)}if(i.length){if(this.getMethods("onBeforePaste")&&0==this.executeMethod("onBeforePaste",t,i,this.$node))return;this.data.ltPropMultiple||this.$node.removeUpload(),this.validate(i),this.getMethods("onPaste")&&this.executeMethod("onPaste",t,i,this.$node)}},keydown:function(t){if(8==t.which){for(var e=$L("#lyteFileUpdSelectedFile lyte-file-close",this.$node),i=0;i<e.length;i++)this.$node.removeUpload(e.eq(i).attr("data-value"));e.length&&t.preventDefault()}}}});