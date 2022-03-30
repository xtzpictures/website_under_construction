/*Logo Fade*/

var fadeStart=10 // 100px scroll or less will equiv to 1 opacity
	
    ,fadeUntil= ($( window ).height() - 350) // 200px scroll or more will equiv to 0 opacity
    ,fading = $('.fading')
;

$(window).bind('scroll', function(){
    var fadeoffset = $(document).scrollTop()
        ,opacity=0
    ;
    if( fadeoffset<=fadeStart ){
        opacity=1;
    }else if( fadeoffset<=fadeUntil ){
        opacity=1-fadeoffset/fadeUntil;
    }
    fading.css('opacity',opacity);
});



$('.page').click(function(){
        var topoffset = 50;
        $('html, body').clearQueue().animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - topoffset
        }, 1800,'swing');
        return false;
    });

$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});


$('.impressum_toggle').click(function(){
		$('.impressum_container').slideToggle();

});

$('.test').click(function(){
		$('.impressum_container').css('background-color','yellow');

});