import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import { OrbitControls } from "OrbitControls";

window.dispatchEvent(new Event("resize"));

// glTF 모델 로딩
const loader = new GLTFLoader();
loader.load(
  "/SuSi/etc/p1.glb",
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
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/SuSi/etc/cb.png', () => {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2,1);
});

// WebGLRenderer 초기화
let renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 장면 생성
const scene = new THREE.Scene();
scene.background = texture;

// 카메라 생성
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 카메라 초기 위치 설정
camera.position.set(1,6,12);

// OrbitControls 생성
const controls = new OrbitControls(camera, renderer.domElement);

// 애니메이션 루프
function animate() {
  requestAnimationFrame(animate);
  const model = scene;
  model.rotation.y += 0.05;
  // 렌더링
  renderer.render(scene, camera);

console.log(camera.position);
}

// 애니메이션 시작
animate();

// 창 크기 변경 시 렌더러 크기 업데이트
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});