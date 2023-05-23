//2분의 시간동안 아무 동작 변화 없으면 특정페이지로 넘어가는 코드
let timer;
function resetTimer() {
  clearTimeout(timer);
  if (window.innerWidth >= 768) {
    timer = setTimeout(function () {
      window.location.href = "/SuSi/etc/ThxU.html";
    }, 120000);
  }
}
window.addEventListener("mousemove", resetTimer);
window.addEventListener("mousedown", resetTimer);
window.addEventListener("keypress", resetTimer);
window.addEventListener("touchmove", resetTimer);
window.addEventListener("scroll", resetTimer);
window.addEventListener("load", resetTimer);
window.addEventListener("click", resetTimer);
window.addEventListener("resize", resetTimer);
window.addEventListener("blur", function () {
  clearTimeout(timer);
});

//창을 바꿔서 블러되면 html의 title을 바꾸는 코드
let doctitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Bye!";
});
window.addEventListener("focus", () => {
  document.title = doctitle;
});

//버튼위에 4초동안 마우스포인터가 올려져있으면 hover-link라는 클래스를 가진 요소의 data-url로 이동하는 코드
let timer2;
document
  .querySelector(".hover-link")
  .addEventListener("mouseover", () => {
    timer2 = setTimeout(() => {
      const url = document
        .querySelector(".hover-link")
        .getAttribute("data-url");
      window.location.href = url;
    }, 4000);
  });
document.querySelector(".hover-link").addEventListener("mouseout", () => {
  clearTimeout(timer2);
});