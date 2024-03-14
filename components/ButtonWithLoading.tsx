import React from "react";
import { Button, ButtonProps } from "./ui/button";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  isLoading: boolean;
} & ButtonProps;

const ButtonWithLoading = ({ isLoading, ...props }: Props) => {
  return (
    <Button {...props}>
      {isLoading ? <LoadingSpinner /> : props.children}
    </Button>
  );
};

export default ButtonWithLoading;
