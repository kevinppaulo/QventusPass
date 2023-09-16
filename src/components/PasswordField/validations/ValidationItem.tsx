import styled from "styled-components";

export interface ValidationItemProps {
  title: string;
  success: boolean;
  dataTestId?: string;
}

type IconProps = {
  variant?: "success" | "error";
};

const Icon = styled.span`
  background-color: ${(props: IconProps) =>
    props.variant == "success" ? "green" : "red"};
  color: white;
  padding: 2rem;
  clip-path: circle(20%);
`;

const ListItem = styled.li`
  line-height: 2rem;
  margin: 1rem 0rem;
`;

function ValidationItem(props: ValidationItemProps) {
  const { title, success } = props;
  const variant = success ? "success" : "error";
  const iconContent = success ? "✔" : "x";
  return (
    <ListItem>
      <Icon data-testid={props.dataTestId} variant={variant}>{iconContent}</Icon>
      {title}
    </ListItem>
  );
}

export default ValidationItem;
