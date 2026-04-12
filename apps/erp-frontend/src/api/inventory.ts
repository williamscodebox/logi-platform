import { http } from "./http";

export const getInventory = () =>
  // http.get("/inventory").then(res => res.data);
  http.get("/health").then(res => res.data);
