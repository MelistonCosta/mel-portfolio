<section class="position-relative overflow-hidden">
<div id="pill-section" class="pill-section">
        <canvas id="matterCanvas"></canvas>

        <!-- Pills stored in HTML -->
        <div id="pills-container">
            <div class="pill" data-icon="🔥">Fire</div>
            <div class="pill" data-icon="💡">Idea</div>
            <div class="pill" data-icon="🎨">Design</div>
            <div class="pill" data-icon="🚀">Launch</div>
            <div class="pill" data-icon="⚡">Speed</div>
        </div>
    </div>
</section>

<style>
    .pill-section { height: 100vh; display: flex; align-items: center; justify-content: center; }
    #pills-container { display: none; } /* Pills stored in HTML but not visible */
    canvas { display: block; } /* Hide pills, as we will load them in Matter.js */
</style>


