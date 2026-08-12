"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = document.getElementById("canvas-bg") as HTMLCanvasElement;
    if (!canvas) return;

    // THREE.JS ANIMATION COMMENTED OUT - USING CSS BACKGROUND DESIGN INSTEAD

    /* 
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 5);

    // Particle System - Small dots following mouse
    const PC = 3500;
    const pPos = new Float32Array(PC * 3);
    const pColor = new Float32Array(PC * 3);
    const pSize = new Float32Array(PC);
    const pVel: any[] = [];
    const cWhite = new THREE.Color(0xffffff);
    const cPurple = new THREE.Color(0xa78bfa);

    for (let i = 0; i < PC; i++) {
      const i3 = i * 3;
      pPos[i3] = (Math.random() - 0.5) * 20;
      pPos[i3 + 1] = (Math.random() - 0.5) * 12;
      pPos[i3 + 2] = (Math.random() - 0.5) * 10;
      pVel.push({
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.004,
        z: (Math.random() - 0.5) * 0.002,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.6,
        targetX: 0,
        targetY: 0,
      });
      const t = Math.random();
      const c = t < 0.6 ? cWhite : cPurple;
      pColor[i3] = c.r;
      pColor[i3 + 1] = c.g;
      pColor[i3 + 2] = c.b;
      pSize[i] = 0.6 + Math.random() * 1.2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(pColor, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(pSize, 1));

    const mat = new THREE.ShaderMaterial({
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      uniforms: { uTime: { value: 0 }, uFade: { value: 1.0 } },
      vertexShader: `
        attribute float size; varying vec3 vColor; varying float vAlpha;
        uniform float uTime; uniform float uFade;
        void main(){
          vColor=color;
          vec4 mv=modelViewMatrix*vec4(position,1.0);
          float d=length(mv.xyz);
          vAlpha=smoothstep(15.0,0.5,d)*0.85*uFade;
          gl_PointSize=size*(250.0/-mv.z);
          gl_Position=projectionMatrix*mv;
        }`,
      fragmentShader: `
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vec2 uv=gl_PointCoord-0.5; float d=length(uv);
          float a=smoothstep(0.5,0.05,d)*vAlpha;
          gl_FragColor=vec4(vColor,a);
        }`,
    });

    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    // Mouse tracking
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const clock = new THREE.Clock();

    const updateCursor = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    document.addEventListener("mousemove", updateCursor);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      mat.uniforms.uTime.value = t;

      // Fade particles based on scroll
      const heroFade = Math.max(
        0,
        1 - scrollYRef.current / (window.innerHeight * 0.8),
      );
      mat.uniforms.uFade.value = lerp(mat.uniforms.uFade.value, heroFade, 0.05);

      // Smooth mouse following
      mouse.x = lerp(mouse.x, mouse.tx, 0.05);
      mouse.y = lerp(mouse.y, mouse.ty, 0.05);

      const pos = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < PC; i++) {
        const i3 = i * 3;
        const v = pVel[i];

        // Mouse attraction with smooth easing
        const dx = mouse.x * 3 - pos[i3];
        const dy = mouse.y * 2 - pos[i3 + 1];

        v.targetX = dx * 0.0015;
        v.targetY = dy * 0.0015;

        v.x = lerp(v.x, v.targetX, 0.08);
        v.y = lerp(v.y, v.targetY, 0.08);

        // Position update with smooth animation
        pos[i3] += Math.sin(t * v.speed + v.phase) * 0.0005 + v.x;
        pos[i3 + 1] += Math.cos(t * v.speed * 0.7 + v.phase) * 0.0005 + v.y;
        pos[i3 + 2] += Math.sin(t * v.speed * 0.5 + v.phase) * 0.0003 + v.z;

        // Boundary wrapping
        if (pos[i3] > 10) pos[i3] = -10;
        if (pos[i3] < -10) pos[i3] = 10;
        if (pos[i3 + 1] > 6) pos[i3 + 1] = -6;
        if (pos[i3 + 1] < -6) pos[i3 + 1] = 6;
        if (pos[i3 + 2] > 8) pos[i3 + 2] = -8;
        if (pos[i3 + 2] < -8) pos[i3 + 2] = 8;
      }
      geo.attributes.position.needsUpdate = true;

      camera.position.x = lerp(camera.position.x, mouse.x * 0.3, 0.06);
      camera.position.y = lerp(camera.position.y, mouse.y * 0.2, 0.06);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
    */

  }, []);

  return null;
}

export function ScrollObserver() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollYRef = { current: window.scrollY };
      const nav = document.getElementById("fixed-nav");

      if (window.scrollY > 60) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }

      // Update scroll for Three.js scene
      const event = new CustomEvent("portfolioScroll", {
        detail: { scrollY: window.scrollY },
      });
      window.dispatchEvent(event);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
