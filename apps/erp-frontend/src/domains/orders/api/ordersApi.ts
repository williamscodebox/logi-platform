import type { OrdersListFilters, Paginated, Order } from '../types';

const BASE_URL = '/api/orders';

export async function fetchOrders(
  filters: OrdersListFilters
): Promise<Paginated<Order>> {
  const params = new URLSearchParams();

  if (filters.search) params.set('search', filters.search);
  if (filters.status?.length) params.set('status', filters.status.join(','));
  if (filters.dateFrom) params.set('dateFrom', filters.dateFrom);
  if (filters.dateTo) params.set('dateTo', filters.dateTo);
  params.set('page', String(filters.page));
  params.set('pageSize', String(filters.pageSize));

  const res = await fetch(`${BASE_URL}?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch orders');
  return res.json();
}

export async function fetchOrder(id: string): Promise<Order> {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch order');
  return res.json();
}

export async function createOrder(payload: Partial<Order>): Promise<Order> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create order');
  return res.json();
}

export async function updateOrder(
  id: string,
  payload: Partial<Order>
): Promise<Order> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to update order');
  return res.json();
}
