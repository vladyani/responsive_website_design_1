//hamburger menu

$('.toggle_btn').click(function () {
    $(this).toggleClass('on');
    $('.resize').toggleClass('active');
});


//mouse animation
let windowWidth = $(window).width();
$('.page_container').mousemove(function(event){
    let mouseX = (($(window).width() / 2) - event.pageX) * 0.1;
    let mouseY =(($(window).height() / 2) - event.pageY) * 0.1;
    $('.page_back').css('margin-left', mouseX + 'px');
    $('.page_back').css('margin-top', mouseY + 'px');
});
