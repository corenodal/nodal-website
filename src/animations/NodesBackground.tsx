import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Seeded random to keep render pure
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const particleCount = 200;

  const { positions, linePositions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const pts = [];

    // Nodal Blue #1E3F57 -> [30/255, 63/255, 87/255]
    // Violet #7B6EF6 -> [123/255, 110/255, 246/255]

    for (let i = 0; i < particleCount; i++) {
      const x = (seededRandom(i * 3 + 1) - 0.5) * 40;
      const y = (seededRandom(i * 3 + 2) - 0.5) * 40;
      const z = (seededRandom(i * 3 + 3) - 0.5) * 40;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      pts.push(new THREE.Vector3(x, y, z));
      
      // Mix blue and violet randomly (15% violet for AI insight)
      if (seededRandom(i * 3 + 4) > 0.85) {
        colors[i * 3] = 123/255;
        colors[i * 3 + 1] = 110/255;
        colors[i * 3 + 2] = 246/255;
      } else {
        colors[i * 3] = 30/255;
        colors[i * 3 + 1] = 63/255;
        colors[i * 3 + 2] = 87/255;
      }
    }
    
    const linePoss = [];
    // Connect close points
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (pts[i].distanceTo(pts[j]) < 6) {
          linePoss.push(pts[i].x, pts[i].y, pts[i].z);
          linePoss.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    
    return { 
      positions, 
      linePositions: new Float32Array(linePoss),
      colors 
    };
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.02;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.03;
      linesRef.current.rotation.x += delta * 0.02;
    }
    
    // Smooth interactive mouse parallax
    const targetX = state.mouse.x * 2;
    const targetY = state.mouse.y * 2;
    
    if (pointsRef.current) {
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.02;
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.02;
    }
    
    if (linesRef.current) {
      linesRef.current.position.x += (targetX - linesRef.current.position.x) * 0.02;
      linesRef.current.position.y += (targetY - linesRef.current.position.y) * 0.02;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          {/* @ts-expect-error R3F bufferAttribute typing */}
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          {/* @ts-expect-error R3F bufferAttribute typing */}
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.15} vertexColors transparent opacity={0.6} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          {/* @ts-expect-error R3F bufferAttribute typing */}
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#1E3F57" transparent opacity={0.08} />
      </lineSegments>
    </group>
  );
}

export const NodesBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-nodal-white">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={['#F9FAFB', 10, 25]} />
        <NeuralNetwork />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-nodal-white/80" />
    </div>
  );
};
