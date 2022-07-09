import { Heading } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Heading color="gray.600" textAlign={"center"}>
        Hello world
      </Heading>
      <Canvas style={{ backgroundColor: "black", height: "50vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh position={[1, 1, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </Canvas>
    </>
  );
};

export default Home;
