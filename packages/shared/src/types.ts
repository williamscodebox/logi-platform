// src/types.ts
export type Order = {
  id: string;
  status: "NEW" | "ALLOCATED" | "SHIPPED";
};
