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
          <th>ID</th>
          <th>Order #</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Order date</th>
          <th>Promised date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr
            key={o.id}
            onClick={() => onRowClick?.(o)}
            style={{ cursor: onRowClick ? 'pointer' : 'default' }}
          >
            <td>{o.id}</td>
            <td>{o.orderNumber}</td>
            <td>{o.customer}</td>
            <td><OrderStatusPill status={o.status} /></td>
            <td>{new Date(o.createdAt).toLocaleDateString()}</td>
            <td>{new Date(o.promisedDate).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
