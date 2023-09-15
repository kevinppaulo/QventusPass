import { ReactNode } from "react";
import FlexContainer from "./Container.styled";

interface ContainerProps {
  children: ReactNode;
}

function Container(props: ContainerProps) {
  return <FlexContainer> {props.children} </FlexContainer>;
}

export default Container;
