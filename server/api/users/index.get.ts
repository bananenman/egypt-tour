import { findAllUsers } from "../../lib/user";

export default defineEventHandler(async (event) => {

  const usersWithPassword = await findAllUsers();

  const usersWithoutPassword = usersWithPassword.map(({ password, ...user }) => user);

  return usersWithoutPassword;
});