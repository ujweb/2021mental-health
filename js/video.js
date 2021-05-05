// 
var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
var android = (navigator.userAgent.match(/android/i) != null);
var iPad = navigator.userAgent.match(/iPad/i) != null;

if ( iPhone || android || iPad ) {
    $('video.desktop').remove();
    var videoMobile1=document.getElementById("videoMobile1"),
        videoMobile2=document.getElementById("videoMobile2"),
        videoMobile3=document.getElementById("videoMobile3");
    document.body.addEventListener('mousedown', function(){
        videoMobile1.muted = false;
        videoMobile2.muted = false;
        videoMobile3.muted = false;
    }, false);
    document.body.addEventListener('touchstart', function(){
        videoMobile1.muted = false;
        videoMobile2.muted = false;
        videoMobile3.muted = false;
    }, false);
} else {
    $('video.mobile').remove();
    var videoDesktop1=document.getElementById("videoDesktop1"),
        videoDesktop2=document.getElementById("videoDesktop2"),
        videoDesktop3=document.getElementById("videoDesktop3");
    document.body.addEventListener('mousedown', function(){
        videoDesktop1.muted = false;
        videoDesktop2.muted = false;
        videoDesktop3.muted = false;
    }, false);
    document.body.addEventListener('touchstart', function(){
        videoDesktop1.muted = false;
        videoDesktop2.muted = false;
        videoDesktop3.muted = false;
    }, false);
}

// 
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
function videoScroll() {
    if (document.querySelectorAll('video[autoplay]').length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll('video[autoplay]');
        for (var i = 0; i < videoEl.length; i++) {
            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;

            if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                thisVideoEl.play();
            } else {
                thisVideoEl.pause();
            }
        }
    }
}

// 
$("video").prop('muted', true);
