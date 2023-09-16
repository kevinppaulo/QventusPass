import { ChangeEvent, useState } from "react";
import Container from "../Container";
import PasswordInput from "./PasswordInput";
import Validations from "./validations";

type Validation = {
  title: string;
  validation: (arg0: string) => boolean;
  dataTestId?: string;
};

type PasswordProps = {
  validations: Validation[];
};

function Password(props: PasswordProps) {
  const [userPassword, setPassword] = useState("");
  const { validations } = props;

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <Container>
      <PasswordInput onChange={handleInput} />
      <Validations.Container>
        {validations
          .map(({ validation, ...rest }) => ({ success: validation(userPassword), ...rest }))
          .map((validation, index) => (
            <Validations.Item
              title={validation.title}
              success={validation.success}
              key={index}
              dataTestId={validation.dataTestId}
            />
          ))}
      </Validations.Container>
    </Container>
  );
}

export default Password;
