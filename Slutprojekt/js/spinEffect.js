document.getElementById('theSVGs').addEventListener('click', function() {
    // Check if the screen width is greater than 1024 pixels (considered as desktop)
    if (window.innerWidth > 1024) {
        this.classList.add('spin');
    }
});

document.getElementById('theSVGs').addEventListener('animationend', function() {
    this.classList.remove('spin');
});
