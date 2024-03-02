export enum AuthPageType {
  LOGIN = "login",
  SIGNUP = "signup",
}

export const TYPE_VS_TILE_MAP: Record<AuthPageType, string> = {
  [AuthPageType.LOGIN]: "Login in to your account",
  [AuthPageType.SIGNUP]: "Create account",
};

export const TYPE_VS_REDIRECT_DESC: Record<AuthPageType, string> = {
  [AuthPageType.LOGIN]: "Don’t have an account yet?",
  [AuthPageType.SIGNUP]: "Already have an account?",
};

export const TYPE_VS_REDIRECT_BUTTON_LABEL: Record<AuthPageType, string> = {
  [AuthPageType.LOGIN]: "Sign Up",
  [AuthPageType.SIGNUP]: "Login",
};

export const TYPE_VS_BUTTON_LABEL: Record<AuthPageType, string> = {
  [AuthPageType.LOGIN]: "Login",
  [AuthPageType.SIGNUP]: "Sign Up",
};
