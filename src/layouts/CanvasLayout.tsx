import React from "react";
import { Canvas } from "@react-three/fiber";
import styled from "@emotion/styled";

interface IProps {
  children: React.ReactNode;
}

export const CanvasLayout = (props: IProps) => {
  return (
    <StyledCanvas>
      <ambientLight position={[1, 1, 1]} />
      {props.children}
    </StyledCanvas>
  );
};

const StyledCanvas = styled(Canvas)`
  height: 90vh !important;
`;
