# Three.js Experiments

A modern 3D web experiment built with **React**, **TypeScript**, **Three.js**, and **Vite**.

This repository documents my journey of learning and experimenting with Three.js by building interactive 3D experiences for the web. The current version focuses on an animated sphere scene with orbit controls, lighting, and a clean React architecture.

> This project is under development and will continue to evolve with more interactive features.

---

## Features

- Interactive 3D sphere scene
- Auto-rotating OrbitControls (damping enabled)
- Responsive canvas with resize handling
- Point lighting and standard materials
- React UI overlay (navbar + hero title)
- Scene logic isolated in a custom hook
- TypeScript + Vite tooling

---

## Tech Stack

- React 19
- TypeScript
- Three.js
- Vite
- GSAP (available for future animations)
- CSS3

---

## Project Structure

```
src/
├── App.tsx                 # Composes UI + scene
├── main.tsx                # React entry point
├── index.css               # Global styles
├── components/
│   ├── Navbar.tsx
│   └── HeroTitle.tsx
└── hooks/
    └── useSphereScene.ts   # Three.js setup, loop, resize, cleanup
```

> The structure may change as the project grows.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Kiyarash17/threejs-experiments.git
```

Navigate into the project:

```bash
cd threejs-experiments
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Learning Goals

This repository is intended to explore and understand:

- Three.js fundamentals
- Scene management
- Cameras and lighting
- Materials and geometry
- Animation loops
- Responsive rendering
- Performance and cleanup
- Interactive user experiences

Future topics include:

- GLTF models
- HDRI lighting
- Post-processing
- Physics
- Shaders (GLSL)
- Product configurators
- Scroll animations
- React Three Fiber

---

## Roadmap

- [x] Project setup (Vite + React + TypeScript)
- [x] Create scene, camera, and lighting
- [x] Render animated sphere
- [x] OrbitControls + auto-rotate
- [x] Clean architecture (components + hooks)
- [ ] Mouse / pointer interaction
- [ ] Environment maps
- [ ] Load GLTF models
- [ ] Product configurator
- [ ] Advanced materials
- [ ] Post-processing effects
- [ ] Performance optimization
- [ ] Deploy

---

## Contributing

Suggestions and feedback are always welcome.

Feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Author

**Kiyarash**

Frontend developer passionate about building modern, interactive web experiences with React and Three.js.
