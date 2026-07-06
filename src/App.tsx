import { useEffect, useRef } from "react";
import * as THREE from "three";

function App() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// پاک‌سازی کامل کانتینر برای جلوگیری از دو کانواس شدن
		if (containerRef.current) {
			containerRef.current.innerHTML = "";
		}

		const scene = new THREE.Scene();
		const geometry = new THREE.SphereGeometry(3, 64, 64);
		const material = new THREE.MeshStandardMaterial({ color: "#00ff83" });
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
		const light = new THREE.PointLight(0xffffff, 100, 100);
		light.position.set(0, 10, 10);
		scene.add(light);

		const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
		camera.position.z = 20;
		scene.add(camera);

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(sizes.width, sizes.height);
		renderer.render(scene, camera);
		containerRef.current?.appendChild(renderer.domElement);

		return () => {
			if (containerRef.current?.contains(renderer.domElement)) {
				containerRef.current.removeChild(renderer.domElement);
			}
			renderer.dispose();
		};
	}, []);

	return (
		<>
			<div ref={containerRef} />
		</>
	);
}

export default App;
