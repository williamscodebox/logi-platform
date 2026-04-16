import axios from "axios";

type SummaryResponse = {
  openOrders: number;
  lateShipments: number;
  lowInventory: number;
};

export const api = {
  getSummary: async (): Promise<SummaryResponse> => {
    const res = await axios.get('/dashboard/summary');
    console.log("Summary loaded:", res);
    console.log("Summary loaded:", res.data);
    return res.data;
  },
};