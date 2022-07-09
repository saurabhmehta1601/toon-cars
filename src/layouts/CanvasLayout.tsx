import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "@emotion/styled";
import { OrbitControls } from "@react-three/drei";

interface IProps {
  children: React.ReactNode;
}

export const CanvasLayout = (props: IProps) => {
  return (
    <StyledCanvas>
      <ambientLight position={[1, 1, 1]} />

      <Suspense fallback={null}>{props.children}</Suspense>

      <OrbitControls />
    </StyledCanvas>
  );
};

const StyledCanvas = styled(Canvas)`
  height: 90vh !important;
`;
