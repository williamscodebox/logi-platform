import { useQuery } from '@tanstack/react-query';
import { fetchOrders } from '../api/ordersApi';
import type { OrdersListFilters, Order } from '../types';

type OrdersListResponse = {
  items: Order[];
  total: number;
  page: number;
  pageSize: number;
};

export function useOrdersList(filters: OrdersListFilters) {
  return useQuery<OrdersListResponse>({
    queryKey: ['orders', filters],
    queryFn: () => fetchOrders(filters),
    placeholderData: (prev) => prev,
  });
}
