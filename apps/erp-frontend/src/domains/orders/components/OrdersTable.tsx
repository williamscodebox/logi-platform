import type { Order } from '../types';
import { OrderStatusPill } from './OrderStatusPill';

interface OrdersTableProps {
  orders: Order[];
  onRowClick?: (order: Order) => void;
}

export function OrdersTable({ orders, onRowClick }: OrdersTableProps) {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Order #</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Order date</th>
          <th>Required date</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr
            key={o.id}
            onClick={() => onRowClick?.(o)}
            style={{ cursor: onRowClick ? 'pointer' : 'default' }}
          >
            <td>{o.orderNumber}</td>
            <td>{o.customerName}</td>
            <td><OrderStatusPill status={o.status} /></td>
            <td>{new Date(o.orderDate).toLocaleDateString()}</td>
            <td>{new Date(o.requiredDate).toLocaleDateString()}</td>
            <td>{o.grandTotal.toFixed(2)} {o.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
