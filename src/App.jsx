import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sparkles } from '@react-three/drei';
import { CyberpunkFont } from './models/cyberpunk_font';
import { CanvasLoader } from './components/CanvasLoader';
import { Name3D } from './models/Name3D';
// 赛博朋克地面
const CyberpunkGround = () => {
  return (
    <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial
        color='#0a0a0a'
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh',
        background:
          'linear-gradient(135deg, #000000 0%, #1a0033 20%, #330066 40%, #6600cc 60%, #9900ff 80%, #cc00ff 100%)',
      }}
      camera={{ position: [0, 8, 20], fov: 60 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableRotate={true}
          enableZoom={true}
          autoRotate={false}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />

        {/* 赛博朋克环境光照 */}
        <Environment preset='night' />
        <ambientLight intensity={0.1} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.4}
          color='#00ffff'
        />
        <pointLight position={[0, 10, 0]} intensity={0.6} color='#ff00ff' />
        <pointLight position={[-6, 5, 0]} intensity={0.5} color='#ffff00' />
        <pointLight position={[6, 5, 0]} intensity={0.5} color='#00ff00' />
        <pointLight position={[0, -5, 0]} intensity={0.3} color='#8000ff' />

        {/* 赛博朋克特效 */}
        <Sparkles
          count={150}
          scale={25}
          size={2}
          speed={0.6}
          opacity={0.9}
          color='#00ffff'
        />

        {/* 渲染名字，使用字母模型 */}
        <Name3D
          text={'DEVIN HAN'}
          position={[0, 0, 0]}
          scale={0.01}
          letterSpacing={12}
        />

        {/* 若仍想渲染完整字母表，可保留 */}
        {/* <CyberpunkFont /> */}
        <CyberpunkGround />
      </Suspense>
    </Canvas>
  );
};

export default App;
