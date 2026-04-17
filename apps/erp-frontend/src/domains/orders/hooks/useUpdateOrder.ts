import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateOrder } from '../api/ordersApi';
import type { Order } from '../types';

export function useUpdateOrder(id: string) {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: Partial<Order>) => updateOrder(id, payload),
    onSuccess: (order) => {
      qc.invalidateQueries({ queryKey: ['orders'] });
      qc.setQueryData(['order', order.id], order);
    },
  });
}
