import { Auth, AuthPageType } from "@repo/ui/authPage";

const Login = (): JSX.Element => {
  return (
    <Auth type={AuthPageType.LOGIN} onSubmit={() => {}} onRedirect={() => {}} />
  );
};

export default Login;
