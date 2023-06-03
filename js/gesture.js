let startY1;
let startY2;
      
      document.addEventListener('touchstart', function(event) {
        var touch = event.touches[0];
        if (event.touches.length === 3) {
          var element2 = document.querySelector('#bsu');
          element2.click();
        }
        if (event.touches.length === 4) {
          var element3 = document.querySelector('#bku');
          element3.click();
        }
        if (event.touches.length === 5) {
          var element4 = document.querySelector('.icon');
          element4.click();
        }
        if (event.touches.length === 2) {
          var touch1 = event.touches[0];
          var touch2 = event.touches[1];
          startY1 = Math.max(touch1.clientY, touch2.clientY); // 두 손가락 중 가장 아래에 있는 Y 좌표 저장
        }
        startY2 = touch.clientY; // 터치 시작 Y 좌표 저장
      });

      document.addEventListener('touchmove', function(event) {
        if (event.touches.length === 2) {
          var touch1 = event.touches[0];
          var touch2 = event.touches[1];

          var endY1 = Math.max(touch1.clientY, touch2.clientY); // 두 손가락 중 현재 가장 아래에 있는 Y 좌표
          if (endY1 > startY1) {
            var element5 = document.querySelector('#close');
            element5.click();
          }
        }
      });

      document.addEventListener('touchend', function(event) {
        var touch = event.changedTouches[0];
        var endY2 = touch.clientY;
        if (event.touches.length < 2) {
          startY1 = null; // 터치가 끝나면 시작 Y 좌표 초기화
        }
        if (endY2 > startY2+160) {
          var element1 = document.querySelector('.navbar__toogleBtn');
          element1.click();
        }
      });
document.addEventListener('touchstart', function(event) {
    if (event.touches.length === 2) {
      const element = document.querySelector('.gesture');
      element.click();
    }
});