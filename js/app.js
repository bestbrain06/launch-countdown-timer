function countDown() {
  const countDate = new Date("september 16, 2023 11:30:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // conversion of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculating the days, minutes and days

  const displayDay = Math.floor(gap / day);
  const displayHour = Math.floor((gap % day) / hour);
  const displayMinute = Math.floor((gap % hour) / minute);
  const displaySecond = Math.floor((gap % minute) / second);

  document.querySelector(".days").textContent = displayDay;
  document.querySelector(".hours").textContent = displayHour;
  document.querySelector(".minutes").textContent = displayMinute;
  document.querySelector(".seconds").textContent = displaySecond;
}

setInterval(countDown, 1000);
