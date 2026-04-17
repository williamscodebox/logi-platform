import { useQuery } from '@tanstack/react-query';
import { fetchOrder } from '../api/ordersApi';

export function useOrder(id: string | undefined) {
  return useQuery({
    queryKey: ['order', id],
    queryFn: () => {
      if (!id) throw new Error('Order id is required');
      return fetchOrder(id);
    },
    enabled: !!id,
  });
}
