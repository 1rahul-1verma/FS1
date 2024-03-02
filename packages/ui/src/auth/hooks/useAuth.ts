import { useCallback, useState, ChangeEvent } from "react";

export const useAuth = ({
  onSubmit,
}: {
  onSubmit: (p: { email: string; password: string }) => void;
}): {
  email: string;
  password: string;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
} => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const onPasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(() => {
    onSubmit({ email, password });
  }, []);

  return {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit: handleSubmit,
  };
};
