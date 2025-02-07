$(document).ready(function(){
    
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
    tlPageLoad.to(".opener .split-screen.right-screen", {
        x: "200%",
        duration: 2,
        ease: "sine.out",
    },"<")
    .to(".opener", {
        className: "d-none",
    })
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
    }, "+=.5");

    /****************************************************/


    /****************************************************/
    // Swiper JS
    const textSwiper = new Swiper('.mySwiper.textSwiper', {
        slidesPerView: "auto",
        centeredSlides: true,
        speed: 3000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            reverseDirection: false
        },
        allowTouchMove: false, // Disable touch movement
        keyboard: {
            enabled: false,
        },
        mousewheel: {
            enabled: false,
        },
        grabCursor: false,
        loopedSlides: 10, // Adjust for smoother looping
        watchSlidesProgress: true, // Helps prevent blank slides
        watchSlidesVisibility: true, // Ensures slides stay visible
    });

    const textSwiper2 = new Swiper('.mySwiper.textSwiper2', {
        slidesPerView: "auto",
        centeredSlides: true,
        speed: 3000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            reverseDirection: false
        },
        allowTouchMove: false, // Disable touch movement
        keyboard: {
            enabled: false,
        },
        mousewheel: {
            enabled: false,
        },
        grabCursor: false,
        loopedSlides: 10, // Adjust for smoother looping
        watchSlidesProgress: true, // Helps prevent blank slides
        watchSlidesVisibility: true, // Ensures slides stay visible
    });
    /****************************************************/


    /****************************************************/
    // Mouse Parallax
    $(document).mousemove(function(event) {
        let posX = event.clientX - $(window).width() / 2;
        let posY = event.clientY - $(window).height() / 2;
    
        $("section.custom-banner-animation .first, section.custom-banner-animation .last").css("transform", "translateX(" + posX * 0.001 + "%)");
        $("section.custom-banner-animation .main-img").css("transform", "translateX(" + -posX * 0.005 + "%)");
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

});