export default defineNuxtRouteMiddleware(async () => {
    const user = useAuthUser();
  
    if (!user.value) {
      return '/users/register';
    } 
  });