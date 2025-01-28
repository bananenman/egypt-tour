import type { User } from "~/shared/types";
import { useAuthUser } from "./useAuthUser";

export const useAuth = () => {
  const authUser = useAuthUser();

  const setUser = (user: User | null) => {
    authUser.value = user;
  };

  const register = async (email: string, password: string, rememberMe: boolean) => {
    const data = await $fetch("/auth/register", {
      method: "POST",
      body: {
        email,
        password,
        rememberMe,
      },  
      onResponse({ response }) {
        if(response._data === undefined) {
          window.alert('This email is already being used, please Login or choose a different email.')
          return;
        } 
      }
    });
    setUser(data.user);

    return authUser;
    
  };

  const login = async (email: string, password: string, rememberMe: boolean) => {
    const data = await $fetch("/auth/login", {
      method: "POST",
      body: {
        email,
        password,
        rememberMe,
      },
    });

    setUser(data.user);

    return authUser;
  };

  const logout = async () => {
    const data = await $fetch("/auth/logout", {
      method: "POST",
    });

    setUser(data.user);
  };

  const me = async () => {
    if (!authUser.value) {
      try {
        const data = await $fetch("/auth/me", {
          headers: useRequestHeaders(["cookie"]) as HeadersInit,
        });

        setUser(data.user);
      } catch {
        setUser(null);
      }
    }

    return authUser;
  };

  return {
    register,
    login,
    logout,
    me,
  };
};