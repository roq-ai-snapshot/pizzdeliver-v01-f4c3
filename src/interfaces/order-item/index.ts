import { MenuItemInterface } from 'interfaces/menu-item';
import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface OrderItemInterface {
  id?: string;
  quantity: number;
  menu_item_id: string;
  order_id: string;
  created_at?: Date;
  updated_at?: Date;

  menu_item?: MenuItemInterface;
  order?: OrderInterface;
  _count?: {};
}

export interface OrderItemGetQueryInterface extends GetQueryInterface {
  filter?: {
    id?: string;
    menu_item_id?: string;
    order_id?: string;
  };
}
