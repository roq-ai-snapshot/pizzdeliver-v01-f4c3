import { DeliveryInterface } from 'interfaces/delivery';
import { OrderItemInterface } from 'interfaces/order-item';
import { UserInterface } from 'interfaces/user';
import { PizzaRestaurantInterface } from 'interfaces/pizza-restaurant';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  customer_id: string;
  restaurant_id: string;
  created_at?: Date;
  updated_at?: Date;
  delivery?: DeliveryInterface[];
  order_item?: OrderItemInterface[];
  user?: UserInterface;
  pizza_restaurant?: PizzaRestaurantInterface;
  _count?: {
    delivery?: number;
    order_item?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  filter?: {
    id?: string;
    status?: string;
    customer_id?: string;
    restaurant_id?: string;
  };
}
