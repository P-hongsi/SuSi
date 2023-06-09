import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import { OrbitControls } from "OrbitControls";

window.dispatchEvent(new Event("resize"));

// glTF 모델 로딩
const loader = new GLTFLoader();
loader.load(
  "/SuSi/etc/model_compressed.glb",
  function (gltf) {
    // 로딩된 모델을 장면에 추가합니다.
    scene.add(gltf.scene);

    // 렌더러의 캔버스 요소의 위치와 크기를 조정합니다.
    const canvas = renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// WebGLRenderer 초기화
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 장면 생성
const scene = new THREE.Scene();

// 카메라 생성
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 카메라 초기 위치 설정
camera.position.set(0, 0, 1);

// OrbitControls 생성
const controls = new OrbitControls(camera, renderer.domElement);
function handleDarkModeChange(event) {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    renderer.setClearColor(0x6676b5);
  } else {
    renderer.setClearColor(0xff990a);
  }
}

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeQuery.addListener(handleDarkModeChange);
handleDarkModeChange(darkModeQuery);

// 애니메이션 루프
function animate() {
  requestAnimationFrame(animate);
  const model = scene.children[0];
  model.rotation.y += 0.001;
  // 렌더링
  renderer.render(scene, camera);
}

// 애니메이션 시작
animate();

// 창 크기 변경 시 렌더러 크기 업데이트
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
