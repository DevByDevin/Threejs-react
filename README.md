# Three.js React - Cyberpunk 3D Scene

A modern React application built with Three.js that creates an immersive cyberpunk-themed 3D scene featuring custom 3D text rendering and interactive 3D graphics.

## 🚀 Features

- **3D Text Rendering**: Displays "DEVIN HAN" in 3D with custom letter models
- **Cyberpunk Aesthetics**: Dark theme with neon colors and futuristic lighting
- **Interactive Controls**: Orbit controls for camera manipulation (rotate, zoom)
- **Dynamic Lighting**: Multiple colored point lights creating atmospheric effects
- **Particle Effects**: Sparkles animation for enhanced visual appeal
- **Responsive Design**: Full viewport 3D canvas with gradient background
- **Performance Optimized**: High-performance WebGL rendering with antialiasing

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Vite** - Fast build tool and dev server
- **ESLint** - Code quality and consistency

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Threejs-react
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 Usage

- **Mouse/Touch Controls**:

  - Left click + drag: Rotate camera around the scene
  - Scroll: Zoom in/out
  - Right click + drag: Pan (disabled in current configuration)

- **Scene Elements**:
  - 3D text "DEVIN HAN" at the center
  - Cyberpunk ground plane with metallic material
  - Animated sparkles particles
  - Dynamic colored lighting system

## 🏗️ Project Structure

```
src/
├── App.jsx              # Main application component
├── components/
│   └── CanvasLoader.jsx # Loading component for 3D scene
├── models/
│   ├── cyberpunk_font.tsx # 3D font models
│   └── Name3D.jsx       # 3D text rendering component
└── assets/              # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

The scene can be easily customized by modifying:

- **Text Content**: Change the text in `Name3D` component
- **Colors**: Modify lighting colors and material properties
- **Effects**: Adjust sparkles count, scale, and animation speed
- **Camera**: Change initial position and field of view
- **Lighting**: Add/remove lights or modify their properties

## 🌟 Key Components

### Name3D

Renders 3D text with custom letter spacing and scaling. Each letter is a separate 3D model that can be individually styled and animated.

### CyberpunkGround

A metallic ground plane that reflects the cyberpunk aesthetic with high metalness and low roughness properties.

### Lighting System

Multiple colored point lights positioned strategically to create depth and atmosphere:

- Cyan directional light from above
- Magenta, yellow, green, and purple point lights
- Night environment preset for ambient lighting

## 🚀 Performance Features

- **Suspense**: Lazy loading of 3D models
- **High-performance WebGL**: Optimized rendering settings
- **Antialiasing**: Smooth edges and high-quality graphics
- **Efficient geometry**: Optimized 3D models and materials

## 📱 Browser Support

This application uses modern WebGL features and is compatible with:

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this project.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, Three.js, and modern web technologies**
