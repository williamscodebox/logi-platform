import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateOrder } from '../../domains/orders/hooks/useCreateOrder';
import type { Order } from '../../domains/orders/types';

type CreateOrderForm = {
  customerId: string;
  customerName: string;
  orderDate: string;
  requiredDate: string;
  currency: string;
};

export function OrderCreatePage() {
  const { register, handleSubmit } = useForm<CreateOrderForm>({
    defaultValues: {
      orderDate: new Date().toISOString().slice(0, 10),
      requiredDate: new Date().toISOString().slice(0, 10),
      currency: 'USD',
    },
  });

  const navigate = useNavigate();
  const createOrder = useCreateOrder();

  const onSubmit = (values: CreateOrderForm) => {
    const payload: Partial<Order> = {
      ...values,
      status: 'DRAFT',
      lines: [],
    };

    createOrder.mutate(payload, {
      onSuccess: (order) => {
        navigate(`/orders/${order.id}`);
      },
    });
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>New order</h1>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Customer ID
          <input {...register('customerId', { required: true })} />
        </label>

        <label>
          Customer name
          <input {...register('customerName', { required: true })} />
        </label>

        <label>
          Order date
          <input type="date" {...register('orderDate', { required: true })} />
        </label>

        <label>
          Required date
          <input type="date" {...register('requiredDate', { required: true })} />
        </label>

        <label>
          Currency
          <input {...register('currency', { required: true })} />
        </label>

        <div className="form-actions">
          <button type="button" onClick={() => navigate('/orders')}>
            Cancel
          </button>
          <button type="submit" disabled={createOrder.isPending}>
            {createOrder.isPending ? 'Creating…' : 'Create order'}
          </button>
        </div>
      </form>
    </div>
  );
}
