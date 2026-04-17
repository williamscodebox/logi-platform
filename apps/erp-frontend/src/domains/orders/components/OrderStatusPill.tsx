import type { OrderStatus } from '../types';

const STATUS_COLORS: Record<OrderStatus, string> = {
  DRAFT: '#64748b',
  CONFIRMED: '#0ea5e9',
  PICKING: '#f97316',
  SHIPPED: '#22c55e',
  INVOICED: '#4f46e5',
  CANCELLED: '#ef4444',
};

export function OrderStatusPill({ status }: { status: OrderStatus }) {
  return (
    <span
      style={{
        padding: '2px 8px',
        borderRadius: 999,
        fontSize: 12,
        backgroundColor: `${STATUS_COLORS[status]}22`,
        color: STATUS_COLORS[status],
        fontWeight: 500,
      }}
    >
      {status}
    </span>
  );
}
