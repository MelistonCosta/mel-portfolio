$(document).ready(function(){
    
    /****************************************************/

    // Kursor JS
    new kursor({
        type: 4,
    })

    /****************************************************/

    // Initialize Lenis
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        direction: 'vertical'
    });
    
    // Listen for the scroll event
    lenis.on('scroll', (e) => {
        // console.log(e);
    });
    
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    /****************************************************/

    $(document).mousemove(function(event) {
        let posX = event.clientX - $(window).width() / 2;
        let posY = event.clientY - $(window).height() / 2;
    
        $("section.custom-banner-animation .first, section.custom-banner-animation .last").css("transform", "translateX(" + posX * 0.001 + "%)");
        $("section.custom-banner-animation .main-img").css("transform", "translateX(" + -posX * 0.005 + "%)"); // Moves in the opposite direction
    });

});