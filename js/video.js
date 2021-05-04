// 
var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
var android = (navigator.userAgent.match(/android/i) != null);
var iPad = navigator.userAgent.match(/iPad/i) != null;

if ( iPhone || android || iPad ) {
    $('video.desktop').remove();
} else {
    $('video.mobile').remove();
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
$("body").mouseover(function () {
    $("video").prop('muted', false);
});
