/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: RC-Studios (https://sketchfab.com/RC-Studios)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/c5-game-optimized-car-9137b34ba84b4413a5ccf073649e6132
title: C5 - Game optimized car
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/C5/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Car_body}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.Carbon_fiber}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials.Spoiler}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Carbon_fiber}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Light_glass}
          />
          <group position={[0.02, 0.01, 0.06]} scale={0.97}>
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials.Brake_pad}
            />
          </group>
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials.Windows}
          />
          <group position={[0.8, 0.33, 1.72]} scale={[0.32, 0.36, 0.36]}>
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials.material}
            />
          </group>
          <group position={[0.8, 0.33, 1.72]} scale={0.78}>
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials.tire}
            />
          </group>
          <group position={[0.02, 0.01, -2.81]} scale={0.97}>
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_22.geometry}
              material={materials.Brake_pad}
            />
          </group>
          <group position={[0.8, 0.33, -1.15]} scale={[0.32, 0.36, 0.36]}>
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.material}
            />
          </group>
          <group position={[0.8, 0.33, -1.15]} scale={0.78}>
            <mesh
              geometry={nodes.Object_26.geometry}
              material={materials.tire}
            />
          </group>
          <group position={[-0.02, 0.01, 0.06]} scale={[-0.97, 0.97, 0.97]}>
            <mesh
              geometry={nodes.Object_28.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_29.geometry}
              material={materials.Brake_pad}
            />
          </group>
          <group position={[-0.8, 0.33, 1.72]} scale={[-0.32, 0.36, 0.36]}>
            <mesh
              geometry={nodes.Object_31.geometry}
              material={materials.material}
            />
          </group>
          <group position={[-0.8, 0.33, 1.72]} scale={[-0.78, 0.78, 0.78]}>
            <mesh
              geometry={nodes.Object_33.geometry}
              material={materials.tire}
            />
          </group>
          <group position={[-0.02, 0.01, -2.81]} scale={[-0.97, 0.97, 0.97]}>
            <mesh
              geometry={nodes.Object_35.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_36.geometry}
              material={materials.Brake_pad}
            />
          </group>
          <group position={[-0.8, 0.33, -1.15]} scale={[-0.32, 0.36, 0.36]}>
            <mesh
              geometry={nodes.Object_38.geometry}
              material={materials.material}
            />
          </group>
          <group position={[-0.8, 0.33, -1.15]} scale={[-0.78, 0.78, 0.78]}>
            <mesh
              geometry={nodes.Object_40.geometry}
              material={materials.tire}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/C5/scene.gltf");
