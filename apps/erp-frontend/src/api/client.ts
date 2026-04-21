import axios from "axios";

export type SummaryResponse = {
  allOrders: number;
};

export const api = {
  getSummary: async (): Promise<SummaryResponse> => {
    const res = await axios.get('/dashboard/summary');
    console.log("Summary loaded:", res);
    console.log("Summary loaded:", res.data);
    return res.data;
  },
};