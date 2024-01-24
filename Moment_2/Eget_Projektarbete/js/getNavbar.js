document.addEventListener("DOMContentLoaded", function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './navbar.html', true);
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) {
            return;
        }
        if (this.status == 200) {
            document.getElementById('navbar').innerHTML = this.responseText;
        }
    };
    xhr.send();
});