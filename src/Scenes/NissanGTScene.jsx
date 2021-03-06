/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: iSteven (https://sketchfab.com/Steven007)
license: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
source: https://sketchfab.com/3d-models/nissan-gt-r-5f5781614c6f4ff4b7cb1d3cff9d931c
title: Nissan GT-R
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/NissanGT/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={0.012}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[79.04, 34.47, -131.69]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={0.04}
          >
            <mesh
              geometry={nodes.wheel003_tyre_0.geometry}
              material={materials.tyre}
            />
            <mesh
              geometry={nodes.wheel003_sidewal_0.geometry}
              material={materials.sidewal}
            />
            <mesh
              geometry={nodes.wheel003_Material023_0.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              geometry={nodes.wheel003_rim_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.wheel003_Material022_0.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              geometry={nodes.wheel003_Material021_0.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              geometry={nodes.wheel003_blon_0.geometry}
              material={materials.blon}
            />
          </group>
          <group
            position={[75.93, 34.47, -131.69]}
            rotation={[2.87, 0, 0]}
            scale={[1.24, 1.16, 1.16]}
          >
            <mesh
              geometry={nodes.cal003_Material024_0.geometry}
              material={materials["Material.024"]}
            />
          </group>
          <group
            position={[-79.04, 34.47, -131.69]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.04}
          >
            <mesh
              geometry={nodes.wheel002_tyre_0.geometry}
              material={materials.tyre}
            />
            <mesh
              geometry={nodes.wheel002_sidewal_0.geometry}
              material={materials.sidewal}
            />
            <mesh
              geometry={nodes.wheel002_Material023_0.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              geometry={nodes.wheel002_rim_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.wheel002_Material022_0.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              geometry={nodes.wheel002_Material021_0.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              geometry={nodes.wheel002_blon_0.geometry}
              material={materials.blon}
            />
          </group>
          <group
            position={[-75.93, 34.47, -131.69]}
            rotation={[2.87, 0, 0]}
            scale={[-1.24, 1.16, 1.16]}
          >
            <mesh
              geometry={nodes.cal002_Material024_0.geometry}
              material={materials["Material.024"]}
            />
          </group>
          <group
            position={[-74.09, 34.47, 138.94]}
            rotation={[0.27, -0.3, 0.08]}
            scale={[-1.21, 1.21, 1.21]}
          >
            <mesh
              geometry={nodes.cal001_Material024_0.geometry}
              material={materials["Material.024"]}
            />
          </group>
          <group
            position={[-78.22, 34.47, 137.6]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 10]}
            scale={0.04}
          >
            <mesh
              geometry={nodes.wheel001_tyre_0.geometry}
              material={materials.tyre}
            />
            <mesh
              geometry={nodes.wheel001_sidewal_0.geometry}
              material={materials.sidewal}
            />
            <mesh
              geometry={nodes.wheel001_Material023_0.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              geometry={nodes.wheel001_rim_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.wheel001_Material022_0.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              geometry={nodes.wheel001_Material021_0.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              geometry={nodes.wheel001_blon_0.geometry}
              material={materials.blon}
            />
          </group>
          <group position={[0, 40.59, 208.5]} scale={100}>
            <mesh
              geometry={nodes.object011_Material020_0.geometry}
              material={materials["Material.020"]}
            />
          </group>
          <group position={[0, 103.02, -213.44]} scale={100}>
            <mesh
              geometry={nodes.object010_Material012_0.geometry}
              material={materials["Material.012"]}
            />
          </group>
          <group position={[0, 85.25, -202.76]} scale={100}>
            <mesh
              geometry={nodes.object009_Material012_0.geometry}
              material={materials["Material.012"]}
            />
          </group>
          <group position={[0, 85.45, -204.54]} scale={100}>
            <mesh
              geometry={nodes.object008_Material017_0.geometry}
              material={materials["Material.017"]}
            />
          </group>
          <group position={[0, 85.49, -194.83]} scale={100}>
            <mesh
              geometry={nodes.object007_Material012_0.geometry}
              material={materials["Material.012"]}
            />
          </group>
          <group position={[0, 84.6, -201.65]} scale={100}>
            <mesh
              geometry={nodes.object006_Material014_0.geometry}
              material={materials["Material.014"]}
            />
          </group>
          <group position={[0, 81.26, -188.76]} scale={100}>
            <mesh
              geometry={nodes.object005_Material013_0.geometry}
              material={materials["Material.013"]}
            />
          </group>
          <group position={[0, 68.63, 189.5]} scale={100}>
            <mesh
              geometry={nodes.object004_Material015_0.geometry}
              material={materials["Material.015"]}
            />
          </group>
          <group position={[0, 73.62, 179.09]} scale={100}>
            <mesh
              geometry={nodes.object003_Material016_0.geometry}
              material={materials["Material.016"]}
            />
          </group>
          <group position={[0, 111.65, -35.85]} scale={100}>
            <mesh
              geometry={nodes.object_Material004_0.geometry}
              material={materials["Material.004"]}
            />
          </group>
          <group position={[0, 78.76, -1.13]} scale={100}>
            <mesh
              geometry={nodes.object012_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group position={[0, 65.34, 1.61]} scale={100}>
            <mesh
              geometry={nodes.object014_cb_0.geometry}
              material={materials.material_17}
            />
          </group>
          <group position={[0, 49.41, 6.34]} scale={100}>
            <mesh
              geometry={nodes.object015_Material005_0.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <group position={[0, 59.88, 5.13]} scale={100}>
            <mesh
              geometry={nodes.object016_Material010_0.geometry}
              material={materials["Material.010"]}
            />
          </group>
          <group position={[0, 58.36, 1.65]} scale={100}>
            <mesh
              geometry={nodes.object017_Material008_0.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <group position={[-2.08, 80.05, -32.69]} scale={100}>
            <mesh
              geometry={nodes.object019_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[0, 72.85, 174.46]} scale={100}>
            <mesh
              geometry={nodes.object020_Material019_0.geometry}
              material={materials["Material.019"]}
            />
          </group>
          <group position={[0, 85.33, -201.78]} scale={100}>
            <mesh
              geometry={nodes.object021_Material018_0.geometry}
              material={materials["Material.018"]}
            />
          </group>
          <group position={[0.01, 71.13, -3.96]} scale={100}>
            <mesh
              geometry={nodes.object022_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <group position={[0, 72.57, 2.28]} scale={100}>
            <mesh
              geometry={nodes.object001_Material007_0.geometry}
              material={materials["Material.007"]}
            />
          </group>
          <group position={[0, 65.87, 1.16]} scale={100}>
            <mesh
              geometry={nodes.object002_Material009_0.geometry}
              material={materials["Material.009"]}
            />
          </group>
          <group
            position={[74.09, 34.47, 137.6]}
            rotation={[0.27, -0.3, 0.08]}
            scale={1.21}
          >
            <mesh
              geometry={nodes.cal_Material024_0.geometry}
              material={materials["Material.024"]}
            />
          </group>
          <group
            position={[78.22, 34.47, 138.94]}
            rotation={[-Math.PI / 2, 0, 2.83]}
            scale={0.04}
          >
            <mesh
              geometry={nodes.wheel_tyre_0.geometry}
              material={materials.tyre}
            />
            <mesh
              geometry={nodes.wheel_sidewal_0.geometry}
              material={materials.sidewal}
            />
            <mesh
              geometry={nodes.wheel_Material023_0.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              geometry={nodes.wheel_rim_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.wheel_Material022_0.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              geometry={nodes.wheel_Material021_0.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              geometry={nodes.wheel_blon_0.geometry}
              material={materials.blon}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/NissanGT/scene.gltf");
