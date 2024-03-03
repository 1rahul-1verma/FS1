import { useCallback } from "react";
import { useRouter } from "next/router";

import { useRedirectToHome } from "../hooks/useRedirectToHome";

import { Auth, AuthPageType } from "@repo/ui/authPage";

import { createUserWithEmailAndPassword } from "@repo/common/auth";

const Signup = (): JSX.Element => {
  const { push } = useRouter();

  useRedirectToHome();

  const onSignup = useCallback(
    ({ email, password }: { email: string; password: string }) => {
      createUserWithEmailAndPassword(email, password)
        .then(() => {
          push("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    []
  );

  const redirectToLogin = useCallback(() => {
    push("/login");
  }, []);

  return (
    <Auth
      type={AuthPageType.SIGNUP}
      onSubmit={onSignup}
      onRedirect={redirectToLogin}
    />
  );
};

export default Signup;
