const goToPage0Button = document.getElementById("go-to-page-0");
const goToPage1Button = document.getElementById("go-to-page-1");
const goToPage3Button = document.getElementById("go-to-page-3");

function storeValue() {
    const num2 = document.getElementById('num2').value.toLowerCase();
    const num4 = document.getElementById('num4').value.toLowerCase();
    const num6 = document.getElementById('num6').value.toLowerCase();
    let value1;
    let value2;
    let value3;

    if (num2 === "a") {
        value1 = 0.5;
    } else if(num2 === "b"){
        value1 = 0.3;
    } else if(num2 === "c"){
        value1 = 0.1;
    }else{
        value1 = "유효하지 않는 값."
    }
    if (num4 === "a") {
        value2 = 0.5;
    } else if(num4 === "b"){
        value2 = 0.3;
    } else if(num4 === "c"){
        value2 = 0.1;
    }else{
        value2 = "유효하지 않는 값."
    }
    if (num6 === "a") {
        value3 = 0.5;
    } else if(num6 === "b"){
        value3 = 0.3;
    } else if(num6 === "c"){
        value3 = 0.1;
    }else{
        value3 = "유효하지 않는 값."
    }

    document.getElementById("result").innerHTML = `진로 선택 과목 점수는: ${(value1+value2+value3)/3}점 입니다.`;
  }

  goToPage0Button.addEventListener("click", function() {
	  // Navigate to the other HTML page
	  window.location.href = "index.html";
  });
  goToPage1Button.addEventListener("click", function() {
	  // Navigate to the other HTML page
	  window.location.href = "common.html";
  });
  goToPage3Button.addEventListener("click", function() {
	  // Navigate to the other HTML page
	  window.location.href = "career.html";
  });