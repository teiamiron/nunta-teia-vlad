
// Countdown simplu
const countdown = document.getElementById('countdown');
const weddingDate = new Date("2026-09-12T19:00:00");
setInterval(() => {
    const now = new Date();
    const diff = weddingDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.innerText = d > 0 ? `Mai sunt ${d} zile!` : "A sosit ziua cea mare!";
}, 1000);
