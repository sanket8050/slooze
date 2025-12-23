export const ROLES = {
  MANAGER: "MANAGER",
  STORE_KEEPER: "STORE_KEEPER",
} as const

export type Role = keyof typeof ROLES
