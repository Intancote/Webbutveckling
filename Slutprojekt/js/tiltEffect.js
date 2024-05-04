let svgElement = document.getElementById('theSVGs');
let currentRotateX = 0;
let currentRotateY = 0;
let smoothingFactor = 0.15; // Adjust this value to change the smoothness. A lower value makes the transition smoother.
let dampingFactor = 0.03; // Adjust this value to control the speed of the transition back to the original position.

// Function to apply tilt effect based on mouse position
function applyTiltEffect(e) {
    let rect = svgElement.getBoundingClientRect();
    let x = e.clientX - rect.left; // x position within the element.
    let y = e.clientY - rect.top; // y position within the element.
    let midX = rect.width / 2;
    let midY = rect.height / 2;
    let targetRotateX = (y - midY) / midY * -26; // Adjust the multiplier for more or less tilt
    let targetRotateY = (x - midX) / midX * 26; // Adjust the multiplier for more or less tilt

    // Gradually adjust the current rotation angles towards the target angles
    currentRotateX += (targetRotateX - currentRotateX) * smoothingFactor;
    currentRotateY += (targetRotateY - currentRotateY) * smoothingFactor;

    svgElement.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
}

// Function to smoothly reset the tilt effect
function resetTiltEffect() {
    let animation = requestAnimationFrame(function animate() {
        // Gradually decrease the rotation angles
        currentRotateX -= currentRotateX * dampingFactor;
        currentRotateY -= currentRotateY * dampingFactor;

        // Apply the new rotation angles
        svgElement.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;

        // If the rotation angles are close to 0, stop the animation
        if (Math.abs(currentRotateX) < 0.01 && Math.abs(currentRotateY) < 0.01) {
            cancelAnimationFrame(animation);
            svgElement.style.transform = 'none'; // Ensure the final state is exactly as expected
        } else {
            requestAnimationFrame(animate);
        }
    });
}

// Check if the screen width is greater than 1024 pixels (considered as desktop)
if (window.innerWidth > 1024) {
    // Add event listener for mousemove to apply tilt effect
    svgElement.addEventListener('mousemove', applyTiltEffect);

    // Add event listener for mouseleave to reset tilt effect
    svgElement.addEventListener('mouseleave', resetTiltEffect);
}
