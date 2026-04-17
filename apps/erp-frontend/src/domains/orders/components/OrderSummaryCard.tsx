import type { Order } from "../types";

interface OrderSummaryCardProps {
  order: Pick<
    Order,
    | "subtotal"
    | "taxTotal"
    | "grandTotal"
    | "currency"
    | "orderDate"
    | "requiredDate"
    | "createdAt"
    | "updatedAt"
  >;
}

export function OrderSummaryCard({ order }: OrderSummaryCardProps) {
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 8,
        padding: 16,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <h3 style={{ margin: 0, fontSize: 16 }}>Summary</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Row label="Subtotal" value={format(order.subtotal, order.currency)} />
        <Row label="Tax" value={format(order.taxTotal, order.currency)} />
        <Row
          label="Total"
          value={format(order.grandTotal, order.currency)}
          bold
        />
      </div>

      <hr />

      <h3 style={{ margin: 0, fontSize: 16 }}>Dates</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Row label="Order date" value={date(order.orderDate)} />
        <Row label="Required" value={date(order.requiredDate)} />
        <Row label="Created" value={date(order.createdAt)} />
        <Row label="Updated" value={date(order.updatedAt)} />
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontWeight: bold ? 600 : 400,
      }}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function format(amount: number, currency: string) {
  return `${amount.toFixed(2)} ${currency}`;
}

function date(iso: string) {
  return new Date(iso).toLocaleString();
}
