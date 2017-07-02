//IIFE TO EXTRACT DIMENSION DATA
var dimensions = (function(){
        var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
        }
})();

var tl;
var stopWatchMain;

//INITIALIZE
function init(){
    IDsToVars();

    container.style.width = dimensions.width + 'px';
    container.style.height = dimensions.height + 'px';
    
    //set timeline
    tl = new TimelineLite();

    addListeners();
    animate();
}

function addListeners(){
    //replay functionality
    /*
    replay_button.addEventListener('mouseover',function(){
        TweenLite.fromTo(replay_button, .5, {rotation:'-360'}, {overwrite:false, rotation:'0'});
    })
    replay_button.addEventListener('click',function(){
            tl.restart();
    })
    */

    container.onmouseover=function(){cta_Over()};
    container.onmouseout=function(){cta_Out()};
}

//ANIMATE
function animate(){
    stopWatchMain=new Date().getTime(); 
    //timeline animation here
    tl
    .set([cta,cta_over], {opacity:0, visibility:'hidden'})

    //.addPause()
    .from(copy1, .5, {opacity:0}, "+=2")
    .from(bg2, .5, {opacity:0}, "+=2")
    .from(copy2, .5, {opacity:0}, "+=2")
    .from([bg3,legal], .5, {opacity:0}, "+=2")
    
    //End-Frame
    .from(tablet_ef, .75, {opacity:0, scale:1.25, ease: Power2.easeInOut, z: 0.1, rotationZ: 0.01, force3D:true, transformPerspective:1000, transformStyle:"preserve-3d"}, "+=2")
    .from([copy1_ef,legal_ef], .4, {opacity:0})
    .set([cta,cta_over], {opacity:0, visibility:'visible'})
    .to(cta, .5, {opacity:1})
    .to(cta, .4, {opacity:1})
   
    .call(returnTimerMain)
}

function cta_Over(){
      TweenLite.to(cta_over,.2,{opacity:1});
      TweenLite.to(cta,.2,{opacity:0});
}
function cta_Out(){
       TweenLite.to(cta,.2,{opacity:1});
       TweenLite.to(cta_over,.2,{opacity:0});
}

function returnTimerMain(){
    stopWatchMain=((new Date().getTime())-stopWatchMain)*.001;
    console.log(stopWatchMain+" seconds");
}

function clickThrough(){
    window.open(clicktag);
}

//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
};