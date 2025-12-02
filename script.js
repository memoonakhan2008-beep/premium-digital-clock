function updateClock() {
    let now = new Date();

    // TIME
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("time").innerHTML = `${h}:${m}:${s}`;

    // DATE
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];

    let dayName = days[now.getDay()];
    let month = months[now.getMonth()];
    let dateNum = now.getDate();
    let year = now.getFullYear();

    document.getElementById("date").innerHTML = `${dayName}, ${dateNum} ${month} ${year}`;
}

setInterval(updateClock, 1000);