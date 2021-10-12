;if(!window.ZSEC) {if(window.ZSEC||Object.defineProperty(window,"ZSEC",{value:{},writable:!1,configurable:!1,enumerable:!1}),Object.defineProperty(ZSEC,"util",{value:{},writable:!1,configurable:!1,enumerable:!1}),function(){if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()){var e=Object.defineProperty;Object.defineProperty=function(t,r,o){if(e)try{return e(t,r,o)}catch(e){}if(t!==Object(t))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in o&&Object.prototype.__defineGetter__.call(t,r,o.get),Object.prototype.__defineSetter__&&"set"in o&&Object.prototype.__defineSetter__.call(t,r,o.set),"value"in o&&(t[r]=o.value),t}}}(),ZSEC.util.defineProperty=function(e,t,r,o,n,i,a){if(o||!(t in e))return n=1==n,i=1==i,a=1==a,Object.defineProperty(e,t,{value:r,writable:n,configurable:i,enumerable:a})},ZSEC.util.defineProperty(ZSEC,"version","4.0",!0),ZSEC.util.defineProperty(ZSEC,"constants",ZSEC.constants||{},!0),ZSEC.util.ArrayIndexOf=Array.prototype.indexOf,ZSEC.util.ArrayIndexOf||(ZSEC.util.ArrayIndexOf=function(e){if(void 0===this||null===this)throw TypeError();var t=Object(this),r=t.length>>>0;if(0===r)return-1;var o=0;if(arguments.length>0&&(o=Number(arguments[1]),isNaN(o)?o=0:0!==o&&o!==1/0&&o!==-1/0&&(o=(o>0||-1)*Math.floor(Math.abs(o)))),o>=r)return-1;for(var n=o>=0?o:Math.max(r-Math.abs(o),0);n<r;n++)if(n in t&&t.charAt(n)===e)return n;return-1}),String.prototype.codePointAt)ZSEC.util.defineProperty(String.prototype,"codePointAt",String.prototype.codePointAt,!0);else{var codePointAt=function(e){if(null==this)throw TypeError();var t=String(this),r=t.length,o=e?Number(e):0;if(o!=o&&(o=0),!(o<0||o>=r)){var n,i=t.charCodeAt(o);return i>=55296&&i<=56319&&r>o+1&&(n=t.charCodeAt(o+1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i}};ZSEC.util.defineProperty(String.prototype,"codePointAt",codePointAt,!1)}if(String.fromCodePoint)ZSEC.util.defineProperty(String,"fromCodePoint",String.fromCodePoint,!0);else{var stringFromCharCode=String.fromCharCode,floor=Math.floor,fromCodePoint=function(){var e,t,r=[],o=-1,n=arguments.length;if(!n)return"";for(var i="";++o<n;){var a=Number(arguments[o]);if(!isFinite(a)||a<0||a>1114111||floor(a)!=a)throw RangeError("Invalid code point: "+a);a<=65535?r.push(a):(e=55296+((a-=65536)>>10),t=a%1024+56320,r.push(e,t)),(o+1==n||r.length>16384)&&(i+=stringFromCharCode.apply(null,r),r.length=0)}return i};ZSEC.util.defineProperty(String,"fromCodePoint",fromCodePoint,!1)}!function(){var e={log:function(e){if(navigator&&navigator.userAgent){var t=navigator.userAgent.match(/opera|chrome|safari|firefox|msie|trident(?=\/)/i);if(t&&t[0].search(/trident|msie/i)<0)return window.console.log("%cSTOP!","color:red;font-size:xx-large;font-weight:bold;"),void window.console.log("%cThis is a browser feature intended for developers. Do not enter or paste code which you don't understand. It may allow attackers to steal your information or impersonate you.\nSee https://en.wikipedia.org/wiki/Self-XSS for more details","font-size:large;")}window.console.log("STOP!\nThis is a browser feature intended for developers. Do not enter or paste code which you don't understand. It may allow attackers to steal your information or impersonate you.\nSee https://en.wikipedia.org/wiki/Self-XSS for more details")}};ZSEC.util.defineProperty(ZSEC,"Console",e,!0,!1,!1,!0)}(),ZSEC.Console.log();};window.DOMPurifyCopy = window.DOMPurify ? window.DOMPurify : undefined;;if(!window.ZSEC.HTMLPurifier) {function addToSet(e,t){for(var r=t.length;r--;)e[t[r]]=!0;return e}function addObjsToSet(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=!0);return e}function removeFromSet(e,t){var r={};for(var o in e)e.hasOwnProperty(o)&&o!=t&&(r[o]=e[o]);return r}!function(e){window.DOMPurify=e(window)}(function e(t){var r=function(t){return e(t)};if(r.version="0.8.5",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var o=t.document,n=o,T=t.DocumentFragment,i=t.HTMLTemplateElement,a=t.Node,A=t.NodeFilter,_=t.NamedNodeMap||t.MozNamedAttrMap,E=t.Text,O=t.Comment,L=t.DOMParser;if("function"==typeof i){var s=o.createElement("template");s.content&&s.content.ownerDocument&&(o=s.content.ownerDocument)}var l=o.implementation,d=o.createNodeIterator,u=o.getElementsByTagName,c=o.createDocumentFragment,R=n.importNode,S={};r.isSupported=void 0!==l.createHTMLDocument&&9!==o.documentMode;var f=function(e,t){for(var r=t.length;r--;)"string"==typeof t[r]&&(t[r]=t[r].toLowerCase()),e[t[r]]=!0;return e},p=null,B=f({},[]),m=null,N=f({},[]),D=null,I=null,h=!0,U=!0,v=!1,b=!1,y=!1,g=/\{\{[\s\S]*|[\s\S]*\}\}/gm,G=/<%[\s\S]*|[\s\S]*%>/gm,F=!1,w=!0,M=!1,C=!1,P=!1,W=!0,J=!0,x=f({},["audio","head","math","script","svg","video","style"]),H=f({},["audio","video","img","source","image"]),k=f({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Y=null,z=o.createElement("form"),V=function(e){"object"!=typeof e&&(e={}),p="ALLOWED_TAGS"in e?f({},e.ALLOWED_TAGS):B,m="ALLOWED_ATTR"in e?f({},e.ALLOWED_ATTR):N,D="FORBID_TAGS"in e?f({},e.FORBID_TAGS):{},I="FORBID_ATTR"in e?f({},e.FORBID_ATTR):{},h=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,v=e.ALLOW_UNKNOWN_PROTOCOLS||!1,b=e.SAFE_FOR_JQUERY||!1,y=e.SAFE_FOR_TEMPLATES||!1,F=e.WHOLE_DOCUMENT||!1,M=e.RETURN_DOM||!1,C=e.RETURN_DOM_FRAGMENT||!1,P=e.RETURN_DOM_IMPORT||!1,w=!1!==e.FORCE_BODY,W=!1!==e.SANITIZE_DOM,J=!1!==e.KEEP_CONTENT,y&&(U=!1),C&&(M=!0),e.ADD_URI_SAFE_ATTR&&f(k,e.ADD_URI_SAFE_ATTR),J&&(p["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),Y=e},j=function(e){r.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},Q=function(e,t){r.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},X=function(e){var t,r;w&&(e="<remove></remove>"+e);try{t=(new L).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||((r=(t=l.createHTMLDocument("")).body).parentNode.removeChild(r.parentNode.firstElementChild),r.outerHTML=e),"function"==typeof t.getElementsByTagName?t.getElementsByTagName(F?"html":"body")[0]:u.call(t,F?"html":"body")[0]},Z=function(e){return d.call(e.ownerDocument||e,e,A.SHOW_ELEMENT|A.SHOW_COMMENT|A.SHOW_TEXT,function(){return A.FILTER_ACCEPT},!1)},K=function(e){return!(e instanceof E||e instanceof O)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof _&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},q=function(e){return"object"==typeof a?e instanceof a:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},$=function(e){var t,o;if(ae("beforeSanitizeElements",e,null),K(e))return j(e),!0;if(t=e.nodeName.toLowerCase(),ae("uponSanitizeElement",e,{tagName:t,allowedTags:p}),!p[t]||D[t]){if(J&&!x[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return j(e),!0}return"style"!=t?(!b||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(r.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),y&&3===e.nodeType&&(o=(o=(o=e.textContent).replace(g," ")).replace(G," "),e.textContent!==o&&(r.removed.push({element:e.cloneNode()}),e.textContent=o))):!b||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(r.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"\\3c ")),ae("afterSanitizeElements",e,null),!1},ee=/^data-[-\w.\u00B7-\uFFFF]/,te=/^aria-[-\w]+$/,re=/^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,oe=/^(?:\w+script|data):/i,ne=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Te=function(e){var t,n,T,i,a,A,_,E;if(ae("beforeSanitizeAttributes",e,null),A=e.attributes){for(_={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m},E=A.length;E--;)if(t=A[E],n=t.name,T=t.value.trim(),i=n.toLowerCase(),_.attrName=i,_.attrValue=T,_.keepAttr=!0,ae("uponSanitizeAttribute",e,_),T=_.attrValue,"name"===i&&"IMG"===e.nodeName&&A.id?(a=A.id,A=Array.prototype.slice.apply(A),Q("id",e),Q(n,e),A.indexOf(a)>E&&e.setAttribute("id",a.value)):("id"===n&&e.setAttribute(n,""),Q(n,e)),_.keepAttr&&(!W||"id"!==i&&"name"!==i||!(T in o||T in z))){y&&(T=(T=T.replace(g," ")).replace(G," "));if(U&&ee.test(i))!0;else if(h&&te.test(i))!0;else{if(!m[i]||I[i])continue;if(k[i])!0;else if(re.test(T.replace(ne,"")))!0;else if("src"!==i&&"xlink:href"!==i||0!==T.indexOf("data:")||!H[e.nodeName.toLowerCase()])if(v&&!oe.test(T.replace(ne,"")))!0;else{if(T)continue;!0}else!0}try{e.setAttribute(n,T),r.removed.pop()}catch(e){}}ae("afterSanitizeAttributes",e,null)}},ie=function(e){var t,r=Z(e);for(ae("beforeSanitizeShadowDOM",e,null);t=r.nextNode();)ae("uponSanitizeShadowNode",t,null),$(t)||(t.content instanceof T&&ie(t.content),Te(t));ae("afterSanitizeShadowDOM",e,null)},ae=function(e,t,o){S[e]&&S[e].forEach(function(e){e.call(r,t,o,Y)})};return r.sanitize=function(e,o){var i,A,_,E,O,L;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!q(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");e=e.toString()}if(!r.isSupported){if("object"==typeof t.toStaticHTML||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(q(e))return t.toStaticHTML(e.outerHTML)}return e}if(V(o),r.removed=[],e instanceof a)1===(A=(i=X("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===A.nodeName?i=A:i.appendChild(A);else{if(!M&&!F&&-1===e.indexOf("<"))return e;if(!(i=X(e)))return M?null:""}for(w&&j(i.firstChild),O=Z(i);_=O.nextNode();)3===_.nodeType&&_===E||$(_)||(_.content instanceof T&&ie(_.content),Te(_),E=_);if(M){if(C)for(L=c.call(i.ownerDocument);i.firstChild;)L.appendChild(i.firstChild);else L=i;return P&&(L=R.call(n,L,!0)),L}return F?i.outerHTML:i.innerHTML},r.addHook=function(e,t){"function"==typeof t&&(S[e]=S[e]||[],S[e].push(t))},r.removeHook=function(e){S[e]&&S[e].pop()},r.removeHooks=function(e){S[e]&&(S[e]=[])},r.removeAllHooks=function(){S={}},r}),function(e){var t={};t.ALLOW_ARIA_ATTR=!0,t.ALLOW_DATA_ATTR=!0,t.ALLOW_UNKNOWN_PROTOCOLS=!1,t.SAFE_FOR_JQUERY=!1,t.SAFE_FOR_TEMPLATES=!1,t.WHOLE_DOCUMENT=!1,t.RETURN_DOM=!1,t.RETURN_DOM_FRAGMENT=!1,t.RETURN_DOM_IMPORT=!1,t.FORCE_BODY=!0,t.SANITIZE_DOM=!0,t.KEEP_CONTENT=!0,t.STYLE_VALIDATION=!0,t.REMOVE_ONEVENTS=!0,t.ALLOWED_STYLE="NONE",t.ALLOWED_TAGS="a|abbr|acronym|address|area|article|aside|audio|b|bdi|bdo|big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|content|data|datalist|dd|decorator|del|details|dfn|dir|div|dl|dt|element|em|fieldset|figcaption|figure|font|footer|form|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|img|input|ins|kbd|label|legend|li|main|map|mark|marquee|menu|menuitem|meter|nav|nobr|ol|optgroup|option|output|p|pre|progress|q|rp|rt|ruby|s|samp|section|select|shadow|small|source|spacer|span|strike|strong|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr|#text".split("|"),t.ALLOWED_ATTR="accept|action|align|alt|autocomplete|background|bgcolor|border|cellpadding|cellspacing|checked|cite|class|clear|color|cols|colspan|coords|datetime|default|dir|disabled|download|enctype|face|for|headers|height|hidden|high|href|hreflang|id|ismap|label|lang|list|loop|low|max|maxlength|media|method|min|multiple|name|noshade|novalidate|nowrap|open|optimum|pattern|placeholder|poster|preload|pubdate|radiogroup|readonly|rel|required|rev|reversed|role|rows|rowspan|spellcheck|scope|selected|shape|size|span|srclang|start|src|step|summary|tabindex|title|target|type|usemap|valign|value|width|xmlns|sandbox".split("|"),t.ALLOWED_STYLE_PROPS="azimuth|background|background-attachment|background-color|background-image|background-position|content|background-repeat|border-collapse|border-color|border-top-color|border-right-color|border-bottom-color|border-left-color|bottom|caption-side|clear|color|cue-after|cue-before|direction|display|elevation|empty-cells|float|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|height|left|letter-spacing|line-height|list-style-image|list-style-position|list-style-type|marker-offset|max-height|max-width|min-height|min-width|orphans|outline-color|overflow|page-break-after|page-break-before|page-break-inside|pause-after|pause-before|pitch|pitch-range|position|richness|right|size|speak|speak-header|speak-numeral|speak-punctuation|speech-rate|stress|table-layout|text-indent|text-transform|top|unicode-bidi|vertical-align|visibility|volume|white-space|widows|width|word-spacing|border-style|border-top-style|border-right-style|border-bottom-style|border-left-style|border-top-width|border-right-width|border-bottom-width|border-left-width|border-width|margin|margin-top|margin-right|margin-bottom|margin-left|outline-style|outline-width|padding|padding-top|padding-right|padding-bottom|padding-left|border|border-top|border-right|border-bottom|border-left|cue|list-style|marks|outline|pause|text-decoration|border-spacing|clip|counter-increment|clip|cursor|text-shadow|font|font-family|page|play-during|text-align|voice-family".split("|"),t.FORBID_TAGS=[],t.FORBID_ATTR=[],t.ALLOWED_TAGS_OBJ={},t.ALLOWED_ATTR_OBJ={},t.FORBID_TAGS_OBJ={},t.FORBID_ATTR_OBJ={},t.ADD_URI_SAFE_ATTR=[],t.EXTENDS=["GLOBAL_ATTRIBUTES","GLOBAL_TAGS","FORBID_TAGS","FORBID_ATTR","GLOBAL_APPEND_ATTRIBUTES","GLOBAL_ATTRIBUTE_RULES","ADD_URI_SAFE_ATTR","TAG_RULES"],t.TAG_RULES={a:{APPEND_ATTRIBUTES:[{NAME:"rel",VALUE:"noopener noreferrer",CRITERIA:[{NAME:"target",CONTAINS:"_blank"}]}]}},t.GLOBAL_APPEND_ATTRIBUTES=[],t.GLOBAL_ATTRIBUTE_RULES={},ZSEC.util.defineProperty(ZSEC,"HTMLPurifier",e(t,DOMPurify(window)),!0,!1,!1,!0),delete window.DOMPurify}(function e(t,r){function o(e){if(!e||e.constructor!==Object)return t;var r={};for(var o in t)t.hasOwnProperty(o)&&(o in e?o in m&&(1==e[o]||0==e[o]?r[o]=e[o]:r[o]=t[o]):r[o]=t[o]);return r.SAFE_FOR_TEMPLATES&&(r.ALLOW_DATA_ATTR=!1),r.RETURN_DOM_FRAGMENT&&(r.RETURN_DOM=!0),r.KEEP_CONTENT&&(r.ALLOWED_TAGS_OBJ["#text"]=!0),r}function n(e){for(var t in e)e.hasOwnProperty(t)&&e[t].constructor==String&&(e[t]&&b[t]?v=!0:e[t]&&("cssText"==t||/^\d.*/.test(t)||(e[t]="",I=!0)))}function T(e){for(var t=e.length-1;t>=0;t--){var r=e[t];1==r.type&&r.selectorText||8==r.type&&r.keyText?r.style&&n(r.style):4!=r.type&&7!=r.type||!r.cssRules||T(r.cssRules)}}function i(e,t){for(var r=t.length-1;r>=0;r--)1!=t[r].type&&4!=t[r].type&&7!=t[r].type||e.push(t[r].cssText)}function a(e,t,r){var r=void 0==r?e.IS_MANDATORY:r;if(e.NAME&&!t.hasAttribute(e.NAME.toLowerCase()))return e.IS_FORBIDDEN||!r;if(e.IS_FORBIDDEN)return!1;var o=t.getAttribute(e.NAME.toLowerCase());if(void 0!==o&&null!==o||(o=""),o.constructor==String){if(e.DONT_TRIM||(o=o.trim()),e.CASE_SENSITIVE||!1||(o=o.toLowerCase()),e.MAX_LENGTH&&o.length>e.MAX_LENGTH)return!1;if(e.MIN_LENGTH&&o.length<e.MIN_LENGTH)return!1;if(void 0!=e.REGEX){if(e.REGEX.constructor==RegExp&&-1==o.search(e.REGEX))return!1;if(e.REGEX.constructor==Array)for(T=0;T<e.REGEX.length;T++)if(-1==o.search(e.REGEX[T]))return!1}}if(e.LIST&&-1==e.LIST.indexOf(o))return!1;if("INTEGER"==e.TYPE||"FLOAT"==e.TYPE){var n;try{n="INTEGER"==e.TYPE?window.parseInt(o,10):window.parseFloat(o)}catch(e){return!1}if(window.isNaN(n))return!1;if(void 0!=e.GREATER_THAN&&n<=e.GREATER_THAN)return!1;if(void 0!=e.GREATER_THAN_OR_EQUAL&&n<e.GREATER_THAN_OR_EQUAL)return!1;if(void 0!=e.LESSER_THAN&&n>=e.LESSER_THAN)return!1;if(void 0!=e.LESSER_THAN_OR_EQUAL&&n>e.LESSER_THAN_OR_EQUAL)return!1;if(void 0!=e.EQUAL&&n!=e.EQUAL)return!1;if(void 0!=e.NOT_EQUAL&&n==e.NOT_EQUAL)return!1}else if(o.constructor==String){if(void 0!=e.STARTS_WITH&&0!=o.indexOf(e.STARTS_WITH))return!1;if(void 0!=e.ENDS_WITH&&o.lastIndexOf(e.ENDS_WITH)!=o.length-e.ENDS_WITH.length)return!1;if(void 0!=e.CONTAINS){if(e.CONTAINS.constructor==String&&-1==o.indexOf(e.CONTAINS))return!1;if(e.CONTAINS.constructor==Array)for(T=0;T<e.CONTAINS.length;T++)if(-1==o.indexOf(e.CONTAINS[T]))return!1}if(void 0!=e.NOT_CONTAINS){if(e.NOT_CONTAINS.constructor==String&&o.indexOf(e.NOT_CONTAINS)>-1)return!1;if(e.NOT_CONTAINS.constructor==Array)for(var T=0;T<e.NOT_CONTAINS.length;T++)if(o.indexOf(e.NOT_CONTAINS[T])>-1)return!1}if(void 0!=e.EQUAL&&o!==e.EQUAL)return!1;if(void 0!=e.NOT_EQUAL&&o===e.NOT_EQUAL)return!1}return!0}function A(e){if(!e)return e;if(e.constructor==Object)for(var t in e)e.hasOwnProperty(t)&&(e[t]=E(e[t]));return e}function _(e){if(!e)return e;if(e.constructor==Array)for(var t=0;t<e.length;t++)if(e[t].CRITERIA)for(var r=0;r<e[t].CRITERIA.length;r++)e[t].CRITERIA[r]=E(e[t].CRITERIA[r]);return e}function E(e){if(e){var t=["STARTS_WITH","ENDS_WITH","CONTAINS","EQUAL","NOT_EQUAL","LIST"];if(!(e.CASE_SENSITIVE||!1))for(var r=0;r<t.length;r++){var o=t[r];e[o]&&(e[o]=O(e[o]))}}return e}function O(e){if(e&&e.constructor==String)return e.toLowerCase();if(e.constructor==Array)for(var t=0;t<e.length;t++)e[t]=O(e[t]);return e}function L(e,t){if(!e||e.constructor==Object)return e;for(var r={},o=0;o<e.length;o++){var n=e[o];r[n[t]]=n}return r}function s(e,t){if(e)for(var r=0;r<e.length;r++){var o=e[r];if(!t.hasAttribute(o.NAME.toLowerCase())){var n=!0;if(o.CRITERIA)for(var T=0;T<o.CRITERIA.length;T++)if(!a(o.CRITERIA[T],t,!0)){n=!1;break}n?t.setAttribute(o.NAME,o.VALUE):void 0!=o.DEFAULT_VALUE&&t.setAttribute(o.NAME,o.DEFAULT_VALUE)}}}function l(e,t){if(!t||t.constructor!==Object)return e;if(!e||e.constructor!==Object)return t;for(var r in t)t.hasOwnProperty(r)&&r in e?(void 0==e[r].APPEND_ATTRIBUTES&&(e[r].APPEND_ATTRIBUTES=t[r].APPEND_ATTRIBUTES),void 0==e[r].ATTRIBUTE_RULES&&(e[r].ATTRIBUTE_RULES=t[r].ATTRIBUTE_RULES)):e[r]=t[r];return e}function d(e,t,r){return!(t&&!a(t,e))||(void 0!==t.DEFAULT_VALUE?e.setAttribute(r,t.DEFAULT_VALUE):e.removeAttribute(r),!1)}function u(e){if("object"==typeof e){e.ALLOWED_TAGS=e.GLOBAL_TAGS,e.ALLOWED_ATTR=e.GLOBAL_ATTRIBUTES;for(var r in h)!h.hasOwnProperty(r)||void 0!=e[r]||r in D||(e[r]=t[r]);if(e.TAG_RULES=L(e.TAG_RULES,"NAME"),e.TAG_RULES&&e.TAG_RULES.constructor==Object)for(var o in e.TAG_RULES)if(e.TAG_RULES.hasOwnProperty(o)){var n=e.TAG_RULES[o];n.ATTRIBUTE_RULES=A(L(n.ATTRIBUTE_RULES,"NAME")),n.APPEND_ATTRIBUTES=_(n.APPEND_ATTRIBUTES)}if(e.GLOBAL_ATTRIBUTE_RULES=A(L(e.GLOBAL_ATTRIBUTE_RULES,"NAME")),e.GLOBAL_APPEND_ATTRIBUTES=_(e.GLOBAL_APPEND_ATTRIBUTES),e.EXTENDS)for(var T=0;T<e.EXTENDS.length;T++){var i=e.EXTENDS[T];switch("GLOBAL_TAGS"==i&&(i="ALLOWED_TAGS"),"GLOBAL_ATTRIBUTES"==i&&(i="ALLOWED_ATTR"),i){case"ALLOWED_TAGS":case"ALLOWED_ATTR":case"FORBID_TAGS":case"FORBID_ATTR":e[i+="_OBJ"]={},t[i]&&(e[i]=addObjsToSet(e[i],t[i]));break;case"ADD_URI_SAFE_ATTR":case"GLOBAL_APPEND_ATTRIBUTES":if(e[i]||(e[i]=[]),!t[i]||t[i].constructor!==Array)break;e[i]=e[i].concat(t[i]);break;case"GLOBAL_ATTRIBUTE_RULES":if(e.GLOBAL_ATTRIBUTE_RULES||(e.GLOBAL_ATTRIBUTE_RULES={}),t.GLOBAL_ATTRIBUTE_RULES&&t.GLOBAL_ATTRIBUTE_RULES.constructor==Object)for(var a in t.GLOBAL_ATTRIBUTE_RULES)t.GLOBAL_ATTRIBUTE_RULES.hasOwnProperty(a)&&!e.GLOBAL_ATTRIBUTE_RULES[a]&&(e.GLOBAL_ATTRIBUTE_RULES[a]=t.GLOBAL_ATTRIBUTE_RULES[a]);break;case"TAG_RULES":e.TAG_RULES||(e.TAG_RULES={}),e.TAG_RULES=l(e.TAG_RULES,t.TAG_RULES)}}for(var E in N)N.hasOwnProperty(E)&&(e[E+"_OBJ"]||(e[E+"_OBJ"]={}),void 0!=e[E]?e[E].constructor===Array&&(e[E+"_OBJ"]=addToSet(e[E+"_OBJ"],e[E])):e[E]=[]);for(var O=0;O<B.length;O++){var s=B[O];e[s]||(e[s]=[])}"ALL"==e.ALLOWED_STYLE?(e.FORBID_TAGS_OBJ=removeFromSet(e.FORBID_TAGS_OBJ,"style"),e.FORBID_ATTR_OBJ=removeFromSet(e.FORBID_ATTR_OBJ,"style"),e.ALLOWED_TAGS_OBJ=addToSet(e.ALLOWED_TAGS_OBJ,["style"]),e.ALLOWED_ATTR_OBJ=addToSet(e.ALLOWED_ATTR_OBJ,["style"])):"INLINE"==e.ALLOWED_STYLE?(e.FORBID_ATTR_OBJ=removeFromSet(e.FORBID_ATTR_OBJ,"style"),e.ALLOWED_ATTR_OBJ=addToSet(e.ALLOWED_ATTR_OBJ,["style"]),e.FORBID_TAGS_OBJ=addToSet(e.FORBID_TAGS_OBJ,["style"]),e.ALLOWED_TAGS_OBJ=removeFromSet(e.ALLOWED_TAGS_OBJ,"style")):"INTERNAL"==e.ALLOWED_STYLE?(e.FORBID_TAGS_OBJ=removeFromSet(e.FORBID_TAGS_OBJ,"style"),e.ALLOWED_TAGS_OBJ=addToSet(e.ALLOWED_TAGS_OBJ,["style"]),e.FORBID_ATTR_OBJ=addToSet(e.FORBID_ATTR_OBJ,["style"]),e.ALLOWED_ATTR_OBJ=removeFromSet(e.ALLOWED_ATTR_OBJ,"style")):"NONE"==e.ALLOWED_STYLE&&(e.FORBID_TAGS_OBJ=addToSet(e.FORBID_TAGS_OBJ,["style"]),e.FORBID_ATTR_OBJ=addToSet(e.FORBID_ATTR_OBJ,["style"]),e.ALLOWED_TAGS_OBJ=removeFromSet(e.ALLOWED_TAGS_OBJ,"style"),e.ALLOWED_ATTR_OBJ=removeFromSet(e.ALLOWED_ATTR_OBJ,"style"));for(var d in N)if(N.hasOwnProperty(d)){for(var u in e[d+"_OBJ"])e[d+"_OBJ"].hasOwnProperty(u)&&e[d].push(u);e[d+"_OBJ"]=addToSet(e[d+"_OBJ"],e[d])}ZSEC.configValidator&&ZSEC.configValidator.HTMLPurifierValidation(e,h,N,c,R)}else{e={};for(var S in t)t.hasOwnProperty(S)&&(e[S]=t[S].valueOf())}return e}var c=addToSet({},["script"]),R=addToSet({},[]),S=["ALLOW_ARIA_ATTR","ALLOW_DATA_ATTR","ALLOW_UNKNOWN_PROTOCOLS","SAFE_FOR_JQUERY","SAFE_FOR_TEMPLATES","WHOLE_DOCUMENT","RETURN_DOM","RETURN_DOM_FRAGMENT","RETURN_DOM_IMPORT","FORCE_BODY","SANITIZE_DOM","KEEP_CONTENT","ALLOWED_STYLE_PROPS"],f=["ALLOWED_TAGS","ALLOWED_ATTR","FORBID_TAGS","FORBID_ATTR"],p=["ALLOWED_TAGS_OBJ","ALLOWED_ATTR_OBJ","FORBID_TAGS_OBJ","FORBID_ATTR_OBJ"],B=["ADD_URI_SAFE_ATTR","GLOBAL_APPEND_ATTRIBUTES","GLOBAL_ATTRIBUTE_RULES","TAG_RULES"],m=addToSet({},S),N=addToSet({},f),D=(addToSet({},p),addToSet({},B));D=addToSet(D,f),D=addToSet(D,p);var I,h=addToSet({},S.concat(["STYLE_VALIDATION","ALLOWED_STYLE","EXTENDS","REMOVE_ONEVENTS","GLOBAL_ATTRIBUTES","GLOBAL_TAGS"],f,p,B)),U={iframe:{NAME:"iframe",ATTRIBUTE_RULES:{sandbox:{NAME:"sandbox",NOT_CONTAINS:["allow-top-navigation","allow-popups-to-escape-sandbox"],DEFAULT_VALUE:"allow-popups allow-forms allow-scripts allow-same-origin"}},APPEND_ATTRIBUTES:[{NAME:"sandbox",VALUE:"allow-popups allow-forms allow-scripts allow-same-origin"}]}},v=!1,b=addToSet({},t.ALLOWED_STYLE_PROPS);!function(){t.FORBID_TAGS_OBJ=addObjsToSet(t.FORBID_TAGS_OBJ,c),t.FORBID_ATTR_OBJ=addObjsToSet(t.FORBID_ATTR_OBJ,R);for(var e in N)N.hasOwnProperty(e)&&(t[e+"_OBJ"]=addToSet(t[e+"_OBJ"],t[e]));r.removeAllHooks(),I=!1,"NONE"==t.ALLOWED_STYLE&&(t.FORBID_TAGS_OBJ=addToSet(t.FORBID_TAGS_OBJ,["style"]),t.FORBID_ATTR_OBJ=addToSet(t.FORBID_ATTR_OBJ,["style"])),"INLINE"!=t.ALLOWED_STYLE&&"ALL"!=t.ALLOWED_STYLE||(t.STYLE_VALIDATION&&r.addHook("afterSanitizeAttributes",function(e){if(!e.ownerDocument.baseURI){var t=document.createElement("base");t.href=document.baseURI,e.ownerDocument.head.appendChild(t)}if(e.hasAttribute("style")){var r="";I=!1,n(e.style),(r=I?e.style.cssText:e.getAttribute("style")).length?e.setAttribute("style",r):e.removeAttribute("style")}}),"INLINE"==t.ALLOWED_STYLE&&(t.FORBID_TAGS_OBJ=addToSet(t.FORBID_TAGS_OBJ,["style"]),t.FORBID_ATTR_OBJ=removeFromSet(t.FORBID_ATTR_OBJ,"style"))),"INTERNAL"!=t.ALLOWED_STYLE&&"ALL"!=t.ALLOWED_STYLE||(t.STYLE_VALIDATION&&r.addHook("uponSanitizeElement",function(e,t){if("style"===t.tagName&&null!=e.sheet){var r=e.sheet.cssRules;if(I=!1,T(r),I){var o=[];i(o,r),e.textContent=o.join("\n")}}}),"INTERNAL"==t.ALLOWED_STYLE&&(t.FORBID_ATTR_OBJ=addToSet(t.FORBID_ATTR_OBJ,["style"]),t.FORBID_TAGS_OBJ=removeFromSet(t.FORBID_TAGS_OBJ,"style"))),"ALL"==t.ALLOWED_STYLE&&(t.FORBID_TAGS_OBJ=removeFromSet(t.FORBID_TAGS_OBJ,"style"),t.FORBID_ATTR_OBJ=removeFromSet(t.FORBID_ATTR_OBJ,"style")),(t.GLOBAL_ATTRIBUTE_RULES||t.TAG_RULES)&&r.addHook("afterSanitizeAttributes",function(e){for(var r=e.nodeName.toLowerCase(),o=t.GLOBAL_ATTRIBUTE_RULES,n=t.TAG_RULES&&t.TAG_RULES[r]&&t.TAG_RULES[r].ATTRIBUTE_RULES,T=U&&U[r]&&U[r].ATTRIBUTE_RULES,i=e.attributes.length;i--;){var a=e.attributes[i].name;d(e,n&&n[a]||o&&o[a],a)&&d(e,T&&T[a],a)}}),(t.GLOBAL_APPEND_ATTRIBUTES||t.TAG_RULES)&&r.addHook("afterSanitizeAttributes",function(e){var r=e.nodeName.toLowerCase();s(t.TAG_RULES&&t.TAG_RULES[r]&&t.TAG_RULES[r].APPEND_ATTRIBUTES,e),s(t.GLOBAL_APPEND_ATTRIBUTES,e),s(U&&U[r]&&U[r].APPEND_ATTRIBUTES,e)}),t.REMOVE_ONEVENTS&&r.addHook("uponSanitizeAttribute",function(e,t){0==t.attrName.indexOf("on")&&(t.keepAttr=!1)})}();var y=function(t){return t=u(t),e(t,r(window))};return y.isSupported=r.isSupported,y.removed="",ZSEC.util.defineProperty(y,"sanitize",function(e,t){var n=o(t),T=r.sanitize(e,n);return y.removed=r.removed,T},!1,!1,!0),y});};;if(window.DOMPurifyCopy) { window.DOMPurify = window.DOMPurifyCopy; window.DOMPurifyCopy = undefined; };;if(!window.ZSEC.Encoder) {!function(r){function e(r){for(var e=[],a=0;a<r.length;a++)e.push(r[a].charCodeAt(0));return e}var a={},t="34=&quot|38=&amp|60=&lt|62=&gt|160=&nbsp|161=&iexcl|162=&cent|163=&pound|164=&curren|165=&yen|166=&brvbar|167=&sect|168=&uml|169=&copy|170=&ordf|171=&laquo|172=&not|173=&shy|174=&reg|175=&macr|176=&deg|177=&plusmn|178=&sup2|179=&sup3|180=&acute|181=&micro|182=&para|183=&middot|184=&cedil|185=&sup1|186=&ordm|187=&raquo|188=&frac14|189=&frac12|190=&frac34|191=&iquest|192=&Agrave|193=&Aacute|194=&Acirc|195=&Atilde|196=&Auml|197=&Aring|198=&AElig|199=&Ccedil|200=&Egrave|201=&Eacute|202=&Ecirc|203=&Euml|204=&Igrave|205=&Iacute|206=&Icirc|207=&Iuml|208=&ETH|209=&Ntilde|210=&Ograve|211=&Oacute|212=&Ocirc|213=&Otilde|214=&Ouml|215=&times|216=&Oslash|217=&Ugrave|218=&Uacute|219=&Ucirc|220=&Uuml|221=&Yacute|222=&THORN|223=&szlig|224=&agrave|225=&aacute|226=&acirc|227=&atilde|228=&auml|229=&aring|230=&aelig|231=&ccedil|232=&egrave|233=&eacute|234=&ecirc|235=&euml|236=&igrave|237=&iacute|238=&icirc|239=&iuml|240=&eth|241=&ntilde|242=&ograve|243=&oacute|244=&ocirc|245=&otilde|246=&ouml|247=&divide|248=&oslash|249=&ugrave|250=&uacute|251=&ucirc|252=&uuml|253=&yacute|254=&thorn|255=&yuml|338=&OElig|339=&oelig|352=&Scaron|353=&scaron|376=&Yuml|402=&fnof|710=&circ|732=&tilde|913=&Alpha|914=&Beta|915=&Gamma|916=&Delta|917=&Epsilon|918=&Zeta|919=&Eta|920=&Theta|921=&Iota|922=&Kappa|923=&Lambda|924=&Mu|925=&Nu|926=&Xi|927=&Omicron|928=&Pi|929=&Rho|931=&Sigma|932=&Tau|933=&Upsilon|934=&Phi|935=&Chi|936=&Psi|937=&Omega|945=&alpha|946=&beta|947=&gamma|948=&delta|949=&epsilon|950=&zeta|951=&eta|952=&theta|953=&iota|954=&kappa|955=&lambda|956=&mu|957=&nu|958=&xi|959=&omicron|960=&pi|961=&rho|962=&sigmaf|963=&sigma|964=&tau|965=&upsilon|966=&phi|967=&chi|968=&psi|969=&omega|977=&thetasym|978=&upsih|982=&piv|8194=&ensp|8195=&emsp|8201=&thinsp|8204=&zwnj|8205=&zwj|8206=&lrm|8207=&rlm|8211=&ndash|8212=&mdash|8216=&lsquo|8217=&rsquo|8218=&sbquo|8220=&ldquo|8221=&rdquo|8222=&bdquo|8224=&dagger|8225=&Dagger|8226=&bull|8230=&hellip|8240=&permil|8242=&prime|8243=&Prime|8249=&lsaquo|8250=&rsaquo|8254=&oline|8260=&frasl|8364=&euro|8465=&image|8472=&weierp|8476=&real|8482=&trade|8501=&alefsym|8592=&larr|8593=&uarr|8594=&rarr|8595=&darr|8596=&harr|8629=&crarr|8656=&lArr|8657=&uArr|8658=&rArr|8659=&dArr|8660=&hArr|8704=&forall|8706=&part|8707=&exist|8709=&empty|8711=&nabla|8712=&isin|8713=&notin|8715=&ni|8719=&prod|8721=&sum|8722=&minus|8727=&lowast|8730=&radic|8733=&prop|8734=&infin|8736=&ang|8743=&and|8744=&or|8745=&cap|8746=&cup|8747=&int|8756=&there4|8764=&sim|8773=&cong|8776=&asymp|8800=&ne|8801=&equiv|8804=&le|8805=&ge|8834=&sub|8835=&sup|8836=&nsub|8838=&sube|8839=&supe|8853=&oplus|8855=&otimes|8869=&perp|8901=&sdot|8968=&lceil|8969=&rceil|8970=&lfloor|8971=&rfloor|10216=&lang|10217=&rang|9674=&loz|9824=&spades|9827=&clubs|9829=&hearts|9830=&diams";t=t.split("|");for(var i=0;i<t.length;i++){var n=t[i].split("=");a[n[0]]=n[1]}var u={characterToEntityMap:a,IMMUNE_HTML:e(new Array(",",".","-","_"," ")),IMMUNE_HTMLATTR:e(new Array(",",".","-","_")),IMMUNE_CSS:e(new Array),IMMUNE_JAVASCRIPT:e(new Array(",",".","_"))};ZSEC.util.defineProperty(ZSEC,"Encoder",r(u),!0,!1,!1,!0)}(function(r){function e(r,e,a,t){if(null==e||void 0==e||"string"!=typeof e)return e;for(var i="",n=0;n<e.length;n++)if(t){var u=e.codePointAt(n);i+=a(r,u,t),u>65535&&n++}else i+=a(r,e.charCodeAt(n));return i}for(var a={},t=r.characterToEntityMap,i=[],n=0;n<255;n++)i[n]=n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?null:n.toString(16);var u=function(r){return r<256?i[r]:r.toString(16)},o=function(r,e){if(-1!=ZSEC.util.ArrayIndexOf.call(r,e))return String.fromCodePoint(e);var a=u(e);if(null==a)return String.fromCodePoint(e);if(e<=31&&"\t"!=e&&"\n"!=e&&"\r"!=e||e>=127&&e<=159||" "==e)return" ";var i=t[e];return null!=i?i+";":"&#x"+a+";"},l=function(r,e){if(-1!=ZSEC.util.ArrayIndexOf.call(r,e))return String.fromCharCode(e);if(null==u(e))return String.fromCharCode(e);var a=e.toString(16);if(e<256){var t="00".substr(a.length);return"\\x"+t+a.toUpperCase()}return"\\u"+(t="0000".substr(a.length))+a.toUpperCase()},c=function(r,e){if(-1!=ZSEC.util.ArrayIndexOf.call(r,e))return String.fromCodePoint(e);var a=u(e);return null==a?String.fromCodePoint(e):"\\"+a+" "};return a.encodeForHTML=function(a){return e(r.IMMUNE_HTML,a,o,!0)},a.encodeForHTMLAttribute=function(a){return e(r.IMMUNE_HTMLATTR,a,o,!0)},a.encodeForJavaScript=function(a){return e(r.IMMUNE_JAVASCRIPT,a,l,!1)},a.encodeForCSS=function(a){return e(r.IMMUNE_CSS,a,c,!0)},Object.freeze&&Object.freeze(a),a});};/*Polyfills for functions not available in other browsers. */

/*Polyfill for Node.after
//Not supported out of the box in IE and Edge. 
//from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/after()/after().md */
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('after')) {
      return;
    }
    Object.defineProperty(item, 'after', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function after() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();
        
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        
        this.parentNode.insertBefore(docFrag, this.nextSibling);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


/*Polyfill for replaceWith. 
//Not supported out of the box for IE and Edge. */
function ReplaceWith(Ele) {
    var parent = this.parentNode,
        i = arguments.length,
        firstIsNode = +(parent && typeof Ele === 'object');
    if (!parent){
        return;
    } 
    
    while (i-- > firstIsNode){
      if (parent && typeof arguments[i] !== 'object'){
        arguments[i] = document.createTextNode(arguments[i]);
      } if (!parent && arguments[i].parentNode){
        arguments[i].parentNode.removeChild(arguments[i]);
        continue;
      }
      parent.insertBefore(this.previousSibling, arguments[i]);
    }
    if (firstIsNode){
        parent.replaceChild(this, Ele);
    } 
}
if (!Element.prototype.replaceWith){
    Element.prototype.replaceWith = ReplaceWith;
}
if (!CharacterData.prototype.replaceWith){
    CharacterData.prototype.replaceWith = ReplaceWith;
}
if (!DocumentType.prototype.replaceWith) {
    DocumentType.prototype.replaceWith = ReplaceWith;
}

/*Polyfill for startsWith
//Not supported out of the box for  IE */
if(!String.prototype.startsWith) {
      String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

/*Polyfill for endsWith
//Not supported out of the box for  IE */
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}

var Lyte = {
    version : "3.0.0",
    $ : {},
    registeredMixins : {},
    Mixin : {},
    debug : false,
    performance : false,
    toBeRegistered : [],
    registeredCustomComponent : {}
},
tags = { ".js": 'script', ".css" : 'link' };
var consoleTime = [];

Lyte.$.assetsDiv = document.createElement("div");
Lyte.$.assetsDiv.setAttribute("id", "lyteAssetsDiv");

Lyte.registerErrorCodes = function(obj) {
    Object.assign(Lyte.errorCodes, obj);
}

  Lyte.establishObserverBindings  = function(observers,fromStore,properties,model) {
    var scope = this;
    if(fromStore){
        scope = fromStore;      
    }
    for(var i=0;i<observers.length;i++) {
        var props = observers[i].properties;
        for(var j=0;j<props.length;j++) {
            var actProp;
            var isArrayObserver = false;
            if(props[j].indexOf('.[]') !== -1) {
                isArrayObserver = true;
                actProp = Lyte.getProperty.call(this,props[j].substring(0, props[j].indexOf('.[]')),fromStore,properties);
            } else {
				if(props[j].indexOf('.*') !== -1) {
					var prop = props[j].split(".")[0];
					var isDeepObs = (!fromStore && this.component.__data[prop] && this.component.__data[prop].watch) || (fromStore && model && model.fieldList && model.fieldList[prop] && model.fieldList[prop].watch) ? true : false;
					if(!isDeepObs){
						continue;
					}
				} 
                actProp = Lyte.getProperty.call(this,props[j],fromStore,properties);
            }
            if(!actProp._observers) {
                Object.defineProperty(actProp, '_observers', {
                    value : new Set(),
                    enumerable: false, 
                    writable: true,
                    configurable: true
                });
            }
            actProp._observers.add({callee : scope, observer: observers[i], isArrayObserver : isArrayObserver});
        }
    }
}

Lyte.getProperty = function(key,fromStore,properties) {
    let arr = key.split('.');
    let property = this;
    if(fromStore){
        property = properties;
        if(!properties[arr[0]]){
            properties[arr[0]] = {};
        }
        property = properties[arr[0]];
    }
    else {                      
        if(!property._properties[arr[0]]) {
            property._properties[arr[0]] = {};
        } 
        property = property._properties[arr[0]];
    }

    Object.defineProperty(property, '_path', {enumerable: false, value : arr[0]});
    for(let i=1;i<arr.length;i++) {
        if(!property[arr[i]]) {
            property[arr[i]] = {};
            Object.defineProperty(property[arr[i]], '_path', {enumerable: false, value : property._path + "." + arr[i]});
        }
        property = property[arr[i]];
    }
    return property;
}

Lyte.getErrorMessage = function(code) {
    var args = Array.from(arguments).slice(1);
    if(Lyte.errorCodes[code]) {
        return Lyte.errorCodes[code].replace(/{(\d+)}/g, function(t, i) {
            return args[i]
        });
    } else {
        return code;
    }
}

Lyte.error = function () {
    var errorObj = arguments[0],
    parse = errorObj.stack;
    errorObj = parse ? errorObj : Error(Lyte.getErrorMessage.apply(Lyte, arguments));
    if (Lyte.onerror) {
        Lyte.onerror.call(this, errorObj,arguments[1]);
    }
    Lyte.triggerEvent("error", errorObj,arguments[1]);
    var safari = errorObj.stack && errorObj.stack.indexOf(errorObj.message) == -1
    if (parse && !safari) {
        errorObj = JSON.parse(JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj)));
    }
    if(arguments[1]) {
        console.error(errorObj.stack ? (safari ? errorObj : errorObj.stack) : errorObj.message,arguments[1]);
    } else {
        console.error(errorObj.stack ? (safari ? errorObj : errorObj.stack) : errorObj.message);    
    }
    
};

Lyte.warn = function () {
    var errorObj = arguments[0];
    errorObj = errorObj.stack ? JSON.parse(JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj))) : Error(Lyte.getErrorMessage.apply(Lyte, arguments));
    console.warn(errorObj.stack ? (errorObj.stack.indexOf(errorObj.message) != -1 ? errorObj.stack.replace("Error: ", "") : errorObj) : errorObj.message);
};


var requiredMixins  = {};
Lyte.Mixin.register = function (name, mixin) {
  Lyte.registeredMixins[name] = mixin;
  var req;
  if(req = requiredMixins[name]) {
    for(var key in req) {
      Lyte.$.requiredMixins[key](mixin, req[key],key);
    }
  }
};

Lyte.$.requiredMixins = function(mixin,dir,type) {
  var req = requiredMixins[mixin] ? requiredMixins[mixin] : (requiredMixins[mixin] = {});
  if(!req[type]) {
    req[type] = [dir];
  } else {
    req[type].push(dir);  
  }
}

Lyte.Mixin.exists = function (name) {
  if (!Lyte.registeredMixins[name]) {
    // Lyte.error('Mixin used before being registered.');
    return false;
  }
  return true;
};

Lyte.log = function (text, src, color) {
  if (Lyte.debug) {
      if(color) {
          console.log("%c" + text,'color:' + color);
      } else {
        console.log(text);      
      }
  }
};

Lyte.time = function(fn) {
  if(Lyte.performance) {
    var index;
    if((index = consoleTime.indexOf(fn)) != -1) {
      consoleTime.splice(index,1);
      console.timeEnd(fn);
    } else {
      consoleTime.push(fn)
      console.time(fn);
    }
  }
}

Lyte.isRecord = function(object){
  if(object && object.$ && object.$.hasOwnProperty("isModified")) {
    return true;
  }
  return false;
}

Lyte.isComponent = function(object) {
  if(object && object.$node && object.__data) {
    return true;
  }
  return false;
}


/* --------- lyte router v2 changes starts---- */
var reqFiles = {};

Lyte.injectResources = function (files, every, completed) {
  var successFiles = [],
  errorFiles = []; 
  every = every || function() {};
  completed = completed || function() {};
  return new Promise(function(resolve) {
    processRequirements(files, resolve);   
  }).then(function() {
    completed(successFiles,errorFiles);  
  });

  function processRequirements(files, resolve) {
    if(!files) {
      resolve();
    } else {
      if(!Array.isArray(files)) {
        files = [files];
      }
      if(!files.length) {
        resolve();
      }
      var len = -(files.length);
      files.forEach(function(file) {
        if(typeof file == "string"){
          requestFile(file, Lyte.injectResources.availableTags[file], function() {
            loaded();
          });  
        } else if(Array.isArray(file)) {
          new Promise(function(r){
            processRequirements(file, r);
          }).then(function(){
            loaded();
          })
        } else {
          new Promise(function(r){
            processRequirements(file.parent, r);
          }).then(function(){
            new Promise(function(r1){
              processRequirements(file.child, r1)
            }).then(function(){
              loaded();
            })
          })
        }
      })
    }

    function loaded() {
      len++;
      if(len == 0) {
        resolve();
      }
    }
    
    function requestFile(file,cached,resolve) {
      if(reqFiles[file]) {
        reqFiles[file].push(resolve)
      } else {
        reqFiles[file] = [resolve];
        if(cached && cached.event.type != "error") {
          if(Lyte.removeFromCache.arr.indexOf(file) != -1) {
            Lyte.removeFromCache.arr.splice(Lyte.removeFromCache.arr.indexOf(file),1);
          }
          fileLoaded.call(cached.tag,cached.event,true);
          resolve();
        } else {
          makeRequest(file,
            function(event) {
              reqFiles[file].forEach(function(resolve) {
                resolve();
              });
              fileLoaded.call(this,event);
              every.call(this,event);
            }
          );
        }
      }
    }

    function fileLoaded(event,cached) {
      var file = this.getAttribute('src') || this.getAttribute('href');
      delete reqFiles[file];
      if(!cached) {
        if(Lyte.injectResources.availableTags[file]) {
          Lyte.injectResources.availableTags[file].tag.remove();
        }
        this.onerror = this.onload = undefined;
        Lyte.injectResources.availableTags[file] = {tag : this, event : {type : event.type}};
      }
    }
  }

  function makeRequest(file,callBack) {
    var tag,
    type = file.match(/\.[a-zA-Z]+(?=\?|$)/);
    tag = document.createElement(tags[type]);
    if (!type) {
      Lyte.error('Type of file is not specified in injectResources.');
      return;
    } else if (type == '.css') {
      tag.setAttribute('href', file);
      tag.setAttribute('type', "text/css");
      tag.setAttribute('rel', "stylesheet");
    } else {
      tag.setAttribute('src', file);
    }
    tag.onerror = tag.onload = function (event) {
      if(event.type == "error") {
        errorFiles.push(event);  
      } else {
        successFiles.push(event);
      }
      if(callBack) {
        callBack.call(this,event);
      }
    };
    var ev = every.internal || {};
    ev.tag = tag;
    Lyte.triggerEvent("onBeforeInject", ev);
    Lyte.$.assetsDiv.appendChild(tag);
  };
};

Lyte.injectResources.availableTags = [];

Lyte.removeFromCache = function(arr) {
  Lyte.removeFromCache.assign(arr);
  if(Lyte.removeFromCache.arr.length) {
    Lyte.removeFromCache.arr.forEach(function(file) {
      if(Lyte.injectResources.availableTags[file]) {
        Lyte.injectResources.availableTags[file].tag.remove();
        delete Lyte.injectResources.availableTags[file];  
      }
    });
    Lyte.removeFromCache.arr = [];
  }
}

Lyte.removeFromCache.arr = [];

Lyte.removeFromCache.assign = function(arr) {
  arr = arr == "*" ? Object.keys(Lyte.injectResources.availableTags) : (Array.isArray(arr) ? arr : [arr]); 
  Lyte.removeFromCache.arr = Lyte.removeFromCache.arr.concat(arr);
  return;
}

/* --------- lyte router v2 changes ends ---- */

Lyte.checkProperty = function(property, dataVal, key, fieldVal, record, type){
  var exts = "extends";
  switch(property){
    case "type" : 
      if(Lyte.Transform.hasOwnProperty(fieldVal) && dataVal !== undefined && dataVal !== null){
        if(Array.isArray(dataVal)){
          if(Lyte.Transform[fieldVal][exts] != "array"){
            return {code : "ERR03", message : Lyte.errorCodes.ERR03, expected : fieldVal};
          }
        }
        else if(Lyte.Transform[fieldVal][exts] != (typeof dataVal)){
          return {code : "ERR03", message : Lyte.errorCodes.ERR03, expected : fieldVal};
        }
      }
      else if(dataVal !== undefined && dataVal !== null){
        if(Array.isArray(dataVal)){
           if(fieldVal != "array"){
              return {code : "ERR03", message : Lyte.errorCodes.ERR03, expected : fieldVal};
           }
        }
        else if(fieldVal != (typeof dataVal)){
          return {code : "ERR03", message : Lyte.errorCodes.ERR03, expected : fieldVal};
        }
      }
      break;
    case "mandatory":
      if(fieldVal && (dataVal == undefined || dataVal == null || dataVal === "")){
        return {code : "ERR02", message: Lyte.errorCodes.ERR02 };
      }
      break;
    case "maximum" :
      if((typeof dataVal == "number") && dataVal > fieldVal){
        return {code : "ERR04", message : Lyte.errorCodes.ERR04, expected : fieldVal};
      }
      break;
    case "minimum" :
      if((typeof dataVal == "number") && dataVal < fieldVal){
        return {code : "ERR05", message : Lyte.errorCodes.ERR05, expected : fieldVal};
      }
      break;
    case "maxLength" :
    case "maxItems" :
      if(dataVal && dataVal.length > fieldVal){
        return {code : "ERR06", message : Lyte.errorCodes.ERR06, expected : fieldVal};
      }
      break;
    case "minLength" :
    case "minItems" :
      if(dataVal && dataVal.length < fieldVal){
        return {code : "ERR07", message : Lyte.errorCodes.ERR07, expected : fieldVal};
      }
      break;
    case "pattern" :
      if( typeof dataVal == "string" && !(new RegExp(fieldVal).test(dataVal))){
        return {code : "ERR08", message : Lyte.errorCodes.ERR08, expected : fieldVal};
      }
      break;
    case "uniqueItems" :{
      if(Array.isArray(dataVal) && fieldVal){
        var newArr = [];
        for(var i=0; i<dataVal.length; i++){
          var val = dataVal[i];
          if(newArr.indexOf(val) != -1){
            return {code : "ERR09", message : Lyte.errorCodes.ERR09};
          }
          newArr.push(val);
        }         
      }
      break;        
    }
    case "constant" :
      if(Array.isArray(dataVal)){
        var resp = dataVal.length==fieldVal.length && dataVal.every(function(v,i) { return v === fieldVal[i]});
        if(!resp){
          return {code : "ERR10", message : Lyte.errorCodes.ERR10, expected : fieldVal};
        }
      }
      else if(typeof dataVal == "object"){
        var resp = store.adapter.$.compareObjects(dataVal, fieldVal);
        if(!resp){
          return {code : "ERR10", message : Lyte.errorCodes.ERR10, expected : fieldVal};
        }
      }
      else if(dataVal && dataVal != fieldVal){
        return {code : "ERR10", message : Lyte.errorCodes.ERR10, expected : fieldVal};
      }
      break;
    case "items" :{
      if(Array.isArray(dataVal)){
        for(var i=0; i<dataVal.length; i++){
          for(var property in fieldVal){
            var resp = Lyte.checkProperty(property, dataVal[i], i, fieldVal[property]);
            if(resp != true){
              return resp;
            }
          }
        }         
      }
      break;        
    }
    case "properties" :
      if(typeof dataVal == "object" && !Array.isArray(dataVal)){
        for(var key in dataVal){
          for(var property in fieldVal){
            var resp = Lyte.checkProperty(property, dataVal[key], key, fieldVal[property]);
            if(resp != true){
              return resp;
            }
          }
        }         
      }
      break;
    case "validation" :{
      var resp =  Lyte.customValidator[fieldVal].apply(record, [key, dataVal]);
      if(resp != true){
        return resp;
      }
    }       
  }
  return true;
}

Lyte.types = ["string", "object", "number", "boolean", "array"];

Lyte.attr = function(type, opts){
  var obj = {};
  obj.type = type;
  if(opts == undefined){
    opts = {};
  }
  if(this.types.indexOf(type) == -1 && !Lyte.Transform.hasOwnProperty(type)){
    throw new Error("Not a valid field type - "+type);
  }
  Object.assign(obj,opts);
  return obj;
}

Lyte.defineRelation = function(name,type,opts){
  var relation = {type : "relation", relType : type, relatedTo : name};
  if(opts){
    relation.opts = opts;
  }
  return relation;
}

Lyte.belongsTo = function(name,opts){
  return this.defineRelation(name,"belongsTo",opts);
}

Lyte.hasMany = function(name,opts){
  return this.defineRelation(name,"hasMany",opts);
}

Lyte.Transform = {};

Lyte.customValidator = {};

Lyte.registerDataType = function(fieldTypeName, properties){
  var exts = "extends";
  if(this.Transform.hasOwnProperty(fieldTypeName)){
    Lyte.error("Custom Field Type - "+fieldTypeName+" -  already exists.");
    return;
  }
  if(properties[exts] == undefined || Lyte.types.indexOf(properties[exts]) == -1){
    Lyte.error("Not a valid field type - "+properties[exts]);
    return;
  }
  this.Transform[fieldTypeName] = properties;
}

Lyte.registerValidator = function(customValidatorName, func){
  if(this.customValidator.hasOwnProperty(customValidatorName)){
    Lyte.error("Custom Validator with name - "+customValidatorName+" - already exists");
    return;
  }
  this.customValidator[customValidatorName] = func;
}

Lyte.patterns = {
  email : /^([A-Za-z0-9._%\-'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/,
  url : /(^(ht|f)tp(s?):\/\/[0-9a-zA-Z][-.\w]*(:[0-9])*(\/?)([a-zA-Z0-9\-.?,:'/\\+=&amp;%$#_[\]@!()*;~]*)?$)/,
  ampm : /^(AM|PM|am|pm)$/,
  hour : /^(0?[0-9]|1[0-9]|2[0-4])$/,
  minute : /^(0?[0-9]|[1-5][0-9]|60)$/,
  boolean : /^(true|false|TRUE|FALSE)$/,
  alphaNumeric : /([a-zA-Z0-9])+/,
  alphabetsOnly : /([a-zA-Z])+/,
  numeric : /([0-9])+/,
  phoneNo : /^[0-9a-zA-Z+.()\-;\s]+$/
}

Lyte.validate = function(object, key, value, component) {
  var definition = component.__data[key];
  var isError = false;
  var type = definition ? definition.type : undefined;
  for(var defKey in definition) {
    isError = Lyte.checkProperty(defKey, value, key, definition[defKey], object, type);
    if(isError !== true) {
      return isError;
    }
  }
  return false;
}

Lyte.registerPattern = function(patternName, pattern){
  this.patterns[patternName] = pattern;
}

Lyte.errorCodes = {
  ERR01 : "Primary key cannot be modified", ERR02 : "Mandatory field cannot be empty", ERR03 : "Type of value does not match the specified data type", ERR04 : "Value is greater than the maximum value allowed",
  ERR05 : "Value is less than the minimum value allowed", ERR06 : "Length of string/array is greater than the maximum limit allowed", ERR07 : "Length of string/array is less than the minimum limit allowed",
  ERR08 : "String does not match the specified pattern", ERR09 : "Values in array are not unique", ERR10 : "Value is not equal to the specified constant", ERR11 : "Model of related field is not defined",
  ERR12 : "Model of backward relation is not defined", ERR13 : "Record not found", ERR14 : "Model does not match the related field model", ERR15 : "Error in creating a record as a relation",
  ERR16 : "Record with primary key already exists", ERR17 : "Value cannot be changed because record has been deleted", ERR18 : "Action not defined", ERR19 : "Model not defined",
  ERR20 : "Key not specified", ERR21 : "'belongsTo' relationship expects a single object/id", ERR22 : "Type not specified for polymorphic relation", ERR23: "Primary Key value not present", ERR24: "Error while relating record", ERR25: "Backward relation not present"
}

Lyte.registeredGlobalEvents = {};
Lyte.triggerEvent = function() {
   var args = Array.prototype.slice.call(arguments, 1)
   var eventName = arguments[0];
   var stopEvent = false;
   var s = this.registeredGlobalEvents[eventName];
     if(!s) {
       s = this.registeredGlobalEvents[eventName] = {"listeners" : []};
     } else {
       for(var i=0;i<s.listeners.length;i++) {
         var func = s.listeners[i];
         if(func) {
            var ret = func.apply(this, args);
            if(ret === false) {
              stopEvent = true;
              break;
            }
         }
       }
     }
     var customEvent = new CustomEvent(eventName, {"detail" : args});
     if(!stopEvent) {
      document.dispatchEvent(customEvent); 
     } 
 }

 Lyte.addEventListener = function(eventName, func) {
   if(typeof func !== "function") {
       Lyte.error("Second parameter to Lyte.Component.addGlobalEventListener() must be a function");
       return;
   }
   var s = this.registeredGlobalEvents[eventName];
   if(!s) {
     s = this.registeredGlobalEvents[eventName] = {"listeners" : []};
   }
   var d = s.listeners.push(func);
   return eventName + "-" + (d - 1);
 }

Lyte.removeEventListener = function(id) {
   if(!id) {
     Lyte.error("listener unique id not specified");
     return;
   }
   var globalId  = id.split("-");
   var s = this.registeredGlobalEvents[globalId[0]];
   if(!s || !s.listeners[globalId[1]]) {
       Lyte.error("No such listener registered");
       return;
   }
   s.listeners[globalId[1]] = null;
 }

Lyte.deepCopyObject = function( obj )  {
var targetVal = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
var current, copies = [{source : obj, target : targetVal}], keys, propertyIndex, descriptor, nextSource, indexOf, sourceReferences = [obj];
var cloneObject = copies[0].target, targetReferences = [cloneObject];
while(current = copies.shift()){
    keys = Object.keys(current.source);
    for(propertyIndex = 0; propertyIndex < keys.length; propertyIndex++){
        descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
        if(!descriptor){
            continue;
        }
        if(!descriptor.value || typeof descriptor.value != "object"){
            Object.defineProperty(current.target, keys[propertyIndex], descriptor);
            continue;
        }
        nextSource = descriptor.value;
        descriptor.value = Array.isArray(nextSource) ? [] : nextSource instanceof Set ? new Set() : Object.create(Object.getPrototypeOf(nextSource));
        indexOf = sourceReferences.indexOf(nextSource);
        if(indexOf != -1){
            descriptor.value = targetReferences[indexOf];
            Object.defineProperty(current.target, keys[propertyIndex], descriptor);
            continue;
        }
        sourceReferences.push(nextSource);
        targetReferences.push(descriptor.value);
        Object.defineProperty(current.target, keys[propertyIndex], descriptor);
        copies.push({source : nextSource, target : descriptor.value});
    }
    if(Lyte.isRecord(current.source)){
      Object.defineProperty(current.target, "$", {
        value: {}
      });
      current.target.$.isNew = current.source.$.isNew;
      current.target.$.isModified = current.source.$.isModified;
      current.target.$.isDeleted = current.source.$.isDeleted;
      current.target.$.pK = current.source.$.pK;
      current.target.$._attributes = current.source.$._attributes;
      current.target.$.isCloned = true;
      if(current.source.$.hasOwnProperty("deepNest")){
        current.target.$.deepNest = current.source.$.deepNest;
      }
      if(current.source.$.hasOwnProperty("partialType")){
        current.target.$.partialType = current.source.$.partialType;
      }
    }
    if(Array.isArray(current.source)){
      if(current.source.partial){
        Object.defineProperty(current.target, "partial", {
          value: current.source.partial
        });
      }
    }
}
return cloneObject;
}

  Lyte.nestScpId = 1;
  Lyte.nestScp = {};
  Lyte.establishObjectBinding = function(data, attr, fromStore, update){
	var model, fld, nestObj ;
	if(fromStore){
	  model = data.$.model;
	  fld = model ? model.fieldList[attr] : undefined;
	  if(!fld){
	      return;
	  }
	}
	if(update && data._scp && data._scp.length ){
		data._scp.forEach(function(itm,idx){
			var path = itm.path ? itm.path.split(".") : [];
			path.push(attr); 
			Lyte.bindObj(data, attr, itm.id, path);	
		});
	}
	else if((!fromStore || fld.watch ) && data[attr]){
	  data._scpObj || Object.defineProperty(data, "_scpObj", {
		value : {}
	  });
	  var obj = data._scpObj, id;
	  id = obj[attr] = obj[attr] || Lyte.nestScpId++;
	  if(fromStore){
		nestObj = { model : model._name , attr : attr , pK : data.$.pK };
	  }
	  else{
		nestObj = { data : data[attr] };
	  }
	  Lyte.nestScp[id] = Lyte.nestScp[id] || nestObj;
	  var path = [];
	  fromStore ? path.push(attr) : undefined;
	  Lyte.bindObj(data, attr, id, path);	
	}
  }
  
  Lyte.bindObj = function(data, key, id, path){
	var value =  key != undefined ? data[key] : data;
	if(Array.isArray(value)){
	  value.forEach(function(val, idx){
		path.push(idx);
		Lyte.bindObj(value, idx, id, path);
		path.pop();
	  });
	  Lyte.estObjScp(value, id, path);
	}
	else if(value && typeof value == "object"){
	  for(var str in value){
		path.push(str);
		Lyte.bindObj(value, str, id, path);
		path.pop();
	  }
	  Lyte.estObjScp(value, id, path);
	}
  }
  
  Lyte.estObjScp = function(value, id, path){
	if(!value._scp){
	  Object.defineProperty(value, "_scp", {
		value : [],
		enumerable : false,
		configurable : true
	  });
	}
	var obj = {};
	obj.id = id;
	obj.path = path ? path.join(".") : path;
	value._scp.push(obj);
  }
  
  Lyte.cmpObjs = function (obj1, obj2){
	  if(Object.keys(obj1).length !== Object.keys(obj2).length){
		  return false;
	  }
	  for(var key in obj1){
		  if(!obj2.hasOwnProperty(key)){
			  return false;
		  }
		  var ret = Lyte.cmpData(obj1[key], obj2[key]);
		  if(ret == false){
			  return false;
		  }
	  }
	  return true;
  }	
  
  
  Lyte.cmpData = function(data1, data2){
	if(Array.isArray(data1)){
	  if((!Array.isArray(data2)) || data1.length !== data2.length){
		return false;
	  }
	  var len = data1.length, ret;
	  for(var i=0;i <len; i++){
		ret = Lyte.cmpData(data1[i], data2[i]);
		if(ret == false){
		  return false;
		}
	  }
	}
	else if(data1 && data2 && typeof data1 == "object" && typeof data2 == "object"){
	  return Lyte.cmpObjs(data1,data2);
	}
	else if(Lyte && Lyte.isRecord(data1) && Lyte.isRecord(data2)){
	  if( (data1.$.model._name !== data1.$.model._name) || (Lyte.getpKVal(data1) !== Lyte.getpKVal(data2)) ){
		return false;
	  }
	}
	else if(data1 !== data2){
	  return false;
	}
	return true;
  }
  
	Lyte.nestScpRemove = function(data, id){
	  var arr = data._scp;
	  if(arr && arr.length){
		  var fil = arr.filter(function(itm){
			  return itm.id == id;
		  }) || [];
		  fil.forEach(function(ele){
			  var ind = arr.indexOf(ele);
			  arr.splice(ind,1);
		  });
		  if(!arr.length){
			delete data._scp;
		  }
	  }
	}
  
	Lyte.removeNestScp = function(value, id){
	  if(Array.isArray(value)){
		  value.forEach(function(val, idx){
			  Lyte.removeNestScp(val, id);
			  Lyte.nestScpRemove(val , id);
		  });
	  }
	  else if(value && typeof value == "object"){
		  for(var str in value){
			  Lyte.removeNestScp(value[str], id);
		  }
		  Lyte.nestScpRemove(value, id);
	  }
	}


Lyte.resolvePromises = function(promises) {
  if(typeof promises == "string" || promises instanceof Promise) {
      return promises;
  } else {
    if(Array.isArray(promises)) {
      return promiseArray(promises);
    } else if(typeof promises == "object") {
      return promiseHash(promises);
    }    
  }

  function promiseHash(promiseObj) {
    var actPromKeys = [],
    promises = [],
    promiseKeys = Object.keys(promiseObj);
    promiseKeys.forEach(function(key) {
        var value = promiseObj[key];
      if(value instanceof Promise) {
        actPromKeys.push(key)
        promises.push(value);
      }
    });
    if(!promises.length) {
      return Promise.resolve(promiseObj);
    } else {
       var obj = {},promise = new Promise(function(resolve,reject) {
          Promise.all(promises).then(function(data) {
            promiseKeys.forEach(function(promiseKey) {
              if(actPromKeys.indexOf(promiseKey) != -1) {
                obj[promiseKey] = data[actPromKeys.indexOf(promiseKey)]
              } else {
                obj[promiseKey] = promiseObj[promiseKey];
              }
            });
          resolve(obj);
        },function(err) {
          reject(err);
          Lyte.error('Error on resolve promises',err);
        });
      });   
     return promise;
    }
  }

  function promiseArray(promiseArray) {
    var array = [],
    hasPromise = false;
    promiseArray.every(function(item,i) {
        if(item instanceof Promise) { 
            hasPromise = true;
            return false;
        }
        return true
    });
    if(!hasPromise) {
        return Promise.resolve(promiseArray);
    }
    var promise = new Promise(function(resolve,reject) {
      Promise.all(promiseArray).then(function(data) {
        promiseArray.forEach(function(key,index){
          array[index] = data[index];
        });
        resolve(array);
      },function(err) {
        reject(err);
        Lyte.error('Error on resolve promises',err);
      });
    });   
   return promise;
  }
};

Lyte.createCustomElement = function (customElementName, definition) {
  var constructor = definition.constructor;
  delete definition.constructor;
  this.defProperty = function(obj, key, val) {
    var obj1 = {};
    if(val.get) {
      obj1.get = val.get
    }
    if(val.set) {
      obj1.set = val.set
    }
    Object.defineProperty(obj, key, obj1);
  }
  class classDef extends HTMLElement {
    constructor() {
      super();
      if(constructor) {
        constructor.apply(this, Array.from(arguments));
      }
    }
  }
  var staticDef = definition.static;
  if(staticDef) {
    for(var key in staticDef) {
      if(typeof staticDef[key] === "object") {
        this.defProperty(classDef, key, staticDef[key]);
      } else {
        Object.defineProperty(classDef, key, {
          value : staticDef[key]
        });
      }
    }
    delete definition.static;
  }
  for(var key in definition) {
    if(typeof definition[key] === "object") {
      this.defProperty(classDef.prototype, key, definition[key]);
    } else {
      Object.defineProperty(classDef.prototype, key, { value : definition[key]});
    }
  }
  definition.static = staticDef[key];
  definition.constructor = constructor;
  if (document.readyState === "complete" || document.readyState === "interactive") {     
    // document is already ready to go
    customElements.define(customElementName,classDef);
  }
  else{
    Lyte.toBeRegistered.push({name:customElementName, def: classDef});
  }
  	Lyte.registeredCustomComponent[customElementName] = classDef;
}

function domContentLoaded1() {
  document.head.appendChild(Lyte.$.assetsDiv);
  let comp = Lyte.toBeRegistered;    
  if(comp.length){    
      for(let j=0; j<comp.length;j++){
          customElements.define(comp[j].name, comp[j].def);    
      }    
      Lyte.toBeRegistered = [];    
  }
}

if(document.readyState === "complete" || document.readyState === "interactive") {
    domContentLoaded1();
} else {
    document.addEventListener("DOMContentLoaded", function(e){
        domContentLoaded1();
    },true);
};(function(window) {
// For minification
var _Lyte = Lyte;
//security
_Lyte.Security = {
    "_ourSanitizerInstance_" :{},
    "_userSanitizerInstance_":{}, 
    "_eM" : {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
        '=': '&#x3D;'
      }, 
    "_eR" : /[&<>"'`=]/g,
    "_eF" : function(str) {
        return this._eM[str];
    }, 
    "escape" : function(string) {
        if (typeof string !== 'string') {
            string = '' + string;
        }
        return string.replace(this._eR, this._eF.bind(this));
    }
};
var sec = { "GLOBAL_TAGS": [], "GLOBAL_ATTRIBUTES": [],"FORBID_TAGS":[],"FORBID_ATTR":[] };
_Lyte.Security._ourSanitizerInstance_ = ZSEC.HTMLPurifier(sec);
_Lyte.Security._ourSanitizerInstance_._GLOBAL_TAGS = sec.GLOBAL_TAGS;
_Lyte.Security._ourSanitizerInstance_._GLOBAL_ATTRIBUTES = sec.GLOBAL_ATTRIBUTES;
sec.GLOBAL_ATTRIBUTES.push("yield-name","lt-prop-route", "lt-prop-dp", "lt-prop-fragment", "lt-prop-qp", "lt-prop", "lt-prop-class", "lt-prop-id", "lt-prop-rel", "lt-prop-title", "lt-prop-style", "lt-prop-target","lt-prop-td","lt-prop-custom","lt-prop-target","lt-prop-id","lt-prop-class","lt-prop-style","lt-prop-rel","lt-prop-title");
sec.GLOBAL_TAGS.push("link-to");
_Lyte.Security._ourSanitizerInstance_._FORBID_TAGS = sec.FORBID_TAGS;
_Lyte.Security._ourSanitizerInstance_._FORBID_ATTR = sec.FORBID_ATTR;
_Lyte.Security.createSanitizer = function (obb) {
  if (!obb.GLOBAL_ATTRIBUTES) {
		obb.GLOBAL_ATTRIBUTES = [];
	}
	if (!obb.FORBID_TAGS) {
		obb.FORBID_TAGS = [];
	}
	if (!obb.FORBID_ATTR) {
		obb.FORBID_ATTR = [];
	}
	if (!obb.GLOBAL_TAGS) {
		obb.GLOBAL_TAGS = [];
  }
  obb.GLOBAL_ATTRIBUTES.push("yield-name","lt-prop-route", "lt-prop-dp", "lt-prop-fragment", "lt-prop-qp", "lt-prop", "lt-prop-class", "lt-prop-id", "lt-prop-rel", "lt-prop-title", "lt-prop-style", "lt-prop-target","lt-prop-td","lt-prop-custom","lt-prop-target","lt-prop-id","lt-prop-class","lt-prop-style","lt-prop-rel","lt-prop-title");
  obb.GLOBAL_TAGS.push("link-to");
    var globalTagArr = Array.from(obb.GLOBAL_TAGS);
    var attr = [];
    for(var a=0; a<globalTagArr.length; a++){
      if(LyteComponent._registeredComponents[globalTagArr[a]]){
        attr = LyteComponent._registeredComponents[globalTagArr[a]].observedAttributes;
      }else if(Lyte.registeredCustomComponent[globalTagArr[a]]){
        attr = Lyte.registeredCustomComponent[globalTagArr[a]].observedAttributes;
      }
      for(var i=0; i<attr.length; i++){
        if(obb.GLOBAL_ATTRIBUTES.indexOf(attr[i]) == -1){
          obb.GLOBAL_ATTRIBUTES.push(attr[i]);
        }
      }
    }
	_Lyte.Security._userSanitizerInstance_ = ZSEC.HTMLPurifier(obb);
	_Lyte.Security._userSanitizerInstance_._GLOBAL_TAGS = obb.GLOBAL_TAGS;
	_Lyte.Security._userSanitizerInstance_._GLOBAL_ATTRIBUTES = obb.GLOBAL_ATTRIBUTES;
	_Lyte.Security._userSanitizerInstance_._FORBID_TAGS = obb.FORBID_TAGS;
	_Lyte.Security._userSanitizerInstance_._FORBID_ATTR = obb.FORBID_ATTR;
	return _Lyte.Security._userSanitizerInstance_;
};
//var toArrayLyte = "toArrayLyte";
//var bindStr = "_bindings";
//var compStr = "component";
//var forHelperStr = "_forHelpers";
//var dynamicNodesStr = "_dynamicNodes";
//var calleeStr = "_callee";
//var getAttributeStr = "getAttribute";
//var hasAttributeStr = "hasAttribute";
//var removeAttributeStr ="removeAttribute";
//var setAttributeStr = "setAttribute";
//var parentNodeStr = "parentNode";
//var nodeNameStr = "nodeName";
//var ownerElementStr = "ownerElement";
var globalDOMEvents = ["focus","focusin","focusout","resize","scroll","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","change","select","submit","keydown","keypress","keyup","contextmenu"];
var registerHelperStr = "registerHelper";
var delStr = "delete";

function defProp() {
	Object.defineProperty.apply(Object, arguments);
}

function makeSet(obj, key) {
	if(!obj[key]) {
		defProp(obj, key, {
			value : new Set(),
			enumerable : false,
			writable : true,
			configurable : true
		})
	}
}

function makeArray(obj, key) {
	if(!obj[key]) {
		defProp(obj, key, {
			value : [],
			enumerable : false,
			writable : true,
			configurable : true
		})
	}
}

function createDocFragment() {
	return document.createDocumentFragment();
}

function createElement(elm) {
	return document.createElement(elm);
}

function insertBefore(parent, newNode, refNode) {
	parent.insertBefore(newNode, refNode);
}

function deleteBindingCheckSize(obj, key, valToDelete) {
	obj[key][delStr](valToDelete);
	if(!obj[key].size) {
		delete obj[key];
	}
}
_Lyte.registerErrorCodes({
    "LC001" : "Error while parsing custom prop handler attribute {0}. Check if the value provided is a valid JSON",
    "LC002" : "{0} Component is not compiled. Please compile using Lyte CLI",
    "LC003" : "Helper named {0} is not defined",
    "LC004" : "Action named {0} doesn't exists",
    "LC005" : "Lyte.objectUtils doesn't support {0} function", 
    "LC006" : "Lyte.arrayUtils doesn't support {0} function", 
    "LC007" : "Component name not specified in Lyte.Component.render", 
    "LC008" : "Specified outlet {0} doesn't exists - Lyte.Component.render", 
    "LC009" : "Method named {0} doesn't exists in {1} component",
    "LC010" : "Parent Node / reference Node not provided for insertBefore method"
});

/*	IE Browser
	_Lyte._ie 
	Edge Browser
	_Lyte._ed 
	Replace with needed;
	_Lyte._rwpf 
	IE / Edge Browser
	_Lyte._ms
*/

let userAgent = navigator.userAgent;
//temporary fix for IE 11
if(userAgent.match(/rv:11/)) {
	_Lyte._ie = true;
    window.action = function() {
        return;
    }
}
if(userAgent.match('Edge')) {
    var s = createElement("div");
    s.innerHTML= "<template><div>c</div></template>";
    if(s.querySelector("template").childNodes.length) {
        _Lyte._ie = true;
    } else {
        _Lyte._ed = true;    
    }
    s.remove()
}

class Test extends HTMLElement {
    constructor() {
        super();
        if(!this.attributes.t) {
            _LC.frSpecial = true;
        }
    }
}

if(_Lyte._ie || _Lyte._ed) {
	var doc = createDocFragment();
	doc.appendChild(document.createTextNode("  dummy "));
	doc.childNodes[0].replaceWith(document.createTextNode("changed"));
	if(doc.childNodes[0].textContent !== "changed") {
		_Lyte._rwpf = true;
	}
	_Lyte._ms = true;
}

_Lyte.Component = {};

var _LyteComponent = _Lyte.Component;

_Lyte.arrayUtils =  function() {
	//arrayFunctions
    return _LC.aF.apply(_LC, arguments);
};
_Lyte.objectUtils =  function() {
	//objectFunctions
    return _LC.oF.apply(_LC, arguments);
}

_LyteComponent.register = function() {
    _LC.registerComponent.apply(_LC, arguments);
}

_LyteComponent.registerHelper = function() {
    _LC.registerHelper.apply(_LC, arguments);
}
_LyteComponent.set = function() {
    _LC.set.apply(_LC, arguments);
}
_LyteComponent.registeredHelpers = {};
_LyteComponent.registeredComponents = {};
function noop() {

}
_LyteComponent.registerCustomPropHandler = function(propName) {
    let dasherized = _LC.String.dasherize(propName);
    propName = _LC.String.toCamelCase(propName);
    if(_LC.customPropHandlers.indexOf(propName) === -1) {
        _LC.customPropHandlers.push(propName);
        customElementPrototype.prototype[propName] = function() {
            let argsLength = arguments.length;
            let arg0 = arguments[0];
            let compData = this.component.data;
            if(!arg0) {
                //Read all the values
                let obj = {};
                for(let key in compData) {
                    if(key.startsWith(propName)) {
                        let objKey = key.substring(propName.length);
                        objKey = _LC.String.lowerCaseFirstLetter(objKey);
                        obj[objKey] = compData[key];
                    }
                }
                return obj;
                
            } else if(typeof arg0 === "string") {
                if(argsLength > 1) {
                    //Set a value
                    this.set(propName+ _LC.String.upperCaseFirstLetter(arg0), arguments[1]);
                } else {
                    //Read a value
                    let actKey = propName + _LC.String.upperCaseFirstLetter(arg0);
                    return compData[actKey];
                }
            } else if(typeof arg0 === "object") {
                //Write a set of values
                for(let key in arg0) {
                    let objKey = propName + _LC.String.upperCaseFirstLetter(key);
                    this.set(objKey, arg0[key]);
                }
            }
        }
        _LC.customPropRegex = new RegExp("^(" + _LC.customPropHandlers.join("|")+ ")");
    }
}
_LyteComponent.unregisterComponent = function(componentName) {
    if(_LyteComponent.registeredComponents[componentName]) {
        var comp = _LC._registeredComponents[componentName];
        if(comp.activeInstances > 0) {
            _Lyte.warn("There are active instances of the component " + componentName + " and hence cannot be unregistered");
        } else {
            //Do the unregisteration here
            comp._properties = {};
            comp.component = comp._mixins = comp._actions = comp._template = comp._dynamicNodes = null;            
            comp._callBacks = {};
            comp._observers = [];
            comp._data = undefined;
            comp._methods = {};
            comp.prototype.get = noop;
            comp.prototype.set = noop;
            delete _LyteComponent.registeredComponents[componentName];
            var template = document.querySelector("template[tag-name="+componentName+ "]")
            if(template) {
                template.remove();
            }
            if(comp._depthTemp) {
                comp._depthTemp.remove();    
            }
        }
    } else {
        _Lyte.warn("Component "+ componentName + " not yet registered");
    }
}
    
var elementPrototype = typeof HTMLElement !== "undefined" ? HTMLElement : Element;

_Lyte.appendTemplateDiv = function() {
    document.body.appendChild(_LC.tDiv);
}

function onDomContentForLyte() {
    if(!_Lyte._ie){
    	document.body.appendChild(_LC.lyteComponentsDiv);
        //document.body.appendChild(_LC.tDiv);
    }
    document.body.appendChild(_LC.hDiv);
    let bodyEvents = globalDOMEvents;    
    for(let i=0; i<bodyEvents.length; i++){    
        var evnt = bodyEvents[i];    
        document.body.addEventListener(evnt,globalEventHandler, true);    
    }    
    let comp = _LC.toBeRegistered;    
    if(comp.length){    
        for(let j=0; j<comp.length;j++){
            customElements.define(comp[j].name, comp[j].def);    
        }    
        _LC.toBeRegistered = [];    
    }
    if(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        var style = createElement("style");
        style.innerHTML = "* { cursor : pointer}";
        document.head.appendChild(style);
    }
}

document.addEventListener("change", function(event) {
	var target = event.target || event.srcElement;
	if(!target._attributeDetails) {
		return;
	}
	var attributeName = "value";
	if(target.type === "checkbox" || target.type=== "radio") {
		attributeName = "checked";
	}
	let contextSwitchArray = [];
	var attrNode ;
	var attrDetail = target._attributeDetails[attributeName]
	if(!attrDetail || !attrDetail.isLbind) {
		return;
	}
	//attrNode = (attributeName === "checked") ? target._attributeDetails[attributeName].bindedNode : target.getAttributeNode(attributeName);
	var callee = target;
	if(!target._callee){
		while(callee && !_LC.isCustomElement(callee) && callee.tagName !== "LYTE-YIELD") {
			if(callee.tagName === "BODY") {
				callee = null;
				break;
			}
			callee = callee.parentNode;
		}
		if(callee && callee.tagName === "LYTE-YIELD"){
			target._callee = callee._registerYield._callee;
		} else {
			target._callee = callee;
		}
	}
	let self = target._callee;
	if(target) {
		_LC.adCx(target, contextSwitchArray);
	}
    let obj = _LC.getNew(self.component.data, attrDetail.dynamicValue);
    if(!obj.context){
        return;
    }
	_LC.set(obj.context, obj.lastKey, target[attributeName]);
	if(target) {
		_LC.rmCx(target, contextSwitchArray);
	}		
});
var globalEventHandler = function(ev){
	var evnt = ev.type;
    var target = ev.target,toRemove;
    if(ev.currentTarget !== document.body) {
        target = ev.currentTarget;
    }
	if(!window.event){
		toRemove = true;
		window.event = ev;
	}
    let eventStopped = false;
	while(target && target.getAttribute && (!target.getAttribute(evnt) || target.hasAttribute("disabled")) && target.tagName != "BODY"){
		if(_LC.hasLyteEvents(target, evnt)) {
            eventStopped = _LC.handleLyteEvents(target, ev);
            if(eventStopped) {
                break;
            }
        }
        target = target.parentNode;
	}
    if(eventStopped || !target) {
        return;
    }
 	var callee = target;
	if(!target._callee){
		while(callee && !_LC.isCustomElement(callee) && callee.tagName !== "LYTE-YIELD") {
			if(callee.tagName === "BODY") {
				callee = null;
				break;
			}
			callee = callee.parentNode;
		}
		if(callee && callee.tagName === "LYTE-YIELD"){
			target._callee = callee._registerYield._callee;
		} else {
			target._callee = callee === target ? undefined : callee;
		}
	}
	if(target._evBoundEvents && target._evBoundEvents[evnt]) {
        //Not needed - but check and remove
		let actions = target._callee? target._callee.constructor._actions : target.constructor._actions ;
        //let actions = target.constructor._actions;
		let actObj = target._evBoundEvents[evnt];
        let cloneActObj = _Lyte.deepCopyObject(actObj);
        _LC.skipArgProcessing(cloneActObj, ev, target);
		_LC.throwAction.call(target,target,evnt,cloneActObj, undefined, undefined, target, ev, undefined, true);
	} else if(target.getAttribute && target.getAttribute(evnt) && target._boundEvents && target._boundEvents[evnt]){
		let actions = target._callee.constructor._actions;
        let func = target.getAttribute(evnt).split(" => ")[1];
        let actObj = target._boundEvents[evnt];
		let cloneActObj = _Lyte.deepCopyObject(actObj);
		_LC.skipArgProcessing(cloneActObj, ev, target);
		_LC.throwAction.call(target._callee,target._callee,evnt,cloneActObj, undefined, undefined, target, ev);
	}
	if(target.tagName === "LABEL"){
		var input = target.querySelector("input");
		if(input && input.getAttribute(evnt)){
			let actions = target._callee.constructor._actions;
			let func = input.getAttribute(evnt).split(" => ")[1];
			//	let actObj = target._callee.constructor.getHelper(func);
            let actObj = target._boundEvents[evnt];
            let cloneActObj = _Lyte.deepCopyObject(actObj);
			_LC.skipArgProcessing(cloneActObj, ev, target);
			_LC.throwAction.call(target._callee,target._callee,evnt,cloneActObj, undefined, undefined, input,ev);
		}
	}
	if(toRemove){
		window.event = undefined;
	}
}

class LyteYield extends HTMLElement{
    connectedCallback() {
        this._callee = this._callee || _LC.getCallee(this.parentNode, this);
        if(!this._registerYield && this._callee) {
            var yieldName;
            if(this._callee._fR && this._callee._fR._yieldCallee) {
                this._registerYield = {"_callee" : this._callee._fR._yieldCallee.component.$node};
            } else if(this._callee._yields &&  (yieldName=this.attributes["yield-name"]) && (yieldName = yieldName.nodeValue) && this._callee._yields[yieldName]) {
                this._registerYield = {"_callee" : this._callee._yields[yieldName]._callee};
            }
        }
    }
	disconnectedCallback(){
		if(_LC.ignoreDisconnect || this._deleted) {
		    return;
        }
        this._deleted = true;
        if(!this._properties) {
            return;
        }
		var nodeContextSwitchArray = [];
		_LC.adCx(this, nodeContextSwitchArray);
		_LC.removeSelectedBindingDeep(this._properties, this.component.data);
		let node = this._registerYield;
		if(!node) {
		return;
		}
		var toAppendContextSwitchArray = [];
		//newContext not needed
        var del = "delete";//for ie 11.0
		_LC.adCx(node, toAppendContextSwitchArray);
		for(let key in this._dynamicProperty) {
			if(this._dynamicProperty[key].isActualNode) {
				this._dynamicProperty[key].isActualNode._helperNodes[del](this);
			}else {
                let helperNodes = node._callee.getProperty(key)._helperNodes;
				if(helperNodes) {
					helperNodes[del](this);
				}
			}
		}
        this._dynamicProperty = {};
		for(let i=0;i<this._helpers.length;i++) {
			node._callee.removeHelpers(this._helpers[i]);
		}
		this._helpers = [];
		_LC.rmCx(node, toAppendContextSwitchArray);
		_LC.rmCx(this, nodeContextSwitchArray);
        // var self = this;
        // setTimeout(function() {
        //     self._registerYield = null
        //     self._callee = null;
        // },0);
	}
	getProperty(key) {
        	let arr = key.split('.');
        	let property = this;
        	if(!property._properties[arr[0]]) {
            		property._properties[arr[0]] = {};
       	 	} 
       	 	property = property._properties[arr[0]];
        
        	defProp(property, '_path', {enumerable: false, value : arr[0]});
        	for(let i=1;i<arr.length;i++) {
            		if(!property[arr[i]]) {
                		property[arr[i]] = {};
                		defProp(property[arr[i]], '_path', {enumerable: false, value : property._path + "." + arr[i]});
           	 	}
            	property = property[arr[i]];
       	 	}
       		return property;
    	}
}

customElements.define("lyte-yield", LyteYield);

class customElementPrototype extends elementPrototype{
    constructor() {
        super();
        if(!_LyteComponent.registeredComponents[this.localName]) {
        	return;
        }
        this.constructor.activeInstances++; 
        let fastRenderIndex;
        let lytePropAttr = this.attributes._lyteprop;
        lytePropAttr = lytePropAttr ? lytePropAttr.nodeValue : undefined;
        let fastRenderedProp = (fastRenderIndex = lytePropAttr) ? _LC.fRP[fastRenderIndex] : undefined;
        let compInstance = this.component = fastRenderedProp ? fastRenderedProp.component : new this.constructor.component();
        this._properties = {};
        compInstance.methods = {};
//        this.component.data = this.constructor._data ? this.constructor._data() : {};
        let compData;
        //comment the following two when return cli update is done.
        if(!fastRenderedProp) {
            compData = compInstance.data = {};
            let data = this.constructor._data ? this.constructor._data() : {};
            var def = "default";
            for(let key in data) {
                compData[key] = data[key][def];
            }
            compData.errors = {};
            compInstance.__data = data;
            defProp(compData, '__component__', {
                value : this,
                configurable : true,
                writable: true,
                enumerable : false
            });
        }
        
        for(let key in this.constructor._methods) {
            compInstance.methods[key] = this.constructor._methods[key];
        }
        if(compInstance.$node) {
            for(var key in compInstance.$node) {
                this[key] = compInstance.$node[key];
            }
        }
        compInstance.$node = this;
        if(!fastRenderedProp) {
            this.callback("constructor");
            this._actions = this._actions ? this._actions : {};
            this._callee = this._callee || this.getCallee(this.parentNode);
            //checking lyte.attr ytpe and given default value type
            for (var key in compData) {
                var error = _LC.handleValidation(compData, key, compData[key], compInstance);
                if (error) {
                    compData[key] = undefined;
                }
            }
        } else {
            this._fR = fastRenderedProp;
            delete _LC.fRP[fastRenderIndex];
            // _LC.pushFrc(fastRenderIndex);
        }
    }
    getMethods(arg0) {
        return this.component.getMethods(arg0);
    }
    setMethods(arg0, arg1) {
        return this.component.setMethods(arg0, arg1);
    }
    getData(arg0) {
        return this.component.getData(arg0);
    }
    setData(arg0, arg1) {
        return this.component.setData(arg0, arg1);
    }
    getCallee(callee){
        return _LC.getCallee(callee, this);
    }
    afterConnected() {
        let constr = this.constructor;
        //initProperties is used because, we may have cases where the component wouldn't have been registered but 
        //it would be in dom already with some attributes. In those cases we can store the data in _initProperties as key, value.
        //These properties would then be applied to the component, once it gets instantiated. 
        
        //This is done, in order to solve when on a string value update of an if helper, the binding in the true or false case must be established. 
        //Without this, we won't establish the _properties in the component to the actual Data. 
        if(this.getAttribute("_lyteprop")) {
        	return "";
        }
        let obsattr = constr._observedAttributes;
        for(let i=0;i<obsattr.length;i++){
            let key = obsattr[i];
            let prop = this.getProperty(key);
            defProp(prop, '__fromComponent', {
            	value : true,
                enumerable : false
            });
        }
        this.getProperty("errors");
        let compInstance = this.component;
        let compData = compInstance.data;
        if(this._initProperties) {
            let initProperties = this._initProperties;
            for(let key in initProperties) {
                let actVal;
                if(compInstance.__data[key] && compInstance.__data[key].type !== _LC.getDataType(initProperties[key]) && (initProperties[key] !== undefined  || compInstance.__data[key].type === "boolean")) {
                    actVal = _LC.typeCast(initProperties[key], compInstance.__data[key].type);
                } else {
                     actVal = initProperties[key];
                }
                let error = _LC.handleValidation(compData, key, actVal, compInstance);
                if(!error) {
                    compData[key] = actVal;    
                }
            }
            this._initProperties = undefined;
        }
        if(this._initMethods) {
            let initMethods = this._initMethods;
            for(let key in initMethods) {
                compInstance.methods[key] = initMethods[key];
            }
            this._initMethods = undefined;
        }
        this.callback('init');
        this.onCallBack('init');
        this.registerYields();
        if(compData.lyteUnbound) {
        	_LC.unbound = true;
        }
        let content = "";
        let unboundBeta = compData.lyteFastRender;
        if(!unboundBeta) {
            content = this.renderNodes(constr._template, constr._dynamicNodes,undefined,undefined, undefined, undefined, this.constructor._tC);
        } else {
            content = this.renderFast(constr._dynamicNodes, constr._sta, compInstance);
            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    _LC.callCC();
                });
            });
        }
        return content;
    }

    renderComponent(dynNode, preDefObj) {
    	var componentName = dynNode.componentName;
    	var staticAttrs = dynNode.staticAttrs;
        var constr = LyteComponent._registeredComponents[componentName];
        if(!constr) {
          return "";
        }
    	var component =  new constr.component();
    	preDefObj.component = component;
    	component.data = {};
    	let data = constr._data ? constr._data() : {};
    	var def = "default";
    	for(let key in data) {
            component.data[key] = data[key][def];
        }
        component.data.errors = {};
        component.__data = data;
        // if(component.constructor) {
        // 	component.constructor.apply(component);
        // }
        var obsAttrs = LyteComponent._registeredComponents[componentName]._observedAttributes;
        preDefObj.data = preDefObj.data || {};
		for(var key in staticAttrs) {
			if(obsAttrs.indexOf(key) !== -1) {
				preDefObj.data[key] = staticAttrs[key];
			}
		}
		let initProperties = preDefObj.data;
        if(initProperties) {
            for(let key in initProperties) {
                let actVal;
                if(component.__data[key] && component.__data[key].type !== _LC.getDataType(initProperties[key]) && (initProperties[key] !== undefined  || component.__data[key].type === "boolean")) {
                    actVal = _LC.typeCast(initProperties[key], component.__data[key].type);
                } else {
                     actVal = initProperties[key];
                }
                let error = _LC.handleValidation(component.data, key, actVal, component);
                if(!error) {
                    component.data[key] = actVal;    
                }
            }
        }
        if(true) {
            component.methods = {};
			for(var key in constr._methods) {
			    component.methods[key] = constr._methods[key];
            }
            component.$node = {"querySelector" : noop, "localName" : componentName};
        	if(component.init) {
            	component.init.apply(component);
            }
            let initCallbacks;
            if(constr._callBacks && (initCallbacks = constr._callBacks.init)) {
			    for(let i=0;i<initCallbacks.length;i++) {
			        initCallbacks[i].value.apply(component);
			    }
			}
            preDefObj.unbound = true;
            delete component.$node.querySelector;
        	return this.renderFast(LyteComponent._registeredComponents[componentName]._dynamicNodes, LyteComponent._registeredComponents[componentName]._sta, component, preDefObj);
        }
		return "";
    }

    renderFast(dynamicNodes, arr, comp, compPreDef) {
        var fastRenderIndex;
        var prevComp;
        if(comp) {
            prevComp = this.component;
            this.component = comp;
        }
        var compData = this.component.data;
        var str = "";
        var dynamicCompile = arr;
        var dynamicCompileNodes = arr.cc;
        let removeFirstChar = false;
        for(var i=0;i<dynamicCompileNodes.length;i++) {
            if(dynamicCompileNodes[i] != undefined) {
                var inte = dynamicCompileNodes[i];
                var dynNode = dynamicNodes[inte];
                if(dynNode.dynamicValue) {
                    let locVal = _LC.getDD(compData, dynNode.newDynamicValue);
                    locVal = (locVal == undefined || locVal == null) ? "" : locVal; 
                    // str = str + ZSEC.Encoder.encodeForHTML(locVal);
                    str = str + Lyte.Security.escape(locVal);
                } else if(dynNode.helperInfo) {
                    _LC.ffr = true;
                      let helperVal = this.processHelper({name : dynNode.helperInfo.name, args : this.processArgs(this,dynNode, [], undefined, undefined, true)}, undefined);
                    _LC.ffr = false;
                     helperVal = (helperVal == undefined || helperVal == null) ? "" : helperVal;
                    //  str = str + ( (dynNode.helperInfo.name === "unescape") ? helperVal : ZSEC.Encoder.encodeForHTML(helperVal) );
                    str = str + ( (dynNode.helperInfo.name === "unescape") ? helperVal : Lyte.Security.escape(helperVal) );
                } else if(dynNode.type){
                    switch(dynNode.type) {
                        case "for" : {
                            let prevDynamic = dynamicNodes[inte-1].attr.items;
                            var items;
                            if(prevDynamic.dynamicValue) {      
                                items = _LC.getDD(compData, prevDynamic.newDynamicValue);
                            } else if(prevDynamic.helperInfo) {
                                items = this.processHelper({name : prevDynamic.helperInfo.name, args : this.processArgs(this,prevDynamic, [], undefined, undefined, true)}, undefined);
                            }
                            var itemKey = dynNode._args.item || "item";
                            var indexKey = dynNode._args.index || "index";
                            let renderedStr = "";
                            if(items && items.length) {
                                var initialItemValue = compData[itemKey];
                                var initialIndexValue = compData[indexKey];
                                for(var indexInd=0;indexInd<items.length;indexInd++) {
                                    let item = items[indexInd];
                                    compData[itemKey] = item;
                                    compData[indexKey] = indexInd;
                                    renderedStr += this.renderFast(dynNode.dynamicNodes, dynNode._sta, undefined, compPreDef);
                                }
                                compData[itemKey] = initialItemValue;
                                compData[indexKey] = initialIndexValue;
                            }
                            str += renderedStr;
                        }
                        break;
                        case "forIn" : {
                            let prevDynamic = dynamicNodes[inte-1].attr.object;
                            var object;
                            if(prevDynamic.dynamicValue) {
                                object = _LC.getDD(compData, prevDynamic.newDynamicValue);
                            } else if(prevDynamic.helperInfo) {
                                object = this.processHelper({name : prevDynamic.helperInfo.name, args : this.processArgs(this,prevDynamic, [], undefined, undefined, true)}, undefined);
                            }
                            var valueKey = dynNode._args.value || "value";
                            var keyKey = dynNode._args.key || "key";
                            let renderedStr = "";
                            let objKeys;
                            if(object && (objKeys = Object.keys(object))) {
                                var initialValueValue = compData[valueKey];
                                var initialKeyValue = compData[keyKey];
                                for(var keyIndex=0;keyIndex < objKeys.length;keyIndex++) {
                                    let key = objKeys[keyIndex];
                                    compData[valueKey] = object[key];
                                    compData[keyKey] = key;
                                    renderedStr += this.renderFast(dynNode.dynamicNodes, dynNode._sta, undefined, compPreDef);
                                }
                                compData[itemKey] = initialValueValue;
                                compData[indexKey] = initialKeyValue;
                            }
                            str += renderedStr;
                        }
                        break;
                        case "if" : 
                        case "switch" : {
                            let prevDynamic = dynamicNodes[inte-1].attr.value;
                            var value;
                            if(prevDynamic.dynamicValue) {
                                value = _LC.getDD(compData, prevDynamic.newDynamicValue);
                            } else if(prevDynamic.helperInfo) {
                                value = this.processHelper({name : prevDynamic.helperInfo.name, args : this.processArgs(this,prevDynamic, [], undefined, undefined, true)}, undefined);
                            }
                            var currentCaseName;
                            if(value) {
                                currentCaseName = dynNode.type === "if" ? "true" : value.toString();
                            } else {
                                if(dynNode.type=== "if")  {
                                    currentCaseName = "false";
                                } else {
                                    switch(value) {
                                    case undefined : 
                                        currentCaseName = "undefined";
                                        break;
                                    case null : 
                                        currentCaseName = "null";
                                        break;
                                    case false: 
                                        currentCaseName = "false";
                                        break;
                                    case "": 
                                        currentCaseName = '""';
                                        break;
                                    }
                                }
                            }
                            let scope = dynNode.cases[currentCaseName];
                            if(!scope) {
                                if((scope = dynNode.default) && scope._sta) {
                                    str += this.renderFast(scope.dynamicNodes, scope._sta, undefined, compPreDef);
                                }
                            } else {
                                while(scope) {
                                    str += this.renderFast(scope.dynamicNodes, scope._sta, undefined, compPreDef);
                                    if(scope.additional) {
                                        if(scope.additional.next) {
                                            scope = dynNode.cases[scope.additional.next];
                                        } else {
                                            scope = dynNode.default;
                                        }
                                        
                                    } else {
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                        case "attr" : {
                            let nextDynamic;
                            let fastRenderProp;
                            let dynLength = dynamicNodes.length;
                            for(let k=inte+1;k<dynLength;k++) {
                                let locDyn = dynamicNodes[k];
                                if(locDyn.type !== "registerYield" && locDyn.type !== "componentDynamic" && locDyn.type !== "insertYield" && locDyn.type !== "component") {
                                    break;
                                } else {
                                    if(dynamicNodes[k].type === "componentDynamic" || dynamicNodes[k].type === "insertYield" || dynamicNodes[k].type === "component") {
                                        if(dynamicNodes[k].position.toString() == dynamicNodes[inte].position.toString()) {
                                            if(dynamicNodes[k].type == "componentDynamic") {
                                                if(_LyteComponent.registeredComponents[dynamicNodes[k].componentName]) {
                                                    nextDynamic = dynamicNodes[k];
                                                    break;
                                                }
                                            } else {
                                                nextDynamic = dynamicNodes[k];
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            let setAttr;
                            if(nextDynamic) {
                                setAttr = nextDynamic.type !== "component";
                                fastRenderIndex = _LC.fRC++;
                                fastRenderProp = _LC.fRP[fastRenderIndex] = {"data" : {}};
                            }
                            if(!nextDynamic || nextDynamic.type !== "component") {
                                str = str.substring(0, str.length - 11);
                            }
                            let attr = dynNode.attr;
                            let actionObj = {};
                            for(var key in attr) {
                                if(attr[key].dynamicValue) {
                                    // let nodeValue = this.get(attr[key].dynamicValue);
                                    let nodeValue = attr[key].newDynamicValue ? _LC.getDD(compData, attr[key].newDynamicValue) : this.get(attr[key].dynamicValue);
                                    
                                    if(fastRenderProp) {
                                        fastRenderProp.data[attr[key].camelCase] = nodeValue;
                                        if(typeof nodeValue == "string" && setAttr) {
                                            nodeValue = this.formatValue(key, nodeValue);
                                            str = str + nodeValue + " ";
                                        }
                                    } else {
                                        nodeValue = this.formatValue(key, nodeValue);
                                        str = str + nodeValue + " ";
                                    }
                                } else if(attr[key].helperInfo) {
                                    if(attr[key].helperInfo.name === "action") {
                                        let actionName = attr[key].helperInfo.args[0];
                                        let boundName;
                                        if(actionName.startsWith('"') || actionName.startsWith("'")) {
                                            boundName = actionName.substring(1, actionName.length - 1);
                                        } else {
                                            _Lyte.warn("Deprecation warning. Action name " + actionName + " must be in quotes");
                                            boundName = actionName;
                                        }
                                        let actArgs = this.processArgs(this, attr[key], [], "__lyteEvent__", "__lyteNode__");
                                        let actualAttrName = attr[key].globalEvent ? attr[key].name : (attr[key].name.indexOf("-") !== -1)? attr[key].name : attr[key].name.substr(2);
                                        actionObj[actualAttrName] = {"name" : boundName, "args" : attr[key].helperInfo.args, "actArgs" : actArgs, "globalEvent" : attr[key].globalEvent ? true : false, "skipArgProcessing" : true};
                                    }  else if (attr[key].helperInfo.name === "method") {
                                        var methodsObj = compPreDef ? compPreDef.methods : this.component.methods; 
                                        if(fastRenderProp) {
                                            let methods = fastRenderProp.methods = fastRenderProp.methods || {};
                                            let parentComp = compPreDef ? compPreDef.component : this.component;
                                            let actArgs = this.processArgs(this, attr[key], [], "__lyteEvent__", "__lyteNode__");
                                            var methodFunc = function() { //eslint-disable-line no-loop-func
                                                let node = this.$node;
                                                let args = actArgs.slice(1);
                                                let functionName = actArgs[0];
                                                let customArgs = Array.from(arguments);
                                                let mainArgs = args.concat(customArgs);
                                                return parentComp.methods[functionName].apply(parentComp, mainArgs);
                                            }
                                            methods[attr[key].camelCase] = methodFunc;
                                        }
                                    } else {
                                        let nodeValue = this.processHelper({name : attr[key].helperInfo.name, args : this.processArgs(this,attr[key], [], undefined, undefined, true)}, undefined);
                                        if(fastRenderProp) {
                                            fastRenderProp.data[attr[key].camelCase] = nodeValue;
                                            if(typeof nodeValue == "string" && setAttr) {
                                                nodeValue = this.formatValue(key, nodeValue);
                                                str = str + nodeValue + " ";
                                            }
                                        } else {
                                            nodeValue = this.formatValue(key , nodeValue);
                                            str = str + nodeValue + " ";                                        
                                        }
                                    }
                                }
                            }
                            if(Object.keys(actionObj).length) {
                                let locIndex = _LC.fRC++;
                                str = str + "lyteaction=" + locIndex + " ";
                                _LC.fRP[locIndex] = actionObj;
                                actionObj.componentName = this.component.$node.localName || "undefined";
                                //str = str + "lyteaction=" + ZSEC.Encoder.encodeForHTMLAttribute(JSON.stringify(actionObj)) + " ";
                            }
                            if(fastRenderProp && nextDynamic.type !== "component" && nextDynamic.type !== "insertYield") {
                                str = str + "_lyteprop=" + fastRenderIndex + " ";
                            }
                            if(!dynNode.attrHandling) {
                                dynamicCompile[i+1] = dynamicCompile[i+1].substr(1);
                                dynNode.attrHandling = true;
                            }
                        }
                        break;
                        case "insertYield" : {
                            let preDefObj = fastRenderIndex !== undefined ? _LC.fRP[fastRenderIndex] : undefined;
                            if(preDefObj) {
                                delete _LC.fRP[fastRenderIndex];
                                // _LC.pushFrc(fastRenderIndex);
                            }
                            fastRenderIndex = undefined;
                            let yieldObj;
                            let yieldName = dynNode.yieldName || preDefObj.data.yieldName;
                            if(preDefObj) {
                                delete preDefObj.data.yieldName;
                            }
                            let yieldCallee;
                            if(!compPreDef || !compPreDef.yields) {
                                yieldObj = this._yields[yieldName];
                                if(yieldObj) {
                                    yieldCallee = yieldObj._callee;
                                } else {
                                    break;
                                }
                            } else {
                                yieldObj = compPreDef.yields[yieldName];
                                yieldCallee = compPreDef._yieldCallee;
                            }
                            if(yieldObj) {
                                let parentScope;
                                let locComp;
                                if(yieldCallee instanceof HTMLElement) {
                                    parentScope = yieldCallee;
                                } else {
                                    parentScope = this;
                                    locComp = this.component;
                                    this.component = yieldCallee.component;
                                }
                                let contextSwitch = {};
                                let contextSwitchArray = [];
                                if(yieldObj._cx) {
                                    _LC.adCx(yieldObj, contextSwitchArray);
                                }
                                if(preDefObj) {
                                    for(var key in preDefObj.data) {
                                        contextSwitch[key] = parentScope.component.data[key];
                                        parentScope.component.data[key] = preDefObj.data[key];
                                    }
                                }
                                str = str + parentScope.renderFast(yieldObj.dynamicNodes || yieldObj._dynamicNodes, yieldObj._sta, parentScope.component, yieldCallee);
                                for(let key in contextSwitch) {
                                    parentScope.component.data[key] = contextSwitch[key];
                                }
                                if(yieldObj._cx) {
                                    _LC.rmCx(yieldObj, contextSwitchArray); 
                                }
                                if(locComp) {
                                    parentScope.component = locComp;
                                }
                            }
                            //str = str + this.renderComponent(dynNode, preDefObj, compData);
                        }
                        break;
                        case "component" : {
                            if(fastRenderIndex !== undefined) {
                                let preDefObj = _LC.fRP[fastRenderIndex];
                                let componentName = preDefObj.data.componentName;
                                if(componentName) {
                                    if(_LyteComponent.registeredComponents[componentName]) {
                                        str = str + "<" + componentName + " _lyteprop="+ fastRenderIndex+">";
                                        fastRenderIndex = undefined;
                                        str = str + this.renderComponent({"componentName" : componentName}, preDefObj, compData);
                                        str = str + "</" + componentName + ">";
                                    } else {
                                        str = str + "component not registered";
                                        // Handle case where component has not been registered yet. 
                                    }   
                                }
                            }
                        }
                        break;
                        case "componentDynamic" : {
                            let preDefObj = fastRenderIndex !== undefined ? _LC.fRP[fastRenderIndex] : {};
                            fastRenderIndex = undefined;
                            str = str + this.renderComponent(dynNode, preDefObj, compData);
                        }
                        break;
                        case "registerYield" : {
                            let preDefObj;
                            if(fastRenderIndex !== undefined) {
                                preDefObj = _LC.fRP[fastRenderIndex];
                            } else {
                                fastRenderIndex = _LC.fRC++;
                                preDefObj = _LC.fRP[fastRenderIndex] = {};
                            }
                            preDefObj.yields = preDefObj.yields || {};
                            preDefObj.yields[dynNode._args["yield-name"]] = dynNode;
                            if(!preDefObj._yieldCallee) {
                                preDefObj._yieldCallee = compPreDef ? compPreDef : {"component" : this.component};
                            }
                        }
                    }
                } else {
                    str = str + dynamicCompile[i];
                }
            } else {
                str = str + dynamicCompile[i];
            }
        }
        if(comp) {
            this.component = prevComp;
        }
        return str;
    }
    
    formatValue(key, nodeValue) {
        let type = typeof nodeValue;
        if(nodeValue === "") {
            type = "undefined";
        }
        let retVal;
        let isSpecialAttr = (key == "src") || (key == "href");
        switch(type) {
        case "boolean" : 
            return nodeValue ? key : "";
        case "object" : 
            retVal = ((typeof Record != "undefined" && nodeValue instanceof Record) ? JSON.stringify(nodeValue.$.toJSON()) : JSON.stringify(nodeValue));
            // return key + "=" + (isSpecialAttr ? retVal : ZSEC.Encoder.encodeForHTMLAttribute(retVal));
            return key + "=\"" + (isSpecialAttr ? retVal : Lyte.Security.escape(retVal)) + "\"";
        case "undefined" : 
            return key
        default : 
            {
                // return key + "=" + (isSpecialAttr ? nodeValue : ZSEC.Encoder.encodeForHTMLAttribute(nodeValue) );
                return key + "=\"" + (isSpecialAttr ? nodeValue : Lyte.Security.escape(nodeValue) ) + "\"";
            }
        }
    }

    

    //RN
    renderNodes(toAppend, dynamicNodes, helperNode, options, establishBindings, returnVal, templateContent) {
        options = options || {};
        let content;
        let constr = this.constructor;
        /*if(_Lyte._ie){
            let newFrag = toAppend.cloneNode(true, "lyte");
            this.constructor.splitTextNodes(newFrag);
            content = newFrag;
        }
        else{
            content = toAppend.cloneNode(true, "lyte");
        }*/
        let templateDepthHandlingNeeded = false;
        if (_Lyte._ms || !toAppend) {
            templateDepthHandlingNeeded = true;
            content = _LC.getContentForIE(templateContent , constr);
        } else if(toAppend.hasAttribute("depth")) {
        	templateDepthHandlingNeeded = true;
        	content = _LC.getContentForIE(toAppend , constr);
        } else {
            content = toAppend.content.cloneNode(true, "lyte");
        }
        let updateHelpers = [],processLast = [],helperFunc,stoppedNode;
        for(let i=0;i<dynamicNodes.length;i++) {
            let info = dynamicNodes[i], type = info.type, pos = info.position, dynamicN = content, helperInfo;
            dynamicN = getDynamicNode(dynamicN,pos);
            if(type ===  "componentDynamic") {
            	if(options.node) {
            		dynamicN._cx = options;
            	} else if(helperNode) {
            		dynamicN._cx	= helperNode._cx;
            	}
            } 
            else if(type === "text"){
                 this.bindNode(dynamicN, undefined, helperNode, options, dynamicNodes[i], processLast, establishBindings);
            }
            else if(type === "attr"){
            	dynamicN._attributeDetails = info.attr;            	
                if(dynamicN.nodeName === "LYTE-YIELD") {
                    dynamicN._callee = this;
                    dynamicN.component = {}
                    dynamicN.component.data = {};
                    defProp(dynamicN.component.data, "__component__", {
                    	value : dynamicN,
                    	configurable : true,
                    	writable : true,
                        enumerable : false
                    });
                    dynamicN._properties = {};
                    for(let j=0;j<dynamicN.attributes.length;j++) {
                        let attr = dynamicN.attributes[j];
                        if(attr.nodeName !== "is" && attr.nodeName !== "yield-name") {
                            dynamicN._properties[_LC.String.toCamelCase(attr.nodeName)] = {};
                        }
                    }
                }
                let toBeRemoved = [];
				for(let key in info.attr) {
                	let attr = info.attr[key];
                	attr._depthTemp = info._depthTemp;
                	let attrName = key;
                    if(attr && (attr.dynamicValue || attr.helperInfo)) {
                        if(options.node) {
                                dynamicN._cx = options;
                        }
                        else if(helperNode) {
                            dynamicN._cx = helperNode._cx;
                        }
                        let actionName, boundName;
                        if(attr.helperInfo && attr.helperInfo.name === "action") {
                            dynamicN._boundEvents = dynamicN._boundEvents || {};
                            actionName = attr.helperInfo.args[0];
                            if(actionName.startsWith('"') || actionName.startsWith("'")) {
                                boundName = actionName.substring(1, actionName.length - 1);
                            } else {
                                // _Lyte.warn("Deprecation warning. Action name " + actionName + " must be in quotes");
                                boundName = actionName;
                            }
                            let actualAttrName = attr.globalEvent ? attrName : (attrName.indexOf("-") !== -1)? attrName : attrName.substr(2);
                            dynamicN._boundEvents[actualAttrName] = {"name" : boundName, "args" : attr.helperInfo.args};

                        }            
			            if(!attr.globalEvent) {
                            /*this.bindNode(dynamicN.getAttributeNode(attrName), toBeRemoved, helperNode, options, attr, undefined, establishBindings);
                             */
                            if(!dynamicN.hasAttribute(attrName)) {
                                dynamicN.setAttribute(attrName, "{{dummy}}");
                            }
                        	var node = this.bindNode(dynamicN.attributes.getNamedItem(attrName), toBeRemoved, helperNode, options, attr, undefined, establishBindings);
                            if(node !== dynamicN.attributes.getNamedItem(attrName)) {
                            	dynamicN._removedAttributes = dynamicN._removedAttributes || {};
                            	dynamicN._removedAttributes[attrName] = node;
                            }
                        }
                    }
                }
                //Added now
                if(info.attr && Object.keys(info.attr).length) {
                	dynamicN._callee = this;
                }
                for(let d=0;d<toBeRemoved.length;d++) {
                    dynamicN.removeAttribute(toBeRemoved[d]);
                }
            }
            else if(/^(for|forIn|component)$/.test(type)){
            	if(options.node) {
            		dynamicN._cx = options;
            	} else if(helperNode) {
            		dynamicN._cx	= helperNode._cx;
            	}
                dynamicN._dynamicNodes = info.dynamicNodes;
                if(_Lyte._ms) {
                    dynamicN._tC = info.templateContent;  
                }
                if(info.actualTemplate) {
                    dynamicN._tC = info.actualTemplate;
                }
                let returnVal;
                switch(type) {
                case "for" : 
                	returnVal = this.updateForHelper(dynamicN,{"type" : "default"} , options.node? options : undefined, establishBindings, info._sta);
                	break;
                case "forIn" : 
                	returnVal = this.updateForInHelper(dynamicN,{"type" : "default"} , options.node? options : undefined, establishBindings);
                	break;
                case "component" : 
                	returnVal = this.updateDynamicComponent(dynamicN, false, options.node ? options : undefined, establishBindings);
                }
                if(returnVal) {
                	updateHelpers.push(returnVal);
                }
            }
            else if(/^(if|switch)$/.test(type)){
                var def ="default";
                dynamicN._cases = info.cases; 
                dynamicN._default = info[def];
                if(options.node) {
            		dynamicN._cx = options;
            	} else if(helperNode) {
            		dynamicN._cx	= helperNode._cx;
            	}
                if(info.actualTemplate) {
                    dynamicN._tC = info.actualTemplate;
                    if(!dynamicN._origTemplate) {
                    	if(_Lyte._ie) {
                    		dynamicN._origTemplate = createElement("template")
                    	} else {
        	            	dynamicN._origTemplate = info._depthTemp.cloneNode(true);
                    	}
                    	if(dynamicN.hasAttribute("value")) {
                    		dynamicN._origTemplate.setAttribute("value", dynamicN.getAttribute("value"));
                    	}
                    }
                }
                let returnVal = this.updateSwitchHelper(type, dynamicN, options.node ? options : undefined, undefined, establishBindings);
                if(returnVal) {
                	updateHelpers.push(returnVal);
                	let isBreak = returnVal.toAppendMain.querySelector("template[is=break]");
                	if(isBreak) {
                		dynamicN._isStopped = "break";
                		content = constr.getTrimmedContent(content, info.position,undefined);
                		stoppedNode = info.position;
                		break;
                	}
                	let isContinue = returnVal.toAppendMain.querySelector("template[is=continue]");
                	if(isContinue) {
                		dynamicN._isStopped = "continue";
                		content = constr.getTrimmedContent(content, info.position,undefined);
//                		stoppedNode = info.position;
                		break;
                	}
                }
            } else if(type === "registerYield") {
                dynamicN._dynamicNodes = info.dynamicNodes;
                dynamicN._sta = info._sta;
                if(_Lyte._ms) {
                    dynamicN._tC = info.templateContent;  
                }
//                updateHelpers.push(dynamicN);
                if(options.node) {
                    dynamicN._cx = options;
                }
                else if(helperNode) {
                    dynamicN._cx = helperNode._cx;
                }
                //Added now                
                dynamicN._callee = this;
            } else if(type === "insertYield") {
            	if(options.node) {
            		dynamicN._cx = options;
            	} else if(helperNode) {
            		dynamicN._cx	= helperNode._cx;
            	}
                dynamicN.component = dynamicN.component || {"data" : {}};
                dynamicN._properties = dynamicN._properties || {};
                this.updateYield(dynamicN, false, options.node? options : undefined);
            }
        }
        for(let i=0;i<processLast.length;i++) {
             let dynamicPosition = processLast[i].dynamicPositions;
                 let processNode = dynamicPosition.initialNode;
                 let nodeValue = dynamicPosition.dynamicNodeValue;
                 let childLen = nodeValue.childNodes.length;
                 if(!childLen) {
                    nodeValue.appendChild(document.createTextNode(""));
                        childLen = 1;
                 }
                 let startingNode = nodeValue.childNodes[0];
                 if(_Lyte._rwpf && processNode.parentNode.nodeName === "#document-fragment") {
                 	while(nodeValue.childNodes.length) {
                 		insertBefore(processNode.parentNode, nodeValue.childNodes[0], processNode);
                    }
                 	processNode.remove();
                 } else {
                	 processNode.replaceWith.apply(processNode,nodeValue.childNodes);
                 }
                 processLast[i].dynamicPositions = {startingNode : startingNode, length: childLen}
        }
        if(stoppedNode) {
        	returnVal = returnVal || {};
        	returnVal.stop = true;
        }
        if(helperNode) {
            if(options.type) {
                helperNode._helpers[options.itemIndex] = updateHelpers;
                if(templateDepthHandlingNeeded) {
                    content = constr.createDocFragment1(content);  
                }
                return content;
            } else {
                helperNode._helpers = helperNode._helpers || [];
                helperNode._helpers.push.apply(helperNode._helpers, updateHelpers);
                if(templateDepthHandlingNeeded) {
                    content = constr.createDocFragment1(content);  
                }
                return content;
            }
        }
        this.executeBlockHelpers(updateHelpers);
        if(templateDepthHandlingNeeded) {
            content = constr.createDocFragment1(content);  
        }
        return content;
    }

    executeBlockHelpers(updateHelpers, node) {
	    for(let i=0;i<updateHelpers.length;i++) {
            var lastNode = updateHelpers[i].lastNode;
            var parentNode = lastNode.parentNode; 
                
            if(lastNode._placeHolder) {
                lastNode = lastNode._placeHolder;
                parentNode = lastNode.parentNode;
            }
            //parentNode = updateHelpers[i].lastNode.parentNode || updateHelpers[i].lastNode._placeHolder.parentNode;
            insertBefore(parentNode, updateHelpers[i].toAppendMain, lastNode);
            updateHelpers[i] = updateHelpers[i].lastNode;
	    		// updateHelpers[i].lastNode.parentNode.insertBefore(updateHelpers[i].toAppendMain, updateHelpers[i].lastNode);
	    		// updateHelpers[i] = updateHelpers[i].lastNode;
	    		//updateHelpers[i]._parentIf = node;
//	    		if(!updateHelpers[i]._cx && node) {
//	    			updateHelpers[i]._cx = node._cx;
//	    		}
	    }	
    }
    
    updateBlockHelpers(updateHelpers,contextSwitchInfo){
        for(let i=0;i<updateHelpers.length;i++) {
            switch(updateHelpers[i].getAttribute('is')) {
            case "for" :
                this.updateForHelper(updateHelpers[i], {"type" : "default"},contextSwitchInfo);
                break;
            case "if" : 
                this.updateSwitchHelper("if",updateHelpers[i],contextSwitchInfo);
                break;
            case "forIn" : 
                this.updateForInHelper(updateHelpers[i] , {"type" : "default"},contextSwitchInfo);
                break;
            case "switch" :
                this.updateSwitchHelper("switch",updateHelpers[i],contextSwitchInfo);
                break;
            case "component" : 
                this.updateDynamicComponent(updateHelpers[i], false, contextSwitchInfo);
                break;
            case "insertYield" : 
//              this.updateYield(updateHelpers[i], false, contextSwitchInfo);
                break;
            case "yield" : 
            case "registerYield" : 
                if(contextSwitchInfo) {
                    updateHelpers[i]._cx = contextSwitchInfo;
                }
                break;
            default: 
                if(updateHelpers[i].tagName === "LYTE-YIELD") {
                    this.updateYield(updateHelpers[i], false, contextSwitchInfo);
                }
                
            }
         }
    }
    //AttributeChangedCallback will be called for the attributes mentioned in the this._observedAttributes array. 
    static get observedAttributes() {
    		let newArr = [];
            for(let i=0;i<this._observedAttributes.length;i++) {
                newArr[i] = _LC.String.dasherize(this._observedAttributes[i]);
            }

            _LC.customPropHandlers.forEach(function(item,index) {
                newArr.push(_LC.String.dasherize(item));
            })
            return newArr;	
    }
    
    //Callback from browser, whenever any of the observed attribute changes. 
    //We call the component set, in order to affect the related changes. 
    attributeChangedCallback(attr, oldValue, newValue) {
        let constr = this.constructor;
       	if((constr._observedMethodAttributes && constr._observedMethodAttributes[attr]) || this.__lyteIgnore) {
   		 	return;
    	}
        let actualAttr = _LC.String.toCamelCase(attr);
        let isCustomProp = _LC.customPropHandlers.indexOf(actualAttr);
        if(isCustomProp !== -1) {
            let propValue = _LC.customPropHandlers[isCustomProp];
            let lyteProps = newValue;
            if(lyteProps) {
                try{
                    lyteProps = JSON.parse(lyteProps);
                    for(let key in lyteProps) {
                        let actKey = propValue + _LC.String.upperCaseFirstLetter(key);
                        this.set(actKey, lyteProps[key]);
                    }
                } catch (e) {
                    _Lyte.error("LC001", attr);
                }
            }
            return;
        }
        if(oldValue === newValue) {
            return;
        }
        var attrNode = this.attributes.getNamedItem(attr);
        if(attrNode) {
            if(attrNode.__lyteIgnore) {
                this.attributes.getNamedItem(attr).__lyteIgnore = false;
                return;    
            }
        } else if(this["__"+attr]) {
            this["__"+attr] = false;
            return;
        }
        let compInstance = this.component;
        let dataType = compInstance.__data[actualAttr].type;
        if(dataType !== "string") {
        	let obj = {"attr" : attr, "tagName" : this.tagName};
        	newValue = _LC.typeCast(newValue, dataType, obj);
        	if(obj.isError) {
        		_Lyte.warn("data type of the value provided for attribute "+attr+ " of " + this.tagName + " is not valid");
        		return;
        	}
        }
        let compData = compInstance.data;
        if(compData[actualAttr] !== newValue) {
            // Null check is done because when we do a removeAttribute directly on a component, the corresponding value expected is that of undefined and not null.
            this.set(actualAttr, newValue === null ? undefined: newValue);
        } else {
            _LC.clearError(compData, actualAttr);
        }
    }
    
    //Used to remove helpers of specific index in a for helper. 
    removeHelpersSpecificIndex(node, index) {
        if(node._helpers[index]) {
            for(let j=0;j<node._helpers[index].length;j++) {
                    this.removeHelpers(node._helpers[index][j]);
            }
        }
        if(node._forContent[index]) {
            for(let i=0;i<node._forContent[index].length; i++ ) {
                node._forContent[index][i].remove();
            }
            var self = this;
            Object.keys(node._items[index]._dynamicProperty).forEach(function(key) {
                node._dynProps[key]--;  
                if(!node._dynProps[key]) {
                    let prop  = self.getProperty(key);
                    if(prop._helperNodes) {
                        prop._helperNodes[delStr](node);
                    }
                }
            });
            node._items[index] = {"_dynamicProperty" : {}, "itemProperty" : {}, "indexProperty": {}};
        }
    }
    //Used to remove all the helpers within an helper. 
    removeHelpers(node, update, direct) {
        if(!direct) {
            node.remove();
            var helpersArr = node.getAttribute("is") === "component" ? this.__dc : this.__h;
            var indexOf = helpersArr.indexOf(node);
            if(indexOf != -1) {
            	helpersArr.splice(indexOf, 1);
            }    
        }
        
        var del = "delete";
        let parent;
        var contextSwitchArray = [];
        _LC.adCx(node, contextSwitchArray);
        if(node._forContent) {
            if(node.getAttribute("is") === "for") {
        	if(node._helpers) {
                for(let i=0;i<node._helpers.length;i++) {
                    for(let j=0;j<node._helpers[i].length;j++) {
                            this.removeHelpers(node._helpers[i][j]);
                    }
                    node._helpers[i] = [];
                }
            }
            for(let s=0;s<node._forContent.length;s++) {
                for(let i=0;i<node._forContent[s].length; i++ ) {
                    node._forContent[s][i].remove();
                }
            }
            let key = node.getAttribute("item");
            if(node._items.length) {
                let prop = node._items[0].itemProperty;
                for(let i=0;i<node._items.length;i++) {
                    let dynProp = node._items[i]._dynamicProperty;
                    for(let dP in dynProp) {
                        let property = this.getProperty(dP); 
                        if(property._helperNodes){
                            property._helperNodes[del](node);                    
                        }
                    }    
                }
                if(prop) {
                    for(let i=0;i<node._items.length;i++) {
                        this.removeBindings({[key] : node._items[i].itemProperty}, {[key] : node._attributes.items[i]});
                    }
                }
            }
            if(!update) {
            	if(node._actualBinding) {
            		if(node._attributes.items && node._attributes.items._bindings && node._actualBinding._createdBinding) {
                        node._attributes.items._bindings[del](node._actualBinding);
                    } 
                    if(node._actualBinding._forHelpers) {
                        node._actualBinding._forHelpers[del](node);
                    }
                    if(node._removedAttributes && node._removedAttributes.items && !node._removedAttributes.items.helperValue && node._removedAttributes.items._multipleProperty) {
                    	node._removedAttributes.items._multipleProperty[0].actProp._forHelpers[del](node);
                    }
            	}
            }
            node._items = [];
        } else {
        	if(node._helpers) {
                let keys = Object.keys(node._helpers);
                for(let i=0;i<keys.length;i++) {
                    for(let j=0;j<node._helpers[keys[i]].length;j++) {
                        this.removeHelpers(node._helpers[keys[i]][j]);
                    }
                    node._helpers[keys[i]] = [];
                }
            }
            for(var ind in node._forContent) {
                for(let i=0;i<node._forContent[ind].length; i++ ) {
                    node._forContent[ind][i].remove();
                }
            }
            let items = node._items;
            let key = node.getAttribute("key");
            for(let index in items){
                let item = items[index];
                let prop = item.itemProperty;
                let dynamicProp = item._dynamicProperty;
                for(let dP in dynamicProp) {
                    let property = this.getProperty(dP); 
                    if(property._helperNodes){
                        property._helperNodes[del](node);                    
                    }
                }
                if(prop) {
                    this.removeBindings({[key] : node._items[index].itemProperty}, {[key] : node._attributes.object[index]});
                }

            }
            if(!update) {
                if(node._actualBinding) {
                    if(node._attributes.object && node._attributes.object._bindings && node._actualBinding._createdBinding) {
                        node._attributes.object._bindings[del](node._actualBinding);
                    } 
                    if(node._actualBinding._forHelpers) {
                        node._actualBinding._forHelpers[del](node);
                    }
                }
                if(node._removedAttributes.items && !node._removedAttributes.items.helperValue && node._removedAttributes.items._multipleProperty) {
                	node._removedAttributes.items._multipleProperty[0].actProp._forHelpers[del](node);
                }
                if(node._propBindingObject && node._attributes.object && node._attributes.object._bindings) {
                    node._attributes.object._bindings[del](node._propBindingObject);
                }
            }
            node._items= {};
          }
        } else if(node._caseContent || node._yieldContent) {
        	if(node._helpers) {
                for(let j=0;j<node._helpers.length;j++) {
                    this.removeHelpers(node._helpers[j]);
                }
                node._helpers = [];
            }
        	if(node._caseContent){
                for(let i=0;i<node._caseContent.length; i++ ) {
                    node._caseContent[i].remove();
                }
                for(let key in node._dynamicProperty) {
                    if(node._dynamicProperty[key].isActualNode) {
                        node._dynamicProperty[key].isActualNode._helperNodes[del](node);
                    }else {
                        let helperNodes = this.getProperty(key)._helperNodes;
                        if(helperNodes) {
                            helperNodes[del](node);
                        }
                    }
                }
                node._dynamicProperty = {};
                //node._parentIf = null;
            } else {
                for(let i=0;i<node._yieldContent.length; i++ ) {
                    node._yieldContent[i].remove();
                }
                node._dynamicProperty = {};
            }
        } else if(node._renderedComponent) {
            for(let key in node._renderedComponent) {
                if(node._renderedComponent[key]) {
                    node._renderedComponent[key].remove();
                    node._renderedComponent[key] = null;
                }
            }
        }
          _LC.rmCx(node, contextSwitchArray);
    }
    
    updateYield(node, update, contextSwitchInfo) {
        let constr = this.constructor;
        if(!node._callee) {
            node._callee = this;
        }        
        let toAppend = node._callee._yields[node.getAttribute("yield-name")];
        if(!toAppend) {
        	return;
        }
        node._registerYield = toAppend;
        //ADded now
        let parentScope = toAppend._callee || node._callee._callee;
        if(!parentScope) {
            if(_Lyte._ms) {
                var div = createElement("div");
                div.innerHTML = toAppend.outerHTML;
                if(_Lyte._ie){
                    div.firstChild.innerHTML = toAppend.innerHTML;
                 }
                var content1 = div.childNodes[0];
                constr.splitTextNodes(content1);
                content1 = constr.createDocFragment1(content1);
                node.appendChild(content1);
            } else {
                node.appendChild(toAppend.content.cloneNode(true, "lyte"));    
            }
            
            node._helpers = [];
            return;
        }    
	    if(!toAppend._callee) {
    		toAppend._callee = parentScope;
    	} 
        node._dynamicProperty = node._dynamicProperty || {};
        //set values from child component. 
        let obj = {},contextSwitchingArray = {},self = this,contextSwitchArray = [];
        _LC.adCx(toAppend, contextSwitchArray);
        Object.keys(node._properties).forEach(function(key) {
            contextSwitchingArray[key] = {};
            contextSwitchingArray[key].value = parentScope.component.data[key];
            contextSwitchingArray[key].property = parentScope._properties[key];
            parentScope._properties[key] = node._properties[key];
            parentScope.component.data[key] = node.component.data[key];
        }); 
        let content = parentScope.renderNodes(toAppend, toAppend._dynamicNodes || [], node, {"node" : node}, true, undefined, toAppend._tC);
        if(!node.component.data.lyteUnbound) {        	
        	_LC.establishBindings(node._properties, node.component.data);
        }
        parentScope.executeBlockHelpers(node._helpers);
        Object.keys(node._properties).forEach(function(key) {
            parentScope.component.data[key] = contextSwitchingArray[key].value;
            parentScope._properties[key] = contextSwitchingArray[key].property;
        });
        _LC.rmCx(toAppend, contextSwitchArray); 
        node.appendChild(content);
    }
    
     // It constructs/updates the dynamicComponent creation
    //upddc
    updateDynamicComponent(node, update, contextSwitchInfo, establishBindings) {
    	let returnVal;
        node._callee = this;
        let keepAlive = node.hasAttribute("lyte-keep-alive");
        if(!node._renderedComponent) {
            node._renderedComponent = {};
            this.__dc.push(node);
        }
        node._cx = contextSwitchInfo || node._cx;
        node._dynamicProperty = node._dynamicProperty || {};
        let componentName = node.getAttribute("component-name") || (node._attributes ? node._attributes["component-name"] : undefined);
        if(!componentName) {
            return;
        }
        let component,newComponent = false;
        if(update) {
        	if(keepAlive) {
        		_LC.ignoreDisconnect = true;
        	}
            if(node._renderedComponent[node._currentComponent]) {
                let activeComponent = node._renderedComponent[node._currentComponent];
                keepAlive ? _LC.hDiv.appendChild(activeComponent) : activeComponent.remove();
            }
            _LC.ignoreDisconnect = false;
            if(!keepAlive) {
                node._dynamicProperty = {};
            }
            if(node._renderedComponent[componentName] && keepAlive) {
                component = node._renderedComponent[componentName];
            } else {
                component = createElement(componentName);
                newComponent = true;
            }
        }  else {
            component = createElement(componentName);
            newComponent = true;
        }
        if(!keepAlive && node._currentComponent) {
            node._renderedComponent[node._currentComponent] = null;
        }
        if(newComponent) {
//          let componentData = {};
            for(let i=0;i<node.attributes.length;i++) {
                if(node.attributes[i].name !== "is" && node.attributes[i].name !== "component-name" && node.attributes[i].name !== "lyte-keep-alive") {
                    component.setAttribute(node.attributes[i].name, node.attributes[i].value);
                }
            }
//          componentData = component._attributes;
            if(node._attributes) {
                for(var key in node._attributes) {
                	if(key!== "component-name") {
                		component.setData(_LC.String.toCamelCase(key), node._attributes[key]);
                	}
                }
            }
            let toAppend = this.renderNodes(node, node._dynamicNodes, node, undefined, establishBindings, undefined, node._tC);
            component.appendChild(toAppend);
        }
        if(newComponent) {
                component._toRegEvnts = node._toRegEvnts;
        }
        if(!update) {
        	returnVal = {"toAppendMain" : component, "lastNode" : node};
        } else {
            _LC.ignoreDisconnect = true;
            insertBefore(node.parentNode,component, node);
            _LC.ignoreDisconnect = false;
        }
        node._renderedComponent[componentName] = component;
        node._currentComponent = componentName;
	    component._callee = this;
	    component._actions = node._actions;
        component.setMethods(node._initMethods);
        component._attributeDetails = node._attributeDetails;
        component._boundEvents = node._boundEvents;
        component._cx = node._cx;
        return returnVal;
    }
    //updFH
    // It constructs/updates the for helper. 
    updateForHelper(node, options, contextSwitchInfo, establishBindings, staticTempArr) {
        if(node.tagName !== "TEMPLATE") {
            Object.keys(node).forEach(function(item) {
            	if(item !== "innerHTML" && item !== "innerText") {
	                node._origTemplate[item] = node[item];            	
            	}
            });
            if(_Lyte._ie) {
            	var div = createElement("div");
                div.innerHTML = node._tC;
                node._origTemplate.innerHTML = div.children[0].innerHTML;
                this.constructor.splitTextNodes(node._origTemplate);
                if(node.hasAttribute("depth")) {
                    node._origTemplate.setAttribute("depth", node.getAttribute("depth"));    
                }
            }
            let placeHolder = node._origTemplate._placeHolder = document.createTextNode("");
            node._origTemplate.setAttribute("item", node.getAttribute("item"));
            node._origTemplate.setAttribute("index", node.getAttribute("index"));
            
            if(node.hasAttribute("unbound")) {
                //What if unbound is dynamic attribute ? It will be set in _attributes of node._origTemplate -> So No worries (y)
                node._origTemplate.setAttribute("unbound", "true");
            }
            //node.replaceWith(node._origTemplate._placeHolder);
            _LC.replaceWithPf(node, node._origTemplate._placeHolder);
            node = node._origTemplate;
            node.setAttribute("is", "for");
            _LC.apdNode(node, this);
            placeHolder._helper = node;
            
        } else if(!node._placeHolder){
            var emptyTextNode = document.createTextNode("");
            //node.replaceWith(emptyTextNode);
            _LC.replaceWithPf(node, emptyTextNode)
            node._placeHolder = emptyTextNode;
            emptyTextNode._helper = node;
            _LC.apdNode(node, this);
        }
        node._sta = node._sta || staticTempArr;
        let callee = this;
        node._callee = this;
        node._attributes = node._attributes || {};
        if(options.type === "update" && node._currentItems === node._attributes.items) {
            return {};
        }
        node._cx = contextSwitchInfo || node._cx;
        let  indexValue = node.getAttribute("index");
        if(!indexValue) {
            node.setAttribute("index", "index");
            indexValue = "index";
        }
        let itemValue = node.getAttribute("item");
        if(!itemValue) {
            node.setAttribute("item", "item");
            itemValue = "item";
        }
        let initialItemValue = callee.component.data[itemValue],initialIndexValue = callee.component.data[indexValue];
        let initialItemProp = callee._properties[itemValue],initialIndexProp = callee._properties[indexValue];
        callee._properties[itemValue] = callee._properties[indexValue] = {};
        let items = node._attributes.items,content = node.content,dynamicNodes = node._dynamicNodes,lastNode = node;
        if(!node._items) {
            node._items = [];
        }
        node._dynProps = node._dynProps || {};
        let lastIndexForIteration;
        let firstIndexForIteration;
        let firstIndex = options.firstIndex;
        let secondIndex = options.secondIndex;
        let thirdIndex = options.thirdIndex;
        var totalNodeIndex = firstIndex + secondIndex;
        if(options) {
            switch(options.type) {
            case "remove"  :{
                lastIndexForIteration = firstIndex;
                for(let i=firstIndex, v=secondIndex;v>0;v--, i++) {
                    this.removeHelpersSpecificIndex(node, i);
                }
                //ln
                /*for(let i=(firstIndex)?firstIndex-secondIndex:firstIndex;i<node._items.length;i++) {
                    let forItem = node._items[i].itemProperty;
                    if(forItem._helperNodes){
                        for (var item of forItem._helperNodes){
                            let ind = item._cx.itemIndex;
                            item._cx.itemIndex = (ind)? ind- secondIndex : ind;
                        }
                    }
                }*/
                for(let i=firstIndex + secondIndex; i<node._items.length;i++) {        
                    node._items[i]._cx.itemIndex = node._items[i]._cx.itemIndex - secondIndex;        
                }
                node._items.splice(firstIndex, secondIndex);
                node._helpers.splice(firstIndex, secondIndex);
                node._forContent.splice(firstIndex, secondIndex);
                break;
            }
            case "insert" : {
                firstIndexForIteration = firstIndex;
                lastIndexForIteration = secondIndex;
                if(node._forContent[firstIndex]) {
                    lastNode = node._forContent[firstIndex][0];
                }
                let newArr = [], newObj = [], newArr1 = [];
                for(let v=secondIndex, k=firstIndex;v>0;v--, k++) {
                    newArr.push([]);
                    newObj.push({});
                    newArr1.push([]);
                }
                node._helpers.splice.apply(node._helpers, [firstIndex, 0].concat(newArr));
                node._items.splice.apply(node._items, [firstIndex, 0].concat(newObj));
                //ln
//                  for(let i=firstIndex + secondIndex;i<node._items.length;i++) {
//                      let forItem = node._items[i].itemProperty;
//                      for (var item of forItem._helperNodes){
//                          item._cx.itemIndex = item._cx.itemIndex + secondIndex;
//                      }
//                  }
                for(let i=firstIndex + secondIndex; i<node._items.length;i++) {
                    node._items[i]._cx.itemIndex = node._items[i]._cx.itemIndex + secondIndex;
                }
                node._forContent.splice.apply(node._forContent, [firstIndex, 0].concat(newArr1));
            }
                break;
            case "replace" : {
                firstIndexForIteration = firstIndex;
                lastIndexForIteration = secondIndex;
                this.removeHelpersSpecificIndex(node, firstIndex);
                let toAppendMain = createDocFragment();
                if(node._forContent[firstIndex+1]) {
                    lastNode = node._forContent[firstIndex+1][0];
                }
                let newArr = [], newObj = [], newArr1 = [];
                for(let v=secondIndex, k=firstIndex;v>0;v--, k++) {
                    newArr.push([]);
                    newArr1.push([]);
                    newObj.push({});
                }
                node._helpers.splice.apply(node._helpers,[firstIndex, 1].concat(newArr));
                node._items.splice.apply(node._items, [firstIndex, 1].concat(newObj));
//                  for(let i=firstIndex + secondIndex;i<node._items.length;i++) {
//                      let forItem = node._items[i].itemProperty._forItem;
//                      forItem.itemIndex = forItem.itemIndex + secondIndex - 1 ;
//                  }
                for(let i=firstIndex + secondIndex; i<node._items.length;i++) {
                    node._items[i]._cx.itemIndex = node._items[i]._cx.itemIndex + secondIndex - 1;
                }
                node._forContent.splice.apply(node._forContent, [firstIndex, 1].concat(newArr1));
                break;
            }
            case "splice" : {
                firstIndexForIteration = firstIndex;
                lastIndexForIteration = secondIndex;
                for(let i=thirdIndex,j=0;i>0;i-- , j++) {
                    this.removeHelpersSpecificIndex(node, firstIndex + j);
                }
                let toAppendMain = createDocFragment();
                if(node._forContent[firstIndex+thirdIndex]) {
                    lastNode = node._forContent[firstIndex+thirdIndex][0];
                }
                let newArr = [], newObj = [], newArr1 = [];
                for(let v=secondIndex, k=firstIndex;v>0;v--, k++) {
                    newArr.push([]);
                    newArr1.push([]);
                    newObj.push({});
                }
                node._helpers.splice.apply(node._helpers,[firstIndex, thirdIndex].concat(newArr));
                node._items.splice.apply(node._items, [firstIndex, thirdIndex].concat(newObj));
//                  for(let i=firstIndex + secondIndex;i<node._items.length;i++) {
//                      let forItem = node._items[i].itemProperty._forItem;
//                      forItem.itemIndex = forItem.itemIndex + secondIndex - 1 ;
//                  }
                for(let i=firstIndex + secondIndex; i<node._items.length;i++) {
                    node._items[i]._cx.itemIndex = node._items[i]._cx.itemIndex + secondIndex - thirdIndex;
                }
                node._forContent.splice.apply(node._forContent, [firstIndex, thirdIndex].concat(newArr1));
                break;
            }
            break;
            case "update" : 
            {
                let key = node.getAttribute("item");
//                  this.removeHelpers(node, true);
                for(let i=0;i<node._items.length;i++) {
                    this.removeHelpersSpecificIndex(node, i);
                }
//                  if(node._attributes.items) {
//                      for(let i=0;i<node._attributes.items.length && node._items[i];i++) {
//                          _LC.removeSelectedBindingDeep(node._items[i].itemProperty[key], node._attributes.items[i]);
//                      }
//                  }
                node._items = [];
        }
            case "default" : 
            {
                node._forContent = [];
                node._helpers = [];
                firstIndexForIteration = 0;
                lastIndexForIteration = items? items.length : 0 ;
            }
            break;
            default: 
            _Lyte.error("Error in updateForHelper");
            }
        }
        if(!lastNode) {
            lastNode = node;
        }
        if(lastNode != node && node._helpers.length > 0  && (options.type == "insert" ||"replace"|| "splice") ){
            lastNode = _LC.findLastNodeL(lastNode,totalNodeIndex,node);
        }
        let returnVal;
        var localUnbound = false;
        var initialUnbound = _LC.unbound;
        if(node.hasAttribute("unbound") || (node._attributes && node._attributes.unbound && node._attributes.unbound !== "false") ) {
            localUnbound = true;
            _LC.unbound = true;
        }
        if(!node._fRender && (node.getAttribute("unbound") == "lyteFastRender" || (node._attributes && node._attributes.unbound == "lyteFastRender"))) {
            node._fRender = true;
        }
        node._currentItems = items;        
        if(options.type !== "remove") {
            var totalString = "";
            var domArr = [];
            var toAppendMain = createDocFragment();
            for(let k = firstIndexForIteration,v=lastIndexForIteration;v>0; k++, v--) {
                node._helpers[k] = [];
                node._items[k] = {"_dynamicProperty" : {}, "itemProperty" : {}, "indexProperty": {}};
                callee.component.data[itemValue] = items[k];
                callee.component.data[indexValue] = k;
                callee._properties[itemValue] = {};
                callee._properties[indexValue] = {};
                let optns = {"itemValue" : itemValue, "itemIndex" : k, "type" : "for", "node" : node, "indexValue" : indexValue};
//                  defProp(callee._properties[itemValue], '_forItem', {
//                      enumerable: false, 
//                      writable: true, 
//                      configurable: true, 
//                      value : optns
//                  });
                node._items[k]._cx = optns;
                let breakCheck = {};
                let toAppend;
                if(node._fRender) {
                    let str = this.renderFast(dynamicNodes, node._sta, this.component);
                    totalString = totalString + str;
                    // var template = document.createElement("template");
                    // template.innerHTML = str;
                    // toAppend = template.content;
                } else {
                    toAppend = this.renderNodes(node.hasAttribute("depth") ? node._depthTemp : node, dynamicNodes, node, optns, establishBindings, breakCheck, node._tC);
                }
                let dynProps = Object.keys(node._items[k]._dynamicProperty);
                for(let d=0;d<dynProps.length;d++) {
                    let key = dynProps[d];
                    node._dynProps[key] ? node._dynProps[key]++ : (node._dynProps[key] = 1);    
                }
                node._items[k].itemProperty = this.getProperty(itemValue);
                node._items[k].indexProperty = this.getProperty(indexValue);    
//                  if(options.type !== "default") {
                if(!_LC.unbound) {
                	_LC.establishBindings({[itemValue] : node._items[k].itemProperty},{[itemValue]:node._attributes.items[k]});
                }
//                  }
                if(!node._fRender){
                    node._forContent[k] = Array.from(toAppend.childNodes);
                } else {
                    domArr.push(node._forContent[k] = []);
                }
                //Needs to revisit this and make sure it happen within renderNodes function itself;
//                  if(options.type !== "update") {
                this.executeBlockHelpers(node._helpers[k]);
                if(!node._fRender) {
                    toAppendMain.appendChild(toAppend);
                }
                if(breakCheck.stop) {
                    break;
                }
            }
            if(node._fRender) {
                var s = document.createElement("template");
                s.innerHTML = totalString;
                toAppendMain.appendChild(s.content);
                _LC.processAction(toAppendMain);
                var childrenArr;
                if(_Lyte._ie) {
                    childrenArr = [];
                    var childNodes = toAppendMain.childNodes;
                    for(var i=0;i<childNodes.length;i++) {
                        if(childNodes[i].nodeType == 1) {
                            childrenArr.push(childNodes[i]);
                        }
                    }
                } else {
                    childrenArr = toAppendMain.children;
                }
                for(var i=0;i<domArr.length;i++) {
                    domArr[i].push(childrenArr[i]);
                }
                requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        _LC.callCC();
                    });
                });
            }
            //Provided so that before appending the component to DOM it is reset to previous value
            _LC.unbound = initialUnbound;
            if(options.type === "default") {
                returnVal = {"toAppendMain" : toAppendMain, "lastNode" : lastNode};
            } else {
                //lastNode.parentNode.insertBefore(toAppendMain, lastNode);
                if(lastNode._placeHolder) {
                	insertBefore(lastNode._placeHolder.parentNode, toAppendMain, lastNode._placeHolder);                	
                } else {
                	insertBefore(lastNode.parentNode,toAppendMain, lastNode);                
                }     
            }
            if(!localUnbound && node._removedAttributes && node._removedAttributes.items && !node._removedAttributes.items.helperValue && node._removedAttributes.items._multipleProperty) {
            	_LC.establishBindings({"items" : node._removedAttributes.items._multipleProperty[0].actProp}, {"items" : items});
            }
        }
        _LC.unbound = initialUnbound;
        for(let i=lastIndexForIteration;i<node._items.length;i++) {
//              for(let j=0;j<node._helpers[i].length;j++) {
//                  node._helpers[j]._cx.itemIndex = i;
//              }
            if(node._items[i].indexProperty) {
                _LC.affectChanges(node._items[i].indexProperty);
            }
        }
        callee.component.data[itemValue] = initialItemValue;
        callee.component.data[indexValue] = initialIndexValue;
        callee._properties[itemValue] = initialItemProp;
        callee._properties[indexValue] = initialIndexProp;
        node._currentItems = items;
        return returnVal;
    }
    //It constructs/updates forIn Helper.
    //updFIH
    updateForInHelper(node, options, contextSwitchInfo, establishBindings) {
        if(node.tagName !== "TEMPLATE") {
            Object.keys(node).forEach(function(item) {
                if(item !== "innerHTML" && item !== "innerText") {
	                node._origTemplate[item] = node[item];            	
            	}
            });
            if(_Lyte._ie) {
            	var div = createElement("div");
                div.innerHTML = node._tC;
                node._origTemplate.innerHTML = div.children[0].innerHTML;
                this.constructor.splitTextNodes(node._origTemplate);
                if(node.hasAttribute("depth")) {
                    node._origTemplate.setAttribute("depth", node.getAttribute("depth"));
                }
            }
            let placeHolder = node._origTemplate._placeHolder = document.createTextNode("");
            node._origTemplate.setAttribute("key", node.getAttribute("key"));
            node._origTemplate.setAttribute("value", node.getAttribute("value"));
            if(node.hasAttribute("unbound")) {
                //What if unbound is dynamic attribute ? 
                node._origTemplate.setAttribute("unbound", "true");
            }
            
            //node.replaceWith(node._origTemplate._placeHolder);
            _LC.replaceWithPf(node, node._origTemplate._placeHolder)
            node = node._origTemplate;
            node.setAttribute("is", "forIn");
            _LC.apdNode(node, this);
            placeHolder._helper = node;
        } else if(!node._placeHolder){
            var emptyTextNode = document.createTextNode("");
            //node.replaceWith(emptyTextNode);
            _LC.replaceWithPf(node, emptyTextNode);
            node._placeHolder = emptyTextNode;
            _LC.apdNode(node, this);
            emptyTextNode._helper = node;
        }
        let callee = this;
        node._callee = this;
        node._attributes = node._attributes || {};
        if(options.type === "update" && node._currentObject === node._attributes.object) {
            return {};
        }
        contextSwitchInfo = contextSwitchInfo ? contextSwitchInfo : node._cx;
        node._cx = contextSwitchInfo;
        let key = node.getAttribute("key");
        if(!key) {
            key = "key";
            node.setAttribute("key", "key");
        }
        let value = node.getAttribute("value");
        if(!value) {
            value = "value";
            node.setAttribute("value", "value");
        }
        let initialKeyValue = callee.component.data[key];
        let initialValueValue = callee.component.data[value];
        let initialKeyProp = callee._properties[key];
        let initialValueProp = callee._properties[value];
        callee._properties[key] = callee._properties[value] = {};
        let object = node._attributes.object;
        let content = node.content;
        let dynamicNodes = node._dynamicNodes;
        let lastNode = node;
        let keysArray = [];
        if(!node._items) {
            node._items = {};
        }
        node._dynProps = node._dynProps || {};
        if(options) {
            switch(options.type) {
            case "delete"  :{
                this.removeHelpersSpecificIndex(node, options.property);
                var delIndex = node._keysArray.indexOf(options.property);
                if(delIndex > -1) {
                  node._keysArray.splice(delIndex,1);
                }
                if(node._helpers) {
                    delete node._helpers[options.property];    
                }
                delete node._propBindingObject[options.property];
            }
            break;
            case "add" : {
                keysArray = [options.property];
                node._keysArray.push(options.property);
            }
            break;
            case "update" : 
            {
                node._keysArray.forEach(function (itemKey, index, array) {
                    this.removeHelpersSpecificIndex(node, itemKey);
                }, this);
                node._keysArray = keysArray = object ? Object.keys(object) : [];
                node._helpers = {};
                node._items = {};
                node._propBindingObject = {};
            }
            break;
            case "default" : 
            {
                node._forContent = {};
                node._helpers = {};
                node._keysArray = keysArray = object? Object.keys(object) : [];
//                  keysArray = Object.keys(object);

            }
            break;
            default: 
            _Lyte.error("Error in updateForHelper");  

            }
        }
        let returnVal;
        if(!object) {
            let toAppendMain = createDocFragment();
            if(options.type !== "default") {
            	insertBefore(lastNode.parentNode,toAppendMain, lastNode);
            } else {
                returnVal = {"toAppendMain" : toAppendMain, "lastNode" : lastNode};
            }    
        }
        let localUnbound = false;
        let initialUnbound = _LC.unbound;
        if(node.hasAttribute("unbound") || (node._attributes && node._attributes.unbound)) {
            localUnbound = true;
            _LC.unbound = true;
        }
		node._currentObject = object;
        if(object && options.type !== "remove") {
            var toAppendMain = createDocFragment();
            node._propBindingObject = node._propBindingObject || {};
            keysArray.forEach(function(itemKey, index, array) {
                node._helpers[itemKey] = [];
                node._items[itemKey] = {"_dynamicProperty" : {}, "itemProperty" : {}};
                callee.component.data[key] = itemKey;
                callee.component.data[value] = object[itemKey];
                callee._properties[key] = {};
                callee._properties[value] = {};
                let optns = {"itemIndex" : itemKey, "itemValue" : value, "keyValue" : key, "type" : "forIn", "node" : node};
                node._items[itemKey]._cx = optns;
                let toAppend = this.renderNodes(node.hasAttribute("depth") ? node._depthTemp : node, dynamicNodes, node, optns, establishBindings, undefined, node._tC);
                Object.keys(node._items[itemKey]._dynamicProperty).forEach(function(key) {
                    node._dynProps[key] ? node._dynProps[key]++ : (node._dynProps[key] = 1);    
                })
                node._items[itemKey].itemProperty = this.getProperty(value);
                node._propBindingObject[itemKey] = node._items[itemKey].itemProperty;
                node._forContent[itemKey] = Array.from(toAppend.childNodes);
//                    this.updateBlockHelpers(node._helpers[itemKey], optns);
                this.executeBlockHelpers(node._helpers[itemKey]);
                toAppendMain.appendChild(toAppend);
            }, this); 
//              if(options.type !== "update") {
            	if(!_LC.unbound) {
            		makeSet(node._attributes.object, "_bindings");
                    node._attributes.object._bindings.add(node._propBindingObject);
                    _LC.establishBindings(node._propBindingObject, node._attributes.object);
            	}
//              }
				_LC.unbound = initialUnbound;
                if(options.type !== "default") {
                    //lastNode.parentNode.insertBefore(toAppendMain, lastNode);
                    if(lastNode._placeHolder) {
                    	insertBefore(lastNode._placeHolder.parentNode,toAppendMain, lastNode._placeHolder);                    
                    } else {
                    	insertBefore(lastNode.parentNode,toAppendMain, lastNode);
                    }
                } else {
                    returnVal = {"toAppendMain" : toAppendMain, "lastNode" : lastNode};
                }

        }
        _LC.unbound = initialUnbound; 
        callee.component.data[key] = initialKeyValue;
        callee.component.data[value] = initialValueValue;
        callee._properties[key] = initialKeyProp;
        callee._properties[value] = initialValueProp;
        node._currentObject = object;
        return returnVal;
    }
        
    static getArrayIndex(array,value) {
        for(let i=0;i<array.length;i++) {
            if(array[i] === value) {
                return i
            };
        }
    }
    
    static getTrimmedContent(content, position, node) {
        let dummyContent = content;
        if(node) {
            position = [];
            let parentNode = node.parentNode;
            while(true) {
                position.unshift(this.getArrayIndex(parentNode.childNodes,node));
                parentNode = parentNode.parentNode;
                node = node.parentNode;
                if(!parentNode) {
                    break;
                }
            }
        }
        for(let i=0;i<position.length;i++) {
            for(let j=content.childNodes.length-1;j>position[i];j--) {
                content.childNodes[j].remove();
            }
            content = content.childNodes[position[i]];
        }
        return dummyContent;
    }
   //updSH
    updateSwitchHelper(type,node, contextSwitchInfo, update, establishBindings){
        if(node.tagName !== "TEMPLATE") {
            Object.keys(node).forEach(function(item) {
            	if(item !== "innerHTML" && item !== "innerText") {
            		node._origTemplate[item] = node[item];
            	}
            });
            if(_Lyte._ie) {
            	var div = createElement("div");
                div.innerHTML = node._tC;
                node._origTemplate.innerHTML = div.children[0].innerHTML;
                this.constructor.splitTextNodes(node._origTemplate);
                if(node.hasAttribute("depth")) {
                    node._origTemplate.setAttribute("depth", node.getAttribute("depth"));    
                }
            }
            let placeHolder = node._origTemplate._placeHolder = document.createTextNode("");
            //node.replaceWith(node._origTemplate._placeHolder);
            _LC.replaceWithPf(node, node._origTemplate._placeHolder);
            node = node._origTemplate;
            node.setAttribute("is", type);
            _LC.apdNode(node, this);
            placeHolder._helper = node;
        } else if(!node._placeHolder){
            var emptyTextNode = document.createTextNode("");
            //node.replaceWith(emptyTextNode);
            _LC.replaceWithPf(node, emptyTextNode);
            node._placeHolder = emptyTextNode;
            emptyTextNode._helper = node;
            _LC.apdNode(node, this);
        }
        let isNew = false;
        let lastNode = node;
        if(!node._callee) {
            node._callee = this;
            isNew = true;
        }
        contextSwitchInfo = contextSwitchInfo ? contextSwitchInfo : node._cx;
        node._cx = contextSwitchInfo;
        node._dynamicProperty = node._dynamicProperty ? node._dynamicProperty : {};
        let currentCaseName;
        let value;
        if(node.getAttribute("value")=== "" || node.getAttribute("value")) {
            value = node.getAttribute("value");
        } else if(node._attributes) {
            value = node._attributes.value;
        }
        // if(node._currentCase && value === node._currentCase){
        //     return;
        // }
        if(value) {
            currentCaseName = type === "if" ? "true" : value.toString();
        } else {
            if(type=== "if")  {
                currentCaseName = "false";
            } else {
                switch(value) {
                case undefined : 
                    currentCaseName = "undefined";
                    break;
                case null : 
                    currentCaseName = "null";
                    break;
                case false: 
                    currentCaseName = "false";
                    break;
                case "": 
                    currentCaseName = '""';
                    break;
                case 0 : 
                    currentCaseName = '0';
                }
            }
        }
        if(currentCaseName === node._currentCase) {
            return;
        }
        node._currentCase = currentCaseName;
        var nodeTemp = node._depthTemp || node;
//        let currentCase = node.content.querySelector('[case=\''+currentCaseName+'\']'),scope;
        let scope = node._cases[currentCaseName];
        let defaultContent;
        if(!scope){
            scope = node._default;
            defaultContent = (_Lyte._ms) ? scope.templateContent : nodeTemp.content.querySelector('[default]');
            node._isDefault = true; 
            if(!defaultContent) {
                if(node._caseContent && node._caseContent.length) {
                    this.removeHelpers(node, undefined, true);
                }
                node._caseContent = [];
                let emptyTextNode = document.createTextNode("");
                node._caseContent.push(emptyTextNode);
                node._currentCaseName = currentCaseName;
                node._helpers = node._helpers || [];
                if(update) {
                	//lastNode.parentNode.insertBefore(emptyTextNode, node);
                    if(lastNode._placeHolder) {
                    	insertBefore(lastNode._placeHolder.parentNode,emptyTextNode, lastNode._placeHolder);                    
                    } else {
                    	insertBefore(lastNode.parentNode,emptyTextNode, node);
                    }
                	return;
                } else {
                	let toAppendMain = createDocFragment();
                	toAppendMain.append(emptyTextNode);
                	return {lastNode : lastNode, toAppendMain : toAppendMain};
                }
            }
        }
        
//        if(currentCase) {
//              if(currentCase.tagName === "TEMPLATE" && !currentCase.getAttribute("is")){
//                  currentCase = currentCase.content;
//              } else {
//                  let temp = createElement('template');
//                  let clone = currentCase.cloneNode(true);
//                  temp.content.appendChild(clone);
//                  currentCase.removeAttribute('slot');
//                  currentCase = temp.content;
//              }
//              scope.content = currentCase;
//        }
 
        if(node._caseContent && node._caseContent.length) {
            this.removeHelpers(node, undefined, true);
        }
        let dummyScope = scope;
        let additionalContentArr = [];
        let cnt=0;
        let dummyCaseName = currentCaseName;
        let template;
        if(defaultContent) {
            template = defaultContent
        } else {
            template = (_Lyte._ms) ? {} : nodeTemp.content.querySelector('[case=\''+_LC.cssEscape(dummyCaseName)+'\']');
        }
        let contentArr = [];
        while(dummyScope) {
            let dynamicNodes = dummyScope.dynamicNodes;
            let processedContent = this.renderNodes(template, dynamicNodes, node, undefined, establishBindings, undefined, dummyScope.templateContent);
            contentArr.push(processedContent);
            if(dummyScope.additional) {
                if(dummyScope.additional.next) {
                    template = (_Lyte._ms) ? {} : node.content.querySelector('[case=\''+_LC.cssEscape(dummyScope.additional.next)+'\']');
                    dummyScope = node._cases[dummyScope.additional.next];
                } else {
                    template = (_Lyte._ms) ? {} : node.content.querySelector('[default]');
                    dummyScope = node._default;
                }
            } else {
                    break;
            }
        }
        node._caseContent = [];
        let toAppendMain = createDocFragment();;
        for(let i=0;i<contentArr.length;i++) {
            if(contentArr[i].nodeType == 11){
//                for(let j=0;j<contentArr[i].childNodes.length;j++) {
//                    node._caseContent.push(contentArr[i].childNodes[j]);
//                }
                node._caseContent = node._caseContent.concat(Array.from(contentArr[i].childNodes));
            }
            else{
                node._caseContent.push(contentArr[i]);
            }
                toAppendMain.append(contentArr[i]);
//            node.parentNode.insertBefore(contentArr[i], node);
        }
          this.executeBlockHelpers(node._helpers, node);
          if(update) {
        	  let returnVal;
        	  if(toAppendMain.querySelector("template[is=break]")) {
        		  returnVal = "break";
        	  } else if(toAppendMain.querySelector("template[is=continue]")) {
        		  returnVal = "continue";
        	  }
        	  //node.parentNode.insertBefore(toAppendMain, node);
              if(node._placeHolder) {
            	  insertBefore(node._placeHolder.parentNode,toAppendMain, node._placeHolder);              
              } else {
            	  insertBefore(node.parentNode,toAppendMain, node);
              }
        	  return returnVal;
          } else {
        	  return {"toAppendMain" : toAppendMain, "lastNode" : node};
          }
    }
    
    dummy(a,b) {
        let dummy = this.constructor._properties[boundValue].observer;
    }
    
    callObservers(boundValue, key) {
        let property = this.constructor._properties[boundValue];
        let observers = property?property.observer: undefined;
        if(observers) {
            for(let i=0;i<observers.length;i++) {
                if(key.indexOf('.') === -1 || observers[i].path === key) {
                    this["_"+observers[i].functionName].apply(this);
                }
            }
        }
    }
    
    static updateValue(property, path, value) {
        let pathVals = path.split('.');
        let context = property;
        for(let i=0;i<pathVals.length -1;i++) {
            context = context[pathVals[i]];
        }
        context[pathVals[i]] = value;
    }
    
//    static createDocFragment(template){
//        let childNodes = template.cloneNode(true,"lyte").childNodes;
////           let childNodes = template.childNodes;
//        let frag = document.createDocumentFragment();
//        let len = childNodes.length;
//        for(let i=0; i<len; i++){
//            frag.appendChild(childNodes[0]);
//        }
//        return frag;
//    }
    
    static createDocFragment1(template) {
        if(template.content) {
            return template.content;
        }
    	let childNodes = template.childNodes;
    	let frag = createDocFragment();
    	let len = childNodes.length;
    	for(let i=0; i<len; i++){
            frag.appendChild(childNodes[0]);
        }
    	return frag;
    }
    
    static _registerComponent(a,b) {
        let componentsDiv = _LC.lyteComponentsDiv;
        let styleDiv = _Lyte.$.assetsDiv;
        let origTemplateValue = this._template;
        if(this._template && typeof this._template === "string"){
            this._template.replace(/\\'/g,"'");
            let div = createElement("div");
            div.innerHTML = this._template;
            while(div.firstChild){
                if(div.firstChild.nodeName === "STYLE") {
                    styleDiv.appendChild(div.firstChild);
                } else {
                    componentsDiv.appendChild(div.firstChild);
                }
            }
/*        } else if(document.querySelector("#" + a)) { */
        } else if(document.querySelector("template[tag-name='"+a+"']")) {
            componentsDiv.appendChild(document.querySelector("template[tag-name='"+a+"']") );
        }
        this._template = componentsDiv.querySelector("template[tag-name='"+a+"']");
        if(!this._template) {
        	return;
        }
        if(_LC.needDummyComponentsDiv) {
            if(_Lyte._ie) {
                let temp = _Lyte.Compile.getTemplateFromString(origTemplateValue);
                _LC.dummyLyteComponentsDiv.appendChild(temp);
            } else {
                _LC.dummyLyteComponentsDiv.appendChild(this._template.cloneNode(true));    
            }
        }
        if(this._template && !this._template.content){
//            var frag = document.createDocumentFragment();
//            let childNodes = this._template.cloneNode(true,"lyte").childNodes;
//            //let childNodes = this._template.childNodes;
//            let len = childNodes.length;
//            for(let i=0; i<len; i++){
//                frag.appendChild(childNodes[0]);
//            }
//            this._template.content = frag;
        }
        var hasUnbound = this._observedAttributes.indexOf("lyteUnbound") !== -1;
        var s = _Lyte._ie ? this._template : this._template.content;//)?this._template.content:document.createDocumentFragment(this._template);
        //This is used to split text nodes which contain multiple dynamic values 
        //Eg." Name is {{name}} and age is {{age}} "
        var newCompile;
        if(hasUnbound) {
            if(_Lyte._ie) {
                newCompile = document.createElement("div");
                newCompile.innerHTML = this._template.outerHTML;
                newCompile = newCompile.childNodes[0];
            } else {
                newCompile = this._template.cloneNode(true);
            }
        }
        this.splitTextNodes(s);
        if(hasUnbound) {
            this.splitTextNodes(newCompile);
        }
        //This is used to find the dynamicNodes and helper nodes for the given component. 
        if(!this._dynamicNodes){
            if(_Lyte.Compile.getDynamicNodes) {
                this._dynamicNodes = _Lyte.Compile.getDynamicNodes(a, undefined, _Lyte._ie ? s : undefined).dynamicNodes;
            } else {
                _Lyte.error("LC002", a);  
            }
	    } 
        if(this._dynamicNodes) {
        doCompile(s, this._dynamicNodes, a, this, newCompile ? (_Lyte._ie  ? newCompile : newCompile.content) : undefined);
        if(_Lyte._ed) { 
          this._tC = this._template.outerHTML;
        } else if(_Lyte._ie) {
          this._tC = s.outerHTML;
        }
        this._templateAttributes = this._templateAttributes || {type : "attr", "attr" : {}, position: []};
        var ta = [this._templateAttributes];
        doCompile(this._template, ta, a, this);
        this._templateAttributes = ta[0];
        if(this._templateAttributes && this._templateAttributes.attr) {
            var attributesT = this._template.attributes;
            try{
                for(let i=0;i<attributesT.length;i++) {
                    if(!this._templateAttributes.attr[attributesT[i].name] && attributesT[i].name !== "tag-name" && attributesT[i].name !== "use-strict") {
                        this._templateAttributes.attr[attributesT[i].name] = {"name" : attributesT[i].name, "staticValue" :  attributesT[i].value};
                    }
                }    
            } catch(e) {
                _Lyte.error("Error with templateAttributes. ");
            }
        }
        }
        this._sta = newCompile ? _LC.processStatic(newCompile) : undefined;
    }
    //This is used to split text nodes which contain multiple dynamicNodes. 
    static splitTextNodes(node) {
        if(node && node.childNodes && node.childNodes.length) {
            for(let i=node.childNodes.length-1;i>=0;i--) {
                this.splitTextNodes(node.childNodes[i]);
            }
        }
        if(node.tagName === "TEMPLATE" && !_Lyte._ie) {
            this.splitTextNodes(node.content);
        }
        if(node.nodeType === node.TEXT_NODE) {
            let nodeValue = node.nodeValue;
            if(nodeValue){
                let mustacheValues = nodeValue.match(/{{[^}]*?(?:(?:('|")[^\1]*?\1)[^}]*?)*}}/g); //'
                if(!mustacheValues) {
                    return;
                }
                let newNodeArray = [];
                for(let i=0;i<mustacheValues.length;i++) {
                    let mustacheStartIndex = nodeValue.indexOf(mustacheValues[i]);
                    let mustacheEndIndex = mustacheStartIndex + mustacheValues[i].length;
                    if(mustacheStartIndex) {
                            newNodeArray.push(document.createTextNode(nodeValue.substring(0, mustacheStartIndex)));
                    }
                    newNodeArray.push(document.createTextNode(nodeValue.substring(mustacheStartIndex, mustacheEndIndex)));
                    nodeValue = nodeValue.substring(mustacheEndIndex);
                }
                if(!(!nodeValue.trim() && node.nextSibling && node.nextSibling.nodeType === 3 && !node.nextSibling.nodeValue.trim())) {
                    newNodeArray.push(document.createTextNode(nodeValue));
                }
                //Fix for IE Edge issue with higher versions where node.replaceWith is not working when the parent is a doc fragment.
                if(_Lyte._rwpf && node.parentNode.nodeName === "#document-fragment") {
                	for(let i=0;i<newNodeArray.length;i++) {
                		insertBefore(node.parentNode,newNodeArray[i],node);
                      }
                    node.remove();
                } else {
                	node.replaceWith.apply(node, newNodeArray);
                }
            }
        }
    }
    //It registers the binding of the node with the properties with which the dynamicNode depends. 
    bindNode(node, toBeRemoved, helperNode, options, nodeInfo, processLast, establishBindings, isTemplate) {
        let itemValue = options.itemValue;
        let forIndex = options.itemIndex;
        let forType = options.type;
        let indexValue = options.indexValue;
        let dynamicValue = nodeInfo.dynamicValue;
        let helperFunc = nodeInfo.helperInfo;
        let nodeValue, ownerElement = node.ownerElement;
        let dynamicValuesArray = [];
//        if(node.nodeType === 2 && _LC.isCustomElement(node.ownerElement,true) ) {
//          node = {nodeName : node.nodeName, ownerElement: ownerElement, nodeType : 2, nodeValue : node.nodeValue};
//        }
        if(node.nodeType === 2) {
            node = {nodeName : node.nodeName, ownerElement : node.ownerElement, nodeType : 2, nodeValue : node.nodeValue, _attributeDetails : node._attributeDetails};
        }
        node._callee = this;
        let isHelper = false;
        if(helperFunc && Object.keys(helperFunc).length) {
            isHelper = true;
            let attrName = node.nodeName;
            nodeValue = node.helperValue = helperFunc;
            let helperArgs = [];
            if(helperFunc.name === "action"){
                let actName = helperFunc.args[0];
                helperFunc.args[0] = actName.startsWith("'")? actName.replace(/'/g,''):  actName;
                if(forType) {
                    ownerElement._cx = options;
                } else if(helperNode) {
                    ownerElement._cx = helperNode._cx;
                }
                actName = helperFunc.args.slice(0,1)[0];
                let args = helperFunc.args.slice(1,helperFunc.args.length), isCustom = false;
                let attrName = node.nodeName;
                if(attrName.indexOf("-") != -1){
                    isCustom = true;
                }
                helperArgs = [ownerElement,attrName,isCustom,{name:actName,args:args}];
                this.processHelper({"name" : helperFunc.name, "args" : helperArgs}, node);
                return;
            } else{
                if(helperFunc.name === "method") {
                    helperArgs = helperFunc.args;
                } else {
                    helperArgs = this.processArgs(this,{"helperInfo" : helperFunc} ,dynamicValuesArray,undefined,node);    
                }
            }
            nodeValue = this.processHelper({"name" : helperFunc.name, "args" : helperArgs}, node);
            if(helperFunc.name === "unescape"){
//              let test = node.replaceWith.apply(node,nodeValue.childNodes);
                let obj = {initialNode : node, dynamicNodeValue : nodeValue};
                node = {dynamicPositions : obj, "_callee" : node._callee, helperValue : node.helperValue};
                nodeValue = undefined;
                processLast.push(node);
            }
        } else {
            helperFunc = {};
            node.syntaxValue = dynamicValue;
            let dynamicValues = [];
            nodeValue = _LC.get(this.component.data, dynamicValue, dynamicValues);
            dynamicValuesArray.push(dynamicValues);
        }
        //if(node.nodeType === 2 && ( (typeof nodeValue !== "string" && (_LC.isCustomElement(node.ownerElement,true) || typeof nodeValue === "boolean") ) || _LC.isControlHelper(node.ownerElement) )) {
        //	let bindedNode = node;
            //node = {nodeName : node.nodeName, ownerElement: ownerElement, nodeType : 2, nodeValue : node.nodeValue, _callee : this, syntaxValue : node.syntaxValue, helperValue : node.helperValue, _attributeDetails : node._attributeDetails};
        if(node.nodeType == 2) {
            let tagName = node.ownerElement.tagName;
            if(tagName == "INPUT" || tagName == "TEXTAREA" || (tagName == "DIV" && node.ownerElement.hasAttribute("contenteditable") )) {
                var rA = node.ownerElement._rA = node.ownerElement._rA || [];
                node.ownerElement._rA.push(node);
            }
            if(!ownerElement._origTemplate) {
                if(( ownerElement.hasAttribute("lyte-for") || ownerElement.hasAttribute("lyte-if") || ownerElement.hasAttribute("lyte-switch") || ownerElement.hasAttribute("lyte-forIn") ) && ownerElement.tagName !== "TEMPLATE") {
                    if(_Lyte._ie) {
                        node.ownerElement = createElement("template");
                        node.ownerElement.setAttribute("is", nodeInfo._depthTemp);
                    } else {
                        node.ownerElement = nodeInfo._depthTemp.cloneNode(true);
                    }
                    ownerElement._origTemplate = node.ownerElement;
                }
            } else {
                node.ownerElement = ownerElement._origTemplate;
            }
        //	node.ownerElement._attributeDetails[node.nodeName].bindedNode = node;
        //}
        }
        let actMultiProp; 
        if(helperFunc.name !== "unbound" && !_LC.unbound) {
            let dynamicProp;
            if(helperNode) {
                dynamicProp = forType? helperNode._items[forIndex]._dynamicProperty : helperNode._dynamicProperty;
            }
            for(let d=0;d<dynamicValuesArray.length;d++) {
            	let dynamicValues = dynamicValuesArray[d];
            	for(let v=0;v<dynamicValues.length;v++) {
            		let actProperty = this.getProperty(dynamicValues[v]);
            		if(helperNode) {
            			let ind = dynamicValues[v].search(/\W/);
            			let boundValue;
            			if(ind !== -1) {
            				boundValue = dynamicValues[v].substring(0, ind);
            			} else {
            				boundValue = dynamicValues[v];
            			}
            			if(boundValue !== itemValue && boundValue !== indexValue && (!options.node || !options.node._properties || !options.node._properties[boundValue])) {
            				makeSet(actProperty, "_helperNodes");
            				actProperty._helperNodes.add(
            						helperNode
            				);
            				dynamicProp[dynamicValues[v]] ? dynamicProp[dynamicValues[v]].push(node): (dynamicProp[dynamicValues[v]] = []).push(node);
            			} 
            			else {
            				node._cx = options;
//            				if(!actProperty._dynamicNodes) {
//            					actProperty._dynamicNodes = [];
//            					defProp(actProperty, '_dynamicNodes', {
//            						value: [],
//            						enumerable: false, 
//            						writable: true, 
//            						configurable: true
//            					});
//            				}
            				makeArray(actProperty, "_dynamicNodes");
            				actProperty._dynamicNodes.push(node);
            				if(boundValue !== indexValue) {
            					actMultiProp = actProperty;
            				}
            			}
            		} else {
//            			if(!actProperty._dynamicNodes) {
//            				defProp(actProperty, '_dynamicNodes', {
//            					value : [], 
//            					enumerable: false, 
//            					writable: true,
//            					configurable: true
//            				});
//            			}
            			makeArray(actProperty, "_dynamicNodes");
            			actProperty._dynamicNodes.push(node);
            		}
            		if ((ownerElement && (ownerElement.hasAttribute("lyte-for") || ownerElement.hasAttribute("lyte-if") || ownerElement.hasAttribute("lyte-switch") || ownerElement.hasAttribute("lyte-forIn") )) || (ownerElement && ownerElement.tagName === "TEMPLATE" && /^(for|forIn)$/.test(ownerElement.getAttribute("is")) && !isHelper)) {
            			let type= ownerElement.getAttribute("is");
            			if( (type=== "for" && node.nodeName === "items") || (type==="forIn" && node.nodeName === "object")) {
            				if(!actProperty._forHelpers) {
            					makeSet(actProperty, "_forHelpers");
            				}
            				node.ownerElement._actualBinding = actProperty;
            				actProperty._forHelpers.add(node.ownerElement);
            			}
            		}
            		if(establishBindings) {
            			_LC.establishSelectedBinding(actProperty, this.component.data, this );
            		}
            	}
            	if(dynamicValues.length > 1) {
            		node._multipleProperty = node._multipleProperty || [];
            		node._multipleProperty.push({"dynamicProp" : actMultiProp ? undefined : dynamicProp, "actProp" : this.getProperty(dynamicValues[0]), "helperNode" : helperNode, "dynamicValues" : dynamicValues});
            	}
            }
        }
        nodeValue = !typeof nodeValue === "boolean" && !typeof nodeValue === "number" ? (nodeValue? nodeValue : ""): nodeValue;
        if(node.nodeType === 2) {
            let parentNode = node._parentNode? node._parentNode : node.ownerElement;
            if(parentNode.tagName) {
                let is = parentNode.getAttribute("is");
            }
            let isCustomElement = _LC.isCustomElement(parentNode,true);
            if(isCustomElement) {
                 if(parentNode.set) {
                    parentNode.set(_LC.String.toCamelCase(node.nodeName), nodeValue);
                 } else {
                    parentNode._initProperties = parentNode._initProperties || {};
                     parentNode._initProperties[_LC.String.toCamelCase(node.nodeName)] =nodeValue;
                }
            }
            let origNodeValue = nodeValue;
            //!== "string"
            if(isCustomElement && typeof nodeValue !== "string" && !isTemplate) {
                parentNode._attributes = parentNode._attributes || {};
                parentNode._attributes[node.nodeName] = nodeValue;
                if(parentNode.nodeName === "TEMPLATE" && isHelper) {
                    if((parentNode.getAttribute("is") === "for" && node.nodeName === "items") || (parentNode.getAttribute("is") === "forIn" && node.nodeName === "object") && !_LC.unbound) {
                        //node._actualBinding = {"_forHelpers" : new Set().add(parentNode)};
                        node.ownerElement._actualBinding = {"_forHelpers" : new Set().add(parentNode), "_createdBinding" : true};
                        if(nodeValue){
                            makeSet(nodeValue, "_bindings");
                            nodeValue._bindings.add(node.ownerElement._actualBinding);
                        }
                    }
                }
                toBeRemoved.push(node.nodeName);
            }
            else {
                if(typeof nodeValue === "boolean") {
                    parentNode._attributes = node.ownerElement._attributes || {};
                    parentNode._attributes[node.nodeName] = nodeValue;
                    if(!nodeValue) {
//                      node.ownerElement.removeAttribute(node.nodeName);
                        toBeRemoved.push(node.nodeName);
                    } else {
                        parentNode.setAttribute(node.nodeName, "");
                    }
                } else {
                    nodeValue = (nodeValue && typeof nodeValue === "object") ? ((typeof Record != "undefined" && nodeValue instanceof Record) ? JSON.stringify(nodeValue.$.toJSON()) : JSON.stringify(nodeValue)) : ((nodeValue === undefined || nodeValue === null) ? '' : nodeValue);
                    if(_LC.isControlHelper(node.ownerElement)) {
                    	 parentNode._attributes = node.ownerElement._attributes || {};
                         parentNode._attributes[node.nodeName] = nodeValue;
                         toBeRemoved.push(node.nodeName);
                    } else {
                         let locNodeVal = nodeValue === undefined ? "" : nodeValue;
                         //if(node.nodeName === "style") {
                         //   node.ownerElement.setAttribute("style",locNodeVal);
                         //} else {
                         //   node.nodeValue = locNodeVal;
                         //}
                         node.ownerElement.setAttribute(node.nodeName, locNodeVal);
                    }
                    
                }
            }
            if(parentNode.tagName === "LYTE-YIELD" /*parentNode.getAttribute("is") === "insertYield"*/) {
                parentNode.component.data[_LC.String.toCamelCase(node.nodeName)] = origNodeValue;
            }
            if (/^(INPUT|TEXTAREA|SELECT)$/.test(parentNode.nodeName)) {
                        if (node.nodeName === "value") {
                            parentNode.value = (nodeValue === undefined) ? "" : nodeValue;
                        } else if (node.nodeName === "checked") {
                            parentNode.checked = nodeValue;
                        }
            }
            if(!nodeValue && _LC.booleanAttrList.indexOf(node.nodeName) !== -1) {
                toBeRemoved.push(node.nodeName);
            }
        } 
        else {
            node.nodeValue = nodeValue === undefined ? '' : nodeValue;
        }
	return node;
    }
    
    debounce(func, threshold) {
        var timeout;
        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
            	func.apply(obj, args);
                timeout = null;
            };
            if (timeout){
            	clearTimeout(timeout);
            }
            timeout = setTimeout(delayed, threshold || 100);
            //console.log(timeout,threshold);
        };
    }
    getProperty(key) {
        let arr = key.split('.');
        let property = this;
        if(!property._properties[arr[0]]) {
            property._properties[arr[0]] = {};
        } 
        property = property._properties[arr[0]];
        
        defProp(property, '_path', {enumerable: false, value : arr[0]});
        for(let i=1;i<arr.length;i++) {
            if(!property[arr[i]]) {
                property[arr[i]] = {};
                defProp(property[arr[i]], '_path', {enumerable: false, value : property._path + "." + arr[i]});
            }
            property = property[arr[i]];
        }
        return property;
    }
    //updN
    updateNode(node, updatePath) {
        let compInstance = this.component;
        var del = "delete";
        let multiplePropNode = [];
        let multipleProp;
        if(node._multipleProperty) {
        	for(var i=0;i<node._multipleProperty.length;i++) {
        		if(node._multipleProperty[i] && node._multipleProperty[i].dynamicValues.lastIndexOf(updatePath) > 0) {
                    multiplePropNode[i] = false;
                    multipleProp = node._multipleProperty[i];
		            let nodes;
		            if(multipleProp.dynamicProp) {
                        multiplePropNode[i] = multipleProp;
		                nodes = multipleProp.dynamicProp[multipleProp.actProp._path];
		                if(nodes) {
		                    let index = nodes.indexOf(node);
		                    nodes.splice(index, 1);
		                }
		                let helperNode = multipleProp.helperNode;
		                if(nodes.length === 0) {
		                    if(helperNode.getAttribute("is") === "if") {
		                        multipleProp.actProp._helperNodes[del](helperNode);
		                        delete multipleProp.dynamicProp[multipleProp.actProp._path];
		                    } else {
		                        delete multipleProp.dynamicProp[multipleProp.actProp._path];
		                        if(helperNode._items) {
		                            let removeHelper = true;
		                            for(let i=0;i<helperNode._items.length;i++) {
		                                if(helperNode._items[i]._dynamicProperty && helperNode._items[i]._dynamicProperty[multipleProp.actProp._path]) {
		                                    removeHelper = false;
		                                    break;
		                                }
		                            }
		                            if(removeHelper) {
		                                multipleProp.actProp._helperNodes[del](helperNode);
		                                //console.log('for helper is removed');
		                            }
		                        }
		                    }
		                }
		            }
		            if(!multiplePropNode[i]) {
		                multiplePropNode[i] = "dynamicNodes";
		                nodes = multipleProp.actProp._dynamicNodes;
		                if(nodes) {
		                    let index = nodes.indexOf(node);
		                    nodes.splice(index, 1);
		                    if(!nodes.length) {
		                        delete multipleProp.actProp._dynamicNodes;
		                    }
		                }
		            }
		        }
			}
		}
        if(!node.syntaxValue && !node.helperValue) {
            return;
        }
        let contextSwitchInfo;
        let isYieldContext;
        if(node._cx || (node.nodeType === 2 && node.ownerElement._cx)) {
            contextSwitchInfo = node._cx || node.ownerElement._cx;
            var contextSwitchArray = [];
            _LC.changeContext(contextSwitchInfo.node, contextSwitchArray, contextSwitchInfo );
        } else if(node.tagName === "LYTE-YIELD" && node._callee._cx) {
        	isYieldContext = true;
        	contextSwitchInfo = node._callee._cx;
        	var contextSwitchArray = [];
        	_LC.changeContext(contextSwitchInfo.node, contextSwitchArray, contextSwitchInfo, true);
        }
        let nodeValue;
        let dynamicValues = [];
        if(node.helperValue){
            nodeValue = node.helperValue;
                    let helperFunc = nodeValue;
                    let helperRetVal = this.processHelper({name : helperFunc.name, args : this.processArgs(this,{"helperInfo" : helperFunc} , dynamicValues, undefined, node)}, node);  
                    nodeValue = helperRetVal;
                    if(helperFunc.name === "unescape") {
                        let oldDynamicPosition = node.dynamicPositions;
                        let oldStartingNode = oldDynamicPosition.startingNode;
                        let oldChldLen = oldDynamicPosition.length;
                        while(oldChldLen > 1) {
                            let next = oldStartingNode.nextSibling;
                            oldStartingNode.remove();
                            oldStartingNode = next;
                            oldChldLen--;
                        }
                        let childLen = nodeValue.childNodes.length;
                        if(!childLen) {
                            nodeValue.appendChild(document.createTextNode(""));
                            childLen = 1;
                        }
                        let startingNode = nodeValue.childNodes[0];
                        oldStartingNode.replaceWith.apply(oldStartingNode,nodeValue.childNodes);
                        let obj = {startingNode : startingNode, length: childLen};
                        node.dynamicPositions = obj;
                        nodeValue = undefined;
                    }
        } else {
            let boundValue = node.syntaxValue;
            let path;
            if(boundValue.indexOf('.') !== -1 || boundValue.indexOf('[') !== -1) {
                path = boundValue;
                boundValue = boundValue.substring(0,boundValue.indexOf('.'));
            }
            let value = path ? _LC.get(compInstance.data, path, dynamicValues) : compInstance.data[boundValue]; 
            nodeValue = !typeof value === "boolean" && !typeof value === "number" ? (value? value : ""): value;
        }
		if(!(dynamicValues[0] instanceof Array)) {
        	dynamicValues = [dynamicValues];
		}
        
        if(multiplePropNode) {
        	for(var i=0;i<multiplePropNode.length;i++) {
        		if(multiplePropNode[i]) {
					let multipleProp = node._multipleProperty[i];
                    let prop = this.getProperty(dynamicValues[i][0]);
                    let totalProp = this.getProperty(dynamicValues[i][0].substring(0, dynamicValues[i][0].indexOf('.')));
                    let value = this.getData(dynamicValues[i][0].substring(0, dynamicValues[i][0].indexOf('.')));                            
	                if(multiplePropNode[i] === "dynamicNodes") {
//	                    if(!prop._dynamicNodes) {
//	                        defProp(prop, '_dynamicNodes', {
//	                            value: [],
//	                            enumerable: false, 
//	                            writable: true,
//	                            configurable: true
//	                        });
//	                    }
	                	makeArray(prop, "_dynamicNodes");
	                    prop._dynamicNodes.push(node);
	                } else {
	                	makeSet(prop, "_helperNodes");
	                    prop._helperNodes.add(
	                            multipleProp.helperNode
	                    );
	                    let dynamicProp = multipleProp.dynamicProp;
	                    dynamicProp[prop._path] ? dynamicProp[prop._path].push(node): (dynamicProp[prop._path] = []).push(node);
	                }
	                _LC.establishBindings(totalProp, value);
                    node._multipleProperty[i].actProp = prop;
                    node._multipleProperty[i].dynamicValues = dynamicValues[i];
	        	}
	        }
		}
        
        if(node.nodeType === 2) {
        	let parentNodes = [];
            let pN = node._parentNode ? node._parentNode :  node.ownerElement;
            if(pN.tagName === "TEMPLATE" && pN.getAttribute("is") === "component" && node.nodeName !== "component-name") {
            	let isKeepAlive = pN.hasAttribute("lyte-keep-alive");
            	if(isKeepAlive) {
            		for(var key in pN._renderedComponent) {
            			parentNodes.push(pN._renderedComponent[key]);
            		}
            	} else {
            		parentNodes.push(pN._renderedComponent[pN.getAttribute("component-name")]);
            	}
            }
            parentNodes.push(pN);
            for(let i=0;i<parentNodes.length;i++) {
            	let parentNode = parentNodes[i];
            	if(parentNode.set) {
                    parentNode.set(_LC.String.toCamelCase(node.nodeName), nodeValue, true);
                    } else {
                        parentNode._initProperties = parentNode._initProperties || {};
                        parentNode._initProperties[_LC.String.toCamelCase(node.nodeName)] = nodeValue;
                    }
                    if(parentNode.tagName === "LYTE-YIELD" && parentNode.component.data && node.nodeName && parentNode.component.data[node.nodeName] !== nodeValue /*parentNode.getAttribute("is") === "insertYield"*/) {
                        _LC.set(parentNode.component.data, _LC.String.toCamelCase(node.nodeName), nodeValue, undefined, parentNode);
                    }
                    parentNode._attributes = parentNode._attributes || {};
                    //!== "string"
                    if(_LC.isCustomElement(parentNode,true) && typeof nodeValue !== "string") {
                        if(node.ownerElement.nodeName === "TEMPLATE") {
                            if(node.helperValue) {
                            	if((node.ownerElement.getAttribute("is") ===  "for" && node.nodeName === "items") || (node.ownerElement.getAttribute("is") ===  "forIn" && node.nodeName === "object")) {
                            		let oldValue = node.ownerElement._attributes[node.nodeName];
                            		let newValue = nodeValue;
                            		_LC.removeSelectedBindingDeep(node.ownerElement._actualBinding, oldValue);
                            		if(newValue) {
                            			makeSet(newValue, "_bindings");
                            			newValue._bindings.add(node.ownerElement._actualBinding);
                            			_LC.establishBindings(node.ownerElement._actualBinding, newValue);
                            		}
                            		if(node.nodeName === "object") {
                            			_LC.removeSelectedBindingDeep(node.ownerElement._propBindingObject, oldValue);
                            		}
                            		//console.log("old Value ", oldValue, " new Value ", newValue);
                            	}
                            }
                            parentNode["__"+node.nodeName] = true;
                            parentNode.removeAttribute(node.nodeName);
                        } else {
                            //Needs revisiting
                            //parentNode.removeAttribute(node.nodeName);
                        }

                    } else {
                        if(typeof nodeValue === "boolean") {
                            parentNode._attributes = parentNode._attributes || {};
                            parentNode._attributes[node.nodeName] = nodeValue;
                            if(!nodeValue) {
                                parentNode.removeAttribute(node.nodeName);
                            } else {
                                parentNode.setAttribute(node.nodeName, "");
                            }
                        } else {
                            nodeValue = (nodeValue && typeof nodeValue === "object") ?((typeof Record != "undefined" && nodeValue instanceof Record) ? JSON.stringify(nodeValue.$.toJSON()) : JSON.stringify(nodeValue)) : (nodeValue== null || nodeValue == undefined) ? "" : nodeValue;
                            let locNodeVal = nodeValue === undefined ? "" : nodeValue;
                            // if(node.nodeName === "style") {
                            //     node.ownerElement.setAttribute("style",locNodeVal);
                            // } else {
                            //     node.nodeValue = locNodeVal;
                            // }

                            // if(node instanceof Node) {
                            //Check safari issue once
                            let oE = node.ownerElement;
                            if(oE.hasAttribute(node.nodeName)) {
                                if(oE.tagName != "INPUT" || node.nodeName != "value" || !oE.validity.badInput) {
                                    oE.setAttribute(node.nodeName, locNodeVal);
                                }
                            } else {
                                node.nodeValue = locNodeVal;                              
                            }
                        }
                    }
                    parentNode._attributes[node.nodeName] = nodeValue;
                    if(/^(INPUT|TEXTAREA|SELECT)$/.test(parentNode.nodeName)) {
                        if(node.nodeName === "value") {
                             let val = (nodeValue === undefined) ? "" : nodeValue;
                             if(parentNode.value !== val) {
                                parentNode.value = val;
                             } 
                        } else if(node.nodeName === "checked") {
                            parentNode.checked = nodeValue;
                        }
                    }
                    if(!nodeValue && _LC.booleanAttrList.indexOf(node.nodeName) !== -1) {
                        parentNode.removeAttribute(node.nodeName);
                    }
                    let isStopped = parentNode._isStopped;
                    let result;
                    switch(parentNode.getAttribute("is")) {
                        case "for" :
                            this.updateForHelper(parentNode, {"type" : "update"});
                            break;
                        case "if" : 
                            result = this.updateSwitchHelper("if",parentNode, undefined, true, true);
                            break;
                        case "forIn" : 
                            this.updateForInHelper(parentNode , {"type" : "update"});
                            break;
                        case "switch" :
                            this.updateSwitchHelper("switch",parentNode, undefined, true, true);
                            break;
                        case "component" : 
                            if(node.nodeName === "component-name") {
                                this.updateDynamicComponent(parentNode, "update");    
                            }
                            break;
                        default:            
                    }
                	let handleBreakOptions;
                	if(isStopped &&  isStopped !== result) {
                		//console.log("new value is stopped");
                		if(!result) {
                			//console.log("new value is not stopped");
                			if(isStopped === "break") {
                				handleBreakOptions = "SM"
                			} else {
                				handleBreakOptions = "SS"
                			}
                		} else if(result === "break") {
                			handleBreakOptions = "MS";
                			//console.log("old value is continue and new value is break");
                		} else {
                			handleBreakOptions = "SM";
                			//console.log("old value is break and new value is continue");
                		}
                	} else if(result === "break") {
                		handleBreakOptions = "MS";
                		//console.log("old value not stopped and new value is break");
//                		this.handleBreak(parentNode._cx, "break");
                	} else if(result === "continue") {
                		handleBreakOptions = "SS";
                		//console.log("old value not stopped and new value is continue");
//                		this.handleBreak1(parentNode._cx , "continue");
                	}
                	if(handleBreakOptions) {
                		this.handleBreak(parentNode._cx, handleBreakOptions);
                	}
            }
        }
        else {
            node.nodeValue = nodeValue === undefined ? '' : nodeValue;
        }
        if(contextSwitchInfo) {
            _LC.removeContext(contextSwitchInfo.node, contextSwitchArray, contextSwitchInfo, isYieldContext);
        }
    }
    
    handleBreak(contextSwitchInfo, options) {
    	if(contextSwitchInfo) {
    		let forTemplate = contextSwitchInfo.node;
    		let breakIndex = contextSwitchInfo.itemIndex;
			let itemValue = forTemplate.getAttribute("item");
			let forContent = contextSwitchInfo.node._forContent;
			let endIndex = options[0] === "M" ? forContent.length : breakIndex + 1;
			for(let j=breakIndex;j<endIndex;j++) {
    			let currentForContent = forContent[j];
    			for(let i=0;i<currentForContent.length;i++) {
    				currentForContent[i].remove();
    				if(currentForContent[i]._forContent || currentForContent[i]._caseContent) {
    					this.removeHelpers(currentForContent[i]);
    				}
    			}	
    				forContent[j] = [];
    				_LC.removeSelectedBindingDeep(forTemplate._items[j].itemProperty, forTemplate._attributes.items[j]);
    				forTemplate._helpers[j] = [];
    				forTemplate._items[j] = {"_dynamicProperty" : {}, "itemProperty" : {}, "indexProperty": {}};
    		}
			let length = forTemplate._attributes.items.length;
			if(options[1] === "M") {
				this.updateForHelper(forTemplate, {firstIndex : breakIndex, secondIndex : length - breakIndex, "type" : "replace"}, undefined, {});
			} else {
				this.updateForHelper(forTemplate, {firstIndex : breakIndex, secondIndex : 1, "type" : "replace"}, undefined, {});
			}
    	}
    }
    
    createCustomEvent(eventName, parentNode, actObj){
        const customEvent = new CustomEvent(eventName);
        parentNode._actions[eventName] = customEvent;
        parentNode._actions[eventName].processAction = actObj;
    }

    isEmptyString(str){
        return (!(typeof str === "string") || str === "" );
    }

    processArgs(scope,dynN,dynamicValues,event, node, newCompile){
        let args = dynN.newHelperInfo && newCompile ? dynN.newHelperInfo.args : dynN.helperInfo.args;
        let helpers , j ;
        dynamicValues = dynamicValues || [];
        args = (Array.isArray(args)) ? Array.from(args) : args;
        for(let i=0; i<args.length; i++){
            if(args[i] && args[i].type){
                this.internalHelpers(scope,args,i,dynamicValues, event, node, newCompile);
            } else {
                if(!this.isEmptyString(args[i])) {
                    if(args[i].startsWith("'") && args[i].endsWith("'")){
                        args[i] = args[i].substr(1,args[i].length-2);       
                    } else {
                        args[i] = args[i].trim();
                        let dynamicVals = [];
                        if(args[i] === "event" && event) {
                            args[i] = event;
                        } else if(args[i] === "this" && node) {
                            args[i] = node.nodeType === 2 ? node.ownerElement : node;
                        } else {
                            args[i] = _LC.get(scope.component.data,args[i],dynamicVals);
                        }
                        dynamicValues.push(dynamicVals);
                    }
                } else if(newCompile) {
                    if(args[i] instanceof Array) {
                        args[i] = _LC.getDD(scope.component.data, args[i]);
                    }
                }
            }
            
        }
        return args;
    }
    
    internalHelpers(scope,args,i,dynamicValues, event, node, newCompile){
        //helperFunc = this.constructor.getHelper(args[i]);
        let helperFunc = args[i].value;
        let helperVal =  this.processHelper({"name" : helperFunc.name, "args" : this.processArgs(scope,{"helperInfo" : helperFunc},dynamicValues, event, node, newCompile)});
        args[i] = helperVal;
   }
    
    processHelper(helperFunc, node){
        let args = [];
        if(helperFunc.name === "method") {
            args.push(this, node);
        }
        if(helperFunc.name === "lbind"){
        	args.push(node.ownerElement);
        }
        if(!_LyteComponent.registeredHelpers[helperFunc.name]){
            _Lyte.error("LC003" , helperFunc.name);
            return;
	}
        return _LyteComponent.registeredHelpers[helperFunc.name].apply(this,args.concat(helperFunc.args));
    }
    
    getActionProperty(prop){
        let hostProp = this._properties;
        let value = (hostProp)?hostProp[prop].value:undefined;
        return value;
    }
    
    hasInternalBindings(content){
        return content.match(/[(]{1}[^)]+[)]{1}/);
    }
    
    getArgValues(argNames, properties) {
        let argValueArray = [];
        for(let i=0;i<argNames.length;i++) {
            argValueArray.push(properties[argNames[i]].value);
        }
        return argValueArray;
    }
    
    createEventListeners(node,actionType,actObj){
        let self = this;
        if(!node._callee && node !== this) {
            node._callee = this;
        }
        if(globalDOMEvents.indexOf(actionType) == -1){
            let infoAttr = actionType.substr(2);
            let infoAttrVal = node.getAttribute(infoAttr);
            // var evntListener = function(event) {
        	// 	var toRemove;
            //     if(!window.event) {
            //         window.event = event;
            //         toRemove = true;
            //     }
            //     _LC.throwAction.call(self,self,actionType.substr(2),actObj, undefined, undefined, node, event);
            //     if(toRemove) {
            //         window.event = undefined;
            //     }
            // };
            if ((_LyteComponent.registeredComponents[node.localName] && !node.component) || (node.tagName === "TEMPLATE" && node.getAttribute("is") === "component")) {
            	node._toRegEvnts = node._toRegEvnts || {};
            	node._toRegEvnts[actionType.substr(2)] = {"listener" : globalEventHandler , "attrVal" : this.tagName.toLowerCase()+" => "+actObj.name};
            } else {
            	node.setAttribute(infoAttr, this.tagName.toLowerCase()+" => "+actObj.name);
            	//Event is not in capture phase because, in capture phase, multiple event listeners in hierarchy are called from parent to child (since registration is done in that order)
            	node.addEventListener(actionType.substr(2), globalEventHandler);
            }
            if(node.hasAttribute(actionType)){
            	node[actionType] = undefined;
            }
            node.removeAttribute(actionType);
        }
    }
    
    registerYields() {
        this._yields = {};
        let yields = this.querySelectorAll('template[is=registerYield],template[is=yield]');
        for(let i=0;i<yields.length;i++) {
            let parentYield;
            if(yields[i].hasAttribute("from-parent") && this._callee && (parentYield = this._callee._yields[yields[i].getAttribute("yield-name")]) ) {
                let locYield;
                if(_Lyte._ie) {
                    locYield = document.createElement("div");
                    locYield.innerHTML = parentYield.outerHTML;
                    locYield = locYield.childNodes[0];
                    this.constructor.splitTextNodes(locYield);
                } else {
                    locYield = parentYield.cloneNode(true);
                }
                Object.keys(parentYield).forEach(function(item) {  //eslint-disable-line no-loop-func
                    locYield[item] = parentYield[item];
                });
                this._yields[yields[i].getAttribute("yield-name")] = locYield;
            } else {
                this._yields[yields[i].getAttribute("yield-name")] = yields[i];
            }
        }
    }

    connectedCallback() {
        if(this.hasAttribute("lyte-rendered") || !_LyteComponent.registeredComponents[this.localName] || this._ccCalled) {
            return;
        }
        let fastRenderProp = this._fR;
        if(!fastRenderProp) {
            this._callee = this._callee || this.getCallee(this.parentNode);
        }
        this.__h = [];
        this.__dc = [];
        if(fastRenderProp) {
            let methods = fastRenderProp.methods;
            if(methods) {
                this.setMethods(methods);
            }
            _LC.ccDelay.push(this);
            this._ccCalled = true;
        } else {
            this.actualConnectedCallback();
        }
    }
    actualConnectedCallback(){
        let compData = this.component.data;
        let fastRenderProp = this._fR;
        if(fastRenderProp) {
            this._callee = this._callee || this.getCallee(this.parentNode);
        }
        let templateAttributes = this.constructor._templateAttributes;
        if(templateAttributes && templateAttributes.attr) {
        	for(let key in templateAttributes.attr) {
//        		let attr = templateAttributes.attr[i];
				let attr = templateAttributes.attr[key];
        		if((!this.hasAttribute(attr.name) && !compData.hasOwnProperty(attr.name) ) || attr.globalEvent) {
        			if(attr.helperInfo && attr.helperInfo.name === "action") {
                        this._evBoundEvents = this._evBoundEvents || {};
                        let actionName = attr.helperInfo.args[0];
					    let boundName;
					    if(actionName.startsWith('"') || actionName.startsWith("'")) {
						boundName = actionName.substring(1, actionName.length - 1);
					    } else {
						//_Lyte.warn("Deprecation warning. Action name should be in quotes");
						boundName = actionName;
                        }
                        let actualAttrName = attr.globalEvent ? attr.name : (attr.name.indexOf("-") !== -1)? attr.name : attr.name.substr(2);
                        this._evBoundEvents[actualAttrName] = {"name" : boundName, "args" : attr.helperInfo.args, "from" : "component"};
                        let prevAttribute = this.getAttribute(attr.name);
                        let currentAttribute = this.constructor._template.getAttribute(attr.name);
                        //this.setAttribute("ev:"+attr.name, this.constructor._template.getAttribute(attr.name));
                        this.setAttribute(attr.name, currentAttribute + (prevAttribute ? " ; " + prevAttribute : ""));
                    }
                    if(!attr.globalEvent) {
                        attr.from = "component";
                        if(attr.staticValue) {
                            this.setAttribute(templateAttributes.attr[key].name, attr.staticValue);
                        } else {
                            this.setAttribute(templateAttributes.attr[key].name, "{{dummy}}");
							this.bindNode(this.attributes.getNamedItem(templateAttributes.attr[key].name), [], undefined, {}, templateAttributes.attr[key], undefined, undefined, true );
                        }
                    }
        			
        		}
        	}
        }
        for(let key in this._toRegEvnts) {
        	this.addEventListener(key, this._toRegEvnts[key].listener);
        	if(this.hasAttribute(key)) {
        		this.setAttribute(key, this.getAttribute(key) + " ; "+ this._toRegEvnts[key].attrVal);
        	} else {
        		this.setAttribute(key, this._toRegEvnts[key].attrVal);
        	}
        }
        this._toRegEvnts = {};
        let initialUnbound = _LC.unbound;
        let content =  this.afterConnected();
        if(!_LC.unbound && !fastRenderProp) {
        	Lyte.establishObserverBindings.call(this,this.constructor._observers);
        	//this.establishObserverBindings();
        	makeSet(compData, "_bindings");
        	compData._bindings.add(this._properties);
        	_LC.establishBindings(this._properties, compData);
        }

        _LC.unbound = initialUnbound;
        if(typeof content === "string") {
            if(content) {
                if(_LC.frSpecial) {
                    let temp = document.createElement("template");
                    temp.innerHTML = content;
                    this.innerHTML = "";
                    this.appendChild(temp.content);
                } else {
                    this.innerHTML = content;
                }
            }
            _LC.processAction(this);
        } else {
            this.appendChild(content);
        }
        let dataDef = this.component.__data;
        let attributes = this.attributes;
        this.__lyteIgnore = true;
        for(let i=attributes.length-1;i>-1;i--) {
            let camelCase = LyteComponent.String.toCamelCase(attributes[i].nodeName);
            if(dataDef[camelCase] && dataDef[camelCase].hideAttr) {
            this.removeAttribute(attributes[i].nodeName);
            }
        }
        this.__lyteIgnore = false;
	    this.setAttribute("lyte-rendered", "");
        
        if(!fastRenderProp) {
            this.dispatchEvent(new CustomEvent("onReady"));
        }
        
        this.callback("didConnect");
        this.onCallBack("didConnect");
        if(fastRenderProp) {
            this.removeAttribute("_lyteprop");
        }
    }
    onCallBack(name){
        let callbacks = this.constructor._callBacks[name];
        if(callbacks){
            for(let i=0;i<callbacks.length;i++){
                try{
                    callbacks[i].value.call(this.component);    
                } catch(e) {
                    _Lyte.error(e);
                }
                
            }
        }
    }
    callback(name){
        var func = this.component[name];
        var args;
        if(func){
            if(arguments.length > 1) {
                args = Array.from(arguments);
                args.splice(0,1)
            }
            try{
                func.apply(this.component, args || []);    
            } catch(e) {
                _Lyte.error(e);
            }
        }
    }
    establishObserverBindings() {
        let observers = this.constructor._observers;
        for(let i=0;i<observers.length;i++) {
            let props = observers[i].properties;
            for(let j=0;j<props.length;j++) {
                let actProp;
                let isArrayObserver = false;
                if(props[j].indexOf('.[]') !== -1) {
                    isArrayObserver = true;
                    actProp = this.getProperty(props[j].substring(0, props[j].indexOf('.[]')));
                } else {
                    actProp = this.getProperty(props[j]);
                }
                makeSet(actProp, "_observers");
                actProp._observers.add({callee : this, observer: observers[i], isArrayObserver : isArrayObserver});
            }
        }
    }
    removeBindings(properties, actualData) {
        var del = "delete";
        for(let i in properties) {
            let actData = actualData[i];
            if(actData && actData._bindings) {
                actData._bindings[del](properties[i]);
                //Error while trying to delete _bindings from actData when actData is of type Array
                /*  if(!actData._bindings.size) {
                    delete actData._bindings;
                } */
            }
            if(typeof properties[i] === "object" && actData) {
                this.removeBindings(properties[i], actData);
            }
        }
    }
    actualDisconnected() {
        var self = this;
        if(!self.component) {
            return;
        }
        self._cx = null;
        self._callee = null;
        self.component.$node = null;
        self.component.__data = null;
        self.component.data.__component__ = null;
        self.component.data = null;
        self.component = null;
        self.__dc = self.__dc || [];
        self.__h =  self.__h || [];
        for(var i=0;i<self.__dc.length;i++) {
            var helper = self.__dc[i];
            //helper.remove();
            if(helper.hasAttribute("lyte-keep-alive")) {
                var objKeys = Object.keys(helper._renderedComponent);
                for(var j=0;j<objKeys.length;j++) {
                    let key = objKeys[j];
                    if(key !== helper._currentComponent) {
                        // Will remove from hDiv.
                        helper._renderedComponent[key].remove();
                    }
                }
            }
        }
        for(var i=0;i<self.__h.length;i++) {
            self.__h[i].remove();
        }
        self.__h = [];
        self.__dc = [];
        let yields = self._yields;
        for(var key in yields) {
            yields[key]._callee = null;
        }
        self = null;
    }
    disconnectedCallback() {
        if(_LC.ignoreDisconnect || !this.component) {
	       return;
	    }
        this.component._bindings = null;
        if(!this._fR) {
            _LC.removeSelectedBindingDeep(this._properties, this.component.data);
        }
        if(this.__h && this.__h.length > 0){
            var self = this;
            var h = Array.from(this.__h);
            h.forEach(function(node){
                if(node._actualBinding){
                    self.removeHelpers(node);
                }
            })
            h = [];
        }
//      _LC.removeBindings(this._properties, this.component);
        for(let key in this._properties) {
            this._properties[key] = {};
        }
        this.callback('didDestroy');
        this.onCallBack('didDestroy');
        if(!_LC.dcc) {
            _LC.dcc = [];
            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    try{
                        for(var i=0,item;item=_LC.dcc[i];i++) {
                            item.actualDisconnected();
                        }
                    }
                    catch(e) {

                    }
                    _LC.dcc = undefined;
                });
            });
        }
        _LC.dcc.push(this);
        // var self = this;
        // setTimeout(function() {
        //     self.actualDisconnected();
        // },0);
        this.constructor.activeInstances--;
    }
}

Function.prototype.on = function(){
    return {"type": "callBack", "value":(this.type === "observer") ? this.value:this , "properties":arguments, "observes":(this.type === "observer" ? this: undefined)}
}
Function.prototype.observes = function() {
    return {"type" : "observer", "value" : this, "properties" : arguments, "on":Function.prototype.on}
}
Function.prototype.computed = function() {
    return {"type" : "computed", "value" : this, "properties" : arguments}
}

 
let LyteComponent = {
        "fRP" : {},
        "fRC" : 0,
        // "frcUnused" : [],
        "customPropRegex" : "",
        // "pushFrc" : function(fastRenderIndex) {
        //     this.frcUnused.push(fastRenderIndex);
        //     delete _LC.fRP[fastRenderIndex];
        // },
        // "getFrc" : function() {
        //     let frcIndex;
        //     if(this.frcUnused.length) {
        //         frcIndex = this.frcUnused.shift()
        //     } else {
        //         frcIndex = this.fRC++;
        //     }
        //     return frcIndex;
        // },
        "customPropHandlers" : [],
		"_registeredComponents" : {},
        "toBeRegistered" : [],
        "updateCustomCrmComponent" : function(def,customCrmComponent){
            for (let key in def) {
                if (def[key] && def[key].type === "observer") {
                    customCrmComponent._observers.push(def[key]);
                } else if (def[key] && def[key].type === "callBack") {
                    var props = def[key].properties;
                    for (var k = 0; k < props.length; k++) {
                        if (!customCrmComponent._callBacks[props[k]]) {
                            customCrmComponent._callBacks[props[k]] = [];
                        }
                        customCrmComponent._callBacks[props[k]].push(def[key]);
                    }
                    if (def[key].observes) {
                        customCrmComponent._observers.push(def[key].observes);
                    }
                } else {
                        customCrmComponent.component.prototype[key] = def[key];
                }
            }
            return def;
        },
        "dataFromMixin" : function(mixinsToBeUsed,actionsFromMixin,methodsFromMixin,newDefinition){
            var mixinslen = mixinsToBeUsed.length;
            for(let i=0; i<mixinslen ; i++) {
                for(let item in mixinsToBeUsed[i]){
                    if(item === "actions") {
                        Object.assign(actionsFromMixin, mixinsToBeUsed[i][item]);    
                    } else if(item === "methods") {
                        Object.assign(methodsFromMixin, mixinsToBeUsed[i][item]);    
                    } else {
                        newDefinition[item] = mixinsToBeUsed[i][item];
                    }
                }
            }
            return{"actionsFromMixin":actionsFromMixin,"methodsFromMixin":methodsFromMixin,"newDefinition":newDefinition}
          },
        "throwEvent" : function(eventName){
            let self = this.$node ? this.$node : this;
            const evt = self._actions? self._actions[eventName] : undefined; 
            let customArgs = [];        
            if(arguments.length > 1){        
                for(let i=1;i<arguments.length; i++){            
                    customArgs.push(arguments[i]);                
                    }        
                }
                //wait for release
                //eventName = _LC.String.toCamelCase(eventName);
                _LC.throwAction.call(self,self._callee,eventName,undefined,true,customArgs,self);
            if(this.$node) {
                self.dispatchEvent(evt? evt : new CustomEvent(eventName, {"detail" : customArgs}));
            }
        },
        //this and scope reference should be either a node or a route.
        "throwAction" : function(scope,eventName,actObj,isCustom,customArgs, node, event, hasHandled, fromEv){
            let actionsObj;
            if(this._route && isCustom) {
                scope = _Lyte.Router.getRouteInstance(this._route);
                actionsObj = scope.actions || (scope.actions = {});
            } else if(this.routeName) {
                //process for the parent route and get the current component and proceed;
                let parentRoute = this.parent;
                if(parentRoute) {
                    if(parentRoute.component) {
                        scope = parentRoute.component;
                        actionsObj = scope.constructor._actions; 
                    } else {
                        scope = parentRoute;
                        actionsObj =  scope.actions || (scope.actions = {});            
                    }
                }
            } else if(scope){
                    actionsObj = scope.constructor._actions
            }
            if(!scope) {
                //Only warning is thrown because, we can have a eventListener for the dom directly. 
                if(!hasHandled) {
                    _Lyte.warn("Nothing handled the action "+ eventName + ".");    
                }
                return;
            }
            actObj = (actObj) ? actObj : this._actions && this._actions[eventName]? this._actions[eventName].processAction : void 0;     
            //wait for release
            /* 
            var dasherizedEventName = _LC.String.dasherize(eventName);
            actObj = (actObj) ? actObj : this._actions && this._actions[dasherizedEventName]? this._actions[dasherizedEventName].processAction : void 0;     
            */
            let args = customArgs ? customArgs : [];
            if(actObj){
            	var contextSwitchArray = [];
                if(node) {
                	_LC.adCx(node, contextSwitchArray);
                }
                let concatArgs;
                if(actObj.skipArgProcessing) {
                    // concatArgs = _Lyte.deepCopyObject(actObj.args);
                    // concatArgs.shift();
                    // var eventIndex = concatArgs.indexOf("__lyteEvent__");
                    // var nodeIndex = concatArgs.indexOf("__lyteNode__");
                    // if(eventIndex !== -1) {
                    //     concatArgs[eventIndex] = event;
                    // } 
                    // if(nodeIndex !== -1) {
                    //     concatArgs[nodeIndex] = target;
                    // }
                    concatArgs = actObj.args;
                } else {
                    concatArgs = this.processArgs(scope,{"helperInfo" : actObj}, undefined, event, node);
                }
                args.splice.apply(args, [0,0].concat(concatArgs) );
                if(node) {
                	_LC.rmCx(node, contextSwitchArray);
                }
                if(actionsObj[actObj.name]){
                    if(!isCustom){  
                        //args.unshift(window.event);
                        let parent = node.parentNode;
                        let val = actionsObj[actObj.name].apply(this.component,args);
                        if(event.currentTarget !== document.body && !fromEv) {
                            val = false;
                        }
                        hasHandled = true;
                        if(val !== false && !event.cancelBubble){
                        	if(actObj.from && node.getAttribute(event.type) && node._boundEvents && node._boundEvents[event.type]) {
                        		let actions = node._callee.constructor._actions;
                        		let actObj = node._boundEvents[event.type];
                        		let cloneActObj = _Lyte.deepCopyObject(actObj);
                                // cloneActObj.args.shift();
                                _LC.skipArgProcessing(cloneActObj, event, node);
                        		_LC.throwAction.call(node._callee,node._callee,event.type,cloneActObj, undefined, undefined, node, event, hasHandled);
                        	} else {
                                if(_LC.hasLyteEvents(node, eventName)) {
                                    let eventStopped = _LC.handleLyteEvents(node, event);
                                    val = eventStopped ? false : true;       
                                }
                                if(val === false) {
                                    return;
                                }
                        		if(_LC.isCustomElement(node)){
                        			scope = parent;
                        		}
                        		if(parent){
                                    let eventStopped;
                                    while(parent && (!parent.getAttribute(eventName) || parent.hasAttribute("disabled") ) && parent.tagName != "BODY"){
                        				if(_LC.hasLyteEvents(parent, eventName)) {
                                            eventStopped = _LC.handleLyteEvents(parent, event);
                                            if(eventStopped) {
                                                break;
                                            }
                                        }
                                        parent = parent.parentNode;
                        			}
                        			if(eventStopped || !parent || parent.tagName === "BODY"){
                        				return;
                        			}
                        			if(!parent._callee){
                        				parent._callee = parent.getCallee ? parent.getCallee(parent) : _LC.getCallee(parent);
                        			}
                        			if(parent && event.type === eventName && !event.cancelBubble){
                                       if(parent._evBoundEvents && parent._evBoundEvents[eventName]) {
                                           let actObj = parent._evBoundEvents[eventName];
                        		           let cloneActObj = _Lyte.deepCopyObject(actObj);
                                        //    cloneActObj.args.shift();
                                            _LC.skipArgProcessing(cloneActObj, event, parent);
                                           _LC.throwAction.call(parent,parent,eventName,cloneActObj,undefined,undefined,parent,event, hasHandled);  
                                       } else if(parent && parent._boundEvents && parent._boundEvents[eventName]) {
                                           let actObj = parent._boundEvents[eventName];
                        		           let cloneActObj = _Lyte.deepCopyObject(actObj);
		                                   _LC.skipArgProcessing(cloneActObj, event, parent);
                                           _LC.throwAction.call(parent._callee,parent._callee,eventName,cloneActObj,undefined,undefined,parent,event, hasHandled);  
                                       }
                        			}
                        		}
                        	}
                        }
                    }            
                    else{                
                        actionsObj[actObj.name].apply(this._callee.component,args);
                        hasHandled = true;                                             
                    } 
                }
                else{
                    _Lyte.error("LC004" , actObj.name);
                }
            } else if(isCustom) {
                var eventsObj = actionsObj[eventName]  || actionsObj[_LC.String.toCamelCase(eventName)] || actionsObj[_LC.String.dasherize(eventName)];
                if(eventsObj) {
                    var scopeS = _LC.isCustomElement(scope) ? scope.component : scope;   
                    let val = eventsObj.apply(scopeS, args);
                    //let val = eventsObj.apply(_LC.isCustomElement(scope)? scope.component : scope, args);
                    hasHandled = true;
                    if(val !== false) {
                        _LC.throwAction.call(scope, scope._callee, eventName, actObj, isCustom, customArgs, undefined, undefined, hasHandled);
                    }
                } else {
                    _LC.throwAction.call(scope, scope._callee, eventName, actObj, isCustom, customArgs, undefined, undefined, hasHandled);
                }
            }
            
        },
        "isControlHelper" : function(ownerElement) {
        	return (ownerElement.tagName === "TEMPLATE" && ownerElement.getAttribute("is") && ownerElement.getAttribute("is") !== "component") || (ownerElement.hasAttribute("lyte-for") || ownerElement.hasAttribute("lyte-if") || ownerElement.hasAttribute("lyte-switch") || ownerElement.hasAttribute("lyte-forIn"));
        },
        "isCustomElement" : function(node, isTemplate) {
            return node.hasAttribute && ((( node.tagName ==="TEMPLATE" || node.attributes["lyte-for"] || node.attributes["lyte-if"] || node.attributes["lyte-switch"] || node.attributes["lyte-forIn"] ) && isTemplate )  || (node.nodeName && node.nodeName.indexOf('-') !== -1 && (_LyteComponent.registeredComponents[node.localName] || node.tagName === "LYTE-YIELD")));
        },
        "componentSet" : function(key, value, forceExecute, fromParent) {
            if(!forceExecute && this.get(key) === value) {
                _LC.clearError(this.data, key);
                return;
            }
            //temporary fix
            _LC.set(this.data, key, value, undefined, fromParent);
        },
        "componentGet" : function(key) {
            return key ? _LC.get(this.data, key) : this.data;
        },
        "nodeGet" : function(key) {
            return key ? this.component.get(key) : this.component.data;
        },
        "nodeSet" : function(key, value, fromParent) {
            this.component.set(key, value, undefined, fromParent);
        },
        "registerComponent" : function(componentName, definition, options) {
            if(_LyteComponent.registeredComponents[componentName]) {
            _Lyte.warn("Component "+ componentName + " already registered");
            return;
            }
            let customCrmComponent;
            if(_LC._registeredComponents[componentName]) {
            	customCrmComponent = _LC._registeredComponents[componentName];
            } else {
            	customCrmComponent = class extends customElementPrototype {}
                customCrmComponent._properties = {};
                customCrmComponent.activeInstances = 0;
                customCrmComponent._depthTemp = document.createElement("template");
                customCrmComponent.prototype.throwAction = this.throwAction;
            }
            customCrmComponent.prototype.get = this.nodeGet;
            customCrmComponent.prototype.set = this.nodeSet;
            options = options ? options : {};
            let mixinsToBeUsed = [];
            if (options.mixins) {
                options.mixins.forEach(function (element) {
                  if(Lyte.Mixin.exists(element)){
                    mixinsToBeUsed.push(Lyte.registeredMixins[element]);
                  }else{
                  Lyte.$.requiredMixins(element,componentName,"component");
                  }
                });
            }
            
            function Component() {}
            customCrmComponent.component = Component;
            let compPrototype = Component.prototype;
            compPrototype.set = this.componentSet;
            compPrototype.get = this.componentGet;
            compPrototype.throwEvent = this.throwEvent;
            compPrototype.executeMethod = _LC.executeMethod;
            compPrototype.getData = _LC.componentGetData;
            compPrototype.setData = _LC.componentSetData;
            compPrototype.getMethods = _LC.componentGetMethods;
            compPrototype.setMethods = _LC.componentSetMethods;
            customCrmComponent._mixins = options.mixins;
            let mixinslen = mixinsToBeUsed.length;

            let actionsFromMixin = {};
            let methodsFromMixin = {};
            let newDefinition = {};
            if(mixinsToBeUsed.length){
                _LC.dataFromMixin(mixinsToBeUsed,actionsFromMixin,methodsFromMixin,newDefinition);
            }
            definition = Object.assign(newDefinition, definition);
            customCrmComponent._actions = Object.assign({}, actionsFromMixin, definition.actions);
            customCrmComponent._template = definition._template;
            delete definition._template;
            customCrmComponent._dynamicNodes = definition._dynamicNodes;
            delete definition._dynamicNodes;
            customCrmComponent._templateAttributes = definition._templateAttributes;
            delete definition._templateAttributes;
            customCrmComponent._callBacks = {};
            customCrmComponent._observers = [];
//            let properties = definition.data ? definition.data : {};
            let properties = definition.data ? definition.data : undefined;
            let methods = Object.assign({},methodsFromMixin, definition.methods);
//            customCrmComponent._observedAttributes = Object.keys(properties);
            customCrmComponent._observedAttributes = definition._observedAttributes || [];
            customCrmComponent._observedMethodAttributes = definition._observedMethodAttributes || {};
            delete definition._observedAttributes;
            delete definition._observedMethodAttributes;
            delete definition.data;
            delete definition.methods;
            definition = _LC.updateCustomCrmComponent(definition,customCrmComponent);
            customCrmComponent._data = properties;
            customCrmComponent._methods = methods;
            customCrmComponent._registerComponent(componentName,customCrmComponent);
            _LyteComponent.registeredComponents[componentName] = true;
            if(!_LC._registeredComponents[componentName]) {
            	if (document.readyState === "complete" || document.readyState === "interactive") {     
            		// document is already ready to go
            		customElements.define(componentName, customCrmComponent);
            	}
            	else{
            		_LC.toBeRegistered.push({name:componentName, def: customCrmComponent});
            	}
            }
            let depthTemp = customCrmComponent._depthTemp;
            if(!_LC._ie && depthTemp && depthTemp.content.childNodes.length) {
                depthTemp.setAttribute("data-id", "depthTemp_" + componentName);
                _LC.lyteComponentsDiv.appendChild(depthTemp);
            } else {
                delete customCrmComponent._depthTemp;
            }
            _LC._registeredComponents[componentName] = customCrmComponent;
        },
        "registerHelper" : function(name,helper){
            _LyteComponent.registeredHelpers[name] = helper;
        },
        "registerMixin" : function(name,mixin){
            _Lyte.Mixin.register.call(_Lyte, name, mixin);
        },
        "typeCast" : function(value, dataType, obj) {
        	if(value === null) {
        		return value;
        	}
        	try {
        		switch(dataType) {
            	case "string" : 
            		return typeof value === "object" ? JSON.stringify(value) : value.toString(); 	
            	break;
            	case "number" :
            		{
                    if(value == "") {
                        return undefined;
                    }
            		let val = +value;
            		if(isNaN(val)) {
            			throw "TypeCast exception";
            		} 
            		return val;
            		}
            	break;
            	case "array" : 
            	case "object" :
            		return JSON.parse(value);
            		break;
            	case "boolean" :
            		return ( (!value && value !== "") || value=== "false") ? false : true; 
            	break;
            	default : 
            		return value;
            	}
        	} catch(e) {
        		if(obj) {
        			obj.isError = true;
        		}
        		return value;
        	}
        	
        },
        "getDataType" : function(value) {
            var type = typeof value;
            if(type === "object") {
                if(value instanceof Array) {
                    return "array";
                }
            }
            return type;
        },
        "handleValidation" : function(object, property, value, component) {
            let error = _Lyte.validate(object, property, value, component);
            if(error) {
                _LC.set(component.data.errors, property, error);
                if(component.$node.callback) {
                    component.$node.callback("onError", property, error);
                }
            } else {
                _LC.clearError(object, property);
            }
            return error;
        },
        "clearError" : function(data, property) {
            if(data.errors && data.errors[property]) {
                _Lyte.objectUtils(data.errors, "delete", property);
            }
        },
        "apdNode" : function(node, comp) {
            _LC.tDiv.appendChild(node);
            comp.__h.push(node);
        },
        "update":function(object, property, value, fromStore,oldValue,setterScope, actualProperty, fromParent){
        	let fromComponent = object.__component__;
        	let updateAttr = true;
        	if(!oldValue){
                oldValue = object[property];
                if(fromComponent && fromComponent.tagName !== "LYTE-YIELD") {
                	let dataType, dataDef = fromComponent.component.__data[property];
                	if(dataDef && (dataType = dataDef.type)) {
                		updateAttr = !dataDef.hideAttr;
                		if(dataType !== _LC.getDataType(value) && (value !== undefined || dataType === "boolean")) {
                			value = _LC.typeCast(value, dataType);
                		}
                	}
                	if(value === oldValue) {
                        _LC.clearError(object, property);
                        return;
                	}
                	let error = _LC.handleValidation(object, property, value, fromComponent.component);
                    if(error) {
                		return;
                	}
                }
            	//object[property] = value;
                if(!object.hasOwnProperty(property) && !(object instanceof Array)) {
                    _LC.oF(object, "add", property, value, true )
                } else {
                    object[property] = value;
                }
            }
            let toBeExecuted = fromComponent ? true : false;
            let dasherizedAttr = _LC.String.dasherize(property);
            if(fromComponent && actualProperty && ( (typeof value === "string" && fromComponent.getAttribute(dasherizedAttr) !==  value) || fromComponent.hasAttribute(dasherizedAttr) )) {
                 if((!_LC.customPropRegex.exec(property) || fromComponent.hasAttribute(dasherizedAttr) ) && updateAttr) {
                     if(value && typeof value === "object") {
                    	 let jsonString;
                         try{
                            jsonString = JSON.stringify(value);
                            fromComponent.attributes.getNamedItem(dasherizedAttr).__lyteIgnore = true;
                            fromComponent.setAttribute(dasherizedAttr, jsonString);
                         } catch(e) {

                         }
                     } else {
                    	 let attributeString = _LC.typeCast(value, "string");
                    	 if(fromComponent.getAttribute(dasherizedAttr) !== attributeString) {
                             let detAttr = fromComponent.attributes.getNamedItem(dasherizedAttr);
                             if(detAttr) {
                                 detAttr.__lyteIgnore = true;
                             }
                             attributeString = attributeString || "";
                             fromComponent.setAttribute(dasherizedAttr, attributeString);
                         }
                     }
                 }
            }
            if(value && typeof value !== "string" && typeof value !== "boolean" && typeof value !== "number" ) {
                //newValue is of type object 
                
                if(oldValue && typeof oldValue === "object" && oldValue._bindings) {
                    //Both oldValue and newValue are objects. 
                    if(!value._bindings) {
                        defProp(value, "_bindings", {
                            enumerable: false, 
                            writable: true, 
                            value : new Set(),
                            configurable: true
                        });
                    }
                    //for changing only child component
                    if(fromComponent && fromComponent.component.data === object && property.indexOf('.')=== -1) {
                        let bindings = fromComponent.getProperty(property);
                        this.removeSelectedBindingDeep(bindings, oldValue);
                        value._bindings.add(bindings);
                        this.establishBindings(bindings, value);
                        //For removing binding in the object due to forIn Helper ( actual object binding and not the _dynamicNodes binding).
                        if(bindings._forHelpers) {
                            let bindfor = bindings._forHelpers.toArrayLyte();
                            for(var i=0;i<bindfor.length;i++){
                                let item = bindfor[i];
                                if(item._propBindingObject) {
                                    this.removeSelectedBindingDeep(item._propBindingObject, oldValue);
//                                  value._bindings.add(item._propBindingObject);
//                                  this.establishBindings(item._propBindingObject, value);
                                }
                            }
                        }
                        this.affectChanges(bindings,undefined,oldValue,setterScope,object[property]);
                    } else {
                    	//To change only the bindings present in the object and not all the bindings present in the oldValue.
                    	if(object._bindings) {
                    		let oldbind = object._bindings.toArrayLyte();
                            for(let i=0; i<oldbind.length;i++){
                                let item = oldbind[i][property];
                                if(item) {
                                	this.removeSelectedBindingDeep(item, oldValue);
                                	value._bindings.add(item);
                                	this.establishBindings(item, value);
                                	//For removing binding in the object due to forIn Helper ( actual object binding and not the _dynamicNodes binding).
                                	if(item._forHelpers) {
                                		let forbind = item._forHelpers.toArrayLyte();
                                		for(let j=0;j<forbind.length;j++){
                                			let itemBinding = forbind[j];
                                			if(itemBinding._propBindingObject) {
                                				this.removeSelectedBindingDeep(itemBinding._propBindingObject, oldValue);
                                			}
                                		}
                                	}
                                	this.affectChanges(item,undefined,oldValue,setterScope,object[property]);
                                }
                            }
                    	}
                    
                    
                    }
                } else {
                    //newValue is object and oldValue is string. Hence establish bindings from oldValue's object and place it in the newValue. 
                    if(object._bindings) {
                    	makeSet(value, "_bindings");
                        let objbind = object._bindings.toArrayLyte();
                        for(let i=0;i<objbind.length;i++){
                            let item = objbind[i];
                            if(item[property]) {
                                value._bindings.add(item[property]);
                                this.establishBindings(item[property], value);
                                this.affectChanges(item[property],undefined,oldValue,setterScope,object[property]);
                            }
                        }
                    }
                }
            } else {
                //newValue is string
                
                if(oldValue && typeof oldValue === "object" && oldValue._bindings && object._bindings) {
                    //newValue is string and oldValue is object 
                    let objbind = object._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item[property]) {
                            //oldValue._bindings.delete(item[property]);
                            //if(oldValue._bindings.size === 0) {
                            //  delete oldValue._bindings;
                            //  break;
                            //}
                        this.removeSelectedBindingDeep(item[property], oldValue);
                            if(item[property]._forHelpers) {
                                let forbind = item[property]._forHelpers.toArrayLyte();
                                for(let j=0;j<forbind.length;j++){
                                    let itemBinding =forbind[j];
                                    if(itemBinding._propBindingObject) {
                                        this.removeSelectedBindingDeep(itemBinding._propBindingObject, oldValue);
                                    }
                                }
                            }
                        }
                    }
                }
                
                //when newValue and oldValue , both are string, no need to change bindings. 
                if(object._bindings) {
                    let objbind = object._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item[property]) {
                            this.affectChanges(item[property],undefined,oldValue,setterScope,object[property]);
                        }
                    }
                }
            }
            if(toBeExecuted && !fromParent && fromComponent._attributeDetails && fromComponent._callee) {
            	//let syntaxValue = fromComponent.getAttributeNode(property).syntaxValue;
            	let attrDetail = fromComponent._attributeDetails[_LC.String.dasherize(property)];
            	let syntaxValue;
            	if(attrDetail && attrDetail.isLbind) {
            		syntaxValue = attrDetail.dynamicValue;
            	}
            	if(syntaxValue) {
            		let contextSwitchArray;
            		if(fromComponent._cx) {
            			contextSwitchArray = [];
            			_LC.changeContext(fromComponent._cx.node, contextSwitchArray, fromComponent._cx )
            		}
                    let obj = _LC.getNew(fromComponent._callee.component.data, syntaxValue);
                    if(!obj.context){
                        return;
                    }
            		let exec = false;
            		if(obj.context === fromComponent._callee.component.data) {
            			if(fromComponent._callee._properties[obj.lastKey] && fromComponent._callee._properties[obj.lastKey].__fromComponent) {
            				exec = true;
            			}
            		} else {
            			exec = true;
            		}
            		//self.setData(this._lbind,this.value);
            		if(exec) {
            			_LC.set(obj.context, obj.lastKey, value);
            		}
            		if(contextSwitchArray) {
            			_LC.removeContext(fromComponent._cx.node, contextSwitchArray, fromComponent._cx )
            		}
            	}
            }
        },
        "getContentForIE" : function getContentForIE(content, constr, newlyCreated, info) {
            if(typeof content === "string") {
                newlyCreated = true;
                var div = createElement("div");
                div.innerHTML = content;
                content = div.childNodes[0];
                constr.splitTextNodes(content);
            }
            if(content.getAttribute && content.getAttribute("depth")) {
                if(Lyte._ms && info) {
                    info._content = div;
                }
                var itr = parseInt(content.getAttribute("depth"));
                content = _Lyte._ie ? content : (newlyCreated ? content.content : content.content.cloneNode(true));
                for(var i=0;i<itr;i++) {
                    content = content.childNodes[0];
                }
            }
            return content;
        },
        "replaceWithPf" : function(node1, node2) {
            if(_Lyte._rwpf) {
            	insertBefore(node1.parentNode,node2, node1);
                node1.remove();
            } else {
                node1.replaceWith(node2);
            }
        },
        "getCallee" : function(callee, self){
            while(callee &&  !_LC.isCustomElement(callee) && callee.tagName !== "LYTE-YIELD") {
                if(callee.tagName === "BODY") {
                    callee = null;
                    break;
                }
                callee = callee.parentNode;
            }
            if(callee && callee.tagName === "LYTE-YIELD") {
            return callee._registerYield? callee._registerYield._callee : undefined;
            }
            return ((self ===  callee) ? undefined : callee);
        },
        "set" : function(object, property, value, fromStore, fromParent) {
            let lastIndex = -1;
            if(!(property instanceof Object) || !property){
                property = property+"";
                lastIndex = property.lastIndexOf('.');
            }
            let actualProperty = property;
            if(lastIndex !== -1) {
                let outerPropertyPath = property.substring(0, lastIndex);
                property = property.substring(lastIndex + 1);
                object = _LC.get(object, outerPropertyPath);
            }
            if(typeof property === "string" && object[property] === value) {
                if(object.__component__) {
                    _LC.clearError(object, property);
                } else if(_Lyte.isRecord(object) && !object.$.isCloned) {
                    store.$.clrRecErr(object.$, property);
                }
                return;
            }
            let oldValues = [];
            if(object._setterScope){
                var setterScope = object._setterScope;
            }
            actualProperty = actualProperty === property ? actualProperty : undefined
            if(property instanceof Object){
            	if(_Lyte.isRecord(object) && !fromStore && !object.$.isCloned) {
                        // for(let key in property){
                        //     if(Array.isArray(object[key])){
                        //         oldValues.push({key:key,oldValue:object[key].slice(0)});    
                        //     }
                        //     else{
                        //         oldValues.push({key:key,oldValue:object[key]});
                        //     }
                        // }
                        for(let key in property) {
                            let locValue = property[key];
                            let dataType = object.$.model.fieldList[key];
                            dataType = dataType ? dataType.type : undefined;
                            if(dataType && (locValue !== undefined || dataType === "boolean") && dataType !== _LC.getDataType(locValue)) {
                                property[key] = _LC.typeCast(locValue, dataType);
                            }
                        }
                        let record = store.$.setData(object.$, property);
                        if(record.$.isError){
                            return record;
                        }
                        // for(let i=0; i<oldValues.length; i++){
                        //     _LC.update(object,oldValues[i].key,object[oldValues[i].key],fromStore,(oldValues[i].oldValue === undefined)?null:oldValues[i].oldValue ,setterScope, actualProperty, fromParent);
                        // }
                } else {
                    //object[property] =  value;
                    for(let key in property){
                        //_LC.update(object,key,property[key],fromStore,undefined,setterScope, actualProperty, fromParent);
                        _LC.set(object,key,property[key],fromStore, fromParent);
                    }
                }
            }
            else{
                if(_Lyte.isRecord(object) && !fromStore && !object.$.isCloned) {
                    let old = object[property];
					let dataType = object.$.model.fieldList[property];
                    dataType = dataType ? dataType.type : undefined;
                    if(dataType && (value !== undefined || dataType === "boolean") && dataType !== _LC.getDataType(value)) {
                        value = _LC.typeCast(value, dataType);
                    }
                    let record = store.$.setData(object.$, property,value);
                    if(record.$.isError){
                        return record;
                    }
                    //Commented because update will happend when "set" is called from setData of store. 
                    //_LC.update(object,property,value,fromStore,(old === undefined) ? null : old,setterScope , actualProperty);    
                } else {
                    _LC.update(object,property,value,fromStore,undefined,setterScope,actualProperty, fromParent);
                }
            }
        },
        "adCx" : function(node, contextSwitchArray) {
        	let isYield = node.tagName === "LYTE-YIELD";
        	if(node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
        		_LC.changeContext(node._cx.node, contextSwitchArray, node._cx, isYield);
        	} else if(isYield && node._callee._cx) {
        		_LC.changeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx, true);
        	}
        }, 
        "rmCx" : function(node, contextSwitchArray) {
        	let isYield = node.tagName === "LYTE-YIELD";
        	if(node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
        		_LC.removeContext(node._cx.node, contextSwitchArray, node._cx, isYield);
        	} else if(isYield && node._callee._cx) {
        		_LC.removeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx, true);
        	}
        },
        "changeContext" : function(node, contextSwitchArray, contextSwitchInfo, proceedFurther) {
            if(!contextSwitchInfo) {
                return;
            }
            let isYield = node.tagName === "LYTE-YIELD";
            if(node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
                _LC.changeContext(node._cx.node, contextSwitchArray, node._cx, node.tagName === "LYTE-YIELD" || proceedFurther);
            } else if((node.tagName === "LYTE-YIELD" || proceedFurther) && node._callee && node._callee._cx) {
            	_LC.changeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx);
            }
            if(isYield) {
                let insertYield = node._registerYield;
                let callee = insertYield._callee;
                if(callee && callee._cx) {
                    _LC.changeContext(callee._cx.node, contextSwitchArray, callee._cx);
                }
            }
            let indexValue, itemValue;
            if(contextSwitchInfo.type) {
                if(contextSwitchInfo.type === "for") {
                    indexValue = node.getAttribute("index");
                    itemValue = node.getAttribute("item");
                    if(node._items.length === 0) {
                        return;
                    }
                } else {
                    indexValue = node.getAttribute("key");
                    itemValue = node.getAttribute("value");
                    if(Object.keys(node._items).length === 0) {
                        return;
                    }
                }
                let callee = node._callee;
                let initialItemValue = callee.component.data[itemValue];
                let initialIndexValue = callee.component.data[indexValue];
                let initialItemProp = callee._properties[itemValue];
                let initialIndexProp = callee._properties[indexValue];
                 let items = contextSwitchInfo.type === "for" ? node._currentItems : node._currentObject;
                // let items = contextSwitchInfo.type === "for" ? node._attributes.items : node._attributes.object;
                callee.component.data[itemValue] = items[contextSwitchInfo.itemIndex];
                callee.component.data[indexValue] = contextSwitchInfo.itemIndex;
                callee._properties[itemValue] = node._items[contextSwitchInfo.itemIndex].itemProperty;
                callee._properties[indexValue] = node._items[contextSwitchInfo.itemIndex].indexProperty;
                let dummyObject = {"initialItemValue" : initialItemValue , "initialIndexValue" : initialIndexValue, "initialItemProp" : initialItemProp, "initialIndexProp" : initialIndexProp};
                contextSwitchArray.push(dummyObject);
            } else {
                //handling for yield
                let dummyObject = {};
                let callee = node._registerYield._callee;
                Object.keys(contextSwitchInfo.node._properties).forEach(function(key) {
                    dummyObject[key] = {};
                    dummyObject[key].value = callee.component.data[key];
                    dummyObject[key].property = callee._properties[key];
                    callee._properties[key] = contextSwitchInfo.node._properties[key];
                    callee.component.data[key] = contextSwitchInfo.node.component.data[key];
                }); 
                contextSwitchArray.push(dummyObject);
            }
        },
        "removeContext" : function(node, contextSwitchArray, contextSwitchInfo, proceedFurther) {
            if(!contextSwitchInfo) {
                return;
            }
            let isYield = node.tagName === "LYTE-YIELD";
            if(node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
                _LC.removeContext(node._cx.node, contextSwitchArray, node._cx, node.tagName === "LYTE-YIELD" || proceedFurther);
            } else if((node.tagName === "LYTE-YIELD" || proceedFurther) && node._callee && node._callee._cx) {
            	_LC.removeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx)
            }
            if(isYield) {
                let insertYield = node._registerYield;
                let callee = insertYield._callee;
                if(callee && callee._cx) {
                    _LC.removeContext(callee._cx.node, contextSwitchArray, callee._cx);
                }
            }
            let indexValue, itemValue;
            if(contextSwitchInfo.type) {
                if(contextSwitchInfo.type === "for") {
                    indexValue = node.getAttribute("index");
                    itemValue = node.getAttribute("item");
                    if(node._items.length === 0) {
                        return;
                    }
                } else {
                    indexValue = node.getAttribute("key");
                    itemValue = node.getAttribute("value");
                    if(Object.keys(node._items).length === 0) {
                        return;
                    }
                }
                let callee = node._callee;
                let items = node._attributes.items;
                let removedObject = contextSwitchArray.shift();
                callee.component.data[itemValue] = removedObject.initialItemValue;
                callee.component.data[indexValue] = removedObject.initialIndexValue;
                callee._properties[itemValue] = removedObject.initialItemProp;
                callee._properties[indexValue] = removedObject.initialIndexProp;
            } else {
                let callee = node._registerYield._callee;
                let removedObject = contextSwitchArray.shift();
                Object.keys(contextSwitchInfo.node._properties).forEach(function(key) {
                    callee.component.data[key] = removedObject[key].value;
                    callee._properties[key] = removedObject[key].property;
                });
            }
        },
        "oF" : function() {
            let object = arguments[0];
            let functionName = arguments[1];
            let property = arguments[2];
            let newValue = arguments[3];
            let fromComponent = arguments[4];
            let fromStore = arguments[5];
            if(functionName === "add" && !fromComponent) {
            	_LC.set(object, property, newValue, fromStore);
            	return;
            }
            let options = {};
            options.type = functionName;
            options.property = property;
            if(!/^(add|delete)$/.test(functionName)) {
                _Lyte.error("LC005", functionName);
                return;
            }
            let bindings = object._bindings;
            if(functionName === "delete") {
            	_LC.set(object, property, undefined, fromStore);
            } else {
                object[property] = newValue;
            }
            if(bindings) {
                let bind = bindings.toArrayLyte();
                for(let i=0;i<bind.length;i++) {
                    let binding = bind[i];
                    let forHelpers = binding._forHelpers;
                    if(forHelpers) {
                    	let helperBind = forHelpers.toArrayLyte();
                        for(let j=0;j<helperBind.length;j++) {
                            let forHelper = helperBind[j];
                            let itemValue = forHelper.getAttribute("key");
                            //Need to check
//                            _LC.removeSelectedBindingDeep({[itemValue] :                        forHelper._items[property].itemProperty}, {[itemValue] : object[property]});
                        	let contextSwitchArray = [];
                            if(functionName === "add") {
                            	_LC.adCx(forHelper, contextSwitchArray);
                            }
                            forHelper._callee.updateForInHelper(forHelper, options);
                            if(functionName === "add") {
                                _LC.rmCx(forHelper, contextSwitchArray);
                            }
                        }
                    }
                }
            }
            if(functionName === "delete") {
                delete object[property];
            }
        },
        "aF" : function() {
            let array = arguments[0];
            let functionName = arguments[1];
            if(/^(replaceAt|removeAt|shift)$/.test(functionName) && !array.length) {
                _Lyte.warn(functionName + " operation cannot be performed on empty array");
                return;
            }
            let commArgs = arguments[2];
            switch(functionName) {
            case "replaceAt" : 
                {
                let index = parseInt(arguments[2]);
                if(index > array.length) {
                    _Lyte.warn("index provided for replaceAt is greater than array length");
                    return [];
                }
                //let args = Array.prototype.slice.call(arguments, 3);
                let args = arguments[3];
                if(!(args instanceof Array)) {
                    args = [args];
                }
                let deletedItems = array.splice.apply(array, [index, 1].concat(args));
                let options = {"firstIndex" : index, "secondIndex" : args.length, "type" : "replace"};
                //All references updated by now
                
                //remove binding from previous object
                if(array._bindings) {
                    let objbind = array._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item._forHelpers) {
                            let helperbind = item._forHelpers.toArrayLyte();
                            for(let j=0;j<helperbind.length;j++){
                                let helper = helperbind[j];
                                /*if(helper.hasAttribute("unbound")) {
                            		continue;
                            	}*/
                                let finalIndex = index + deletedItems.length;
                                let itemValue = helper.getAttribute("item");
                                for(let i=index, j=0;i<finalIndex;i++,j++) {
                                    _LC.removeSelectedBindingDeep({[itemValue] : helper._items[i].itemProperty}, {[itemValue] : deletedItems[j]});
                                }
                                let contextSwitchArray = [];
                                _LC.adCx(helper, contextSwitchArray);
                                helper._callee.updateForHelper(helper, options);
                                _LC.rmCx(helper, contextSwitchArray);
                            }
                        }
                        for(let key in item) {
                            let parsedKey = parseInt(key);
                            if(!isNaN(parsedKey) && parsedKey >= options.firstIndex) {
                                let diff = parsedKey - options.firstIndex;
                                let oldObject;
                                if(diff <= options.thirdIndex) {
                                    oldObject = deletedItems[diff];
                                } else {
                                    oldObject = array[options.firstIndex - 1  + options.secondIndex + diff];
                                }
                                this.removeSelectedBindingDeep(item[key], oldObject);
                                if(item[key]._forHelpers) {
                                    let bindfor = item[key]._forHelpers.toArrayLyte();
                                    for(var j=0;j<bindfor.length;j++){
                                        let item1 = bindfor[j];
                                        if(item1._propBindingObject) {
                                            this.removeSelectedBindingDeep(item1._propBindingObject, oldObject);
//                                          value._bindings.add(item._propBindingObject);
//                                          this.establishBindings(item._propBindingObject, value);
                                        }
                                    }
                                }
                                if(array[parsedKey] && typeof array[parsedKey] === "object") {
                                	makeSet(array[parsedKey], "_bindings");
                                this.establishBindings({"dummy" : item[key]},{"dummy" : array[parsedKey]});
                                }
                                this.affectChanges(item[key]);
                            }
                        }
                    }
                }
                _LC.callArrayObservers(array,{type:"array",insertedItems:args,index:index});
                return deletedItems[0];
                }
                break;
            case "splice" : {
                let index = parseInt(arguments[2]);
                if(index > array.length) {
                    _Lyte.warn("index provided for replaceAt is greater than array length");
                    return [];
                }
                //let args = Array.prototype.slice.call(arguments, 3);
                let toBeDeleted = arguments[3];
                let args = arguments.length > 4 ? arguments[4] : [];
                if(!(args instanceof Array)) {
                    args = [args];
                }
                let deletedItems = array.splice.apply(array, [index, toBeDeleted].concat(args));
                let options = {"firstIndex" : index, "secondIndex" : args.length, "thirdIndex" : toBeDeleted, "type" : "splice"};
                //All references updated by now
                
                //remove binding from previous object
                if(array._bindings) {
                    let objbind = array._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item._forHelpers) {
                            let helperbind = item._forHelpers.toArrayLyte();
                            for(let j=0;j<helperbind.length;j++){
                                let helper = helperbind[j];
                                /*if(helper.hasAttribute("unbound")) {
                            		continue;
                            	}*/
                                let finalIndex = index + deletedItems.length;
                                let itemValue = helper.getAttribute("item");
                                for(let i=index, j=0;i<finalIndex;i++,j++) {
                                    _LC.removeSelectedBindingDeep({[itemValue] : helper._items[i].itemProperty}, {[itemValue] : deletedItems[j]});
                                }
                                let contextSwitchArray = [];
                                _LC.adCx(helper, contextSwitchArray);
                                helper._callee.updateForHelper(helper, options);
                                _LC.rmCx(helper, contextSwitchArray);
                            }
                        }
                        for(let key in item) {
                            let parsedKey = parseInt(key);
                            if(!isNaN(parsedKey) && parsedKey >= options.firstIndex) {
                                let diff = parsedKey - options.firstIndex;
                                let oldObject;
                                if(diff <= options.thirdIndex) {
                                    oldObject = deletedItems[diff];
                                } else {
                                    oldObject = array[options.firstIndex - options.thirdIndex  + options.secondIndex + diff];
                                }
                                this.removeSelectedBindingDeep(item[key], oldObject);
                                if(item[key]._forHelpers) {
                                    let bindfor = item[key]._forHelpers.toArrayLyte();
                                    for(var j=0;j<bindfor.length;j++){
                                        let item1 = bindfor[j];
                                        if(item1._propBindingObject) {
                                            this.removeSelectedBindingDeep(item1._propBindingObject, oldObject);
//                                          value._bindings.add(item._propBindingObject);
//                                          this.establishBindings(item._propBindingObject, value);
                                        }
                                    }
                                }
                                if(array[parsedKey] && typeof array[parsedKey] === "object") {
                                	makeSet(array[parsedKey], "_bindings");
                                this.establishBindings({"dummy" : item[key]},{"dummy" : array[parsedKey]});
                                }
                                this.affectChanges(item[key]);
                            }
                        }
                    }
                }
                _LC.callArrayObservers(array,{type:'array',index:index,insertedItems:args, removedItems:deletedItems});
                return deletedItems;
            }
            break;
            case "push" : 
                {
                let toPush = arguments[2];
                if(!(toPush instanceof Array)) {
                    toPush = [toPush];
                }
                _LC.aF(array, 'insertAt', array.length, toPush);
                }
                break;
            case "pop" : 
                   return _LC.aF(array, 'remove', array.length -1)[0];
                break;
            case "shift" : 
            case "shiftObject" :
                  return _LC.aF(array, 'remove', 0)[0];
                  break;
            case "removeAt" : 
            case "remove" : 
                {
                let index = parseInt(arguments[2]);
                if(index > array.length) {
                    _Lyte.warn("index provided for removeAt is greater than array length");
                    return [];
                }
                let length = arguments[3] ? parseInt(arguments[3]) : 1;
                let options = {"firstIndex" : index, "secondIndex" : length, "type" : "remove"};
                let deletedItems = array.splice(index,length);
                if(array._bindings) {
                    let objbind = array._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item._forHelpers) {
                            let helperbind = item._forHelpers.toArrayLyte();
                            for(let j=0;j<helperbind.length;j++){
                                let helper = helperbind[j];
                                /*if(helper.hasAttribute("unbound")) {
                            		continue;
                            	}*/
                                let finalIndex = index + deletedItems.length;
                                let itemValue = helper.getAttribute("item");
                                for(let i=index, j=0;i<finalIndex;i++,j++) {
                                    _LC.removeSelectedBindingDeep({[itemValue] : helper._items[i].itemProperty}, {[itemValue] : deletedItems[j]});
                                }
                                let contextSwitchArray = [];
                                _LC.adCx(helper, contextSwitchArray);
                                helper._callee.updateForHelper(helper, options);
                                _LC.rmCx(helper, contextSwitchArray);
                            }
                           }
                            for(let key in item) {
                            let parsedKey = parseInt(key);
                            if(!isNaN(parsedKey) && parsedKey >= options.firstIndex) {
                                let diff = parsedKey - options.firstIndex;
                                let oldObject;
                                if(diff < options.secondIndex) {
                                    oldObject = deletedItems[diff];
                                } else {
                                    oldObject = array[options.firstIndex - options.secondIndex + diff];
                                }
                                this.removeSelectedBindingDeep(item[key], oldObject);
                                if(item[key]._forHelpers) {
                                    let bindfor = item[key]._forHelpers.toArrayLyte();
                                    for(var j=0;j<bindfor.length;j++){
                                        let item1 = bindfor[j];
                                        if(item1._propBindingObject) {
                                            this.removeSelectedBindingDeep(item1._propBindingObject, oldObject);
//                                          value._bindings.add(item._propBindingObject);
//                                          this.establishBindings(item._propBindingObject, value);
                                        }
                                    }
                                }
                                if(array[parsedKey] && typeof array[parsedKey] === "object") {
                                	makeSet(array[parsedKey]._bindings);
                                this.establishBindings({"dummy" : item[key]},{"dummy" : array[parsedKey]});
                                }
                                this.affectChanges(item[key]);
                            }
                        }
                    }
                }
                _LC.callArrayObservers(array,{type:"array",removedItems:deletedItems,index:index});
                return deletedItems;
                }
                break;
            case "removeObject" : 
                    commArgs = [commArgs];
            case "removeObjects" :
                if(!(commArgs instanceof Array)) {
                    commArgs = [commArgs];
                }
                if(commArgs == array){
                    commArgs = Array.from(commArgs);// both array are same instance so cloning
                }
                for(var i=0;i<commArgs.length;i++) {
                    let inde = array.indexOf(commArgs[i]);
                    if(inde !== -1) {
                       _LC.aF(array, 'removeAt', inde);                         
                    }
                }
                //_Lyte.arrayUtils(array, 'removeObject', actObj);
                //_Lyte.arrayUtils(array, 'removeObjects', []);
            break;
            case "unshift" : 
            case "unshiftObject" : 
            case "unshiftObjects" : 
                //_LC.aF.apply(_LC, [array, 'insertAt', 0].concat(Array.prototype.slice.call(arguments, 2)));
                {
                let toPush = arguments[2];
                if(!(toPush instanceof Array)) {
                    toPush = [toPush];
                }
                _LC.aF(array, 'insertAt', 0, toPush);
                }
                break;
            case "insertAt" : 
                {
                let index = parseInt(arguments[2]);
                //let args = Array.prototype.slice.call(arguments, 3);
                let args = arguments[3];
                let len = args.length;
                if(!(args instanceof Array)) {
                    args = [args];
                }
                for(let i=index;i>array.length;i--) {
                    args.unshift(undefined);
                    index--;
                }
                let options = {"firstIndex" : index, "secondIndex" : args.length, "type" : "insert"};
                array.splice.apply(array, [index, 0].concat(args));
                if(array._bindings) {
                    let arrbind = array._bindings.toArrayLyte();
                    for(let i=0;i<arrbind.length;i++){
                        let item = arrbind[i];
                        if(item._forHelpers) {
                            let forbind = item._forHelpers.toArrayLyte();
                            for(let j=0;j<forbind.length;j++){
                            	/*if(forbind[j].hasAttribute("unbound")) {
                            		continue;
                            	}*/
                                let helper = forbind[j];
                                let contextSwitchArray = [];
                                _LC.adCx(helper, contextSwitchArray);
                                helper._callee.updateForHelper(helper, options);
                                _LC.rmCx(helper, contextSwitchArray);
                            }
                        }
                        for(let key in item) {
                            let parsedKey = parseInt(key);
                            if(!isNaN(parsedKey) && parsedKey >= options.firstIndex) {
                                this.removeSelectedBindingDeep(item[key], array[parsedKey+options.secondIndex]);
                                if(item[key]._forHelpers) {
                                    let bindfor = item[key]._forHelpers.toArrayLyte();
                                    for(var j=0;j<bindfor.length;j++){
                                        let item1 = bindfor[j];
                                        if(item1._propBindingObject) {
                                            this.removeSelectedBindingDeep(item1._propBindingObject, oldObject);
//                                          value._bindings.add(item._propBindingObject);
//                                          this.establishBindings(item._propBindingObject, value);
                                        }
                                    }
                                }
                                if(array[parsedKey] && typeof array[parsedKey] === "object") {
                                	makeSet(array[parsedKey], "_bindings");
                                this.establishBindings({"dummy" : item[key]},{"dummy" : array[parsedKey]});    
                                }
                                this.affectChanges(item[key]);
                            }
                        }
                    }
                }
                let position = parseInt(arguments[2]);
		_LC.callArrayObservers(array,{type:"array",insertedItems:(!(arguments[3] instanceof Array)) ? [arguments[3]]: arguments[0].slice(position,position+len),index:position});
                }
                break;
            case "concat" : 
                //_LC.aF.apply(_LC, [array, 'insertAt',array.length].concat(arguments[2]));
                _LC.aF(array, 'insertAt', array.length, arguments[2]);
                break;
            default: 
                _Lyte.error("LC006" , functionName);
                return;
            }
        },
        "callArrayObservers" : function(array,args) {
            if(array._bindings) {
                let objbind = array._bindings.toArrayLyte();
                for(let i=0;i<objbind.length;i++){
                    let binding = objbind[i];
                    let path = objbind[i]._path;
                    if(binding._observers) {
                        let obsbind = binding._observers.toArrayLyte();
                        for(let j=0;j<obsbind.length;j++){
                            let observer = obsbind[j];
                            if(observer.isArrayObserver) {
                                if(args){
                                    args.item = path;
                                }
                                observer.observer.value.call( observer.callee && observer.callee.component ? observer.callee.component : array._setterScope? array._setterScope : window , args);                               }
                        }
                    }
                    if(binding.length) {
                        this.affectChanges(binding.length);
                    }
                }
            }
        },
        "establishUpdateBindings" : function(bindings, property, actualData) {
            let objbind = bindings.toArrayLyte();
            for(let i=0;i<objbind.length;i++){
                let item = objbind[i];
                if(item[property]) {
                    makeSet(actualData, "_bindings");
                    actualData._bindings.add(item[property]);
                    this.establishBindings(item[property], actualData);
                }

            }
        },
        "establishSelectedBinding" : function(property, actualData,node) {
            if(!property) {
                return;
            }
            let propName = property._path;
            let props = propName.split('.');
            let currentProp = node.getProperty(props[0]);
            let currentValue = actualData[props[0]];
            for(let i=0;i<props.length;i++) {
                if(!currentValue || typeof currentValue !== "object") {
                    break;
                } 
                makeSet(currentValue, "_bindings");
                    currentValue._bindings.add(currentProp);
                    currentProp = currentProp[props[i+1]];
                    currentValue = currentValue[props[i+1]];
            }
        },
        "establishBindings": function(properties, actualData) {
            if(properties._helperNodes) {
                let path = properties._path;
                let arr = properties._helperNodes.toArrayLyte();
                for(let s=0;s<arr.length;s++) {
                    let nodes = arr[s]._dynamicProperty ? arr[s]._dynamicProperty[path]: undefined;
                    if(nodes) {
                        for(let j=0;j<nodes.length;j++) {
                            let node = nodes[j];
                            let helper = node.ownerElement;
                            if(helper && helper.tagName === "TEMPLATE" && helper.getAttribute("is") === "for") {
                                if(helper._items) {
                                    let item = helper.getAttribute("item");
                                    for(let i=0;i<helper._items.length;i++) {
                                        let data = actualData[i];
                                        let item = helper.getAttribute("item");
                                        if(data) {
                                            if(typeof helper._items[i] === "object") {
                                                this.establishBindings(helper._items[i].itemProperty, {[item] : data});
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for(let i in properties) {
                let actData = actualData[i];
                if(!actData || typeof actData === "string" || typeof actData === "number" || typeof actData === "boolean") {
                    if(!actualData._bindings) {
                    	makeSet(actualData, "_bindings");
                    }
                    actualData._bindings.add(properties);
                } else {
                    if(!actData._bindings) {
                    	makeSet(actData, "_bindings");
                    }
                    actData._bindings.add(properties[i]);
                    if(typeof properties[i] === "object") {
                        this.establishBindings(properties[i], actData);
                    }
                }
            }
        },
        "removeSelectedBindingDeep" : function(binding, actualData) {
            var del = "delete";
            if(!actualData) {
                return;
            }
            if(actualData._bindings) {
//                actualData._bindings[del](binding);
//                if(!actualData._bindings.size) {
//                    delete actualData._bindings;
//                }
            	deleteBindingCheckSize(actualData, "_bindings", binding);
            }
            for(let i in binding) {
                let actData = actualData[i];
                if(actData && actData._bindings) {
//                    actData._bindings[del](binding[i]);
//                    if(!actData._bindings.size) {
//                        delete actData._bindings;
//                    }
                    deleteBindingCheckSize(actData, "_bindings", binding[i]);
                }
                if(typeof binding[i] === "object" && actData) {
                    this.removeSelectedBindingDeep(binding[i], actData);
                }
            }
            if(binding._forHelpers) {
                let objbind = binding._forHelpers.toArrayLyte();
                for(let i=0;i<objbind.length;i++){
                    let fH = objbind[i];
                    if(fH.getAttribute("is") === "for") {
                        let item = fH.getAttribute("item");
                        let items = fH._attributes.items;
                        let itemCases = fH._items;
                        for(let i=0;i<itemCases.length;i++) {
                            this.removeSelectedBindingDeep(itemCases[i].itemProperty, items[i]);
                        }
                    } else {
                        if(fH._propBindingObject) {
                            if(actualData._bindings) {
//                                actualData._bindings[del](fH._propBindingObject);
//                                if(!actualData._bindings.size) {
//                                    delete actualData._bindings;
//                                }
                            	deleteBindingCheckSize(actualData, "_bindings", fH._propBindingObject);
                                this.removeSelectedBindingDeep(fH._propBindingObject, actualData);
                            }
                        }
                    }
                }
            }
        },
        "removeAllBindings" : function(properties, data) {
            var del = "delete";
            for(let key in properties) {
                if(data[key] && data[key]._bindings) {
//                    data[key]._bindings[del](properties[key]);
//                    if(!data[key]._bindings.size) {
//                        delete data[key]._bindings;
//                    }
                	deleteBindingCheckSize(data[key], "_bindings", properties[key]);
                }
                if(data[key] && typeof data[key] !== "string") {
                    _LC.removeAllBindings(properties[key], data[key]);
                }
            }
        },
        "affectChanges" : function(item, contextAlreadySwitched,oldValue,setterScope,newValue) {
            if(item._dynamicNodes) {
                for(let i=0;i<item._dynamicNodes.length;i++) {
                    item._dynamicNodes[i]._callee.updateNode(item._dynamicNodes[i], item._path);
                }
            }
            let propPath = item._path;
            if(item._helperNodes) {
                let nodes = [],itemHelperNodes = item._helperNodes.toArrayLyte();
                for(let s=0;s<itemHelperNodes.length;s++){
                    if(!item._helperNodes.has(itemHelperNodes[s])) {
                        continue;
                    }
                    if(itemHelperNodes[s].getAttribute("is") === "for" && itemHelperNodes[s]._items) {
                        let innerContextSwitchArray = [];
                        _LC.adCx(itemHelperNodes[s], innerContextSwitchArray);
                        let  indexValue = itemHelperNodes[s].getAttribute("index");
                        let itemValue = itemHelperNodes[s].getAttribute("item");
                        let callee = itemHelperNodes[s]._callee;
                        let initialItemValue = callee.component.data[itemValue];
                        let initialIndexValue = callee.component.data[indexValue];
                        let initialItemProp = callee._properties[itemValue];
                        let initialIndexProp = callee._properties[indexValue];
                        let items = itemHelperNodes[s]._attributes.items;
                        for(let i=0;i<itemHelperNodes[s]._items.length;i++) {
                            callee.component.data[itemValue] = items[i];
                            callee.component.data[indexValue] = i;
                            callee._properties[itemValue] = itemHelperNodes[s]._items[i].itemProperty;
                            if(itemHelperNodes[s]._items[i]._dynamicProperty[propPath]) {
                                nodes = itemHelperNodes[s]._items[i]._dynamicProperty[propPath];
                                for(let i=0;i<nodes.length;i++) {
                                    nodes[i]._callee.updateNode(nodes[i], propPath);
                                }
                            }
                        }
                        callee.component.data[itemValue] = initialItemValue;
                        callee.component.data[indexValue] = initialIndexValue;
                        callee._properties[itemValue] = initialItemProp;
                        callee._properties[indexValue] = initialIndexProp;
                        _LC.rmCx(itemHelperNodes[s], innerContextSwitchArray);                                    
                    } else if(itemHelperNodes[s].getAttribute("is") === "forIn" && itemHelperNodes[s]._items) {
                        let innerContextSwitchArray = [];
                        _LC.adCx(itemHelperNodes[s], innerContextSwitchArray);
                        let  indexValue = itemHelperNodes[s].getAttribute("key");
                        let itemValue = itemHelperNodes[s].getAttribute("value");
                        let callee = itemHelperNodes[s]._callee;
                        let initialItemValue = callee.component.data[itemValue];
                        let initialIndexValue = callee.component.data[indexValue];
                        let initialItemProp = callee._properties[itemValue];
                        let initialIndexProp = callee._properties[indexValue];
                        let object = itemHelperNodes[s]._attributes.object;
                        for(let key in itemHelperNodes[s]._items) {
                            callee.component.data[itemValue] = object[key];
                            callee.component.data[indexValue] = key;
                            callee._properties[itemValue] = itemHelperNodes[s]._items[key].itemProperty;
                            if(itemHelperNodes[s]._items[key]._dynamicProperty[propPath]) {
                                nodes = itemHelperNodes[s]._items[key]._dynamicProperty[propPath];
                                for(let i=0;i<nodes.length;i++) {
                                    nodes[i]._callee.updateNode(nodes[i], propPath);
                                }
                            }
                        }
                        callee.component.data[itemValue] = initialItemValue;
                        callee.component.data[indexValue] = initialIndexValue;
                        callee._properties[itemValue] = initialItemProp;
                        callee._properties[indexValue] = initialIndexProp;
                        _LC.rmCx(itemHelperNodes[s], innerContextSwitchArray);    
                    } else {
                        nodes = itemHelperNodes[s]._dynamicProperty[item._path] || [];
                        let contextSwitchArray = [];
                        if(nodes.length) {
                            _LC.adCx(itemHelperNodes[s], contextSwitchArray);
                            for(let i=0;i<nodes.length;i++) {
                                nodes[i]._callee.updateNode(nodes[i], item._path);
                            }
                            _LC.rmCx(itemHelperNodes[s], contextSwitchArray);    
                        }
                        
                    }
                }
            }
            if(item._observers) {
                let objbind = item._observers.toArrayLyte();
                for(let i=0;i<objbind.length;i++){
                    let observer = objbind[i];
                    observer.observer.value.call( observer.callee && observer.callee.component ? observer.callee.component : setterScope ? setterScope : window ,{type:"change",oldValue:oldValue,newValue:newValue, item: item._path});                      
                }
            }
            if(Array.isArray(item)){
                for(var i=0;i<item.length;i++){
                    for(let key in item[i]) {
                        this.affectChanges(item[i][key], true,oldValue?(oldValue[i]?oldValue[i][key]:oldValue[i]):oldValue,setterScope,newValue?(newValue[i]?newValue[i][key]:newValue[i]):newValue);
                    }
                }
            }
            else{
                for(let key in item) {
                    this.affectChanges(item[key], true,oldValue?oldValue[key]:oldValue,setterScope,newValue?newValue[key]:newValue);
                }
            }
        },
        "skipArgProcessing" : function(cloneActObj,ev,target) {
            if(cloneActObj.skipArgProcessing) {
                let args = cloneActObj.args = cloneActObj.actArgs;
                args.shift();
                var eventIndex = args.indexOf("__lyteEvent__");
                var nodeIndex = args.indexOf("__lyteNode__");
                if(eventIndex !== -1) {
                    args[eventIndex] = ev;
                } 
                if(nodeIndex !== -1) {
                    args[nodeIndex] = target;
                }
            } else {
                cloneActObj.args.shift();
            }
        },
        // getDV added
        "getDV" : function(value){    
            var result = [],ref = result,arr = [],data = "",strStack = [],arrayStack = [],refStack = [],strLast,str;
            for(var i=0;i<value.length;i++){
                if(value[i] === "."){
                    if(data.length){
                        ref.push(data);
                    }
                    data = "";
                    continue;
                }
                else if(value[i] === "["){
                    arrayStack.push(i)
                    if(data.length){
                        ref.push(data);
                    }
                    while(value[i+1] === "\s"){
                        i++;
                    }
                    if(value[i+1] === "\"" || value[i+1] === "'"){
                        strStack.push(value[i+1]);
                        strLast = value[i+1];
                        i++;
                    }
                    else if(arr.length){
                        ref.push([]);
                        refStack.push(ref);
                        ref = ref[ref.length-1];
                    }else{
                        arr.push([]);
                        refStack.push(ref);
                        ref = arr[arr.length-1];
                    }
                    data = "";
                    continue;
                }
                else if((value[i] === "\"" || value[i] === "'" ) && value[i++] === strLast){
                    while(value[i] === "\s" && value[i] != "]"){
                        i++;
                    }
                    strStack.pop();
                    str = true;
                }
                if(value[i] === "]"){
                    arrayStack.pop();
                    if(data.length){
                        if(str === true){
                            ref.push(data);    
                        }
                        else if(!isNaN(parseInt(data))){
                            if(refStack.length){
                                ref = refStack.pop();
                                if(arr.length && Array.isArray(ref[ref.length-1]) && !ref[ref.length-1].length){
                                    ref.pop();
                                }
                                ref.push(data);
                                if(!arrayStack.length && arr.length){
                                    arr.shift();
                                }
                            }
                        }
                        else{
                            ref.push(data);
                        }
                    }
                    if(!arrayStack.length && arr.length){
                        result.push(arr.shift());
                        ref = result;
                    }
                    else if(refStack.length && !arr.length){ 
                        ref = refStack.pop();
                    }
                    data = "";
                    str = "";
                    continue;
                }
                data = data.concat(value[i]);
            }
            if(data.length){
                result.push(data);
            }
            if(strStack.length || arrayStack.length){
                console.log("check the syntax",strStack,arrayStack);
            }
            return result;
        },
        "ccDelay" : [],
        "callCC" : function() {
            this.ccDelay.forEach(function(item) {
                if(item.component) {
                    item.actualConnectedCallback();
                }
            });
            this.ccDelay = [];
        },
        "getDD":function(context,dataArr){
            var self = context;
            dataArr.forEach(function(item,index){
                if(Array.isArray(item)){
                    if(context == undefined){
                        return undefined;
                    }
                    var inner = _LC.getDD(self,item);
                    if(inner == undefined){
                        return undefined;
                    }
                    context = context[inner];
                }else{
                    if(context == undefined){
                        return undefined;
                    }
                    context = context[item];
                }
            });
            return context;
        },

        "processStatic" : function(temp) {
            let arr = temp.innerHTML.split("__**");
            let newArr = [];
            for(var i=0;i<arr.length;i++) {
                if(arr[i].startsWith("--Lyte")) {
                    newArr.push(parseInt(arr[i].substring(6)));
                } else {
                    newArr.push(undefined);
                }
            }
            arr.cc = newArr;
            return arr;
        },
        "findLastNodeL" : function(lastNode1,count,node){
            var totalNodeIndex = 0;
            if(count != undefined){
                totalNodeIndex = count; 
            }
            var helperNode;
            switch(node.getAttribute("is")) {
                case "for" : 
                    helperNode = node._helpers[totalNodeIndex][0];
                    if(!lastNode1) {
                        lastNode1 = node._forContent[0][0];
                    }
                    break;
                case "forIn" : 
                    helperNode = node._helpers[totalNodeIndex][0];
                    if(!lastNode1) {
                        lastNode1 = node._forContent[node._keysArray[0]][0];
                    }                   
                    break;
                case "if" : 
                case "switch" : 
                    helperNode = node._helpers[totalNodeIndex];
                    if(!lastNode1) {
                        lastNode1 = node._caseContent[0];
                    }
                break;
                case "component" : 
                    lastNode1 = lastNode1._renderedComponent[lastNode1._currentComponent] || lastNode1;
                    return lastNode1;
            }
            if(helperNode && (lastNode1 == helperNode._placeHolder)) {
                lastNode1 =  this.findLastNodeL(undefined, undefined, helperNode);
            }
            return lastNode1;
        },
        "processAction" : function(node) {
            Array.from(node.querySelectorAll('[lyteaction]')).forEach(function(item) { 
                let locIndex = item.attributes.lyteaction.value;
                item._boundEvents = _LC.fRP[locIndex];
                delete _LC.fRP[locIndex];
                // _LC.pushFrc(locIndex);
                // item._boundEvents = JSON.parse(item.attributes.lyteaction.value);
                var _cx = item._boundEvents._cx;
                let boundEvents = item._boundEvents;
                delete boundEvents._cx;
                let componentName = boundEvents.componentName;
                delete boundEvents.componentName;
                for(var key in item._boundEvents) {
                    if(key.indexOf("-") !== -1) {
                        item._actions = item._actions || {};
                        item._actions[key] = new CustomEvent(key);
                        item._actions[key].processAction = item._boundEvents[key];
                        item._boundEvents[key].actArgs.shift();
                        let nodeIndex = item._boundEvents[key].actArgs.indexOf("__lyteNode__");
                        if(nodeIndex !== -1) {
                        	item._boundEvents[key].actArgs[nodeIndex] = item;
                        }
                        item._boundEvents[key].args = item._boundEvents[key].actArgs;
                        delete item._boundEvents[key];
                    } else {
                        let actArgs = _Lyte.deepCopyObject(item._boundEvents[key].args);
                        let actName = actArgs.splice(0,1)[0];
                        actName = actName.startsWith("'")? actName.replace(/'/g,''):  actName;
                        let actString = getArgString(actName, actArgs);
                        item.setAttribute(key.startsWith("on") ? key.substr(2) : key ,componentName+" => "+ actString);
                        if(!item._boundEvents[key].globalEvent) {
                            item.addEventListener(key,globalEventHandler);
                        }
                    }
                }
                item._boundEvents._cx = _cx;
                item.removeAttribute("lyteaction");
                //item._boundEvents = item.
            });
        },
        "get" : function(context, path, ac) {
            if(!ac) {
                ac = [];
            }
            try{
                let arr = path.match(/([^[\]]+|\[\])/g);
                let initialContext = context;
                ac.push(arr[0]);
                let locArr = arr[0].split('.'); 
                for(let k=0;k<locArr.length;k++) {
                    context = context[locArr[k]];
                }
                for(let i=1;i<arr.length;i++) {
                    let locVal = arr[i];
                    //this is context switching
                    if(locVal.startsWith(".")) {
                        //direct context switching
                        let locArr = locVal.substring(1).split('.');
                        for(let k=0;k<locArr.length;k++) {
                            context = context[locArr[k]];
                        }
                        ac[ac.length -1] = ac[ac.length - 1] + locVal;
                    } else if(locVal.startsWith("'") || locVal.startsWith('"') || !isNaN(locVal)) {
                        if(!isNaN(locVal)) {
                            ac[ac.length-1] = ac[0] + "." + locVal;
                        } else {
                            ac[ac.length-1] = ac[0] + "." + locVal.substring(1, locVal.length -1);
                        } 
                        context = context[locVal.substring(1, locVal.length -1)];
                    } else {
                        let length = ac.length;
                        let val = this.get(initialContext, locVal, ac);
                        ac[0] = ac[0] + "." + val;
                        context = context[val];
                    }
                    }
                return context;
            } catch(e) {
                return undefined;
            }
        },
        "getNew" : function(context, path) {
            try{
                let arr = path.match(/([^[\]]+|\[\])/g);
                let initialContext = context;
                let locArr = arr[0].split('.'); 
                if(arr.length < 2) {
                    if(locArr.length <2) {
                        return {"context": initialContext, "lastKey" : locArr[0]};
                    } else {
                        for(var k=0;k<locArr.length-1;k++) {
                            context = context[locArr[k]];
                        }
                        return {"context" : context, "lastKey" : locArr[k]}
                    }
                }
                for(let k=0;k<locArr.length;k++) {
                    context = context[locArr[k]];
                }
                for(var i=1;i<arr.length - 1;i++) {
                    let locVal = arr[i];
                    //this is context switching
                    if(locVal.startsWith(".")) {
                        //direct context switching
                        let locArr = locVal.substring(1).split('.');
                        for(let k=0;k<locArr.length;k++) {
                            context = context[locArr[k]];
                        }
                    } else if(locVal.startsWith("'") || locVal.startsWith('"') || !isNaN(locVal)) {
                        context = context[locVal.substring(1, locVal.length -1)];
                    } else {
                        let val = this.get(initialContext, locVal);
                        context = context[val];
                    }
                    }
                let lastKey = arr[i];
                if(lastKey.startsWith(".")) {
                    //direct context switching
                    let locArr = lastKey.substring(1).split('.');
                    let k=0
                    for(;k<locArr.length - 1;k++) {
                        context = context[locArr[k]];
                    }
                    lastKey = locArr[k];
                } else if(lastKey.startsWith("'") || lastKey.startsWith('"') || !isNaN(lastKey)) {
                    lastKey = lastKey.substring(1, lastKey.length -1);
                } else {
                    lastKey = this.get(initialContext, lastKey);
                }
                return {"context" : context, "lastKey" : lastKey };
            } catch(e) {
                return undefined;
            }
        },
        "componentGetData" : function(key){
            if(key) {
                return this.get(key);
            } else {
                return this.data;
            }
        },
        "componentSetData" : function(arg0, arg1) {
            if(typeof arg0 === "string") {
                this.set(arg0, arg1);
            } else if(arg0 instanceof Object) {
                for(let key in arg0) {
                    this.set(key, arg0[key]);
                }
            }
        },
        "componentGetMethods" : function(key) {
            if(key) {
                return this.methods[key];
            } else {
                return this.methods;
            }
        }, 
        "componentSetMethods" : function(arg0, arg1) {
            if(typeof arg0 === "string") {
                this.methods[arg0] = arg1;
            } else if(arg0 instanceof Object) {
                for(let key in arg0) {
                    this.methods[key] = arg0[key];
                }
            }
        },
        "render" : function(componentName, data, outlet) {
            if(componentName) {
                var component = createElement(componentName);
            } else {
                _Lyte.error("LC007");
                return;
            }
            if(data){
                component.setData(data);
            }
            if(outlet) {
                let actOutlet = document.querySelector(outlet);
                if(actOutlet) {
                    actOutlet.appendChild(component);
                    component._callee = component.getCallee ? component.getCallee(actOutlet) : undefined;
                } else {
                    _Lyte.error("LC008", outlet);
                }
            }
            return component;
        },
        "String" : {
            "upperCaseFirstLetter" : function(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            "lowerCaseFirstLetter" : function(string) {
                return string.charAt(0).toLowerCase() + string.slice(1);
            }, 
            "toCamelCase" : function(string) {
                return string.replace(/(-\w)/g, function(m){return m[1].toUpperCase();})
            }, 
            "dasherize" : function(string) {
                return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            }
        },
        "appendChild" : function(outlet, component) {
            _LC.ignoreDisconnect = true;
            outlet.appendChild(component);
            _LC.ignoreDisconnect = false;
        },
        "replaceWith" : function() {
            var argumentsArr = Array.from(arguments);
            var oldNode = argumentsArr.shift();
            _LC.ignoreDisconnect = true;
            var parentNode = oldNode.parentNode;
            for(var i=0,node;node=argumentsArr[i];i++) {
                parentNode.insertBefore(node,oldNode);
            }
            oldNode.remove();
            _LC.ignoreDisconnect = false;
        },	
        "insertBefore" : function(referenceNode, newNode, parentNode) {
            _LC.ignoreDisconnect = true;
            if(!parentNode) {
                if(!referenceNode) {
                    _Lyte.error("LC010");
                    _LC.ignoreDisconnect = false;
                    return;
                } else {
                    parentNode = referenceNode.parentNode;
                }
            }
            insertBefore(parentNode , newNode, referenceNode ? referenceNode : null);
            _LC.ignoreDisconnect = false;
        },
        "insertAfter" : function() {
            var argumentsArr = Array.from(arguments);
            var referenceNode = argumentsArr.shift();
            _LC.ignoreDisconnect = true;
            referenceNode.after.apply(referenceNode, argumentsArr);
            _LC.ignoreDisconnect = false;
        },
        "executeMethod" : function() {
            let args = Array.prototype.slice.call(arguments, 1);
            var methodName = _LC.String.toCamelCase(arguments[0]);
            if(!this.methods[methodName]) {
                _Lyte.error("LC009", methodName, this.$node.tagName);
                return;
            }
            return this.methods[methodName].apply(this, args);
        },
        "getProperData" : function(obj) {
            var dataType = obj.dataType;
            var attr = obj.attr;
            var newValue = obj.newValue;
            var tagName = obj.tagName;
            switch(dataType) {
            case "boolean" : 
                {
                    if(!newValue || newValue === "false") {
                        newValue= false;
                    } else {
                        newValue = true;
                    }
                }
                break;
            case "object" : 
                try{
                    newValue = JSON.parse(newValue);
                    if(!(newValue instanceof Object)) {
                        _Lyte.warn("data type of the value provided for attribute "+ attr + " of " + tagName + " is not valid");
                    }
                } catch(e) {
                    _Lyte.warn("attribute "+attr+ " is not a valid JSON string.");
                    return;
                }
                break;
            case "array":
                try{
                    newValue = JSON.parse(newValue);
                    if(!(newValue instanceof Array)) {
                        _Lyte.warn("data type of the value provided for attribute "+ attr + " of " + tagName + " is not valid");
                    }
                } catch(e) {
                    _Lyte.warn("attribute "+attr+ " is not a valid JSON string.");
                    return;
                }
                break;
            case "number":
                {
            let numValue = +newValue;
                if(newValue === numValue+"") {
                    newValue = numValue;
                } else {
                    _Lyte.warn("data type of the value provided for attribute "+ attr + " of " + tagName + " is not valid");
                    return;
                }
            }
                break;
            }
            obj.newValue = newValue;
            return true;
        }, 
        "cssEscape" : function(string) {
            if(string) {
                return string.replace(/['"]/g, "\\$&");    
            } else {
                return string;
            }
            
        }

}
_LyteComponent.chromeBugFix = function() {
    var version = userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);;
    version = version ? parseInt(version[2], 10) : 0;
    if(version > 62) {
        this.chI = [];
        document.addEventListener("focus", function(event) {
            var target = event.target;
            if(target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "DIV") {
                if(Lyte.Component.chI.indexOf(target) == -1) {
                    Lyte.Component.chI.push(target);
                }
            }
        } , true);
        this.chromeBugFix = function() {
            var tags = Lyte.Component.chI;
            var tagsL = tags.length;
            var toRemove = ["_callee", "_attributeDetails", "_attributes", "_removedAttributes", "_yields" , "_rA", "_cx"];//no i18n
            var toBeRemoved = [];
            var keepAliveInputs = [];
            document.querySelectorAll("[lyte-keep-alive]").forEach(function(item,index){
                for(var key in item._renderedComponent) {
                    keepAliveInputs.push.apply(keepAliveInputs, Array.from(item._renderedComponent[key].querySelectorAll("input")));
                }
            });
            for(var i= tagsL-1, item;item=tags[i];i--) {
                if((document.compareDocumentPosition(item) % 2) && (keepAliveInputs.indexOf(item) == -1)) {
                    tags.splice(i,1);
                    item.remove();
                    toBeRemoved.push(item);
                    item._rA = item._rA || [];
                    item._rA.forEach(function(remAttr) { //eslint-disable-line no-loop-func
                        remAttr.ownerElement = undefined;
                    });
                    toRemove.forEach(function(key) {//eslint-disable-line no-loop-func
                        item[key] = undefined;
                    });
                    Array.from(item.attributes).forEach(function(itemVal) {//eslint-disable-line no-loop-func
                        item.removeAttribute(itemVal.nodeName);
                    });
                }
            }
        }
        Lyte.addEventListener("afterRouteTransition", function() {
            Lyte.Component.chromeBugFix();
        });
        if(!Lyte.Router) {
            setInterval(function() {
                Lyte.Component.chromeBugFix();
            },300000)
        }
    }
}

let _LC = LyteComponent;

customElements.define("lyte-safari-test-component", Test);
var divTest = document.createElement("div");
divTest.innerHTML = "<lyte-safari-test-component t></lyte-safari-test-component>";

_LyteComponent.render = _LC.render;
//Change it in v3.0 - Remove from LyteComponent scope. 
_LyteComponent.insertBefore = _LC.insertBefore;
_LyteComponent.insertAfter = _LC.insertAfter;
_LyteComponent.replaceWith = _LC.replaceWith;
_LyteComponent.appendChild = _LC.appendChild;
_LC.tDiv = createElement("div");
_LC.tDiv.setAttribute("id", "dummy-templates-div");
_LC.tDiv.setAttribute("style", "display:none");
_LC.hDiv = createElement("div");
_LC.hDiv.setAttribute("id", "keep-alive-div");
_LC.hDiv.setAttribute("style", "display:none");
_LC.lyteComponentsDiv = createElement("div");
_LC.lyteComponentsDiv.setAttribute("id", "lyte-components-div");

Set.prototype.toArrayLyte = function() {
    if(this.constructor.name === "Set"){
        return Array.from(this);
    }
    else{
        return Array.from(this._values);
    }
}
//_LC.registerListener(function() {
//  
//});

if(document.readyState === "complete" || document.readyState === "interactive") {
    onDomContentForLyte();
} else {
    document.addEventListener("DOMContentLoaded", function(e){
        onDomContentForLyte();
    },true);
}

// Compilation functions 

function getMustache(value){
    value=(value && typeof value === "string") ? value.trim() : value;
    if(/^{{(?=[\s]*[\w-_]+)/.test(value)){
        let arr = value.match(/{{[a-zA-Z0-9_.[\]()]*(?![\\])}}/g);
        if(arr && arr.length > 1){
            //console.log("length>1",value)
            return undefined;
        }
        if(!syntaxCheck(value) || !(/{{[^}]*?(?:(?:('|")[^\1]*?\1)[^}]*?)*}}$/.test(value))){ //'
            return undefined;
        }
        let dynamic = value.match(/[\w!@#$%^&*)(+=.,_-]+[\s]*[(]{0,1}(?:"([^"]|\\")*?"|'([^']|\\')*?'|[\w\s!@#$%^&*)([\]+=.,_-]*?)*?[)]{0,1}[\s]*(?=}})/g); //'
        if(dynamic && dynamic.length > 1){
            return undefined;
        }
        else{
            dynamic = (dynamic) ? dynamic[0].trim(): dynamic;                
        }
//        let dynamic = /[\w!@#\$%\^\&*\)\(+=.,_-]+(?:"([^"]|\\")*?"|'([^']|\\')*?'|[\w\s!@#\$%\^\&*\)\(\[\]+=.,_-]*?)*?(?=}}$)/.exec(value);
        return dynamic;
    }
    return undefined;
}

function getHelper(dynamicValue, newCompile){
    let helperValue = /\((?:[^)]*|(?:(?:"(?:[^"\\]|\\.)*?")|(?:'([^'\\]|\\.)*?')|[\w\s!@#$%^&*)([\]+=.,_-]*?)*?)\)$/.exec(dynamicValue);
    if(helperValue){
        return getHelperInfo(dynamicValue,helperValue, newCompile);
    }
    return undefined;
}


function getHelperInfo(dynamicValue, helperValue, newCompile){
    let helperFunc = {};
    helperFunc.name = dynamicValue.substr(0,helperValue.index).replace(/\s/g,'');
    helperValue = (helperValue) ? helperValue[0].trim() : helperValue;
    let args = getHelperArgs(helperValue.substr(1,helperValue.length-2), newCompile);
    if(args === false){
        return false;
    }
    helperFunc.args = args;
    return helperFunc;
}

function getHelperArgs(str, newCompile){
    let stack = [], args = [] , from=0;
    let lastPushed; 
    for(let i=0; i<str.length; i++){
        if(!stack.length && str.charAt(i) === ","){
            let toPush = str.substr(from,i-from);
            toPush = toPush.trim();
            if(toPush && toPush.startsWith("\"") && toPush.endsWith("\"")){
                toPush = toPush.slice(1,-1);
                toPush = "'" + toPush + "'";
            }
            toPush = getHelperArgValue(toPush, newCompile);
            args.push(toPush);
            from = i + 1;
        }
        else if(str.charAt(i) === "("){
            if(stack[stack.length - 1] != "'" && stack[stack.length - 1] != "\""){
                stack.push(str.charAt(i));
                lastPushed = str.charAt(i);
            }
        }
        else if(str.charAt(i) === ")"){
            if(stack[stack.length-1] === "("){
                stack.pop();
            }
        } else if (str.charAt(i) === "'" && str.charAt(i - 1) !== "\\") {
            if (stack[stack.length - 1] === "'") {
                stack.pop();
            } else if (stack[stack.length - 1] !== "\"") {
                stack.push(str.charAt(i));
                lastPushed = str.charAt(i);
            }
        } else if (str.charAt(i) === "\"" && str.charAt(i - 1) !== "\\") {
            if (stack[stack.length - 1] === "\"") {
                stack.pop();
                //                  str.replaceAt(i, "'");
            } else if (stack[stack.length - 1] !== "'") {
                stack.push(str.charAt(i));
                lastPushed = str.charAt(i);
                //                  str.replaceAt(i, "'");
            }
        }
    }
    if (stack.length) {
        return false;
    }
    var toPush = str.substr(from, str.length - from);
    toPush = toPush.trim();
    if (toPush && toPush.startsWith("\"") && toPush.endsWith("\"")) {
        toPush = toPush.slice(1, -1);
        toPush = "'" + toPush + "'";
    }
    try {
        toPush = getHelperArgValue(toPush, newCompile);
    } catch (err) {
        //console.log("errr",err);
        return false;
    }

    args.push(toPush);
    if(newCompile) {
        var newArgs = [];
        args.forEach(function(item) {
            if(typeof item === "string" && item[0] !== "'" && item !== "event" && item !== "this") {
                newArgs.push(_LC.getDV(item));
            } else {
                newArgs.push(item);
            }
        });
        args = newArgs;
    }
    return args;
};

function syntaxCheck(value){
    var stack = [],lastAdded;
    for(var i=0;i<value.length;i++){
        if(value[i] === "'"){
            if(lastAdded === "'" && value[i-1] !== "\\"){
                stack.pop();
                lastAdded = undefined;
            }
            else if(!stack.length){
                lastAdded = value[i];
                stack.push(lastAdded);
            }
        }
        else if(value[i] === "\""){
            if(lastAdded === "\"" && value[i-1] !== "\\"){
                stack.pop();
                lastAdded = undefined;
            }
            else if(!stack.length){
                lastAdded = value[i];
                stack.push(lastAdded);
            }
        }
    }
    if(stack.length){
        return false;
    }
    return true;
}

function doCompile(dynamicN, dynamicNodes, componentName, constr, newCompile) {
    let lastUsedAttrPosition ;
    for(let j=0;j<dynamicNodes.length;j++) {
        let info = dynamicNodes[j], type = info.type, pos = info.position, helperInfo;
        let dynN = getDynamicNode(dynamicN,pos);
        let dynNewCompile;
        if(newCompile) {
            dynNewCompile = getDynamicNode(newCompile,pos);
        }
        switch(type) {
        case "text" : {
            let mustache = getMustache(dynN.nodeValue),dynamicValue,helperFunc;
            if(mustache){
                    helperFunc = getHelper(mustache);
            }   
            let dynamic = mustache;
            if(helperFunc){
                 info.helperInfo = helperFunc;
                 if(dynNewCompile) {
                    info.newHelperInfo = getHelper(mustache,true);
                    _LC.replaceWithPf(dynNewCompile, document.createTextNode("__**--Lyte"+j+"__**"));
                 }                 
            }
            else if(dynamic){
                //deepNodes.push({type: "text", position:deepN.slice(), dynamicValue: dynamic});
                info.dynamicValue = dynamic;
                info.newDynamicValue = _LC.getDV(dynamic);
                if(dynNewCompile) {
                    _LC.replaceWithPf(dynNewCompile, document.createTextNode("__**--Lyte"+j+"__**"));
                }
//              LN to do
//              deepNodes.push({type: "text", position:deepN.slice(), dynamicValue: getDV(dynamic)});                    
            }
        }
        break;
        case "insertYield" : {
             if(dynNewCompile) {
                 dynNewCompile.appendChild(document.createTextNode("__**--Lyte"+j+"__**"));
                 let yieldAttr = dynNewCompile.attributes["yield-name"];
                 info.yieldName = yieldAttr ? yieldAttr.nodeValue : undefined;
             }
        }
        break;
        case "componentDynamic" : {
        	if(dynNewCompile) {
        		dynNewCompile.appendChild(document.createTextNode("__**--Lyte"+j+"__**"));
        		info.componentName = dynNewCompile.localName;
        		var attrs = Array.from(dynNewCompile.attributes);
        		info.staticAttrs = {};
        		for(var i=0;i<attrs.length;i++) {
        			info.staticAttrs[_LC.String.toCamelCase(attrs[i].nodeName)] = attrs[i].nodeValue;
        		}
        		delete info.staticAttrs._lyteprop;
        	}
        }
        break;
        case "attr" : {
            let add = false, toBeRemoved = [],toBeAdded = [];
            let node = dynN;
            let attr = info.attr = info.attr || {};
            for(let i=0;i<node.attributes.length;i++) {
                if(node.attributes[i].nodeValue.indexOf("{{") !== -1) {
                    let val = node.attributes[i].nodeValue;
                    let actValue = getMustache(val), actObj ;
                    if(actValue){
                        actObj = getHelper(actValue);  
                    }
                    else if(/{{.*}}/.test(val) && !(/\\{{.*}}/.test(val))){
                        actObj = splitMixedText(val);
                    }
                    if( actObj && (actObj.name === "action" || actObj.name === "method") && /^(onfocus|onfocusin|onfocusout|onresize|onscroll|onclick|ondblclick|onmousedown|onmouseup|onmousemove|onmouseover|onmouseout|onchange|onselect|onsubmit|onkeydown|onkeypress|onkeyup|oncontextmenu)$/.test(node.attributes[i].name)){
                            attr[node.attributes[i].name.substr(2)] = {name:node.attributes[i].name.substr(2),camelCase : _LC.String.toCamelCase(node.attributes[i].name.substr(2)), helperInfo: actObj, newHelperInfo : getHelper(actValue, true), globalEvent: true};

                            let actArgs = _Lyte.deepCopyObject(actObj.args);
                            let actName = actArgs.splice(0,1)[0];
                            actName = actName.startsWith("'")? actName.replace(/'/g,''):  actName;
                            let actString = getArgString(actName, actArgs);
                            node.setAttribute(node.attributes[i].name.substr(2),componentName+" => "+ actString);
                            if(dynNewCompile) {
                                dynNewCompile.setAttribute(node.attributes[i].name.substr(2),componentName+" => "+ actString);
                            }
                            toBeRemoved.push(node.attributes[i].name);                            
                    }
                    else{
                        if(actObj || actValue) {
                            let attrToPush = {};
                            
                            if(node.attributes[i].name.startsWith("lbind:")) {
                                toBeRemoved.push(node.attributes[i].name);
                                toBeAdded.push({"name" : node.attributes[i].name.substring(6), "value": node.attributes[i].nodeValue});
                                attrToPush.isLbind = true;
                                attrToPush.name = node.attributes[i].name.substring(6);
                                attrToPush.camelCase = _LC.String.toCamelCase(attrToPush.name);
                            }
                            else {
                                attrToPush.name = node.attributes[i].name;
                                attrToPush.camelCase = _LC.String.toCamelCase(attrToPush.name);
                            }
                            if(actObj) {
                                if(actObj.name === "lbind") {
                                    attrToPush.dynamicValue = actObj.args[0];
                                    attrToPush.newDynamicValue = _LC.getDV(actObj.args[0]);
                                    attrToPush.isLbind = true;
                                }
                                else {
                                    attrToPush.helperInfo = actObj;
                                    attrToPush.newHelperInfo = getHelper(actValue, true);
                                }
                            } 
                            else {
                                attrToPush.dynamicValue = actValue;
//                              LN to do
                                attrToPush.newDynamicValue = _LC.getDV(actValue);
                            }
                            add = true;
                            attr[attrToPush.name] = attrToPush;
                        }                  
                    }
                }
            }
            if(toBeRemoved.length){
                for(let i=0; i<toBeRemoved.length;i++){
                    node.removeAttribute(toBeRemoved[i]);
                    if(dynNewCompile) {
                        dynNewCompile.removeAttribute(toBeRemoved[i]);
                    }
                }
            }
            if(dynNewCompile) {
                for(var key in attr) {
                    dynNewCompile.removeAttribute(key);
                }
                dynNewCompile.setAttribute("_lyteAttr" , "__**--Lyte" + j + "__**", "");
            }
            if(toBeAdded.length) {
                for(let i=0;i<toBeAdded.length;i++) {
                    node.setAttribute(toBeAdded[i].name, toBeAdded[i].value);
                }
            }
        } 
        break;
        case "for" : 
        case "forIn" : 
        case "component" :
        case "registerYield" :{
            var actualTemplate = _Lyte._ie ? dynN : dynN.content;
            if(!dynNewCompile && (type == "registerYield" || dynN.hasAttribute("unbound"))) {
                if(_Lyte._ms) {
                    dynNewCompile = document.createElement("div");
                    dynNewCompile.innerHTML = info.actualTemplate ? info.actualTemplate : dynN.outerHTML;
                    dynNewCompile = dynNewCompile.childNodes[0];
                    constr.splitTextNodes(dynNewCompile);
                } else {
                    dynNewCompile = dynN.cloneNode(true);
                }
            }
            let depthTemp;
            let dnNode;
            var actualTemplateNewCompile = dynNewCompile ? (_Lyte._ie ? dynNewCompile : dynNewCompile.content) : undefined;
            let args = {};
                if(info.actualTemplate) {
                    actualTemplate = _LC.getContentForIE(info.actualTemplate, constr, undefined, _Lyte._ms? info : undefined);
                if(dynNewCompile) {
                    actualTemplateNewCompile = _LC.getContentForIE(info.actualTemplate, constr);
                }
                }
                  doCompile(actualTemplate, info.dynamicNodes, componentName, constr, actualTemplateNewCompile, info);
                    if(actualTemplateNewCompile) {
                      let staticTemp = info.actualTemplate ? actualTemplateNewCompile : dynNewCompile;
                      info._sta = _LC.processStatic(staticTemp);                      
                    }
                  if(_Lyte._ms) {
                      if(info.actualTemplate) {
                          info.templateContent = actualTemplate.outerHTML;
                          if(info._content) {
                              info.actualTemplate = info._content.innerHTML;
                              delete info._content;
                          }
                      } else {
                          info.templateContent = dynN.outerHTML;
                      }
                    dynN.innerHTML = "";  
                }
                if(info.actualTemplate) {
                    depthTemp = type;
                    if(!_Lyte._ie ) {
                        depthTemp = document.createElement("template");
                        depthTemp.setAttribute("is", type);
                        depthTemp.innerHTML = actualTemplate.innerHTML;
                        constr.splitTextNodes(depthTemp);
                        constr._depthTemp.content.appendChild(depthTemp);
                    }
                    if(dynamicNodes[j-1] && (dynamicNodes[j-1].position.toString() === dynamicNodes[j].position.toString())) {
                        dnNode = dynamicNodes[j-1];
                    } else {
                        dnNode = dynamicNodes[j];
                    }
                    dnNode._depthTemp = depthTemp;
                }
            
                if(dynNewCompile) {
                    info._args = {};
                    if(type === "registerYield") {
                        //dynNewCompile.parentNode.parentNode.insertBefore(document.createTextNode("__**--Lyte"+j+"__**"), dynNewCompile.parentNode);
                        //dynNewCompile.parentNode.setAttribute("_lyteyield", "");
                        //_LC.replaceWithPf(dynNewCompile, document.createTextNode(""));
                        _LC.replaceWithPf(dynNewCompile, document.createTextNode("__**--Lyte"+j+"__**"));
                    } else if(type === "component") {
                        _LC.replaceWithPf(dynNewCompile, document.createTextNode((dynNewCompile.hasAttribute("_lyteattr") ? dynNewCompile.getAttribute("_lyteattr"): "" )+ "__**--Lyte"+j+"__**"));
                    } else {
                        //dynNewCompile.replaceWith(document.createTextNode("__**--Lyte"+j+"__**"))
                        _LC.replaceWithPf(dynNewCompile, document.createTextNode("__**--Lyte"+j+"__**"));
                    }
                    Array.from(dynNewCompile.attributes).forEach(function(item) { //eslint-disable-line no-loop-func
                        info._args[item.nodeName] = item.nodeValue;
                    });
                }
                //  When a registerYield is present inside another registerYield, in fastRender, we will not be able to get the template using the positions and parentComponent alone, since the insertYield is present inside the insertYield of the parent component. 
                // info.actYield = dynN;
              }
        break;
        case "if" : 
        case "switch" : {
            var oldDyn = dynN;
            let depthTemp;
            var actualTemplateNewCompile = dynNewCompile ? (_Lyte._ie ? dynNewCompile : dynNewCompile.content) : undefined;
            if(info.actualTemplate) {
                dynN = _LC.getContentForIE(info.actualTemplate, constr, undefined);
                if(dynNewCompile) {
                    let dummy = _LC.getContentForIE(info.actualTemplate, constr);
                    actualTemplateNewCompile = _Lyte._ie ? dummy : dummy.content;
                }
            }
            var def = "default";
            if(_Lyte._ms) {
            	var cases = {};
                var defCase;
                var dynNchildNodes = _Lyte._ed ? dynN.content.childNodes : dynN.childNodes;
                for(var i=0;i<dynNchildNodes.length;i++) {
                  if(dynNchildNodes[i].tagName === "TEMPLATE"){
                	  if(dynNchildNodes[i].getAttribute("case")) {
                		  cases[dynNchildNodes[i].getAttribute("case")] = dynNchildNodes[i];
                	  } else if(dynNchildNodes[i].hasAttribute("default")) {
                		  defCase = dynNchildNodes[i];
                	  }
                  }
                }
                for (var key in info.cases) {
                    let contentNewCompile;
                    if(actualTemplateNewCompile) {
                        contentNewCompile = _LC.getContentForIE(actualTemplateNewCompile.querySelector("[case='"+LyteComponent.cssEscape(key)+ "']"));
                    }
                    doCompile(_LC.getContentForIE(cases[key], undefined, true), info.cases[key].dynamicNodes, componentName, constr, contentNewCompile ? _LC.getContentForIE(contentNewCompile) : undefined);

                    cases[key].remove();
                    if(actualTemplateNewCompile) {
                        info.cases[key]._sta = _LC.processStatic(contentNewCompile);
                    }
                    info.cases[key].templateContent = cases[key].outerHTML;
                }
                if (info[def].dynamicNodes) {
                    let contentNewCompile;
                    if(actualTemplateNewCompile) {
                        contentNewCompile = actualTemplateNewCompile.querySelector("[default]");
                    }
                    doCompile(_LC.getContentForIE(defCase, undefined, true), info[def].dynamicNodes, componentName, constr, contentNewCompile? _LC.getContentForIE(contentNewCompile) : undefined);

                    defCase.remove();
                    info[def].templateContent = defCase.outerHTML;
                    if(actualTemplateNewCompile) {
                        info[def]._sta = _LC.processStatic(contentNewCompile);
                    }
                }
            } else {
                var dynNContent = dynN.content || dynN;
            	for(let key in info.cases) {
                    let contentNewCompile;
                    if(actualTemplateNewCompile) {
                        contentNewCompile = _LC.getContentForIE(actualTemplateNewCompile.querySelector("[case='"+LyteComponent.cssEscape(key)+ "']"));
                    }
                    var content = _LC.getContentForIE(dynNContent.querySelector("[case='"+_LC.cssEscape(key)+ "']"), undefined, true);
            		doCompile(content.tagName === "TEMPLATE" ? content.content : content, info.cases[key].dynamicNodes,componentName, constr, contentNewCompile);
                    if(actualTemplateNewCompile) {
                      info.cases[key]._sta = _LC.processStatic(contentNewCompile);
                    }
            	}
            	if(info[def].dynamicNodes) {
                    let contentNewCompile
                    if(actualTemplateNewCompile) {
                        contentNewCompile = _LC.getContentForIE(actualTemplateNewCompile.querySelector("[default]"));
                    }
                    var content = _LC.getContentForIE(dynNContent.querySelector("[default]"), undefined, true);
            		doCompile(content.tagName === "TEMPLATE" ? content.content : content, info[def].dynamicNodes,componentName, constr, contentNewCompile);
                    if(actualTemplateNewCompile) {
                      info[def]._sta = _LC.processStatic(contentNewCompile);
                    }
            	}
            	
            }

            if(info.actualTemplate) {
                depthTemp = type;
                if(!_Lyte._ie ) {
                	depthTemp = document.createElement("template");
                	depthTemp.setAttribute("is", type )
                	depthTemp.innerHTML = dynN.innerHTML;
                	constr.splitTextNodes(depthTemp);
                    constr._depthTemp.content.appendChild(depthTemp);
                }
                if(dynamicNodes[j-1] && (dynamicNodes[j-1].position.toString() === dynamicNodes[j].position.toString())) {
            		dynamicNodes[j-1]._depthTemp = depthTemp;
            	} else {
            		dynamicNodes[j]._depthTemp = depthTemp;
            	}
            }

            if(dynNewCompile) {
                _LC.replaceWithPf(dynNewCompile, document.createTextNode("__**--Lyte"+j+"__**"));
            }
        }
        break;    
        }
    }
}

//This is the function where the actual rendering takes place. 
    //It takes the template, finds the actual dynamic nodes uwing dynamicNodes argument and then binds each node with the associated
    //property by calling bindNode. 

function getDynamicNode(content, positions){
    let dynamicN = content;
    for(var i=0; i<positions.length; i++){
        dynamicN = (dynamicN.tagName != "TEMPLATE" || _Lyte._ie) ? dynamicN.childNodes[positions[i]] : dynamicN.content.childNodes[positions[i]];
    }
    return dynamicN;
}

function splitMixedText(str){
    var stack=[], start=0, helper = { name:"concat", args: []};
    for(var i=0;i<str.length;i++){
      var j = i;
      if(str[i-1] !== "\\" && str[i] === "{" && str[++i] === "{"){
        stack.push('{{');
        helper.args.push("'"+str.substr(start,j-start)+"'");
        start = i + 1;
      }
      else if(str[i] === "}" && str[++i] === "}" && stack.length){
        stack.pop(start);
        var toPush = str.substr(start,j-start);
        var actObj = getHelper(toPush);  
        if(actObj){
            toPush = actObj;
        helper.args.push({type:"helper",value:toPush});
        }
        else{
            helper.args.push(toPush);
        }
        start = i + 1;
     }

    }
    if(start<str.length){
        helper.args.push("'"+str.substr(start,str.length-start)+"'");
    }
    return helper;
}

function getHelperArgValue(argValue, newCompile) {
    switch(argValue) {
        case "undefined" : 
            return undefined
        case "true" : 
            return true;
        case "false" : 
            return false;
        case "null" : 
            return null;
        case "" : 
            return undefined;
        default :
            if(argValue && argValue.startsWith("'") && argValue.endsWith("'")){
                //escaping
                argValue = argValue.replace(/\\\'/g, "'")
                argValue = argValue.replace(/\\\"/g, '"');
                return argValue;
            }
            else if(/\([\w\s,')(]*/.test(argValue)) {
                return {"type" : "helper" , "value" : getHelper(argValue, newCompile)}
            } else if(!isNaN(argValue)) {
                return parseInt(argValue);
            } else {
                return argValue;
            }
    }
}

function getArgString(name, array) {
    let retString;
    for(let i=0;i<array.length;i++) {
        if(array[i] && typeof array[i] === "object") {
            array[i] = getArgString(array[i].value.name, array[i].value.args);
        }
    }
    if(name) {
        retString = name +  "(" + array.toString() + ")";
    } else {
        retString = array.toString();
    }
    return retString;
}

_LC[registerHelperStr]("unbound",function(value){
     return value;
});

_LC[registerHelperStr]("action",function(parentNode,attrName,isCustom,actObj){
    if(isCustom){
        parentNode._actions = parentNode._actions? parentNode._actions : {};
        if(!parentNode._actions[attrName]){
            this.createCustomEvent(attrName, parentNode, actObj); 
            parentNode.removeAttribute(attrName);
        }
    }
    else{
        
        this.createEventListeners(parentNode,attrName,actObj);    
    }
});

_LC[registerHelperStr]("lbind",function(name){
	return this.getData(name);
});

_LC[registerHelperStr]("method", function(parentComponent, attributeNode, functionName) {
    var parentComponent = arguments[0];
    var attributeNode = arguments[1];
    var functionName = arguments[2];
    var self = arguments[0].component;
    var childComponent = attributeNode? attributeNode.ownerElement : null;
    var attributeName = arguments[1].nodeName;
    attributeNode = null;
    var args = Array.prototype.slice.call(arguments, 2);
    var newFunc = function() {
        let node = this.$node;
        let contextSwitchArray = [];
        _LC.adCx(node, contextSwitchArray);
        let processedArgs = this.$node.processArgs(this.$node._callee,{"helperInfo" : {"args" : args}}, [], undefined, this.$node);
        let functionName1 = processedArgs.splice(0,1)[0];
        _LC.rmCx(node, contextSwitchArray);
        let customArgs = Array.from(arguments);
        let mainArgs = processedArgs.concat(customArgs);
        if(self.methods[functionName1]) {
            return self.methods[functionName1].apply(self, mainArgs);
        }
        _Lyte.error("LC009", functionName, self.$node.tagName);
    }
    if(childComponent) {
        if(!childComponent.set) {
            childComponent.setMethods(_LC.String.toCamelCase(attributeName), newFunc);
        } else {
            childComponent.component.methods[_LC.String.toCamelCase(attributeName)] = newFunc;
        }
    } else {
        return newFunc;
    }
});

_LC[registerHelperStr]("unescape",function(value,additionalObject,userInstance){
    if(_LC.ffr) {
        return value;
    }
    if(Lyte.Security.ignoreSanitizer){
        let divEle = document.createElement("div");
        divEle.innerHTML = value;
        return divEle;
    }
    else{
        if(additionalObject && Object.keys(additionalObject) && Object.keys(additionalObject).length >0){
            if(Object(additionalObject.GLOBAL_TAGS).length>0){
                var index = additionalObject.GLOBAL_TAGS.indexOf("link-to");
                if(index != -1){
                    additionalObject.GLOBAL_TAGS.splice(index,1);
                }
            }
            if(additionalObject && additionalObject.GLOBAL_ATTRIBUTES && Object.keys(additionalObject.GLOBAL_ATTRIBUTES).length>0){
                var arr = ["yield-name","lt-prop-route", "lt-prop-dp", "lt-prop-fragment", "lt-prop-qp", "lt-prop", "lt-prop-class", "lt-prop-id", "lt-prop-rel", "lt-prop-title", "lt-prop-style", "lt-prop-target","lt-prop-td","lt-prop-custom","lt-prop-target","lt-prop-id","lt-prop-class","lt-prop-style","lt-prop-rel","lt-prop-title"];
                for(var i=0;i<arr.length;i++){
                    var index =additionalObject.GLOBAL_ATTRIBUTES.indexOf(arr[i]);
                    if(index != -1){
                        additionalObject.GLOBAL_ATTRIBUTES.splice(index,1);
                    }
                }
            }
        }
        if(additionalObject && additionalObject.GLOBAL_TAGS){//this if check is inorder to getobserved attributes given in globaltags
            if(additionalObject.GLOBAL_ATTRIBUTES == undefined){
                additionalObject.GLOBAL_ATTRIBUTES = [];
            }
            var globalTagArr = Array.from(additionalObject.GLOBAL_TAGS);
            var attr = [];
            for(var a=0; a<globalTagArr.length; a++){
                if(LyteComponent._registeredComponents[globalTagArr[a]]){
                    attr = LyteComponent._registeredComponents[globalTagArr[a]].observedAttributes;
                }else if(Lyte.registeredCustomComponent[globalTagArr[a]]){
                    if(Lyte.registeredCustomComponent[globalTagArr[a]].observedAttributes){
                        attr = Lyte.registeredCustomComponent[globalTagArr[a]].observedAttributes;
                    }else{
                        attr = [];
                    }
                }
                for(var i=0; i<attr.length; i++){
                    if(additionalObject.GLOBAL_ATTRIBUTES.indexOf(attr[i]) == -1){
                        additionalObject.GLOBAL_ATTRIBUTES.push(attr[i]);
                    }
                }
            }
        }
        var divEle = document.createElement("div");
        if(userInstance && Object.keys(userInstance).length){
            if(additionalObject && Object.keys(additionalObject).length){
                Lyte.Security.addGlobalObject(userInstance,additionalObject);
                var clean = userInstance.sanitize(value);
                Lyte.Security.removeGlobalObject(userInstance,additionalObject);
            }
            else{
                var clean = userInstance.sanitize(value);
            }
        }
        else{
            if(additionalObject && Object.keys(additionalObject).length){
                Lyte.Security.addGlobalObject(Lyte.Security._ourSanitizerInstance_,additionalObject);
                var clean = Lyte.Security._ourSanitizerInstance_.sanitize(value);
                Lyte.Security.removeGlobalObject(Lyte.Security._ourSanitizerInstance_,additionalObject);
            }else{
                var clean = Lyte.Security._ourSanitizerInstance_.sanitize(value);
            }
        }
        divEle.innerHTML = clean;
        return divEle;
    }
});

_LC[registerHelperStr]("escape",function(value,type){
    if(type == 'url'){
        return ZSEC.Encoder.encodeForHTMLAttribute(value);	
    }
    else if(type == 'js'){
        return ZSEC.Encoder.encodeForJavaScript(value);
    }
    else if(type == 'css'){
        return ZSEC.Encoder.encodeForCSS(value);	
    }
    else{
        return value;
    }
});

_LC[registerHelperStr]("debugger", function() {
    debugger;
});

_LC[registerHelperStr]("log", function() {
    console.log.apply(window, Array.from(arguments));
});

_LC[registerHelperStr]("ifEquals", function(arg1, arg2) {
    if(arg1 === arg2) {
        return true;
    } else {
        return false;
    }
});

_LC[registerHelperStr]("if", function(value, trueValue, falseValue) {
    if(value) {
        return trueValue;
    } else {
        return falseValue;
    }
});

_LC[registerHelperStr]("negate", function(arg1) {
    return !arg1;
});


_LC[registerHelperStr]("ifNotEquals", function(arg1, arg2) {
    if(arg1 === arg2) {
        return false;
    } else {
        return true;
    }
});

_LC[registerHelperStr]('concat',function(){
	var resp = '';
	var argLength = arguments.length;
	for(var i=0;i<argLength;i++){
		if(arguments[i] != undefined){
			resp += arguments[i];
		}
	}
	return resp;
});


defProp(HTMLElement.prototype, 'setData', {
    enumerable: false, 
    value : function(arg0, arg1) {
        this._initProperties = this._initProperties || {};
        if(typeof arg0 === "string") {
            this._initProperties[arg0] = arg1
        } else if(arg0 instanceof Object) {
            for(let key in arg0) {
                this._initProperties[key] = arg0[key];
            }
        }
    }
});

defProp(HTMLElement.prototype, 'setMethods', {
    enumerable: false, 
    value : function(arg0, arg1) {
        this._initMethods = this._initMethods || {};
        if(typeof arg0 === "string") {
            this._initMethods[arg0] = arg1
        } else if(arg0 instanceof Object) {
            for(let key in arg0) {
                this._initMethods[key] = arg0[key];
            }
        }
    }
});

_LC[registerHelperStr]('encAttr', function(val) {
    return ZSEC.Encoder.encodeForHTMLAttribute(encodeURIComponent(val));
})

_LC[registerHelperStr]('expHandlers',function(leftOperand,operator,rightOperand,nextOperand){
    var argLen = arguments.length;
    if(operator == '++' ){
    	if(rightOperand == "postfix"){
    	   return (leftOperand++);
    	} else if(rightOperand == "prefix"){
    		return (++leftOperand);
    	}
    } else if(operator == "--"){
    	if(rightOperand == "postfix"){
    	   return (leftOperand--);
    	} else if(rightOperand == "prefix") {
    		return (--leftOperand);
    	}
    } else if((operator == "==")){
    	return leftOperand == rightOperand;
    }
     else if((operator == "===")){
    	return leftOperand === rightOperand;
    }
    
    else if((operator == "!=")) {
        return leftOperand != rightOperand;
    }
    else if((operator =="!==")) {
        return leftOperand !== rightOperand;
    }
    else if( operator == "&&") {
    	return leftOperand && rightOperand;
    } else if(operator == "||") {
    	return leftOperand || rightOperand;
    } else if(operator == "+"){
        if(argLen > 2){
        	return leftOperand+rightOperand;
        }
        return leftOperand;
    } else if(operator == '-'){
         if(argLen > 2){
        	return leftOperand-rightOperand;
        }
        return (-leftOperand);
    } else if(operator == '*'){
    	return leftOperand * rightOperand;
    } else if(operator == "/"){
    	return leftOperand / rightOperand;
    } else if(operator == "%"){
    	return leftOperand % rightOperand;
    } else if(operator == "<"){
    	return leftOperand < rightOperand;
    } else if(operator == ">") {
    	return leftOperand > rightOperand;
    } else if(operator == "<=") {
    	return leftOperand <= rightOperand;
    } else if(operator == ">=") {
    	return leftOperand >= rightOperand;
    } else if(operator == '|') {
        return leftOperand | rightOperand;
    } else if(operator == '&') {
        return leftOperand & rightOperand;
    }
    else if(operator == "!" ){
        return (!leftOperand);
    } else if(operator == '=') {
        leftOperand = rightOperand;
        return leftOperand;
    } else if(operator == "+=") {
        return leftOperand += rightOperand;
    } else if(operator == '-=') {
        return leftOperand -= rightOperand;
    } else if(operator == "*=") {
        return leftOperand *= rightOperand;
    } else if(operator == '/=') {
        return leftOperand /= rightOperand;
    } else if(operator == '?:') {
        return (leftOperand ? rightOperand : nextOperand);
    }
 });


_LyteComponent.register("lyte-event-listener",{
            _template : "<template tag-name=\"lyte-event-listener\"></template>",
            _dynamicNodes : [],
            _observedAttributes : ['eventName'],
            init: function() {
                let self = this;
                let regId = _Lyte.addEventListener(this.get('eventName'), function() {
                    let args = Array.prototype.slice.call(arguments);
                    args.splice(0,0,'on-fire')
                    self.throwEvent.apply(self, args );
                });
                //this.set('regId', regId);
                this.regId = regId;
            },
            data: function(){
                return {
                    "eventName" : _Lyte.attr("string")
                }
            }, 
            didDestroy : function() {
                _Lyte.removeEventListener(this.regId);
            }
        });

_LyteComponent.registerCustomPropHandler("ltProp");

_LyteComponent.shouldIgnoreDisconnect = function() {
    return _LC.ignoreDisconnect;
}

_LyteComponent.addLyteEventListener = function(element, eventName, func, context) {
  element._lyteEvents = element._lyteEvents || {};
  element._lyteEvents[eventName] = element._lyteEvents[eventName] || []; 
  var ind = element._lyteEvents[eventName].push({"func" : func, "fromEventListener" : true, "context" : context});
  return eventName + "-" + ind; 
}

_LyteComponent.removeLyteEventListener = function(element, listenerId) {
    if(!listenerId) {
        _Lyte.error("No listenerId provided");
        return;
    }
    var split = listenerId.split('-');
    var eventName = split[0];
    var index = parseInt(split[1]);
    if(!element._lyteEvents || !element._lyteEvents[split[0]] || isNaN(index)) {
        _Lyte.error("Invalid listenerId / listener is not available");
        return;
    }
    element._lyteEvents[split[0]][split[1] - 1] = {};
}

_LyteComponent.throwEvent = _LC.throwEvent;

_LC.hasLyteEvents = function(element, eventName) {
    if(element._lyteEvents && element._lyteEvents[eventName]) {
        return true;
    } else {
        return false;
    }
}

_LC.handleLyteEvents = function(element, event) {
    var funcs = element._lyteEvents[event.type];
    var ret;
    var eventStopped;
    for(var i=0;i<funcs.length;i++) {
        if(funcs[i].func) {
            ret = funcs[i].func.call(funcs[i].context ? funcs[i].context : window, event);
            if(ret === false || event.cancelBubble) {
                eventStopped = true;
                break;
            } 
        }
    }
    if(eventStopped) {
        event.stopPropagation();
    }
    return eventStopped;
}

Object.defineProperty(window, "LyteComponent", {
	get : function() {
		_Lyte.warn("Usage of LyteComponent is deprecated. Use Lyte.Component instead");
		return LyteComponent;
	}
})
_LyteComponent.chromeBugFix();
_LC.booleanAttrList = ["async","autocomplete","autofocus","autoplay","border","challenge","checked1","compact","contenteditable","controls","default","defer","disabled","formNoValidate","frameborder","hidden","indeterminate","ismap","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","readonly","required","reversed","scoped","scrolling","seamless","selected","sortable","spellcheck","translate"]
Lyte.$.requiredMixins.component = function (mix, compDetails){
    var mixinsToBeUsed=[];
    var actionsFromMixin = {}; 
    var methodsFromMixin = {};
    var newDefinition = {};
      mixinsToBeUsed.push(mix);
      compDetails.forEach(ele => {
      var componentName = ele;
      var customCrmComponent = LyteComponent._registeredComponents[componentName];
            if(mixinsToBeUsed.length){
                LyteComponent.dataFromMixin(mixinsToBeUsed,actionsFromMixin,methodsFromMixin,newDefinition);
            }
            customCrmComponent._actions = Object.assign(customCrmComponent._actions, actionsFromMixin);
            var methods = Object.assign(customCrmComponent._methods, methodsFromMixin);
            delete newDefinition.methods;
            LyteComponent.updateCustomCrmComponent(newDefinition,customCrmComponent);
            customCrmComponent._methods = methods;
            LyteComponent._registeredComponents[componentName] = customCrmComponent; 
        });
      }
    //security
    Lyte.Security.addGlobalObject = function(instanceObj,additionalObj){
        for (var property in additionalObj) {
                if(Array.isArray(additionalObj[property])){
                    additionalObj[property].forEach(function(item){
                        if(instanceObj["_"+property].indexOf(item) == -1){
                            instanceObj["_"+property].push(item);
                        }
                    });
            }
        }
    }
    Lyte.Security.removeGlobalObject = function(instanceObj,additionalObj){
        for (var property in additionalObj) {
            if(Array.isArray(additionalObj[property])){
                additionalObj[property].forEach(function(item){
                    var index = instanceObj["_"+property].indexOf(item);
                    if(index != -1){
                        instanceObj["_"+property].splice(index,1);
                    }
                });
        }
        };
    }
}(window))//$Id$
Lyte.registerErrorCodes({
	LD01: "Primary key value might be missing in the response data that is received, {0}",
	LD02: "{0} - {1} is not registered",
	LD03: "Cannot set the error {0} for {1}",
	LD04: "No such record to merge, {0}",
	LD05: "Model( {0} ) of related property - {1} not found in model - {2}",
	LD06: "Backward relation not present in model( {0} ), for the property {1} of model( {2} )",
	LD07: "{0} type not handled in handleArrayOperations",
	LD08: "{0} {1} will be deprecated from next version {2}",
	LD09: "deserializeKey cannot be processed for payload with more than two keys. Please use payloadKey callback instead or try modifying the same in normalizeResponse callback",
	LD10: "Response data not in a format lyte data store expects",
	LD11: "Deprecation Warning! findRecord response payload will not accept an array. It will be deprecated from the next version",
	LD12: "Response ( {0} ) is not in a format, lyte data store expects",
	LD13: "Response doesn't contain payload data in {0} (modelName) key of the response object",
	LD14: "Cannot register {0} - {1}, as it already exists.",
	LD15: "Primary key value might be missing in the response data that is received, {0}",
	LD16: "Primary key value expected for the record, {0}",
	LD17: "Record with the primary key value already exists",
	LD18: "No { 0 } present"
});
var $Record = function $Record(){
	Object.assign(this, {inIDB : false, isModified : false, isNew : false, isDeleted : false, isError : false, events : [], validatedOnCreate : true, error : {}});
}
/* Record Constructor
Steps Done: 
* Assign data
* Assign $Record -> Maintaining Record state
* Assign ref of model,record to act independently
***
*/
var Record = function Record(modelName,data){
	var model = store.modelFor(modelName);
	var rels = model.relations;
	Object.assign(this, data);
	for(var key in rels){
		var relations = rels[key];
		var self = this;
		relations.forEach(function(itm){
			var relKey = itm.relKey;
			if(itm.relType == "hasMany" && data.hasOwnProperty(relKey) && Array.isArray(data[relKey])){
				self[relKey] = Array.from(data[relKey]);
			}
		});
	}
	Object.defineProperties(this, {
		$ :{
			writable : true,
			value : new $Record()
		}
	});
	var pK = model._pK;
	Object.defineProperties(this.$, {
		pK:{
			value: store.$.getpKVal(this, model),
			writable: true
		},
		model : {
			value : model
		},
		record : {
			value : this
		},
		_attributes : {
			value : {},
			writable : true
		},
		_relationships : {
			value : {},
			writable : true
		},
		isDirty: {
			value: function value(){
				var result = [];
				var record = this.record;
				if(record.$.isModified){
					return true;
				}
				result = store.$.isDirty(record, this.model.relations);
                if(result.length){
					return result;
				}
				return false;
			}
		},
		undoStack : {
			value : [],
			writable : true
		},
		redoStack : {
			value : [],
			writable : true
		}
	});
	var parent = store.$.saveParent;
	if(parent && this !== parent){
		store.$.defProp(this.$, "parent", parent);
	}
    var fields = model.fieldList, record = {}, errorObj = new error1();
    for(var field in fields){
        var fieldKeys = fields[field];
        if(fieldKeys.type != "relation"){
            var val = data[field];
            if(val === undefined || val === ""){
                if(fieldKeys.hasOwnProperty("default")){
					this[field] = store.$.getDefaultVal(this, field, fieldKeys.default);
				}
            }            
        }
    }
	var props = model._properties;
	if(Object.keys(props).length){
		if(!this._bindings){
			store.$.defProp(this, '_bindings', new Set(), false, true);
		}
		this._bindings.add(props);
		store.$.establishObserverBindings(this,props);
	}
//	console.log(this.$.model._properties);
}
/* Assigning the following in $record.prototype 
So it will be available to all record.$
*/

Object.defineProperties($Record.prototype,{
	get: {
		value:function value(attr){
			return this.record[attr];
		}
	},
	set: {
		value : function value1(attr, value){
			if(this.isDeleted){
				store.$.setRecErr(this, this.model._pK, "ERR17");
			}
			else{
				store.$.setData(this, attr, value);
			}
			return this.record;
		}
	},
	getDirtyAttributes : {
		value : function value(){
			var attributes = this._attributes, ret = [];
			if(Object.keys(attributes).length){
				for(var key in attributes){
					ret.push(key);
				}
			}
			return ret;
		}
	},
	rollBackAttributes : {
		value : function value(attr){
			if(!Array.isArray(attr)){
				attr = [attr];
			}
			var func = function(item, mKey){
				store.$.deleteDeepNest(record, key, mKey);
			}
			var record = this.record, changed = [], model = this.model;
			for(var i=0; i<attr.length; i++){
				var key = attr[i];
				if(this._attributes.hasOwnProperty(key)){
					var field = model.fieldList[key], oldVal = this._attributes[key];
					if(field.type == "relation"){
						store.$.rllBckRecArr(oldVal, record, model, field);
						var obj = record.$.dN && record.$.dN.hasOwnProperty(key) ? record.$.dN[key] : new Map();
						obj.forEach(func);
					}
					else{
						store.$.cmpSet( record, key, oldVal, true );
					}
					changed.push(key);
					delete this._attributes[key];
					store.$.clrRecErr(this, key);
				}
			}
			if(!Object.keys(this._attributes).length){
				if( !this.hasOwnProperty("dN") || ( this.dN && !Object.keys(this.dN).length )){
					store.$.removeParentNesting(record);
				}
				this.isModified = false;
				if(!this.isNew){
					store.$.deleteFromArray(model.dirty, this.get(model._pK));
				}
			}
			if(changed.length > 0){
                var arr = [record,changed];
				this.emit("change", arr);
				model.emit("change", arr);
			}
		}
	},
	rollBack : {
		value : function value(){
			var model = this.model, pK = model._pK;
			if(this.isModified){
				this.rollBackAttributes(this.getDirtyAttributes());
			}
			if(this.isDeleted){
				// var index = store.$.getIndex(model._deleted, pK, this.get(pK));
				store.$.rollBackDelete(model, this.get(pK));
			}
			else if(this.isNew){
				store.$.rollBackNew(model, this.record, pK);
			}			
            else if(this.isError){
                store.$.clrRecErr(this);
			}
			store.$.removeOnSave(this.model._name, this.record.$.pK);
		}
	},
	deleteRecord : {
		value : function value(){
			var model = this.model, record = this.record, pK = model._pK;
			store.$.removeFromStore(model, record.$.pK, undefined);
		}		
	},
	destroyRecord : {
		value:function value(customData,qP){
			this.deleteRecord();
			return this.save(customData,qP,"destroyRecord");
		}				
	},
    addEventListener : {
		value : function value(type, func){
            return store.$.eventListeners.add(this, type, func);
        }
 	},
	removeEventListener : {
		value : function value(id){
            store.$.eventListeners.remove(this,id);
		}
	},
	emit : {
		value : function value(type, args){
            store.$.eventListeners.emit(this,type,args);
        }
	},
	triggerAction: {
		value : function value(actionName,customData,qP,method,data){
			var model = this.model, actions = model.actions, action = (actions) ? actions[actionName] : undefined;
			if(action){
				return store.adapter.$.handleAction(actionName,model,this.record,customData,qP,method,data);
			}
			return Promise.reject({code : "ERR18", message : Lyte.errorCodes.ERR18, data : actionName});
 		}
	},
	save: {
		value : function value(customData,qP,options,destroy){
			var model = this.model, record = this.record, dirty = this.isDirty(), validateOnSave = options && options.validateOnSave, skipValidation = options && options.skipValidation, clear, fields = model.fieldList, ret;
            if(this.isDeleted){
				if(!this.isNew){
					return store.adapter.$.del(model._name, record, true,destroy,customData,qP);
				}
				// store.adapter.$.handleResponse(record, record, undefined, undefined, model);
			}
			else if(this.isNew){
				var err = this;
				if(!skipValidation && (!record.$.validatedOnCreate || validateOnSave)){
					ret = store.$.validateRecord(this.record, fields);
				}
				if(!skipValidation && (ret == false || (err && err.error && Object.keys(err.error).length > 0))){
					return Promise.reject(err.error);
				}
				return store.adapter.$.create(model._name, record, true ,customData,qP);
			}
			else if(this.isModified || (dirty && dirty.length) ){
				var data = {};
				if(!skipValidation && (options && validateOnSave)){
					ret = store.$.validateRecord(this.record, fields);
				}
				if(!skipValidation){
					if(ret == false || (record && record.$ && record.$.isError)){
						return Promise.reject(record.$.error);
					}
				}
				var data = store.$.updateJSON(this.record, model, dirty);
				return store.adapter.$.put(model._name, data, record, true, customData,qP);
			}
			return Promise.resolve();
		}
	},
	getInitialValues : {
		value : function(attr){
			var isAttrPassed = false;
			if(attr){
				if(!Array.isArray(attr)){
					attr = [attr];
				}
				isAttrPassed = true;
			}
			else{
				attr = this.getDirtyAttributes();
			}
			var ret = {}, rec = this.record;
			for(var i=0; i<attr.length; i++){
				if(rec[attr] == undefined || !rec[attr[i]].add){
					ret[attr[i]] = this._attributes[attr[i]];					
				}
				else{
					ret[attr[i]] = rec[attr[i]].slice(0);
					var arr = this._attributes[attr[i]], pK = rec[attr[i]].model._pK;
					for(var j=arr.length-1; j>=0; j--){
						if(arr[j]._type == "added"){
							for(var k=0; k<arr[j].records.length; k++){
								var index = store.$.getIndex(ret[attr[i]], pK, arr[j].records[k].$.pK);
								if(index == -1){
									continue;
								}
								ret[attr[i]].splice(index, 1);
							}
						}
						else if(arr[j]._type == "removed"){
							for(var k=arr[j].records.length-1; k>=0; k--){
								ret[attr[i]].splice(arr[j]._indices[k], 0, arr[j].records[k]);
							}
						}
						else if(arr[j]._type == "changed"){
							ret[attr[i]] = Array.isArray(arr[j].records) ? Array.from(arr[j].records) : arr[j].records;
						}
					}
				}
			}
			if(isAttrPassed){
				return ret[attr[0]];
			}
			return ret;
		}
	},
    toJSON:{
        value: function(idb){
            return Object.assign({}, store.$.toJSON(this.model._name, this.record, idb ? "idb" : true));
        }
	},
	undo:{
		value: function(state){
			state = state || 0;
			var currentState = this.undoStack.length;
			while(currentState-- > state){
				store.$.undo(this);
			}
		}
	},
	getCurrentState:{
		value: function(){
			return this.undoStack.length;
		}
	},
	redo:{
		value:function(){
			var obj = this.redoStack.pop(),redo, undoObj = {};
			if(obj){
				for(var key in obj){
					var redo = obj[key];
					if(redo._type == "update"){
						if(redo.val){
							store.$.setData(this,key,redo.val,undoObj)
						}else if(redo.records){
							store.$.setData(this,key,redo.records,undoObj)	
						}
					}
					else if(redo._type == "propDelete"){
						undoObj[key] = {type:"propAdd"}
						store.$.setData(this,key,redo.val,undoObj);
					}
					else if(redo._type == "added"){
						this.record.$.get(key).remove(redo.records,undefined,undoObj);
					}
					else if(redo._type == "removed"){
						store.$.rllBckRecArr([redo], this.record, this.model, this.model.fieldList[key])
						redo._type = "added";
						undoObj[key] = redo;
					}
	
				}
				this.undoStack.push(undoObj);
			}
		}	
	},
	validate : {
		value : function(arr){
			var fields = {};
			var model = this.model;
			var fieldList = model.fieldList;
			if(Array.isArray(arr)){
				arr.forEach(function(item, index){
					if(fieldList[item]){
						fields[item] = fieldList[item];
					}
				});
			}
			if(Object.keys(fields).length == 0){
				fields = fieldList;
			}
			var record = this.record, clear;
			store.$.validateRecord(record, fields);				
		}
	}
});

/* Model Object Constructor 
*/
var Model = function Model(name,fields){
	Object.assign(this, {_name : name, fieldList : {id : {type : "string", primaryKey : true, defined : false}}, relations : {}, _properties : {}, data : [], dirty : [], _deleted : new Map(),
		events : {}});
	var obs = [];
	for(var key in fields){
		store.$.registerField(this,key,fields[key],obs);
	}
	if(!this._pK){
		this._pK = 'id';
	}
	this.isComp = false;
	var splt = this._pK.split(',');
	if(splt.length > 1){
		this.isComp = true;
	}
	this._arrPk = splt;
	if(typeof Lyte != "undefined"){
		Lyte.establishObserverBindings(obs,true,this._properties);
	}
	store.$.defArrUtls(this.data);
	store.$.defUtls(this.data,this);
	store.$.defProp(this, "extends", store.$.extendModel);
}
Model.prototype.addEventListener = function(type, func){
    return store.$.eventListeners.add(this,type,func);
}
Model.prototype.removeEventListener = function(id){
    store.$.eventListeners.remove(this,id);
}
Model.prototype.emit = function(type, args){
    store.$.eventListeners.emit(this,type,args);
}
Model.prototype.on = function(type,func){
    return this.addEventListener(type,func);
}

var store = {
	model : {},
	$:{ 
		request: {},
		toRelate: {},
		idbQueue:[],
		idbQ:{},
		idbQ2:{},
		// 1 index -> delete [0,2,3,4,5,6,7,8,9,10] '1' -> 1 index            
		// 2 index -> delete [0,2,4,5,6,7,8,9,10]   '3' -> 2 index
		// 3 index -> delete [0,2,4,6,7,8,9,10]	  	'5' -> 3 index
		// 2 index -> delete [0,2,4,7,8,9,10]	   	'6' -> 3 index 
		// 1 index -> delete [0,4,7,8,9,10]		  	'2' -> 1 index
		// 5 index -> delete [0,4,7,8,9]         	'10' -> 5 index
		// insert -> 5 -> add [0,4,7,8,9,11]

		// algo 
		// 1) to find the current index -> check the later items for lesser index. Minus the current index when the below item's index is less than it
		// 2) after rollbacking, check the later items for the same or higher index and increment it

		// case 1) rollback number 5 -> it should go in position 2
		// 3 - 1 - 1 = 1 
		// [ 0,4,5,7,8,9,11 ] 
		// 1 -> 1 , 3 -> 2, 6 -> 3 + 1, 2 -> 1 , 10 -> 5 + 1

		// case 2) rollback number 3 -> it should go in position 1
		// 2 - 1 = 1   
		// [ 0,3,4,5,7,8,9,11 ]
		// 1 -> 1 , 6 - > 4 + 1 , 2 -> 1 , 10 -> 6 + 1

		// case 3) rollback number 6 -> it should go in position 4
		// 5 - 1
		// [ 0,3,4,5,6,7,8,9,11 ]
		// 1 -> 1 , 2 -> 1, 10 -> 7 + 1
		
		// case 4) rollback 10 -> it should go in position 8 
		// 8 
		// [ 0,3,4,6,7,8,9,10,11 ]
		getDefaultVal : function(rec, field, defVal){
			if(typeof defVal != "function"){
				return defVal;
			}
			else{
				return defVal.call(rec);
			}
		},
		addTo_Del: function(model, data, ind){
			var deleted = model._deleted = model._deleted || new Map();
			var obj = { index : ind , data : data };
			deleted.set(data.$.pK, obj);
 		},
		scExtd: function(type, name, opts, parent){
			var scope = type == "adapter" ? store.adapter : store.serializer;
			if(!name){
				return;
			}
			if(scope.hasOwnProperty(name)){
				Lyte.warn("LD14",type,name);
			}
			if(type == "adapter"){
				scope[name] = new Adapter(opts,parent,name);
			}
			else{
				scope[name] = new Serializer(opts,parent,name);
			}
			if(scope.application && name != "application")
			{
				scope[name].$super = scope.application;
				scope.application.__extendedBy.push(name);
			}
			if(!scope.application && name != "application")
            {
                scope.__toAddSuper = scope.__toAddSuper || {};
                     if(!scope.__toAddSuper.hasOwnProperty("application")){
                        scope.__toAddSuper.application = [];   
                     }
                     scope.__toAddSuper.application.push(name);
            }
			return scope[name];
		},
		cB:function(callback,args){
			return callback.func.apply(callback.scope, args.concat(callback.name));
 		},
 		consArg:function(){
 			var arg = arguments, arr = [];
 			for(var i=0; i<arg.length; i++){
 				arr.push(arg[i]);
 			}
 			return arr;
 		},
		cbScp:function(key, type, scope){
			var scope = scope ? store.serializer : store.adapter; 
			var layer = scope[key], callback, application = scope.application;
			while(callback == undefined){
				if(layer && layer[type] && typeof layer[type] == "function"){
					return {scope : layer, func : layer[type], name: type};
				}
				else if(layer && layer.$super){
					layer = layer.$super;
				}
				else if(application && application[type] && typeof application[type] == "function"){
					return {scope : application, func : application[type] , name : type};
				}
				else{
					return undefined;
				}
			}
		},
		comparePk : function(rec, pkVal){
			var pK = rec.$.pK;
			var pkType = typeof pK;
			if(pkType == "string" || pkType == "number"){
				return pK === pkVal;
			}
			else if(typeof pK == "object"){
				var len = Object.keys(pK).length, i=0;
				for(var key in pK){
					if(pK[key] === pkVal[key]){
						i++;
					}
				}
				return len === i;
			}
		},
		getpKVal : function(record, model){
			var model = model ? model : record.$.model;
			var arr = model._arrPk;
			if(arr.length == 1){
				return record[arr[0]];
			}
			else{
				var obj = {};
				arr.forEach(function(item){
					obj[item] = record[item];
				});
			}
			return obj;
		},
		undo: function(rec){
			var obj = rec.undoStack.pop(),undo, redoObj = {};
			if(obj){
				for(var key in obj){
					var undo = obj[key];
					if(undo._type == "update"){
						if(undo.hasOwnProperty("val")){
							store.$.setData(rec,key,undo.val,redoObj)
						}else if(undo.hasOwnProperty("records")){
							store.$.setData(rec,key,undo.records,redoObj)	
						}
					}
					else if(undo._type == "propAdd"){
						if(typeof Lyte != "undefined"){
							redoObj[key] = {type:"propDelete", val:rec.record[key]};
							Lyte.objectUtils(rec.record, "delete", key);
						}
						else{
							delete rec.record[key];
						}
					}
					else if(undo._type == "added"){
						rec.record.$.get(key).remove(undo.records,undefined,redoObj);
					}
					else if(undo._type == "removed"){
						store.$.rllBckRecArr([undo], rec.record, rec.model, rec.model.fieldList[key])
						undo._type = "added";
						redoObj[key] = undo;
					}
				}
				rec.redoStack.push(redoObj);				
			}
		},
		unregisterModel : function(name){
			var model = store.modelFor(name);
			if(!model){
				Lyte.warn("LD02","Model ",name);
				return;
			}
			if(model.data.length){
				store.unloadAll(name);
			}
			var extendedBy = model.extendedBy;
			if(extendedBy && Object.keys(extendedBy).length){
				for(var ext in extendedBy){
					store.unregisterModel(ext);
				}
			}
			var extend = model.extend;
			if(extend){
				var extMod = store.modelFor(extend);
				delete extMod.extendedBy[name];
			}
			delete store.model[name];  
		},
		updateFieldValidation:function(model, key){
			var records = model.data;
			var fields = model.fieldList;
			records.forEach(function(item){
				var isOldVal = item.$.error && item.$.error.hasOwnProperty(key) && item.$.error[key].hasOwnProperty("value") ? true : false;
				var oldVal = isOldVal ? item.$.error[key].value : undefined;
				store.$.clrRecErr(item.$, key);
				isOldVal ? store.$.validateField(item, key, fields[key], undefined, {old:true, value:oldVal}) : store.$.validateField(item, key, fields[key], undefined)
				if(isOldVal && item.$.error && Object.keys(item.$.error) === 0){
					item.$.set(key, oldVal);
				}
			});
		},
		validateRelatedRecord:function(record, key, field){
			var fields = store.model[field.relatedTo].fieldList;
			if(field && field.opts && record && record.hasOwnProperty(key)){
				if(field.opts && field.opts.serialize == "record"){
					if(field.relType == "belongsTo" && Lyte.isRecord(record[key])){
						return this.validateRecord( record[key], fields);
					}
					else if(field.relType == "hasMany"){
						if(Array.isArray(record[key])){
							var ret = true, result, self = this;
							record[key].forEach(function(item, index){
								if(Lyte.isRecord(item)){
									result = self.validateRecord(item, fields);
									if(result === false){
										ret = false;
									}
								}
							});
							return ret;
						}
					}
				}
			}
		},
		validateRecord:function(record, fields){
			var result, ret = true, returnVal;
			for(var field in fields){
				returnVal = this.validateField(record, field, fields[field], result);
				if(ret === true && returnVal === false){
					ret = false;
				}
			}
			if(ret === false || (record.$.isError === true && record.$.error && Object.keys(record.$.error).length)){
				return false;
			}
			return true;
		},
		validateField : function(record, key, field, result, obj){
			var val = obj && obj.old ? obj.value : record[key], ret, err = record.$, clear;
			if(field.type == "relation"){
				ret = this.validateRelatedRecord(record, key, field);
				if(ret === false){
					result = false;
					return result;
				}
			}
			else if(field.mandatory && !record.$.error.hasOwnProperty(key) && (val === undefined || val === "" || (Array.isArray(val) && val.length === 0) )){
				store.$.setRecErr(err, key, {code : "ERR02", message : Lyte.errorCodes.ERR02, value : val});
			}
			else{
				clear = true;
				if( obj || (record.hasOwnProperty(key) && !record.$.error.hasOwnProperty(key))){
					for(var property in field){
						var resp = Lyte.checkProperty(property, val, key, field[property], record);
						if(resp !== true){
							if(typeof resp == "object"){
								resp.value = val; 
							}
							store.$.setRecErr(err,key,resp);
							clear = false;
							//err[field] = resp;
							break;
						}
					}
					if(clear){
						store.$.clrRecErr(err, key);
					}		
				}
			}
		},
		partialData:function(rec, key, pK, type){
			var arr = rec[key];
			if(!arr || !Array.isArray(arr)){
				return true;
			}
			if(!arr.partial){
				store.$.defPar(arr);
			}
			var partial = arr.partial = arr.partial || new Map();
			if(!partial.get(pK)){
				partial.set(pK, {});
			}
			var revert = false;
			var obj = partial.get(pK);
			var objType = obj.type;
			switch(objType){
				case "added":{
					if(type == "removed"){
						partial.delete(pK);
						revert = true;
					}
					break;
				}
				case "removed":{
					if(type == "added"){
						partial.delete(pK);
						revert = true;
					}
					break;
				}
				case "modified":
				case "updated":{
					if(type == "added"){
						//this case mostly won't come. if at all it comes, break
						break;
					}
				}
				default:{
					partial.set(pK, { type : type });
				}
			}
			if(revert){
				if(!partial.size){
					store.$.deleteDeepNest(rec, key, pK);
				}
				return true;
			}
		},
		removeParentNesting:function(rec){
			var model = rec.$.model;
			var pkVal = rec.$.pK;
			var rels = model.relations;
			for(var key in rels){
				var relations = rels[key];
				relations.forEach(function(item){
					var inv, deep, part, invRecs;
					//store.$.getRelations(model, item.relKey, store.model[item.relatedTo], rel);
					inv = store.$.getBackwardRel(model,item,store.model[item.relatedTo]);
					//inv = rel.backward;
					if(inv && inv.opts){
						deep = inv.opts.deepNest;
						part = inv.opts.serialize == "partial" ? true : false;
						if(!item.relKey){
							invRecs = store.$.getRelatedRecord(rec,item.relatedTo,item.dummy);
						}
						else{
							invRecs = rec[item.relKey];
						}
					}
					if(deep){
						if(Array.isArray(invRecs)){
							invRecs.forEach(function(item){
								if(Lyte.isRecord(item)){
									store.$.deleteDeepNest(item, inv.relKey, pkVal);
								}
							});
						}
						else if(Lyte.isRecord(invRecs)){
							store.$.deleteDeepNest(invRecs, inv.relKey, pkVal);
						}
					}
					if(part){
						if(invRecs && !Array.isArray(invRecs)){
							invRecs=[invRecs];
						}
						if(Array.isArray(invRecs)){
							invRecs.forEach(function(item){
								var partData = inv.relKey ? item[inv.relKey] : undefined; 
								if(partData && partData.partial && partData.partial.get(pkVal)){
									partData.partial.delete(pkVal);
								}
							});
						}	
					}
				});
			}
		},
		deleteDeepNest:function(rec, key, pkVal){
			var deepNest = rec.$.dN;
			if(deepNest){
				if(deepNest[key] && pkVal === undefined){
					delete deepNest[key];
				}
				else if(deepNest[key] && deepNest[key].get(pkVal)){
					deepNest[key].delete(pkVal);
					if(!Object.keys(deepNest[key]).length){
						delete deepNest[key];
					}
				}
				if(!Object.keys(deepNest).length){
					delete rec.$.dN;
					if(!rec.$.isModified && !rec.$.isNew){
						store.$.removeParentNesting(rec);
					}
				}
			}
		},
		// createJSON:function(record, fields, err, validateOnSave){
		// 	for(var field in fields){
		// 		var val = record[field], fieldKeys = fields[field];
		// 		if(fieldKeys.type == "relation"){
		// 			continue;
		// 		}
		// 		if(!record.$.validatedOnCreate || validateOnSave){
		// 			if(fieldKeys.mandatory && !record.$.error.hasOwnProperty(field) && (val == null || val == undefined || val === "" || (Array.isArray(val) && val.length == 0) )){
		// 					store.$.setRecErr(err,field,{code : "ERR02", message : Lyte.errorCodes.ERR02});
		// 					//err[field] = {code : "ERR02", message : Lyte.errorCodes.ERR02};
		// 			}
		// 			else{
		// 				clear = true;
		// 				if(record.hasOwnProperty(field) && !record.$.error.hasOwnProperty(field)){
		// 					for(var property in fieldKeys){
		// 						var resp = Lyte.checkProperty(property, record[field], field, fieldKeys[property]);
		// 						if(resp != true){
		// 							store.$.setRecErr(err,field,resp);
		// 							clear = false;
		// 							//err[field] = resp;
		// 							break;
		// 						}
		// 					}
		// 					if(clear){
		// 						store.$.clrRecErr(err, field);
		// 					}		
		// 				}
		// 			}							
		// 		}
		// 	}
		// },
		updateJSON:function(record, model, dirty){
			var data = {};
			var arrPk = model._arrPk;
			var dirtyAttr = record.$._attributes;
			for(var field in dirtyAttr){
					data[field] = record[field];
			}
			var attrs = dirty;
			if(dirty == true){
				attrs = store.$.isDirty(record, model.relations) || [];
			}
			for(var i=0;i<attrs.length;i++){
				data[attrs[i]] = record[attrs[i]];
			}
			arrPk.forEach(function(item){
				data[item] = record[item];
			});
			return data;
		},
		removeDeepNest:function(record){
			if(!Lyte.isRecord(record)){
				return;
			}
			var bool1 = record.$.dN && Object.keys(record.$.dN).length;
			if(bool1){
				record.$.dN = {};
				var model = record.$.model;
				var relations = model.relations;
				for(var key in relations){
					var rels = relations[key];
					rels.forEach(function(item){
						var opts = item.opts;
						if(opts && (opts.deepNest || opts.serialize == "partial")){
							var data = record[item.relKey];
							if(Array.isArray(data)){
								data.forEach(function(itm){
									if(Lyte.isRecord(itm)){
										store.$.removeDeepNest(itm);
										if(!itm.$.isNew && !itm.$.isModified && (!itm.$.dN || ( itm.$.dN && Object.keys(itm.$.dN).length == 0 ))){
											store.$.removeParentNesting(itm);
										}
									}
								});
							}
							else if(Lyte.isRecord(data)){	
								store.$.removeDeepNest(data);
								if(!data.$.isNew && !data.$.isModified && (!data.$.dN || ( data.$.dN && Object.keys(data.$.dN).length == 0))){
									store.$.removeParentNesting(data);
								}																			
							}
						}
					});
				}			
			}
		},
		addDeepNest:function(record, extended){
			var relatedRecord;
			var model = extended ? store.model[record.$.model.extend] : record.$.model;
			var pK = record.$.pK,
			type = "updated",
			relations = model.relations;
			for(var key in relations){
				var rels = relations[key];
				rels.forEach(function(item){
					var inv , deep, part;
					inv = store.$.getBackwardRel(model,item,store.model[item.relatedTo]);
					if(inv && inv.opts){
						deep = inv.opts.deepNest;
						part = inv.opts.serialize == "partial" ? true : false; 
						if(!item.relKey){
							relatedRecord = store.$.getRelatedRecord(record,item.relatedTo,item.dummy);
						}
						else{
							relatedRecord = record[item.relKey];
						}
					}
					if(deep){
	//					if(deep || part){
						store.$.makeDirty("dirty",relatedRecord, type, inv, pK);
					}
					if(part && record && relatedRecord){
						var data = relatedRecord;
						if(Array.isArray(data)){
							data.forEach(function(item){
								store.$.partialData(item, inv.relKey, pK , "modified");								
							});
						}
						else if(Lyte.isRecord(data)){
							store.$.partialData(data, inv.relKey, pK, "modified");	
						}
						//store.$.partialData(record[item.relKey], inv.relKey, pK , "modified");
					} 
				});
			}
			if(model.extend){
				this.addDeepNest(record, true);
			}
		},
		getRelatedRecord:function(record,modelName,key){
			if(record){
				var relationship = record.$._relationships;
				if(relationship[modelName] && relationship[modelName][key]){
					return relationship[modelName][key];
				}
			}
		},
		makeDirty:function(name, records, type, rel, pK){
			var relKey = rel.relKey;
			if(Array.isArray(records)){
				records.forEach(function(item){
					store.$.setDeepNest(item, relKey, pK, type);
				});
			}
			else if(Lyte.isRecord(records)){
				store.$.setDeepNest(records, relKey, pK, type);
			}
		},
		setDeepNest:function(item, relKey, pK, type){
			var deepN = item.$.dN = item.$.dN || {};
			var deepRel = deepN[relKey] = deepN[relKey] || new Map();
			if(!deepRel.has(pK)){
				deepRel.set(pK, {});
			}
			var obj = deepRel.get(pK);
			obj.type = type;
			store.$.addDeepNest(item);
		},
		isDirty:function(record, relations, parent, fMod){
			var result = [];
			for(var rel in relations){
				var rel_model = relations[rel];
				for(var j=0;j<rel_model.length;j++){
					var rel = rel_model[j];
					if(rel.opts && rel.opts.serialize){
						var key = rel.relKey;
						var type = rel.relType, records = record[key];
						if(parent){
							var child = store.$.getBackwardRel(fMod,rel,store.model[rel.relatedTo]);
							if(parent == child && fMod._name != rel.relatedTo){
								continue;
							}
						}
						if(rel.opts.serialize == "record" || rel.opts.serialize == "id"){
							var res = store.$.isRelDirty(rel, records, rel);
							if(res){
								result.push(key);
								continue;
							}							
						}
						else if(rel.opts.serialize == "partial"){
							if(type == "hasMany"){
								if(records && records.partial && records.partial.size){
									result.push(key);
									continue;
								}
							}
							else{
								if((Lyte.isRecord(records) && records.$.isModified) || (record && record.$ && record.$.partial && record.$.partial.hasOwnProperty(key))){
									result.push(key);
									continue;
								}
							}
						}
						if(rel.opts.deepNest){	
							if(record.$.dN && record.$.dN[key]){
								result.push(key);
							}
						}
					} 
				}
			}
			return result;
		},
		isRelDirty:function(rel, records, parent){
			var type = rel.relType;
			var fMod = store.model[rel.relatedTo];
			var relations = fMod.relations; 
			if(!store.$.isEmpty(records)){
				if(type == "hasMany" && Array.isArray(records) && records.length){
					var len = records.length;
					for(var i=0; i<len; i++){
						if(records[i].$.isModified == true){
							return true;
						}
					}
					for(var j=0; j<len; j++){
						var rec = records[j];
						var arr = this.isDirty(rec, relations, parent, fMod);
						if(arr.length){
							return true;
						}
					}
				}
				else if(type == "belongsTo" && Lyte.isRecord(records)){
					if(records.$.isModified == true){
						return true;
					}
					var arr = this.isDirty(records, relations, parent, fMod);
					if(arr.length){
						return true;
					}
				}
			}
			return false;
		},
		handleCachedResponse:function(batch,resp){
			var cached = store.$.cachedBatch = store.$.cachedBatch || {}
			var arr = cached[batch] || [], count = 0;
			arr.forEach(function(item,index){
				resp.splice((item.ind+count++),0,item.data);
			});
			delete cached[batch];
			return resp;
		},
		addToCachedBatch:function(data){
			var curr = store.$.currentBatch;
			var cached = store.$.cachedBatch = store.$.cachedBatch || {};
			var cachedB = cached[curr] = cached[curr] || [];
			var arr = store.$.batch[curr] || [];
			var ind = arr.length;
			cachedB.push({ind:ind, data:data});
		},
		establishToRelated:function(record, relArr){
			var bModel = record.$.model, rel = {};
			relArr.forEach(function(item){
				var rec = store.peekRecord(item.model, item.pkVal);
				if(rec){
					var fModel = rec.$.model;
					store.$.getRelations(fModel, item.key, bModel, rel);
					store.$.establishLink(rel.forward, rel.backward, rec, record, undefined, true);
				}
			});
		},
		checkObjAndAddToArr:function(arr, obj, keys){
			var len = keys.length, res = -1;
			arr.forEach(function(item, index){
				var i=0;
				for(var key in keys){
					if(item[key] == obj[key]){
						i++;
					}	
				}
				if(i == len){
					res = index;
					return;
				}
			});
			if(res == -1){
				arr.push(obj);
			}
			return res;
		},
		addToRelate:function(modelName, data, rel, key){
			var relMod = rel.forward.relatedTo;
			var toRelMod = store.$.toRelate[relMod] = store.$.toRelate[relMod] || new Map();
			if(!toRelMod.has(key)){
				toRelMod.set(key, []);
			}
			var toRel = toRelMod.get(key);
			var pkVal = data.$.pK;
			var obj = {model : modelName, pkVal : pkVal, key : rel.forward.relKey};
			toRel.push(obj);
			// this.checkObjAndAddToArr(toRel, obj, ["record","key"]);
		},
		addOnSave:function(modelName,record,attr,field,pK,relPk){
			store.$.onSave = store.$.onSave || {};
			var saveMod = store.$.onSave[modelName] = store.$.onSave[modelName] || {};
			var saveQ = saveMod[record[pK]] = saveMod[record[pK]] || {} 
			var recs = record[attr] || [];
			if(field.relType == "belongsTo"){
				recs = !Array.isArray(record[attr]) ? [record[attr]] : record[attr]; 
			}
			recs.forEach(function(item){
				var q = saveQ[field.relKey] = saveQ[field.relKey] || [];
				store.$.checkAndAddToArray(q, item[relPk]);
			});
		},
		addToIDBonSave:function(modelName, rec){
			var model = store.model[modelName];
			var fields = model.fieldList;
			var saveMod = store.$.onSave ? store.$.onSave[modelName] : undefined;
			if(saveMod){
				var pK = store.model[modelName]._pK;
				var saveQ = rec && pK ? saveMod[rec[pK]] : undefined;
				if(saveQ){
					for(var key in saveQ){
						var ids = saveQ[key];
						var relMod = fields[key].relatedTo;
						ids.forEach(function(item){
							var rec = store.peekRecord(relMod,item);
							if(rec){
								var parent = rec.$.parent;
								if(Lyte.isRecord(parent)){
									var mod = parent.$.model;
									var modName = mod._name;
									var modPk = mod._pK;
									store.$.checkAndAddToIDBQ(modName, "updateRecord", store.peekRecord(modName,parent[modPk]).$.toJSON(true));
								}
								else{
									store.$.checkAndAddToIDBQ(relMod, "updateRecord", store.peekRecord(relMod,item).$.toJSON(true));
								}
							}
						});
					}
					store.$.removeOnSave(modelName, rec[pK]);
				}
			}
		},
		removeOnSave:function(modelName, pkVal){
			var saveMod = store.$.onSave ? store.$.onSave[modelName] : undefined;
			if(saveMod && saveMod[pkVal]){
				delete saveMod[pkVal];
			}
		},
		checkAndAddToIDBQ:function(modelName, type, data){
			var obj = {model: modelName, type:type, data:data};
			var q = store.$.idbQ2[modelName] = store.$.idbQ2[modelName] || [];
			q.push(obj);
		},
		checkAndRemoveKey:function(rawData, fields, deserializeKeys){
			for(var key in rawData){
				var field = fields[key];
				if(field && field.type == "relation"){
					if(deserializeKeys && !this.checkPresenceInArray(deserializeKeys,key)){
						delete rawData[key];
					}
					else{
						this.removeNotNeededKeys(field.relatedTo, rawData[key]);
					}
				} 
			}
		},
		removeNotNeededKeys:function(modelName, rawData){
			var model = store.model[modelName];
			var fields = model.fieldList;
			var deserializeKeys = model.idb ? model.idb.deserializeKeys : undefined;
			if(model){
				var self = this;
				if(Array.isArray(rawData)){
					rawData.forEach(function(item){
						self.checkAndRemoveKey(item, fields, deserializeKeys);
					});
				}
				else{
					this.checkAndRemoveKey(rawData, fields, deserializeKeys)
				}
			}
			return rawData;
		},
		idbQ2Push:function(modelName,rawData,queryParams,type,key){
			try{
				var model = store.model[modelName];
				if(model.hasOwnProperty("idb")){
					rawData = Lyte.deepCopyObject(rawData);
					var qObj = {model:modelName,type:type};
					var pK = model._pK;
					var q =	store.$.idbQ2[modelName] = store.$.idbQ2[modelName] || [];
					switch(type){
						case "action":{
							delete q[type];
							return;
						}
						case "update":
						case "create":{
							qObj.data = []
							rawData.forEach(function(item){
								qObj.data.push(Lyte.isRecord(item)?item.$.toJSON():item);
							});
							break;
						}
						case "updateRecord":
						case "createRecord":{
							qObj.data = rawData;
							break;
						}
						case "delete":{
							qObj.data = rawData;
							break;
						}
						case "destroyRecord":
						case "deleteRecord":{
							qObj.id = rawData;
							break;
						}
						case "findRecord":
							qObj.key = key;		
						case "findAll": {
							rawData[modelName] = this.removeNotNeededKeys(modelName, rawData[modelName]);
							qObj.queryParams = queryParams;
							qObj.data = rawData;
							break;
						}
						case "pushPayload": {
							rawData = this.removeNotNeededKeys(modelName, rawData);
							qObj.data = rawData;
							break;
						}
					}
					q.push(qObj);
				}	
			}
			catch(err){
				console.log("Error while adding to IDBQueue ",err);
			}
		},
		isEmpty:function(val){
			if(val != undefined && val !== "" && val != null){
				return false;
			}
			return true;
		},
		isEmptyObj: function(obj){
			if(obj !== null && typeof obj == "object" && Object.keys(obj).length == 0){
				return true;
			}
			return false;
		},
		isEmptyArray: function(arr){
			if(Array.isArray(arr) && arr.length == 0){
				return true;
			}
			return false;
		},
		registerField:function(model,key,field,obs){
			// var field = fields[key];
			if(field.type == "observer"){
				obs.push(field);
			}
			else if(field.type == "callBack"){
				if(field.observes){
					obs.push(field.observes);
				}
				var props = field.properties;
				for(var i=0;i<props.length;i++){
					if(props[i] === "didLoad" || props[i] === "init"){
						if(!model.didLoad){
							model.didLoad = [];
						}
						model.didLoad.push(field.value);	
					}
					else if(props[i] === "add" || props[i] === "change"){
						model.on(props[i],field.value);
					}
				}
				if(key == "didLoad"){
					if(!model.didLoad){
						model.didLoad = [];
					}
					model.didLoad.push(field.value);
				}
			}
			else if(key == "didLoad"){
				if(!model.didLoad){
					model.didLoad = [];
				}
				model.didLoad.push(field);
			}
			else if(Object.keys(field).length){
				if(field.primaryKey){
					if(model.fieldList.id && model.fieldList.id.defined == false){
						delete model.fieldList.id;
					}
					if(model._pK != undefined){
						model._pK = model._pK + "," + key;
						model.isComposite = true; 
					}
					else{
						model._pK = key;
					}
				}
				if(field.baseKey){
					if(model.bK){
						Lyte.warn("Only one baseKey is allowed for a model");
						return;
					}
					model.bK = key
				}
				model.fieldList[key] = field;				
			}
			if(field.type === "relation"){
				field.relKey = key;
				var relTo = field.relatedTo;
				var relObj = model.fieldList[key];
				if(!model.relations[relTo]){
					model.relations[relTo] = [];
				}
				model.relations[field.relatedTo].push(relObj);
			}	
		},
        setError:function(err,attr,codeObj){
			if(err.$.hasOwnProperty("error")){
				if(Array.isArray(attr)){
					attr.forEach(function(itm){
						store.$.cmpSet(err.$.error, itm, codeObj);
					});
				}
				else{
					store.$.cmpSet(err.$.error,attr,codeObj);
				}
            }
            else{
                Lyte.error("LD03",err,attr);
            }
		},  
		unRegCb:function(type,name){
			var callback = store[type][name];
			if(!callback){
				Lyte.error(type," not present - ",name);
				return;
			}
			if(!callback){
				Lyte.error(type," not present - ",name);
				return;
			}	
			var extendedBy = callback.__extendedBy;
			if(extendedBy.length)
			{
				store[type].__toAddSuper = store[type].__toAddSuper || {};
				if(!store[type].__toAddSuper[name])
				{
					store[type].__toAddSuper[name] = extendedBy.slice();
				}
				else
				{
					extendedBy.forEach(function(item){
						store[type].__toAddSuper[name].push(item);
					});
				}
				extendedBy.forEach(function(item){
					store[type][item].$super = undefined;
				});
				if(store[type].application && name != "application")
				{	
					var application = store[type].application;
					extendedBy.forEach(function(item){
						store[type][item].$super = application;
						store[type].application.__extendedBy.push(item);
					});
				}
				if(!store[type].application)
				{
					if(!store[type].__toAddSuper.application)
					{
						store[type].__toAddSuper.application = extendedBy.slice();
					}
					else
					{
						extendedBy.forEach(function(item){
							store[type].__toAddSuper.application.push(item);
						});
					}
				}
			}
			if(callback.$super){
				callback.$super.__extendedBy.splice(callback.$super.__extendedBy.indexOf(name),1);
			}
			delete store[type][name];
		},
        eventListeners : {
          add: function(scope,type,func){
            scope.events = scope.events || {};
            scope.events[type] = scope.events[type] || [];
            scope.events[type].push({f : func});
            return  type+"-"+(scope.events[type].length-1);              
          },
          remove: function(scope,id){
            var type;
            if(id){
                if(/^(add|remove|change)$/.test(id)){
                    type = id;
                    (scope.events && scope.events[type]) ? delete scope.events[type] : undefined;   
                }
                else{
                    var arr = id ? id.split("-") : undefined;
                    if(arr){
                        var listeners = scope.events[arr[0]];
                        if(listeners && arr[1]){
                            listeners[arr[1]] = null;
                        }   
                    }            
                }
            }else{
                var ev = scope.events;
                for(var evType in ev){
                    (ev && ev[evType]) ? delete ev[evType] : undefined;
                }
            }
          },
          emit:function(scope,type,args){
            var listeners = (scope.events && scope.events[type]) ? scope.events[type] : [];
            for(var i=0; i<listeners.length; i++){
                (listeners[i]) ? listeners[i].f.apply(null, args) : undefined;
            }            
          }
        },
        extendCallback:function(scope,type,parent){
            var callback = scope[type],addsuper;
            var res;
            if(parent && typeof parent === "string"){
                res = callback[parent];
                if(!res){
					callback.__toAddSuper = callback.__toAddSuper || {};
                     if(!callback.__toAddSuper.hasOwnProperty(parent)){
                        callback.__toAddSuper[parent] = [];   
                     }
                     callback.__toAddSuper[parent].push(this.__name);
                }
            }	
            if(res && res.is == type && (!this.$super || this.$super.__name == "application")) {
				this.$super = res;
				res.__extendedBy.push(this.__name);
				if(callback.application)
				{
					var application_extarr = callback.application.__extendedBy;
					var index = application_extarr.indexOf(this.__name);
					if(index > -1)
					{
						callback.application.__extendedBy.splice(index,1);
					}
				}
				addsuper = callback.__toAddSuper;
				if(addsuper)
				{	
					if(addsuper.application)
					{	
						var addsuper_arr =  addsuper.application;
						var index1 = addsuper_arr.indexOf(this.__name);
						if(index1 > -1)
						{
							callback.__toAddSuper.application.splice(index1,1);
						}
					}
				}
            }
            return this;            
        },
        super:function(){
        	// console.log(arguments);
        	var scope = this, parent= this.$super, name = arguments[0][0][arguments[0][0].length-1], arr=[],arg=arguments[0][0];
    		var parent_type = parent[name];
    		if(typeof parent_type == "function")
    		{	
    			delete arg[arg.length-1];
    			for (var key in arg) {
				    if (arg.hasOwnProperty(key)) {
				        arr.push(arg[key]);
				    }
				}
    			return parent_type.apply(parent,arr);
    		}
    		if(parent_type)
    		{
    			return parent_type;
    		}
        },
		extendModel:function(extend){
			if(!extend || !store.model[extend]){
				return;
			}
			var parentFields = Object.assign({},store.model[extend].fieldList);
			for(var key in parentFields){
				if(parentFields[key].type == "relation"){
					delete parentFields[key];
				}
			}
			this.fieldList = Object.assign(this.fieldList, parentFields);
			var name = this._name;
			store.model[name].extend = extend;
			store.model[extend].extendedBy = store.model[extend].extendedBy || {};
			store.model[extend].extendedBy[name] = true;
			if(!store.adapter[name] && store.adapter[extend]){
				store.adapter[name] = store.adapter[extend];
			}
			if(!store.serializer[name] && store.serializer[extend]){
				store.serializer[name] = store.serializer[extend];
			}
		},
		establishObserverBindings:function(obj,prop,record){
			if(!record){
				record = obj;
			}
			for(key in prop){
				if(obj[key] instanceof Object && !(obj[key]._bindings && obj[key]._setterScope)){
					if(!obj[key]._bindings){
						store.$.defProp(obj[key], '_bindings', new Set(), false, true);
                    }
					if(record && !obj[key]._setterScope){
						store.$.defProp(obj[key],'_setterScope',record);
					}
					obj[key]._bindings.add(prop[key]);
					if(Object.keys(prop[key]).length){
						this.establishObserverBindings(obj[key],prop[key],obj);
					}
				}
				if(!obj._setterScope){
					store.$.defProp(obj, '_setterScope', obj);
				}
			}
		},
		setData:function(self, attr, value, redoObj){
			var toEmit = {emit : false, attr : [], oldRec : {}};
			var model = self.model, _estObsBind = false, record = self.record;
			if(attr instanceof Object){
				for(var key in attr){
					this.setValue(self, key, attr[key], toEmit);
					model && model._properties && model._properties.hasOwnProperty(key) ? _estObsBind = true : undefined;
				}
			}
			else{
				this.setValue(self, attr, value, toEmit);
				model && model._properties && model._properties.hasOwnProperty(attr) ? _estObsBind = true : undefined;
			}
			if(_estObsBind){
				store.$.establishObserverBindings(self.record, model._properties);
			}
			if(toEmit.emit){
				var arr = [record, toEmit.attr];
				self.emit("change", arr);
				self.model.emit("change", arr);
				store.emit("change", [model._name,record, toEmit.attr]);
				if(redoObj){
					for(var key in toEmit.oldRec){
						redoObj[key] = toEmit.oldRec[key];
					}
				}
				else{
					self.undoStack.push(toEmit.oldRec);
				}
			}
			return record;
		},
		setValue:function(self,attr,value, toEmit){
			var model = self.model, oldAttrVal, hasAttr, pK = model._pK, record = self.record;
			if(attr != model._pK){
				var field = model.fieldList[attr];
			    var hasAttr = record.hasOwnProperty(attr),oldAttrVal = record[attr];
				if(!field){
					store.$.cmpSet( record, attr, value, true );
					return;
				}
				else if(field.mandatory && (value == undefined || value == null || value === "")){
					store.$.setRecErr(self, attr, {code : "ERR02", message : Lyte.errorCodes.ERR02, value : value});
				}
				else if(field.relType){
					var relType = field.relType;
					var rel ={}, oldVal, relMod = store.modelFor(field.relatedTo), relPk = relMod._pK,relRec;
					var isComp = relMod.isComp, bPk = relMod._pK, bPkType = isComp ? "object" : relMod.fieldList[bPk].type;
					this.getRelations(model, field.relKey, relMod, rel);
					var oldRecVal = record[attr];
					if(record[attr] && relType == "hasMany"){
						oldVal = [];
						record[attr].forEach(function(item){
							oldVal.push(item[relPk]);
						});
						// oldVal = record[attr].slice(0);
						// oldVal1 = record[attr].mapBy(relMod._pK);
						store.$.addOnSave(model._name,record,attr,field,pK,relPk);
						this.toDemolishLink(model, record, rel.forward);
						// record[attr].splice(0, record[attr].length);
						this.handleArrOp(record[attr], "removeAt", undefined, 0, record[attr].length);
					}
					else if(record[attr] && relType == "belongsTo"){
						if(Lyte.isRecord(value)){
							relRec = value;
						}
						else {
							if(value && typeof value == bPkType){
								relRec = store.peekRecord((value._type) ? value._type : field.relatedTo, value);
							}
						}
						if(Lyte.isRecord(relRec) && relRec === record[attr]){
							return;
						}
						oldVal = record[attr][relPk];
						// oldVal = this.createCopy(record[attr]);
						store.$.addOnSave(model._name,record,attr,field,pK,relPk);
						// oldVal1 = record[attr][relMod._pK];
						this.toDemolishLink(model, record, rel.forward);
						// record[attr] = undefined;
						store.$.cmpSet(record, attr, {}, true);
					}
					if(!Array.isArray(value)){
						value = [value];
					}
					else if(relType == "belongsTo"){
						this.revertToOldVal(record, attr, oldVal, rel);
						store.$.setRecErr(self, attr, "ERR21", value);
						return;
					}
					if(relType == "hasMany" && store.$.isEmptyArray(value)){
						store.$.cmpSet(record, attr, [], true);
						store.$.establishObserverBindings(record, record.$.model._properties);
						store.$.defArrUtls(record[attr]);
						store.$.defPolyUtls(record[attr]);
						store.$.defUtls(record[attr], relMod, record, attr);						
					}
					var bModel = relMod, bPk = bModel._pK, isComp = bModel.isComp, bPkType = isComp ? "object" : bModel.fieldList[bPk].type, err = [];
					for(var i=0; i<value.length; i++){
						if(this.isEmpty(value[i]) || (relType == "belongsTo" && this.isEmptyObj(value[i])) || (relType == "hasMany" && this.isEmptyArray(value[i]))){
							continue;
						}
						var relRecord = value[i], relMod1 = (value[i] && value[i]._type) ? value[i]._type : field.relatedTo;
						if(!isComp && value[i] && typeof value[i] == bPkType){
							relRecord = store.peekRecord((value[i]._type) ? value[i]._type : field.relatedTo, value[i]);
							if(relRecord == undefined){
								this.addToRelate(model._name, record, rel, value[i]);
							}
							else if(relRecord.$ && relRecord.$.isError){
								err.push({code : "ERR15", message : Lyte.errorCodes.ERR15, error : Object.assign({}, relRecord)});
								continue;
							}
						}
						else if(value[i] && typeof value[i] == "object"){
							if(relRecord.$ && relRecord.$.isError){
								err.push({code : "ERR15", message : Lyte.errorCodes.ERR15, error : Object.assign({}, relRecord)});
								continue;
							}
							else if(!Lyte.isRecord(relRecord)){
								if(isComp){
									relRecord = store.peekRecord((value[i]._type) ? value[i]._type : field.relatedTo, value[i]);
									if(!relRecord){
										relRecord = this.newRecord(relMod1, value[i]);
									}
								}
								else{
									relRecord = this.newRecord(relMod1, value[i]);
								}
								if(relRecord.$.isError){
									err.push({code : "ERR15", data : value[i], message : Lyte.errorCodes.ERR15, error : Object.assign({}, relRecord)});
									continue;
								}
							}
						}
						var changed = this.establishLink(rel.forward, rel.backward, record, relRecord);
						if(changed != true){
							err.push({code : changed, data : value[i], message : Lyte.errorCodes[changed]});
						}
						else{
							store.$.addOnSave(model._name,record,attr,field,pK,relPk);
						}
					}
					if(err.length && (err.length == value.length)){
						this.revertToOldVal(record, attr, oldVal, rel);
						if(field.relType == "belongsTo"){
							store.$.setRecErr(self, attr, err[0]);
						}
						else{
							store.$.setRecErr(self, attr, err);
						}
						return;
					}
					else{
						if(err.length > 1){
							store.$.setRecErr(self, attr, err);
						}
						else{
							store.$.clrRecErr(self, attr);
						}
						if(!record.$._attributes.hasOwnProperty(attr)){
							record.$._attributes[attr] = [];
						}
						record.$._attributes[attr].push({_type : "changed", records : oldVal});
						toEmit.emit = true;
						toEmit.attr.push(attr);
						var obj = {}; obj.records = oldVal; obj._type = "update";
						toEmit.oldRec[attr] = obj;
						var arr = record.$.getInitialValues(attr), changed = true;
						if(arr && Array.isArray(record[attr]) && arr.length == record[attr].length){
							changed = false;
							for(var i=0; i<arr.length; i++){
								if(!store.$.compareRecords(arr[i], record[attr][i], bPk, undefined, bModel)){
									changed = true;
									break;
								}
							}
						}
						if(!changed){
							delete record.$._attributes[attr];
						}
					}
				}
				else{
					if(value !== record[attr]){
						for(var property in field){
							var resp = Lyte.checkProperty(property, value, attr, field[property], record);
							if(resp != true){
								if(typeof resp == "object"){
									resp.value = value;
								} 
								store.$.setRecErr(self, attr, resp);
								return;
							}
						}
						var attribute = record.$._attributes[attr];
						if( !record.$._attributes.hasOwnProperty(attr)){
							record.$._attributes[attr] = this.createCopy(record[attr]);
						}
						else if((value && typeof value == "object" && store.adapter.$.compareObjects(attribute, value)) || (attribute == value)){
							delete record.$._attributes[attr];
						}
						hasAttr = record.hasOwnProperty(attr);
						oldAttrVal = record[attr];
						store.$.cmpSet(record,attr,value,true);
						toEmit.emit = true;
						toEmit.attr.push(attr);
						store.$.clrRecErr(self, attr);
						var obj = {};
						obj._type = "update";
						obj.val = oldAttrVal;
						if(!hasAttr){
							obj.type = "propAdd";
						}
						toEmit.oldRec[attr] = obj;	
					}
					else if(value === record[attr] && record.$.isError && record.$.error[attr]){
						var valid = true;
						for(var property in field){
							var resp = Lyte.checkProperty(property, value, attr, field[property], record);
							if(resp != true){
								valid = false;
							}
						}
						if(valid){
							store.$.clrRecErr(self,attr);
						}
					}
				}
				if(Object.keys(record.$._attributes).length){
					self.isModified = true;
					store.$.addDeepNest(record);
					this.checkAndAddToArray(model.dirty, record[model._pK]);
				}
				else{
					self.isModified = false;
					if(!self.hasOwnProperty("dN") || (self.dN && !Object.keys(self.dN).length)){
						store.$.removeParentNesting(record);                    
					}
					if(!self.isNew){
						this.deleteFromArray(model.dirty, record[model._pK]);
					}
				}
			}
			else{
				if(record[attr] !== value){
					store.$.setRecErr(self, attr, "ERR01", value);
				}
			}
		},
		checkForCorrectRelation:function(rel,record){
			var relatedTo = rel.relatedTo;
            if(!Lyte.isRecord(record)){
                return false;
            }
			if(rel.opts && rel.opts.polymorphic){
				return (record.$.model.extend ? rel.relatedTo === record.$.model.extend : false);
			}
			return (rel && record ? relatedTo === record.$.model._name : false);
		},
        removeKeys:function(fieldList,record){
            for(var key in record){
                if(!fieldList.hasOwnProperty(key)){
                    delete record[key];
                }
                else{
                    var field = fieldList[key];
                    if(field.type === "belongsTo" || field.type === "hasMany" && record[key]){
                        this.removeNotDefinedKeys(field.relatedTo,record[key], (field.opts && field.opts.polymorphic) ? true: undefined);
                    }
                }
            }
        },
		removeNotDefinedKeys:function(model,records,polymorphic){
			var fieldList = model.fieldList;
			if(Array.isArray(records)){
				for(var i=0; i<records.length; i++){
					var record = records[i];
					this.removeKeys((polymorphic)?(Lyte.isRecord(record)?record.$.model.fieldList:fieldList):fieldList,record);
				}				
			}
			else{
                this.removeKeys((polymorphic)?(Lyte.isRecord(records)?records.$.model.fieldList:fieldList):fieldList,records);
			}
		},
		add:function(value,type,redoObj){
			var record= this.record, model = record.$.model, attr = this.key, field = model.fieldList[attr], rel = {};
			var oldArr;
			store.$.getRelations(model, field.relKey, store.modelFor(field.relatedTo), rel);
			if(!Array.isArray(value)){
				value = [value];
			}
			var relMod = store.modelFor(rel.forward.relatedTo);
			var pK = relMod._pK, err = [], arr = [], isComp = relMod.isComp;
			if(record.$._attributes.hasOwnProperty(attr) && record.$._attributes[attr].length){
				oldArr = record.$.getInitialValues(attr);
			}
			for(var i=0; i<value.length; i++){
				var rec = value[i];
				if(isComp){
					if(typeof rec == "object" && Object.keys(rec).length === relMod._arrPk.length){
						if(this.polymorphic && !type){
							err.push({code : "ERR22", data : value[i], message : Lyte.errorCodes.ERR22});
							continue;
						}
						rec = store.peekRecord((type) ? type : rel.forward.relatedTo, rec);	
					}
				}
				if((!isComp && relMod.fieldList[pK].type.toLowerCase() == typeof rec) || (isComp && typeof rec == "object" && Object.keys(rec).length === relMod._arrPk.length) ){
					if(this.polymorphic && !type){
						err.push({code : "ERR22", data : value[i], message : Lyte.errorCodes.ERR22});
						continue;
					}
					rec = store.peekRecord((type) ? type : rel.forward.relatedTo, rec);
				}
				else if(typeof rec == "object" && !Lyte.isRecord(rec)){
					rec = store.$.newRecord((rec._type) ? rec._type : type ? type : field.relatedTo, rec);
				}
				var polyType = (rec && rec._type)?rec._type: type ? type: undefined ;
				if(rec == undefined){
					err.push({code : "ERR13", data : value[i], message : Lyte.errorCodes.ERR13});
				}
				else if(rec.$ && rec.$.isError){
					err.push({code : "ERR15", data : value[i], message : Lyte.errorCodes.ERR15, error : rec});
				}
				else if(Lyte.isRecord(rec) && !store.$.hasDuplicateRelation(rec, record[attr], pK, polyType, relMod)){
					// oldArr = rec.$.getInitialValues(attr);
					var resp = store.$.establishLink(rel.forward, rel.backward, record, rec);
					if(resp != true){
						err.push({code : resp, data : value[i], message : Lyte.errorCodes[resp]});
					}
					else{
						arr.push(rec);
					}
				}
			}
			if(arr.length){
                if(!record.$._attributes[attr]){
					record.$._attributes[attr] = [{_type : "added", records : arr}];
					store.$.cmpSet(record.$, "isModified", true);
					// record.$.isModified = true;
					store.$.checkAndAddToArray(model.dirty, record[model._pK]);
				}
				else if(store.$.hasRecordsArrayChanged(record, attr, oldArr)){
					record.$._attributes[attr].push({_type : "added", records : arr});
				}
				else{
					delete record.$._attributes[attr];
					// record.$.isModified = false;
					if(!Object.keys(record.$._attributes).length){
						store.$.cmpSet(record.$, "isModified", false);
						if(!record.$.isNew){
							store.$.deleteFromArray(model.dirty, record[model._pK]);										if(!record.$.dN || (record.$.dN && !Object.keys(record.$.dN).length)){
								store.$.removeParentNesting(record);
							}			
						}
					}
				}
                store.$.emit("change", record, [attr]);
				var obj = {_type:"added", records: arr};
				if(redoObj){
					redoObj[attr] = obj; 
				}
				else{
					var stackObj = {};
					stackObj[attr] = obj;
					record.$.undoStack.push(stackObj);
				}
			}
			if(err.length > 0){
				store.$.setRecErr(record.$, attr, err);
			}
			else{
				store.$.clrRecErr(record.$, attr);
			}
			return record;
		},
		remove:function(key,type,redoObj){
			var record = this.record, model = record.$.model, attr =  this.key, field = model.fieldList[attr], rel = {};
			var oldArr;
			store.$.getRelations(model, field.relKey, store.modelFor(field.relatedTo), rel);
			if(!Array.isArray(key)){
				key = [key];
			}
			var relMod = store.modelFor(rel.forward.relatedTo);
			var pK = relMod._pK, isComp = relMod.isComp, err = [], relatedRecord, arr = [], indices = [];
			if(record.$._attributes.hasOwnProperty(attr) && record.$._attributes[attr].length){
				oldArr = record.$.getInitialValues(attr);
			}
			for(var i=0; i<key.length; i++){
				var rec = key[i];
				if((!isComp && relMod.fieldList[pK].type.toLowerCase() == typeof key[i]) || (isComp && typeof rec == "object" && Object.keys(rec).length === relMod._arrPk.length)){
					if(this.polymorphic == true && !type){
						err.push({code : "ERR22", data : key[i], message : Lyte.errorCodes.ERR22});
						continue;
					}
					relatedRecord = store.peekRecord((type)?type:rel.forward.relatedTo,key[i]);
				}
				else if(Lyte.isRecord(key[i])){
					relatedRecord = key[i];
				}
                var polyType = (relatedRecord && relatedRecord._type) ? relatedRecord._type : type ? type : undefined;
				if(relatedRecord){
					var index = store.$.getIndex(record[attr], pK, relatedRecord.$.get(pK),polyType);
					store.$.demolishLink(relatedRecord, pK, store.peekRecord(model._name, record.$.pK), rel.forward.relKey, undefined, undefined, undefined, true);
					if(rel.backward != null){
						store.$.demolishLink(record, model._pK, store.peekRecord((polyType)?polyType:rel.forward.relatedTo, relatedRecord.$.pK), rel.backward.relKey, rel.forward);
					}
					arr.push(relatedRecord);
					indices.push(index);
				}
			}
			if(arr.length){
				if(!record.$._attributes[attr]){
					record.$._attributes[attr] = [{_type : "removed", records : arr, _indices : indices}];
					store.$.cmpSet(record.$, "isModified", true);
					// record.$.isModified = true;
					store.$.checkAndAddToArray(model.dirty, record[model._pK]);
				}
				else if(store.$.hasRecordsArrayChanged(record, attr, oldArr)){
					record.$._attributes[attr].push({_type : "removed", records : arr, _indices : indices});
				}
				else{
					// record.$.isModified = false;
					delete record.$._attributes[attr];
					if(!Object.keys(record.$._attributes).length){
						store.$.cmpSet(record.$, "isModified", false);
						if(!record.$.isNew){
							store.$.deleteFromArray(model.dirty, record[model._pK]);
							if(!record.$.dN || (record.$.dN && !Object.keys(record.$.dN).length)){
								store.$.removeParentNesting(record);
							}			
						}
					}
				}
			}
			store.$.emit("change", record, [attr]);
			var obj = {_type:"removed", records: arr, _indices : indices};
			if(redoObj){
				redoObj[attr] = obj; 
			}
			else{
				var stackObj = {};
				stackObj[attr] = obj;
				record.$.undoStack.push(stackObj);
			}
			if(err.length > 0){
				store.$.setRecErr(record.$, attr, err);
			}
			else{
				store.$.clrRecErr(record.$, attr);
			}
		},
		filter:function(record,filObj,len){
			var j=0;
			for(var key in filObj){
				if(record[key] === filObj[key]){
					j++;
				}
			}
			if(j === len){
				return true;
			}
		},
		filterBy : function(obj){
			var len = Object.keys(obj).length, j = 0, arr = [];
			for(var i=0; i<this.length; i++){
				if(store.$.filter(this[i],obj,len)){
					arr.push(this[i]);
				}
			}
			if(!arr.filterBy){
				store.$.defArrUtls(arr);
				store.$.defUtls(arr,this.model);
			}
			return arr;
		},
		idbSerialize: function(data, rel, model, bModel, pkVal, expose){
			var relTo = rel.forward.relatedTo, pK = model._pK, bPk = bModel._pK;
			if(Array.isArray(data)){
				data.forEach(function(item, index){
					if(Lyte.isRecord(item) && item.$.inIDB){
						data[index] = item[bPk];										
					}
					else if(!store.$.checkPresenceInArray(store.$.recStack[relTo],item[bPk])){
						store.$.removeBackwardRel(item, rel, pK, pkVal, true);
						store.$.removeSelfCircularReference(bModel._name, item, expose);
					}
					else{
						data[index] = item[bPk];										
					}
				});
			}
			else if(data && Lyte.isRecord(data)){
				if(Lyte.isRecord(data) && data.$.inIDB){
					obj[relKey] = data[bPk];
				}
				else if(!this.checkPresenceInArray(store.$.recStack[relTo],data[bPk])){
					this.removeBackwardRel(data, rel, pK, pkVal, true);
					this.removeSelfCircularReference(bModel._name, data,expose);
				}else{
					obj[relKey] = data[bPk];
				}
			}
		},
		idSerialize: function(obj, data, rel, model, bModel, pkVal, expose, partialObj){
			var polymorphic = rel.forward.opts ? rel.forward.opts.polymorphic : undefined, relKey = rel.forward.relKey; 
			if(Array.isArray(data)){
				if(polymorphic){
					obj[relKey] = this.polymorphicToJSON(rel.forward,data);
				}
				else{
					var arr = [];
					if(partialObj){
						var partial = partialObj[relKey] || [], anyNew = false;
					}
					data.forEach(function(item){
						if(expose != true && item.$.isNew){
							anyNew = true;
							store.$.rSerialize(item, rel, bModel, model._pK, pkVal, expose, partial);
							arr.push(item);													
						}
						else{
							if(partial){
								partial.push({});
							}
							arr.push(item.$.pK);
						}
					});
					if(!anyNew && partialObj && partialObj.hasOwnProperty(relKey)){
						delete partialObj[relKey];
					}
					obj[relKey] = arr;
				}
			}
			else if(data && Lyte.isRecord(data)){
				if(expose != true && data.$.isNew){
					if(partialObj){
						var partial = partialObj[relKey] || {};
					}
					store.$.rSerialize(data, rel, bModel, model._pK, pkVal, expose, partial);
				}
				else{
					if(polymorphic){
						obj[relKey] = this.polymorphicToJSON(rel.forward,data);								
					}
					else{
						obj[relKey] = data[bModel._pK];
					}
				}
			}
		},
		recordSerialize: function(obj, key, val, rel, model, bModel, pkVal, expose, partialObj){
			var pK = model._pK;
			if(Array.isArray(val)){
				if(val.length == 0){
					delete obj[key];
					return 0;
				}
				val = Array.from(val);
				var partial = partialObj[key] = partialObj[key] || [];
				for(var j=0; j<val.length; j++){
					if(val[j] && Lyte.isRecord(val[j])){
						this.rSerialize(val[j], rel, bModel, pK, pkVal, expose, partial);
					}
				}
			}
			else if(val && Lyte.isRecord(val)){
				var partial = partialObj[key] = partialObj[key] || {};
				partial = this.rSerialize(val, rel, bModel, pK, pkVal, expose, partial);
				partialObj[key] = partial;
			}
		},
		rSerialize : function(data, rel, bModel, pK, pkVal, expose, partialObj){
			var relTo = rel.forward.relatedTo, partial;
			this.removeBackwardRel(data, rel, pK, pkVal);
			if(partialObj){
				var partial = {};
				var pType = data.$.isNew ? "added" : data.$.isModified ? "modified" : "related";
				Object.defineProperties(partial, {
					pkVal : {
						value : data.$.pK
					},
					type : {
						value : pType
					},
					model : {
						value : relTo
					}
				});
				if(Array.isArray(partialObj)){
					partialObj.push(partial);
				}
			}
			this.removeSelfCircularReference(bModel._name, data, expose, undefined, partial);
			return partial;
		},
		partialSerialize : function(obj, key, val, rel, model, bModel, pkVal, expose, partialObj){
			var field = rel.forward, pK = model._pK, relTo = rel.forward.relatedTo;
			var polymorphic = rel.forward.opts ? rel.forward.opts.polymorphic : undefined;
			if(field.relType == "hasMany"){
				if(val && val.partial){
					var part = val.partial;
					var bpK = bModel._pK;
					if(partialObj){
						partial = partialObj[key] = partialObj[key] || [];
						store.$.defProp(partial, "partial", true);
					}
					if(part){
						var pObj, pKey, newPartial,result = [], self = this;
						part.forEach(function(value , key){
							pObj = value, pKey = key , newPartial;
							if(/^(added|modified)$/.test(pObj.type)){
								var pType = "related";
								var ind = store.$.getIndex(val, bpK, pKey, undefined, store.model[relTo]);
								if(ind != -1){
									var rec = val[ind], updVal = rec;
									if(polymorphic && rec){
										bModel = store.model[rec._type];
									}
									self.removeBackwardRel(rec, rel, pK, pKey);
									if(rec.$.isNew){
										pType = "added";
									}
									else if(rec.$.isModified){
										pType = "modified";												
										var valDir = store.$.isDirty(rec, bModel.relations);
										updVal = store.$.updateJSON(rec, bModel, valDir);				
									}
									else{
										var valDir = store.$.isDirty(rec, bModel.relations);
										updVal = store.$.updateJSON(rec, bModel, valDir);											
									}
									if(partial){
										var newPart = {}; 
										Object.defineProperties(newPart, {
											pkVal : {
												value : pKey
											},
											type : {
												value : pType
											},
											model : {
												value : polymorphic && rec ? rec._type : relTo
											}																										
										});
										partial.push(newPart);
									}
									self.removeSelfCircularReference(bModel._name, updVal, expose, undefined, newPart);			
									// var resObj = {type: pObj.type, data: updVal};
									if(Lyte.isRecord(updVal)){
										updVal.$.partialType = pObj.type;
									}
									else{
										store.$.defProp(updVal, "$", {});
										store.$.defProp(updVal.$, "partialType", pObj.type);
										if(!updVal.$.hasOwnProperty("pK")){
											store.$.defProp(updVal.$, "pK", pKey);
										}
									}
									if(polymorphic){
										updVal.$.polymorphicType = rec._type;
									}
									result.push(updVal);
								}
							}
							else if(pObj.type == "removed"){
								var dObj = {};
								dObj[bpK] = pKey;
								if(partial){
									var newPart = {}; 
									Object.defineProperties(newPart, {
										pkVal : {
											value : pKey
										},
										type : {
											value : "removed"
										},
										model : {
											value : relTo
										}																										
									});
									partial.push(newPart);
								}
								store.$.defProp(dObj, "$", {});
								store.$.defProp(dObj.$, "partialType","removed");
								if(!dObj.$.hasOwnProperty('pK')){
									store.$.defProp(dObj.$, "pK", pKey);
								}
								// result.push({type:"removed", data: dObj})
								result.push(dObj);
							}
						});
						if(result.length){
							val = obj[key] = result;
						}
						else{
							delete obj[key];
						}
					}
				}
				else{
					delete obj[key];
				}
			}
			else if(field.relType == "belongsTo" && val && Lyte.isRecord(val)){
				this.removeBackwardRel(val, rel, pK, pKey);
				var updVal = val, valDir;
				if(val.$.isNew){
					this.removeBackwardRel(val, rel, pK, pkVal);
				}
				else{
					valDir = store.$.isDirty(val, bModel.relations);
					updVal = store.$.updateJSON(val, bModel, valDir);
				}
				if(partialObj){
					var partial = partialObj[key] = partialObj[key] || {};
					var pType = val.$.isNew ? "added" : val.$.isModified ? "modified" : "related";
					Object.defineProperties(partial, {
						pkVal : {
							value : val.$.pK
						},
						type : {
							value : pType
						},
						model : {
							value : relTo
						}
					});
				}
				this.removeSelfCircularReference(bModel._name, updVal, expose, undefined, partial);
				val = obj[key] = updVal;
			}
		},
		removeSelfCircularReference : function(modelName, obj, expose, type, partialObj){
			var model = store.model[modelName], fieldList = model.fieldList;
			var extended = model.extend ? true : false, pkVal = store.$.getpKVal(obj,model);
			store.$.recStack[modelName] = store.$.recStack[modelName] || []; 
			var ret = store.$.checkAndAddToArray(store.$.recStack[modelName], pkVal);
			var record = store.peekRecord(modelName, pkVal), partObj = Lyte.isRecord(record) ? record.$.partial : undefined;
			for(var key in obj){
				var field = fieldList[key], extMod, swap = false, relTo , bModel, relType;
				var removePk = ((type == "create"|| (Lyte.isRecord(obj) && obj.$.isNew)) && model._pK == key) ? true: false;
				if(removePk && expose != true){
					delete obj[key];
					continue;
				}
				if(!field){
					if(extended){
						extMod = store.modelFor(model.extend);
						field = extMod.fieldList[key];
						swap = true;
					}
					delete obj[key];
					continue;
				}
				if(field && field.type != "relation" && !expose  && Lyte.Transform[field.type] && Lyte.Transform[field.type].serialize && obj.hasOwnProperty(key)){			
					obj[key] = Lyte.Transform[field.type].serialize(obj[key]);
					continue;
				}
				if(partObj && partObj.hasOwnProperty(key)){
					var partPload = {};
					var bPk = store.model[field.relatedTo]._pK;
					partObj[key].forEach(function(item, partPk){
						partPload[bPk] = partPk;
						store.$.defProp(partPload, "$", {});
						store.$.defProp(partPload.$, "partialType", "removed");
						store.$.defProp(partPload.$, "pK", partPk);
						if(partialObj){
							var partial = partialObj[key] = partialObj[key] || {};
							Object.defineProperties(partial, {
								pkVal : {
									value : partPk
								},
								type : {
									value : "removed"
								},
								model : {
									value : field.relatedTo
								},
								parent : {
									value : record
								}
							});
						}
						obj[key] = partPload;
					});
					continue;
				}
				if(expose == true && obj[key] && typeof obj[key] == "object" && field && field.type != "relation"){
					obj[key] = Lyte.deepCopyObject(obj[key]);
					continue;
				}
				if(obj[key] && field && field.type == "relation"){
					relTo = field.relatedTo;
					relType = field.relType;
					bModel = store.modelFor(relTo);
					if(bModel == undefined){
						continue;
					}
					var relKey = field.relKey, rel = {};
					if(swap){
						this.getRelations(extMod, field.relKey, bModel, rel);						
					}
					else{
						this.getRelations(model, relKey, bModel, rel);
					}
					var opts = field.opts;
					var serialize = opts ? opts.serialize : undefined, val = obj[relKey];
					if(expose == "idb"){
						store.$.idbSerialize(val, rel, model, bModel, pkVal,expose);
					}
					else if(expose || serialize == "id"){
						store.$.idSerialize(obj, val, rel, model, bModel, pkVal, expose, partialObj);
					}
					else if(serialize === "record"){
						var ret = store.$.recordSerialize( obj, key, val, rel, model, bModel, pkVal, expose, partialObj);
						if(ret == 0){
							continue;
						}
					}
					else if(serialize === "partial"){
						store.$.partialSerialize( obj, key, val, rel, model, bModel, pkVal, expose, partialObj)
					}
					else{
						delete obj[relKey];
						continue;
					}
					val = obj ? obj[relKey] : undefined;
					if( val && (relType == "hasMany" && Array.isArray(val) && val.length == 0) || (relType == "belongsTo" && typeof val == "object" && Object.keys(val).length == 0)) {
						delete obj[relKey];
					}
				}
				
			}
		},
		removeBackwardRel:function(val,rel,pK,pkVal,wholeRelKey){
			if(wholeRelKey){
				delete val[rel.backward.relKey];
				return; 
			}
			if(rel.backward != null){
				var rec = val[rel.backward.relKey];
				if(Array.isArray(rec)){
					for(var i=0; i<rec.length; i++){
						if(this.comparePk(rec[i],pkVal)){
							rec.splice(i,1);
							if(rec.length == 0){
								delete val[rel.backward.relKey];
							}
							return;
						}								
					}
				}
				else if(rec && Lyte.isRecord(rec) && this.comparePk(rec, pkVal)){
					delete val[rel.backward.relKey];
				}
			}
		},
		polymorphicToJSON : function(rel,data){
			var opts = rel.opts;
			if(opts && opts.polymorphic){
				if(Array.isArray(data)){
					var res = [];
					data.forEach(function(item){
						res.push(store.$.polyToJSON(item));
					});
					return res;
				}
				else{
					return store.$.polyToJSON(data);
				}
			}
		},
		polyToJSON : function(data){
			var type = data ? data._type : undefined;
			var polyMod = store.modelFor(type);
			var pK = polyMod ? polyMod._pK : undefined;
			var poly = {};
			var pkVal = data.$.pK;
			if(typeof pkVal == "object"){
				poly = Object.assign({}, pkVal);
			}
			else{
				poly[pK] = pkVal;
			}
			poly._type = data._type;
			return poly;
		},
		toJSONObj : function(model, data, expose, type, partialObj){
			var copyObj, pkVal, partial, modelName = model._name;
			if(expose == true){
				copyObj = Object.assign({},data);
			}
			else{
				copyObj = Lyte.deepCopyObject(data)
			}
			if(Lyte.isRecord(copyObj)){
				pkVal = copyObj.$.pK;
			}
			else{
				pkVal = store.peekRecord(modelName, store.$.getpKVal(copyObj, model)).$.pK;
			}
			pkVal = copyObj[pK];
			if(partialObj && !partialObj.has(pkVal)){
				partialObj.set(pkVal,{});
				partial = partialObj.get(pkVal); 
			}
			this.removeSelfCircularReference(modelName, copyObj,expose,type, partial);
			if(expose == "idb"){
				this.removeNotNeededKeys(modelName, copyObj);
			}
			return copyObj;
		},
		toJSON : function(modelName,obj,expose,type,partialObj){
			var copyObj, model = store.model[modelName];
			store.$.recStack = {}, pK = model._pK;
			if(Array.isArray(obj)){
				var arr = [];
				for(var i=0; i<obj.length; i++){
					copyObj = this.toJSONObj(model, obj[i], expose, type, partialObj);
					arr.push(copyObj);
				}
				return arr;
			}
			else if(obj && (typeof obj === "object" || Lyte.isRecord(obj))){
				copyObj = this.toJSONObj(model, obj, expose, type, partialObj);
			}
			store.$.recStack = {};
			return copyObj;
		},
		createCopy : function(data){
			if(Array.isArray(data)){
				if(data.save){
					var arr = [];
					for(var i=0; i<data.length; i++){
						var rec = Lyte.deepCopyObject(data[i]);
						arr.push(rec);
					}
					return arr;
				}
			}
			else if(data && ( Lyte.isRecord(data) || typeof data == "object")){
				return Lyte.deepCopyObject(data);
			}
			return data;
		},
		compareRecords  : function(a,b,pK,type,model){
			var pK = model._arrPk;
			if(Lyte.isRecord(a) && Lyte.isRecord(b) && pK.length){
				if(type && a._type && type !== a._type){
					return false;
				}
				var ret = true;
				pK.forEach(function(itm){
					if(a[itm] && b[itm] && a[itm] !== b[itm]){
						ret = false;
					}
				});
				return ret;
			}
			return false;
		},
		hasRecordInArray : function(array,record,pK,type){
			if(Lyte.isRecord(record) && pK){
				for(var i=0; i<array.length; i++){
					if(type && array[i]._type !== type){
						continue;
					}
					if(this.compareRecords(array[i], record, pK, undefined, record.$.model)){
						return true;
					}
				}
			}
			return false;
		},
		hasDuplicateRelation : function(toRelate,relation,pK,type,model){
			if(Array.isArray(relation)){
				return this.hasRecordInArray(relation, toRelate, pK, type);
			}
			else if(relation && Lyte.isRecord(relation)){
				return this.compareRecords(toRelate, relation, pK, type, model);
			}
			return false;
		},
		checkPresenceInArray : function(arr,value){
			return arr && arr.some(function(val){
				return val === value;
			});
		},
		checkAndAddToArray : function(arr,value){
			if(!this.checkPresenceInArray(arr,value)){
				arr.push(value);
			}else{
				return -1;
			}
		},
		deleteFromArray : function(arr,value){
			var ind = arr.indexOf(value);
			if(ind != -1){
				arr.splice(ind,1);
			}
		},
		genPk : function(pK, opts, fields){
			var pkType;
			pK.forEach(function(item){
				pkType = fields[item].type;
				var random = opts[item] = Math.floor(Math.random()*100000 + 1);
				if(pkType == "string"){
					opts[item] = random.toString();                    
				}
			});
		},
		generateRandomPk:function(model, opts, pK, fields){
			this.genPk(pK, opts, fields);
			while(this.isDuplicateRecord(model, opts, pK.toString())){
				this.genPk(pK, opts, fields);
			}            
		},      
		pkPresence:function(opts, pK){
			var result = true;
			pK.forEach(function(item){
				if(!opts.hasOwnProperty(item) || !opts[item] ){
					result = false;
					return;
				}
			});
			return result;
		},
		newRecord:function(name, opts, withoutValidation){
			var model = store.modelFor(name);
			if(model == undefined){
				return new error1("id", {code : "ERR19", data : name, message : Lyte.errorCodes.ERR19, data:name});
			}
			if(opts == undefined){
				opts = {};
			}
			var fields = model.fieldList, record = {}, errorObj = new error1();
			var pK = model._arrPk;
			if(!this.pkPresence(opts, pK)){
                this.generateRandomPk(model, opts, pK, fields)
			}
			else if(this.isDuplicateRecord(model, opts, pK)){
                store.$.setError(errorObj, pK, {code : "ERR17", message : Lyte.errorCodes.ERR17})
			}
			for(var field in fields){
				var fieldKeys = fields[field];
				if(fieldKeys.relType == "hasMany"){
					record[field] = [];
				}
				var val = opts[field];     
				if(fieldKeys.type != "relation"){
					if(val === undefined || val === ""){
						if(fieldKeys.hasOwnProperty("default")){
							val = record[field] = store.$.getDefaultVal(record, field, fieldKeys.default);
						}
					}
					if(!withoutValidation){
						for(var property in fieldKeys){
							var resp = Lyte.checkProperty(property, val, field, fieldKeys[property], opts, record);
							if(resp != true){
								store.$.setError(errorObj,field,resp);
								break;
							}
						}
					}	
				}    
			}
			for(var opt_key in opts){
				record[opt_key] = opts[opt_key];
			}
			record = new Record(name, record);
			store.$.cmpSet(record.$, "isNew", true);
			// record.$.isNew = true;
			var relations = model.relations;
			for(var key in relations){
				var relation = relations[key];
				for(var i=0; i<relation.length; i++){
					var relObj = relation[i];
					var relKey = relObj.relKey;
					var polymorphic = relObj.opts ? relObj.opts.polymorphic : undefined; 
					if(record && record[relKey]){
						var optsRelVal = opts[relKey];
						record[relKey] = undefined;
						var fieldKeys = relation[i], rel = {}, resp = this.getRelations(model, fieldKeys.relKey, store.modelFor(fieldKeys.relatedTo), rel),ingore=false;
						if(resp != true){
							store.$.setError(errorObj,fieldKeys.relKey,{code : resp, data : relation, message : Lyte.errorCodes[resp]});
							continue;
						}
						var bModel = store.modelFor(fieldKeys.relatedTo), bPk = bModel._pK , isComp = bModel.isComp, bPkType = !isComp ? bModel.fieldList[bModel._pK].type : undefined;
						if(!Array.isArray(optsRelVal)){
							optsRelVal = [optsRelVal];
						}
						else if(relation[i].relType == "belongsTo"){
							store.$.setError(errorObj,fieldKeys.relKey,{code : "ERR21", data : optsRelVal, message : Lyte.errorCodes.ERR21});
							continue;
						}
						errorObj[fieldKeys.relKey] = [];
						for(var j=0; j<optsRelVal.length; j++){
							var relRecord = undefined, relMod = fieldKeys.relatedTo, ind;
							if(optsRelVal[j] && Lyte.isRecord(optsRelVal[j])){
								relRecord = optsRelVal[j];
							}
							else if(isComp && typeof optsRelVal[j] == "object"){
								var ind = store.$.getIndex(bModel.data, bPk, store.$.getpKVal(optsRelVal[j], bModel));
								if(ind != -1){
									relRecord = bModel.data[ind];
								}
								else{
									if(polymorphic){
										if(optsRelVal[j] && optsRelVal[j].hasOwnProperty("_type")){
											relMod =  optsRelVal[j]._type;
										}
										else{
											store.$.setError(errorObj, fieldKeys.relKey, {code : "ERR22", data : optsRelVal[j], message : Lyte.errorCodes.ERR22});
											continue;		
										}
									}
									relRecord = this.newRecord(relMod, optsRelVal[j]);									
								}
							}
							else if(optsRelVal[j] && typeof optsRelVal[j] == bPkType.toLowerCase()){
								relRecord = store.peekRecord(relMod, optsRelVal[j]);
							}
							else if(optsRelVal[j] && typeof optsRelVal[j] == "object"){
								if(polymorphic){
									if(optsRelVal[j] && optsRelVal[j].hasOwnProperty("_type")){
										relMod =  optsRelVal[j]._type;
									}
									else{
										store.$.setError(errorObj, fieldKeys.relKey, {code : "ERR22", data : optsRelVal[j], message : Lyte.errorCodes.ERR22});
										continue;		
									}
								}
								relRecord = this.newRecord(relMod, optsRelVal[j]);
								// ingore = true;
							}
							if(relRecord && relRecord.$ && relRecord.$.isError){
								store.$.setError(errorObj, fieldKeys.relKey,{code : "ERR15", data : optsRelVal[j], message : Lyte.errorCodes.ERR15, error : Object.assign({}, relRecord)});
								continue;
							}
							if(relRecord && relRecord.$ && !relRecord.$.isError){
								resp = this.establishLink(rel.forward, rel.backward, record, relRecord, undefined, ingore);
								if(resp != true){
									store.$.setError(errorObj,fieldKeys.relKey,{code : resp, data : optsRelVal[j], message : Lyte.errorCodes[resp]});
								}							
							}
						}
						if(errorObj[fieldKeys.relKey].length == 0){
							delete errorObj[fieldKeys.relKey];
						}
						if(relation[i].relType == "hasMany"){
							var fieldkey = relKey;
							if(record[fieldkey] == undefined){
								record[fieldkey] = [];
							}
							if(!record[fieldkey].add){
								if(polymorphic){
									store.$.defProp(record[fieldkey], "polymorphic", true);
								}
								store.$.defArrUtls(record[fieldkey]);
								store.$.defUtls(record[fieldkey], store.modelFor(relation[i].relatedTo),record,fieldkey);
								store.$.defPolyUtls(record[fieldkey]);
							}
						}
					}
				}
			}
			if(errorObj && errorObj.$ && Object.keys(errorObj.$.error).length > 0){
				return errorObj;
			}
			var toRel = store.$.toRelate[model._name], pkVal = record.$.pK;
			if(toRel && toRel.has(pkVal)){
				store.$.establishToRelated(record, toRel.get(pkVal));
				toRel.delete(pkVal);
			}
			if(model.didLoad){
				var callBack = model.didLoad;
				for(var i=0;i<callBack.length;i++){
					callBack[i].apply(record);				
				}
			}
			this.handleArrOp(model.data,"push",record);
			this.checkAndAddToArray(model.dirty, record.$.pK);
			model.emit("add",[record]);
            store.emit("add",[model._name,record]);
			if(withoutValidation){
				record.$.validatedOnCreate = false;
			}
			return record;
		},
		toInsertData: function(modelName, payLoad, saveParent){
			var model = store.modelFor(modelName);
			var data = this.insertIntoStore(model, payLoad[modelName],saveParent,true);
			delete model.rel;
			return data;
		},
		insertIntoStore:function(model,data,saveParent,stack,partialObj){
			var ret;
			if(Array.isArray(data)){
				ret = [];
				for(var i=0; i<data.length; i++){
					ret[i] = this.insertIntoStore(model, data[i], saveParent, stack, partialObj);
                    if(ret[i] && ret[i].$ && ret[i].$.isError){
						ret.$ = ret.$ || store.$.defProp(ret, "$", {});
						// ret.$.isError = true;
						store.$.cmpSet(ret.$, "isError", true);
                    }
				}
			}
			else if(data && Object.keys(data).length){
				var currentModel = model;
				if(data._type && model.extendedBy){
					currentModel = (model.extendedBy[data._type]) ? store.modelFor(data._type) : undefined;
				}
				if(Lyte.isRecord(data))
				{
					return undefined;
				}
				if(!this.isDuplicateRecord(currentModel, data, currentModel._pK)){
					var rec = new Record(currentModel._name, data);
					currentModel.data.push(rec);
					var toRel = store.$.toRelate[currentModel._name], pkVal = rec.$.pK;
					if(saveParent){
						store.$.saveParent = rec;
					}
					ret = this.validateAndPush(currentModel,rec,partialObj);
					if(toRel && toRel.has(pkVal)){
						store.$.establishToRelated(rec, toRel.get(pkVal));
						toRel.delete(pkVal);
					}
				}
				else{
					ret = this.validateAndMerge(currentModel,data,partialObj);
				}
				if(saveParent){
					store.$.saveParent = undefined;
				}
				if(stack){
					store.$.recStack = {};
				}
			}
			return ret;
		},
		removeFromStore:function(model,keys,fromStore,ignorePartial){
			var data = model.data;
			if(data.length == 0){
				return;
			}
			if(!Array.isArray(keys)){
				keys = [keys];
			}
			var pKey = model._pK;
			for(var i=0; i<keys.length; i++){
				var index = this.getIndex(data, pKey, keys[i]);
				if(index == -1){
					continue;
				}
				var rec = data[index];
				var pK = rec.$.pK;
				var relations = model.relations;
				if(Object.keys(relations).length){
					this.toDemolishRelation(model, index, ignorePartial);	
				}
				var deleted;
				deleted = this.handleArrOp(data,"removeAt",undefined,index,1)
				if(deleted && !fromStore){
					store.$.cmpSet( deleted[0].$, "isDeleted", true);
					// deleted[0].$.isDeleted = true;
					if(deleted[0].$.isNew || deleted[0].$.isModified){
						store.$.deleteFromArray(model.dirty, deleted[0].$.pK);
					}
					if(!deleted[0].$.isNew){
						store.$.addTo_Del(model, deleted[0], index);
						// model._deleted.push(deleted[0]);
					}
				}
				model.emit("remove", [deleted[0]]);
				store.emit("remove", [model._name,deleted[0]]);
				var ind;
				if(Array.isArray(model.dirty) && (ind = model.dirty.indexOf(pK)) != -1){
					model.dirty.splice(ind, 1);
				}
			}
		},
		getIndex:function(data,pKey,pkVal,type, model){
			var isComp = model ? model.isComp : (pKey.split(',').length > 1 ? true : false); 
			if(!isComp){
				return this.getInd(data, pKey, pkVal, type)
			}
			else{
				return this.getCompInd(data, pkVal, type, model)
			}
		},
		getCompInd:function(data,pkVal,type,model){
			for(var i=0;data && i<data.length;i++){
				var rec = data[i];
				if(type && data[i]._type !== type){
					continue;
				}
				if(store.adapter.$.compareObjects(store.$.getpKVal(rec,model), pkVal)) {
					return i;
				}
			}
			return -1;
		},
		getInd : function(data,pKey,pkVal,type){
			for(var i=0;data && i<data.length;i++){
				var rec = data[i];
				if(type && rec._type !== type){
					continue;
				}
				if(rec[pKey] == pkVal){
					return i;
				}
			}
			return -1;
		},
		isDuplicateRecord:function(model,obj){
			var data = model.data, pK = model._pK, isComp = model.isComposite;
			if(data.length){
				return data.some(function(record){
					if(!isComp){
						if(obj[pK] == record[pK]){
							return true;
						}
					}
					else{
						if(store.adapter.$.compareObjects( store.$.getpKVal(obj, model), store.$.getpKVal(record) )){
							return true;
						}
					}
				});
			}
			return false;
		},
		validateAndPush:function(model,data,partialObj){
			if(!model.rel){
				model.rel = {};
			}
			var pkVals = model._arrPk, errObj = {};
			pkVals.forEach(function(item){
				if(!data.hasOwnProperty(item)){
					errObj.item = item;
					return new error1(item, {code : "ERR23", data : data, message : Lyte.errorCodes.ERR23});
				}
			});
			if(errObj.item){
				var index = model.data.indexOf(data);
				model.data.splice(index,1);
				return new error1(errObj.item, {code : "ERR23", data : data, message : Lyte.errorCodes.ERR23});
			}
			data = this.validateJSON(model, data, undefined, undefined, partialObj);
			if(model.didLoad){
				var callBack = model.didLoad;
				for(var i=0;i<callBack.length;i++){
					callBack[i].apply(data);	
				}
			}
			var index = model.data.indexOf(data);
			model.data.splice(index,1);
			this.handleArrOp(model.data,"push",data);

			model.emit("add",[data]);
			store.emit("add",[model._name,data])
			return data;
		},
		validateAndMerge:function(model,data,partialObj){
            if(!model.rel){
                model.rel  = {};
            }
            var record = store.peekRecord(model._name, store.$.getpKVal(data, model));
            if(!record || !Lyte.isRecord(record)){
                Lyte.error("LD04",data);
                return false;
            }
            this.mergeData(record, data, partialObj);
            // record = this.validateJSON(model, record, Object.keys(data), toValidate, partialObj);
			if(model.didLoad){
                var callBack = model.didLoad;
                for(var i=0;i<callBack.length;i++){
                    callBack[i].apply(record);				
                }
                //model.didLoad.apply(record);
            }
            return record;
		},
		mergeData:function(record,data,partialObj){
            if(!record || !data){
                return;
            }
            var model = record.$.model, field, _estObsBind = false;
            for(var key in data){
                field = model.fieldList[key];
                if(field){
                    if(field.type != "relation"){
						if(data[key] && Lyte.Transform.hasOwnProperty(field.type) && Lyte.Transform[field.type].hasOwnProperty("deserialize")){
							data[key] = Lyte.Transform[field.type].deserialize(data[key]);
						}
						store.$.cmpSet(record,key,data[key],true);
						model._properties && model._properties.hasOwnProperty(key) ? _estObsBind = true : undefined;
                    }
                    else if(field && field.type == "relation"){
						var todo = {};
						var rel = {};
						store.$.getRelations(record.$.model, key, store.modelFor(field.relatedTo), rel);
						var bMod = store.model[rel.forward.relatedTo];
						var result = this.compareRelations(record,data,key,field,partialObj ? partialObj[key] : undefined ,todo);
						this.mergeRecords(todo, result, model, bMod, record, key, data, rel, partialObj);
                    }
                }
                else{
					store.$.cmpSet( record,key,data[key],true );
                }
			}
			if(_estObsBind){
				store.$.establishObserverBindings(record, model._properties);
			}
		},
		mergeRecords:function(todo, result, model, bMod, record, key, data, rel, partialObj){
			if(!rel){
				var rel = {};
				store.$.getRelations(model, key, bMod, rel);	
			}
			var pK = model._pK;
			if(rel.forward.relType == "hasMany" && store.$.isEmptyArray(data[key])){
				store.$.cmpSet(record, key, [], true);
				store.$.establishObserverBindings(record,record.$.model._properties);
				store.$.defArrUtls(record[key]);
				store.$.defPolyUtls(record[key]);
				store.$.defUtls(record[key],bMod,record,key);
			}
			if(Array.isArray(todo.add)){
				todo.add.forEach(function(item){
					store.$.createAndRelate(model, bMod, record, key, item, rel, partialObj);
				});
			}
			if(Array.isArray(todo.remove)){
				todo.remove.forEach(function(item){
					store.$.demolishLink(record, pK, store.peekRecord(bMod._name, item), rel.backward.relKey,  rel.forward, rel.backward, true); 
					store.$.demolishLink(store.peekRecord(bMod._name, item), bMod._pK, record, rel.forward.relKey, rel.backward, rel.forward, true); 
				});
			}
			if(record && record.hasOwnProperty(key)){
				store.$.deleteDeepNest(record, key);
				if(Array.isArray(record[key]) && record[key].hasOwnProperty("partial")){
					var partObj = record[key].partial, partKeys = [];
					partObj.forEach(function(value, partKey){
						partKeys.push(partKey);
						record[key].partial.delete(partKey);
					});
				}
			}
			switch(result){
				case 0:{
					if(Lyte.isRecord(record[key])){
						store.$.demolishLink(record, pK, record[key], rel.backward.relKey, rel.forward, rel.backward, true); 
						store.$.demolishLink(record[key], bMod._pK, record, rel.forward.relKey, rel.backward, rel.forward, true); 								
					}
					store.$.createAndRelate(model, bMod, record, key, data[key], rel, partialObj);
					break;
				}
				case 1:{
					break;
				}
				case 2:{
					this.mergeData(record[key],data[key]);
					break;
				}
				default : break;    
			}
		},
        compareRelations:function(record,data,key,field,partialObj,todo){
            //return 0 - not same, 1 -same, 2 - merge, 3 - partial add, 4 - delete and partial add
			var model = store.modelFor(field.relatedTo);
			var pK = model._pK, result = [];
            if(field.relType == "belongsTo"){
                return this.compareRecordWithObj(record[key],data[key],pK, partialObj);   
            }else{
				if(!record.hasOwnProperty(key) || (record && record.hasOwnProperty(key) && (store.$.isEmpty(record[key]) || store.$.isEmptyArray(record[key])))){
					if(todo){
						var arr = data[key] || [];
						arr.forEach(function(item){
							var add = todo.add = todo.add || [];
							add.push(item);
						});
						return;
					}
					return 0;
				}
				var isPartial = false;
				if((partialObj && partialObj.partial)){
					isPartial = true;
				}
                var len = data[key].length,old=0,status=1,oldPks = [];
                for(var i=0;i<len;i++){
					var obj = data[key][i];
					if(partialObj && partialObj[i] && partialObj[i].type == "removed"){
						continue;
					}
                    var ind = this.getIndex(record[key],pK,(typeof obj == "object") ? store.$.getpKVal(obj,model) : obj);
                    if(ind == -1){
						if(todo){
							var add = todo.add = todo.add || [];
							add.push(obj);
						}
                        status = 0;
                        continue;
					}
					oldPks.push(record[key][ind].$.pK);
                    var res = this.compareRecordWithObj(record[key][ind],obj,pK,partialObj ? partialObj[i] : undefined);
					if(res == 1){
						old++;
					}
                    if(res == 2){
                        this.mergeData(record[key][ind],obj, partialObj ? partialObj[i] : undefined);
                    }
                    else if(res == 0){
                    	status = 0;
                    }
				}
				if(todo && !isPartial){
					var arr = record[key] || [];
					arr.forEach(function(item){
						var pkVal = item.$.pK;
						if(oldPks.indexOf(pkVal) == -1){
							var remove = todo.remove = todo.remove || [];
							remove.push(pkVal);
						}
					});
				}
            }
        },
        compareRecordWithObj:function(rec,obj,pK,partialObj){
            if( !rec || !Lyte.isRecord(rec) ){
                return 0;
            }
			var recModel = rec.$.model;
			var recPk = recModel._pK;
			var isComp = recModel.isComp;
            var recFields = recModel.fieldList;
			if(!isComp) {
				var field = recModel.fieldList[pK];
				if(typeof obj == field.type ){
					if(rec[pK] == obj){
						return 1;
					}
					else{
						return 0;
					}
				}
			}
			if(obj && typeof obj == "object"){
				if(!store.$.comparePk(rec, store.$.getpKVal(obj, recModel))){
					return 0;
				}
				for(var data_key in obj){
					var field = recFields[data_key];
					if(field){
						if(field.type == "relation"){
							var todo = {};
							var res = this.compareRelations(rec, obj, data_key, field, partialObj ? partialObj[data_key] : undefined, todo);
							this.mergeRecords(todo, res, recModel, store.modelFor(field.relatedTo), rec, data_key, obj, undefined, partialObj);
						}
						else if(rec[data_key] != obj[data_key]){
							return 2;
						}                    
					}
					else{
						if(rec[data_key] != obj[data_key]){
							return 2;
						}
					}	
				}
				return 1;
			}
			return 0;
        },
		validateJSON:function(model,data,keys,toValidate,partialObj){
            var validate = (toValidate) ? toValidate.toValidate : undefined;
            var fields = (validate && Object.keys(validate).length) ? validate : model.fieldList;
			var extended = model.extend ? true : false;
			for(var key in data){
				if(keys && keys.indexOf(key) == -1){
					continue;
				}
				var fld = fields[key];
				if(fld){
					if(fld.type == "relation" && data[key]){
						var partialAdd = (toValidate && toValidate.toPartialAdd) ? toValidate.toPartialAdd[key] : undefined;
						var resp = this.handleRelation(key, model, fld, data, partialAdd, partialObj);
						if(resp != true){
							return new error1(key, {code : resp, data : data, message : Lyte.errorCodes[resp]});
						}
						if(fld.relType == "hasMany" && !data[key].add){
							store.$.defArrUtls(data[key]);
							store.$.defPolyUtls(data[key]);
							store.$.defUtls(data[key],store.model[fld.relatedTo],data,key);
						}
					}
					else if(fld.type){
						var fieldKeys = fld;
						if(data[key] === undefined && fieldKeys.default){
							data[key] = store.$.getDefaultVal(data, key, fieldKeys.default);
						}
						if(data[key] && Lyte.Transform.hasOwnProperty(fieldKeys.type) && Lyte.Transform[fieldKeys.type].hasOwnProperty("deserialize")){
							data[key] = Lyte.Transform[fieldKeys.type].deserialize(data[key]);
						}
					}
				}
				else{
					if(extended){
						var extMod = store.modelFor(model.extend);
						var extKey = extMod.fieldList[key];
						if(extKey && extKey.type == "relation"){
							var partialAdd = (toValidate && toValidate.toPartialAdd) ? toValidate.toPartialAdd[key] : undefined;
							var resp = this.handleRelation(key, extMod, extKey, data, partialAdd);
							if(resp != true){
								return new error1(key, {code : resp, data : data, message : Lyte.errorCodes[resp]});
							}
							if(extKey.relType == "hasMany" && !data[key].add){
								store.$.defArrUtls(data[key]);
								store.$.defPolyUtls(data[key]);
								store.$.defUtls(data[key],extMod,data,key);
							}
						}
					}
				}
			}
			return data;
		},
		handleRelation:function(key,model,field,data,partialAdd, partialObj){
			var rel = {};
			if (!model.rel.hasOwnProperty(key)){
				var relResp = this.getRelations(model,key,store.modelFor(field.relatedTo),rel);	
				if(relResp !== true){
					return relResp;
				}
				model.rel[key] = rel;
			}
			else{
				rel = model.rel[key];
			}
			return this.solveRelation(rel, model, store.modelFor(field.relatedTo), key, data, partialAdd, partialObj);
		},
		getRelations:function(fModel,key,bModel,rel){
			if(bModel == undefined){
				Lyte.error("LD05",fModel.fieldList[key].relatedTo,key,fModel._name)
				return "ERR11";
			}
			rel.forward = fModel.fieldList[key];
			rel.backward = this.getBackwardRel(fModel,rel.forward,bModel);
			if(rel.backward === undefined){
				// Lyte.warn("LD06",fModel._name,key,bModel._name);
				// return "ERR25";
				var temp_backward = {type: "relation",relatedTo:fModel._name, dummy:rel.forward.relKey, relKey:undefined};
				bModel.relations[fModel._name] = bModel.relations[fModel._name] || [];
				bModel.relations[fModel._name].push(temp_backward);
				rel.backward = temp_backward;
			}
			return true;
		},
		getBackwardRel:function(fModel,rel,bModel){
			var inverse, polymorphic;
			if(rel.opts){
				inverse = rel.opts.inverse;
				polymorphic = rel.opts.polymorphic;
				if(inverse === null){
					return null;
				}
				if(polymorphic){
					var extendedModels = bModel.extendedBy;
					if(extendedModels){
						for(var key in extendedModels){
                            var extModel = store.modelFor(key);
							if(extModel.relations[fModel._name]){
								bModel = extModel;
								break;
							}
						}
					}
				}
			}
			var relatedTo;
			if(inverse && inverse != ""){
				relatedTo = inverse;
			}
			else{
				var bRel = bModel.relations[fModel._name];
                var extFmodel = store.modelFor(fModel.extend);
				if(!bRel && extFmodel && bModel.relations[extFmodel._name] && bModel.relations[extFmodel._name].opts && bModel.relations[extFmodel._name].opts.polymorphic){
					bRel = bModel.relations[extFmodel._name];
				}
				relatedTo = (bRel && bRel.length == 1 )?bRel[0].relKey:undefined;
			}
			if(!relatedTo){
				var bRels = bModel.relations[fModel._name];
                var extFmodel_1 = store.modelFor(fModel.extend);
				if(!bRels && extFmodel_1 && bModel.relations[extFmodel_1._name] && bModel.relations[extFmodel_1._name].opts && bModel.relations[extFmodel_1._name].opts.polymorphic){
					bRels = bModel.relations[extFmodel_1._name];
				}
				if(rel.dummy && bRels){
					for(var i=0;i<bRels.length;i++){
						if(bRels[i] && bRels[i].relKey && bRels[i].relKey == rel.dummy)
						{
							 relatedTo = bRels[i].relKey;
							 break;
						}
					}
				}
				else if(bRels){
					for(var i=0;i<bRels.length;i++){
						if(bRels[i] && bRels[i].opts && bRels[i].opts.inverse && bRels[i].opts.inverse === rel.relKey){
							relatedTo = bRels[i].relKey;
							break;
						}
						else if(bRels[i] && bRels[i].dummy && bRels[i].dummy == rel.relKey)
						{
							 relatedTo = bRels[i];
							 break;
						}
					}
				}
			}
			if(relatedTo && relatedTo.dummy){
				return relatedTo;
			}
			return relatedTo?bModel.fieldList[relatedTo]:undefined;			
		},
		solveRelation:function(rel,fModel,bModel,key,data,partialAdd,partialObj){
			var backward = rel.backward, forward = rel.forward, partial = partialObj ? partialObj[key] : undefined, partialRel = partial && partial.partial;
			var fPk = fModel._pK, val = [];
            if(partialAdd){
                val = partialAdd;
            }
			else if(!partialRel){
                if(data[key] && (data[key].add || Lyte.isRecord(data[key]) ) ){
                    return true;
                }
                if(!Array.isArray(data[key])){
                    data[key] = [data[key]];
                }
                else if(forward.relType == "belongsTo"){
                    return "ERR21";
				} 
				val = data[key].splice(0, data[key].length);
				if(forward.relType == "belongsTo"){
					data[key] = undefined;				
				}                
			}
			else if(Array.isArray(data[key])){
				var val = data[key].splice(0, data[key].length);
			}
			for(var i=0; i<val.length; i++){
				var ret;
				ret = this.createAndRelate(fModel, bModel, data, key, val[i], rel, partial);
				if(ret != true){
					return ret;
				}
			}
			return true;
		},
		createAndRelate: function(fModel, bModel, data, key, val, rel, partial){
			if(!rel.backward){
				if(rel.forward.relatedTo === fModel._name){
					rel.backward = rel.forward;
				}
				if(rel.backward === undefined){
					return "ERR12";
				}
			}
			var pK = fModel._pK, isComp = bModel.isComp;
			var relatedRecord, newPartial = partial && partial.hasOwnProperty(val[pK]) ? partial[val[pK]] : partial;
			if(!isComp && typeof val == bModel.fieldList[bModel._pK].type){
				relatedRecord = store.peekRecord(bModel._name, val);
			}
			else if(typeof val == "object" && !Lyte.isRecord(val)){
				relatedRecord = this.insertIntoStore(bModel, val, undefined, undefined, newPartial);					
			}
			if(relatedRecord && relatedRecord.$ && relatedRecord.$.isError){
				store.$.cmpSet(data.$, "isError", true);
				// data.$.isError = true;
				var errObj = {code:"ERR24", message: Lyte.errorCodes.ERR24, data: data, error: relatedRecord.$.error};
				store.$.cmpSet( data.$.error, key, errObj );
			}
			else if(relatedRecord){
				if(!this.hasDuplicateRelation(relatedRecord, data[key], bModel._pK, val._type, bModel)){
					this.establishLink(rel.forward, rel.backward, data, relatedRecord, undefined, true);							
				}
			}
			else{
				this.addToRelate(fModel._name, data, rel, val);
			}
			return true;
		},
		singleEstablishLink:function(forward,data,relatedRecord){
			var relation = relatedRecord.$._relationships , fModelName = data.$.model._name , fRelKey = forward.relKey ;
			relation[fModelName] = relation[fModelName] || {};
			relation[fModelName][fRelKey] = relation[fModelName][fRelKey] || [];
			if(!this.hasDuplicateRelation(data,relation[fModelName][fRelKey],data.$.model._pK, undefined, data.$.model)){
				relation[fModelName][fRelKey].push(data);
			}
		},		
		establishLink:function(forward,backward,data,relatedRecord,index,ignorePartial){
			if(!relatedRecord){
				return "ERR13";
			}
			if( !this.checkForCorrectRelation(forward, relatedRecord) ){
				return "ERR14";
			}
			var fRelKey = forward.relKey, type = relatedRecord._type;
			if(forward.relType == "belongsTo"){
                if(data[fRelKey] !== relatedRecord){
					store.$.cmpSet( data, fRelKey, relatedRecord, true );
				}
				if(data.$.partial && Object.keys(data.$.partial).length && data.$.partial[fRelKey]){
					delete data.$.partial[fRelKey];
				}
			}
			else if(forward.relType === "hasMany"){
				if(!data[fRelKey]){
					store.$.cmpSet(data,fRelKey,[],true);
				}
				if(!data[fRelKey].model){
					var relModel = relatedRecord.$.model;
					if(type){
						store.$.defProp(data[fRelKey], "polymorphic", true);
						relModel = store.modelFor(relModel.extend);
					}
                    store.$.establishObserverBindings(data,data.$.model._properties);
					store.$.defArrUtls(data[fRelKey]);
					store.$.defPolyUtls(data[fRelKey]);
					store.$.defUtls(data[fRelKey],relModel,data,fRelKey);
				}
				var mdl = forward?store.modelFor(forward.relatedTo)._pK : undefined;
				if( !this.hasDuplicateRelation(relatedRecord, data[fRelKey], (forward?mdl._pK : undefined),type, mdl) ){
					if(index != undefined){
						if(typeof Lyte.arrayUtils != "undefined"){
							Lyte.arrayUtils(data[fRelKey],"insertAt",index,relatedRecord);						
						}
						else{
							data[fRelKey].splice(index, 0, relatedRecord);
						}	
					}
					else{
						this.handleArrOp(data[fRelKey],"push",relatedRecord);
					}
				}
				var ret;
				if(!ignorePartial && forward.opts && forward.opts.serialize == "partial"){
					ret = store.$.partialData(data, fRelKey, relatedRecord.$.pK, "added");
				}
			}
			var nest = false;
			if(!ignorePartial){
				nest = ret ? false : true;
			}
			if(forward == backward){
				return true;
			}
			if(backward === null){
				if(relatedRecord.hasOwnProperty(bRelKey)){
					delete relatedRecord[bRelKey];
				}
				return true;
			}
			if(backward.dummy){
				this.singleEstablishLink(forward,data,relatedRecord);
			}
			else{
				var bRelKey = backward.relKey, relRecMod = relatedRecord.$.model;
				if( !this.checkForCorrectRelation(backward, data) ){
					return "ERR14";
				}
				if(backward.relType == "belongsTo"){
					if(relatedRecord[bRelKey] != undefined  && relatedRecord[backward.relKey] !== data){
						this.toDemolishLink(relRecMod, relatedRecord, backward, ignorePartial);
					}
					if(relatedRecord[bRelKey] !== data){
						store.$.cmpSet(relatedRecord, bRelKey, data, true);
					}
					if(relatedRecord.$.partial && Object.keys(relatedRecord.$.partial).length && relatedRecord.$.partial[bRelKey]){
						delete relatedRecord.$.partial[bRelKey];
					}
				}
				else if(backward.relType === "hasMany"){
					if(!relatedRecord[bRelKey]){
						store.$.cmpSet(relatedRecord, bRelKey, [], true);
					}
					if(!relatedRecord[bRelKey].model){
						store.$.defArrUtls(relatedRecord[bRelKey]);
						store.$.defPolyUtls(relatedRecord[bRelKey]);
						store.$.defUtls(relatedRecord[bRelKey],data.$.model,relatedRecord,bRelKey);
					}
					var bMdl = backward ? store.modelFor(backward.relatedTo) : undefined;
					if( !this.hasDuplicateRelation(data, relatedRecord[bRelKey], (backward ? bMdl._pK : undefined), type, bMdl) ){
						this.handleArrOp(relatedRecord[bRelKey],"push",data);
					}
					if(!ignorePartial && backward.opts && backward.opts.serialize == "partial"){
						store.$.partialData(relatedRecord, bRelKey, data.$.pK, "added");
					}
				} 
			}
			if(nest){
				store.$.addDeepNest(relatedRecord);
			}
			return true;
		},
		toDemolishRelation:function(model,index,ignorePartial){
			var record = model.data[index], relations = model.relations, storeUtils = this;
			for(var key in relations){
				var rel = relations[key];
				for(var i=0; i<rel.length; i++){
					var relation = rel[i],
					relatedModel = store.modelFor(relation.relatedTo);
					if(relatedModel){
						var relPriKey = relatedModel._pK, 
						relkey = relation.relKey;
						if(model._name == relatedModel._name){
							var data = relatedModel.data,index1,index2;
							for(index1=0 ; index1<data.length; index1++){
								var item=data[index1];
								if(Array.isArray(item[relkey])){
									for(var index2=0;index2<item[relkey].length;index2++){
										var value = item[relkey][index2];
										if(value[relPriKey] == record[relPriKey])
										{
											storeUtils.handleArrOp(item[relkey],"removeAt",undefined,index2,1);
										}
									}
								}
								else if (Lyte.isRecord(item[relkey])){
									if(item[relkey][relPriKey] == record[relPriKey])
										{
											item[relkey] = undefined ;
										}
								}
							}
						}
						if(!record[relation.relKey] && !relation.dummy){
							continue;
						}
						this.toDemolishLink(model, record, relation, ignorePartial);
					}
				}
			}
		},
		toDemolishLink:function(model,record,relation,ignorePartial){
			var records = record[relation.relKey], 
			priKey = model._pK, 
			relatedModel = store.modelFor(relation.relatedTo);
			if(!relatedModel){
				return;
			}
			relPriKey = relatedModel._pK, 
			relatedModelName = relation.relatedTo, 
			bRelation = this.getBackwardRel(model, relation, relatedModel),
			serialize = relation.opts ? relation.opts.serialize : undefined;
			if(relation.dummy){
				records = this.getRelatedRecord(record,relation.relatedTo,relation.dummy);
			}
			// if(bRelation.dummy){
			// 	bRelation.relKey = undefined;
			// }
			var pKs = [], rec;
			if(bRelation){
				if(Array.isArray(records)){
					for(var i=0; i<records.length; i++){
						this.demolishLink(record, priKey, records[i], bRelation.relKey, relation, bRelation, ignorePartial);
					} 
				}
				else if(Lyte.isRecord(records)){
					this.demolishLink(record, priKey, records, bRelation.relKey, relation, bRelation, ignorePartial);
				}
			}
		},
		demolishSingleRelation : function(record,fModelName,key,relatedRecord,priKey){
			var arr,index;
			if(Lyte.isRecord(record)){
				arr = record.$._relationships;
				if(arr && arr[fModelName] && arr[fModelName][key]){
					arr = arr[fModelName][key];
					index = this.getIndex(arr,priKey,relatedRecord[priKey]);
					if(index > -1){
						arr.splice(index,1);
					}
				}
			}
		},
		demolishLink : function(record, priKey, relatedRecord, bRelKey, relation, bRelation, ignorePartial, ignoreAttrCheck){
			var links = relatedRecord[bRelKey], relMod = relatedRecord.$.model, pKs = [];
			var pK = record.$.pK;
			if(Array.isArray(links)){
				var ind = this.getIndex(links, priKey, pK,record._type);
				var _attrs = relatedRecord.$._attributes;
				var initialVal = _attrs.hasOwnProperty(bRelKey) && _attrs[bRelKey] && _attrs[bRelKey].length  ? relatedRecord.$.getInitialValues(bRelKey) : undefined;
				if(ind != -1){
					this.handleArrOp(relatedRecord[bRelKey],"removeAt",undefined,ind,1);
				}
				if(!ignoreAttrCheck && initialVal){
				 	if(!store.$.hasRecordsArrayChanged(relatedRecord, bRelKey, initialVal)){
						delete relatedRecord.$._attributes[bRelKey];
						if(!Object.keys(relatedRecord.$._attributes).length){
							store.$.cmpSet(relatedRecord.$, "isModified", false);
							if(!relatedRecord.$.isNew){
								store.$.deleteFromArray(relMod.dirty, relatedRecord[relMod._pK]);
								if(!relatedRecord.$.dN || (relatedRecord.$.dN && !Object.keys(relatedRecord.$.dN).length)){
									store.$.removeParentNesting(relatedRecord);
								}			
							}
						}
					}
				}
			}
			else if( links && (typeof links == "object" || Lyte.isRecord(links)) ){
				if(Lyte != undefined && Lyte.objectUtils != undefined){
					Lyte.objectUtils(relatedRecord, "delete", bRelKey, undefined, undefined, true);
				}
				else {
					delete relatedRecord[bRelKey];
				}
			}
			else{
				this.demolishSingleRelation(relatedRecord,record.$.model._name,relation.relKey,record,priKey);
			}
			if(!bRelation){
				bRelation = relMod.fieldList[bRelKey];
			}
			if(!ignorePartial){
				var relType, isPartial, ret, nest;
				if(bRelation){
					if(bRelation.opts){
						isPartial = bRelation.opts.serialize == "partial";
						nest = bRelation.opts.deepNest;
					}
					var relType = bRelation ? bRelation.relType : undefined;
				}
				if(relType == "belongsTo" && isPartial){
					var partObj = relatedRecord.$.partial = relatedRecord.$.partial || {};
					partObj = partObj[bRelKey] = partObj[bRelKey] || new Map();
					if(!partObj.has(pK)){
						partObj.set(pK, {});
					}
					partObj = partObj.get(pK);
					partObj.type = "removed";
				}
				if(bRelation && isPartial){
					ret = store.$.partialData(relatedRecord, bRelKey, pK, "removed");
					nest = ret ? false : nest;
				}
				if(nest){
					store.$.makeDirty("dirty", relatedRecord, "removed", bRelation, pK);
					store.$.addDeepNest(relatedRecord);
				}
			}
		},
		rllBckRecArr : function(oldVal, record, model, field){
			var rel = {}, pK = model._pK, relPK = store.modelFor(field.relatedTo)._pK;
			store.$.getRelations(model, field.relKey, store.modelFor(field.relatedTo), rel);
			for(var i=oldVal.length-1; i>=0; i--){
				var records = oldVal[i].records;
				if(oldVal[i]._type == "added"){
					for(var j=0; j<records.length; j++){
						var relatedRecord = records[j];
						if(relatedRecord.$.hasOwnProperty("pK")){ // temp check to know if record exist in store
							this.demolishLink(relatedRecord, relPK, record, rel.forward.relKey);
							if(rel.backward != null){
								this.demolishLink(record, pK, relatedRecord, rel.backward.relKey, rel.forward);
							}
						}
					}
				}
				else if(oldVal[i]._type == "removed"){
					for(var j=records.length-1; j>=0; j--){
						var relatedRecord = records[j];
						if(relatedRecord.$.hasOwnProperty("pK")){ // temp check to know if record exist in store
							this.establishLink(rel.forward, rel.backward, record, relatedRecord, oldVal[i]._indices[j]);
						}
					}
				}
				else if(oldVal[i]._type == "changed"){
					var currentRecords = record[field.relKey];
					if(!Array.isArray(currentRecords)){
						currentRecords = [currentRecords]; 
					}
					var self = this;
					var kLen = currentRecords.length;
					for(var k=0; k<kLen; k++){
						var relatedRecord = currentRecords[k];
						if(relatedRecord != undefined){
							self.demolishLink(relatedRecord, relPK, record, rel.forward.relKey);
							if(rel.backward != null){
								self.demolishLink(record, pK, relatedRecord, rel.backward.relKey,rel.forward);
							}
						}
					}
					if(!Array.isArray(records)){
						records = [records];
					}
					for(var j=0; j<records.length; j++){
						var relatedRecord = records[j];
						if(typeof relatedRecord == "string"){
							relatedRecord = store.peekRecord(rel.forward.relatedTo,relatedRecord);
						}
						if(relatedRecord != undefined && relatedRecord.$.hasOwnProperty("pK")){ // temp check to know if record exist in store
							this.establishLink(rel.forward, rel.backward, record, relatedRecord, undefined);
						}
					}						
				}
			}
		},
		sortBy : function(field, order){
			var fieldArr = store.$.mapBy.call(this, field);
            var model = this.model;
            var fie = model.fieldList[field];
            if(fie && fie.type == "string"){
                fieldArr.sort();
                if(order == "desc"){
                    fieldArr.reverse();
                }                
            }
            else{
                fieldArr.sort(function(a,b){return a-b;});
                if(order == "desc"){
                    fieldArr.sort(function(a,b){return b-a;});
                }
            }
			var oldArr = this.slice(0), newArr = [];
			for(var i=0; i<fieldArr.length; i++){
				if(fieldArr[i] == undefined){
					continue;
				}
				var index = store.$.getIndex(oldArr, field, fieldArr[i]);
				newArr.push(oldArr[index]);
				oldArr.splice(index, 1);
			}
			if(oldArr.length > 0){
				if(order == "desc"){
					newArr = newArr.concat(oldArr);
				}
				else{
					newArr = oldArr.concat(newArr);
				}				
			}
			store.$.defArrUtls(newArr);
			store.$.defUtls(newArr,this.model);
			return newArr;
		},
		mapBy : function(field){
			return this.map(function(value){
				return value.$.get(field);
			});
		},
		revertToOldVal : function(record, attr, oldVal, rel){
			if(oldVal == undefined || oldVal.length == 0){
				return;
			}
			else{
				if(!Array.isArray(oldVal)){
					oldVal = [oldVal];
				}
				for(var i =0; i<oldVal.length; i++){
					this.establishLink(rel.forward, rel.backward, record, oldVal[i], undefined);
				}
			}
		},
		removePartial : function(record, key){
			var parObj = record.$.partial;
			if(parObj && parObj[key] ){
				delete parObj[key];
			}
		},
		findCurrentInd : function(model, pkVal){
			var deleted = model._deleted;
			var handle = false, currentInd, finalInd;
			deleted.forEach(function(itm, idx){
				if(handle){
					if(itm.index < currentInd){
						finalInd--;
					}
				}
				if(idx == pkVal){
					handle = true;
					finalInd = currentInd = itm.index;
				}
			});
			return finalInd;
		},
		modifyDelInd:function(model, pkVal){
			var deleted = model._deleted;
			var handle = false, currentInd;
			deleted.forEach(function(itm, idx){
				if(handle){
					if(itm.index >= currentInd){
						itm.index = itm.index+1;
					}
				}
				if(idx == pkVal){
					handle = true;
					currentInd = itm.index;
				}
			});
		},
		rollBackDelete : function(model, pkVal, index){
			var arr = [];
			if(!pkVal){
				model._deleted.forEach(function(itm){
					arr.push(itm);
				});
			}
			else{
				var deleted = model._deleted, obj = deleted.get(pkVal), pK = model._pK;
				arr = [obj];
			}
			var self = this, len = arr.length;
			for(var i=len-1;i>=0;i--){
				var obj = arr[i];
				var rec = obj.data;
				//var currentInd = store.$.findCurrentInd(model, pkVal);
				if(Lyte.isRecord(rec)){
					store.$.cmpSet(rec.$, "isDeleted", false);
					if(index){
						self.handleArrOp(model.data,"insertAt",rec,obj.index);
						// store.$.modifyDelInd(model, pkVal);
					}
					else{
						self.handleArrOp(model.data,"push",rec);
					}
					var relArr = model.relations;
					if(relArr){
						for(var key in relArr){
							var rel = relArr[key] || [];
							var relLen = rel.length;
							for(var j=0; j<relLen; j++){
								var item = rel[j];
								var key = item.relKey, bRel, bMod;
								if(rec.hasOwnProperty(key)){
									bMod = store.modelFor(item.relatedTo);
									bRel = self.getBackwardRel(model,item,bMod);
									var data = rec[key];
									if(Array.isArray(data)){
										var dLen = data.length;
										for(var k=0; k<dLen ;k++){
											var itm = data[k];
											self.establishLink(item,bRel,rec,itm,undefined);
										}
									}
									else{
										self.establishLink(item,bRel,rec,rec[key],undefined);
									}
								}
							}
						}
					}
					if(rec.$.isNew || rec.$.isModified){
						this.checkAndAddToArray(model.dirty, rec[model._pK]);
					}
					store.$.clrRecErr(rec.$, pK, "ERR17");
					model.emit("add", [rec]);
					store.emit("add", [model._name,rec]);
					model._deleted.delete(rec.$.pK);
				}
				// else{
				// 	// throw error saying the record cannot be rollbacked
				// }
			}
		},
		rollBackNew : function(model, record, pK){
			var pkVal = record.$.pK;
			var index = this.getIndex(model.data, pK, pkVal);
			store.$.toDemolishRelation(model, index);
			this.handleArrOp(model.data,"removeAt",undefined,index,1);
			// record.$.isNew = false;
			store.$.cmpSet(record.$, "isNew", false);
			store.$.cmpSet(record, "$",  {});
			model.emit("remove", [record]);
			store.emit("remove", [model._name,record]);
			this.deleteFromArray(model.dirty, pkVal);
		},
		emit : function(type, record, attr, err){
			record.$.emit(type, [record,attr,err]);
			record.$.model.emit(type, [record, attr, err]);
			store.emit(type, [record.$.model._name, record, attr, err]);
		},
		hasRecordsArrayChanged : function(record, attr, old){
			var arr = old || record.$.getInitialValues(attr), changed = true, pK = record.$.model._pK;
			if(arr && arr.length == record[attr].length){
				changed = false;
				for(var i=0; i<arr.length; i++){
					if(record[attr].indexOf(arr[i]) == -1){
						return true;
					}
					// if(!this.compareRecords(arr[i], record[attr][i], pK, undefined, record.$.model)){
					// 	return true;
					// }
				}
			}
			return changed;
		},
		setRecErr : function($record, field, code, value){
			$record.isError = true;
            var errObj = code;
			if(typeof errObj == "object"){
				store.$.cmpSet($record.error,field,errObj);
			}
			else{
				if(typeof code == "string"){
					var errMes = Lyte.errorCodes[code];
					if(errMes){
						errObj = {code : code, message : Lyte.errorCodes[code]};
					}
					else{
						errObj = code;
					}
				}
				store.$.cmpSet($record.error, field, errObj);
				if(value){
					store.$.cmpSet($record.error[field],"value",value);
				}				
			}
            store.$.emit("error",$record.record,field,errObj);
		},
		clrRecErr : function($record, field, code){
			var objUtl = Lyte.objectUtils;
			var $err = $record.error;
			if(code){
				if($record.error.code == code){
					if(typeof objUtl != "undefined"){
						objUtl($err,"delete",field);
					}
					else{
						delete $err[field];                        
					}
				}
			}
			else if(field){
				if(typeof objUtl != "undefined"){
					objUtl($err,"delete",field);
                }
                else{
                    delete $err[field];                       
                }
			}
			else{
                if(typeof objUtl != "undefined"){
					for(var err in $err){
						objUtl($err,"delete",err);
					}
				}	
                else{
                    $record.error = {};
                }   
			}
			if(Object.keys($record.error).length == 0){
				$record.isError = false;
			}
		},
        cacheQuery: function(modelName, queryParams, data){
			var cq = store.model.cachedQueries;
			cq = store.model.cachedQueries = cq || {};
			cq = cq[modelName] = cq[modelName] || [];
			cq.push({queryParams : queryParams, data : data});
		},
		cacheRecordQuery: function(modelName, key, queryParams, data){
			var crq = store.model.cachedRecordQueries;
			crq = store.model.cachedRecordQueries = crq || {};
			crq = crq[modelName] = crq[modelName] || {};
			crq = crq[key] = crq[key] || [];
			crq.push({queryParams : queryParams, data : data});
		},
		handleArrOp:function(data,type,obj,pos,len){
			if(typeof Lyte.arrayUtils != "undefined"){
                switch(type){
                    case "push":
                        Lyte.arrayUtils(data, type, obj);
                        break;
                    case "removeAt":
                        return Lyte.arrayUtils(data,type,pos,len);
						break;
					case "insertAt":
						return Lyte.arrayUtils(data,type,pos,obj);
                    default:
                        Lyte.error("LD07", type);
                        break;
                }
			}
			else{
				switch(type){
					case "push":
						data.push(obj);
						break;
					case "removeAt":
						return data.splice(pos,len);
						break;
					case "insertAt":
						return data.splice(pos,len,obj);
                    default:
                        Lyte.error("LD07", type);
                        break;
				}
			}
		},
		defArrUtls:function(obj){
			Object.defineProperties(obj, {
				filterBy : {
					value : store.$.filterBy
				},
				sortBy : {
					value : store.$.sortBy
				},
				mapBy : {
					value : store.$.mapBy
				}
			});
		},
		defPolyUtls:function(obj){
			Object.defineProperties(obj,{
				add : {
					value : store.$.add
				},
				remove : {
					value : store.$.remove
				}
			})
		},
		defUtls:function(obj,model,record,key){
			if(model){
				store.$.defProp(obj, "model", model);
			}
			if(record){
				store.$.defProp(obj, "record", record, false, true);
			}
			if(key){
				store.$.defProp(obj, "key", key);
			}
		},
		defPar:function(arr){
			store.$.defProp(arr, "partial", new Map());
		},
		cmpSet:function(obj, key, value, fromStore){
			if(typeof Lyte.Component != "undefined"){
				Lyte.Component.set(obj, key, value, fromStore);
			}
			else{
				obj[key] = value;
			}
		},
		defProp:function(scp, key, val, enume, write){
			enume = !enume ? false : true;
			write = !write ? false : true;
			Object.defineProperty(scp, key, {
				value : val,
				enumerable : enume,
				writable : write
			})
		}
	}
}
function Adapter(opts,parent,name){
	var self = this;
	if(parent && parent.mixins && parent.mixins.length){
		parent.mixins.forEach(function(item){
			if(Lyte.Mixin.exists(item)){
				var mixin = Lyte.registeredMixins[item];
				for(var key in mixin){
					self[key] = mixin[key];
				}
			}
			else{
				Lyte.$.requiredMixins(item,{"name":name,"scope":store},"adapter");
			}
		});
	}
	for(var key in opts){
		this[key] = opts[key];
	}
	this.__extendedBy = [];
    if(store.adapter.__toAddSuper && store.adapter.__toAddSuper.hasOwnProperty(name)){
        var addSuper = store.adapter.__toAddSuper[name];
        for(var i=0; i<addSuper.length; i++){
            var child = store.adapter[addSuper[i]];
            if(child && child.is == "adapter"){
				child.$super = this;
				this.__extendedBy.push(addSuper[i]);
				var index;
				if(name != "application")
				{	
					if(store.adapter.__toAddSuper.application)
					{
						index = store.adapter.__toAddSuper.application.indexOf(child.__name);
						if(index > -1)
						{
							store.adapter.__toAddSuper.application.splice(index,1);
						}
					}
					if(store.adapter.application)
					{
						index = store.adapter.application.__extendedBy.indexOf(child.__name);
						if(index > -1)
						{
							store.adapter.application.__extendedBy.splice(index,1);
						}
					}
				}
            }
        }
        delete store.adapter.__toAddSuper[name];
	}
	store.$.defProp(this, "is", "adapter");
	store.$.defProp(this, "__name", name);
}
Object.defineProperties(Adapter.prototype, {
	"super" : {
		value: function value(){
			return store.$.super.call(this,arguments);
		}
	},
	"extends" : {
		value: function value(name){
			store.$.extendCallback.call(this,store,"adapter",name);
		}
	}
});
store.adapter = {
	$: {
        getFromAdapter:function(adapter,key){
			var result = adapter ? adapter[key] : undefined;
			while(result === undefined){
				if(adapter && adapter.$super){
					adapter = adapter.$super;
					result = adapter ? adapter[key] : undefined;
				}
				else{
					adapter = store.adapter.application;
					if(adapter && adapter.hasOwnProperty(key)){
						result = adapter[key];
						if(result === undefined){
							break;	
						}
					}
					else{
						switch(key){
							case "host":{
								result = window.location.origin ? window.location.origin : window.location.protocol+"//"+window.location.host;
								break;
							}
							case "namespace": {
								result = "";
								break;
							}
							case "actionNamespace":{
								result = "action";
								break;
							}
							case "batchNamespace":{
								result = "batch";
								break;
							}
							default:
								result = undefined;	
						}
						break;
					}
				}
			}
			return result;
		},
		buildURL : function(type,method,modelName,key, snapshot, queryParams,actionName,customData){
			var adapter = store.adapter[modelName], host = this.getFromAdapter(adapter,"host"), url = "";
			if(!store.$.makeBatch){
				if(host !== undefined){
					url += host;
					if(host[host.length-1] != "/"){
						url+="/";					
					}
				}
			}
			var namespace = this.getFromAdapter(adapter,"namespace");
			if(namespace !== "" && namespace[namespace.length-1] != "/"){
				url+=namespace+"/";
			}
			else{
				url+=namespace;
			}
			if(type != "batch"){
				url+=modelName;
				if(key && typeof key != "object"){
					url+="/"+key;
				}	
			}
			if(type == "action"){
				url+="/"+this.getFromAdapter(adapter,"actionNamespace");
				var actions = store.modelFor(modelName).actions, action = actions[actionName].endPoint?actions[actionName].endPoint:actionName;
				url+="/"+action;
			} else if(type == "batch"){
				url+=this.getFromAdapter(store.adapter.application,"batchNamespace");
			}
            if(!queryParams){
				queryParams = {};
			}
			var scope =  store.$.cbScp(modelName, "headersForRequest"), args, ret = {method : (method)? method : ""};
			if(scope){
				args = store.$.consArg(type, queryParams, customData, actionName, key);
				ret.headers = store.$.cB(scope, args);
			}
			scope = store.$.cbScp(modelName, "buildURL");
			if(scope){
				args = store.$.consArg(modelName, type, queryParams, snapshot, url,actionName,customData, key);
				url = store.$.cB(scope, args);
			}
			scope = store.$.cbScp(modelName, "methodForRequest");
			if(scope){
				args = store.$.consArg(method, type, queryParams, customData, actionName, key);
				ret.method = store.$.cB(scope, args);
			}
            if(!store.$.makeBatch && Object.keys(queryParams).length){
				url+="?";
				var index = 0;
				for(var qKey in queryParams){
					if(index !== 0){
						url+="&";
					}
					var res = queryParams[qKey];
					if(res && typeof res == "object"){
						res = JSON.stringify(res);
					}
					url+=qKey+"="+encodeURIComponent(res);
					index++;
				}
			}
            if(adapter && adapter.withCredentials == true){
                ret.withCredentials = true;
            }
			ret.url = url;
			ret.qP = queryParams;
			return ret;
		},
		get : function(type, modelName, key, queryParams, cacheQuery, customData, cacheData){
			var mdl = store.modelFor(modelName), makeBatch = store.$.makeBatch;
			if(mdl){
				var urlObj = this.buildURL(type, "GET", modelName, key, undefined, queryParams,undefined,customData), self = this;
				if(type == "findAll" && queryParams && store.model.cachedQueries && store.model.cachedQueries[modelName]){
					var cachedQueries = store.model.cachedQueries[modelName], sendData;
					for(var i=0; i<cachedQueries.length; i++){
						var params = cachedQueries[i].queryParams;
						if(this.compareObjects(params, queryParams, true)){
							sendData = [cachedQueries[i].data, "cache"];
							break;
						}
					}
					if(sendData){
						return new Promise(function(resolve){
							if(makeBatch){
								store.$.addToCachedBatch(Array.isArray(sendData) ? sendData[0][modelName] : sendData);
							}
							resolve(sendData);
						});
					}
				}
				else if(type == "findRecord" && queryParams && store.model.cachedRecordQueries && store.model.cachedRecordQueries[modelName] && store.model.cachedRecordQueries[modelName][key]){
					var cachedQueries = store.model.cachedRecordQueries[modelName][key], sendData;
					for(var i=0; i<cachedQueries.length; i++){
						var params = cachedQueries[i].queryParams;
						if(this.compareObjects(params, queryParams,true)){
							sendData = [cachedQueries[i].data, "cache"];
							break;
						}
					}
					if(sendData){
						return new Promise(function(resolve){
							if(makeBatch){
								store.$.addToCachedBatch(Array.isArray(sendData) ? sendData[0][modelName] : sendData);
							}
							resolve(sendData);
						});
					}
				}
				else{
					var scope = store.$.cbScp(modelName, (type == "findRecord" ? "reloadRecord" : "reloadAll"));
					if(scope){
						var records;
						if(type == "findRecord"){
							records = store.peekRecord(modelName,key);							
						}
						else if(type == "findAll"){
							records = store.peekAll(modelName);
						}
						if(!store.$.cB(scope, [records, queryParams, customData])){
							var toRet = {};
							toRet[modelName] = records;
							return new Promise(function(resolve){
								if(makeBatch){
									store.$.addToCachedBatch(toRet[modelName]);
								}
								resolve([toRet, "cache"], "success", undefined, true);
							});
						}
					}
				}
				if(urlObj.method == "POST"){
					var scope = store.$.cbScp(modelName, "serialize", 1);
					if(scope){
						var args = store.$.consArg(type,undefined,undefined,customData,modelName,queryParams);
						urlObj.data = store.$.cB(scope, args);
					}	
				}
				return new Promise(function(resolve, reject){
					res = resolve, rej = reject;
					var model = store.modelFor(modelName);
					var idbObj = model.idb;
					var processRequest = self.getFromAdapter(store.adapter[modelName],"processRequest"),payLoad, sendXHR = true;
					var batchPro = false;
					if(processRequest){
						sendXHR = false;
						var returnPromise = self.callGeneric(type,modelName,undefined,undefined,customData, queryParams,key,urlObj.url);
						if(returnPromise instanceof Promise){
							batchPro = true;
							returnPromise.then(function(resp){
                                resp = (resp == "" ? JSON.parse("{}") : JSON.parse(resp));
								payLoad = self.getResponse(resp,modelName,type,key,urlObj);
								resolve([payLoad]);
							},function(message){
                                reject(message);
							});
						}
						else{
							sendXHR = true;
						}
					}
					var argsXHR = [modelName,type,key,urlObj,resolve,reject,"get",undefined,customData];
					var opts = { cacheQuery : cacheQuery, cacheData : cacheData, customD : customData};
					if(makeBatch && !batchPro){
						store.adapter.$.constructBatch.apply(store.adapter.$, argsXHR).then(function(resObj){
							var payLoad = resObj.content;
							store.adapter.$.getSuccess(modelName,type,key,urlObj,undefined,resolve,reject,payLoad,resObj,undefined,opts);
							//resolve(payLoad);							
						},function(resObj){
							store.adapter.$.getFailure(modelName,type,key,urlObj,undefined,resolve,reject,opts,resObj.content,resObj.code);
						});
					}
					else if(idbObj){
						store.adapter.$.getFromIDB(idbObj, modelName, type, queryParams, key, urlObj).then(function(payLoad){
							var scope =  store.$.cbScp(modelName, "idbResponse",1), args;
							if(scope){
								args = store.$.consArg(modelName, type, queryParams, key, payLoad);
								payLoad = store.$.cB(scope, args);
							}
							if(payLoad == false){
								store.adapter.$.sendXHR.apply(store.adapter.$, argsXHR).then(function(xhrReq){
									store.adapter.$.getSuccess(modelName,type,key,urlObj,xhrReq,resolve,reject,undefined,undefined,undefined,opts);
								}, function(xhrReq){
									store.adapter.$.getFailure(modelName,type,key,urlObj,xhrReq,resolve,reject,opts);
								});							
							}
							else{
								store.adapter.$.getSuccess(modelName,type,key,urlObj,undefined,resolve,reject,payLoad,undefined,"idb",opts);
							}
						},function(message){
							store.adapter.$.sendXHR.apply(store.adapter.$, argsXHR).then(function(xhrReq){
								store.adapter.$.getSuccess(modelName,type,key,urlObj,xhrReq,resolve,reject,undefined,undefined,undefined,opts);
							}, function(xhrReq){
								store.adapter.$.getFailure(modelName,type,key,urlObj,xhrReq,resolve,reject,opts);
							});							
						});
					}
					else if(sendXHR){
						store.adapter.$.sendXHR.apply(store.adapter.$, argsXHR).then(function(xhrReq){
							store.adapter.$.getSuccess(modelName,type,key,urlObj,xhrReq,resolve,reject,undefined,undefined,undefined,opts);
						},function(xhrReq){
							store.adapter.$.getFailure(modelName,type,key,urlObj,xhrReq,resolve,reject,opts);
						});
					}
				});
				
			}
			else {
				Lyte.error("LD02","Model",modelName);
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19, data:modelName});
			}
		},
		constructBatch:function(modelName,type,key,urlObj){
			return new Promise(function(resolve, reject){
				var batch = store.$.currentBatch;
				var q = store.$.batch[batch] = store.$.batch[batch] || [];
				var pro = store.$.batchPromise[batch] = store.$.batchPromise[batch] || []; 
				var batchObj = {};
				batchObj.method = urlObj.method;
				batchObj.uri = "/" + urlObj.url;
				batchObj.parameters = urlObj.qP;
				batchObj.content = typeof urlObj.data == "string" ? JSON.parse(urlObj.data) : undefined;
				q.push(batchObj);
				pro.push({resolve:resolve,reject:reject});	
			});
		},
		getFromIDB : function(idbObj ,modelName, type, queryParams,key, urlObj, xhr){
			return new Promise(function(resolve, reject){
				if(worker){
					var reqType = idbObj.queryCache ? "getCachedData" : type == "findAll" ? "getAll" : "get";
					var obj = {resolve : resolve, reject: reject, type:reqType, model:modelName, req:type, key:key};
					if(reqType == "getCachedData"){
						obj.queryParams = queryParams;
					}
					LyteIDB.postMessage(obj);
				}else{
					reject();
				}
			});
		},
		sendXHR:function(modelName,type,key,urlObj,resolve,reject,xhrType,data,customData){
			var self = this;
			return new Promise(function(res, rej){
				var results;	
				// if(type != "create" && type != "createRecord"){
				// 	results = store.adapter.$.requestHandle(modelName,type,key,urlObj,"add");
				// }
				// if(results instanceof Promise){
				// 	return rej({code:"ERR25", message:"duplicate request"});
				// }
				var xhr = new XMLHttpRequest();
				xhr.open(urlObj.method, urlObj.url, true);
				var scope =  store.$.cbScp(modelName, "parseRequest"), args, resp;
				if(scope){
					args = store.$.consArg(type, modelName, xhr ,urlObj ? urlObj.qP : undefined, key, customData);
					resp = store.$.cB(scope, args);
				}
				for(var header in urlObj.headers){
					xhr.setRequestHeader(header, urlObj.headers[header]);
				}
				xhr.withCredentials = (urlObj.withCredentials)?true:false;
				store.emit("beforeRequest", [xhr, modelName, type, key, urlObj.qP]);
				xhr.send(urlObj.data);
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						// if(type != "create" && type != "createRecord"){
						// 	store.adapter.$.requestHandle(modelName,type,key,urlObj);
						// }
						store.emit("afterRequest",[xhr, modelName, type, key, urlObj.qP]);
						if(xhr.status.toString()[0] == "2" || xhr.status.toString()[0] == "3"){
							return res(xhr);
						}
						else{
							return rej(xhr);
						}
					}
				}
			});
		},
		getSuccess:function(modelName,type,key,urlObj,xhr,resolve,reject,response,resObj,from,opts){
			var resp = response, req = xhr, batchIndex, batch, customD = opts.customD;
			if(from != "idb"){
				if(req){
					resp = req.responseText;
					resp = (resp == "" ? JSON.parse("{}") : JSON.parse(resp));
				}
				if(resObj){
					batchIndex = resObj.index;
					batch = resObj.batch;
					req = resObj.resp;
				}
				if(req){
					var scope =  store.$.cbScp(modelName, "parseResponse"), args;
					if(scope){
						args = store.$.consArg(type, modelName, req, resp, urlObj ? urlObj.qP : undefined, key, customD, opts);
						resp = store.$.cB(scope, args);
						if(resp instanceof Promise)
						{
							return this.handleParseResponsePromise(resp,modelName,type,key,urlObj,xhr,undefined,batchIndex,batch,resolve,reject,opts);
						}
					}
				}
				return this.findParseRequestPromise(resp,modelName,type,key,urlObj,xhr,batchIndex,batch,resolve,opts);
				//resp = this.getResponse(resp,modelName,type,key,urlObj,xhr);
			}
			var resArr = xhr ? [resp, xhr.statusText, xhr] : (batchIndex != undefined) ? [resp,"batch",{index:batchIndex,batch:batch}] : [resp];
			resolve(resArr);
		},
		getFailure:function(modelName,type,key,urlObj,xhr,resolve,reject,opts,content,code){
			var customD = opts.customD;
			if(xhr){
				var scope =  store.$.cbScp(modelName, "parseResponse"), args, resp,response = xhr.responseText;
				if(response){
					response = (response == "" ? JSON.parse("{}") : JSON.parse(response));
				}
				if(scope){
					args = store.$.consArg(type, modelName, xhr, response ,urlObj ? urlObj.qP : undefined, key, customD, opts);
					resp = store.$.cB(scope, args);
					if(resp instanceof Promise)
					{
						return this.handleParseResponsePromise(resp,modelName,type,key,urlObj,xhr,undefined,undefined,undefined,resolve,reject,opts);
					}
				}
			}
			else if(content){
				reject({code:code,status:"requestFailure", data:content});
			}
			reject(xhr);
		},
        getResponse:function(resp,modelName,type,key,urlObj,xhr,customData,opts){
            resp = store.serializer.$.normalizeResponse(modelName, type, resp, key, xhr ? xhr.status : xhr, urlObj,customData,opts);
            var scope = store.$.cbScp(modelName, "extractMeta",1);
            var payLoad = resp,args,qP = urlObj ? urlObj.qP : undefined;
            if(typeof payLoad != "object"){
                payLoad = JSON.parse(payLoad);
            }
            if(scope){
				args = store.$.consArg(payLoad,modelName,type,qP,customData,opts);
				var metaRes = store.$.cB(scope, args);
				if(!store.$.isEmpty(metaRes)){
					payLoad.meta = metaRes;
				}
			}
			var keys = Object.keys(payLoad);
			var len = keys.length; 
            if(len){				
				scope = store.$.cbScp(modelName, "payloadKey", 1);
				if(scope){
					args = store.$.consArg(modelName,type,key,qP,customData,opts);
					var plKey = store.$.cB(scope, args);
					if(plKey && plKey != modelName){
						var temp = payLoad[plKey];
						payLoad[modelName] = temp;
						delete payLoad[plKey];
					}
				}
                scope = store.$.cbScp(modelName, "deserializeKey",1);
                if(scope){
					Lyte.warn("LD08", "deserializeKey", "callback", "Please use payloadKey callback instead");
					if(len > 2){
						Lyte.error("LD09");
					}
						var index = 0;
						if(len == 2 && keys[0] == "meta"){
							index = 1;
						}
						args = store.$.consArg(modelName,type);
						var deserializeKey = store.$.cB(scope, args), rec = payLoad[keys[index]];
						delete payLoad[keys[index]];
						payLoad[deserializeKey] = rec;
					// }
					// else if(len > 2){
					// 	console.error("Couldn't resolve using deserializekey, since there are more than 2 keys in the payLoad",modelName,type,Object.assign({},payLoad));
					// }
				}
//					store.serializer.$.buildJSON(modelName, type, payLoad, key, xhr.status, urlObj.headers);
                store.serializer.$.normalize(modelName, type, payLoad, key, xhr ? xhr.status : xhr, urlObj.headers, customData, opts);
            }
            return payLoad;
		},
		create : function(modelName, data, isSingleRecord, customData, qP){
			var type= isSingleRecord ? "createRecord": "create", partialObj = new Map();
			var urlObj = this.buildURL(type, "POST", modelName, undefined, data,qP,undefined,customData);
			var changedData = store.$.toJSON(modelName, data, undefined, "create", partialObj);
			// store.$.removeNotDefinedKeys(store.modelFor(modelName), changedData);
			this.sendingData(modelName, changedData, urlObj, type, customData, data);
			return this.handleRequest(urlObj, modelName, data, type, changedData, customData, partialObj);
		},
		put : function(modelName, data, record, isSingleRecord,customData, qP){
			var model = store.model[modelName], bK = model.bK , isComp = model.isComp;
			var type = (isSingleRecord) ? "updateRecord" : "update", partialObj = new Map(), key = isSingleRecord ? (isComp && bK ? record[bK] : record.$.pK) : undefined;
			var urlObj = this.buildURL(type, "PATCH", modelName, key, data,qP,undefined,customData);
			var updatedData = store.$.toJSON(modelName, data, undefined, undefined, partialObj);
            // store.$.removeNotDefinedKeys(store.modelFor(modelName), updatedData);
			this.sendingData(modelName, updatedData, urlObj, type, customData, record);
			return this.handleRequest(urlObj, modelName, record, type, updatedData, customData, partialObj, key);
		},
		del : function(modelName, data, isSingleRecord, destroy, customData, qP){
			var model = store.model[modelName], bK = model.bK , isComp = model.isComp;
			var type = destroy || "deleteRecord";
			var key = isSingleRecord ? (isComp && bK ? data[bK] : data.$.pK) : undefined;
			var urlObj = this.buildURL(type, "DELETE", modelName, key, data,qP,undefined,customData);
			var ids = [];
			if(!isSingleRecord){
				ids = data.map(function(val){
					return val.$.pK;
				});				
			}
			var pkVal = (isSingleRecord) ?  (data ? data.$.pK : undefined) : ids;
			this.sendingData(modelName, pkVal, urlObj, type, customData, data);
			return this.handleRequest(urlObj, modelName, data, type, pkVal, customData, undefined, key);
		},
		sendingData:function(modelName,data,urlObj,type,customData,snapshot){
			var scope = store.$.cbScp(modelName, "serializeKey",1);
			var serializeKey = modelName;
			var payload = {}, qP = urlObj ? urlObj.qP : undefined,tempObj={};
			for (var key in urlObj){
				tempObj[key] = urlObj[key];
			}
			tempObj.type = type;
			if(scope){
				var args = store.$.consArg(modelName,type,customData,qP);
				serializeKey = store.$.cB(scope, args);
			}
			data = this.serializeRecords(modelName,data,snapshot,tempObj);
			if(!serializeKey){
				payload = data;
			}
			else if(Array.isArray(data) || typeof data == "object" || Lyte.isRecord(data)){
				payload[serializeKey] = data;
			}
			var scope = store.$.cbScp(modelName, "serialize", 1);
			if(scope){
				var args = store.$.consArg(type,payload,snapshot,customData,modelName,qP);
				payload = store.$.cB(scope, args);
			}
            if(type !== "deleteRecord" && type !== "destroyRecord" ){
				urlObj.data = payload;				
			}
			else if(scope){
				if(payload && payload !== undefined && payload !== null && payload !== ''){
					urlObj.data = payload;
				}
			}
		},
		serializeRecords:function(modelName,data,records,urlObj){
			var model = store.modelFor(modelName),
			fields = model.fieldList;
			if(!records){
				records = store.peekRecord(model._name,data.$.pK);
			}
			if(Array.isArray(data)){
				for(var index1=0;index1<data.length;index1++){
					var record = data[index1];
					if(typeof record === "object")
					{
						this.serializeSingleRecord(model._name,record,records[index1],urlObj,fields);
					}
				}
			}
			else if(typeof data === "object"){
				this.serializeSingleRecord(model._name,data,records,urlObj,fields);
			}
			return data;
		},
		serializeSingleRecord:function(model_name,data,record,urlObj,fields){
			var scope = store.$.cbScp(model_name,"serializeRecord",1);
			if(scope){
				var args = store.$.consArg(urlObj,data,record,model_name);
				data = store.$.cB(scope,args);
			}
			for(var key in fields){
				var field = fields[key];
				if(field.type == "relation" && data[field.relKey]){
					if(field.relType === "hasMany" && field.opts && field.opts.serialize && field.opts.serialize == "partial"){
						for(var index1=0;index1<data[field.relKey].length;index1++){
							data[field.relKey][index1] = this.serializeRecords(field.relatedTo,data[field.relKey][index1],undefined,urlObj);
						}
					}
					else {
						data[field.relKey] = this.serializeRecords(field.relatedTo,data[field.relKey],record[field.relKey],urlObj);
					}
				}
			}
		},
		handleAction:function(actionName,model,record,customData,qP,method,data){
			var pkVal;
			if(record && Lyte.isRecord(record)){
				pkVal = record.$.get(model._pK);				
			}
			var modelName = model._name;
			var type = "action";
			var urlObj = this.buildURL(type, method ? method : "POST", model._name, pkVal, record, qP, actionName, customData);
			urlObj.data = data;
			var scope = store.$.cbScp(model._name, "serialize", 1);
			if(scope){
				var args = store.$.consArg("action",data,record,customData,modelName,qP,actionName);
				urlObj.data = store.$.cB(scope, args);
			}
			return this.handleRequest(urlObj, model._name, undefined, type,undefined,customData,undefined,undefined,actionName);
		},
		handleRequest:function(urlObj,modelName,data,type,changedData,customData,partialObj,key,actionName){
			if(urlObj.data && (typeof urlObj.data == "object" || Lyte.isRecord(urlObj.data) || Array.isArray(urlObj.data)) && !(urlObj.data instanceof FormData)){
				urlObj.reqData = Lyte.deepCopyObject(urlObj.data);
				urlObj.data = JSON.stringify(urlObj.data);
			}
			var self = this, xhr, key;
			return new Promise(function(resolve, reject){
				var processRequest = self.getFromAdapter(store.adapter[modelName],"processRequest"),sendXHR = true;
				var makeBatch = store.$.makeBatch;
				var batchPro = false;
				if(processRequest){
					sendXHR = false;
					var returnPromise = self.callGeneric(type,modelName,urlObj.data,data,customData,urlObj?urlObj.qP:undefined,key,urlObj.url,actionName),response;
					if(returnPromise instanceof Promise){
						batchPro = true;						
						returnPromise.then(function(resp){
                            resp = (resp == "" ? JSON.parse("{}") : JSON.parse(resp));
							response = self.genericResponse(resp,modelName,type,data,urlObj);
							if(response == false){
								reject("Data is not in the format as store expects in "+modelName+" for type- "+type);								
							}
							resolve(response);
						},function(message){
							reject(message);
						});
					}
					else{
						sendXHR = true;
					}
				}
				if(makeBatch && !batchPro){
					store.adapter.$.constructBatch(modelName,type,key,urlObj).then(function(respObj){
						var resp = respObj.content; 
						store.adapter.$.handleSuccess(modelName, type, xhr, data, urlObj, resolve, resp, respObj,undefined,reject,key,customData);
						// resolve(resp);
					},function(resObj){
						store.adapter.$.handleFailure(modelName, type, xhr, data, urlObj, resolve,resObj.content,undefined,reject,key,customData,resObj.code);
					});
				}
				else if(sendXHR){
					var argsXHR = [modelName,type,key,urlObj,resolve,reject,"other",data,customData];
					store.adapter.$.sendXHR.apply(store.adapter.$, argsXHR).then(function(xhrReq){
						store.adapter.$.handleSuccess(modelName, type, xhrReq, data, urlObj, resolve, undefined, undefined, partialObj,reject,key,customData);					
					},function(xhrReq){
						store.adapter.$.handleFailure(modelName, type, xhrReq, data, urlObj, resolve, undefined,partialObj,reject,key,customData);
					});
				}
			});
			
		},
		handleSuccess:function(modelName, type, xhr, data, urlObj, resolve, resp, respObj, partialObj, reject, key, customData){
			var resp = resp ? resp : xhr.responseText, response, req, batchIndex, batch;
			resp = (resp == "" ? JSON.parse("{}") : typeof resp == "string" ? JSON.parse(resp) : resp);
			if(xhr){
				req = xhr;
			}
			if(respObj){
				batchIndex = respObj.index;
				batch = respObj.batch;
				req = respObj.resp;
			}
			var opts = { customD : customData };
			if(req){
				var scope =  store.$.cbScp(modelName, "parseResponse"), args;
				if(scope){
					args = store.$.consArg(type, modelName, req, resp, urlObj ? urlObj.qP : undefined, key,customData);
					resp = store.$.cB(scope, args);
					if(resp instanceof Promise)
					{
						return this.handleParseResponsePromise(resp,modelName,type,data,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject,opts);
					}
				}
			}
			return this.otherParseRequestPromise(resp,modelName,type,data,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject,customData);
			// response = this.genericResponse(resp,modelName,type,data,urlObj,xhr,partialObj);
			// if(response == false){
			// 	reject("Response is not in the format as store expects in model, "+modelName+" for type "+type);
			// }
			// else{
			// 	if(batchIndex != undefined){
			// 		store.$.batchResponse[batch][batchIndex] = response;
			// 	}
			// 	if(type != "action"){
			// 		this.updateIDB(modelName,type,data);
			// 	}
			// 	resolve(response);
			// }
		},
		handleFailure:function(modelName, type, xhr, data, urlObj, resolve, respObj, partialObj,reject,key,customData,code){
			if(xhr){
				var resp;
				var scope =  store.$.cbScp(modelName, "parseResponse"), args,response = xhr.responseText;
				if(response){
					response = (response == "" ? JSON.parse("{}") : JSON.parse(response));
				}
				if(scope){
					args = store.$.consArg(type, modelName, xhr, response, urlObj ? urlObj.qP : undefined, key, customData);
					resp = store.$.cB(scope, args);
					if(resp instanceof Promise)
					{
						return this.handleParseResponsePromise(resp,modelName,type,data,urlObj,xhr,partialObj,undefined,undefined,resolve,reject,customData);
					}
				}	
			}
			else if(respObj){
				reject({code:code, status:"requestFailure", data:respObj});
			}
			reject(xhr);
		},
		updateIDB:function(modelName,type, data){
			if(data && !Array.isArray(data)){
				data = [data];
			}
			var model = store.model[modelName];
			if(!model.hasOwnProperty("idb") || (model.idb && !model.idb.hasOwnProperty("queryCache"))){
				return;
			}
			var q =	store.$.idbQ2[modelName] = store.$.idbQ2[modelName] || [];
			if(data){
				switch(type){
					case "update":
					case "updateRecord":
					{
						data.forEach(function(item, index){
							if(item && Lyte.isRecord(item)){
								var model = store.model[modelName];
								var relations = model.relations;
								var parent = item.$.parent;
								if(parent){
									var pModel = parent.$.model._name;
									var parentQ = store.$.idbQ2[pModel] = store.$.idbQ2[pModel] || [];
									parentQ.push({type:"updateRecord",model:pModel,data:parent.$.toJSON(true)});
								}
								else{
									q.push({type:"updateRecord",model:modelName,data:item.$.toJSON(true)});
								}
								store.adapter.$.updateRelationsIDB(item, relations);
								store.$.addToIDBonSave(modelName,item);
							}
						});
						break;
					}
					case "delete":
					case "deleteRecord":
					case "destroyRecord":
					{
						var parent, pModel, parentQ;
						var pK = store.modelFor(modelName)._pK;
						data.forEach(function(item, index){
							if(item && Lyte.isRecord(item)){
								var model = store.model[modelName];
								var relations = model.relations;
								parent = item.$.parent;
								if(parent){
									pModel = parent.$.model._name;
									parentQ = store.$.idbQ2[pModel] = store.$.idbQ2[pModel] || [];
									parentQ.push({type:"updateRecord",model:parent.$.model._name,data:parent.$.toJSON(true)});
								}
								else{
									q.push({type:"deleteRecord",model:modelName,key:item.$.pK});
								}
								store.adapter.$.updateRelationsIDB(item, relations);
								store.$.removeOnSave(modelName,item.$.pK);
							}
						});
						break;
					}
					case "create":
					case "createRecord":{
						data.forEach(function(item, index){
							if(item && Lyte.isRecord(item)){
								var model = store.model[modelName];
								var relations = model.relations;
								q.push({type:"createRecord",model:modelName,data:item.$.toJSON(true)});
								store.adapter.$.updateRelationsIDB(item, relations);
								store.$.addToIDBonSave(modelName,item);
							}
						});
						break;
					}
				}
			}
		},	
		updateRelationsIDB : function(item, relations){
			for(var key in relations){
				var rel = relations[key];
				rel.forEach(function(obj){
					var relKey = obj.relKey;
					var relModel = obj.relatedTo;
					var relQ = store.$.idbQ2[relModel] = store.$.idbQ2[relModel] || [];										
					var data = item[relKey];
					if(data){
						if(Array.isArray(data)){
							data.forEach(function(rec){
								if(Lyte.isRecord(rec) && !rec.$.parent && rec.$.inIDB){
									relQ.push({type:"updateRecord",model:relModel,data:rec.$.toJSON(true)});
								}
							});
						}
						else if(Lyte.isRecord(data) && !data.$.parent && data.$.inIDB){
							relQ.push({type:"updateRecord",model:relModel,data:data.$.toJSON(true)});
						}
					}
				});
			}
		},
        callGeneric : function(type, modelName,data,record,customData,queryParams,key,url){
			var scope = store.$.cbScp(modelName, "processRequest"),result;
			if(scope){
				var args = store.$.consArg(type,modelName,data,record,customData,queryParams,key,url);
				result = store.$.cB(scope, args);
			}
			return result;
		},
		genericResponse:function(resp,modelName,type,data,urlObj,xhr,partialObj,customData){
            var response = resp;
            var scope,args,qP = urlObj ? urlObj.qP : undefined;
			scope = store.$.cbScp(modelName, "extractMeta",1);
			if(scope){
				args = store.$.consArg(response,modelName,type,qP,customData);
				var metaRes = store.$.cB(scope, args);
				if(!store.$.isEmpty(metaRes)){
					response.meta = metaRes;
				}
			}
			if(response && type != "action"){
				response = store.serializer.$.buildJSON(modelName, type, response, Lyte.isRecord(data) ? data[store.modelFor(modelName)._pK] :undefined ,xhr ? xhr.status : undefined, urlObj, customData);
				scope = store.$.cbScp(modelName, "payloadKey",1);
				if(scope){
					args = store.$.consArg(modelName,type,undefined,qP,customData);
					var plKey = store.$.cB(scope, args);
					if(plKey && plKey != modelName){
						var temp = response[plKey];
						response[modelName] = temp;		
						delete response[plKey];
					}			
				}					
				var keys = Object.keys(response);
				var len = keys.length;
				scope = store.$.cbScp(modelName, "deserializeKey",1);
				if(scope){
					Lyte.warn("LD08", "deserializeKey", "callback", "Please use payloadKey callback instead");
					if(len > 2){
						Lyte.error("LD09");
					}
						var index = 0;
						if(keys[0] == "meta"){
							index = 1;
						}
						var args = store.$.consArg(modelName,type), deserializeKey = store.$.cB(scope, args), rec = response[keys[index]];
						delete response[keys[index]];
						response[deserializeKey] = rec;	
				}	
				if(type != "action"){
					this.handleResponse(data, response[modelName], store.modelFor(modelName), type, partialObj);
				}
			}
			return response;
		},
		removePartialKeys:function(data,model,pK){
			var rels = model.relations;
			var pkVal = data.$.pK;
			for(var key in rels){
				var relArr = rels[key];
				relArr.forEach(function(rel){
					var relObj = {}, inv;
					//self.$scope.$.getRelations(model, rel.relKey, self.$scope.model[rel.relatedTo], relObj);
					inv = store.$.getBackwardRel(model,rel,store.model[rel.relatedTo]);
					// if(relObj){
					// 	inv = relObj;
					// }
					if(inv&&inv.relType=="hasMany"&&inv.opts&&inv.opts.serialize=="partial"){
						var relKey = rel.relKey;
						var invRelKey = inv.relKey;
						var invObj = data[relKey];
						if(invObj){
							if(Array.isArray(invObj)){
								invObj.forEach(function(invRelRec){
									var invRelObj = invRelRec[invRelKey];
									if(invRelObj && invRelObj.partial && invRelObj.partial.get(pkVal)){
										invRelObj.partial.delete(pkVal);
									}		
								});
							}
							else if(invObj[invRelKey]){
								var invRelObj = invObj[invRelKey];
								if(invRelObj && invRelObj.partial && invRelObj.partial.get(pkVal)){
									invRelObj.partial.delete(pkVal);
								}
							}
						}
					}
				});
			}
		},
        checkResponse:function(data , model , response , pK , partialObj){
			//var rawData = Lyte.isRecord(data) ? data.$.toJSON() : undefined;
			this.removePartialKeys(data, model, pK);
			if(partialObj && Object.keys(partialObj).length){
				//this.handleRelResponse( model, partialObj, data); 
				this.mergeNewDataKeys( partialObj, data, response );
			}
			var dirtyId, mergeDone = false;
			if(data.$.isNew){
				var result;
				var pKeys = model._arrPk;
				dirtyId = data.$.pK;
				pKeys.forEach(function(item){
					if(data.hasOwnProperty(item) && response.hasOwnProperty(item)){
						// dirtyId = data[item];
						store.$.cmpSet( data, item, response[item], true );
					}
				});
				data.$.pK = store.$.getpKVal(data);
				result = store.$.validateAndMerge(model, response, partialObj);
				mergeDone = true;	
				store.$.cmpSet(data.$, "isNew", false);					
				// data.$.isNew = false;
				if(result == false){
					Lyte.error("LD01", response);
				}
            }
            if(data.$.isModified){
				dirtyId = !dirtyId ? data.$.pK : dirtyId;
				if(!data.$.isDeleted && response && !mergeDone){
					var result =  store.$.validateAndMerge(model, response, partialObj);
					mergeDone = true;
					if(result == false){
						Lyte.error("LD15", response);
					}						
				}
				store.$.cmpSet(data.$, "isModified", false);
				data.$._attributes = {};
            }
            if(model.dirty.length){
                store.$.deleteFromArray(model.dirty, dirtyId);
            }
            if(data.$.isDeleted){
				store.$.cmpSet(data.$, "isDeleted", false);
                // data.$.isDeleted = false;
                model._deleted.delete(data.$.pK);
			}
			if(partialObj && Object.keys(partialObj).length && response && !mergeDone){
				var result =  store.$.validateAndMerge(model, response, partialObj);
				if(result == false){
					Lyte.error("LD15", response);
				 }						
			}
            var dirty = data.$.isDirty();
            for(var j=0; j < dirty.length ;j++){
                var records = data[dirty[j]];
                if(Array.isArray(records)){
                    for(var k=0;k<records.length;k++){
						if(Lyte.isRecord(records[k])){
							store.$.cmpSet(records[k].$, "isModified", false);
						}
						// records[k].$.isModified = false;
                    }
                }
                else if(Lyte.isRecord(records)){
					store.$.cmpSet(records.$, "isModified", false);
                    // records.$.isModified = false;
                }
			}
			data.$.undoStack = [];
			data.$.redoStack = [];
			store.$.clrRecErr(data.$);  
			store.$.removeDeepNest(data);
		},
		mergeNewDataKeys:function(partialObj, data, response){
			if(partialObj.partial == true){ //true checked since partial key can come in this 
				var self = this;
				if(Array.isArray(partialObj)){				
					partialObj.forEach(function(item, index){
						var pK = store.model[item.model]._pK;
						var ind = store.$.getIndex(data, pK, item.pkVal);
						self.mergeNewDataKeys(item, data ? data[ind] : undefined, response ? response[index] : undefined);
						data.partial.delete(item.pkVal);
					});
				}
			}
			else if(partialObj && partialObj.type){
				if(partialObj.type == "added"){
					var mdl = store.model[partialObj.model];
					var pK = mdl._pK;
					var pKeys = mdl._arrPk;
					var oldPk = data.$.pK;
					pKeys.forEach(function(item){
						if(!response || !response.hasOwnProperty(item)){
							Lyte.error("LD16", data);
							return;
						}	
						store.$.cmpSet(data, item, response[item], true)
					});
					data.$.pK = store.$.getpKVal(data);
					// data.$.isNew = false;
					store.$.cmpSet(data.$, "isNew", false);
					store.$.deleteFromArray(store.model[partialObj.model].dirty, oldPk);
				}
				else if(partialObj.type == "modified" || partialObj.type == "related"){
					store.$.cmpSet(data.$, "isModified", false);
					// data.$.isModified = false;
					data.$._attributes = {};
					store.$.deleteFromArray(store.model[partialObj.model].dirty, data.$.pK);
				}
				else if(partialObj.type == "removed"){
					var model = store.model[partialObj.model];
					var pkVal = partialObj.pkVal;
					var obj = model._deleted.get(pkVal);
					if(obj){
						var rec = obj.data;
						store.$.cmpSet(rec.$, "isDeleted", false);
						model._deleted.delete(pkVal);
					}
					if(partialObj.parent){
						partialObj.parent.$.partial = {};
					}
					return;
				}
				store.$.clrRecErr(data.$); 
				if(partialObj.type != "removed"){
					for(var key in partialObj){
						var part = partialObj[key];
						this.mergeNewDataKeys(part, data[key], response ? response[key] : undefined);
					}
				}
				if(data.$.partial && Object.keys(data.$.partial)){
					data.$.partial = new Map();
				}
				data.$.undoStack = [];
				data.$.redoStack = [];
			}
			else{
				if(Array.isArray(partialObj)){
					var self = this;
					partialObj.forEach(function(item, index){
						self.mergeNewDataKeys(item, data[index], response ? response[index] : undefined);
					});
				}
				else if(typeof partialObj == "object"){
					for(var key in partialObj){
						var part = partialObj[key];
						this.mergeNewDataKeys(partialObj[key], data[key], response ? response[key] : undefined);
					}
				}
			}
		},
		handleResponse:function(data, response, model, type, partialObj){
			var pK = model._pK, partial, obj, pkVal;
			if(Array.isArray(data)){
				for(var i=0; i<data.length; i++){
					obj = data[i], pkVal = obj.$.pK;
					partial = partialObj && obj && pkVal ?  partialObj.get(pkVal) : undefined;
					this.checkResponse(data[i], model, Array.isArray(response) ? response[i] : response, pK, partial);	
				}
			}
			else{
				pkVal = data.$.pK;
				partial = partialObj && data && pkVal ?  partialObj.get(pkVal) : undefined;
				this.checkResponse(data, model, response, pK, partial);	
			}
		},
        /*Compares two objects
        params - obj1, obj2
        return true/false
        */
		compareObjects : function(obj1, obj2, qP){
            if(!(obj1 instanceof Object) || !(obj2 instanceof Object)){
                return false;
            }
			if(Object.keys(obj1).length != Object.keys(obj2).length){
				return false;
			}
			for(var key in obj1){
				var val1 = obj1[key], val2 = obj2[key];
				if(qP && Array.isArray(val1) && Array.isArray(val2)){
					if(val1.length != val2.length){
						return false;
					}
					var len = val1.length;
					for(var i=0; i<len; i++){
						if(val1[i] != val2[i]){
							return false;
						}
					}
				}
				else if(val2 == undefined || val1 != val2){
					return false;
				}
			}
			return true;
		},
		handleBatchPromise:function(obj){
			var response = obj.response;
			var batch = obj.batch;
			//callback
			var scope, args;
			scope = store.$.cbScp("application", "normalizeResponse",1);
			if(scope){
				args = store.$.consArg(undefined,"batch",obj.response);
				response = store.$.cB(scope, args);
			}
			var resp = response.batch_requests;
			resp.forEach(function(item, index){
				var pro = store.$.batchPromise[batch][index];
				var status = item.status.toString();
				var code = status[0];
				if(code == "2"){
					pro.resolve({content:item.content,index:index,batch:batch,resp:item});
				}
				else if(code == "4" || code == "5"){
					store.$.batchResponse[batch][index] = undefined;
					pro.reject({content:item.content,index:index,batch:batch,resp:item,code:status});
				}
			});
			// obj.resolve(response);
			delete store.$.batch[batch];
			delete store.$.batchPromise[batch];
		},
		handleParseResponsePromise:function(response,modelName,type,key,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject,opts)
		{
			response.then(function(payload){
				if(type == "findRecord"	|| type == "findAll")
				{
					store.adapter.$.findParseRequestPromise(payload,modelName,type,key,urlObj,xhr,batchIndex,batch,resolve,opts);
				}
				else
				{
					store.adapter.$.otherParseRequestPromise(payload,modelName,type,key,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject,opts ? opts.customD : undefined);
				}
			},function(payload){	
				reject(xhr);
			});
		},
		findParseRequestPromise:function(payload,modelName,type,key,urlObj,xhr,batchIndex,batch,resolve,opts){
			var options = Object.assign({},opts);
			delete options.customD;
			var resp = this.getResponse(payload,modelName,type,key,urlObj,xhr, opts ? opts.customD : undefined, options);
			var resArr = xhr ? [resp, xhr.statusText, xhr] : (batchIndex != undefined) ? [resp,"batch",{index:batchIndex,batch:batch}] : [resp];
			resolve(resArr);
		},
		otherParseRequestPromise:function(resp,modelName,type,data,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject,customData){
			var response = this.genericResponse(resp,modelName,type,data,urlObj,xhr,partialObj,customData);
			if(response == false){
				reject("Response is not in the format as store expects in model, "+modelName+" for type "+type);
			}
			else{
				if(batchIndex != undefined){
					store.$.batchResponse[batch][batchIndex] = response;
				}
				if(type != "action"){
					this.updateIDB(modelName,type,data);
				}
				resolve(response);
			}
		},
		requestHandle:function(modelName,type,key,urlObj,operation,record){
			var temp_obj={"method":urlObj.method,"url":urlObj.url,"qP":urlObj.qP},req_data;
			if(key){
				temp_obj.key = key;  
			}
			if(urlObj.data){
				temp_obj.data = urlObj.reqData;
			}
			if(store.$.request && store.$.request[type]&&store.$.request[type][modelName])
			{
				req_data = store.$.request[type][modelName];
				var res = false;
				for(var i=0;i<req_data.length;i++){		
					var object = req_data[i];
					if(this.compareReqObjects(object,temp_obj))
					{	
						if(operation){
							res= true;
						}
						else{
							store.$.request[type][modelName].splice(i,1);
							return;
						}
					}
				}
				if(!res)
				{
					store.$.request[type][modelName].push(temp_obj);
				}
				else
				{
					return Promise.resolve();
				}
			}
			else if(operation){
				store.$.request[type] = store.$.request[type] || {} ;
				store.$.request[type][modelName] = store.$.request[type][modelName] || [] ;
				store.$.request[type][modelName].push(temp_obj);
			}
		},
		compareReqObjects:function(obj1,obj2)
		{
			if(Object.keys(obj1).length != Object.keys(obj2).length){
				return false;
			}
			var keys = Object.keys(obj1),i;
			for(i=0;i<keys.length;i++){
				var key=keys[i]; val1 = obj1[key], val2 = obj2[key];
				if(key == "qP"){
					var result = store.adapter.$.compareObjects(val1,val2,true);
					if(!result)
					{
						return false;
					}
				}
				else if(val1 instanceof Object && val2 instanceof Object){
					var check = store.adapter.$.compareReqObjects(val1,val2);
					if(!check)
					{
						return false;
					}
				}
				else if( val1 != val2){
					return false;
				}
			}
			return true;
		}
	}
}

store.$.defProp(store.adapter, "extends", function value(adapterName,opts,parent){
	return store.$.scExtd("adapter",adapterName,opts,parent);
}, false);

Lyte.$.requiredMixins.serializer = Lyte.$.requiredMixins.adapter = function(mixin,parent,callback_name){
	if(Object.keys(mixin).length){
		parent.forEach(function(item,index){
			var scope = item.scope, name = item.name , callback = scope[callback_name][name];
			if(callback){
				for(var key in mixin){
					callback[key] = mixin[key];
				}
			}
		});
	}
};
function Serializer(opts,parent,name){
	for(key in opts){
		this[key] = opts[key];
	}
	var self = this;
	if(parent && parent.mixins && parent.mixins.length){
		parent.mixins.forEach(function(item){
            if(Lyte.Mixin.exists(item)){
    			var mixin = Lyte.registeredMixins[item];
    			for(var key in mixin){
    				self[key] = mixin[key];
    			}
            }
            else
            {
                Lyte.$.requiredMixins(item,{"name":name,"scope":store},"serializer");
            }
		});
    }
    this.__extendedBy = [];
    var srz = store.serializer;
    if(srz.__toAddSuper && srz.__toAddSuper.hasOwnProperty(name)){
        var addSuper = srz.__toAddSuper[name];
        for(var i=0; i<addSuper.length; i++){
            var child = srz[addSuper[i]];
            if( child  && child.is == "serializer"){
                child.$super = this;
                this.__extendedBy.push(addSuper[i]);
                if(name != "application")
                {   
                    if(srz.__toAddSuper.application)
                    {
                        var index = srz.__toAddSuper.application.indexOf(child.__name);
                        if(index > -1)
                        {
                            srz.__toAddSuper.application.splice(index,1);
                        }
                    }
                    if(srz.application)
                    {
                        var index = srz.application.__extendedBy.indexOf(child.__name);
                        if(index > -1)
                        {
                            srz.application.__extendedBy.splice(index,1);
                        }
                    }
                }
            }
        }
        delete srz.__toAddSuper[name];
    }
    store.$.defProp(this, "is", "serializer");
    store.$.defProp(this, "__name", name);
}
Object.defineProperties(Serializer.prototype, {
    "super" : {
        value: function value(){
            return store.$.super.call(this,arguments);
        }
    },
    "extends" : {
        value: function value(name){
            store.$.extendCallback.call(this,store,"serializer",name);
        }
    }
});
store.serializer = {
    $:{
        buildJSON:function(modelName, type, payLoad, id, status, urlObj, customData){
            var headers = urlObj ?  urlObj.headers : undefined;
            var scope = store.$.cbScp(modelName, "normalizeResponse",1);
            var realData = payLoad;
            if(scope){
                var args = store.$.consArg(modelName, type, realData, id, status, headers, urlObj ? urlObj.qP : undefined,customData);
                realData = store.$.cB(scope, args);
            }
            var changed = false, recs;
            if(/^(findRecord|findAll)$/.test(type) || realData[modelName]){
                recs = realData[modelName];
                changed = true;
                scope = store.$.cbScp(modelName, "normalize",1);
                if(scope){
                    if(Array.isArray(recs)){
                        for(var i=0; i<recs.length; i++){
                            var args = store.$.consArg(modelName, type, recs[i], customData);
                            recs[i] = store.$.cB(scope, args);
                        }
                    }					
                    else{
                        var args = store.$.consArg(modelName, type, recs, customData);
                        recs = store.$.cB(scope, args);
                    }
                }
                realData[modelName] = recs;
            }
            return realData;
        },
        normalizeResponse : function(modelName, type, payLoad, id, status, urlObj, customData, opts){
            var headers = urlObj ? urlObj.headers : undefined;
            var scope = store.$.cbScp(modelName, "normalizeResponse",1);
            var realData = payLoad;
            if(scope){
                var args = store.$.consArg(modelName, type, realData, id, status, headers, urlObj ? urlObj.qP : undefined, customData, opts);
                realData = store.$.cB(scope, args);
            }
            return realData;
        },
        normalize : function(modelName,type,payLoad,id, status, headers, customData, opts){
            var realData = payLoad, changed = false;
            if(/^(findRecord|findAll)$/.test(type) || realData[modelName]){
                realData = realData[modelName];
                changed = true;
            }
            var scope = store.$.cbScp(modelName, "normalize",1);
            if(scope){
                if(Array.isArray(realData)){
                    for(var i=0; i<realData.length; i++){
                        var args = store.$.consArg(modelName, type, realData[i], customData, opts);
                        realData[i] = store.$.cB(scope, args);
                    }
                }					
                else{
                    var args = store.$.consArg(modelName, type, realData, customData, opts);
                    realData = store.$.cB(scope, args);
                }
            }
            if(changed){
                payLoad = {};
                payLoad[modelName] = realData;
            }
        } 
    }
}
store.$.defProp(store.serializer, "extends", function value(serializerName, opts, parent){
    return store.$.scExtd("serializer",serializerName,opts,parent);
});
Object.defineProperties(store,{
	triggerUpdate:{
		value: function value(modelName, pkVal, keys, qP, customData){
			var obj = {};
			var model = store.model[modelName];
			if(model == undefined){
				Lyte.error("LD02", "Model", modelName);
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19, data:modelName});
			}
			var record = store.peekRecord(modelName, pkVal);
			if(record){
				var model = record.$.model;
				var pK = model._arrPk;
				var fields = keys || Object.keys(model.fieldList);	
				fields.forEach(function(item){
					obj[item] = record[item];
				});
				pK.forEach(function(item){
					obj[item] = record[item];
				});
				return store.adapter.$.put(modelName, obj, record, true, customData, qP);	
			}
			return Promise.reject("No such record found");
		}
	},
	batch:{
		value:function value(func){
			return new Promise(function(resolve, reject){
				store.$.makeBatch = true;
				store.$.batch = store.$.batch || {};
				store.$.batchPromise = store.$.batchPromise || {};
				var bLen = (store.$.currentBatch === undefined) ? Object.keys(store.$.batch).length : (store.$.currentBatch + 1);
				var batch = store.$.currentBatch = bLen;
				try{
					func();
				}
				catch(e){
					store.$.makeBatch = false;
					throw e;
				}
				store.$.makeBatch = false;
				var payLoad = {batch:store.$.batch[batch]};
				var urlObj = store.adapter.$.buildURL("batch", "POST", "application");
				var batchPl = payLoad.batch;
				if(store.$.isEmpty(batchPl) || batchPl == {}){
					if(store.$.cachedBatch && store.$.cachedBatch[batch] && store.$.cachedBatch[batch].length){
						var finalRes = store.$.handleCachedResponse(batch, []);
						return resolve(finalRes);
					}
					return resolve();					
				}
				var scope = store.$.cbScp("application", "serialize", 1);
				if(scope){
					var args = store.$.consArg("batch",payLoad);
					payLoad = store.$.cB(scope, args);
				}
				var xhr = new XMLHttpRequest();
				xhr.open("POST", urlObj.url, true);
				for(var header in urlObj.headers){
					xhr.setRequestHeader(header, urlObj.headers[header]);
				}
				xhr.withCredentials = (urlObj.withCredentials)?true:false;
				xhr.send(JSON.stringify(payLoad));
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status.toString()[0] == "2" || xhr.status.toString()[0] == "3"){
							var resp = JSON.parse(xhr.responseText);
							store.$.batchResponse = store.$.batchResponse || {};
							store.$.batchResponse[batch] = [];
							store.adapter.$.handleBatchPromise({response:resp,batch:batch,resolve:resolve});
							setTimeout(function(){
								var finalRes = store.$.handleCachedResponse(batch, store.$.batchResponse[batch]);
								resolve(finalRes);
								store.$.batchResponse[batch] = [];
							},0);
						}
						else{
							setTimeout(function(){
								reject();
							},0);
						}
					}
				}					
			});
		}
	},
	pushPayload:{
		value:function value(modelName,data,deserialize){
			var model = store.modelFor(modelName);
			if(!model){
				Lyte.error("LD02", "Model", modelName);
				return;
			}
			var result = data, len;
			if(deserialize){
                data = store.serializer.$.buildJSON(modelName,"pushPayload",data);
                var scope = store.$.cbScp(modelName, "deserializeKey",1);
				len = data ? Object.keys(data).length : undefined;
                if(scope){
					Lyte.warn("LD08", "deserializeKey", "callback", "Please use payloadKey callback instead");
					if(len > 2){
						Lyte.error("LD09");
					}
					var keys = Object.keys(data), index = 0;
					if(keys.length == 2 && keys[0] == "meta"){
						index = 1;
					}
					var args = store.$.consArg(modelName,"pushPayload"), deserializeKey = store.$.cB(scope, args), rec = data[keys[index]];
					delete data[keys[index]];
					data[deserializeKey] = rec;
					
                }
                result = data[modelName];
			}
			store.$.idbQ2Push(modelName,data,undefined,"pushPayload");
  			data = store.$.insertIntoStore(model, result, true);
			delete model.rel;
			return data;
		}
	},
	registerModel:{
		value:function value(name,fields,options){
			if(store.model.hasOwnProperty(name)){
				Lyte.warn("LD14", "Model", name);
				return;
			}
			var extend,actions,idb;
			if(options && typeof options == "object"){
				extend = options.extends || undefined;
				actions = options.actions || undefined;
				idb = options.idb || undefined;
			}
			if(extend){
				var parentFields = Object.assign({},store.model[extend].fieldList);
				for(var key in parentFields){
					if(parentFields[key].type == "relation"){
						delete parentFields[key];
					}
				}
				fields = Object.assign(fields, parentFields);
			}
			var model = store.model[name] = new Model(name, fields);
			if(extend){
				model.extend = extend;
				if(!model.extendedBy){
					model.extendedBy = {};
				}
				model.extendedBy[name] = true;
				var adp = store.adapter, srz = store.serializer; 
				if(!adp[name] && adp[extend]){
					adp[name] = adp[extend];
				}
				if(!srz[name] && srz[extend]){
					srz[name] = srz[extend];
				}
				if(store.model[extend].actions){
					if(actions == undefined){
						actions = {};
					}
					for(var key in store.model[extend].actions){
						if(!actions.hasOwnProperty(key)){
							actions[key] = store.model[extend].actions[key]; 							
						}
					}					
				}
			}
			if(actions){
				model.actions = actions;
			}
			if(idb){
				model.idb = idb;
			}
			return model;
		}
	},
    unregisterModel:{
      value:function(data){		  
		if(Array.isArray(data)){
			data.forEach(function(item){
				store.$.unregisterModel(item);
			});
		}
		else{
			store.$.unregisterModel(data);
		}
      }
	},
	unregisterAdapter:{
		value:function value(data){
			if(Array.isArray(data)){
				data.forEach(function(item){
					store.$.unRegCb("adapter", item);
				});
			}	
			else{
				store.$.unRegCb("adapter", data);
			}		
		}
	},
	unregisterSerializer:{	
		value:function value(data){
			if(Array.isArray(data)){
				data.forEach(function(item){
					store.$.unRegCb("serializer",item);
				});
			}
			else{
				store.$.unRegCb("serializer",data);
			}
		}
	},
	addField:{
		value:function value(modelName, key, type, options, ignoreValidation){
			var model = store.modelFor(modelName), fieldType;
			var obs = [];
			if(type && typeof type == "object"){
				store.$.registerField(model,key,type,obs);
				if(type.type == "relation"){
					fieldType = "relation"
				}
				else{
					fieldType = "attr"; 
				}
			}
			else{
				var field = Lyte.attr(type,options);
				store.$.registerField(model,key,field,obs);
			}
			if(fieldType != "relation" && !ignoreValidation){
					store.$.updateFieldValidation(model, key);
			}
			// else if(fieldType == "relation" ){
			// 	todo related data in records
			// }
		}
	},
	modelFor:{		
		value:function value(name){
			return store.model[name];
		}
	},
	createRecord:{
		value : function value(modelName, opts, withoutValidation){
			return this.$.newRecord(modelName, opts, withoutValidation);
		}
	},
	deleteRecord:{
		value : function value(modelName, key){
			this.$.removeFromStore(store.modelFor(modelName), key, undefined);
		}
	},
    /*
	 args - modelName, queryParams, cacheQuery, cacheData, customData
	 	cacheQuery - true/false (default false) -> whether to cache the request with queryparams or not
	 	cacheData - true/false (default true) -> whether to store the data in the store or not
	 	customData - some custom data that can be sent, which will be received as the last param in all adapter functions
	 */
	findAll:{
		value : function value(modelName, queryParams, cacheQuery,cacheData,customData){
			return store.adapter.$.get("findAll", modelName, undefined, queryParams, cacheQuery, customData, cacheData).then(function(){
				var args = arguments;
				var data = args[0][0];
				var fromCache = args[0][1] == "cache" ? true : false; 
				var batchObj = args[0][1] == "batch" ? args[0][2] : undefined; 
				var fromIDB = args[0][1] == "idb" ? true : false;
				if(cacheData === false){
                    if(cacheQuery && Object.keys(queryParams).length > 0){
						store.$.cacheQuery(modelName, queryParams, data);
					}
					if(batchObj != undefined){
						store.$.batchResponse[batchObj.batch][batchObj.index] = data;
					}
					return data;
				}
				if(data && !data.save){
					if(!fromCache){
//						var rawData = Lyte.deepCopyObject(data);
						if(!data || !data.hasOwnProperty(modelName)){
							Lyte.error("LD13", modelName);
							return;
						}
						if(!fromIDB){
							store.$.idbQ2Push(modelName,data,queryParams,"findAll");
						}
						var payLoad = data[modelName];
						if(payLoad === undefined || payLoad === null || store.$.isEmptyArray(payLoad)){
							data[modelName] = [];
						}
						else{
							var records = store.$.toInsertData(modelName,data,true);
							data[modelName] = records;
						}
						if(data.meta){
							data[modelName].$ || store.$.defProp(data[modelName], "$", {});
							data[modelName].$.meta = data.meta;
						}
						if(cacheQuery && Object.keys(queryParams).length > 0){
							store.$.cacheQuery(modelName, queryParams, data);								
						}						
					}
					if(batchObj != undefined){
						store.$.batchResponse[batchObj.batch][batchObj.index] = data[modelName];
					}
					return data[modelName];	
				}
				return arguments;
			}, function(e){
				return Promise.reject(e);
			});
		}		
	},
    /*
	 args - modelName , key, queryParams, cacheQuery, cacheData, customData
	 	cacheQuery - true/false (default - false) -> to cache the query with queryParams and key
	 	cacheData - true/false (default - true) -> to store the data in store / not
	 	customData - custom data that will be available as last param in all adapter callbacks 
	 */
	findRecord:{	
		value : function value(modelName, key, queryParams, cacheQuery,cacheData,customData){
			if(key == undefined){
				return Promise.reject({code : "ERR20", message : Lyte.errorCodes.ERR20});
			}
			return store.adapter.$.get("findRecord", modelName, key, queryParams, cacheQuery,customData,cacheData).then(function(){
				var data = arguments[0][0], fromCache = arguments[0][1] == "cache" ? true : false;
				var batchObj = arguments[0][1] == "batch" ? arguments[0][2] : undefined; 
				var fromIDB = arguments[0][1] == "idb" ? true : false;
				if(cacheData === false){
                    if(arguments[0][1] != "cache" && cacheQuery && Object.keys(queryParams).length > 0){
						store.$.cacheRecordQuery(modelName, key, queryParams, data);
					}
					if(batchObj != undefined){
						store.$.batchResponse[batchObj.batch][batchObj.index] = data;
					}
					return data;
				}
				if(data){
					if(!fromCache){
						//var rawData = Lyte.deepCopyObject(data);
						var isEmpty;
						if(!data || !data.hasOwnProperty(modelName)){
							Lyte.error("LD13", modelName);
							return;
						}						
						if(!fromIDB){
							store.$.idbQ2Push(modelName,data,queryParams,"findRecord",key);
						}
						if(!Lyte.isRecord(data)){
							var payLoad = data[modelName];
							if(store.$.isEmpty(payLoad) || store.$.isEmptyObj(payLoad)){
								data[modelName] = {};
								isEmpty = true;
							}
							if(typeof payLoad != "object" || Array.isArray(payLoad)){
								Lyte.warn("LD11");
							}
							if(!isEmpty){
								var record = store.$.insertIntoStore(store.model[modelName], payLoad, true, true);
								data[modelName] = record;
							}
							if(data.meta){
								if(Lyte.isRecord(record)){
									record.$.meta = data.meta;
								}
								else{
									payLoad = data[modelName];
									store.$.defProp(payLoad, "$", {meta : data.meta});
								}
							}
						}
						if(arguments[0][1] != "cache" && cacheQuery && Object.keys(queryParams).length > 0){
							store.$.cacheRecordQuery(modelName, key, queryParams, data);
						}						
					}
					if(batchObj != undefined){
						store.$.batchResponse[batchObj.batch][batchObj.index] = data[modelName];
					}
					return data[modelName];	
				}
				return arguments;
			}, function(e){
				return Promise.reject(e);
			});
		}
	},
	peekRecord:{	
		value : function value(modelName, pKey){
			var model = this.modelFor(modelName);
			if( !model ){
				Lyte.error("LD02","Model ",modelName);
				return;
			}
			var data = model.data, pK = this.model[modelName]._pK, isComp = model.isComp;
			var record = data.filter(function(record){
				if(!isComp){
					if(record[pK] == pKey){
						return record;
					}
				}
				else{
					if(store.$.comparePk(record, pKey)){
						return record;
					}
				}
			});
			if(record[0]){
				return record[0];
			}
			return undefined;
		}
	},
	peekAll:{
		value : function value(modelName){
			var model = this.modelFor(modelName), arr;
			if( !model ){
				Lyte.error("LD02","Model ",modelName);
				return;
			}
			arr= model.data;
//			if(arr.length){
			return arr;
//			}
//			return undefined;
		}	
	},
	deleteMany:{
		value : function value(modelName, keys){
			this.$.removeFromStore(store.modelFor(modelName), keys, undefined);
		}
	},
	unloadRecord:{
		value : function value(modelName, key){
			var model = this.modelFor(modelName);
			if( !model ){
				Lyte.error("LD02","Model ",modelName);
				return;
			}
			if(key == undefined){
				Lyte.warn("LD18","key");
			}
			var data = store.peekRecord(modelName, key);
			var model = store.modelFor(modelName);
			var pkVal;
			if(data){
				pkVal = data.$.pK;
				this.$.removeFromStore(model, pkVal, true, true);
				model._deleted.delete(key);
				// for(var i=0; i<model._deleted.length; i++){
				// 	if(model._deleted[i].$.get(model._pK) == key){
				// 		model._deleted.splice(i, 1);
				// 		break;
				// 	}
				// }
				var crq = this.model.cachedRecordQueries;
				if(crq && crq[modelName] && crq[modelName][key]){
					crq[modelName][key] = [];
				}
			}
		}
	},
	unloadAll:{	
		value : function value(modelName){
			var model = this.modelFor(modelName);
			if( !model ){
				Lyte.error("LD02","Model ",modelName);
				return;
			}
			var keys = [];
			var data = store.peekAll(modelName);
			var model = this.modelFor(modelName);
			if(data){
				for(var i=0; i<data.length; i++){
					keys.push(data[i].$.pK);
				}				
			}
			this.$.removeFromStore(model, keys, true, true);
			this.model[modelName].dirty = [];
			this.model[modelName]._deleted = new Map();
			var cq = this.model.cachedQueries;
			if(cq && cq[modelName]){
				cq[modelName] = [];
			}
			var crq = this.model.cachedRecordQueries; 
			if(crq){
				var cache = crq;
				for(var key in cache){
					delete cache[key];
				}
			}
		}
	},
	triggerAction:{
		value:function value(modelName,actionName,customData,qP,method,data){
			var model = store.modelFor(modelName);
			if(model == undefined){
				Lyte.error("LD02", "Model", modelName);
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19, data:modelName});
			}
			var actions = model.actions, action = (actions)?model.actions[actionName]:undefined;
			if(action){
				return store.adapter.$.handleAction(actionName,model,store.peekAll(modelName),customData,qP,method,data).then(function(data){
					return data;
				},function(err){
					return Promise.reject(err);
				});
			}
			else{
				return Promise.reject({code : "ERR18", message : Lyte.errorCodes.ERR18});
			}
		}
	},
	rollBack :{
		value:function value(modelName){
			var model = this.modelFor(modelName);
			if(model == undefined){
				Lyte.error("LD02", "Model", modelName);
				return;
			}
			var pK = model._pK,self = this, dirty = Array.from(model.dirty);
			var len = dirty.length;
			for(var i=0; i<len; i++){
				var rec = self.peekRecord(modelName, dirty[i]);
				if(rec && rec.$.isDeleted){
					continue;
				}
				else if(rec && rec.$.isNew){
					self.$.rollBackNew(model, rec, pK);
				}                                
				else if(rec && rec.$.isModified){
					rec.$.rollBackAttributes(rec.$.getDirtyAttributes());
				}
			}
			this.$.rollBackDelete(model, undefined, true);
		}
	},
	create : {
		value : function value(modelName, data, customData, qP){
			var model = store.modelFor(modelName);
			if(model == undefined){
				Lyte.error("LD02", "Model", modelName);
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19, data:modelName});
			}
			if(Array.isArray(data)){
				var self = this;
				data.forEach(function(item){
					var resp = self.$.newRecord(modelName, item);
					if(resp.$.isError){
						return Promise.reject(resp);
					}
				});
			}
			else if(data && typeof data == "object"){
				var resp = this.$.newRecord(modelName, data);
				if(resp.$.isError){
					return Promise.reject(resp);
				}				
			}
			var dirty = model.dirty, len = dirty.length, created = [], err;
			for(var i=0; i<len; i++){
				var rec = store.peekRecord(modelName, dirty[i]);
				if(rec && rec.$.isNew){
					err = new error1();
					store.$.validateRecord(rec, model.fieldList);
					if(rec.$.isError && Object.keys(rec.$.error).length > 0){
						return Promise.reject(err);
					}
					created.push(rec);
				}
			}
			if(created.length){
				return store.adapter.$.create(modelName, created, false, customData, qP);
			}
			return Promise.resolve();
		}
	},
	update : {
		value : function value(modelName, customData, qP){
			var model = this.modelFor(modelName);
			if(model == undefined){
				Lyte.error("LD02", "Model", modelName);
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19, data : modelName});
			}
			var changed = [], recordsChanged = [];
			var records = store.peekAll(modelName);
			var model = store.model[modelName];
			var rels = model.relations;
			records.forEach(function(item){
				var rec = item;
				var dirty = store.$.isDirty(rec, rels);
				if((rec && rec.$.isModified && !rec.$.isNew) || (dirty && dirty.length)){
					var obj = store.$.updateJSON(rec, model, dirty);
					changed.push(obj);
					recordsChanged.push(rec);
				}
			});
			if(changed.length){
				return store.adapter.$.put(modelName, changed, recordsChanged,false, customData, qP);
			}
			return Promise.resolve();
		}
	},
	delete : {
		value : function value(modelName, key, customData, qP){
			var model = store.modelFor(modelName);
			if(model == undefined){
				Lyte.error("LD02", "Model", modelName);
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19,data:modelName});
			}
			if(key){
				this.deleteRecord(modelName, key);				
			}
			var deleted = [];
			model._deleted.forEach(function(itm, idx){
				deleted.push(itm.data);
			});
			// for(var i=0; i<model._deleted.length; i++){
			// 	if(!model._deleted[i].$.isNew){
			// 		deleted.push(model._deleted[i]);					
			// 	}
			// 	else{
			// 		// store.adapter.$.handleResponse(model._deleted[i], model._deleted[i], undefined, undefined, model);
			// 	}
			// }
			if(deleted.length){
				var prm = store.adapter.$.del(modelName, deleted,undefined,"delete",customData,qP);
				return prm.then(function(resp){
					return resp;
				}, function(e){
					return Promise.reject(e);
				});
				// return prm;
			}
			return Promise.resolve();
		}
	},
	registerAdapter : {
		value : store.adapter.extends
	},
	registerSerializer : {
		value : store.serializer.extends
	},
	clearCachedQuery : {
		value : function(modelName, key, queryParams){
			var cachedQueries = [];
			if(key && typeof key == "object"){
				queryParams = key;
				var cq = this.model.cachedQueries;
				if(cq && cq[modelName]){
					cachedQueries = cq[modelName];
				}
			}
			else{
				var crq = this.model.cachedRecordQueries;
				if(crq && crq[modelName] && crq[modelName][key]){
					cachedQueries = crq[modelName][key];
				}
			}
			for(var i=0; i<cachedQueries.length; i++){
				if(this.adapter.$.compareObjects(cachedQueries[i].queryParams, queryParams, true)){
					cachedQueries.splice(i, 1);
					break;
				}
			}
		}
	},
	getErrorMessage : {
		value : function (code){
			return Lyte.errorCodes[code];
		}
	},
	setErrorMessages : {
		value : function(obj){
			Object.assign(Lyte.errorCodes, obj);
		}
	},
    addEventListener : {
        value:function(type,func){
            return store.$.eventListeners.add(store,type,func);
        }
    },
    removeEventListener : {
        value:function(id){
            store.$.eventListeners.remove(store,id);
        }
    },
    emit : {
        value:function(type,args){
            store.$.eventListeners.emit(store,type,args);
        }
	},
	getPrimaryKey : {
		value:function(modelName){
			var model = store.model[modelName];
			if(!model){
				Lyte.error("LD02","Model ",modelName);
				return;
			}
			return model._pK;
		}
	}
});

var error1 = function error1(attr, obj){
	Object.defineProperties(this, {
		$ : {
			value : {isError : true , error: {}}
		}
	});
    if(attr){
		store.$.setError(this,attr,obj);
	}
};