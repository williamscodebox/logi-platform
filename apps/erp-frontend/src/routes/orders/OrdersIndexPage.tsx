import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrdersList } from '../../domains/orders/hooks/useOrdersList';
import { OrdersTable } from '../../domains/orders/components/OrdersTable';
import type { OrdersListFilters } from '../../domains/orders/types';
import { Pagination } from '../../domains/orders/components/Pagination';
import './orders.css';

const DEFAULT_FILTERS: OrdersListFilters = {
  page: 1,
  pageSize: 25,
};

export function OrdersIndexPage() {
  const [filters, setFilters] = useState<OrdersListFilters>(DEFAULT_FILTERS);
  const { data, isLoading, error } = useOrdersList(filters);
  const navigate = useNavigate();

  const items = data?.items ?? [];
  const total = data?.total ?? 0;

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
      {error && <div className="error">Failed to load orders.</div>}



      {!isLoading && !error && (
        <>
          <div className='page-content'>
            <OrdersTable
              orders={items}
              onRowClick={(order) => navigate(`/orders/${order.id}`)}
            />
          </div>
          <Pagination
          page={filters.page}
          pageSize={filters.pageSize}
          total={total}
          onChange={(page) => setFilters((f) => ({ ...f, page }))}
          /> 
        </>
      )}
    </div>
  );
}
