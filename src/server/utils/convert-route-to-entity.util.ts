const mapping: Record<string, string> = {
  deliveries: 'delivery',
  'menu-items': 'menu_item',
  orders: 'order',
  'order-items': 'order_item',
  'pizza-restaurants': 'pizza_restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
