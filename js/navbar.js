//네비게이션바(nav바)대학 이동 동작 코드
const toggleBtn = document.querySelector(".navbar__toogleBtn");
const menu = document.querySelector(".navbar__menu");
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

//로컬스토리지
function clearLocalStorage() {
  window.localStorage.removeItem("common");
  window.localStorage.removeItem("select");
  window.localStorage.removeItem("career");
  window.localStorage.removeItem("팝업");
  window.localStorage.removeItem("vaild");
}