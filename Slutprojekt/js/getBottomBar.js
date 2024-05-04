document.addEventListener("DOMContentLoaded", function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './bottomBar.html', true);
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) {
            return;
        }
        if (this.status == 200) {
            document.getElementById('bottomBar').innerHTML = this.responseText;
        }
    };
    xhr.send();
});