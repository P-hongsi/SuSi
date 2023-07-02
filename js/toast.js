const noti = document.querySelector("#noti");
const storedTime = localStorage.getItem("접속시간");
const currentTime = getCurrentTime();
const notification = document.querySelector(".notification");

if (storedTime) {
  const timeDiff = getTimeDifference(storedTime, currentTime);
  let seconds;
  if (timeDiff >= 3600000 && timeDiff < 86400000) {
    seconds = Math.floor(timeDiff / 3600000);
  } else if (timeDiff >= 60000 && timeDiff < 86400000) {
    seconds = Math.floor(timeDiff / 60000);
  } else if (timeDiff < 60000 && timeDiff < 86400000) {
    seconds = Math.floor(timeDiff / 1000);
  } else {
    seconds = null;
  }

  notification.classList.remove("hidden");
  noti.innerText = seconds
    ? `${seconds}${
        timeDiff < 60000 ? "초" : timeDiff < 3600000 ? "분" : "시간"
      } 만이네요 👋`
    : "오랜만이에요 👋";

  localStorage.setItem("접속시간", currentTime);
} else {
  localStorage.setItem("접속시간", currentTime);
  notification.classList.remove("hidden");
  noti.innerText = "만나서 반가워요 👋";
}

function getCurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = addZeroPadding(now.getMonth() + 1);
  const day = addZeroPadding(now.getDate());
  const hours = addZeroPadding(now.getHours());
  const minutes = addZeroPadding(now.getMinutes());
  const seconds = addZeroPadding(now.getSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function addZeroPadding(number) {
  return number < 10 ? `0${number}` : number;
}

function getTimeDifference(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  return end.getTime() - start.getTime();
}
