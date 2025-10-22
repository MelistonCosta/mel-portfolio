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
    });

    if (window.matchMedia('(max-width: 767px)').matches) {
        tlBannerCounter.fromTo("section.home-banner .image .btn-holder .button", {
            minWidth: "0",
        }, {
            duration: 2,
            minWidth: "200",
            ease: "power3.out"
        }, "<")

    } else {
        tlBannerCounter.fromTo("section.home-banner .image .btn-holder .button", {
            minWidth: "0",
        }, {
            duration: 2,
            minWidth: "350",
            ease: "power3.out"
        }, "<")
    }
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
    if (window.matchMedia('(max-width: 991px)').matches) {

    } else {
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
    }
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
    // Skills Swiper
    const skillsSwiper = new Swiper('.mySwiper.skillsSwiper', {
        slidesPerView: "auto",
        spaceBetween: 50,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 0,
        },
        // pagination: {
        //     el: ".testimonialsPage",
        //     dynamicBullets: true,
        //     clickable: true,
        // },
        // loopedSlides: 10,
        // watchSlidesProgress: true,
        // watchSlidesVisibility: true,
        breakpoints: {
            320: {
                spaceBetween: 15,
            },
            768: {
                spaceBetween: 25,
            },
            1200: {
                spaceBetween: 50,
            },
        }
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
        pagination: {
            el: ".testimonialsPage",
            dynamicBullets: true,
            clickable: true,
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



    /****************************************************/
    // Lottie animation - Contact
    var animation = lottie.loadAnimation({
        container: document.getElementById('form-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './lottie/form-animation.json'
    });

    /****************************************************/
    
    
    
    
    /****************************************************/
    // Email validation function
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Phone validation function
    function validatePhone(phone) {
        var re = /^[0-9]{10}$/;
        return re.test(phone);
    }

    // Full Name
    $('#full_name').on('input', function () {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, ''); // removes numbers & special characters
    });

    // Email validation on input
    $('#email').on('input', function() {
        var email = $(this).val();
        var isValid = true;
        if (email === '') {
            isValid = false;
        } else if (!validateEmail(email)) {
            isValid = false;
        }
    });

    // Phone validation on input
    $('#phone').on('input', function() {
        var phone = $(this).val();
        var isValid = true;
        if (phone === '') {
            isValid = false;
        } else if (!validatePhone(phone)) {
            isValid = false;
        }
        // Remove any non-digit characters
        this.value = this.value.replace(/[^0-9]/g, '');
        // Limit the input to a maximum of 10 digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });
    /****************************************************/


    /****************************************************/
    $(document).keydown(function(event) {
        // if ($('section.contact').hasClass('active')) {
        // }
        // else {
        //     // Disable the 'i' key
        //     if (event.key === 'i') {
        //         event.preventDefault();
        //     }
        //     // Disable the 'Shift' key
        //     if (event.shiftKey) {
        //         event.preventDefault();
        //     }
        //     // Disable the 'Ctrl' key
        //     if (event.ctrlKey) {
        //         event.preventDefault();
        //     }
        // }
    });

    emailjs.init({
        publicKey: "SQvyVoG-nXUcGGPXg",
    });

    $('form#contact-form').on('submit', function(event) {
        $("span.formName").text($("input#full_name").val());
        $("span.formPhoneNum").text($("input#phone").val());
        $("span.formEmailID").text($("input#email_id").val());
        event.preventDefault();
        const formData = {
            full_name: $('#full_name').val(),
            company: $('#company').val(),
            email_id: $('#email_id').val(),
            phone: $('#phone').val(),
            message: $('#message').val()
        };
        emailjs.send('service_fs5tgip', 'template_2wwoiuh', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                $('form#contact-form').addClass("d-none");
                $('.thank-you').removeClass("d-none").addClass("d-flex");
                setTimeout(function () {
                    $('.thank-you').addClass("animate-me");
                }, 500);
                // $('form#contact-form')[0].reset();
                // $("section.contact").removeClass("active");
                // $("html").removeAttr("style");
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

    /****************************************************/


    /****************************************************/
    // Web Security
    $(document).on('contextmenu', function(event) {
        event.preventDefault();
    });
    /****************************************************/
    

    /****************************************************/
    // Scroll to contact
    $('.scrollToContact').on('click', function(e) {
        e.preventDefault();
        
        const headerHeight = $('header').outerHeight() || 0; // Adjust for fixed header
        const target = $('#contact');
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 700, 'swing');
        }
    });
    /****************************************************/
    
    
    /****************************************************/
    // If URL matches:
    const hash = window.location.hash;
    const headerHeight = $('header').outerHeight() || 0;

    if (hash === '#contact' && $('#contact').length) {
        $('html, body').animate({ 
            scrollTop: $('#contact').offset().top - headerHeight
        }, 700, 'swing');
    }
    else if (hash === '#about' && $('#about').length) {
        $('html, body').animate({
            scrollTop: $('section#about').offset().top - headerHeight
        }, 700, 'swing');
    }
    else if (hash === '#projects' && $('#projects').length) {
        $('html, body').animate({
            scrollTop: $('section#projects').offset().top - headerHeight
        }, 700, 'swing');
    }
    else if (hash === '#skills' && $('#skills').length) {
        $('html, body').animate({
            scrollTop: $('section#skills').offset().top - headerHeight
        }, 700, 'swing');
    }
    else if (hash === '#testimonials' && $('#testimonials').length) {
        $('html, body').animate({
            scrollTop: $('section#testimonials').offset().top - headerHeight
        }, 700, 'swing');
    }
    /****************************************************/

});