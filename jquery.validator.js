/*! nice Validator 0.8.0
 * (c) 2012-2014 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e){"function"==typeof define?define([],function(){return e}):e(jQuery)}(function(e,t){"use strict";function i(n,s){var r=this;return!r instanceof i?new i(n,s):(r.$el=e(n),r._init(n,s),t)}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(z(e))for(var s in e)i[s]=r(e[s])}function s(e,t){var i=t?t===!0?this:t:s.prototype;if(z(e))for(var n in e){if(!e[n])return;i[n]=e[n]}}function r(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function a(t){var i="";return e.map(t.split(" "),function(e){i+=","+("#"===e.charAt(0)?e:'[name="'+e+'"]')}),i.substring(1)}function l(t){var i;if(t&&t.tagName){switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":case"FIELDSET":i=t.form||e(t).closest("."+k);break;case"FORM":i=t;break;default:i=e(t).closest("."+k)}return e(i).data(h)||e(i)[h]().data(h)}}function u(e){var t,i=e.currentTarget;i.form&&null===K(i.form,N)&&(t=l(i),t?(t._parse(i),t["_"+e.type](e)):K(i,F,null))}function o(i,n){var s=e.trim(K(i,F+"-"+n));if(s)return s=Function("return "+s)(),s?r(s):t}function c(e,t,i,n){var s=t.msg,r=t._r;return z(s)&&(s=s[r]),Q(s)||(s=K(e,V+"-"+r)||K(e,V)||i||(n?Q(n)?n:n[r]:"")),s}function d(e){var t;return e&&(t=B.exec(e)),t?t[1]:""}function f(e){return"INPUT"===e.tagName&&"checkbox"===e.type||"radio"===e.type}function g(e){return Date.parse(e.replace(/\.|\-/g,"/"))}!function(){var t,i,n=document.getElementsByTagName("script"),s=e._VALIDATOR_URI;if(s)i=n[0],t=s.match(/(.*)\/local\/(\w{2,5})\.js/);else for(var r=n.length,a=/(.*validator.js)\?.*local=(\w+)/;r--&&!t;)i=n[r],t=(i.hasAttribute?i.src:i.getAttribute("src",4)||"").match(a);if(t){var l=t[0].split("/").slice(0,-1).join("/").replace(/\/(local|src)$/,"")+"/",u=document.createElement("link");u.rel="stylesheet",u.href=l+"jquery.validator.css",i.parentNode.insertBefore(u,i),s||(u=document.createElement("script"),u.async=1,u.src=l+"local/"+t[2].replace("-","_")+".js",i.parentNode.insertBefore(u,i))}}();var p,m,h="validator",v="."+h,y=".rule",_=".field",b=".form",k="nice-"+h,w="n-ok",M="n-error",O="n-tip",$="n-loading",x="msg-box",C="aria-required",A="aria-invalid",F="data-rule",V="data-msg",R="data-tip",T="data-ok",j="data-target",E="data-inputstatus",N="novalidate",S=":verifiable",q=/(!?)\s?(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?\s*(;|\||&)?/g,D=/(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?/,I=/(?:([^:;\(\[]*):)?(.*)/,U=/[^\x00-\xff]/g,B=/^.*(top|right|bottom|left).*$/,L=/(?:(post|get):)?(.+)/i,H=/<|>/g,P=e.noop,W=e.proxy,X=e.isFunction,J=e.isArray,Q=function(e){return"string"==typeof e},z=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},G=!window.XMLHttpRequest,K=function(e,i,n){return n===t?e.getAttribute(i):(null===n?e.removeAttribute(i):e.setAttribute(i,""+n),t)},Y=window.console||{log:P,info:P},Z={debug:0,timely:1,theme:"default",ignore:"",focusInvalid:!0,beforeSubmit:P,validClass:"n-valid",invalidClass:"n-invalid",msgWrapper:"span",msgMaker:function(e){var t,i={error:M,ok:w,tip:O,loading:$}[e.type];return t='<span class="msg-wrap '+i+'" role="alert">',t+=e.arrow+e.icon+'<span class="n-msg">'+e.msg+"</span>",t+="</span>"},msgIcon:'<span class="n-icon"></span>',msgArrow:"",msgClass:"",defaultMsg:"{0} is not valid.",loadingMsg:"Validating..."},et={"default":{formClass:"n-default",msgClass:"n-right",showOk:""}};e.fn[h]=function(t){var n=this,s=arguments;return n.is(":input")?n:(!n.is("form")&&(n=this.find("form")),!n.length&&(n=this),n.each(function(){var n=e(this).data(h);if(n)if(Q(t)){if("_"===t.charAt(0))return;n[t].apply(n,Array.prototype.slice.call(s,1))}else t&&(n._reset(!0),n._init(this,t));else new i(this,t)}),this)},e.fn.isValid=function(e,t){var i,n,s=l(this[0]),r=X(e);return s?(s.checkOnly=!!t,n=s.options,i=s._multiValidate(this.is(":input")?this:this.find(S),function(t){t||!n.focusInvalid||s.checkOnly||s.$el.find(":input["+A+"]:first").focus(),r&&e.call(null,t),s.checkOnly=!1}),r?this:i):!0},e.expr[":"].verifiable=function(e){var t=e.nodeName.toLowerCase();return("input"===t&&!{submit:1,button:1,reset:1,image:1}[e.type]||"select"===t||"textarea"===t)&&e.disabled===!1},i.prototype={_init:function(i,r){var l,u,o,c=this;if(X(r)&&(r={valid:r}),r=r||{},o=K(i,"data-"+h+"-option"),o=o&&"{"===o.charAt(0)?Function("return "+o)():{},u=et[r.theme||o.theme||Z.theme],l=c.options=e.extend({},Z,u,o,c.options,r),c.rules=new n(l.rules,!0),c.messages=new s(l.messages,!0),c.elements=c.elements||{},c.deferred={},c.errors={},c.fields={},c._initFields(l.fields),J(l.groups)&&e.map(l.groups,function(i){return Q(i.fields)&&X(i.callback)?(i.$elems=c.$el.find(a(i.fields)),e.map(i.fields.split(" "),function(e){c.fields[e]=c.fields[e]||{},c.fields[e].group=i}),t):null}),c.msgOpt={type:"error",pos:d(l.msgClass),wrapper:l.msgWrapper,cls:l.msgClass,style:l.msgStyle,icon:l.msgIcon,arrow:l.msgArrow,show:l.msgShow,hide:l.msgHide},c.isAjaxSubmit=!1,l.valid||!e.trim(K(i,"action")))c.isAjaxSubmit=!0;else{var f=e[e._data?"_data":"data"](i,"events");f&&f.valid&&e.map(f.valid,function(e){return-1!==e.namespace.indexOf("form")?1:null}).length&&(c.isAjaxSubmit=!0)}c.$el.data(h)||(c.$el.data(h,c).addClass(k+" "+l.formClass).on("submit"+v+" validate"+v,W(c,"_submit")).on("reset"+v,W(c,"_reset")).on("showtip"+v,W(c,"_showTip")).on("focusin"+v+" click"+v+" showtip"+v,S,W(c,"_focusin")).on("focusout"+v+" validate"+v,S,W(c,"_focusout")),l.timely>=2&&c.$el.on("keyup"+v+" paste"+v,S,W(c,"_focusout")).on("click"+v,":radio,:checkbox",W(c,"_focusout")).on("change"+v,'select,input[type="file"]',W(c,"_focusout")),c._novalidate=K(i,N),K(i,N,N))},_initFields:function(t){var i=this;z(t)&&e.each(t,function(e,t){if(null===t){var n=i.elements[e];n&&i._resetElement(n,!0),delete i.fields[e]}else i.fields[e]=Q(t)?{rule:t}:t}),i.$el.find(S).each(function(){i._parse(this)})},_parse:function(e){var t,i=this,n=e.name,s=K(e,F);s&&K(e,F,null),(e.id&&"#"+e.id in i.fields||!e.name)&&(n="#"+e.id),n&&(t=i.fields[n]||{},t.key=n,t.old={},t.rule=t.rule||s||"",t.rule&&(t.rule.match(/match|checked/)&&(t.must=!0),-1!==t.rule.indexOf("required")&&(t.required=!0,K(e,C,!0)),("timely"in t&&!t.timely||!i.options.timely)&&K(e,"notimely",!0),Q(t.target)&&K(e,j,t.target),Q(t.tip)&&K(e,R,t.tip),i.fields[n]=i._parseRule(t)))},_parseRule:function(e){var i=I.exec(e.rule),n=this.options;if(i)return e._i=0,i[1]&&(e.display=i[1]),!e.display&&n.display&&(e.display=n.display),i[2]&&(e.rules=[],i[2].replace(q,function(){var i=arguments;i[3]=i[3]||i[4],e.rules.push({not:"!"===i[1],method:i[2],params:i[3]?i[3].split(", "):t,or:"|"===i[5]})})),e},_multiValidate:function(i,n){var s=this,r=s.options;return s.verifying=!0,s.isValid=!0,r.ignore&&(i=i.not(r.ignore)),i.each(function(e,i){var n=s.getField(i);return n&&(s._validate(i,n),!s.isValid&&r.stopOnError)?!1:t}),e.when.apply(null,e.map(s.deferred,function(e){return e})).done(function(){n.call(s,s.isValid),s.verifying=!1}),e.isEmptyObject(s.deferred)?s.isValid:t},_submit:function(t){var i=this,n=i.options,s=t.target,r="submit"===t.type;t.preventDefault(),m&&~(m=!1)||i.submiting||"validate"===t.type&&i.$el[0]!==s||n.beforeSubmit.call(i,s)===!1||(n.debug&&Y.log("\n"+t.type),i._reset(),i.submiting=!0,i._multiValidate(i.$el.find(S),function(t){var a,l=t||2===n.debug?"valid":"invalid";t||(n.focusInvalid&&i.$el.find(":input["+A+'="true"]:first').focus(),a=e.map(i.errors,function(e){return e})),i.submiting=!1,X(n[l])&&n[l].call(i,s,a),i.$el.trigger(l+b,[s,a]),t&&!i.isAjaxSubmit&&r&&(m=!0,p&&p.name&&i.$el.append('<input type="hidden" name="'+p.name+'" value="'+e(p).val()+'">'),s.submit())}))},_reset:function(e){var t=this;t.errors={},e&&t.$el.find(S).each(function(e,i){t._resetElement(i)})},_resetElement:function(t,i){var n=this.options;e(t).removeClass(n.validClass+" "+n.invalidClass),this.hideMsg(t),i&&K(t,C,null)},_focusin:function(t){var i,n=this,s=n.options,r=t.target;n.verifying||("showtip"!==t.type&&"error"===K(r,E)&&s.focusCleanup&&(e(r).removeClass(s.invalidClass),n.hideMsg(r)),i=K(r,R),i&&n.showMsg(r,{type:"tip",msg:i}))},_focusout:function(t){var i,n,s=this,r=s.options,a=t.target,l=t.type,u={click:1,change:1,paste:1},o=0;if(!u[l]){if("validate"===l)n=!0;else{if(K(a,"notimely"))return;if(r.timely>=2&&"keyup"!==l)return}if(r.ignore&&e(a).is(r.ignore))return;if("keyup"===l){var c=t.keyCode,d={8:1,9:1,16:1,32:1,46:1};if(9===c&&!a.value)return;if(48>c&&!d[c])return;o=r.timely>=100?r.timely:500}}i=s.getField(a),i&&(o?(i._t&&clearTimeout(i._t),i._t=setTimeout(function(){s._validate(a,i,n)},o)):s._validate(a,i,n))},_showTip:function(e){var t=this;t.$el[0]===e.target&&t.$el.find(S+"["+R+"]").each(function(){t.showMsg(this,{msg:K(this,R),type:"tip"})})},_validatedField:function(t,i,n){var s=this,r=s.options,a=n.isValid=i.isValid=!!n.isValid,l=a?"valid":"invalid";n.key=i.key,n.rule=i._r,a?n.type="ok":(s.submiting&&(s.errors[i.key]=n.msg),s.isValid=!1),i.old.value=t.value,i.old.id=t.id,s.elements[i.key]=n.element=t,s.$el[0].isValid=a?s.isFormValid():a,X(i[l])&&i[l].call(s,t,n),e(t).attr(A,a?null:!0).removeClass(a?r.invalidClass:r.validClass).addClass(n.skip?"":a?r.validClass:r.invalidClass).trigger(l+_,[n,s]),s.$el.triggerHandler("validation",[n,s]),s.checkOnly||(i.msgMaker||r.msgMaker)&&s[n.showOk||n.msg?"showMsg":"hideMsg"](t,n,i)},_validatedRule:function(i,n,s,r){n=n||o.getField(i),r=r||{};var a,l,u,o=this,d=o.options,f=n._r,g=!1;if(null===s)return o._validatedField(i,n,{isValid:!0,skip:!0}),t;if(s===!0||s===t||""===s?g=!0:Q(s)?a=s:z(s)&&(s.error?a=s.error:(a=s.ok,g=!0)),n.rules&&(l=n.rules[n._i],l.not&&(a=t,g="required"===f||!g),l.or))if(g)for(;n._i<n.rules.length&&n.rules[n._i].or;)n._i++;else u=!0;u||(g?(r.isValid=g,d.showOk!==!1&&(Q(a)||(Q(n.ok)?a=n.ok:Q(K(i,T))?a=K(i,T):Q(d.showOk)&&(a=d.showOk)),Q(a)&&(r.showOk=g,r.msg=a)),e(i).trigger("valid"+y,[f,r.msg])):(r.msg=(c(i,n,a,o.messages[f])||Z.defaultMsg).replace("{0}",o._getDisplay(i,n.display||"")),e(i).trigger("invalid"+y,[f,r.msg]))),d.debug&&Y.log("   "+n._i+": "+f+" => "+(g||r.msg||g)),u||g&&n._i<n.rules.length-1?(n._i++,o._checkRule(i,n)):(n._i=0,o._validatedField(i,n,r))},_checkRule:function(i,n){var s,r,a=this,l=n.key,u=n.rules[n._i],c=u.method,d=u.params;a.submiting&&a.deferred[l]||(r=n.old,n._r=c,s=!n.must&&r.ret!==t&&r.rule===u&&r.id===i.id&&i.value&&r.value===i.value?r.ret:(o(i,c)||a.rules[c]||P).call(a,i,d,n),z(s)&&X(s.then)?(a.deferred[l]=s,!a.checkOnly&&a.showMsg(i,{type:"loading",msg:a.options.loadingMsg},n),s.then(function(s,l,o){var c,d=o.responseText,f=n.dataFilter||a.options.dataFilter;"json"===this.dataType?d=s:"{"===d.charAt(0)&&(d=e.parseJSON(d)||{}),X(f)||(f=function(e){return Q(e)||z(e)&&("error"in e||"ok"in e)?e:t}),c=f(d),c===t&&(c=f(d.data)),r.rule=u,r.ret=c,a._validatedRule(i,n,c)},function(e,t){a._validatedRule(i,n,a.messages[t]||t)}).always(function(){delete a.deferred[l]}),n.isValid=t):a._validatedRule(i,n,s))},_validate:function(i,n){if(!i.disabled&&null===K(i,N)){var s,r=this,a={},l=n.group,u=n.isValid=!0;if(n.rules||r._parse(i),r.options.debug&&Y.info(n.key),l&&(s=l.callback.call(r,l.$elems),s!==t&&(r.hideMsg(l.target,{},n),s===!0?s=t:(n._i=0,n._r="group",u=!1,r.hideMsg(i,{},n),e.extend(a,l)))),u&&!n.required&&!n.must&&!i.value){if("tip"===K(i,E))return;if(!f(i))return r._validatedField(i,n,{isValid:!0}),t}s!==t?r._validatedRule(i,n,s,a):n.rule&&r._checkRule(i,n)}},test:function(e,i){var n,s,r,a=this,l=D.exec(i);return l&&(s=l[1],s in a.rules&&(r=l[2]||l[3],r=r?r.split(", "):t,n=a.rules[s].call(a,e,r))),n===!0||n===t||null===n},getRangeMsg:function(e,t,i,n){if(t){var s=this,r=s.messages[i]||"",a=t[0].split("~"),l=a[0],u=a[1],o="rg",c=[""],d=+e===+e;if(2===a.length){if(l&&u){if(d&&e>=+l&&+u>=e)return!0;c=c.concat(a)}else if(l&&!u){if(d&&e>=+l)return!0;c.push(l),o="gte"}else if(!l&&u){if(d&&+u>=e)return!0;c.push(u),o="lte"}}else{if(e===+l)return!0;c.push(l),o="eq"}return r&&(n&&r[o+n]&&(o+=n),c[0]=r[o]),s.renderMsg.apply(null,c)}},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},_getDisplay:function(e,t){return Q(t)?t:X(t)?t.call(this,e):""},_getMsgOpt:function(t){return e.extend({},this.msgOpt,Q(t)?{msg:t}:t)},_getMsgDOM:function(t,i){var n,s,r,a=e(t);if(a.is(":input")?(r=i.target||K(t,j),r&&(r=X(r)?r.call(this,t):this.$el.find(r),r.length&&(r.is(":input")?t=r.get(0):n=r)),n||(s=!f(t)&&t.id?t.id:t.name,n=this.$el.find(i.wrapper+"."+x+'[for="'+s+'"]'))):n=a,!n.length)if(a=this.$el.find(r||t),n=e("<"+i.wrapper+">").attr({"class":x+(i.cls?" "+i.cls:""),style:i.style||"","for":s}),f(t)){var l=a.parent();n.appendTo(l.is("label")?l.parent():l)}else n[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](a);return n},showMsg:function(i,n,s){var r,a=this,l=a.options;if("object"==typeof i&&!i.nodeName&&!n)return e.each(i,function(e,t){var i=a.elements[e]||a.$el.find(':input[name="'+e+'"]')[0];a.showMsg(i,t)}),t;if(n=a._getMsgOpt(n),(n.msg||n.showOk)&&(i=e(i).get(0),e(i).is(S)&&(K(i,E,n.type),s=s||a.getField(i),s&&(n.style=s.msgStyle||n.style,n.cls=s.msgClass||n.cls,n.wrapper=s.msgWrapper||n.wrapper,n.target=s.target||l.target)),r=(s||{}).msgMaker||l.msgMaker)){var u=a._getMsgDOM(i,n),o=u[0].className;!B.test(o)&&u.addClass(n.cls),G&&"bottom"===n.pos&&(u[0].style.marginTop=e(i).outerHeight()+"px"),u.html(r.call(a,n))[0].style.display="",X(n.show)&&n.show.call(a,u,n.type)}},hideMsg:function(t,i,n){var s=this,r=s.options;t=e(t).get(0),i=s._getMsgOpt(i),e(t).is(S)&&(K(t,E,null),K(t,A,null),n=n||s.getField(t),n&&(i.wrapper=n.msgWrapper||i.wrapper,i.target=n.target||r.target));var a=s._getMsgDOM(t,i);a.length&&(X(i.hide)?i.hide.call(s,a,i.type):a[0].style.display="none")},setMsg:function(e){new s(e,this.messages)},setRule:function(t){new n(t,this.rules),e.map(this.fields,function(e){e.old={}})},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,K(e,F)&&i._parse(e),i.fields[t]},setField:function(e,t){var i={};Q(e)?i[e]=t:z(e)&&(i=e),this._initFields(i)},isFormValid:function(){var e=this.fields;for(var t in e)if(!e[t].isValid)return e[t].isValid;return!0},holdSubmit:function(e){this.submiting=e===t||e},cleanUp:function(){this._reset(1)},destroy:function(){this._reset(1),this.$el.off(v).removeData(h),K(this.$el[0],N,this._novalidate)}},e(document).on("focusin",":input["+F+"]",function(e){u(e)}).on("click","input,button",function(e){var t=this,i=t.name;if(t.form)if("submit"===t.type)p=t,null!==K(t,N)&&(m=!0);else if(i&&f(t)){var n=t.form.elements[i];n.length&&(n=n[0]),K(n,F)&&u(e)}}).on("submit validate","form",function(t){if(null===K(this,N)){var i,n=e(this);n.data(h)||(i=n[h]().data(h),e.isEmptyObject(i.fields)?(K(this,N,N),n.off(v).removeData(h)):i._submit(t))}}),new n({required:function(t,i){var n=e.trim(t.value),s=!0;if(i)if(1===i.length){if(!n&&!this.test(t,i[0]))return K(t,C,null),null;K(t,C,!0)}else"not"===i[0]&&e.map(i.slice(1),function(t){n===e.trim(t)&&(s=!1)});return s&&!!n},integer:function(e,t){var i,n="0|",s="[1-9]\\d*",r=t?t[0]:"*";switch(r){case"+":i=s;break;case"-":i="-"+s;break;case"+0":i=n+s;break;case"-0":i=n+"-"+s;break;default:i=n+"-?"+s}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[r]},match:function(t,i,n){if(i){var s,r,a,l,u,o,c,d=this,f="eq";if(1===i.length?a=i[0]:(f=i[0],a=i[1]),u="#"===a.charAt(0)?a:':input[name="'+a+'"]',o=d.$el.find(u)[0]){if(c=d.getField(o),s=t.value,r=o.value,n._match||(d.$el.on("valid"+_+v,u,function(){e(t).trigger("validate")}),n._match=c._match=1),!n.required&&""===s&&""===r)return null;if(i[2]&&("date"===i[2]?(s=g(s),r=g(r)):"time"===i[2]&&(s=+s.replace(":",""),r=+r.replace(":",""))),"eq"!==f&&!isNaN(+s)&&isNaN(+r))return!0;switch(l=d.messages.match[f].replace("{1}",d._getDisplay(t,c.display||a)),f){case"lt":return+r>+s||l;case"lte":return+r>=+s||l;case"gte":return+s>=+r||l;case"gt":return+s>+r||l;case"neq":return s!==r||l;default:return s===r||l}}}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i,n){if(f(t)){var s,r,a=this;return r=a.$el.find('input[name="'+t.name+'"]').filter(function(){var t=this;return!s&&f(t)&&(s=t),!t.disabled&&t.checked&&e(t).is(":visible")}).length,i?a.getRangeMsg(r,i,"checked"):!!r||c(s,n,"")||a.messages.required}},length:function(e,t){var i=e.value,n=(t[1]?i.replace(U,"xx"):i).length;return this.getRangeMsg(n,t,"length",t[1]?"_2":"")},remote:function(t,i){if(i){var n,s=this,r=L.exec(i[0]),a=r[2],l=(r[1]||"POST").toUpperCase(),u={};return u[t.name]=t.value,i[1]&&e.map(i.slice(1),function(t){var i,n=t.split(":");t=e.trim(n[0]),i=e.trim(n[1]||"")||t,u[t]=s.$el.find("#"===i.charAt(0)?i:':input[name="'+i+'"]').val()}),u=e.param(u),"POST"===l&&(n=a.indexOf("?"),-1!==n&&(u+="&"+a.substring(n+1,a.length),a=a.substring(0,n))),e.ajax({url:a,type:l,data:u,cache:!1})}},filter:function(e,t){e.value=e.value.replace(t?RegExp("["+t[0]+"]","gm"):H,"")}}),i.config=function(t){e.each(t,function(e,t){"rules"===e?new n(t):"messages"===e?new s(t):Z[e]=t})},i.setTheme=function(t,i){z(t)?e.each(t,function(e,t){et[e]=t}):Q(t)&&z(i)&&(et[t]=i)},e[h]=i});
