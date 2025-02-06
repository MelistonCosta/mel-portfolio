$(document).ready(function(){
    
    /****************************************************/
    // GSAP
    gsap.registerPlugin(ScrollTrigger);

    const tlPageLoad = gsap.timeline();

    tlPageLoad.to(".opener .split-screen", {
        width: 0,
        duration: 1,
        ease: "sine.out",
    })
    .to(".opener", {
        className: "d-none",
    }, "+=1")
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
    // Mouse Parallax
    $(document).mousemove(function(event) {
        let posX = event.clientX - $(window).width() / 2;
        let posY = event.clientY - $(window).height() / 2;
    
        $("section.custom-banner-animation .first, section.custom-banner-animation .last").css("transform", "translateX(" + posX * 0.001 + "%)");
        $("section.custom-banner-animation .main-img").css("transform", "translateX(" + -posX * 0.005 + "%)");
    });
    /****************************************************/

});