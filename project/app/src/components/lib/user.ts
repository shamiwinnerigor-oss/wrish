export type UserRole = "business" | "user";

export const currentUser = {
  id: "1",
  name: "Demo User",
  role: "business" as UserRole,
};