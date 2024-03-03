import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@repo/ui/auth";

export const useRedirectToHome = () => {
  const { push } = useRouter();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      push("/home");
    }
  }, []);
};
