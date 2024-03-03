import { useCallback } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@repo/ui/auth";
import { useRedirectToHome } from "../hooks/useRedirectToHome";

import { Auth, AuthPageType } from "@repo/ui/authPage";

import { signInWithEmailAndPassword } from "@repo/common/auth";

const Login = (): JSX.Element => {
  const { push } = useRouter();
  const { setUser } = useAuth();

  useRedirectToHome();

  const onLogin = useCallback(
    ({ email, password }: { email: string; password: string }) => {
      signInWithEmailAndPassword(email, password)
        .then((userData) => {
          if (userData) {
            setUser(userData.user);
            push("/home");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    []
  );

  const redirectToSignup = useCallback(() => {
    push("/signup");
  }, []);

  return (
    <Auth
      type={AuthPageType.LOGIN}
      onSubmit={onLogin}
      onRedirect={redirectToSignup}
    />
  );
};

export default Login;
