(function(a,f,t){function k(a){for(var b={},m,c,v=0;v<a.length;v++)c=a[v],m=c.r+c.s+c.m,c.c&&(b[m]||(b[m]=[]),b[m].push(a[v]));return b}function p(a){for(var b=1;b<arguments.length;b++){var m=arguments[b];try{if(m.isSupported)return m.send(a)}catch(c){}}}function w(){for(var a=0;a<B.length;a++)B[a]();e.length&&p(k(e.splice(0,e.length)),N,K,I);L=E=0}function z(D,P,m){m=m||{};0===m.bf&&b.isBF||(D={r:m.r||b.rid,s:m.s||a.ue_sid,m:m.m||a.ue_mid,mkt:m.mkt||a.ue_mkt,sn:m.sn||a.ue_sn,c:P,d:D,t:m.t||b.d(),
cs:m.c&&a.ue_qsl},m.b?p(k([D]),N,I):m.nb?p(k([D]),N,K,I):m.img||M[P]?p(k([D]),I):m.ff?(e.push(D),w()):m.n?(e.push(D),0===F?w():L||(L=f.setTimeout(w,F))):(e.push(D),E||(E=f.setTimeout(w,J))))}function l(a,b,m){G++;G==n&&z({m:"Max number of Forester Logs exceeded",f:"forester-client.js",logLevel:"ERROR"},f.ue_err_chan||"jserr");(G<n||m&&m.il)&&z(a,b,m)}function h(){if(!H){for(var a=0;a<u.length;a++)u[a]();for(a=0;a<B.length;a++)B[a]();p(k(e.splice(0,e.length)),N,I);H=!0}}var y={};(function(){function a(v){return 10>
v?"0"+v:v}function b(v){c.lastIndex=0;return c.test(v)?'"'+v.replace(c,function(v){var a=e[v];return"string"===typeof a?a:"\\u"+("0000"+v.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+v+'"'}function m(a,D){var c,e,R,S,u=v,g,h=D[a];h&&"object"===typeof h&&"function"===typeof h.toJSON&&(h=h.toJSON(a));"function"===typeof f&&(h=f.call(D,a,h));switch(typeof h){case "string":return b(h);case "number":return isFinite(h)?String(h):"null";case "boolean":case "null":return String(h);case "object":if(!h)return"null";
v+=d;g=[];if("[object Array]"===Object.prototype.toString.apply(h)){S=h.length;for(c=0;c<S;c+=1)g[c]=m(c,h)||"null";R=0===g.length?"[]":v?"[\n"+v+g.join(",\n"+v)+"\n"+u+"]":"["+g.join(",")+"]";v=u;return R}if(f&&"object"===typeof f)for(S=f.length,c=0;c<S;c+=1)"string"===typeof f[c]&&(e=f[c],(R=m(e,h))&&g.push(b(e)+(v?": ":":")+R));else for(e in h)Object.prototype.hasOwnProperty.call(h,e)&&(R=m(e,h))&&g.push(b(e)+(v?": ":":")+R);R=0===g.length?"{}":v?"{\n"+v+g.join(",\n"+v)+"\n"+u+"}":"{"+g.join(",")+
"}";v=u;return R}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(v){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(v){return this.valueOf()});var c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
v,d,e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},f;"function"!==typeof y.stringify&&(y.stringify=function(a,b,P){var D;d=v="";if("number"===typeof P)for(D=0;D<P;D+=1)d+=" ";else"string"===typeof P&&(d=P);if((f=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return m("",{"":a})})})();var r=function(){function a(b,m){if(null==b)return m.push("!n");if("number"===typeof b)return m.push("!"+b);if("string"===
typeof b)return"\\"==b[b.length-1]?m.push("'"+b.replace(/'/g,"\\'")+"u005C'"):m.push("'"+b.replace(/'/g,"\\'")+"'");if("boolean"===typeof b)return m.push(b?"!t":"!f");if(b instanceof Array){m.push("*");for(var c=0;c<b.length;c++)a(b[c],m);return m.push(")")}if("object"==typeof b){m.push("(");for(c in b)b.hasOwnProperty(c)&&(m.push(c),a(b[c],m));return m.push(")")}return m.push("!n")}return{stringify:function(b){var m=[];a(b,m);return m.join("")}}}(),q=a.ue_qsl||2E3,g=1===a.ue_retry||3===a.ue_retry,
A=3===a.ue_retry,n=1E3,x=function(){},C=f.JSON&&f.JSON.stringify||y&&y.stringify,d=r.stringify,b=a.ue||{},r=a.uet||x;(a.uet||x)("bb","ue_frst_v2",{wb:1});var c="//"+a.ue_furl+"/1/batch/1/OE/",e=[],u=[],B=[],H=!1,L,E,F=void 0===a.ue_hpfi?1E3:a.ue_hpfi,J=void 0===a.ue_lpfi?1E4:a.ue_lpfi,M={"scheduled-delivery":1},G=0,K=function(){function D(){if(f.XDomainRequest){var v=new XDomainRequest;v.onerror=x;v.ontimeout=x;v.onprogress=x;v.onload=x;v.timeout=0;return v}if(f.XMLHttpRequest){v=new XMLHttpRequest;
if(!("withCredentials"in v))throw"";return v}if(f.ActiveXObject){for(var a=0;a<d.length&&!v;a++)try{v=new ActiveXObject(d[a]),d=[d[a]]}catch(b){}return v}}function P(v){for(var m=[],P=v[0]||{},c=0;c<v.length;c++){var D={};D[v[c].c]=v[c].d;m.push(D)}return{rid:P.r||b.rid,sid:P.s||a.ue_sid,mid:P.m||a.ue_mid,mkt:P.mkt||a.ue_mkt,sn:P.sn||a.ue_sn,reqs:m}}function m(v){var a=P(v),b=D();if(!b)throw"";g&&(b.onerror=function(){for(var a=0;a<v.length;a++)e.push(v[a]);A&&(K.isSupported=!1)});b.open("POST",c,
!0);b.setRequestHeader&&b.setRequestHeader("Content-type","text/plain");b.send(C(a))}var d="MSXML2.XMLHTTP.6.0 MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");return{send:function(v){for(var a in v)v.hasOwnProperty(a)&&v[a].length&&m(v[a])},buildPOSTBodyLog:P,isSupported:!0}}(),I=function(){return{send:function(D){for(var P in D)if(D.hasOwnProperty(P)){for(var m=D[P],e=m,v={},O=void 0,f=0;f<e.length;f++)O=e[f].c,v[O]||(v[O]=[]),v[O].push(e[f]);
var m=m[0]||{},e=m.sn||a.ue_sn,m=c+(m.m||a.ue_mid)+":"+(m.s||a.ue_sid)+":"+(m.r||b.rid)+(e?":"+e:""),e=[],O=m,f=[],u=void 0;for(u in v)if(v.hasOwnProperty(u))for(var g=0;g<v[u].length;g++){var h=v[u][g],l=encodeURIComponent((h.cs?d:C)(h.d));f.push({l:l,t:h.t,p:1,c:u,d:h.cs?"c":"j"})}v=f;f=void 0;u="$";for(h=0;h<v.length;){g=v[h];f!=g.c?(O+=u+g.c+"=",u="&",f=g.c):O+=",";var l=O,n=g.d+":",B=g,O=(B.l.match(".{1,"+(q-O.length)+"}[^%]{0,2}")||[])[0]||"";B.l=B.l.substr(O.length);O=l+(n+O+":"+g.t);if(g.l)O+=
":"+g.p++ +"_",e.push(O),O=m,u="$",f=0;else if(h++,1!=g.p)for(O+=":"+g.p+"_"+g.p,l=0;l<g.p-1;l++)e[e.length-l-1]+=g.p}e.push(O);m=e;for(e=0;e<m.length;e++)(new Image).src=m[e]}},isSupported:!0}}(),N=function(){return{send:function(a){for(var b in a)if(a.hasOwnProperty(b)){var m=K.buildPOSTBodyLog(a[b]);if(!navigator.sendBeacon(c,C(m)))throw"";}},isSupported:!!navigator.sendBeacon}}();b._fic=I;b._fac=K;b._fbc=N;b._flq=e;b.sid=b.sid||a.ue_sid;b.mid=b.mid||a.ue_mid;b.furl=b.furl||a.ue_furl;b.sn=b.sn||
a.ue_sn;b.isBF=function(){var a=f.performance||f.webkitPerformance,P=t.ue_backdetect&&t.ue_backdetect.ue_back&&document.ue_backdetect.ue_back.value,m=b.bfini;return a&&a.navigation&&2===a.navigation.type||1<m||!m&&1<P}();try{f.amznJQ&&f.amznJQ.declareAvailable&&f.amznJQ.declareAvailable("forester-client"),f.P&&f.P.register&&f.P.register("forester-client",x)}catch(Q){a.ueLogError(Q,{logLevel:"WARN"})}(function(){b.log&&b.log.isStub&&(b.log.replay(function(a,b,m){var c=a[2]||{};c.t=b;c.r=m;c.n=1;l(a[0],
a[1],c)}),b.onunload.replay(function(a){u.push(a[0])}),b.onflush.replay(function(a){B.push(a[0])}))})();b.log=l;b.log.reset=function(){G=0};b.onunload=function(a){u.push(a)};b.onflush=function(a){B.push(a)};b.attach("beforeunload",h);b.attach("pagehide",h);r("ld","ue_frst_v2",{wb:1})})(ue_csm,window,document);
(function(a,f){function t(a){if(a)return a.replace(/^\s+|\s+$/g,"")}function k(d,b){if(!d)return{};var c="INFO"===b.logLevel;d.m&&d.m.message&&(d=d.m);var e=b.m||b.message||"",e=d.m&&d.m.message?e+d.m.message:d.m&&d.m.target&&d.m.target.tagName?e+("Error handler invoked by "+d.m.target.tagName+" tag"):d.m?e+d.m:d.message?e+d.message:e+"Unknown error",e={m:e,name:d.name,type:d.type,csm:g+" "+(d.fromOnError?"onerror":"ueLogError")},f,l,q=0,r;e.logLevel=b.logLevel||h;b.adb&&(e.adb=b.adb);if(f=b.attribution)e.attribution=
""+f;if(!c){e.pageURL=b.pageURL||""+(window.location?window.location.href:"")||"missing";e.f=d.f||d.sourceURL||d.fileName||d.filename||d.m&&d.m.target&&d.m.target.src;e.l=d.l||d.line||d.lineno||d.lineNumber;e.c=d.c?""+d.c:d.c;e.s=[];e.t=a.ue.d();if((c=d.stack||(d.err?d.err.stack:""))&&c.split)for(e.csm+=" stack",f=c.split("\n");q<f.length&&e.s.length<A;)(c=f[q++])&&e.s.push(t(c));else for(e.csm+=" callee",l=p(d.args||arguments,"callee"),f=q=0;l&&q<A;)r=n,l.skipTrace||(c=l.toString())&&c.substr&&(r=
0===f?4*n:r,r=1==f?2*n:r,e.s.push(c.substr(0,r)),f++),l=p(l,"caller"),q++;if(!e.f&&0<e.s.length&&(q=e)&&q.s){var k,c=0<q.s.length?q.s[0]:"";f=1<q.s.length?q.s[1]:"";c&&(k=c.match(C));k&&3==k.length||!f||(k=f.match(x));k&&3==k.length&&(q.f=k[1],q.l=k[2])}}return e}function p(a,b){try{return a[b]}catch(c){}}function w(d,b){if(d){var c=k(d,b);a.ue.log(c,b.channel||l,{nb:1});"function"===typeof ue_err.elh&&ue_err.elh(d,b);try{if(!d.fromOnError){var e=f.console,g=f.JSON,h="Error logged with the Track&Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";
if(e){if(g&&g.stringify)try{h+=g.stringify(c)}catch(q){h+="no info provided; converting to string failed"}else h+=c.m;"function"===typeof e.error?e.error(h,c):"function"===typeof e.log&&e.log(h,c)}}}catch(n){}}}function z(d,b){if(d&&!(a.ue_err.ec>a.ue_err.mxe)){a.ue_err.ter.push(d);b=b||{};var c=d.logLevel||b.logLevel;b.logLevel=c;b.attribution=d.attribution||b.attribution;c&&c!==h&&c!==y&&c!==r&&c!==q||a.ue_err.ec++;c&&c!=h||ue_err.ecf++;w(d,b)}}if(!a.ueLogError||a.ueLogError.isStub){var l=a.ue_err_chan||
"jserr",h="FATAL",y="ERROR",r="WARN",q="DOWNGRADED",g="v5",A=20,n=256,x=/\(?([^\s]*):(\d+):\d+\)?/,C=/.*@(.*):(\d*)/;w.skipTrace=1;k.skipTrace=1;z.skipTrace=1;(function(){if(a.ue_err.erl){var d=a.ue_err.erl.length,b,c;for(b=0;b<d;b++)c=a.ue_err.erl[b],w(c.ex,c.info);ue_err.erl=[]}})();a.ueLogError=z}})(ue_csm,window);
ue_csm.ue.exec(function(a,f){var t=function(){},k=function(){return{send:function(a,p){if(p&&a){var l;if(f.XDomainRequest)l=new XDomainRequest,l.onerror=t,l.ontimeout=t,l.onprogress=t,l.onload=t,l.timeout=0;else if(f.XMLHttpRequest){if(l=new XMLHttpRequest,!("withCredentials"in l))throw"";}else l=void 0;if(!l)throw"";l.open("POST",a,!0);l.setRequestHeader&&l.setRequestHeader("Content-type","text/plain");l.send(p)}},isSupported:!0}}(),p=function(){return{send:function(a,f){if(a&&f&&!navigator.sendBeacon(a,
f))throw"";},isSupported:!!navigator.sendBeacon}}();a.ue._ajx=k;a.ue._sBcn=p},"Transportation-clients")(ue_csm,window);
ue_csm.ue.exec(function(a,f){function t(){for(var a=0;a<arguments.length;a++){var b=arguments[a];try{var D;if(b.isSupported){var v=Q.buildPayload(u,c);D=b.send(d,v)}else throw dummyException;return D}catch(e){}}x({m:"All supported clients failed",attribution:"CSMSushiClient_TRANSPORTATION_FAIL",f:"sushi-client.js",logLevel:"ERROR"},f.ue_err_chan||"jserr")}function k(){if(c.length){for(var a=0;a<J.length;a++)J[a]();t(n._sBcn||{},n._ajx||{});c=[];e={};u={};G=K=B=H=0}}function p(){var a=new Date,b=function(a){return 10>
a?"0"+a:a};return Date.prototype.toISOString?a.toISOString():a.getUTCFullYear()+"-"+b(a.getUTCMonth()+1)+"-"+b(a.getUTCDate())+"T"+b(a.getUTCHours())+":"+b(a.getUTCMinutes())+":"+b(a.getUTCSeconds())+"."+String((a.getUTCMilliseconds()/1E3).toFixed(3)).slice(2,5)+"Z"}function w(a){try{return JSON.stringify(a)}catch(b){}return null}function z(b,m,D,v){var d=!1;v=v||{};E++;E==r&&x({m:"Max number of Sushi Logs exceeded",f:"sushi-client.js",logLevel:"ERROR",attribution:"CSMSushiClient_MAX_CALLS"},f.ue_err_chan||
"jserr");var e;if(e=!(E>=r))(e=b&&-1<b.constructor.toString().indexOf("Object")&&m&&-1<m.constructor.toString().indexOf("String")&&D&&-1<D.constructor.toString().indexOf("String"))||L++;e&&(b.producerId=b.producerId||m,b.schemaId=b.schemaId||D,b.timestamp=p(),m=Date.now?Date.now():+new Date,b.messageId=a.ue_id+"-"+m+"-"+E,v&&!v.ssd&&(b.sessionId=b.sessionId||a.ue_sid,b.requestId=b.requestId||a.ue_id,b.obfuscatedMarketplaceId=b.obfuscatedMarketplaceId||a.ue_mid),(m=w(b))?(m=m.length,(c.length==q||
B+m>g)&&k(),B+=m,b={data:Q.compressEvent(b)},c.push(b),(v||{}).n?0===I?k():G||(G=f.setTimeout(k,I)):K||(K=f.setTimeout(k,N)),d=!0):d=!1);!d&&a.ue_int&&console.error("Invalid JS Nexus API call");return d}function l(){if(!M){for(var a=0;a<F.length;a++)F[a]();for(a=0;a<J.length;a++)J[a]();c.length&&t(n._sBcn||{});M=!0}}function h(a){F.push(a)}function y(a){J.push(a)}var r=1E3,q=499,g=524288,A=function(){},n=a.ue||{},x=n.log||A,C=a.uex||A;(a.uet||A)("bb","ue_sushi_v1",{wb:1});var d=a.ue_surl||"https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",
b=["messageId","timestamp"],c=[],e={},u={},B=0,H=0,L=0,E=0,F=[],J=[],M=!1,G,K,I=void 0===a.ue_hpsi?1E3:a.ue_hpsi,N=void 0===a.ue_lpsi?1E4:a.ue_lpsi,Q=function(){function a(v){e[v]="#"+H++;u[e[v]]=v;return e[v]}function m(a){if(a)switch(typeof a){case "number":return!(isNaN(a)||Infinity===a)&&a.toString().length>("#"+H).length;case "boolean":break;case "string":return a.length>("#"+H).length;default:return!0}return!1}function D(v){if(m(v)){var c=0;v instanceof Array?c=2:v instanceof Function?c=0:v instanceof
Object&&(c=1);switch(c){case 0:v=e[v]?e[v]:a(v);break;case 2:var d=v;v=[];for(var c=d.length,f=0;f<c;f++)v[f]=D(d[f]);break;case 1:c={};for(d in v)v.hasOwnProperty(d)&&(c[e[d]?e[d]:a(d)]=-1==b.indexOf(d)?D(v[d]):v[d]);v=c}}return v}return{compressEvent:D,buildPayload:function(){return w({cs:{dct:u},events:c})}}}();(function(){n.event&&n.event.isStub&&(n.event.replay(function(a){a[3]=a[3]||{};a[3].n=1;z.apply(this,a)}),n.onSushiUnload.replay(function(a){h(a[0])}),n.onSushiFlush.replay(function(a){y(a[0])}))})();
n.attach("beforeunload",l);n.attach("pagehide",l);n._cmps=Q;n.event=z;n.event.reset=function(){E=0};n.onSushiUnload=h;n.onSushiFlush=y;try{f.P&&f.P.register&&f.P.register("sushi-client",A)}catch(D){a.ueLogError(D,{logLevel:"WARN"})}C("ld","ue_sushi_v1",{wb:1})},"Nxs-JS-Client")(ue_csm,window);