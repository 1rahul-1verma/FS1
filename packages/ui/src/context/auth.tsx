"use client";

import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";

import { auth } from "@repo/common/firebase";
import { onAuthStateChanged, NextOrObserver, User } from "firebase/auth";

type AuthValue = {
  currentUser?: User;
  loading?: boolean;
};

const AuthContext = createContext<AuthValue>({});

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const initializeUser: NextOrObserver<User> = async (user) => {
      if (user) {
        setCurrentUser({ ...user });
      } else {
        setCurrentUser(undefined);
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, initializeUser);

    return unsubscribe;
  }, []);

  const authValue = useMemo(
    () => ({ currentUser, loading }),
    [currentUser, loading]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
