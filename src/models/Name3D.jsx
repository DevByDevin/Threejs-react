import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Renders a 3D name by composing letter meshes from cyberpunk_font.glb
// Props:
// - text: string to render (letters A-Z are supported)
// - letterSpacing: extra spacing added between letters (model units, before scale). Default 2
// - scale: overall scale applied to the whole word. Default 0.01 to match source
// - position/rotation: standard R3F transform props
export const Name3D = ({
  text = '',
  letterSpacing = 2,
  scale = 0.01,
  ...groupProps
}) => {
  const { nodes, materials } = useGLTF('/models/cyberpunk_font.glb');

  const letters = useMemo(() => {
    if (!text) return [];
    return text.toUpperCase().split('');
  }, [text]);

  // Build centered geometries and their widths so letters can be placed in a single row
  const centered = useMemo(() => {
    const cache = new Map();
    if (!nodes) return cache;

    const getCentered = (key) => {
      if (!nodes[key]) return null;
      if (cache.has(key)) return cache.get(key);

      const original = nodes[key].geometry;
      if (!original) return null;

      const geom = original.clone();
      geom.computeBoundingBox();
      const box = geom.boundingBox || new THREE.Box3();
      const size = new THREE.Vector3();
      box.getSize(size);
      const center = new THREE.Vector3();
      box.getCenter(center);
      // Shift geometry so that:
      // - horizontally centered (x center -> 0)
      // - baseline sits on y = 0 (minY -> 0)
      const minY = box.min.y;
      const translate = new THREE.Matrix4().makeTranslation(
        -center.x,
        -minY,
        -center.z
      );
      geom.applyMatrix4(translate);
      geom.computeBoundingBox();
      const width = size.x; // use pre-translation width

      const result = { geometry: geom, width };
      cache.set(key, result);
      return result;
    };

    return { getCentered };
  }, [nodes]);

  // Precompute positions for each character; spaces advance without geometry
  const positionedLetters = useMemo(() => {
    if (!letters.length || !centered.getCentered) return [];
    const result = [];
    let cursorX = 0;
    for (const ch of letters) {
      if (ch === ' ') {
        cursorX += 8 + letterSpacing; // space advance
        continue;
      }
      const blackKey = `${ch}_black_0`;
      const outlineKey = `${ch}_OL_Mtl_0`;
      const hasBlack = nodes && nodes[blackKey];
      const hasOutline = nodes && nodes[outlineKey];
      if (!hasBlack && !hasOutline) {
        cursorX += 8 + letterSpacing;
        continue;
      }

      const centeredBlack = hasBlack ? centered.getCentered(blackKey) : null;
      const centeredOutline = hasOutline
        ? centered.getCentered(outlineKey)
        : null;
      const width = Math.max(
        centeredBlack?.width || 0,
        centeredOutline?.width || 0,
        8 // minimal width fallback
      );

      result.push({
        ch,
        x: cursorX,
        black: centeredBlack,
        outline: centeredOutline,
      });
      cursorX += width + letterSpacing;
    }
    // Center the word around origin
    const totalWidth = Math.max(0, cursorX - letterSpacing);
    const offsetX = -totalWidth / 2;
    return result.map((it) => ({ ...it, x: it.x + offsetX }));
  }, [letters, nodes, centered, letterSpacing]);

  return (
    <group scale={scale} {...groupProps}>
      {positionedLetters.map(({ ch, x, black, outline }) => (
        <group key={`${ch}-${x}`} position={[x, 0, 0]}>
          {black && (
            <mesh
              castShadow
              receiveShadow
              geometry={black.geometry}
              material={materials.black}
            />
          )}
          {outline && (
            <mesh
              castShadow
              receiveShadow
              geometry={outline.geometry}
              material={materials.OL_Mtl}
            />
          )}
        </group>
      ))}
    </group>
  );
};

useGLTF.preload('/models/cyberpunk_font.glb');
