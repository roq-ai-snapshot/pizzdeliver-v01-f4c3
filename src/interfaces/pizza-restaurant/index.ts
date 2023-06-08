import { MenuItemInterface } from 'interfaces/menu-item';
import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PizzaRestaurantInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
  user_id: string;
  tenant_id: string;
  menu_item?: MenuItemInterface[];
  order?: OrderInterface[];
  user?: UserInterface;
  _count?: {
    menu_item?: number;
    order?: number;
  };
}

export interface PizzaRestaurantGetQueryInterface extends GetQueryInterface {
  filter?: {
    id?: string;
    name?: string;
    description?: string;
    image?: string;
    user_id?: string;
    tenant_id?: string;
  };
}
