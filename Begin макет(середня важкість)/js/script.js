//buttons================================================================================================================================================================================================================================================================
$(document).ready(function() {
    $(".header__burger").click(function(event) {
        event.preventDefault();
        $(".header__burger").toggleClass("active");
        $(".header__top").toggleClass("active");
        $("body").toggleClass("lock");    
    })
});