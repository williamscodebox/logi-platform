import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrdersList } from '../../domains/orders/hooks/useOrdersList';
import { OrdersTable } from '../../domains/orders/components/OrdersTable';
import type { OrdersListFilters } from '../../domains/orders/types';

const DEFAULT_FILTERS: OrdersListFilters = {
  page: 1,
  pageSize: 25,
};

export function OrdersIndexPage() {
  const [filters, setFilters] = useState<OrdersListFilters>(DEFAULT_FILTERS);
  const { data, isLoading } = useOrdersList(filters);
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Orders</h1>
          <p>Manage sales orders and their fulfillment status.</p>
        </div>
        <button onClick={() => navigate('/orders/new')}>New order</button>
      </header>

      {/* TODO: FilterBar component */}
      {/* <FilterBar ... /> */}

      {isLoading && <div>Loading…</div>}

      {data && (
        <>
          <OrdersTable
            orders={data.items}
            onRowClick={(order) => navigate(`/orders/${order.id}`)}
          />
          {/* TODO: Pagination component */}
        </>
      )}
    </div>
  );
}
