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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
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

    // 5. Create Star Meshes
    const starShapeBig = createStarShape(1.8, 0.45);
    const starGeomBig = new THREE.ExtrudeGeometry(starShapeBig, extrudeSettings);

    const starShapeSmall = createStarShape(1.1, 0.28);
    const starGeomSmall = new THREE.ExtrudeGeometry(starShapeSmall, extrudeSettings);

    // Star 1: Large Gold Star (Top Right of Hero)
    const star1 = new THREE.Mesh(starGeomBig, goldMaterial);
    star1.position.set(7.5, 4.5, 0);
    star1.rotation.z = 0.2;
    scene.add(star1);

    // Star 2: Emerald Sparkle (Bottom Left of Hero)
    const star2 = new THREE.Mesh(starGeomSmall, emeraldMaterial);
    star2.position.set(-8.0, -3.2, 2);
    star2.rotation.z = -0.3;
    scene.add(star2);

    // Star 3: Deep Navy Accent Star (Top Left)
    const star3 = new THREE.Mesh(starGeomSmall, navyAccentMaterial);
    star3.position.set(-6.5, 4.8, -2);
    scene.add(star3);

    // 6. Floating Spheres / Geometric beads
    const sphereGeom = new THREE.SphereGeometry(0.35, 32, 32);
    const goldSphere = new THREE.Mesh(sphereGeom, goldMaterial);
    goldSphere.position.set(6.2, -4.5, 1);
    scene.add(goldSphere);

    const emeraldSphere = new THREE.Mesh(new THREE.SphereGeometry(0.25, 24, 24), emeraldMaterial);
    emeraldSphere.position.set(-4.5, -5.0, 0);
    scene.add(emeraldSphere);

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

    // 8. Animation Loop with Visibility / Intersection Check
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation toward mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 8;
      camera.position.y = -targetY * 8;
      camera.lookAt(0, 0, 0);

      // Star 1 organic motion
      star1.rotation.y = elapsed * 0.4;
      star1.rotation.x = Math.sin(elapsed * 0.5) * 0.2;
      star1.position.y = 4.5 + Math.sin(elapsed * 1.2) * 0.35;

      // Star 2 organic motion
      star2.rotation.y = -elapsed * 0.5;
      star2.rotation.z = Math.cos(elapsed * 0.6) * 0.3;
      star2.position.y = -3.2 + Math.cos(elapsed * 1.5) * 0.25;

      // Star 3 organic motion
      star3.rotation.y = elapsed * 0.3;
      star3.position.y = 4.8 + Math.sin(elapsed * 0.9) * 0.3;

      // Spheres bobbing
      goldSphere.position.y = -4.5 + Math.sin(elapsed * 1.4) * 0.2;
      emeraldSphere.position.y = -5.0 + Math.cos(elapsed * 1.3) * 0.2;

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
      sphereGeom.dispose();
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
