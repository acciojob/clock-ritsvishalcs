//your JS code here. If required.
const displayTimer = document.getElementById('timer');

setInterval(function () {
    const updateTimer = new Date();
    displayTimer.innerHTML = updateTimer.toLocaleTimeString();
}, 1000);
