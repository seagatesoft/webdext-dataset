try{window.parent._dv_win['dvCallback_1498984352328258']($dv,window,'b65761a69ef7465d98fa35ebf8b6459a','tps10246.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}var newAvoValues = {cto: 5000};if ($dv.tags[$uid].AVO == undefined) $dv.tags[$uid].AVO = {};for (var id in newAvoValues){if (newAvoValues[id] != undefined){$dv.tags[$uid].AVO[id]= newAvoValues[id];}};$dv.tags[$uid].AVO.rpv = 1;$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.ViewabilityScriptVersion = 680;$dv.tags[$uid].set({"cvmSettings":{"adArea":"50","duration":"6000","measureType":"Consecutive","focus":"1"}});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":50,"ic":1,"fc":1,"adc":6000},"rp":{"pt":"iscvmvms","pr":"CustomViewabilityViewable","eid":6}});$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForMA', function() {var tag = $dv.tags[$uid];var targetWin = tag.t2tIframeWindow;if(!targetWin){var t2tIframeId = tag.t2tIframeId;if(t2tIframeId){var iFrame = window.parent.getElementById(t2tIframeId);if(iFrame){targetWin = iFrame.contentWindow;}}}if(targetWin){var dateNow = 0;if(Date.now){dateNow = Date.now();} else {dateNow = +new Date();}var message = {action : 'notifyMultipleAdsAdEntityInformationReady',adEntityInformation : {comparisonItems : [{name : 'cmp', value : 10291240, bitFlag : 1, maxTimeMS : 5000, eventToFire : 'CampaignMultipleAd'},{name : 'clcd', value : 971108, bitFlag : 2, maxTimeMS : 5000},{name : 'plmt', value : 10291244, bitFlag : 4, maxTimeMS : 5000},{name : 'mp', value : 1134, bitFlag : 8, maxTimeMS : 5000},{name : 'adv', value : 2285825, bitFlag : 16, maxTimeMS : 5000, eventToFire : 'LobMultipleAd'},{name : 'cmpMP', value : 308737207938, bitFlag : 32, maxTimeMS : 5000}],dvTagCreatedTS : tag.t2tIframeCreationTime,visitJSPostMessageTS : dateNow}};var stringifyFunc = null;if(window.JSON){stringifyFunc = window.JSON.stringify;} else {if(window.parent && window.parent.JSON){stringifyFunc = window.parent.JSON.stringify;}}if(!stringifyFunc){return;}var msgString = stringifyFunc(message);targetWin.postMessage(msgString, '*');setTimeout(function(){targetWin.postMessage(msgString, '*');}, 100);setTimeout(function(){targetWin.postMessage(msgString, '*');}, 500);}});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
            var stringifyFunc = null;
			if(window.JSON){
				stringifyFunc = window.JSON.stringify;
			} else {
				if(window.parent && window.parent.JSON){
					stringifyFunc = window.parent.JSON.stringify;
				}
			}
			if(!stringifyFunc){
				return;
			}
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 10291240},{name : 'plmt', value : 10291244}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });var impId = 'b65761a69ef7465d98fa35ebf8b6459a';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv?parent:window,h=0,i=0,k=[],l=[],m=10;
function o(a,c){function b(b){return f=function(g){g.preventDefault();if(!t[c*Math.pow(2,m*b)]&&(rhe(c*Math.pow(2,m*b)),t[Math.pow(2,m*b)]=!0,a)){events=u[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var u=[["click"],["focus"],"input change keyup textInput keypress paste".split(" "),["touchstart"]],t=[];t[c]=!1;if(a)for(var j=0;j<u.length;j++){events=u[j];for(var n=0;n<events.length;n++)a.addEventListener?
a.addEventListener(events[n],b(j),!0):a.attachEvent?a.attachEvent("on"+events[n],b(j)):a["on"+events[n]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b={};"number"===typeof a&&void 0===k[a]&&(k[a]=!0,h+=a,b[lbl+"heas"]=h);"number"===typeof c&&void 0===l[c]&&(l[c]=!0,i+=c,b["dvp_hease"]=i);dvObj.registerEventCall(impId,b)};e.rhe=rhe;function p(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}
function q(a){var c=r;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var s=p("form");s.submit=function(){window.rhe(1,1)};var r=p("input","txt");r.name=r.id;r.type="text";q("value");q("textContent");var v=p("input","btn");v.name=v.id;v.type="button";
var w=p("input","sbmt");w.name=w.id;w.type="submit";w.click=function(){window.rhe(2,2)};w.ontouchstart=function(){window.rhe(2,2)};var x=p("a");x.href="javascript:window.rhe(16,16);";if(""!=alu){var y=p("a");y.href=alu}e.document.body.insertBefore(s,d);e.document.body.insertBefore(x,d);s.insertBefore(r,d);s.insertBefore(v,d);s.insertBefore(w,d);o(r,8);o(v,4);o(w,2);o(s,1);""!=alu&&(y=p("a","alu"),y.href=alu,e.document.body.insertBefore(y,d),o(y,32));
if(""!=ifu){var z=p("iframe");z.src=ifu;e.document.body.insertBefore(z,d);o(z,64)};} catch (e) {}; });$dv.tags[$uid].set({"bgm":1});$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":100,"mla":true,"ldav":0},"rp":{"mt":"isgmmims","pt":"isgmpims","mr":"GroupMMeasuredImpression","pr":"GroupMPassedImpression","eid":17,"bl":true}});$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":50},"rp":{"mt":"isgmv4mims","pt":"isgmv4dpims","eid":17,"bl":true}});(function() {var dvObj = $dv;var impId = 'b65761a69ef7465d98fa35ebf8b6459a';var dvParams = {"mouseMvLogRate": "100","isDvp": "true","sampleInterval": "1","maxArrayLength": "10"};dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"CMPC", function() {function m(c,e,f){c.addEventListener?c.addEventListener(e,f,!1):c.attachEvent?c.attachEvent("on"+e,f,!1):c["on"+e]=f}function n(c,e,f){c.removeEventListener?c.removeEventListener(e,f):c.detachEvent?c.detachEvent("on"+e,f):c["on"+e]=null}function z(c,e){this.toString=function(){return"("+c+","+e+")"}} 
function A(c){var e=c||5,f=[],l=this;this.enqueue=function(c){f.length>=e&&l.a();f.push(c)};this.a=function(){0<f.length&&f.splice(0,1)};this.size=function(){return f.length};this.clear=function(){f=[]}} 
function B(c){function e(){try{a.c[a.a.U]=a.state.j}catch(b){a.b(b.message)}}function f(){try{a.c[a.a.Y]=a.state.C>>>0}catch(b){a.b(b.message)}}function l(){try{a.c[a.a.Z]=a.state.O>>>0}catch(b){a.b(b.message)}}function p(){try{a.c[a.a.X]=Math.sqrt(a.state.u/a.state.f-Math.pow(a.state.g/a.state.f,2)),a.c[a.a.W]=a.state.s/a.state.f}catch(b){a.b(b.message)}}function t(){try{a.c[a.a.S]=a.state.g.toFixed(a.D)}catch(b){a.b(b.message)}}function u(){try{var b=a.state.o;a.c[a.a.R]=(a.state.g/(Date.now()- 
a.state.I)*1E3).toFixed(a.D);a.c[a.a.T]=b.toFixed(a.D)}catch(g){a.b(g.message)}}function v(){try{a.c[a.a.$]=("ontouchstart"in document.documentElement)>>>0}catch(b){a.b(b.da)}}function w(){try{a.state.m||(a.c[a.a.V]=a.state.H.size())}catch(b){a.b(b.da)}}function q(){try{a.c[a.a.M]=a.state.P.size()}catch(b){a.b(b.message)}}function h(){try{a.h[a.a.B]=!!a.state.l>>>0,a.h[a.a.L]=encodeURI(a.state.l.slice(0,100))}catch(b){a.b(b.message)}}function r(){try{a.c[a.a.K]=!!a.state.j>>>0}catch(b){a.b(b.message)}} 
var a=this;c=c||{};this.N=parseInt(c.maxArrayLength)||5;this.D=parseInt(c.numPrecision)||4;this.ba=function(){a.state={m:0,P:new A(this.N),H:new A(this.N),l:"",O:0,F:0,G:0,g:0,o:0,timeStamp:null,I:null,C:0,j:0,u:0,v:0,f:0,i:0,A:0,w:0,J:0,s:0};a.a={K:"mpcc",L:"mpcerr",M:"mpcp",B:"mpcf",V:"mpcpbt",$:"mpcts",Z:"mpctmv",R:"mpcavgspd",T:"mpcmaxspd",S:"mpcdistrl",Y:"mpct",U:"mpcncs",X:"mpcstd",W:"mpcrege"};if("true"===c.isDvp){var b=a.a,g;for(g in b)b.hasOwnProperty(g)&&(b[g]="dvp_"+b[g])}a.h={};a.h[a.a.B]= 
-1;a.h[a.a.L]="";a.c={}};this.ba();this.b=function(b){a.state.l+="|"+b};this.ca=function(b){try{var c=b.clientX,d=b.clientY,e=a.state.timeStamp,f=a.state.I;if(null===e||null===f)a.state.F=c,a.state.G=d,a.state.o=0,a.state.timeStamp=Date.now(),a.state.I=Date.now(),a.state.g=0,a.state.u=0,a.state.v=0,a.state.i=0,a.state.A=0,a.state.w=0,a.state.J=0,a.state.s=0;else{var k=a.state.g,h=a.state.o,l=a.state.u,q=c-a.state.F,r=d-a.state.G,p=Math.sqrt(q*q+r*r),h=Math.max(p/(Date.now()-e)*1E3,h),k=k+p,l=l+p* 
p;a.state.F=c;a.state.G=d;a.state.o=h;a.state.timeStamp=Date.now();a.state.g=k;a.state.u=l;var t=a.state.i,u=a.state.A,v=a.state.w,w=a.state.J,e=b=0;0!==a.state.f&&0!==t&&0!==u&&0!==v&&0!=w&&(b=v/a.state.f/w,e=u/a.state.f-b*t/a.state.f,a.state.s+=Math.pow(d-b*c-e,2));a.state.i+=c;a.state.A+=d;a.state.w+=c*d;a.state.v+=c*c;a.state.J=a.state.v/(a.state.f+1)-Math.pow(a.state.i/(a.state.f+1),2)}a.state.f+=1}catch(D){a.b(D.message)}};this.aa=function(b){try{for(var c=[r,q,w,v,u,t,p,l,f,h,e],d=0;d<c.length;++d)try{c[d]()}catch(x){a.b(x.message)}}catch(x){}finally{0< 
a.c[a.a.K]||0<a.c[a.a.M]?b(a.c):1===a.h[a.a.B]&&b(a.h)}}} 
function E(){function c(){n(d,"click",f);n(d,"mouseover",w);n(d,"mousedown",u);n(d,"mousemove",v);n(d,"mouseup",t);n(g,"mouseout",p);n(g,"touchmove",l);n(d,"unload",e);n(d,"beforeunload",e)}function e(){try{b.aa(function(a){try{dvObj.registerEventCall(impId,a)}catch(y){}})}catch(k){}finally{c()}}function f(a){try{b.state.C+=!!a.isTrusted>>>0}catch(y){b.b(y.message)}b.state.j+=1}function l(){try{b.state.O=1}catch(k){b.b(k.message)}}function p(){}function t(){try{b.state.m=0,a=!0}catch(k){b.b(k.message)}} 
function u(){try{b.state.m=1,b.state.H.clear(),r=!0}catch(k){b.b(k.message)}}function v(c){try{r?r=!1:a?a=!1:(q+=1,h=h||{},q===(parseInt(h.sampleInterval)||1)&&(b.state.P.enqueue(new z(c.clientX,c.clientY)),b.ca(c),b.state.m&&b.state.H.enqueue(new z(c.clientX,c.clientY)),q=0))}catch(y){b.b(y.message)}}function w(){try{b=new B(h)}catch(k){b.b(k.message)}}var q=0,h=dvParams,r=!1,a=!1,b=new B(h),g,d;try{d=parent,g=d.document}catch(k){d=window,g=d.document}m(d,"click",f);m(d,"mouseover",w);m(d,"mousedown", 
u);m(d,"mousemove",v);m(d,"mouseup",t);m(g,"mouseout",p);m(g,"touchmove",l);m(d,"unload",e);m(d,"beforeunload",e);var x=h.ea||5E4,C=h.fa||84E4;setTimeout(function(){e();c()},"object"===window.$dvbs||"object"===window.$dvbsr?x:C)}try{E()}catch(c){};});})();var dvObj = $dv;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("b65761a69ef7465d98fa35ebf8b6459a",false);var dvObj=$dv;var impId='b65761a69ef7465d98fa35ebf8b6459a';dvObj.pubSub.subscribe('ImpressionServed',impId,'SupportedFonts',function(){
try{(function(){var e=["Baskerville","Athens","Verina","Helvetica","Lucida Grande","Apple Casual","Lucida Sans Unicode","Wingdings","FreesiaUPC","Kalinga","MS Serif","Comic Sans MS","Trebuchet MS","Calibri Light","Gautami","Simplified Arabic","Webdings","Droid Sans","Droid Serif","Droid Sans Mono","Roboto","SamnsungOne","Noto","Arimo","Tinos","Cousine","Caecilia","AppleColorEmoji","AppleColorEmoji","CourierNewPSMT","DejaVu Sans Mono","Vera Sans","Ubuntu Mono","Terminus Font","GNU Unifont","Fixedsys"];var i=["monospace","sans-serif","serif"];var a="mmmmmmmmmmlli";var n="72px";var r=document.getElementsByTagName("body")[0];var o=document.createElement("span");o.style.fontSize=n;o.innerHTML=a;var t={};var s={};for(var l in i){o.style.fontFamily=i[l];r.appendChild(o);t[i[l]]=o.offsetWidth;s[i[l]]=o.offsetHeight;r.removeChild(o)}function m(e){var a=false;for(var n in i){o.style.fontFamily=e+","+i[n];r.appendChild(o);var l=o.offsetWidth!=t[i[n]]||o.offsetHeight!=s[i[n]];r.removeChild(o);a=a||l}return a}this.detect=m;var f=0;var d=0;for(var v in e){try{if(m(e[v])){if(v<32){f=(f|1<<v)>>>0}else if(v<64){d=(d|1<<v)>>>0}}}catch(c){}}dvObj.registerEventCall(impId,{dvp_tf1:f,dvp_tf2:d},1e3)})()}catch(e){}
});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":30},"rp":{"mt":"ismms","pt":"ispmxpms"}});function IVCallback(ViewAssureBootstrapper) {    if(ViewAssureBootstrapper && typeof(ViewAssureBootstrapper)==='function') {       ViewAssureBootstrapper({ 'serverSettings': { 'protocol': 'https://', 'templateVersion': '11', 'TKH': '-5264458369239723718' } });   } else {       new dv_InViewService({ 'protocol': 'https://' }).inViewManager();     }};$dv.CommonData.deviceType = 1;$dv.CommonData.detectedDeliveryType = 1;$dv.pubSub.subscribe('ImpressionServed', $uid, 'createVersionSelector', function () {var version = $dv.ViewabilityScriptVersion;if(!version) return;if($dv.ViewabilityScriptVersion2 && Math.random()*100 < 50) {   var version = $dv.ViewabilityScriptVersion2; } var script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://cdn.doubleverify.com/avs' + version + '.js'; document.body.appendChild(script);});try{$dv.pubSub.publish('ImpressionServed', $uid);$dv.pubSub.publish('ImpressionServed', $frmId);}catch(e){}