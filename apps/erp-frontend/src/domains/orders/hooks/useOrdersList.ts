import { useQuery } from '@tanstack/react-query';
import { fetchOrders } from '../api/ordersApi';
import type { OrdersListFilters } from '../types';

export function useOrdersList(filters: OrdersListFilters) {
  return useQuery({
    queryKey: ['orders', filters],
    queryFn: () => fetchOrders(filters),
    keepPreviousData: true,
  });
}
