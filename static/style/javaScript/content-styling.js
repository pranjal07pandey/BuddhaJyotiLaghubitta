$(document).ready(function(){
    $( "#navbar").load( "../navigation/navbar.html", function() {
        console.log("Navbar loaded");
        let navHeight = $('.navigation-clean').outerHeight();
        console.log(navHeight);
        $('.content').css({'margin-bottom': navHeight});
    });

    $("#footer").load("../footer/footer.html", function () {
        console.log("Footer loaded.");
    });
});