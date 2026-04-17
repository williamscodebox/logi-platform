import { useParams } from 'react-router-dom';
import { useOrder } from '../../domains/orders/hooks/useOrder';
import { OrderStatusPill } from '../../domains/orders/components/OrderStatusPill';

export function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: order, isLoading } = useOrder(id);

  if (isLoading) return <div>Loading…</div>;
  if (!order) return <div>Order not found</div>;

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>{order.orderNumber}</h1>
          <p>{order.customerName}</p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <OrderStatusPill status={order.status} />
          <button>Edit</button>
          <button>Approve</button>
          <button>Cancel</button>
        </div>
      </header>

      <section className="order-layout">
        <div className="order-main">
          <h2>Lines</h2>
          <table>
            <thead>
              <tr>
                <th>SKU</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Unit price</th>
                <th>Line total</th>
              </tr>
            </thead>
            <tbody>
              {order.lines.map((line) => (
                <tr key={line.id}>
                  <td>{line.sku}</td>
                  <td>{line.description}</td>
                  <td>{line.quantity}</td>
                  <td>{line.unitPrice.toFixed(2)}</td>
                  <td>{(line.quantity * line.unitPrice).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="order-sidebar">
          <h3>Summary</h3>
          <div>Subtotal: {order.subtotal.toFixed(2)} {order.currency}</div>
          <div>Tax: {order.taxTotal.toFixed(2)} {order.currency}</div>
          <div><strong>Total: {order.grandTotal.toFixed(2)} {order.currency}</strong></div>

          <h3>Meta</h3>
          <div>Order date: {new Date(order.orderDate).toLocaleString()}</div>
          <div>Required: {new Date(order.requiredDate).toLocaleString()}</div>
          <div>Created: {new Date(order.createdAt).toLocaleString()}</div>
          <div>Updated: {new Date(order.updatedAt).toLocaleString()}</div>
        </aside>
      </section>
    </div>
  );
}
