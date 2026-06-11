$(document).ready(function () {
    
    /****************************************************/
    // Password Protected Page
    const correctPassword = "@Hadr!an";
    if (sessionStorage.getItem("authenticated") !== "true") {
        const password = prompt("Enter Password:");
        if (password === correctPassword) {
            sessionStorage.setItem("authenticated", "true");
        } else {
            alert("Access Denied!");
            window.location.href = "/";
            return; // Stop all remaining JS
        }
    }
    $("body").show();
    /****************************************************/



       
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
    

    /****************************************************/
    // Mobile Menu
    if (window.matchMedia('(max-width: 991px)').matches) {
        $("header .mobile-menu .icon").click(function(){
            $(this).parent().toggleClass("active");
        });
        $("header .mobile-menu a").click(function(){
            $(this).parents(".mobile-menu").removeClass("active");
        })

    } else {

    }
    /****************************************************/







    $(".target-blocks .blocks").each(function () {
        const $block = $(this);
        const $images = $block.find(".image img");
        let interval;
        $block.on("mouseenter", function () {
            if ($images.length <= 1) return;
            interval = setInterval(function () {
                let currentIndex = $images.index($images.filter(".active"));
                let nextIndex = (currentIndex + 1) % $images.length;
                $images.removeClass("active");
                $images.eq(nextIndex).addClass("active");
            }, 2000);
        });
        $block.on("mouseleave", function () {
            clearInterval(interval);
            // $images.removeClass("active");
            // $images.eq(0).addClass("active");
        });
    });





});