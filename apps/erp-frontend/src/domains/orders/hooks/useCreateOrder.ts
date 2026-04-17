import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder } from '../api/ordersApi';
import type { Order } from '../types';

export function useCreateOrder() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: Partial<Order>) => createOrder(payload),
    onSuccess: (order) => {
      qc.invalidateQueries({ queryKey: ['orders'] });
      qc.setQueryData(['order', order.id], order);
    },
  });
}
