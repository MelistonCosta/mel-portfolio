<?php include "base-url.php" ?>
<?php include "layout/header.php" ?>
    <?php include "template-files/home/intro.php" ?>
    <?php include "template-files/home/banner.php" ?>
    <?php include "template-files/home/text-slider.php" ?>
    <?php include "template-files/home/uneven-cards.php" ?>
    <?php include "template-files/home/matter-pills.php" ?>
    <?php // include "template-files/home/text-slider-2.php" ?>
<?php include "layout/footer.php" ?>
<script async src="js/minified/jquery.min.js"></script>
<script async src="js/minified/lenis.min.js"></script>
<script async src="js/minified/kursor.min.js"></script>
<script async src="js/minified/SplitType.min.js"></script>
<script async src="js/minified/gsap.min.js"></script>
<script async src="js/minified/ScrollTrigger.min.js"></script>
<script async src="js/minified/swiper-bundle.min.js"></script>
<script async src="js/minified/circletype.min.js"></script>
<script async src="js/script.js"></script>
<script async src="js/home.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
<script>
    
    $(document).ready(function () {
            let animationStarted = false; // Prevent multiple initializations

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animationStarted) {
                        animationStarted = true; // Prevent re-trigger
                        startMatterJS();
                    }
                });
            }, { threshold: 0.3 });

            observer.observe(document.getElementById("pill-section"));

            function startMatterJS() {
                const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

                // Create engine and world
                const engine = Engine.create();
                const world = engine.world;

                // Create renderer
                const canvas = document.getElementById("matterCanvas");
                const render = Render.create({
                    canvas,
                    engine,
                    options: {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        background: "transparent",
                        wireframes: false
                    }
                });

                Render.run(render);
                Runner.run(Runner.create(), engine);

                // Get pills from HTML
                const pillBodies = [];
                const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#ffcc33", "#9933ff"];

                $("#pills-container .pill").each(function (index) {
                    const text = $(this).text();
                    const icon = $(this).attr("data-icon");
                    const color = colors[index % colors.length];

                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * window.innerHeight / 2;

                    const body = Bodies.rectangle(x, y, 140, 50, {
                        restitution: 0.6,
                        friction: 0.2,
                        borderRadius: 50,
                        render: {
                            fillStyle: color,
                            strokeStyle: "#fff",
                            lineWidth: 1,
                        }
                    });

                    body.text = `${icon} ${text}`;
                    body.color = color;
                    pillBodies.push(body);
                });

                Composite.add(world, pillBodies);

                // Add boundaries (floor & walls)
                const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, .1, { isStatic: true });
                const leftWall = Bodies.rectangle(0, window.innerHeight / 2, .1, window.innerHeight, { isStatic: true });
                const rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, .1, window.innerHeight, { isStatic: true });

                Composite.add(world, [ground, leftWall, rightWall]);

                // Add mouse control for dragging
                const mouse = Mouse.create(render.canvas);
                const mouseConstraint = MouseConstraint.create(engine, { mouse });
                Composite.add(world, mouseConstraint);

                // Custom render function to rotate text with object
                function renderText() {
                    const ctx = render.context;
                    ctx.clearRect(0, 0, render.canvas.width, render.canvas.height);
                    Render.world(render);

                    pillBodies.forEach(body => {
                        const { position, angle, text } = body;
                        ctx.save();
                        ctx.translate(position.x, position.y);
                        ctx.rotate(angle);
                        ctx.fillStyle = "#fff";
                        ctx.font = "20px Arial";
                        ctx.textAlign = "center";
                        ctx.fillText(text, 0, 5);
                        ctx.restore();
                    });

                    requestAnimationFrame(renderText);
                }

                renderText();

                // Handle window resize
                $(window).resize(() => {
                    render.canvas.width = window.innerWidth;
                    render.canvas.height = window.innerHeight;
                });
            }
        });
</script>