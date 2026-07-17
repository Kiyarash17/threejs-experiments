import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function useSphereScene() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		container.innerHTML = "";

		const scene = new THREE.Scene();

		const geometry = new THREE.SphereGeometry(3, 64, 64);
		const material = new THREE.MeshStandardMaterial({ color: "#00ff83" });
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		const light = new THREE.PointLight(0xffffff, 100, 100);
		light.position.set(0, 10, 10);
		scene.add(light);

		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
		camera.position.z = 20;

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		container.appendChild(renderer.domElement);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.enablePan = false;
		controls.enableZoom = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 5;

		let frameId = 0;
		const animate = () => {
			controls.update();
			renderer.render(scene, camera);
			frameId = requestAnimationFrame(animate);
		};
		animate();

		const handleResize = () => {
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();
			renderer.setSize(sizes.width, sizes.height);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener("resize", handleResize);
			controls.dispose();
			geometry.dispose();
			material.dispose();
			renderer.dispose();
			if (container.contains(renderer.domElement)) {
				container.removeChild(renderer.domElement);
			}
		};
	}, []);

	return containerRef;
}
