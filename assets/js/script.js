
function checkPassword() {
    const input = document.getElementById("password").value;
    const correctPassword = "12.09.26";
    if (input === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("site-content").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Parolă incorectă!";
    }
}

const countdown = () => {
    const countDate = new Date("September 12, 2026 19:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById("countdown").innerText = 
        `${textDay} zile ${textHour} ore ${textMinute} minute ${textSecond} secunde`;
};

setInterval(countdown, 1000);
