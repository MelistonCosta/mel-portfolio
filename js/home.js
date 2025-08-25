jQuery(document).ready(function($) {
    
    /****************************************************/
    // SplitType
    const text = new SplitType(".custom-banner-animation .first, .custom-banner-animation .middle, .custom-banner-animation .last", { types: 'chars' });
    /****************************************************/

    /****************************************************/
    // GSAP
    gsap.registerPlugin(ScrollTrigger);

    const tlPageLoad = gsap.timeline();

    tlPageLoad.to(".opener .split-screen.left-screen", {
        x: "-200%",
        duration: 2,
        delay: .5,
        ease: "sine.out",
    })
    .to(".opener .split-screen.right-screen", {
        x: "200%",
        duration: 2,
        ease: "sine.out",
    },"<")
    .to(".opener", {
        className: "d-none",
    })
    .fromTo(".custom-banner-animation .middle .char",{
        scale: .6,
    }, {
        scale: 1,
        duration: 2,
        stagger: {
            amount: 0.25,
            from: "center",
        }
    }, "-=1.5")
    .fromTo(".custom-banner-animation .first .char",{
        x: "-500",
        opacity: 0,
        rotate: -20,
    }, {
        x: "0%",
        opacity: 1,
        rotate: 0,
        duration: 2,
        stagger: {
            amount: 0.3,
            from: "end",
        }
    }, "-=1")
    .fromTo(".custom-banner-animation .last .char",{
        x: "100%",
        opacity: 0,
        rotate: 20,
    }, {
        x: "0%",
        opacity: 1,
        rotate: 0,
        duration: 2,
        stagger: {
            amount: 0.3,
            from: "start",
        }
    },"<")


    const tlHomeBanner = gsap.timeline({
        scrollTrigger: {
            trigger: ".home-banner",
            // scrub: true,
        }
    });

    tlHomeBanner.to("section.custom-banner-animation .main-img", {
        filter: "grayscale(0)"
    }, "<")
    tlHomeBanner.to("section.custom-banner-animation", {
        backgroundColor: "#FFFCF2",
        duration: 1.5,
    }, "<")
    .to("section.home-banner", {
        backgroundColor: "#FFFCF2",
        duration: 1.5,
    }, "<")
    .to("section.custom-banner-animation .first, section.custom-banner-animation .last", {
        color: "#1F7A8C",
        duration: 1.5,
    }, "<")
    .fromTo("header", {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power3.out",
    }, {
        opacity: 1,
        y: 0,
    },"-=.5")
    .fromTo("header .navigation .nav li", {
        opacity: 0,
        x: -10,
        ease: "power3.out"
    },{
        opacity: 1,
        stagger: .2,
        x: 0
    }, "+=.5")
    
    
    const tlBannerBadge = gsap.timeline({
        scrollTrigger: {
            trigger: ".home-banner .badge-content",
            scrub: true,
            start: "0% 100%",
            end: "100% 0%",
        }
    });
    
    tlBannerBadge.fromTo("section.home-banner .rounded-badge-background-effect, section.home-banner .rounded-badge-background-effect .star-rotate, section.home-banner .badge-content .rounded-badge", {
        rotate: "0",
    }, {
        rotate: "360",
        duration: 3,
    })
    .from("section.home-banner .badge-content .boxed-content",{
        y: 60,
        duration: 1,
    }, "<")

    const tlBannerCounter = gsap.timeline({
        scrollTrigger: {
            trigger: ".home-banner .badge-content",
            start: "0% 80%",
            end: "100% 60%",
        }
    });

    tlBannerCounter.fromTo("section.home-banner ul.stats-content li", {
        scale: .5,
        opacity: 0,
    }, {
        scale: 1,
        opacity: 1,
        stagger: .1,
    })
    .fromTo("section.home-banner .image .btn-holder .button", {
        minWidth: "0",
    }, {
        duration: 2,
        minWidth: "350",
        ease: "power3.out"
    }, "<")

    /****************************************************/


    /****************************************************/
    // Swiper JS
    const textSwiper = new Swiper('.mySwiper.textSwiper', {
        slidesPerView: "auto",
        centeredSlides: true,
        speed: 10000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            reverseDirection: false
        },
        allowTouchMove: false,
        keyboard: {
            enabled: false,
        },
        mousewheel: {
            enabled: false,
        },
        grabCursor: false,
        loopedSlides: 10,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    });
    /****************************************************/


    /****************************************************/
    // Intro Mouse Parallax
    $(document).mousemove(function(event) {
        let posX = event.clientX - $(window).width() / 2;
        let posY = event.clientY - $(window).height() / 2;
    
        $("section.custom-banner-animation .first, section.custom-banner-animation .last").css("transform", "translateX(" + posX * 0.001 + "%)");
        $("section.custom-banner-animation .main-img").css("transform", "translateX(" + -posX * 0.005 + "%)");
    });
    /****************************************************/


    /****************************************************/
    // Projects Mouse Parallax
    $('section.uneven-cards ul.uneven-card li').on('mousemove', function (event) {
        let $image = $(this).find('.image');
        let offset = $(this).offset();
        let mouseX = event.pageX - offset.left;
        let mouseY = event.pageY - offset.top;
        
        let moveX = (mouseX / $(this).width() - 0.5) * 100; // Adjust sensitivity
        let moveY = (mouseY / $(this).height() - 0.5) * 100;

        $image.css('transform', `translate(${moveX}px, ${moveY - 50}%) rotate(${moveX / 10}deg)`);
    });

    $('section.uneven-cards ul.uneven-card li').on('mouseleave', function () {
        $(this).find('.image').css('transform', 'translate(0, -50%) rotate(-5deg)');
    });
    /****************************************************/


    /****************************************************/
    $(document).mousemove(function(event) {
        var centerX = $(window).width() / 2;
        var centerY = $(window).height() / 2;
        var moveX = (event.clientX - centerX) / 30;
        var moveY = (event.clientY - centerY) / 30;
        
        $(".parallax-box").css({
            "transform": `perspective(500px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translate(${moveX * 5}px, ${moveY * 5}px)`
        });
    });
    
    /****************************************************/


    /****************************************************/
    // new CircleType($('.rounded-badge .content')[0]);
    // new CircleType($('.rounded-badge-background-effect')[0]);
    $('.rounded-badge .content').each(function () {
        new CircleType(this);
    });
    
    $('.rounded-badge-background-effect .content').each(function () {
        new CircleType(this);
    });
    /****************************************************/

    
    /****************************************************/
    // Counter Animation
    function animateCounter(el) {
        let finalValue = parseFloat($(el).text().replace(/,/g, ''));
        $(el).prop('Counter', 0).animate({
            Counter: finalValue
        }, {
            duration: 4500,
            easing: 'swing',
            step: function (now) {
                if (finalValue % 1 !== 0) {
                    $(this).text(now.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                } else {
                    $(this).text(Math.floor(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                }
            }
        });
    }

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    $('.counter .num').each(function() {
        observer.observe(this);
    });
    /****************************************************/



    /****************************************************/
    // Testimonials Swiper
    const testimonialsSwiper = new Swiper('.mySwiper.testimonialsSwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1200,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        loopedSlides: 10,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });
    /****************************************************/

});