import { HeroTitle } from "./components/HeroTitle";
import { Navbar } from "./components/Navbar";
import { useSphereScene } from "./hooks/useSphereScene";

function App() {
	const containerRef = useSphereScene();

	return (
		<>
			<Navbar />
			<HeroTitle />
			<div ref={containerRef} />
		</>
	);
}

export default App;
