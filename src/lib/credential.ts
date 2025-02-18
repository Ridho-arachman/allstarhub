import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/db/user";

export async function authenticateUser(email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user) return null;

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) return null;

  return { id: user.id, username: user.username, email: user.email };
}

authenticateUser("email", "password");
