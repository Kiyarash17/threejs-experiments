import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function App() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.innerHTML = "";
		}

		// Scene
		const scene = new THREE.Scene();

		// Mesh
		const geometry = new THREE.SphereGeometry(3, 64, 64);
		const material = new THREE.MeshStandardMaterial({ color: "#00ff83" });
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		// Light
		const light = new THREE.PointLight(0xffffff, 100, 100);
		light.position.set(0, 10, 10);
		scene.add(light);

		// Sizes
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		// Camera
		const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
		camera.position.z = 20;

		// Renderer
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(2);
		containerRef.current?.appendChild(renderer.domElement);

		// Controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.enablePan = false;
		controls.enableZoom = false;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 5;

		// Animation Loop
		const animate = () => {
			controls.update();
			renderer.render(scene, camera);
			requestAnimationFrame(animate);
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
			// Cleanup
			window.removeEventListener("resize", handleResize);
			if (containerRef.current?.contains(renderer.domElement)) {
				containerRef.current.removeChild(renderer.domElement);
			}
			renderer.dispose();
		};
	}, []);

	return (
		<body>
			<nav>
				<a href="/">Sphere</a>
				<ul>
					<li>Explore</li>
					<li>Create</li>
				</ul>
			</nav>
      <h1>Give it a Spin!</h1>
			<div ref={containerRef} />
		</body>
	);
}

export default App;
