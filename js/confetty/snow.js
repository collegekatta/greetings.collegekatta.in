let duration = 100 * 1000,
animationEnd = Date.now() + duration;

let skew = 1;

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}


function snowConfetti() {
    const timeLeft = animationEnd - Date.now(),
        ticks = Math.max(200, 500 * (timeLeft / duration));

    skew = Math.max(0.8, skew - 0.001);

    confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: Math.random() * skew - 0.2,
        },
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        shapes: ["circle", "square", 'heart'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
        wobble: {
            "distance": 30,
            "enable": true,
            "speed": {
              "min": -7,
              "max": 7
            }
          },
    });

    if (timeLeft > 0) {
        requestAnimationFrame(snowConfetti);
    }
};
