import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { pizzaRestaurantValidationSchema } from 'validationSchema/pizza-restaurants';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getPizzaRestaurants();
    case 'POST':
      return createPizzaRestaurant();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPizzaRestaurants() {
    const data = await prisma.pizza_restaurant
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'pizza_restaurant'));
    return res.status(200).json(data);
  }

  async function createPizzaRestaurant() {
    await pizzaRestaurantValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.menu_item?.length > 0) {
      const create_menu_item = body.menu_item;
      body.menu_item = {
        create: create_menu_item,
      };
    } else {
      delete body.menu_item;
    }
    if (body?.order?.length > 0) {
      const create_order = body.order;
      body.order = {
        create: create_order,
      };
    } else {
      delete body.order;
    }
    const data = await prisma.pizza_restaurant.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
