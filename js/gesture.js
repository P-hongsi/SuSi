let startY1;
let startY2;
let startX;
      document.addEventListener('touchstart', function(event) {
        let touch = event.touches[0];
        if (event.touches.length === 3) {
          const element2 = document.querySelector('#bsu');
          element2.click();
        }
        if (event.touches.length === 4) {
          const element3 = document.querySelector('#bku');
          element3.click();
        }
        if (event.touches.length === 5) {
          const element4 = document.querySelector('.icon');
          element4.click();
        }
        if (event.touches.length === 2) {
          let touch1 = event.touches[0];
          let touch2 = event.touches[1];
          startY1 = Math.max(touch1.clientY, touch2.clientY);
          const element = document.querySelector('.gesture');
          element.click();
        }
        startX = event.touches[0].clientX;
        startY2 = touch.clientY;
      });

      document.addEventListener('touchmove', function(event) {
        if (event.touches.length === 2) {
          let touch1 = event.touches[0];
          let touch2 = event.touches[1];

          let endY1 = Math.max(touch1.clientY, touch2.clientY);
          if (endY1 > startY1) {
            const element5 = document.querySelector('#close');
            element5.click();
          }
        }
      });

      document.addEventListener('touchend', function(event) {
        let touch = event.changedTouches[0];
        let endY2 = touch.clientY;
        if (event.touches.length < 2) {
          startY1 = null;
        }
        if (endY2 > startY2+160) {
          const element1 = document.querySelector('.navbar__toogleBtn');
          element1.click();
        }
        let endX = event.changedTouches[0].clientX;
        let deltaX = endX - startX;
        console.log(deltaX);
        if (deltaX > 150) {
          window.history.back();
        } else if (deltaX < -150) {
          window.history.forward();
        }
      });