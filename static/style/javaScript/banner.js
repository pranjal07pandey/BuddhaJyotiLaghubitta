$(window).scroll(function(){
    if ($(window).scrollTop() == 0) {
        $(".header").removeClass("fixed-top");
    } else {
        $(".header").addClass("fixed-top");
        $(".header").css({'left': '15%'});
        $(".header").css({'right': '15%'});
    }
});