const importMap = {
  imports: {
    three: "https://unpkg.com/three@0.152.2/build/three.module.js",
    GLTFLoader:
      "https://unpkg.com/three@0.152.2/examples/jsm/loaders/GLTFLoader.js",
    OrbitControls:
      "https://unpkg.com/three@0.152.2/examples/jsm/controls/OrbitControls.js",
  },
};

const importMapScript = document.createElement("script");
importMapScript.type = "importmap";
importMapScript.textContent = JSON.stringify(importMap);

document.head.appendChild(importMapScript);
