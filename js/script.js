jQuery(document).ready(function($) {
    
    /****************************************************/

    // Kursor JS
    new kursor({
        type: 4,
        color: "#FFFFFF",
        removeDefaultCursor: true
    })

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
    
    
    /****************************************************/
    // Header Menu Class Active
    const sections = $('section[id]'); // All sections with IDs
    const navLinks = $('.navigation a'); // Menu links

    function updateActiveMenu() {
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();

        sections.each(function() {
            const $section = $(this);
            const sectionTop = $section.offset().top;
            const sectionBottom = sectionTop + $section.outerHeight();
            const id = $section.attr('id');

            // Check if section is in viewport
            if (scrollPos + windowHeight / 2 >= sectionTop && scrollPos + windowHeight / 2 < sectionBottom) {
                navLinks.removeClass('active');
                $('.navigation a[href*="#' + id + '"]').addClass('active');
            }
        });

        // Remove active if no section in view (e.g., scrolled above first section)
        const inView = sections.toArray().some(section => {
            const $section = $(section);
            const sectionTop = $section.offset().top;
            const sectionBottom = sectionTop + $section.outerHeight();
            return scrollPos + windowHeight / 2 >= sectionTop && scrollPos + windowHeight / 2 < sectionBottom;
        });

        if (!inView) {
            navLinks.removeClass('active');
        }
    }

    // On scroll or resize
    $(window).on('scroll resize', updateActiveMenu);

    // Initial check
    updateActiveMenu();

    // Smooth scroll on click
    navLinks.on('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            navLinks.removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: target.offset().top - 80 // Adjust for fixed header height
            }, 600);
        }
    });
    /****************************************************/


    /****************************************************/
    // Footer - Legal Menu Active

    /****************************************************/

});