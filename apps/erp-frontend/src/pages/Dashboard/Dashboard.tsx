import { useQuery } from "@tanstack/react-query";
import { KPI } from "../../components/KPI";
import { SkeletonKPI } from "../../components/SkeletonKPI";
import { api } from "../../api/client";

type SummaryResponse = {
  openOrders: number;
  lateShipments: number;
  lowInventory: number;
};

export function Dashboard() {
   const { data, isLoading, isError } = useQuery<SummaryResponse>({
    queryKey: ['summary'],
    queryFn: api.getSummary,
  });

 if (isLoading) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <SkeletonKPI />
      <SkeletonKPI />
      <SkeletonKPI />
    </div>
  );
}


  if (isError || !data) {
    return <div>Failed to load dashboard summary.</div>;
  }

  return (
    <div>
      <KPI label="Open Orders" value={data.openOrders} />
      <KPI label="Late Shipments" value={data.lateShipments} />
      <KPI label="Low Inventory" value={data.lowInventory} />
    </div>
  );
}
