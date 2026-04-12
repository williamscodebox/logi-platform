// src/api/http.ts
import axios from "axios";

export const http = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3000",
});
