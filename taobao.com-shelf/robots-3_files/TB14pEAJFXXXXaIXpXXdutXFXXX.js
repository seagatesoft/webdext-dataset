(function(e,t,n){function o(e){var t=e.match(s);return(t?t[0]:".")+"/"}function u(e,t){var n;return e.indexOf("./")===0?(e=e.substr(2),t=o(t),n=t+e):e.indexOf("../")===0&&(e=e.substr(3),t=o(o(t).replace(/\/$/,"")),n=t+e),e.charAt(0)==="."?u(e,t):n||e}function a(e){return e.charAt(0)!=="/"&&(e="/"+e),e}function p(e,t,n){function s(e){var t=r.resolve(e,i.id),n=h[t];return n?n.exports||n._compile():console.log("_ent shouts: Module missing!",n),n.exports}var i=this;this.id=e,this.dependencies=t,this.factory=n,this.require=s,s.async=s.load=function(e,t){i._use(e,t)}}function v(e,t){r.mix(t,r,!0,"mix iF iA iS iPO fetch".split(" ")),t.substitute=function(e,r,i,s){return!t.iS(e)||!t.iPO(r)?e:e.replace(i||/\\?\{([^{}]+)\}/g,function(e,t){return e.charAt(0)==="\\"?e.slice(1):r[t]!==n?r[t]:s?e:""})}}if(t&&/cyj.me\/ent/.test(t.about))return;t=e._ent={about:"http://cyj.me/ent",util:{},config:{timeout:3e4,charset:"utf-8"},cache:{}};var r=t.util,i=t.config;(function(){function c(e,t){e.nodeName==="SCRIPT"?h(e,t):p(e,t)}function h(e,t){e.onload=e.onerror=e.onreadystatechange=function(){a.test(e.readyState)&&(e.onload=e.onerror=e.onreadystatechange=null,e=n,t())}}function p(e,t){g||y?(r.log("Start poll to fetch css"),setTimeout(function(){d(e,t)},1)):e.onload=e.onerror=function(){e.onload=e.onerror=null,e=n,t()}}function d(e,t){var n;if(g)e.sheet&&(n=!0);else if(e.sheet)try{e.sheet.cssRules&&(n=!0)}catch(r){r.name==="NS_ERROR_DOM_SECURITY_ERR"&&(n=!0)}setTimeout(function(){n?t():d(e,t)},1)}function v(){}var r=t.util,i=e.document;if(!i)return;var s=i.head||i.getElementsByTagName("head")[0]||i.documentElement,o=s.getElementsByTagName("base")[0],u=/\.css(?:\?|$)/i,a=/loaded|complete|undefined/,f,l;r.fetch=function(e,t,n){var i=u.test(e),a=document.createElement(i?"link":"script");if(n){var l=r.iF(n)?n(e):n;l&&(a.charset=l)}c(a,t||v),i?(a.rel="stylesheet",a.href=e):(a.async="async",a.src=e),f=a,o?s.insertBefore(a,o):s.appendChild(a),f=null},r.getCurrentScript=function(){if(f)return f;if(l&&l.readyState==="interactive")return l;var e=s.getElementsByTagName("script");for(var t=0;t<e.length;t++){var n=e[t];if(n.readyState==="interactive")return l=n,n}},r.getScriptAbsoluteSrc=function(e){return e.hasAttribute?e.src:e.getAttribute("src",4)},r.importStyle=function(e,t){if(t&&i.getElementById(t))return;var n=i.createElement("style");t&&(n.id=t),s.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(i.createTextNode(e))},r.scriptOnload=h;var m=navigator.userAgent,g=Number(m.replace(/.*AppleWebKit\/(\d+)\..*/,"$1"))<536,y=m.indexOf("Firefox")>0&&!("onload"in document.createElement("link"))})();var s=/.*(?=\/.*$)/,f=e.location;if(f){var l=f.protocol+"//"+f.host+a(f.pathname);r.pageUri=l}r.resolve=u;var c=r.mix=function(e,t,r,i){if(!e||!t)return e;r===n&&(r=!0);var s,o,u;if(i&&(u=i.length))for(s=0;s<u;s++)o=i[s],o in t&&(r||!(o in e))&&(e[o]=t[o]);else for(o in t)if(r||!(o in e))e[o]=t[o];return e};c(r,function(){var t=Object.prototype.toString,n={iF:function(e){return t.call(e)==="[object Function]"},iA:function(e){return t.call(e)==="[object Array]"},iS:function(e){return t.call(e)==="[object String]"},iPO:function(e){return e&&t.call(e)==="[object Object]"&&!e.nodeType&&!e.setInterval}};return e.console||(e.console={}),console.log||(console.log=function(){}),n}());var h=t.cache={};r.mix(p.prototype,{_use:function(e,t){if(r.iS(e)&&/^https?:|^\/\//.test(e))r.fetch(e,t,i.charset);else{var n=this;r.iS(e)&&(e=[e]);var s=[],o;for(o=0;o<e.length;o++)s[o]=n.require(e[o],n.id);r.iF(t)&&t.apply(null,s)}},_compile:function(){var e=this,t=e.factory,i;e.exports={},delete e.factory,r.iF(t)?(i=t(e.require,e.exports,e),i!==n&&(e.exports=i)):t!==n&&(e.exports=t)}});var d=new p(r.pageUri);t.define=function(e,t,n){if(r.iF(t)||r.iPO(t))n=t,t=[];var i=new p(e,t,n);h[e]=i},t.use=function(e,t){d._use(e,t)},t.define("ent",[],v),typeof define=="function"&&define("ent",[],v)})(this,this._ent);
_ent.define("cc/util/grade",[],function(e,t){var n="b_red_1.gif",r=1;t.getGrade=function(e,t){e<=10?(n="b_red_1.gif",r=1):e<=40?(n="b_red_2.gif",r=2):e<=90?(n="b_red_3.gif",r=3):e<=150?(n="b_red_4.gif",r=4):e<=250?(n="b_red_5.gif",r=5):e<=500?(n="s_blue_1.gif",r=6):e<=1e3?(n="s_blue_2.gif",r=7):e<=2e3?(n="s_blue_3.gif",r=8):e<=5e3?(n="s_blue_4.gif",r=9):e<=1e4?(n="s_blue_5.gif",r=10):e<=2e4?(n="s_cap_1.gif",r=11):e<=5e4?(n="s_cap_2.gif",r=12):e<=1e5?(n="s_cap_3.gif",r=13):e<=2e5?(n="s_cap_4.gif",r=14):e<=5e5?(n="s_cap_5.gif",r=15):e<=1e6?(n="s_crown_1.gif",r=16):e<=2e6?(n="s_crown_2.gif",r=17):e<=5e6?(n="s_crown_3.gif",r=18):e<=1e7?(n="s_crown_4.gif",r=19):e>1e7&&(n="s_crown_5.gif",r=20);var i="http://pics.taobaocdn.com/newrank/"+n;return t?[i,r]:i}});
_ent.define("cc/datasource/p4p/rosetta",["cc/util/tps","cc/util/grade"],function(require,exports){function str2obj(e){var t=e.split(";")||"",n,r,i={};if(!t)return i;for(n=0;n<t.length;n++)r=t[n].split(":"),i[r[0]]=r[1]||"";return i}function ds_format_item(o,config){var k,v,r={},size,width,height,img,imgsize=config.imgsize,decimal=config.decimal,adgextension=str2obj(o.ADGEXTENSION||""),sellerextension=str2obj(o.SELLEREXTENSION||""),tps_alias=_tps.alias(imgsize);typeof decimal=="undefined"&&(decimal=2);for(k in DS_MAP){v=DS_MAP[k];if(v=="ds_img"&&o[k])o[k]=o[k].replace(hosts_re,"//img.alicdn.com"),img=r[v]={},imgsize?img.src=_tps.addSize(o[k],imgsize):img.src=o[k],o.DISPLAY_RESOLUTION&&(size=o.DISPLAY_RESOLUTION.split("*"),width=parseInt(size[0],10),height=parseInt(size[1],10),img.width=width||0,img.height=height||0);else if(v=="ds_price")r[v]=!!o[k]&&NUMBER_PTN.test(o[k])?(o[k]/100).toFixed(decimal):o[k];else if(v=="ds_free")r[v]=+adgextension[k]||"",o.POSTFEE&&(r[v]=o.POSTFEE=="0");else if(v=="ds_rank"){var grade=_grade.getGrade(o[k],!0);r[v]=grade[0],r.ds_grade=grade[1],r.GRADE=o[k]}else if(v=="ds_mall")r[v]=o[k],r.ds_istmall=o[k]==="1";else if(v=="ds_isglobal")r[v]=o[k]==="1";else if(v=="ds_isgold")r[v]=o[k]==="1";else if(v=="ds_sevenday")r[v]=+sellerextension[k]||"";else if(v=="ds_matchScore")r[v]=sellerextension[k]||"";else if(v==="ds_creatives"){var JSON=window.JSON,tmp;o[k]&&(o[k].niutiedata||o[k].NIUTIEDATA)&&(tmp=o[k].niutiedata||o[k].NIUTIEDATA||"{}",JSON&&JSON.parse?r.ds_niutiedata=JSON.parse(window.unescape(tmp).replace(/&quot;/g,'"')):(eval("var niutieData = "+window.unescape(tmp).replace(/&quot;/g,'"')),r.ds_niutiedata=niutieData)),!img&&o[k]&&o[k].IMGURL&&(r.ds_img={src:o[k].IMGURL.replace(hosts_re,"//img.alicdn.com").replace(/[^_]+\.(jpg|gif)$/,"")+tps_alias+".jpg"},r.ds_title=o[k].TITLE),o[k]&&(r.SUBTITLE1=o[k].SUBTITLE1,r.SUBTITLE2=o[k].SUBTITLE2,r.SUBLINKURL1=o[k].SUBLINKURL1,r.SUBLINKURL2=o[k].SUBLINKURL2),r[v]={}}else if(v==="AUCTIONTAG"){if(o[k]){var tags=o[k].split(",");if(window.MBOX&&MBOX.p4pconfig||config.tmall){if(config.tmall)var now=+(new Date);else var now=MBOX.p4pconfig.time*1e3;if(now>+(new Date(2016,4,7,0))&&now<+(new Date(2016,4,13,0))){if(contains(tags,"88706")||contains(tags,"32385"))r.xinshili=!0;contains(tags,"35521")&&(r.nhhongbao=!0)}}r.ds_isqiye=contains(tags,"27137")}r.has12=r.xinshili||r.nhhongbao,r.hasother12=r.nhhongbao,r.is12=r.xinshili}else if(v==="auction_tag"){if(adgextension.auction_tag&&!config.kgb){var tags=adgextension.auction_tag.split(" ");if(contains(tags,"88706")||contains(tags,"32385"))r.xinshili=!0;contains(tags,"35521")&&(r.nhhongbao=!0),r.has11=r.xinshili||r.nhhongbao}}else v==="COMSMARTSHOW"?parseSmartData(o[k],r):r[v]=o[k]}return r}function ds_format(e,t){var n,r=[];if(!ent.iA(e))return e;for(n=0;n<e.length;n++)r.push(ds_format_item(e[n],t));return r}function contains(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return!0;return!1}function parseSmartData(e,t){if(!window.KISSY||!e)return;KISSY.each(e,function(e,n){t.hasNoVitalProps=!0,n==="vitalprop"&&e&&(t[n]=KISSY.map(e.split(";"),function(e){t.hasNoVitalProps=!1;var n=e.split(":");return{name:n[0],value:n[1]}}));if(n==="shopath"||n==="promo")t[n]=KISSY.map(e.slice(0,-1).split(";"),function(e){if(e){if(n==="shopath")return{className:e,value:shopathMap[e]};var t=e.split(":");return{className:t[0],value:t[1]}}})})}var ent=require("ent"),_tps=require("cc/util/tps"),_grade=require("cc/util/grade"),hosts_re=/^http:\/\/(img\d*\.taobaocdn\.com|g\.search\d*\.alicdn\.com)/,DS_MAP={TBGOODSLINK:"ds_img",EURL:"ds_clickurl",TITLE:"ds_title",ADGTITLE:"ds_adgtitle",GOODSPRICE:"ds_price",SALEPRICE:"ds_promo",GOLDENSELLER:"ds_isgold",SELL:"ds_sell",isPostFree:"ds_free",LOCATION:"ds_location",WANGWANGID:"ds_wangwang",sevendaysRefundment:"ds_sevenday",ISMALL:"ds_mall",RESOURCEID:"ds_itemid",SHOPID:"ds_shopid",SELLERID:"ds_sellerid",ISGLOBAL:"ds_isglobal",REDKEYS:"ds_redkeys",matchScore:"ds_matchScore",STATICSCORE:"ds_score",NIUTIEDATA:"ds_niutiedata",SWORD:"ds_sword",SWURL:"ds_swurl",CREATIVEELEMENTS:"ds_creatives",GRADE:"ds_rank",COMMENT:"ds_comment",DESC:"ds_desc",AUCTIONTAG:"AUCTIONTAG",auction_tag:"auction_tag",COMSMARTSHOW:"COMSMARTSHOW",SQUANTITY1111:"SQUANTITY1111",HASCOUPON:"hasCoupon"},NUMBER_PTN=/^\d+$/,shopathMap={shopBuy:"\u8d2d\u4e70\u8fc7\u7684\u5e97",shopFav:"\u6536\u85cf\u8fc7\u7684\u5e97",shopCart:"\u52a0\u8d2d\u7269\u8f66\u7684\u5e97",shopBrow:"\u6d4f\u89c8\u8fc7\u7684\u5e97"};exports.format=ds_format});
_ent.define("cc/datasource/mbox_staobao",["cc/util/tps","cc/util/params","./p4p/rosetta"],function(e,t){var n=e("cc/util/tps"),r=e("ent"),s=e("cc/util/params"),o=e("./p4p/rosetta");t.getData=function(t,n,u){function g(e){var r={imgsize:t.datasource[n].qp_imgsize};return r.kgb=!0,o.format(e,r)}var a=t.id,f=t.uid;if(window.MBOX&&MBOX[a].data){t.data=MBOX[a].data;for(i in t.data){var l=t.data[i];t.data[i]={items:g(l)}}t.qs=MBOX[a].qs,MBOX[a].data=null,u()}else{var c=t.datasource[n],h=n.match(/\d+/)[0],p="tbcc_p4p_"+f.replace(/[^a-z0-9]/gi,"_")+ +(new Date),d=r.substitute(c.ds_host,{qp_count:c.qp_count,qp_callback:p}),v=document.getElementById("tbcc-c-"+t.uid);if(v){var m=v.getAttribute("data-args");m&&(d=s.replace(d,s.get(m)))}window.MBOX&&MBOX[a].qs&&(t.qs=MBOX[a].qs,d=s.replace(d,t.qs[h-1])),e.async(d,function(){t.data=t.data||{},t.data[n]=t.data[n]||{},t.data[n].items=g(window[p]),t.rawData=window[p];try{delete window[p]}catch(e){window[p]=null}t.data[n].items?u():t.emit("render",t)})}}});
_ent.define("cc/util/tps",[],function(e,t){function s(e,n){return e.replace(/(?:_(?:m|b|s|sum|summ2?|search|sharpen|\d+x\d+(?:xz)?)\.(?:jpe?g|gif|png))?(?:_.webp)?$/,"")+"_"+t.alias(n)+".jpg"+(r?"_.webp":"")}var n=new Image;n.src="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA";var r=n.height===1,i=[[16,16],[20,20],[24,24],[30,30],[36,36],[40,40],[60,60],[63,63,"60x30"],[70,70],[80,80,"sum"],[65,65,"81x65"],[84,84,"80x40"],[90,90,"110x90"],[100,100],[110,110],[120,120,"m"],[130,130],[145,145],[160,160],[170,170],[180,180],[190,190],[200,200],[210,210],[220,220],[230,230],[240,240],[250,250],[270,270],[290,290],[300,300],[310,310],[315,315],[320,320],[350,350],[360,360],[500,500],[620,620,"620x10000"],[670,670]];t.alias=function(e){var t,n,r=i,s=r.length,o=parseInt(e,10);for(t=0;t<s;t++){n=r[t];if(n[0]==o)break}return t===s?"":n[2]||o+"x"+o},t.addSize=function(e,t){if(!e)return e;if(!e.push)return s(e,t);for(var n=0;l=e.length,n<l;n++)e[n].src=s(e[n].src,t)}});
_ent.define("cc/util/params",[],function(e,t){var n=e("ent");t.replace=function(e,t,r){if(!t)return e;var i="=",s="?",o="&",u="#",a=!!r&&!!r.force,f=e.split(s),l=f[0],c=(f[1]||"").split(u),h=c[1]||"",p,d,v,m,g;t=n.mix({},t),c=(c[0]||"").split(o);for(v=0;v<c.length;v++){p=c[v].split(i);for(m in t){g=t[m]||"",d=p[0]===m;if(d){g=n.iF(g)?g(p[1]):g;if(!!g||a)p[1]=g;c[v]=p.join(i);break}}d&&delete t[m]}for(m in t)g=t[m]||"",g=n.iF(g)?g(""):g,!g||(p=m+i+g,c.push(p));return e=l+s+c.join(o),h&&(e+=u+h),e},t.get=function(e,t){if(!e)return{};var r=e.split("#")[0].split("?")[1]||"",i=r.split("&"),s,o,u,a,f=n.iS(t),l=f?"":{};if(!r)return l;for(u=0;u<i.length;u++){s=i[u],o=s.split("=");if(!s)continue;if(!t)l[o[0]]=o[1]||"";else if(f&&o[0]===t)l=o[1];else for(a=0;a<t.length;a++)o[0]===t[a]&&(l[o[0]]=o[1]||"")}return l}});
_ent.define("cc/util/et",[],function(e,t,n){function s(){}function o(e,t){return!!e&&e.nodeType==t}var r=e("ent"),i=1;r.mix(s,{is:o,addClass:function(e,t){if(!o(e,i)||!t)return;if(!e.className){e.className=t;return}s.hasClass(e,t)||(e.className+=" "+t)},removeClass:function(e,t){if(!o(e,i)||!e.className||!t)return;var n=e.className.split(" "),r;for(r=0;r<n.length;r++)if(t===n[r])break;n.splice(r,1),e.className=n.join(" ")},hasClass:function(e,t){if(!o(e,i)||!e.className||!t)return!1;var n=e.className.split(" "),r;for(r=0;r<n.length;r++)if(n[r]===t)return!0;return!1},siblings:function(e,t){if(!o(e,i))return;var n=e.nextSibling;while(n)o(n,i)&&t(n),n=n.nextSibling;n=e.previousSibling;while(n)o(n,i)&&t(n),n=n.previousSibling},children:function(e){if(!o(e,i))return;var t=e.childNodes,n,r,s=t.length,u=[];for(n=0;n<s;n++)r=t[n],o(r,i)&&u.push(r);return u},index:function(e){if(!o(e,i)||!e.parentNode)return-1;var t=0,n=e.parentNode.firstChild;while(n!==e)o(n,i)&&t++,n=n.nextSibling;return t},css:function(e,t){if(!o(e,i)||!r.iPO(t))return;var n;for(n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n])},first:function(e){var t,n=0;do{t=e[n++];if(o(t,i))return t}while(n<e.length)},last:function(e){var t,n=e.length-1;do{t=e[n--];if(o(t,i))return t}while(n>=0)},find:function(e,t){return e.getElementsByTagName(t)},text:function(e,t){if(typeof t=="undefined")return e.innerText||e.textContent;typeof e.innerText=="undefined"?e.innerText=t:e.textContent=t},html:function(e,t){if(typeof t=="undefined")return e.innerHTML;e.innerHTML=t},next:function(e,t){while(e=e.nextSibling)if(o(e,i))if(!t||s.match(e,t))break;return e},match:function(e,t){return e.tagName.toLowerCase()===t},version:"0.1"}),n.exports=s});
_ent.define("cc/util/hlight",["cc/util/et"],function(e,t){function i(e){return e}function s(e){return e.replace(/^\s*|\s*$/g,"")}function o(e,t,n){var i=/[-\\\/?!.*+^$\[\]\(\)\{\}\<\>=:|]/ig;r.iA(t)&&(t=t.join(" "));if(s(t)==="")return e;try{t=t.replace(i,function(e){return"\\"+e}),t=s(t).replace(/\s+/ig,"|"),e=e.replace(new RegExp("("+t+")","ig"),n)}catch(o){}return e}var n=e("cc/util/et"),r=e("ent");t.light=function(e,t){if(!t||!t.length)return e;var r,i,s,u=t[0].ds_redkeys;if(!u||!u.length)return e;i=document.createElement("div"),n.html(i,e),s=n.find(i,"a");for(r=0;r<s.length;r++)s[r].className.indexOf("redtitle")>-1&&n.html(s[r],o(s[r].innerHTML,u,'<span class="redkey">$1</span>'));return i.innerHTML}});
_ent.define("cc/dataservice",[],function(e,t){t.getData=function(t,n,r){var i="cc/datasource/"+t.datasource[n].ds_sn;e.async(i,function(e){e.getData(t,n,function(){t.emit("getData",t,n),r()})})}});
_ent.define("cc/templets/meta",[],function(e,t){function n(e,t){t=t||{};var r=e.css.length,i="",s="",o="",u=0;for(var a=0;a<r;a++){var f=e.css.charAt(a);switch(f){case"{":u++,s+=f;break;case"}":u--,s+=f,u===0&&(t.asIs?i=i.replace(/\./g,"#tbcc-c-"+e.uid+" ."):i=i.replace(/\./g,"."+e.uid+"-"),/^@media/.test(i)&&(s="{"+n({css:s.replace(/^\{|\}$/g,""),uid:e.uid})+"}"),o+=i+s+"\n",i=s="");break;default:u>0?s+=f:i+=f}}return o.replace(RegExp("\\\\\\."+e.uid+"-","g"),".")}t.attachStyle=function(e,t){var r=e.uid,i="j-"+r+"-css",s=e.doc||document,o=s.getElementsByTagName("body")[0],u=s.createElement("style"),a=s.getElementById(i),f=n(e,t),l=s.createElement("div");if(a){if(e.info.kissy)return;a.parentNode.removeChild(a)}u.type="text/css",u.id=i,l.appendChild(u),u.styleSheet?u.styleSheet.cssText=f:u.appendChild(s.createTextNode(f)),o.appendChild(l)}});
var Mustache=function(){var e=function(){};return e.prototype={otag:"{{",ctag:"}}",pragmas:{},buffer:[],pragmas_implemented:{"IMPLICIT-ITERATOR":!0},context:{},render:function(e,t,n,r){r||(this.context=t,this.buffer=[]);if(!this.includes("",e)){if(r)return e;this.send(e);return}e=this.render_pragmas(e);var i=this.render_section(e,t,n);if(r)return this.render_tags(i,t,n,r);this.render_tags(i,t,n,r)},send:function(e){e!=""&&this.buffer.push(e)},render_pragmas:function(e){if(!this.includes("%",e))return e;var t=this,n=new RegExp(this.otag+"%([\\w-]+) ?([\\w]+=[\\w]+)?"+this.ctag);return e.replace(n,function(e,n,r){if(!t.pragmas_implemented[n])throw{message:"This implementation of mustache doesn't understand the '"+n+"' pragma"};t.pragmas[n]={};if(r){var i=r.split("=");t.pragmas[n][i[0]]=i[1]}return""})},render_partial:function(e,t,n){e=this.trim(e);if(!n||n[e]===undefined)throw{message:"unknown_partial '"+e+"'"};return typeof t[e]!="object"?this.render(n[e],t,n,!0):this.render(n[e],t[e],n,!0)},render_section:function(e,t,n){if(!this.includes("#",e)&&!this.includes("^",e))return e;var r=this,i=new RegExp(this.otag+"(\\^|\\#)\\s*(.+)\\s*"+this.ctag+"\n*([\\s\\S]+?)"+this.otag+"\\/\\s*\\2\\s*"+this.ctag+"\\s*","mg");return e.replace(i,function(e,i,s,o){var u=r.find(s,t);if(i=="^")return!u||r.is_array(u)&&u.length===0?r.render(o,t,n,!0):"";if(i=="#")return r.is_array(u)?r.map(u,function(e){return r.render(o,r.create_context(e),n,!0)}).join(""):r.is_object(u)?r.render(o,r.create_context(u),n,!0):typeof u=="function"?u.call(t,o,function(e){return r.render(e,t,n,!0)}):u?r.render(o,t,n,!0):""})},render_tags:function(e,t,n,r){var i=this,s=function(){return new RegExp(i.otag+"(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?"+i.ctag+"+","g")},o=s(),u=function(e,r,u){switch(r){case"!":return"";case"=":return i.set_delimiters(u),o=s(),"";case">":return i.render_partial(u,t,n);case"{":return i.find(u,t);default:return i.escape(i.find(u,t))}},a=e.split("\n");for(var f=0;f<a.length;f++)a[f]=a[f].replace(o,u,this),r||this.send(a[f]);if(r)return a.join("\n")},set_delimiters:function(e){var t=e.split(" ");this.otag=this.escape_regex(t[0]),this.ctag=this.escape_regex(t[1])},escape_regex:function(e){if(!arguments.callee.sRE){var t=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];arguments.callee.sRE=new RegExp("(\\"+t.join("|\\")+")","g")}return e.replace(arguments.callee.sRE,"\\$1")},find:function(e,t){function n(e){return e===!1||e===0||e}e=this.trim(e);var r;return n(t[e])?r=t[e]:n(this.context[e])&&(r=this.context[e]),typeof r=="function"?r.apply(t):r!==undefined?r:""},includes:function(e,t){return t.indexOf(this.otag+e)!=-1},escape:function(e){return e=String(e===null?"":e),e.replace(/&(?!\w+;)|["<>\\]/g,function(e){switch(e){case"&":return"&amp;";case"\\":return"\\\\";case'"':return'"';case"<":return"&lt;";case">":return"&gt;";default:return e}})},create_context:function(e){if(this.is_object(e))return e;var t=".";this.pragmas["IMPLICIT-ITERATOR"]&&(t=this.pragmas["IMPLICIT-ITERATOR"].iterator);var n={};return n[t]=e,n},is_object:function(e){return e&&typeof e=="object"},is_array:function(e){return Object.prototype.toString.call(e)==="[object Array]"},trim:function(e){return e.replace(/^\s*|\s*$/g,"")},map:function(e,t){if(typeof e.map=="function")return e.map(t);var n=[],r=e.length;for(var i=0;i<r;i++)n.push(t(e[i]));return n}},{name:"mustache.js",version:"0.3.0",to_html:function(t,n,r,i){var s=new e;i&&(s.send=i),s.render(t,n,r);if(!i)return s.buffer.join("\n")}}}();_ent.define("cc/mustache",[],function(e,t){t.name=Mustache.name,t.version=Mustache.version,t.to_html=function(){return Mustache.to_html.apply(this,arguments)}});
_ent.define("cc/templets/p4p/tb/staobao_08_20_right_smart7-2015-1111",["cc/mustache","cc/templets/meta","cc/dataservice","cc/util/hlight","cc/util/params","cc/util/tps"],function(e,t){function c(e,t){var i=e.data.ds1.items;for(var o=i.length-1;o>=0;o--)i[o].ds_img.lazy=o>=5&&!e.isInCC?"data-ks-lazyload":"src";var u=n.to_html(f,e,{item:l});e.sHTML=s.light(u,i),e.renderer.render(e),e.css=a,r.attachStyle(e),t()}function h(e){KISSY.use("node",function(t,n){var r=e.uid,i=function(e,n){return t.all(typeof e=="string"?e.replace(/\./g,"."+r+"-"):e,n)};i(".item").on("mouseenter",function(){i(this).addClass("item-hover")}).on("mouseleave",function(){i(this).removeClass("item-hover")}),KISSY.use("datalazyload",function(t,n){n(e.outerEle)})})}function p(e,t){KISSY.use("node",function(n,r){var i=e.uid,s=function(e,t){return n.all(typeof e=="string"?e.replace(/\./g,"."+i+"-"):e,t)};s(".item .imglink img").each(function(){this.attr("data-ks-lazyload")?this.attr("data-ks-lazyload",u.addSize(this.attr("data-ks-lazyload"),t)):this.attr("src",u.addSize(this.attr("src"),t))}),s(".global").removeClass("w200 w240 w270").addClass("w"+t)})}var n=e("cc/mustache"),r=e("cc/templets/meta"),i=e("cc/dataservice"),s=e("cc/util/hlight"),o=e("cc/util/params"),u=e("cc/util/tps"),a='.global {position: relative;background: #fff;text-align: left;font: 12px/1.5 tahoma,arial,\\5b8b\\4f53;}.global em,.global div,.global ul,.global li,.global p,.global span,.global a {margin: 0;padding: 0;}.global img {border: 0;}.global ul,.global li {list-style: none;}.global a {text-decoration: none;}.global em {font-style: normal;font-family: Arial;}.global .banner {position: relative;padding-top: 9px;height: 34px;line-height: 34px;border-bottom: 1px solid #E8E8E8;margin-bottom: 13px;font-weight: 600;font-size: 16px;}.banner a {color: #555;}.banner a:hover {color: #555;}.global .item-list {position: relative;}.item-list .item {position: relative;border: 1px solid #e5e5e5;margin-bottom: 10px;_height: 303px;}.global\\.w270 .item-list .item {_height: 303px;}.global\\.w240 .item-list .item {_height: 273px;}.global\\.w230 .item-list .item {_height: 263px;}.global\\.w200 .item-list .item {_height: 233px;}.item-list .item\\.item-hover {border: 1px solid #f40;}.imgwrap {overflow: hidden;background-color: #fff;text-align: center;}.global\\.w270 .imgwrap{height: 270px;}.global\\.w240 .imgwrap{height: 240px;}.global\\.w230 .imgwrap{height: 230px;}.global\\.w200 .imgwrap{height: 200px;}.imglink {display: table-cell;overflow: hidden;vertical-align: middle;text-align: center;*display: block;*font: normal 12px/1 arial;}.global\\.w270 .imglink{width: 268px;height: 270px;*font-size: 236px;}.global\\.w240 .imglink{width: 238px;height: 240px;*font-size: 219px;}.global\\.w230 .imglink{width: 228px;height: 230px;*font-size: 201px;}.global\\.w200 .imglink{width: 198px;height: 200px;*font-size: 175px;}.item img {vertical-align: middle;}.item .line1 {overflow: hidden;height: 18px;line-height: 18px;margin: 5px 10px;}.item .red {position: absolute;bottom: 28px;*bottom: 31px;left: 0;overflow: hidden;height: 104px;width: 100%;visibility: hidden;}.item\\.oneline .red {height: 75px;}.red .bgred {position: absolute;bottom: 0;left: 0;width: 100%;height: 104px;background: #fff;opacity: .9;filter: alpha(opacity=90);}.item\\.oneline .bgred {height: 75px;}.noprops .bgred {height: 34px !important;}.red .hover {position: absolute;bottom: 0;left: 0;height: 70px;line-height: 25px;cursor: pointer;color: #fff;width: 90%;padding: 0 0 0 10px;text-align: center;font-size: 12px;overflow: hidden;}.item\\.oneline .red .hover{height: 35px;}.red .hover:hover{color:#fff;}.item .price {color: #f40;font: 700 18px Verdana,Arial;float: left;height: 18px;line-height: 18px;}.global\\.w200 .item .price {font: 700 16px Verdana,Arial;}.item .price:hover {color: #f40;}.price em {font-family: Arial;font-weight: normal;margin-right: 3px;}.price .price-old {margin-left: 8px;}.price .price-old,.price .price-old em {color: #fff;text-decoration: line-through;font-weight: normal;font-size: 12px;}.item\\.item-hover .red {visibility: visible}.item .sell {color: #999;float: right;}.item .sell:hover {color: #999;}.item .sell em {color: #555;font-weight: bold;}.item .mall {float: left;display: block;width: 16px;height: 16px;background-position: -83px -130px;margin-right: 6px;margin-top: 2px;}.item .gold {float: left;display: block;width: 16px;height: 16px;background-position: -187px -57px;margin-right: 6px;margin-top: 2px;}.postfree, .mall, .gold, .hot,.mall2, .gold2, .hot2{background: url(//g.alicdn.com/tb/bsrp/0.13.0/assets/images/normal/service.png);-background-image: url(//g.alicdn.com/tb/bsrp/0.10.0/assets/images/png8/service.png);}.global .foot {position: relative;margin-top: 0px;height: 35px;}.foot a {position: absolute;right: 10px;width: 66px;height: 25px;border-radius: 1px;background: #F40;color: #FFF;text-align: center;text-decoration: none;line-height: 25px;}.foot a:hover {background: #f82800;}.item .property{display: inline-block;height: 25px;margin: 0 7px 10px 0;overflow: hidden;padding: 0 7px;border-radius: 5px;float: left;background: #f40;}.item .redtitle {display: block;position: absolute;bottom: 80px;overflow: hidden;color: #555;height: 15px;line-height: 15px;padding: 0 10px;font-weight: 700;}.item\\.oneline .redtitle {bottom: 45px;}.noprops .redtitle {bottom: 10px !important;}.line2 .redtitle:hover {color: #fff;}.item .go {position: absolute;bottom: 20px;right: 20px;color: #fff;}.item .shuang11bar {width: 100%;height: 24px;display: none;position: absolute;bottom: -25px;border: 1px solid #f40;margin-left: -1px;padding: 0 10px;border-top: 0;background: #fff;}.global\\.w270 .item .shuang11bar {width: 248px;}.global\\.w240 .item .shuang11bar {width: 218px;}.global\\.w200 .item .shuang11bar {width: 178px;}.item\\.item-hover\\.has12 .shuang11bar {display: block;z-index: 1;}.shuang11bar .shuang11bar-icons {height: 17px;overflow: hidden;}.item .xinshili,.item .nhhongbao{background: url(//img.alicdn.com/tfscom/TB11x7AJFXXXXcxXXXXXXXXXXXX-109-16.png) 0 0 no-repeat;height: 17px;display: block;float: left;margin-right: 5px;margin-top: 1px;}.item .xinshili {width: 46px;}.item .nhhongbao {width: 16px;background-position: -93px 0;}.item .SQUANTITY1111 {border-radius: 2px;color: #fff;padding: 0 3px;line-height: 16px;height: 16px;display: block;float: left;margin-right: 5px;margin-top: 1px;background-color: #27B597;}.item .mall2 {float: left;display: block;width: 16px;height: 16px;background-position: -83px -130px;margin-right: 6px;margin-top: 1px;}.item .gold2 {float: left;display: block;width: 16px;height: 16px;background-position: -187px -57px;margin-right: 6px;margin-top: 1px;}.item .qiye{float: left;width: 16px;height: 16px;margin: 1px 5px 0 0px;background-image: url("//img.alicdn.com/tfscom/TB1MD2xHVXXXXbxXXXXwu0bFXXX.png");}',f='<div class="{{uid}}-global w{{width}}">{{#data}}{{#ds1}}<div class="{{uid}}-banner"><a href="//re.taobao.com/search?keyword={{keyword}}&frontcatid={{frontcatid}}&isinner=1&refpid={{refpid}}" target="_blank">\u638c\u67dc\u70ed\u5356</a></div><ul class="{{uid}}-item-list">{{#items}}{{>item}}{{/items}}</ul>{{/ds1}}{{/data}}<div class="{{uid}}-foot"><a href="//re.taobao.com/search?keyword={{keyword}}&frontcatid={{frontcatid}}&isinner=1&refpid={{refpid}}" target="_blank">\u66f4\u591a\u70ed\u5356</a></div></div>',l='<li class="{{uid}}-item {{#hasother12}} has12 {{/hasother12}} oneline {{#hasNoVitalProps}}{{uid}}-noprops{{/hasNoVitalProps}}"><div class="{{uid}}-imgwrap"><a class="{{uid}}-imglink" target="_blank" href="{{ds_clickurl}}" title="{{ds_title}}">{{#ds_img}}<img {{lazy}}="{{src}}">{{/ds_img}}</a></div><div class="{{uid}}-line1">{{#xinshili}}<a class="{{uid}}-xinshili" href="{{ds_clickurl}}" target="_blank"></a>{{/xinshili}}{{#nhhongbao}}<a class="{{uid}}-nhhongbao" href="{{ds_clickurl}}" target="_blank"></a>{{/nhhongbao}}{{#ds_isgold}}<a target="_blank" href="{{ds_clickurl}}" class="{{uid}}-gold" title="\u91d1\u724c\u5356\u5bb6"> </a>{{/ds_isgold}}{{#ds_istmall}}<a target="_blank" href="{{ds_clickurl}}" class="{{uid}}-mall" title="\u5929\u732b"></a>{{/ds_istmall}}{{#ds_isqiye}}<a target="_blank" href="{{ds_clickurl}}" class="{{uid}}-qiye"></a>{{/ds_isqiye}}{{#ds_promo}}<a target="_blank" href="{{ds_clickurl}}" class="{{uid}}-price"><em>&yen;</em>{{ds_promo}}</a>{{/ds_promo}}{{^ds_promo}}<a target="_blank" href="{{ds_clickurl}}" class="{{uid}}-price"><em>&yen;</em>{{ds_price}}</a>{{/ds_promo}}<div><a target="_blank" href="{{ds_clickurl}}" class="{{uid}}-sell">\u9500\u91cf: <em>{{ds_sell}}</em></a></div></div><a class="{{uid}}-red" target="_blank" href="{{ds_clickurl}}"><div class="{{uid}}-bgred"></div><div class="{{uid}}-redtitle">{{ds_title}}</div><div class="{{uid}}-hover">{{#vitalprop}}<span class="{{uid}}-property">{{name}}: {{value}}</span>{{/vitalprop}}</div><div class="{{uid}}-go"></div></a></li>';t.render=function(e,n){var r=e.datasource.ds1,s=e.id;if(window.MBOX&&MBOX[s]){var u=MBOX[s];u.reload=function(){t.render(e,n)},u.resize=function(t){p(e,t)},e.width=u.width,r.qp_imgsize=u.width}else r.ds_host=o.replace(r.ds_host,{keyword:"shouji"}),e.isInCC=!0,e.width=e.info.width;i.getData(e,"ds1",function(){e.qs&&(e.keyword=e.qs[0].keyword,e.refpid=e.qs[0].pid,e.frontcatid=e.qs[0].frcatid),c(e,n),h(e)})}});
_ent.define("cc/renderer/tbcc",[],function(e,t){t.render=function(e){var t=document.getElementById("tbcc-c-"+e.uid),n,r=e.info,i="";if(!t)return;r.RWD||(r.width>0&&(i+="width:"+r.width+"px;"),r.height>0&&(i+="height:"+r.height+"px;")),r.overflow||(i+="overflow:hidden;"),t.style.cssText=i+"display:block;*zoom:1;",t.setAttribute("tbcc-templet",e.info.templet),n=t.firstElementChild||t.children[0],n.innerHTML=e.sHTML,e.outerEle=t,e.innerEle=n}});
_ent.define("cc/show",[],function(e,t){function r(e){var t={};e.on=function(e,n){(t[e]=t[e]||[]).push(n)},e.off=function(e,n){var r=t[e];!e&&!n&&(t={});if(r)if(n)for(var i=r.length-1;i>=0;i--)r[i]===n&&r.splice(i,1);else delete t[e]},e.emit=function(e){var n=t[e],r;if(n){n=n.slice();while(r=n.shift())r.apply(null,[].slice.call(arguments,1))}}}function i(t,r,i){var o="cc/templets/"+i.info.templet,u="cc/renderer/"+(window.tbcc_renderer||"tbcc"),a=i.info.hook,f=[o,u];!i.sans_hook&&a&&f.push("cc/vender/"+a),i.uid=r,i.id=t,e.async(f,function(e,t,r){for(var o in r)n.iF(r[o])&&i.on(o,r[o]);s(i,e,t)})}function s(e,t,r){e.renderer=r,t.render(e,function(){n.iF(t.bind)&&t.bind(e),n.iF(t.sync)&&t.sync(e),e.emit("render",e,!0)})}var n=e("ent");t.show=function(t,s,o){return n.iPO(o)||(o={}),r(o),window.setTimeout(function(){n.iPO(o.info)?i(t,s,o):e.async("cc/creations/"+t,function(e){i(t,s,n.mix(o,e))})},0),o}});
_ent.define('cc/creations/2016_5/130958', [], {"info":{"width":270,"templet":"p4p/tb/staobao_08_20_right_smart7-2015-1111","RWD":true,"kissy":true,"templet_id":4404,"xml":null},"datasource":{"ds1":{"ds_sn":"mbox_staobao","ds_host":"//tmatch.simba.taobao.com/?name=tbuad&com_acquired=vitalprop:5,prop_match_strategy:topn&o=j&pid=&count={qp_count}&keyword=&p4p={qp_callback}","qp_count":12,"qp_imgsize":270}}});