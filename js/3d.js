import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import { OrbitControls } from "OrbitControls";

window.dispatchEvent(new Event("resize"));

// glTF model loading
const loader = new GLTFLoader();
loader.load(
  "/SuSi/etc/model.glb",
  function (gltf) {
    // Add the loaded model to the scene
    scene.add(gltf.scene);

    // Adjust the position and size of the renderer's canvas element
    const canvas = renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.width = "100%";
    canvas.style.height = "107%";
    canvas.style.zIndex = "-1";
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// WebGLRenderer initialization
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Scene creation
const scene = new THREE.Scene();

// Camera creation
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 카메라 초기 위치 설정
camera.position.set(0, 0, 1);

// OrbitControls creation
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

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rendering
  renderer.render(scene, camera);
}

// Start the animation
animate();

// 창 크기 변경 시 렌더러 크기 업데이트
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});