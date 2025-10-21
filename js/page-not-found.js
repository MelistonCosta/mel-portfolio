jQuery(document).ready(function($) {
    
    /****************************************************/
    // Intro Mouse Parallax
    $(document).mousemove(function(event) {
        let posX = event.clientX - $(window).width() / 2;
        let posY = event.clientY - $(window).height() / 2;
    
        $("section.page-not-found .image-content h1").css("transform", "translateX(" + posX * 0.002 + "%)");
        $("section.page-not-found .image-content .image img").css("transform", "translateX(" + -posX * 0.002 + "%)");
    });
    /****************************************************/
    
});