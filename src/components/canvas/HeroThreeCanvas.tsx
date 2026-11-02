"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff4d6, 3.0);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0a2540, 1.5);
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xf59e0b, 4, 30);
    pointLight.position.set(0, 2, 8);
    scene.add(pointLight);

    // 3. Helper: Generate 4-point 3D Star Shape
    function createStarShape(outerRadius: number, innerRadius: number) {
      const shape = new THREE.Shape();
      const points = 4;
      const step = Math.PI / points;

      for (let i = 0; i < 2 * points; i++) {
        const r = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = i * step - Math.PI / 2;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.closePath();
      return shape;
    }

    const extrudeSettings = {
      depth: 0.35,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.12,
      bevelThickness: 0.15,
    };

    // 4. Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0xd97706,
      emissiveIntensity: 0.15,
    });

    const emeraldMaterial = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      metalness: 0.75,
      roughness: 0.25,
      emissive: 0x059669,
      emissiveIntensity: 0.15,
    });

    const navyAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a2540,
      metalness: 0.9,
      roughness: 0.15,
    });

    // 5. Create Refined 3D Star Meshes
    const starShapeBig = createStarShape(1.4, 0.36);
    const starGeomBig = new THREE.ExtrudeGeometry(starShapeBig, extrudeSettings);

    const starShapeSmall = createStarShape(0.85, 0.22);
    const starGeomSmall = new THREE.ExtrudeGeometry(starShapeSmall, extrudeSettings);

    // Star 1: Majestic Gold Star (Upper Right - framing character cleanly)
    const star1 = new THREE.Mesh(starGeomBig, goldMaterial);
    star1.position.set(5.2, 3.5, 0);
    star1.rotation.z = 0.2;
    scene.add(star1);

    // Star 2: Emerald Sparkle (Lower Left - balancing typography & metrics)
    const star2 = new THREE.Mesh(starGeomSmall, emeraldMaterial);
    star2.position.set(-7.5, -2.8, 1.2);
    star2.rotation.z = -0.3;
    scene.add(star2);

    // Star 3: Deep Navy Architectural Star (Upper Left Open Margin - clear of headline)
    const star3 = new THREE.Mesh(starGeomSmall, navyAccentMaterial);
    star3.position.set(-10.2, 5.2, -2);
    star3.rotation.z = 0.4;
    scene.add(star3);

    // Star 4: Warm Gold Accent Star (Mid Right)
    const star4 = new THREE.Mesh(starGeomSmall, goldMaterial);
    star4.position.set(7.5, -1.8, -1.5);
    star4.rotation.z = -0.15;
    scene.add(star4);

    // 6. Floating Spheres & Pearls
    const sphereGeomBig = new THREE.SphereGeometry(0.3, 28, 28);
    const sphereGeomSmall = new THREE.SphereGeometry(0.2, 22, 22);

    const goldSphere = new THREE.Mesh(sphereGeomBig, goldMaterial);
    goldSphere.position.set(5.8, -4.2, 0.8);
    scene.add(goldSphere);

    const emeraldSphere = new THREE.Mesh(sphereGeomSmall, emeraldMaterial);
    emeraldSphere.position.set(-5.5, -4.8, 0.5);
    scene.add(emeraldSphere);

    const navySphere = new THREE.Mesh(sphereGeomSmall, navyAccentMaterial);
    navySphere.position.set(-8.2, 1.2, -2);
    scene.add(navySphere);

    // 7. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.001;
      mouseY = (e.clientY - windowHalfY) * 0.001;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 8. Animation Loop with Visibility / Intersection Pause Check
    let isVisible = true;
    let animationFrameId = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const wasVisible = isVisible;
        isVisible = entries[0].isIntersecting;
        if (isVisible && !wasVisible && !animationFrameId) {
          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const startTime = performance.now();

    const animate = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = (performance.now() - startTime) * 0.001;

      // Smooth camera interpolation toward mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 8;
      camera.position.y = -targetY * 8;
      camera.lookAt(0, 0, 0);

      // Star 1 organic motion
      star1.rotation.y = elapsed * 0.4;
      star1.rotation.x = Math.sin(elapsed * 0.5) * 0.2;
      star1.position.y = 3.8 + Math.sin(elapsed * 1.2) * 0.35;

      // Star 2 organic motion
      star2.rotation.y = -elapsed * 0.5;
      star2.rotation.z = Math.cos(elapsed * 0.6) * 0.3;
      star2.position.y = -2.8 + Math.cos(elapsed * 1.5) * 0.25;

      // Star 3 organic motion (deep background)
      star3.rotation.y = elapsed * 0.3;
      star3.position.y = 5.2 + Math.sin(elapsed * 0.9) * 0.25;

      // Star 4 organic motion
      star4.rotation.y = -elapsed * 0.35;
      star4.position.y = -1.8 + Math.cos(elapsed * 1.1) * 0.3;

      // Spheres bobbing
      goldSphere.position.y = -4.2 + Math.sin(elapsed * 1.4) * 0.2;
      emeraldSphere.position.y = -4.8 + Math.cos(elapsed * 1.3) * 0.2;
      navySphere.position.y = 1.2 + Math.sin(elapsed * 1.1) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeomBig.dispose();
      starGeomSmall.dispose();
      sphereGeomBig.dispose();
      sphereGeomSmall.dispose();
      goldMaterial.dispose();
      emeraldMaterial.dispose();
      navyAccentMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
}
