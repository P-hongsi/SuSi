const goToPage0Button = document.getElementById("go-to-page-0");
const goToPage1Button = document.getElementById("go-to-page-1");
const goToPage3Button = document.getElementById("go-to-page-3");
const uni = {
	국어국문학과:97.7,
	중어중문학과:98.38000000000001,
	일어일문학과:97.71,
	영어영문학과:98.49,
	불어불문학과:94.99,
	독어독문학과:97.08,
	노어노문학과:94.89,
	한문학과:98.05,
	언어정보학과:98.13000000000001,
	사학과:98.49,
	철학과:97.99,
	고고학과:97.57000000000001,
	행정학과:99.1,
	정치외교학과:98.92,
	사회복지학과:98.31,
	사회학과:98.17,
	심리학과:98.89,
	문헌정보학과:98.83,
	미디어커뮤니케이션학과:99.11,
	수학과:98.84,
	통계학과:98.71,
	물리학과:98.16,
	화학과:99.19,
	생명과학과:99.23,
	미생물학과:98.54,
	분자생물학과:98.8,
	지질환경과학과:97.92999999999999,
	대기환경과학과:98.64,
	해양학과:98.09,
	기계공학부:99.37,
	고분자공학과:99.19,
	유기소재시스템공학과:98.87,
	화공생명환경공학부화공생명공학전공:99.85,
	화공생명환경공학부환경공학전공:99.04,
	재료공학부:99.11,
	전자공학과:99.54,
	전기공학과:99.27,
	건설융합학부건축공학전공:98.58,
	건설융합학부건축학전공:98.66000000000001,
	건설융합학부도시공학전공:98.28,
	건설융합학부토목공학전공:98.29,
	항공우주공학과:98.85,
	산업공학과:98.83,
	조선해양공학과:98.25,
	국어교육과:98.82,
	영어교육과:99.49,
	독어교육과:98.06,
	교육학과:99.04,
	유아교육과:99.08999999999999,
	특수교육과:98.33,
	일반사회교육과:98.71,
	역사교육과:98.94,
	지리교육과:98.98,
	윤리교육과:99.14,
	수학교육과:99.51,
	화학교육과:98.97,
	생물교육과:99.22999999999999,
	지구과학교육과:98.91000000000001,
	경영학과:99.04,
	무역학부:99.09,
	경제학부:99.13,
	관광컨벤션학과:98.93,
	공공정책학부:99.15,
	간호학과:99.53,
	아동가족학과:98.13,
	의류학과:98.18,
	식품영양학과:98.77,
	실내환경디자인학과:98.35,
	디자인학과디자인앤테크놀로지전공:98.91000000000001,
	예술문화영상학과:98.91,
	식물생명과학과:97.87,
	원예생명과학과:95.88000000000001,
	동물생명자원과학과:97.4,
	식품공학과:92.88,
	생명환경화학과:97.79,
	바이오소재과학과:97.77,
	바이오산업기계공학과:98.0,
	IT응용공학과:98.5,
	바이오환경에너지학과:96.73,
	조경학과:96.59,
	식품자원경제학과:97.54,
	광메카트로닉스공학과:98.61,
	나노에너지공학과:98.3,
	나노메카트로닉스공학과:98.58,
	스포츠과학부:97.33,
	의예과:100.45,
	한의학전문대학원:100.06,
	정보컴퓨터공학부:99.5,
	의생명융합공학부:99.11
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
function compareValues() {
	const key = document.getElementById("key").value;
	const value = Number(document.getElementById("value1").value)+Number(document.getElementById("value2").value);

	if (!uni.hasOwnProperty(key)) {
	  document.getElementById("result").innerHTML = "유효하지 않은 키.";
	} else if (isNaN(value)) {
	  document.getElementById("result").innerHTML = "유효한 숫자를 입력하세요.";
	} else if (value === uni[key]) {
	  document.getElementById("result").innerHTML = `당신의 점수는 2022년도 "${key}"의 평균 점수와 일치합니다.`;
	} else if (value > uni[key]) {
	  document.getElementById("result").innerHTML = `당신의 점수는 2022년도 "${key}"의 평균 점수보다 ${value - uni[key]}만큼 높습니다.`;
	} else {
	  document.getElementById("result").innerHTML = `당신의 점수는 2022년도 "${key}"의 평균 점수보다 ${uni[key] - value}만큼 낮습니다.`;
	}
  }