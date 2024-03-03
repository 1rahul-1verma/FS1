import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useContext,
  useCallback,
} from "react";
import { useRouter } from "next/router";

import { auth } from "@repo/common/firebase";
import { onAuthStateChanged, NextOrObserver, User } from "firebase/auth";

type AuthValue = {
  currentUser?: User;
  loading?: boolean;
  setUser: (user: User) => void;
};

const AuthContext = createContext<AuthValue>({ setUser: () => {} });

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  useEffect(() => {
    setLoading(true);
    const initializeUser: NextOrObserver<User> = async (user) => {
      if (user) {
        setCurrentUser({ ...user });
      } else {
        push("/login");
        setCurrentUser(undefined);
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, initializeUser);

    return unsubscribe;
  }, []);

  const setUser = useCallback((user: User) => {
    setCurrentUser(user);
  }, []);

  const authValue = useMemo(
    () => ({ currentUser, loading, setUser }),
    [currentUser, loading]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
