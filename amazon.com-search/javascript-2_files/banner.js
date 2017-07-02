// AdBegins

function listeners(){
        cta.addEventListener('mouseenter', ctaOver, false);
        cta.addEventListener('mouseleave', ctaOut, false);
}

		function ctaOver(){
      TweenMax.to(cta, .2, {delay:0, backgroundColor:"#2cbef4", ease:Sine.easeIn});
      TweenMax.to(cta, .3, {delay:.3, backgroundColor:"#2ea0dd", ease:Sine.easeOut});
			TweenMax.to(ctaBtnOver, .2, {delay:0, opacity:1, left:0, ease:Sine.easeIn});
			TweenMax.to(ctaBtnOver, .2, {delay:.2, opacity:0, left:100, ease:Sine.easeOut});
			TweenMax.to(ctaBtnOver, 0, {delay:.3, opacity:0, left:-100});

		}

		function ctaOut(){
		  TweenMax.to(ctaBtnOver, .2, {delay:0, opacity:0, ease:Sine.easeIn});
		}

function startAd(){

TweenMax.set([copy1,copy1_2,copy2,copydevices,offerBoltOn,offerTitle,endOffer,offerTerms,offerBoltOn2,cta,".line"], {opacity:0});
TweenMax.set(device, {left: "+=300"});
TweenMax.set(copy3, {left: "-=300"});
TweenMax.set(frame1bg, {css:{transformStyle:"preserve-3d"}});
	TweenMax.set(frame1bg, {scale: 1.1, left: -120, bottom: -20});

var adContainer = document.getElementById("container");
var chars;
TweenMax.defaultOverwrite = "false";
document.getElementById("banner").style.visibility = "visible";

init();
listeners();

}

function init(){
    setTimeout (function(){frame1()}, 100);
}

// Animations

function frame1(){
	TweenMax.to(frame1bg, 0.5, {scale: 1.2, left: -100, bottom: -10, transformPerspective:1000, ease:Sine.easeOut, onComplete: frame2});
}

function frame2(){
	chars = document.getElementById("copy2").textContent.split("");
	document.getElementById("copy2").textContent = "";
	TweenMax.to(frame1bg, 1, {delay: 0, scale: 0.6, left: -140, bottom: -130, ease:Sine.easeInOut});
  TweenMax.to( copy1, .5, { opacity:1, delay: 0,ease:Sine.easeInOut});
	TweenMax.to( [copy1_2, copy2], .5, { opacity:1, delay: 1.5,ease:Sine.easeInOut, onComplete: function(){setTimeout(typeWriter, 500)}});
  //TweenMax.to( copy2, .5, { opacity:1, delay: 2,ease:Sine.easeInOut});
  TweenMax.to( [copy1,copy1_2,copy2,frame1bg], .5, { opacity:0, delay: 4,ease:Sine.easeInOut, onComplete: frame3});
}

function typeWriter() {
	document.getElementById("copy2").textContent += chars.shift();
	if (chars.length > 0) {
		setTimeout(typeWriter, 100);
	}
}

function frame3(){
  TweenMax.to( copy3, .3, { left: "+=300", delay: 0, ease:Sine.easeInOut});
  TweenMax.to( device, .7, { left: "-=300", delay: 0.3, ease:Sine.easeInOut});
  TweenMax.to( copydevices, .3, { opacity:1, delay: 0.6, ease:Sine.easeInOut});
	TweenMax.to(frame1bg, .5, {delay: 3.5, opacity: 0.2, ease:Sine.easeIn, onComplete: frame4});
	TweenMax.to( copy3, .1, { left: "+=300", delay: 3.5, ease:Sine.easeInOut});
  TweenMax.to( device, .1, { left: "-=300", delay: 3.5, ease:Sine.easeInOut});
	TweenMax.to( copydevices, .3, { opacity:0, delay: 3.5, ease:Sine.easeInOut});
	TweenMax.to(frame1bg, 1, {delay: 0, scale: 1.2, left: -100, bottom: 50, ease:Sine.easeInOut});
}

function frame4(){
	TweenMax.to( offerBoltOn, .3, { delay: 0, opacity:1, ease:Sine.easeInOut});
	TweenMax.to( ".line", .6, { delay: 0.3, opacity:1, ease:Sine.easeInOut});
	TweenMax.to( offerTitle, .3, { delay: 0.6, opacity:1, ease:Sine.easeInOut});
	TweenMax.to( endOffer, .3, { delay: 0.9, opacity:1, ease:Sine.easeInOut});
	TweenMax.to( offerTerms, .3, { delay: 1.2, opacity:1, ease:Sine.easeInOut});
	TweenMax.to( offerBoltOn2, .3, { delay: 1.5, opacity:1, ease:Sine.easeInOut});
	TweenMax.to( cta, .3, { delay: 1.8, opacity:1, ease:Sine.easeInOut});
}