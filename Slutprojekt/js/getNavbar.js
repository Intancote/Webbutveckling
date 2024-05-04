document.addEventListener("DOMContentLoaded", function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './navbar.html', true);
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) {
            return;
        }
        if (this.status == 200) {
            document.getElementById('navbar').innerHTML = this.responseText;
            // Load rustSecret.js after the navbar is inserted
            let script = document.createElement('script');
            script.src = './js/rustSecret.js';
            document.body.appendChild(script);
        }
    };
    xhr.send();
});