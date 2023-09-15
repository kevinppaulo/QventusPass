import { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
}

const ValidationList = styled.ul`
  list-style: none;
  padding: 0px;
`;

function Container(props: ContainerProps) {
  return <ValidationList>{props.children}</ValidationList>;
}

export default Container;
