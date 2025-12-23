import { ROLES } from "./roles"

export const users = [
  {
    id: 1,
    name: "Manager User",
    email: "manager@slooze.xyz",
    password: "123456",
    role: ROLES.MANAGER,
  },
  {
    id: 2,
    name: "Store Keeper",
    email: "store@slooze.xyz",
    password: "123456",
    role: ROLES.STORE_KEEPER,
  },
]
