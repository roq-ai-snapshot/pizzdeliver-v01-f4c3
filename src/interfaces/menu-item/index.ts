import { OrderItemInterface } from 'interfaces/order-item';
import { PizzaRestaurantInterface } from 'interfaces/pizza-restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuItemInterface {
  id?: string;
  name: string;
  price: number;
  restaurant_id: string;
  created_at?: Date;
  updated_at?: Date;
  order_item?: OrderItemInterface[];
  pizza_restaurant?: PizzaRestaurantInterface;
  _count?: {
    order_item?: number;
  };
}

export interface MenuItemGetQueryInterface extends GetQueryInterface {
  filter?: {
    id?: string;
    name?: string;
    restaurant_id?: string;
  };
}
