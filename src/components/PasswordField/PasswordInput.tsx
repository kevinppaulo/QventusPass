import { ChangeEvent } from "react";

type PasswordInputProps = {
  onChange?: (arg0: ChangeEvent<HTMLInputElement>) => void;
};

function PasswordInput(props: PasswordInputProps) {
  return (
    <input
      onChange={props.onChange}
      type="password"
      placeholder="Start typing here"
    />
  );
}

export default PasswordInput;
