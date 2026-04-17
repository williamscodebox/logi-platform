export type OrderStatus =
  | 'DRAFT'
  | 'CONFIRMED'
  | 'PICKING'
  | 'SHIPPED'
  | 'INVOICED'
  | 'CANCELLED';

export interface OrderLine {
  id: string;
  sku: string;
  description: string;
  quantity: number;
  unitPrice: number;
  locationId: string | null;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  status: OrderStatus;
  orderDate: string;      // ISO
  requiredDate: string;   // ISO
  currency: string;
  subtotal: number;
  taxTotal: number;
  grandTotal: number;
  lines: OrderLine[];
  createdAt: string;
  updatedAt: string;
}

export interface OrdersListFilters {
  search?: string;
  status?: OrderStatus[];
  dateFrom?: string;
  dateTo?: string;
  page: number;
  pageSize: number;
}

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
