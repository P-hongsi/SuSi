const showButton = document.getElementById("show-divs");
const hideButton = document.getElementById("hide-divs");
const divs = document.querySelectorAll(".my-div");
const goToPage0Button = document.getElementById("go-to-page-0");
const goToPage1Button = document.getElementById("go-to-page-1");
const goToPage3Button = document.getElementById("go-to-page-3");
let currentDivIndex = 0;

function addNumbers() {
    var s1 = (101-parseInt(document.getElementById("num2").value))*parseInt(document.getElementById("num1").value);
    var s2 = (101-parseInt(document.getElementById("num4").value))*parseInt(document.getElementById("num3").value);
    var s3 = (101-parseInt(document.getElementById("num6").value))*parseInt(document.getElementById("num5").value);
	var s4 = (101-parseInt(document.getElementById("num8").value))*parseInt(document.getElementById("num7").value);
    var s5 = (101-parseInt(document.getElementById("num10").value))*parseInt(document.getElementById("num9").value);
    var s6 = (101-parseInt(document.getElementById("num12").value))*parseInt(document.getElementById("num11").value);
	var s7 = (101-parseInt(document.getElementById("num14").value))*parseInt(document.getElementById("num13").value);
    var s8 = (101-parseInt(document.getElementById("num16").value))*parseInt(document.getElementById("num15").value);
    var s9 = (101-parseInt(document.getElementById("num18").value))*parseInt(document.getElementById("num17").value);
	var s10 = (101-parseInt(document.getElementById("num20").value))*parseInt(document.getElementById("num19").value);
    var s11 = (101-parseInt(document.getElementById("num22").value))*parseInt(document.getElementById("num21").value);
    var s12 = (101-parseInt(document.getElementById("num24").value))*parseInt(document.getElementById("num23").value);
	var s13 = (101-parseInt(document.getElementById("num26").value))*parseInt(document.getElementById("num25").value);
    var s14 = (101-parseInt(document.getElementById("num28").value))*parseInt(document.getElementById("num27").value);
    var s15 = (101-parseInt(document.getElementById("num30").value))*parseInt(document.getElementById("num29").value);
	var s16 = (101-parseInt(document.getElementById("num32").value))*parseInt(document.getElementById("num31").value);
    var s17 = (101-parseInt(document.getElementById("num34").value))*parseInt(document.getElementById("num33").value);
    var s18 = (101-parseInt(document.getElementById("num36").value))*parseInt(document.getElementById("num35").value);
	var s19 = (101-parseInt(document.getElementById("num38").value))*parseInt(document.getElementById("num37").value);
    var s20 = (101-parseInt(document.getElementById("num40").value))*parseInt(document.getElementById("num39").value);
    var s21 = (101-parseInt(document.getElementById("num42").value))*parseInt(document.getElementById("num41").value);
	var s22 = (101-parseInt(document.getElementById("num44").value))*parseInt(document.getElementById("num43").value);
    var s23 = (101-parseInt(document.getElementById("num46").value))*parseInt(document.getElementById("num45").value);
    var s24 = (101-parseInt(document.getElementById("num48").value))*parseInt(document.getElementById("num47").value);
	var s25 = (101-parseInt(document.getElementById("num50").value))*parseInt(document.getElementById("num49").value);
    var s26 = (101-parseInt(document.getElementById("num52").value))*parseInt(document.getElementById("num51").value);
    var sum = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12 + s13 + s14 + s15 + s16 + s17 + s18 + s19 + s20 + s21 + s22 + s23 + s24 + s25 + s26)
	/(parseInt(document.getElementById("num1").value)
	+parseInt(document.getElementById("num3").value)
	+parseInt(document.getElementById("num5").value)
	+parseInt(document.getElementById("num7").value)
	+parseInt(document.getElementById("num9").value)
	+parseInt(document.getElementById("num11").value)
	+parseInt(document.getElementById("num13").value)
	+parseInt(document.getElementById("num15").value)
	+parseInt(document.getElementById("num17").value)
	+parseInt(document.getElementById("num19").value)
	+parseInt(document.getElementById("num21").value)
	+parseInt(document.getElementById("num23").value)
	+parseInt(document.getElementById("num23").value)
	+parseInt(document.getElementById("num25").value)
	+parseInt(document.getElementById("num27").value)
	+parseInt(document.getElementById("num29").value)
	+parseInt(document.getElementById("num31").value)
	+parseInt(document.getElementById("num33").value)
	+parseInt(document.getElementById("num35").value)
	+parseInt(document.getElementById("num37").value)
	+parseInt(document.getElementById("num39").value)
	+parseInt(document.getElementById("num41").value)
	+parseInt(document.getElementById("num43").value)
	+parseInt(document.getElementById("num45").value)
	+parseInt(document.getElementById("num47").value)
	+parseInt(document.getElementById("num49").value)
	+parseInt(document.getElementById("num51").value));
	document.getElementById("result").innerHTML = sum;
  }

function showNextDiv() {
	const divs = document.querySelectorAll(".div-item");
	if (currentDivIndex < divs.length) {
	  divs[currentDivIndex].classList.remove("hidden");
	  currentDivIndex++;
	}
}

function hidePrevDiv() {
	const divs = document.querySelectorAll(".div-item");
	if (currentDivIndex > 0) {
	  currentDivIndex--;
	  divs[currentDivIndex].classList.add("hidden");
	}
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
