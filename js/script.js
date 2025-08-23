$(document).ready(function(){
    
    /****************************************************/

    // Kursor JS
    // new kursor({
    //     type: 4,
    //     color: "#FFFFFF",
    //     removeDefaultCursor: true
    // })

    /****************************************************/

    // Initialize Lenis
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        // direction: 'vertical'
    });
    
    lenis.start(); // Ensure Lenis starts

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


    /****************************************************/
    // Delegate hover events for dynamically loaded content
    $(document).on('mouseenter', 'a, button', function() {
        $('.kursor').addClass('hover-link');
        $('.kursorChild').addClass('hover-link');
    }).on('mouseleave', 'a, button', function() {
        $('.kursor').removeClass('hover-link');
        $('.kursorChild').removeClass('hover-link');
    });
        
    /****************************************************/

});