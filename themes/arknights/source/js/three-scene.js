// three-scene.js
(function() {
  // 等待 DOM 加载完成
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('three-container');
    if (!container) return; // 如果没有容器则不执行

    // 初始化场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e); // 深色背景

    // 相机
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // 渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // 添加几何体示例
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x9d00e1, // 紫色，匹配你的主题色
      metalness: 0.5,
      roughness: 0.5
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 动画循环
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // 窗口大小调整
    window.addEventListener('resize', function() {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });
  });
})();