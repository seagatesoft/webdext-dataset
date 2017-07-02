P.when('jQuery','ready').register('zgUE', function($){return new function(){var ueDataEnabled=window.ue && typeof(uet) == 'function' && typeof(uex) == 'function';
var rid;
var prevRid;
var isUEActivityAllowed=function(){return ueDataEnabled;
};
var savePrevRid=function(){prevRid=rid;
};
var updateRid=function(newRid){if(!isUEActivityAllowed()){return;
}
if(newRid !== undefined){ue.id=rid=newRid;
}
};
var prepareForNewPageLoad=function(){// reset all UE Data variables
reset();
timeStamp("ue");
timeStamp("bb");
};
var reset=function(){if(!isUEActivityAllowed()){return;
}
ue.t0=(new Date()).getTime();
document.ue_backdetect.ue_back.value="1";
ue.t=[];
ue.a="";
ue.e="";
ue.ec=0;
ue.s=1;
ue.r.ld=0;
ue.r.ul=0;
ue.r.oe=0;
};
var timeStamp=function(ueMarker){if(!isUEActivityAllowed()){return;
}
uet(ueMarker);
};
var send=function(event){if(!isUEActivityAllowed()){return;
}
uex(event);
};
var manageLoad=function(){if(!isUEActivityAllowed()){return;
}
if(ue.t.cf !== undefined){timeStamp('be');
ue.t.be=Math.max(ue.t.cf, ue.t.be);
if(rid != undefined && rid != prevRid){send('ld');
savePrevRid();
rid=undefined;
}
}
};
return {isUEActivityAllowed : isUEActivityAllowed,
savePrevRid : savePrevRid,
prepareForNewPageLoad :prepareForNewPageLoad,
updateRid : updateRid,
reset : reset,
timeStamp : timeStamp,
send : send,
manageLoad : manageLoad
};
}
});
P.when('jQuery','p13n-sc-line-truncator', 'ready').register('zgTitleTruncation', function($, lineTruncator){var moreRankTypesWidgetDiv=$(".zg_more");
$(document).ready(function(){lineTruncator.truncateLines(moreRankTypesWidgetDiv);
});
});
P.when('jQuery', 'zgUE', 'p13n-sc-line-truncator', 'ready').register('zgList', function($, zgUE, lineTruncator){$.zg={swfobjectRequested: false,
mp3Player: {id: "zg_mp3Player"
}
}
$(".zg_pagination a").click(function(){var $anchor=$(this);
var page=$anchor.attr('page');
if ($anchor.parent().hasClass('zg_selected')){$('html, body').scrollTop(0);
return false;
}
$.history.load(page);
return false;
});
var currentAjaxPage;
var zgPaginate=function(page){var $zgPageInfo=$('#zg_pageInfo');
var initialLoad=$zgPageInfo.attr('initialload');
if ((page == undefined && $zgPageInfo.attr('initialload') == "true") || page == $zgPageInfo.attr('page')){$zgPageInfo.attr('initialload', "false");
return;
}
$zgPageInfo.attr('initialload', "false");
if (page == undefined){page=1;
}
$zgPageInfo.attr('page', page);
currentAjaxPage=page;
var $pageNum=$('#zg_page' + page);
if ($pageNum.length == 0){return;
}
$('#zg_loading').show();
$('#zg_columnTitle').remove();
$('.zg_itemImmersion').remove();
$('html, body').scrollTop(0);
$('.zg_pagination .zg_page').removeClass('zg_selected');
$pageNum.addClass('zg_selected');
var pageAjaxUrl=$pageNum.find('a').attr('ajaxUrl');
var pageUrl=$pageNum.find('a').attr('href');
$.ajax({url: pageAjaxUrl,
dataType: 'html',
error: function(){window.location.href=pageUrl;
},
success: function(responseText){zgUE.prepareForNewPageLoad();
var listMarkup=responseText;
$('#zg_loading').show();
if (currentAjaxPage == page){$('#zg_columnTitle').remove();
$('.zg_itemImmersion').remove();
$('#zg_loading').before(listMarkup);
}
var $zgRid=$('#zg_rid');
zgUE.updateRid($zgRid.attr('rid'));
$zgRid.remove();
loadBelowTheFold(pageAjaxUrl);
}
});
var loadBelowTheFold=function(pageAjaxUrl){var btfAjaxUrl=pageAjaxUrl + "&isAboveTheFold=0";
$.ajax({url: btfAjaxUrl,
dataType: 'html',
success: function(btfResponse){listMarkup=btfResponse;
if (currentAjaxPage == page){$('#zg_loading').before(listMarkup);
$('#zg_loading').hide();
changeMargin();
}
loadMp3Sampler();
truncateTitleLines();
}
});
}
}
var changeMargin=function(){var adjustMargin=function(index, value, spaceToAdd){var colNum=index % numOfItemsPerRow;
var elem=$(value);
if (colNum != 0){elem.css("margin-left", spaceToAdd);
} else {elem.css("margin-left", 0);
}
};
if ($.browser.msie && $.browser.version.substr(0,1) < 7){return;
}
var minRightMargin=10;
var immersionWidth=parseInt($(".zg_itemImmersion").css("width"));
var centerListWidth=parseInt($("#zg_centerListWrapper").width());
var overflow=centerListWidth % (immersionWidth+minRightMargin);
var numOfItemsPerRow=parseInt(centerListWidth / (immersionWidth+minRightMargin));
var spaceToAdd=overflow / (numOfItemsPerRow - 1) - 1;
spaceToAdd=Math.min(spaceToAdd, 70);
$(".zg_itemImmersion").each(function(index, value){adjustMargin(index, value, spaceToAdd, numOfItemsPerRow);
});
};
$(window).resize(function(){changeMargin();
});
changeMargin();
var truncateTitleLines=function(){var zgItemWrapper=$(".zg_itemWrapper");
lineTruncator.truncateLines(zgItemWrapper);
};
truncateTitleLines();
var loadMp3Sampler=function(){var $mp3s=$("#zg .zg_mp3").each(function(){var $mp3=$(this);
var sampleAsin=$mp3.attr('sample');
var $mp3Image=$mp3.parents('.zg_image').find("img");
$imageRoot=$mp3Image.parent();
var mp3Baseline=$mp3Image.height() + $mp3Image.position().top;
var sampleText=$('#zg_s_sample').html();
var $x=$imageRoot
.append(
'<div class="zg_mp3Play" sample="' + sampleAsin + '">' +
'<div class="zg_mp3PlayButton"></div>' +
'<div class="zg_mp3PlayText">'+sampleText+'</div>' +
'</div>')
.find('.zg_mp3Play')
.hover(
function(){ $(this).addClass('zg_mp3PlayHover') },
function(){ $(this).removeClass('zg_mp3PlayHover') }
)
.click(function(){var $this=$(this);
if ($this.hasClass('zg_mp3PlayActive')){$this.removeClass('zg_mp3PlayActive');
swfobject.getObjectById($.zg.mp3Player.id).pauseSong();
} else {$("#zg .zg_mp3PlayActive").removeClass('zg_mp3PlayActive');
$this.addClass('zg_mp3PlayActive');
var sampleAsin=$this.attr('sample');
swfobject.getObjectById($.zg.mp3Player.id).playSongAsin(sampleAsin, 'USAmazon');
}
return false;
});
});
if ($mp3s.length > 0 && !$.zg.swfobjectRequested){$.zg.swfobjectRequested=true;
window.Mp3Interface={callback: function(event){switch (event){case 'onPlay':
case 'onLoad':
break;
case 'onIOError':
case 'onInvalidUrl':
case 'onComplete':
default:
$("#zg_list .zg_mp3PlayActive")
.removeClass('zg_mp3PlayActive');
break;
}
}
};
$.getScript("https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/swfobject/swfobject-2.2.min._CB221898538_.js",
function(){$('body').append('<div id="' + $.zg.mp3Player.id + '"></div>');
var flashVars={};
var params={ allowScriptAccess: "always" };
swfobject.embedSWF("https://images-na.ssl-images-amazon.com/images/G/01/zeitgeist/mp3player/swf/zgMp3Player-1.1._CB292539075_.swf", $.zg.mp3Player.id , 1, 1, "9.0.0", null, flashVars, params);
}
);
}
}
/*
* jQuery history plugin
*
* The MIT License
*
* Copyright (c) 2006-2009 Taku Sano (Mikage Sawatari)
* Copyright (c) 2010 Takayuki Miwa
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*/
var locationWrapper={put: function(hash, win){(win || window).location.hash=this.encoder(hash);
},
get: function(win){var hash=((win || window).location.hash).replace(/^#/, '');
try {return $.browser.mozilla ? hash : decodeURIComponent(hash);
}
catch (error){return hash;
}
},
encoder: encodeURIComponent
};
var iframeWrapper={id: "__jQuery_history",
init: function(){var html='<iframe id="'+ this.id +'" style="display:none" src="javascript:false;" />';
$("body").prepend(html);
return this;
},
_document: function(){return $("#"+ this.id)[0].contentWindow.document;
},
put: function(hash){var doc=this._document();
doc.open();
doc.close();
locationWrapper.put(hash, doc);
},
get: function(){return locationWrapper.get(this._document());
}
};
function initObjects(options){options=$.extend({unescape: false
}, options || {});
locationWrapper.encoder=encoder(options.unescape);
function encoder(unescape_){if(unescape_ === true){return function(hash){ return hash; };
}
if(typeof unescape_ == "string" &&
(unescape_=partialDecoder(unescape_.split("")))
|| typeof unescape_ == "function"){return function(hash){ return unescape_(encodeURIComponent(hash)); };
}
return encodeURIComponent;
}
function partialDecoder(chars){var re=new RegExp($.map(chars, encodeURIComponent).join("|"), "ig");
return function(enc){ return enc.replace(re, decodeURIComponent); };
}
}
var implementations={};
implementations.base={callback: undefined,
type: undefined,
check: function(){},
load:  function(hash){},
init:  function(callback, options){initObjects(options);
self.callback=callback;
self._options=options;
self._init();
},
_init: function(){},
_options: {}
};
implementations.timer={_appState: undefined,
_init: function(){var current_hash=locationWrapper.get();
self._appState=current_hash;
self.callback(current_hash);
setInterval(self.check, 100);
},
check: function(){var current_hash=locationWrapper.get();
if(current_hash != self._appState){self._appState=current_hash;
self.callback(current_hash);
}
},
load: function(hash){if(hash != self._appState){locationWrapper.put(hash);
self._appState=hash;
self.callback(hash);
}
}
};
implementations.iframeTimer={_appState: undefined,
_init: function(){var current_hash=locationWrapper.get();
self._appState=current_hash;
iframeWrapper.init().put(current_hash);
self.callback(current_hash);
setInterval(self.check, 100);
},
check: function(){var iframe_hash=iframeWrapper.get(),
location_hash=locationWrapper.get();
if (location_hash != iframe_hash){if (location_hash == self._appState){
self._appState=iframe_hash;
locationWrapper.put(iframe_hash);
self.callback(iframe_hash);
} else {
self._appState=location_hash;
iframeWrapper.put(location_hash);
self.callback(location_hash);
}
}
},
load: function(hash){if(hash != self._appState){locationWrapper.put(hash);
iframeWrapper.put(hash);
self._appState=hash;
self.callback(hash);
}
}
};
implementations.hashchangeEvent={_init: function(){self.callback(locationWrapper.get());
$(window).bind('hashchange', self.check);
},
check: function(){self.callback(locationWrapper.get());
},
load: function(hash){locationWrapper.put(hash);
}
};
var self=$.extend({}, implementations.base);
if($.browser.msie && ($.browser.version < 8 || document.documentMode < 8)){self.type='iframeTimer';
} else if("onhashchange" in window){self.type='hashchangeEvent';
} else {self.type='timer';
}
$.extend(self, implementations[self.type]);
$.history=self;
/* end jQuery history plugin */
$.history.init(function(hash){if(hash == ""){var page=undefined;
zgPaginate(page);
loadMp3Sampler();
} else if (!isNaN(hash-0)){var page=parseInt(hash, 10);
if (1 <= page && page <= 5){zgPaginate(page);
loadMp3Sampler();
}
}
},
{ unescape: ",/" });
});
