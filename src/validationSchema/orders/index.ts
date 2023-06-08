import * as yup from 'yup';
import { deliveryValidationSchema } from 'validationSchema/deliveries';
import { orderItemValidationSchema } from 'validationSchema/order-items';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
  delivery: yup.array().of(deliveryValidationSchema),
  order_item: yup.array().of(orderItemValidationSchema),
});
