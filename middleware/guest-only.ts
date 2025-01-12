export default defineNuxtRouteMiddleware(async () => {
    const user = useAuthUser();
  
    if (user.value) {
      if (import.meta.server)
      {
        return '/';
      }
  
      return abortNavigation();
    }
  });