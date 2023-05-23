//서비스워커(pwa앱이 오프라인 상태에서도 캐시된 파일을 이용하여 동작 가능하게하는 코드)
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/SuSi/sw.js", {
    scope: "/SuSi/",
  });
}