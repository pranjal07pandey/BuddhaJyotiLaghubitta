$(document).ready(function(){
    console.log('first');
    $( "#navbar").load( "../navigation/navbar.html", function() {
        console.log("Navbar loaded");
        // var navHeight = $('.navigation-clean').outerHeight();
        // console.log(navHeight);
        // $('.content').css({'margin-top': navHeight});
    });

    $("#footer").load("../footer/footer.html", function () {
        console.log("Footer loaded.");
    });
});